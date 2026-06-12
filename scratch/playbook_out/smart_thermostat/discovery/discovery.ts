// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Setpoint. Runtime: string. Compile-time: branded. */
export type SetpointId = string & { readonly __brand: "SetpointId" };
/** Identity type for SensorReading. Runtime: string. Compile-time: branded. */
export type SensorReadingId = string & { readonly __brand: "SensorReadingId" };
/** Identity type for ActuatorCommand. Runtime: string. Compile-time: branded. */
export type ActuatorCommandId = string & { readonly __brand: "ActuatorCommandId" };
/** Identity type for SafeHaltEvent. Runtime: string. Compile-time: branded. */
export type SafeHaltEventId = string & { readonly __brand: "SafeHaltEventId" };
/** Identity type for CompressorCycleRecord. Runtime: string. Compile-time: branded. */
export type CompressorCycleRecordId = string & { readonly __brand: "CompressorCycleRecordId" };
/** Identity type for HomeOwner. Runtime: string. Compile-time: branded. */
export type HomeOwnerId = string & { readonly __brand: "HomeOwnerId" };
/** Identity type for HVACTechnician. Runtime: string. Compile-time: branded. */
export type HVACTechnicianId = string & { readonly __brand: "HVACTechnicianId" };
/** Identity type for ThermostatVendor. Runtime: string. Compile-time: branded. */
export type ThermostatVendorId = string & { readonly __brand: "ThermostatVendorId" };
/** Identity type for SetpointRangeCommitment. Runtime: string. Compile-time: branded. */
export type SetpointRangeCommitmentId = string & { readonly __brand: "SetpointRangeCommitmentId" };
/** Identity type for SafeHaltCommitment. Runtime: string. Compile-time: branded. */
export type SafeHaltCommitmentId = string & { readonly __brand: "SafeHaltCommitmentId" };
/** Identity type for CompressorProtectionCommitment. Runtime: string. Compile-time: branded. */
export type CompressorProtectionCommitmentId = string & { readonly __brand: "CompressorProtectionCommitmentId" };
/** Identity type for DisplayVisibilityCommitment. Runtime: string. Compile-time: branded. */
export type DisplayVisibilityCommitmentId = string & { readonly __brand: "DisplayVisibilityCommitmentId" };
/** Identity type for ThermostatVisionCommitment. Runtime: string. Compile-time: branded. */
export type ThermostatVisionCommitmentId = string & { readonly __brand: "ThermostatVisionCommitmentId" };
/** Identity type for NormalControlCycleFlow. Runtime: string. Compile-time: branded. */
export type NormalControlCycleFlowId = string & { readonly __brand: "NormalControlCycleFlowId" };
/** Identity type for SensorFaultHaltFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultHaltFlowId = string & { readonly __brand: "SensorFaultHaltFlowId" };
/** Identity type for UserSetpointAdjustmentFlow. Runtime: string. Compile-time: branded. */
export type UserSetpointAdjustmentFlowId = string & { readonly __brand: "UserSetpointAdjustmentFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface Setpoint {
  readonly setpointId: SetpointId;
  readonly requestedTempF: number;
  readonly clampedTempF: number;
}

/** @stereotype <<Kind>> */
export interface SensorReading {
  readonly readingId: SensorReadingId;
  readonly valueFahrenheit: number;
  readonly isPlausible: boolean;
}

/** @stereotype <<Kind>> */
export interface ActuatorCommand {
  readonly commandId: ActuatorCommandId;
  readonly signal: string;
  readonly issuedAtMinute: number;
}

/** @stereotype <<Kind>> */
export interface SafeHaltEvent {
  readonly haltId: SafeHaltEventId;
  readonly triggeringReadingId: string;
  readonly alertRaised: boolean;
}

/** @stereotype <<Kind>> */
export interface CompressorCycleRecord {
  readonly cycleId: CompressorCycleRecordId;
  readonly lastTransitionMinute: number;
  readonly minimumIntervalMinutes: number;
}

/** @stereotype <<Agent>> */
export interface HomeOwner {
  readonly ownerId: HomeOwnerId;
  readonly name: string;
  readonly contactInfo: string;
}

