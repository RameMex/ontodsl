// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for BloodSugarSensor. Runtime: string. Compile-time: branded. */
export type BloodSugarSensorId = string & { readonly __brand: "BloodSugarSensorId" };
/** Identity type for InsulinPump. Runtime: string. Compile-time: branded. */
export type InsulinPumpId = string & { readonly __brand: "InsulinPumpId" };
/** Identity type for FaultMonitor. Runtime: string. Compile-time: branded. */
export type FaultMonitorId = string & { readonly __brand: "FaultMonitorId" };
/** Identity type for PatientInterface. Runtime: string. Compile-time: branded. */
export type PatientInterfaceId = string & { readonly __brand: "PatientInterfaceId" };
/** Identity type for DoseCommander. Runtime: string. Compile-time: branded. */
export type DoseCommanderId = string & { readonly __brand: "DoseCommanderId" };
/** Identity type for SensorChannel. Runtime: string. Compile-time: branded. */
export type SensorChannelId = string & { readonly __brand: "SensorChannelId" };
/** Identity type for DeliveryBus. Runtime: string. Compile-time: branded. */
export type DeliveryBusId = string & { readonly __brand: "DeliveryBusId" };
/** Identity type for FaultBusSensor. Runtime: string. Compile-time: branded. */
export type FaultBusSensorId = string & { readonly __brand: "FaultBusSensorId" };
/** Identity type for FaultBusPump. Runtime: string. Compile-time: branded. */
export type FaultBusPumpId = string & { readonly __brand: "FaultBusPumpId" };
/** Identity type for AlertChannel. Runtime: string. Compile-time: branded. */
export type AlertChannelId = string & { readonly __brand: "AlertChannelId" };
/** Identity type for InsulinDeliveryHappening. Runtime: string. Compile-time: branded. */
export type InsulinDeliveryHappeningId = string & { readonly __brand: "InsulinDeliveryHappeningId" };
/** Identity type for BloodSugar. Runtime: string. Compile-time: branded. */
export type BloodSugarId = string & { readonly __brand: "BloodSugarId" };
/** Identity type for InsulinReservoir. Runtime: string. Compile-time: branded. */
export type InsulinReservoirId = string & { readonly __brand: "InsulinReservoirId" };
/** Identity type for HardwareFault. Runtime: string. Compile-time: branded. */
export type HardwareFaultId = string & { readonly __brand: "HardwareFaultId" };
/** Identity type for SafeZone. Runtime: string. Compile-time: branded. */
export type SafeZoneId = string & { readonly __brand: "SafeZoneId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for RegulatoryBody. Runtime: string. Compile-time: branded. */
export type RegulatoryBodyId = string & { readonly __brand: "RegulatoryBodyId" };
/** Identity type for HospitalAdministrator. Runtime: string. Compile-time: branded. */
export type HospitalAdministratorId = string & { readonly __brand: "HospitalAdministratorId" };
/** Identity type for InsulinPumpVendor. Runtime: string. Compile-time: branded. */
export type InsulinPumpVendorId = string & { readonly __brand: "InsulinPumpVendorId" };
/** Identity type for DoseSafetyCommitment. Runtime: string. Compile-time: branded. */
export type DoseSafetyCommitmentId = string & { readonly __brand: "DoseSafetyCommitmentId" };
/** Identity type for FailSafeCommitment. Runtime: string. Compile-time: branded. */
export type FailSafeCommitmentId = string & { readonly __brand: "FailSafeCommitmentId" };
/** Identity type for PatientAlertCommitment. Runtime: string. Compile-time: branded. */
export type PatientAlertCommitmentId = string & { readonly __brand: "PatientAlertCommitmentId" };
/** Identity type for RegulatoryComplianceCommitment. Runtime: string. Compile-time: branded. */
export type RegulatoryComplianceCommitmentId = string & { readonly __brand: "RegulatoryComplianceCommitmentId" };
/** Identity type for ClinicianConfigurabilityCommitment. Runtime: string. Compile-time: branded. */
export type ClinicianConfigurabilityCommitmentId = string & { readonly __brand: "ClinicianConfigurabilityCommitmentId" };
/** Identity type for MaintainabilityCommitment. Runtime: string. Compile-time: branded. */
export type MaintainabilityCommitmentId = string & { readonly __brand: "MaintainabilityCommitmentId" };
/** Identity type for InsulinDeliveryFlow. Runtime: string. Compile-time: branded. */
export type InsulinDeliveryFlowId = string & { readonly __brand: "InsulinDeliveryFlowId" };
/** Identity type for InsulinPumpSystem. Runtime: string. Compile-time: branded. */
export type InsulinPumpSystemId = string & { readonly __brand: "InsulinPumpSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface BloodSugarSensor {
  readonly sensorId: BloodSugarSensorId;
  readonly lastValue: number;
  readonly lastTimestamp: string;
  readonly isCalibrated: boolean;
  readonly readingValid: boolean;
  readonly sensorHealthy: boolean;
}

/** @stereotype <<Kind>> */
export interface InsulinPump {
  readonly pumpId: InsulinPumpId;
  readonly reservoirUnits: number;
  readonly capacityUnits: number;
  readonly isDelivering: boolean;
  readonly lastDoseAmount: number;
  readonly lastDeliveryTimestamp: string;
  readonly pumpHealthy: boolean;
}

/** @stereotype <<Kind>> */
export interface FaultMonitor {
  readonly monitorId: FaultMonitorId;
  readonly faultDetected: boolean;
  readonly faultCode: string;
  readonly systemOperating: boolean;
  readonly alarmActive: boolean;
  readonly lastSelfTestTimestamp: string;
  readonly selfTestIntervalSeconds: number;
}

/** @stereotype <<Kind>> */
export interface PatientInterface {
  readonly interfaceId: PatientInterfaceId;
  readonly alertActive: boolean;
  readonly alertType: string;
  readonly lowReservoirThreshold: number;
  readonly configuredSafeMaxDose: number;
  readonly configuredSafeZoneLower: number;
  readonly configuredSafeZoneUpper: number;
  readonly patientAlertActive: boolean;
}

/** @stereotype <<Kind>> */
export interface DoseCommander {
  readonly commanderId: DoseCommanderId;
  readonly authorizedDose: number;
  readonly commanderHealthy: boolean;
}

/** @stereotype <<Role>> */
export interface SensorEndpoint {
  readonly sensorId: string;
  readonly readingValid: boolean;
  readonly lastValue: number;
}

/** @stereotype <<Role>> */
export interface DoseCommanderEndpoint {
  readonly commanderId: string;
  readonly authorizedDose: number;
}

/** @stereotype <<Role>> */
export interface ActuatorEndpoint {
  readonly pumpId: string;
  readonly isDelivering: boolean;
  readonly reservoirUnits: number;
}

/** @stereotype <<Role>> */
export interface MonitoredComponent {
  readonly sensorId: string;
  readonly sensorHealthy: boolean;
}

/** @stereotype <<Role>> */
export interface MonitoredActuator {
  readonly pumpId: string;
  readonly pumpHealthy: boolean;
  readonly isDelivering: boolean;
}

/** @stereotype <<Role>> */
export interface AlarmSource {
  readonly monitorId: string;
  readonly alarmActive: boolean;
  readonly faultDetected: boolean;
  readonly faultCode: string;
}

/** @stereotype <<Role>> */
export interface AlertDisplay {
  readonly interfaceId: string;
  readonly alertActive: boolean;
  readonly patientAlertActive: boolean;
}

/** @stereotype <<Relator>> */
export interface SensorChannel {
  readonly channelId: SensorChannelId;
  readonly lastTransmittedReading: number;
  readonly transmissionTimestamp: string;
  readonly channelHealthy: boolean;
}

/** @stereotype <<Relator>> */
export interface DeliveryBus {
  readonly busId: DeliveryBusId;
  readonly commandedDose: number;
  readonly deliveryInProgress: boolean;
  readonly busHealthy: boolean;
}

/** @stereotype <<Relator>> */
export interface FaultBusSensor {
  readonly busSensorId: FaultBusSensorId;
  readonly lastHealthCheckTimestamp: string;
}

/** @stereotype <<Relator>> */
export interface FaultBusPump {
  readonly busPumpId: FaultBusPumpId;
  readonly lastPumpHealthCheckTimestamp: string;
}

/** @stereotype <<Relator>> */
export interface AlertChannel {
  readonly alertChannelId: AlertChannelId;
  readonly pendingAlertCode: string;
  readonly alertDelivered: boolean;
}

/** @stereotype <<Happening>> */
export interface InsulinDeliveryHappening {
  readonly flowId: InsulinDeliveryHappeningId;
  readonly stepCount: number;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface BloodSugar {
  readonly readingId: BloodSugarId;
  readonly valueMgDl: number;
  readonly timestamp: string;
}

/** @stereotype <<Kind>> */
export interface InsulinReservoir {
  readonly reservoirId: InsulinReservoirId;
  readonly capacityUnits: number;
  readonly remainingUnits: number;
}

/** @stereotype <<Kind>> */
export interface HardwareFault {
  readonly faultId: HardwareFaultId;
  readonly faultCode: string;
  readonly description: string;
  readonly detectedAt: string;
}

/** @stereotype <<Kind>> */
export interface SafeZone {
  readonly zoneId: SafeZoneId;
  readonly lowerBound: number;
  readonly upperBound: number;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly age: number;
  readonly hasDiabetes: boolean;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
  readonly certificationNumber: string;
}

/** @stereotype <<Agent>> */
export interface RegulatoryBody {
  readonly regulatoryId: RegulatoryBodyId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface HospitalAdministrator {
  readonly adminId: HospitalAdministratorId;
  readonly hospitalName: string;
}

/** @stereotype <<Agent>> */
export interface InsulinPumpVendor {
  readonly vendorId: InsulinPumpVendorId;
  readonly companyName: string;
}

/** @stereotype <<Commitment>> */
export interface DoseSafetyCommitment {
  readonly commitmentId: DoseSafetyCommitmentId;
  readonly safeMaxDoseUnits: number;
  readonly safeZoneUpperBound: number;
  readonly safeZoneLowerBound: number;
}

/** @stereotype <<Commitment>> */
export interface FailSafeCommitment {
  readonly commitmentId: FailSafeCommitmentId;
  readonly alarmConditionMet: boolean;
}

/** @stereotype <<Commitment>> */
export interface PatientAlertCommitment {
  readonly commitmentId: PatientAlertCommitmentId;
  readonly lowReservoirThreshold: number;
  readonly patientNotifiedOnFault: boolean;
}

/** @stereotype <<Commitment>> */
export interface RegulatoryComplianceCommitment {
  readonly commitmentId: RegulatoryComplianceCommitmentId;
  readonly standardsMet: boolean;
  readonly certificationRequired: string;
}

/** @stereotype <<Commitment>> */
export interface ClinicianConfigurabilityCommitment {
  readonly commitmentId: ClinicianConfigurabilityCommitmentId;
  readonly configurableSafeMaxDose: boolean;
}

/** @stereotype <<Commitment>> */
export interface MaintainabilityCommitment {
  readonly commitmentId: MaintainabilityCommitmentId;
  readonly maintenanceIntervalDays: number;
}

/** @stereotype <<Category>> */
export interface OverdosePrevention {
}

/** @stereotype <<Category>> */
export interface FaultSafeBehavior {
}

/** @stereotype <<Category>> */
export interface PatientNotification {
}

/** @stereotype <<Category>> */
export interface SelfTestRequirement {
}

/** @stereotype <<Happening>> */
export interface InsulinDeliveryFlow {
  readonly flowId: InsulinDeliveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface InsulinPumpSystem extends OverdosePrevention, FaultSafeBehavior, PatientNotification, SelfTestRequirement {
  readonly systemId: InsulinPumpSystemId;
  readonly safeMaxDose: number;
  readonly safeZoneLower: number;
  readonly safeZoneUpper: number;
  readonly isOperating: boolean;
  readonly isDeliveringInsulin: boolean;
  readonly lastBloodSugarReading: number;
  readonly lastReadingTimestamp: string;
  readonly reservoirRemaining: number;
  readonly lowReservoirThreshold: number;
  readonly faultDetected: boolean;
  readonly alarmActive: boolean;
  readonly lastSelfTestTimestamp: string;
  readonly selfTestIntervalSeconds: number;
  readonly patientAlertActive: boolean;
}

/** @stereotype <<Category>> */
export interface Iec62304ClassC {
  readonly softwareSafetyClass: string;
  readonly riskManagementFileRef: string;
}

/** @stereotype <<Category>> */
export interface Fda510kCleared {
  readonly fda510kNumber: string;
  readonly indicationsForUse: string;
  readonly contraindications: string;
  readonly clearanceDate: string;
}

/** @stereotype <<Category>> */
export interface Iso14971Compliant {
  readonly riskAssessmentDate: string;
  readonly residualRiskAcceptable: boolean;
  readonly hazardLogVersion: string;
}

/** @stereotype <<Category>> */
export interface Iso13485Certified {
  readonly qualityManualVersion: string;
  readonly certificationBody: string;
}

/** @stereotype <<Category>> */
export interface EuMdrCompliant {
  readonly mdrNotifiedBody: string;
  readonly economicOperator: string;
  readonly uniqueDeviceIdentifier: string;
}

/** @stereotype <<Category>> */
export interface Iec60601Compliant {
  readonly emcTestStandardVersion: string;
  readonly electricalSafetyTestDate: string;
  readonly essentialPerformanceCharacteristics: string;
}

/** @stereotype <<Category>> */
export interface HipaaCompliant {
  readonly dataEncryptionStandard: string;
  readonly breachNotificationPolicy: string;
  readonly patientDataRetentionDays: number;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleBloodSugar {
}

/** @stereotype <<Category>> */
export interface PharmacodynamicSafe {
  readonly minimumDoseIntervalMinutes: number;
}

/** @stereotype <<Category>> */
export interface MassConservation {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionTag: string;
  readonly description: string;
  readonly rationale: string;
  readonly status: string;
  readonly riskLevel: string;
  readonly mitigationStrategy: string;
}

/** @stereotype <<Subkind>> */
export interface InsulinPumpFormalizedSystem extends InsulinPumpSystem {
  readonly lastDeliveryTimestamp: string;
  readonly minimumDoseIntervalMinutes: number;
}


// ─── Factory functions ───

export function makeBloodSugarSensor(data: {
  sensorId: string;
  lastValue: number;
  lastTimestamp: string;
  isCalibrated: boolean;
  readingValid: boolean;
  sensorHealthy: boolean;
}): BloodSugarSensor {
  return {
    sensorId: data.sensorId as BloodSugarSensorId,
    lastValue: data.lastValue,
    lastTimestamp: data.lastTimestamp,
    isCalibrated: data.isCalibrated,
    readingValid: data.readingValid,
    sensorHealthy: data.sensorHealthy,
  };
}

export function makeInsulinPump(data: {
  pumpId: string;
  reservoirUnits: number;
  capacityUnits: number;
  isDelivering: boolean;
  lastDoseAmount: number;
  lastDeliveryTimestamp: string;
  pumpHealthy: boolean;
}): InsulinPump {
  return {
    pumpId: data.pumpId as InsulinPumpId,
    reservoirUnits: data.reservoirUnits,
    capacityUnits: data.capacityUnits,
    isDelivering: data.isDelivering,
    lastDoseAmount: data.lastDoseAmount,
    lastDeliveryTimestamp: data.lastDeliveryTimestamp,
    pumpHealthy: data.pumpHealthy,
  };
}

export function makeFaultMonitor(data: {
  monitorId: string;
  faultDetected: boolean;
  faultCode: string;
  systemOperating: boolean;
  alarmActive: boolean;
  lastSelfTestTimestamp: string;
  selfTestIntervalSeconds: number;
}): FaultMonitor {
  return {
    monitorId: data.monitorId as FaultMonitorId,
    faultDetected: data.faultDetected,
    faultCode: data.faultCode,
    systemOperating: data.systemOperating,
    alarmActive: data.alarmActive,
    lastSelfTestTimestamp: data.lastSelfTestTimestamp,
    selfTestIntervalSeconds: data.selfTestIntervalSeconds,
  };
}

export function makePatientInterface(data: {
  interfaceId: string;
  alertActive: boolean;
  alertType: string;
  lowReservoirThreshold: number;
  configuredSafeMaxDose: number;
  configuredSafeZoneLower: number;
  configuredSafeZoneUpper: number;
  patientAlertActive: boolean;
}): PatientInterface {
  return {
    interfaceId: data.interfaceId as PatientInterfaceId,
    alertActive: data.alertActive,
    alertType: data.alertType,
    lowReservoirThreshold: data.lowReservoirThreshold,
    configuredSafeMaxDose: data.configuredSafeMaxDose,
    configuredSafeZoneLower: data.configuredSafeZoneLower,
    configuredSafeZoneUpper: data.configuredSafeZoneUpper,
    patientAlertActive: data.patientAlertActive,
  };
}

export function makeDoseCommander(data: {
  commanderId: string;
  authorizedDose: number;
  commanderHealthy: boolean;
}): DoseCommander {
  return {
    commanderId: data.commanderId as DoseCommanderId,
    authorizedDose: data.authorizedDose,
    commanderHealthy: data.commanderHealthy,
  };
}

export function makeSensorChannel(data: {
  channelId: string;
  lastTransmittedReading: number;
  transmissionTimestamp: string;
  channelHealthy: boolean;
}): SensorChannel {
  return {
    channelId: data.channelId as SensorChannelId,
    lastTransmittedReading: data.lastTransmittedReading,
    transmissionTimestamp: data.transmissionTimestamp,
    channelHealthy: data.channelHealthy,
  };
}

export function makeDeliveryBus(data: {
  busId: string;
  commandedDose: number;
  deliveryInProgress: boolean;
  busHealthy: boolean;
}): DeliveryBus {
  return {
    busId: data.busId as DeliveryBusId,
    commandedDose: data.commandedDose,
    deliveryInProgress: data.deliveryInProgress,
    busHealthy: data.busHealthy,
  };
}

export function makeFaultBusSensor(data: {
  busSensorId: string;
  lastHealthCheckTimestamp: string;
}): FaultBusSensor {
  return {
    busSensorId: data.busSensorId as FaultBusSensorId,
    lastHealthCheckTimestamp: data.lastHealthCheckTimestamp,
  };
}

export function makeFaultBusPump(data: {
  busPumpId: string;
  lastPumpHealthCheckTimestamp: string;
}): FaultBusPump {
  return {
    busPumpId: data.busPumpId as FaultBusPumpId,
    lastPumpHealthCheckTimestamp: data.lastPumpHealthCheckTimestamp,
  };
}

export function makeAlertChannel(data: {
  alertChannelId: string;
  pendingAlertCode: string;
  alertDelivered: boolean;
}): AlertChannel {
  return {
    alertChannelId: data.alertChannelId as AlertChannelId,
    pendingAlertCode: data.pendingAlertCode,
    alertDelivered: data.alertDelivered,
  };
}

export function makeInsulinDeliveryHappening(data: {
  flowId: string;
  stepCount: number;
  outcome: string;
}): InsulinDeliveryHappening {
  return {
    flowId: data.flowId as InsulinDeliveryHappeningId,
    stepCount: data.stepCount,
    outcome: data.outcome,
  };
}

export function makeBloodSugar(data: {
  readingId: string;
  valueMgDl: number;
  timestamp: string;
}): BloodSugar {
  return {
    readingId: data.readingId as BloodSugarId,
    valueMgDl: data.valueMgDl,
    timestamp: data.timestamp,
  };
}

export function makeInsulinReservoir(data: {
  reservoirId: string;
  capacityUnits: number;
  remainingUnits: number;
}): InsulinReservoir {
  return {
    reservoirId: data.reservoirId as InsulinReservoirId,
    capacityUnits: data.capacityUnits,
    remainingUnits: data.remainingUnits,
  };
}

export function makeHardwareFault(data: {
  faultId: string;
  faultCode: string;
  description: string;
  detectedAt: string;
}): HardwareFault {
  return {
    faultId: data.faultId as HardwareFaultId,
    faultCode: data.faultCode,
    description: data.description,
    detectedAt: data.detectedAt,
  };
}

export function makeSafeZone(data: {
  zoneId: string;
  lowerBound: number;
  upperBound: number;
}): SafeZone {
  return {
    zoneId: data.zoneId as SafeZoneId,
    lowerBound: data.lowerBound,
    upperBound: data.upperBound,
  };
}

export function makePatient(data: {
  patientId: string;
  age: number;
  hasDiabetes: boolean;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    age: data.age,
    hasDiabetes: data.hasDiabetes,
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

export function makeRegulatoryBody(data: {
  regulatoryId: string;
  jurisdiction: string;
}): RegulatoryBody {
  return {
    regulatoryId: data.regulatoryId as RegulatoryBodyId,
    jurisdiction: data.jurisdiction,
  };
}

export function makeHospitalAdministrator(data: {
  adminId: string;
  hospitalName: string;
}): HospitalAdministrator {
  return {
    adminId: data.adminId as HospitalAdministratorId,
    hospitalName: data.hospitalName,
  };
}

export function makeInsulinPumpVendor(data: {
  vendorId: string;
  companyName: string;
}): InsulinPumpVendor {
  return {
    vendorId: data.vendorId as InsulinPumpVendorId,
    companyName: data.companyName,
  };
}

export function makeDoseSafetyCommitment(data: {
  commitmentId: string;
  safeMaxDoseUnits: number;
  safeZoneUpperBound: number;
  safeZoneLowerBound: number;
}): DoseSafetyCommitment {
  return {
    commitmentId: data.commitmentId as DoseSafetyCommitmentId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    safeZoneUpperBound: data.safeZoneUpperBound,
    safeZoneLowerBound: data.safeZoneLowerBound,
  };
}

export function makeFailSafeCommitment(data: {
  commitmentId: string;
  alarmConditionMet: boolean;
}): FailSafeCommitment {
  return {
    commitmentId: data.commitmentId as FailSafeCommitmentId,
    alarmConditionMet: data.alarmConditionMet,
  };
}

export function makePatientAlertCommitment(data: {
  commitmentId: string;
  lowReservoirThreshold: number;
  patientNotifiedOnFault: boolean;
}): PatientAlertCommitment {
  return {
    commitmentId: data.commitmentId as PatientAlertCommitmentId,
    lowReservoirThreshold: data.lowReservoirThreshold,
    patientNotifiedOnFault: data.patientNotifiedOnFault,
  };
}

export function makeRegulatoryComplianceCommitment(data: {
  commitmentId: string;
  standardsMet: boolean;
  certificationRequired: string;
}): RegulatoryComplianceCommitment {
  return {
    commitmentId: data.commitmentId as RegulatoryComplianceCommitmentId,
    standardsMet: data.standardsMet,
    certificationRequired: data.certificationRequired,
  };
}

export function makeClinicianConfigurabilityCommitment(data: {
  commitmentId: string;
  configurableSafeMaxDose: boolean;
}): ClinicianConfigurabilityCommitment {
  return {
    commitmentId: data.commitmentId as ClinicianConfigurabilityCommitmentId,
    configurableSafeMaxDose: data.configurableSafeMaxDose,
  };
}

export function makeMaintainabilityCommitment(data: {
  commitmentId: string;
  maintenanceIntervalDays: number;
}): MaintainabilityCommitment {
  return {
    commitmentId: data.commitmentId as MaintainabilityCommitmentId,
    maintenanceIntervalDays: data.maintenanceIntervalDays,
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

export function makeInsulinPumpSystem(data: {
  systemId: string;
  safeMaxDose: number;
  safeZoneLower: number;
  safeZoneUpper: number;
  isOperating: boolean;
  isDeliveringInsulin: boolean;
  lastBloodSugarReading: number;
  lastReadingTimestamp: string;
  reservoirRemaining: number;
  lowReservoirThreshold: number;
  faultDetected: boolean;
  alarmActive: boolean;
  lastSelfTestTimestamp: string;
  selfTestIntervalSeconds: number;
  patientAlertActive: boolean;
}): InsulinPumpSystem {
  return {
    systemId: data.systemId as InsulinPumpSystemId,
    safeMaxDose: data.safeMaxDose,
    safeZoneLower: data.safeZoneLower,
    safeZoneUpper: data.safeZoneUpper,
    isOperating: data.isOperating,
    isDeliveringInsulin: data.isDeliveringInsulin,
    lastBloodSugarReading: data.lastBloodSugarReading,
    lastReadingTimestamp: data.lastReadingTimestamp,
    reservoirRemaining: data.reservoirRemaining,
    lowReservoirThreshold: data.lowReservoirThreshold,
    faultDetected: data.faultDetected,
    alarmActive: data.alarmActive,
    lastSelfTestTimestamp: data.lastSelfTestTimestamp,
    selfTestIntervalSeconds: data.selfTestIntervalSeconds,
    patientAlertActive: data.patientAlertActive,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionTag: string;
  description: string;
  rationale: string;
  status: string;
  riskLevel: string;
  mitigationStrategy: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionTag: data.assumptionTag,
    description: data.description,
    rationale: data.rationale,
    status: data.status,
    riskLevel: data.riskLevel,
    mitigationStrategy: data.mitigationStrategy,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for BloodSugarSensor. Returns empty array when valid. */
export function validateBloodSugarSensor(instance: BloodSugarSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[BloodSugarSensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastValue >= 0))) {
    violations.push("[BloodSugarSensor] invariant violated: self.lastValue >= 0.0");
  }
  if (!(!((instance.readingValid && !(instance.sensorHealthy))))) {
    violations.push("[BloodSugarSensor] invariant violated: not (self.readingValid and not self.sensorHealthy)");
  }
  if (!(((instance.readingValid) ? (((instance.lastValue >= 0) && (instance.lastValue <= 1000))) : (true)))) {
    violations.push("[BloodSugarSensor] invariant violated: if self.readingValid then self.lastValue >= 0.0 and self.lastValue <= 1000.0 else true endif");
  }
  return violations;
}

/** Runtime invariant check for InsulinPump. Returns empty array when valid. */
export function validateInsulinPump(instance: InsulinPump): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pumpId !== null))) {
    violations.push("[InsulinPump] invariant violated: self.pumpId <> null");
  }
  if (!((instance.capacityUnits > 0))) {
    violations.push("[InsulinPump] invariant violated: self.capacityUnits > 0.0");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[InsulinPump] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((instance.reservoirUnits <= instance.capacityUnits))) {
    violations.push("[InsulinPump] invariant violated: self.reservoirUnits <= self.capacityUnits");
  }
  if (!((instance.lastDoseAmount >= 0))) {
    violations.push("[InsulinPump] invariant violated: self.lastDoseAmount >= 0.0");
  }
  if (!(!((instance.isDelivering && !(instance.pumpHealthy))))) {
    violations.push("[InsulinPump] invariant violated: not (self.isDelivering and not self.pumpHealthy)");
  }
  return violations;
}

/** Runtime invariant check for FaultMonitor. Returns empty array when valid. */
export function validateFaultMonitor(instance: FaultMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[FaultMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.selfTestIntervalSeconds >= 60))) {
    violations.push("[FaultMonitor] invariant violated: self.selfTestIntervalSeconds >= 60");
  }
  if (!(((instance.faultDetected) ? (!(instance.systemOperating)) : (true)))) {
    violations.push("[FaultMonitor] invariant violated: if self.faultDetected then not self.systemOperating else true endif");
  }
  if (!(((instance.alarmActive) ? (instance.faultDetected) : (true)))) {
    violations.push("[FaultMonitor] invariant violated: if self.alarmActive then self.faultDetected else true endif");
  }
  return violations;
}

/** Runtime invariant check for PatientInterface. Returns empty array when valid. */
export function validatePatientInterface(instance: PatientInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[PatientInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lowReservoirThreshold > 0))) {
    violations.push("[PatientInterface] invariant violated: self.lowReservoirThreshold > 0.0");
  }
  if (!((instance.configuredSafeMaxDose > 0))) {
    violations.push("[PatientInterface] invariant violated: self.configuredSafeMaxDose > 0.0");
  }
  if (!((instance.configuredSafeZoneLower >= 0))) {
    violations.push("[PatientInterface] invariant violated: self.configuredSafeZoneLower >= 0.0");
  }
  if (!((instance.configuredSafeZoneUpper > instance.configuredSafeZoneLower))) {
    violations.push("[PatientInterface] invariant violated: self.configuredSafeZoneUpper > self.configuredSafeZoneLower");
  }
  return violations;
}

/** Runtime invariant check for DoseCommander. Returns empty array when valid. */
export function validateDoseCommander(instance: DoseCommander): readonly string[] {
  const violations: string[] = [];
  if (!((instance.commanderId !== null))) {
    violations.push("[DoseCommander] invariant violated: self.commanderId <> null");
  }
  if (!((instance.authorizedDose >= 0))) {
    violations.push("[DoseCommander] invariant violated: self.authorizedDose >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for SensorChannel. Returns empty array when valid. */
export function validateSensorChannel(instance: SensorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SensorChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastTransmittedReading >= 0))) {
    violations.push("[SensorChannel] invariant violated: self.lastTransmittedReading >= 0.0");
  }
  if (!((instance.channelHealthy === true))) {
    violations.push("[SensorChannel] invariant violated: self.channelHealthy = true");
  }
  return violations;
}

/** Runtime invariant check for DeliveryBus. Returns empty array when valid. */
export function validateDeliveryBus(instance: DeliveryBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[DeliveryBus] invariant violated: self.busId <> null");
  }
  if (!((instance.commandedDose >= 0))) {
    violations.push("[DeliveryBus] invariant violated: self.commandedDose >= 0.0");
  }
  if (!(!((instance.deliveryInProgress && !(instance.busHealthy))))) {
    violations.push("[DeliveryBus] invariant violated: not (self.deliveryInProgress and not self.busHealthy)");
  }
  return violations;
}

