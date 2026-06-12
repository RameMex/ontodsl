// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TemperatureSensorComponent. Runtime: string. Compile-time: branded. */
export type TemperatureSensorComponentId = string & { readonly __brand: "TemperatureSensorComponentId" };
/** Identity type for SetpointControllerComponent. Runtime: string. Compile-time: branded. */
export type SetpointControllerComponentId = string & { readonly __brand: "SetpointControllerComponentId" };
/** Identity type for ActuatorDriverComponent. Runtime: string. Compile-time: branded. */
export type ActuatorDriverComponentId = string & { readonly __brand: "ActuatorDriverComponentId" };
/** Identity type for DisplayComponent. Runtime: string. Compile-time: branded. */
export type DisplayComponentId = string & { readonly __brand: "DisplayComponentId" };
/** Identity type for SensorActuatorChannel. Runtime: string. Compile-time: branded. */
export type SensorActuatorChannelId = string & { readonly __brand: "SensorActuatorChannelId" };
/** Identity type for SetpointActuatorChannel. Runtime: string. Compile-time: branded. */
export type SetpointActuatorChannelId = string & { readonly __brand: "SetpointActuatorChannelId" };
/** Identity type for SensorDisplayChannel. Runtime: string. Compile-time: branded. */
export type SensorDisplayChannelId = string & { readonly __brand: "SensorDisplayChannelId" };
/** Identity type for SetpointDisplayChannel. Runtime: string. Compile-time: branded. */
export type SetpointDisplayChannelId = string & { readonly __brand: "SetpointDisplayChannelId" };
/** Identity type for ActuatorDisplayChannel. Runtime: string. Compile-time: branded. */
export type ActuatorDisplayChannelId = string & { readonly __brand: "ActuatorDisplayChannelId" };
/** Identity type for NormalControlCycleDesign. Runtime: string. Compile-time: branded. */
export type NormalControlCycleDesignId = string & { readonly __brand: "NormalControlCycleDesignId" };
/** Identity type for SensorFaultHaltDesign. Runtime: string. Compile-time: branded. */
export type SensorFaultHaltDesignId = string & { readonly __brand: "SensorFaultHaltDesignId" };
/** Identity type for UserSetpointAdjustmentDesign. Runtime: string. Compile-time: branded. */
export type UserSetpointAdjustmentDesignId = string & { readonly __brand: "UserSetpointAdjustmentDesignId" };
/** Identity type for SafeHaltClearanceDesign. Runtime: string. Compile-time: branded. */
export type SafeHaltClearanceDesignId = string & { readonly __brand: "SafeHaltClearanceDesignId" };
/** Identity type for DesignTeam. Runtime: string. Compile-time: branded. */
export type DesignTeamId = string & { readonly __brand: "DesignTeamId" };
/** Identity type for SystemArchitect. Runtime: string. Compile-time: branded. */
export type SystemArchitectId = string & { readonly __brand: "SystemArchitectId" };
/** Identity type for AdrCycleGuardEncapsulation. Runtime: string. Compile-time: branded. */
export type AdrCycleGuardEncapsulationId = string & { readonly __brand: "AdrCycleGuardEncapsulationId" };
/** Identity type for AdrSetpointClampOwnership. Runtime: string. Compile-time: branded. */
export type AdrSetpointClampOwnershipId = string & { readonly __brand: "AdrSetpointClampOwnershipId" };
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
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TemperatureSensorComponent {
  readonly sensorComponentId: TemperatureSensorComponentId;
  readonly currentTempF: number;
  readonly sensorPlausible: boolean;
  readonly plausibleMinF: number;
  readonly plausibleMaxF: number;
  readonly currentMinute: number;
  readonly sensorAlertActive: boolean;
}

/** @stereotype <<Kind>> */
export interface SetpointControllerComponent {
  readonly setpointControllerId: SetpointControllerComponentId;
  readonly requestedSetpointF: number;
  readonly clampedSetpointF: number;
  readonly safeMinTempF: number;
  readonly safeMaxTempF: number;
}

/** @stereotype <<Kind>> */
export interface ActuatorDriverComponent {
  readonly actuatorDriverId: ActuatorDriverComponentId;
  readonly actuatorSignal: string;
  readonly lastTransitionMinute: number;
  readonly minCycleIntervalMinutes: number;
  readonly alertActive: boolean;
}

/** @stereotype <<Kind>> */
export interface DisplayComponent {
  readonly displayComponentId: DisplayComponentId;
  readonly displayCurrentTempF: number;
  readonly displaySetpointF: number;
  readonly displayActuatorSignal: string;
  readonly displayAlertActive: boolean;
  readonly displayRefreshSeconds: number;
}

/** @stereotype <<Role>> */
export interface SensorEndpoint {
  readonly sensorComponentId: string;
}

/** @stereotype <<Role>> */
export interface ActuatorEndpoint {
  readonly actuatorDriverId: string;
}

/** @stereotype <<Role>> */
export interface SetpointProviderEndpoint {
  readonly setpointControllerId: string;
}

/** @stereotype <<Role>> */
export interface ActuatorConsumerEndpoint {
  readonly actuatorDriverId: string;
}

/** @stereotype <<Role>> */
export interface SensorDisplayEndpoint {
  readonly sensorComponentId: string;
}

/** @stereotype <<Role>> */
export interface DisplaySensorEndpoint {
  readonly displayComponentId: string;
}

/** @stereotype <<Role>> */
export interface SetpointDisplayEndpoint {
  readonly setpointControllerId: string;
}

/** @stereotype <<Role>> */
export interface DisplaySetpointEndpoint {
  readonly displayComponentId: string;
}

/** @stereotype <<Role>> */
export interface ActuatorDisplayEndpoint {
  readonly actuatorDriverId: string;
}

/** @stereotype <<Role>> */
export interface DisplayActuatorEndpoint {
  readonly displayComponentId: string;
}

/** @stereotype <<Relator>> */
export interface SensorActuatorChannel {
  readonly saChanId: SensorActuatorChannelId;
  readonly latestTempF: number;
  readonly latestPlausible: boolean;
  readonly latestAlertActive: boolean;
}

/** @stereotype <<Relator>> */
export interface SetpointActuatorChannel {
  readonly spActChanId: SetpointActuatorChannelId;
  readonly clampedSetpointF: number;
  readonly safeMinTempF: number;
  readonly safeMaxTempF: number;
}

/** @stereotype <<Relator>> */
export interface SensorDisplayChannel {
  readonly sdChanId: SensorDisplayChannelId;
  readonly displayTempF: number;
  readonly displayAlertActive: boolean;
}

/** @stereotype <<Relator>> */
export interface SetpointDisplayChannel {
  readonly spDispChanId: SetpointDisplayChannelId;
  readonly displaySetpointF: number;
}

