// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for HospitalITDepartment. Runtime: string. Compile-time: branded. */
export type HospitalITDepartmentId = string & { readonly __brand: "HospitalITDepartmentId" };
/** Identity type for VitalSignsMonitorVendor. Runtime: string. Compile-time: branded. */
export type VitalSignsMonitorVendorId = string & { readonly __brand: "VitalSignsMonitorVendorId" };
/** Identity type for ImplausibleReadingRejectionCommitment. Runtime: string. Compile-time: branded. */
export type ImplausibleReadingRejectionCommitmentId = string & { readonly __brand: "ImplausibleReadingRejectionCommitmentId" };
/** Identity type for AlarmLatencyCommitment. Runtime: string. Compile-time: branded. */
export type AlarmLatencyCommitmentId = string & { readonly __brand: "AlarmLatencyCommitmentId" };
/** Identity type for SensorDisconnectDetectionCommitment. Runtime: string. Compile-time: branded. */
export type SensorDisconnectDetectionCommitmentId = string & { readonly __brand: "SensorDisconnectDetectionCommitmentId" };
/** Identity type for AlarmSilenceAutoRearmCommitment. Runtime: string. Compile-time: branded. */
export type AlarmSilenceAutoRearmCommitmentId = string & { readonly __brand: "AlarmSilenceAutoRearmCommitmentId" };
/** Identity type for MonitorVisionCommitment. Runtime: string. Compile-time: branded. */
export type MonitorVisionCommitmentId = string & { readonly __brand: "MonitorVisionCommitmentId" };
/** Identity type for HeartRateReading. Runtime: string. Compile-time: branded. */
export type HeartRateReadingId = string & { readonly __brand: "HeartRateReadingId" };
/** Identity type for AlarmThreshold. Runtime: string. Compile-time: branded. */
export type AlarmThresholdId = string & { readonly __brand: "AlarmThresholdId" };
/** Identity type for SilencedState. Runtime: string. Compile-time: branded. */
export type SilencedStateId = string & { readonly __brand: "SilencedStateId" };
/** Identity type for SensorDisconnectEvent. Runtime: string. Compile-time: branded. */
export type SensorDisconnectEventId = string & { readonly __brand: "SensorDisconnectEventId" };
/** Identity type for NormalMonitoringFlow. Runtime: string. Compile-time: branded. */
export type NormalMonitoringFlowId = string & { readonly __brand: "NormalMonitoringFlowId" };
/** Identity type for ThresholdAlarmFlow. Runtime: string. Compile-time: branded. */
export type ThresholdAlarmFlowId = string & { readonly __brand: "ThresholdAlarmFlowId" };
/** Identity type for AlarmSilenceRearmFlow. Runtime: string. Compile-time: branded. */
export type AlarmSilenceRearmFlowId = string & { readonly __brand: "AlarmSilenceRearmFlowId" };
/** Identity type for SensorDisconnectFlow. Runtime: string. Compile-time: branded. */
export type SensorDisconnectFlowId = string & { readonly __brand: "SensorDisconnectFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly bedId: string;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
  readonly clinicianRole: string;
}