/** Runtime invariant check for FaultBusSensor. Returns empty array when valid. */
export function validateFaultBusSensor(instance: FaultBusSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busSensorId !== null))) {
    violations.push("[FaultBusSensor] invariant violated: self.busSensorId <> null");
  }
  return violations;
}

/** Runtime invariant check for FaultBusPump. Returns empty array when valid. */
export function validateFaultBusPump(instance: FaultBusPump): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busPumpId !== null))) {
    violations.push("[FaultBusPump] invariant violated: self.busPumpId <> null");
  }
  return violations;
}

/** Runtime invariant check for AlertChannel. Returns empty array when valid. */
export function validateAlertChannel(instance: AlertChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alertChannelId !== null))) {
    violations.push("[AlertChannel] invariant violated: self.alertChannelId <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinDeliveryHappening. Returns empty array when valid. */
export function validateInsulinDeliveryHappening(instance: InsulinDeliveryHappening): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[InsulinDeliveryHappening] invariant violated: self.flowId <> null");
  }
  if (!((instance.stepCount >= 0))) {
    violations.push("[InsulinDeliveryHappening] invariant violated: self.stepCount >= 0");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[InsulinDeliveryHappening] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for BloodSugar. Returns empty array when valid. */
export function validateBloodSugar(instance: BloodSugar): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[BloodSugar] invariant violated: self.readingId <> null");
  }
  if (!((instance.valueMgDl >= 0))) {
    violations.push("[BloodSugar] invariant violated: self.valueMgDl >= 0.0");
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
  if (!((instance.remainingUnits >= 0))) {
    violations.push("[InsulinReservoir] invariant violated: self.remainingUnits >= 0.0");
  }
  if (!((instance.remainingUnits <= instance.capacityUnits))) {
    violations.push("[InsulinReservoir] invariant violated: self.remainingUnits <= self.capacityUnits");
  }
  return violations;
}

/** Runtime invariant check for HardwareFault. Returns empty array when valid. */
export function validateHardwareFault(instance: HardwareFault): readonly string[] {
  const violations: string[] = [];
  if (!((instance.faultId !== null))) {
    violations.push("[HardwareFault] invariant violated: self.faultId <> null");
  }
  if (!((instance.faultCode !== null))) {
    violations.push("[HardwareFault] invariant violated: self.faultCode <> null");
  }
  return violations;
}

/** Runtime invariant check for SafeZone. Returns empty array when valid. */
export function validateSafeZone(instance: SafeZone): readonly string[] {
  const violations: string[] = [];
  if (!((instance.zoneId !== null))) {
    violations.push("[SafeZone] invariant violated: self.zoneId <> null");
  }
  if (!((instance.lowerBound >= 0))) {
    violations.push("[SafeZone] invariant violated: self.lowerBound >= 0.0");
  }
  if (!((instance.upperBound > instance.lowerBound))) {
    violations.push("[SafeZone] invariant violated: self.upperBound > self.lowerBound");
  }
  return violations;
}

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.age > 0))) {
    violations.push("[Patient] invariant violated: self.age > 0");
  }
  return violations;
}

