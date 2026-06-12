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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

