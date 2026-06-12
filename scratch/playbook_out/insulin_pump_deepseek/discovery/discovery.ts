// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───


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

