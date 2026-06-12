// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for PumpControllerSystem. Runtime: string. Compile-time: branded. */
export type PumpControllerSystemId = string & { readonly __brand: "PumpControllerSystemId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for PumpVendor. Runtime: string. Compile-time: branded. */
export type PumpVendorId = string & { readonly __brand: "PumpVendorId" };
/** Identity type for BloodSugarMeasurement. Runtime: string. Compile-time: branded. */
export type BloodSugarMeasurementId = string & { readonly __brand: "BloodSugarMeasurementId" };
/** Identity type for InsulinReservoir. Runtime: string. Compile-time: branded. */
export type InsulinReservoirId = string & { readonly __brand: "InsulinReservoirId" };
/** Identity type for SelfTestResult. Runtime: string. Compile-time: branded. */
export type SelfTestResultId = string & { readonly __brand: "SelfTestResultId" };
/** Identity type for SafeZone. Runtime: string. Compile-time: branded. */
export type SafeZoneId = string & { readonly __brand: "SafeZoneId" };
/** Identity type for CorrectDoseCommitment. Runtime: string. Compile-time: branded. */
export type CorrectDoseCommitmentId = string & { readonly __brand: "CorrectDoseCommitmentId" };
/** Identity type for FailSafeCommitment. Runtime: string. Compile-time: branded. */
export type FailSafeCommitmentId = string & { readonly __brand: "FailSafeCommitmentId" };
/** Identity type for AlertCommitment. Runtime: string. Compile-time: branded. */
export type AlertCommitmentId = string & { readonly __brand: "AlertCommitmentId" };
/** Identity type for InsulinPumpSystem. Runtime: string. Compile-time: branded. */
export type InsulinPumpSystemId = string & { readonly __brand: "InsulinPumpSystemId" };
/** Identity type for DoseDeliveryFlow. Runtime: string. Compile-time: branded. */
export type DoseDeliveryFlowId = string & { readonly __brand: "DoseDeliveryFlowId" };
/** Identity type for FaultResponseFlow. Runtime: string. Compile-time: branded. */
export type FaultResponseFlowId = string & { readonly __brand: "FaultResponseFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface PumpControllerSystem extends DoseSafetyConstraints, HardwareSafety {
  readonly systemId: PumpControllerSystemId;
  readonly safeMaxDoseUnits: number;
  readonly lastDeliveredDose: number;
  readonly lastReadingMgDl: number;
  readonly safeZoneLower: number;
  readonly safeZoneUpper: number;
  readonly isOperating: boolean;
  readonly faultDetected: boolean;
  readonly alarmActive: boolean;
  readonly lowReservoirAlertThreshold: number;
  readonly reservoirUnits: number;
  readonly selfTestIntervalSeconds: number;
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
}

/** @stereotype <<Kind>> */
export interface BloodSugarMeasurement {
  readonly measurementId: BloodSugarMeasurementId;
  readonly valueMgDl: number;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface InsulinReservoir {
  readonly reservoirId: InsulinReservoirId;
  readonly capacityUnits: number;
  readonly currentUnits: number;
  readonly lowThresholdUnits: number;
}

/** @stereotype <<Kind>> */
export interface SelfTestResult {
  readonly testId: SelfTestResultId;
  readonly isPassed: boolean;
  readonly faultCode: string;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface SafeZone {
  readonly safeZoneId: SafeZoneId;
  readonly lowerBoundMgDl: number;
  readonly upperBoundMgDl: number;
}

/** @stereotype <<Commitment>> */
export interface CorrectDoseCommitment {
  readonly commitmentId: CorrectDoseCommitmentId;
  readonly safeMaxDoseUnits: number;
  readonly safeZoneLower: number;
  readonly safeZoneUpper: number;
  readonly maxDoseProportionalToRate: boolean;
}

/** @stereotype <<Commitment>> */
export interface FailSafeCommitment {
  readonly commitmentId: FailSafeCommitmentId;
  readonly alarmEnabled: boolean;
  readonly deliveryStoppedOnFault: boolean;
}

/** @stereotype <<Commitment>> */
export interface AlertCommitment {
  readonly commitmentId: AlertCommitmentId;
  readonly lowReservoirAlertThreshold: number;
  readonly malfunctionAlertDelaySeconds: number;
}

/** @stereotype <<Kind>> */
export interface InsulinPumpSystem {
  readonly systemId: InsulinPumpSystemId;
  readonly safeMaxDoseUnits: number;
  readonly lastDeliveredDose: number;
  readonly isOperating: boolean;
  readonly faultDetected: boolean;
  readonly alarmActive: boolean;
}

/** @stereotype <<Category>> */
export interface DoseSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface HardwareSafety {
}

/** @stereotype <<Happening>> */
export interface DoseDeliveryFlow {
  readonly flowId: DoseDeliveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly measurement: BloodSugarMeasurement;
  readonly doseDelivered: number;
  readonly deliveryTimestamp: number;
}

/** @stereotype <<Happening>> */
export interface FaultResponseFlow {
  readonly flowId: FaultResponseFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly fault: SelfTestResult;
  readonly alarmActivated: boolean;
  readonly deliveryStopped: boolean;
}


// ─── Factory functions ───

export function makePumpControllerSystem(data: {
  systemId: string;
  safeMaxDoseUnits: number;
  lastDeliveredDose: number;
  lastReadingMgDl: number;
  safeZoneLower: number;
  safeZoneUpper: number;
  isOperating: boolean;
  faultDetected: boolean;
  alarmActive: boolean;
  lowReservoirAlertThreshold: number;
  reservoirUnits: number;
  selfTestIntervalSeconds: number;
}): PumpControllerSystem {
  return {
    systemId: data.systemId as PumpControllerSystemId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    lastDeliveredDose: data.lastDeliveredDose,
    lastReadingMgDl: data.lastReadingMgDl,
    safeZoneLower: data.safeZoneLower,
    safeZoneUpper: data.safeZoneUpper,
    isOperating: data.isOperating,
    faultDetected: data.faultDetected,
    alarmActive: data.alarmActive,
    lowReservoirAlertThreshold: data.lowReservoirAlertThreshold,
    reservoirUnits: data.reservoirUnits,
    selfTestIntervalSeconds: data.selfTestIntervalSeconds,
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
}): PumpVendor {
  return {
    vendorId: data.vendorId as PumpVendorId,
    name: data.name,
  };
}

export function makeBloodSugarMeasurement(data: {
  measurementId: string;
  valueMgDl: number;
  timestamp: number;
}): BloodSugarMeasurement {
  return {
    measurementId: data.measurementId as BloodSugarMeasurementId,
    valueMgDl: data.valueMgDl,
    timestamp: data.timestamp,
  };
}

export function makeInsulinReservoir(data: {
  reservoirId: string;
  capacityUnits: number;
  currentUnits: number;
  lowThresholdUnits: number;
}): InsulinReservoir {
  return {
    reservoirId: data.reservoirId as InsulinReservoirId,
    capacityUnits: data.capacityUnits,
    currentUnits: data.currentUnits,
    lowThresholdUnits: data.lowThresholdUnits,
  };
}

export function makeSelfTestResult(data: {
  testId: string;
  isPassed: boolean;
  faultCode: string;
  timestamp: number;
}): SelfTestResult {
  return {
    testId: data.testId as SelfTestResultId,
    isPassed: data.isPassed,
    faultCode: data.faultCode,
    timestamp: data.timestamp,
  };
}

export function makeSafeZone(data: {
  safeZoneId: string;
  lowerBoundMgDl: number;
  upperBoundMgDl: number;
}): SafeZone {
  return {
    safeZoneId: data.safeZoneId as SafeZoneId,
    lowerBoundMgDl: data.lowerBoundMgDl,
    upperBoundMgDl: data.upperBoundMgDl,
  };
}

export function makeCorrectDoseCommitment(data: {
  commitmentId: string;
  safeMaxDoseUnits: number;
  safeZoneLower: number;
  safeZoneUpper: number;
  maxDoseProportionalToRate: boolean;
}): CorrectDoseCommitment {
  return {
    commitmentId: data.commitmentId as CorrectDoseCommitmentId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    safeZoneLower: data.safeZoneLower,
    safeZoneUpper: data.safeZoneUpper,
    maxDoseProportionalToRate: data.maxDoseProportionalToRate,
  };
}

export function makeFailSafeCommitment(data: {
  commitmentId: string;
  alarmEnabled: boolean;
  deliveryStoppedOnFault: boolean;
}): FailSafeCommitment {
  return {
    commitmentId: data.commitmentId as FailSafeCommitmentId,
    alarmEnabled: data.alarmEnabled,
    deliveryStoppedOnFault: data.deliveryStoppedOnFault,
  };
}

export function makeAlertCommitment(data: {
  commitmentId: string;
  lowReservoirAlertThreshold: number;
  malfunctionAlertDelaySeconds: number;
}): AlertCommitment {
  return {
    commitmentId: data.commitmentId as AlertCommitmentId,
    lowReservoirAlertThreshold: data.lowReservoirAlertThreshold,
    malfunctionAlertDelaySeconds: data.malfunctionAlertDelaySeconds,
  };
}

export function makeInsulinPumpSystem(data: {
  systemId: string;
  safeMaxDoseUnits: number;
  lastDeliveredDose: number;
  isOperating: boolean;
  faultDetected: boolean;
  alarmActive: boolean;
}): InsulinPumpSystem {
  return {
    systemId: data.systemId as InsulinPumpSystemId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    lastDeliveredDose: data.lastDeliveredDose,
    isOperating: data.isOperating,
    faultDetected: data.faultDetected,
    alarmActive: data.alarmActive,
  };
}

export function makeDoseDeliveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  measurement: BloodSugarMeasurement;
  doseDelivered: number;
  deliveryTimestamp: number;
}): DoseDeliveryFlow {
  return {
    flowId: data.flowId as DoseDeliveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    measurement: data.measurement,
    doseDelivered: data.doseDelivered,
    deliveryTimestamp: data.deliveryTimestamp,
  };
}

export function makeFaultResponseFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  fault: SelfTestResult;
  alarmActivated: boolean;
  deliveryStopped: boolean;
}): FaultResponseFlow {
  return {
    flowId: data.flowId as FaultResponseFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    fault: data.fault,
    alarmActivated: data.alarmActivated,
    deliveryStopped: data.deliveryStopped,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for PumpControllerSystem. Returns empty array when valid. */
export function validatePumpControllerSystem(instance: PumpControllerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[PumpControllerSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMaxDoseUnits > 0))) {
    violations.push("[PumpControllerSystem] invariant violated: self.safeMaxDoseUnits > 0.0");
  }
  if (!((instance.lastDeliveredDose <= instance.safeMaxDoseUnits))) {
    violations.push("[PumpControllerSystem] invariant violated: self.lastDeliveredDose <= self.safeMaxDoseUnits");
  }
  if (!((instance.safeZoneLower >= 0))) {
    violations.push("[PumpControllerSystem] invariant violated: self.safeZoneLower >= 0.0");
  }
  if (!((instance.safeZoneUpper > instance.safeZoneLower))) {
    violations.push("[PumpControllerSystem] invariant violated: self.safeZoneUpper > self.safeZoneLower");
  }
  if (!((!(instance.isOperating) || !(instance.faultDetected)))) {
    violations.push("[PumpControllerSystem] invariant violated: self.isOperating implies not self.faultDetected");
  }
  if (!((!(instance.faultDetected) || !(instance.isOperating)))) {
    violations.push("[PumpControllerSystem] invariant violated: self.faultDetected implies not self.isOperating");
  }
  if (!((!(instance.faultDetected) || instance.alarmActive))) {
    violations.push("[PumpControllerSystem] invariant violated: self.faultDetected implies self.alarmActive");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[PumpControllerSystem] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((instance.lowReservoirAlertThreshold >= 0))) {
    violations.push("[PumpControllerSystem] invariant violated: self.lowReservoirAlertThreshold >= 0.0");
  }
  if (!((instance.selfTestIntervalSeconds >= 60))) {
    violations.push("[PumpControllerSystem] invariant violated: self.selfTestIntervalSeconds >= 60");
  }
  if (!((instance.lastReadingMgDl >= 0))) {
    violations.push("[PumpControllerSystem] invariant violated: self.lastReadingMgDl >= 0.0");
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
  if (!((instance.certification !== null))) {
    violations.push("[Clinician] invariant violated: self.certification <> null");
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

/** Runtime invariant check for BloodSugarMeasurement. Returns empty array when valid. */
export function validateBloodSugarMeasurement(instance: BloodSugarMeasurement): readonly string[] {
  const violations: string[] = [];
  if (!((instance.measurementId !== null))) {
    violations.push("[BloodSugarMeasurement] invariant violated: self.measurementId <> null");
  }
  if (!((instance.valueMgDl >= 0))) {
    violations.push("[BloodSugarMeasurement] invariant violated: self.valueMgDl >= 0.0");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[BloodSugarMeasurement] invariant violated: self.timestamp >= 0");
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
  if (!((instance.lowThresholdUnits >= 0))) {
    violations.push("[InsulinReservoir] invariant violated: self.lowThresholdUnits >= 0.0");
  }
  if (!((instance.lowThresholdUnits <= instance.capacityUnits))) {
    violations.push("[InsulinReservoir] invariant violated: self.lowThresholdUnits <= self.capacityUnits");
  }
  return violations;
}

/** Runtime invariant check for SelfTestResult. Returns empty array when valid. */
export function validateSelfTestResult(instance: SelfTestResult): readonly string[] {
  const violations: string[] = [];
  if (!((instance.testId !== null))) {
    violations.push("[SelfTestResult] invariant violated: self.testId <> null");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[SelfTestResult] invariant violated: self.timestamp >= 0");
  }
  return violations;
}

/** Runtime invariant check for SafeZone. Returns empty array when valid. */
export function validateSafeZone(instance: SafeZone): readonly string[] {
  const violations: string[] = [];
  if (!((instance.safeZoneId !== null))) {
    violations.push("[SafeZone] invariant violated: self.safeZoneId <> null");
  }
  if (!((instance.lowerBoundMgDl >= 0))) {
    violations.push("[SafeZone] invariant violated: self.lowerBoundMgDl >= 0.0");
  }
  if (!((instance.upperBoundMgDl > instance.lowerBoundMgDl))) {
    violations.push("[SafeZone] invariant violated: self.upperBoundMgDl > self.lowerBoundMgDl");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpSystem. Returns empty array when valid. */
export function validateInsulinPumpSystem(instance: InsulinPumpSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.systemId <> null");
  }
  return violations;
}

/** Runtime invariant check for DoseSafetyConstraints. Returns empty array when valid. */
export function validateDoseSafetyConstraints(instance: DoseSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxDoseUnits > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.lastDeliveredDose <= bearer.safeMaxDoseUnits — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for HardwareSafety. Returns empty array when valid. */
export function validateHardwareSafety(instance: HardwareSafety): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.isOperating implies not bearer.faultDetected — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.faultDetected implies not bearer.isOperating — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.faultDetected implies bearer.alarmActive — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for DoseDeliveryFlow. Returns empty array when valid. */
export function validateDoseDeliveryFlow(instance: DoseDeliveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.measurement !== null))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.measurement <> null");
  }
  if (!((instance.doseDelivered >= 0))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.doseDelivered >= 0.0");
  }
  if (!((instance.deliveryTimestamp >= 0))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.deliveryTimestamp >= 0");
  }
  return violations;
}

/** Runtime invariant check for FaultResponseFlow. Returns empty array when valid. */
export function validateFaultResponseFlow(instance: FaultResponseFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[FaultResponseFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.fault !== null))) {
    violations.push("[FaultResponseFlow] invariant violated: self.fault <> null");
  }
  if (!((instance.alarmActivated === (instance.deliveryStopped && !(instance.fault?.isPassed))))) {
    violations.push("[FaultResponseFlow] invariant violated: self.alarmActivated = (self.deliveryStopped and not self.fault.isPassed)");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for PumpControllerSystem.deliverInsulin. User supplies this. */
export type PumpControllerSystemDeliverInsulinImpl = (self: PumpControllerSystem, readingMgDl: number, rateOfIncrease: number) => { self: PumpControllerSystem; modified: { lastDeliveredDose: unknown; lastReadingMgDl: unknown; reservoirUnits: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.deliverInsulin. */
export function wrapPumpControllerSystemDeliverInsulin(impl: PumpControllerSystemDeliverInsulinImpl): (self: PumpControllerSystem, readingMgDl: number, rateOfIncrease: number) => PumpControllerSystem {
  return (self, readingMgDl, rateOfIncrease) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((readingMgDl >= 0))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: readingMgDl >= 0.0");
    }
    if (!((readingMgDl > self.safeZoneUpper))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: readingMgDl > self.safeZoneUpper");
    }
    if (!((rateOfIncrease >= 0))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: rateOfIncrease >= 0.0");
    }
    if (!(((rateOfIncrease * 1) <= self.safeMaxDoseUnits))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: rateOfIncrease * 1.0 <= self.safeMaxDoseUnits");
    }
    if (!((self.reservoirUnits >= (rateOfIncrease * 1)))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: self.reservoirUnits >= rateOfIncrease * 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, readingMgDl, rateOfIncrease);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDoseUnits — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastDeliveredDose = result — unbound variable 'result'
      if (!((__result.self.lastReadingMgDl === readingMgDl))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: self.lastReadingMgDl = readingMgDl");
      }
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      if (!((__result.self.reservoirUnits >= 0))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: self.reservoirUnits >= 0.0");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: self.isOperating = true");
      }
      if (!(!(__result.self.faultDetected))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: not self.faultDetected");
      }
      // SKIPPED post-clause (not translatable): result = if (rateOfIncrease * 1.0) <= self.safeMaxDoseUnits
                   then rateOfIncrease * 1.0
                   else self.safeMaxDoseUnits
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

/** Impl signature for PumpControllerSystem.deliverInsulin (async). User supplies this. */
export type PumpControllerSystemDeliverInsulinAsyncImpl = (self: PumpControllerSystem, readingMgDl: number, rateOfIncrease: number) => Promise<{ self: PumpControllerSystem; modified: { lastDeliveredDose: unknown; lastReadingMgDl: unknown; reservoirUnits: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.deliverInsulin (async). */
export function wrapPumpControllerSystemDeliverInsulinAsync(impl: PumpControllerSystemDeliverInsulinAsyncImpl): (self: PumpControllerSystem, readingMgDl: number, rateOfIncrease: number) => Promise<PumpControllerSystem> {
  return async (self, readingMgDl, rateOfIncrease) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((readingMgDl >= 0))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: readingMgDl >= 0.0");
    }
    if (!((readingMgDl > self.safeZoneUpper))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: readingMgDl > self.safeZoneUpper");
    }
    if (!((rateOfIncrease >= 0))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: rateOfIncrease >= 0.0");
    }
    if (!(((rateOfIncrease * 1) <= self.safeMaxDoseUnits))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: rateOfIncrease * 1.0 <= self.safeMaxDoseUnits");
    }
    if (!((self.reservoirUnits >= (rateOfIncrease * 1)))) {
      preViolations.push("[PumpControllerSystem.deliverInsulin] pre violated: self.reservoirUnits >= rateOfIncrease * 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, readingMgDl, rateOfIncrease);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDoseUnits — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastDeliveredDose = result — unbound variable 'result'
      if (!((__result.self.lastReadingMgDl === readingMgDl))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: self.lastReadingMgDl = readingMgDl");
      }
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      if (!((__result.self.reservoirUnits >= 0))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: self.reservoirUnits >= 0.0");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: self.isOperating = true");
      }
      if (!(!(__result.self.faultDetected))) {
        postViolations.push("[PumpControllerSystem.deliverInsulin] post violated: not self.faultDetected");
      }
      // SKIPPED post-clause (not translatable): result = if (rateOfIncrease * 1.0) <= self.safeMaxDoseUnits
                   then rateOfIncrease * 1.0
                   else self.safeMaxDoseUnits
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

/** Impl signature for PumpControllerSystem.detectFault. User supplies this. */
export type PumpControllerSystemDetectFaultImpl = (self: PumpControllerSystem, faultCode: string, isFault: boolean) => { self: PumpControllerSystem; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.detectFault. */
export function wrapPumpControllerSystemDetectFault(impl: PumpControllerSystemDetectFaultImpl): (self: PumpControllerSystem, faultCode: string, isFault: boolean) => PumpControllerSystem {
  return (self, faultCode, isFault) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[PumpControllerSystem.detectFault] pre violated: not self.faultDetected");
    }
    if (!((faultCode !== null))) {
      preViolations.push("[PumpControllerSystem.detectFault] pre violated: faultCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultCode, isFault);
      const postViolations: string[] = [];
      if (!(((isFault) ? ((__result.self.faultDetected === true)) : ((__result.self.faultDetected === false))))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: if isFault then\n            self.faultDetected = true\n          else\n            self.faultDetected = false\n          endif");
      }
      if (!(((__result.self.faultDetected) ? (((__result.self.isOperating === false) && (__result.self.alarmActive === true))) : (((__result.self.isOperating === true) && !(__result.self.alarmActive)))))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: if self.faultDetected then\n            self.isOperating = false and\n            self.alarmActive = true\n          else\n            self.isOperating = true and\n            not self.alarmActive\n          endif");
      }
      if (!((!(__result.self.faultDetected) || (!(__result.self.isOperating) && __result.self.alarmActive)))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: self.faultDetected implies (not self.isOperating and self.alarmActive)");
      }
      if (!((!(__result.self.isOperating) || !(__result.self.faultDetected)))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: self.isOperating implies not self.faultDetected");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.detectFault (async). User supplies this. */
export type PumpControllerSystemDetectFaultAsyncImpl = (self: PumpControllerSystem, faultCode: string, isFault: boolean) => Promise<{ self: PumpControllerSystem; modified: { faultDetected: unknown; isOperating: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.detectFault (async). */
export function wrapPumpControllerSystemDetectFaultAsync(impl: PumpControllerSystemDetectFaultAsyncImpl): (self: PumpControllerSystem, faultCode: string, isFault: boolean) => Promise<PumpControllerSystem> {
  return async (self, faultCode, isFault) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[PumpControllerSystem.detectFault] pre violated: not self.faultDetected");
    }
    if (!((faultCode !== null))) {
      preViolations.push("[PumpControllerSystem.detectFault] pre violated: faultCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultCode, isFault);
      const postViolations: string[] = [];
      if (!(((isFault) ? ((__result.self.faultDetected === true)) : ((__result.self.faultDetected === false))))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: if isFault then\n            self.faultDetected = true\n          else\n            self.faultDetected = false\n          endif");
      }
      if (!(((__result.self.faultDetected) ? (((__result.self.isOperating === false) && (__result.self.alarmActive === true))) : (((__result.self.isOperating === true) && !(__result.self.alarmActive)))))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: if self.faultDetected then\n            self.isOperating = false and\n            self.alarmActive = true\n          else\n            self.isOperating = true and\n            not self.alarmActive\n          endif");
      }
      if (!((!(__result.self.faultDetected) || (!(__result.self.isOperating) && __result.self.alarmActive)))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: self.faultDetected implies (not self.isOperating and self.alarmActive)");
      }
      if (!((!(__result.self.isOperating) || !(__result.self.faultDetected)))) {
        postViolations.push("[PumpControllerSystem.detectFault] post violated: self.isOperating implies not self.faultDetected");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.soundAlarm. User supplies this. */
export type PumpControllerSystemSoundAlarmImpl = (self: PumpControllerSystem) => { self: PumpControllerSystem; modified: { alarmActive: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.soundAlarm. */
export function wrapPumpControllerSystemSoundAlarm(impl: PumpControllerSystemSoundAlarmImpl): (self: PumpControllerSystem) => PumpControllerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[PumpControllerSystem.soundAlarm] pre violated: self.faultDetected = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.soundAlarm] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[PumpControllerSystem.soundAlarm] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.soundAlarm (async). User supplies this. */
export type PumpControllerSystemSoundAlarmAsyncImpl = (self: PumpControllerSystem) => Promise<{ self: PumpControllerSystem; modified: { alarmActive: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.soundAlarm (async). */
export function wrapPumpControllerSystemSoundAlarmAsync(impl: PumpControllerSystemSoundAlarmAsyncImpl): (self: PumpControllerSystem) => Promise<PumpControllerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[PumpControllerSystem.soundAlarm] pre violated: self.faultDetected = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.soundAlarm] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[PumpControllerSystem.soundAlarm] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.alertLowReservoir. User supplies this. */
export type PumpControllerSystemAlertLowReservoirImpl = (self: PumpControllerSystem) => { self: PumpControllerSystem; modified: { alarmActive: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.alertLowReservoir. */
export function wrapPumpControllerSystemAlertLowReservoir(impl: PumpControllerSystemAlertLowReservoirImpl): (self: PumpControllerSystem) => PumpControllerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reservoirUnits > 0))) {
      preViolations.push("[PumpControllerSystem.alertLowReservoir] pre violated: self.reservoirUnits > 0.0");
    }
    if (!((self.reservoirUnits <= self.lowReservoirAlertThreshold))) {
      preViolations.push("[PumpControllerSystem.alertLowReservoir] pre violated: self.reservoirUnits <= self.lowReservoirAlertThreshold");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.alertLowReservoir] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[PumpControllerSystem.alertLowReservoir] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.alertLowReservoir (async). User supplies this. */
export type PumpControllerSystemAlertLowReservoirAsyncImpl = (self: PumpControllerSystem) => Promise<{ self: PumpControllerSystem; modified: { alarmActive: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.alertLowReservoir (async). */
export function wrapPumpControllerSystemAlertLowReservoirAsync(impl: PumpControllerSystemAlertLowReservoirAsyncImpl): (self: PumpControllerSystem) => Promise<PumpControllerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reservoirUnits > 0))) {
      preViolations.push("[PumpControllerSystem.alertLowReservoir] pre violated: self.reservoirUnits > 0.0");
    }
    if (!((self.reservoirUnits <= self.lowReservoirAlertThreshold))) {
      preViolations.push("[PumpControllerSystem.alertLowReservoir] pre violated: self.reservoirUnits <= self.lowReservoirAlertThreshold");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.alertLowReservoir] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[PumpControllerSystem.alertLowReservoir] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.alertMalfunction. User supplies this. */
export type PumpControllerSystemAlertMalfunctionImpl = (self: PumpControllerSystem, faultDescription: string) => { self: PumpControllerSystem; modified: { alarmActive: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.alertMalfunction. */
export function wrapPumpControllerSystemAlertMalfunction(impl: PumpControllerSystemAlertMalfunctionImpl): (self: PumpControllerSystem, faultDescription: string) => PumpControllerSystem {
  return (self, faultDescription) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[PumpControllerSystem.alertMalfunction] pre violated: self.faultDetected = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.alertMalfunction] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultDescription);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[PumpControllerSystem.alertMalfunction] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.alertMalfunction (async). User supplies this. */
export type PumpControllerSystemAlertMalfunctionAsyncImpl = (self: PumpControllerSystem, faultDescription: string) => Promise<{ self: PumpControllerSystem; modified: { alarmActive: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.alertMalfunction (async). */
export function wrapPumpControllerSystemAlertMalfunctionAsync(impl: PumpControllerSystemAlertMalfunctionAsyncImpl): (self: PumpControllerSystem, faultDescription: string) => Promise<PumpControllerSystem> {
  return async (self, faultDescription) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[PumpControllerSystem.alertMalfunction] pre violated: self.faultDetected = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.alertMalfunction] pre violated: not self.alarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultDescription);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[PumpControllerSystem.alertMalfunction] post violated: self.alarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.configureSystem. User supplies this. */
export type PumpControllerSystemConfigureSystemImpl = (self: PumpControllerSystem, safeMax: number, zoneLower: number, zoneUpper: number, lowResThreshold: number) => { self: PumpControllerSystem; modified: { safeMaxDoseUnits: unknown; safeZoneLower: unknown; safeZoneUpper: unknown; lowReservoirAlertThreshold: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.configureSystem. */
export function wrapPumpControllerSystemConfigureSystem(impl: PumpControllerSystemConfigureSystemImpl): (self: PumpControllerSystem, safeMax: number, zoneLower: number, zoneUpper: number, lowResThreshold: number) => PumpControllerSystem {
  return (self, safeMax, zoneLower, zoneUpper, lowResThreshold) => {
    const preViolations: string[] = [];
    if (!((safeMax > 0))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: safeMax > 0.0");
    }
    if (!((zoneLower >= 0))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: zoneLower >= 0.0");
    }
    if (!((zoneUpper > zoneLower))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: zoneUpper > zoneLower");
    }
    if (!((lowResThreshold >= 0))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: lowResThreshold >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, safeMax, zoneLower, zoneUpper, lowResThreshold);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === safeMax))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.safeMaxDoseUnits = safeMax");
      }
      if (!((__result.self.safeZoneLower === zoneLower))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.safeZoneLower = zoneLower");
      }
      if (!((__result.self.safeZoneUpper === zoneUpper))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.safeZoneUpper = zoneUpper");
      }
      if (!((__result.self.lowReservoirAlertThreshold === lowResThreshold))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.lowReservoirAlertThreshold = lowResThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.configureSystem (async). User supplies this. */
export type PumpControllerSystemConfigureSystemAsyncImpl = (self: PumpControllerSystem, safeMax: number, zoneLower: number, zoneUpper: number, lowResThreshold: number) => Promise<{ self: PumpControllerSystem; modified: { safeMaxDoseUnits: unknown; safeZoneLower: unknown; safeZoneUpper: unknown; lowReservoirAlertThreshold: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.configureSystem (async). */
export function wrapPumpControllerSystemConfigureSystemAsync(impl: PumpControllerSystemConfigureSystemAsyncImpl): (self: PumpControllerSystem, safeMax: number, zoneLower: number, zoneUpper: number, lowResThreshold: number) => Promise<PumpControllerSystem> {
  return async (self, safeMax, zoneLower, zoneUpper, lowResThreshold) => {
    const preViolations: string[] = [];
    if (!((safeMax > 0))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: safeMax > 0.0");
    }
    if (!((zoneLower >= 0))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: zoneLower >= 0.0");
    }
    if (!((zoneUpper > zoneLower))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: zoneUpper > zoneLower");
    }
    if (!((lowResThreshold >= 0))) {
      preViolations.push("[PumpControllerSystem.configureSystem] pre violated: lowResThreshold >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, safeMax, zoneLower, zoneUpper, lowResThreshold);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === safeMax))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.safeMaxDoseUnits = safeMax");
      }
      if (!((__result.self.safeZoneLower === zoneLower))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.safeZoneLower = zoneLower");
      }
      if (!((__result.self.safeZoneUpper === zoneUpper))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.safeZoneUpper = zoneUpper");
      }
      if (!((__result.self.lowReservoirAlertThreshold === lowResThreshold))) {
        postViolations.push("[PumpControllerSystem.configureSystem] post violated: self.lowReservoirAlertThreshold = lowResThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.initializeSystem. User supplies this. */
export type PumpControllerSystemInitializeSystemImpl = (self: PumpControllerSystem) => { self: PumpControllerSystem; modified: { isOperating: unknown; lastDeliveredDose: unknown; lastReadingMgDl: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.initializeSystem. */
export function wrapPumpControllerSystemInitializeSystem(impl: PumpControllerSystemInitializeSystemImpl): (self: PumpControllerSystem) => PumpControllerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperating))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: not self.isOperating");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: not self.faultDetected");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: not self.alarmActive");
    }
    if (!((self.safeMaxDoseUnits > 0))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: self.safeMaxDoseUnits > 0.0");
    }
    if (!((self.safeZoneUpper > self.safeZoneLower))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: self.safeZoneUpper > self.safeZoneLower");
    }
    if (!((self.reservoirUnits >= 0))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: self.reservoirUnits >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[PumpControllerSystem.initializeSystem] post violated: self.isOperating = true");
      }
      if (!((__result.self.lastDeliveredDose === 0))) {
        postViolations.push("[PumpControllerSystem.initializeSystem] post violated: self.lastDeliveredDose = 0.0");
      }
      if (!((__result.self.lastReadingMgDl === 0))) {
        postViolations.push("[PumpControllerSystem.initializeSystem] post violated: self.lastReadingMgDl = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.initializeSystem (async). User supplies this. */
export type PumpControllerSystemInitializeSystemAsyncImpl = (self: PumpControllerSystem) => Promise<{ self: PumpControllerSystem; modified: { isOperating: unknown; lastDeliveredDose: unknown; lastReadingMgDl: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.initializeSystem (async). */
export function wrapPumpControllerSystemInitializeSystemAsync(impl: PumpControllerSystemInitializeSystemAsyncImpl): (self: PumpControllerSystem) => Promise<PumpControllerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperating))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: not self.isOperating");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: not self.faultDetected");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: not self.alarmActive");
    }
    if (!((self.safeMaxDoseUnits > 0))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: self.safeMaxDoseUnits > 0.0");
    }
    if (!((self.safeZoneUpper > self.safeZoneLower))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: self.safeZoneUpper > self.safeZoneLower");
    }
    if (!((self.reservoirUnits >= 0))) {
      preViolations.push("[PumpControllerSystem.initializeSystem] pre violated: self.reservoirUnits >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[PumpControllerSystem.initializeSystem] post violated: self.isOperating = true");
      }
      if (!((__result.self.lastDeliveredDose === 0))) {
        postViolations.push("[PumpControllerSystem.initializeSystem] post violated: self.lastDeliveredDose = 0.0");
      }
      if (!((__result.self.lastReadingMgDl === 0))) {
        postViolations.push("[PumpControllerSystem.initializeSystem] post violated: self.lastReadingMgDl = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.refillReservoir. User supplies this. */
export type PumpControllerSystemRefillReservoirImpl = (self: PumpControllerSystem, amount: number) => { self: PumpControllerSystem; modified: { reservoirUnits: unknown } };

/** Contract-checking wrapper for PumpControllerSystem.refillReservoir. */
export function wrapPumpControllerSystemRefillReservoir(impl: PumpControllerSystemRefillReservoirImpl): (self: PumpControllerSystem, amount: number) => PumpControllerSystem {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[PumpControllerSystem.refillReservoir] pre violated: amount > 0.0");
    }
    if (!(((self.reservoirUnits + amount) <= 100))) {
      preViolations.push("[PumpControllerSystem.refillReservoir] pre violated: self.reservoirUnits + amount <= 100.0");
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
        postViolations.push("[PumpControllerSystem.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpControllerSystem.refillReservoir (async). User supplies this. */
export type PumpControllerSystemRefillReservoirAsyncImpl = (self: PumpControllerSystem, amount: number) => Promise<{ self: PumpControllerSystem; modified: { reservoirUnits: unknown } }>;

/** Contract-checking wrapper for PumpControllerSystem.refillReservoir (async). */
export function wrapPumpControllerSystemRefillReservoirAsync(impl: PumpControllerSystemRefillReservoirAsyncImpl): (self: PumpControllerSystem, amount: number) => Promise<PumpControllerSystem> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[PumpControllerSystem.refillReservoir] pre violated: amount > 0.0");
    }
    if (!(((self.reservoirUnits + amount) <= 100))) {
      preViolations.push("[PumpControllerSystem.refillReservoir] pre violated: self.reservoirUnits + amount <= 100.0");
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
        postViolations.push("[PumpControllerSystem.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

