// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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

