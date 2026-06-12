// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TemperatureSensor. Runtime: string. Compile-time: branded. */
export type TemperatureSensorId = string & { readonly __brand: "TemperatureSensorId" };
/** Identity type for SetpointController. Runtime: string. Compile-time: branded. */
export type SetpointControllerId = string & { readonly __brand: "SetpointControllerId" };
/** Identity type for ActuatorDriver. Runtime: string. Compile-time: branded. */
export type ActuatorDriverId = string & { readonly __brand: "ActuatorDriverId" };
/** Identity type for DisplayManager. Runtime: string. Compile-time: branded. */
export type DisplayManagerId = string & { readonly __brand: "DisplayManagerId" };
/** Identity type for SafetyMonitor. Runtime: string. Compile-time: branded. */
export type SafetyMonitorId = string & { readonly __brand: "SafetyMonitorId" };
/** Identity type for SensorChannel. Runtime: string. Compile-time: branded. */
export type SensorChannelId = string & { readonly __brand: "SensorChannelId" };
/** Identity type for ControlBus. Runtime: string. Compile-time: branded. */
export type ControlBusId = string & { readonly __brand: "ControlBusId" };
/** Identity type for UserInterfaceBus. Runtime: string. Compile-time: branded. */
export type UserInterfaceBusId = string & { readonly __brand: "UserInterfaceBusId" };
/** Identity type for SensorReadCycle. Runtime: string. Compile-time: branded. */
export type SensorReadCycleId = string & { readonly __brand: "SensorReadCycleId" };
/** Identity type for HomeOwner. Runtime: string. Compile-time: branded. */
export type HomeOwnerId = string & { readonly __brand: "HomeOwnerId" };
/** Identity type for Regulator. Runtime: string. Compile-time: branded. */
export type RegulatorId = string & { readonly __brand: "RegulatorId" };
/** Identity type for Contractor. Runtime: string. Compile-time: branded. */
export type ContractorId = string & { readonly __brand: "ContractorId" };
/** Identity type for ThermostatVendor. Runtime: string. Compile-time: branded. */
export type ThermostatVendorId = string & { readonly __brand: "ThermostatVendorId" };
/** Identity type for ThermostatSystemKind. Runtime: string. Compile-time: branded. */
export type ThermostatSystemKindId = string & { readonly __brand: "ThermostatSystemKindId" };
/** Identity type for SafeSetpointCommitment. Runtime: string. Compile-time: branded. */
export type SafeSetpointCommitmentId = string & { readonly __brand: "SafeSetpointCommitmentId" };
/** Identity type for PlausibleSensorCommitment. Runtime: string. Compile-time: branded. */
export type PlausibleSensorCommitmentId = string & { readonly __brand: "PlausibleSensorCommitmentId" };
/** Identity type for FaultNotificationCommitment. Runtime: string. Compile-time: branded. */
export type FaultNotificationCommitmentId = string & { readonly __brand: "FaultNotificationCommitmentId" };
/** Identity type for CyclingLimitCommitment. Runtime: string. Compile-time: branded. */
export type CyclingLimitCommitmentId = string & { readonly __brand: "CyclingLimitCommitmentId" };
/** Identity type for DisplayStateCommitment. Runtime: string. Compile-time: branded. */
export type DisplayStateCommitmentId = string & { readonly __brand: "DisplayStateCommitmentId" };
/** Identity type for SetpointRequest. Runtime: string. Compile-time: branded. */
export type SetpointRequestId = string & { readonly __brand: "SetpointRequestId" };
/** Identity type for SensorReading. Runtime: string. Compile-time: branded. */
export type SensorReadingId = string & { readonly __brand: "SensorReadingId" };
/** Identity type for ActuatorCommand. Runtime: string. Compile-time: branded. */
export type ActuatorCommandId = string & { readonly __brand: "ActuatorCommandId" };
/** Identity type for SafeHaltEvent. Runtime: string. Compile-time: branded. */
export type SafeHaltEventId = string & { readonly __brand: "SafeHaltEventId" };
/** Identity type for UserAlert. Runtime: string. Compile-time: branded. */
export type UserAlertId = string & { readonly __brand: "UserAlertId" };
/** Identity type for ThermostatControlCycle. Runtime: string. Compile-time: branded. */
export type ThermostatControlCycleId = string & { readonly __brand: "ThermostatControlCycleId" };
/** Identity type for ThermostatSystem. Runtime: string. Compile-time: branded. */
export type ThermostatSystemId = string & { readonly __brand: "ThermostatSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TemperatureSensor {
  readonly sensorId: TemperatureSensorId;
  readonly lastReading: number;
  readonly lastTimestamp: number;
  readonly isOperational: boolean;
}

/** @stereotype <<Kind>> */
export interface SetpointController {
  readonly controllerId: SetpointControllerId;
  readonly clampedSetpoint: number;
  readonly safeMin: number;
  readonly safeMax: number;
  readonly currentTemperatureInput: number;
  readonly decisionCommand: string;
}

/** @stereotype <<Kind>> */
export interface ActuatorDriver {
  readonly driverId: ActuatorDriverId;
  readonly commandedState: string;
  readonly lastTransitionTimestamp: number;
  readonly minIntervalSecs: number;
}

/** @stereotype <<Kind>> */
export interface DisplayManager {
  readonly displayId: DisplayManagerId;
  readonly displayedTemperature: number;
  readonly displayedSetpoint: number;
  readonly displayedActuatorState: string;
  readonly displayError: string;
  readonly isErrorActive: boolean;
}

/** @stereotype <<Kind>> */
export interface SafetyMonitor {
  readonly monitorId: SafetyMonitorId;
  readonly plausibilityMin: number;
  readonly plausibilityMax: number;
  readonly systemHalted: boolean;
  readonly faultAlertRaised: boolean;
}

/** @stereotype <<Role>> */
export interface SensorProvider {
  readonly sensorId: string;
  readonly lastReading: number;
  readonly isOperational: boolean;
}

/** @stereotype <<Role>> */
export interface SensorConsumer {
  readonly monitorId: string;
  readonly plausibilityMin: number;
  readonly plausibilityMax: number;
}

/** @stereotype <<Relator>> */
export interface SensorChannel {
  readonly channelId: SensorChannelId;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
  readonly lastDeliveredReading: number;
  readonly lastDeliveredTimestamp: number;
  readonly readingIsPlausible: boolean;
}

/** @stereotype <<Role>> */
export interface ControllerEndpoint {
  readonly controllerId: string;
  readonly decisionCommand: string;
  readonly currentTemperatureInput: number;
}

/** @stereotype <<Role>> */
export interface ActuatorEndpoint {
  readonly driverId: string;
  readonly commandedState: string;
  readonly lastTransitionTimestamp: number;
  readonly minIntervalSecs: number;
}

/** @stereotype <<Relator>> */
export interface ControlBus {
  readonly busId: ControlBusId;
  readonly lastCommand: string;
  readonly cyclingAllowed: boolean;
  readonly endpointCommandedState: string;
  readonly endpointLastTransitionTimestamp: number;
  readonly endpointMinIntervalSecs: number;
  readonly endpointDecisionCommand: string;
}

/** @stereotype <<Role>> */
export interface DisplayEndpoint {
  readonly displayId: string;
  readonly displayedTemperature: number;
  readonly displayedSetpoint: number;
  readonly displayedActuatorState: string;
  readonly isErrorActive: boolean;
}

/** @stereotype <<Role>> */
export interface SetpointSource {
  readonly controllerId: string;
  readonly clampedSetpoint: number;
  readonly decisionCommand: string;
}

/** @stereotype <<Role>> */
export interface ActuatorStateSource {
  readonly driverId: string;
  readonly commandedState: string;
}

/** @stereotype <<Role>> */
export interface SafetyStatusSource {
  readonly monitorId: string;
  readonly systemHalted: boolean;
  readonly faultAlertRaised: boolean;
}

/** @stereotype <<Relator>> */
export interface UserInterfaceBus {
  readonly busId: UserInterfaceBusId;
  readonly currentDisplayState: string;
  readonly errorMessage: string;
  readonly sourceTemperature: number;
  readonly sourceSetpoint: number;
  readonly sourceActuatorState: string;
  readonly sourceHalted: boolean;
  readonly sourceFaultActive: boolean;
}

/** @stereotype <<Happening>> */
export interface SensorReadCycle {
  readonly cycleId: SensorReadCycleId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly steps: string;
}