/** @stereotype <<Agent>> */
export interface HospitalITDepartment {
  readonly itDeptId: HospitalITDepartmentId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface VitalSignsMonitorVendor {
  readonly vendorId: VitalSignsMonitorVendorId;
  readonly name: string;
  readonly regulatoryBodyRef: string;
}

/** @stereotype <<Commitment>> */
export interface ImplausibleReadingRejectionCommitment {
  readonly commitmentId: ImplausibleReadingRejectionCommitmentId;
  readonly plausibilityLowerBpm: number;
  readonly plausibilityUpperBpm: number;
}

/** @stereotype <<Commitment>> */
export interface AlarmLatencyCommitment {
  readonly commitmentId: AlarmLatencyCommitmentId;
  readonly maxAlarmLatencySeconds: number;
}

/** @stereotype <<Commitment>> */
export interface SensorDisconnectDetectionCommitment {
  readonly commitmentId: SensorDisconnectDetectionCommitmentId;
  readonly disconnectTimeoutSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface AlarmSilenceAutoRearmCommitment {
  readonly commitmentId: AlarmSilenceAutoRearmCommitmentId;
  readonly maxSilenceDurationSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface MonitorVisionCommitment {
  readonly commitmentId: MonitorVisionCommitmentId;
  readonly description: string;
}

/** @stereotype <<Category>> */
export interface HeartRatePlausibilityConstraints {
}

/** @stereotype <<Category>> */
export interface AlarmThresholdConstraints {
}

/** @stereotype <<Category>> */
export interface SilenceDurationConstraints {
}

/** @stereotype <<Kind>> */
export interface HeartRateReading {
  readonly readingId: HeartRateReadingId;
  readonly valueBpm: number;
  readonly timestampMs: number;
  readonly sourcePatientId: string;
}

/** @stereotype <<Kind>> */
export interface AlarmThreshold {
  readonly thresholdId: AlarmThresholdId;
  readonly vitalSign: string;
  readonly lowBpm: number;
  readonly highBpm: number;
}

/** @stereotype <<Kind>> */
export interface SilencedState {
  readonly silenceId: SilencedStateId;
  readonly acknowledgedByClinicianId: string;
  readonly silenceStartTimestampMs: number;
  readonly maxSilenceDurationSeconds: number;
}

/** @stereotype <<Kind>> */
export interface SensorDisconnectEvent {
  readonly disconnectEventId: SensorDisconnectEventId;
  readonly patientId: string;
  readonly signalLostTimestampMs: number;
  readonly signalRestoredTimestampMs: number;
  readonly durationSeconds: number;
}

/** @stereotype <<Happening>> */
export interface NormalMonitoringFlow {
  readonly flowId: NormalMonitoringFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ThresholdAlarmFlow {
  readonly flowId: ThresholdAlarmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly thresholdCrossedTimestampMs: number;
  readonly alarmRaisedTimestampMs: number;
}

/** @stereotype <<Happening>> */
export interface AlarmSilenceRearmFlow {
  readonly flowId: AlarmSilenceRearmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly silenceStartTimestampMs: number;
  readonly rearmTimestampMs: number;
}

/** @stereotype <<Happening>> */
export interface SensorDisconnectFlow {
  readonly flowId: SensorDisconnectFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly signalLostTimestampMs: number;
  readonly alarmRaisedTimestampMs: number;
}


// ─── Factory functions ───

export function makePatient(data: {
  patientId: string;
  bedId: string;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    bedId: data.bedId,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  name: string;
  clinicianRole: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    name: data.name,
    clinicianRole: data.clinicianRole,
  };
}

export function makeHospitalITDepartment(data: {
  itDeptId: string;
  name: string;
}): HospitalITDepartment {
  return {
    itDeptId: data.itDeptId as HospitalITDepartmentId,
    name: data.name,
  };
}

export function makeVitalSignsMonitorVendor(data: {
  vendorId: string;
  name: string;
  regulatoryBodyRef: string;
}): VitalSignsMonitorVendor {
  return {
    vendorId: data.vendorId as VitalSignsMonitorVendorId,
    name: data.name,
    regulatoryBodyRef: data.regulatoryBodyRef,
  };
}

export function makeImplausibleReadingRejectionCommitment(data: {
  commitmentId: string;
  plausibilityLowerBpm: number;
  plausibilityUpperBpm: number;
}): ImplausibleReadingRejectionCommitment {
  return {
    commitmentId: data.commitmentId as ImplausibleReadingRejectionCommitmentId,
    plausibilityLowerBpm: data.plausibilityLowerBpm,
    plausibilityUpperBpm: data.plausibilityUpperBpm,
  };
}

export function makeAlarmLatencyCommitment(data: {
  commitmentId: string;
  maxAlarmLatencySeconds: number;
}): AlarmLatencyCommitment {
  return {
    commitmentId: data.commitmentId as AlarmLatencyCommitmentId,
    maxAlarmLatencySeconds: data.maxAlarmLatencySeconds,
  };
}

export function makeSensorDisconnectDetectionCommitment(data: {
  commitmentId: string;
  disconnectTimeoutSeconds: number;
}): SensorDisconnectDetectionCommitment {
  return {
    commitmentId: data.commitmentId as SensorDisconnectDetectionCommitmentId,
    disconnectTimeoutSeconds: data.disconnectTimeoutSeconds,
  };
}

export function makeAlarmSilenceAutoRearmCommitment(data: {
  commitmentId: string;
  maxSilenceDurationSeconds: number;
}): AlarmSilenceAutoRearmCommitment {
  return {
    commitmentId: data.commitmentId as AlarmSilenceAutoRearmCommitmentId,
    maxSilenceDurationSeconds: data.maxSilenceDurationSeconds,
  };
}

export function makeMonitorVisionCommitment(data: {
  commitmentId: string;
  description: string;
}): MonitorVisionCommitment {
  return {
    commitmentId: data.commitmentId as MonitorVisionCommitmentId,
    description: data.description,
  };
}

export function makeHeartRateReading(data: {
  readingId: string;
  valueBpm: number;
  timestampMs: number;
  sourcePatientId: string;
}): HeartRateReading {
  return {
    readingId: data.readingId as HeartRateReadingId,
    valueBpm: data.valueBpm,
    timestampMs: data.timestampMs,
    sourcePatientId: data.sourcePatientId,
  };
}

export function makeAlarmThreshold(data: {
  thresholdId: string;
  vitalSign: string;
  lowBpm: number;
  highBpm: number;
}): AlarmThreshold {
  return {
    thresholdId: data.thresholdId as AlarmThresholdId,
    vitalSign: data.vitalSign,
    lowBpm: data.lowBpm,
    highBpm: data.highBpm,
  };
}

export function makeSilencedState(data: {
  silenceId: string;
  acknowledgedByClinicianId: string;
  silenceStartTimestampMs: number;
  maxSilenceDurationSeconds: number;
}): SilencedState {
  return {
    silenceId: data.silenceId as SilencedStateId,
    acknowledgedByClinicianId: data.acknowledgedByClinicianId,
    silenceStartTimestampMs: data.silenceStartTimestampMs,
    maxSilenceDurationSeconds: data.maxSilenceDurationSeconds,
  };
}

export function makeSensorDisconnectEvent(data: {
  disconnectEventId: string;
  patientId: string;
  signalLostTimestampMs: number;
  signalRestoredTimestampMs: number;
  durationSeconds: number;
}): SensorDisconnectEvent {
  return {
    disconnectEventId: data.disconnectEventId as SensorDisconnectEventId,
    patientId: data.patientId,
    signalLostTimestampMs: data.signalLostTimestampMs,
    signalRestoredTimestampMs: data.signalRestoredTimestampMs,
    durationSeconds: data.durationSeconds,
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

export function makeThresholdAlarmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  thresholdCrossedTimestampMs: number;
  alarmRaisedTimestampMs: number;
}): ThresholdAlarmFlow {
  return {
    flowId: data.flowId as ThresholdAlarmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    thresholdCrossedTimestampMs: data.thresholdCrossedTimestampMs,
    alarmRaisedTimestampMs: data.alarmRaisedTimestampMs,
  };
}

export function makeAlarmSilenceRearmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  silenceStartTimestampMs: number;
  rearmTimestampMs: number;
}): AlarmSilenceRearmFlow {
  return {
    flowId: data.flowId as AlarmSilenceRearmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    silenceStartTimestampMs: data.silenceStartTimestampMs,
    rearmTimestampMs: data.rearmTimestampMs,
  };
}

export function makeSensorDisconnectFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  signalLostTimestampMs: number;
  alarmRaisedTimestampMs: number;
}): SensorDisconnectFlow {
  return {
    flowId: data.flowId as SensorDisconnectFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    signalLostTimestampMs: data.signalLostTimestampMs,
    alarmRaisedTimestampMs: data.alarmRaisedTimestampMs,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.bedId !== null))) {
    violations.push("[Patient] invariant violated: self.bedId <> null");
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

/** Runtime invariant check for HospitalITDepartment. Returns empty array when valid. */
export function validateHospitalITDepartment(instance: HospitalITDepartment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.itDeptId !== null))) {
    violations.push("[HospitalITDepartment] invariant violated: self.itDeptId <> null");
  }
  return violations;
}

