// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for EntrySensor. Runtime: string. Compile-time: branded. */
export type EntrySensorId = string & { readonly __brand: "EntrySensorId" };
/** Identity type for ExitSensor. Runtime: string. Compile-time: branded. */
export type ExitSensorId = string & { readonly __brand: "ExitSensorId" };
/** Identity type for TicketIssuer. Runtime: string. Compile-time: branded. */
export type TicketIssuerId = string & { readonly __brand: "TicketIssuerId" };
/** Identity type for TicketValidator. Runtime: string. Compile-time: branded. */
export type TicketValidatorId = string & { readonly __brand: "TicketValidatorId" };
/** Identity type for OccupancyTracker. Runtime: string. Compile-time: branded. */
export type OccupancyTrackerId = string & { readonly __brand: "OccupancyTrackerId" };
/** Identity type for GateController. Runtime: string. Compile-time: branded. */
export type GateControllerId = string & { readonly __brand: "GateControllerId" };
/** Identity type for PaymentProcessor. Runtime: string. Compile-time: branded. */
export type PaymentProcessorId = string & { readonly __brand: "PaymentProcessorId" };
/** Identity type for EntrySensorControllerChannel. Runtime: string. Compile-time: branded. */
export type EntrySensorControllerChannelId = string & { readonly __brand: "EntrySensorControllerChannelId" };
/** Identity type for TicketHandoverChannel. Runtime: string. Compile-time: branded. */
export type TicketHandoverChannelId = string & { readonly __brand: "TicketHandoverChannelId" };
/** Identity type for OccupancyGateCoordination. Runtime: string. Compile-time: branded. */
export type OccupancyGateCoordinationId = string & { readonly __brand: "OccupancyGateCoordinationId" };
/** Identity type for PaymentValidationChannel. Runtime: string. Compile-time: branded. */
export type PaymentValidationChannelId = string & { readonly __brand: "PaymentValidationChannelId" };
/** Identity type for EntryFlowProcess. Runtime: string. Compile-time: branded. */
export type EntryFlowProcessId = string & { readonly __brand: "EntryFlowProcessId" };
/** Identity type for ExitFlowProcess. Runtime: string. Compile-time: branded. */
export type ExitFlowProcessId = string & { readonly __brand: "ExitFlowProcessId" };
/** Identity type for RejectedExitFlowProcess. Runtime: string. Compile-time: branded. */
export type RejectedExitFlowProcessId = string & { readonly __brand: "RejectedExitFlowProcessId" };
/** Identity type for GarageOwner. Runtime: string. Compile-time: branded. */
export type GarageOwnerId = string & { readonly __brand: "GarageOwnerId" };
/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for MunicipalAuthority. Runtime: string. Compile-time: branded. */
export type MunicipalAuthorityId = string & { readonly __brand: "MunicipalAuthorityId" };
/** Identity type for ParkingVendor. Runtime: string. Compile-time: branded. */
export type ParkingVendorId = string & { readonly __brand: "ParkingVendorId" };
/** Identity type for Ticket. Runtime: string. Compile-time: branded. */
export type TicketId = string & { readonly __brand: "TicketId" };
/** Identity type for EntryEvent. Runtime: string. Compile-time: branded. */
export type EntryEventId = string & { readonly __brand: "EntryEventId" };
/** Identity type for ExitEvent. Runtime: string. Compile-time: branded. */
export type ExitEventId = string & { readonly __brand: "ExitEventId" };
/** Identity type for OccupancyCounter. Runtime: string. Compile-time: branded. */
export type OccupancyCounterId = string & { readonly __brand: "OccupancyCounterId" };
/** Identity type for CapacityRespectedGoal. Runtime: string. Compile-time: branded. */
export type CapacityRespectedGoalId = string & { readonly __brand: "CapacityRespectedGoalId" };
/** Identity type for TicketUniquenessGoal. Runtime: string. Compile-time: branded. */
export type TicketUniquenessGoalId = string & { readonly __brand: "TicketUniquenessGoalId" };
/** Identity type for ExitGatingGoal. Runtime: string. Compile-time: branded. */
export type ExitGatingGoalId = string & { readonly __brand: "ExitGatingGoalId" };
/** Identity type for OccupancyAccuracyGoal. Runtime: string. Compile-time: branded. */
export type OccupancyAccuracyGoalId = string & { readonly __brand: "OccupancyAccuracyGoalId" };
/** Identity type for EntryFlow. Runtime: string. Compile-time: branded. */
export type EntryFlowId = string & { readonly __brand: "EntryFlowId" };
/** Identity type for ExitFlow. Runtime: string. Compile-time: branded. */
export type ExitFlowId = string & { readonly __brand: "ExitFlowId" };
/** Identity type for RejectedExitFlow. Runtime: string. Compile-time: branded. */
export type RejectedExitFlowId = string & { readonly __brand: "RejectedExitFlowId" };
/** Identity type for ParkingGarageSystem. Runtime: string. Compile-time: branded. */
export type ParkingGarageSystemId = string & { readonly __brand: "ParkingGarageSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface EntrySensor {
  readonly sensorId: EntrySensorId;
  readonly vehiclePresent: boolean;
  readonly lastDetectionTimestamp: string;
}

/** @stereotype <<Kind>> */
export interface ExitSensor {
  readonly sensorId: ExitSensorId;
  readonly ticketPresented: boolean;
  readonly lastTicketId: string;
  readonly lastDetectionTimestamp: string;
}

/** @stereotype <<Kind>> */
export interface TicketIssuer {
  readonly issuerId: TicketIssuerId;
  readonly nextTicketNumber: number;
}

/** @stereotype <<Kind>> */
export interface TicketValidator {
  readonly validatorId: TicketValidatorId;
  readonly validationResult: boolean;
  readonly lastValidatedTicketId: string;
}

/** @stereotype <<Kind>> */
export interface OccupancyTracker {
  readonly trackerId: OccupancyTrackerId;
  readonly currentOccupancy: number;
  readonly certifiedCapacity: number;
  readonly isFull: boolean;
}

/** @stereotype <<Kind>> */
export interface GateController {
  readonly controllerId: GateControllerId;
  readonly entryGateOpen: boolean;
  readonly exitGateOpen: boolean;
  readonly entryGateTimer: number;
  readonly exitGateTimer: number;
}

/** @stereotype <<Kind>> */
export interface PaymentProcessor {
  readonly processorId: PaymentProcessorId;
  readonly lastPaidTicketId: string;
  readonly paymentSuccessful: boolean;
}

/** @stereotype <<Role>> */
export interface EntrySensorRole {
  readonly sensorId: string;
  readonly vehiclePresent: boolean;
}

/** @stereotype <<Role>> */
export interface GateControllerEntryRole {
  readonly controllerId: string;
  readonly entryGateOpen: boolean;
}

/** @stereotype <<Relator>> */
export interface EntrySensorControllerChannel {
  readonly channelId: EntrySensorControllerChannelId;
  readonly channelActive: boolean;
  readonly lastTransmissionId: string;
}

/** @stereotype <<Role>> */
export interface TicketIssuerRole {
  readonly issuerId: string;
  readonly nextTicketNumber: number;
}

/** @stereotype <<Role>> */
export interface TicketValidatorRole {
  readonly validatorId: string;
  readonly lastValidatedTicketId: string;
}

/** @stereotype <<Relator>> */
export interface TicketHandoverChannel {
  readonly channelId: TicketHandoverChannelId;
  readonly lastTicketTransferred: string;
}

/** @stereotype <<Role>> */
export interface OccupancyTrackerRole {
  readonly trackerId: string;
  readonly currentOccupancy: number;
  readonly certifiedCapacity: number;
  readonly isFull: boolean;
}

/** @stereotype <<Role>> */
export interface GateControllerOccupancyRole {
  readonly controllerId: string;
  readonly entryGateOpen: boolean;
}

/** @stereotype <<Relator>> */
export interface OccupancyGateCoordination {
  readonly channelId: OccupancyGateCoordinationId;
  readonly coordinationActive: boolean;
}

/** @stereotype <<Role>> */
export interface PaymentProcessorRole {
  readonly processorId: string;
  readonly lastPaidTicketId: string;
}

/** @stereotype <<Role>> */
export interface TicketValidatorPaymentRole {
  readonly validatorId: string;
  readonly lastValidatedTicketId: string;
}

/** @stereotype <<Relator>> */
export interface PaymentValidationChannel {
  readonly channelId: PaymentValidationChannelId;
  readonly paymentConfirmed: boolean;
}

/** @stereotype <<Happening>> */
export interface EntryFlowProcess {
  readonly flowId: EntryFlowProcessId;
  readonly sensorDetection: string;
  readonly ticketIssued: string;
  readonly occupancyIncremented: string;
  readonly gateRaised: string;
}

/** @stereotype <<Happening>> */
export interface ExitFlowProcess {
  readonly flowId: ExitFlowProcessId;
  readonly sensorDetection: string;
  readonly ticketValidation: string;
  readonly paymentCheck: string;
  readonly occupancyDecremented: string;
  readonly gateRaised: string;
}

/** @stereotype <<Happening>> */
export interface RejectedExitFlowProcess {
  readonly flowId: RejectedExitFlowProcessId;
  readonly sensorDetection: string;
  readonly validationFailure: string;
  readonly gateNotRaised: string;
}

