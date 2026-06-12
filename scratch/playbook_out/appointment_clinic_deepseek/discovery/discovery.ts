// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for ClinicVendor. Runtime: string. Compile-time: branded. */
export type ClinicVendorId = string & { readonly __brand: "ClinicVendorId" };
/** Identity type for AppointmentSlot. Runtime: string. Compile-time: branded. */
export type AppointmentSlotId = string & { readonly __brand: "AppointmentSlotId" };
/** Identity type for AvailabilityWindow. Runtime: string. Compile-time: branded. */
export type AvailabilityWindowId = string & { readonly __brand: "AvailabilityWindowId" };
/** Identity type for LateFeeEvent. Runtime: string. Compile-time: branded. */
export type LateFeeEventId = string & { readonly __brand: "LateFeeEventId" };
/** Identity type for NoDoubleBookingCommitment. Runtime: string. Compile-time: branded. */
export type NoDoubleBookingCommitmentId = string & { readonly __brand: "NoDoubleBookingCommitmentId" };
/** Identity type for AvailabilityRespectCommitment. Runtime: string. Compile-time: branded. */
export type AvailabilityRespectCommitmentId = string & { readonly __brand: "AvailabilityRespectCommitmentId" };
/** Identity type for LateCancellationFeeCommitment. Runtime: string. Compile-time: branded. */
export type LateCancellationFeeCommitmentId = string & { readonly __brand: "LateCancellationFeeCommitmentId" };
/** Identity type for PatientConflictPreventionCommitment. Runtime: string. Compile-time: branded. */
export type PatientConflictPreventionCommitmentId = string & { readonly __brand: "PatientConflictPreventionCommitmentId" };
/** Identity type for AppointmentBookingFlow. Runtime: string. Compile-time: branded. */
export type AppointmentBookingFlowId = string & { readonly __brand: "AppointmentBookingFlowId" };
/** Identity type for CancellationFlow. Runtime: string. Compile-time: branded. */
export type CancellationFlowId = string & { readonly __brand: "CancellationFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly name: string;
  readonly billingRecordId: string;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface ClinicVendor {
  readonly vendorId: ClinicVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface AppointmentSlot {
  readonly slotId: AppointmentSlotId;
  readonly startTimeEpoch: number;
  readonly endTimeEpoch: number;
}

/** @stereotype <<Kind>> */
export interface AvailabilityWindow {
  readonly windowId: AvailabilityWindowId;
  readonly windowStartEpoch: number;
  readonly windowEndEpoch: number;
}

/** @stereotype <<Kind>> */
export interface LateFeeEvent {
  readonly feeEventId: LateFeeEventId;
  readonly amount: number;
  readonly timestampEpoch: number;
  readonly relatedAppointmentId: string;
}

/** @stereotype <<Commitment>> */
export interface NoDoubleBookingCommitment {
  readonly commitmentId: NoDoubleBookingCommitmentId;
  readonly maxOverlappingClinicians: number;
}

/** @stereotype <<Commitment>> */
export interface AvailabilityRespectCommitment {
  readonly commitmentId: AvailabilityRespectCommitmentId;
  readonly minWindowEndDelta: number;
}

/** @stereotype <<Commitment>> */
export interface LateCancellationFeeCommitment {
  readonly commitmentId: LateCancellationFeeCommitmentId;
  readonly minLateFeeCount: number;
}

/** @stereotype <<Commitment>> */
export interface PatientConflictPreventionCommitment {
  readonly commitmentId: PatientConflictPreventionCommitmentId;
  readonly maxOverlappingPatient: number;
}

/** @stereotype <<Category>> */
export interface NoDoubleBookingConstraints {
}

/** @stereotype <<Category>> */
export interface AvailabilityRespectConstraints {
}

/** @stereotype <<Category>> */
export interface LateFeeConstraints {
}

/** @stereotype <<Category>> */
export interface PatientConflictConstraints {
}

/** @stereotype <<Happening>> */
export interface AppointmentBookingFlow {
  readonly flowId: AppointmentBookingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly patientId: string;
  readonly clinicianId: string;
  readonly serviceName: string;
  readonly slotStartEpoch: number;
  readonly slotEndEpoch: number;
}

/** @stereotype <<Happening>> */
export interface CancellationFlow {
  readonly flowId: CancellationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly appointmentId: string;
  readonly isLate: boolean;
  readonly lateFeeAmount: number;
}


// ─── Factory functions ───

export function makePatient(data: {
  patientId: string;
  name: string;
  billingRecordId: string;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    name: data.name,
    billingRecordId: data.billingRecordId,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  name: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    name: data.name,
  };
}

export function makeClinicVendor(data: {
  vendorId: string;
  name: string;
}): ClinicVendor {
  return {
    vendorId: data.vendorId as ClinicVendorId,
    name: data.name,
  };
}

export function makeAppointmentSlot(data: {
  slotId: string;
  startTimeEpoch: number;
  endTimeEpoch: number;
}): AppointmentSlot {
  return {
    slotId: data.slotId as AppointmentSlotId,
    startTimeEpoch: data.startTimeEpoch,
    endTimeEpoch: data.endTimeEpoch,
  };
}

export function makeAvailabilityWindow(data: {
  windowId: string;
  windowStartEpoch: number;
  windowEndEpoch: number;
}): AvailabilityWindow {
  return {
    windowId: data.windowId as AvailabilityWindowId,
    windowStartEpoch: data.windowStartEpoch,
    windowEndEpoch: data.windowEndEpoch,
  };
}

export function makeLateFeeEvent(data: {
  feeEventId: string;
  amount: number;
  timestampEpoch: number;
  relatedAppointmentId: string;
}): LateFeeEvent {
  return {
    feeEventId: data.feeEventId as LateFeeEventId,
    amount: data.amount,
    timestampEpoch: data.timestampEpoch,
    relatedAppointmentId: data.relatedAppointmentId,
  };
}

export function makeNoDoubleBookingCommitment(data: {
  commitmentId: string;
  maxOverlappingClinicians: number;
}): NoDoubleBookingCommitment {
  return {
    commitmentId: data.commitmentId as NoDoubleBookingCommitmentId,
    maxOverlappingClinicians: data.maxOverlappingClinicians,
  };
}

export function makeAvailabilityRespectCommitment(data: {
  commitmentId: string;
  minWindowEndDelta: number;
}): AvailabilityRespectCommitment {
  return {
    commitmentId: data.commitmentId as AvailabilityRespectCommitmentId,
    minWindowEndDelta: data.minWindowEndDelta,
  };
}

export function makeLateCancellationFeeCommitment(data: {
  commitmentId: string;
  minLateFeeCount: number;
}): LateCancellationFeeCommitment {
  return {
    commitmentId: data.commitmentId as LateCancellationFeeCommitmentId,
    minLateFeeCount: data.minLateFeeCount,
  };
}

export function makePatientConflictPreventionCommitment(data: {
  commitmentId: string;
  maxOverlappingPatient: number;
}): PatientConflictPreventionCommitment {
  return {
    commitmentId: data.commitmentId as PatientConflictPreventionCommitmentId,
    maxOverlappingPatient: data.maxOverlappingPatient,
  };
}

export function makeAppointmentBookingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  patientId: string;
  clinicianId: string;
  serviceName: string;
  slotStartEpoch: number;
  slotEndEpoch: number;
}): AppointmentBookingFlow {
  return {
    flowId: data.flowId as AppointmentBookingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    patientId: data.patientId,
    clinicianId: data.clinicianId,
    serviceName: data.serviceName,
    slotStartEpoch: data.slotStartEpoch,
    slotEndEpoch: data.slotEndEpoch,
  };
}