/** Runtime invariant check for Clinician. Returns empty array when valid. */
export function validateClinician(instance: Clinician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clinicianId !== null))) {
    violations.push("[Clinician] invariant violated: self.clinicianId <> null");
  }
  if (!((instance.certificationNumber !== null))) {
    violations.push("[Clinician] invariant violated: self.certificationNumber <> null");
  }
  return violations;
}

/** Runtime invariant check for RegulatoryBody. Returns empty array when valid. */
export function validateRegulatoryBody(instance: RegulatoryBody): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatoryId !== null))) {
    violations.push("[RegulatoryBody] invariant violated: self.regulatoryId <> null");
  }
  if (!((instance.jurisdiction !== null))) {
    violations.push("[RegulatoryBody] invariant violated: self.jurisdiction <> null");
  }
  return violations;
}

/** Runtime invariant check for HospitalAdministrator. Returns empty array when valid. */
export function validateHospitalAdministrator(instance: HospitalAdministrator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.adminId !== null))) {
    violations.push("[HospitalAdministrator] invariant violated: self.adminId <> null");
  }
  if (!((instance.hospitalName !== null))) {
    violations.push("[HospitalAdministrator] invariant violated: self.hospitalName <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpVendor. Returns empty array when valid. */
export function validateInsulinPumpVendor(instance: InsulinPumpVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[InsulinPumpVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.companyName !== null))) {
    violations.push("[InsulinPumpVendor] invariant violated: self.companyName <> null");
  }
  return violations;
}

/** Runtime invariant check for OverdosePrevention. Returns empty array when valid. */
export function validateOverdosePrevention(instance: OverdosePrevention): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[OverdosePrevention] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FaultSafeBehavior. Returns empty array when valid. */
export function validateFaultSafeBehavior(instance: FaultSafeBehavior): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FaultSafeBehavior] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PatientNotification. Returns empty array when valid. */
export function validatePatientNotification(instance: PatientNotification): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PatientNotification] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SelfTestRequirement. Returns empty array when valid. */
export function validateSelfTestRequirement(instance: SelfTestRequirement): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SelfTestRequirement] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for InsulinDeliveryFlow. Returns empty array when valid. */
export function validateInsulinDeliveryFlow(instance: InsulinDeliveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[InsulinDeliveryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[InsulinDeliveryFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[InsulinDeliveryFlow] invariant violated: self.outcome <> null");
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
  if (!((instance.safeZoneLower >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeZoneLower >= 0.0");
  }
  if (!((instance.safeZoneUpper > instance.safeZoneLower))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeZoneUpper > self.safeZoneLower");
  }
  if (!((instance.reservoirRemaining >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.reservoirRemaining >= 0.0");
  }
  if (!((instance.lowReservoirThreshold > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.lowReservoirThreshold > 0.0");
  }
  if (!((instance.selfTestIntervalSeconds >= 60))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.selfTestIntervalSeconds >= 60");
  }
  if (!(!((instance.isDeliveringInsulin && instance.faultDetected)))) {
    violations.push("[InsulinPumpSystem] invariant violated: not (self.isDeliveringInsulin and self.faultDetected)");
  }
  if (!(((instance.alarmActive) ? (instance.faultDetected) : (true)))) {
    violations.push("[InsulinPumpSystem] invariant violated: if self.alarmActive then self.faultDetected else true endif");
  }
  if (!(((instance.patientAlertActive) ? ((instance.alarmActive || (instance.reservoirRemaining < instance.lowReservoirThreshold))) : (true)))) {
    violations.push("[InsulinPumpSystem] invariant violated: if self.patientAlertActive then (self.alarmActive or (self.reservoirRemaining < self.lowReservoirThreshold)) else true endif");
  }
  if (!((instance.lastBloodSugarReading >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.lastBloodSugarReading >= 0.0");
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

/** Runtime invariant check for Fda510kCleared. Returns empty array when valid. */
export function validateFda510kCleared(instance: Fda510kCleared): readonly string[] {
  const violations: string[] = [];
  if (!((instance.fda510kNumber !== null))) {
    violations.push("[Fda510kCleared] invariant violated: self.fda510kNumber <> null");
  }
  if (!((instance.indicationsForUse !== null))) {
    violations.push("[Fda510kCleared] invariant violated: self.indicationsForUse <> null");
  }
  return violations;
}

/** Runtime invariant check for Iso14971Compliant. Returns empty array when valid. */
export function validateIso14971Compliant(instance: Iso14971Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.riskAssessmentDate !== null))) {
    violations.push("[Iso14971Compliant] invariant violated: self.riskAssessmentDate <> null");
  }
  if (!((instance.residualRiskAcceptable === true))) {
    violations.push("[Iso14971Compliant] invariant violated: self.residualRiskAcceptable = true");
  }
  if (!((instance.hazardLogVersion !== null))) {
    violations.push("[Iso14971Compliant] invariant violated: self.hazardLogVersion <> null");
  }
  return violations;
}

/** Runtime invariant check for Iso13485Certified. Returns empty array when valid. */
export function validateIso13485Certified(instance: Iso13485Certified): readonly string[] {
  const violations: string[] = [];
  if (!((instance.qualityManualVersion !== null))) {
    violations.push("[Iso13485Certified] invariant violated: self.qualityManualVersion <> null");
  }
  if (!((instance.certificationBody !== null))) {
    violations.push("[Iso13485Certified] invariant violated: self.certificationBody <> null");
  }
  return violations;
}

/** Runtime invariant check for EuMdrCompliant. Returns empty array when valid. */
export function validateEuMdrCompliant(instance: EuMdrCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.mdrNotifiedBody !== null))) {
    violations.push("[EuMdrCompliant] invariant violated: self.mdrNotifiedBody <> null");
  }
  if (!((instance.economicOperator !== null))) {
    violations.push("[EuMdrCompliant] invariant violated: self.economicOperator <> null");
  }
  if (!((instance.uniqueDeviceIdentifier !== null))) {
    violations.push("[EuMdrCompliant] invariant violated: self.uniqueDeviceIdentifier <> null");
  }
  return violations;
}

/** Runtime invariant check for Iec60601Compliant. Returns empty array when valid. */
export function validateIec60601Compliant(instance: Iec60601Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.emcTestStandardVersion !== null))) {
    violations.push("[Iec60601Compliant] invariant violated: self.emcTestStandardVersion <> null");
  }
  if (!((instance.electricalSafetyTestDate !== null))) {
    violations.push("[Iec60601Compliant] invariant violated: self.electricalSafetyTestDate <> null");
  }
  if (!((instance.essentialPerformanceCharacteristics !== null))) {
    violations.push("[Iec60601Compliant] invariant violated: self.essentialPerformanceCharacteristics <> null");
  }
  return violations;
}

/** Runtime invariant check for HipaaCompliant. Returns empty array when valid. */
export function validateHipaaCompliant(instance: HipaaCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dataEncryptionStandard === "AES-256"))) {
    violations.push("[HipaaCompliant] invariant violated: self.dataEncryptionStandard = 'AES-256'");
  }
  if (!((instance.patientDataRetentionDays > 0))) {
    violations.push("[HipaaCompliant] invariant violated: self.patientDataRetentionDays > 0");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleBloodSugar. Returns empty array when valid. */
export function validatePhysicallyPlausibleBloodSugar(instance: PhysicallyPlausibleBloodSugar): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PhysicallyPlausibleBloodSugar] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PharmacodynamicSafe. Returns empty array when valid. */
export function validatePharmacodynamicSafe(instance: PharmacodynamicSafe): readonly string[] {
  const violations: string[] = [];
  if (!((instance.minimumDoseIntervalMinutes >= 10))) {
    violations.push("[PharmacodynamicSafe] invariant violated: self.minimumDoseIntervalMinutes >= 10");
  }
  return violations;
}

/** Runtime invariant check for MassConservation. Returns empty array when valid. */
export function validateMassConservation(instance: MassConservation): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MassConservation] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionTag !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionTag <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.status <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpFormalizedSystem. Returns empty array when valid. */
export function validateInsulinPumpFormalizedSystem(instance: InsulinPumpFormalizedSystem): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[InsulinPumpFormalizedSystem] invariant violated: true");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for BloodSugarSensor.takeReading. User supplies this. */
export type BloodSugarSensorTakeReadingImpl = (self: BloodSugarSensor, value: number) => { self: BloodSugarSensor; modified: { lastValue: unknown; readingValid: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.takeReading. */
export function wrapBloodSugarSensorTakeReading(impl: BloodSugarSensorTakeReadingImpl): (self: BloodSugarSensor, value: number) => BloodSugarSensor {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value >= 0.0");
    }
    if (!((value <= 1000))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value <= 1000.0");
    }
    if (!((self.sensorHealthy === true))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: self.sensorHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastValue === value))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.lastValue = value");
      }
      if (!((__result.self.readingValid === true))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.readingValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type BloodSugarSensorTakeReadingAsyncImpl = (self: BloodSugarSensor, value: number) => Promise<{ self: BloodSugarSensor; modified: { lastValue: unknown; readingValid: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.takeReading (async). */
export function wrapBloodSugarSensorTakeReadingAsync(impl: BloodSugarSensorTakeReadingAsyncImpl): (self: BloodSugarSensor, value: number) => Promise<BloodSugarSensor> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value >= 0.0");
    }
    if (!((value <= 1000))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value <= 1000.0");
    }
    if (!((self.sensorHealthy === true))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: self.sensorHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastValue === value))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.lastValue = value");
      }
      if (!((__result.self.readingValid === true))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.readingValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.markFaulty. User supplies this. */
export type BloodSugarSensorMarkFaultyImpl = (self: BloodSugarSensor) => { self: BloodSugarSensor; modified: { sensorHealthy: unknown; readingValid: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.markFaulty. */
export function wrapBloodSugarSensorMarkFaulty(impl: BloodSugarSensorMarkFaultyImpl): (self: BloodSugarSensor) => BloodSugarSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorHealthy === true))) {
      preViolations.push("[BloodSugarSensor.markFaulty] pre violated: self.sensorHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorHealthy === false))) {
        postViolations.push("[BloodSugarSensor.markFaulty] post violated: self.sensorHealthy = false");
      }
      if (!((__result.self.readingValid === false))) {
        postViolations.push("[BloodSugarSensor.markFaulty] post violated: self.readingValid = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.markFaulty (async). User supplies this. */
export type BloodSugarSensorMarkFaultyAsyncImpl = (self: BloodSugarSensor) => Promise<{ self: BloodSugarSensor; modified: { sensorHealthy: unknown; readingValid: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.markFaulty (async). */
export function wrapBloodSugarSensorMarkFaultyAsync(impl: BloodSugarSensorMarkFaultyAsyncImpl): (self: BloodSugarSensor) => Promise<BloodSugarSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorHealthy === true))) {
      preViolations.push("[BloodSugarSensor.markFaulty] pre violated: self.sensorHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorHealthy === false))) {
        postViolations.push("[BloodSugarSensor.markFaulty] post violated: self.sensorHealthy = false");
      }
      if (!((__result.self.readingValid === false))) {
        postViolations.push("[BloodSugarSensor.markFaulty] post violated: self.readingValid = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.clearFault. User supplies this. */
export type BloodSugarSensorClearFaultImpl = (self: BloodSugarSensor) => { self: BloodSugarSensor; modified: { sensorHealthy: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.clearFault. */
export function wrapBloodSugarSensorClearFault(impl: BloodSugarSensorClearFaultImpl): (self: BloodSugarSensor) => BloodSugarSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorHealthy))) {
      preViolations.push("[BloodSugarSensor.clearFault] pre violated: not self.sensorHealthy");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorHealthy === true))) {
        postViolations.push("[BloodSugarSensor.clearFault] post violated: self.sensorHealthy = true");
      }
      if (!((__result.self.readingValid === false))) {
        postViolations.push("[BloodSugarSensor.clearFault] post violated: self.readingValid = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.clearFault (async). User supplies this. */
export type BloodSugarSensorClearFaultAsyncImpl = (self: BloodSugarSensor) => Promise<{ self: BloodSugarSensor; modified: { sensorHealthy: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.clearFault (async). */
export function wrapBloodSugarSensorClearFaultAsync(impl: BloodSugarSensorClearFaultAsyncImpl): (self: BloodSugarSensor) => Promise<BloodSugarSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorHealthy))) {
      preViolations.push("[BloodSugarSensor.clearFault] pre violated: not self.sensorHealthy");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorHealthy === true))) {
        postViolations.push("[BloodSugarSensor.clearFault] post violated: self.sensorHealthy = true");
      }
      if (!((__result.self.readingValid === false))) {
        postViolations.push("[BloodSugarSensor.clearFault] post violated: self.readingValid = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.calibrate. User supplies this. */
export type BloodSugarSensorCalibrateImpl = (self: BloodSugarSensor, value: number) => { self: BloodSugarSensor; modified: { lastValue: unknown; isCalibrated: unknown; readingValid: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.calibrate. */
export function wrapBloodSugarSensorCalibrate(impl: BloodSugarSensorCalibrateImpl): (self: BloodSugarSensor, value: number) => BloodSugarSensor {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.calibrate] pre violated: value >= 0.0");
    }
    if (!((self.sensorHealthy === true))) {
      preViolations.push("[BloodSugarSensor.calibrate] pre violated: self.sensorHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastValue === value))) {
        postViolations.push("[BloodSugarSensor.calibrate] post violated: self.lastValue = value");
      }
      if (!((__result.self.isCalibrated === true))) {
        postViolations.push("[BloodSugarSensor.calibrate] post violated: self.isCalibrated = true");
      }
      if (!((__result.self.readingValid === true))) {
        postViolations.push("[BloodSugarSensor.calibrate] post violated: self.readingValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.calibrate (async). User supplies this. */
export type BloodSugarSensorCalibrateAsyncImpl = (self: BloodSugarSensor, value: number) => Promise<{ self: BloodSugarSensor; modified: { lastValue: unknown; isCalibrated: unknown; readingValid: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.calibrate (async). */
export function wrapBloodSugarSensorCalibrateAsync(impl: BloodSugarSensorCalibrateAsyncImpl): (self: BloodSugarSensor, value: number) => Promise<BloodSugarSensor> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.calibrate] pre violated: value >= 0.0");
    }
    if (!((self.sensorHealthy === true))) {
      preViolations.push("[BloodSugarSensor.calibrate] pre violated: self.sensorHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastValue === value))) {
        postViolations.push("[BloodSugarSensor.calibrate] post violated: self.lastValue = value");
      }
      if (!((__result.self.isCalibrated === true))) {
        postViolations.push("[BloodSugarSensor.calibrate] post violated: self.isCalibrated = true");
      }
      if (!((__result.self.readingValid === true))) {
        postViolations.push("[BloodSugarSensor.calibrate] post violated: self.readingValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.deliver. User supplies this. */
export type InsulinPumpDeliverImpl = (self: InsulinPump, dose: number) => { self: InsulinPump; modified: { reservoirUnits: unknown; isDelivering: unknown; lastDoseAmount: unknown } };

/** Contract-checking wrapper for InsulinPump.deliver. */
export function wrapInsulinPumpDeliver(impl: InsulinPumpDeliverImpl): (self: InsulinPump, dose: number) => InsulinPump {
  return (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[InsulinPump.deliver] pre violated: dose > 0.0");
    }
    if (!((self.reservoirUnits >= dose))) {
      preViolations.push("[InsulinPump.deliver] pre violated: self.reservoirUnits >= dose");
    }
    if (!(!(self.isDelivering))) {
      preViolations.push("[InsulinPump.deliver] pre violated: not self.isDelivering");
    }
    if (!((self.pumpHealthy === true))) {
      preViolations.push("[InsulinPump.deliver] pre violated: self.pumpHealthy = true");
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
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] - dose)))) {
        postViolations.push("[InsulinPump.deliver] post violated: self.reservoirUnits = self.reservoirUnits@pre - dose");
      }
      if (!((__result.self.isDelivering === true))) {
        postViolations.push("[InsulinPump.deliver] post violated: self.isDelivering = true");
      }
      if (!((__result.self.lastDoseAmount === dose))) {
        postViolations.push("[InsulinPump.deliver] post violated: self.lastDoseAmount = dose");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.deliver (async). User supplies this. */
export type InsulinPumpDeliverAsyncImpl = (self: InsulinPump, dose: number) => Promise<{ self: InsulinPump; modified: { reservoirUnits: unknown; isDelivering: unknown; lastDoseAmount: unknown } }>;

/** Contract-checking wrapper for InsulinPump.deliver (async). */
export function wrapInsulinPumpDeliverAsync(impl: InsulinPumpDeliverAsyncImpl): (self: InsulinPump, dose: number) => Promise<InsulinPump> {
  return async (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[InsulinPump.deliver] pre violated: dose > 0.0");
    }
    if (!((self.reservoirUnits >= dose))) {
      preViolations.push("[InsulinPump.deliver] pre violated: self.reservoirUnits >= dose");
    }
    if (!(!(self.isDelivering))) {
      preViolations.push("[InsulinPump.deliver] pre violated: not self.isDelivering");
    }
    if (!((self.pumpHealthy === true))) {
      preViolations.push("[InsulinPump.deliver] pre violated: self.pumpHealthy = true");
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
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] - dose)))) {
        postViolations.push("[InsulinPump.deliver] post violated: self.reservoirUnits = self.reservoirUnits@pre - dose");
      }
      if (!((__result.self.isDelivering === true))) {
        postViolations.push("[InsulinPump.deliver] post violated: self.isDelivering = true");
      }
      if (!((__result.self.lastDoseAmount === dose))) {
        postViolations.push("[InsulinPump.deliver] post violated: self.lastDoseAmount = dose");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.completeDelivery. User supplies this. */
export type InsulinPumpCompleteDeliveryImpl = (self: InsulinPump) => { self: InsulinPump; modified: { isDelivering: unknown } };

/** Contract-checking wrapper for InsulinPump.completeDelivery. */
export function wrapInsulinPumpCompleteDelivery(impl: InsulinPumpCompleteDeliveryImpl): (self: InsulinPump) => InsulinPump {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isDelivering === true))) {
      preViolations.push("[InsulinPump.completeDelivery] pre violated: self.isDelivering = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDelivering === false))) {
        postViolations.push("[InsulinPump.completeDelivery] post violated: self.isDelivering = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.completeDelivery (async). User supplies this. */
export type InsulinPumpCompleteDeliveryAsyncImpl = (self: InsulinPump) => Promise<{ self: InsulinPump; modified: { isDelivering: unknown } }>;

/** Contract-checking wrapper for InsulinPump.completeDelivery (async). */
export function wrapInsulinPumpCompleteDeliveryAsync(impl: InsulinPumpCompleteDeliveryAsyncImpl): (self: InsulinPump) => Promise<InsulinPump> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isDelivering === true))) {
      preViolations.push("[InsulinPump.completeDelivery] pre violated: self.isDelivering = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDelivering === false))) {
        postViolations.push("[InsulinPump.completeDelivery] post violated: self.isDelivering = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.markFaulty. User supplies this. */
export type InsulinPumpMarkFaultyImpl = (self: InsulinPump) => { self: InsulinPump; modified: { pumpHealthy: unknown } };

/** Contract-checking wrapper for InsulinPump.markFaulty. */
export function wrapInsulinPumpMarkFaulty(impl: InsulinPumpMarkFaultyImpl): (self: InsulinPump) => InsulinPump {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.pumpHealthy === true))) {
      preViolations.push("[InsulinPump.markFaulty] pre violated: self.pumpHealthy = true");
    }
    if (!(!(self.isDelivering))) {
      preViolations.push("[InsulinPump.markFaulty] pre violated: not self.isDelivering");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpHealthy === false))) {
        postViolations.push("[InsulinPump.markFaulty] post violated: self.pumpHealthy = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.markFaulty (async). User supplies this. */
export type InsulinPumpMarkFaultyAsyncImpl = (self: InsulinPump) => Promise<{ self: InsulinPump; modified: { pumpHealthy: unknown } }>;

/** Contract-checking wrapper for InsulinPump.markFaulty (async). */
export function wrapInsulinPumpMarkFaultyAsync(impl: InsulinPumpMarkFaultyAsyncImpl): (self: InsulinPump) => Promise<InsulinPump> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.pumpHealthy === true))) {
      preViolations.push("[InsulinPump.markFaulty] pre violated: self.pumpHealthy = true");
    }
    if (!(!(self.isDelivering))) {
      preViolations.push("[InsulinPump.markFaulty] pre violated: not self.isDelivering");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpHealthy === false))) {
        postViolations.push("[InsulinPump.markFaulty] post violated: self.pumpHealthy = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.clearFault. User supplies this. */
export type InsulinPumpClearFaultImpl = (self: InsulinPump) => { self: InsulinPump; modified: { pumpHealthy: unknown } };

/** Contract-checking wrapper for InsulinPump.clearFault. */
export function wrapInsulinPumpClearFault(impl: InsulinPumpClearFaultImpl): (self: InsulinPump) => InsulinPump {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pumpHealthy))) {
      preViolations.push("[InsulinPump.clearFault] pre violated: not self.pumpHealthy");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpHealthy === true))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.pumpHealthy = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.clearFault (async). User supplies this. */