/** @stereotype <<Agent>> */
export interface GarageOwner {
  readonly ownerId: GarageOwnerId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface MunicipalAuthority {
  readonly authorityId: MunicipalAuthorityId;
  readonly jurisdictionCode: string;
}

/** @stereotype <<Agent>> */
export interface ParkingVendor {
  readonly vendorId: ParkingVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Ticket {
  readonly ticketId: TicketId;
  readonly issuedAtEntry: string;
  readonly consumedAtExit: string;
  readonly isPaid: boolean;
  readonly isUsed: boolean;
}

/** @stereotype <<Kind>> */
export interface EntryEvent {
  readonly eventId: EntryEventId;
  readonly timestamp: string;
  readonly vehicleId: string;
  readonly issuedTicket: Ticket;
}

/** @stereotype <<Kind>> */
export interface ExitEvent {
  readonly eventId: ExitEventId;
  readonly timestamp: string;
  readonly vehicleId: string;
  readonly consumedTicket: Ticket;
}

/** @stereotype <<Kind>> */
export interface OccupancyCounter {
  readonly counterId: OccupancyCounterId;
  readonly currentOccupancy: number;
  readonly maxCapacity: number;
}

/** @stereotype <<Commitment>> */
export interface CapacityRespectedGoal {
  readonly commitmentId: CapacityRespectedGoalId;
}

/** @stereotype <<Commitment>> */
export interface TicketUniquenessGoal {
  readonly commitmentId: TicketUniquenessGoalId;
}

/** @stereotype <<Commitment>> */
export interface ExitGatingGoal {
  readonly commitmentId: ExitGatingGoalId;
}

/** @stereotype <<Commitment>> */
export interface OccupancyAccuracyGoal {
  readonly commitmentId: OccupancyAccuracyGoalId;
}

/** @stereotype <<Category>> */
export interface CapacityConstraints {
}

/** @stereotype <<Category>> */
export interface TicketIntegrityConstraints {
}

/** @stereotype <<Happening>> */
export interface EntryFlow {
  readonly flowId: EntryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ExitFlow {
  readonly flowId: ExitFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface RejectedExitFlow {
  readonly flowId: RejectedExitFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface ParkingGarageSystem extends CapacityConstraints, TicketIntegrityConstraints {
  readonly systemId: ParkingGarageSystemId;
  readonly certifiedCapacity: number;
  readonly currentOccupancy: number;
  readonly ticketCount: number;
  readonly entryGateOpen: boolean;
  readonly exitGateOpen: boolean;
  readonly isFull: boolean;
}

/** @stereotype <<Category>> */
export interface FireCodeCompliant {
}

/** @stereotype <<Category>> */
export interface AccessibilityCompliant {
}

/** @stereotype <<Category>> */
export interface PrivacyCompliant {
}

/** @stereotype <<Category>> */
export interface ConsumerProtectionCompliant {
}

/** @stereotype <<Category>> */
export interface OccupancyBounded {
}

/** @stereotype <<Category>> */
export interface TicketLifecycle {
}

/** @stereotype <<Category>> */
export interface GateConsistency {
}

/** @stereotype <<Subkind>> */
export interface ParkingGarageSystemFormalized extends ParkingGarageSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly status: string;
  readonly owner: string;
}


// ─── Factory functions ───

export function makeEntrySensor(data: {
  sensorId: string;
  vehiclePresent: boolean;
  lastDetectionTimestamp: string;
}): EntrySensor {
  return {
    sensorId: data.sensorId as EntrySensorId,
    vehiclePresent: data.vehiclePresent,
    lastDetectionTimestamp: data.lastDetectionTimestamp,
  };
}

export function makeExitSensor(data: {
  sensorId: string;
  ticketPresented: boolean;
  lastTicketId: string;
  lastDetectionTimestamp: string;
}): ExitSensor {
  return {
    sensorId: data.sensorId as ExitSensorId,
    ticketPresented: data.ticketPresented,
    lastTicketId: data.lastTicketId,
    lastDetectionTimestamp: data.lastDetectionTimestamp,
  };
}

export function makeTicketIssuer(data: {
  issuerId: string;
  nextTicketNumber: number;
}): TicketIssuer {
  return {
    issuerId: data.issuerId as TicketIssuerId,
    nextTicketNumber: data.nextTicketNumber,
  };
}

export function makeTicketValidator(data: {
  validatorId: string;
  validationResult: boolean;
  lastValidatedTicketId: string;
}): TicketValidator {
  return {
    validatorId: data.validatorId as TicketValidatorId,
    validationResult: data.validationResult,
    lastValidatedTicketId: data.lastValidatedTicketId,
  };
}

export function makeOccupancyTracker(data: {
  trackerId: string;
  currentOccupancy: number;
  certifiedCapacity: number;
  isFull: boolean;
}): OccupancyTracker {
  return {
    trackerId: data.trackerId as OccupancyTrackerId,
    currentOccupancy: data.currentOccupancy,
    certifiedCapacity: data.certifiedCapacity,
    isFull: data.isFull,
  };
}

export function makeGateController(data: {
  controllerId: string;
  entryGateOpen: boolean;
  exitGateOpen: boolean;
  entryGateTimer: number;
  exitGateTimer: number;
}): GateController {
  return {
    controllerId: data.controllerId as GateControllerId,
    entryGateOpen: data.entryGateOpen,
    exitGateOpen: data.exitGateOpen,
    entryGateTimer: data.entryGateTimer,
    exitGateTimer: data.exitGateTimer,
  };
}

export function makePaymentProcessor(data: {
  processorId: string;
  lastPaidTicketId: string;
  paymentSuccessful: boolean;
}): PaymentProcessor {
  return {
    processorId: data.processorId as PaymentProcessorId,
    lastPaidTicketId: data.lastPaidTicketId,
    paymentSuccessful: data.paymentSuccessful,
  };
}

export function makeEntrySensorControllerChannel(data: {
  channelId: string;
  channelActive: boolean;
  lastTransmissionId: string;
}): EntrySensorControllerChannel {
  return {
    channelId: data.channelId as EntrySensorControllerChannelId,
    channelActive: data.channelActive,
    lastTransmissionId: data.lastTransmissionId,
  };
}

export function makeTicketHandoverChannel(data: {
  channelId: string;
  lastTicketTransferred: string;
}): TicketHandoverChannel {
  return {
    channelId: data.channelId as TicketHandoverChannelId,
    lastTicketTransferred: data.lastTicketTransferred,
  };
}

export function makeOccupancyGateCoordination(data: {
  channelId: string;
  coordinationActive: boolean;
}): OccupancyGateCoordination {
  return {
    channelId: data.channelId as OccupancyGateCoordinationId,
    coordinationActive: data.coordinationActive,
  };
}

export function makePaymentValidationChannel(data: {
  channelId: string;
  paymentConfirmed: boolean;
}): PaymentValidationChannel {
  return {
    channelId: data.channelId as PaymentValidationChannelId,
    paymentConfirmed: data.paymentConfirmed,
  };
}

export function makeEntryFlowProcess(data: {
  flowId: string;
  sensorDetection: string;
  ticketIssued: string;
  occupancyIncremented: string;
  gateRaised: string;
}): EntryFlowProcess {
  return {
    flowId: data.flowId as EntryFlowProcessId,
    sensorDetection: data.sensorDetection,
    ticketIssued: data.ticketIssued,
    occupancyIncremented: data.occupancyIncremented,
    gateRaised: data.gateRaised,
  };
}

export function makeExitFlowProcess(data: {
  flowId: string;
  sensorDetection: string;
  ticketValidation: string;
  paymentCheck: string;
  occupancyDecremented: string;
  gateRaised: string;
}): ExitFlowProcess {
  return {
    flowId: data.flowId as ExitFlowProcessId,
    sensorDetection: data.sensorDetection,
    ticketValidation: data.ticketValidation,
    paymentCheck: data.paymentCheck,
    occupancyDecremented: data.occupancyDecremented,
    gateRaised: data.gateRaised,
  };
}

export function makeRejectedExitFlowProcess(data: {
  flowId: string;
  sensorDetection: string;
  validationFailure: string;
  gateNotRaised: string;
}): RejectedExitFlowProcess {
  return {
    flowId: data.flowId as RejectedExitFlowProcessId,
    sensorDetection: data.sensorDetection,
    validationFailure: data.validationFailure,
    gateNotRaised: data.gateNotRaised,
  };
}

export function makeGarageOwner(data: {
  ownerId: string;
  name: string;
}): GarageOwner {
  return {
    ownerId: data.ownerId as GarageOwnerId,
    name: data.name,
  };
}

export function makeDriver(data: {
  driverId: string;
  name: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    name: data.name,
  };
}

export function makeMunicipalAuthority(data: {
  authorityId: string;
  jurisdictionCode: string;
}): MunicipalAuthority {
  return {
    authorityId: data.authorityId as MunicipalAuthorityId,
    jurisdictionCode: data.jurisdictionCode,
  };
}

export function makeParkingVendor(data: {
  vendorId: string;
  name: string;
}): ParkingVendor {
  return {
    vendorId: data.vendorId as ParkingVendorId,
    name: data.name,
  };
}

export function makeTicket(data: {
  ticketId: string;
  issuedAtEntry: string;
  consumedAtExit: string;
  isPaid: boolean;
  isUsed: boolean;
}): Ticket {
  return {
    ticketId: data.ticketId as TicketId,
    issuedAtEntry: data.issuedAtEntry,
    consumedAtExit: data.consumedAtExit,
    isPaid: data.isPaid,
    isUsed: data.isUsed,
  };
}

export function makeEntryEvent(data: {
  eventId: string;
  timestamp: string;
  vehicleId: string;
  issuedTicket: Ticket;
}): EntryEvent {
  return {
    eventId: data.eventId as EntryEventId,
    timestamp: data.timestamp,
    vehicleId: data.vehicleId,
    issuedTicket: data.issuedTicket,
  };
}

export function makeExitEvent(data: {
  eventId: string;
  timestamp: string;
  vehicleId: string;
  consumedTicket: Ticket;
}): ExitEvent {
  return {
    eventId: data.eventId as ExitEventId,
    timestamp: data.timestamp,
    vehicleId: data.vehicleId,
    consumedTicket: data.consumedTicket,
  };
}

export function makeOccupancyCounter(data: {
  counterId: string;
  currentOccupancy: number;
  maxCapacity: number;
}): OccupancyCounter {
  return {
    counterId: data.counterId as OccupancyCounterId,
    currentOccupancy: data.currentOccupancy,
    maxCapacity: data.maxCapacity,
  };
}

export function makeCapacityRespectedGoal(data: {
  commitmentId: string;
}): CapacityRespectedGoal {
  return {
    commitmentId: data.commitmentId as CapacityRespectedGoalId,
  };
}

export function makeTicketUniquenessGoal(data: {
  commitmentId: string;
}): TicketUniquenessGoal {
  return {
    commitmentId: data.commitmentId as TicketUniquenessGoalId,
  };
}

export function makeExitGatingGoal(data: {
  commitmentId: string;
}): ExitGatingGoal {
  return {
    commitmentId: data.commitmentId as ExitGatingGoalId,
  };
}

export function makeOccupancyAccuracyGoal(data: {
  commitmentId: string;
}): OccupancyAccuracyGoal {
  return {
    commitmentId: data.commitmentId as OccupancyAccuracyGoalId,
  };
}

export function makeEntryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): EntryFlow {
  return {
    flowId: data.flowId as EntryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeExitFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ExitFlow {
  return {
    flowId: data.flowId as ExitFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeRejectedExitFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): RejectedExitFlow {
  return {
    flowId: data.flowId as RejectedExitFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeParkingGarageSystem(data: {
  systemId: string;
  certifiedCapacity: number;
  currentOccupancy: number;
  ticketCount: number;
  entryGateOpen: boolean;
  exitGateOpen: boolean;
  isFull: boolean;
}): ParkingGarageSystem {
  return {
    systemId: data.systemId as ParkingGarageSystemId,
    certifiedCapacity: data.certifiedCapacity,
    currentOccupancy: data.currentOccupancy,
    ticketCount: data.ticketCount,
    entryGateOpen: data.entryGateOpen,
    exitGateOpen: data.exitGateOpen,
    isFull: data.isFull,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  status: string;
  owner: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    status: data.status,
    owner: data.owner,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for EntrySensor. Returns empty array when valid. */
export function validateEntrySensor(instance: EntrySensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[EntrySensor] invariant violated: self.sensorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ExitSensor. Returns empty array when valid. */
export function validateExitSensor(instance: ExitSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[ExitSensor] invariant violated: self.sensorId <> null");
  }
  return violations;
}

/** Runtime invariant check for TicketIssuer. Returns empty array when valid. */
export function validateTicketIssuer(instance: TicketIssuer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.issuerId !== null))) {
    violations.push("[TicketIssuer] invariant violated: self.issuerId <> null");
  }
  if (!((instance.nextTicketNumber >= 0))) {
    violations.push("[TicketIssuer] invariant violated: self.nextTicketNumber >= 0");
  }
  return violations;
}

/** Runtime invariant check for TicketValidator. Returns empty array when valid. */
export function validateTicketValidator(instance: TicketValidator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.validatorId !== null))) {
    violations.push("[TicketValidator] invariant violated: self.validatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for OccupancyTracker. Returns empty array when valid. */
export function validateOccupancyTracker(instance: OccupancyTracker): readonly string[] {
  const violations: string[] = [];
  if (!((instance.trackerId !== null))) {
    violations.push("[OccupancyTracker] invariant violated: self.trackerId <> null");
  }
  if (!((instance.certifiedCapacity > 0))) {
    violations.push("[OccupancyTracker] invariant violated: self.certifiedCapacity > 0");
  }
  if (!((instance.currentOccupancy >= 0))) {
    violations.push("[OccupancyTracker] invariant violated: self.currentOccupancy >= 0");
  }
  if (!((instance.currentOccupancy <= instance.certifiedCapacity))) {
    violations.push("[OccupancyTracker] invariant violated: self.currentOccupancy <= self.certifiedCapacity");
  }
  if (!((instance.isFull === (instance.currentOccupancy === instance.certifiedCapacity)))) {
    violations.push("[OccupancyTracker] invariant violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
  }
  return violations;
}

/** Runtime invariant check for GateController. Returns empty array when valid. */
export function validateGateController(instance: GateController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[GateController] invariant violated: self.controllerId <> null");
  }
  if (!((instance.entryGateTimer >= 0))) {
    violations.push("[GateController] invariant violated: self.entryGateTimer >= 0");
  }
  if (!((instance.exitGateTimer >= 0))) {
    violations.push("[GateController] invariant violated: self.exitGateTimer >= 0");
  }
  return violations;
}

/** Runtime invariant check for PaymentProcessor. Returns empty array when valid. */
export function validatePaymentProcessor(instance: PaymentProcessor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.processorId !== null))) {
    violations.push("[PaymentProcessor] invariant violated: self.processorId <> null");
  }
  return violations;
}

/** Runtime invariant check for EntrySensorControllerChannel. Returns empty array when valid. */
export function validateEntrySensorControllerChannel(instance: EntrySensorControllerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[EntrySensorControllerChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for TicketHandoverChannel. Returns empty array when valid. */
export function validateTicketHandoverChannel(instance: TicketHandoverChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[TicketHandoverChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for OccupancyGateCoordination. Returns empty array when valid. */
export function validateOccupancyGateCoordination(instance: OccupancyGateCoordination): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[OccupancyGateCoordination] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for PaymentValidationChannel. Returns empty array when valid. */
export function validatePaymentValidationChannel(instance: PaymentValidationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[PaymentValidationChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for EntryFlowProcess. Returns empty array when valid. */
export function validateEntryFlowProcess(instance: EntryFlowProcess): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EntryFlowProcess] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ExitFlowProcess. Returns empty array when valid. */
export function validateExitFlowProcess(instance: ExitFlowProcess): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ExitFlowProcess] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for RejectedExitFlowProcess. Returns empty array when valid. */
export function validateRejectedExitFlowProcess(instance: RejectedExitFlowProcess): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RejectedExitFlowProcess] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for GarageOwner. Returns empty array when valid. */
export function validateGarageOwner(instance: GarageOwner): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ownerId !== null))) {
    violations.push("[GarageOwner] invariant violated: self.ownerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[GarageOwner] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Driver] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for MunicipalAuthority. Returns empty array when valid. */
export function validateMunicipalAuthority(instance: MunicipalAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[MunicipalAuthority] invariant violated: self.authorityId <> null");
  }
  if (!((instance.jurisdictionCode !== null))) {
    violations.push("[MunicipalAuthority] invariant violated: self.jurisdictionCode <> null");
  }
  return violations;
}

/** Runtime invariant check for ParkingVendor. Returns empty array when valid. */
export function validateParkingVendor(instance: ParkingVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ParkingVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[ParkingVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Ticket. Returns empty array when valid. */
export function validateTicket(instance: Ticket): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ticketId !== null))) {
    violations.push("[Ticket] invariant violated: self.ticketId <> null");
  }
  if (!((instance.issuedAtEntry !== null))) {
    violations.push("[Ticket] invariant violated: self.issuedAtEntry <> null");
  }
  if (!((!(instance.isUsed) || (instance.consumedAtExit !== null)))) {
    violations.push("[Ticket] invariant violated: self.isUsed implies self.consumedAtExit <> null");
  }
  return violations;
}

/** Runtime invariant check for EntryEvent. Returns empty array when valid. */
export function validateEntryEvent(instance: EntryEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eventId !== null))) {
    violations.push("[EntryEvent] invariant violated: self.eventId <> null");
  }
  if (!((instance.timestamp !== null))) {
    violations.push("[EntryEvent] invariant violated: self.timestamp <> null");
  }
  if (!((instance.issuedTicket !== null))) {
    violations.push("[EntryEvent] invariant violated: self.issuedTicket <> null");
  }
  return violations;
}

