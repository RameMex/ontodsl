// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
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
/** Identity type for UserSessionRelator. Runtime: string. Compile-time: branded. */
export type UserSessionRelatorId = string & { readonly __brand: "UserSessionRelatorId" };
/** Identity type for SmartThermostatSystem. Runtime: string. Compile-time: branded. */
export type SmartThermostatSystemId = string & { readonly __brand: "SmartThermostatSystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface Ul916Compliant {
  readonly ul916CertNumber: string;
  readonly indicationsForUse: string;
}

/** @stereotype <<Category>> */
export interface Ashrae901Compliant {
  readonly standardEdition: string;
  readonly regulatorySetpointMinF: number;
  readonly regulatorySetpointMaxF: number;
}

/** @stereotype <<Category>> */
export interface Iec61508Sil1 {
  readonly silLevel: number;
  readonly safetyCaseReference: string;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleSensorBounds {
}

/** @stereotype <<Category>> */
export interface SafeSetpointBounds {
}

/** @stereotype <<Category>> */
export interface CompressorCyclingBounds {
}

/** @stereotype <<Category>> */
export interface SafeHaltConsistency {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly code: string;
  readonly rationale: string;
  readonly sourceStage: string;
}

/** @stereotype <<Subkind>> */
export interface SmartThermostatSystemFormalized extends SmartThermostatSystem {
}

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

/** @stereotype <<Relator>> */
export interface UserSessionRelator {
  readonly sessionId: UserSessionRelatorId;
  readonly userId: string;
}

/** @stereotype <<Kind>> */
export interface SmartThermostatSystem {
  readonly systemId: SmartThermostatSystemId;
  readonly requestedSetpointF: number;
  readonly clampedSetpointF: number;
  readonly safeMinTempF: number;
  readonly safeMaxTempF: number;
  readonly currentTempF: number;
  readonly plausibleMinF: number;
  readonly plausibleMaxF: number;
  readonly sensorPlausible: boolean;
  readonly actuatorSignal: string;
  readonly alertActive: boolean;
  readonly lastTransitionMinute: number;
  readonly minCycleIntervalMinutes: number;
  readonly displayCurrentTempF: number;
  readonly displaySetpointF: number;
  readonly displayActuatorSignal: string;
  readonly displayRefreshSeconds: number;
  readonly currentMinute: number;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  code: string;
  rationale: string;
  sourceStage: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    code: data.code,
    rationale: data.rationale,
    sourceStage: data.sourceStage,
  };
}

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

export function makeUserSessionRelator(data: {
  sessionId: string;
  userId: string;
}): UserSessionRelator {
  return {
    sessionId: data.sessionId as UserSessionRelatorId,
    userId: data.userId,
  };
}

export function makeSmartThermostatSystem(data: {
  systemId: string;
  requestedSetpointF: number;
  clampedSetpointF: number;
  safeMinTempF: number;
  safeMaxTempF: number;
  currentTempF: number;
  plausibleMinF: number;
  plausibleMaxF: number;
  sensorPlausible: boolean;
  actuatorSignal: string;
  alertActive: boolean;
  lastTransitionMinute: number;
  minCycleIntervalMinutes: number;
  displayCurrentTempF: number;
  displaySetpointF: number;
  displayActuatorSignal: string;
  displayRefreshSeconds: number;
  currentMinute: number;
}): SmartThermostatSystem {
  return {
    systemId: data.systemId as SmartThermostatSystemId,
    requestedSetpointF: data.requestedSetpointF,
    clampedSetpointF: data.clampedSetpointF,
    safeMinTempF: data.safeMinTempF,
    safeMaxTempF: data.safeMaxTempF,
    currentTempF: data.currentTempF,
    plausibleMinF: data.plausibleMinF,
    plausibleMaxF: data.plausibleMaxF,
    sensorPlausible: data.sensorPlausible,
    actuatorSignal: data.actuatorSignal,
    alertActive: data.alertActive,
    lastTransitionMinute: data.lastTransitionMinute,
    minCycleIntervalMinutes: data.minCycleIntervalMinutes,
    displayCurrentTempF: data.displayCurrentTempF,
    displaySetpointF: data.displaySetpointF,
    displayActuatorSignal: data.displayActuatorSignal,
    displayRefreshSeconds: data.displayRefreshSeconds,
    currentMinute: data.currentMinute,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Ul916Compliant. Returns empty array when valid. */
export function validateUl916Compliant(instance: Ul916Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ul916CertNumber !== null))) {
    violations.push("[Ul916Compliant] invariant violated: self.ul916CertNumber <> null");
  }
  return violations;
}