/** Runtime invariant check for VitalSignsMonitorVendor. Returns empty array when valid. */
export function validateVitalSignsMonitorVendor(instance: VitalSignsMonitorVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[VitalSignsMonitorVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[VitalSignsMonitorVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for HeartRatePlausibilityConstraints. Returns empty array when valid. */
export function validateHeartRatePlausibilityConstraints(instance: HeartRatePlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.valueBpm >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.valueBpm <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AlarmThresholdConstraints. Returns empty array when valid. */
export function validateAlarmThresholdConstraints(instance: AlarmThresholdConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.lowBpm >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.highBpm <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.highBpm > bearer.lowBpm — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SilenceDurationConstraints. Returns empty array when valid. */
export function validateSilenceDurationConstraints(instance: SilenceDurationConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSilenceDurationSeconds > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSilenceDurationSeconds <= 120.0 — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((instance.timestampMs >= 0))) {
    violations.push("[HeartRateReading] invariant violated: self.timestampMs >= 0");
  }
  return violations;
}

/** Runtime invariant check for AlarmThreshold. Returns empty array when valid. */
export function validateAlarmThreshold(instance: AlarmThreshold): readonly string[] {
  const violations: string[] = [];
  if (!((instance.thresholdId !== null))) {
    violations.push("[AlarmThreshold] invariant violated: self.thresholdId <> null");
  }
  if (!((instance.vitalSign !== null))) {
    violations.push("[AlarmThreshold] invariant violated: self.vitalSign <> null");
  }
  if (!((instance.lowBpm >= 0))) {
    violations.push("[AlarmThreshold] invariant violated: self.lowBpm >= 0.0");
  }
  if (!((instance.highBpm > instance.lowBpm))) {
    violations.push("[AlarmThreshold] invariant violated: self.highBpm > self.lowBpm");
  }
  return violations;
}

/** Runtime invariant check for SilencedState. Returns empty array when valid. */
export function validateSilencedState(instance: SilencedState): readonly string[] {
  const violations: string[] = [];
  if (!((instance.silenceId !== null))) {
    violations.push("[SilencedState] invariant violated: self.silenceId <> null");
  }
  if (!((instance.acknowledgedByClinicianId !== null))) {
    violations.push("[SilencedState] invariant violated: self.acknowledgedByClinicianId <> null");
  }
  if (!((instance.silenceStartTimestampMs >= 0))) {
    violations.push("[SilencedState] invariant violated: self.silenceStartTimestampMs >= 0");
  }
  if (!((instance.maxSilenceDurationSeconds > 0))) {
    violations.push("[SilencedState] invariant violated: self.maxSilenceDurationSeconds > 0.0");
  }
  if (!((instance.maxSilenceDurationSeconds <= 120))) {
    violations.push("[SilencedState] invariant violated: self.maxSilenceDurationSeconds <= 120.0");
  }
  return violations;
}

/** Runtime invariant check for SensorDisconnectEvent. Returns empty array when valid. */
export function validateSensorDisconnectEvent(instance: SensorDisconnectEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.disconnectEventId !== null))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.disconnectEventId <> null");
  }
  if (!((instance.patientId !== null))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.patientId <> null");
  }
  if (!((instance.signalLostTimestampMs >= 0))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.signalLostTimestampMs >= 0");
  }
  if (!((instance.durationSeconds >= 0))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.durationSeconds >= 0.0");
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

/** Runtime invariant check for ThresholdAlarmFlow. Returns empty array when valid. */
export function validateThresholdAlarmFlow(instance: ThresholdAlarmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ThresholdAlarmFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.alarmRaisedTimestampMs >= instance.thresholdCrossedTimestampMs))) {
    violations.push("[ThresholdAlarmFlow] invariant violated: self.alarmRaisedTimestampMs >= self.thresholdCrossedTimestampMs");
  }
  return violations;
}