/** @stereotype <<Agent>> */
export interface HVACTechnician {
  readonly technicianId: HVACTechnicianId;
  readonly name: string;
  readonly certificationCode: string;
}

/** @stereotype <<Agent>> */
export interface ThermostatVendor {
  readonly vendorId: ThermostatVendorId;
  readonly name: string;
  readonly supportEmail: string;
}

/** @stereotype <<Category>> */
export interface SetpointSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface SensorPlausibilityConstraints {
}

/** @stereotype <<Category>> */
export interface CompressorCyclingConstraints {
}

/** @stereotype <<Commitment>> */
export interface SetpointRangeCommitment {
  readonly commitmentId: SetpointRangeCommitmentId;
  readonly safeMinTempF: number;
  readonly safeMaxTempF: number;
}

/** @stereotype <<Commitment>> */
export interface SafeHaltCommitment {
  readonly commitmentId: SafeHaltCommitmentId;
  readonly plausibleMinF: number;
  readonly plausibleMaxF: number;
}

/** @stereotype <<Commitment>> */
export interface CompressorProtectionCommitment {
  readonly commitmentId: CompressorProtectionCommitmentId;
  readonly minCycleIntervalMinutes: number;
}

/** @stereotype <<Commitment>> */
export interface DisplayVisibilityCommitment {
  readonly commitmentId: DisplayVisibilityCommitmentId;
  readonly displayRefreshSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface ThermostatVisionCommitment {
  readonly commitmentId: ThermostatVisionCommitmentId;
  readonly visionStatement: string;
}

/** @stereotype <<Happening>> */
export interface NormalControlCycleFlow {
  readonly flowId: NormalControlCycleFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultHaltFlow {
  readonly flowId: SensorFaultHaltFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface UserSetpointAdjustmentFlow {
  readonly flowId: UserSetpointAdjustmentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeSetpoint(data: {
  setpointId: string;
  requestedTempF: number;
  clampedTempF: number;
}): Setpoint {
  return {
    setpointId: data.setpointId as SetpointId,
    requestedTempF: data.requestedTempF,
    clampedTempF: data.clampedTempF,
  };
}

export function makeSensorReading(data: {
  readingId: string;
  valueFahrenheit: number;
  isPlausible: boolean;
}): SensorReading {
  return {
    readingId: data.readingId as SensorReadingId,
    valueFahrenheit: data.valueFahrenheit,
    isPlausible: data.isPlausible,
  };
}

export function makeActuatorCommand(data: {
  commandId: string;
  signal: string;
  issuedAtMinute: number;
}): ActuatorCommand {
  return {
    commandId: data.commandId as ActuatorCommandId,
    signal: data.signal,
    issuedAtMinute: data.issuedAtMinute,
  };
}

export function makeSafeHaltEvent(data: {
  haltId: string;
  triggeringReadingId: string;
  alertRaised: boolean;
}): SafeHaltEvent {
  return {
    haltId: data.haltId as SafeHaltEventId,
    triggeringReadingId: data.triggeringReadingId,
    alertRaised: data.alertRaised,
  };
}

export function makeCompressorCycleRecord(data: {
  cycleId: string;
  lastTransitionMinute: number;
  minimumIntervalMinutes: number;
}): CompressorCycleRecord {
  return {
    cycleId: data.cycleId as CompressorCycleRecordId,
    lastTransitionMinute: data.lastTransitionMinute,
    minimumIntervalMinutes: data.minimumIntervalMinutes,
  };
}

export function makeHomeOwner(data: {
  ownerId: string;
  name: string;
  contactInfo: string;
}): HomeOwner {
  return {
    ownerId: data.ownerId as HomeOwnerId,
    name: data.name,
    contactInfo: data.contactInfo,
  };
}

export function makeHVACTechnician(data: {
  technicianId: string;
  name: string;
  certificationCode: string;
}): HVACTechnician {
  return {
    technicianId: data.technicianId as HVACTechnicianId,
    name: data.name,
    certificationCode: data.certificationCode,
  };
}

export function makeThermostatVendor(data: {
  vendorId: string;
  name: string;
  supportEmail: string;
}): ThermostatVendor {
  return {
    vendorId: data.vendorId as ThermostatVendorId,
    name: data.name,
    supportEmail: data.supportEmail,
  };
}

export function makeSetpointRangeCommitment(data: {
  commitmentId: string;
  safeMinTempF: number;
  safeMaxTempF: number;
}): SetpointRangeCommitment {
  return {
    commitmentId: data.commitmentId as SetpointRangeCommitmentId,
    safeMinTempF: data.safeMinTempF,
    safeMaxTempF: data.safeMaxTempF,
  };
}

export function makeSafeHaltCommitment(data: {
  commitmentId: string;
  plausibleMinF: number;
  plausibleMaxF: number;
}): SafeHaltCommitment {
  return {
    commitmentId: data.commitmentId as SafeHaltCommitmentId,
    plausibleMinF: data.plausibleMinF,
    plausibleMaxF: data.plausibleMaxF,
  };
}

export function makeCompressorProtectionCommitment(data: {
  commitmentId: string;
  minCycleIntervalMinutes: number;
}): CompressorProtectionCommitment {
  return {
    commitmentId: data.commitmentId as CompressorProtectionCommitmentId,
    minCycleIntervalMinutes: data.minCycleIntervalMinutes,
  };
}

export function makeDisplayVisibilityCommitment(data: {
  commitmentId: string;
  displayRefreshSeconds: number;
}): DisplayVisibilityCommitment {
  return {
    commitmentId: data.commitmentId as DisplayVisibilityCommitmentId,
    displayRefreshSeconds: data.displayRefreshSeconds,
  };
}

export function makeThermostatVisionCommitment(data: {
  commitmentId: string;
  visionStatement: string;
}): ThermostatVisionCommitment {
  return {
    commitmentId: data.commitmentId as ThermostatVisionCommitmentId,
    visionStatement: data.visionStatement,
  };
}

export function makeNormalControlCycleFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): NormalControlCycleFlow {
  return {
    flowId: data.flowId as NormalControlCycleFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSensorFaultHaltFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorFaultHaltFlow {
  return {
    flowId: data.flowId as SensorFaultHaltFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeUserSetpointAdjustmentFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): UserSetpointAdjustmentFlow {
  return {
    flowId: data.flowId as UserSetpointAdjustmentFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Setpoint. Returns empty array when valid. */
export function validateSetpoint(instance: Setpoint): readonly string[] {
  const violations: string[] = [];
  if (!((instance.setpointId !== null))) {
    violations.push("[Setpoint] invariant violated: self.setpointId <> null");
  }
  if (!((instance.clampedTempF >= 40))) {
    violations.push("[Setpoint] invariant violated: self.clampedTempF >= 40.0");
  }
  if (!((instance.clampedTempF <= 90))) {
    violations.push("[Setpoint] invariant violated: self.clampedTempF <= 90.0");
  }
  if (!((instance.requestedTempF !== null))) {
    violations.push("[Setpoint] invariant violated: self.requestedTempF <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorReading. Returns empty array when valid. */
export function validateSensorReading(instance: SensorReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[SensorReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.isPlausible === ((instance.valueFahrenheit >= -(40)) && (instance.valueFahrenheit <= 150))))) {
    violations.push("[SensorReading] invariant violated: self.isPlausible = (self.valueFahrenheit >= -40.0 and self.valueFahrenheit <= 150.0)");
  }
  return violations;
}

/** Runtime invariant check for ActuatorCommand. Returns empty array when valid. */
export function validateActuatorCommand(instance: ActuatorCommand): readonly string[] {
  const violations: string[] = [];
  if (!((instance.commandId !== null))) {
    violations.push("[ActuatorCommand] invariant violated: self.commandId <> null");
  }
  if (!((instance.signal !== null))) {
    violations.push("[ActuatorCommand] invariant violated: self.signal <> null");
  }
  return violations;
}

/** Runtime invariant check for SafeHaltEvent. Returns empty array when valid. */
export function validateSafeHaltEvent(instance: SafeHaltEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.haltId !== null))) {
    violations.push("[SafeHaltEvent] invariant violated: self.haltId <> null");
  }
  if (!((instance.triggeringReadingId !== null))) {
    violations.push("[SafeHaltEvent] invariant violated: self.triggeringReadingId <> null");
  }
  if (!((instance.alertRaised === true))) {
    violations.push("[SafeHaltEvent] invariant violated: self.alertRaised = true");
  }
  return violations;
}

/** Runtime invariant check for CompressorCycleRecord. Returns empty array when valid. */
export function validateCompressorCycleRecord(instance: CompressorCycleRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[CompressorCycleRecord] invariant violated: self.cycleId <> null");
  }
  if (!((instance.minimumIntervalMinutes === 5))) {
    violations.push("[CompressorCycleRecord] invariant violated: self.minimumIntervalMinutes = 5.0");
  }
  if (!((instance.lastTransitionMinute >= 0))) {
    violations.push("[CompressorCycleRecord] invariant violated: self.lastTransitionMinute >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for HomeOwner. Returns empty array when valid. */
export function validateHomeOwner(instance: HomeOwner): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ownerId !== null))) {
    violations.push("[HomeOwner] invariant violated: self.ownerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[HomeOwner] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for HVACTechnician. Returns empty array when valid. */
export function validateHVACTechnician(instance: HVACTechnician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.technicianId !== null))) {
    violations.push("[HVACTechnician] invariant violated: self.technicianId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[HVACTechnician] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for ThermostatVendor. Returns empty array when valid. */
export function validateThermostatVendor(instance: ThermostatVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ThermostatVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[ThermostatVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for SetpointSafetyConstraints. Returns empty array when valid. */
export function validateSetpointSafetyConstraints(instance: SetpointSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.clampedTempF >= 40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.clampedTempF <= 90.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorPlausibilityConstraints. Returns empty array when valid. */
export function validateSensorPlausibilityConstraints(instance: SensorPlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.isPlausible = (bearer.valueFahrenheit >= -40.0 and bearer.valueFahrenheit <= 150.0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for CompressorCyclingConstraints. Returns empty array when valid. */
export function validateCompressorCyclingConstraints(instance: CompressorCyclingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minimumIntervalMinutes >= 5.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for NormalControlCycleFlow. Returns empty array when valid. */
export function validateNormalControlCycleFlow(instance: NormalControlCycleFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NormalControlCycleFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[NormalControlCycleFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[NormalControlCycleFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultHaltFlow. Returns empty array when valid. */
export function validateSensorFaultHaltFlow(instance: SensorFaultHaltFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultHaltFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[SensorFaultHaltFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SensorFaultHaltFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for UserSetpointAdjustmentFlow. Returns empty array when valid. */
export function validateUserSetpointAdjustmentFlow(instance: UserSetpointAdjustmentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[UserSetpointAdjustmentFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[UserSetpointAdjustmentFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[UserSetpointAdjustmentFlow] invariant violated: self.outcome <> null");
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

/** Lifecycle registry for SetpointRangeCommitment commitments. */
export class SetpointRangeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SetpointRangeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SetpointRangeCommitment — the typed wrapper guarantees that since
    // `register` only accepts SetpointRangeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SetpointRangeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SetpointRangeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SetpointRangeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SetpointRangeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SetpointRangeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SetpointRangeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SafeHaltCommitment commitments. */
export class SafeHaltCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SafeHaltCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SafeHaltCommitment — the typed wrapper guarantees that since
    // `register` only accepts SafeHaltCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SafeHaltCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SafeHaltCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SafeHaltCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SafeHaltCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SafeHaltCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SafeHaltCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for CompressorProtectionCommitment commitments. */
export class CompressorProtectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CompressorProtectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CompressorProtectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts CompressorProtectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CompressorProtectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CompressorProtectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CompressorProtectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CompressorProtectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CompressorProtectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CompressorProtectionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DisplayVisibilityCommitment commitments. */
export class DisplayVisibilityCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DisplayVisibilityCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DisplayVisibilityCommitment — the typed wrapper guarantees that since
    // `register` only accepts DisplayVisibilityCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DisplayVisibilityCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DisplayVisibilityCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DisplayVisibilityCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DisplayVisibilityCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DisplayVisibilityCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DisplayVisibilityCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ThermostatVisionCommitment commitments. */
export class ThermostatVisionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ThermostatVisionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ThermostatVisionCommitment — the typed wrapper guarantees that since
    // `register` only accepts ThermostatVisionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ThermostatVisionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ThermostatVisionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ThermostatVisionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ThermostatVisionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ThermostatVisionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ThermostatVisionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