/** Runtime invariant check for Ashrae901Compliant. Returns empty array when valid. */
export function validateAshrae901Compliant(instance: Ashrae901Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.standardEdition !== null))) {
    violations.push("[Ashrae901Compliant] invariant violated: self.standardEdition <> null");
  }
  if (!((instance.regulatorySetpointMinF >= 40))) {
    violations.push("[Ashrae901Compliant] invariant violated: self.regulatorySetpointMinF >= 40.0");
  }
  if (!((instance.regulatorySetpointMaxF <= 90))) {
    violations.push("[Ashrae901Compliant] invariant violated: self.regulatorySetpointMaxF <= 90.0");
  }
  if (!((instance.regulatorySetpointMaxF > instance.regulatorySetpointMinF))) {
    violations.push("[Ashrae901Compliant] invariant violated: self.regulatorySetpointMaxF > self.regulatorySetpointMinF");
  }
  return violations;
}

/** Runtime invariant check for Iec61508Sil1. Returns empty array when valid. */
export function validateIec61508Sil1(instance: Iec61508Sil1): readonly string[] {
  const violations: string[] = [];
  if (!((instance.silLevel === 1))) {
    violations.push("[Iec61508Sil1] invariant violated: self.silLevel = 1");
  }
  if (!((instance.safetyCaseReference !== null))) {
    violations.push("[Iec61508Sil1] invariant violated: self.safetyCaseReference <> null");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleSensorBounds. Returns empty array when valid. */
export function validatePhysicallyPlausibleSensorBounds(instance: PhysicallyPlausibleSensorBounds): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.plausibleMinF = -40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.plausibleMaxF = 150.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.plausibleMaxF > bearer.plausibleMinF — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SafeSetpointBounds. Returns empty array when valid. */
export function validateSafeSetpointBounds(instance: SafeSetpointBounds): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMinTempF = 40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxTempF = 90.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.clampedSetpointF >= bearer.safeMinTempF — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.clampedSetpointF <= bearer.safeMaxTempF — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for CompressorCyclingBounds. Returns empty array when valid. */
export function validateCompressorCyclingBounds(instance: CompressorCyclingBounds): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minCycleIntervalMinutes >= 5.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.lastTransitionMinute >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SafeHaltConsistency. Returns empty array when valid. */
export function validateSafeHaltConsistency(instance: SafeHaltConsistency): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.sensorPlausible = true or bearer.actuatorSignal = 'OFF' — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.code !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.code <> null");
  }
  if (!((instance.rationale !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.rationale <> null");
  }
  return violations;
}

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

/** Runtime invariant check for UserSessionRelator. Returns empty array when valid. */
export function validateUserSessionRelator(instance: UserSessionRelator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sessionId !== null))) {
    violations.push("[UserSessionRelator] invariant violated: self.sessionId <> null");
  }
  if (!((instance.userId !== null))) {
    violations.push("[UserSessionRelator] invariant violated: self.userId <> null");
  }
  return violations;
}