/** @stereotype <<Relator>> */
export interface ActuatorDisplayChannel {
  readonly adChanId: ActuatorDisplayChannelId;
  readonly displayActuatorSignal: string;
  readonly displayAlertActive: boolean;
}

/** @stereotype <<Happening>> */
export interface NormalControlCycleDesign {
  readonly flowId: NormalControlCycleDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultHaltDesign {
  readonly flowId: SensorFaultHaltDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface UserSetpointAdjustmentDesign {
  readonly flowId: UserSetpointAdjustmentDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SafeHaltClearanceDesign {
  readonly flowId: SafeHaltClearanceDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Agent>> */
export interface DesignTeam {
  readonly teamId: DesignTeamId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface SystemArchitect {
  readonly architectId: SystemArchitectId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface AdrCycleGuardEncapsulation {
  readonly adrId: AdrCycleGuardEncapsulationId;
  readonly rationale: string;
}

/** @stereotype <<Commitment>> */
export interface AdrSetpointClampOwnership {
  readonly adrId: AdrSetpointClampOwnershipId;
  readonly rationale: string;
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


// ─── Factory functions ───

export function makeTemperatureSensorComponent(data: {
  sensorComponentId: string;
  currentTempF: number;
  sensorPlausible: boolean;
  plausibleMinF: number;
  plausibleMaxF: number;
  currentMinute: number;
  sensorAlertActive: boolean;
}): TemperatureSensorComponent {
  return {
    sensorComponentId: data.sensorComponentId as TemperatureSensorComponentId,
    currentTempF: data.currentTempF,
    sensorPlausible: data.sensorPlausible,
    plausibleMinF: data.plausibleMinF,
    plausibleMaxF: data.plausibleMaxF,
    currentMinute: data.currentMinute,
    sensorAlertActive: data.sensorAlertActive,
  };
}

export function makeSetpointControllerComponent(data: {
  setpointControllerId: string;
  requestedSetpointF: number;
  clampedSetpointF: number;
  safeMinTempF: number;
  safeMaxTempF: number;
}): SetpointControllerComponent {
  return {
    setpointControllerId: data.setpointControllerId as SetpointControllerComponentId,
    requestedSetpointF: data.requestedSetpointF,
    clampedSetpointF: data.clampedSetpointF,
    safeMinTempF: data.safeMinTempF,
    safeMaxTempF: data.safeMaxTempF,
  };
}

export function makeActuatorDriverComponent(data: {
  actuatorDriverId: string;
  actuatorSignal: string;
  lastTransitionMinute: number;
  minCycleIntervalMinutes: number;
  alertActive: boolean;
}): ActuatorDriverComponent {
  return {
    actuatorDriverId: data.actuatorDriverId as ActuatorDriverComponentId,
    actuatorSignal: data.actuatorSignal,
    lastTransitionMinute: data.lastTransitionMinute,
    minCycleIntervalMinutes: data.minCycleIntervalMinutes,
    alertActive: data.alertActive,
  };
}

export function makeDisplayComponent(data: {
  displayComponentId: string;
  displayCurrentTempF: number;
  displaySetpointF: number;
  displayActuatorSignal: string;
  displayAlertActive: boolean;
  displayRefreshSeconds: number;
}): DisplayComponent {
  return {
    displayComponentId: data.displayComponentId as DisplayComponentId,
    displayCurrentTempF: data.displayCurrentTempF,
    displaySetpointF: data.displaySetpointF,
    displayActuatorSignal: data.displayActuatorSignal,
    displayAlertActive: data.displayAlertActive,
    displayRefreshSeconds: data.displayRefreshSeconds,
  };
}

export function makeSensorActuatorChannel(data: {
  saChanId: string;
  latestTempF: number;
  latestPlausible: boolean;
  latestAlertActive: boolean;
}): SensorActuatorChannel {
  return {
    saChanId: data.saChanId as SensorActuatorChannelId,
    latestTempF: data.latestTempF,
    latestPlausible: data.latestPlausible,
    latestAlertActive: data.latestAlertActive,
  };
}

export function makeSetpointActuatorChannel(data: {
  spActChanId: string;
  clampedSetpointF: number;
  safeMinTempF: number;
  safeMaxTempF: number;
}): SetpointActuatorChannel {
  return {
    spActChanId: data.spActChanId as SetpointActuatorChannelId,
    clampedSetpointF: data.clampedSetpointF,
    safeMinTempF: data.safeMinTempF,
    safeMaxTempF: data.safeMaxTempF,
  };
}

export function makeSensorDisplayChannel(data: {
  sdChanId: string;
  displayTempF: number;
  displayAlertActive: boolean;
}): SensorDisplayChannel {
  return {
    sdChanId: data.sdChanId as SensorDisplayChannelId,
    displayTempF: data.displayTempF,
    displayAlertActive: data.displayAlertActive,
  };
}

export function makeSetpointDisplayChannel(data: {
  spDispChanId: string;
  displaySetpointF: number;
}): SetpointDisplayChannel {
  return {
    spDispChanId: data.spDispChanId as SetpointDisplayChannelId,
    displaySetpointF: data.displaySetpointF,
  };
}

export function makeActuatorDisplayChannel(data: {
  adChanId: string;
  displayActuatorSignal: string;
  displayAlertActive: boolean;
}): ActuatorDisplayChannel {
  return {
    adChanId: data.adChanId as ActuatorDisplayChannelId,
    displayActuatorSignal: data.displayActuatorSignal,
    displayAlertActive: data.displayAlertActive,
  };
}

export function makeNormalControlCycleDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): NormalControlCycleDesign {
  return {
    flowId: data.flowId as NormalControlCycleDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSensorFaultHaltDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorFaultHaltDesign {
  return {
    flowId: data.flowId as SensorFaultHaltDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeUserSetpointAdjustmentDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): UserSetpointAdjustmentDesign {
  return {
    flowId: data.flowId as UserSetpointAdjustmentDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSafeHaltClearanceDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SafeHaltClearanceDesign {
  return {
    flowId: data.flowId as SafeHaltClearanceDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeDesignTeam(data: {
  teamId: string;
  name: string;
}): DesignTeam {
  return {
    teamId: data.teamId as DesignTeamId,
    name: data.name,
  };
}

export function makeSystemArchitect(data: {
  architectId: string;
  name: string;
}): SystemArchitect {
  return {
    architectId: data.architectId as SystemArchitectId,
    name: data.name,
  };
}

export function makeAdrCycleGuardEncapsulation(data: {
  adrId: string;
  rationale: string;
}): AdrCycleGuardEncapsulation {
  return {
    adrId: data.adrId as AdrCycleGuardEncapsulationId,
    rationale: data.rationale,
  };
}

export function makeAdrSetpointClampOwnership(data: {
  adrId: string;
  rationale: string;
}): AdrSetpointClampOwnership {
  return {
    adrId: data.adrId as AdrSetpointClampOwnershipId,
    rationale: data.rationale,
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


// ─── Runtime invariant validators ───

/** Runtime invariant check for TemperatureSensorComponent. Returns empty array when valid. */
export function validateTemperatureSensorComponent(instance: TemperatureSensorComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorComponentId !== null))) {
    violations.push("[TemperatureSensorComponent] invariant violated: self.sensorComponentId <> null");
  }
  if (!((instance.plausibleMinF === -(40)))) {
    violations.push("[TemperatureSensorComponent] invariant violated: self.plausibleMinF = -40.0");
  }
  if (!((instance.plausibleMaxF === 150))) {
    violations.push("[TemperatureSensorComponent] invariant violated: self.plausibleMaxF = 150.0");
  }
  if (!((instance.plausibleMaxF > instance.plausibleMinF))) {
    violations.push("[TemperatureSensorComponent] invariant violated: self.plausibleMaxF > self.plausibleMinF");
  }
  if (!((instance.currentMinute >= 0))) {
    violations.push("[TemperatureSensorComponent] invariant violated: self.currentMinute >= 0.0");
  }
  if (!(((instance.sensorPlausible === true) || (instance.sensorAlertActive === true)))) {
    violations.push("[TemperatureSensorComponent] invariant violated: self.sensorPlausible = true or self.sensorAlertActive = true");
  }
  return violations;
}

/** Runtime invariant check for SetpointControllerComponent. Returns empty array when valid. */
export function validateSetpointControllerComponent(instance: SetpointControllerComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.setpointControllerId !== null))) {
    violations.push("[SetpointControllerComponent] invariant violated: self.setpointControllerId <> null");
  }
  if (!((instance.safeMinTempF === 40))) {
    violations.push("[SetpointControllerComponent] invariant violated: self.safeMinTempF = 40.0");
  }
  if (!((instance.safeMaxTempF === 90))) {
    violations.push("[SetpointControllerComponent] invariant violated: self.safeMaxTempF = 90.0");
  }
  if (!((instance.clampedSetpointF >= instance.safeMinTempF))) {
    violations.push("[SetpointControllerComponent] invariant violated: self.clampedSetpointF >= self.safeMinTempF");
  }
  if (!((instance.clampedSetpointF <= instance.safeMaxTempF))) {
    violations.push("[SetpointControllerComponent] invariant violated: self.clampedSetpointF <= self.safeMaxTempF");
  }
  return violations;
}

/** Runtime invariant check for ActuatorDriverComponent. Returns empty array when valid. */
export function validateActuatorDriverComponent(instance: ActuatorDriverComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.actuatorDriverId !== null))) {
    violations.push("[ActuatorDriverComponent] invariant violated: self.actuatorDriverId <> null");
  }
  if (!((instance.minCycleIntervalMinutes === 5))) {
    violations.push("[ActuatorDriverComponent] invariant violated: self.minCycleIntervalMinutes = 5.0");
  }
  if (!((instance.lastTransitionMinute >= 0))) {
    violations.push("[ActuatorDriverComponent] invariant violated: self.lastTransitionMinute >= 0.0");
  }
  if (!(((instance.alertActive === false) || (instance.actuatorSignal === "OFF")))) {
    violations.push("[ActuatorDriverComponent] invariant violated: self.alertActive = false or self.actuatorSignal = 'OFF'");
  }
  return violations;
}

/** Runtime invariant check for DisplayComponent. Returns empty array when valid. */
export function validateDisplayComponent(instance: DisplayComponent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.displayComponentId !== null))) {
    violations.push("[DisplayComponent] invariant violated: self.displayComponentId <> null");
  }
  if (!((instance.displayRefreshSeconds > 0))) {
    violations.push("[DisplayComponent] invariant violated: self.displayRefreshSeconds > 0.0");
  }
  return violations;
}

/** Runtime invariant check for SensorActuatorChannel. Returns empty array when valid. */
export function validateSensorActuatorChannel(instance: SensorActuatorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.saChanId !== null))) {
    violations.push("[SensorActuatorChannel] invariant violated: self.saChanId <> null");
  }
  if (!(((instance.latestPlausible === true) || (instance.latestAlertActive === true)))) {
    violations.push("[SensorActuatorChannel] invariant violated: self.latestPlausible = true or self.latestAlertActive = true");
  }
  return violations;
}