export function makeCancellationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  appointmentId: string;
  isLate: boolean;
  lateFeeAmount: number;
}): CancellationFlow {
  return {
    flowId: data.flowId as CancellationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    appointmentId: data.appointmentId,
    isLate: data.isLate,
    lateFeeAmount: data.lateFeeAmount,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Patient] invariant violated: self.name <> null");
  }
  if (!((instance.billingRecordId !== null))) {
    violations.push("[Patient] invariant violated: self.billingRecordId <> null");
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

/** Runtime invariant check for ClinicVendor. Returns empty array when valid. */
export function validateClinicVendor(instance: ClinicVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ClinicVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[ClinicVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for AppointmentSlot. Returns empty array when valid. */
export function validateAppointmentSlot(instance: AppointmentSlot): readonly string[] {
  const violations: string[] = [];
  if (!((instance.slotId !== null))) {
    violations.push("[AppointmentSlot] invariant violated: self.slotId <> null");
  }
  if (!((instance.startTimeEpoch >= 0))) {
    violations.push("[AppointmentSlot] invariant violated: self.startTimeEpoch >= 0.0");
  }
  if (!((instance.endTimeEpoch > instance.startTimeEpoch))) {
    violations.push("[AppointmentSlot] invariant violated: self.endTimeEpoch > self.startTimeEpoch");
  }
  return violations;
}

/** Runtime invariant check for AvailabilityWindow. Returns empty array when valid. */
export function validateAvailabilityWindow(instance: AvailabilityWindow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.windowId !== null))) {
    violations.push("[AvailabilityWindow] invariant violated: self.windowId <> null");
  }
  if (!((instance.windowStartEpoch >= 0))) {
    violations.push("[AvailabilityWindow] invariant violated: self.windowStartEpoch >= 0.0");
  }
  if (!((instance.windowEndEpoch > instance.windowStartEpoch))) {
    violations.push("[AvailabilityWindow] invariant violated: self.windowEndEpoch > self.windowStartEpoch");
  }
  return violations;
}