/** Runtime invariant check for SmartThermostatSystem. Returns empty array when valid. */
export function validateSmartThermostatSystem(instance: SmartThermostatSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMinTempF === 40))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.safeMinTempF = 40.0");
  }
  if (!((instance.safeMaxTempF === 90))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.safeMaxTempF = 90.0");
  }
  if (!((instance.clampedSetpointF >= instance.safeMinTempF))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.clampedSetpointF >= self.safeMinTempF");
  }
  if (!((instance.clampedSetpointF <= instance.safeMaxTempF))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.clampedSetpointF <= self.safeMaxTempF");
  }
  if (!((instance.plausibleMinF === -(40)))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.plausibleMinF = -40.0");
  }
  if (!((instance.plausibleMaxF === 150))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.plausibleMaxF = 150.0");
  }
  if (!((instance.plausibleMaxF > instance.plausibleMinF))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.plausibleMaxF > self.plausibleMinF");
  }
  if (!((instance.minCycleIntervalMinutes === 5))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.minCycleIntervalMinutes = 5.0");
  }
  if (!((instance.lastTransitionMinute >= 0))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.lastTransitionMinute >= 0.0");
  }
  if (!((instance.currentMinute >= 0))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.currentMinute >= 0.0");
  }
  if (!((instance.displayRefreshSeconds > 0))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.displayRefreshSeconds > 0.0");
  }
  if (!((instance.displayCurrentTempF === instance.currentTempF))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.displayCurrentTempF = self.currentTempF");
  }
  if (!((instance.displaySetpointF === instance.clampedSetpointF))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.displaySetpointF = self.clampedSetpointF");
  }
  if (!((instance.displayActuatorSignal === instance.actuatorSignal))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.displayActuatorSignal = self.actuatorSignal");
  }
  if (!(((instance.sensorPlausible === true) || (instance.actuatorSignal === "OFF")))) {
    violations.push("[SmartThermostatSystem] invariant violated: self.sensorPlausible = true or self.actuatorSignal = 'OFF'");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand. User supplies this. */
export type SmartThermostatSystemFormalizedRejectUnsafeActuatorCommandImpl = (self: SmartThermostatSystemFormalized, requestedSignal: string) => { self: SmartThermostatSystemFormalized; modified: { actuatorSignal: unknown; alertActive: unknown; displayActuatorSignal: unknown } };

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand. */
export function wrapSmartThermostatSystemFormalizedRejectUnsafeActuatorCommand(impl: SmartThermostatSystemFormalizedRejectUnsafeActuatorCommandImpl): (self: SmartThermostatSystemFormalized, requestedSignal: string) => SmartThermostatSystemFormalized {
  return (self, requestedSignal) => {
    const preViolations: string[] = [];
    if (!(((self.clampedSetpointF < self.safeMinTempF) || (self.clampedSetpointF > self.safeMaxTempF)))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] pre violated: self.clampedSetpointF < self.safeMinTempF\n         or self.clampedSetpointF > self.safeMaxTempF");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedSignal);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] post violated: self.alertActive = true");
      }
      if (!((__result.self.displayActuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] post violated: self.displayActuatorSignal = 'OFF'");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand (async). User supplies this. */
export type SmartThermostatSystemFormalizedRejectUnsafeActuatorCommandAsyncImpl = (self: SmartThermostatSystemFormalized, requestedSignal: string) => Promise<{ self: SmartThermostatSystemFormalized; modified: { actuatorSignal: unknown; alertActive: unknown; displayActuatorSignal: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand (async). */
export function wrapSmartThermostatSystemFormalizedRejectUnsafeActuatorCommandAsync(impl: SmartThermostatSystemFormalizedRejectUnsafeActuatorCommandAsyncImpl): (self: SmartThermostatSystemFormalized, requestedSignal: string) => Promise<SmartThermostatSystemFormalized> {
  return async (self, requestedSignal) => {
    const preViolations: string[] = [];
    if (!(((self.clampedSetpointF < self.safeMinTempF) || (self.clampedSetpointF > self.safeMaxTempF)))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] pre violated: self.clampedSetpointF < self.safeMinTempF\n         or self.clampedSetpointF > self.safeMaxTempF");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedSignal);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] post violated: self.alertActive = true");
      }
      if (!((__result.self.displayActuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand] post violated: self.displayActuatorSignal = 'OFF'");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectImplausibleReading. User supplies this. */
export type SmartThermostatSystemFormalizedRejectImplausibleReadingImpl = (self: SmartThermostatSystemFormalized, readingF: number, atMinute: number) => { self: SmartThermostatSystemFormalized; modified: { actuatorSignal: unknown; alertActive: unknown; sensorPlausible: unknown; currentMinute: unknown; displayActuatorSignal: unknown } };

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectImplausibleReading. */
export function wrapSmartThermostatSystemFormalizedRejectImplausibleReading(impl: SmartThermostatSystemFormalizedRejectImplausibleReadingImpl): (self: SmartThermostatSystemFormalized, readingF: number, atMinute: number) => SmartThermostatSystemFormalized {
  return (self, readingF, atMinute) => {
    const preViolations: string[] = [];
    if (!(((readingF < self.plausibleMinF) || (readingF > self.plausibleMaxF)))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] pre violated: readingF < self.plausibleMinF or readingF > self.plausibleMaxF");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, readingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.alertActive = true");
      }
      if (!((__result.self.sensorPlausible === false))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.sensorPlausible = false");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.displayActuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.displayActuatorSignal = 'OFF'");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectImplausibleReading (async). User supplies this. */
export type SmartThermostatSystemFormalizedRejectImplausibleReadingAsyncImpl = (self: SmartThermostatSystemFormalized, readingF: number, atMinute: number) => Promise<{ self: SmartThermostatSystemFormalized; modified: { actuatorSignal: unknown; alertActive: unknown; sensorPlausible: unknown; currentMinute: unknown; displayActuatorSignal: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectImplausibleReading (async). */
export function wrapSmartThermostatSystemFormalizedRejectImplausibleReadingAsync(impl: SmartThermostatSystemFormalizedRejectImplausibleReadingAsyncImpl): (self: SmartThermostatSystemFormalized, readingF: number, atMinute: number) => Promise<SmartThermostatSystemFormalized> {
  return async (self, readingF, atMinute) => {
    const preViolations: string[] = [];
    if (!(((readingF < self.plausibleMinF) || (readingF > self.plausibleMaxF)))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] pre violated: readingF < self.plausibleMinF or readingF > self.plausibleMaxF");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, readingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.alertActive = true");
      }
      if (!((__result.self.sensorPlausible === false))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.sensorPlausible = false");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.displayActuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectImplausibleReading] post violated: self.displayActuatorSignal = 'OFF'");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectEarlyCompressorCycle. User supplies this. */
export type SmartThermostatSystemFormalizedRejectEarlyCompressorCycleImpl = (self: SmartThermostatSystemFormalized, atMinute: number) => { self: SmartThermostatSystemFormalized; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown } };

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectEarlyCompressorCycle. */
export function wrapSmartThermostatSystemFormalizedRejectEarlyCompressorCycle(impl: SmartThermostatSystemFormalizedRejectEarlyCompressorCycleImpl): (self: SmartThermostatSystemFormalized, atMinute: number) => SmartThermostatSystemFormalized {
  return (self, atMinute) => {
    const preViolations: string[] = [];
    if (!(((atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectEarlyCompressorCycle] pre violated: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.actuatorSignal": self.actuatorSignal,
      "self.lastTransitionMinute": self.lastTransitionMinute,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === __pre["self.actuatorSignal"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectEarlyCompressorCycle] post violated: self.actuatorSignal = self.actuatorSignal@pre");
      }
      if (!((__result.self.lastTransitionMinute === __pre["self.lastTransitionMinute"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectEarlyCompressorCycle] post violated: self.lastTransitionMinute = self.lastTransitionMinute@pre");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectEarlyCompressorCycle (async). User supplies this. */
export type SmartThermostatSystemFormalizedRejectEarlyCompressorCycleAsyncImpl = (self: SmartThermostatSystemFormalized, atMinute: number) => Promise<{ self: SmartThermostatSystemFormalized; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectEarlyCompressorCycle (async). */
export function wrapSmartThermostatSystemFormalizedRejectEarlyCompressorCycleAsync(impl: SmartThermostatSystemFormalizedRejectEarlyCompressorCycleAsyncImpl): (self: SmartThermostatSystemFormalized, atMinute: number) => Promise<SmartThermostatSystemFormalized> {
  return async (self, atMinute) => {
    const preViolations: string[] = [];
    if (!(((atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectEarlyCompressorCycle] pre violated: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.actuatorSignal": self.actuatorSignal,
      "self.lastTransitionMinute": self.lastTransitionMinute,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === __pre["self.actuatorSignal"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectEarlyCompressorCycle] post violated: self.actuatorSignal = self.actuatorSignal@pre");
      }
      if (!((__result.self.lastTransitionMinute === __pre["self.lastTransitionMinute"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectEarlyCompressorCycle] post violated: self.lastTransitionMinute = self.lastTransitionMinute@pre");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt. User supplies this. */
export type SmartThermostatSystemFormalizedRejectSetpointDuringSafeHaltImpl = (self: SmartThermostatSystemFormalized, requestedF: number) => { self: SmartThermostatSystemFormalized; modified: { clampedSetpointF: unknown; requestedSetpointF: unknown } };

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt. */
export function wrapSmartThermostatSystemFormalizedRejectSetpointDuringSafeHalt(impl: SmartThermostatSystemFormalizedRejectSetpointDuringSafeHaltImpl): (self: SmartThermostatSystemFormalized, requestedF: number) => SmartThermostatSystemFormalized {
  return (self, requestedF) => {
    const preViolations: string[] = [];
    if (!(((self.alertActive === true) || (self.sensorPlausible === false)))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt] pre violated: self.alertActive = true or self.sensorPlausible = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clampedSetpointF": self.clampedSetpointF,
      "self.requestedSetpointF": self.requestedSetpointF,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedF);
      const postViolations: string[] = [];
      if (!((__result.self.clampedSetpointF === __pre["self.clampedSetpointF"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt] post violated: self.clampedSetpointF = self.clampedSetpointF@pre");
      }
      if (!((__result.self.requestedSetpointF === __pre["self.requestedSetpointF"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt] post violated: self.requestedSetpointF = self.requestedSetpointF@pre");
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

/** Impl signature for SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt (async). User supplies this. */
export type SmartThermostatSystemFormalizedRejectSetpointDuringSafeHaltAsyncImpl = (self: SmartThermostatSystemFormalized, requestedF: number) => Promise<{ self: SmartThermostatSystemFormalized; modified: { clampedSetpointF: unknown; requestedSetpointF: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt (async). */
export function wrapSmartThermostatSystemFormalizedRejectSetpointDuringSafeHaltAsync(impl: SmartThermostatSystemFormalizedRejectSetpointDuringSafeHaltAsyncImpl): (self: SmartThermostatSystemFormalized, requestedF: number) => Promise<SmartThermostatSystemFormalized> {
  return async (self, requestedF) => {
    const preViolations: string[] = [];
    if (!(((self.alertActive === true) || (self.sensorPlausible === false)))) {
      preViolations.push("[SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt] pre violated: self.alertActive = true or self.sensorPlausible = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clampedSetpointF": self.clampedSetpointF,
      "self.requestedSetpointF": self.requestedSetpointF,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedF);
      const postViolations: string[] = [];
      if (!((__result.self.clampedSetpointF === __pre["self.clampedSetpointF"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt] post violated: self.clampedSetpointF = self.clampedSetpointF@pre");
      }
      if (!((__result.self.requestedSetpointF === __pre["self.requestedSetpointF"]))) {
        postViolations.push("[SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt] post violated: self.requestedSetpointF = self.requestedSetpointF@pre");
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

/** Impl signature for SmartThermostatSystem.adjustSetpoint. User supplies this. */
export type SmartThermostatSystemAdjustSetpointImpl = (self: SmartThermostatSystem, requestedF: number) => { self: SmartThermostatSystem; modified: { requestedSetpointF: unknown; clampedSetpointF: unknown; displaySetpointF: unknown } };

/** Contract-checking wrapper for SmartThermostatSystem.adjustSetpoint. */
export function wrapSmartThermostatSystemAdjustSetpoint(impl: SmartThermostatSystemAdjustSetpointImpl): (self: SmartThermostatSystem, requestedF: number) => SmartThermostatSystem {
  return (self, requestedF) => {
    const preViolations: string[] = [];
    if (!((self.sensorPlausible === true))) {
      preViolations.push("[SmartThermostatSystem.adjustSetpoint] pre violated: self.sensorPlausible = true");
    }
    if (!(!(self.alertActive))) {
      preViolations.push("[SmartThermostatSystem.adjustSetpoint] pre violated: not self.alertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedF);
      const postViolations: string[] = [];
      if (!((__result.self.requestedSetpointF === requestedF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.requestedSetpointF = requestedF");
      }
      if (!((__result.self.clampedSetpointF === (((requestedF < __result.self.safeMinTempF)) ? (__result.self.safeMinTempF) : ((((requestedF > __result.self.safeMaxTempF)) ? (__result.self.safeMaxTempF) : (requestedF))))))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.clampedSetpointF =\n            if requestedF < self.safeMinTempF then self.safeMinTempF\n            else if requestedF > self.safeMaxTempF then self.safeMaxTempF\n            else requestedF\n            endif endif");
      }
      if (!((__result.self.clampedSetpointF >= __result.self.safeMinTempF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.clampedSetpointF >= self.safeMinTempF");
      }
      if (!((__result.self.clampedSetpointF <= __result.self.safeMaxTempF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.clampedSetpointF <= self.safeMaxTempF");
      }
      if (!((__result.self.displaySetpointF === __result.self.clampedSetpointF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.displaySetpointF = self.clampedSetpointF");
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

/** Impl signature for SmartThermostatSystem.adjustSetpoint (async). User supplies this. */
export type SmartThermostatSystemAdjustSetpointAsyncImpl = (self: SmartThermostatSystem, requestedF: number) => Promise<{ self: SmartThermostatSystem; modified: { requestedSetpointF: unknown; clampedSetpointF: unknown; displaySetpointF: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystem.adjustSetpoint (async). */
export function wrapSmartThermostatSystemAdjustSetpointAsync(impl: SmartThermostatSystemAdjustSetpointAsyncImpl): (self: SmartThermostatSystem, requestedF: number) => Promise<SmartThermostatSystem> {
  return async (self, requestedF) => {
    const preViolations: string[] = [];
    if (!((self.sensorPlausible === true))) {
      preViolations.push("[SmartThermostatSystem.adjustSetpoint] pre violated: self.sensorPlausible = true");
    }
    if (!(!(self.alertActive))) {
      preViolations.push("[SmartThermostatSystem.adjustSetpoint] pre violated: not self.alertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedF);
      const postViolations: string[] = [];
      if (!((__result.self.requestedSetpointF === requestedF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.requestedSetpointF = requestedF");
      }
      if (!((__result.self.clampedSetpointF === (((requestedF < __result.self.safeMinTempF)) ? (__result.self.safeMinTempF) : ((((requestedF > __result.self.safeMaxTempF)) ? (__result.self.safeMaxTempF) : (requestedF))))))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.clampedSetpointF =\n            if requestedF < self.safeMinTempF then self.safeMinTempF\n            else if requestedF > self.safeMaxTempF then self.safeMaxTempF\n            else requestedF\n            endif endif");
      }
      if (!((__result.self.clampedSetpointF >= __result.self.safeMinTempF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.clampedSetpointF >= self.safeMinTempF");
      }
      if (!((__result.self.clampedSetpointF <= __result.self.safeMaxTempF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.clampedSetpointF <= self.safeMaxTempF");
      }
      if (!((__result.self.displaySetpointF === __result.self.clampedSetpointF))) {
        postViolations.push("[SmartThermostatSystem.adjustSetpoint] post violated: self.displaySetpointF = self.clampedSetpointF");
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

/** Impl signature for SmartThermostatSystem.processSensorReading. User supplies this. */
export type SmartThermostatSystemProcessSensorReadingImpl = (self: SmartThermostatSystem, readingF: number, atMinute: number) => { self: SmartThermostatSystem; modified: { currentTempF: unknown; sensorPlausible: unknown; actuatorSignal: unknown; alertActive: unknown; currentMinute: unknown; displayCurrentTempF: unknown; displayActuatorSignal: unknown } };

/** Contract-checking wrapper for SmartThermostatSystem.processSensorReading. */
export function wrapSmartThermostatSystemProcessSensorReading(impl: SmartThermostatSystemProcessSensorReadingImpl): (self: SmartThermostatSystem, readingF: number, atMinute: number) => SmartThermostatSystem {
  return (self, readingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystem.processSensorReading] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTempF": self.currentTempF,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, readingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.sensorPlausible === ((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.sensorPlausible =\n            (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)");
      }
      if (!(((!(((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF)))) ? (((__result.self.actuatorSignal === "OFF") && (__result.self.alertActive === true))) : ((__result.self.alertActive === false))))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: if not (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.actuatorSignal = 'OFF' and self.alertActive = true\n          else self.alertActive = false\n          endif");
      }
      if (!(((((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))) ? ((__result.self.currentTempF === readingF)) : ((__result.self.currentTempF === __pre["self.currentTempF"]))))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: if (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.currentTempF = readingF\n          else self.currentTempF = self.currentTempF@pre\n          endif");
      }
      if (!((__result.self.plausibleMaxF > __result.self.plausibleMinF))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.plausibleMaxF > self.plausibleMinF");
      }
      if (!((__result.self.displayCurrentTempF === __result.self.currentTempF))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.displayCurrentTempF = self.currentTempF");
      }
      if (!((__result.self.displayActuatorSignal === __result.self.actuatorSignal))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.displayActuatorSignal = self.actuatorSignal");
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

/** Impl signature for SmartThermostatSystem.processSensorReading (async). User supplies this. */
export type SmartThermostatSystemProcessSensorReadingAsyncImpl = (self: SmartThermostatSystem, readingF: number, atMinute: number) => Promise<{ self: SmartThermostatSystem; modified: { currentTempF: unknown; sensorPlausible: unknown; actuatorSignal: unknown; alertActive: unknown; currentMinute: unknown; displayCurrentTempF: unknown; displayActuatorSignal: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystem.processSensorReading (async). */
export function wrapSmartThermostatSystemProcessSensorReadingAsync(impl: SmartThermostatSystemProcessSensorReadingAsyncImpl): (self: SmartThermostatSystem, readingF: number, atMinute: number) => Promise<SmartThermostatSystem> {
  return async (self, readingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystem.processSensorReading] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTempF": self.currentTempF,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, readingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.sensorPlausible === ((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.sensorPlausible =\n            (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)");
      }
      if (!(((!(((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF)))) ? (((__result.self.actuatorSignal === "OFF") && (__result.self.alertActive === true))) : ((__result.self.alertActive === false))))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: if not (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.actuatorSignal = 'OFF' and self.alertActive = true\n          else self.alertActive = false\n          endif");
      }
      if (!(((((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))) ? ((__result.self.currentTempF === readingF)) : ((__result.self.currentTempF === __pre["self.currentTempF"]))))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: if (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.currentTempF = readingF\n          else self.currentTempF = self.currentTempF@pre\n          endif");
      }
      if (!((__result.self.plausibleMaxF > __result.self.plausibleMinF))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.plausibleMaxF > self.plausibleMinF");
      }
      if (!((__result.self.displayCurrentTempF === __result.self.currentTempF))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.displayCurrentTempF = self.currentTempF");
      }
      if (!((__result.self.displayActuatorSignal === __result.self.actuatorSignal))) {
        postViolations.push("[SmartThermostatSystem.processSensorReading] post violated: self.displayActuatorSignal = self.actuatorSignal");
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

/** Impl signature for SmartThermostatSystem.commandActuator. User supplies this. */
export type SmartThermostatSystemCommandActuatorImpl = (self: SmartThermostatSystem, atMinute: number) => { self: SmartThermostatSystem; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown; currentMinute: unknown; displayActuatorSignal: unknown } };

/** Contract-checking wrapper for SmartThermostatSystem.commandActuator. */
export function wrapSmartThermostatSystemCommandActuator(impl: SmartThermostatSystemCommandActuatorImpl): (self: SmartThermostatSystem, atMinute: number) => SmartThermostatSystem {
  return (self, atMinute) => {
    const preViolations: string[] = [];
    if (!((self.sensorPlausible === true))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: self.sensorPlausible = true");
    }
    if (!(!(self.alertActive))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: not self.alertActive");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: atMinute >= self.currentMinute");
    }
    if (!(((atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, atMinute);
      const postViolations: string[] = [];
      if (!((((__result.self.currentTempF < __result.self.clampedSetpointF)) ? ((__result.self.actuatorSignal === "HEAT")) : ((((__result.self.currentTempF > __result.self.clampedSetpointF)) ? ((__result.self.actuatorSignal === "COOL")) : ((__result.self.actuatorSignal === "OFF"))))))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: if self.currentTempF < self.clampedSetpointF\n          then self.actuatorSignal = 'HEAT'\n          else if self.currentTempF > self.clampedSetpointF\n          then self.actuatorSignal = 'COOL'\n          else self.actuatorSignal = 'OFF'\n          endif endif");
      }
      if (!((__result.self.lastTransitionMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.lastTransitionMinute = atMinute");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.displayActuatorSignal === __result.self.actuatorSignal))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.displayActuatorSignal = self.actuatorSignal");
      }
      if (!((__result.self.clampedSetpointF >= __result.self.safeMinTempF))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.clampedSetpointF >= self.safeMinTempF");
      }
      if (!((__result.self.clampedSetpointF <= __result.self.safeMaxTempF))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.clampedSetpointF <= self.safeMaxTempF");
      }
      if (!((__result.self.minCycleIntervalMinutes >= 5))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.minCycleIntervalMinutes >= 5.0");
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

/** Impl signature for SmartThermostatSystem.commandActuator (async). User supplies this. */
export type SmartThermostatSystemCommandActuatorAsyncImpl = (self: SmartThermostatSystem, atMinute: number) => Promise<{ self: SmartThermostatSystem; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown; currentMinute: unknown; displayActuatorSignal: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystem.commandActuator (async). */
export function wrapSmartThermostatSystemCommandActuatorAsync(impl: SmartThermostatSystemCommandActuatorAsyncImpl): (self: SmartThermostatSystem, atMinute: number) => Promise<SmartThermostatSystem> {
  return async (self, atMinute) => {
    const preViolations: string[] = [];
    if (!((self.sensorPlausible === true))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: self.sensorPlausible = true");
    }
    if (!(!(self.alertActive))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: not self.alertActive");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: atMinute >= self.currentMinute");
    }
    if (!(((atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes))) {
      preViolations.push("[SmartThermostatSystem.commandActuator] pre violated: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, atMinute);
      const postViolations: string[] = [];
      if (!((((__result.self.currentTempF < __result.self.clampedSetpointF)) ? ((__result.self.actuatorSignal === "HEAT")) : ((((__result.self.currentTempF > __result.self.clampedSetpointF)) ? ((__result.self.actuatorSignal === "COOL")) : ((__result.self.actuatorSignal === "OFF"))))))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: if self.currentTempF < self.clampedSetpointF\n          then self.actuatorSignal = 'HEAT'\n          else if self.currentTempF > self.clampedSetpointF\n          then self.actuatorSignal = 'COOL'\n          else self.actuatorSignal = 'OFF'\n          endif endif");
      }
      if (!((__result.self.lastTransitionMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.lastTransitionMinute = atMinute");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.displayActuatorSignal === __result.self.actuatorSignal))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.displayActuatorSignal = self.actuatorSignal");
      }
      if (!((__result.self.clampedSetpointF >= __result.self.safeMinTempF))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.clampedSetpointF >= self.safeMinTempF");
      }
      if (!((__result.self.clampedSetpointF <= __result.self.safeMaxTempF))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.clampedSetpointF <= self.safeMaxTempF");
      }
      if (!((__result.self.minCycleIntervalMinutes >= 5))) {
        postViolations.push("[SmartThermostatSystem.commandActuator] post violated: self.minCycleIntervalMinutes >= 5.0");
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

/** Impl signature for SmartThermostatSystem.rejectCommandDuringSafeHalt. User supplies this. */
export type SmartThermostatSystemRejectCommandDuringSafeHaltImpl = (self: SmartThermostatSystem) => { self: SmartThermostatSystem; modified: { actuatorSignal: unknown; alertActive: unknown } };

/** Contract-checking wrapper for SmartThermostatSystem.rejectCommandDuringSafeHalt. */
export function wrapSmartThermostatSystemRejectCommandDuringSafeHalt(impl: SmartThermostatSystemRejectCommandDuringSafeHaltImpl): (self: SmartThermostatSystem) => SmartThermostatSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.alertActive === true) || (self.sensorPlausible === false)))) {
      preViolations.push("[SmartThermostatSystem.rejectCommandDuringSafeHalt] pre violated: self.alertActive = true or self.sensorPlausible = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystem.rejectCommandDuringSafeHalt] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[SmartThermostatSystem.rejectCommandDuringSafeHalt] post violated: self.alertActive = true");
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

/** Impl signature for SmartThermostatSystem.rejectCommandDuringSafeHalt (async). User supplies this. */
export type SmartThermostatSystemRejectCommandDuringSafeHaltAsyncImpl = (self: SmartThermostatSystem) => Promise<{ self: SmartThermostatSystem; modified: { actuatorSignal: unknown; alertActive: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystem.rejectCommandDuringSafeHalt (async). */
export function wrapSmartThermostatSystemRejectCommandDuringSafeHaltAsync(impl: SmartThermostatSystemRejectCommandDuringSafeHaltAsyncImpl): (self: SmartThermostatSystem) => Promise<SmartThermostatSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.alertActive === true) || (self.sensorPlausible === false)))) {
      preViolations.push("[SmartThermostatSystem.rejectCommandDuringSafeHalt] pre violated: self.alertActive = true or self.sensorPlausible = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[SmartThermostatSystem.rejectCommandDuringSafeHalt] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[SmartThermostatSystem.rejectCommandDuringSafeHalt] post violated: self.alertActive = true");
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

/** Impl signature for SmartThermostatSystem.refreshDisplay. User supplies this. */
export type SmartThermostatSystemRefreshDisplayImpl = (self: SmartThermostatSystem) => { self: SmartThermostatSystem; modified: { displayCurrentTempF: unknown; displaySetpointF: unknown; displayActuatorSignal: unknown } };

/** Contract-checking wrapper for SmartThermostatSystem.refreshDisplay. */
export function wrapSmartThermostatSystemRefreshDisplay(impl: SmartThermostatSystemRefreshDisplayImpl): (self: SmartThermostatSystem) => SmartThermostatSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.displayRefreshSeconds > 0))) {
      preViolations.push("[SmartThermostatSystem.refreshDisplay] pre violated: self.displayRefreshSeconds > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayCurrentTempF === __result.self.currentTempF))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displayCurrentTempF = self.currentTempF");
      }
      if (!((__result.self.displaySetpointF === __result.self.clampedSetpointF))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displaySetpointF = self.clampedSetpointF");
      }
      if (!((__result.self.displayActuatorSignal === __result.self.actuatorSignal))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displayActuatorSignal = self.actuatorSignal");
      }
      if (!((__result.self.displayRefreshSeconds > 0))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displayRefreshSeconds > 0.0");
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

/** Impl signature for SmartThermostatSystem.refreshDisplay (async). User supplies this. */
export type SmartThermostatSystemRefreshDisplayAsyncImpl = (self: SmartThermostatSystem) => Promise<{ self: SmartThermostatSystem; modified: { displayCurrentTempF: unknown; displaySetpointF: unknown; displayActuatorSignal: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystem.refreshDisplay (async). */
export function wrapSmartThermostatSystemRefreshDisplayAsync(impl: SmartThermostatSystemRefreshDisplayAsyncImpl): (self: SmartThermostatSystem) => Promise<SmartThermostatSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.displayRefreshSeconds > 0))) {
      preViolations.push("[SmartThermostatSystem.refreshDisplay] pre violated: self.displayRefreshSeconds > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayCurrentTempF === __result.self.currentTempF))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displayCurrentTempF = self.currentTempF");
      }
      if (!((__result.self.displaySetpointF === __result.self.clampedSetpointF))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displaySetpointF = self.clampedSetpointF");
      }
      if (!((__result.self.displayActuatorSignal === __result.self.actuatorSignal))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displayActuatorSignal = self.actuatorSignal");
      }
      if (!((__result.self.displayRefreshSeconds > 0))) {
        postViolations.push("[SmartThermostatSystem.refreshDisplay] post violated: self.displayRefreshSeconds > 0.0");
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

/** Impl signature for SmartThermostatSystem.clearSafeHalt. User supplies this. */
export type SmartThermostatSystemClearSafeHaltImpl = (self: SmartThermostatSystem, verifiedReadingF: number, atMinute: number) => { self: SmartThermostatSystem; modified: { sensorPlausible: unknown; alertActive: unknown; currentTempF: unknown; currentMinute: unknown; displayCurrentTempF: unknown } };

/** Contract-checking wrapper for SmartThermostatSystem.clearSafeHalt. */
export function wrapSmartThermostatSystemClearSafeHalt(impl: SmartThermostatSystemClearSafeHaltImpl): (self: SmartThermostatSystem, verifiedReadingF: number, atMinute: number) => SmartThermostatSystem {
  return (self, verifiedReadingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: self.alertActive = true");
    }
    if (!((verifiedReadingF >= self.plausibleMinF))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: verifiedReadingF >= self.plausibleMinF");
    }
    if (!((verifiedReadingF <= self.plausibleMaxF))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: verifiedReadingF <= self.plausibleMaxF");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, verifiedReadingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.sensorPlausible === true))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.sensorPlausible = true");
      }
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.alertActive = false");
      }
      if (!((__result.self.currentTempF === verifiedReadingF))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.currentTempF = verifiedReadingF");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.displayCurrentTempF === verifiedReadingF))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.displayCurrentTempF = verifiedReadingF");
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

/** Impl signature for SmartThermostatSystem.clearSafeHalt (async). User supplies this. */
export type SmartThermostatSystemClearSafeHaltAsyncImpl = (self: SmartThermostatSystem, verifiedReadingF: number, atMinute: number) => Promise<{ self: SmartThermostatSystem; modified: { sensorPlausible: unknown; alertActive: unknown; currentTempF: unknown; currentMinute: unknown; displayCurrentTempF: unknown } }>;

/** Contract-checking wrapper for SmartThermostatSystem.clearSafeHalt (async). */
export function wrapSmartThermostatSystemClearSafeHaltAsync(impl: SmartThermostatSystemClearSafeHaltAsyncImpl): (self: SmartThermostatSystem, verifiedReadingF: number, atMinute: number) => Promise<SmartThermostatSystem> {
  return async (self, verifiedReadingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: self.alertActive = true");
    }
    if (!((verifiedReadingF >= self.plausibleMinF))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: verifiedReadingF >= self.plausibleMinF");
    }
    if (!((verifiedReadingF <= self.plausibleMaxF))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: verifiedReadingF <= self.plausibleMaxF");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[SmartThermostatSystem.clearSafeHalt] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, verifiedReadingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.sensorPlausible === true))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.sensorPlausible = true");
      }
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.alertActive = false");
      }
      if (!((__result.self.currentTempF === verifiedReadingF))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.currentTempF = verifiedReadingF");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.displayCurrentTempF === verifiedReadingF))) {
        postViolations.push("[SmartThermostatSystem.clearSafeHalt] post violated: self.displayCurrentTempF = verifiedReadingF");
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