/** @stereotype <<Agent>> */
export interface HomeOwner {
  readonly ownerId: HomeOwnerId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface Regulator {
  readonly regulatorId: RegulatorId;
  readonly jurisdiction: string;
  readonly departmentName: string;
}

/** @stereotype <<Agent>> */
export interface Contractor {
  readonly contractorId: ContractorId;
  readonly companyName: string;
  readonly certificationNumber: string;
}

/** @stereotype <<Agent>> */
export interface ThermostatVendor {
  readonly vendorId: ThermostatVendorId;
  readonly name: string;
  readonly warrantyYears: number;
}

/** @stereotype <<Kind>> */
export interface ThermostatSystemKind {
  readonly systemId: ThermostatSystemKindId;
  readonly safeMinSetpoint: number;
  readonly safeMaxSetpoint: number;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
  readonly faultAlertActive: boolean;
  readonly minCycleIntervalSecs: number;
  readonly currentTemperature: number;
  readonly currentSetpoint: number;
  readonly currentActuatorCommand: string;
}

/** @stereotype <<Commitment>> */
export interface SafeSetpointCommitment {
  readonly commitmentId: SafeSetpointCommitmentId;
  readonly safeMinSetpoint: number;
  readonly safeMaxSetpoint: number;
}

/** @stereotype <<Commitment>> */
export interface PlausibleSensorCommitment {
  readonly commitmentId: PlausibleSensorCommitmentId;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
}

/** @stereotype <<Commitment>> */
export interface FaultNotificationCommitment {
  readonly commitmentId: FaultNotificationCommitmentId;
  readonly faultAlertActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface CyclingLimitCommitment {
  readonly commitmentId: CyclingLimitCommitmentId;
  readonly minCycleIntervalSecs: number;
}

/** @stereotype <<Commitment>> */
export interface DisplayStateCommitment {
  readonly commitmentId: DisplayStateCommitmentId;
  readonly currentTemperature: number;
  readonly currentSetpoint: number;
  readonly currentActuatorCommand: string;
}

/** @stereotype <<Category>> */
export interface TemperatureSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface SensorPlausibilityConstraints {
}

/** @stereotype <<Category>> */
export interface CyclingProtectionConstraints {
}

/** @stereotype <<Kind>> */
export interface SetpointRequest {
  readonly requestId: SetpointRequestId;
  readonly requestedTemperature: number;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface SensorReading {
  readonly readingId: SensorReadingId;
  readonly temperature: number;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface ActuatorCommand {
  readonly commandId: ActuatorCommandId;
  readonly commandState: string;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface SafeHaltEvent {
  readonly haltEventId: SafeHaltEventId;
  readonly reason: string;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface UserAlert {
  readonly alertId: UserAlertId;
  readonly message: string;
  readonly timestamp: number;
}

/** @stereotype <<Happening>> */
export interface ThermostatControlCycle {
  readonly cycleId: ThermostatControlCycleId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly steps: string;
}

/** @stereotype <<Kind>> */
export interface ThermostatSystem extends TemperatureSafetyConstraints, SensorPlausibilityConstraints, CyclingProtectionConstraints {
  readonly systemId: ThermostatSystemId;
  readonly safeMinSetpoint: number;
  readonly safeMaxSetpoint: number;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
  readonly faultAlertActive: boolean;
  readonly minCycleIntervalSecs: number;
  readonly currentTemperature: number;
  readonly currentSetpoint: number;
  readonly currentActuatorCommand: string;
  readonly lastCommandTimestamp: number;
  readonly halted: boolean;
}

/** @stereotype <<Category>> */
export interface Ul60730Compliant {
  readonly ulStandardVersion: string;
  readonly safetyIntegrityLevel: string;
}

/** @stereotype <<Category>> */
export interface AshraeGuideline36Compliant {
  readonly ashraeDocYear: string;
  readonly applicableClauses: string;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly riskLevel: string;
  readonly owner: string;
}

/** @stereotype <<Subkind>> */
export interface ThermostatSystemFormalized extends ThermostatSystem {
}


// ─── Factory functions ───

export function makeTemperatureSensor(data: {
  sensorId: string;
  lastReading: number;
  lastTimestamp: number;
  isOperational: boolean;
}): TemperatureSensor {
  return {
    sensorId: data.sensorId as TemperatureSensorId,
    lastReading: data.lastReading,
    lastTimestamp: data.lastTimestamp,
    isOperational: data.isOperational,
  };
}

export function makeSetpointController(data: {
  controllerId: string;
  clampedSetpoint: number;
  safeMin: number;
  safeMax: number;
  currentTemperatureInput: number;
  decisionCommand: string;
}): SetpointController {
  return {
    controllerId: data.controllerId as SetpointControllerId,
    clampedSetpoint: data.clampedSetpoint,
    safeMin: data.safeMin,
    safeMax: data.safeMax,
    currentTemperatureInput: data.currentTemperatureInput,
    decisionCommand: data.decisionCommand,
  };
}

export function makeActuatorDriver(data: {
  driverId: string;
  commandedState: string;
  lastTransitionTimestamp: number;
  minIntervalSecs: number;
}): ActuatorDriver {
  return {
    driverId: data.driverId as ActuatorDriverId,
    commandedState: data.commandedState,
    lastTransitionTimestamp: data.lastTransitionTimestamp,
    minIntervalSecs: data.minIntervalSecs,
  };
}

export function makeDisplayManager(data: {
  displayId: string;
  displayedTemperature: number;
  displayedSetpoint: number;
  displayedActuatorState: string;
  displayError: string;
  isErrorActive: boolean;
}): DisplayManager {
  return {
    displayId: data.displayId as DisplayManagerId,
    displayedTemperature: data.displayedTemperature,
    displayedSetpoint: data.displayedSetpoint,
    displayedActuatorState: data.displayedActuatorState,
    displayError: data.displayError,
    isErrorActive: data.isErrorActive,
  };
}

export function makeSafetyMonitor(data: {
  monitorId: string;
  plausibilityMin: number;
  plausibilityMax: number;
  systemHalted: boolean;
  faultAlertRaised: boolean;
}): SafetyMonitor {
  return {
    monitorId: data.monitorId as SafetyMonitorId,
    plausibilityMin: data.plausibilityMin,
    plausibilityMax: data.plausibilityMax,
    systemHalted: data.systemHalted,
    faultAlertRaised: data.faultAlertRaised,
  };
}

export function makeSensorChannel(data: {
  channelId: string;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
  lastDeliveredReading: number;
  lastDeliveredTimestamp: number;
  readingIsPlausible: boolean;
}): SensorChannel {
  return {
    channelId: data.channelId as SensorChannelId,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
    lastDeliveredReading: data.lastDeliveredReading,
    lastDeliveredTimestamp: data.lastDeliveredTimestamp,
    readingIsPlausible: data.readingIsPlausible,
  };
}

export function makeControlBus(data: {
  busId: string;
  lastCommand: string;
  cyclingAllowed: boolean;
  endpointCommandedState: string;
  endpointLastTransitionTimestamp: number;
  endpointMinIntervalSecs: number;
  endpointDecisionCommand: string;
}): ControlBus {
  return {
    busId: data.busId as ControlBusId,
    lastCommand: data.lastCommand,
    cyclingAllowed: data.cyclingAllowed,
    endpointCommandedState: data.endpointCommandedState,
    endpointLastTransitionTimestamp: data.endpointLastTransitionTimestamp,
    endpointMinIntervalSecs: data.endpointMinIntervalSecs,
    endpointDecisionCommand: data.endpointDecisionCommand,
  };
}

export function makeUserInterfaceBus(data: {
  busId: string;
  currentDisplayState: string;
  errorMessage: string;
  sourceTemperature: number;
  sourceSetpoint: number;
  sourceActuatorState: string;
  sourceHalted: boolean;
  sourceFaultActive: boolean;
}): UserInterfaceBus {
  return {
    busId: data.busId as UserInterfaceBusId,
    currentDisplayState: data.currentDisplayState,
    errorMessage: data.errorMessage,
    sourceTemperature: data.sourceTemperature,
    sourceSetpoint: data.sourceSetpoint,
    sourceActuatorState: data.sourceActuatorState,
    sourceHalted: data.sourceHalted,
    sourceFaultActive: data.sourceFaultActive,
  };
}

export function makeSensorReadCycle(data: {
  cycleId: string;
  triggeredBy: string;
  outcome: string;
  steps: string;
}): SensorReadCycle {
  return {
    cycleId: data.cycleId as SensorReadCycleId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    steps: data.steps,
  };
}

export function makeHomeOwner(data: {
  ownerId: string;
  name: string;
  email: string;
}): HomeOwner {
  return {
    ownerId: data.ownerId as HomeOwnerId,
    name: data.name,
    email: data.email,
  };
}

export function makeRegulator(data: {
  regulatorId: string;
  jurisdiction: string;
  departmentName: string;
}): Regulator {
  return {
    regulatorId: data.regulatorId as RegulatorId,
    jurisdiction: data.jurisdiction,
    departmentName: data.departmentName,
  };
}

export function makeContractor(data: {
  contractorId: string;
  companyName: string;
  certificationNumber: string;
}): Contractor {
  return {
    contractorId: data.contractorId as ContractorId,
    companyName: data.companyName,
    certificationNumber: data.certificationNumber,
  };
}

export function makeThermostatVendor(data: {
  vendorId: string;
  name: string;
  warrantyYears: number;
}): ThermostatVendor {
  return {
    vendorId: data.vendorId as ThermostatVendorId,
    name: data.name,
    warrantyYears: data.warrantyYears,
  };
}

export function makeThermostatSystemKind(data: {
  systemId: string;
  safeMinSetpoint: number;
  safeMaxSetpoint: number;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
  faultAlertActive: boolean;
  minCycleIntervalSecs: number;
  currentTemperature: number;
  currentSetpoint: number;
  currentActuatorCommand: string;
}): ThermostatSystemKind {
  return {
    systemId: data.systemId as ThermostatSystemKindId,
    safeMinSetpoint: data.safeMinSetpoint,
    safeMaxSetpoint: data.safeMaxSetpoint,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
    faultAlertActive: data.faultAlertActive,
    minCycleIntervalSecs: data.minCycleIntervalSecs,
    currentTemperature: data.currentTemperature,
    currentSetpoint: data.currentSetpoint,
    currentActuatorCommand: data.currentActuatorCommand,
  };
}

export function makeSafeSetpointCommitment(data: {
  commitmentId: string;
  safeMinSetpoint: number;
  safeMaxSetpoint: number;
}): SafeSetpointCommitment {
  return {
    commitmentId: data.commitmentId as SafeSetpointCommitmentId,
    safeMinSetpoint: data.safeMinSetpoint,
    safeMaxSetpoint: data.safeMaxSetpoint,
  };
}

export function makePlausibleSensorCommitment(data: {
  commitmentId: string;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
}): PlausibleSensorCommitment {
  return {
    commitmentId: data.commitmentId as PlausibleSensorCommitmentId,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
  };
}

export function makeFaultNotificationCommitment(data: {
  commitmentId: string;
  faultAlertActive: boolean;
}): FaultNotificationCommitment {
  return {
    commitmentId: data.commitmentId as FaultNotificationCommitmentId,
    faultAlertActive: data.faultAlertActive,
  };
}

export function makeCyclingLimitCommitment(data: {
  commitmentId: string;
  minCycleIntervalSecs: number;
}): CyclingLimitCommitment {
  return {
    commitmentId: data.commitmentId as CyclingLimitCommitmentId,
    minCycleIntervalSecs: data.minCycleIntervalSecs,
  };
}

export function makeDisplayStateCommitment(data: {
  commitmentId: string;
  currentTemperature: number;
  currentSetpoint: number;
  currentActuatorCommand: string;
}): DisplayStateCommitment {
  return {
    commitmentId: data.commitmentId as DisplayStateCommitmentId,
    currentTemperature: data.currentTemperature,
    currentSetpoint: data.currentSetpoint,
    currentActuatorCommand: data.currentActuatorCommand,
  };
}

export function makeSetpointRequest(data: {
  requestId: string;
  requestedTemperature: number;
  timestamp: number;
}): SetpointRequest {
  return {
    requestId: data.requestId as SetpointRequestId,
    requestedTemperature: data.requestedTemperature,
    timestamp: data.timestamp,
  };
}

export function makeSensorReading(data: {
  readingId: string;
  temperature: number;
  timestamp: number;
}): SensorReading {
  return {
    readingId: data.readingId as SensorReadingId,
    temperature: data.temperature,
    timestamp: data.timestamp,
  };
}

export function makeActuatorCommand(data: {
  commandId: string;
  commandState: string;
  timestamp: number;
}): ActuatorCommand {
  return {
    commandId: data.commandId as ActuatorCommandId,
    commandState: data.commandState,
    timestamp: data.timestamp,
  };
}

export function makeSafeHaltEvent(data: {
  haltEventId: string;
  reason: string;
  timestamp: number;
}): SafeHaltEvent {
  return {
    haltEventId: data.haltEventId as SafeHaltEventId,
    reason: data.reason,
    timestamp: data.timestamp,
  };
}

export function makeUserAlert(data: {
  alertId: string;
  message: string;
  timestamp: number;
}): UserAlert {
  return {
    alertId: data.alertId as UserAlertId,
    message: data.message,
    timestamp: data.timestamp,
  };
}

export function makeThermostatControlCycle(data: {
  cycleId: string;
  triggeredBy: string;
  outcome: string;
  steps: string;
}): ThermostatControlCycle {
  return {
    cycleId: data.cycleId as ThermostatControlCycleId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    steps: data.steps,
  };
}

export function makeThermostatSystem(data: {
  systemId: string;
  safeMinSetpoint: number;
  safeMaxSetpoint: number;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
  faultAlertActive: boolean;
  minCycleIntervalSecs: number;
  currentTemperature: number;
  currentSetpoint: number;
  currentActuatorCommand: string;
  lastCommandTimestamp: number;
  halted: boolean;
}): ThermostatSystem {
  return {
    systemId: data.systemId as ThermostatSystemId,
    safeMinSetpoint: data.safeMinSetpoint,
    safeMaxSetpoint: data.safeMaxSetpoint,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
    faultAlertActive: data.faultAlertActive,
    minCycleIntervalSecs: data.minCycleIntervalSecs,
    currentTemperature: data.currentTemperature,
    currentSetpoint: data.currentSetpoint,
    currentActuatorCommand: data.currentActuatorCommand,
    lastCommandTimestamp: data.lastCommandTimestamp,
    halted: data.halted,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  riskLevel: string;
  owner: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    riskLevel: data.riskLevel,
    owner: data.owner,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for TemperatureSensor. Returns empty array when valid. */
export function validateTemperatureSensor(instance: TemperatureSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[TemperatureSensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastTimestamp >= 0))) {
    violations.push("[TemperatureSensor] invariant violated: self.lastTimestamp >= 0.0");
  }
  if (!(((instance.isOperational === true) || (instance.isOperational === false)))) {
    violations.push("[TemperatureSensor] invariant violated: self.isOperational = true or self.isOperational = false");
  }
  return violations;
}

/** Runtime invariant check for SetpointController. Returns empty array when valid. */
export function validateSetpointController(instance: SetpointController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[SetpointController] invariant violated: self.controllerId <> null");
  }
  if (!((instance.safeMin >= 40))) {
    violations.push("[SetpointController] invariant violated: self.safeMin >= 40.0");
  }
  if (!((instance.safeMax <= 90))) {
    violations.push("[SetpointController] invariant violated: self.safeMax <= 90.0");
  }
  if (!((instance.clampedSetpoint >= instance.safeMin))) {
    violations.push("[SetpointController] invariant violated: self.clampedSetpoint >= self.safeMin");
  }
  if (!((instance.clampedSetpoint <= instance.safeMax))) {
    violations.push("[SetpointController] invariant violated: self.clampedSetpoint <= self.safeMax");
  }
  if (!((instance.currentTemperatureInput >= -(200)))) {
    violations.push("[SetpointController] invariant violated: self.currentTemperatureInput >= -200.0");
  }
  if (!((instance.currentTemperatureInput <= 200))) {
    violations.push("[SetpointController] invariant violated: self.currentTemperatureInput <= 200.0");
  }
  if (!((((instance.decisionCommand === "HEAT") || (instance.decisionCommand === "COOL")) || (instance.decisionCommand === "OFF")))) {
    violations.push("[SetpointController] invariant violated: self.decisionCommand = 'HEAT' or self.decisionCommand = 'COOL' or self.decisionCommand = 'OFF'");
  }
  return violations;
}

/** Runtime invariant check for ActuatorDriver. Returns empty array when valid. */
export function validateActuatorDriver(instance: ActuatorDriver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[ActuatorDriver] invariant violated: self.driverId <> null");
  }
  if (!((((instance.commandedState === "HEAT") || (instance.commandedState === "COOL")) || (instance.commandedState === "OFF")))) {
    violations.push("[ActuatorDriver] invariant violated: self.commandedState = 'HEAT' or self.commandedState = 'COOL' or self.commandedState = 'OFF'");
  }
  if (!((instance.lastTransitionTimestamp >= 0))) {
    violations.push("[ActuatorDriver] invariant violated: self.lastTransitionTimestamp >= 0.0");
  }
  if (!((instance.minIntervalSecs >= 300))) {
    violations.push("[ActuatorDriver] invariant violated: self.minIntervalSecs >= 300.0");
  }
  return violations;
}

/** Runtime invariant check for DisplayManager. Returns empty array when valid. */
export function validateDisplayManager(instance: DisplayManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.displayId !== null))) {
    violations.push("[DisplayManager] invariant violated: self.displayId <> null");
  }
  if (!(((((instance.displayedActuatorState === "HEAT") || (instance.displayedActuatorState === "COOL")) || (instance.displayedActuatorState === "OFF")) || (instance.displayedActuatorState === "SAFE_HALT")))) {
    violations.push("[DisplayManager] invariant violated: self.displayedActuatorState = 'HEAT' or self.displayedActuatorState = 'COOL' or self.displayedActuatorState = 'OFF' or self.displayedActuatorState = 'SAFE_HALT'");
  }
  return violations;
}

/** Runtime invariant check for SafetyMonitor. Returns empty array when valid. */
export function validateSafetyMonitor(instance: SafetyMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[SafetyMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.plausibilityMin <= -(40)))) {
    violations.push("[SafetyMonitor] invariant violated: self.plausibilityMin <= -40.0");
  }
  if (!((instance.plausibilityMax >= 150))) {
    violations.push("[SafetyMonitor] invariant violated: self.plausibilityMax >= 150.0");
  }
  return violations;
}

/** Runtime invariant check for SensorChannel. Returns empty array when valid. */
export function validateSensorChannel(instance: SensorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SensorChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.sensorPlausibilityMin <= -(40)))) {
    violations.push("[SensorChannel] invariant violated: self.sensorPlausibilityMin <= -40.0");
  }
  if (!((instance.sensorPlausibilityMax >= 150))) {
    violations.push("[SensorChannel] invariant violated: self.sensorPlausibilityMax >= 150.0");
  }
  if (!((instance.lastDeliveredTimestamp >= 0))) {
    violations.push("[SensorChannel] invariant violated: self.lastDeliveredTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ControlBus. Returns empty array when valid. */
export function validateControlBus(instance: ControlBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[ControlBus] invariant violated: self.busId <> null");
  }
  if (!((((instance.lastCommand === "HEAT") || (instance.lastCommand === "COOL")) || (instance.lastCommand === "OFF")))) {
    violations.push("[ControlBus] invariant violated: self.lastCommand = 'HEAT' or self.lastCommand = 'COOL' or self.lastCommand = 'OFF'");
  }
  if (!((((instance.endpointCommandedState === "HEAT") || (instance.endpointCommandedState === "COOL")) || (instance.endpointCommandedState === "OFF")))) {
    violations.push("[ControlBus] invariant violated: self.endpointCommandedState = 'HEAT' or self.endpointCommandedState = 'COOL' or self.endpointCommandedState = 'OFF'");
  }
  if (!((instance.endpointLastTransitionTimestamp >= 0))) {
    violations.push("[ControlBus] invariant violated: self.endpointLastTransitionTimestamp >= 0.0");
  }
  if (!((instance.endpointMinIntervalSecs >= 300))) {
    violations.push("[ControlBus] invariant violated: self.endpointMinIntervalSecs >= 300.0");
  }
  if (!((((instance.endpointDecisionCommand === "HEAT") || (instance.endpointDecisionCommand === "COOL")) || (instance.endpointDecisionCommand === "OFF")))) {
    violations.push("[ControlBus] invariant violated: self.endpointDecisionCommand = 'HEAT' or self.endpointDecisionCommand = 'COOL' or self.endpointDecisionCommand = 'OFF'");
  }
  return violations;
}

/** Runtime invariant check for UserInterfaceBus. Returns empty array when valid. */
export function validateUserInterfaceBus(instance: UserInterfaceBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[UserInterfaceBus] invariant violated: self.busId <> null");
  }
  if (!(((((instance.sourceActuatorState === "HEAT") || (instance.sourceActuatorState === "COOL")) || (instance.sourceActuatorState === "OFF")) || (instance.sourceActuatorState === "SAFE_HALT")))) {
    violations.push("[UserInterfaceBus] invariant violated: self.sourceActuatorState = 'HEAT' or self.sourceActuatorState = 'COOL' or self.sourceActuatorState = 'OFF' or self.sourceActuatorState = 'SAFE_HALT'");
  }
  return violations;
}

/** Runtime invariant check for SensorReadCycle. Returns empty array when valid. */
export function validateSensorReadCycle(instance: SensorReadCycle): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[SensorReadCycle] invariant violated: self.cycleId <> null");
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

/** Runtime invariant check for Regulator. Returns empty array when valid. */
export function validateRegulator(instance: Regulator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[Regulator] invariant violated: self.regulatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Contractor. Returns empty array when valid. */
export function validateContractor(instance: Contractor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.contractorId !== null))) {
    violations.push("[Contractor] invariant violated: self.contractorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThermostatVendor. Returns empty array when valid. */
export function validateThermostatVendor(instance: ThermostatVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ThermostatVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.warrantyYears >= 1))) {
    violations.push("[ThermostatVendor] invariant violated: self.warrantyYears >= 1");
  }
  return violations;
}

/** Runtime invariant check for ThermostatSystemKind. Returns empty array when valid. */
export function validateThermostatSystemKind(instance: ThermostatSystemKind): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ThermostatSystemKind] invariant violated: self.systemId <> null");
  }
  return violations;
}