/** Runtime invariant check for AlarmSilenceRearmFlow. Returns empty array when valid. */
export function validateAlarmSilenceRearmFlow(instance: AlarmSilenceRearmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AlarmSilenceRearmFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.rearmTimestampMs >= instance.silenceStartTimestampMs))) {
    violations.push("[AlarmSilenceRearmFlow] invariant violated: self.rearmTimestampMs >= self.silenceStartTimestampMs");
  }
  return violations;
}

/** Runtime invariant check for SensorDisconnectFlow. Returns empty array when valid. */
export function validateSensorDisconnectFlow(instance: SensorDisconnectFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorDisconnectFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.alarmRaisedTimestampMs >= instance.signalLostTimestampMs))) {
    violations.push("[SensorDisconnectFlow] invariant violated: self.alarmRaisedTimestampMs >= self.signalLostTimestampMs");
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

/** Lifecycle registry for ImplausibleReadingRejectionCommitment commitments. */
export class ImplausibleReadingRejectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ImplausibleReadingRejectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ImplausibleReadingRejectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts ImplausibleReadingRejectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ImplausibleReadingRejectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ImplausibleReadingRejectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ImplausibleReadingRejectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ImplausibleReadingRejectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ImplausibleReadingRejectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ImplausibleReadingRejectionCommitment>[];
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

/** Lifecycle registry for SensorDisconnectDetectionCommitment commitments. */
export class SensorDisconnectDetectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SensorDisconnectDetectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SensorDisconnectDetectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts SensorDisconnectDetectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SensorDisconnectDetectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SensorDisconnectDetectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SensorDisconnectDetectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SensorDisconnectDetectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SensorDisconnectDetectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SensorDisconnectDetectionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AlarmSilenceAutoRearmCommitment commitments. */
export class AlarmSilenceAutoRearmCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AlarmSilenceAutoRearmCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AlarmSilenceAutoRearmCommitment — the typed wrapper guarantees that since
    // `register` only accepts AlarmSilenceAutoRearmCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AlarmSilenceAutoRearmCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AlarmSilenceAutoRearmCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AlarmSilenceAutoRearmCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AlarmSilenceAutoRearmCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AlarmSilenceAutoRearmCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AlarmSilenceAutoRearmCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for MonitorVisionCommitment commitments. */
export class MonitorVisionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MonitorVisionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MonitorVisionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MonitorVisionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MonitorVisionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MonitorVisionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MonitorVisionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MonitorVisionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MonitorVisionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MonitorVisionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

