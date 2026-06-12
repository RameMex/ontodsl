// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for BloodSugarSensorComponent. Runtime: string. Compile-time: branded. */
export type BloodSugarSensorComponentId = string & { readonly __brand: "BloodSugarSensorComponentId" };
/** Identity type for PumpActuatorComponent. Runtime: string. Compile-time: branded. */
export type PumpActuatorComponentId = string & { readonly __brand: "PumpActuatorComponentId" };
/** Identity type for DoseCalculatorComponent. Runtime: string. Compile-time: branded. */
export type DoseCalculatorComponentId = string & { readonly __brand: "DoseCalculatorComponentId" };
/** Identity type for AlarmManagerComponent. Runtime: string. Compile-time: branded. */
export type AlarmManagerComponentId = string & { readonly __brand: "AlarmManagerComponentId" };
/** Identity type for SelfTestControllerComponent. Runtime: string. Compile-time: branded. */
export type SelfTestControllerComponentId = string & { readonly __brand: "SelfTestControllerComponentId" };
/** Identity type for ControllerComponent. Runtime: string. Compile-time: branded. */
export type ControllerComponentId = string & { readonly __brand: "ControllerComponentId" };
/** Identity type for SensorControllerChannel. Runtime: string. Compile-time: branded. */
export type SensorControllerChannelId = string & { readonly __brand: "SensorControllerChannelId" };
/** Identity type for CalculatorControllerChannel. Runtime: string. Compile-time: branded. */
export type CalculatorControllerChannelId = string & { readonly __brand: "CalculatorControllerChannelId" };
/** Identity type for ControllerActuatorChannel. Runtime: string. Compile-time: branded. */
export type ControllerActuatorChannelId = string & { readonly __brand: "ControllerActuatorChannelId" };
/** Identity type for AlarmControllerChannel. Runtime: string. Compile-time: branded. */
export type AlarmControllerChannelId = string & { readonly __brand: "AlarmControllerChannelId" };
/** Identity type for SelfTestControllerChannel. Runtime: string. Compile-time: branded. */
export type SelfTestControllerChannelId = string & { readonly __brand: "SelfTestControllerChannelId" };
/** Identity type for SensorReadingFlow. Runtime: string. Compile-time: branded. */
export type SensorReadingFlowId = string & { readonly __brand: "SensorReadingFlowId" };
/** Identity type for DoseCalculationFlow. Runtime: string. Compile-time: branded. */
export type DoseCalculationFlowId = string & { readonly __brand: "DoseCalculationFlowId" };
/** Identity type for InsulinDeliveryFlow. Runtime: string. Compile-time: branded. */
export type InsulinDeliveryFlowId = string & { readonly __brand: "InsulinDeliveryFlowId" };
/** Identity type for SelfTestFlow. Runtime: string. Compile-time: branded. */
export type SelfTestFlowId = string & { readonly __brand: "SelfTestFlowId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for RegulatoryAgency. Runtime: string. Compile-time: branded. */
export type RegulatoryAgencyId = string & { readonly __brand: "RegulatoryAgencyId" };
/** Identity type for PumpVendor. Runtime: string. Compile-time: branded. */
export type PumpVendorId = string & { readonly __brand: "PumpVendorId" };
/** Identity type for CorrectDoseCommitment. Runtime: string. Compile-time: branded. */
export type CorrectDoseCommitmentId = string & { readonly __brand: "CorrectDoseCommitmentId" };
/** Identity type for FailSafeCommitment. Runtime: string. Compile-time: branded. */
export type FailSafeCommitmentId = string & { readonly __brand: "FailSafeCommitmentId" };
/** Identity type for AlertCommitment. Runtime: string. Compile-time: branded. */
export type AlertCommitmentId = string & { readonly __brand: "AlertCommitmentId" };
/** Identity type for RegulatoryCommitment. Runtime: string. Compile-time: branded. */
export type RegulatoryCommitmentId = string & { readonly __brand: "RegulatoryCommitmentId" };
/** Identity type for BloodSugarReading. Runtime: string. Compile-time: branded. */
export type BloodSugarReadingId = string & { readonly __brand: "BloodSugarReadingId" };
/** Identity type for InsulinReservoir. Runtime: string. Compile-time: branded. */
export type InsulinReservoirId = string & { readonly __brand: "InsulinReservoirId" };
/** Identity type for InsulinDose. Runtime: string. Compile-time: branded. */
export type InsulinDoseId = string & { readonly __brand: "InsulinDoseId" };
/** Identity type for SafeZone. Runtime: string. Compile-time: branded. */
export type SafeZoneId = string & { readonly __brand: "SafeZoneId" };
/** Identity type for SelfTest. Runtime: string. Compile-time: branded. */
export type SelfTestId = string & { readonly __brand: "SelfTestId" };
/** Identity type for HardwareAlarm. Runtime: string. Compile-time: branded. */
export type HardwareAlarmId = string & { readonly __brand: "HardwareAlarmId" };
/** Identity type for DoseDeliveryFlow. Runtime: string. Compile-time: branded. */
export type DoseDeliveryFlowId = string & { readonly __brand: "DoseDeliveryFlowId" };
/** Identity type for InsulinPumpSystem. Runtime: string. Compile-time: branded. */
export type InsulinPumpSystemId = string & { readonly __brand: "InsulinPumpSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface BloodSugarSensorComponent {
  readonly sensorId: BloodSugarSensorComponentId;
  readonly lastReading: number;
  readonly lastRisingRate: number;
  readonly sensorFaultDetected: boolean;
  readonly operating: boolean;
}

/** @stereotype <<Kind>> */
export interface PumpActuatorComponent {
  readonly actuatorId: PumpActuatorComponentId;
  readonly reservoirUnits: number;
  readonly pumpActive: boolean;
  readonly pumpFaultDetected: boolean;
}

/** @stereotype <<Kind>> */
export interface DoseCalculatorComponent {
  readonly calculatorId: DoseCalculatorComponentId;
  readonly safeMaxDose: number;
  readonly safeLowerBound: number;
  readonly safeUpperBound: number;
  readonly lastCalculatedDose: number;
  readonly algorithmMethod: string;
}

/** @stereotype <<Kind>> */
export interface AlarmManagerComponent {
  readonly alarmId: AlarmManagerComponentId;
  readonly hardwareAlarmActive: boolean;
  readonly lowReservoirAlarmActive: boolean;
  readonly alarmMessage: string;
  readonly acknowledged: boolean;
}

/** @stereotype <<Kind>> */
export interface SelfTestControllerComponent {
  readonly testId: SelfTestControllerComponentId;
  readonly lastTestPassed: boolean;
  readonly testIntervalSec: number;
  readonly lastTestTimestampSec: number;
  readonly testRunning: boolean;
}

/** @stereotype <<Kind>> */
export interface ControllerComponent {
  readonly controllerId: ControllerComponentId;
  readonly systemOperating: boolean;
  readonly systemFaultDetected: boolean;
  readonly state: string;
  readonly lastDoseDelivered: number;
  readonly doseCount: number;
  readonly safeLowerBound: number;
  readonly safeUpperBound: number;
}

/** @stereotype <<Role>> */
export interface SensorEndpoint {
  readonly sensorId: string;
  readonly lastReading: number;
  readonly sensorFaultDetected: boolean;
}

/** @stereotype <<Role>> */
export interface ControllerSensorEndpoint {
  readonly controllerId: string;
  readonly state: string;
}

/** @stereotype <<Relator>> */
export interface SensorControllerChannel {
  readonly channelId: SensorControllerChannelId;
  readonly lastTransmissionTimestamp: number;
  readonly transmissionFaultDetected: boolean;
}

/** @stereotype <<Role>> */
export interface CalculatorEndpoint {
  readonly calculatorId: string;
  readonly lastCalculatedDose: number;
  readonly algorithmMethod: string;
}

/** @stereotype <<Role>> */
export interface ControllerCalcEndpoint {
  readonly controllerId: string;
  readonly state: string;
}

/** @stereotype <<Relator>> */
export interface CalculatorControllerChannel {
  readonly channelId: CalculatorControllerChannelId;
  readonly lastTransmissionTimestamp: number;
}

/** @stereotype <<Role>> */
export interface ControllerActuatorEndpoint {
  readonly controllerId: string;
  readonly state: string;
  readonly lastDoseDelivered: number;
}

/** @stereotype <<Role>> */
export interface ActuatorEndpoint {
  readonly actuatorId: string;
  readonly pumpActive: boolean;
  readonly pumpFaultDetected: boolean;
  readonly reservoirUnits: number;
}

/** @stereotype <<Relator>> */
export interface ControllerActuatorChannel {
  readonly channelId: ControllerActuatorChannelId;
  readonly lastCommandTimestamp: number;
  readonly commandFaultDetected: boolean;
}

/** @stereotype <<Role>> */
export interface AlarmEndpoint {
  readonly alarmId: string;
  readonly hardwareAlarmActive: boolean;
  readonly lowReservoirAlarmActive: boolean;
  readonly acknowledged: boolean;
}

/** @stereotype <<Role>> */
export interface ControllerAlarmEndpoint {
  readonly controllerId: string;
  readonly systemFaultDetected: boolean;
  readonly state: string;
}

/** @stereotype <<Relator>> */
export interface AlarmControllerChannel {
  readonly channelId: AlarmControllerChannelId;
}

/** @stereotype <<Role>> */
export interface SelfTestEndpoint {
  readonly testId: string;
  readonly lastTestPassed: boolean;
  readonly testRunning: boolean;
}

/** @stereotype <<Role>> */
export interface ControllerSelfTestEndpoint {
  readonly controllerId: string;
  readonly systemFaultDetected: boolean;
}

/** @stereotype <<Relator>> */
export interface SelfTestControllerChannel {
  readonly channelId: SelfTestControllerChannelId;
}

/** @stereotype <<Happening>> */
export interface SensorReadingFlow {
  readonly flowId: SensorReadingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface DoseCalculationFlow {
  readonly flowId: DoseCalculationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface InsulinDeliveryFlow {
  readonly flowId: InsulinDeliveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SelfTestFlow {
  readonly flowId: SelfTestFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly hasDiabetes: boolean;
  readonly bloodSugar: number;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface RegulatoryAgency {
  readonly agencyId: RegulatoryAgencyId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface PumpVendor {
  readonly vendorId: PumpVendorId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface CorrectDoseCommitment {
  readonly commitmentId: CorrectDoseCommitmentId;
  readonly safeMaxDoseUnits: number;
}

/** @stereotype <<Commitment>> */
export interface FailSafeCommitment {
  readonly commitmentId: FailSafeCommitmentId;
  readonly faultDetectionLatencySec: number;
}

/** @stereotype <<Commitment>> */
export interface AlertCommitment {
  readonly commitmentId: AlertCommitmentId;
  readonly notificationLatencySec: number;
}

/** @stereotype <<Commitment>> */
export interface RegulatoryCommitment {
  readonly commitmentId: RegulatoryCommitmentId;
  readonly complianceRating: number;
}

/** @stereotype <<Category>> */
export interface DoseSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface HardwareFaultSafety {
}

/** @stereotype <<Category>> */
export interface AlertingRequirements {
}

/** @stereotype <<Kind>> */
export interface BloodSugarReading {
  readonly readingId: BloodSugarReadingId;
  readonly valueMgDl: number;
}

/** @stereotype <<Kind>> */
export interface InsulinReservoir {
  readonly reservoirId: InsulinReservoirId;
  readonly capacityUnits: number;
  readonly currentUnits: number;
}

/** @stereotype <<Kind>> */
export interface InsulinDose {
  readonly doseId: InsulinDoseId;
  readonly units: number;
}

/** @stereotype <<Kind>> */
export interface SafeZone {
  readonly zoneId: SafeZoneId;
  readonly lowerBoundMgDl: number;
  readonly upperBoundMgDl: number;
}

/** @stereotype <<Kind>> */
export interface SelfTest {
  readonly testId: SelfTestId;
  readonly passed: boolean;
}

/** @stereotype <<Kind>> */
export interface HardwareAlarm {
  readonly alarmId: HardwareAlarmId;
  readonly active: boolean;
  readonly message: string;
}

/** @stereotype <<Happening>> */
export interface DoseDeliveryFlow {
  readonly flowId: DoseDeliveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface InsulinPumpSystem extends DoseSafetyConstraints, HardwareFaultSafety, AlertingRequirements {
  readonly systemId: InsulinPumpSystemId;
  readonly safeMaxDose: number;
  readonly reservoirUnits: number;
  readonly currentBloodSugar: number;
  readonly bloodSugarRising: number;
  readonly isOperating: boolean;
  readonly faultDetected: boolean;
  readonly lowReservoir: boolean;
  readonly alarmActive: boolean;
  readonly lastSelfTestPassed: boolean;
  readonly selfTestIntervalSec: number;
  readonly safeLowerBound: number;
  readonly safeUpperBound: number;
}

/** @stereotype <<Category>> */
export interface Iec62304ClassC {
  readonly ieceeCertificateId: string;
  readonly softwareSafetyClass: string;
  readonly riskAssessmentDate: string;
}

/** @stereotype <<Category>> */
export interface Fda510kCleared {
  readonly fda510kNumber: string;
  readonly indicationsForUse: string;
  readonly clearedDate: string;
}

/** @stereotype <<Category>> */
export interface Iso13485Compliant {
  readonly qualitySystemCertificate: string;
  readonly certificationBody: string;
  readonly expiryDate: string;
}

/** @stereotype <<Category>> */
export interface AamiIec60601Compliant {
  readonly complianceStandard: string;
  readonly electricalSafetyClass: string;
  readonly emcTestDate: string;
}

/** @stereotype <<Category>> */
export interface HipaaCoveredEntity {
  readonly businessAssociateAgreement: string;
  readonly privacyOfficerContact: string;
  readonly lastPrivacyAuditDate: string;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleReadings {
}

/** @stereotype <<Category>> */
export interface ReservoirMassBalance {
}

/** @stereotype <<Category>> */
export interface DoseProportionalityConstraint {
}

/** @stereotype <<Category>> */
export interface AlarmDurability {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly sensorAccuracyStatement: string;
  readonly insulinConcentration: string;
  readonly alarmResponseAssumption: string;
  readonly timingSynchronization: string;
  readonly regulatoryVersionLock: string;
}

/** @stereotype <<Subkind>> */
export interface InsulinPumpSystemFormalized extends InsulinPumpSystem {
  readonly regulatoryAuditLog: string;
  readonly lastComplianceCheckDate: string;
  readonly runtimeFaultCount: number;
}


// ─── Factory functions ───

export function makeBloodSugarSensorComponent(data: {
  sensorId: string;
  lastReading: number;
  lastRisingRate: number;
  sensorFaultDetected: boolean;
  operating: boolean;
}): BloodSugarSensorComponent {
  return {
    sensorId: data.sensorId as BloodSugarSensorComponentId,
    lastReading: data.lastReading,
    lastRisingRate: data.lastRisingRate,
    sensorFaultDetected: data.sensorFaultDetected,
    operating: data.operating,
  };
}

export function makePumpActuatorComponent(data: {
  actuatorId: string;
  reservoirUnits: number;
  pumpActive: boolean;
  pumpFaultDetected: boolean;
}): PumpActuatorComponent {
  return {
    actuatorId: data.actuatorId as PumpActuatorComponentId,
    reservoirUnits: data.reservoirUnits,
    pumpActive: data.pumpActive,
    pumpFaultDetected: data.pumpFaultDetected,
  };
}

export function makeDoseCalculatorComponent(data: {
  calculatorId: string;
  safeMaxDose: number;
  safeLowerBound: number;
  safeUpperBound: number;
  lastCalculatedDose: number;
  algorithmMethod: string;
}): DoseCalculatorComponent {
  return {
    calculatorId: data.calculatorId as DoseCalculatorComponentId,
    safeMaxDose: data.safeMaxDose,
    safeLowerBound: data.safeLowerBound,
    safeUpperBound: data.safeUpperBound,
    lastCalculatedDose: data.lastCalculatedDose,
    algorithmMethod: data.algorithmMethod,
  };
}

export function makeAlarmManagerComponent(data: {
  alarmId: string;
  hardwareAlarmActive: boolean;
  lowReservoirAlarmActive: boolean;
  alarmMessage: string;
  acknowledged: boolean;
}): AlarmManagerComponent {
  return {
    alarmId: data.alarmId as AlarmManagerComponentId,
    hardwareAlarmActive: data.hardwareAlarmActive,
    lowReservoirAlarmActive: data.lowReservoirAlarmActive,
    alarmMessage: data.alarmMessage,
    acknowledged: data.acknowledged,
  };
}

export function makeSelfTestControllerComponent(data: {
  testId: string;
  lastTestPassed: boolean;
  testIntervalSec: number;
  lastTestTimestampSec: number;
  testRunning: boolean;
}): SelfTestControllerComponent {
  return {
    testId: data.testId as SelfTestControllerComponentId,
    lastTestPassed: data.lastTestPassed,
    testIntervalSec: data.testIntervalSec,
    lastTestTimestampSec: data.lastTestTimestampSec,
    testRunning: data.testRunning,
  };
}

export function makeControllerComponent(data: {
  controllerId: string;
  systemOperating: boolean;
  systemFaultDetected: boolean;
  state: string;
  lastDoseDelivered: number;
  doseCount: number;
  safeLowerBound: number;
  safeUpperBound: number;
}): ControllerComponent {
  return {
    controllerId: data.controllerId as ControllerComponentId,
    systemOperating: data.systemOperating,
    systemFaultDetected: data.systemFaultDetected,
    state: data.state,
    lastDoseDelivered: data.lastDoseDelivered,
    doseCount: data.doseCount,
    safeLowerBound: data.safeLowerBound,
    safeUpperBound: data.safeUpperBound,
  };
}

export function makeSensorControllerChannel(data: {
  channelId: string;
  lastTransmissionTimestamp: number;
  transmissionFaultDetected: boolean;
}): SensorControllerChannel {
  return {
    channelId: data.channelId as SensorControllerChannelId,
    lastTransmissionTimestamp: data.lastTransmissionTimestamp,
    transmissionFaultDetected: data.transmissionFaultDetected,
  };
}

export function makeCalculatorControllerChannel(data: {
  channelId: string;
  lastTransmissionTimestamp: number;
}): CalculatorControllerChannel {
  return {
    channelId: data.channelId as CalculatorControllerChannelId,
    lastTransmissionTimestamp: data.lastTransmissionTimestamp,
  };
}

export function makeControllerActuatorChannel(data: {
  channelId: string;
  lastCommandTimestamp: number;
  commandFaultDetected: boolean;
}): ControllerActuatorChannel {
  return {
    channelId: data.channelId as ControllerActuatorChannelId,
    lastCommandTimestamp: data.lastCommandTimestamp,
    commandFaultDetected: data.commandFaultDetected,
  };
}

export function makeAlarmControllerChannel(data: {
  channelId: string;
}): AlarmControllerChannel {
  return {
    channelId: data.channelId as AlarmControllerChannelId,
  };
}

export function makeSelfTestControllerChannel(data: {
  channelId: string;
}): SelfTestControllerChannel {
  return {
    channelId: data.channelId as SelfTestControllerChannelId,
  };
}

export function makeSensorReadingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorReadingFlow {
  return {
    flowId: data.flowId as SensorReadingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeDoseCalculationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DoseCalculationFlow {
  return {
    flowId: data.flowId as DoseCalculationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeInsulinDeliveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): InsulinDeliveryFlow {
  return {
    flowId: data.flowId as InsulinDeliveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSelfTestFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SelfTestFlow {
  return {
    flowId: data.flowId as SelfTestFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makePatient(data: {
  patientId: string;
  hasDiabetes: boolean;
  bloodSugar: number;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    hasDiabetes: data.hasDiabetes,
    bloodSugar: data.bloodSugar,
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

export function makeRegulatoryAgency(data: {
  agencyId: string;
  jurisdiction: string;
}): RegulatoryAgency {
  return {
    agencyId: data.agencyId as RegulatoryAgencyId,
    jurisdiction: data.jurisdiction,
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
  faultDetectionLatencySec: number;
}): FailSafeCommitment {
  return {
    commitmentId: data.commitmentId as FailSafeCommitmentId,
    faultDetectionLatencySec: data.faultDetectionLatencySec,
  };
}

export function makeAlertCommitment(data: {
  commitmentId: string;
  notificationLatencySec: number;
}): AlertCommitment {
  return {
    commitmentId: data.commitmentId as AlertCommitmentId,
    notificationLatencySec: data.notificationLatencySec,
  };
}

export function makeRegulatoryCommitment(data: {
  commitmentId: string;
  complianceRating: number;
}): RegulatoryCommitment {
  return {
    commitmentId: data.commitmentId as RegulatoryCommitmentId,
    complianceRating: data.complianceRating,
  };
}

export function makeBloodSugarReading(data: {
  readingId: string;
  valueMgDl: number;
}): BloodSugarReading {
  return {
    readingId: data.readingId as BloodSugarReadingId,
    valueMgDl: data.valueMgDl,
  };
}

export function makeInsulinReservoir(data: {
  reservoirId: string;
  capacityUnits: number;
  currentUnits: number;
}): InsulinReservoir {
  return {
    reservoirId: data.reservoirId as InsulinReservoirId,
    capacityUnits: data.capacityUnits,
    currentUnits: data.currentUnits,
  };
}

export function makeInsulinDose(data: {
  doseId: string;
  units: number;
}): InsulinDose {
  return {
    doseId: data.doseId as InsulinDoseId,
    units: data.units,
  };
}

export function makeSafeZone(data: {
  zoneId: string;
  lowerBoundMgDl: number;
  upperBoundMgDl: number;
}): SafeZone {
  return {
    zoneId: data.zoneId as SafeZoneId,
    lowerBoundMgDl: data.lowerBoundMgDl,
    upperBoundMgDl: data.upperBoundMgDl,
  };
}

export function makeSelfTest(data: {
  testId: string;
  passed: boolean;
}): SelfTest {
  return {
    testId: data.testId as SelfTestId,
    passed: data.passed,
  };
}

export function makeHardwareAlarm(data: {
  alarmId: string;
  active: boolean;
  message: string;
}): HardwareAlarm {
  return {
    alarmId: data.alarmId as HardwareAlarmId,
    active: data.active,
    message: data.message,
  };
}

export function makeDoseDeliveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DoseDeliveryFlow {
  return {
    flowId: data.flowId as DoseDeliveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeInsulinPumpSystem(data: {
  systemId: string;
  safeMaxDose: number;
  reservoirUnits: number;
  currentBloodSugar: number;
  bloodSugarRising: number;
  isOperating: boolean;
  faultDetected: boolean;
  lowReservoir: boolean;
  alarmActive: boolean;
  lastSelfTestPassed: boolean;
  selfTestIntervalSec: number;
  safeLowerBound: number;
  safeUpperBound: number;
}): InsulinPumpSystem {
  return {
    systemId: data.systemId as InsulinPumpSystemId,
    safeMaxDose: data.safeMaxDose,
    reservoirUnits: data.reservoirUnits,
    currentBloodSugar: data.currentBloodSugar,
    bloodSugarRising: data.bloodSugarRising,
    isOperating: data.isOperating,
    faultDetected: data.faultDetected,
    lowReservoir: data.lowReservoir,
    alarmActive: data.alarmActive,
    lastSelfTestPassed: data.lastSelfTestPassed,
    selfTestIntervalSec: data.selfTestIntervalSec,
    safeLowerBound: data.safeLowerBound,
    safeUpperBound: data.safeUpperBound,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  sensorAccuracyStatement: string;
  insulinConcentration: string;
  alarmResponseAssumption: string;
  timingSynchronization: string;
  regulatoryVersionLock: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    sensorAccuracyStatement: data.sensorAccuracyStatement,
    insulinConcentration: data.insulinConcentration,
    alarmResponseAssumption: data.alarmResponseAssumption,
    timingSynchronization: data.timingSynchronization,
    regulatoryVersionLock: data.regulatoryVersionLock,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for BloodSugarSensorComponent. Returns empty array when valid. */
export function validateBloodSugarSensorComponent(instance: BloodSugarSensorComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[BloodSugarSensorComponent] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastReading >= 0))) {
    violations.push("[BloodSugarSensorComponent] invariant violated: self.lastReading >= 0.0");
  }
  if (!((instance.lastRisingRate >= 0))) {
    violations.push("[BloodSugarSensorComponent] invariant violated: self.lastRisingRate >= 0.0");
  }
  if (!((!((instance.sensorFaultDetected === true)) || (instance.operating === false)))) {
    violations.push("[BloodSugarSensorComponent] invariant violated: self.sensorFaultDetected = true implies self.operating = false");
  }
  if (!((!((instance.sensorFaultDetected === false)) || (instance.operating === true)))) {
    violations.push("[BloodSugarSensorComponent] invariant violated: self.sensorFaultDetected = false implies self.operating = true");
  }
  return violations;
}

/** Runtime invariant check for PumpActuatorComponent. Returns empty array when valid. */
export function validatePumpActuatorComponent(instance: PumpActuatorComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.actuatorId !== null))) {
    violations.push("[PumpActuatorComponent] invariant violated: self.actuatorId <> null");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[PumpActuatorComponent] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((!((instance.pumpActive === true)) || (instance.pumpFaultDetected === false)))) {
    violations.push("[PumpActuatorComponent] invariant violated: self.pumpActive = true implies self.pumpFaultDetected = false");
  }
  return violations;
}

/** Runtime invariant check for DoseCalculatorComponent. Returns empty array when valid. */
export function validateDoseCalculatorComponent(instance: DoseCalculatorComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.calculatorId !== null))) {
    violations.push("[DoseCalculatorComponent] invariant violated: self.calculatorId <> null");
  }
  if (!((instance.safeMaxDose > 0))) {
    violations.push("[DoseCalculatorComponent] invariant violated: self.safeMaxDose > 0.0");
  }
  if (!((instance.safeLowerBound >= 0))) {
    violations.push("[DoseCalculatorComponent] invariant violated: self.safeLowerBound >= 0.0");
  }
  if (!((instance.safeUpperBound > instance.safeLowerBound))) {
    violations.push("[DoseCalculatorComponent] invariant violated: self.safeUpperBound > self.safeLowerBound");
  }
  if (!((instance.lastCalculatedDose >= 0))) {
    violations.push("[DoseCalculatorComponent] invariant violated: self.lastCalculatedDose >= 0.0");
  }
  if (!((instance.algorithmMethod === "FDA_CLEARED_PROPORTIONAL"))) {
    violations.push("[DoseCalculatorComponent] invariant violated: self.algorithmMethod = 'FDA_CLEARED_PROPORTIONAL'");
  }
  return violations;
}

/** Runtime invariant check for AlarmManagerComponent. Returns empty array when valid. */
export function validateAlarmManagerComponent(instance: AlarmManagerComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmId !== null))) {
    violations.push("[AlarmManagerComponent] invariant violated: self.alarmId <> null");
  }
  if (!((!((instance.hardwareAlarmActive === true)) || (instance.acknowledged === false)))) {
    violations.push("[AlarmManagerComponent] invariant violated: self.hardwareAlarmActive = true implies self.acknowledged = false");
  }
  if (!((!((instance.lowReservoirAlarmActive === true)) || (instance.acknowledged === false)))) {
    violations.push("[AlarmManagerComponent] invariant violated: self.lowReservoirAlarmActive = true implies self.acknowledged = false");
  }
  return violations;
}

/** Runtime invariant check for SelfTestControllerComponent. Returns empty array when valid. */
export function validateSelfTestControllerComponent(instance: SelfTestControllerComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.testId !== null))) {
    violations.push("[SelfTestControllerComponent] invariant violated: self.testId <> null");
  }
  if (!((instance.testIntervalSec > 0))) {
    violations.push("[SelfTestControllerComponent] invariant violated: self.testIntervalSec > 0.0");
  }
  if (!((instance.lastTestTimestampSec >= 0))) {
    violations.push("[SelfTestControllerComponent] invariant violated: self.lastTestTimestampSec >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ControllerComponent. Returns empty array when valid. */
export function validateControllerComponent(instance: ControllerComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[ControllerComponent] invariant violated: self.controllerId <> null");
  }
  if (!((instance.state !== null))) {
    violations.push("[ControllerComponent] invariant violated: self.state <> null");
  }
  if (!((instance.lastDoseDelivered >= 0))) {
    violations.push("[ControllerComponent] invariant violated: self.lastDoseDelivered >= 0.0");
  }
  if (!((instance.doseCount >= 0))) {
    violations.push("[ControllerComponent] invariant violated: self.doseCount >= 0");
  }
  if (!((instance.safeLowerBound >= 0))) {
    violations.push("[ControllerComponent] invariant violated: self.safeLowerBound >= 0.0");
  }
  if (!((instance.safeUpperBound > instance.safeLowerBound))) {
    violations.push("[ControllerComponent] invariant violated: self.safeUpperBound > self.safeLowerBound");
  }
  if (!((!((instance.systemFaultDetected === true)) || (instance.state === "FAULT")))) {
    violations.push("[ControllerComponent] invariant violated: self.systemFaultDetected = true implies self.state = 'FAULT'");
  }
  if (!((!((instance.state === "FAULT")) || (instance.systemOperating === false)))) {
    violations.push("[ControllerComponent] invariant violated: self.state = 'FAULT' implies self.systemOperating = false");
  }
  return violations;
}

/** Runtime invariant check for SensorControllerChannel. Returns empty array when valid. */
export function validateSensorControllerChannel(instance: SensorControllerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SensorControllerChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastTransmissionTimestamp >= 0))) {
    violations.push("[SensorControllerChannel] invariant violated: self.lastTransmissionTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for CalculatorControllerChannel. Returns empty array when valid. */
export function validateCalculatorControllerChannel(instance: CalculatorControllerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[CalculatorControllerChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastTransmissionTimestamp >= 0))) {
    violations.push("[CalculatorControllerChannel] invariant violated: self.lastTransmissionTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ControllerActuatorChannel. Returns empty array when valid. */
export function validateControllerActuatorChannel(instance: ControllerActuatorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ControllerActuatorChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastCommandTimestamp >= 0))) {
    violations.push("[ControllerActuatorChannel] invariant violated: self.lastCommandTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for AlarmControllerChannel. Returns empty array when valid. */
export function validateAlarmControllerChannel(instance: AlarmControllerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[AlarmControllerChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for SelfTestControllerChannel. Returns empty array when valid. */
export function validateSelfTestControllerChannel(instance: SelfTestControllerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SelfTestControllerChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorReadingFlow. Returns empty array when valid. */
export function validateSensorReadingFlow(instance: SensorReadingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorReadingFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for DoseCalculationFlow. Returns empty array when valid. */
export function validateDoseCalculationFlow(instance: DoseCalculationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DoseCalculationFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinDeliveryFlow. Returns empty array when valid. */
export function validateInsulinDeliveryFlow(instance: InsulinDeliveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[InsulinDeliveryFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for SelfTestFlow. Returns empty array when valid. */
export function validateSelfTestFlow(instance: SelfTestFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SelfTestFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.bloodSugar >= 0))) {
    violations.push("[Patient] invariant violated: self.bloodSugar >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Clinician. Returns empty array when valid. */
export function validateClinician(instance: Clinician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clinicianId !== null))) {
    violations.push("[Clinician] invariant violated: self.clinicianId <> null");
  }
  if (!((instance.certification !== null))) {
    violations.push("[Clinician] invariant violated: self.certification <> null");
  }
  return violations;
}

/** Runtime invariant check for RegulatoryAgency. Returns empty array when valid. */
export function validateRegulatoryAgency(instance: RegulatoryAgency): readonly string[] {
  const violations: string[] = [];
  if (!((instance.agencyId !== null))) {
    violations.push("[RegulatoryAgency] invariant violated: self.agencyId <> null");
  }
  if (!((instance.jurisdiction !== null))) {
    violations.push("[RegulatoryAgency] invariant violated: self.jurisdiction <> null");
  }
  return violations;
}

/** Runtime invariant check for PumpVendor. Returns empty array when valid. */
export function validatePumpVendor(instance: PumpVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[PumpVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[PumpVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for DoseSafetyConstraints. Returns empty array when valid. */
export function validateDoseSafetyConstraints(instance: DoseSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[DoseSafetyConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for HardwareFaultSafety. Returns empty array when valid. */
export function validateHardwareFaultSafety(instance: HardwareFaultSafety): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[HardwareFaultSafety] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AlertingRequirements. Returns empty array when valid. */
export function validateAlertingRequirements(instance: AlertingRequirements): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AlertingRequirements] invariant violated: true");
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
  if (!((instance.currentUnits >= 0))) {
    violations.push("[InsulinReservoir] invariant violated: self.currentUnits >= 0.0");
  }
  if (!((instance.currentUnits <= instance.capacityUnits))) {
    violations.push("[InsulinReservoir] invariant violated: self.currentUnits <= self.capacityUnits");
  }
  return violations;
}

/** Runtime invariant check for InsulinDose. Returns empty array when valid. */
export function validateInsulinDose(instance: InsulinDose): readonly string[] {
  const violations: string[] = [];
  if (!((instance.doseId !== null))) {
    violations.push("[InsulinDose] invariant violated: self.doseId <> null");
  }
  if (!((instance.units >= 0))) {
    violations.push("[InsulinDose] invariant violated: self.units >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for SafeZone. Returns empty array when valid. */
export function validateSafeZone(instance: SafeZone): readonly string[] {
  const violations: string[] = [];
  if (!((instance.zoneId !== null))) {
    violations.push("[SafeZone] invariant violated: self.zoneId <> null");
  }
  if (!((instance.lowerBoundMgDl >= 0))) {
    violations.push("[SafeZone] invariant violated: self.lowerBoundMgDl >= 0.0");
  }
  if (!((instance.upperBoundMgDl > instance.lowerBoundMgDl))) {
    violations.push("[SafeZone] invariant violated: self.upperBoundMgDl > self.lowerBoundMgDl");
  }
  return violations;
}

/** Runtime invariant check for SelfTest. Returns empty array when valid. */
export function validateSelfTest(instance: SelfTest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.testId !== null))) {
    violations.push("[SelfTest] invariant violated: self.testId <> null");
  }
  return violations;
}

/** Runtime invariant check for HardwareAlarm. Returns empty array when valid. */
export function validateHardwareAlarm(instance: HardwareAlarm): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmId !== null))) {
    violations.push("[HardwareAlarm] invariant violated: self.alarmId <> null");
  }
  if (!((instance.message !== null))) {
    violations.push("[HardwareAlarm] invariant violated: self.message <> null");
  }
  return violations;
}

/** Runtime invariant check for DoseDeliveryFlow. Returns empty array when valid. */
export function validateDoseDeliveryFlow(instance: DoseDeliveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpSystem. Returns empty array when valid. */
export function validateInsulinPumpSystem(instance: InsulinPumpSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMaxDose > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeMaxDose > 0.0");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((instance.currentBloodSugar >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.currentBloodSugar >= 0.0");
  }
  if (!((instance.bloodSugarRising >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.bloodSugarRising >= 0.0");
  }
  if (!((instance.selfTestIntervalSec > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.selfTestIntervalSec > 0.0");
  }
  if (!((instance.safeLowerBound >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeLowerBound >= 0.0");
  }
  if (!((instance.safeUpperBound > instance.safeLowerBound))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeUpperBound > self.safeLowerBound");
  }
  return violations;
}

/** Runtime invariant check for Iec62304ClassC. Returns empty array when valid. */
export function validateIec62304ClassC(instance: Iec62304ClassC): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ieceeCertificateId !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.ieceeCertificateId <> null");
  }
  if (!((instance.softwareSafetyClass === "Class C"))) {
    violations.push("[Iec62304ClassC] invariant violated: self.softwareSafetyClass = 'Class C'");
  }
  if (!((instance.riskAssessmentDate !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.riskAssessmentDate <> null");
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
  if (!((instance.clearedDate !== null))) {
    violations.push("[Fda510kCleared] invariant violated: self.clearedDate <> null");
  }
  return violations;
}

/** Runtime invariant check for Iso13485Compliant. Returns empty array when valid. */
export function validateIso13485Compliant(instance: Iso13485Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.qualitySystemCertificate !== null))) {
    violations.push("[Iso13485Compliant] invariant violated: self.qualitySystemCertificate <> null");
  }
  if (!((instance.certificationBody !== null))) {
    violations.push("[Iso13485Compliant] invariant violated: self.certificationBody <> null");
  }
  if (!((instance.expiryDate !== null))) {
    violations.push("[Iso13485Compliant] invariant violated: self.expiryDate <> null");
  }
  return violations;
}

/** Runtime invariant check for AamiIec60601Compliant. Returns empty array when valid. */
export function validateAamiIec60601Compliant(instance: AamiIec60601Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.complianceStandard === "IEC 60601-1"))) {
    violations.push("[AamiIec60601Compliant] invariant violated: self.complianceStandard = 'IEC 60601-1'");
  }
  if (!((instance.electricalSafetyClass === "Type BF"))) {
    violations.push("[AamiIec60601Compliant] invariant violated: self.electricalSafetyClass = 'Type BF'");
  }
  if (!((instance.emcTestDate !== null))) {
    violations.push("[AamiIec60601Compliant] invariant violated: self.emcTestDate <> null");
  }
  return violations;
}

/** Runtime invariant check for HipaaCoveredEntity. Returns empty array when valid. */
export function validateHipaaCoveredEntity(instance: HipaaCoveredEntity): readonly string[] {
  const violations: string[] = [];
  if (!((instance.businessAssociateAgreement !== null))) {
    violations.push("[HipaaCoveredEntity] invariant violated: self.businessAssociateAgreement <> null");
  }
  if (!((instance.privacyOfficerContact !== null))) {
    violations.push("[HipaaCoveredEntity] invariant violated: self.privacyOfficerContact <> null");
  }
  if (!((instance.lastPrivacyAuditDate !== null))) {
    violations.push("[HipaaCoveredEntity] invariant violated: self.lastPrivacyAuditDate <> null");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleReadings. Returns empty array when valid. */
export function validatePhysicallyPlausibleReadings(instance: PhysicallyPlausibleReadings): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PhysicallyPlausibleReadings] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ReservoirMassBalance. Returns empty array when valid. */
export function validateReservoirMassBalance(instance: ReservoirMassBalance): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ReservoirMassBalance] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for DoseProportionalityConstraint. Returns empty array when valid. */
export function validateDoseProportionalityConstraint(instance: DoseProportionalityConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[DoseProportionalityConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AlarmDurability. Returns empty array when valid. */
export function validateAlarmDurability(instance: AlarmDurability): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AlarmDurability] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.sensorAccuracyStatement !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.sensorAccuracyStatement <> null");
  }
  if (!((instance.insulinConcentration !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.insulinConcentration <> null");
  }
  if (!((instance.alarmResponseAssumption !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.alarmResponseAssumption <> null");
  }
  if (!((instance.timingSynchronization !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.timingSynchronization <> null");
  }
  if (!((instance.regulatoryVersionLock !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.regulatoryVersionLock <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpSystemFormalized. Returns empty array when valid. */
export function validateInsulinPumpSystemFormalized(instance: InsulinPumpSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatoryAuditLog !== null))) {
    violations.push("[InsulinPumpSystemFormalized] invariant violated: self.regulatoryAuditLog <> null");
  }
  if (!((instance.lastComplianceCheckDate !== null))) {
    violations.push("[InsulinPumpSystemFormalized] invariant violated: self.lastComplianceCheckDate <> null");
  }
  if (!((instance.runtimeFaultCount >= 0))) {
    violations.push("[InsulinPumpSystemFormalized] invariant violated: self.runtimeFaultCount >= 0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for BloodSugarSensorComponent.takeReading. User supplies this. */
export type BloodSugarSensorComponentTakeReadingImpl = (self: BloodSugarSensorComponent, value: number, risingRate: number) => { self: BloodSugarSensorComponent; modified: { lastReading: unknown; lastRisingRate: unknown } };

/** Contract-checking wrapper for BloodSugarSensorComponent.takeReading. */
export function wrapBloodSugarSensorComponentTakeReading(impl: BloodSugarSensorComponentTakeReadingImpl): (self: BloodSugarSensorComponent, value: number, risingRate: number) => BloodSugarSensorComponent {
  return (self, value, risingRate) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensorComponent.takeReading] pre violated: value >= 0.0");
    }
    if (!((risingRate >= 0))) {
      preViolations.push("[BloodSugarSensorComponent.takeReading] pre violated: risingRate >= 0.0");
    }
    if (!(self.operating)) {
      preViolations.push("[BloodSugarSensorComponent.takeReading] pre violated: self.operating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, risingRate);
      const postViolations: string[] = [];
      if (!((__result.self.lastReading === value))) {
        postViolations.push("[BloodSugarSensorComponent.takeReading] post violated: self.lastReading = value");
      }
      if (!((__result.self.lastRisingRate === risingRate))) {
        postViolations.push("[BloodSugarSensorComponent.takeReading] post violated: self.lastRisingRate = risingRate");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensorComponent.takeReading (async). User supplies this. */
export type BloodSugarSensorComponentTakeReadingAsyncImpl = (self: BloodSugarSensorComponent, value: number, risingRate: number) => Promise<{ self: BloodSugarSensorComponent; modified: { lastReading: unknown; lastRisingRate: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensorComponent.takeReading (async). */
export function wrapBloodSugarSensorComponentTakeReadingAsync(impl: BloodSugarSensorComponentTakeReadingAsyncImpl): (self: BloodSugarSensorComponent, value: number, risingRate: number) => Promise<BloodSugarSensorComponent> {
  return async (self, value, risingRate) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensorComponent.takeReading] pre violated: value >= 0.0");
    }
    if (!((risingRate >= 0))) {
      preViolations.push("[BloodSugarSensorComponent.takeReading] pre violated: risingRate >= 0.0");
    }
    if (!(self.operating)) {
      preViolations.push("[BloodSugarSensorComponent.takeReading] pre violated: self.operating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, risingRate);
      const postViolations: string[] = [];
      if (!((__result.self.lastReading === value))) {
        postViolations.push("[BloodSugarSensorComponent.takeReading] post violated: self.lastReading = value");
      }
      if (!((__result.self.lastRisingRate === risingRate))) {
        postViolations.push("[BloodSugarSensorComponent.takeReading] post violated: self.lastRisingRate = risingRate");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensorComponent.detectSensorFault. User supplies this. */
export type BloodSugarSensorComponentDetectSensorFaultImpl = (self: BloodSugarSensorComponent, faultCode: number) => { self: BloodSugarSensorComponent; modified: { sensorFaultDetected: unknown; operating: unknown } };

/** Contract-checking wrapper for BloodSugarSensorComponent.detectSensorFault. */
export function wrapBloodSugarSensorComponentDetectSensorFault(impl: BloodSugarSensorComponentDetectSensorFaultImpl): (self: BloodSugarSensorComponent, faultCode: number) => BloodSugarSensorComponent {
  return (self, faultCode) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[BloodSugarSensorComponent.detectSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(self.operating)) {
      preViolations.push("[BloodSugarSensorComponent.detectSensorFault] pre violated: self.operating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[BloodSugarSensorComponent.detectSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.operating === false))) {
        postViolations.push("[BloodSugarSensorComponent.detectSensorFault] post violated: self.operating = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensorComponent.detectSensorFault (async). User supplies this. */
export type BloodSugarSensorComponentDetectSensorFaultAsyncImpl = (self: BloodSugarSensorComponent, faultCode: number) => Promise<{ self: BloodSugarSensorComponent; modified: { sensorFaultDetected: unknown; operating: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensorComponent.detectSensorFault (async). */
export function wrapBloodSugarSensorComponentDetectSensorFaultAsync(impl: BloodSugarSensorComponentDetectSensorFaultAsyncImpl): (self: BloodSugarSensorComponent, faultCode: number) => Promise<BloodSugarSensorComponent> {
  return async (self, faultCode) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[BloodSugarSensorComponent.detectSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(self.operating)) {
      preViolations.push("[BloodSugarSensorComponent.detectSensorFault] pre violated: self.operating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[BloodSugarSensorComponent.detectSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.operating === false))) {
        postViolations.push("[BloodSugarSensorComponent.detectSensorFault] post violated: self.operating = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensorComponent.clearSensorFault. User supplies this. */
export type BloodSugarSensorComponentClearSensorFaultImpl = (self: BloodSugarSensorComponent) => { self: BloodSugarSensorComponent; modified: { sensorFaultDetected: unknown; operating: unknown } };

/** Contract-checking wrapper for BloodSugarSensorComponent.clearSensorFault. */
export function wrapBloodSugarSensorComponentClearSensorFault(impl: BloodSugarSensorComponentClearSensorFaultImpl): (self: BloodSugarSensorComponent) => BloodSugarSensorComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[BloodSugarSensorComponent.clearSensorFault] pre violated: self.sensorFaultDetected = true");
    }
    if (!(!(self.operating))) {
      preViolations.push("[BloodSugarSensorComponent.clearSensorFault] pre violated: not self.operating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[BloodSugarSensorComponent.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.operating === true))) {
        postViolations.push("[BloodSugarSensorComponent.clearSensorFault] post violated: self.operating = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensorComponent.clearSensorFault (async). User supplies this. */
export type BloodSugarSensorComponentClearSensorFaultAsyncImpl = (self: BloodSugarSensorComponent) => Promise<{ self: BloodSugarSensorComponent; modified: { sensorFaultDetected: unknown; operating: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensorComponent.clearSensorFault (async). */
export function wrapBloodSugarSensorComponentClearSensorFaultAsync(impl: BloodSugarSensorComponentClearSensorFaultAsyncImpl): (self: BloodSugarSensorComponent) => Promise<BloodSugarSensorComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[BloodSugarSensorComponent.clearSensorFault] pre violated: self.sensorFaultDetected = true");
    }
    if (!(!(self.operating))) {
      preViolations.push("[BloodSugarSensorComponent.clearSensorFault] pre violated: not self.operating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[BloodSugarSensorComponent.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.operating === true))) {
        postViolations.push("[BloodSugarSensorComponent.clearSensorFault] post violated: self.operating = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.deliverDose. User supplies this. */
export type PumpActuatorComponentDeliverDoseImpl = (self: PumpActuatorComponent, dose: number) => { self: PumpActuatorComponent; modified: { reservoirUnits: unknown; pumpActive: unknown } };

/** Contract-checking wrapper for PumpActuatorComponent.deliverDose. */
export function wrapPumpActuatorComponentDeliverDose(impl: PumpActuatorComponentDeliverDoseImpl): (self: PumpActuatorComponent, dose: number) => PumpActuatorComponent {
  return (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: dose > 0.0");
    }
    if (!((self.reservoirUnits >= dose))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: self.reservoirUnits >= dose");
    }
    if (!(!(self.pumpFaultDetected))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: not self.pumpFaultDetected");
    }
    if (!(!(self.pumpActive))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: not self.pumpActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = dose — unbound variable 'result'
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] - dose)))) {
        postViolations.push("[PumpActuatorComponent.deliverDose] post violated: self.reservoirUnits = self.reservoirUnits@pre - dose");
      }
      if (!((__result.self.pumpActive === true))) {
        postViolations.push("[PumpActuatorComponent.deliverDose] post violated: self.pumpActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.deliverDose (async). User supplies this. */
export type PumpActuatorComponentDeliverDoseAsyncImpl = (self: PumpActuatorComponent, dose: number) => Promise<{ self: PumpActuatorComponent; modified: { reservoirUnits: unknown; pumpActive: unknown } }>;

/** Contract-checking wrapper for PumpActuatorComponent.deliverDose (async). */
export function wrapPumpActuatorComponentDeliverDoseAsync(impl: PumpActuatorComponentDeliverDoseAsyncImpl): (self: PumpActuatorComponent, dose: number) => Promise<PumpActuatorComponent> {
  return async (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: dose > 0.0");
    }
    if (!((self.reservoirUnits >= dose))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: self.reservoirUnits >= dose");
    }
    if (!(!(self.pumpFaultDetected))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: not self.pumpFaultDetected");
    }
    if (!(!(self.pumpActive))) {
      preViolations.push("[PumpActuatorComponent.deliverDose] pre violated: not self.pumpActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = dose — unbound variable 'result'
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] - dose)))) {
        postViolations.push("[PumpActuatorComponent.deliverDose] post violated: self.reservoirUnits = self.reservoirUnits@pre - dose");
      }
      if (!((__result.self.pumpActive === true))) {
        postViolations.push("[PumpActuatorComponent.deliverDose] post violated: self.pumpActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.stopPump. User supplies this. */
export type PumpActuatorComponentStopPumpImpl = (self: PumpActuatorComponent) => { self: PumpActuatorComponent; modified: { pumpActive: unknown } };

/** Contract-checking wrapper for PumpActuatorComponent.stopPump. */
export function wrapPumpActuatorComponentStopPump(impl: PumpActuatorComponentStopPumpImpl): (self: PumpActuatorComponent) => PumpActuatorComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.pumpActive)) {
      preViolations.push("[PumpActuatorComponent.stopPump] pre violated: self.pumpActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpActive === false))) {
        postViolations.push("[PumpActuatorComponent.stopPump] post violated: self.pumpActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.stopPump (async). User supplies this. */
export type PumpActuatorComponentStopPumpAsyncImpl = (self: PumpActuatorComponent) => Promise<{ self: PumpActuatorComponent; modified: { pumpActive: unknown } }>;

/** Contract-checking wrapper for PumpActuatorComponent.stopPump (async). */
export function wrapPumpActuatorComponentStopPumpAsync(impl: PumpActuatorComponentStopPumpAsyncImpl): (self: PumpActuatorComponent) => Promise<PumpActuatorComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.pumpActive)) {
      preViolations.push("[PumpActuatorComponent.stopPump] pre violated: self.pumpActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpActive === false))) {
        postViolations.push("[PumpActuatorComponent.stopPump] post violated: self.pumpActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.detectPumpFault. User supplies this. */
export type PumpActuatorComponentDetectPumpFaultImpl = (self: PumpActuatorComponent, faultCode: number) => { self: PumpActuatorComponent; modified: { pumpFaultDetected: unknown; pumpActive: unknown } };

/** Contract-checking wrapper for PumpActuatorComponent.detectPumpFault. */
export function wrapPumpActuatorComponentDetectPumpFault(impl: PumpActuatorComponentDetectPumpFaultImpl): (self: PumpActuatorComponent, faultCode: number) => PumpActuatorComponent {
  return (self, faultCode) => {
    const preViolations: string[] = [];
    if (!(!(self.pumpFaultDetected))) {
      preViolations.push("[PumpActuatorComponent.detectPumpFault] pre violated: not self.pumpFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.pumpFaultDetected === true))) {
        postViolations.push("[PumpActuatorComponent.detectPumpFault] post violated: self.pumpFaultDetected = true");
      }
      if (!((__result.self.pumpActive === false))) {
        postViolations.push("[PumpActuatorComponent.detectPumpFault] post violated: self.pumpActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.detectPumpFault (async). User supplies this. */
export type PumpActuatorComponentDetectPumpFaultAsyncImpl = (self: PumpActuatorComponent, faultCode: number) => Promise<{ self: PumpActuatorComponent; modified: { pumpFaultDetected: unknown; pumpActive: unknown } }>;

/** Contract-checking wrapper for PumpActuatorComponent.detectPumpFault (async). */
export function wrapPumpActuatorComponentDetectPumpFaultAsync(impl: PumpActuatorComponentDetectPumpFaultAsyncImpl): (self: PumpActuatorComponent, faultCode: number) => Promise<PumpActuatorComponent> {
  return async (self, faultCode) => {
    const preViolations: string[] = [];
    if (!(!(self.pumpFaultDetected))) {
      preViolations.push("[PumpActuatorComponent.detectPumpFault] pre violated: not self.pumpFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.pumpFaultDetected === true))) {
        postViolations.push("[PumpActuatorComponent.detectPumpFault] post violated: self.pumpFaultDetected = true");
      }
      if (!((__result.self.pumpActive === false))) {
        postViolations.push("[PumpActuatorComponent.detectPumpFault] post violated: self.pumpActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.clearPumpFault. User supplies this. */
export type PumpActuatorComponentClearPumpFaultImpl = (self: PumpActuatorComponent) => { self: PumpActuatorComponent; modified: { pumpFaultDetected: unknown; pumpActive: unknown } };

/** Contract-checking wrapper for PumpActuatorComponent.clearPumpFault. */
export function wrapPumpActuatorComponentClearPumpFault(impl: PumpActuatorComponentClearPumpFaultImpl): (self: PumpActuatorComponent) => PumpActuatorComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.pumpFaultDetected === true))) {
      preViolations.push("[PumpActuatorComponent.clearPumpFault] pre violated: self.pumpFaultDetected = true");
    }
    if (!(!(self.pumpActive))) {
      preViolations.push("[PumpActuatorComponent.clearPumpFault] pre violated: not self.pumpActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpFaultDetected === false))) {
        postViolations.push("[PumpActuatorComponent.clearPumpFault] post violated: self.pumpFaultDetected = false");
      }
      if (!((__result.self.pumpActive === false))) {
        postViolations.push("[PumpActuatorComponent.clearPumpFault] post violated: self.pumpActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.clearPumpFault (async). User supplies this. */
export type PumpActuatorComponentClearPumpFaultAsyncImpl = (self: PumpActuatorComponent) => Promise<{ self: PumpActuatorComponent; modified: { pumpFaultDetected: unknown; pumpActive: unknown } }>;

/** Contract-checking wrapper for PumpActuatorComponent.clearPumpFault (async). */
export function wrapPumpActuatorComponentClearPumpFaultAsync(impl: PumpActuatorComponentClearPumpFaultAsyncImpl): (self: PumpActuatorComponent) => Promise<PumpActuatorComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.pumpFaultDetected === true))) {
      preViolations.push("[PumpActuatorComponent.clearPumpFault] pre violated: self.pumpFaultDetected = true");
    }
    if (!(!(self.pumpActive))) {
      preViolations.push("[PumpActuatorComponent.clearPumpFault] pre violated: not self.pumpActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpFaultDetected === false))) {
        postViolations.push("[PumpActuatorComponent.clearPumpFault] post violated: self.pumpFaultDetected = false");
      }
      if (!((__result.self.pumpActive === false))) {
        postViolations.push("[PumpActuatorComponent.clearPumpFault] post violated: self.pumpActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.refillReservoir. User supplies this. */
export type PumpActuatorComponentRefillReservoirImpl = (self: PumpActuatorComponent, addedUnits: number) => { self: PumpActuatorComponent; modified: { reservoirUnits: unknown } };

/** Contract-checking wrapper for PumpActuatorComponent.refillReservoir. */
export function wrapPumpActuatorComponentRefillReservoir(impl: PumpActuatorComponentRefillReservoirImpl): (self: PumpActuatorComponent, addedUnits: number) => PumpActuatorComponent {
  return (self, addedUnits) => {
    const preViolations: string[] = [];
    if (!((addedUnits > 0))) {
      preViolations.push("[PumpActuatorComponent.refillReservoir] pre violated: addedUnits > 0.0");
    }
    if (!(!(self.pumpFaultDetected))) {
      preViolations.push("[PumpActuatorComponent.refillReservoir] pre violated: not self.pumpFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, addedUnits);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] + addedUnits)))) {
        postViolations.push("[PumpActuatorComponent.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + addedUnits");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuatorComponent.refillReservoir (async). User supplies this. */
export type PumpActuatorComponentRefillReservoirAsyncImpl = (self: PumpActuatorComponent, addedUnits: number) => Promise<{ self: PumpActuatorComponent; modified: { reservoirUnits: unknown } }>;

/** Contract-checking wrapper for PumpActuatorComponent.refillReservoir (async). */
export function wrapPumpActuatorComponentRefillReservoirAsync(impl: PumpActuatorComponentRefillReservoirAsyncImpl): (self: PumpActuatorComponent, addedUnits: number) => Promise<PumpActuatorComponent> {
  return async (self, addedUnits) => {
    const preViolations: string[] = [];
    if (!((addedUnits > 0))) {
      preViolations.push("[PumpActuatorComponent.refillReservoir] pre violated: addedUnits > 0.0");
    }
    if (!(!(self.pumpFaultDetected))) {
      preViolations.push("[PumpActuatorComponent.refillReservoir] pre violated: not self.pumpFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, addedUnits);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] + addedUnits)))) {
        postViolations.push("[PumpActuatorComponent.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + addedUnits");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculatorComponent.calculateDose. User supplies this. */
export type DoseCalculatorComponentCalculateDoseImpl = (self: DoseCalculatorComponent, sugar: number, rate: number) => { self: DoseCalculatorComponent; modified: { lastCalculatedDose: unknown } };

/** Contract-checking wrapper for DoseCalculatorComponent.calculateDose. */
export function wrapDoseCalculatorComponentCalculateDose(impl: DoseCalculatorComponentCalculateDoseImpl): (self: DoseCalculatorComponent, sugar: number, rate: number) => DoseCalculatorComponent {
  return (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeUpperBound))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: sugar > self.safeUpperBound");
    }
    if (!((rate > 0))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: rate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar, rate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDose — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result =
      if (sugar - self.safeUpperBound) * rate * 0.01 <= self.safeMaxDose then
        (sugar - self.safeUpperBound) * rate * 0.01
      else
        self.safeMaxDose
      endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastCalculatedDose = result — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculatorComponent.calculateDose (async). User supplies this. */
export type DoseCalculatorComponentCalculateDoseAsyncImpl = (self: DoseCalculatorComponent, sugar: number, rate: number) => Promise<{ self: DoseCalculatorComponent; modified: { lastCalculatedDose: unknown } }>;

/** Contract-checking wrapper for DoseCalculatorComponent.calculateDose (async). */
export function wrapDoseCalculatorComponentCalculateDoseAsync(impl: DoseCalculatorComponentCalculateDoseAsyncImpl): (self: DoseCalculatorComponent, sugar: number, rate: number) => Promise<DoseCalculatorComponent> {
  return async (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeUpperBound))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: sugar > self.safeUpperBound");
    }
    if (!((rate > 0))) {
      preViolations.push("[DoseCalculatorComponent.calculateDose] pre violated: rate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar, rate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDose — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result =
      if (sugar - self.safeUpperBound) * rate * 0.01 <= self.safeMaxDose then
        (sugar - self.safeUpperBound) * rate * 0.01
      else
        self.safeMaxDose
      endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastCalculatedDose = result — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculatorComponent.setSafeMaxDose. User supplies this. */
export type DoseCalculatorComponentSetSafeMaxDoseImpl = (self: DoseCalculatorComponent, newMax: number) => { self: DoseCalculatorComponent; modified: { safeMaxDose: unknown } };

/** Contract-checking wrapper for DoseCalculatorComponent.setSafeMaxDose. */
export function wrapDoseCalculatorComponentSetSafeMaxDose(impl: DoseCalculatorComponentSetSafeMaxDoseImpl): (self: DoseCalculatorComponent, newMax: number) => DoseCalculatorComponent {
  return (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[DoseCalculatorComponent.setSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDose === newMax))) {
        postViolations.push("[DoseCalculatorComponent.setSafeMaxDose] post violated: self.safeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculatorComponent.setSafeMaxDose (async). User supplies this. */
export type DoseCalculatorComponentSetSafeMaxDoseAsyncImpl = (self: DoseCalculatorComponent, newMax: number) => Promise<{ self: DoseCalculatorComponent; modified: { safeMaxDose: unknown } }>;

/** Contract-checking wrapper for DoseCalculatorComponent.setSafeMaxDose (async). */
export function wrapDoseCalculatorComponentSetSafeMaxDoseAsync(impl: DoseCalculatorComponentSetSafeMaxDoseAsyncImpl): (self: DoseCalculatorComponent, newMax: number) => Promise<DoseCalculatorComponent> {
  return async (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[DoseCalculatorComponent.setSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDose === newMax))) {
        postViolations.push("[DoseCalculatorComponent.setSafeMaxDose] post violated: self.safeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculatorComponent.isInSafeZone. User supplies this. */
export type DoseCalculatorComponentIsInSafeZoneImpl = (self: DoseCalculatorComponent, sugar: number) => { self: DoseCalculatorComponent; modified: {} };

/** Contract-checking wrapper for DoseCalculatorComponent.isInSafeZone. */
export function wrapDoseCalculatorComponentIsInSafeZone(impl: DoseCalculatorComponentIsInSafeZoneImpl): (self: DoseCalculatorComponent, sugar: number) => DoseCalculatorComponent {
  return (self, sugar) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[DoseCalculatorComponent.isInSafeZone] pre violated: sugar >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (sugar >= self.safeLowerBound and sugar <= self.safeUpperBound) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculatorComponent.isInSafeZone (async). User supplies this. */
export type DoseCalculatorComponentIsInSafeZoneAsyncImpl = (self: DoseCalculatorComponent, sugar: number) => Promise<{ self: DoseCalculatorComponent; modified: {} }>;

/** Contract-checking wrapper for DoseCalculatorComponent.isInSafeZone (async). */
export function wrapDoseCalculatorComponentIsInSafeZoneAsync(impl: DoseCalculatorComponentIsInSafeZoneAsyncImpl): (self: DoseCalculatorComponent, sugar: number) => Promise<DoseCalculatorComponent> {
  return async (self, sugar) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[DoseCalculatorComponent.isInSafeZone] pre violated: sugar >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (sugar >= self.safeLowerBound and sugar <= self.safeUpperBound) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.raiseHardwareAlarm. User supplies this. */
export type AlarmManagerComponentRaiseHardwareAlarmImpl = (self: AlarmManagerComponent, message: string) => { self: AlarmManagerComponent; modified: { hardwareAlarmActive: unknown; alarmMessage: unknown; acknowledged: unknown } };

/** Contract-checking wrapper for AlarmManagerComponent.raiseHardwareAlarm. */
export function wrapAlarmManagerComponentRaiseHardwareAlarm(impl: AlarmManagerComponentRaiseHardwareAlarmImpl): (self: AlarmManagerComponent, message: string) => AlarmManagerComponent {
  return (self, message) => {
    const preViolations: string[] = [];
    if (!(!(self.hardwareAlarmActive))) {
      preViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] pre violated: not self.hardwareAlarmActive");
    }
    if (!((message !== null))) {
      preViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] pre violated: message <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, message);
      const postViolations: string[] = [];
      if (!((__result.self.hardwareAlarmActive === true))) {
        postViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] post violated: self.hardwareAlarmActive = true");
      }
      if (!((__result.self.alarmMessage === message))) {
        postViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] post violated: self.alarmMessage = message");
      }
      if (!((__result.self.acknowledged === false))) {
        postViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] post violated: self.acknowledged = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.raiseHardwareAlarm (async). User supplies this. */
export type AlarmManagerComponentRaiseHardwareAlarmAsyncImpl = (self: AlarmManagerComponent, message: string) => Promise<{ self: AlarmManagerComponent; modified: { hardwareAlarmActive: unknown; alarmMessage: unknown; acknowledged: unknown } }>;

/** Contract-checking wrapper for AlarmManagerComponent.raiseHardwareAlarm (async). */
export function wrapAlarmManagerComponentRaiseHardwareAlarmAsync(impl: AlarmManagerComponentRaiseHardwareAlarmAsyncImpl): (self: AlarmManagerComponent, message: string) => Promise<AlarmManagerComponent> {
  return async (self, message) => {
    const preViolations: string[] = [];
    if (!(!(self.hardwareAlarmActive))) {
      preViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] pre violated: not self.hardwareAlarmActive");
    }
    if (!((message !== null))) {
      preViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] pre violated: message <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, message);
      const postViolations: string[] = [];
      if (!((__result.self.hardwareAlarmActive === true))) {
        postViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] post violated: self.hardwareAlarmActive = true");
      }
      if (!((__result.self.alarmMessage === message))) {
        postViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] post violated: self.alarmMessage = message");
      }
      if (!((__result.self.acknowledged === false))) {
        postViolations.push("[AlarmManagerComponent.raiseHardwareAlarm] post violated: self.acknowledged = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.raiseLowReservoirAlarm. User supplies this. */
export type AlarmManagerComponentRaiseLowReservoirAlarmImpl = (self: AlarmManagerComponent) => { self: AlarmManagerComponent; modified: { lowReservoirAlarmActive: unknown; alarmMessage: unknown; acknowledged: unknown } };

/** Contract-checking wrapper for AlarmManagerComponent.raiseLowReservoirAlarm. */
export function wrapAlarmManagerComponentRaiseLowReservoirAlarm(impl: AlarmManagerComponentRaiseLowReservoirAlarmImpl): (self: AlarmManagerComponent) => AlarmManagerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.lowReservoirAlarmActive))) {
      preViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] pre violated: not self.lowReservoirAlarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === true))) {
        postViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] post violated: self.lowReservoirAlarmActive = true");
      }
      if (!((__result.self.alarmMessage === "Low reservoir refill soon"))) {
        postViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] post violated: self.alarmMessage = 'Low reservoir refill soon'");
      }
      if (!((__result.self.acknowledged === false))) {
        postViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] post violated: self.acknowledged = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.raiseLowReservoirAlarm (async). User supplies this. */
export type AlarmManagerComponentRaiseLowReservoirAlarmAsyncImpl = (self: AlarmManagerComponent) => Promise<{ self: AlarmManagerComponent; modified: { lowReservoirAlarmActive: unknown; alarmMessage: unknown; acknowledged: unknown } }>;

/** Contract-checking wrapper for AlarmManagerComponent.raiseLowReservoirAlarm (async). */
export function wrapAlarmManagerComponentRaiseLowReservoirAlarmAsync(impl: AlarmManagerComponentRaiseLowReservoirAlarmAsyncImpl): (self: AlarmManagerComponent) => Promise<AlarmManagerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.lowReservoirAlarmActive))) {
      preViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] pre violated: not self.lowReservoirAlarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === true))) {
        postViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] post violated: self.lowReservoirAlarmActive = true");
      }
      if (!((__result.self.alarmMessage === "Low reservoir refill soon"))) {
        postViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] post violated: self.alarmMessage = 'Low reservoir refill soon'");
      }
      if (!((__result.self.acknowledged === false))) {
        postViolations.push("[AlarmManagerComponent.raiseLowReservoirAlarm] post violated: self.acknowledged = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.acknowledgeAlarm. User supplies this. */
export type AlarmManagerComponentAcknowledgeAlarmImpl = (self: AlarmManagerComponent) => { self: AlarmManagerComponent; modified: { acknowledged: unknown } };

/** Contract-checking wrapper for AlarmManagerComponent.acknowledgeAlarm. */
export function wrapAlarmManagerComponentAcknowledgeAlarm(impl: AlarmManagerComponentAcknowledgeAlarmImpl): (self: AlarmManagerComponent) => AlarmManagerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.hardwareAlarmActive === true) || (self.lowReservoirAlarmActive === true)))) {
      preViolations.push("[AlarmManagerComponent.acknowledgeAlarm] pre violated: self.hardwareAlarmActive = true or self.lowReservoirAlarmActive = true");
    }
    if (!(!(self.acknowledged))) {
      preViolations.push("[AlarmManagerComponent.acknowledgeAlarm] pre violated: not self.acknowledged");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.acknowledged === true))) {
        postViolations.push("[AlarmManagerComponent.acknowledgeAlarm] post violated: self.acknowledged = true");
      }
      if (!((((__result.self.hardwareAlarmActive === true)) ? ((__result.self.hardwareAlarmActive === true)) : ((__result.self.lowReservoirAlarmActive === false))))) {
        postViolations.push("[AlarmManagerComponent.acknowledgeAlarm] post violated: if self.hardwareAlarmActive = true then\n            self.hardwareAlarmActive = true\n          else\n            self.lowReservoirAlarmActive = false\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.acknowledgeAlarm (async). User supplies this. */
export type AlarmManagerComponentAcknowledgeAlarmAsyncImpl = (self: AlarmManagerComponent) => Promise<{ self: AlarmManagerComponent; modified: { acknowledged: unknown } }>;

/** Contract-checking wrapper for AlarmManagerComponent.acknowledgeAlarm (async). */
export function wrapAlarmManagerComponentAcknowledgeAlarmAsync(impl: AlarmManagerComponentAcknowledgeAlarmAsyncImpl): (self: AlarmManagerComponent) => Promise<AlarmManagerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.hardwareAlarmActive === true) || (self.lowReservoirAlarmActive === true)))) {
      preViolations.push("[AlarmManagerComponent.acknowledgeAlarm] pre violated: self.hardwareAlarmActive = true or self.lowReservoirAlarmActive = true");
    }
    if (!(!(self.acknowledged))) {
      preViolations.push("[AlarmManagerComponent.acknowledgeAlarm] pre violated: not self.acknowledged");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.acknowledged === true))) {
        postViolations.push("[AlarmManagerComponent.acknowledgeAlarm] post violated: self.acknowledged = true");
      }
      if (!((((__result.self.hardwareAlarmActive === true)) ? ((__result.self.hardwareAlarmActive === true)) : ((__result.self.lowReservoirAlarmActive === false))))) {
        postViolations.push("[AlarmManagerComponent.acknowledgeAlarm] post violated: if self.hardwareAlarmActive = true then\n            self.hardwareAlarmActive = true\n          else\n            self.lowReservoirAlarmActive = false\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.clearHardwareAlarm. User supplies this. */
export type AlarmManagerComponentClearHardwareAlarmImpl = (self: AlarmManagerComponent) => { self: AlarmManagerComponent; modified: { hardwareAlarmActive: unknown; alarmMessage: unknown } };

/** Contract-checking wrapper for AlarmManagerComponent.clearHardwareAlarm. */
export function wrapAlarmManagerComponentClearHardwareAlarm(impl: AlarmManagerComponentClearHardwareAlarmImpl): (self: AlarmManagerComponent) => AlarmManagerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.hardwareAlarmActive === true))) {
      preViolations.push("[AlarmManagerComponent.clearHardwareAlarm] pre violated: self.hardwareAlarmActive = true");
    }
    if (!((self.acknowledged === true))) {
      preViolations.push("[AlarmManagerComponent.clearHardwareAlarm] pre violated: self.acknowledged = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.hardwareAlarmActive === false))) {
        postViolations.push("[AlarmManagerComponent.clearHardwareAlarm] post violated: self.hardwareAlarmActive = false");
      }
      if (!((__result.self.alarmMessage === ""))) {
        postViolations.push("[AlarmManagerComponent.clearHardwareAlarm] post violated: self.alarmMessage = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.clearHardwareAlarm (async). User supplies this. */
export type AlarmManagerComponentClearHardwareAlarmAsyncImpl = (self: AlarmManagerComponent) => Promise<{ self: AlarmManagerComponent; modified: { hardwareAlarmActive: unknown; alarmMessage: unknown } }>;

/** Contract-checking wrapper for AlarmManagerComponent.clearHardwareAlarm (async). */
export function wrapAlarmManagerComponentClearHardwareAlarmAsync(impl: AlarmManagerComponentClearHardwareAlarmAsyncImpl): (self: AlarmManagerComponent) => Promise<AlarmManagerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.hardwareAlarmActive === true))) {
      preViolations.push("[AlarmManagerComponent.clearHardwareAlarm] pre violated: self.hardwareAlarmActive = true");
    }
    if (!((self.acknowledged === true))) {
      preViolations.push("[AlarmManagerComponent.clearHardwareAlarm] pre violated: self.acknowledged = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.hardwareAlarmActive === false))) {
        postViolations.push("[AlarmManagerComponent.clearHardwareAlarm] post violated: self.hardwareAlarmActive = false");
      }
      if (!((__result.self.alarmMessage === ""))) {
        postViolations.push("[AlarmManagerComponent.clearHardwareAlarm] post violated: self.alarmMessage = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.clearLowReservoirAlarm. User supplies this. */
export type AlarmManagerComponentClearLowReservoirAlarmImpl = (self: AlarmManagerComponent) => { self: AlarmManagerComponent; modified: { lowReservoirAlarmActive: unknown } };

/** Contract-checking wrapper for AlarmManagerComponent.clearLowReservoirAlarm. */
export function wrapAlarmManagerComponentClearLowReservoirAlarm(impl: AlarmManagerComponentClearLowReservoirAlarmImpl): (self: AlarmManagerComponent) => AlarmManagerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.lowReservoirAlarmActive === true))) {
      preViolations.push("[AlarmManagerComponent.clearLowReservoirAlarm] pre violated: self.lowReservoirAlarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === false))) {
        postViolations.push("[AlarmManagerComponent.clearLowReservoirAlarm] post violated: self.lowReservoirAlarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManagerComponent.clearLowReservoirAlarm (async). User supplies this. */
export type AlarmManagerComponentClearLowReservoirAlarmAsyncImpl = (self: AlarmManagerComponent) => Promise<{ self: AlarmManagerComponent; modified: { lowReservoirAlarmActive: unknown } }>;

/** Contract-checking wrapper for AlarmManagerComponent.clearLowReservoirAlarm (async). */
export function wrapAlarmManagerComponentClearLowReservoirAlarmAsync(impl: AlarmManagerComponentClearLowReservoirAlarmAsyncImpl): (self: AlarmManagerComponent) => Promise<AlarmManagerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.lowReservoirAlarmActive === true))) {
      preViolations.push("[AlarmManagerComponent.clearLowReservoirAlarm] pre violated: self.lowReservoirAlarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === false))) {
        postViolations.push("[AlarmManagerComponent.clearLowReservoirAlarm] post violated: self.lowReservoirAlarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerComponent.runSelfTest. User supplies this. */
export type SelfTestControllerComponentRunSelfTestImpl = (self: SelfTestControllerComponent) => { self: SelfTestControllerComponent; modified: { lastTestPassed: unknown; lastTestTimestampSec: unknown; testRunning: unknown } };

/** Contract-checking wrapper for SelfTestControllerComponent.runSelfTest. */
export function wrapSelfTestControllerComponentRunSelfTest(impl: SelfTestControllerComponentRunSelfTestImpl): (self: SelfTestControllerComponent) => SelfTestControllerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.testRunning))) {
      preViolations.push("[SelfTestControllerComponent.runSelfTest] pre violated: not self.testRunning");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTestTimestampSec": self.lastTestTimestampSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastTestPassed === true))) {
        postViolations.push("[SelfTestControllerComponent.runSelfTest] post violated: self.lastTestPassed = true");
      }
      if (!((__result.self.lastTestTimestampSec === (__pre["self.lastTestTimestampSec"] + __result.self.testIntervalSec)))) {
        postViolations.push("[SelfTestControllerComponent.runSelfTest] post violated: self.lastTestTimestampSec = self.lastTestTimestampSec@pre + self.testIntervalSec");
      }
      if (!((__result.self.testRunning === true))) {
        postViolations.push("[SelfTestControllerComponent.runSelfTest] post violated: self.testRunning = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerComponent.runSelfTest (async). User supplies this. */
export type SelfTestControllerComponentRunSelfTestAsyncImpl = (self: SelfTestControllerComponent) => Promise<{ self: SelfTestControllerComponent; modified: { lastTestPassed: unknown; lastTestTimestampSec: unknown; testRunning: unknown } }>;

/** Contract-checking wrapper for SelfTestControllerComponent.runSelfTest (async). */
export function wrapSelfTestControllerComponentRunSelfTestAsync(impl: SelfTestControllerComponentRunSelfTestAsyncImpl): (self: SelfTestControllerComponent) => Promise<SelfTestControllerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.testRunning))) {
      preViolations.push("[SelfTestControllerComponent.runSelfTest] pre violated: not self.testRunning");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTestTimestampSec": self.lastTestTimestampSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastTestPassed === true))) {
        postViolations.push("[SelfTestControllerComponent.runSelfTest] post violated: self.lastTestPassed = true");
      }
      if (!((__result.self.lastTestTimestampSec === (__pre["self.lastTestTimestampSec"] + __result.self.testIntervalSec)))) {
        postViolations.push("[SelfTestControllerComponent.runSelfTest] post violated: self.lastTestTimestampSec = self.lastTestTimestampSec@pre + self.testIntervalSec");
      }
      if (!((__result.self.testRunning === true))) {
        postViolations.push("[SelfTestControllerComponent.runSelfTest] post violated: self.testRunning = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerComponent.completeSelfTest. User supplies this. */
export type SelfTestControllerComponentCompleteSelfTestImpl = (self: SelfTestControllerComponent, passed: boolean) => { self: SelfTestControllerComponent; modified: { lastTestPassed: unknown; testRunning: unknown } };

/** Contract-checking wrapper for SelfTestControllerComponent.completeSelfTest. */
export function wrapSelfTestControllerComponentCompleteSelfTest(impl: SelfTestControllerComponentCompleteSelfTestImpl): (self: SelfTestControllerComponent, passed: boolean) => SelfTestControllerComponent {
  return (self, passed) => {
    const preViolations: string[] = [];
    if (!(self.testRunning)) {
      preViolations.push("[SelfTestControllerComponent.completeSelfTest] pre violated: self.testRunning");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, passed);
      const postViolations: string[] = [];
      if (!((__result.self.lastTestPassed === passed))) {
        postViolations.push("[SelfTestControllerComponent.completeSelfTest] post violated: self.lastTestPassed = passed");
      }
      if (!((__result.self.testRunning === false))) {
        postViolations.push("[SelfTestControllerComponent.completeSelfTest] post violated: self.testRunning = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerComponent.completeSelfTest (async). User supplies this. */
export type SelfTestControllerComponentCompleteSelfTestAsyncImpl = (self: SelfTestControllerComponent, passed: boolean) => Promise<{ self: SelfTestControllerComponent; modified: { lastTestPassed: unknown; testRunning: unknown } }>;

/** Contract-checking wrapper for SelfTestControllerComponent.completeSelfTest (async). */
export function wrapSelfTestControllerComponentCompleteSelfTestAsync(impl: SelfTestControllerComponentCompleteSelfTestAsyncImpl): (self: SelfTestControllerComponent, passed: boolean) => Promise<SelfTestControllerComponent> {
  return async (self, passed) => {
    const preViolations: string[] = [];
    if (!(self.testRunning)) {
      preViolations.push("[SelfTestControllerComponent.completeSelfTest] pre violated: self.testRunning");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, passed);
      const postViolations: string[] = [];
      if (!((__result.self.lastTestPassed === passed))) {
        postViolations.push("[SelfTestControllerComponent.completeSelfTest] post violated: self.lastTestPassed = passed");
      }
      if (!((__result.self.testRunning === false))) {
        postViolations.push("[SelfTestControllerComponent.completeSelfTest] post violated: self.testRunning = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerComponent.setTestInterval. User supplies this. */
export type SelfTestControllerComponentSetTestIntervalImpl = (self: SelfTestControllerComponent, intervalSec: number) => { self: SelfTestControllerComponent; modified: { testIntervalSec: unknown } };

/** Contract-checking wrapper for SelfTestControllerComponent.setTestInterval. */
export function wrapSelfTestControllerComponentSetTestInterval(impl: SelfTestControllerComponentSetTestIntervalImpl): (self: SelfTestControllerComponent, intervalSec: number) => SelfTestControllerComponent {
  return (self, intervalSec) => {
    const preViolations: string[] = [];
    if (!((intervalSec > 0))) {
      preViolations.push("[SelfTestControllerComponent.setTestInterval] pre violated: intervalSec > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, intervalSec);
      const postViolations: string[] = [];
      if (!((__result.self.testIntervalSec === intervalSec))) {
        postViolations.push("[SelfTestControllerComponent.setTestInterval] post violated: self.testIntervalSec = intervalSec");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerComponent.setTestInterval (async). User supplies this. */
export type SelfTestControllerComponentSetTestIntervalAsyncImpl = (self: SelfTestControllerComponent, intervalSec: number) => Promise<{ self: SelfTestControllerComponent; modified: { testIntervalSec: unknown } }>;

/** Contract-checking wrapper for SelfTestControllerComponent.setTestInterval (async). */
export function wrapSelfTestControllerComponentSetTestIntervalAsync(impl: SelfTestControllerComponentSetTestIntervalAsyncImpl): (self: SelfTestControllerComponent, intervalSec: number) => Promise<SelfTestControllerComponent> {
  return async (self, intervalSec) => {
    const preViolations: string[] = [];
    if (!((intervalSec > 0))) {
      preViolations.push("[SelfTestControllerComponent.setTestInterval] pre violated: intervalSec > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, intervalSec);
      const postViolations: string[] = [];
      if (!((__result.self.testIntervalSec === intervalSec))) {
        postViolations.push("[SelfTestControllerComponent.setTestInterval] post violated: self.testIntervalSec = intervalSec");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.startSystem. User supplies this. */
export type ControllerComponentStartSystemImpl = (self: ControllerComponent) => { self: ControllerComponent; modified: { systemOperating: unknown; state: unknown } };

/** Contract-checking wrapper for ControllerComponent.startSystem. */
export function wrapControllerComponentStartSystem(impl: ControllerComponentStartSystemImpl): (self: ControllerComponent) => ControllerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.systemOperating))) {
      preViolations.push("[ControllerComponent.startSystem] pre violated: not self.systemOperating");
    }
    if (!(!(self.systemFaultDetected))) {
      preViolations.push("[ControllerComponent.startSystem] pre violated: not self.systemFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemOperating === true))) {
        postViolations.push("[ControllerComponent.startSystem] post violated: self.systemOperating = true");
      }
      if (!((__result.self.state === "IDLE"))) {
        postViolations.push("[ControllerComponent.startSystem] post violated: self.state = 'IDLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.startSystem (async). User supplies this. */
export type ControllerComponentStartSystemAsyncImpl = (self: ControllerComponent) => Promise<{ self: ControllerComponent; modified: { systemOperating: unknown; state: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.startSystem (async). */
export function wrapControllerComponentStartSystemAsync(impl: ControllerComponentStartSystemAsyncImpl): (self: ControllerComponent) => Promise<ControllerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.systemOperating))) {
      preViolations.push("[ControllerComponent.startSystem] pre violated: not self.systemOperating");
    }
    if (!(!(self.systemFaultDetected))) {
      preViolations.push("[ControllerComponent.startSystem] pre violated: not self.systemFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemOperating === true))) {
        postViolations.push("[ControllerComponent.startSystem] post violated: self.systemOperating = true");
      }
      if (!((__result.self.state === "IDLE"))) {
        postViolations.push("[ControllerComponent.startSystem] post violated: self.state = 'IDLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.requestReading. User supplies this. */
export type ControllerComponentRequestReadingImpl = (self: ControllerComponent) => { self: ControllerComponent; modified: { state: unknown } };

/** Contract-checking wrapper for ControllerComponent.requestReading. */
export function wrapControllerComponentRequestReading(impl: ControllerComponentRequestReadingImpl): (self: ControllerComponent) => ControllerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "IDLE"))) {
      preViolations.push("[ControllerComponent.requestReading] pre violated: self.state = 'IDLE'");
    }
    if (!(self.systemOperating)) {
      preViolations.push("[ControllerComponent.requestReading] pre violated: self.systemOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "READING"))) {
        postViolations.push("[ControllerComponent.requestReading] post violated: self.state = 'READING'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.requestReading (async). User supplies this. */
export type ControllerComponentRequestReadingAsyncImpl = (self: ControllerComponent) => Promise<{ self: ControllerComponent; modified: { state: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.requestReading (async). */
export function wrapControllerComponentRequestReadingAsync(impl: ControllerComponentRequestReadingAsyncImpl): (self: ControllerComponent) => Promise<ControllerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "IDLE"))) {
      preViolations.push("[ControllerComponent.requestReading] pre violated: self.state = 'IDLE'");
    }
    if (!(self.systemOperating)) {
      preViolations.push("[ControllerComponent.requestReading] pre violated: self.systemOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "READING"))) {
        postViolations.push("[ControllerComponent.requestReading] post violated: self.state = 'READING'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.processReading. User supplies this. */
export type ControllerComponentProcessReadingImpl = (self: ControllerComponent, sugar: number, rate: number) => { self: ControllerComponent; modified: { state: unknown } };

/** Contract-checking wrapper for ControllerComponent.processReading. */
export function wrapControllerComponentProcessReading(impl: ControllerComponentProcessReadingImpl): (self: ControllerComponent, sugar: number, rate: number) => ControllerComponent {
  return (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((self.state === "READING"))) {
      preViolations.push("[ControllerComponent.processReading] pre violated: self.state = 'READING'");
    }
    if (!((sugar >= 0))) {
      preViolations.push("[ControllerComponent.processReading] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[ControllerComponent.processReading] pre violated: rate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar, rate);
      const postViolations: string[] = [];
      if (!(((((sugar >= __result.self.safeLowerBound) && (sugar <= __result.self.safeUpperBound))) ? ((__result.self.state === "IDLE")) : ((((rate === 0)) ? ((__result.self.state === "IDLE")) : ((__result.self.state === "CALCULATING"))))))) {
        postViolations.push("[ControllerComponent.processReading] post violated: if sugar >= self.safeLowerBound and sugar <= self.safeUpperBound then\n            self.state = 'IDLE'\n          else if rate = 0.0 then\n            self.state = 'IDLE'\n          else\n            self.state = 'CALCULATING'\n          endif endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.processReading (async). User supplies this. */
export type ControllerComponentProcessReadingAsyncImpl = (self: ControllerComponent, sugar: number, rate: number) => Promise<{ self: ControllerComponent; modified: { state: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.processReading (async). */
export function wrapControllerComponentProcessReadingAsync(impl: ControllerComponentProcessReadingAsyncImpl): (self: ControllerComponent, sugar: number, rate: number) => Promise<ControllerComponent> {
  return async (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((self.state === "READING"))) {
      preViolations.push("[ControllerComponent.processReading] pre violated: self.state = 'READING'");
    }
    if (!((sugar >= 0))) {
      preViolations.push("[ControllerComponent.processReading] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[ControllerComponent.processReading] pre violated: rate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar, rate);
      const postViolations: string[] = [];
      if (!(((((sugar >= __result.self.safeLowerBound) && (sugar <= __result.self.safeUpperBound))) ? ((__result.self.state === "IDLE")) : ((((rate === 0)) ? ((__result.self.state === "IDLE")) : ((__result.self.state === "CALCULATING"))))))) {
        postViolations.push("[ControllerComponent.processReading] post violated: if sugar >= self.safeLowerBound and sugar <= self.safeUpperBound then\n            self.state = 'IDLE'\n          else if rate = 0.0 then\n            self.state = 'IDLE'\n          else\n            self.state = 'CALCULATING'\n          endif endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.approveDose. User supplies this. */
export type ControllerComponentApproveDoseImpl = (self: ControllerComponent, dose: number) => { self: ControllerComponent; modified: { state: unknown; lastDoseDelivered: unknown; doseCount: unknown } };

/** Contract-checking wrapper for ControllerComponent.approveDose. */
export function wrapControllerComponentApproveDose(impl: ControllerComponentApproveDoseImpl): (self: ControllerComponent, dose: number) => ControllerComponent {
  return (self, dose) => {
    const preViolations: string[] = [];
    if (!((self.state === "CALCULATING"))) {
      preViolations.push("[ControllerComponent.approveDose] pre violated: self.state = 'CALCULATING'");
    }
    if (!((dose > 0))) {
      preViolations.push("[ControllerComponent.approveDose] pre violated: dose > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.doseCount": self.doseCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.state === "DELIVERING"))) {
        postViolations.push("[ControllerComponent.approveDose] post violated: self.state = 'DELIVERING'");
      }
      if (!((__result.self.lastDoseDelivered === dose))) {
        postViolations.push("[ControllerComponent.approveDose] post violated: self.lastDoseDelivered = dose");
      }
      if (!((__result.self.doseCount === (__pre["self.doseCount"] + 1)))) {
        postViolations.push("[ControllerComponent.approveDose] post violated: self.doseCount = self.doseCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.approveDose (async). User supplies this. */
export type ControllerComponentApproveDoseAsyncImpl = (self: ControllerComponent, dose: number) => Promise<{ self: ControllerComponent; modified: { state: unknown; lastDoseDelivered: unknown; doseCount: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.approveDose (async). */
export function wrapControllerComponentApproveDoseAsync(impl: ControllerComponentApproveDoseAsyncImpl): (self: ControllerComponent, dose: number) => Promise<ControllerComponent> {
  return async (self, dose) => {
    const preViolations: string[] = [];
    if (!((self.state === "CALCULATING"))) {
      preViolations.push("[ControllerComponent.approveDose] pre violated: self.state = 'CALCULATING'");
    }
    if (!((dose > 0))) {
      preViolations.push("[ControllerComponent.approveDose] pre violated: dose > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.doseCount": self.doseCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.state === "DELIVERING"))) {
        postViolations.push("[ControllerComponent.approveDose] post violated: self.state = 'DELIVERING'");
      }
      if (!((__result.self.lastDoseDelivered === dose))) {
        postViolations.push("[ControllerComponent.approveDose] post violated: self.lastDoseDelivered = dose");
      }
      if (!((__result.self.doseCount === (__pre["self.doseCount"] + 1)))) {
        postViolations.push("[ControllerComponent.approveDose] post violated: self.doseCount = self.doseCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.confirmDeliveryComplete. User supplies this. */
export type ControllerComponentConfirmDeliveryCompleteImpl = (self: ControllerComponent) => { self: ControllerComponent; modified: { state: unknown } };

/** Contract-checking wrapper for ControllerComponent.confirmDeliveryComplete. */
export function wrapControllerComponentConfirmDeliveryComplete(impl: ControllerComponentConfirmDeliveryCompleteImpl): (self: ControllerComponent) => ControllerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "DELIVERING"))) {
      preViolations.push("[ControllerComponent.confirmDeliveryComplete] pre violated: self.state = 'DELIVERING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "IDLE"))) {
        postViolations.push("[ControllerComponent.confirmDeliveryComplete] post violated: self.state = 'IDLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.confirmDeliveryComplete (async). User supplies this. */
export type ControllerComponentConfirmDeliveryCompleteAsyncImpl = (self: ControllerComponent) => Promise<{ self: ControllerComponent; modified: { state: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.confirmDeliveryComplete (async). */
export function wrapControllerComponentConfirmDeliveryCompleteAsync(impl: ControllerComponentConfirmDeliveryCompleteAsyncImpl): (self: ControllerComponent) => Promise<ControllerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "DELIVERING"))) {
      preViolations.push("[ControllerComponent.confirmDeliveryComplete] pre violated: self.state = 'DELIVERING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "IDLE"))) {
        postViolations.push("[ControllerComponent.confirmDeliveryComplete] post violated: self.state = 'IDLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.handleFault. User supplies this. */
export type ControllerComponentHandleFaultImpl = (self: ControllerComponent, faultDescription: string) => { self: ControllerComponent; modified: { systemFaultDetected: unknown; systemOperating: unknown; state: unknown } };

/** Contract-checking wrapper for ControllerComponent.handleFault. */
export function wrapControllerComponentHandleFault(impl: ControllerComponentHandleFaultImpl): (self: ControllerComponent, faultDescription: string) => ControllerComponent {
  return (self, faultDescription) => {
    const preViolations: string[] = [];
    if (!(self.systemOperating)) {
      preViolations.push("[ControllerComponent.handleFault] pre violated: self.systemOperating");
    }
    if (!(!(self.systemFaultDetected))) {
      preViolations.push("[ControllerComponent.handleFault] pre violated: not self.systemFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultDescription);
      const postViolations: string[] = [];
      if (!((__result.self.systemFaultDetected === true))) {
        postViolations.push("[ControllerComponent.handleFault] post violated: self.systemFaultDetected = true");
      }
      if (!((__result.self.systemOperating === false))) {
        postViolations.push("[ControllerComponent.handleFault] post violated: self.systemOperating = false");
      }
      if (!((__result.self.state === "FAULT"))) {
        postViolations.push("[ControllerComponent.handleFault] post violated: self.state = 'FAULT'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.handleFault (async). User supplies this. */
export type ControllerComponentHandleFaultAsyncImpl = (self: ControllerComponent, faultDescription: string) => Promise<{ self: ControllerComponent; modified: { systemFaultDetected: unknown; systemOperating: unknown; state: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.handleFault (async). */
export function wrapControllerComponentHandleFaultAsync(impl: ControllerComponentHandleFaultAsyncImpl): (self: ControllerComponent, faultDescription: string) => Promise<ControllerComponent> {
  return async (self, faultDescription) => {
    const preViolations: string[] = [];
    if (!(self.systemOperating)) {
      preViolations.push("[ControllerComponent.handleFault] pre violated: self.systemOperating");
    }
    if (!(!(self.systemFaultDetected))) {
      preViolations.push("[ControllerComponent.handleFault] pre violated: not self.systemFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultDescription);
      const postViolations: string[] = [];
      if (!((__result.self.systemFaultDetected === true))) {
        postViolations.push("[ControllerComponent.handleFault] post violated: self.systemFaultDetected = true");
      }
      if (!((__result.self.systemOperating === false))) {
        postViolations.push("[ControllerComponent.handleFault] post violated: self.systemOperating = false");
      }
      if (!((__result.self.state === "FAULT"))) {
        postViolations.push("[ControllerComponent.handleFault] post violated: self.state = 'FAULT'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.clearFault. User supplies this. */
export type ControllerComponentClearFaultImpl = (self: ControllerComponent) => { self: ControllerComponent; modified: { systemFaultDetected: unknown; systemOperating: unknown; state: unknown } };

/** Contract-checking wrapper for ControllerComponent.clearFault. */
export function wrapControllerComponentClearFault(impl: ControllerComponentClearFaultImpl): (self: ControllerComponent) => ControllerComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.systemFaultDetected === true))) {
      preViolations.push("[ControllerComponent.clearFault] pre violated: self.systemFaultDetected = true");
    }
    if (!((self.state === "FAULT"))) {
      preViolations.push("[ControllerComponent.clearFault] pre violated: self.state = 'FAULT'");
    }
    if (!(!(self.systemOperating))) {
      preViolations.push("[ControllerComponent.clearFault] pre violated: not self.systemOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemFaultDetected === false))) {
        postViolations.push("[ControllerComponent.clearFault] post violated: self.systemFaultDetected = false");
      }
      if (!((__result.self.systemOperating === true))) {
        postViolations.push("[ControllerComponent.clearFault] post violated: self.systemOperating = true");
      }
      if (!((__result.self.state === "IDLE"))) {
        postViolations.push("[ControllerComponent.clearFault] post violated: self.state = 'IDLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.clearFault (async). User supplies this. */
export type ControllerComponentClearFaultAsyncImpl = (self: ControllerComponent) => Promise<{ self: ControllerComponent; modified: { systemFaultDetected: unknown; systemOperating: unknown; state: unknown } }>;

/** Contract-checking wrapper for ControllerComponent.clearFault (async). */
export function wrapControllerComponentClearFaultAsync(impl: ControllerComponentClearFaultAsyncImpl): (self: ControllerComponent) => Promise<ControllerComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.systemFaultDetected === true))) {
      preViolations.push("[ControllerComponent.clearFault] pre violated: self.systemFaultDetected = true");
    }
    if (!((self.state === "FAULT"))) {
      preViolations.push("[ControllerComponent.clearFault] pre violated: self.state = 'FAULT'");
    }
    if (!(!(self.systemOperating))) {
      preViolations.push("[ControllerComponent.clearFault] pre violated: not self.systemOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemFaultDetected === false))) {
        postViolations.push("[ControllerComponent.clearFault] post violated: self.systemFaultDetected = false");
      }
      if (!((__result.self.systemOperating === true))) {
        postViolations.push("[ControllerComponent.clearFault] post violated: self.systemOperating = true");
      }
      if (!((__result.self.state === "IDLE"))) {
        postViolations.push("[ControllerComponent.clearFault] post violated: self.state = 'IDLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.checkReservoirLevel. User supplies this. */
export type ControllerComponentCheckReservoirLevelImpl = (self: ControllerComponent, remainingUnits: number) => { self: ControllerComponent; modified: {} };

/** Contract-checking wrapper for ControllerComponent.checkReservoirLevel. */
export function wrapControllerComponentCheckReservoirLevel(impl: ControllerComponentCheckReservoirLevelImpl): (self: ControllerComponent, remainingUnits: number) => ControllerComponent {
  return (self, remainingUnits) => {
    const preViolations: string[] = [];
    if (!(self.systemOperating)) {
      preViolations.push("[ControllerComponent.checkReservoirLevel] pre violated: self.systemOperating");
    }
    if (!((remainingUnits >= 0))) {
      preViolations.push("[ControllerComponent.checkReservoirLevel] pre violated: remainingUnits >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, remainingUnits);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[ControllerComponent.checkReservoirLevel] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerComponent.checkReservoirLevel (async). User supplies this. */
export type ControllerComponentCheckReservoirLevelAsyncImpl = (self: ControllerComponent, remainingUnits: number) => Promise<{ self: ControllerComponent; modified: {} }>;

/** Contract-checking wrapper for ControllerComponent.checkReservoirLevel (async). */
export function wrapControllerComponentCheckReservoirLevelAsync(impl: ControllerComponentCheckReservoirLevelAsyncImpl): (self: ControllerComponent, remainingUnits: number) => Promise<ControllerComponent> {
  return async (self, remainingUnits) => {
    const preViolations: string[] = [];
    if (!(self.systemOperating)) {
      preViolations.push("[ControllerComponent.checkReservoirLevel] pre violated: self.systemOperating");
    }
    if (!((remainingUnits >= 0))) {
      preViolations.push("[ControllerComponent.checkReservoirLevel] pre violated: remainingUnits >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, remainingUnits);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[ControllerComponent.checkReservoirLevel] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorControllerChannel.transmitReading. User supplies this. */
export type SensorControllerChannelTransmitReadingImpl = (self: SensorControllerChannel, sugar: number, rate: number) => { self: SensorControllerChannel; modified: { lastTransmissionTimestamp: unknown } };

/** Contract-checking wrapper for SensorControllerChannel.transmitReading. */
export function wrapSensorControllerChannelTransmitReading(impl: SensorControllerChannelTransmitReadingImpl): (self: SensorControllerChannel, sugar: number, rate: number) => SensorControllerChannel {
  return (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[SensorControllerChannel.transmitReading] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[SensorControllerChannel.transmitReading] pre violated: rate >= 0.0");
    }
    if (!(!(self.transmissionFaultDetected))) {
      preViolations.push("[SensorControllerChannel.transmitReading] pre violated: not self.transmissionFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTransmissionTimestamp": self.lastTransmissionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar, rate);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmissionTimestamp === (__pre["self.lastTransmissionTimestamp"] + 1)))) {
        postViolations.push("[SensorControllerChannel.transmitReading] post violated: self.lastTransmissionTimestamp = self.lastTransmissionTimestamp@pre + 1.0");
      }
      if (!(true)) {
        postViolations.push("[SensorControllerChannel.transmitReading] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorControllerChannel.transmitReading (async). User supplies this. */
export type SensorControllerChannelTransmitReadingAsyncImpl = (self: SensorControllerChannel, sugar: number, rate: number) => Promise<{ self: SensorControllerChannel; modified: { lastTransmissionTimestamp: unknown } }>;

/** Contract-checking wrapper for SensorControllerChannel.transmitReading (async). */
export function wrapSensorControllerChannelTransmitReadingAsync(impl: SensorControllerChannelTransmitReadingAsyncImpl): (self: SensorControllerChannel, sugar: number, rate: number) => Promise<SensorControllerChannel> {
  return async (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[SensorControllerChannel.transmitReading] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[SensorControllerChannel.transmitReading] pre violated: rate >= 0.0");
    }
    if (!(!(self.transmissionFaultDetected))) {
      preViolations.push("[SensorControllerChannel.transmitReading] pre violated: not self.transmissionFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTransmissionTimestamp": self.lastTransmissionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar, rate);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmissionTimestamp === (__pre["self.lastTransmissionTimestamp"] + 1)))) {
        postViolations.push("[SensorControllerChannel.transmitReading] post violated: self.lastTransmissionTimestamp = self.lastTransmissionTimestamp@pre + 1.0");
      }
      if (!(true)) {
        postViolations.push("[SensorControllerChannel.transmitReading] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorControllerChannel.detectTransmissionFault. User supplies this. */
export type SensorControllerChannelDetectTransmissionFaultImpl = (self: SensorControllerChannel) => { self: SensorControllerChannel; modified: { transmissionFaultDetected: unknown } };

/** Contract-checking wrapper for SensorControllerChannel.detectTransmissionFault. */
export function wrapSensorControllerChannelDetectTransmissionFault(impl: SensorControllerChannelDetectTransmissionFaultImpl): (self: SensorControllerChannel) => SensorControllerChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.transmissionFaultDetected))) {
      preViolations.push("[SensorControllerChannel.detectTransmissionFault] pre violated: not self.transmissionFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transmissionFaultDetected === true))) {
        postViolations.push("[SensorControllerChannel.detectTransmissionFault] post violated: self.transmissionFaultDetected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorControllerChannel.detectTransmissionFault (async). User supplies this. */
export type SensorControllerChannelDetectTransmissionFaultAsyncImpl = (self: SensorControllerChannel) => Promise<{ self: SensorControllerChannel; modified: { transmissionFaultDetected: unknown } }>;

/** Contract-checking wrapper for SensorControllerChannel.detectTransmissionFault (async). */
export function wrapSensorControllerChannelDetectTransmissionFaultAsync(impl: SensorControllerChannelDetectTransmissionFaultAsyncImpl): (self: SensorControllerChannel) => Promise<SensorControllerChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.transmissionFaultDetected))) {
      preViolations.push("[SensorControllerChannel.detectTransmissionFault] pre violated: not self.transmissionFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transmissionFaultDetected === true))) {
        postViolations.push("[SensorControllerChannel.detectTransmissionFault] post violated: self.transmissionFaultDetected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CalculatorControllerChannel.transmitDose. User supplies this. */
export type CalculatorControllerChannelTransmitDoseImpl = (self: CalculatorControllerChannel, dose: number) => { self: CalculatorControllerChannel; modified: { lastTransmissionTimestamp: unknown } };

/** Contract-checking wrapper for CalculatorControllerChannel.transmitDose. */
export function wrapCalculatorControllerChannelTransmitDose(impl: CalculatorControllerChannelTransmitDoseImpl): (self: CalculatorControllerChannel, dose: number) => CalculatorControllerChannel {
  return (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[CalculatorControllerChannel.transmitDose] pre violated: dose > 0.0");
    }
    // SKIPPED pre-clause (not translatable): DoseCalculatorComponent.allInstances()->forAll(c | c.safeMaxDose >= dose) — method call '.allInstances(...)' not translatable in Phase 10.5
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTransmissionTimestamp": self.lastTransmissionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmissionTimestamp === (__pre["self.lastTransmissionTimestamp"] + 1)))) {
        postViolations.push("[CalculatorControllerChannel.transmitDose] post violated: self.lastTransmissionTimestamp = self.lastTransmissionTimestamp@pre + 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CalculatorControllerChannel.transmitDose (async). User supplies this. */
export type CalculatorControllerChannelTransmitDoseAsyncImpl = (self: CalculatorControllerChannel, dose: number) => Promise<{ self: CalculatorControllerChannel; modified: { lastTransmissionTimestamp: unknown } }>;

/** Contract-checking wrapper for CalculatorControllerChannel.transmitDose (async). */
export function wrapCalculatorControllerChannelTransmitDoseAsync(impl: CalculatorControllerChannelTransmitDoseAsyncImpl): (self: CalculatorControllerChannel, dose: number) => Promise<CalculatorControllerChannel> {
  return async (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[CalculatorControllerChannel.transmitDose] pre violated: dose > 0.0");
    }
    // SKIPPED pre-clause (not translatable): DoseCalculatorComponent.allInstances()->forAll(c | c.safeMaxDose >= dose) — method call '.allInstances(...)' not translatable in Phase 10.5
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTransmissionTimestamp": self.lastTransmissionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmissionTimestamp === (__pre["self.lastTransmissionTimestamp"] + 1)))) {
        postViolations.push("[CalculatorControllerChannel.transmitDose] post violated: self.lastTransmissionTimestamp = self.lastTransmissionTimestamp@pre + 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerActuatorChannel.transmitDeliveryCommand. User supplies this. */
export type ControllerActuatorChannelTransmitDeliveryCommandImpl = (self: ControllerActuatorChannel, dose: number) => { self: ControllerActuatorChannel; modified: { lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ControllerActuatorChannel.transmitDeliveryCommand. */
export function wrapControllerActuatorChannelTransmitDeliveryCommand(impl: ControllerActuatorChannelTransmitDeliveryCommandImpl): (self: ControllerActuatorChannel, dose: number) => ControllerActuatorChannel {
  return (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[ControllerActuatorChannel.transmitDeliveryCommand] pre violated: dose > 0.0");
    }
    if (!(!(self.commandFaultDetected))) {
      preViolations.push("[ControllerActuatorChannel.transmitDeliveryCommand] pre violated: not self.commandFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommandTimestamp === (__pre["self.lastCommandTimestamp"] + 1)))) {
        postViolations.push("[ControllerActuatorChannel.transmitDeliveryCommand] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre + 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerActuatorChannel.transmitDeliveryCommand (async). User supplies this. */
export type ControllerActuatorChannelTransmitDeliveryCommandAsyncImpl = (self: ControllerActuatorChannel, dose: number) => Promise<{ self: ControllerActuatorChannel; modified: { lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ControllerActuatorChannel.transmitDeliveryCommand (async). */
export function wrapControllerActuatorChannelTransmitDeliveryCommandAsync(impl: ControllerActuatorChannelTransmitDeliveryCommandAsyncImpl): (self: ControllerActuatorChannel, dose: number) => Promise<ControllerActuatorChannel> {
  return async (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[ControllerActuatorChannel.transmitDeliveryCommand] pre violated: dose > 0.0");
    }
    if (!(!(self.commandFaultDetected))) {
      preViolations.push("[ControllerActuatorChannel.transmitDeliveryCommand] pre violated: not self.commandFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommandTimestamp === (__pre["self.lastCommandTimestamp"] + 1)))) {
        postViolations.push("[ControllerActuatorChannel.transmitDeliveryCommand] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre + 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerActuatorChannel.detectCommandFault. User supplies this. */
export type ControllerActuatorChannelDetectCommandFaultImpl = (self: ControllerActuatorChannel) => { self: ControllerActuatorChannel; modified: { commandFaultDetected: unknown } };

/** Contract-checking wrapper for ControllerActuatorChannel.detectCommandFault. */
export function wrapControllerActuatorChannelDetectCommandFault(impl: ControllerActuatorChannelDetectCommandFaultImpl): (self: ControllerActuatorChannel) => ControllerActuatorChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.commandFaultDetected))) {
      preViolations.push("[ControllerActuatorChannel.detectCommandFault] pre violated: not self.commandFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.commandFaultDetected === true))) {
        postViolations.push("[ControllerActuatorChannel.detectCommandFault] post violated: self.commandFaultDetected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ControllerActuatorChannel.detectCommandFault (async). User supplies this. */
export type ControllerActuatorChannelDetectCommandFaultAsyncImpl = (self: ControllerActuatorChannel) => Promise<{ self: ControllerActuatorChannel; modified: { commandFaultDetected: unknown } }>;

/** Contract-checking wrapper for ControllerActuatorChannel.detectCommandFault (async). */
export function wrapControllerActuatorChannelDetectCommandFaultAsync(impl: ControllerActuatorChannelDetectCommandFaultAsyncImpl): (self: ControllerActuatorChannel) => Promise<ControllerActuatorChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.commandFaultDetected))) {
      preViolations.push("[ControllerActuatorChannel.detectCommandFault] pre violated: not self.commandFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.commandFaultDetected === true))) {
        postViolations.push("[ControllerActuatorChannel.detectCommandFault] post violated: self.commandFaultDetected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerChannel.transmitTestCommand. User supplies this. */
export type SelfTestControllerChannelTransmitTestCommandImpl = (self: SelfTestControllerChannel) => { self: SelfTestControllerChannel; modified: {} };

/** Contract-checking wrapper for SelfTestControllerChannel.transmitTestCommand. */
export function wrapSelfTestControllerChannelTransmitTestCommand(impl: SelfTestControllerChannelTransmitTestCommandImpl): (self: SelfTestControllerChannel) => SelfTestControllerChannel {
  return (self) => {
    const preViolations: string[] = [];
    // SKIPPED pre-clause (not translatable): SelfTestControllerComponent.allInstances()->exists(t | not t.testRunning) — method call '.allInstances(...)' not translatable in Phase 10.5
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SelfTestControllerChannel.transmitTestCommand] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SelfTestControllerChannel.transmitTestCommand (async). User supplies this. */
export type SelfTestControllerChannelTransmitTestCommandAsyncImpl = (self: SelfTestControllerChannel) => Promise<{ self: SelfTestControllerChannel; modified: {} }>;

/** Contract-checking wrapper for SelfTestControllerChannel.transmitTestCommand (async). */
export function wrapSelfTestControllerChannelTransmitTestCommandAsync(impl: SelfTestControllerChannelTransmitTestCommandAsyncImpl): (self: SelfTestControllerChannel) => Promise<SelfTestControllerChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    // SKIPPED pre-clause (not translatable): SelfTestControllerComponent.allInstances()->exists(t | not t.testRunning) — method call '.allInstances(...)' not translatable in Phase 10.5
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SelfTestControllerChannel.transmitTestCommand] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.deliverInsulin. User supplies this. */
export type InsulinPumpSystemDeliverInsulinImpl = (self: InsulinPumpSystem, sugar: number, rate: number) => { self: InsulinPumpSystem; modified: { reservoirUnits: unknown; lowReservoir: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.deliverInsulin. */
export function wrapInsulinPumpSystemDeliverInsulin(impl: InsulinPumpSystemDeliverInsulinImpl): (self: InsulinPumpSystem, sugar: number, rate: number) => InsulinPumpSystem {
  return (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((sugar >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeUpperBound))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: sugar > self.safeUpperBound");
    }
    if (!((rate > 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: rate > 0.0");
    }
    if (!((self.reservoirUnits >= self.safeMaxDose))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.reservoirUnits >= self.safeMaxDose");
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
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDose — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= self.reservoirUnits@pre — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if result <= 0.0 then false else true endif — unbound variable 'result'
      if (!((__result.self.lowReservoir === (__result.self.reservoirUnits <= (__result.self.safeMaxDose * 5))))) {
        postViolations.push("[InsulinPumpSystem.deliverInsulin] post violated: self.lowReservoir = (self.reservoirUnits <= (self.safeMaxDose * 5.0))");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.deliverInsulin (async). User supplies this. */
export type InsulinPumpSystemDeliverInsulinAsyncImpl = (self: InsulinPumpSystem, sugar: number, rate: number) => Promise<{ self: InsulinPumpSystem; modified: { reservoirUnits: unknown; lowReservoir: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.deliverInsulin (async). */
export function wrapInsulinPumpSystemDeliverInsulinAsync(impl: InsulinPumpSystemDeliverInsulinAsyncImpl): (self: InsulinPumpSystem, sugar: number, rate: number) => Promise<InsulinPumpSystem> {
  return async (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((sugar >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeUpperBound))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: sugar > self.safeUpperBound");
    }
    if (!((rate > 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: rate > 0.0");
    }
    if (!((self.reservoirUnits >= self.safeMaxDose))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.reservoirUnits >= self.safeMaxDose");
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
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDose — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= self.reservoirUnits@pre — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if result <= 0.0 then false else true endif — unbound variable 'result'
      if (!((__result.self.lowReservoir === (__result.self.reservoirUnits <= (__result.self.safeMaxDose * 5))))) {
        postViolations.push("[InsulinPumpSystem.deliverInsulin] post violated: self.lowReservoir = (self.reservoirUnits <= (self.safeMaxDose * 5.0))");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.detectFault. User supplies this. */
export type InsulinPumpSystemDetectFaultImpl = (self: InsulinPumpSystem, faultCode: number) => { self: InsulinPumpSystem; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown; lastSelfTestPassed: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.detectFault. */
export function wrapInsulinPumpSystemDetectFault(impl: InsulinPumpSystemDetectFaultImpl): (self: InsulinPumpSystem, faultCode: number) => InsulinPumpSystem {
  return (self, faultCode) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.detectFault] pre violated: not self.faultDetected");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.detectFault] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.lastSelfTestPassed === false))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.lastSelfTestPassed = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.detectFault (async). User supplies this. */
export type InsulinPumpSystemDetectFaultAsyncImpl = (self: InsulinPumpSystem, faultCode: number) => Promise<{ self: InsulinPumpSystem; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown; lastSelfTestPassed: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.detectFault (async). */
export function wrapInsulinPumpSystemDetectFaultAsync(impl: InsulinPumpSystemDetectFaultAsyncImpl): (self: InsulinPumpSystem, faultCode: number) => Promise<InsulinPumpSystem> {
  return async (self, faultCode) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.detectFault] pre violated: not self.faultDetected");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.detectFault] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.lastSelfTestPassed === false))) {
        postViolations.push("[InsulinPumpSystem.detectFault] post violated: self.lastSelfTestPassed = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.clearFault. User supplies this. */
export type InsulinPumpSystemClearFaultImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.clearFault. */
export function wrapInsulinPumpSystemClearFault(impl: InsulinPumpSystemClearFaultImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: self.faultDetected = true");
    }
    if (!(!(self.isOperating))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.isOperating = true");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.clearFault (async). User supplies this. */
export type InsulinPumpSystemClearFaultAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.clearFault (async). */
export function wrapInsulinPumpSystemClearFaultAsync(impl: InsulinPumpSystemClearFaultAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: self.faultDetected = true");
    }
    if (!(!(self.isOperating))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.isOperating = true");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.checkReservoir. User supplies this. */
export type InsulinPumpSystemCheckReservoirImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { lowReservoir: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.checkReservoir. */
export function wrapInsulinPumpSystemCheckReservoir(impl: InsulinPumpSystemCheckReservoirImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.lowReservoir))) {
      preViolations.push("[InsulinPumpSystem.checkReservoir] pre violated: not self.lowReservoir");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.checkReservoir] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmActive": self.alarmActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoir === (__result.self.reservoirUnits <= (__result.self.safeMaxDose * 5))))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.lowReservoir = (self.reservoirUnits <= (self.safeMaxDose * 5.0))");
      }
      if (!(((__result.self.lowReservoir) ? ((__result.self.alarmActive === true)) : ((__result.self.alarmActive === __pre["self.alarmActive"]))))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: if self.lowReservoir then self.alarmActive = true else self.alarmActive = self.alarmActive@pre endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.checkReservoir (async). User supplies this. */
export type InsulinPumpSystemCheckReservoirAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { lowReservoir: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.checkReservoir (async). */
export function wrapInsulinPumpSystemCheckReservoirAsync(impl: InsulinPumpSystemCheckReservoirAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.lowReservoir))) {
      preViolations.push("[InsulinPumpSystem.checkReservoir] pre violated: not self.lowReservoir");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.checkReservoir] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmActive": self.alarmActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoir === (__result.self.reservoirUnits <= (__result.self.safeMaxDose * 5))))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.lowReservoir = (self.reservoirUnits <= (self.safeMaxDose * 5.0))");
      }
      if (!(((__result.self.lowReservoir) ? ((__result.self.alarmActive === true)) : ((__result.self.alarmActive === __pre["self.alarmActive"]))))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: if self.lowReservoir then self.alarmActive = true else self.alarmActive = self.alarmActive@pre endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.runSelfTest. User supplies this. */
export type InsulinPumpSystemRunSelfTestImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { lastSelfTestPassed: unknown; faultDetected: unknown; isOperating: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.runSelfTest. */
export function wrapInsulinPumpSystemRunSelfTest(impl: InsulinPumpSystemRunSelfTestImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultDetected": self.faultDetected,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastSelfTestPassed === !(__result.self.faultDetected)))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.lastSelfTestPassed = (not self.faultDetected)");
      }
      if (!((__result.self.faultDetected === (__pre["self.faultDetected"] || !(__result.self.lastSelfTestPassed))))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.faultDetected = (self.faultDetected@pre or not self.lastSelfTestPassed)");
      }
      if (!(((__result.self.faultDetected) ? (((__result.self.isOperating === false) && (__result.self.alarmActive === true))) : (true)))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: if self.faultDetected then self.isOperating = false and self.alarmActive = true else true endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.runSelfTest (async). User supplies this. */
export type InsulinPumpSystemRunSelfTestAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { lastSelfTestPassed: unknown; faultDetected: unknown; isOperating: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.runSelfTest (async). */
export function wrapInsulinPumpSystemRunSelfTestAsync(impl: InsulinPumpSystemRunSelfTestAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultDetected": self.faultDetected,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastSelfTestPassed === !(__result.self.faultDetected)))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.lastSelfTestPassed = (not self.faultDetected)");
      }
      if (!((__result.self.faultDetected === (__pre["self.faultDetected"] || !(__result.self.lastSelfTestPassed))))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.faultDetected = (self.faultDetected@pre or not self.lastSelfTestPassed)");
      }
      if (!(((__result.self.faultDetected) ? (((__result.self.isOperating === false) && (__result.self.alarmActive === true))) : (true)))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: if self.faultDetected then self.isOperating = false and self.alarmActive = true else true endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.acknowledgeAlarm. User supplies this. */
export type InsulinPumpSystemAcknowledgeAlarmImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { alarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.acknowledgeAlarm. */
export function wrapInsulinPumpSystemAcknowledgeAlarm(impl: InsulinPumpSystemAcknowledgeAlarmImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[InsulinPumpSystem.acknowledgeAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.acknowledgeAlarm] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.acknowledgeAlarm (async). User supplies this. */
export type InsulinPumpSystemAcknowledgeAlarmAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { alarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.acknowledgeAlarm (async). */
export function wrapInsulinPumpSystemAcknowledgeAlarmAsync(impl: InsulinPumpSystemAcknowledgeAlarmAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[InsulinPumpSystem.acknowledgeAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.acknowledgeAlarm] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.configureSafeMax. User supplies this. */
export type InsulinPumpSystemConfigureSafeMaxImpl = (self: InsulinPumpSystem, newMax: number) => { self: InsulinPumpSystem; modified: { safeMaxDose: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeMax. */
export function wrapInsulinPumpSystemConfigureSafeMax(impl: InsulinPumpSystemConfigureSafeMaxImpl): (self: InsulinPumpSystem, newMax: number) => InsulinPumpSystem {
  return (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: newMax > 0.0");
    }
    if (!(!(self.isOperating))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDose === newMax))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMax] post violated: self.safeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.configureSafeMax (async). User supplies this. */
export type InsulinPumpSystemConfigureSafeMaxAsyncImpl = (self: InsulinPumpSystem, newMax: number) => Promise<{ self: InsulinPumpSystem; modified: { safeMaxDose: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeMax (async). */
export function wrapInsulinPumpSystemConfigureSafeMaxAsync(impl: InsulinPumpSystemConfigureSafeMaxAsyncImpl): (self: InsulinPumpSystem, newMax: number) => Promise<InsulinPumpSystem> {
  return async (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: newMax > 0.0");
    }
    if (!(!(self.isOperating))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDose === newMax))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMax] post violated: self.safeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.refillReservoir. User supplies this. */
export type InsulinPumpSystemRefillReservoirImpl = (self: InsulinPumpSystem, addedUnits: number) => { self: InsulinPumpSystem; modified: { reservoirUnits: unknown; lowReservoir: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.refillReservoir. */
export function wrapInsulinPumpSystemRefillReservoir(impl: InsulinPumpSystemRefillReservoirImpl): (self: InsulinPumpSystem, addedUnits: number) => InsulinPumpSystem {
  return (self, addedUnits) => {
    const preViolations: string[] = [];
    if (!((addedUnits > 0))) {
      preViolations.push("[InsulinPumpSystem.refillReservoir] pre violated: addedUnits > 0.0");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.refillReservoir] pre violated: not self.faultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, addedUnits);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] + addedUnits)))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + addedUnits");
      }
      if (!((__result.self.lowReservoir === false))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: self.lowReservoir = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.refillReservoir (async). User supplies this. */
export type InsulinPumpSystemRefillReservoirAsyncImpl = (self: InsulinPumpSystem, addedUnits: number) => Promise<{ self: InsulinPumpSystem; modified: { reservoirUnits: unknown; lowReservoir: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.refillReservoir (async). */
export function wrapInsulinPumpSystemRefillReservoirAsync(impl: InsulinPumpSystemRefillReservoirAsyncImpl): (self: InsulinPumpSystem, addedUnits: number) => Promise<InsulinPumpSystem> {
  return async (self, addedUnits) => {
    const preViolations: string[] = [];
    if (!((addedUnits > 0))) {
      preViolations.push("[InsulinPumpSystem.refillReservoir] pre violated: addedUnits > 0.0");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.refillReservoir] pre violated: not self.faultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, addedUnits);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] + addedUnits)))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + addedUnits");
      }
      if (!((__result.self.lowReservoir === false))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: self.lowReservoir = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.updateBloodSugar. User supplies this. */
export type InsulinPumpSystemUpdateBloodSugarImpl = (self: InsulinPumpSystem, newReading: number, risingRate: number) => { self: InsulinPumpSystem; modified: { currentBloodSugar: unknown; bloodSugarRising: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.updateBloodSugar. */
export function wrapInsulinPumpSystemUpdateBloodSugar(impl: InsulinPumpSystemUpdateBloodSugarImpl): (self: InsulinPumpSystem, newReading: number, risingRate: number) => InsulinPumpSystem {
  return (self, newReading, risingRate) => {
    const preViolations: string[] = [];
    if (!((newReading >= 0))) {
      preViolations.push("[InsulinPumpSystem.updateBloodSugar] pre violated: newReading >= 0.0");
    }
    if (!((risingRate >= 0))) {
      preViolations.push("[InsulinPumpSystem.updateBloodSugar] pre violated: risingRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newReading, risingRate);
      const postViolations: string[] = [];
      if (!((__result.self.currentBloodSugar === newReading))) {
        postViolations.push("[InsulinPumpSystem.updateBloodSugar] post violated: self.currentBloodSugar = newReading");
      }
      if (!((__result.self.bloodSugarRising === risingRate))) {
        postViolations.push("[InsulinPumpSystem.updateBloodSugar] post violated: self.bloodSugarRising = risingRate");
      }
      if (!(((((newReading >= __result.self.safeLowerBound) && (newReading <= __result.self.safeUpperBound))) ? ((__result.self.bloodSugarRising === 0)) : (true)))) {
        postViolations.push("[InsulinPumpSystem.updateBloodSugar] post violated: if newReading >= self.safeLowerBound and newReading <= self.safeUpperBound then\n            self.bloodSugarRising = 0.0\n          else\n            true\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.updateBloodSugar (async). User supplies this. */
export type InsulinPumpSystemUpdateBloodSugarAsyncImpl = (self: InsulinPumpSystem, newReading: number, risingRate: number) => Promise<{ self: InsulinPumpSystem; modified: { currentBloodSugar: unknown; bloodSugarRising: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.updateBloodSugar (async). */
export function wrapInsulinPumpSystemUpdateBloodSugarAsync(impl: InsulinPumpSystemUpdateBloodSugarAsyncImpl): (self: InsulinPumpSystem, newReading: number, risingRate: number) => Promise<InsulinPumpSystem> {
  return async (self, newReading, risingRate) => {
    const preViolations: string[] = [];
    if (!((newReading >= 0))) {
      preViolations.push("[InsulinPumpSystem.updateBloodSugar] pre violated: newReading >= 0.0");
    }
    if (!((risingRate >= 0))) {
      preViolations.push("[InsulinPumpSystem.updateBloodSugar] pre violated: risingRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newReading, risingRate);
      const postViolations: string[] = [];
      if (!((__result.self.currentBloodSugar === newReading))) {
        postViolations.push("[InsulinPumpSystem.updateBloodSugar] post violated: self.currentBloodSugar = newReading");
      }
      if (!((__result.self.bloodSugarRising === risingRate))) {
        postViolations.push("[InsulinPumpSystem.updateBloodSugar] post violated: self.bloodSugarRising = risingRate");
      }
      if (!(((((newReading >= __result.self.safeLowerBound) && (newReading <= __result.self.safeUpperBound))) ? ((__result.self.bloodSugarRising === 0)) : (true)))) {
        postViolations.push("[InsulinPumpSystem.updateBloodSugar] post violated: if newReading >= self.safeLowerBound and newReading <= self.safeUpperBound then\n            self.bloodSugarRising = 0.0\n          else\n            true\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemFormalizedRejectOverdoseImpl = (self: InsulinPumpSystemFormalized, requestedDose: number) => { self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectOverdose. */
export function wrapInsulinPumpSystemFormalizedRejectOverdose(impl: InsulinPumpSystemFormalizedRejectOverdoseImpl): (self: InsulinPumpSystemFormalized, requestedDose: number) => InsulinPumpSystemFormalized {
  return (self, requestedDose) => {
    const preViolations: string[] = [];
    if (!((requestedDose > self.safeMaxDose))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: requestedDose > self.safeMaxDose");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedDose);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemFormalizedRejectOverdoseAsyncImpl = (self: InsulinPumpSystemFormalized, requestedDose: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectOverdose (async). */
export function wrapInsulinPumpSystemFormalizedRejectOverdoseAsync(impl: InsulinPumpSystemFormalizedRejectOverdoseAsyncImpl): (self: InsulinPumpSystemFormalized, requestedDose: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, requestedDose) => {
    const preViolations: string[] = [];
    if (!((requestedDose > self.safeMaxDose))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: requestedDose > self.safeMaxDose");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedDose);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectDoseInSafeZone. User supplies this. */
export type InsulinPumpSystemFormalizedRejectDoseInSafeZoneImpl = (self: InsulinPumpSystemFormalized, sugar: number, requestedDose: number) => { self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectDoseInSafeZone. */
export function wrapInsulinPumpSystemFormalizedRejectDoseInSafeZone(impl: InsulinPumpSystemFormalizedRejectDoseInSafeZoneImpl): (self: InsulinPumpSystemFormalized, sugar: number, requestedDose: number) => InsulinPumpSystemFormalized {
  return (self, sugar, requestedDose) => {
    const preViolations: string[] = [];
    if (!((sugar >= self.safeLowerBound))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] pre violated: sugar >= self.safeLowerBound");
    }
    if (!((sugar <= self.safeUpperBound))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] pre violated: sugar <= self.safeUpperBound");
    }
    if (!((requestedDose > 0))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] pre violated: requestedDose > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar, requestedDose);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectDoseInSafeZone (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectDoseInSafeZoneAsyncImpl = (self: InsulinPumpSystemFormalized, sugar: number, requestedDose: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectDoseInSafeZone (async). */
export function wrapInsulinPumpSystemFormalizedRejectDoseInSafeZoneAsync(impl: InsulinPumpSystemFormalizedRejectDoseInSafeZoneAsyncImpl): (self: InsulinPumpSystemFormalized, sugar: number, requestedDose: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, sugar, requestedDose) => {
    const preViolations: string[] = [];
    if (!((sugar >= self.safeLowerBound))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] pre violated: sugar >= self.safeLowerBound");
    }
    if (!((sugar <= self.safeUpperBound))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] pre violated: sugar <= self.safeUpperBound");
    }
    if (!((requestedDose > 0))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] pre violated: requestedDose > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar, requestedDose);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDoseInSafeZone] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectOperationDuringFault. User supplies this. */
export type InsulinPumpSystemFormalizedRejectOperationDuringFaultImpl = (self: InsulinPumpSystemFormalized, operationType: string) => { self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectOperationDuringFault. */
export function wrapInsulinPumpSystemFormalizedRejectOperationDuringFault(impl: InsulinPumpSystemFormalizedRejectOperationDuringFaultImpl): (self: InsulinPumpSystemFormalized, operationType: string) => InsulinPumpSystemFormalized {
  return (self, operationType) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOperationDuringFault] pre violated: self.faultDetected = true");
    }
    if (!((operationType !== null))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOperationDuringFault] pre violated: operationType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, operationType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOperationDuringFault] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectOperationDuringFault (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectOperationDuringFaultAsyncImpl = (self: InsulinPumpSystemFormalized, operationType: string) => Promise<{ self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectOperationDuringFault (async). */
export function wrapInsulinPumpSystemFormalizedRejectOperationDuringFaultAsync(impl: InsulinPumpSystemFormalizedRejectOperationDuringFaultAsyncImpl): (self: InsulinPumpSystemFormalized, operationType: string) => Promise<InsulinPumpSystemFormalized> {
  return async (self, operationType) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOperationDuringFault] pre violated: self.faultDetected = true");
    }
    if (!((operationType !== null))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOperationDuringFault] pre violated: operationType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, operationType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOperationDuringFault] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectMissingSelfTest. User supplies this. */
export type InsulinPumpSystemFormalizedRejectMissingSelfTestImpl = (self: InsulinPumpSystemFormalized, elapsedSeconds: number) => { self: InsulinPumpSystemFormalized; modified: { isOperating: unknown; faultDetected: unknown; alarmActive: unknown; runtimeFaultCount: unknown; regulatoryAuditLog: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectMissingSelfTest. */
export function wrapInsulinPumpSystemFormalizedRejectMissingSelfTest(impl: InsulinPumpSystemFormalizedRejectMissingSelfTestImpl): (self: InsulinPumpSystemFormalized, elapsedSeconds: number) => InsulinPumpSystemFormalized {
  return (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] pre violated: self.isOperating = true");
    }
    if (!((elapsedSeconds >= self.selfTestIntervalSec))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] pre violated: elapsedSeconds >= self.selfTestIntervalSec");
    }
    if (!(!(self.lastSelfTestPassed))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] pre violated: not self.lastSelfTestPassed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.runtimeFaultCount": self.runtimeFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.isOperating = false");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.faultDetected = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.alarmActive = true");
      }
      if (!((__result.self.runtimeFaultCount === (__pre["self.runtimeFaultCount"] + 1)))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.runtimeFaultCount = self.runtimeFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectMissingSelfTest (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectMissingSelfTestAsyncImpl = (self: InsulinPumpSystemFormalized, elapsedSeconds: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: { isOperating: unknown; faultDetected: unknown; alarmActive: unknown; runtimeFaultCount: unknown; regulatoryAuditLog: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectMissingSelfTest (async). */
export function wrapInsulinPumpSystemFormalizedRejectMissingSelfTestAsync(impl: InsulinPumpSystemFormalizedRejectMissingSelfTestAsyncImpl): (self: InsulinPumpSystemFormalized, elapsedSeconds: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] pre violated: self.isOperating = true");
    }
    if (!((elapsedSeconds >= self.selfTestIntervalSec))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] pre violated: elapsedSeconds >= self.selfTestIntervalSec");
    }
    if (!(!(self.lastSelfTestPassed))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] pre violated: not self.lastSelfTestPassed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.runtimeFaultCount": self.runtimeFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.isOperating = false");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.faultDetected = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.alarmActive = true");
      }
      if (!((__result.self.runtimeFaultCount === (__pre["self.runtimeFaultCount"] + 1)))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectMissingSelfTest] post violated: self.runtimeFaultCount = self.runtimeFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation. User supplies this. */
export type InsulinPumpSystemFormalizedRejectUnauthorizedDoseCalculationImpl = (self: InsulinPumpSystemFormalized, calculationMethod: string) => { self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown; runtimeFaultCount: unknown; regulatoryAuditLog: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation. */
export function wrapInsulinPumpSystemFormalizedRejectUnauthorizedDoseCalculation(impl: InsulinPumpSystemFormalizedRejectUnauthorizedDoseCalculationImpl): (self: InsulinPumpSystemFormalized, calculationMethod: string) => InsulinPumpSystemFormalized {
  return (self, calculationMethod) => {
    const preViolations: string[] = [];
    if (!((calculationMethod !== "FDA_CLEARED_PROPORTIONAL"))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] pre violated: calculationMethod <> 'FDA_CLEARED_PROPORTIONAL'");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.runtimeFaultCount": self.runtimeFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, calculationMethod);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.alarmActive = true");
      }
      if (!((__result.self.runtimeFaultCount === (__pre["self.runtimeFaultCount"] + 1)))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.runtimeFaultCount = self.runtimeFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectUnauthorizedDoseCalculationAsyncImpl = (self: InsulinPumpSystemFormalized, calculationMethod: string) => Promise<{ self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown; runtimeFaultCount: unknown; regulatoryAuditLog: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation (async). */
export function wrapInsulinPumpSystemFormalizedRejectUnauthorizedDoseCalculationAsync(impl: InsulinPumpSystemFormalizedRejectUnauthorizedDoseCalculationAsyncImpl): (self: InsulinPumpSystemFormalized, calculationMethod: string) => Promise<InsulinPumpSystemFormalized> {
  return async (self, calculationMethod) => {
    const preViolations: string[] = [];
    if (!((calculationMethod !== "FDA_CLEARED_PROPORTIONAL"))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] pre violated: calculationMethod <> 'FDA_CLEARED_PROPORTIONAL'");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.runtimeFaultCount": self.runtimeFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, calculationMethod);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.alarmActive = true");
      }
      if (!((__result.self.runtimeFaultCount === (__pre["self.runtimeFaultCount"] + 1)))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectUnauthorizedDoseCalculation] post violated: self.runtimeFaultCount = self.runtimeFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectImplausibleReading. User supplies this. */
export type InsulinPumpSystemFormalizedRejectImplausibleReadingImpl = (self: InsulinPumpSystemFormalized, reading: number) => { self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown; runtimeFaultCount: unknown; regulatoryAuditLog: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectImplausibleReading. */
export function wrapInsulinPumpSystemFormalizedRejectImplausibleReading(impl: InsulinPumpSystemFormalizedRejectImplausibleReadingImpl): (self: InsulinPumpSystemFormalized, reading: number) => InsulinPumpSystemFormalized {
  return (self, reading) => {
    const preViolations: string[] = [];
    if (!(((reading < 0) || (reading > 1000)))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] pre violated: reading < 0.0 or reading > 1000.0");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.runtimeFaultCount": self.runtimeFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reading);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.alarmActive = true");
      }
      if (!((__result.self.runtimeFaultCount === (__pre["self.runtimeFaultCount"] + 1)))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.runtimeFaultCount = self.runtimeFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectImplausibleReading (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectImplausibleReadingAsyncImpl = (self: InsulinPumpSystemFormalized, reading: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown; runtimeFaultCount: unknown; regulatoryAuditLog: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectImplausibleReading (async). */
export function wrapInsulinPumpSystemFormalizedRejectImplausibleReadingAsync(impl: InsulinPumpSystemFormalizedRejectImplausibleReadingAsyncImpl): (self: InsulinPumpSystemFormalized, reading: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, reading) => {
    const preViolations: string[] = [];
    if (!(((reading < 0) || (reading > 1000)))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] pre violated: reading < 0.0 or reading > 1000.0");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.runtimeFaultCount": self.runtimeFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reading);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.alarmActive = true");
      }
      if (!((__result.self.runtimeFaultCount === (__pre["self.runtimeFaultCount"] + 1)))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectImplausibleReading] post violated: self.runtimeFaultCount = self.runtimeFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.logComplianceEvent. User supplies this. */
export type InsulinPumpSystemFormalizedLogComplianceEventImpl = (self: InsulinPumpSystemFormalized, eventType: string, detail: string) => { self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown; lastComplianceCheckDate: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.logComplianceEvent. */
export function wrapInsulinPumpSystemFormalizedLogComplianceEvent(impl: InsulinPumpSystemFormalizedLogComplianceEventImpl): (self: InsulinPumpSystemFormalized, eventType: string, detail: string) => InsulinPumpSystemFormalized {
  return (self, eventType, detail) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] pre violated: eventType <> null");
    }
    if (!((detail !== null))) {
      preViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] pre violated: detail <> null");
    }
    if (!(((self.isOperating === true) || (self.faultDetected === true)))) {
      preViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] pre violated: self.isOperating = true or self.faultDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastComplianceCheckDate": self.lastComplianceCheckDate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, eventType, detail);
      const postViolations: string[] = [];
      if (!((__result.self.lastComplianceCheckDate === __pre["self.lastComplianceCheckDate"]))) {
        postViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] post violated: self.lastComplianceCheckDate = self.lastComplianceCheckDate@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.logComplianceEvent (async). User supplies this. */
export type InsulinPumpSystemFormalizedLogComplianceEventAsyncImpl = (self: InsulinPumpSystemFormalized, eventType: string, detail: string) => Promise<{ self: InsulinPumpSystemFormalized; modified: { regulatoryAuditLog: unknown; lastComplianceCheckDate: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.logComplianceEvent (async). */
export function wrapInsulinPumpSystemFormalizedLogComplianceEventAsync(impl: InsulinPumpSystemFormalizedLogComplianceEventAsyncImpl): (self: InsulinPumpSystemFormalized, eventType: string, detail: string) => Promise<InsulinPumpSystemFormalized> {
  return async (self, eventType, detail) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] pre violated: eventType <> null");
    }
    if (!((detail !== null))) {
      preViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] pre violated: detail <> null");
    }
    if (!(((self.isOperating === true) || (self.faultDetected === true)))) {
      preViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] pre violated: self.isOperating = true or self.faultDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastComplianceCheckDate": self.lastComplianceCheckDate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, eventType, detail);
      const postViolations: string[] = [];
      if (!((__result.self.lastComplianceCheckDate === __pre["self.lastComplianceCheckDate"]))) {
        postViolations.push("[InsulinPumpSystemFormalized.logComplianceEvent] post violated: self.lastComplianceCheckDate = self.lastComplianceCheckDate@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for AlertCommitment commitments. */
export class AlertCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AlertCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AlertCommitment — the typed wrapper guarantees that since
    // `register` only accepts AlertCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AlertCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AlertCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AlertCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AlertCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AlertCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AlertCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for RegulatoryCommitment commitments. */
export class RegulatoryCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<RegulatoryCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a RegulatoryCommitment — the typed wrapper guarantees that since
    // `register` only accepts RegulatoryCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: RegulatoryCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: RegulatoryCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: RegulatoryCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: RegulatoryCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<RegulatoryCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<RegulatoryCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