export type InsulinPumpClearFaultAsyncImpl = (self: InsulinPump) => Promise<{ self: InsulinPump; modified: { pumpHealthy: unknown } }>;

/** Contract-checking wrapper for InsulinPump.clearFault (async). */
export function wrapInsulinPumpClearFaultAsync(impl: InsulinPumpClearFaultAsyncImpl): (self: InsulinPump) => Promise<InsulinPump> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pumpHealthy))) {
      preViolations.push("[InsulinPump.clearFault] pre violated: not self.pumpHealthy");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pumpHealthy === true))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.pumpHealthy = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.refill. User supplies this. */
export type InsulinPumpRefillImpl = (self: InsulinPump, newAmount: number) => { self: InsulinPump; modified: { reservoirUnits: unknown } };

/** Contract-checking wrapper for InsulinPump.refill. */
export function wrapInsulinPumpRefill(impl: InsulinPumpRefillImpl): (self: InsulinPump, newAmount: number) => InsulinPump {
  return (self, newAmount) => {
    const preViolations: string[] = [];
    if (!((newAmount > 0))) {
      preViolations.push("[InsulinPump.refill] pre violated: newAmount > 0.0");
    }
    if (!((self.pumpHealthy === true))) {
      preViolations.push("[InsulinPump.refill] pre violated: self.pumpHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newAmount);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === newAmount))) {
        postViolations.push("[InsulinPump.refill] post violated: self.reservoirUnits = newAmount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPump.refill (async). User supplies this. */
export type InsulinPumpRefillAsyncImpl = (self: InsulinPump, newAmount: number) => Promise<{ self: InsulinPump; modified: { reservoirUnits: unknown } }>;

/** Contract-checking wrapper for InsulinPump.refill (async). */
export function wrapInsulinPumpRefillAsync(impl: InsulinPumpRefillAsyncImpl): (self: InsulinPump, newAmount: number) => Promise<InsulinPump> {
  return async (self, newAmount) => {
    const preViolations: string[] = [];
    if (!((newAmount > 0))) {
      preViolations.push("[InsulinPump.refill] pre violated: newAmount > 0.0");
    }
    if (!((self.pumpHealthy === true))) {
      preViolations.push("[InsulinPump.refill] pre violated: self.pumpHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newAmount);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === newAmount))) {
        postViolations.push("[InsulinPump.refill] post violated: self.reservoirUnits = newAmount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.reportSensorFault. User supplies this. */
export type FaultMonitorReportSensorFaultImpl = (self: FaultMonitor, code: string) => { self: FaultMonitor; modified: { faultDetected: unknown; faultCode: unknown; systemOperating: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for FaultMonitor.reportSensorFault. */
export function wrapFaultMonitorReportSensorFault(impl: FaultMonitorReportSensorFaultImpl): (self: FaultMonitor, code: string) => FaultMonitor {
  return (self, code) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[FaultMonitor.reportSensorFault] pre violated: not self.faultDetected");
    }
    if (!((self.systemOperating === true))) {
      preViolations.push("[FaultMonitor.reportSensorFault] pre violated: self.systemOperating = true");
    }
    if (!((code !== null))) {
      preViolations.push("[FaultMonitor.reportSensorFault] pre violated: code <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, code);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.faultCode === code))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.faultCode = code");
      }
      if (!((__result.self.systemOperating === false))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.systemOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.reportSensorFault (async). User supplies this. */
export type FaultMonitorReportSensorFaultAsyncImpl = (self: FaultMonitor, code: string) => Promise<{ self: FaultMonitor; modified: { faultDetected: unknown; faultCode: unknown; systemOperating: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for FaultMonitor.reportSensorFault (async). */
export function wrapFaultMonitorReportSensorFaultAsync(impl: FaultMonitorReportSensorFaultAsyncImpl): (self: FaultMonitor, code: string) => Promise<FaultMonitor> {
  return async (self, code) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[FaultMonitor.reportSensorFault] pre violated: not self.faultDetected");
    }
    if (!((self.systemOperating === true))) {
      preViolations.push("[FaultMonitor.reportSensorFault] pre violated: self.systemOperating = true");
    }
    if (!((code !== null))) {
      preViolations.push("[FaultMonitor.reportSensorFault] pre violated: code <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, code);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.faultCode === code))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.faultCode = code");
      }
      if (!((__result.self.systemOperating === false))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.systemOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[FaultMonitor.reportSensorFault] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.reportPumpFault. User supplies this. */
export type FaultMonitorReportPumpFaultImpl = (self: FaultMonitor, code: string) => { self: FaultMonitor; modified: { faultDetected: unknown; faultCode: unknown; systemOperating: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for FaultMonitor.reportPumpFault. */
export function wrapFaultMonitorReportPumpFault(impl: FaultMonitorReportPumpFaultImpl): (self: FaultMonitor, code: string) => FaultMonitor {
  return (self, code) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[FaultMonitor.reportPumpFault] pre violated: not self.faultDetected");
    }
    if (!((self.systemOperating === true))) {
      preViolations.push("[FaultMonitor.reportPumpFault] pre violated: self.systemOperating = true");
    }
    if (!((code !== null))) {
      preViolations.push("[FaultMonitor.reportPumpFault] pre violated: code <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, code);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.faultCode === code))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.faultCode = code");
      }
      if (!((__result.self.systemOperating === false))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.systemOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.reportPumpFault (async). User supplies this. */
export type FaultMonitorReportPumpFaultAsyncImpl = (self: FaultMonitor, code: string) => Promise<{ self: FaultMonitor; modified: { faultDetected: unknown; faultCode: unknown; systemOperating: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for FaultMonitor.reportPumpFault (async). */
export function wrapFaultMonitorReportPumpFaultAsync(impl: FaultMonitorReportPumpFaultAsyncImpl): (self: FaultMonitor, code: string) => Promise<FaultMonitor> {
  return async (self, code) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[FaultMonitor.reportPumpFault] pre violated: not self.faultDetected");
    }
    if (!((self.systemOperating === true))) {
      preViolations.push("[FaultMonitor.reportPumpFault] pre violated: self.systemOperating = true");
    }
    if (!((code !== null))) {
      preViolations.push("[FaultMonitor.reportPumpFault] pre violated: code <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, code);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.faultCode === code))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.faultCode = code");
      }
      if (!((__result.self.systemOperating === false))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.systemOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[FaultMonitor.reportPumpFault] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.runSelfTest. User supplies this. */
export type FaultMonitorRunSelfTestImpl = (self: FaultMonitor) => { self: FaultMonitor; modified: { lastSelfTestTimestamp: unknown } };

/** Contract-checking wrapper for FaultMonitor.runSelfTest. */
export function wrapFaultMonitorRunSelfTest(impl: FaultMonitorRunSelfTestImpl): (self: FaultMonitor) => FaultMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.systemOperating === true))) {
      preViolations.push("[FaultMonitor.runSelfTest] pre violated: self.systemOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultDetected": self.faultDetected,
      "self.lastSelfTestTimestamp": self.lastSelfTestTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === __pre["self.faultDetected"]))) {
        postViolations.push("[FaultMonitor.runSelfTest] post violated: self.faultDetected = self.faultDetected@pre");
      }
      if (!((__result.self.lastSelfTestTimestamp === __pre["self.lastSelfTestTimestamp"]))) {
        postViolations.push("[FaultMonitor.runSelfTest] post violated: self.lastSelfTestTimestamp = self.lastSelfTestTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.runSelfTest (async). User supplies this. */
export type FaultMonitorRunSelfTestAsyncImpl = (self: FaultMonitor) => Promise<{ self: FaultMonitor; modified: { lastSelfTestTimestamp: unknown } }>;

/** Contract-checking wrapper for FaultMonitor.runSelfTest (async). */
export function wrapFaultMonitorRunSelfTestAsync(impl: FaultMonitorRunSelfTestAsyncImpl): (self: FaultMonitor) => Promise<FaultMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.systemOperating === true))) {
      preViolations.push("[FaultMonitor.runSelfTest] pre violated: self.systemOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultDetected": self.faultDetected,
      "self.lastSelfTestTimestamp": self.lastSelfTestTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === __pre["self.faultDetected"]))) {
        postViolations.push("[FaultMonitor.runSelfTest] post violated: self.faultDetected = self.faultDetected@pre");
      }
      if (!((__result.self.lastSelfTestTimestamp === __pre["self.lastSelfTestTimestamp"]))) {
        postViolations.push("[FaultMonitor.runSelfTest] post violated: self.lastSelfTestTimestamp = self.lastSelfTestTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.clearFault. User supplies this. */
export type FaultMonitorClearFaultImpl = (self: FaultMonitor) => { self: FaultMonitor; modified: { faultDetected: unknown; faultCode: unknown; systemOperating: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for FaultMonitor.clearFault. */
export function wrapFaultMonitorClearFault(impl: FaultMonitorClearFaultImpl): (self: FaultMonitor) => FaultMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[FaultMonitor.clearFault] pre violated: self.faultDetected = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[FaultMonitor.clearFault] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.faultCode === ""))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.faultCode = ''");
      }
      if (!((__result.self.systemOperating === true))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.systemOperating = true");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.clearFault (async). User supplies this. */
export type FaultMonitorClearFaultAsyncImpl = (self: FaultMonitor) => Promise<{ self: FaultMonitor; modified: { faultDetected: unknown; faultCode: unknown; systemOperating: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for FaultMonitor.clearFault (async). */
export function wrapFaultMonitorClearFaultAsync(impl: FaultMonitorClearFaultAsyncImpl): (self: FaultMonitor) => Promise<FaultMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[FaultMonitor.clearFault] pre violated: self.faultDetected = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[FaultMonitor.clearFault] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.faultCode === ""))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.faultCode = ''");
      }
      if (!((__result.self.systemOperating === true))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.systemOperating = true");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[FaultMonitor.clearFault] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.silenceAlarm. User supplies this. */
export type FaultMonitorSilenceAlarmImpl = (self: FaultMonitor) => { self: FaultMonitor; modified: { alarmActive: unknown } };

/** Contract-checking wrapper for FaultMonitor.silenceAlarm. */
export function wrapFaultMonitorSilenceAlarm(impl: FaultMonitorSilenceAlarmImpl): (self: FaultMonitor) => FaultMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[FaultMonitor.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[FaultMonitor.silenceAlarm] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultMonitor.silenceAlarm (async). User supplies this. */
export type FaultMonitorSilenceAlarmAsyncImpl = (self: FaultMonitor) => Promise<{ self: FaultMonitor; modified: { alarmActive: unknown } }>;

/** Contract-checking wrapper for FaultMonitor.silenceAlarm (async). */
export function wrapFaultMonitorSilenceAlarmAsync(impl: FaultMonitorSilenceAlarmAsyncImpl): (self: FaultMonitor) => Promise<FaultMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[FaultMonitor.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[FaultMonitor.silenceAlarm] post violated: self.alarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.displayAlert. User supplies this. */
export type PatientInterfaceDisplayAlertImpl = (self: PatientInterface, alertCode: string) => { self: PatientInterface; modified: { alertActive: unknown; alertType: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for PatientInterface.displayAlert. */
export function wrapPatientInterfaceDisplayAlert(impl: PatientInterfaceDisplayAlertImpl): (self: PatientInterface, alertCode: string) => PatientInterface {
  return (self, alertCode) => {
    const preViolations: string[] = [];
    if (!(!(self.alertActive))) {
      preViolations.push("[PatientInterface.displayAlert] pre violated: not self.alertActive");
    }
    if (!((alertCode !== null))) {
      preViolations.push("[PatientInterface.displayAlert] pre violated: alertCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, alertCode);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[PatientInterface.displayAlert] post violated: self.alertActive = true");
      }
      if (!((__result.self.alertType === alertCode))) {
        postViolations.push("[PatientInterface.displayAlert] post violated: self.alertType = alertCode");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[PatientInterface.displayAlert] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.displayAlert (async). User supplies this. */
export type PatientInterfaceDisplayAlertAsyncImpl = (self: PatientInterface, alertCode: string) => Promise<{ self: PatientInterface; modified: { alertActive: unknown; alertType: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for PatientInterface.displayAlert (async). */
export function wrapPatientInterfaceDisplayAlertAsync(impl: PatientInterfaceDisplayAlertAsyncImpl): (self: PatientInterface, alertCode: string) => Promise<PatientInterface> {
  return async (self, alertCode) => {
    const preViolations: string[] = [];
    if (!(!(self.alertActive))) {
      preViolations.push("[PatientInterface.displayAlert] pre violated: not self.alertActive");
    }
    if (!((alertCode !== null))) {
      preViolations.push("[PatientInterface.displayAlert] pre violated: alertCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, alertCode);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[PatientInterface.displayAlert] post violated: self.alertActive = true");
      }
      if (!((__result.self.alertType === alertCode))) {
        postViolations.push("[PatientInterface.displayAlert] post violated: self.alertType = alertCode");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[PatientInterface.displayAlert] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.acknowledgeAlert. User supplies this. */
export type PatientInterfaceAcknowledgeAlertImpl = (self: PatientInterface) => { self: PatientInterface; modified: { alertActive: unknown; alertType: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for PatientInterface.acknowledgeAlert. */
export function wrapPatientInterfaceAcknowledgeAlert(impl: PatientInterfaceAcknowledgeAlertImpl): (self: PatientInterface) => PatientInterface {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[PatientInterface.acknowledgeAlert] pre violated: self.alertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[PatientInterface.acknowledgeAlert] post violated: self.alertActive = false");
      }
      if (!((__result.self.alertType === ""))) {
        postViolations.push("[PatientInterface.acknowledgeAlert] post violated: self.alertType = ''");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[PatientInterface.acknowledgeAlert] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.acknowledgeAlert (async). User supplies this. */
export type PatientInterfaceAcknowledgeAlertAsyncImpl = (self: PatientInterface) => Promise<{ self: PatientInterface; modified: { alertActive: unknown; alertType: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for PatientInterface.acknowledgeAlert (async). */
export function wrapPatientInterfaceAcknowledgeAlertAsync(impl: PatientInterfaceAcknowledgeAlertAsyncImpl): (self: PatientInterface) => Promise<PatientInterface> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[PatientInterface.acknowledgeAlert] pre violated: self.alertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[PatientInterface.acknowledgeAlert] post violated: self.alertActive = false");
      }
      if (!((__result.self.alertType === ""))) {
        postViolations.push("[PatientInterface.acknowledgeAlert] post violated: self.alertType = ''");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[PatientInterface.acknowledgeAlert] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.setLowReservoirThreshold. User supplies this. */
export type PatientInterfaceSetLowReservoirThresholdImpl = (self: PatientInterface, threshold: number) => { self: PatientInterface; modified: { lowReservoirThreshold: unknown } };

/** Contract-checking wrapper for PatientInterface.setLowReservoirThreshold. */
export function wrapPatientInterfaceSetLowReservoirThreshold(impl: PatientInterfaceSetLowReservoirThresholdImpl): (self: PatientInterface, threshold: number) => PatientInterface {
  return (self, threshold) => {
    const preViolations: string[] = [];
    if (!((threshold > 0))) {
      preViolations.push("[PatientInterface.setLowReservoirThreshold] pre violated: threshold > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, threshold);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirThreshold === threshold))) {
        postViolations.push("[PatientInterface.setLowReservoirThreshold] post violated: self.lowReservoirThreshold = threshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.setLowReservoirThreshold (async). User supplies this. */
export type PatientInterfaceSetLowReservoirThresholdAsyncImpl = (self: PatientInterface, threshold: number) => Promise<{ self: PatientInterface; modified: { lowReservoirThreshold: unknown } }>;

/** Contract-checking wrapper for PatientInterface.setLowReservoirThreshold (async). */
export function wrapPatientInterfaceSetLowReservoirThresholdAsync(impl: PatientInterfaceSetLowReservoirThresholdAsyncImpl): (self: PatientInterface, threshold: number) => Promise<PatientInterface> {
  return async (self, threshold) => {
    const preViolations: string[] = [];
    if (!((threshold > 0))) {
      preViolations.push("[PatientInterface.setLowReservoirThreshold] pre violated: threshold > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, threshold);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirThreshold === threshold))) {
        postViolations.push("[PatientInterface.setLowReservoirThreshold] post violated: self.lowReservoirThreshold = threshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.configureSafeMaxDose. User supplies this. */
export type PatientInterfaceConfigureSafeMaxDoseImpl = (self: PatientInterface, newMax: number) => { self: PatientInterface; modified: { configuredSafeMaxDose: unknown } };

/** Contract-checking wrapper for PatientInterface.configureSafeMaxDose. */
export function wrapPatientInterfaceConfigureSafeMaxDose(impl: PatientInterfaceConfigureSafeMaxDoseImpl): (self: PatientInterface, newMax: number) => PatientInterface {
  return (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[PatientInterface.configureSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.configuredSafeMaxDose === newMax))) {
        postViolations.push("[PatientInterface.configureSafeMaxDose] post violated: self.configuredSafeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.configureSafeMaxDose (async). User supplies this. */
export type PatientInterfaceConfigureSafeMaxDoseAsyncImpl = (self: PatientInterface, newMax: number) => Promise<{ self: PatientInterface; modified: { configuredSafeMaxDose: unknown } }>;

/** Contract-checking wrapper for PatientInterface.configureSafeMaxDose (async). */
export function wrapPatientInterfaceConfigureSafeMaxDoseAsync(impl: PatientInterfaceConfigureSafeMaxDoseAsyncImpl): (self: PatientInterface, newMax: number) => Promise<PatientInterface> {
  return async (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[PatientInterface.configureSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.configuredSafeMaxDose === newMax))) {
        postViolations.push("[PatientInterface.configureSafeMaxDose] post violated: self.configuredSafeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.configureSafeZone. User supplies this. */
export type PatientInterfaceConfigureSafeZoneImpl = (self: PatientInterface, newLower: number, newUpper: number) => { self: PatientInterface; modified: { configuredSafeZoneLower: unknown; configuredSafeZoneUpper: unknown } };

/** Contract-checking wrapper for PatientInterface.configureSafeZone. */
export function wrapPatientInterfaceConfigureSafeZone(impl: PatientInterfaceConfigureSafeZoneImpl): (self: PatientInterface, newLower: number, newUpper: number) => PatientInterface {
  return (self, newLower, newUpper) => {
    const preViolations: string[] = [];
    if (!((newLower >= 0))) {
      preViolations.push("[PatientInterface.configureSafeZone] pre violated: newLower >= 0.0");
    }
    if (!((newUpper > newLower))) {
      preViolations.push("[PatientInterface.configureSafeZone] pre violated: newUpper > newLower");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newLower, newUpper);
      const postViolations: string[] = [];
      if (!((__result.self.configuredSafeZoneLower === newLower))) {
        postViolations.push("[PatientInterface.configureSafeZone] post violated: self.configuredSafeZoneLower = newLower");
      }
      if (!((__result.self.configuredSafeZoneUpper === newUpper))) {
        postViolations.push("[PatientInterface.configureSafeZone] post violated: self.configuredSafeZoneUpper = newUpper");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.configureSafeZone (async). User supplies this. */
export type PatientInterfaceConfigureSafeZoneAsyncImpl = (self: PatientInterface, newLower: number, newUpper: number) => Promise<{ self: PatientInterface; modified: { configuredSafeZoneLower: unknown; configuredSafeZoneUpper: unknown } }>;

/** Contract-checking wrapper for PatientInterface.configureSafeZone (async). */
export function wrapPatientInterfaceConfigureSafeZoneAsync(impl: PatientInterfaceConfigureSafeZoneAsyncImpl): (self: PatientInterface, newLower: number, newUpper: number) => Promise<PatientInterface> {
  return async (self, newLower, newUpper) => {
    const preViolations: string[] = [];
    if (!((newLower >= 0))) {
      preViolations.push("[PatientInterface.configureSafeZone] pre violated: newLower >= 0.0");
    }
    if (!((newUpper > newLower))) {
      preViolations.push("[PatientInterface.configureSafeZone] pre violated: newUpper > newLower");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newLower, newUpper);
      const postViolations: string[] = [];
      if (!((__result.self.configuredSafeZoneLower === newLower))) {
        postViolations.push("[PatientInterface.configureSafeZone] post violated: self.configuredSafeZoneLower = newLower");
      }
      if (!((__result.self.configuredSafeZoneUpper === newUpper))) {
        postViolations.push("[PatientInterface.configureSafeZone] post violated: self.configuredSafeZoneUpper = newUpper");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.autoClearAlert. User supplies this. */
export type PatientInterfaceAutoClearAlertImpl = (self: PatientInterface) => { self: PatientInterface; modified: { alertActive: unknown; alertType: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for PatientInterface.autoClearAlert. */
export function wrapPatientInterfaceAutoClearAlert(impl: PatientInterfaceAutoClearAlertImpl): (self: PatientInterface) => PatientInterface {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[PatientInterface.autoClearAlert] pre violated: self.alertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[PatientInterface.autoClearAlert] post violated: self.alertActive = false");
      }
      if (!((__result.self.alertType === ""))) {
        postViolations.push("[PatientInterface.autoClearAlert] post violated: self.alertType = ''");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[PatientInterface.autoClearAlert] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PatientInterface.autoClearAlert (async). User supplies this. */
export type PatientInterfaceAutoClearAlertAsyncImpl = (self: PatientInterface) => Promise<{ self: PatientInterface; modified: { alertActive: unknown; alertType: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for PatientInterface.autoClearAlert (async). */
export function wrapPatientInterfaceAutoClearAlertAsync(impl: PatientInterfaceAutoClearAlertAsyncImpl): (self: PatientInterface) => Promise<PatientInterface> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[PatientInterface.autoClearAlert] pre violated: self.alertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[PatientInterface.autoClearAlert] post violated: self.alertActive = false");
      }
      if (!((__result.self.alertType === ""))) {
        postViolations.push("[PatientInterface.autoClearAlert] post violated: self.alertType = ''");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[PatientInterface.autoClearAlert] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommander.authorizeDose. User supplies this. */
export type DoseCommanderAuthorizeDoseImpl = (self: DoseCommander, dose: number) => { self: DoseCommander; modified: { authorizedDose: unknown } };

/** Contract-checking wrapper for DoseCommander.authorizeDose. */
export function wrapDoseCommanderAuthorizeDose(impl: DoseCommanderAuthorizeDoseImpl): (self: DoseCommander, dose: number) => DoseCommander {
  return (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[DoseCommander.authorizeDose] pre violated: dose > 0.0");
    }
    if (!((dose <= self.authorizedDose))) {
      preViolations.push("[DoseCommander.authorizeDose] pre violated: dose <= self.authorizedDose");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.authorizedDose === dose))) {
        postViolations.push("[DoseCommander.authorizeDose] post violated: self.authorizedDose = dose");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommander.authorizeDose (async). User supplies this. */
export type DoseCommanderAuthorizeDoseAsyncImpl = (self: DoseCommander, dose: number) => Promise<{ self: DoseCommander; modified: { authorizedDose: unknown } }>;

/** Contract-checking wrapper for DoseCommander.authorizeDose (async). */
export function wrapDoseCommanderAuthorizeDoseAsync(impl: DoseCommanderAuthorizeDoseAsyncImpl): (self: DoseCommander, dose: number) => Promise<DoseCommander> {
  return async (self, dose) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[DoseCommander.authorizeDose] pre violated: dose > 0.0");
    }
    if (!((dose <= self.authorizedDose))) {
      preViolations.push("[DoseCommander.authorizeDose] pre violated: dose <= self.authorizedDose");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose);
      const postViolations: string[] = [];
      if (!((__result.self.authorizedDose === dose))) {
        postViolations.push("[DoseCommander.authorizeDose] post violated: self.authorizedDose = dose");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommander.clearAuthorization. User supplies this. */
export type DoseCommanderClearAuthorizationImpl = (self: DoseCommander) => { self: DoseCommander; modified: { authorizedDose: unknown } };

/** Contract-checking wrapper for DoseCommander.clearAuthorization. */
export function wrapDoseCommanderClearAuthorization(impl: DoseCommanderClearAuthorizationImpl): (self: DoseCommander) => DoseCommander {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.authorizedDose === 0))) {
        postViolations.push("[DoseCommander.clearAuthorization] post violated: self.authorizedDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommander.clearAuthorization (async). User supplies this. */
export type DoseCommanderClearAuthorizationAsyncImpl = (self: DoseCommander) => Promise<{ self: DoseCommander; modified: { authorizedDose: unknown } }>;

/** Contract-checking wrapper for DoseCommander.clearAuthorization (async). */
export function wrapDoseCommanderClearAuthorizationAsync(impl: DoseCommanderClearAuthorizationAsyncImpl): (self: DoseCommander) => Promise<DoseCommander> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.authorizedDose === 0))) {
        postViolations.push("[DoseCommander.clearAuthorization] post violated: self.authorizedDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type SensorChannelTransmitReadingImpl = (self: SensorChannel, value: number) => { self: SensorChannel; modified: { lastTransmittedReading: unknown } };

/** Contract-checking wrapper for SensorChannel.transmitReading. */
export function wrapSensorChannelTransmitReading(impl: SensorChannelTransmitReadingImpl): (self: SensorChannel, value: number) => SensorChannel {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((self.channelHealthy === true))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: self.channelHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmittedReading === value))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.lastTransmittedReading = value");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type SensorChannelTransmitReadingAsyncImpl = (self: SensorChannel, value: number) => Promise<{ self: SensorChannel; modified: { lastTransmittedReading: unknown } }>;

/** Contract-checking wrapper for SensorChannel.transmitReading (async). */
export function wrapSensorChannelTransmitReadingAsync(impl: SensorChannelTransmitReadingAsyncImpl): (self: SensorChannel, value: number) => Promise<SensorChannel> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((self.channelHealthy === true))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: self.channelHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmittedReading === value))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.lastTransmittedReading = value");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DeliveryBus.sendCommand. User supplies this. */
export type DeliveryBusSendCommandImpl = (self: DeliveryBus, cmdDose: number) => { self: DeliveryBus; modified: { commandedDose: unknown; deliveryInProgress: unknown } };

/** Contract-checking wrapper for DeliveryBus.sendCommand. */
export function wrapDeliveryBusSendCommand(impl: DeliveryBusSendCommandImpl): (self: DeliveryBus, cmdDose: number) => DeliveryBus {
  return (self, cmdDose) => {
    const preViolations: string[] = [];
    if (!((cmdDose > 0))) {
      preViolations.push("[DeliveryBus.sendCommand] pre violated: cmdDose > 0.0");
    }
    if (!(!(self.deliveryInProgress))) {
      preViolations.push("[DeliveryBus.sendCommand] pre violated: not self.deliveryInProgress");
    }
    if (!((self.busHealthy === true))) {
      preViolations.push("[DeliveryBus.sendCommand] pre violated: self.busHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, cmdDose);
      const postViolations: string[] = [];
      if (!((__result.self.commandedDose === cmdDose))) {
        postViolations.push("[DeliveryBus.sendCommand] post violated: self.commandedDose = cmdDose");
      }
      if (!((__result.self.deliveryInProgress === true))) {
        postViolations.push("[DeliveryBus.sendCommand] post violated: self.deliveryInProgress = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DeliveryBus.sendCommand (async). User supplies this. */
export type DeliveryBusSendCommandAsyncImpl = (self: DeliveryBus, cmdDose: number) => Promise<{ self: DeliveryBus; modified: { commandedDose: unknown; deliveryInProgress: unknown } }>;

/** Contract-checking wrapper for DeliveryBus.sendCommand (async). */
export function wrapDeliveryBusSendCommandAsync(impl: DeliveryBusSendCommandAsyncImpl): (self: DeliveryBus, cmdDose: number) => Promise<DeliveryBus> {
  return async (self, cmdDose) => {
    const preViolations: string[] = [];
    if (!((cmdDose > 0))) {
      preViolations.push("[DeliveryBus.sendCommand] pre violated: cmdDose > 0.0");
    }
    if (!(!(self.deliveryInProgress))) {
      preViolations.push("[DeliveryBus.sendCommand] pre violated: not self.deliveryInProgress");
    }
    if (!((self.busHealthy === true))) {
      preViolations.push("[DeliveryBus.sendCommand] pre violated: self.busHealthy = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, cmdDose);
      const postViolations: string[] = [];
      if (!((__result.self.commandedDose === cmdDose))) {
        postViolations.push("[DeliveryBus.sendCommand] post violated: self.commandedDose = cmdDose");
      }
      if (!((__result.self.deliveryInProgress === true))) {
        postViolations.push("[DeliveryBus.sendCommand] post violated: self.deliveryInProgress = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DeliveryBus.confirmDelivery. User supplies this. */
export type DeliveryBusConfirmDeliveryImpl = (self: DeliveryBus) => { self: DeliveryBus; modified: { deliveryInProgress: unknown; commandedDose: unknown } };

/** Contract-checking wrapper for DeliveryBus.confirmDelivery. */
export function wrapDeliveryBusConfirmDelivery(impl: DeliveryBusConfirmDeliveryImpl): (self: DeliveryBus) => DeliveryBus {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.deliveryInProgress === true))) {
      preViolations.push("[DeliveryBus.confirmDelivery] pre violated: self.deliveryInProgress = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryInProgress === false))) {
        postViolations.push("[DeliveryBus.confirmDelivery] post violated: self.deliveryInProgress = false");
      }
      if (!((__result.self.commandedDose === 0))) {
        postViolations.push("[DeliveryBus.confirmDelivery] post violated: self.commandedDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DeliveryBus.confirmDelivery (async). User supplies this. */
export type DeliveryBusConfirmDeliveryAsyncImpl = (self: DeliveryBus) => Promise<{ self: DeliveryBus; modified: { deliveryInProgress: unknown; commandedDose: unknown } }>;

/** Contract-checking wrapper for DeliveryBus.confirmDelivery (async). */
export function wrapDeliveryBusConfirmDeliveryAsync(impl: DeliveryBusConfirmDeliveryAsyncImpl): (self: DeliveryBus) => Promise<DeliveryBus> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.deliveryInProgress === true))) {
      preViolations.push("[DeliveryBus.confirmDelivery] pre violated: self.deliveryInProgress = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryInProgress === false))) {
        postViolations.push("[DeliveryBus.confirmDelivery] post violated: self.deliveryInProgress = false");
      }
      if (!((__result.self.commandedDose === 0))) {
        postViolations.push("[DeliveryBus.confirmDelivery] post violated: self.commandedDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DeliveryBus.abortDelivery. User supplies this. */
export type DeliveryBusAbortDeliveryImpl = (self: DeliveryBus) => { self: DeliveryBus; modified: { deliveryInProgress: unknown; commandedDose: unknown } };

/** Contract-checking wrapper for DeliveryBus.abortDelivery. */
export function wrapDeliveryBusAbortDelivery(impl: DeliveryBusAbortDeliveryImpl): (self: DeliveryBus) => DeliveryBus {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.deliveryInProgress === true))) {
      preViolations.push("[DeliveryBus.abortDelivery] pre violated: self.deliveryInProgress = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryInProgress === false))) {
        postViolations.push("[DeliveryBus.abortDelivery] post violated: self.deliveryInProgress = false");
      }
      if (!((__result.self.commandedDose === 0))) {
        postViolations.push("[DeliveryBus.abortDelivery] post violated: self.commandedDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DeliveryBus.abortDelivery (async). User supplies this. */
export type DeliveryBusAbortDeliveryAsyncImpl = (self: DeliveryBus) => Promise<{ self: DeliveryBus; modified: { deliveryInProgress: unknown; commandedDose: unknown } }>;

/** Contract-checking wrapper for DeliveryBus.abortDelivery (async). */
export function wrapDeliveryBusAbortDeliveryAsync(impl: DeliveryBusAbortDeliveryAsyncImpl): (self: DeliveryBus) => Promise<DeliveryBus> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.deliveryInProgress === true))) {
      preViolations.push("[DeliveryBus.abortDelivery] pre violated: self.deliveryInProgress = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryInProgress === false))) {
        postViolations.push("[DeliveryBus.abortDelivery] post violated: self.deliveryInProgress = false");
      }
      if (!((__result.self.commandedDose === 0))) {
        postViolations.push("[DeliveryBus.abortDelivery] post violated: self.commandedDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultBusSensor.reportSensorHealth. User supplies this. */
export type FaultBusSensorReportSensorHealthImpl = (self: FaultBusSensor) => { self: FaultBusSensor; modified: { lastHealthCheckTimestamp: unknown } };

/** Contract-checking wrapper for FaultBusSensor.reportSensorHealth. */
export function wrapFaultBusSensorReportSensorHealth(impl: FaultBusSensorReportSensorHealthImpl): (self: FaultBusSensor) => FaultBusSensor {
  return (self) => {
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

/** Impl signature for FaultBusSensor.reportSensorHealth (async). User supplies this. */
export type FaultBusSensorReportSensorHealthAsyncImpl = (self: FaultBusSensor) => Promise<{ self: FaultBusSensor; modified: { lastHealthCheckTimestamp: unknown } }>;

/** Contract-checking wrapper for FaultBusSensor.reportSensorHealth (async). */
export function wrapFaultBusSensorReportSensorHealthAsync(impl: FaultBusSensorReportSensorHealthAsyncImpl): (self: FaultBusSensor) => Promise<FaultBusSensor> {
  return async (self) => {
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

/** Impl signature for FaultBusSensor.reportSensorFault. User supplies this. */
export type FaultBusSensorReportSensorFaultImpl = (self: FaultBusSensor) => { self: FaultBusSensor; modified: { lastHealthCheckTimestamp: unknown } };

/** Contract-checking wrapper for FaultBusSensor.reportSensorFault. */
export function wrapFaultBusSensorReportSensorFault(impl: FaultBusSensorReportSensorFaultImpl): (self: FaultBusSensor) => FaultBusSensor {
  return (self) => {
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

/** Impl signature for FaultBusSensor.reportSensorFault (async). User supplies this. */
export type FaultBusSensorReportSensorFaultAsyncImpl = (self: FaultBusSensor) => Promise<{ self: FaultBusSensor; modified: { lastHealthCheckTimestamp: unknown } }>;

/** Contract-checking wrapper for FaultBusSensor.reportSensorFault (async). */
export function wrapFaultBusSensorReportSensorFaultAsync(impl: FaultBusSensorReportSensorFaultAsyncImpl): (self: FaultBusSensor) => Promise<FaultBusSensor> {
  return async (self) => {
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

/** Impl signature for FaultBusPump.reportPumpHealth. User supplies this. */
export type FaultBusPumpReportPumpHealthImpl = (self: FaultBusPump) => { self: FaultBusPump; modified: { lastPumpHealthCheckTimestamp: unknown } };

/** Contract-checking wrapper for FaultBusPump.reportPumpHealth. */
export function wrapFaultBusPumpReportPumpHealth(impl: FaultBusPumpReportPumpHealthImpl): (self: FaultBusPump) => FaultBusPump {
  return (self) => {
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

/** Impl signature for FaultBusPump.reportPumpHealth (async). User supplies this. */
export type FaultBusPumpReportPumpHealthAsyncImpl = (self: FaultBusPump) => Promise<{ self: FaultBusPump; modified: { lastPumpHealthCheckTimestamp: unknown } }>;

/** Contract-checking wrapper for FaultBusPump.reportPumpHealth (async). */
export function wrapFaultBusPumpReportPumpHealthAsync(impl: FaultBusPumpReportPumpHealthAsyncImpl): (self: FaultBusPump) => Promise<FaultBusPump> {
  return async (self) => {
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

/** Impl signature for FaultBusPump.reportPumpFault. User supplies this. */
export type FaultBusPumpReportPumpFaultImpl = (self: FaultBusPump) => { self: FaultBusPump; modified: { lastPumpHealthCheckTimestamp: unknown } };

/** Contract-checking wrapper for FaultBusPump.reportPumpFault. */
export function wrapFaultBusPumpReportPumpFault(impl: FaultBusPumpReportPumpFaultImpl): (self: FaultBusPump) => FaultBusPump {
  return (self) => {
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

/** Impl signature for FaultBusPump.reportPumpFault (async). User supplies this. */
export type FaultBusPumpReportPumpFaultAsyncImpl = (self: FaultBusPump) => Promise<{ self: FaultBusPump; modified: { lastPumpHealthCheckTimestamp: unknown } }>;

/** Contract-checking wrapper for FaultBusPump.reportPumpFault (async). */
export function wrapFaultBusPumpReportPumpFaultAsync(impl: FaultBusPumpReportPumpFaultAsyncImpl): (self: FaultBusPump) => Promise<FaultBusPump> {
  return async (self) => {
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

/** Impl signature for AlertChannel.sendAlert. User supplies this. */
export type AlertChannelSendAlertImpl = (self: AlertChannel, code: string) => { self: AlertChannel; modified: { pendingAlertCode: unknown; alertDelivered: unknown } };

/** Contract-checking wrapper for AlertChannel.sendAlert. */
export function wrapAlertChannelSendAlert(impl: AlertChannelSendAlertImpl): (self: AlertChannel, code: string) => AlertChannel {
  return (self, code) => {
    const preViolations: string[] = [];
    if (!((code !== null))) {
      preViolations.push("[AlertChannel.sendAlert] pre violated: code <> null");
    }
    if (!(!(self.alertDelivered))) {
      preViolations.push("[AlertChannel.sendAlert] pre violated: not self.alertDelivered");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, code);
      const postViolations: string[] = [];
      if (!((__result.self.pendingAlertCode === code))) {
        postViolations.push("[AlertChannel.sendAlert] post violated: self.pendingAlertCode = code");
      }
      if (!((__result.self.alertDelivered === true))) {
        postViolations.push("[AlertChannel.sendAlert] post violated: self.alertDelivered = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlertChannel.sendAlert (async). User supplies this. */
export type AlertChannelSendAlertAsyncImpl = (self: AlertChannel, code: string) => Promise<{ self: AlertChannel; modified: { pendingAlertCode: unknown; alertDelivered: unknown } }>;

/** Contract-checking wrapper for AlertChannel.sendAlert (async). */
export function wrapAlertChannelSendAlertAsync(impl: AlertChannelSendAlertAsyncImpl): (self: AlertChannel, code: string) => Promise<AlertChannel> {
  return async (self, code) => {
    const preViolations: string[] = [];
    if (!((code !== null))) {
      preViolations.push("[AlertChannel.sendAlert] pre violated: code <> null");
    }
    if (!(!(self.alertDelivered))) {
      preViolations.push("[AlertChannel.sendAlert] pre violated: not self.alertDelivered");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, code);
      const postViolations: string[] = [];
      if (!((__result.self.pendingAlertCode === code))) {
        postViolations.push("[AlertChannel.sendAlert] post violated: self.pendingAlertCode = code");
      }
      if (!((__result.self.alertDelivered === true))) {
        postViolations.push("[AlertChannel.sendAlert] post violated: self.alertDelivered = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlertChannel.acknowledgeAlert. User supplies this. */
export type AlertChannelAcknowledgeAlertImpl = (self: AlertChannel) => { self: AlertChannel; modified: { alertDelivered: unknown; pendingAlertCode: unknown } };

/** Contract-checking wrapper for AlertChannel.acknowledgeAlert. */
export function wrapAlertChannelAcknowledgeAlert(impl: AlertChannelAcknowledgeAlertImpl): (self: AlertChannel) => AlertChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alertDelivered === true))) {
      preViolations.push("[AlertChannel.acknowledgeAlert] pre violated: self.alertDelivered = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertDelivered === false))) {
        postViolations.push("[AlertChannel.acknowledgeAlert] post violated: self.alertDelivered = false");
      }
      if (!((__result.self.pendingAlertCode === ""))) {
        postViolations.push("[AlertChannel.acknowledgeAlert] post violated: self.pendingAlertCode = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlertChannel.acknowledgeAlert (async). User supplies this. */
export type AlertChannelAcknowledgeAlertAsyncImpl = (self: AlertChannel) => Promise<{ self: AlertChannel; modified: { alertDelivered: unknown; pendingAlertCode: unknown } }>;

/** Contract-checking wrapper for AlertChannel.acknowledgeAlert (async). */
export function wrapAlertChannelAcknowledgeAlertAsync(impl: AlertChannelAcknowledgeAlertAsyncImpl): (self: AlertChannel) => Promise<AlertChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alertDelivered === true))) {
      preViolations.push("[AlertChannel.acknowledgeAlert] pre violated: self.alertDelivered = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertDelivered === false))) {
        postViolations.push("[AlertChannel.acknowledgeAlert] post violated: self.alertDelivered = false");
      }
      if (!((__result.self.pendingAlertCode === ""))) {
        postViolations.push("[AlertChannel.acknowledgeAlert] post violated: self.pendingAlertCode = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemDeliverInsulinImpl = (self: InsulinPumpSystem, currentSugar: number, riseRate: number) => { self: InsulinPumpSystem; modified: { lastBloodSugarReading: unknown; reservoirRemaining: unknown; isDeliveringInsulin: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.deliverInsulin. */
export function wrapInsulinPumpSystemDeliverInsulin(impl: InsulinPumpSystemDeliverInsulinImpl): (self: InsulinPumpSystem, currentSugar: number, riseRate: number) => InsulinPumpSystem {
  return (self, currentSugar, riseRate) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((currentSugar >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: currentSugar >= 0.0");
    }
    if (!((riseRate >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: riseRate >= 0.0");
    }
    if (!(!(self.isDeliveringInsulin))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.isDeliveringInsulin");
    }
    if (!((self.reservoirRemaining > 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.reservoirRemaining > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirRemaining": self.reservoirRemaining,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentSugar, riseRate);
      const postViolations: string[] = [];
      if (!((__result.self.lastBloodSugarReading === currentSugar))) {
        postViolations.push("[InsulinPumpSystem.deliverInsulin] post violated: self.lastBloodSugarReading = currentSugar");
      }
      // SKIPPED post-clause (not translatable): if currentSugar <= self.safeZoneUpper then
            result = 0.0 and not self.isDeliveringInsulin
          else
            result >= 0.0 and
            result <= self.safeMaxDose and
            result <= self.reservoirRemaining@pre and
            self.reservoirRemaining = self.reservoirRemaining@pre - result and
            self.isDeliveringInsulin = true
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

/** Impl signature for InsulinPumpSystem.deliverInsulin (async). User supplies this. */
export type InsulinPumpSystemDeliverInsulinAsyncImpl = (self: InsulinPumpSystem, currentSugar: number, riseRate: number) => Promise<{ self: InsulinPumpSystem; modified: { lastBloodSugarReading: unknown; reservoirRemaining: unknown; isDeliveringInsulin: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.deliverInsulin (async). */
export function wrapInsulinPumpSystemDeliverInsulinAsync(impl: InsulinPumpSystemDeliverInsulinAsyncImpl): (self: InsulinPumpSystem, currentSugar: number, riseRate: number) => Promise<InsulinPumpSystem> {
  return async (self, currentSugar, riseRate) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((currentSugar >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: currentSugar >= 0.0");
    }
    if (!((riseRate >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: riseRate >= 0.0");
    }
    if (!(!(self.isDeliveringInsulin))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.isDeliveringInsulin");
    }
    if (!((self.reservoirRemaining > 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.reservoirRemaining > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirRemaining": self.reservoirRemaining,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentSugar, riseRate);
      const postViolations: string[] = [];
      if (!((__result.self.lastBloodSugarReading === currentSugar))) {
        postViolations.push("[InsulinPumpSystem.deliverInsulin] post violated: self.lastBloodSugarReading = currentSugar");
      }
      // SKIPPED post-clause (not translatable): if currentSugar <= self.safeZoneUpper then
            result = 0.0 and not self.isDeliveringInsulin
          else
            result >= 0.0 and
            result <= self.safeMaxDose and
            result <= self.reservoirRemaining@pre and
            self.reservoirRemaining = self.reservoirRemaining@pre - result and
            self.isDeliveringInsulin = true
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

/** Impl signature for InsulinPumpSystem.completeDelivery. User supplies this. */
export type InsulinPumpSystemCompleteDeliveryImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { isDeliveringInsulin: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.completeDelivery. */
export function wrapInsulinPumpSystemCompleteDelivery(impl: InsulinPumpSystemCompleteDeliveryImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.completeDelivery] pre violated: self.isOperating = true");
    }
    if (!((self.isDeliveringInsulin === true))) {
      preViolations.push("[InsulinPumpSystem.completeDelivery] pre violated: self.isDeliveringInsulin = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.completeDelivery] post violated: self.isDeliveringInsulin = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.completeDelivery (async). User supplies this. */
export type InsulinPumpSystemCompleteDeliveryAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { isDeliveringInsulin: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.completeDelivery (async). */
export function wrapInsulinPumpSystemCompleteDeliveryAsync(impl: InsulinPumpSystemCompleteDeliveryAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.completeDelivery] pre violated: self.isOperating = true");
    }
    if (!((self.isDeliveringInsulin === true))) {
      preViolations.push("[InsulinPumpSystem.completeDelivery] pre violated: self.isDeliveringInsulin = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.completeDelivery] post violated: self.isDeliveringInsulin = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.detectHardwareFault. User supplies this. */
export type InsulinPumpSystemDetectHardwareFaultImpl = (self: InsulinPumpSystem, faultCode: string) => { self: InsulinPumpSystem; modified: { faultDetected: unknown; isOperating: unknown; isDeliveringInsulin: unknown; alarmActive: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.detectHardwareFault. */
export function wrapInsulinPumpSystemDetectHardwareFault(impl: InsulinPumpSystemDetectHardwareFaultImpl): (self: InsulinPumpSystem, faultCode: string) => InsulinPumpSystem {
  return (self, faultCode) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.detectHardwareFault] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.detectHardwareFault] pre violated: not self.faultDetected");
    }
    if (!((faultCode !== null))) {
      preViolations.push("[InsulinPumpSystem.detectHardwareFault] pre violated: faultCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastSelfTestTimestamp": self.lastSelfTestTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.patientAlertActive = true");
      }
      if (!((__result.self.lastSelfTestTimestamp === __pre["self.lastSelfTestTimestamp"]))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.lastSelfTestTimestamp = self.lastSelfTestTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.detectHardwareFault (async). User supplies this. */
export type InsulinPumpSystemDetectHardwareFaultAsyncImpl = (self: InsulinPumpSystem, faultCode: string) => Promise<{ self: InsulinPumpSystem; modified: { faultDetected: unknown; isOperating: unknown; isDeliveringInsulin: unknown; alarmActive: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.detectHardwareFault (async). */
export function wrapInsulinPumpSystemDetectHardwareFaultAsync(impl: InsulinPumpSystemDetectHardwareFaultAsyncImpl): (self: InsulinPumpSystem, faultCode: string) => Promise<InsulinPumpSystem> {
  return async (self, faultCode) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.detectHardwareFault] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.detectHardwareFault] pre violated: not self.faultDetected");
    }
    if (!((faultCode !== null))) {
      preViolations.push("[InsulinPumpSystem.detectHardwareFault] pre violated: faultCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastSelfTestTimestamp": self.lastSelfTestTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultCode);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.patientAlertActive = true");
      }
      if (!((__result.self.lastSelfTestTimestamp === __pre["self.lastSelfTestTimestamp"]))) {
        postViolations.push("[InsulinPumpSystem.detectHardwareFault] post violated: self.lastSelfTestTimestamp = self.lastSelfTestTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemClearFaultImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { faultDetected: unknown; alarmActive: unknown; patientAlertActive: unknown; isOperating: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.clearFault. */
export function wrapInsulinPumpSystemClearFault(impl: InsulinPumpSystemClearFaultImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: self.faultDetected = true");
    }
    if (!(!(self.isDeliveringInsulin))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: not self.isDeliveringInsulin");
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
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.alarmActive = false");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.patientAlertActive = false");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.isOperating = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemClearFaultAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { faultDetected: unknown; alarmActive: unknown; patientAlertActive: unknown; isOperating: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.clearFault (async). */
export function wrapInsulinPumpSystemClearFaultAsync(impl: InsulinPumpSystemClearFaultAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: self.faultDetected = true");
    }
    if (!(!(self.isDeliveringInsulin))) {
      preViolations.push("[InsulinPumpSystem.clearFault] pre violated: not self.isDeliveringInsulin");
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
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.alarmActive = false");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.patientAlertActive = false");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpSystem.clearFault] post violated: self.isOperating = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.warnLowReservoir. User supplies this. */
export type InsulinPumpSystemWarnLowReservoirImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.warnLowReservoir. */
export function wrapInsulinPumpSystemWarnLowReservoir(impl: InsulinPumpSystemWarnLowReservoirImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reservoirRemaining < self.lowReservoirThreshold))) {
      preViolations.push("[InsulinPumpSystem.warnLowReservoir] pre violated: self.reservoirRemaining < self.lowReservoirThreshold");
    }
    if (!(!(self.patientAlertActive))) {
      preViolations.push("[InsulinPumpSystem.warnLowReservoir] pre violated: not self.patientAlertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpSystem.warnLowReservoir] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.warnLowReservoir (async). User supplies this. */
export type InsulinPumpSystemWarnLowReservoirAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.warnLowReservoir (async). */
export function wrapInsulinPumpSystemWarnLowReservoirAsync(impl: InsulinPumpSystemWarnLowReservoirAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reservoirRemaining < self.lowReservoirThreshold))) {
      preViolations.push("[InsulinPumpSystem.warnLowReservoir] pre violated: self.reservoirRemaining < self.lowReservoirThreshold");
    }
    if (!(!(self.patientAlertActive))) {
      preViolations.push("[InsulinPumpSystem.warnLowReservoir] pre violated: not self.patientAlertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpSystem.warnLowReservoir] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.acknowledgeAlert. User supplies this. */
export type InsulinPumpSystemAcknowledgeAlertImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.acknowledgeAlert. */
export function wrapInsulinPumpSystemAcknowledgeAlert(impl: InsulinPumpSystemAcknowledgeAlertImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.patientAlertActive === true))) {
      preViolations.push("[InsulinPumpSystem.acknowledgeAlert] pre violated: self.patientAlertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.acknowledgeAlert] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.acknowledgeAlert (async). User supplies this. */
export type InsulinPumpSystemAcknowledgeAlertAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.acknowledgeAlert (async). */
export function wrapInsulinPumpSystemAcknowledgeAlertAsync(impl: InsulinPumpSystemAcknowledgeAlertAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.patientAlertActive === true))) {
      preViolations.push("[InsulinPumpSystem.acknowledgeAlert] pre violated: self.patientAlertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.acknowledgeAlert] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemRunSelfTestImpl = (self: InsulinPumpSystem, currentSugar: number) => { self: InsulinPumpSystem; modified: { lastBloodSugarReading: unknown; lastSelfTestTimestamp: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.runSelfTest. */
export function wrapInsulinPumpSystemRunSelfTest(impl: InsulinPumpSystemRunSelfTestImpl): (self: InsulinPumpSystem, currentSugar: number) => InsulinPumpSystem {
  return (self, currentSugar) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: self.isOperating = true");
    }
    if (!((currentSugar >= 0))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: currentSugar >= 0.0");
    }
    if (!((currentSugar <= 1000))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: currentSugar <= 1000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastSelfTestTimestamp": self.lastSelfTestTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentSugar);
      const postViolations: string[] = [];
      if (!((__result.self.lastSelfTestTimestamp === __pre["self.lastSelfTestTimestamp"]))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.lastSelfTestTimestamp = self.lastSelfTestTimestamp@pre");
      }
      if (!((__result.self.lastBloodSugarReading === currentSugar))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.lastBloodSugarReading = currentSugar");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemRunSelfTestAsyncImpl = (self: InsulinPumpSystem, currentSugar: number) => Promise<{ self: InsulinPumpSystem; modified: { lastBloodSugarReading: unknown; lastSelfTestTimestamp: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.runSelfTest (async). */
export function wrapInsulinPumpSystemRunSelfTestAsync(impl: InsulinPumpSystemRunSelfTestAsyncImpl): (self: InsulinPumpSystem, currentSugar: number) => Promise<InsulinPumpSystem> {
  return async (self, currentSugar) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: self.isOperating = true");
    }
    if (!((currentSugar >= 0))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: currentSugar >= 0.0");
    }
    if (!((currentSugar <= 1000))) {
      preViolations.push("[InsulinPumpSystem.runSelfTest] pre violated: currentSugar <= 1000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastSelfTestTimestamp": self.lastSelfTestTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentSugar);
      const postViolations: string[] = [];
      if (!((__result.self.lastSelfTestTimestamp === __pre["self.lastSelfTestTimestamp"]))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.lastSelfTestTimestamp = self.lastSelfTestTimestamp@pre");
      }
      if (!((__result.self.lastBloodSugarReading === currentSugar))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.lastBloodSugarReading = currentSugar");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.configureSafeZone. User supplies this. */
export type InsulinPumpSystemConfigureSafeZoneImpl = (self: InsulinPumpSystem, newLower: number, newUpper: number) => { self: InsulinPumpSystem; modified: { safeZoneLower: unknown; safeZoneUpper: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeZone. */
export function wrapInsulinPumpSystemConfigureSafeZone(impl: InsulinPumpSystemConfigureSafeZoneImpl): (self: InsulinPumpSystem, newLower: number, newUpper: number) => InsulinPumpSystem {
  return (self, newLower, newUpper) => {
    const preViolations: string[] = [];
    if (!((newLower >= 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeZone] pre violated: newLower >= 0.0");
    }
    if (!((newUpper > newLower))) {
      preViolations.push("[InsulinPumpSystem.configureSafeZone] pre violated: newUpper > newLower");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newLower, newUpper);
      const postViolations: string[] = [];
      if (!((__result.self.safeZoneLower === newLower))) {
        postViolations.push("[InsulinPumpSystem.configureSafeZone] post violated: self.safeZoneLower = newLower");
      }
      if (!((__result.self.safeZoneUpper === newUpper))) {
        postViolations.push("[InsulinPumpSystem.configureSafeZone] post violated: self.safeZoneUpper = newUpper");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.configureSafeZone (async). User supplies this. */
export type InsulinPumpSystemConfigureSafeZoneAsyncImpl = (self: InsulinPumpSystem, newLower: number, newUpper: number) => Promise<{ self: InsulinPumpSystem; modified: { safeZoneLower: unknown; safeZoneUpper: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeZone (async). */
export function wrapInsulinPumpSystemConfigureSafeZoneAsync(impl: InsulinPumpSystemConfigureSafeZoneAsyncImpl): (self: InsulinPumpSystem, newLower: number, newUpper: number) => Promise<InsulinPumpSystem> {
  return async (self, newLower, newUpper) => {
    const preViolations: string[] = [];
    if (!((newLower >= 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeZone] pre violated: newLower >= 0.0");
    }
    if (!((newUpper > newLower))) {
      preViolations.push("[InsulinPumpSystem.configureSafeZone] pre violated: newUpper > newLower");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newLower, newUpper);
      const postViolations: string[] = [];
      if (!((__result.self.safeZoneLower === newLower))) {
        postViolations.push("[InsulinPumpSystem.configureSafeZone] post violated: self.safeZoneLower = newLower");
      }
      if (!((__result.self.safeZoneUpper === newUpper))) {
        postViolations.push("[InsulinPumpSystem.configureSafeZone] post violated: self.safeZoneUpper = newUpper");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.configureSafeMaxDose. User supplies this. */
export type InsulinPumpSystemConfigureSafeMaxDoseImpl = (self: InsulinPumpSystem, newMax: number) => { self: InsulinPumpSystem; modified: { safeMaxDose: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeMaxDose. */
export function wrapInsulinPumpSystemConfigureSafeMaxDose(impl: InsulinPumpSystemConfigureSafeMaxDoseImpl): (self: InsulinPumpSystem, newMax: number) => InsulinPumpSystem {
  return (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDose === newMax))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMaxDose] post violated: self.safeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.configureSafeMaxDose (async). User supplies this. */
export type InsulinPumpSystemConfigureSafeMaxDoseAsyncImpl = (self: InsulinPumpSystem, newMax: number) => Promise<{ self: InsulinPumpSystem; modified: { safeMaxDose: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeMaxDose (async). */
export function wrapInsulinPumpSystemConfigureSafeMaxDoseAsync(impl: InsulinPumpSystemConfigureSafeMaxDoseAsyncImpl): (self: InsulinPumpSystem, newMax: number) => Promise<InsulinPumpSystem> {
  return async (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDose === newMax))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMaxDose] post violated: self.safeMaxDose = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemRefillReservoirImpl = (self: InsulinPumpSystem, newAmount: number) => { self: InsulinPumpSystem; modified: { reservoirRemaining: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.refillReservoir. */
export function wrapInsulinPumpSystemRefillReservoir(impl: InsulinPumpSystemRefillReservoirImpl): (self: InsulinPumpSystem, newAmount: number) => InsulinPumpSystem {
  return (self, newAmount) => {
    const preViolations: string[] = [];
    if (!((newAmount > 0))) {
      preViolations.push("[InsulinPumpSystem.refillReservoir] pre violated: newAmount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.patientAlertActive": self.patientAlertActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newAmount);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirRemaining === newAmount))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: self.reservoirRemaining = newAmount");
      }
      if (!(((((newAmount >= __result.self.lowReservoirThreshold) && __pre["self.patientAlertActive"])) ? ((__result.self.patientAlertActive === false)) : ((__result.self.patientAlertActive === __pre["self.patientAlertActive"]))))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: if newAmount >= self.lowReservoirThreshold and self.patientAlertActive@pre then\n            self.patientAlertActive = false\n          else\n            self.patientAlertActive = self.patientAlertActive@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemRefillReservoirAsyncImpl = (self: InsulinPumpSystem, newAmount: number) => Promise<{ self: InsulinPumpSystem; modified: { reservoirRemaining: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.refillReservoir (async). */
export function wrapInsulinPumpSystemRefillReservoirAsync(impl: InsulinPumpSystemRefillReservoirAsyncImpl): (self: InsulinPumpSystem, newAmount: number) => Promise<InsulinPumpSystem> {
  return async (self, newAmount) => {
    const preViolations: string[] = [];
    if (!((newAmount > 0))) {
      preViolations.push("[InsulinPumpSystem.refillReservoir] pre violated: newAmount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.patientAlertActive": self.patientAlertActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newAmount);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirRemaining === newAmount))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: self.reservoirRemaining = newAmount");
      }
      if (!(((((newAmount >= __result.self.lowReservoirThreshold) && __pre["self.patientAlertActive"])) ? ((__result.self.patientAlertActive === false)) : ((__result.self.patientAlertActive === __pre["self.patientAlertActive"]))))) {
        postViolations.push("[InsulinPumpSystem.refillReservoir] post violated: if newAmount >= self.lowReservoirThreshold and self.patientAlertActive@pre then\n            self.patientAlertActive = false\n          else\n            self.patientAlertActive = self.patientAlertActive@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.powerOn. User supplies this. */
export type InsulinPumpSystemPowerOnImpl = (self: InsulinPumpSystem, initialReservoir: number, safeMax: number, zoneLower: number, zoneUpper: number) => { self: InsulinPumpSystem; modified: { isOperating: unknown; faultDetected: unknown; alarmActive: unknown; patientAlertActive: unknown; isDeliveringInsulin: unknown; reservoirRemaining: unknown; safeMaxDose: unknown; safeZoneLower: unknown; safeZoneUpper: unknown; lastBloodSugarReading: unknown; lastSelfTestTimestamp: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.powerOn. */
export function wrapInsulinPumpSystemPowerOn(impl: InsulinPumpSystemPowerOnImpl): (self: InsulinPumpSystem, initialReservoir: number, safeMax: number, zoneLower: number, zoneUpper: number) => InsulinPumpSystem {
  return (self, initialReservoir, safeMax, zoneLower, zoneUpper) => {
    const preViolations: string[] = [];
    if (!((initialReservoir > 0))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: initialReservoir > 0.0");
    }
    if (!((safeMax > 0))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: safeMax > 0.0");
    }
    if (!((zoneLower >= 0))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: zoneLower >= 0.0");
    }
    if (!((zoneUpper > zoneLower))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: zoneUpper > zoneLower");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initialReservoir, safeMax, zoneLower, zoneUpper);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.isOperating = true");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.faultDetected = false");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.alarmActive = false");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.patientAlertActive = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.reservoirRemaining === initialReservoir))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.reservoirRemaining = initialReservoir");
      }
      if (!((__result.self.safeMaxDose === safeMax))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.safeMaxDose = safeMax");
      }
      if (!((__result.self.safeZoneLower === zoneLower))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.safeZoneLower = zoneLower");
      }
      if (!((__result.self.safeZoneUpper === zoneUpper))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.safeZoneUpper = zoneUpper");
      }
      if (!((__result.self.lastBloodSugarReading === 0))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.lastBloodSugarReading = 0.0");
      }
      if (!((__result.self.lastSelfTestTimestamp === "unknown"))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.lastSelfTestTimestamp = 'unknown'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.powerOn (async). User supplies this. */
export type InsulinPumpSystemPowerOnAsyncImpl = (self: InsulinPumpSystem, initialReservoir: number, safeMax: number, zoneLower: number, zoneUpper: number) => Promise<{ self: InsulinPumpSystem; modified: { isOperating: unknown; faultDetected: unknown; alarmActive: unknown; patientAlertActive: unknown; isDeliveringInsulin: unknown; reservoirRemaining: unknown; safeMaxDose: unknown; safeZoneLower: unknown; safeZoneUpper: unknown; lastBloodSugarReading: unknown; lastSelfTestTimestamp: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.powerOn (async). */
export function wrapInsulinPumpSystemPowerOnAsync(impl: InsulinPumpSystemPowerOnAsyncImpl): (self: InsulinPumpSystem, initialReservoir: number, safeMax: number, zoneLower: number, zoneUpper: number) => Promise<InsulinPumpSystem> {
  return async (self, initialReservoir, safeMax, zoneLower, zoneUpper) => {
    const preViolations: string[] = [];
    if (!((initialReservoir > 0))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: initialReservoir > 0.0");
    }
    if (!((safeMax > 0))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: safeMax > 0.0");
    }
    if (!((zoneLower >= 0))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: zoneLower >= 0.0");
    }
    if (!((zoneUpper > zoneLower))) {
      preViolations.push("[InsulinPumpSystem.powerOn] pre violated: zoneUpper > zoneLower");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initialReservoir, safeMax, zoneLower, zoneUpper);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.isOperating = true");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.faultDetected = false");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.alarmActive = false");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.patientAlertActive = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.reservoirRemaining === initialReservoir))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.reservoirRemaining = initialReservoir");
      }
      if (!((__result.self.safeMaxDose === safeMax))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.safeMaxDose = safeMax");
      }
      if (!((__result.self.safeZoneLower === zoneLower))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.safeZoneLower = zoneLower");
      }
      if (!((__result.self.safeZoneUpper === zoneUpper))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.safeZoneUpper = zoneUpper");
      }
      if (!((__result.self.lastBloodSugarReading === 0))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.lastBloodSugarReading = 0.0");
      }
      if (!((__result.self.lastSelfTestTimestamp === "unknown"))) {
        postViolations.push("[InsulinPumpSystem.powerOn] post violated: self.lastSelfTestTimestamp = 'unknown'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.powerOff. User supplies this. */
export type InsulinPumpSystemPowerOffImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { isOperating: unknown; isDeliveringInsulin: unknown; alarmActive: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.powerOff. */
export function wrapInsulinPumpSystemPowerOff(impl: InsulinPumpSystemPowerOffImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.powerOff] pre violated: self.isOperating = true");
    }
    if (!(!(self.isDeliveringInsulin))) {
      preViolations.push("[InsulinPumpSystem.powerOff] pre violated: not self.isDeliveringInsulin");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.isOperating = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.alarmActive = false");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.powerOff (async). User supplies this. */
export type InsulinPumpSystemPowerOffAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { isOperating: unknown; isDeliveringInsulin: unknown; alarmActive: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.powerOff (async). */
export function wrapInsulinPumpSystemPowerOffAsync(impl: InsulinPumpSystemPowerOffAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.powerOff] pre violated: self.isOperating = true");
    }
    if (!(!(self.isDeliveringInsulin))) {
      preViolations.push("[InsulinPumpSystem.powerOff] pre violated: not self.isDeliveringInsulin");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.isOperating = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.alarmActive = false");
      }
      if (!((__result.self.patientAlertActive === false))) {
        postViolations.push("[InsulinPumpSystem.powerOff] post violated: self.patientAlertActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardOverdose. User supplies this. */
export type InsulinPumpFormalizedSystemGuardOverdoseImpl = (self: InsulinPumpFormalizedSystem, requestedDose: number) => { self: InsulinPumpFormalizedSystem; modified: { alarmActive: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardOverdose. */
export function wrapInsulinPumpFormalizedSystemGuardOverdose(impl: InsulinPumpFormalizedSystemGuardOverdoseImpl): (self: InsulinPumpFormalizedSystem, requestedDose: number) => InsulinPumpFormalizedSystem {
  return (self, requestedDose) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] pre violated: self.isOperating = true");
    }
    if (!((requestedDose > self.safeMaxDose))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] pre violated: requestedDose > self.safeMaxDose");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedDose);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardOverdose (async). User supplies this. */
export type InsulinPumpFormalizedSystemGuardOverdoseAsyncImpl = (self: InsulinPumpFormalizedSystem, requestedDose: number) => Promise<{ self: InsulinPumpFormalizedSystem; modified: { alarmActive: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardOverdose (async). */
export function wrapInsulinPumpFormalizedSystemGuardOverdoseAsync(impl: InsulinPumpFormalizedSystemGuardOverdoseAsyncImpl): (self: InsulinPumpFormalizedSystem, requestedDose: number) => Promise<InsulinPumpFormalizedSystem> {
  return async (self, requestedDose) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] pre violated: self.isOperating = true");
    }
    if (!((requestedDose > self.safeMaxDose))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] pre violated: requestedDose > self.safeMaxDose");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedDose);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardOverdose] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardEmptyReservoir. User supplies this. */
export type InsulinPumpFormalizedSystemGuardEmptyReservoirImpl = (self: InsulinPumpFormalizedSystem) => { self: InsulinPumpFormalizedSystem; modified: { patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardEmptyReservoir. */
export function wrapInsulinPumpFormalizedSystemGuardEmptyReservoir(impl: InsulinPumpFormalizedSystemGuardEmptyReservoirImpl): (self: InsulinPumpFormalizedSystem) => InsulinPumpFormalizedSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] pre violated: self.isOperating = true");
    }
    if (!((self.reservoirRemaining <= 0))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] pre violated: self.reservoirRemaining <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardEmptyReservoir (async). User supplies this. */
export type InsulinPumpFormalizedSystemGuardEmptyReservoirAsyncImpl = (self: InsulinPumpFormalizedSystem) => Promise<{ self: InsulinPumpFormalizedSystem; modified: { patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardEmptyReservoir (async). */
export function wrapInsulinPumpFormalizedSystemGuardEmptyReservoirAsync(impl: InsulinPumpFormalizedSystemGuardEmptyReservoirAsyncImpl): (self: InsulinPumpFormalizedSystem) => Promise<InsulinPumpFormalizedSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] pre violated: self.isOperating = true");
    }
    if (!((self.reservoirRemaining <= 0))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] pre violated: self.reservoirRemaining <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardEmptyReservoir] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardFaultBeforeDelivery. User supplies this. */
export type InsulinPumpFormalizedSystemGuardFaultBeforeDeliveryImpl = (self: InsulinPumpFormalizedSystem) => { self: InsulinPumpFormalizedSystem; modified: { alarmActive: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardFaultBeforeDelivery. */
export function wrapInsulinPumpFormalizedSystemGuardFaultBeforeDelivery(impl: InsulinPumpFormalizedSystemGuardFaultBeforeDeliveryImpl): (self: InsulinPumpFormalizedSystem) => InsulinPumpFormalizedSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] pre violated: self.faultDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardFaultBeforeDelivery (async). User supplies this. */
export type InsulinPumpFormalizedSystemGuardFaultBeforeDeliveryAsyncImpl = (self: InsulinPumpFormalizedSystem) => Promise<{ self: InsulinPumpFormalizedSystem; modified: { alarmActive: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardFaultBeforeDelivery (async). */
export function wrapInsulinPumpFormalizedSystemGuardFaultBeforeDeliveryAsync(impl: InsulinPumpFormalizedSystemGuardFaultBeforeDeliveryAsyncImpl): (self: InsulinPumpFormalizedSystem) => Promise<InsulinPumpFormalizedSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] pre violated: self.faultDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardFaultBeforeDelivery] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardSensorAnomaly. User supplies this. */
export type InsulinPumpFormalizedSystemGuardSensorAnomalyImpl = (self: InsulinPumpFormalizedSystem, sugar: number) => { self: InsulinPumpFormalizedSystem; modified: { faultDetected: unknown; isOperating: unknown; isDeliveringInsulin: unknown; alarmActive: unknown; patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardSensorAnomaly. */
export function wrapInsulinPumpFormalizedSystemGuardSensorAnomaly(impl: InsulinPumpFormalizedSystemGuardSensorAnomalyImpl): (self: InsulinPumpFormalizedSystem, sugar: number) => InsulinPumpFormalizedSystem {
  return (self, sugar) => {
    const preViolations: string[] = [];
    if (!(((sugar < 0) || (sugar > 1000)))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] pre violated: sugar < 0.0 or sugar > 1000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.isOperating = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardSensorAnomaly (async). User supplies this. */
export type InsulinPumpFormalizedSystemGuardSensorAnomalyAsyncImpl = (self: InsulinPumpFormalizedSystem, sugar: number) => Promise<{ self: InsulinPumpFormalizedSystem; modified: { faultDetected: unknown; isOperating: unknown; isDeliveringInsulin: unknown; alarmActive: unknown; patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardSensorAnomaly (async). */
export function wrapInsulinPumpFormalizedSystemGuardSensorAnomalyAsync(impl: InsulinPumpFormalizedSystemGuardSensorAnomalyAsyncImpl): (self: InsulinPumpFormalizedSystem, sugar: number) => Promise<InsulinPumpFormalizedSystem> {
  return async (self, sugar) => {
    const preViolations: string[] = [];
    if (!(((sugar < 0) || (sugar > 1000)))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] pre violated: sugar < 0.0 or sugar > 1000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.isOperating = false");
      }
      if (!((__result.self.isDeliveringInsulin === false))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.isDeliveringInsulin = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.alarmActive = true");
      }
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardSensorAnomaly] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardDoseStackingAttempt. User supplies this. */
export type InsulinPumpFormalizedSystemGuardDoseStackingAttemptImpl = (self: InsulinPumpFormalizedSystem) => { self: InsulinPumpFormalizedSystem; modified: { patientAlertActive: unknown } };

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardDoseStackingAttempt. */
export function wrapInsulinPumpFormalizedSystemGuardDoseStackingAttempt(impl: InsulinPumpFormalizedSystemGuardDoseStackingAttemptImpl): (self: InsulinPumpFormalizedSystem) => InsulinPumpFormalizedSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.minimumDoseIntervalMinutes >= 10))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardDoseStackingAttempt] pre violated: self.minimumDoseIntervalMinutes >= 10");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardDoseStackingAttempt] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpFormalizedSystem.guardDoseStackingAttempt (async). User supplies this. */
export type InsulinPumpFormalizedSystemGuardDoseStackingAttemptAsyncImpl = (self: InsulinPumpFormalizedSystem) => Promise<{ self: InsulinPumpFormalizedSystem; modified: { patientAlertActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpFormalizedSystem.guardDoseStackingAttempt (async). */
export function wrapInsulinPumpFormalizedSystemGuardDoseStackingAttemptAsync(impl: InsulinPumpFormalizedSystemGuardDoseStackingAttemptAsyncImpl): (self: InsulinPumpFormalizedSystem) => Promise<InsulinPumpFormalizedSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.minimumDoseIntervalMinutes >= 10))) {
      preViolations.push("[InsulinPumpFormalizedSystem.guardDoseStackingAttempt] pre violated: self.minimumDoseIntervalMinutes >= 10");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.patientAlertActive === true))) {
        postViolations.push("[InsulinPumpFormalizedSystem.guardDoseStackingAttempt] post violated: self.patientAlertActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for DoseSafetyCommitment commitments. */
export class DoseSafetyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DoseSafetyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DoseSafetyCommitment — the typed wrapper guarantees that since
    // `register` only accepts DoseSafetyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DoseSafetyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DoseSafetyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DoseSafetyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DoseSafetyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DoseSafetyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DoseSafetyCommitment>[];
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

/** Lifecycle registry for PatientAlertCommitment commitments. */
export class PatientAlertCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PatientAlertCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PatientAlertCommitment — the typed wrapper guarantees that since
    // `register` only accepts PatientAlertCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PatientAlertCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PatientAlertCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PatientAlertCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PatientAlertCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PatientAlertCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PatientAlertCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for RegulatoryComplianceCommitment commitments. */
export class RegulatoryComplianceCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<RegulatoryComplianceCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a RegulatoryComplianceCommitment — the typed wrapper guarantees that since
    // `register` only accepts RegulatoryComplianceCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: RegulatoryComplianceCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: RegulatoryComplianceCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: RegulatoryComplianceCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: RegulatoryComplianceCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<RegulatoryComplianceCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<RegulatoryComplianceCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ClinicianConfigurabilityCommitment commitments. */
export class ClinicianConfigurabilityCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ClinicianConfigurabilityCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ClinicianConfigurabilityCommitment — the typed wrapper guarantees that since
    // `register` only accepts ClinicianConfigurabilityCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ClinicianConfigurabilityCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ClinicianConfigurabilityCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ClinicianConfigurabilityCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ClinicianConfigurabilityCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ClinicianConfigurabilityCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ClinicianConfigurabilityCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for MaintainabilityCommitment commitments. */
export class MaintainabilityCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MaintainabilityCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MaintainabilityCommitment — the typed wrapper guarantees that since
    // `register` only accepts MaintainabilityCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MaintainabilityCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MaintainabilityCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MaintainabilityCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MaintainabilityCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MaintainabilityCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MaintainabilityCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