/** Runtime invariant check for TemperatureSafetyConstraints. Returns empty array when valid. */
export function validateTemperatureSafetyConstraints(instance: TemperatureSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMinSetpoint >= 40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxSetpoint <= 90.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorPlausibilityConstraints. Returns empty array when valid. */
export function validateSensorPlausibilityConstraints(instance: SensorPlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.sensorPlausibilityMin <= -40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.sensorPlausibilityMax >= 150.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for CyclingProtectionConstraints. Returns empty array when valid. */
export function validateCyclingProtectionConstraints(instance: CyclingProtectionConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minCycleIntervalSecs >= 300.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SetpointRequest. Returns empty array when valid. */
export function validateSetpointRequest(instance: SetpointRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[SetpointRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.requestedTemperature >= -(100)))) {
    violations.push("[SetpointRequest] invariant violated: self.requestedTemperature >= -100.0");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[SetpointRequest] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for SensorReading. Returns empty array when valid. */
export function validateSensorReading(instance: SensorReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[SensorReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[SensorReading] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ActuatorCommand. Returns empty array when valid. */
export function validateActuatorCommand(instance: ActuatorCommand): readonly string[] {
  const violations: string[] = [];
  if (!((instance.commandId !== null))) {
    violations.push("[ActuatorCommand] invariant violated: self.commandId <> null");
  }
  if (!((((instance.commandState === "HEAT") || (instance.commandState === "COOL")) || (instance.commandState === "OFF")))) {
    violations.push("[ActuatorCommand] invariant violated: self.commandState = 'HEAT' or self.commandState = 'COOL' or self.commandState = 'OFF'");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[ActuatorCommand] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for SafeHaltEvent. Returns empty array when valid. */
export function validateSafeHaltEvent(instance: SafeHaltEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.haltEventId !== null))) {
    violations.push("[SafeHaltEvent] invariant violated: self.haltEventId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[SafeHaltEvent] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for UserAlert. Returns empty array when valid. */
export function validateUserAlert(instance: UserAlert): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alertId !== null))) {
    violations.push("[UserAlert] invariant violated: self.alertId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[UserAlert] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ThermostatControlCycle. Returns empty array when valid. */
export function validateThermostatControlCycle(instance: ThermostatControlCycle): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[ThermostatControlCycle] invariant violated: self.cycleId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThermostatSystem. Returns empty array when valid. */
export function validateThermostatSystem(instance: ThermostatSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMinSetpoint >= 40))) {
    violations.push("[ThermostatSystem] invariant violated: self.safeMinSetpoint >= 40.0");
  }
  if (!((instance.safeMaxSetpoint <= 90))) {
    violations.push("[ThermostatSystem] invariant violated: self.safeMaxSetpoint <= 90.0");
  }
  if (!((instance.sensorPlausibilityMin <= -(40)))) {
    violations.push("[ThermostatSystem] invariant violated: self.sensorPlausibilityMin <= -40.0");
  }
  if (!((instance.sensorPlausibilityMax >= 150))) {
    violations.push("[ThermostatSystem] invariant violated: self.sensorPlausibilityMax >= 150.0");
  }
  if (!((instance.minCycleIntervalSecs >= 300))) {
    violations.push("[ThermostatSystem] invariant violated: self.minCycleIntervalSecs >= 300.0");
  }
  if (!((instance.currentTemperature !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.currentTemperature <> null");
  }
  if (!((instance.currentSetpoint !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.currentSetpoint <> null");
  }
  if (!((instance.currentActuatorCommand !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.currentActuatorCommand <> null");
  }
  if (!((instance.lastCommandTimestamp >= 0))) {
    violations.push("[ThermostatSystem] invariant violated: self.lastCommandTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Ul60730Compliant. Returns empty array when valid. */
export function validateUl60730Compliant(instance: Ul60730Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.safetyIntegrityLevel === "CLASS_II"))) {
    violations.push("[Ul60730Compliant] invariant violated: self.safetyIntegrityLevel = 'CLASS_II'");
  }
  return violations;
}

/** Runtime invariant check for AshraeGuideline36Compliant. Returns empty array when valid. */
export function validateAshraeGuideline36Compliant(instance: AshraeGuideline36Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.applicableClauses !== null))) {
    violations.push("[AshraeGuideline36Compliant] invariant violated: self.applicableClauses <> null");
  }
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
  if (!((((instance.riskLevel === "LOW") || (instance.riskLevel === "MEDIUM")) || (instance.riskLevel === "HIGH")))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.riskLevel = 'LOW' or self.riskLevel = 'MEDIUM' or self.riskLevel = 'HIGH'");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for TemperatureSensor.takeReading. User supplies this. */
export type TemperatureSensorTakeReadingImpl = (self: TemperatureSensor, value: number, timestamp: number) => { self: TemperatureSensor; modified: { lastReading: unknown; lastTimestamp: unknown } };

/** Contract-checking wrapper for TemperatureSensor.takeReading. */
export function wrapTemperatureSensorTakeReading(impl: TemperatureSensorTakeReadingImpl): (self: TemperatureSensor, value: number, timestamp: number) => TemperatureSensor {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= -(200)))) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: value >= -200.0");
    }
    if (!((value <= 200))) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: value <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: timestamp >= 0.0");
    }
    if (!(self.isOperational)) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: self.isOperational");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.isOperational": self.isOperational,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastReading === value))) {
        postViolations.push("[TemperatureSensor.takeReading] post violated: self.lastReading = value");
      }
      if (!((__result.self.lastTimestamp === timestamp))) {
        postViolations.push("[TemperatureSensor.takeReading] post violated: self.lastTimestamp = timestamp");
      }
      if (!((__result.self.isOperational === __pre["self.isOperational"]))) {
        postViolations.push("[TemperatureSensor.takeReading] post violated: self.isOperational = self.isOperational@pre");
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

/** Impl signature for TemperatureSensor.takeReading (async). User supplies this. */
export type TemperatureSensorTakeReadingAsyncImpl = (self: TemperatureSensor, value: number, timestamp: number) => Promise<{ self: TemperatureSensor; modified: { lastReading: unknown; lastTimestamp: unknown } }>;

/** Contract-checking wrapper for TemperatureSensor.takeReading (async). */
export function wrapTemperatureSensorTakeReadingAsync(impl: TemperatureSensorTakeReadingAsyncImpl): (self: TemperatureSensor, value: number, timestamp: number) => Promise<TemperatureSensor> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= -(200)))) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: value >= -200.0");
    }
    if (!((value <= 200))) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: value <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: timestamp >= 0.0");
    }
    if (!(self.isOperational)) {
      preViolations.push("[TemperatureSensor.takeReading] pre violated: self.isOperational");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.isOperational": self.isOperational,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastReading === value))) {
        postViolations.push("[TemperatureSensor.takeReading] post violated: self.lastReading = value");
      }
      if (!((__result.self.lastTimestamp === timestamp))) {
        postViolations.push("[TemperatureSensor.takeReading] post violated: self.lastTimestamp = timestamp");
      }
      if (!((__result.self.isOperational === __pre["self.isOperational"]))) {
        postViolations.push("[TemperatureSensor.takeReading] post violated: self.isOperational = self.isOperational@pre");
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

/** Impl signature for TemperatureSensor.setFaulty. User supplies this. */
export type TemperatureSensorSetFaultyImpl = (self: TemperatureSensor) => { self: TemperatureSensor; modified: { isOperational: unknown } };

/** Contract-checking wrapper for TemperatureSensor.setFaulty. */
export function wrapTemperatureSensorSetFaulty(impl: TemperatureSensorSetFaultyImpl): (self: TemperatureSensor) => TemperatureSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperational)) {
      preViolations.push("[TemperatureSensor.setFaulty] pre violated: self.isOperational");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperational === false))) {
        postViolations.push("[TemperatureSensor.setFaulty] post violated: self.isOperational = false");
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

/** Impl signature for TemperatureSensor.setFaulty (async). User supplies this. */
export type TemperatureSensorSetFaultyAsyncImpl = (self: TemperatureSensor) => Promise<{ self: TemperatureSensor; modified: { isOperational: unknown } }>;

/** Contract-checking wrapper for TemperatureSensor.setFaulty (async). */
export function wrapTemperatureSensorSetFaultyAsync(impl: TemperatureSensorSetFaultyAsyncImpl): (self: TemperatureSensor) => Promise<TemperatureSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperational)) {
      preViolations.push("[TemperatureSensor.setFaulty] pre violated: self.isOperational");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperational === false))) {
        postViolations.push("[TemperatureSensor.setFaulty] post violated: self.isOperational = false");
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

/** Impl signature for TemperatureSensor.restore. User supplies this. */
export type TemperatureSensorRestoreImpl = (self: TemperatureSensor) => { self: TemperatureSensor; modified: { isOperational: unknown } };

/** Contract-checking wrapper for TemperatureSensor.restore. */
export function wrapTemperatureSensorRestore(impl: TemperatureSensorRestoreImpl): (self: TemperatureSensor) => TemperatureSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperational))) {
      preViolations.push("[TemperatureSensor.restore] pre violated: not self.isOperational");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastReading": self.lastReading,
      "self.lastTimestamp": self.lastTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperational === true))) {
        postViolations.push("[TemperatureSensor.restore] post violated: self.isOperational = true");
      }
      if (!((__result.self.lastReading === __pre["self.lastReading"]))) {
        postViolations.push("[TemperatureSensor.restore] post violated: self.lastReading = self.lastReading@pre");
      }
      if (!((__result.self.lastTimestamp === __pre["self.lastTimestamp"]))) {
        postViolations.push("[TemperatureSensor.restore] post violated: self.lastTimestamp = self.lastTimestamp@pre");
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

/** Impl signature for TemperatureSensor.restore (async). User supplies this. */
export type TemperatureSensorRestoreAsyncImpl = (self: TemperatureSensor) => Promise<{ self: TemperatureSensor; modified: { isOperational: unknown } }>;

/** Contract-checking wrapper for TemperatureSensor.restore (async). */
export function wrapTemperatureSensorRestoreAsync(impl: TemperatureSensorRestoreAsyncImpl): (self: TemperatureSensor) => Promise<TemperatureSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperational))) {
      preViolations.push("[TemperatureSensor.restore] pre violated: not self.isOperational");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastReading": self.lastReading,
      "self.lastTimestamp": self.lastTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperational === true))) {
        postViolations.push("[TemperatureSensor.restore] post violated: self.isOperational = true");
      }
      if (!((__result.self.lastReading === __pre["self.lastReading"]))) {
        postViolations.push("[TemperatureSensor.restore] post violated: self.lastReading = self.lastReading@pre");
      }
      if (!((__result.self.lastTimestamp === __pre["self.lastTimestamp"]))) {
        postViolations.push("[TemperatureSensor.restore] post violated: self.lastTimestamp = self.lastTimestamp@pre");
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

/** Impl signature for SetpointController.receiveUserSetpoint. User supplies this. */
export type SetpointControllerReceiveUserSetpointImpl = (self: SetpointController, requestedSetpoint: number) => { self: SetpointController; modified: { clampedSetpoint: unknown } };

/** Contract-checking wrapper for SetpointController.receiveUserSetpoint. */
export function wrapSetpointControllerReceiveUserSetpoint(impl: SetpointControllerReceiveUserSetpointImpl): (self: SetpointController, requestedSetpoint: number) => SetpointController {
  return (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!((requestedSetpoint >= -(100)))) {
      preViolations.push("[SetpointController.receiveUserSetpoint] pre violated: requestedSetpoint >= -100.0");
    }
    if (!((self.safeMin >= 40))) {
      preViolations.push("[SetpointController.receiveUserSetpoint] pre violated: self.safeMin >= 40.0");
    }
    if (!((self.safeMax <= 90))) {
      preViolations.push("[SetpointController.receiveUserSetpoint] pre violated: self.safeMax <= 90.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperatureInput": self.currentTemperatureInput,
      "self.decisionCommand": self.decisionCommand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!((__result.self.clampedSetpoint === (((requestedSetpoint < __result.self.safeMin)) ? (__result.self.safeMin) : ((((requestedSetpoint > __result.self.safeMax)) ? (__result.self.safeMax) : (requestedSetpoint))))))) {
        postViolations.push("[SetpointController.receiveUserSetpoint] post violated: self.clampedSetpoint = if requestedSetpoint < self.safeMin then self.safeMin\n                                  else if requestedSetpoint > self.safeMax then self.safeMax\n                                  else requestedSetpoint endif endif");
      }
      if (!((__result.self.currentTemperatureInput === __pre["self.currentTemperatureInput"]))) {
        postViolations.push("[SetpointController.receiveUserSetpoint] post violated: self.currentTemperatureInput = self.currentTemperatureInput@pre");
      }
      if (!((__result.self.decisionCommand === __pre["self.decisionCommand"]))) {
        postViolations.push("[SetpointController.receiveUserSetpoint] post violated: self.decisionCommand = self.decisionCommand@pre");
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

/** Impl signature for SetpointController.receiveUserSetpoint (async). User supplies this. */
export type SetpointControllerReceiveUserSetpointAsyncImpl = (self: SetpointController, requestedSetpoint: number) => Promise<{ self: SetpointController; modified: { clampedSetpoint: unknown } }>;

/** Contract-checking wrapper for SetpointController.receiveUserSetpoint (async). */
export function wrapSetpointControllerReceiveUserSetpointAsync(impl: SetpointControllerReceiveUserSetpointAsyncImpl): (self: SetpointController, requestedSetpoint: number) => Promise<SetpointController> {
  return async (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!((requestedSetpoint >= -(100)))) {
      preViolations.push("[SetpointController.receiveUserSetpoint] pre violated: requestedSetpoint >= -100.0");
    }
    if (!((self.safeMin >= 40))) {
      preViolations.push("[SetpointController.receiveUserSetpoint] pre violated: self.safeMin >= 40.0");
    }
    if (!((self.safeMax <= 90))) {
      preViolations.push("[SetpointController.receiveUserSetpoint] pre violated: self.safeMax <= 90.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperatureInput": self.currentTemperatureInput,
      "self.decisionCommand": self.decisionCommand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!((__result.self.clampedSetpoint === (((requestedSetpoint < __result.self.safeMin)) ? (__result.self.safeMin) : ((((requestedSetpoint > __result.self.safeMax)) ? (__result.self.safeMax) : (requestedSetpoint))))))) {
        postViolations.push("[SetpointController.receiveUserSetpoint] post violated: self.clampedSetpoint = if requestedSetpoint < self.safeMin then self.safeMin\n                                  else if requestedSetpoint > self.safeMax then self.safeMax\n                                  else requestedSetpoint endif endif");
      }
      if (!((__result.self.currentTemperatureInput === __pre["self.currentTemperatureInput"]))) {
        postViolations.push("[SetpointController.receiveUserSetpoint] post violated: self.currentTemperatureInput = self.currentTemperatureInput@pre");
      }
      if (!((__result.self.decisionCommand === __pre["self.decisionCommand"]))) {
        postViolations.push("[SetpointController.receiveUserSetpoint] post violated: self.decisionCommand = self.decisionCommand@pre");
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

/** Impl signature for SetpointController.receiveTemperatureInput. User supplies this. */
export type SetpointControllerReceiveTemperatureInputImpl = (self: SetpointController, temp: number) => { self: SetpointController; modified: { currentTemperatureInput: unknown; decisionCommand: unknown } };

/** Contract-checking wrapper for SetpointController.receiveTemperatureInput. */
export function wrapSetpointControllerReceiveTemperatureInput(impl: SetpointControllerReceiveTemperatureInputImpl): (self: SetpointController, temp: number) => SetpointController {
  return (self, temp) => {
    const preViolations: string[] = [];
    if (!((temp >= -(200)))) {
      preViolations.push("[SetpointController.receiveTemperatureInput] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[SetpointController.receiveTemperatureInput] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clampedSetpoint": self.clampedSetpoint,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, temp);
      const postViolations: string[] = [];
      if (!((__result.self.currentTemperatureInput === temp))) {
        postViolations.push("[SetpointController.receiveTemperatureInput] post violated: self.currentTemperatureInput = temp");
      }
      if (!((__result.self.decisionCommand === (((temp < (__result.self.clampedSetpoint - 1))) ? ("HEAT") : ((((temp > (__result.self.clampedSetpoint + 1))) ? ("COOL") : ("OFF"))))))) {
        postViolations.push("[SetpointController.receiveTemperatureInput] post violated: self.decisionCommand =\n      if temp < self.clampedSetpoint - 1.0 then 'HEAT'\n      else if temp > self.clampedSetpoint + 1.0 then 'COOL'\n      else 'OFF' endif endif");
      }
      if (!((__result.self.clampedSetpoint === __pre["self.clampedSetpoint"]))) {
        postViolations.push("[SetpointController.receiveTemperatureInput] post violated: self.clampedSetpoint = self.clampedSetpoint@pre");
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

/** Impl signature for SetpointController.receiveTemperatureInput (async). User supplies this. */
export type SetpointControllerReceiveTemperatureInputAsyncImpl = (self: SetpointController, temp: number) => Promise<{ self: SetpointController; modified: { currentTemperatureInput: unknown; decisionCommand: unknown } }>;

/** Contract-checking wrapper for SetpointController.receiveTemperatureInput (async). */
export function wrapSetpointControllerReceiveTemperatureInputAsync(impl: SetpointControllerReceiveTemperatureInputAsyncImpl): (self: SetpointController, temp: number) => Promise<SetpointController> {
  return async (self, temp) => {
    const preViolations: string[] = [];
    if (!((temp >= -(200)))) {
      preViolations.push("[SetpointController.receiveTemperatureInput] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[SetpointController.receiveTemperatureInput] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clampedSetpoint": self.clampedSetpoint,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, temp);
      const postViolations: string[] = [];
      if (!((__result.self.currentTemperatureInput === temp))) {
        postViolations.push("[SetpointController.receiveTemperatureInput] post violated: self.currentTemperatureInput = temp");
      }
      if (!((__result.self.decisionCommand === (((temp < (__result.self.clampedSetpoint - 1))) ? ("HEAT") : ((((temp > (__result.self.clampedSetpoint + 1))) ? ("COOL") : ("OFF"))))))) {
        postViolations.push("[SetpointController.receiveTemperatureInput] post violated: self.decisionCommand =\n      if temp < self.clampedSetpoint - 1.0 then 'HEAT'\n      else if temp > self.clampedSetpoint + 1.0 then 'COOL'\n      else 'OFF' endif endif");
      }
      if (!((__result.self.clampedSetpoint === __pre["self.clampedSetpoint"]))) {
        postViolations.push("[SetpointController.receiveTemperatureInput] post violated: self.clampedSetpoint = self.clampedSetpoint@pre");
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

/** Impl signature for SetpointController.clearDecision. User supplies this. */
export type SetpointControllerClearDecisionImpl = (self: SetpointController) => { self: SetpointController; modified: { decisionCommand: unknown } };

/** Contract-checking wrapper for SetpointController.clearDecision. */
export function wrapSetpointControllerClearDecision(impl: SetpointControllerClearDecisionImpl): (self: SetpointController) => SetpointController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SetpointController.clearDecision] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clampedSetpoint": self.clampedSetpoint,
      "self.currentTemperatureInput": self.currentTemperatureInput,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.decisionCommand === "OFF"))) {
        postViolations.push("[SetpointController.clearDecision] post violated: self.decisionCommand = 'OFF'");
      }
      if (!((__result.self.clampedSetpoint === __pre["self.clampedSetpoint"]))) {
        postViolations.push("[SetpointController.clearDecision] post violated: self.clampedSetpoint = self.clampedSetpoint@pre");
      }
      if (!((__result.self.currentTemperatureInput === __pre["self.currentTemperatureInput"]))) {
        postViolations.push("[SetpointController.clearDecision] post violated: self.currentTemperatureInput = self.currentTemperatureInput@pre");
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

/** Impl signature for SetpointController.clearDecision (async). User supplies this. */
export type SetpointControllerClearDecisionAsyncImpl = (self: SetpointController) => Promise<{ self: SetpointController; modified: { decisionCommand: unknown } }>;

/** Contract-checking wrapper for SetpointController.clearDecision (async). */
export function wrapSetpointControllerClearDecisionAsync(impl: SetpointControllerClearDecisionAsyncImpl): (self: SetpointController) => Promise<SetpointController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SetpointController.clearDecision] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clampedSetpoint": self.clampedSetpoint,
      "self.currentTemperatureInput": self.currentTemperatureInput,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.decisionCommand === "OFF"))) {
        postViolations.push("[SetpointController.clearDecision] post violated: self.decisionCommand = 'OFF'");
      }
      if (!((__result.self.clampedSetpoint === __pre["self.clampedSetpoint"]))) {
        postViolations.push("[SetpointController.clearDecision] post violated: self.clampedSetpoint = self.clampedSetpoint@pre");
      }
      if (!((__result.self.currentTemperatureInput === __pre["self.currentTemperatureInput"]))) {
        postViolations.push("[SetpointController.clearDecision] post violated: self.currentTemperatureInput = self.currentTemperatureInput@pre");
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

/** Impl signature for SetpointController.initialize. User supplies this. */
export type SetpointControllerInitializeImpl = (self: SetpointController, clamped: number, temp: number) => { self: SetpointController; modified: { clampedSetpoint: unknown; currentTemperatureInput: unknown; decisionCommand: unknown } };

/** Contract-checking wrapper for SetpointController.initialize. */
export function wrapSetpointControllerInitialize(impl: SetpointControllerInitializeImpl): (self: SetpointController, clamped: number, temp: number) => SetpointController {
  return (self, clamped, temp) => {
    const preViolations: string[] = [];
    if (!((clamped >= 40))) {
      preViolations.push("[SetpointController.initialize] pre violated: clamped >= 40.0");
    }
    if (!((clamped <= 90))) {
      preViolations.push("[SetpointController.initialize] pre violated: clamped <= 90.0");
    }
    if (!((temp >= -(200)))) {
      preViolations.push("[SetpointController.initialize] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[SetpointController.initialize] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clamped, temp);
      const postViolations: string[] = [];
      if (!((__result.self.clampedSetpoint === clamped))) {
        postViolations.push("[SetpointController.initialize] post violated: self.clampedSetpoint = clamped");
      }
      if (!((__result.self.currentTemperatureInput === temp))) {
        postViolations.push("[SetpointController.initialize] post violated: self.currentTemperatureInput = temp");
      }
      if (!((__result.self.decisionCommand === "OFF"))) {
        postViolations.push("[SetpointController.initialize] post violated: self.decisionCommand = 'OFF'");
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

/** Impl signature for SetpointController.initialize (async). User supplies this. */
export type SetpointControllerInitializeAsyncImpl = (self: SetpointController, clamped: number, temp: number) => Promise<{ self: SetpointController; modified: { clampedSetpoint: unknown; currentTemperatureInput: unknown; decisionCommand: unknown } }>;

/** Contract-checking wrapper for SetpointController.initialize (async). */
export function wrapSetpointControllerInitializeAsync(impl: SetpointControllerInitializeAsyncImpl): (self: SetpointController, clamped: number, temp: number) => Promise<SetpointController> {
  return async (self, clamped, temp) => {
    const preViolations: string[] = [];
    if (!((clamped >= 40))) {
      preViolations.push("[SetpointController.initialize] pre violated: clamped >= 40.0");
    }
    if (!((clamped <= 90))) {
      preViolations.push("[SetpointController.initialize] pre violated: clamped <= 90.0");
    }
    if (!((temp >= -(200)))) {
      preViolations.push("[SetpointController.initialize] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[SetpointController.initialize] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clamped, temp);
      const postViolations: string[] = [];
      if (!((__result.self.clampedSetpoint === clamped))) {
        postViolations.push("[SetpointController.initialize] post violated: self.clampedSetpoint = clamped");
      }
      if (!((__result.self.currentTemperatureInput === temp))) {
        postViolations.push("[SetpointController.initialize] post violated: self.currentTemperatureInput = temp");
      }
      if (!((__result.self.decisionCommand === "OFF"))) {
        postViolations.push("[SetpointController.initialize] post violated: self.decisionCommand = 'OFF'");
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

/** Impl signature for ActuatorDriver.issueCommand. User supplies this. */
export type ActuatorDriverIssueCommandImpl = (self: ActuatorDriver, newState: string, timestamp: number) => { self: ActuatorDriver; modified: { commandedState: unknown; lastTransitionTimestamp: unknown } };

/** Contract-checking wrapper for ActuatorDriver.issueCommand. */
export function wrapActuatorDriverIssueCommand(impl: ActuatorDriverIssueCommandImpl): (self: ActuatorDriver, newState: string, timestamp: number) => ActuatorDriver {
  return (self, newState, timestamp) => {
    const preViolations: string[] = [];
    if (!((((newState === "HEAT") || (newState === "COOL")) || (newState === "OFF")))) {
      preViolations.push("[ActuatorDriver.issueCommand] pre violated: newState = 'HEAT' or newState = 'COOL' or newState = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ActuatorDriver.issueCommand] pre violated: timestamp >= 0.0");
    }
    if (!((((newState !== self.commandedState)) ? (((timestamp - self.lastTransitionTimestamp) >= self.minIntervalSecs)) : (true)))) {
      preViolations.push("[ActuatorDriver.issueCommand] pre violated: if newState <> self.commandedState then\n           timestamp - self.lastTransitionTimestamp >= self.minIntervalSecs\n         else\n           true\n         endif");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.commandedState": self.commandedState,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newState, timestamp);
      const postViolations: string[] = [];
      if (!((((newState !== __pre["self.commandedState"])) ? (((__result.self.commandedState === newState) && (__result.self.lastTransitionTimestamp === timestamp))) : (((__result.self.commandedState === __pre["self.commandedState"]) && (__result.self.lastTransitionTimestamp === timestamp)))))) {
        postViolations.push("[ActuatorDriver.issueCommand] post violated: if newState <> self.commandedState@pre then\n            self.commandedState = newState\n            and\n            self.lastTransitionTimestamp = timestamp\n          else\n            self.commandedState = self.commandedState@pre\n            and\n            self.lastTransitionTimestamp = timestamp\n          endif");
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

/** Impl signature for ActuatorDriver.issueCommand (async). User supplies this. */
export type ActuatorDriverIssueCommandAsyncImpl = (self: ActuatorDriver, newState: string, timestamp: number) => Promise<{ self: ActuatorDriver; modified: { commandedState: unknown; lastTransitionTimestamp: unknown } }>;

/** Contract-checking wrapper for ActuatorDriver.issueCommand (async). */
export function wrapActuatorDriverIssueCommandAsync(impl: ActuatorDriverIssueCommandAsyncImpl): (self: ActuatorDriver, newState: string, timestamp: number) => Promise<ActuatorDriver> {
  return async (self, newState, timestamp) => {
    const preViolations: string[] = [];
    if (!((((newState === "HEAT") || (newState === "COOL")) || (newState === "OFF")))) {
      preViolations.push("[ActuatorDriver.issueCommand] pre violated: newState = 'HEAT' or newState = 'COOL' or newState = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ActuatorDriver.issueCommand] pre violated: timestamp >= 0.0");
    }
    if (!((((newState !== self.commandedState)) ? (((timestamp - self.lastTransitionTimestamp) >= self.minIntervalSecs)) : (true)))) {
      preViolations.push("[ActuatorDriver.issueCommand] pre violated: if newState <> self.commandedState then\n           timestamp - self.lastTransitionTimestamp >= self.minIntervalSecs\n         else\n           true\n         endif");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.commandedState": self.commandedState,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newState, timestamp);
      const postViolations: string[] = [];
      if (!((((newState !== __pre["self.commandedState"])) ? (((__result.self.commandedState === newState) && (__result.self.lastTransitionTimestamp === timestamp))) : (((__result.self.commandedState === __pre["self.commandedState"]) && (__result.self.lastTransitionTimestamp === timestamp)))))) {
        postViolations.push("[ActuatorDriver.issueCommand] post violated: if newState <> self.commandedState@pre then\n            self.commandedState = newState\n            and\n            self.lastTransitionTimestamp = timestamp\n          else\n            self.commandedState = self.commandedState@pre\n            and\n            self.lastTransitionTimestamp = timestamp\n          endif");
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

/** Impl signature for ActuatorDriver.forceOff. User supplies this. */
export type ActuatorDriverForceOffImpl = (self: ActuatorDriver, timestamp: number) => { self: ActuatorDriver; modified: { commandedState: unknown; lastTransitionTimestamp: unknown } };

/** Contract-checking wrapper for ActuatorDriver.forceOff. */
export function wrapActuatorDriverForceOff(impl: ActuatorDriverForceOffImpl): (self: ActuatorDriver, timestamp: number) => ActuatorDriver {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[ActuatorDriver.forceOff] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.commandedState === "OFF"))) {
        postViolations.push("[ActuatorDriver.forceOff] post violated: self.commandedState = 'OFF'");
      }
      if (!((__result.self.lastTransitionTimestamp === timestamp))) {
        postViolations.push("[ActuatorDriver.forceOff] post violated: self.lastTransitionTimestamp = timestamp");
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

/** Impl signature for ActuatorDriver.forceOff (async). User supplies this. */
export type ActuatorDriverForceOffAsyncImpl = (self: ActuatorDriver, timestamp: number) => Promise<{ self: ActuatorDriver; modified: { commandedState: unknown; lastTransitionTimestamp: unknown } }>;

/** Contract-checking wrapper for ActuatorDriver.forceOff (async). */
export function wrapActuatorDriverForceOffAsync(impl: ActuatorDriverForceOffAsyncImpl): (self: ActuatorDriver, timestamp: number) => Promise<ActuatorDriver> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[ActuatorDriver.forceOff] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.commandedState === "OFF"))) {
        postViolations.push("[ActuatorDriver.forceOff] post violated: self.commandedState = 'OFF'");
      }
      if (!((__result.self.lastTransitionTimestamp === timestamp))) {
        postViolations.push("[ActuatorDriver.forceOff] post violated: self.lastTransitionTimestamp = timestamp");
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

/** Impl signature for ActuatorDriver.initialize. User supplies this. */
export type ActuatorDriverInitializeImpl = (self: ActuatorDriver) => { self: ActuatorDriver; modified: { commandedState: unknown; lastTransitionTimestamp: unknown } };

/** Contract-checking wrapper for ActuatorDriver.initialize. */
export function wrapActuatorDriverInitialize(impl: ActuatorDriverInitializeImpl): (self: ActuatorDriver) => ActuatorDriver {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ActuatorDriver.initialize] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.commandedState === "OFF"))) {
        postViolations.push("[ActuatorDriver.initialize] post violated: self.commandedState = 'OFF'");
      }
      if (!((__result.self.lastTransitionTimestamp === 0))) {
        postViolations.push("[ActuatorDriver.initialize] post violated: self.lastTransitionTimestamp = 0.0");
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

/** Impl signature for ActuatorDriver.initialize (async). User supplies this. */
export type ActuatorDriverInitializeAsyncImpl = (self: ActuatorDriver) => Promise<{ self: ActuatorDriver; modified: { commandedState: unknown; lastTransitionTimestamp: unknown } }>;

/** Contract-checking wrapper for ActuatorDriver.initialize (async). */
export function wrapActuatorDriverInitializeAsync(impl: ActuatorDriverInitializeAsyncImpl): (self: ActuatorDriver) => Promise<ActuatorDriver> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ActuatorDriver.initialize] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.commandedState === "OFF"))) {
        postViolations.push("[ActuatorDriver.initialize] post violated: self.commandedState = 'OFF'");
      }
      if (!((__result.self.lastTransitionTimestamp === 0))) {
        postViolations.push("[ActuatorDriver.initialize] post violated: self.lastTransitionTimestamp = 0.0");
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

/** Impl signature for DisplayManager.updateTemperature. User supplies this. */
export type DisplayManagerUpdateTemperatureImpl = (self: DisplayManager, temp: number) => { self: DisplayManager; modified: { displayedTemperature: unknown } };

/** Contract-checking wrapper for DisplayManager.updateTemperature. */
export function wrapDisplayManagerUpdateTemperature(impl: DisplayManagerUpdateTemperatureImpl): (self: DisplayManager, temp: number) => DisplayManager {
  return (self, temp) => {
    const preViolations: string[] = [];
    if (!((temp >= -(200)))) {
      preViolations.push("[DisplayManager.updateTemperature] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[DisplayManager.updateTemperature] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedSetpoint": self.displayedSetpoint,
      "self.displayedActuatorState": self.displayedActuatorState,
      "self.displayError": self.displayError,
      "self.isErrorActive": self.isErrorActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, temp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedTemperature === temp))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayedTemperature = temp");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
      }
      if (!((__result.self.displayedActuatorState === __pre["self.displayedActuatorState"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayedActuatorState = self.displayedActuatorState@pre");
      }
      if (!((__result.self.displayError === __pre["self.displayError"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayError = self.displayError@pre");
      }
      if (!((__result.self.isErrorActive === __pre["self.isErrorActive"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.isErrorActive = self.isErrorActive@pre");
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

/** Impl signature for DisplayManager.updateTemperature (async). User supplies this. */
export type DisplayManagerUpdateTemperatureAsyncImpl = (self: DisplayManager, temp: number) => Promise<{ self: DisplayManager; modified: { displayedTemperature: unknown } }>;

/** Contract-checking wrapper for DisplayManager.updateTemperature (async). */
export function wrapDisplayManagerUpdateTemperatureAsync(impl: DisplayManagerUpdateTemperatureAsyncImpl): (self: DisplayManager, temp: number) => Promise<DisplayManager> {
  return async (self, temp) => {
    const preViolations: string[] = [];
    if (!((temp >= -(200)))) {
      preViolations.push("[DisplayManager.updateTemperature] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[DisplayManager.updateTemperature] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedSetpoint": self.displayedSetpoint,
      "self.displayedActuatorState": self.displayedActuatorState,
      "self.displayError": self.displayError,
      "self.isErrorActive": self.isErrorActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, temp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedTemperature === temp))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayedTemperature = temp");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
      }
      if (!((__result.self.displayedActuatorState === __pre["self.displayedActuatorState"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayedActuatorState = self.displayedActuatorState@pre");
      }
      if (!((__result.self.displayError === __pre["self.displayError"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.displayError = self.displayError@pre");
      }
      if (!((__result.self.isErrorActive === __pre["self.isErrorActive"]))) {
        postViolations.push("[DisplayManager.updateTemperature] post violated: self.isErrorActive = self.isErrorActive@pre");
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

/** Impl signature for DisplayManager.updateSetpoint. User supplies this. */
export type DisplayManagerUpdateSetpointImpl = (self: DisplayManager, real: number) => { self: DisplayManager; modified: { displayedSetpoint: unknown } };

/** Contract-checking wrapper for DisplayManager.updateSetpoint. */
export function wrapDisplayManagerUpdateSetpoint(impl: DisplayManagerUpdateSetpointImpl): (self: DisplayManager, real: number) => DisplayManager {
  return (self, real) => {
    const preViolations: string[] = [];
    if (!((real >= 40))) {
      preViolations.push("[DisplayManager.updateSetpoint] pre violated: real >= 40.0");
    }
    if (!((real <= 90))) {
      preViolations.push("[DisplayManager.updateSetpoint] pre violated: real <= 90.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedActuatorState": self.displayedActuatorState,
      "self.displayError": self.displayError,
      "self.isErrorActive": self.isErrorActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, real);
      const postViolations: string[] = [];
      if (!((__result.self.displayedSetpoint === real))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayedSetpoint = real");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedActuatorState === __pre["self.displayedActuatorState"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayedActuatorState = self.displayedActuatorState@pre");
      }
      if (!((__result.self.displayError === __pre["self.displayError"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayError = self.displayError@pre");
      }
      if (!((__result.self.isErrorActive === __pre["self.isErrorActive"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.isErrorActive = self.isErrorActive@pre");
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

/** Impl signature for DisplayManager.updateSetpoint (async). User supplies this. */
export type DisplayManagerUpdateSetpointAsyncImpl = (self: DisplayManager, real: number) => Promise<{ self: DisplayManager; modified: { displayedSetpoint: unknown } }>;

/** Contract-checking wrapper for DisplayManager.updateSetpoint (async). */
export function wrapDisplayManagerUpdateSetpointAsync(impl: DisplayManagerUpdateSetpointAsyncImpl): (self: DisplayManager, real: number) => Promise<DisplayManager> {
  return async (self, real) => {
    const preViolations: string[] = [];
    if (!((real >= 40))) {
      preViolations.push("[DisplayManager.updateSetpoint] pre violated: real >= 40.0");
    }
    if (!((real <= 90))) {
      preViolations.push("[DisplayManager.updateSetpoint] pre violated: real <= 90.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedActuatorState": self.displayedActuatorState,
      "self.displayError": self.displayError,
      "self.isErrorActive": self.isErrorActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, real);
      const postViolations: string[] = [];
      if (!((__result.self.displayedSetpoint === real))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayedSetpoint = real");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedActuatorState === __pre["self.displayedActuatorState"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayedActuatorState = self.displayedActuatorState@pre");
      }
      if (!((__result.self.displayError === __pre["self.displayError"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.displayError = self.displayError@pre");
      }
      if (!((__result.self.isErrorActive === __pre["self.isErrorActive"]))) {
        postViolations.push("[DisplayManager.updateSetpoint] post violated: self.isErrorActive = self.isErrorActive@pre");
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

/** Impl signature for DisplayManager.updateActuatorState. User supplies this. */
export type DisplayManagerUpdateActuatorStateImpl = (self: DisplayManager, state: string) => { self: DisplayManager; modified: { displayedActuatorState: unknown } };

/** Contract-checking wrapper for DisplayManager.updateActuatorState. */
export function wrapDisplayManagerUpdateActuatorState(impl: DisplayManagerUpdateActuatorStateImpl): (self: DisplayManager, state: string) => DisplayManager {
  return (self, state) => {
    const preViolations: string[] = [];
    if (!(((((state === "HEAT") || (state === "COOL")) || (state === "OFF")) || (state === "SAFE_HALT")))) {
      preViolations.push("[DisplayManager.updateActuatorState] pre violated: state = 'HEAT' or state = 'COOL' or state = 'OFF' or state = 'SAFE_HALT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedSetpoint": self.displayedSetpoint,
      "self.displayError": self.displayError,
      "self.isErrorActive": self.isErrorActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, state);
      const postViolations: string[] = [];
      if (!((__result.self.displayedActuatorState === state))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayedActuatorState = state");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
      }
      if (!((__result.self.displayError === __pre["self.displayError"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayError = self.displayError@pre");
      }
      if (!((__result.self.isErrorActive === __pre["self.isErrorActive"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.isErrorActive = self.isErrorActive@pre");
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

/** Impl signature for DisplayManager.updateActuatorState (async). User supplies this. */
export type DisplayManagerUpdateActuatorStateAsyncImpl = (self: DisplayManager, state: string) => Promise<{ self: DisplayManager; modified: { displayedActuatorState: unknown } }>;

/** Contract-checking wrapper for DisplayManager.updateActuatorState (async). */
export function wrapDisplayManagerUpdateActuatorStateAsync(impl: DisplayManagerUpdateActuatorStateAsyncImpl): (self: DisplayManager, state: string) => Promise<DisplayManager> {
  return async (self, state) => {
    const preViolations: string[] = [];
    if (!(((((state === "HEAT") || (state === "COOL")) || (state === "OFF")) || (state === "SAFE_HALT")))) {
      preViolations.push("[DisplayManager.updateActuatorState] pre violated: state = 'HEAT' or state = 'COOL' or state = 'OFF' or state = 'SAFE_HALT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedSetpoint": self.displayedSetpoint,
      "self.displayError": self.displayError,
      "self.isErrorActive": self.isErrorActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, state);
      const postViolations: string[] = [];
      if (!((__result.self.displayedActuatorState === state))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayedActuatorState = state");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
      }
      if (!((__result.self.displayError === __pre["self.displayError"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.displayError = self.displayError@pre");
      }
      if (!((__result.self.isErrorActive === __pre["self.isErrorActive"]))) {
        postViolations.push("[DisplayManager.updateActuatorState] post violated: self.isErrorActive = self.isErrorActive@pre");
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

/** Impl signature for DisplayManager.showError. User supplies this. */
export type DisplayManagerShowErrorImpl = (self: DisplayManager, message: string) => { self: DisplayManager; modified: { displayError: unknown; displayedActuatorState: unknown; isErrorActive: unknown } };

/** Contract-checking wrapper for DisplayManager.showError. */
export function wrapDisplayManagerShowError(impl: DisplayManagerShowErrorImpl): (self: DisplayManager, message: string) => DisplayManager {
  return (self, message) => {
    const preViolations: string[] = [];
    if (!((message !== null))) {
      preViolations.push("[DisplayManager.showError] pre violated: message <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedSetpoint": self.displayedSetpoint,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, message);
      const postViolations: string[] = [];
      if (!((__result.self.displayError === message))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayError = message");
      }
      if (!((__result.self.displayedActuatorState === "SAFE_HALT"))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayedActuatorState = 'SAFE_HALT'");
      }
      if (!((__result.self.isErrorActive === true))) {
        postViolations.push("[DisplayManager.showError] post violated: self.isErrorActive = true");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
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

/** Impl signature for DisplayManager.showError (async). User supplies this. */
export type DisplayManagerShowErrorAsyncImpl = (self: DisplayManager, message: string) => Promise<{ self: DisplayManager; modified: { displayError: unknown; displayedActuatorState: unknown; isErrorActive: unknown } }>;

/** Contract-checking wrapper for DisplayManager.showError (async). */
export function wrapDisplayManagerShowErrorAsync(impl: DisplayManagerShowErrorAsyncImpl): (self: DisplayManager, message: string) => Promise<DisplayManager> {
  return async (self, message) => {
    const preViolations: string[] = [];
    if (!((message !== null))) {
      preViolations.push("[DisplayManager.showError] pre violated: message <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedSetpoint": self.displayedSetpoint,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, message);
      const postViolations: string[] = [];
      if (!((__result.self.displayError === message))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayError = message");
      }
      if (!((__result.self.displayedActuatorState === "SAFE_HALT"))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayedActuatorState = 'SAFE_HALT'");
      }
      if (!((__result.self.isErrorActive === true))) {
        postViolations.push("[DisplayManager.showError] post violated: self.isErrorActive = true");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.showError] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
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

/** Impl signature for DisplayManager.clearError. User supplies this. */
export type DisplayManagerClearErrorImpl = (self: DisplayManager) => { self: DisplayManager; modified: { displayError: unknown; isErrorActive: unknown } };

/** Contract-checking wrapper for DisplayManager.clearError. */
export function wrapDisplayManagerClearError(impl: DisplayManagerClearErrorImpl): (self: DisplayManager) => DisplayManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[DisplayManager.clearError] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedSetpoint": self.displayedSetpoint,
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedActuatorState": self.displayedActuatorState,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayError === ""))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayError = ''");
      }
      if (!((__result.self.isErrorActive === false))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.isErrorActive = false");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedActuatorState === __pre["self.displayedActuatorState"]))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayedActuatorState = self.displayedActuatorState@pre");
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

/** Impl signature for DisplayManager.clearError (async). User supplies this. */
export type DisplayManagerClearErrorAsyncImpl = (self: DisplayManager) => Promise<{ self: DisplayManager; modified: { displayError: unknown; isErrorActive: unknown } }>;

/** Contract-checking wrapper for DisplayManager.clearError (async). */
export function wrapDisplayManagerClearErrorAsync(impl: DisplayManagerClearErrorAsyncImpl): (self: DisplayManager) => Promise<DisplayManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[DisplayManager.clearError] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.displayedSetpoint": self.displayedSetpoint,
      "self.displayedTemperature": self.displayedTemperature,
      "self.displayedActuatorState": self.displayedActuatorState,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayError === ""))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayError = ''");
      }
      if (!((__result.self.isErrorActive === false))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.isErrorActive = false");
      }
      if (!((__result.self.displayedSetpoint === __pre["self.displayedSetpoint"]))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayedSetpoint = self.displayedSetpoint@pre");
      }
      if (!((__result.self.displayedTemperature === __pre["self.displayedTemperature"]))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayedTemperature = self.displayedTemperature@pre");
      }
      if (!((__result.self.displayedActuatorState === __pre["self.displayedActuatorState"]))) {
        postViolations.push("[DisplayManager.clearError] post violated: self.displayedActuatorState = self.displayedActuatorState@pre");
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

/** Impl signature for DisplayManager.initialize. User supplies this. */
export type DisplayManagerInitializeImpl = (self: DisplayManager, setpoint: number, temp: number) => { self: DisplayManager; modified: { displayedTemperature: unknown; displayedSetpoint: unknown; displayedActuatorState: unknown; displayError: unknown; isErrorActive: unknown } };

/** Contract-checking wrapper for DisplayManager.initialize. */
export function wrapDisplayManagerInitialize(impl: DisplayManagerInitializeImpl): (self: DisplayManager, setpoint: number, temp: number) => DisplayManager {
  return (self, setpoint, temp) => {
    const preViolations: string[] = [];
    if (!((setpoint >= 40))) {
      preViolations.push("[DisplayManager.initialize] pre violated: setpoint >= 40.0");
    }
    if (!((setpoint <= 90))) {
      preViolations.push("[DisplayManager.initialize] pre violated: setpoint <= 90.0");
    }
    if (!((temp >= -(200)))) {
      preViolations.push("[DisplayManager.initialize] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[DisplayManager.initialize] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, setpoint, temp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedTemperature === temp))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayedTemperature = temp");
      }
      if (!((__result.self.displayedSetpoint === setpoint))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayedSetpoint = setpoint");
      }
      if (!((__result.self.displayedActuatorState === "OFF"))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayedActuatorState = 'OFF'");
      }
      if (!((__result.self.displayError === ""))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayError = ''");
      }
      if (!((__result.self.isErrorActive === false))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.isErrorActive = false");
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

/** Impl signature for DisplayManager.initialize (async). User supplies this. */
export type DisplayManagerInitializeAsyncImpl = (self: DisplayManager, setpoint: number, temp: number) => Promise<{ self: DisplayManager; modified: { displayedTemperature: unknown; displayedSetpoint: unknown; displayedActuatorState: unknown; displayError: unknown; isErrorActive: unknown } }>;

/** Contract-checking wrapper for DisplayManager.initialize (async). */
export function wrapDisplayManagerInitializeAsync(impl: DisplayManagerInitializeAsyncImpl): (self: DisplayManager, setpoint: number, temp: number) => Promise<DisplayManager> {
  return async (self, setpoint, temp) => {
    const preViolations: string[] = [];
    if (!((setpoint >= 40))) {
      preViolations.push("[DisplayManager.initialize] pre violated: setpoint >= 40.0");
    }
    if (!((setpoint <= 90))) {
      preViolations.push("[DisplayManager.initialize] pre violated: setpoint <= 90.0");
    }
    if (!((temp >= -(200)))) {
      preViolations.push("[DisplayManager.initialize] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[DisplayManager.initialize] pre violated: temp <= 200.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, setpoint, temp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedTemperature === temp))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayedTemperature = temp");
      }
      if (!((__result.self.displayedSetpoint === setpoint))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayedSetpoint = setpoint");
      }
      if (!((__result.self.displayedActuatorState === "OFF"))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayedActuatorState = 'OFF'");
      }
      if (!((__result.self.displayError === ""))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.displayError = ''");
      }
      if (!((__result.self.isErrorActive === false))) {
        postViolations.push("[DisplayManager.initialize] post violated: self.isErrorActive = false");
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

/** Impl signature for SafetyMonitor.inspectReading. User supplies this. */
export type SafetyMonitorInspectReadingImpl = (self: SafetyMonitor, reading: number, timestamp: number) => { self: SafetyMonitor; modified: { systemHalted: unknown; faultAlertRaised: unknown } };

/** Contract-checking wrapper for SafetyMonitor.inspectReading. */
export function wrapSafetyMonitorInspectReading(impl: SafetyMonitorInspectReadingImpl): (self: SafetyMonitor, reading: number, timestamp: number) => SafetyMonitor {
  return (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!((reading >= -(200)))) {
      preViolations.push("[SafetyMonitor.inspectReading] pre violated: reading >= -200.0");
    }
    if (!((reading <= 200))) {
      preViolations.push("[SafetyMonitor.inspectReading] pre violated: reading <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SafetyMonitor.inspectReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.systemHalted": self.systemHalted,
      "self.faultAlertRaised": self.faultAlertRaised,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reading, timestamp);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if reading < self.plausibilityMin or reading > self.plausibilityMax then
            self.systemHalted = true
            and
            self.faultAlertRaised = true
            and
            result = false
          else
            self.systemHalted = self.systemHalted@pre
            and
            self.faultAlertRaised = self.faultAlertRaised@pre
            and
            result = true
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

/** Impl signature for SafetyMonitor.inspectReading (async). User supplies this. */
export type SafetyMonitorInspectReadingAsyncImpl = (self: SafetyMonitor, reading: number, timestamp: number) => Promise<{ self: SafetyMonitor; modified: { systemHalted: unknown; faultAlertRaised: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.inspectReading (async). */
export function wrapSafetyMonitorInspectReadingAsync(impl: SafetyMonitorInspectReadingAsyncImpl): (self: SafetyMonitor, reading: number, timestamp: number) => Promise<SafetyMonitor> {
  return async (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!((reading >= -(200)))) {
      preViolations.push("[SafetyMonitor.inspectReading] pre violated: reading >= -200.0");
    }
    if (!((reading <= 200))) {
      preViolations.push("[SafetyMonitor.inspectReading] pre violated: reading <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SafetyMonitor.inspectReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.systemHalted": self.systemHalted,
      "self.faultAlertRaised": self.faultAlertRaised,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reading, timestamp);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if reading < self.plausibilityMin or reading > self.plausibilityMax then
            self.systemHalted = true
            and
            self.faultAlertRaised = true
            and
            result = false
          else
            self.systemHalted = self.systemHalted@pre
            and
            self.faultAlertRaised = self.faultAlertRaised@pre
            and
            result = true
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

/** Impl signature for SafetyMonitor.reset. User supplies this. */
export type SafetyMonitorResetImpl = (self: SafetyMonitor) => { self: SafetyMonitor; modified: { systemHalted: unknown; faultAlertRaised: unknown } };

/** Contract-checking wrapper for SafetyMonitor.reset. */
export function wrapSafetyMonitorReset(impl: SafetyMonitorResetImpl): (self: SafetyMonitor) => SafetyMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SafetyMonitor.reset] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemHalted === false))) {
        postViolations.push("[SafetyMonitor.reset] post violated: self.systemHalted = false");
      }
      if (!((__result.self.faultAlertRaised === false))) {
        postViolations.push("[SafetyMonitor.reset] post violated: self.faultAlertRaised = false");
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

/** Impl signature for SafetyMonitor.reset (async). User supplies this. */
export type SafetyMonitorResetAsyncImpl = (self: SafetyMonitor) => Promise<{ self: SafetyMonitor; modified: { systemHalted: unknown; faultAlertRaised: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.reset (async). */
export function wrapSafetyMonitorResetAsync(impl: SafetyMonitorResetAsyncImpl): (self: SafetyMonitor) => Promise<SafetyMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SafetyMonitor.reset] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemHalted === false))) {
        postViolations.push("[SafetyMonitor.reset] post violated: self.systemHalted = false");
      }
      if (!((__result.self.faultAlertRaised === false))) {
        postViolations.push("[SafetyMonitor.reset] post violated: self.faultAlertRaised = false");
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

/** Impl signature for SafetyMonitor.initialize. User supplies this. */
export type SafetyMonitorInitializeImpl = (self: SafetyMonitor) => { self: SafetyMonitor; modified: { systemHalted: unknown; faultAlertRaised: unknown } };

/** Contract-checking wrapper for SafetyMonitor.initialize. */
export function wrapSafetyMonitorInitialize(impl: SafetyMonitorInitializeImpl): (self: SafetyMonitor) => SafetyMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SafetyMonitor.initialize] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemHalted === false))) {
        postViolations.push("[SafetyMonitor.initialize] post violated: self.systemHalted = false");
      }
      if (!((__result.self.faultAlertRaised === false))) {
        postViolations.push("[SafetyMonitor.initialize] post violated: self.faultAlertRaised = false");
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

/** Impl signature for SafetyMonitor.initialize (async). User supplies this. */
export type SafetyMonitorInitializeAsyncImpl = (self: SafetyMonitor) => Promise<{ self: SafetyMonitor; modified: { systemHalted: unknown; faultAlertRaised: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.initialize (async). */
export function wrapSafetyMonitorInitializeAsync(impl: SafetyMonitorInitializeAsyncImpl): (self: SafetyMonitor) => Promise<SafetyMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SafetyMonitor.initialize] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.systemHalted === false))) {
        postViolations.push("[SafetyMonitor.initialize] post violated: self.systemHalted = false");
      }
      if (!((__result.self.faultAlertRaised === false))) {
        postViolations.push("[SafetyMonitor.initialize] post violated: self.faultAlertRaised = false");
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

/** Impl signature for SensorChannel.deliverReading. User supplies this. */
export type SensorChannelDeliverReadingImpl = (self: SensorChannel, value: number, timestamp: number) => { self: SensorChannel; modified: { lastDeliveredReading: unknown; lastDeliveredTimestamp: unknown; readingIsPlausible: unknown } };

/** Contract-checking wrapper for SensorChannel.deliverReading. */
export function wrapSensorChannelDeliverReading(impl: SensorChannelDeliverReadingImpl): (self: SensorChannel, value: number, timestamp: number) => SensorChannel {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= -(200)))) {
      preViolations.push("[SensorChannel.deliverReading] pre violated: value >= -200.0");
    }
    if (!((value <= 200))) {
      preViolations.push("[SensorChannel.deliverReading] pre violated: value <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorChannel.deliverReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastDeliveredReading === value))) {
        postViolations.push("[SensorChannel.deliverReading] post violated: self.lastDeliveredReading = value");
      }
      if (!((__result.self.lastDeliveredTimestamp === timestamp))) {
        postViolations.push("[SensorChannel.deliverReading] post violated: self.lastDeliveredTimestamp = timestamp");
      }
      if (!((__result.self.readingIsPlausible === ((value >= __result.self.sensorPlausibilityMin) && (value <= __result.self.sensorPlausibilityMax))))) {
        postViolations.push("[SensorChannel.deliverReading] post violated: self.readingIsPlausible = (value >= self.sensorPlausibilityMin and value <= self.sensorPlausibilityMax)");
      }
      // SKIPPED post-clause (not translatable): result = self.readingIsPlausible — unbound variable 'result'
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

/** Impl signature for SensorChannel.deliverReading (async). User supplies this. */
export type SensorChannelDeliverReadingAsyncImpl = (self: SensorChannel, value: number, timestamp: number) => Promise<{ self: SensorChannel; modified: { lastDeliveredReading: unknown; lastDeliveredTimestamp: unknown; readingIsPlausible: unknown } }>;

/** Contract-checking wrapper for SensorChannel.deliverReading (async). */
export function wrapSensorChannelDeliverReadingAsync(impl: SensorChannelDeliverReadingAsyncImpl): (self: SensorChannel, value: number, timestamp: number) => Promise<SensorChannel> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= -(200)))) {
      preViolations.push("[SensorChannel.deliverReading] pre violated: value >= -200.0");
    }
    if (!((value <= 200))) {
      preViolations.push("[SensorChannel.deliverReading] pre violated: value <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorChannel.deliverReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastDeliveredReading === value))) {
        postViolations.push("[SensorChannel.deliverReading] post violated: self.lastDeliveredReading = value");
      }
      if (!((__result.self.lastDeliveredTimestamp === timestamp))) {
        postViolations.push("[SensorChannel.deliverReading] post violated: self.lastDeliveredTimestamp = timestamp");
      }
      if (!((__result.self.readingIsPlausible === ((value >= __result.self.sensorPlausibilityMin) && (value <= __result.self.sensorPlausibilityMax))))) {
        postViolations.push("[SensorChannel.deliverReading] post violated: self.readingIsPlausible = (value >= self.sensorPlausibilityMin and value <= self.sensorPlausibilityMax)");
      }
      // SKIPPED post-clause (not translatable): result = self.readingIsPlausible — unbound variable 'result'
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

/** Impl signature for SensorChannel.updatePlausibilityBounds. User supplies this. */
export type SensorChannelUpdatePlausibilityBoundsImpl = (self: SensorChannel, newMin: number, newMax: number) => { self: SensorChannel; modified: { sensorPlausibilityMin: unknown; sensorPlausibilityMax: unknown } };

/** Contract-checking wrapper for SensorChannel.updatePlausibilityBounds. */
export function wrapSensorChannelUpdatePlausibilityBounds(impl: SensorChannelUpdatePlausibilityBoundsImpl): (self: SensorChannel, newMin: number, newMax: number) => SensorChannel {
  return (self, newMin, newMax) => {
    const preViolations: string[] = [];
    if (!((newMin <= -(40)))) {
      preViolations.push("[SensorChannel.updatePlausibilityBounds] pre violated: newMin <= -40.0");
    }
    if (!((newMax >= 150))) {
      preViolations.push("[SensorChannel.updatePlausibilityBounds] pre violated: newMax >= 150.0");
    }
    if (!((newMin < newMax))) {
      preViolations.push("[SensorChannel.updatePlausibilityBounds] pre violated: newMin < newMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMin, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.sensorPlausibilityMin === newMin))) {
        postViolations.push("[SensorChannel.updatePlausibilityBounds] post violated: self.sensorPlausibilityMin = newMin");
      }
      if (!((__result.self.sensorPlausibilityMax === newMax))) {
        postViolations.push("[SensorChannel.updatePlausibilityBounds] post violated: self.sensorPlausibilityMax = newMax");
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

/** Impl signature for SensorChannel.updatePlausibilityBounds (async). User supplies this. */
export type SensorChannelUpdatePlausibilityBoundsAsyncImpl = (self: SensorChannel, newMin: number, newMax: number) => Promise<{ self: SensorChannel; modified: { sensorPlausibilityMin: unknown; sensorPlausibilityMax: unknown } }>;

/** Contract-checking wrapper for SensorChannel.updatePlausibilityBounds (async). */
export function wrapSensorChannelUpdatePlausibilityBoundsAsync(impl: SensorChannelUpdatePlausibilityBoundsAsyncImpl): (self: SensorChannel, newMin: number, newMax: number) => Promise<SensorChannel> {
  return async (self, newMin, newMax) => {
    const preViolations: string[] = [];
    if (!((newMin <= -(40)))) {
      preViolations.push("[SensorChannel.updatePlausibilityBounds] pre violated: newMin <= -40.0");
    }
    if (!((newMax >= 150))) {
      preViolations.push("[SensorChannel.updatePlausibilityBounds] pre violated: newMax >= 150.0");
    }
    if (!((newMin < newMax))) {
      preViolations.push("[SensorChannel.updatePlausibilityBounds] pre violated: newMin < newMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMin, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.sensorPlausibilityMin === newMin))) {
        postViolations.push("[SensorChannel.updatePlausibilityBounds] post violated: self.sensorPlausibilityMin = newMin");
      }
      if (!((__result.self.sensorPlausibilityMax === newMax))) {
        postViolations.push("[SensorChannel.updatePlausibilityBounds] post violated: self.sensorPlausibilityMax = newMax");
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

/** Impl signature for ControlBus.transmitCommand. User supplies this. */
export type ControlBusTransmitCommandImpl = (self: ControlBus, command: string, timestamp: number) => { self: ControlBus; modified: { lastCommand: unknown; endpointCommandedState: unknown; endpointLastTransitionTimestamp: unknown } };

/** Contract-checking wrapper for ControlBus.transmitCommand. */
export function wrapControlBusTransmitCommand(impl: ControlBusTransmitCommandImpl): (self: ControlBus, command: string, timestamp: number) => ControlBus {
  return (self, command, timestamp) => {
    const preViolations: string[] = [];
    if (!((((command === "HEAT") || (command === "COOL")) || (command === "OFF")))) {
      preViolations.push("[ControlBus.transmitCommand] pre violated: command = 'HEAT' or command = 'COOL' or command = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ControlBus.transmitCommand] pre violated: timestamp >= 0.0");
    }
    if (!((((command !== self.endpointCommandedState)) ? (((timestamp - self.endpointLastTransitionTimestamp) >= self.endpointMinIntervalSecs)) : (true)))) {
      preViolations.push("[ControlBus.transmitCommand] pre violated: if command <> self.endpointCommandedState then\n           timestamp - self.endpointLastTransitionTimestamp >= self.endpointMinIntervalSecs\n         else\n           true\n         endif");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.endpointCommandedState": self.endpointCommandedState,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, command, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommand === command))) {
        postViolations.push("[ControlBus.transmitCommand] post violated: self.lastCommand = command");
      }
      if (!((((command !== __pre["self.endpointCommandedState"])) ? (((__result.self.endpointCommandedState === command) && (__result.self.endpointLastTransitionTimestamp === timestamp))) : (((__result.self.endpointCommandedState === __pre["self.endpointCommandedState"]) && (__result.self.endpointLastTransitionTimestamp === timestamp)))))) {
        postViolations.push("[ControlBus.transmitCommand] post violated: if command <> self.endpointCommandedState@pre then\n            self.endpointCommandedState = command\n            and\n            self.endpointLastTransitionTimestamp = timestamp\n          else\n            self.endpointCommandedState = self.endpointCommandedState@pre\n            and\n            self.endpointLastTransitionTimestamp = timestamp\n          endif");
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

/** Impl signature for ControlBus.transmitCommand (async). User supplies this. */
export type ControlBusTransmitCommandAsyncImpl = (self: ControlBus, command: string, timestamp: number) => Promise<{ self: ControlBus; modified: { lastCommand: unknown; endpointCommandedState: unknown; endpointLastTransitionTimestamp: unknown } }>;

/** Contract-checking wrapper for ControlBus.transmitCommand (async). */
export function wrapControlBusTransmitCommandAsync(impl: ControlBusTransmitCommandAsyncImpl): (self: ControlBus, command: string, timestamp: number) => Promise<ControlBus> {
  return async (self, command, timestamp) => {
    const preViolations: string[] = [];
    if (!((((command === "HEAT") || (command === "COOL")) || (command === "OFF")))) {
      preViolations.push("[ControlBus.transmitCommand] pre violated: command = 'HEAT' or command = 'COOL' or command = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ControlBus.transmitCommand] pre violated: timestamp >= 0.0");
    }
    if (!((((command !== self.endpointCommandedState)) ? (((timestamp - self.endpointLastTransitionTimestamp) >= self.endpointMinIntervalSecs)) : (true)))) {
      preViolations.push("[ControlBus.transmitCommand] pre violated: if command <> self.endpointCommandedState then\n           timestamp - self.endpointLastTransitionTimestamp >= self.endpointMinIntervalSecs\n         else\n           true\n         endif");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.endpointCommandedState": self.endpointCommandedState,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, command, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommand === command))) {
        postViolations.push("[ControlBus.transmitCommand] post violated: self.lastCommand = command");
      }
      if (!((((command !== __pre["self.endpointCommandedState"])) ? (((__result.self.endpointCommandedState === command) && (__result.self.endpointLastTransitionTimestamp === timestamp))) : (((__result.self.endpointCommandedState === __pre["self.endpointCommandedState"]) && (__result.self.endpointLastTransitionTimestamp === timestamp)))))) {
        postViolations.push("[ControlBus.transmitCommand] post violated: if command <> self.endpointCommandedState@pre then\n            self.endpointCommandedState = command\n            and\n            self.endpointLastTransitionTimestamp = timestamp\n          else\n            self.endpointCommandedState = self.endpointCommandedState@pre\n            and\n            self.endpointLastTransitionTimestamp = timestamp\n          endif");
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

/** Impl signature for ControlBus.transmitOffCommand. User supplies this. */
export type ControlBusTransmitOffCommandImpl = (self: ControlBus, timestamp: number) => { self: ControlBus; modified: { lastCommand: unknown; endpointCommandedState: unknown; endpointLastTransitionTimestamp: unknown } };

/** Contract-checking wrapper for ControlBus.transmitOffCommand. */
export function wrapControlBusTransmitOffCommand(impl: ControlBusTransmitOffCommandImpl): (self: ControlBus, timestamp: number) => ControlBus {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[ControlBus.transmitOffCommand] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommand === "OFF"))) {
        postViolations.push("[ControlBus.transmitOffCommand] post violated: self.lastCommand = 'OFF'");
      }
      if (!((__result.self.endpointCommandedState === "OFF"))) {
        postViolations.push("[ControlBus.transmitOffCommand] post violated: self.endpointCommandedState = 'OFF'");
      }
      if (!((__result.self.endpointLastTransitionTimestamp === timestamp))) {
        postViolations.push("[ControlBus.transmitOffCommand] post violated: self.endpointLastTransitionTimestamp = timestamp");
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

/** Impl signature for ControlBus.transmitOffCommand (async). User supplies this. */
export type ControlBusTransmitOffCommandAsyncImpl = (self: ControlBus, timestamp: number) => Promise<{ self: ControlBus; modified: { lastCommand: unknown; endpointCommandedState: unknown; endpointLastTransitionTimestamp: unknown } }>;

/** Contract-checking wrapper for ControlBus.transmitOffCommand (async). */
export function wrapControlBusTransmitOffCommandAsync(impl: ControlBusTransmitOffCommandAsyncImpl): (self: ControlBus, timestamp: number) => Promise<ControlBus> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[ControlBus.transmitOffCommand] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommand === "OFF"))) {
        postViolations.push("[ControlBus.transmitOffCommand] post violated: self.lastCommand = 'OFF'");
      }
      if (!((__result.self.endpointCommandedState === "OFF"))) {
        postViolations.push("[ControlBus.transmitOffCommand] post violated: self.endpointCommandedState = 'OFF'");
      }
      if (!((__result.self.endpointLastTransitionTimestamp === timestamp))) {
        postViolations.push("[ControlBus.transmitOffCommand] post violated: self.endpointLastTransitionTimestamp = timestamp");
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

/** Impl signature for ControlBus.syncDecisionCommand. User supplies this. */
export type ControlBusSyncDecisionCommandImpl = (self: ControlBus, cmd: string) => { self: ControlBus; modified: { endpointDecisionCommand: unknown } };

/** Contract-checking wrapper for ControlBus.syncDecisionCommand. */
export function wrapControlBusSyncDecisionCommand(impl: ControlBusSyncDecisionCommandImpl): (self: ControlBus, cmd: string) => ControlBus {
  return (self, cmd) => {
    const preViolations: string[] = [];
    if (!((((cmd === "HEAT") || (cmd === "COOL")) || (cmd === "OFF")))) {
      preViolations.push("[ControlBus.syncDecisionCommand] pre violated: cmd = 'HEAT' or cmd = 'COOL' or cmd = 'OFF'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, cmd);
      const postViolations: string[] = [];
      if (!((__result.self.endpointDecisionCommand === cmd))) {
        postViolations.push("[ControlBus.syncDecisionCommand] post violated: self.endpointDecisionCommand = cmd");
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

/** Impl signature for ControlBus.syncDecisionCommand (async). User supplies this. */
export type ControlBusSyncDecisionCommandAsyncImpl = (self: ControlBus, cmd: string) => Promise<{ self: ControlBus; modified: { endpointDecisionCommand: unknown } }>;

/** Contract-checking wrapper for ControlBus.syncDecisionCommand (async). */
export function wrapControlBusSyncDecisionCommandAsync(impl: ControlBusSyncDecisionCommandAsyncImpl): (self: ControlBus, cmd: string) => Promise<ControlBus> {
  return async (self, cmd) => {
    const preViolations: string[] = [];
    if (!((((cmd === "HEAT") || (cmd === "COOL")) || (cmd === "OFF")))) {
      preViolations.push("[ControlBus.syncDecisionCommand] pre violated: cmd = 'HEAT' or cmd = 'COOL' or cmd = 'OFF'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, cmd);
      const postViolations: string[] = [];
      if (!((__result.self.endpointDecisionCommand === cmd))) {
        postViolations.push("[ControlBus.syncDecisionCommand] post violated: self.endpointDecisionCommand = cmd");
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

/** Impl signature for ControlBus.syncActuatorState. User supplies this. */
export type ControlBusSyncActuatorStateImpl = (self: ControlBus, state: string, ts: number) => { self: ControlBus; modified: { endpointCommandedState: unknown; endpointLastTransitionTimestamp: unknown } };

/** Contract-checking wrapper for ControlBus.syncActuatorState. */
export function wrapControlBusSyncActuatorState(impl: ControlBusSyncActuatorStateImpl): (self: ControlBus, state: string, ts: number) => ControlBus {
  return (self, state, ts) => {
    const preViolations: string[] = [];
    if (!((((state === "HEAT") || (state === "COOL")) || (state === "OFF")))) {
      preViolations.push("[ControlBus.syncActuatorState] pre violated: state = 'HEAT' or state = 'COOL' or state = 'OFF'");
    }
    if (!((ts >= 0))) {
      preViolations.push("[ControlBus.syncActuatorState] pre violated: ts >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, state, ts);
      const postViolations: string[] = [];
      if (!((__result.self.endpointCommandedState === state))) {
        postViolations.push("[ControlBus.syncActuatorState] post violated: self.endpointCommandedState = state");
      }
      if (!((__result.self.endpointLastTransitionTimestamp === ts))) {
        postViolations.push("[ControlBus.syncActuatorState] post violated: self.endpointLastTransitionTimestamp = ts");
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

/** Impl signature for ControlBus.syncActuatorState (async). User supplies this. */
export type ControlBusSyncActuatorStateAsyncImpl = (self: ControlBus, state: string, ts: number) => Promise<{ self: ControlBus; modified: { endpointCommandedState: unknown; endpointLastTransitionTimestamp: unknown } }>;

/** Contract-checking wrapper for ControlBus.syncActuatorState (async). */
export function wrapControlBusSyncActuatorStateAsync(impl: ControlBusSyncActuatorStateAsyncImpl): (self: ControlBus, state: string, ts: number) => Promise<ControlBus> {
  return async (self, state, ts) => {
    const preViolations: string[] = [];
    if (!((((state === "HEAT") || (state === "COOL")) || (state === "OFF")))) {
      preViolations.push("[ControlBus.syncActuatorState] pre violated: state = 'HEAT' or state = 'COOL' or state = 'OFF'");
    }
    if (!((ts >= 0))) {
      preViolations.push("[ControlBus.syncActuatorState] pre violated: ts >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, state, ts);
      const postViolations: string[] = [];
      if (!((__result.self.endpointCommandedState === state))) {
        postViolations.push("[ControlBus.syncActuatorState] post violated: self.endpointCommandedState = state");
      }
      if (!((__result.self.endpointLastTransitionTimestamp === ts))) {
        postViolations.push("[ControlBus.syncActuatorState] post violated: self.endpointLastTransitionTimestamp = ts");
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

/** Impl signature for UserInterfaceBus.refreshDisplay. User supplies this. */
export type UserInterfaceBusRefreshDisplayImpl = (self: UserInterfaceBus, timestamp: number) => { self: UserInterfaceBus; modified: { currentDisplayState: unknown } };

/** Contract-checking wrapper for UserInterfaceBus.refreshDisplay. */
export function wrapUserInterfaceBusRefreshDisplay(impl: UserInterfaceBusRefreshDisplayImpl): (self: UserInterfaceBus, timestamp: number) => UserInterfaceBus {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[UserInterfaceBus.refreshDisplay] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.currentDisplayState === ((__result.self.sourceHalted) ? ("SAFE_HALT") : (__result.self.sourceActuatorState))))) {
        postViolations.push("[UserInterfaceBus.refreshDisplay] post violated: self.currentDisplayState = if self.sourceHalted then 'SAFE_HALT'\n                                       else self.sourceActuatorState endif");
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

/** Impl signature for UserInterfaceBus.refreshDisplay (async). User supplies this. */
export type UserInterfaceBusRefreshDisplayAsyncImpl = (self: UserInterfaceBus, timestamp: number) => Promise<{ self: UserInterfaceBus; modified: { currentDisplayState: unknown } }>;

/** Contract-checking wrapper for UserInterfaceBus.refreshDisplay (async). */
export function wrapUserInterfaceBusRefreshDisplayAsync(impl: UserInterfaceBusRefreshDisplayAsyncImpl): (self: UserInterfaceBus, timestamp: number) => Promise<UserInterfaceBus> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[UserInterfaceBus.refreshDisplay] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.currentDisplayState === ((__result.self.sourceHalted) ? ("SAFE_HALT") : (__result.self.sourceActuatorState))))) {
        postViolations.push("[UserInterfaceBus.refreshDisplay] post violated: self.currentDisplayState = if self.sourceHalted then 'SAFE_HALT'\n                                       else self.sourceActuatorState endif");
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

/** Impl signature for UserInterfaceBus.syncDisplayData. User supplies this. */
export type UserInterfaceBusSyncDisplayDataImpl = (self: UserInterfaceBus, temp: number, setpoint: number, actuatorState: string, halted: boolean, faultActive: boolean) => { self: UserInterfaceBus; modified: { sourceTemperature: unknown; sourceSetpoint: unknown; sourceActuatorState: unknown; sourceHalted: unknown; sourceFaultActive: unknown; currentDisplayState: unknown } };

/** Contract-checking wrapper for UserInterfaceBus.syncDisplayData. */
export function wrapUserInterfaceBusSyncDisplayData(impl: UserInterfaceBusSyncDisplayDataImpl): (self: UserInterfaceBus, temp: number, setpoint: number, actuatorState: string, halted: boolean, faultActive: boolean) => UserInterfaceBus {
  return (self, temp, setpoint, actuatorState, halted, faultActive) => {
    const preViolations: string[] = [];
    if (!((temp >= -(200)))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: temp <= 200.0");
    }
    if (!((setpoint >= 40))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: setpoint >= 40.0");
    }
    if (!((setpoint <= 90))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: setpoint <= 90.0");
    }
    if (!(((((actuatorState === "HEAT") || (actuatorState === "COOL")) || (actuatorState === "OFF")) || (actuatorState === "SAFE_HALT")))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: actuatorState = 'HEAT' or actuatorState = 'COOL' or actuatorState = 'OFF' or actuatorState = 'SAFE_HALT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, temp, setpoint, actuatorState, halted, faultActive);
      const postViolations: string[] = [];
      if (!((__result.self.sourceTemperature === temp))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceTemperature = temp");
      }
      if (!((__result.self.sourceSetpoint === setpoint))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceSetpoint = setpoint");
      }
      if (!((__result.self.sourceActuatorState === actuatorState))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceActuatorState = actuatorState");
      }
      if (!((__result.self.sourceHalted === halted))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceHalted = halted");
      }
      if (!((__result.self.sourceFaultActive === faultActive))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceFaultActive = faultActive");
      }
      if (!((__result.self.currentDisplayState === ((halted) ? ("SAFE_HALT") : (actuatorState))))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.currentDisplayState = if halted then 'SAFE_HALT' else actuatorState endif");
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

/** Impl signature for UserInterfaceBus.syncDisplayData (async). User supplies this. */
export type UserInterfaceBusSyncDisplayDataAsyncImpl = (self: UserInterfaceBus, temp: number, setpoint: number, actuatorState: string, halted: boolean, faultActive: boolean) => Promise<{ self: UserInterfaceBus; modified: { sourceTemperature: unknown; sourceSetpoint: unknown; sourceActuatorState: unknown; sourceHalted: unknown; sourceFaultActive: unknown; currentDisplayState: unknown } }>;

/** Contract-checking wrapper for UserInterfaceBus.syncDisplayData (async). */
export function wrapUserInterfaceBusSyncDisplayDataAsync(impl: UserInterfaceBusSyncDisplayDataAsyncImpl): (self: UserInterfaceBus, temp: number, setpoint: number, actuatorState: string, halted: boolean, faultActive: boolean) => Promise<UserInterfaceBus> {
  return async (self, temp, setpoint, actuatorState, halted, faultActive) => {
    const preViolations: string[] = [];
    if (!((temp >= -(200)))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: temp >= -200.0");
    }
    if (!((temp <= 200))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: temp <= 200.0");
    }
    if (!((setpoint >= 40))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: setpoint >= 40.0");
    }
    if (!((setpoint <= 90))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: setpoint <= 90.0");
    }
    if (!(((((actuatorState === "HEAT") || (actuatorState === "COOL")) || (actuatorState === "OFF")) || (actuatorState === "SAFE_HALT")))) {
      preViolations.push("[UserInterfaceBus.syncDisplayData] pre violated: actuatorState = 'HEAT' or actuatorState = 'COOL' or actuatorState = 'OFF' or actuatorState = 'SAFE_HALT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, temp, setpoint, actuatorState, halted, faultActive);
      const postViolations: string[] = [];
      if (!((__result.self.sourceTemperature === temp))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceTemperature = temp");
      }
      if (!((__result.self.sourceSetpoint === setpoint))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceSetpoint = setpoint");
      }
      if (!((__result.self.sourceActuatorState === actuatorState))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceActuatorState = actuatorState");
      }
      if (!((__result.self.sourceHalted === halted))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceHalted = halted");
      }
      if (!((__result.self.sourceFaultActive === faultActive))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.sourceFaultActive = faultActive");
      }
      if (!((__result.self.currentDisplayState === ((halted) ? ("SAFE_HALT") : (actuatorState))))) {
        postViolations.push("[UserInterfaceBus.syncDisplayData] post violated: self.currentDisplayState = if halted then 'SAFE_HALT' else actuatorState endif");
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

/** Impl signature for ThermostatSystem.setUserSetpoint. User supplies this. */
export type ThermostatSystemSetUserSetpointImpl = (self: ThermostatSystem, requestedSetpoint: number) => { self: ThermostatSystem; modified: { currentSetpoint: unknown } };

/** Contract-checking wrapper for ThermostatSystem.setUserSetpoint. */
export function wrapThermostatSystemSetUserSetpoint(impl: ThermostatSystemSetUserSetpointImpl): (self: ThermostatSystem, requestedSetpoint: number) => ThermostatSystem {
  return (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: not self.halted");
    }
    if (!((requestedSetpoint >= -(100)))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: requestedSetpoint >= -100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!((__result.self.currentSetpoint === (((requestedSetpoint < __result.self.safeMinSetpoint)) ? (__result.self.safeMinSetpoint) : ((((requestedSetpoint > __result.self.safeMaxSetpoint)) ? (__result.self.safeMaxSetpoint) : (requestedSetpoint))))))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentSetpoint = if requestedSetpoint < self.safeMinSetpoint then self.safeMinSetpoint\n                                 else if requestedSetpoint > self.safeMaxSetpoint then self.safeMaxSetpoint\n                                 else requestedSetpoint endif endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentActuatorCommand = self.currentActuatorCommand@pre");
      }
      if (!((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre");
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

/** Impl signature for ThermostatSystem.setUserSetpoint (async). User supplies this. */
export type ThermostatSystemSetUserSetpointAsyncImpl = (self: ThermostatSystem, requestedSetpoint: number) => Promise<{ self: ThermostatSystem; modified: { currentSetpoint: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.setUserSetpoint (async). */
export function wrapThermostatSystemSetUserSetpointAsync(impl: ThermostatSystemSetUserSetpointAsyncImpl): (self: ThermostatSystem, requestedSetpoint: number) => Promise<ThermostatSystem> {
  return async (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: not self.halted");
    }
    if (!((requestedSetpoint >= -(100)))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: requestedSetpoint >= -100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!((__result.self.currentSetpoint === (((requestedSetpoint < __result.self.safeMinSetpoint)) ? (__result.self.safeMinSetpoint) : ((((requestedSetpoint > __result.self.safeMaxSetpoint)) ? (__result.self.safeMaxSetpoint) : (requestedSetpoint))))))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentSetpoint = if requestedSetpoint < self.safeMinSetpoint then self.safeMinSetpoint\n                                 else if requestedSetpoint > self.safeMaxSetpoint then self.safeMaxSetpoint\n                                 else requestedSetpoint endif endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentActuatorCommand = self.currentActuatorCommand@pre");
      }
      if (!((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre");
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

/** Impl signature for ThermostatSystem.processSensorReading. User supplies this. */
export type ThermostatSystemProcessSensorReadingImpl = (self: ThermostatSystem, reading: number, timestamp: number) => { self: ThermostatSystem; modified: { currentTemperature: unknown; currentActuatorCommand: unknown; halted: unknown; faultAlertActive: unknown; lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ThermostatSystem.processSensorReading. */
export function wrapThermostatSystemProcessSensorReading(impl: ThermostatSystemProcessSensorReadingImpl): (self: ThermostatSystem, reading: number, timestamp: number) => ThermostatSystem {
  return (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!((reading >= -(200)))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading >= -200.0");
    }
    if (!((reading <= 200))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.halted": self.halted,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reading, timestamp);
      const postViolations: string[] = [];
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__result.self.halted))) ? (((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === (((reading < (__result.self.currentSetpoint - 1))) ? ("HEAT") : ((((reading > (__result.self.currentSetpoint + 1))) ? ("COOL") : ("OFF"))))))) : ((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && __result.self.halted)) ? (((((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.halted === true)) && (__result.self.faultAlertActive === true))) : (((((__result.self.halted === true) && (__result.self.faultAlertActive === true)) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.currentTemperature === __pre["self.currentTemperature"])))))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand =\n              if reading < self.currentSetpoint - 1.0 then 'HEAT'\n              else if reading > self.currentSetpoint + 1.0 then 'COOL'\n              else 'OFF' endif endif\n          else if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.halted = true\n            and\n            self.faultAlertActive = true\n          else\n            self.halted = true\n            and\n            self.faultAlertActive = true\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.currentTemperature = self.currentTemperature@pre\n          endif endif");
      }
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__pre["self.halted"]))) ? ((__result.self.lastCommandTimestamp === timestamp)) : ((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if (reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted@pre) then\n            self.lastCommandTimestamp = timestamp\n          else\n            self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n          endif");
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

/** Impl signature for ThermostatSystem.processSensorReading (async). User supplies this. */
export type ThermostatSystemProcessSensorReadingAsyncImpl = (self: ThermostatSystem, reading: number, timestamp: number) => Promise<{ self: ThermostatSystem; modified: { currentTemperature: unknown; currentActuatorCommand: unknown; halted: unknown; faultAlertActive: unknown; lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.processSensorReading (async). */
export function wrapThermostatSystemProcessSensorReadingAsync(impl: ThermostatSystemProcessSensorReadingAsyncImpl): (self: ThermostatSystem, reading: number, timestamp: number) => Promise<ThermostatSystem> {
  return async (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!((reading >= -(200)))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading >= -200.0");
    }
    if (!((reading <= 200))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.halted": self.halted,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reading, timestamp);
      const postViolations: string[] = [];
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__result.self.halted))) ? (((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === (((reading < (__result.self.currentSetpoint - 1))) ? ("HEAT") : ((((reading > (__result.self.currentSetpoint + 1))) ? ("COOL") : ("OFF"))))))) : ((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && __result.self.halted)) ? (((((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.halted === true)) && (__result.self.faultAlertActive === true))) : (((((__result.self.halted === true) && (__result.self.faultAlertActive === true)) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.currentTemperature === __pre["self.currentTemperature"])))))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand =\n              if reading < self.currentSetpoint - 1.0 then 'HEAT'\n              else if reading > self.currentSetpoint + 1.0 then 'COOL'\n              else 'OFF' endif endif\n          else if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.halted = true\n            and\n            self.faultAlertActive = true\n          else\n            self.halted = true\n            and\n            self.faultAlertActive = true\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.currentTemperature = self.currentTemperature@pre\n          endif endif");
      }
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__pre["self.halted"]))) ? ((__result.self.lastCommandTimestamp === timestamp)) : ((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if (reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted@pre) then\n            self.lastCommandTimestamp = timestamp\n          else\n            self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n          endif");
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

/** Impl signature for ThermostatSystem.requestCommandTransition. User supplies this. */
export type ThermostatSystemRequestCommandTransitionImpl = (self: ThermostatSystem, newCommand: string, timestamp: number) => { self: ThermostatSystem; modified: { currentActuatorCommand: unknown; lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ThermostatSystem.requestCommandTransition. */
export function wrapThermostatSystemRequestCommandTransition(impl: ThermostatSystemRequestCommandTransitionImpl): (self: ThermostatSystem, newCommand: string, timestamp: number) => ThermostatSystem {
  return (self, newCommand, timestamp) => {
    const preViolations: string[] = [];
    if (!((((newCommand === "HEAT") || (newCommand === "COOL")) || (newCommand === "OFF")))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: newCommand = 'HEAT' or newCommand = 'COOL' or newCommand = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: timestamp >= 0.0");
    }
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: not self.halted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.halted": self.halted,
      "self.faultAlertActive": self.faultAlertActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newCommand, timestamp);
      const postViolations: string[] = [];
      if (!((((newCommand !== __pre["self.currentActuatorCommand"])) ? (((((timestamp - __pre["self.lastCommandTimestamp"]) >= __result.self.minCycleIntervalSecs)) ? (((__result.self.currentActuatorCommand === newCommand) && (__result.self.lastCommandTimestamp === timestamp))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === timestamp)))))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: if newCommand <> self.currentActuatorCommand@pre then\n            if timestamp - self.lastCommandTimestamp@pre >= self.minCycleIntervalSecs then\n              self.currentActuatorCommand = newCommand\n              and\n              self.lastCommandTimestamp = timestamp\n            else\n              self.currentActuatorCommand = self.currentActuatorCommand@pre\n              and\n              self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n            endif\n          else\n            self.currentActuatorCommand = self.currentActuatorCommand@pre\n            and\n            self.lastCommandTimestamp = timestamp\n          endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.halted === __pre["self.halted"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.halted = self.halted@pre");
      }
      if (!((__result.self.faultAlertActive === __pre["self.faultAlertActive"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.faultAlertActive = self.faultAlertActive@pre");
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

/** Impl signature for ThermostatSystem.requestCommandTransition (async). User supplies this. */
export type ThermostatSystemRequestCommandTransitionAsyncImpl = (self: ThermostatSystem, newCommand: string, timestamp: number) => Promise<{ self: ThermostatSystem; modified: { currentActuatorCommand: unknown; lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.requestCommandTransition (async). */
export function wrapThermostatSystemRequestCommandTransitionAsync(impl: ThermostatSystemRequestCommandTransitionAsyncImpl): (self: ThermostatSystem, newCommand: string, timestamp: number) => Promise<ThermostatSystem> {
  return async (self, newCommand, timestamp) => {
    const preViolations: string[] = [];
    if (!((((newCommand === "HEAT") || (newCommand === "COOL")) || (newCommand === "OFF")))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: newCommand = 'HEAT' or newCommand = 'COOL' or newCommand = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: timestamp >= 0.0");
    }
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: not self.halted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.halted": self.halted,
      "self.faultAlertActive": self.faultAlertActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newCommand, timestamp);
      const postViolations: string[] = [];
      if (!((((newCommand !== __pre["self.currentActuatorCommand"])) ? (((((timestamp - __pre["self.lastCommandTimestamp"]) >= __result.self.minCycleIntervalSecs)) ? (((__result.self.currentActuatorCommand === newCommand) && (__result.self.lastCommandTimestamp === timestamp))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === timestamp)))))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: if newCommand <> self.currentActuatorCommand@pre then\n            if timestamp - self.lastCommandTimestamp@pre >= self.minCycleIntervalSecs then\n              self.currentActuatorCommand = newCommand\n              and\n              self.lastCommandTimestamp = timestamp\n            else\n              self.currentActuatorCommand = self.currentActuatorCommand@pre\n              and\n              self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n            endif\n          else\n            self.currentActuatorCommand = self.currentActuatorCommand@pre\n            and\n            self.lastCommandTimestamp = timestamp\n          endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.halted === __pre["self.halted"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.halted = self.halted@pre");
      }
      if (!((__result.self.faultAlertActive === __pre["self.faultAlertActive"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.faultAlertActive = self.faultAlertActive@pre");
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

/** Impl signature for ThermostatSystem.displayCurrentState. User supplies this. */
export type ThermostatSystemDisplayCurrentStateImpl = (self: ThermostatSystem) => { self: ThermostatSystem; modified: {} };

/** Contract-checking wrapper for ThermostatSystem.displayCurrentState. */
export function wrapThermostatSystemDisplayCurrentState(impl: ThermostatSystemDisplayCurrentStateImpl): (self: ThermostatSystem) => ThermostatSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThermostatSystem.displayCurrentState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.currentTemperature — unbound variable 'result'
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

/** Impl signature for ThermostatSystem.displayCurrentState (async). User supplies this. */
export type ThermostatSystemDisplayCurrentStateAsyncImpl = (self: ThermostatSystem) => Promise<{ self: ThermostatSystem; modified: {} }>;

/** Contract-checking wrapper for ThermostatSystem.displayCurrentState (async). */
export function wrapThermostatSystemDisplayCurrentStateAsync(impl: ThermostatSystemDisplayCurrentStateAsyncImpl): (self: ThermostatSystem) => Promise<ThermostatSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThermostatSystem.displayCurrentState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.currentTemperature — unbound variable 'result'
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

/** Impl signature for ThermostatSystem.initialize. User supplies this. */
export type ThermostatSystemInitializeImpl = (self: ThermostatSystem) => { self: ThermostatSystem; modified: { halted: unknown; faultAlertActive: unknown; currentSetpoint: unknown; currentTemperature: unknown; currentActuatorCommand: unknown; lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ThermostatSystem.initialize. */
export function wrapThermostatSystemInitialize(impl: ThermostatSystemInitializeImpl): (self: ThermostatSystem) => ThermostatSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.systemId !== null))) {
      preViolations.push("[ThermostatSystem.initialize] pre violated: self.systemId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.halted === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.halted = false");
      }
      if (!((__result.self.faultAlertActive === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.faultAlertActive = false");
      }
      if (!((__result.self.currentSetpoint === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentSetpoint = 72.0");
      }
      if (!((__result.self.currentTemperature === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentTemperature = 72.0");
      }
      if (!((__result.self.currentActuatorCommand === "OFF"))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentActuatorCommand = 'OFF'");
      }
      if (!((__result.self.lastCommandTimestamp === 0))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.lastCommandTimestamp = 0.0");
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

/** Impl signature for ThermostatSystem.initialize (async). User supplies this. */
export type ThermostatSystemInitializeAsyncImpl = (self: ThermostatSystem) => Promise<{ self: ThermostatSystem; modified: { halted: unknown; faultAlertActive: unknown; currentSetpoint: unknown; currentTemperature: unknown; currentActuatorCommand: unknown; lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.initialize (async). */
export function wrapThermostatSystemInitializeAsync(impl: ThermostatSystemInitializeAsyncImpl): (self: ThermostatSystem) => Promise<ThermostatSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.systemId !== null))) {
      preViolations.push("[ThermostatSystem.initialize] pre violated: self.systemId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.halted === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.halted = false");
      }
      if (!((__result.self.faultAlertActive === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.faultAlertActive = false");
      }
      if (!((__result.self.currentSetpoint === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentSetpoint = 72.0");
      }
      if (!((__result.self.currentTemperature === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentTemperature = 72.0");
      }
      if (!((__result.self.currentActuatorCommand === "OFF"))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentActuatorCommand = 'OFF'");
      }
      if (!((__result.self.lastCommandTimestamp === 0))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.lastCommandTimestamp = 0.0");
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

/** Impl signature for ThermostatSystemFormalized.guardPlausibleReading. User supplies this. */
export type ThermostatSystemFormalizedGuardPlausibleReadingImpl = (self: ThermostatSystemFormalized, reading: number, timestamp: number) => { self: ThermostatSystemFormalized; modified: { halted: unknown; faultAlertActive: unknown; currentActuatorCommand: unknown } };

/** Contract-checking wrapper for ThermostatSystemFormalized.guardPlausibleReading. */
export function wrapThermostatSystemFormalizedGuardPlausibleReading(impl: ThermostatSystemFormalizedGuardPlausibleReadingImpl): (self: ThermostatSystemFormalized, reading: number, timestamp: number) => ThermostatSystemFormalized {
  return (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] pre violated: not self.halted");
    }
    if (!(((reading < self.sensorPlausibilityMin) || (reading > self.sensorPlausibilityMax)))) {
      preViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] pre violated: reading < self.sensorPlausibilityMin or reading > self.sensorPlausibilityMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reading, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.halted === true))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.halted = true");
      }
      if (!((__result.self.faultAlertActive === true))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.faultAlertActive = true");
      }
      if (!((__result.self.currentActuatorCommand === "OFF"))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.currentActuatorCommand = 'OFF'");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre");
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

/** Impl signature for ThermostatSystemFormalized.guardPlausibleReading (async). User supplies this. */
export type ThermostatSystemFormalizedGuardPlausibleReadingAsyncImpl = (self: ThermostatSystemFormalized, reading: number, timestamp: number) => Promise<{ self: ThermostatSystemFormalized; modified: { halted: unknown; faultAlertActive: unknown; currentActuatorCommand: unknown } }>;

/** Contract-checking wrapper for ThermostatSystemFormalized.guardPlausibleReading (async). */
export function wrapThermostatSystemFormalizedGuardPlausibleReadingAsync(impl: ThermostatSystemFormalizedGuardPlausibleReadingAsyncImpl): (self: ThermostatSystemFormalized, reading: number, timestamp: number) => Promise<ThermostatSystemFormalized> {
  return async (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] pre violated: not self.halted");
    }
    if (!(((reading < self.sensorPlausibilityMin) || (reading > self.sensorPlausibilityMax)))) {
      preViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] pre violated: reading < self.sensorPlausibilityMin or reading > self.sensorPlausibilityMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reading, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.halted === true))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.halted = true");
      }
      if (!((__result.self.faultAlertActive === true))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.faultAlertActive = true");
      }
      if (!((__result.self.currentActuatorCommand === "OFF"))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.currentActuatorCommand = 'OFF'");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))) {
        postViolations.push("[ThermostatSystemFormalized.guardPlausibleReading] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre");
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

/** Impl signature for ThermostatSystemFormalized.guardUnsafeSetpoint. User supplies this. */
export type ThermostatSystemFormalizedGuardUnsafeSetpointImpl = (self: ThermostatSystemFormalized, requestedSetpoint: number) => { self: ThermostatSystemFormalized; modified: {} };

/** Contract-checking wrapper for ThermostatSystemFormalized.guardUnsafeSetpoint. */
export function wrapThermostatSystemFormalizedGuardUnsafeSetpoint(impl: ThermostatSystemFormalizedGuardUnsafeSetpointImpl): (self: ThermostatSystemFormalized, requestedSetpoint: number) => ThermostatSystemFormalized {
  return (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystemFormalized.guardUnsafeSetpoint] pre violated: not self.halted");
    }
    if (!(((requestedSetpoint < self.safeMinSetpoint) || (requestedSetpoint > self.safeMaxSetpoint)))) {
      preViolations.push("[ThermostatSystemFormalized.guardUnsafeSetpoint] pre violated: requestedSetpoint < self.safeMinSetpoint or requestedSetpoint > self.safeMaxSetpoint");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[ThermostatSystemFormalized.guardUnsafeSetpoint] post violated: true");
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

/** Impl signature for ThermostatSystemFormalized.guardUnsafeSetpoint (async). User supplies this. */
export type ThermostatSystemFormalizedGuardUnsafeSetpointAsyncImpl = (self: ThermostatSystemFormalized, requestedSetpoint: number) => Promise<{ self: ThermostatSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for ThermostatSystemFormalized.guardUnsafeSetpoint (async). */
export function wrapThermostatSystemFormalizedGuardUnsafeSetpointAsync(impl: ThermostatSystemFormalizedGuardUnsafeSetpointAsyncImpl): (self: ThermostatSystemFormalized, requestedSetpoint: number) => Promise<ThermostatSystemFormalized> {
  return async (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystemFormalized.guardUnsafeSetpoint] pre violated: not self.halted");
    }
    if (!(((requestedSetpoint < self.safeMinSetpoint) || (requestedSetpoint > self.safeMaxSetpoint)))) {
      preViolations.push("[ThermostatSystemFormalized.guardUnsafeSetpoint] pre violated: requestedSetpoint < self.safeMinSetpoint or requestedSetpoint > self.safeMaxSetpoint");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[ThermostatSystemFormalized.guardUnsafeSetpoint] post violated: true");
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

/** Impl signature for ThermostatSystemFormalized.guardCyclingViolation. User supplies this. */
export type ThermostatSystemFormalizedGuardCyclingViolationImpl = (self: ThermostatSystemFormalized, newCommand: string, timestamp: number) => { self: ThermostatSystemFormalized; modified: {} };

/** Contract-checking wrapper for ThermostatSystemFormalized.guardCyclingViolation. */
export function wrapThermostatSystemFormalizedGuardCyclingViolation(impl: ThermostatSystemFormalizedGuardCyclingViolationImpl): (self: ThermostatSystemFormalized, newCommand: string, timestamp: number) => ThermostatSystemFormalized {
  return (self, newCommand, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] pre violated: not self.halted");
    }
    if (!((newCommand !== self.currentActuatorCommand))) {
      preViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] pre violated: newCommand <> self.currentActuatorCommand");
    }
    if (!(((timestamp - self.lastCommandTimestamp) < self.minCycleIntervalSecs))) {
      preViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] pre violated: timestamp - self.lastCommandTimestamp < self.minCycleIntervalSecs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newCommand, timestamp);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] post violated: true");
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

/** Impl signature for ThermostatSystemFormalized.guardCyclingViolation (async). User supplies this. */
export type ThermostatSystemFormalizedGuardCyclingViolationAsyncImpl = (self: ThermostatSystemFormalized, newCommand: string, timestamp: number) => Promise<{ self: ThermostatSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for ThermostatSystemFormalized.guardCyclingViolation (async). */
export function wrapThermostatSystemFormalizedGuardCyclingViolationAsync(impl: ThermostatSystemFormalizedGuardCyclingViolationAsyncImpl): (self: ThermostatSystemFormalized, newCommand: string, timestamp: number) => Promise<ThermostatSystemFormalized> {
  return async (self, newCommand, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] pre violated: not self.halted");
    }
    if (!((newCommand !== self.currentActuatorCommand))) {
      preViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] pre violated: newCommand <> self.currentActuatorCommand");
    }
    if (!(((timestamp - self.lastCommandTimestamp) < self.minCycleIntervalSecs))) {
      preViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] pre violated: timestamp - self.lastCommandTimestamp < self.minCycleIntervalSecs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newCommand, timestamp);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[ThermostatSystemFormalized.guardCyclingViolation] post violated: true");
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

/** Impl signature for ThermostatSystemFormalized.enforceDisplayConsistency. User supplies this. */
export type ThermostatSystemFormalizedEnforceDisplayConsistencyImpl = (self: ThermostatSystemFormalized) => { self: ThermostatSystemFormalized; modified: {} };

/** Contract-checking wrapper for ThermostatSystemFormalized.enforceDisplayConsistency. */
export function wrapThermostatSystemFormalizedEnforceDisplayConsistency(impl: ThermostatSystemFormalizedEnforceDisplayConsistencyImpl): (self: ThermostatSystemFormalized) => ThermostatSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.halted || self.faultAlertActive))) {
      preViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] pre violated: self.halted or self.faultAlertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.halted": self.halted,
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.currentActuatorCommand": self.currentActuatorCommand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentTemperature !== null))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentTemperature <> null");
      }
      if (!((__result.self.currentSetpoint !== null))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentSetpoint <> null");
      }
      if (!((__result.self.currentActuatorCommand !== null))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentActuatorCommand <> null");
      }
      if (!((__result.self.faultAlertActive === true))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.faultAlertActive = true");
      }
      if (!((__result.self.halted === __pre["self.halted"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.halted = self.halted@pre");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentActuatorCommand = self.currentActuatorCommand@pre");
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

/** Impl signature for ThermostatSystemFormalized.enforceDisplayConsistency (async). User supplies this. */
export type ThermostatSystemFormalizedEnforceDisplayConsistencyAsyncImpl = (self: ThermostatSystemFormalized) => Promise<{ self: ThermostatSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for ThermostatSystemFormalized.enforceDisplayConsistency (async). */
export function wrapThermostatSystemFormalizedEnforceDisplayConsistencyAsync(impl: ThermostatSystemFormalizedEnforceDisplayConsistencyAsyncImpl): (self: ThermostatSystemFormalized) => Promise<ThermostatSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.halted || self.faultAlertActive))) {
      preViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] pre violated: self.halted or self.faultAlertActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.halted": self.halted,
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.currentActuatorCommand": self.currentActuatorCommand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentTemperature !== null))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentTemperature <> null");
      }
      if (!((__result.self.currentSetpoint !== null))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentSetpoint <> null");
      }
      if (!((__result.self.currentActuatorCommand !== null))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentActuatorCommand <> null");
      }
      if (!((__result.self.faultAlertActive === true))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.faultAlertActive = true");
      }
      if (!((__result.self.halted === __pre["self.halted"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.halted = self.halted@pre");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]))) {
        postViolations.push("[ThermostatSystemFormalized.enforceDisplayConsistency] post violated: self.currentActuatorCommand = self.currentActuatorCommand@pre");
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

/** Lifecycle registry for SafeSetpointCommitment commitments. */
export class SafeSetpointCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SafeSetpointCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SafeSetpointCommitment — the typed wrapper guarantees that since
    // `register` only accepts SafeSetpointCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SafeSetpointCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SafeSetpointCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SafeSetpointCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SafeSetpointCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SafeSetpointCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SafeSetpointCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PlausibleSensorCommitment commitments. */
export class PlausibleSensorCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PlausibleSensorCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PlausibleSensorCommitment — the typed wrapper guarantees that since
    // `register` only accepts PlausibleSensorCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PlausibleSensorCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PlausibleSensorCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PlausibleSensorCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PlausibleSensorCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PlausibleSensorCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PlausibleSensorCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for FaultNotificationCommitment commitments. */
export class FaultNotificationCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FaultNotificationCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FaultNotificationCommitment — the typed wrapper guarantees that since
    // `register` only accepts FaultNotificationCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FaultNotificationCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FaultNotificationCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FaultNotificationCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FaultNotificationCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FaultNotificationCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FaultNotificationCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for CyclingLimitCommitment commitments. */
export class CyclingLimitCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CyclingLimitCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CyclingLimitCommitment — the typed wrapper guarantees that since
    // `register` only accepts CyclingLimitCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CyclingLimitCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CyclingLimitCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CyclingLimitCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CyclingLimitCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CyclingLimitCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CyclingLimitCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DisplayStateCommitment commitments. */
export class DisplayStateCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DisplayStateCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DisplayStateCommitment — the typed wrapper guarantees that since
    // `register` only accepts DisplayStateCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DisplayStateCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DisplayStateCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DisplayStateCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DisplayStateCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DisplayStateCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DisplayStateCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