/** Runtime invariant check for ExitEvent. Returns empty array when valid. */
export function validateExitEvent(instance: ExitEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eventId !== null))) {
    violations.push("[ExitEvent] invariant violated: self.eventId <> null");
  }
  if (!((instance.timestamp !== null))) {
    violations.push("[ExitEvent] invariant violated: self.timestamp <> null");
  }
  if (!((instance.consumedTicket !== null))) {
    violations.push("[ExitEvent] invariant violated: self.consumedTicket <> null");
  }
  if (!((instance.consumedTicket?.isUsed === true))) {
    violations.push("[ExitEvent] invariant violated: self.consumedTicket.isUsed = true");
  }
  return violations;
}

/** Runtime invariant check for OccupancyCounter. Returns empty array when valid. */
export function validateOccupancyCounter(instance: OccupancyCounter): readonly string[] {
  const violations: string[] = [];
  if (!((instance.counterId !== null))) {
    violations.push("[OccupancyCounter] invariant violated: self.counterId <> null");
  }
  if (!((instance.currentOccupancy >= 0))) {
    violations.push("[OccupancyCounter] invariant violated: self.currentOccupancy >= 0");
  }
  if (!((instance.maxCapacity > 0))) {
    violations.push("[OccupancyCounter] invariant violated: self.maxCapacity > 0");
  }
  if (!((instance.currentOccupancy <= instance.maxCapacity))) {
    violations.push("[OccupancyCounter] invariant violated: self.currentOccupancy <= self.maxCapacity");
  }
  return violations;
}

/** Runtime invariant check for CapacityConstraints. Returns empty array when valid. */
export function validateCapacityConstraints(instance: CapacityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentOccupancy <= bearer.maxCapacity — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxCapacity > 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentOccupancy >= 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TicketIntegrityConstraints. Returns empty array when valid. */
export function validateTicketIntegrityConstraints(instance: TicketIntegrityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.isUsed implies bearer.consumedAtExit <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.issuedAtEntry <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EntryFlow. Returns empty array when valid. */
export function validateEntryFlow(instance: EntryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EntryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "vehicle detected at entry sensor"))) {
    violations.push("[EntryFlow] invariant violated: self.triggeredBy = 'vehicle detected at entry sensor'");
  }
  if (!((instance.outcome === "ticket issued, gate raised, occupancy incremented"))) {
    violations.push("[EntryFlow] invariant violated: self.outcome = 'ticket issued, gate raised, occupancy incremented'");
  }
  return violations;
}

/** Runtime invariant check for ExitFlow. Returns empty array when valid. */
export function validateExitFlow(instance: ExitFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ExitFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "ticket presented at exit gate"))) {
    violations.push("[ExitFlow] invariant violated: self.triggeredBy = 'ticket presented at exit gate'");
  }
  if (!((instance.outcome === "ticket validated, gate raised, occupancy decremented"))) {
    violations.push("[ExitFlow] invariant violated: self.outcome = 'ticket validated, gate raised, occupancy decremented'");
  }
  return violations;
}

/** Runtime invariant check for RejectedExitFlow. Returns empty array when valid. */
export function validateRejectedExitFlow(instance: RejectedExitFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RejectedExitFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "invalid or already-used ticket presented"))) {
    violations.push("[RejectedExitFlow] invariant violated: self.triggeredBy = 'invalid or already-used ticket presented'");
  }
  if (!((instance.outcome === "exit denied, attendant called"))) {
    violations.push("[RejectedExitFlow] invariant violated: self.outcome = 'exit denied, attendant called'");
  }
  return violations;
}