/** Runtime invariant check for SetpointActuatorChannel. Returns empty array when valid. */
export function validateSetpointActuatorChannel(instance: SetpointActuatorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.spActChanId !== null))) {
    violations.push("[SetpointActuatorChannel] invariant violated: self.spActChanId <> null");
  }
  if (!((instance.clampedSetpointF >= instance.safeMinTempF))) {
    violations.push("[SetpointActuatorChannel] invariant violated: self.clampedSetpointF >= self.safeMinTempF");
  }
  if (!((instance.clampedSetpointF <= instance.safeMaxTempF))) {
    violations.push("[SetpointActuatorChannel] invariant violated: self.clampedSetpointF <= self.safeMaxTempF");
  }
  if (!((instance.safeMinTempF === 40))) {
    violations.push("[SetpointActuatorChannel] invariant violated: self.safeMinTempF = 40.0");
  }
  if (!((instance.safeMaxTempF === 90))) {
    violations.push("[SetpointActuatorChannel] invariant violated: self.safeMaxTempF = 90.0");
  }
  return violations;
}

/** Runtime invariant check for SensorDisplayChannel. Returns empty array when valid. */
export function validateSensorDisplayChannel(instance: SensorDisplayChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sdChanId !== null))) {
    violations.push("[SensorDisplayChannel] invariant violated: self.sdChanId <> null");
  }
  return violations;
}

/** Runtime invariant check for SetpointDisplayChannel. Returns empty array when valid. */
export function validateSetpointDisplayChannel(instance: SetpointDisplayChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.spDispChanId !== null))) {
    violations.push("[SetpointDisplayChannel] invariant violated: self.spDispChanId <> null");
  }
  if (!((instance.displaySetpointF >= 40))) {
    violations.push("[SetpointDisplayChannel] invariant violated: self.displaySetpointF >= 40.0");
  }
  if (!((instance.displaySetpointF <= 90))) {
    violations.push("[SetpointDisplayChannel] invariant violated: self.displaySetpointF <= 90.0");
  }
  return violations;
}

/** Runtime invariant check for ActuatorDisplayChannel. Returns empty array when valid. */
export function validateActuatorDisplayChannel(instance: ActuatorDisplayChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.adChanId !== null))) {
    violations.push("[ActuatorDisplayChannel] invariant violated: self.adChanId <> null");
  }
  if (!((instance.displayActuatorSignal !== null))) {
    violations.push("[ActuatorDisplayChannel] invariant violated: self.displayActuatorSignal <> null");
  }
  return violations;
}

