// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for InsulinPumpSystem. Runtime: string. Compile-time: branded. */
export type InsulinPumpSystemId = string & { readonly __brand: "InsulinPumpSystemId" };
/** Identity type for BloodSugar. Runtime: string. Compile-time: branded. */
export type BloodSugarId = string & { readonly __brand: "BloodSugarId" };
/** Identity type for SafeZone. Runtime: string. Compile-time: branded. */
export type SafeZoneId = string & { readonly __brand: "SafeZoneId" };
/** Identity type for InsulinReservoir. Runtime: string. Compile-time: branded. */
export type InsulinReservoirId = string & { readonly __brand: "InsulinReservoirId" };
/** Identity type for SelfTest. Runtime: string. Compile-time: branded. */
export type SelfTestId = string & { readonly __brand: "SelfTestId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for PumpVendor. Runtime: string. Compile-time: branded. */
export type PumpVendorId = string & { readonly __brand: "PumpVendorId" };
/** Identity type for CorrectDoseCommitment. Runtime: string. Compile-time: branded. */
export type CorrectDoseCommitmentId = string & { readonly __brand: "CorrectDoseCommitmentId" };
/** Identity type for FailSafeCommitment. Runtime: string. Compile-time: branded. */
export type FailSafeCommitmentId = string & { readonly __brand: "FailSafeCommitmentId" };
/** Identity type for PatientAlertCommitment. Runtime: string. Compile-time: branded. */
export type PatientAlertCommitmentId = string & { readonly __brand: "PatientAlertCommitmentId" };
/** Identity type for ClinicianConfigCommitment. Runtime: string. Compile-time: branded. */
export type ClinicianConfigCommitmentId = string & { readonly __brand: "ClinicianConfigCommitmentId" };
/** Identity type for DoseDeliveryFlow. Runtime: string. Compile-time: branded. */
export type DoseDeliveryFlowId = string & { readonly __brand: "DoseDeliveryFlowId" };
/** Identity type for FaultResponseFlow. Runtime: string. Compile-time: branded. */
export type FaultResponseFlowId = string & { readonly __brand: "FaultResponseFlowId" };
/** Identity type for SelfTestFlow. Runtime: string. Compile-time: branded. */
export type SelfTestFlowId = string & { readonly __brand: "SelfTestFlowId" };
/** Identity type for LowReservoirAlarmFlow. Runtime: string. Compile-time: branded. */
export type LowReservoirAlarmFlowId = string & { readonly __brand: "LowReservoirAlarmFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface InsulinPumpSystem {
  readonly systemId: InsulinPumpSystemId;
  readonly isOperating: boolean;
  readonly faultDetected: boolean;
  readonly safeMaxDoseUnits: number;
  readonly lastDoseDelivered: number;
  readonly currentBloodSugarMgDl: number;
  readonly bloodSugarRateMgDlPerMin: number;
  readonly reservoirUnits: number;
  readonly reservoirCapacityUnits: number;
  readonly lowReservoirThresholdUnits: number;
  readonly reservoirIsLow: boolean;
  readonly alarmActive: boolean;
  readonly alarmReason: string;
  readonly sensorReadingIntervalMin: number;
  readonly selfTestPeriodMin: number;
  readonly maxFaultResponseMin: number;
  readonly maxAlertLatencyMin: number;
}

/** @stereotype <<Kind>> */
export interface BloodSugar {
  readonly readingId: BloodSugarId;
  readonly concentrationMgDl: number;
  readonly timestampMin: number;
}

/** @stereotype <<Kind>> */
export interface SafeZone {
  readonly zoneId: SafeZoneId;
  readonly lowerBoundMgDl: number;
  readonly upperBoundMgDl: number;
}

/** @stereotype <<Kind>> */
export interface InsulinReservoir {
  readonly reservoirId: InsulinReservoirId;
  readonly capacityUnits: number;
  readonly currentUnits: number;
  readonly isLow: boolean;
}

/** @stereotype <<Kind>> */
export interface SelfTest {
  readonly testId: SelfTestId;
  readonly intervalMinutes: number;
  readonly lastTestTimestampMin: number;
  readonly passed: boolean;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly name: string;
  readonly hasDiabetes: boolean;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface PumpVendor {
  readonly vendorId: PumpVendorId;
  readonly name: string;
  readonly regulatoryBody: string;
}

/** @stereotype <<Category>> */
export interface DoseSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface FailSafeConstraints {
}

/** @stereotype <<Category>> */
export interface AlertConstraints {
}

/** @stereotype <<Commitment>> */
export interface CorrectDoseCommitment {
  readonly commitmentId: CorrectDoseCommitmentId;
  readonly safeMaxDoseUnits: number;
  readonly sensorReadingIntervalMin: number;
}

/** @stereotype <<Commitment>> */
export interface FailSafeCommitment {
  readonly commitmentId: FailSafeCommitmentId;
  readonly maxFaultResponseMinutes: number;
}

/** @stereotype <<Commitment>> */
export interface PatientAlertCommitment {
  readonly commitmentId: PatientAlertCommitmentId;
  readonly lowReservoirThresholdUnits: number;
  readonly maxAlertLatencyMin: number;
}

/** @stereotype <<Commitment>> */
export interface ClinicianConfigCommitment {
  readonly commitmentId: ClinicianConfigCommitmentId;
  readonly configurableSafeMax: boolean;
}

/** @stereotype <<Happening>> */
export interface DoseDeliveryFlow {
  readonly flowId: DoseDeliveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly stepCount: number;
}

/** @stereotype <<Happening>> */
export interface FaultResponseFlow {
  readonly flowId: FaultResponseFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SelfTestFlow {
  readonly flowId: SelfTestFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly intervalMinutes: number;
}

/** @stereotype <<Happening>> */
export interface LowReservoirAlarmFlow {
  readonly flowId: LowReservoirAlarmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeInsulinPumpSystem(data: {
  systemId: string;
  isOperating: boolean;
  faultDetected: boolean;
  safeMaxDoseUnits: number;
  lastDoseDelivered: number;
  currentBloodSugarMgDl: number;
  bloodSugarRateMgDlPerMin: number;
  reservoirUnits: number;
  reservoirCapacityUnits: number;
  lowReservoirThresholdUnits: number;
  reservoirIsLow: boolean;
  alarmActive: boolean;
  alarmReason: string;
  sensorReadingIntervalMin: number;
  selfTestPeriodMin: number;
  maxFaultResponseMin: number;
  maxAlertLatencyMin: number;
}): InsulinPumpSystem {
  return {
    systemId: data.systemId as InsulinPumpSystemId,
    isOperating: data.isOperating,
    faultDetected: data.faultDetected,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    lastDoseDelivered: data.lastDoseDelivered,
    currentBloodSugarMgDl: data.currentBloodSugarMgDl,
    bloodSugarRateMgDlPerMin: data.bloodSugarRateMgDlPerMin,
    reservoirUnits: data.reservoirUnits,
    reservoirCapacityUnits: data.reservoirCapacityUnits,
    lowReservoirThresholdUnits: data.lowReservoirThresholdUnits,
    reservoirIsLow: data.reservoirIsLow,
    alarmActive: data.alarmActive,
    alarmReason: data.alarmReason,
    sensorReadingIntervalMin: data.sensorReadingIntervalMin,
    selfTestPeriodMin: data.selfTestPeriodMin,
    maxFaultResponseMin: data.maxFaultResponseMin,
    maxAlertLatencyMin: data.maxAlertLatencyMin,
  };
}

export function makeBloodSugar(data: {
  readingId: string;
  concentrationMgDl: number;
  timestampMin: number;
}): BloodSugar {
  return {
    readingId: data.readingId as BloodSugarId,
    concentrationMgDl: data.concentrationMgDl,
    timestampMin: data.timestampMin,
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

export function makeInsulinReservoir(data: {
  reservoirId: string;
  capacityUnits: number;
  currentUnits: number;
  isLow: boolean;
}): InsulinReservoir {
  return {
    reservoirId: data.reservoirId as InsulinReservoirId,
    capacityUnits: data.capacityUnits,
    currentUnits: data.currentUnits,
    isLow: data.isLow,
  };
}

export function makeSelfTest(data: {
  testId: string;
  intervalMinutes: number;
  lastTestTimestampMin: number;
  passed: boolean;
}): SelfTest {
  return {
    testId: data.testId as SelfTestId,
    intervalMinutes: data.intervalMinutes,
    lastTestTimestampMin: data.lastTestTimestampMin,
    passed: data.passed,
  };
}

export function makePatient(data: {
  patientId: string;
  name: string;
  hasDiabetes: boolean;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    name: data.name,
    hasDiabetes: data.hasDiabetes,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  name: string;
  certification: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    name: data.name,
    certification: data.certification,
  };
}

export function makePumpVendor(data: {
  vendorId: string;
  name: string;
  regulatoryBody: string;
}): PumpVendor {
  return {
    vendorId: data.vendorId as PumpVendorId,
    name: data.name,
    regulatoryBody: data.regulatoryBody,
  };
}

export function makeCorrectDoseCommitment(data: {
  commitmentId: string;
  safeMaxDoseUnits: number;
  sensorReadingIntervalMin: number;
}): CorrectDoseCommitment {
  return {
    commitmentId: data.commitmentId as CorrectDoseCommitmentId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    sensorReadingIntervalMin: data.sensorReadingIntervalMin,
  };
}

export function makeFailSafeCommitment(data: {
  commitmentId: string;
  maxFaultResponseMinutes: number;
}): FailSafeCommitment {
  return {
    commitmentId: data.commitmentId as FailSafeCommitmentId,
    maxFaultResponseMinutes: data.maxFaultResponseMinutes,
  };
}

export function makePatientAlertCommitment(data: {
  commitmentId: string;
  lowReservoirThresholdUnits: number;
  maxAlertLatencyMin: number;
}): PatientAlertCommitment {
  return {
    commitmentId: data.commitmentId as PatientAlertCommitmentId,
    lowReservoirThresholdUnits: data.lowReservoirThresholdUnits,
    maxAlertLatencyMin: data.maxAlertLatencyMin,
  };
}

export function makeClinicianConfigCommitment(data: {
  commitmentId: string;
  configurableSafeMax: boolean;
}): ClinicianConfigCommitment {
  return {
    commitmentId: data.commitmentId as ClinicianConfigCommitmentId,
    configurableSafeMax: data.configurableSafeMax,
  };
}

export function makeDoseDeliveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  stepCount: number;
}): DoseDeliveryFlow {
  return {
    flowId: data.flowId as DoseDeliveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    stepCount: data.stepCount,
  };
}

export function makeFaultResponseFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): FaultResponseFlow {
  return {
    flowId: data.flowId as FaultResponseFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSelfTestFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  intervalMinutes: number;
}): SelfTestFlow {
  return {
    flowId: data.flowId as SelfTestFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    intervalMinutes: data.intervalMinutes,
  };
}

export function makeLowReservoirAlarmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): LowReservoirAlarmFlow {
  return {
    flowId: data.flowId as LowReservoirAlarmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for InsulinPumpSystem. Returns empty array when valid. */
export function validateInsulinPumpSystem(instance: InsulinPumpSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMaxDoseUnits > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeMaxDoseUnits > 0.0");
  }
  if (!((instance.lastDoseDelivered >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.lastDoseDelivered >= 0.0");
  }
  if (!((instance.lastDoseDelivered <= instance.safeMaxDoseUnits))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.lastDoseDelivered <= self.safeMaxDoseUnits");
  }
  if (!((instance.reservoirCapacityUnits > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.reservoirCapacityUnits > 0.0");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((instance.reservoirUnits <= instance.reservoirCapacityUnits))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.reservoirUnits <= self.reservoirCapacityUnits");
  }
  if (!((instance.lowReservoirThresholdUnits > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.lowReservoirThresholdUnits > 0.0");
  }
  if (!((instance.reservoirIsLow === (instance.reservoirUnits < instance.lowReservoirThresholdUnits)))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.reservoirIsLow = (self.reservoirUnits < self.lowReservoirThresholdUnits)");
  }
  if (!((!((instance.faultDetected === true)) || (instance.isOperating === false)))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.faultDetected = true implies self.isOperating = false");
  }
  if (!((!((instance.reservoirIsLow || instance.faultDetected)) || (instance.alarmActive === true)))) {
    violations.push("[InsulinPumpSystem] invariant violated: (self.reservoirIsLow or self.faultDetected) implies self.alarmActive = true");
  }
  if (!((instance.sensorReadingIntervalMin > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.sensorReadingIntervalMin > 0.0");
  }
  if (!((instance.sensorReadingIntervalMin <= 10))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.sensorReadingIntervalMin <= 10.0");
  }
  if (!((instance.selfTestPeriodMin > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.selfTestPeriodMin > 0.0");
  }
  if (!((instance.selfTestPeriodMin <= 1))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.selfTestPeriodMin <= 1.0");
  }
  if (!((instance.maxFaultResponseMin > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.maxFaultResponseMin > 0.0");
  }
  if (!((instance.maxFaultResponseMin <= 1))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.maxFaultResponseMin <= 1.0");
  }
  if (!((instance.maxAlertLatencyMin > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.maxAlertLatencyMin > 0.0");
  }
  return violations;
}

/** Runtime invariant check for BloodSugar. Returns empty array when valid. */
export function validateBloodSugar(instance: BloodSugar): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[BloodSugar] invariant violated: self.readingId <> null");
  }
  if (!((instance.concentrationMgDl >= 0))) {
    violations.push("[BloodSugar] invariant violated: self.concentrationMgDl >= 0.0");
  }
  if (!((instance.timestampMin >= 0))) {
    violations.push("[BloodSugar] invariant violated: self.timestampMin >= 0.0");
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

/** Runtime invariant check for SelfTest. Returns empty array when valid. */
export function validateSelfTest(instance: SelfTest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.testId !== null))) {
    violations.push("[SelfTest] invariant violated: self.testId <> null");
  }
  if (!((instance.intervalMinutes > 0))) {
    violations.push("[SelfTest] invariant violated: self.intervalMinutes > 0.0");
  }
  if (!((instance.intervalMinutes <= 1))) {
    violations.push("[SelfTest] invariant violated: self.intervalMinutes <= 1.0");
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
  if (!((instance.hasDiabetes === true))) {
    violations.push("[Patient] invariant violated: self.hasDiabetes = true");
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

/** Runtime invariant check for FailSafeConstraints. Returns empty array when valid. */
export function validateFailSafeConstraints(instance: FailSafeConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FailSafeConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AlertConstraints. Returns empty array when valid. */
export function validateAlertConstraints(instance: AlertConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AlertConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for DoseDeliveryFlow. Returns empty array when valid. */
export function validateDoseDeliveryFlow(instance: DoseDeliveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.stepCount >= 1))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.stepCount >= 1");
  }
  return violations;
}

/** Runtime invariant check for FaultResponseFlow. Returns empty array when valid. */
export function validateFaultResponseFlow(instance: FaultResponseFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[FaultResponseFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for SelfTestFlow. Returns empty array when valid. */
export function validateSelfTestFlow(instance: SelfTestFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SelfTestFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.intervalMinutes > 0))) {
    violations.push("[SelfTestFlow] invariant violated: self.intervalMinutes > 0.0");
  }
  if (!((instance.intervalMinutes <= 1))) {
    violations.push("[SelfTestFlow] invariant violated: self.intervalMinutes <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for LowReservoirAlarmFlow. Returns empty array when valid. */
export function validateLowReservoirAlarmFlow(instance: LowReservoirAlarmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[LowReservoirAlarmFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for InsulinPumpSystem.deliverInsulin. User supplies this. */
export type InsulinPumpSystemDeliverInsulinImpl = (self: InsulinPumpSystem, sugarMgDl: number, safeZoneLower: number, safeZoneUpper: number, riseRateMgDlPerMin: number) => { self: InsulinPumpSystem; modified: { reservoirUnits: unknown; lastDoseDelivered: unknown; currentBloodSugarMgDl: unknown; bloodSugarRateMgDlPerMin: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.deliverInsulin. */
export function wrapInsulinPumpSystemDeliverInsulin(impl: InsulinPumpSystemDeliverInsulinImpl): (self: InsulinPumpSystem, sugarMgDl: number, safeZoneLower: number, safeZoneUpper: number, riseRateMgDlPerMin: number) => InsulinPumpSystem {
  return (self, sugarMgDl, safeZoneLower, safeZoneUpper, riseRateMgDlPerMin) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((sugarMgDl >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: sugarMgDl >= 0.0");
    }
    if (!((riseRateMgDlPerMin >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: riseRateMgDlPerMin >= 0.0");
    }
    if (!((safeZoneLower >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: safeZoneLower >= 0.0");
    }
    if (!((safeZoneUpper > safeZoneLower))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: safeZoneUpper > safeZoneLower");
    }
    if (!((self.reservoirUnits > 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.reservoirUnits > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugarMgDl, safeZoneLower, safeZoneUpper, riseRateMgDlPerMin);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDoseUnits — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): (sugarMgDl >= safeZoneLower and sugarMgDl <= safeZoneUpper)
            implies result = 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      if (!((__result.self.sensorReadingIntervalMin <= 10))) {
        postViolations.push("[InsulinPumpSystem.deliverInsulin] post violated: self.sensorReadingIntervalMin <= 10.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemDeliverInsulinAsyncImpl = (self: InsulinPumpSystem, sugarMgDl: number, safeZoneLower: number, safeZoneUpper: number, riseRateMgDlPerMin: number) => Promise<{ self: InsulinPumpSystem; modified: { reservoirUnits: unknown; lastDoseDelivered: unknown; currentBloodSugarMgDl: unknown; bloodSugarRateMgDlPerMin: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.deliverInsulin (async). */
export function wrapInsulinPumpSystemDeliverInsulinAsync(impl: InsulinPumpSystemDeliverInsulinAsyncImpl): (self: InsulinPumpSystem, sugarMgDl: number, safeZoneLower: number, safeZoneUpper: number, riseRateMgDlPerMin: number) => Promise<InsulinPumpSystem> {
  return async (self, sugarMgDl, safeZoneLower, safeZoneUpper, riseRateMgDlPerMin) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((sugarMgDl >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: sugarMgDl >= 0.0");
    }
    if (!((riseRateMgDlPerMin >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: riseRateMgDlPerMin >= 0.0");
    }
    if (!((safeZoneLower >= 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: safeZoneLower >= 0.0");
    }
    if (!((safeZoneUpper > safeZoneLower))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: safeZoneUpper > safeZoneLower");
    }
    if (!((self.reservoirUnits > 0))) {
      preViolations.push("[InsulinPumpSystem.deliverInsulin] pre violated: self.reservoirUnits > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugarMgDl, safeZoneLower, safeZoneUpper, riseRateMgDlPerMin);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDoseUnits — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): (sugarMgDl >= safeZoneLower and sugarMgDl <= safeZoneUpper)
            implies result = 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      if (!((__result.self.sensorReadingIntervalMin <= 10))) {
        postViolations.push("[InsulinPumpSystem.deliverInsulin] post violated: self.sensorReadingIntervalMin <= 10.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemRunSelfTestImpl = (self: InsulinPumpSystem, passed: boolean) => { self: InsulinPumpSystem; modified: { faultDetected: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.runSelfTest. */
export function wrapInsulinPumpSystemRunSelfTest(impl: InsulinPumpSystemRunSelfTestImpl): (self: InsulinPumpSystem, passed: boolean) => InsulinPumpSystem {
  return (self, passed) => {
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
      const __result = impl(self, passed);
      const postViolations: string[] = [];
      if (!(((passed) ? ((__result.self.faultDetected === __pre["self.faultDetected"])) : ((__result.self.faultDetected === true))))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: if passed then\n            self.faultDetected = self.faultDetected@pre\n          else\n            self.faultDetected = true\n          endif");
      }
      if (!((__result.self.selfTestPeriodMin <= 1))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.selfTestPeriodMin <= 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemRunSelfTestAsyncImpl = (self: InsulinPumpSystem, passed: boolean) => Promise<{ self: InsulinPumpSystem; modified: { faultDetected: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.runSelfTest (async). */
export function wrapInsulinPumpSystemRunSelfTestAsync(impl: InsulinPumpSystemRunSelfTestAsyncImpl): (self: InsulinPumpSystem, passed: boolean) => Promise<InsulinPumpSystem> {
  return async (self, passed) => {
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
      const __result = await impl(self, passed);
      const postViolations: string[] = [];
      if (!(((passed) ? ((__result.self.faultDetected === __pre["self.faultDetected"])) : ((__result.self.faultDetected === true))))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: if passed then\n            self.faultDetected = self.faultDetected@pre\n          else\n            self.faultDetected = true\n          endif");
      }
      if (!((__result.self.selfTestPeriodMin <= 1))) {
        postViolations.push("[InsulinPumpSystem.runSelfTest] post violated: self.selfTestPeriodMin <= 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.haltOnFault. User supplies this. */
export type InsulinPumpSystemHaltOnFaultImpl = (self: InsulinPumpSystem, reason: string) => { self: InsulinPumpSystem; modified: { isOperating: unknown; alarmActive: unknown; alarmReason: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.haltOnFault. */
export function wrapInsulinPumpSystemHaltOnFault(impl: InsulinPumpSystemHaltOnFaultImpl): (self: InsulinPumpSystem, reason: string) => InsulinPumpSystem {
  return (self, reason) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystem.haltOnFault] pre violated: self.faultDetected = true");
    }
    if (!((reason !== null))) {
      preViolations.push("[InsulinPumpSystem.haltOnFault] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmReason === "FAULT"))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.alarmReason = 'FAULT'");
      }
      if (!((__result.self.maxFaultResponseMin > 0))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.maxFaultResponseMin > 0.0");
      }
      if (!((__result.self.maxFaultResponseMin <= 1))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.maxFaultResponseMin <= 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.haltOnFault (async). User supplies this. */
export type InsulinPumpSystemHaltOnFaultAsyncImpl = (self: InsulinPumpSystem, reason: string) => Promise<{ self: InsulinPumpSystem; modified: { isOperating: unknown; alarmActive: unknown; alarmReason: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.haltOnFault (async). */
export function wrapInsulinPumpSystemHaltOnFaultAsync(impl: InsulinPumpSystemHaltOnFaultAsyncImpl): (self: InsulinPumpSystem, reason: string) => Promise<InsulinPumpSystem> {
  return async (self, reason) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystem.haltOnFault] pre violated: self.faultDetected = true");
    }
    if (!((reason !== null))) {
      preViolations.push("[InsulinPumpSystem.haltOnFault] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmReason === "FAULT"))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.alarmReason = 'FAULT'");
      }
      if (!((__result.self.maxFaultResponseMin > 0))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.maxFaultResponseMin > 0.0");
      }
      if (!((__result.self.maxFaultResponseMin <= 1))) {
        postViolations.push("[InsulinPumpSystem.haltOnFault] post violated: self.maxFaultResponseMin <= 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.raiseAlarm. User supplies this. */
export type InsulinPumpSystemRaiseAlarmImpl = (self: InsulinPumpSystem, reason: string) => { self: InsulinPumpSystem; modified: { alarmActive: unknown; alarmReason: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.raiseAlarm. */
export function wrapInsulinPumpSystemRaiseAlarm(impl: InsulinPumpSystemRaiseAlarmImpl): (self: InsulinPumpSystem, reason: string) => InsulinPumpSystem {
  return (self, reason) => {
    const preViolations: string[] = [];
    if (!(((self.isOperating === true) || (self.faultDetected === true)))) {
      preViolations.push("[InsulinPumpSystem.raiseAlarm] pre violated: self.isOperating = true or self.faultDetected = true");
    }
    if (!(((reason === "LOW_RESERVOIR") || (reason === "MALFUNCTION")))) {
      preViolations.push("[InsulinPumpSystem.raiseAlarm] pre violated: reason = 'LOW_RESERVOIR' or reason = 'MALFUNCTION'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmReason === reason))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.alarmReason = reason");
      }
      if (!((__result.self.lowReservoirThresholdUnits > 0))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.lowReservoirThresholdUnits > 0.0");
      }
      if (!((__result.self.maxAlertLatencyMin > 0))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.maxAlertLatencyMin > 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystem.raiseAlarm (async). User supplies this. */
export type InsulinPumpSystemRaiseAlarmAsyncImpl = (self: InsulinPumpSystem, reason: string) => Promise<{ self: InsulinPumpSystem; modified: { alarmActive: unknown; alarmReason: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.raiseAlarm (async). */
export function wrapInsulinPumpSystemRaiseAlarmAsync(impl: InsulinPumpSystemRaiseAlarmAsyncImpl): (self: InsulinPumpSystem, reason: string) => Promise<InsulinPumpSystem> {
  return async (self, reason) => {
    const preViolations: string[] = [];
    if (!(((self.isOperating === true) || (self.faultDetected === true)))) {
      preViolations.push("[InsulinPumpSystem.raiseAlarm] pre violated: self.isOperating = true or self.faultDetected = true");
    }
    if (!(((reason === "LOW_RESERVOIR") || (reason === "MALFUNCTION")))) {
      preViolations.push("[InsulinPumpSystem.raiseAlarm] pre violated: reason = 'LOW_RESERVOIR' or reason = 'MALFUNCTION'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmReason === reason))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.alarmReason = reason");
      }
      if (!((__result.self.lowReservoirThresholdUnits > 0))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.lowReservoirThresholdUnits > 0.0");
      }
      if (!((__result.self.maxAlertLatencyMin > 0))) {
        postViolations.push("[InsulinPumpSystem.raiseAlarm] post violated: self.maxAlertLatencyMin > 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemConfigureSafeMaxImpl = (self: InsulinPumpSystem, newMaxUnits: number) => { self: InsulinPumpSystem; modified: { safeMaxDoseUnits: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeMax. */
export function wrapInsulinPumpSystemConfigureSafeMax(impl: InsulinPumpSystemConfigureSafeMaxImpl): (self: InsulinPumpSystem, newMaxUnits: number) => InsulinPumpSystem {
  return (self, newMaxUnits) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === false))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: self.isOperating = false");
    }
    if (!((newMaxUnits > 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: newMaxUnits > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMaxUnits);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === newMaxUnits))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMax] post violated: self.safeMaxDoseUnits = newMaxUnits");
      }
      if (!((__result.self.safeMaxDoseUnits > 0))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMax] post violated: self.safeMaxDoseUnits > 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemConfigureSafeMaxAsyncImpl = (self: InsulinPumpSystem, newMaxUnits: number) => Promise<{ self: InsulinPumpSystem; modified: { safeMaxDoseUnits: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.configureSafeMax (async). */
export function wrapInsulinPumpSystemConfigureSafeMaxAsync(impl: InsulinPumpSystemConfigureSafeMaxAsyncImpl): (self: InsulinPumpSystem, newMaxUnits: number) => Promise<InsulinPumpSystem> {
  return async (self, newMaxUnits) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === false))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: self.isOperating = false");
    }
    if (!((newMaxUnits > 0))) {
      preViolations.push("[InsulinPumpSystem.configureSafeMax] pre violated: newMaxUnits > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMaxUnits);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === newMaxUnits))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMax] post violated: self.safeMaxDoseUnits = newMaxUnits");
      }
      if (!((__result.self.safeMaxDoseUnits > 0))) {
        postViolations.push("[InsulinPumpSystem.configureSafeMax] post violated: self.safeMaxDoseUnits > 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemCheckReservoirImpl = (self: InsulinPumpSystem) => { self: InsulinPumpSystem; modified: { reservoirIsLow: unknown; alarmActive: unknown; alarmReason: unknown } };

/** Contract-checking wrapper for InsulinPumpSystem.checkReservoir. */
export function wrapInsulinPumpSystemCheckReservoir(impl: InsulinPumpSystemCheckReservoirImpl): (self: InsulinPumpSystem) => InsulinPumpSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.checkReservoir] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirIsLow === (__result.self.reservoirUnits < __result.self.lowReservoirThresholdUnits)))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.reservoirIsLow =\n            (self.reservoirUnits < self.lowReservoirThresholdUnits)");
      }
      if (!((!(__result.self.reservoirIsLow) || (__result.self.alarmActive === true)))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.reservoirIsLow implies self.alarmActive = true");
      }
      if (!((!(__result.self.reservoirIsLow) || (__result.self.alarmReason === "LOW_RESERVOIR")))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.reservoirIsLow implies self.alarmReason = 'LOW_RESERVOIR'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type InsulinPumpSystemCheckReservoirAsyncImpl = (self: InsulinPumpSystem) => Promise<{ self: InsulinPumpSystem; modified: { reservoirIsLow: unknown; alarmActive: unknown; alarmReason: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystem.checkReservoir (async). */
export function wrapInsulinPumpSystemCheckReservoirAsync(impl: InsulinPumpSystemCheckReservoirAsyncImpl): (self: InsulinPumpSystem) => Promise<InsulinPumpSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystem.checkReservoir] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirIsLow === (__result.self.reservoirUnits < __result.self.lowReservoirThresholdUnits)))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.reservoirIsLow =\n            (self.reservoirUnits < self.lowReservoirThresholdUnits)");
      }
      if (!((!(__result.self.reservoirIsLow) || (__result.self.alarmActive === true)))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.reservoirIsLow implies self.alarmActive = true");
      }
      if (!((!(__result.self.reservoirIsLow) || (__result.self.alarmReason === "LOW_RESERVOIR")))) {
        postViolations.push("[InsulinPumpSystem.checkReservoir] post violated: self.reservoirIsLow implies self.alarmReason = 'LOW_RESERVOIR'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for ClinicianConfigCommitment commitments. */
export class ClinicianConfigCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ClinicianConfigCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ClinicianConfigCommitment — the typed wrapper guarantees that since
    // `register` only accepts ClinicianConfigCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ClinicianConfigCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ClinicianConfigCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ClinicianConfigCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ClinicianConfigCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ClinicianConfigCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ClinicianConfigCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