/** Runtime invariant check for ParkingGarageSystem. Returns empty array when valid. */
export function validateParkingGarageSystem(instance: ParkingGarageSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.certifiedCapacity > 0))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.certifiedCapacity > 0");
  }
  if (!((instance.currentOccupancy >= 0))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.currentOccupancy >= 0");
  }
  if (!((instance.currentOccupancy <= instance.certifiedCapacity))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.currentOccupancy <= self.certifiedCapacity");
  }
  if (!((instance.isFull === (instance.currentOccupancy === instance.certifiedCapacity)))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
  }
  if (!((!(instance.entryGateOpen) || (instance.currentOccupancy < instance.certifiedCapacity)))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.entryGateOpen implies self.currentOccupancy < self.certifiedCapacity");
  }
  if (!((!(instance.exitGateOpen) || (instance.currentOccupancy > 0)))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.exitGateOpen implies (self.currentOccupancy > 0)");
  }
  if (!((instance.ticketCount >= 0))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.ticketCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for FireCodeCompliant. Returns empty array when valid. */
export function validateFireCodeCompliant(instance: FireCodeCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.certifiedCapacity >= 1 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AccessibilityCompliant. Returns empty array when valid. */
export function validateAccessibilityCompliant(instance: AccessibilityCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AccessibilityCompliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PrivacyCompliant. Returns empty array when valid. */
export function validatePrivacyCompliant(instance: PrivacyCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PrivacyCompliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ConsumerProtectionCompliant. Returns empty array when valid. */
export function validateConsumerProtectionCompliant(instance: ConsumerProtectionCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ConsumerProtectionCompliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for OccupancyBounded. Returns empty array when valid. */
export function validateOccupancyBounded(instance: OccupancyBounded): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentOccupancy >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentOccupancy <= bearer.certifiedCapacity — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TicketLifecycle. Returns empty array when valid. */
export function validateTicketLifecycle(instance: TicketLifecycle): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.issuedAtEntry <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.isUsed implies (bearer.consumedAtExit <> null) — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.consumedAtExit <> null implies bearer.isUsed — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for GateConsistency. Returns empty array when valid. */
export function validateGateConsistency(instance: GateConsistency): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.entryGateOpen implies bearer.currentOccupancy < bearer.certifiedCapacity — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.exitGateOpen implies bearer.currentOccupancy > 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ParkingGarageSystemFormalized. Returns empty array when valid. */
export function validateParkingGarageSystemFormalized(instance: ParkingGarageSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.certifiedCapacity >= 1))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.certifiedCapacity >= 1");
  }
  if (!((instance.currentOccupancy >= 0))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.currentOccupancy >= 0");
  }
  if (!((instance.currentOccupancy <= instance.certifiedCapacity))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.currentOccupancy <= self.certifiedCapacity");
  }
  if (!((!(instance.entryGateOpen) || (instance.currentOccupancy < instance.certifiedCapacity)))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.entryGateOpen implies self.currentOccupancy < self.certifiedCapacity");
  }
  if (!((!(instance.exitGateOpen) || (instance.currentOccupancy > 0)))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.exitGateOpen implies self.currentOccupancy > 0");
  }
  if (!((instance.isFull === (instance.currentOccupancy === instance.certifiedCapacity)))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
  }
  if (!((instance.systemId !== null))) {
    violations.push("[ParkingGarageSystemFormalized] invariant violated: self.systemId <> null");
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
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.status <> null");
  }
  if (!((instance.owner !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.owner <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for EntrySensor.detectVehicle. User supplies this. */
export type EntrySensorDetectVehicleImpl = (self: EntrySensor, timestamp: string) => { self: EntrySensor; modified: { vehiclePresent: unknown; lastDetectionTimestamp: unknown } };

/** Contract-checking wrapper for EntrySensor.detectVehicle. */
export function wrapEntrySensorDetectVehicle(impl: EntrySensorDetectVehicleImpl): (self: EntrySensor, timestamp: string) => EntrySensor {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp !== null))) {
      preViolations.push("[EntrySensor.detectVehicle] pre violated: timestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.vehiclePresent === true))) {
        postViolations.push("[EntrySensor.detectVehicle] post violated: self.vehiclePresent = true");
      }
      if (!((__result.self.lastDetectionTimestamp === timestamp))) {
        postViolations.push("[EntrySensor.detectVehicle] post violated: self.lastDetectionTimestamp = timestamp");
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

/** Impl signature for EntrySensor.detectVehicle (async). User supplies this. */
export type EntrySensorDetectVehicleAsyncImpl = (self: EntrySensor, timestamp: string) => Promise<{ self: EntrySensor; modified: { vehiclePresent: unknown; lastDetectionTimestamp: unknown } }>;

/** Contract-checking wrapper for EntrySensor.detectVehicle (async). */
export function wrapEntrySensorDetectVehicleAsync(impl: EntrySensorDetectVehicleAsyncImpl): (self: EntrySensor, timestamp: string) => Promise<EntrySensor> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp !== null))) {
      preViolations.push("[EntrySensor.detectVehicle] pre violated: timestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.vehiclePresent === true))) {
        postViolations.push("[EntrySensor.detectVehicle] post violated: self.vehiclePresent = true");
      }
      if (!((__result.self.lastDetectionTimestamp === timestamp))) {
        postViolations.push("[EntrySensor.detectVehicle] post violated: self.lastDetectionTimestamp = timestamp");
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

/** Impl signature for EntrySensor.clearDetection. User supplies this. */
export type EntrySensorClearDetectionImpl = (self: EntrySensor) => { self: EntrySensor; modified: { vehiclePresent: unknown } };

/** Contract-checking wrapper for EntrySensor.clearDetection. */
export function wrapEntrySensorClearDetection(impl: EntrySensorClearDetectionImpl): (self: EntrySensor) => EntrySensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.vehiclePresent === true))) {
      preViolations.push("[EntrySensor.clearDetection] pre violated: self.vehiclePresent = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.vehiclePresent === false))) {
        postViolations.push("[EntrySensor.clearDetection] post violated: self.vehiclePresent = false");
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

/** Impl signature for EntrySensor.clearDetection (async). User supplies this. */
export type EntrySensorClearDetectionAsyncImpl = (self: EntrySensor) => Promise<{ self: EntrySensor; modified: { vehiclePresent: unknown } }>;

/** Contract-checking wrapper for EntrySensor.clearDetection (async). */
export function wrapEntrySensorClearDetectionAsync(impl: EntrySensorClearDetectionAsyncImpl): (self: EntrySensor) => Promise<EntrySensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.vehiclePresent === true))) {
      preViolations.push("[EntrySensor.clearDetection] pre violated: self.vehiclePresent = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.vehiclePresent === false))) {
        postViolations.push("[EntrySensor.clearDetection] post violated: self.vehiclePresent = false");
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

/** Impl signature for ExitSensor.detectTicket. User supplies this. */
export type ExitSensorDetectTicketImpl = (self: ExitSensor, ticketId: string, timestamp: string) => { self: ExitSensor; modified: { ticketPresented: unknown; lastTicketId: unknown; lastDetectionTimestamp: unknown } };

/** Contract-checking wrapper for ExitSensor.detectTicket. */
export function wrapExitSensorDetectTicket(impl: ExitSensorDetectTicketImpl): (self: ExitSensor, ticketId: string, timestamp: string) => ExitSensor {
  return (self, ticketId, timestamp) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ExitSensor.detectTicket] pre violated: ticketId <> null");
    }
    if (!((timestamp !== null))) {
      preViolations.push("[ExitSensor.detectTicket] pre violated: timestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.ticketPresented === true))) {
        postViolations.push("[ExitSensor.detectTicket] post violated: self.ticketPresented = true");
      }
      if (!((__result.self.lastTicketId === ticketId))) {
        postViolations.push("[ExitSensor.detectTicket] post violated: self.lastTicketId = ticketId");
      }
      if (!((__result.self.lastDetectionTimestamp === timestamp))) {
        postViolations.push("[ExitSensor.detectTicket] post violated: self.lastDetectionTimestamp = timestamp");
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

/** Impl signature for ExitSensor.detectTicket (async). User supplies this. */
export type ExitSensorDetectTicketAsyncImpl = (self: ExitSensor, ticketId: string, timestamp: string) => Promise<{ self: ExitSensor; modified: { ticketPresented: unknown; lastTicketId: unknown; lastDetectionTimestamp: unknown } }>;

/** Contract-checking wrapper for ExitSensor.detectTicket (async). */
export function wrapExitSensorDetectTicketAsync(impl: ExitSensorDetectTicketAsyncImpl): (self: ExitSensor, ticketId: string, timestamp: string) => Promise<ExitSensor> {
  return async (self, ticketId, timestamp) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ExitSensor.detectTicket] pre violated: ticketId <> null");
    }
    if (!((timestamp !== null))) {
      preViolations.push("[ExitSensor.detectTicket] pre violated: timestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.ticketPresented === true))) {
        postViolations.push("[ExitSensor.detectTicket] post violated: self.ticketPresented = true");
      }
      if (!((__result.self.lastTicketId === ticketId))) {
        postViolations.push("[ExitSensor.detectTicket] post violated: self.lastTicketId = ticketId");
      }
      if (!((__result.self.lastDetectionTimestamp === timestamp))) {
        postViolations.push("[ExitSensor.detectTicket] post violated: self.lastDetectionTimestamp = timestamp");
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

/** Impl signature for ExitSensor.clearDetection. User supplies this. */
export type ExitSensorClearDetectionImpl = (self: ExitSensor) => { self: ExitSensor; modified: { ticketPresented: unknown } };

/** Contract-checking wrapper for ExitSensor.clearDetection. */
export function wrapExitSensorClearDetection(impl: ExitSensorClearDetectionImpl): (self: ExitSensor) => ExitSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.ticketPresented === true))) {
      preViolations.push("[ExitSensor.clearDetection] pre violated: self.ticketPresented = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.ticketPresented === false))) {
        postViolations.push("[ExitSensor.clearDetection] post violated: self.ticketPresented = false");
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

/** Impl signature for ExitSensor.clearDetection (async). User supplies this. */
export type ExitSensorClearDetectionAsyncImpl = (self: ExitSensor) => Promise<{ self: ExitSensor; modified: { ticketPresented: unknown } }>;

/** Contract-checking wrapper for ExitSensor.clearDetection (async). */
export function wrapExitSensorClearDetectionAsync(impl: ExitSensorClearDetectionAsyncImpl): (self: ExitSensor) => Promise<ExitSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.ticketPresented === true))) {
      preViolations.push("[ExitSensor.clearDetection] pre violated: self.ticketPresented = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.ticketPresented === false))) {
        postViolations.push("[ExitSensor.clearDetection] post violated: self.ticketPresented = false");
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

/** Impl signature for TicketIssuer.issueTicket. User supplies this. */
export type TicketIssuerIssueTicketImpl = (self: TicketIssuer, ticketCode: string) => { self: TicketIssuer; modified: { nextTicketNumber: unknown } };

/** Contract-checking wrapper for TicketIssuer.issueTicket. */
export function wrapTicketIssuerIssueTicket(impl: TicketIssuerIssueTicketImpl): (self: TicketIssuer, ticketCode: string) => TicketIssuer {
  return (self, ticketCode) => {
    const preViolations: string[] = [];
    if (!((ticketCode !== null))) {
      preViolations.push("[TicketIssuer.issueTicket] pre violated: ticketCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.nextTicketNumber": self.nextTicketNumber,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketCode);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.ticketId = ticketCode — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.isUsed = false — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.isPaid = false — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.consumedAtExit = null — unbound variable 'result'
      if (!((__result.self.nextTicketNumber === (__pre["self.nextTicketNumber"] + 1)))) {
        postViolations.push("[TicketIssuer.issueTicket] post violated: self.nextTicketNumber = self.nextTicketNumber@pre + 1");
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

/** Impl signature for TicketIssuer.issueTicket (async). User supplies this. */
export type TicketIssuerIssueTicketAsyncImpl = (self: TicketIssuer, ticketCode: string) => Promise<{ self: TicketIssuer; modified: { nextTicketNumber: unknown } }>;

/** Contract-checking wrapper for TicketIssuer.issueTicket (async). */
export function wrapTicketIssuerIssueTicketAsync(impl: TicketIssuerIssueTicketAsyncImpl): (self: TicketIssuer, ticketCode: string) => Promise<TicketIssuer> {
  return async (self, ticketCode) => {
    const preViolations: string[] = [];
    if (!((ticketCode !== null))) {
      preViolations.push("[TicketIssuer.issueTicket] pre violated: ticketCode <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.nextTicketNumber": self.nextTicketNumber,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketCode);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.ticketId = ticketCode — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.isUsed = false — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.isPaid = false — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result.consumedAtExit = null — unbound variable 'result'
      if (!((__result.self.nextTicketNumber === (__pre["self.nextTicketNumber"] + 1)))) {
        postViolations.push("[TicketIssuer.issueTicket] post violated: self.nextTicketNumber = self.nextTicketNumber@pre + 1");
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

/** Impl signature for TicketIssuer.resetCounter. User supplies this. */
export type TicketIssuerResetCounterImpl = (self: TicketIssuer) => { self: TicketIssuer; modified: { nextTicketNumber: unknown } };

/** Contract-checking wrapper for TicketIssuer.resetCounter. */
export function wrapTicketIssuerResetCounter(impl: TicketIssuerResetCounterImpl): (self: TicketIssuer) => TicketIssuer {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.nextTicketNumber > 0))) {
      preViolations.push("[TicketIssuer.resetCounter] pre violated: self.nextTicketNumber > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.nextTicketNumber === 0))) {
        postViolations.push("[TicketIssuer.resetCounter] post violated: self.nextTicketNumber = 0");
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

/** Impl signature for TicketIssuer.resetCounter (async). User supplies this. */
export type TicketIssuerResetCounterAsyncImpl = (self: TicketIssuer) => Promise<{ self: TicketIssuer; modified: { nextTicketNumber: unknown } }>;

/** Contract-checking wrapper for TicketIssuer.resetCounter (async). */
export function wrapTicketIssuerResetCounterAsync(impl: TicketIssuerResetCounterAsyncImpl): (self: TicketIssuer) => Promise<TicketIssuer> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.nextTicketNumber > 0))) {
      preViolations.push("[TicketIssuer.resetCounter] pre violated: self.nextTicketNumber > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.nextTicketNumber === 0))) {
        postViolations.push("[TicketIssuer.resetCounter] post violated: self.nextTicketNumber = 0");
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

/** Impl signature for TicketValidator.validateTicket. User supplies this. */
export type TicketValidatorValidateTicketImpl = (self: TicketValidator, ticketId: string) => { self: TicketValidator; modified: { lastValidatedTicketId: unknown; validationResult: unknown } };

/** Contract-checking wrapper for TicketValidator.validateTicket. */
export function wrapTicketValidatorValidateTicket(impl: TicketValidatorValidateTicketImpl): (self: TicketValidator, ticketId: string) => TicketValidator {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[TicketValidator.validateTicket] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      if (!((__result.self.lastValidatedTicketId === ticketId))) {
        postViolations.push("[TicketValidator.validateTicket] post violated: self.lastValidatedTicketId = ticketId");
      }
      // SKIPPED post-clause (not translatable): self.validationResult = result — unbound variable 'result'
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

/** Impl signature for TicketValidator.validateTicket (async). User supplies this. */
export type TicketValidatorValidateTicketAsyncImpl = (self: TicketValidator, ticketId: string) => Promise<{ self: TicketValidator; modified: { lastValidatedTicketId: unknown; validationResult: unknown } }>;

/** Contract-checking wrapper for TicketValidator.validateTicket (async). */
export function wrapTicketValidatorValidateTicketAsync(impl: TicketValidatorValidateTicketAsyncImpl): (self: TicketValidator, ticketId: string) => Promise<TicketValidator> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[TicketValidator.validateTicket] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      if (!((__result.self.lastValidatedTicketId === ticketId))) {
        postViolations.push("[TicketValidator.validateTicket] post violated: self.lastValidatedTicketId = ticketId");
      }
      // SKIPPED post-clause (not translatable): self.validationResult = result — unbound variable 'result'
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

/** Impl signature for TicketValidator.markTicketExited. User supplies this. */
export type TicketValidatorMarkTicketExitedImpl = (self: TicketValidator, ticketId: string) => { self: TicketValidator; modified: { validationResult: unknown } };

/** Contract-checking wrapper for TicketValidator.markTicketExited. */
export function wrapTicketValidatorMarkTicketExited(impl: TicketValidatorMarkTicketExitedImpl): (self: TicketValidator, ticketId: string) => TicketValidator {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[TicketValidator.markTicketExited] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.validationResult": self.validationResult,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.validationResult@pre then
            result = true
          else
            result = false
          endif — unbound variable 'result'
      if (!((__result.self.validationResult === false))) {
        postViolations.push("[TicketValidator.markTicketExited] post violated: self.validationResult = false");
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

/** Impl signature for TicketValidator.markTicketExited (async). User supplies this. */
export type TicketValidatorMarkTicketExitedAsyncImpl = (self: TicketValidator, ticketId: string) => Promise<{ self: TicketValidator; modified: { validationResult: unknown } }>;

/** Contract-checking wrapper for TicketValidator.markTicketExited (async). */
export function wrapTicketValidatorMarkTicketExitedAsync(impl: TicketValidatorMarkTicketExitedAsyncImpl): (self: TicketValidator, ticketId: string) => Promise<TicketValidator> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[TicketValidator.markTicketExited] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.validationResult": self.validationResult,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.validationResult@pre then
            result = true
          else
            result = false
          endif — unbound variable 'result'
      if (!((__result.self.validationResult === false))) {
        postViolations.push("[TicketValidator.markTicketExited] post violated: self.validationResult = false");
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

/** Impl signature for OccupancyTracker.incrementOccupancy. User supplies this. */
export type OccupancyTrackerIncrementOccupancyImpl = (self: OccupancyTracker) => { self: OccupancyTracker; modified: { currentOccupancy: unknown; isFull: unknown } };

/** Contract-checking wrapper for OccupancyTracker.incrementOccupancy. */
export function wrapOccupancyTrackerIncrementOccupancy(impl: OccupancyTrackerIncrementOccupancyImpl): (self: OccupancyTracker) => OccupancyTracker {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy < self.certifiedCapacity))) {
      preViolations.push("[OccupancyTracker.incrementOccupancy] pre violated: self.currentOccupancy < self.certifiedCapacity");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentOccupancy === (__pre["self.currentOccupancy"] + 1)))) {
        postViolations.push("[OccupancyTracker.incrementOccupancy] post violated: self.currentOccupancy = self.currentOccupancy@pre + 1");
      }
      if (!((__result.self.isFull === (__result.self.currentOccupancy === __result.self.certifiedCapacity)))) {
        postViolations.push("[OccupancyTracker.incrementOccupancy] post violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
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

/** Impl signature for OccupancyTracker.incrementOccupancy (async). User supplies this. */
export type OccupancyTrackerIncrementOccupancyAsyncImpl = (self: OccupancyTracker) => Promise<{ self: OccupancyTracker; modified: { currentOccupancy: unknown; isFull: unknown } }>;

/** Contract-checking wrapper for OccupancyTracker.incrementOccupancy (async). */
export function wrapOccupancyTrackerIncrementOccupancyAsync(impl: OccupancyTrackerIncrementOccupancyAsyncImpl): (self: OccupancyTracker) => Promise<OccupancyTracker> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy < self.certifiedCapacity))) {
      preViolations.push("[OccupancyTracker.incrementOccupancy] pre violated: self.currentOccupancy < self.certifiedCapacity");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentOccupancy === (__pre["self.currentOccupancy"] + 1)))) {
        postViolations.push("[OccupancyTracker.incrementOccupancy] post violated: self.currentOccupancy = self.currentOccupancy@pre + 1");
      }
      if (!((__result.self.isFull === (__result.self.currentOccupancy === __result.self.certifiedCapacity)))) {
        postViolations.push("[OccupancyTracker.incrementOccupancy] post violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
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

/** Impl signature for OccupancyTracker.decrementOccupancy. User supplies this. */
export type OccupancyTrackerDecrementOccupancyImpl = (self: OccupancyTracker) => { self: OccupancyTracker; modified: { currentOccupancy: unknown; isFull: unknown } };

/** Contract-checking wrapper for OccupancyTracker.decrementOccupancy. */
export function wrapOccupancyTrackerDecrementOccupancy(impl: OccupancyTrackerDecrementOccupancyImpl): (self: OccupancyTracker) => OccupancyTracker {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[OccupancyTracker.decrementOccupancy] pre violated: self.currentOccupancy > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentOccupancy === (__pre["self.currentOccupancy"] - 1)))) {
        postViolations.push("[OccupancyTracker.decrementOccupancy] post violated: self.currentOccupancy = self.currentOccupancy@pre - 1");
      }
      if (!((__result.self.isFull === (__result.self.currentOccupancy === __result.self.certifiedCapacity)))) {
        postViolations.push("[OccupancyTracker.decrementOccupancy] post violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
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

/** Impl signature for OccupancyTracker.decrementOccupancy (async). User supplies this. */
export type OccupancyTrackerDecrementOccupancyAsyncImpl = (self: OccupancyTracker) => Promise<{ self: OccupancyTracker; modified: { currentOccupancy: unknown; isFull: unknown } }>;

/** Contract-checking wrapper for OccupancyTracker.decrementOccupancy (async). */
export function wrapOccupancyTrackerDecrementOccupancyAsync(impl: OccupancyTrackerDecrementOccupancyAsyncImpl): (self: OccupancyTracker) => Promise<OccupancyTracker> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[OccupancyTracker.decrementOccupancy] pre violated: self.currentOccupancy > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentOccupancy === (__pre["self.currentOccupancy"] - 1)))) {
        postViolations.push("[OccupancyTracker.decrementOccupancy] post violated: self.currentOccupancy = self.currentOccupancy@pre - 1");
      }
      if (!((__result.self.isFull === (__result.self.currentOccupancy === __result.self.certifiedCapacity)))) {
        postViolations.push("[OccupancyTracker.decrementOccupancy] post violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
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

/** Impl signature for OccupancyTracker.checkCapacity. User supplies this. */
export type OccupancyTrackerCheckCapacityImpl = (self: OccupancyTracker) => { self: OccupancyTracker; modified: {} };

/** Contract-checking wrapper for OccupancyTracker.checkCapacity. */
export function wrapOccupancyTrackerCheckCapacity(impl: OccupancyTrackerCheckCapacityImpl): (self: OccupancyTracker) => OccupancyTracker {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (self.currentOccupancy < self.certifiedCapacity) — unbound variable 'result'
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

/** Impl signature for OccupancyTracker.checkCapacity (async). User supplies this. */
export type OccupancyTrackerCheckCapacityAsyncImpl = (self: OccupancyTracker) => Promise<{ self: OccupancyTracker; modified: {} }>;

/** Contract-checking wrapper for OccupancyTracker.checkCapacity (async). */
export function wrapOccupancyTrackerCheckCapacityAsync(impl: OccupancyTrackerCheckCapacityAsyncImpl): (self: OccupancyTracker) => Promise<OccupancyTracker> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (self.currentOccupancy < self.certifiedCapacity) — unbound variable 'result'
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

/** Impl signature for GateController.raiseEntryGate. User supplies this. */
export type GateControllerRaiseEntryGateImpl = (self: GateController) => { self: GateController; modified: { entryGateOpen: unknown; entryGateTimer: unknown } };

/** Contract-checking wrapper for GateController.raiseEntryGate. */
export function wrapGateControllerRaiseEntryGate(impl: GateControllerRaiseEntryGateImpl): (self: GateController) => GateController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.entryGateOpen))) {
      preViolations.push("[GateController.raiseEntryGate] pre violated: not self.entryGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.entryGateOpen === true))) {
        postViolations.push("[GateController.raiseEntryGate] post violated: self.entryGateOpen = true");
      }
      if (!((__result.self.entryGateTimer === 5))) {
        postViolations.push("[GateController.raiseEntryGate] post violated: self.entryGateTimer = 5");
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

/** Impl signature for GateController.raiseEntryGate (async). User supplies this. */
export type GateControllerRaiseEntryGateAsyncImpl = (self: GateController) => Promise<{ self: GateController; modified: { entryGateOpen: unknown; entryGateTimer: unknown } }>;

/** Contract-checking wrapper for GateController.raiseEntryGate (async). */
export function wrapGateControllerRaiseEntryGateAsync(impl: GateControllerRaiseEntryGateAsyncImpl): (self: GateController) => Promise<GateController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.entryGateOpen))) {
      preViolations.push("[GateController.raiseEntryGate] pre violated: not self.entryGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.entryGateOpen === true))) {
        postViolations.push("[GateController.raiseEntryGate] post violated: self.entryGateOpen = true");
      }
      if (!((__result.self.entryGateTimer === 5))) {
        postViolations.push("[GateController.raiseEntryGate] post violated: self.entryGateTimer = 5");
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

/** Impl signature for GateController.lowerEntryGate. User supplies this. */
export type GateControllerLowerEntryGateImpl = (self: GateController) => { self: GateController; modified: { entryGateOpen: unknown; entryGateTimer: unknown } };

/** Contract-checking wrapper for GateController.lowerEntryGate. */
export function wrapGateControllerLowerEntryGate(impl: GateControllerLowerEntryGateImpl): (self: GateController) => GateController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.entryGateOpen)) {
      preViolations.push("[GateController.lowerEntryGate] pre violated: self.entryGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.entryGateOpen === false))) {
        postViolations.push("[GateController.lowerEntryGate] post violated: self.entryGateOpen = false");
      }
      if (!((__result.self.entryGateTimer === 0))) {
        postViolations.push("[GateController.lowerEntryGate] post violated: self.entryGateTimer = 0");
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

/** Impl signature for GateController.lowerEntryGate (async). User supplies this. */
export type GateControllerLowerEntryGateAsyncImpl = (self: GateController) => Promise<{ self: GateController; modified: { entryGateOpen: unknown; entryGateTimer: unknown } }>;

/** Contract-checking wrapper for GateController.lowerEntryGate (async). */
export function wrapGateControllerLowerEntryGateAsync(impl: GateControllerLowerEntryGateAsyncImpl): (self: GateController) => Promise<GateController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.entryGateOpen)) {
      preViolations.push("[GateController.lowerEntryGate] pre violated: self.entryGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.entryGateOpen === false))) {
        postViolations.push("[GateController.lowerEntryGate] post violated: self.entryGateOpen = false");
      }
      if (!((__result.self.entryGateTimer === 0))) {
        postViolations.push("[GateController.lowerEntryGate] post violated: self.entryGateTimer = 0");
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

/** Impl signature for GateController.raiseExitGate. User supplies this. */
export type GateControllerRaiseExitGateImpl = (self: GateController) => { self: GateController; modified: { exitGateOpen: unknown; exitGateTimer: unknown } };

/** Contract-checking wrapper for GateController.raiseExitGate. */
export function wrapGateControllerRaiseExitGate(impl: GateControllerRaiseExitGateImpl): (self: GateController) => GateController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.exitGateOpen))) {
      preViolations.push("[GateController.raiseExitGate] pre violated: not self.exitGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === true))) {
        postViolations.push("[GateController.raiseExitGate] post violated: self.exitGateOpen = true");
      }
      if (!((__result.self.exitGateTimer === 5))) {
        postViolations.push("[GateController.raiseExitGate] post violated: self.exitGateTimer = 5");
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

/** Impl signature for GateController.raiseExitGate (async). User supplies this. */
export type GateControllerRaiseExitGateAsyncImpl = (self: GateController) => Promise<{ self: GateController; modified: { exitGateOpen: unknown; exitGateTimer: unknown } }>;

/** Contract-checking wrapper for GateController.raiseExitGate (async). */
export function wrapGateControllerRaiseExitGateAsync(impl: GateControllerRaiseExitGateAsyncImpl): (self: GateController) => Promise<GateController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.exitGateOpen))) {
      preViolations.push("[GateController.raiseExitGate] pre violated: not self.exitGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === true))) {
        postViolations.push("[GateController.raiseExitGate] post violated: self.exitGateOpen = true");
      }
      if (!((__result.self.exitGateTimer === 5))) {
        postViolations.push("[GateController.raiseExitGate] post violated: self.exitGateTimer = 5");
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

/** Impl signature for GateController.lowerExitGate. User supplies this. */
export type GateControllerLowerExitGateImpl = (self: GateController) => { self: GateController; modified: { exitGateOpen: unknown; exitGateTimer: unknown } };

/** Contract-checking wrapper for GateController.lowerExitGate. */
export function wrapGateControllerLowerExitGate(impl: GateControllerLowerExitGateImpl): (self: GateController) => GateController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.exitGateOpen)) {
      preViolations.push("[GateController.lowerExitGate] pre violated: self.exitGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === false))) {
        postViolations.push("[GateController.lowerExitGate] post violated: self.exitGateOpen = false");
      }
      if (!((__result.self.exitGateTimer === 0))) {
        postViolations.push("[GateController.lowerExitGate] post violated: self.exitGateTimer = 0");
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

/** Impl signature for GateController.lowerExitGate (async). User supplies this. */
export type GateControllerLowerExitGateAsyncImpl = (self: GateController) => Promise<{ self: GateController; modified: { exitGateOpen: unknown; exitGateTimer: unknown } }>;

/** Contract-checking wrapper for GateController.lowerExitGate (async). */
export function wrapGateControllerLowerExitGateAsync(impl: GateControllerLowerExitGateAsyncImpl): (self: GateController) => Promise<GateController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.exitGateOpen)) {
      preViolations.push("[GateController.lowerExitGate] pre violated: self.exitGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === false))) {
        postViolations.push("[GateController.lowerExitGate] post violated: self.exitGateOpen = false");
      }
      if (!((__result.self.exitGateTimer === 0))) {
        postViolations.push("[GateController.lowerExitGate] post violated: self.exitGateTimer = 0");
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

/** Impl signature for GateController.displayFullSign. User supplies this. */
export type GateControllerDisplayFullSignImpl = (self: GateController, full: boolean) => { self: GateController; modified: { entryGateOpen: unknown } };

/** Contract-checking wrapper for GateController.displayFullSign. */
export function wrapGateControllerDisplayFullSign(impl: GateControllerDisplayFullSignImpl): (self: GateController, full: boolean) => GateController {
  return (self, full) => {
    const preViolations: string[] = [];
    if (!((!(full) || !(self.entryGateOpen)))) {
      preViolations.push("[GateController.displayFullSign] pre violated: full implies not self.entryGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.entryGateOpen": self.entryGateOpen,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, full);
      const postViolations: string[] = [];
      if (!(((full) ? ((__result.self.entryGateOpen === false)) : ((__result.self.entryGateOpen === __pre["self.entryGateOpen"]))))) {
        postViolations.push("[GateController.displayFullSign] post violated: if full then \n            self.entryGateOpen = false \n          else \n            self.entryGateOpen = self.entryGateOpen@pre \n          endif");
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

/** Impl signature for GateController.displayFullSign (async). User supplies this. */
export type GateControllerDisplayFullSignAsyncImpl = (self: GateController, full: boolean) => Promise<{ self: GateController; modified: { entryGateOpen: unknown } }>;

/** Contract-checking wrapper for GateController.displayFullSign (async). */
export function wrapGateControllerDisplayFullSignAsync(impl: GateControllerDisplayFullSignAsyncImpl): (self: GateController, full: boolean) => Promise<GateController> {
  return async (self, full) => {
    const preViolations: string[] = [];
    if (!((!(full) || !(self.entryGateOpen)))) {
      preViolations.push("[GateController.displayFullSign] pre violated: full implies not self.entryGateOpen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.entryGateOpen": self.entryGateOpen,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, full);
      const postViolations: string[] = [];
      if (!(((full) ? ((__result.self.entryGateOpen === false)) : ((__result.self.entryGateOpen === __pre["self.entryGateOpen"]))))) {
        postViolations.push("[GateController.displayFullSign] post violated: if full then \n            self.entryGateOpen = false \n          else \n            self.entryGateOpen = self.entryGateOpen@pre \n          endif");
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

/** Impl signature for PaymentProcessor.processPayment. User supplies this. */
export type PaymentProcessorProcessPaymentImpl = (self: PaymentProcessor, ticketId: string, amount: number) => { self: PaymentProcessor; modified: { lastPaidTicketId: unknown; paymentSuccessful: unknown } };

/** Contract-checking wrapper for PaymentProcessor.processPayment. */
export function wrapPaymentProcessorProcessPayment(impl: PaymentProcessorProcessPaymentImpl): (self: PaymentProcessor, ticketId: string, amount: number) => PaymentProcessor {
  return (self, ticketId, amount) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[PaymentProcessor.processPayment] pre violated: ticketId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[PaymentProcessor.processPayment] pre violated: amount >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId, amount);
      const postViolations: string[] = [];
      if (!((__result.self.lastPaidTicketId === ticketId))) {
        postViolations.push("[PaymentProcessor.processPayment] post violated: self.lastPaidTicketId = ticketId");
      }
      // SKIPPED post-clause (not translatable): self.paymentSuccessful = result — unbound variable 'result'
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

/** Impl signature for PaymentProcessor.processPayment (async). User supplies this. */
export type PaymentProcessorProcessPaymentAsyncImpl = (self: PaymentProcessor, ticketId: string, amount: number) => Promise<{ self: PaymentProcessor; modified: { lastPaidTicketId: unknown; paymentSuccessful: unknown } }>;

/** Contract-checking wrapper for PaymentProcessor.processPayment (async). */
export function wrapPaymentProcessorProcessPaymentAsync(impl: PaymentProcessorProcessPaymentAsyncImpl): (self: PaymentProcessor, ticketId: string, amount: number) => Promise<PaymentProcessor> {
  return async (self, ticketId, amount) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[PaymentProcessor.processPayment] pre violated: ticketId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[PaymentProcessor.processPayment] pre violated: amount >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId, amount);
      const postViolations: string[] = [];
      if (!((__result.self.lastPaidTicketId === ticketId))) {
        postViolations.push("[PaymentProcessor.processPayment] post violated: self.lastPaidTicketId = ticketId");
      }
      // SKIPPED post-clause (not translatable): self.paymentSuccessful = result — unbound variable 'result'
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

/** Impl signature for PaymentProcessor.markTicketPaid. User supplies this. */
export type PaymentProcessorMarkTicketPaidImpl = (self: PaymentProcessor, ticketId: string) => { self: PaymentProcessor; modified: { paymentSuccessful: unknown; lastPaidTicketId: unknown } };

/** Contract-checking wrapper for PaymentProcessor.markTicketPaid. */
export function wrapPaymentProcessorMarkTicketPaid(impl: PaymentProcessorMarkTicketPaidImpl): (self: PaymentProcessor, ticketId: string) => PaymentProcessor {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[PaymentProcessor.markTicketPaid] pre violated: ticketId <> null");
    }
    if (!((self.paymentSuccessful === true))) {
      preViolations.push("[PaymentProcessor.markTicketPaid] pre violated: self.paymentSuccessful = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      if (!((__result.self.paymentSuccessful === false))) {
        postViolations.push("[PaymentProcessor.markTicketPaid] post violated: self.paymentSuccessful = false");
      }
      if (!((__result.self.lastPaidTicketId === ticketId))) {
        postViolations.push("[PaymentProcessor.markTicketPaid] post violated: self.lastPaidTicketId = ticketId");
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

/** Impl signature for PaymentProcessor.markTicketPaid (async). User supplies this. */
export type PaymentProcessorMarkTicketPaidAsyncImpl = (self: PaymentProcessor, ticketId: string) => Promise<{ self: PaymentProcessor; modified: { paymentSuccessful: unknown; lastPaidTicketId: unknown } }>;

/** Contract-checking wrapper for PaymentProcessor.markTicketPaid (async). */
export function wrapPaymentProcessorMarkTicketPaidAsync(impl: PaymentProcessorMarkTicketPaidAsyncImpl): (self: PaymentProcessor, ticketId: string) => Promise<PaymentProcessor> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[PaymentProcessor.markTicketPaid] pre violated: ticketId <> null");
    }
    if (!((self.paymentSuccessful === true))) {
      preViolations.push("[PaymentProcessor.markTicketPaid] pre violated: self.paymentSuccessful = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      if (!((__result.self.paymentSuccessful === false))) {
        postViolations.push("[PaymentProcessor.markTicketPaid] post violated: self.paymentSuccessful = false");
      }
      if (!((__result.self.lastPaidTicketId === ticketId))) {
        postViolations.push("[PaymentProcessor.markTicketPaid] post violated: self.lastPaidTicketId = ticketId");
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

/** Impl signature for ParkingGarageSystem.enterGarage. User supplies this. */
export type ParkingGarageSystemEnterGarageImpl = (self: ParkingGarageSystem, vehicleId: string) => { self: ParkingGarageSystem; modified: { currentOccupancy: unknown; ticketCount: unknown; entryGateOpen: unknown; isFull: unknown } };

/** Contract-checking wrapper for ParkingGarageSystem.enterGarage. */
export function wrapParkingGarageSystemEnterGarage(impl: ParkingGarageSystemEnterGarageImpl): (self: ParkingGarageSystem, vehicleId: string) => ParkingGarageSystem {
  return (self, vehicleId) => {
    const preViolations: string[] = [];
    if (!((vehicleId !== null))) {
      preViolations.push("[ParkingGarageSystem.enterGarage] pre violated: vehicleId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, vehicleId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.currentOccupancy@pre < self.certifiedCapacity then
            self.currentOccupancy = self.currentOccupancy@pre + 1
            and result <> null
            and result.ticketId <> null
            and result.issuedAtEntry <> null
            and result.isUsed = false
            and result.isPaid = false
            and result.consumedAtExit = null
            and self.ticketCount = self.ticketCount@pre + 1
            and self.entryGateOpen = true
            and self.isFull = (self.currentOccupancy = self.certifiedCapacity)
          else
            result = null
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.ticketCount = self.ticketCount@pre
            and self.entryGateOpen = false
            and self.isFull = true
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

/** Impl signature for ParkingGarageSystem.enterGarage (async). User supplies this. */
export type ParkingGarageSystemEnterGarageAsyncImpl = (self: ParkingGarageSystem, vehicleId: string) => Promise<{ self: ParkingGarageSystem; modified: { currentOccupancy: unknown; ticketCount: unknown; entryGateOpen: unknown; isFull: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystem.enterGarage (async). */
export function wrapParkingGarageSystemEnterGarageAsync(impl: ParkingGarageSystemEnterGarageAsyncImpl): (self: ParkingGarageSystem, vehicleId: string) => Promise<ParkingGarageSystem> {
  return async (self, vehicleId) => {
    const preViolations: string[] = [];
    if (!((vehicleId !== null))) {
      preViolations.push("[ParkingGarageSystem.enterGarage] pre violated: vehicleId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, vehicleId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.currentOccupancy@pre < self.certifiedCapacity then
            self.currentOccupancy = self.currentOccupancy@pre + 1
            and result <> null
            and result.ticketId <> null
            and result.issuedAtEntry <> null
            and result.isUsed = false
            and result.isPaid = false
            and result.consumedAtExit = null
            and self.ticketCount = self.ticketCount@pre + 1
            and self.entryGateOpen = true
            and self.isFull = (self.currentOccupancy = self.certifiedCapacity)
          else
            result = null
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.ticketCount = self.ticketCount@pre
            and self.entryGateOpen = false
            and self.isFull = true
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

/** Impl signature for ParkingGarageSystem.exitGarage. User supplies this. */
export type ParkingGarageSystemExitGarageImpl = (self: ParkingGarageSystem, ticketId: string) => { self: ParkingGarageSystem; modified: { currentOccupancy: unknown; exitGateOpen: unknown; ticketCount: unknown } };

/** Contract-checking wrapper for ParkingGarageSystem.exitGarage. */
export function wrapParkingGarageSystemExitGarage(impl: ParkingGarageSystemExitGarageImpl): (self: ParkingGarageSystem, ticketId: string) => ParkingGarageSystem {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.exitGarage] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 and self.currentOccupancy@pre > 0 then
            result = true
            and self.currentOccupancy = self.currentOccupancy@pre - 1
            and self.exitGateOpen = true
            and self.ticketCount = self.ticketCount@pre
          else
            result = false
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.exitGateOpen = false
            and self.ticketCount = self.ticketCount@pre
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

/** Impl signature for ParkingGarageSystem.exitGarage (async). User supplies this. */
export type ParkingGarageSystemExitGarageAsyncImpl = (self: ParkingGarageSystem, ticketId: string) => Promise<{ self: ParkingGarageSystem; modified: { currentOccupancy: unknown; exitGateOpen: unknown; ticketCount: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystem.exitGarage (async). */
export function wrapParkingGarageSystemExitGarageAsync(impl: ParkingGarageSystemExitGarageAsyncImpl): (self: ParkingGarageSystem, ticketId: string) => Promise<ParkingGarageSystem> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.exitGarage] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 and self.currentOccupancy@pre > 0 then
            result = true
            and self.currentOccupancy = self.currentOccupancy@pre - 1
            and self.exitGateOpen = true
            and self.ticketCount = self.ticketCount@pre
          else
            result = false
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.exitGateOpen = false
            and self.ticketCount = self.ticketCount@pre
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

/** Impl signature for ParkingGarageSystem.payForTicket. User supplies this. */
export type ParkingGarageSystemPayForTicketImpl = (self: ParkingGarageSystem, ticketId: string) => { self: ParkingGarageSystem; modified: {} };

/** Contract-checking wrapper for ParkingGarageSystem.payForTicket. */
export function wrapParkingGarageSystemPayForTicket(impl: ParkingGarageSystemPayForTicketImpl): (self: ParkingGarageSystem, ticketId: string) => ParkingGarageSystem {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.payForTicket] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 then
            result = true
          else
            result = false
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

/** Impl signature for ParkingGarageSystem.payForTicket (async). User supplies this. */
export type ParkingGarageSystemPayForTicketAsyncImpl = (self: ParkingGarageSystem, ticketId: string) => Promise<{ self: ParkingGarageSystem; modified: {} }>;

/** Contract-checking wrapper for ParkingGarageSystem.payForTicket (async). */
export function wrapParkingGarageSystemPayForTicketAsync(impl: ParkingGarageSystemPayForTicketAsyncImpl): (self: ParkingGarageSystem, ticketId: string) => Promise<ParkingGarageSystem> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.payForTicket] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 then
            result = true
          else
            result = false
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

/** Impl signature for ParkingGarageSystemFormalized.rejectEntryWhenFull. User supplies this. */
export type ParkingGarageSystemFormalizedRejectEntryWhenFullImpl = (self: ParkingGarageSystemFormalized) => { self: ParkingGarageSystemFormalized; modified: { entryGateOpen: unknown } };

/** Contract-checking wrapper for ParkingGarageSystemFormalized.rejectEntryWhenFull. */
export function wrapParkingGarageSystemFormalizedRejectEntryWhenFull(impl: ParkingGarageSystemFormalizedRejectEntryWhenFullImpl): (self: ParkingGarageSystemFormalized) => ParkingGarageSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy === self.certifiedCapacity))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectEntryWhenFull] pre violated: self.currentOccupancy = self.certifiedCapacity");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.entryGateOpen === false))) {
        postViolations.push("[ParkingGarageSystemFormalized.rejectEntryWhenFull] post violated: self.entryGateOpen = false");
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

/** Impl signature for ParkingGarageSystemFormalized.rejectEntryWhenFull (async). User supplies this. */
export type ParkingGarageSystemFormalizedRejectEntryWhenFullAsyncImpl = (self: ParkingGarageSystemFormalized) => Promise<{ self: ParkingGarageSystemFormalized; modified: { entryGateOpen: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystemFormalized.rejectEntryWhenFull (async). */
export function wrapParkingGarageSystemFormalizedRejectEntryWhenFullAsync(impl: ParkingGarageSystemFormalizedRejectEntryWhenFullAsyncImpl): (self: ParkingGarageSystemFormalized) => Promise<ParkingGarageSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy === self.certifiedCapacity))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectEntryWhenFull] pre violated: self.currentOccupancy = self.certifiedCapacity");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.entryGateOpen === false))) {
        postViolations.push("[ParkingGarageSystemFormalized.rejectEntryWhenFull] post violated: self.entryGateOpen = false");
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

/** Impl signature for ParkingGarageSystemFormalized.rejectUsedTicketExit. User supplies this. */
export type ParkingGarageSystemFormalizedRejectUsedTicketExitImpl = (self: ParkingGarageSystemFormalized) => { self: ParkingGarageSystemFormalized; modified: { exitGateOpen: unknown } };

/** Contract-checking wrapper for ParkingGarageSystemFormalized.rejectUsedTicketExit. */
export function wrapParkingGarageSystemFormalizedRejectUsedTicketExit(impl: ParkingGarageSystemFormalizedRejectUsedTicketExitImpl): (self: ParkingGarageSystemFormalized) => ParkingGarageSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUsedTicketExit] pre violated: self.currentOccupancy > 0");
    }
    if (!((self.ticketCount > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUsedTicketExit] pre violated: self.ticketCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === false))) {
        postViolations.push("[ParkingGarageSystemFormalized.rejectUsedTicketExit] post violated: self.exitGateOpen = false");
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

/** Impl signature for ParkingGarageSystemFormalized.rejectUsedTicketExit (async). User supplies this. */
export type ParkingGarageSystemFormalizedRejectUsedTicketExitAsyncImpl = (self: ParkingGarageSystemFormalized) => Promise<{ self: ParkingGarageSystemFormalized; modified: { exitGateOpen: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystemFormalized.rejectUsedTicketExit (async). */
export function wrapParkingGarageSystemFormalizedRejectUsedTicketExitAsync(impl: ParkingGarageSystemFormalizedRejectUsedTicketExitAsyncImpl): (self: ParkingGarageSystemFormalized) => Promise<ParkingGarageSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUsedTicketExit] pre violated: self.currentOccupancy > 0");
    }
    if (!((self.ticketCount > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUsedTicketExit] pre violated: self.ticketCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === false))) {
        postViolations.push("[ParkingGarageSystemFormalized.rejectUsedTicketExit] post violated: self.exitGateOpen = false");
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

/** Impl signature for ParkingGarageSystemFormalized.rejectUnpaidExit. User supplies this. */
export type ParkingGarageSystemFormalizedRejectUnpaidExitImpl = (self: ParkingGarageSystemFormalized) => { self: ParkingGarageSystemFormalized; modified: { exitGateOpen: unknown } };

/** Contract-checking wrapper for ParkingGarageSystemFormalized.rejectUnpaidExit. */
export function wrapParkingGarageSystemFormalizedRejectUnpaidExit(impl: ParkingGarageSystemFormalizedRejectUnpaidExitImpl): (self: ParkingGarageSystemFormalized) => ParkingGarageSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUnpaidExit] pre violated: self.currentOccupancy > 0");
    }
    if (!((self.ticketCount > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUnpaidExit] pre violated: self.ticketCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === false))) {
        postViolations.push("[ParkingGarageSystemFormalized.rejectUnpaidExit] post violated: self.exitGateOpen = false");
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

/** Impl signature for ParkingGarageSystemFormalized.rejectUnpaidExit (async). User supplies this. */
export type ParkingGarageSystemFormalizedRejectUnpaidExitAsyncImpl = (self: ParkingGarageSystemFormalized) => Promise<{ self: ParkingGarageSystemFormalized; modified: { exitGateOpen: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystemFormalized.rejectUnpaidExit (async). */
export function wrapParkingGarageSystemFormalizedRejectUnpaidExitAsync(impl: ParkingGarageSystemFormalizedRejectUnpaidExitAsyncImpl): (self: ParkingGarageSystemFormalized) => Promise<ParkingGarageSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUnpaidExit] pre violated: self.currentOccupancy > 0");
    }
    if (!((self.ticketCount > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.rejectUnpaidExit] pre violated: self.ticketCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === false))) {
        postViolations.push("[ParkingGarageSystemFormalized.rejectUnpaidExit] post violated: self.exitGateOpen = false");
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

/** Impl signature for ParkingGarageSystemFormalized.attendantOverrideExit. User supplies this. */
export type ParkingGarageSystemFormalizedAttendantOverrideExitImpl = (self: ParkingGarageSystemFormalized) => { self: ParkingGarageSystemFormalized; modified: { exitGateOpen: unknown } };

/** Contract-checking wrapper for ParkingGarageSystemFormalized.attendantOverrideExit. */
export function wrapParkingGarageSystemFormalizedAttendantOverrideExit(impl: ParkingGarageSystemFormalizedAttendantOverrideExitImpl): (self: ParkingGarageSystemFormalized) => ParkingGarageSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.attendantOverrideExit] pre violated: self.currentOccupancy > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === true))) {
        postViolations.push("[ParkingGarageSystemFormalized.attendantOverrideExit] post violated: self.exitGateOpen = true");
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

/** Impl signature for ParkingGarageSystemFormalized.attendantOverrideExit (async). User supplies this. */
export type ParkingGarageSystemFormalizedAttendantOverrideExitAsyncImpl = (self: ParkingGarageSystemFormalized) => Promise<{ self: ParkingGarageSystemFormalized; modified: { exitGateOpen: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystemFormalized.attendantOverrideExit (async). */
export function wrapParkingGarageSystemFormalizedAttendantOverrideExitAsync(impl: ParkingGarageSystemFormalizedAttendantOverrideExitAsyncImpl): (self: ParkingGarageSystemFormalized) => Promise<ParkingGarageSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentOccupancy > 0))) {
      preViolations.push("[ParkingGarageSystemFormalized.attendantOverrideExit] pre violated: self.currentOccupancy > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.exitGateOpen === true))) {
        postViolations.push("[ParkingGarageSystemFormalized.attendantOverrideExit] post violated: self.exitGateOpen = true");
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

/** Lifecycle registry for CapacityRespectedGoal commitments. */
export class CapacityRespectedGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CapacityRespectedGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CapacityRespectedGoal — the typed wrapper guarantees that since
    // `register` only accepts CapacityRespectedGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CapacityRespectedGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CapacityRespectedGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CapacityRespectedGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CapacityRespectedGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CapacityRespectedGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CapacityRespectedGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for TicketUniquenessGoal commitments. */
export class TicketUniquenessGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<TicketUniquenessGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a TicketUniquenessGoal — the typed wrapper guarantees that since
    // `register` only accepts TicketUniquenessGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: TicketUniquenessGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: TicketUniquenessGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: TicketUniquenessGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: TicketUniquenessGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<TicketUniquenessGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<TicketUniquenessGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ExitGatingGoal commitments. */
export class ExitGatingGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExitGatingGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExitGatingGoal — the typed wrapper guarantees that since
    // `register` only accepts ExitGatingGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExitGatingGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExitGatingGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExitGatingGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExitGatingGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExitGatingGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExitGatingGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for OccupancyAccuracyGoal commitments. */
export class OccupancyAccuracyGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<OccupancyAccuracyGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a OccupancyAccuracyGoal — the typed wrapper guarantees that since
    // `register` only accepts OccupancyAccuracyGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: OccupancyAccuracyGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: OccupancyAccuracyGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: OccupancyAccuracyGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: OccupancyAccuracyGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<OccupancyAccuracyGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<OccupancyAccuracyGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