/** Runtime invariant check for LateFeeEvent. Returns empty array when valid. */
export function validateLateFeeEvent(instance: LateFeeEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.feeEventId !== null))) {
    violations.push("[LateFeeEvent] invariant violated: self.feeEventId <> null");
  }
  if (!((instance.amount >= 0))) {
    violations.push("[LateFeeEvent] invariant violated: self.amount >= 0.0");
  }
  if (!((instance.timestampEpoch >= 0))) {
    violations.push("[LateFeeEvent] invariant violated: self.timestampEpoch >= 0.0");
  }
  if (!((instance.relatedAppointmentId !== null))) {
    violations.push("[LateFeeEvent] invariant violated: self.relatedAppointmentId <> null");
  }
  return violations;
}

/** Runtime invariant check for NoDoubleBookingConstraints. Returns empty array when valid. */
export function validateNoDoubleBookingConstraints(instance: NoDoubleBookingConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[NoDoubleBookingConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AvailabilityRespectConstraints. Returns empty array when valid. */
export function validateAvailabilityRespectConstraints(instance: AvailabilityRespectConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AvailabilityRespectConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for LateFeeConstraints. Returns empty array when valid. */
export function validateLateFeeConstraints(instance: LateFeeConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[LateFeeConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PatientConflictConstraints. Returns empty array when valid. */
export function validatePatientConflictConstraints(instance: PatientConflictConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PatientConflictConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AppointmentBookingFlow. Returns empty array when valid. */
export function validateAppointmentBookingFlow(instance: AppointmentBookingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.outcome <> null");
  }
  if (!((instance.patientId !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.patientId <> null");
  }
  if (!((instance.clinicianId !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.clinicianId <> null");
  }
  if (!((instance.slotStartEpoch >= 0))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.slotStartEpoch >= 0.0");
  }
  if (!((instance.slotEndEpoch > instance.slotStartEpoch))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.slotEndEpoch > self.slotStartEpoch");
  }
  return violations;
}

/** Runtime invariant check for CancellationFlow. Returns empty array when valid. */
export function validateCancellationFlow(instance: CancellationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.outcome <> null");
  }
  if (!((instance.appointmentId !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.appointmentId <> null");
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

/** Lifecycle registry for NoDoubleBookingCommitment commitments. */
export class NoDoubleBookingCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<NoDoubleBookingCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a NoDoubleBookingCommitment — the typed wrapper guarantees that since
    // `register` only accepts NoDoubleBookingCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: NoDoubleBookingCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: NoDoubleBookingCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: NoDoubleBookingCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: NoDoubleBookingCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<NoDoubleBookingCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<NoDoubleBookingCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AvailabilityRespectCommitment commitments. */
export class AvailabilityRespectCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AvailabilityRespectCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AvailabilityRespectCommitment — the typed wrapper guarantees that since
    // `register` only accepts AvailabilityRespectCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AvailabilityRespectCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AvailabilityRespectCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AvailabilityRespectCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AvailabilityRespectCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AvailabilityRespectCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AvailabilityRespectCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for LateCancellationFeeCommitment commitments. */
export class LateCancellationFeeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<LateCancellationFeeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a LateCancellationFeeCommitment — the typed wrapper guarantees that since
    // `register` only accepts LateCancellationFeeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: LateCancellationFeeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: LateCancellationFeeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: LateCancellationFeeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: LateCancellationFeeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<LateCancellationFeeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<LateCancellationFeeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PatientConflictPreventionCommitment commitments. */
export class PatientConflictPreventionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PatientConflictPreventionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PatientConflictPreventionCommitment — the typed wrapper guarantees that since
    // `register` only accepts PatientConflictPreventionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PatientConflictPreventionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PatientConflictPreventionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PatientConflictPreventionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PatientConflictPreventionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PatientConflictPreventionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PatientConflictPreventionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