/** Runtime invariant check for NormalControlCycleDesign. Returns empty array when valid. */
export function validateNormalControlCycleDesign(instance: NormalControlCycleDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NormalControlCycleDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[NormalControlCycleDesign] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[NormalControlCycleDesign] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultHaltDesign. Returns empty array when valid. */
export function validateSensorFaultHaltDesign(instance: SensorFaultHaltDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultHaltDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[SensorFaultHaltDesign] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SensorFaultHaltDesign] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for UserSetpointAdjustmentDesign. Returns empty array when valid. */
export function validateUserSetpointAdjustmentDesign(instance: UserSetpointAdjustmentDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[UserSetpointAdjustmentDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[UserSetpointAdjustmentDesign] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[UserSetpointAdjustmentDesign] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for SafeHaltClearanceDesign. Returns empty array when valid. */
export function validateSafeHaltClearanceDesign(instance: SafeHaltClearanceDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SafeHaltClearanceDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[SafeHaltClearanceDesign] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SafeHaltClearanceDesign] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignTeam. Returns empty array when valid. */
export function validateDesignTeam(instance: DesignTeam): readonly string[] {
  const violations: string[] = [];
  if (!((instance.teamId !== null))) {
    violations.push("[DesignTeam] invariant violated: self.teamId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[DesignTeam] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for SystemArchitect. Returns empty array when valid. */
export function validateSystemArchitect(instance: SystemArchitect): readonly string[] {
  const violations: string[] = [];
  if (!((instance.architectId !== null))) {
    violations.push("[SystemArchitect] invariant violated: self.architectId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[SystemArchitect] invariant violated: self.name <> null");
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


// ─── Event handler wrappers ───

/** Impl signature for TemperatureSensorComponent.ingestReading. User supplies this. */
export type TemperatureSensorComponentIngestReadingImpl = (self: TemperatureSensorComponent, readingF: number, atMinute: number) => { self: TemperatureSensorComponent; modified: { currentTempF: unknown; sensorPlausible: unknown; sensorAlertActive: unknown; currentMinute: unknown } };

/** Contract-checking wrapper for TemperatureSensorComponent.ingestReading. */
export function wrapTemperatureSensorComponentIngestReading(impl: TemperatureSensorComponentIngestReadingImpl): (self: TemperatureSensorComponent, readingF: number, atMinute: number) => TemperatureSensorComponent {
  return (self, readingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[TemperatureSensorComponent.ingestReading] pre violated: atMinute >= self.currentMinute");
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
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.sensorPlausible === ((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))))) {
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: self.sensorPlausible =\n            (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)");
      }
      if (!(((((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))) ? ((__result.self.currentTempF === readingF)) : ((__result.self.currentTempF === __pre["self.currentTempF"]))))) {
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: if (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.currentTempF = readingF\n          else self.currentTempF = self.currentTempF@pre\n          endif");
      }
      if (!(((!(((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF)))) ? ((__result.self.sensorAlertActive === true)) : ((__result.self.sensorAlertActive === false))))) {
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: if not (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.sensorAlertActive = true\n          else self.sensorAlertActive = false\n          endif");
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

/** Impl signature for TemperatureSensorComponent.ingestReading (async). User supplies this. */
export type TemperatureSensorComponentIngestReadingAsyncImpl = (self: TemperatureSensorComponent, readingF: number, atMinute: number) => Promise<{ self: TemperatureSensorComponent; modified: { currentTempF: unknown; sensorPlausible: unknown; sensorAlertActive: unknown; currentMinute: unknown } }>;

/** Contract-checking wrapper for TemperatureSensorComponent.ingestReading (async). */
export function wrapTemperatureSensorComponentIngestReadingAsync(impl: TemperatureSensorComponentIngestReadingAsyncImpl): (self: TemperatureSensorComponent, readingF: number, atMinute: number) => Promise<TemperatureSensorComponent> {
  return async (self, readingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[TemperatureSensorComponent.ingestReading] pre violated: atMinute >= self.currentMinute");
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
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: self.currentMinute = atMinute");
      }
      if (!((__result.self.sensorPlausible === ((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))))) {
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: self.sensorPlausible =\n            (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)");
      }
      if (!(((((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF))) ? ((__result.self.currentTempF === readingF)) : ((__result.self.currentTempF === __pre["self.currentTempF"]))))) {
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: if (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.currentTempF = readingF\n          else self.currentTempF = self.currentTempF@pre\n          endif");
      }
      if (!(((!(((readingF >= __result.self.plausibleMinF) && (readingF <= __result.self.plausibleMaxF)))) ? ((__result.self.sensorAlertActive === true)) : ((__result.self.sensorAlertActive === false))))) {
        postViolations.push("[TemperatureSensorComponent.ingestReading] post violated: if not (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)\n          then self.sensorAlertActive = true\n          else self.sensorAlertActive = false\n          endif");
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

/** Impl signature for TemperatureSensorComponent.clearSensorAlert. User supplies this. */
export type TemperatureSensorComponentClearSensorAlertImpl = (self: TemperatureSensorComponent, verifiedReadingF: number, atMinute: number) => { self: TemperatureSensorComponent; modified: { sensorPlausible: unknown; sensorAlertActive: unknown; currentTempF: unknown; currentMinute: unknown } };

/** Contract-checking wrapper for TemperatureSensorComponent.clearSensorAlert. */
export function wrapTemperatureSensorComponentClearSensorAlert(impl: TemperatureSensorComponentClearSensorAlertImpl): (self: TemperatureSensorComponent, verifiedReadingF: number, atMinute: number) => TemperatureSensorComponent {
  return (self, verifiedReadingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((self.sensorAlertActive === true))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: self.sensorAlertActive = true");
    }
    if (!((verifiedReadingF >= self.plausibleMinF))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: verifiedReadingF >= self.plausibleMinF");
    }
    if (!((verifiedReadingF <= self.plausibleMaxF))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: verifiedReadingF <= self.plausibleMaxF");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, verifiedReadingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.sensorPlausible === true))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.sensorPlausible = true");
      }
      if (!((__result.self.sensorAlertActive === false))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.sensorAlertActive = false");
      }
      if (!((__result.self.currentTempF === verifiedReadingF))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.currentTempF = verifiedReadingF");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.currentMinute = atMinute");
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

/** Impl signature for TemperatureSensorComponent.clearSensorAlert (async). User supplies this. */
export type TemperatureSensorComponentClearSensorAlertAsyncImpl = (self: TemperatureSensorComponent, verifiedReadingF: number, atMinute: number) => Promise<{ self: TemperatureSensorComponent; modified: { sensorPlausible: unknown; sensorAlertActive: unknown; currentTempF: unknown; currentMinute: unknown } }>;

/** Contract-checking wrapper for TemperatureSensorComponent.clearSensorAlert (async). */
export function wrapTemperatureSensorComponentClearSensorAlertAsync(impl: TemperatureSensorComponentClearSensorAlertAsyncImpl): (self: TemperatureSensorComponent, verifiedReadingF: number, atMinute: number) => Promise<TemperatureSensorComponent> {
  return async (self, verifiedReadingF, atMinute) => {
    const preViolations: string[] = [];
    if (!((self.sensorAlertActive === true))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: self.sensorAlertActive = true");
    }
    if (!((verifiedReadingF >= self.plausibleMinF))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: verifiedReadingF >= self.plausibleMinF");
    }
    if (!((verifiedReadingF <= self.plausibleMaxF))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: verifiedReadingF <= self.plausibleMaxF");
    }
    if (!((atMinute >= self.currentMinute))) {
      preViolations.push("[TemperatureSensorComponent.clearSensorAlert] pre violated: atMinute >= self.currentMinute");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, verifiedReadingF, atMinute);
      const postViolations: string[] = [];
      if (!((__result.self.sensorPlausible === true))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.sensorPlausible = true");
      }
      if (!((__result.self.sensorAlertActive === false))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.sensorAlertActive = false");
      }
      if (!((__result.self.currentTempF === verifiedReadingF))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.currentTempF = verifiedReadingF");
      }
      if (!((__result.self.currentMinute === atMinute))) {
        postViolations.push("[TemperatureSensorComponent.clearSensorAlert] post violated: self.currentMinute = atMinute");
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

/** Impl signature for SetpointControllerComponent.updateSetpoint. User supplies this. */
export type SetpointControllerComponentUpdateSetpointImpl = (self: SetpointControllerComponent, requestedF: number, sensorOk: boolean, alertActive: boolean) => { self: SetpointControllerComponent; modified: { requestedSetpointF: unknown; clampedSetpointF: unknown } };

/** Contract-checking wrapper for SetpointControllerComponent.updateSetpoint. */
export function wrapSetpointControllerComponentUpdateSetpoint(impl: SetpointControllerComponentUpdateSetpointImpl): (self: SetpointControllerComponent, requestedF: number, sensorOk: boolean, alertActive: boolean) => SetpointControllerComponent {
  return (self, requestedF, sensorOk, alertActive) => {
    const preViolations: string[] = [];
    if (!((sensorOk === true))) {
      preViolations.push("[SetpointControllerComponent.updateSetpoint] pre violated: sensorOk = true");
    }
    if (!(!(alertActive))) {
      preViolations.push("[SetpointControllerComponent.updateSetpoint] pre violated: not alertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedF, sensorOk, alertActive);
      const postViolations: string[] = [];
      if (!((__result.self.requestedSetpointF === requestedF))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.requestedSetpointF = requestedF");
      }
      if (!((__result.self.clampedSetpointF === (((requestedF < __result.self.safeMinTempF)) ? (__result.self.safeMinTempF) : ((((requestedF > __result.self.safeMaxTempF)) ? (__result.self.safeMaxTempF) : (requestedF))))))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.clampedSetpointF =\n            if requestedF < self.safeMinTempF then self.safeMinTempF\n            else if requestedF > self.safeMaxTempF then self.safeMaxTempF\n            else requestedF\n            endif endif");
      }
      if (!((__result.self.clampedSetpointF >= __result.self.safeMinTempF))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.clampedSetpointF >= self.safeMinTempF");
      }
      if (!((__result.self.clampedSetpointF <= __result.self.safeMaxTempF))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.clampedSetpointF <= self.safeMaxTempF");
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

/** Impl signature for SetpointControllerComponent.updateSetpoint (async). User supplies this. */
export type SetpointControllerComponentUpdateSetpointAsyncImpl = (self: SetpointControllerComponent, requestedF: number, sensorOk: boolean, alertActive: boolean) => Promise<{ self: SetpointControllerComponent; modified: { requestedSetpointF: unknown; clampedSetpointF: unknown } }>;

/** Contract-checking wrapper for SetpointControllerComponent.updateSetpoint (async). */
export function wrapSetpointControllerComponentUpdateSetpointAsync(impl: SetpointControllerComponentUpdateSetpointAsyncImpl): (self: SetpointControllerComponent, requestedF: number, sensorOk: boolean, alertActive: boolean) => Promise<SetpointControllerComponent> {
  return async (self, requestedF, sensorOk, alertActive) => {
    const preViolations: string[] = [];
    if (!((sensorOk === true))) {
      preViolations.push("[SetpointControllerComponent.updateSetpoint] pre violated: sensorOk = true");
    }
    if (!(!(alertActive))) {
      preViolations.push("[SetpointControllerComponent.updateSetpoint] pre violated: not alertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedF, sensorOk, alertActive);
      const postViolations: string[] = [];
      if (!((__result.self.requestedSetpointF === requestedF))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.requestedSetpointF = requestedF");
      }
      if (!((__result.self.clampedSetpointF === (((requestedF < __result.self.safeMinTempF)) ? (__result.self.safeMinTempF) : ((((requestedF > __result.self.safeMaxTempF)) ? (__result.self.safeMaxTempF) : (requestedF))))))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.clampedSetpointF =\n            if requestedF < self.safeMinTempF then self.safeMinTempF\n            else if requestedF > self.safeMaxTempF then self.safeMaxTempF\n            else requestedF\n            endif endif");
      }
      if (!((__result.self.clampedSetpointF >= __result.self.safeMinTempF))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.clampedSetpointF >= self.safeMinTempF");
      }
      if (!((__result.self.clampedSetpointF <= __result.self.safeMaxTempF))) {
        postViolations.push("[SetpointControllerComponent.updateSetpoint] post violated: self.clampedSetpointF <= self.safeMaxTempF");
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

/** Impl signature for SetpointControllerComponent.rejectSetpointWhileHalted. User supplies this. */
export type SetpointControllerComponentRejectSetpointWhileHaltedImpl = (self: SetpointControllerComponent, requestedF: number) => { self: SetpointControllerComponent; modified: { clampedSetpointF: unknown; requestedSetpointF: unknown } };

/** Contract-checking wrapper for SetpointControllerComponent.rejectSetpointWhileHalted. */
export function wrapSetpointControllerComponentRejectSetpointWhileHalted(impl: SetpointControllerComponentRejectSetpointWhileHaltedImpl): (self: SetpointControllerComponent, requestedF: number) => SetpointControllerComponent {
  return (self, requestedF) => {
    const preViolations: string[] = [];
    if (!(((requestedF !== requestedF) || (self.clampedSetpointF >= self.safeMinTempF)))) {
      preViolations.push("[SetpointControllerComponent.rejectSetpointWhileHalted] pre violated: requestedF <> requestedF or self.clampedSetpointF >= self.safeMinTempF");
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
        postViolations.push("[SetpointControllerComponent.rejectSetpointWhileHalted] post violated: self.clampedSetpointF = self.clampedSetpointF@pre");
      }
      if (!((__result.self.requestedSetpointF === __pre["self.requestedSetpointF"]))) {
        postViolations.push("[SetpointControllerComponent.rejectSetpointWhileHalted] post violated: self.requestedSetpointF = self.requestedSetpointF@pre");
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

/** Impl signature for SetpointControllerComponent.rejectSetpointWhileHalted (async). User supplies this. */
export type SetpointControllerComponentRejectSetpointWhileHaltedAsyncImpl = (self: SetpointControllerComponent, requestedF: number) => Promise<{ self: SetpointControllerComponent; modified: { clampedSetpointF: unknown; requestedSetpointF: unknown } }>;

/** Contract-checking wrapper for SetpointControllerComponent.rejectSetpointWhileHalted (async). */
export function wrapSetpointControllerComponentRejectSetpointWhileHaltedAsync(impl: SetpointControllerComponentRejectSetpointWhileHaltedAsyncImpl): (self: SetpointControllerComponent, requestedF: number) => Promise<SetpointControllerComponent> {
  return async (self, requestedF) => {
    const preViolations: string[] = [];
    if (!(((requestedF !== requestedF) || (self.clampedSetpointF >= self.safeMinTempF)))) {
      preViolations.push("[SetpointControllerComponent.rejectSetpointWhileHalted] pre violated: requestedF <> requestedF or self.clampedSetpointF >= self.safeMinTempF");
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
        postViolations.push("[SetpointControllerComponent.rejectSetpointWhileHalted] post violated: self.clampedSetpointF = self.clampedSetpointF@pre");
      }
      if (!((__result.self.requestedSetpointF === __pre["self.requestedSetpointF"]))) {
        postViolations.push("[SetpointControllerComponent.rejectSetpointWhileHalted] post violated: self.requestedSetpointF = self.requestedSetpointF@pre");
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

/** Impl signature for ActuatorDriverComponent.driveActuator. User supplies this. */
export type ActuatorDriverComponentDriveActuatorImpl = (self: ActuatorDriverComponent, currentTempF: number, clampedSetpointF: number, atMinute: number) => { self: ActuatorDriverComponent; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown } };

/** Contract-checking wrapper for ActuatorDriverComponent.driveActuator. */
export function wrapActuatorDriverComponentDriveActuator(impl: ActuatorDriverComponentDriveActuatorImpl): (self: ActuatorDriverComponent, currentTempF: number, clampedSetpointF: number, atMinute: number) => ActuatorDriverComponent {
  return (self, currentTempF, clampedSetpointF, atMinute) => {
    const preViolations: string[] = [];
    if (!(!(self.alertActive))) {
      preViolations.push("[ActuatorDriverComponent.driveActuator] pre violated: not self.alertActive");
    }
    if (!((atMinute >= self.lastTransitionMinute))) {
      preViolations.push("[ActuatorDriverComponent.driveActuator] pre violated: atMinute >= self.lastTransitionMinute");
    }
    if (!(((atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes))) {
      preViolations.push("[ActuatorDriverComponent.driveActuator] pre violated: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTempF, clampedSetpointF, atMinute);
      const postViolations: string[] = [];
      if (!((((currentTempF < clampedSetpointF)) ? ((__result.self.actuatorSignal === "HEAT")) : ((((currentTempF > clampedSetpointF)) ? ((__result.self.actuatorSignal === "COOL")) : ((__result.self.actuatorSignal === "OFF"))))))) {
        postViolations.push("[ActuatorDriverComponent.driveActuator] post violated: if currentTempF < clampedSetpointF\n          then self.actuatorSignal = 'HEAT'\n          else if currentTempF > clampedSetpointF\n          then self.actuatorSignal = 'COOL'\n          else self.actuatorSignal = 'OFF'\n          endif endif");
      }
      if (!((__result.self.lastTransitionMinute === atMinute))) {
        postViolations.push("[ActuatorDriverComponent.driveActuator] post violated: self.lastTransitionMinute = atMinute");
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

/** Impl signature for ActuatorDriverComponent.driveActuator (async). User supplies this. */
export type ActuatorDriverComponentDriveActuatorAsyncImpl = (self: ActuatorDriverComponent, currentTempF: number, clampedSetpointF: number, atMinute: number) => Promise<{ self: ActuatorDriverComponent; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown } }>;

/** Contract-checking wrapper for ActuatorDriverComponent.driveActuator (async). */
export function wrapActuatorDriverComponentDriveActuatorAsync(impl: ActuatorDriverComponentDriveActuatorAsyncImpl): (self: ActuatorDriverComponent, currentTempF: number, clampedSetpointF: number, atMinute: number) => Promise<ActuatorDriverComponent> {
  return async (self, currentTempF, clampedSetpointF, atMinute) => {
    const preViolations: string[] = [];
    if (!(!(self.alertActive))) {
      preViolations.push("[ActuatorDriverComponent.driveActuator] pre violated: not self.alertActive");
    }
    if (!((atMinute >= self.lastTransitionMinute))) {
      preViolations.push("[ActuatorDriverComponent.driveActuator] pre violated: atMinute >= self.lastTransitionMinute");
    }
    if (!(((atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes))) {
      preViolations.push("[ActuatorDriverComponent.driveActuator] pre violated: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTempF, clampedSetpointF, atMinute);
      const postViolations: string[] = [];
      if (!((((currentTempF < clampedSetpointF)) ? ((__result.self.actuatorSignal === "HEAT")) : ((((currentTempF > clampedSetpointF)) ? ((__result.self.actuatorSignal === "COOL")) : ((__result.self.actuatorSignal === "OFF"))))))) {
        postViolations.push("[ActuatorDriverComponent.driveActuator] post violated: if currentTempF < clampedSetpointF\n          then self.actuatorSignal = 'HEAT'\n          else if currentTempF > clampedSetpointF\n          then self.actuatorSignal = 'COOL'\n          else self.actuatorSignal = 'OFF'\n          endif endif");
      }
      if (!((__result.self.lastTransitionMinute === atMinute))) {
        postViolations.push("[ActuatorDriverComponent.driveActuator] post violated: self.lastTransitionMinute = atMinute");
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

/** Impl signature for ActuatorDriverComponent.engageSafeHalt. User supplies this. */
export type ActuatorDriverComponentEngageSafeHaltImpl = (self: ActuatorDriverComponent) => { self: ActuatorDriverComponent; modified: { actuatorSignal: unknown; alertActive: unknown } };

/** Contract-checking wrapper for ActuatorDriverComponent.engageSafeHalt. */
export function wrapActuatorDriverComponentEngageSafeHalt(impl: ActuatorDriverComponentEngageSafeHaltImpl): (self: ActuatorDriverComponent) => ActuatorDriverComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.alertActive))) {
      preViolations.push("[ActuatorDriverComponent.engageSafeHalt] pre violated: not self.alertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[ActuatorDriverComponent.engageSafeHalt] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[ActuatorDriverComponent.engageSafeHalt] post violated: self.alertActive = true");
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

/** Impl signature for ActuatorDriverComponent.engageSafeHalt (async). User supplies this. */
export type ActuatorDriverComponentEngageSafeHaltAsyncImpl = (self: ActuatorDriverComponent) => Promise<{ self: ActuatorDriverComponent; modified: { actuatorSignal: unknown; alertActive: unknown } }>;

/** Contract-checking wrapper for ActuatorDriverComponent.engageSafeHalt (async). */
export function wrapActuatorDriverComponentEngageSafeHaltAsync(impl: ActuatorDriverComponentEngageSafeHaltAsyncImpl): (self: ActuatorDriverComponent) => Promise<ActuatorDriverComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.alertActive))) {
      preViolations.push("[ActuatorDriverComponent.engageSafeHalt] pre violated: not self.alertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorSignal === "OFF"))) {
        postViolations.push("[ActuatorDriverComponent.engageSafeHalt] post violated: self.actuatorSignal = 'OFF'");
      }
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[ActuatorDriverComponent.engageSafeHalt] post violated: self.alertActive = true");
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

/** Impl signature for ActuatorDriverComponent.clearHalt. User supplies this. */
export type ActuatorDriverComponentClearHaltImpl = (self: ActuatorDriverComponent) => { self: ActuatorDriverComponent; modified: { alertActive: unknown } };

/** Contract-checking wrapper for ActuatorDriverComponent.clearHalt. */
export function wrapActuatorDriverComponentClearHalt(impl: ActuatorDriverComponentClearHaltImpl): (self: ActuatorDriverComponent) => ActuatorDriverComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[ActuatorDriverComponent.clearHalt] pre violated: self.alertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[ActuatorDriverComponent.clearHalt] post violated: self.alertActive = false");
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

/** Impl signature for ActuatorDriverComponent.clearHalt (async). User supplies this. */
export type ActuatorDriverComponentClearHaltAsyncImpl = (self: ActuatorDriverComponent) => Promise<{ self: ActuatorDriverComponent; modified: { alertActive: unknown } }>;

/** Contract-checking wrapper for ActuatorDriverComponent.clearHalt (async). */
export function wrapActuatorDriverComponentClearHaltAsync(impl: ActuatorDriverComponentClearHaltAsyncImpl): (self: ActuatorDriverComponent) => Promise<ActuatorDriverComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alertActive === true))) {
      preViolations.push("[ActuatorDriverComponent.clearHalt] pre violated: self.alertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[ActuatorDriverComponent.clearHalt] post violated: self.alertActive = false");
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

/** Impl signature for ActuatorDriverComponent.rejectEarlyCycle. User supplies this. */
export type ActuatorDriverComponentRejectEarlyCycleImpl = (self: ActuatorDriverComponent, atMinute: number) => { self: ActuatorDriverComponent; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown } };

/** Contract-checking wrapper for ActuatorDriverComponent.rejectEarlyCycle. */
export function wrapActuatorDriverComponentRejectEarlyCycle(impl: ActuatorDriverComponentRejectEarlyCycleImpl): (self: ActuatorDriverComponent, atMinute: number) => ActuatorDriverComponent {
  return (self, atMinute) => {
    const preViolations: string[] = [];
    if (!(((atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes))) {
      preViolations.push("[ActuatorDriverComponent.rejectEarlyCycle] pre violated: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes");
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
        postViolations.push("[ActuatorDriverComponent.rejectEarlyCycle] post violated: self.actuatorSignal = self.actuatorSignal@pre");
      }
      if (!((__result.self.lastTransitionMinute === __pre["self.lastTransitionMinute"]))) {
        postViolations.push("[ActuatorDriverComponent.rejectEarlyCycle] post violated: self.lastTransitionMinute = self.lastTransitionMinute@pre");
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

/** Impl signature for ActuatorDriverComponent.rejectEarlyCycle (async). User supplies this. */
export type ActuatorDriverComponentRejectEarlyCycleAsyncImpl = (self: ActuatorDriverComponent, atMinute: number) => Promise<{ self: ActuatorDriverComponent; modified: { actuatorSignal: unknown; lastTransitionMinute: unknown } }>;

/** Contract-checking wrapper for ActuatorDriverComponent.rejectEarlyCycle (async). */
export function wrapActuatorDriverComponentRejectEarlyCycleAsync(impl: ActuatorDriverComponentRejectEarlyCycleAsyncImpl): (self: ActuatorDriverComponent, atMinute: number) => Promise<ActuatorDriverComponent> {
  return async (self, atMinute) => {
    const preViolations: string[] = [];
    if (!(((atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes))) {
      preViolations.push("[ActuatorDriverComponent.rejectEarlyCycle] pre violated: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes");
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
        postViolations.push("[ActuatorDriverComponent.rejectEarlyCycle] post violated: self.actuatorSignal = self.actuatorSignal@pre");
      }
      if (!((__result.self.lastTransitionMinute === __pre["self.lastTransitionMinute"]))) {
        postViolations.push("[ActuatorDriverComponent.rejectEarlyCycle] post violated: self.lastTransitionMinute = self.lastTransitionMinute@pre");
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

/** Impl signature for DisplayComponent.refreshDisplay. User supplies this. */
export type DisplayComponentRefreshDisplayImpl = (self: DisplayComponent, tempF: number, setpointF: number, actuatorSig: string, alertActive: boolean) => { self: DisplayComponent; modified: { displayCurrentTempF: unknown; displaySetpointF: unknown; displayActuatorSignal: unknown; displayAlertActive: unknown } };

/** Contract-checking wrapper for DisplayComponent.refreshDisplay. */
export function wrapDisplayComponentRefreshDisplay(impl: DisplayComponentRefreshDisplayImpl): (self: DisplayComponent, tempF: number, setpointF: number, actuatorSig: string, alertActive: boolean) => DisplayComponent {
  return (self, tempF, setpointF, actuatorSig, alertActive) => {
    const preViolations: string[] = [];
    if (!((self.displayRefreshSeconds > 0))) {
      preViolations.push("[DisplayComponent.refreshDisplay] pre violated: self.displayRefreshSeconds > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tempF, setpointF, actuatorSig, alertActive);
      const postViolations: string[] = [];
      if (!((__result.self.displayCurrentTempF === tempF))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displayCurrentTempF = tempF");
      }
      if (!((__result.self.displaySetpointF === setpointF))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displaySetpointF = setpointF");
      }
      if (!((__result.self.displayActuatorSignal === actuatorSig))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displayActuatorSignal = actuatorSig");
      }
      if (!((__result.self.displayAlertActive === alertActive))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displayAlertActive = alertActive");
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

/** Impl signature for DisplayComponent.refreshDisplay (async). User supplies this. */
export type DisplayComponentRefreshDisplayAsyncImpl = (self: DisplayComponent, tempF: number, setpointF: number, actuatorSig: string, alertActive: boolean) => Promise<{ self: DisplayComponent; modified: { displayCurrentTempF: unknown; displaySetpointF: unknown; displayActuatorSignal: unknown; displayAlertActive: unknown } }>;

/** Contract-checking wrapper for DisplayComponent.refreshDisplay (async). */
export function wrapDisplayComponentRefreshDisplayAsync(impl: DisplayComponentRefreshDisplayAsyncImpl): (self: DisplayComponent, tempF: number, setpointF: number, actuatorSig: string, alertActive: boolean) => Promise<DisplayComponent> {
  return async (self, tempF, setpointF, actuatorSig, alertActive) => {
    const preViolations: string[] = [];
    if (!((self.displayRefreshSeconds > 0))) {
      preViolations.push("[DisplayComponent.refreshDisplay] pre violated: self.displayRefreshSeconds > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tempF, setpointF, actuatorSig, alertActive);
      const postViolations: string[] = [];
      if (!((__result.self.displayCurrentTempF === tempF))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displayCurrentTempF = tempF");
      }
      if (!((__result.self.displaySetpointF === setpointF))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displaySetpointF = setpointF");
      }
      if (!((__result.self.displayActuatorSignal === actuatorSig))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displayActuatorSignal = actuatorSig");
      }
      if (!((__result.self.displayAlertActive === alertActive))) {
        postViolations.push("[DisplayComponent.refreshDisplay] post violated: self.displayAlertActive = alertActive");
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

/** Impl signature for DisplayComponent.showAlert. User supplies this. */
export type DisplayComponentShowAlertImpl = (self: DisplayComponent) => { self: DisplayComponent; modified: { displayAlertActive: unknown; displayActuatorSignal: unknown } };

/** Contract-checking wrapper for DisplayComponent.showAlert. */
export function wrapDisplayComponentShowAlert(impl: DisplayComponentShowAlertImpl): (self: DisplayComponent) => DisplayComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.displayAlertActive))) {
      preViolations.push("[DisplayComponent.showAlert] pre violated: not self.displayAlertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayAlertActive === true))) {
        postViolations.push("[DisplayComponent.showAlert] post violated: self.displayAlertActive = true");
      }
      if (!((__result.self.displayActuatorSignal === "OFF"))) {
        postViolations.push("[DisplayComponent.showAlert] post violated: self.displayActuatorSignal = 'OFF'");
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

/** Impl signature for DisplayComponent.showAlert (async). User supplies this. */
export type DisplayComponentShowAlertAsyncImpl = (self: DisplayComponent) => Promise<{ self: DisplayComponent; modified: { displayAlertActive: unknown; displayActuatorSignal: unknown } }>;

/** Contract-checking wrapper for DisplayComponent.showAlert (async). */
export function wrapDisplayComponentShowAlertAsync(impl: DisplayComponentShowAlertAsyncImpl): (self: DisplayComponent) => Promise<DisplayComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.displayAlertActive))) {
      preViolations.push("[DisplayComponent.showAlert] pre violated: not self.displayAlertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayAlertActive === true))) {
        postViolations.push("[DisplayComponent.showAlert] post violated: self.displayAlertActive = true");
      }
      if (!((__result.self.displayActuatorSignal === "OFF"))) {
        postViolations.push("[DisplayComponent.showAlert] post violated: self.displayActuatorSignal = 'OFF'");
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

/** Impl signature for DisplayComponent.clearAlert. User supplies this. */
export type DisplayComponentClearAlertImpl = (self: DisplayComponent) => { self: DisplayComponent; modified: { displayAlertActive: unknown } };

/** Contract-checking wrapper for DisplayComponent.clearAlert. */
export function wrapDisplayComponentClearAlert(impl: DisplayComponentClearAlertImpl): (self: DisplayComponent) => DisplayComponent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.displayAlertActive === true))) {
      preViolations.push("[DisplayComponent.clearAlert] pre violated: self.displayAlertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayAlertActive === false))) {
        postViolations.push("[DisplayComponent.clearAlert] post violated: self.displayAlertActive = false");
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

/** Impl signature for DisplayComponent.clearAlert (async). User supplies this. */
export type DisplayComponentClearAlertAsyncImpl = (self: DisplayComponent) => Promise<{ self: DisplayComponent; modified: { displayAlertActive: unknown } }>;

/** Contract-checking wrapper for DisplayComponent.clearAlert (async). */
export function wrapDisplayComponentClearAlertAsync(impl: DisplayComponentClearAlertAsyncImpl): (self: DisplayComponent) => Promise<DisplayComponent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.displayAlertActive === true))) {
      preViolations.push("[DisplayComponent.clearAlert] pre violated: self.displayAlertActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayAlertActive === false))) {
        postViolations.push("[DisplayComponent.clearAlert] post violated: self.displayAlertActive = false");
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

/** Lifecycle registry for AdrCycleGuardEncapsulation commitments. */
export class AdrCycleGuardEncapsulationRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AdrCycleGuardEncapsulation>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AdrCycleGuardEncapsulation — the typed wrapper guarantees that since
    // `register` only accepts AdrCycleGuardEncapsulation instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AdrCycleGuardEncapsulation): void {
    this.inner.register(commitment.adrId as string, commitment);
  }

  getState(id: AdrCycleGuardEncapsulationId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AdrCycleGuardEncapsulationId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AdrCycleGuardEncapsulationId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AdrCycleGuardEncapsulation>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AdrCycleGuardEncapsulation>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AdrSetpointClampOwnership commitments. */
export class AdrSetpointClampOwnershipRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AdrSetpointClampOwnership>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AdrSetpointClampOwnership — the typed wrapper guarantees that since
    // `register` only accepts AdrSetpointClampOwnership instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AdrSetpointClampOwnership): void {
    this.inner.register(commitment.adrId as string, commitment);
  }

  getState(id: AdrSetpointClampOwnershipId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AdrSetpointClampOwnershipId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AdrSetpointClampOwnershipId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AdrSetpointClampOwnership>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AdrSetpointClampOwnership>[];
  }

  size(): number {
    return this.inner.size();
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

