// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for MeterInterface. Runtime: string. Compile-time: branded. */
export type MeterInterfaceId = string & { readonly __brand: "MeterInterfaceId" };
/** Identity type for MeterReadingValidator. Runtime: string. Compile-time: branded. */
export type MeterReadingValidatorId = string & { readonly __brand: "MeterReadingValidatorId" };
/** Identity type for BillingEngine. Runtime: string. Compile-time: branded. */
export type BillingEngineId = string & { readonly __brand: "BillingEngineId" };
/** Identity type for TamperMonitor. Runtime: string. Compile-time: branded. */
export type TamperMonitorId = string & { readonly __brand: "TamperMonitorId" };
/** Identity type for AuditLogger. Runtime: string. Compile-time: branded. */
export type AuditLoggerId = string & { readonly __brand: "AuditLoggerId" };
/** Identity type for MeterReadingChannel. Runtime: string. Compile-time: branded. */
export type MeterReadingChannelId = string & { readonly __brand: "MeterReadingChannelId" };
/** Identity type for TamperFreezeChannel. Runtime: string. Compile-time: branded. */
export type TamperFreezeChannelId = string & { readonly __brand: "TamperFreezeChannelId" };
/** Identity type for MeterReadingFlowDesign. Runtime: string. Compile-time: branded. */
export type MeterReadingFlowDesignId = string & { readonly __brand: "MeterReadingFlowDesignId" };
/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for UtilityProvider. Runtime: string. Compile-time: branded. */
export type UtilityProviderId = string & { readonly __brand: "UtilityProviderId" };
/** Identity type for FieldTechnician. Runtime: string. Compile-time: branded. */
export type FieldTechnicianId = string & { readonly __brand: "FieldTechnicianId" };
/** Identity type for RegulatoryAuthority. Runtime: string. Compile-time: branded. */
export type RegulatoryAuthorityId = string & { readonly __brand: "RegulatoryAuthorityId" };
/** Identity type for MeterVendor. Runtime: string. Compile-time: branded. */
export type MeterVendorId = string & { readonly __brand: "MeterVendorId" };
/** Identity type for MonotonicConsumptionCommitment. Runtime: string. Compile-time: branded. */
export type MonotonicConsumptionCommitmentId = string & { readonly __brand: "MonotonicConsumptionCommitmentId" };
/** Identity type for TamperFreezeCommitment. Runtime: string. Compile-time: branded. */
export type TamperFreezeCommitmentId = string & { readonly __brand: "TamperFreezeCommitmentId" };
/** Identity type for TamperClearanceCommitment. Runtime: string. Compile-time: branded. */
export type TamperClearanceCommitmentId = string & { readonly __brand: "TamperClearanceCommitmentId" };
/** Identity type for ReadingImmutabilityCommitment. Runtime: string. Compile-time: branded. */
export type ReadingImmutabilityCommitmentId = string & { readonly __brand: "ReadingImmutabilityCommitmentId" };
/** Identity type for MeterReading. Runtime: string. Compile-time: branded. */
export type MeterReadingId = string & { readonly __brand: "MeterReadingId" };
/** Identity type for ConsumptionDelta. Runtime: string. Compile-time: branded. */
export type ConsumptionDeltaId = string & { readonly __brand: "ConsumptionDeltaId" };
/** Identity type for TamperEvent. Runtime: string. Compile-time: branded. */
export type TamperEventId = string & { readonly __brand: "TamperEventId" };
/** Identity type for BillingIncrement. Runtime: string. Compile-time: branded. */
export type BillingIncrementId = string & { readonly __brand: "BillingIncrementId" };
/** Identity type for TamperClearance. Runtime: string. Compile-time: branded. */
export type TamperClearanceId = string & { readonly __brand: "TamperClearanceId" };
/** Identity type for MeterReadingFlow. Runtime: string. Compile-time: branded. */
export type MeterReadingFlowId = string & { readonly __brand: "MeterReadingFlowId" };
/** Identity type for MeterBillingSystem. Runtime: string. Compile-time: branded. */
export type MeterBillingSystemId = string & { readonly __brand: "MeterBillingSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface MeterInterface {
  readonly interfaceId: MeterInterfaceId;
  readonly lastRawReadingKwh: number;
  readonly lastRawReadingTimestamp: number;
  readonly lastRawTamperFlags: string;
  readonly readingQueueSize: number;
  readonly isConnected: boolean;
}

/** @stereotype <<Kind>> */
export interface MeterReadingValidator {
  readonly validatorId: MeterReadingValidatorId;
  readonly lastAcceptedKwh: number;
  readonly lastAcceptedTimestamp: number;
  readonly lastComputedDelta: number;
  readonly lastDeltaIsValid: boolean;
  readonly anomalyCount: number;
  readonly maxNegativeDeltaThreshold: number;
}

/** @stereotype <<Kind>> */
export interface BillingEngine {
  readonly engineId: BillingEngineId;
  readonly currentBillingTotal: number;
  readonly lastAppliedIncrement: number;
  readonly lastAppliedTimestamp: number;
  readonly isFrozen: boolean;
  readonly isCleared: boolean;
  readonly acceptedReadingCount: number;
  readonly compensationTotal: number;
}

/** @stereotype <<Kind>> */
export interface TamperMonitor {
  readonly monitorId: TamperMonitorId;
  readonly isTamperActive: boolean;
  readonly lastTamperType: string;
  readonly lastTamperDescription: string;
  readonly lastTamperTimestamp: number;
  readonly tamperEventCount: number;
  readonly isManualClearancePending: boolean;
}

/** @stereotype <<Kind>> */
export interface AuditLogger {
  readonly loggerId: AuditLoggerId;
  readonly logEntryCount: number;
  readonly retentionDays: number;
  readonly lastEntryTimestamp: number;
}

/** @stereotype <<Role>> */
export interface MeterInterfaceEndpoint {
  readonly lastRawReadingKwh: number;
  readonly lastRawTamperFlags: string;
}

/** @stereotype <<Role>> */
export interface MeterValidatorEndpoint {
  readonly lastAcceptedKwh: number;
  readonly lastComputedDelta: number;
  readonly lastDeltaIsValid: boolean;
}

/** @stereotype <<Role>> */
export interface BillingEngineEndpoint {
  readonly isFrozen: boolean;
  readonly isCleared: boolean;
  readonly lastAppliedIncrement: number;
}

/** @stereotype <<Role>> */
export interface TamperMonitorEndpoint {
  readonly isTamperActive: boolean;
}

/** @stereotype <<Relator>> */
export interface MeterReadingChannel {
  readonly channelId: MeterReadingChannelId;
  readonly lastReadingTransferred: number;
  readonly lastTamperFlagsTransferred: string;
  readonly transferCount: number;
}

/** @stereotype <<Relator>> */
export interface TamperFreezeChannel {
  readonly channelId: TamperFreezeChannelId;
  readonly freezeCount: number;
  readonly clearanceCount: number;
  readonly lastFreezeTimestamp: number;
}

/** @stereotype <<Happening>> */
export interface MeterReadingFlowDesign {
  readonly flowId: MeterReadingFlowDesignId;
  readonly triggeredBy: string;
  readonly validationOutcome: string;
  readonly billingOutcome: string;
}

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
  readonly accountNumber: string;
}

/** @stereotype <<Agent>> */
export interface UtilityProvider {
  readonly utilityId: UtilityProviderId;
  readonly name: string;
  readonly regulatorCode: string;
}

/** @stereotype <<Agent>> */
export interface FieldTechnician {
  readonly technicianId: FieldTechnicianId;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface RegulatoryAuthority {
  readonly regulatorId: RegulatoryAuthorityId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface MeterVendor {
  readonly vendorId: MeterVendorId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface MonotonicConsumptionCommitment {
  readonly commitmentId: MonotonicConsumptionCommitmentId;
  readonly maxNegativeDeltaThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface TamperFreezeCommitment {
  readonly commitmentId: TamperFreezeCommitmentId;
  readonly tamperFreezeActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface TamperClearanceCommitment {
  readonly commitmentId: TamperClearanceCommitmentId;
  readonly tamperCleared: boolean;
}

/** @stereotype <<Commitment>> */
export interface ReadingImmutabilityCommitment {
  readonly commitmentId: ReadingImmutabilityCommitmentId;
  readonly acceptedReadingCount: number;
}

/** @stereotype <<Category>> */
export interface MonotonicConsumption {
}

/** @stereotype <<Category>> */
export interface TamperHandling {
}

/** @stereotype <<Category>> */
export interface ReadingImmutability {
}

/** @stereotype <<Kind>> */
export interface MeterReading {
  readonly readingId: MeterReadingId;
  readonly timestamp: number;
  readonly kwh: number;
  readonly tamperFlags: string;
}

/** @stereotype <<Kind>> */
export interface ConsumptionDelta {
  readonly deltaId: ConsumptionDeltaId;
  readonly previousKwh: number;
  readonly currentKwh: number;
  readonly value: number;
}

/** @stereotype <<Kind>> */
export interface TamperEvent {
  readonly eventId: TamperEventId;
  readonly timestamp: number;
  readonly eventType: string;
  readonly description: string;
}

/** @stereotype <<Kind>> */
export interface BillingIncrement {
  readonly incrementId: BillingIncrementId;
  readonly delta: ConsumptionDelta;
  readonly amount: number;
  readonly appliedTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface TamperClearance {
  readonly clearanceId: TamperClearanceId;
  readonly clearedBy: FieldTechnician;
  readonly timestamp: number;
}

/** @stereotype <<Happening>> */
export interface MeterReadingFlow {
  readonly flowId: MeterReadingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface MeterBillingSystem extends MonotonicConsumption, TamperHandling, ReadingImmutability {
  readonly systemId: MeterBillingSystemId;
  readonly maxNegativeDeltaThreshold: number;
  readonly tamperFreezeActive: boolean;
  readonly tamperCleared: boolean;
  readonly acceptedReadingCount: number;
}

/** @stereotype <<Category>> */
export interface WeeeCompliant {
  readonly weeeWasteCategoryCode: string;
  readonly recyclableComponentsPct: number;
}

/** @stereotype <<Category>> */
export interface MidCompliant {
  readonly midAccuracyClass: string;
  readonly midTamperDetectionRequired: boolean;
}

/** @stereotype <<Category>> */
export interface NistSmartGridFramework {
  readonly nistAuditRetentionDays: number;
  readonly nistTamperEvidenceRequired: boolean;
}

/** @stereotype <<Category>> */
export interface GdprDataMinimization {
  readonly gdprRetentionLimitDays: number;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleReadings {
}

/** @stereotype <<Category>> */
export interface TamperImmutableInvariants {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly riskLevel: string;
  readonly validationMethod: string;
}

/** @stereotype <<Subkind>> */
export interface MeterBillingSystemFormalized extends MeterBillingSystem {
}


// ─── Factory functions ───

export function makeMeterInterface(data: {
  interfaceId: string;
  lastRawReadingKwh: number;
  lastRawReadingTimestamp: number;
  lastRawTamperFlags: string;
  readingQueueSize: number;
  isConnected: boolean;
}): MeterInterface {
  return {
    interfaceId: data.interfaceId as MeterInterfaceId,
    lastRawReadingKwh: data.lastRawReadingKwh,
    lastRawReadingTimestamp: data.lastRawReadingTimestamp,
    lastRawTamperFlags: data.lastRawTamperFlags,
    readingQueueSize: data.readingQueueSize,
    isConnected: data.isConnected,
  };
}

export function makeMeterReadingValidator(data: {
  validatorId: string;
  lastAcceptedKwh: number;
  lastAcceptedTimestamp: number;
  lastComputedDelta: number;
  lastDeltaIsValid: boolean;
  anomalyCount: number;
  maxNegativeDeltaThreshold: number;
}): MeterReadingValidator {
  return {
    validatorId: data.validatorId as MeterReadingValidatorId,
    lastAcceptedKwh: data.lastAcceptedKwh,
    lastAcceptedTimestamp: data.lastAcceptedTimestamp,
    lastComputedDelta: data.lastComputedDelta,
    lastDeltaIsValid: data.lastDeltaIsValid,
    anomalyCount: data.anomalyCount,
    maxNegativeDeltaThreshold: data.maxNegativeDeltaThreshold,
  };
}

export function makeBillingEngine(data: {
  engineId: string;
  currentBillingTotal: number;
  lastAppliedIncrement: number;
  lastAppliedTimestamp: number;
  isFrozen: boolean;
  isCleared: boolean;
  acceptedReadingCount: number;
  compensationTotal: number;
}): BillingEngine {
  return {
    engineId: data.engineId as BillingEngineId,
    currentBillingTotal: data.currentBillingTotal,
    lastAppliedIncrement: data.lastAppliedIncrement,
    lastAppliedTimestamp: data.lastAppliedTimestamp,
    isFrozen: data.isFrozen,
    isCleared: data.isCleared,
    acceptedReadingCount: data.acceptedReadingCount,
    compensationTotal: data.compensationTotal,
  };
}

export function makeTamperMonitor(data: {
  monitorId: string;
  isTamperActive: boolean;
  lastTamperType: string;
  lastTamperDescription: string;
  lastTamperTimestamp: number;
  tamperEventCount: number;
  isManualClearancePending: boolean;
}): TamperMonitor {
  return {
    monitorId: data.monitorId as TamperMonitorId,
    isTamperActive: data.isTamperActive,
    lastTamperType: data.lastTamperType,
    lastTamperDescription: data.lastTamperDescription,
    lastTamperTimestamp: data.lastTamperTimestamp,
    tamperEventCount: data.tamperEventCount,
    isManualClearancePending: data.isManualClearancePending,
  };
}

export function makeAuditLogger(data: {
  loggerId: string;
  logEntryCount: number;
  retentionDays: number;
  lastEntryTimestamp: number;
}): AuditLogger {
  return {
    loggerId: data.loggerId as AuditLoggerId,
    logEntryCount: data.logEntryCount,
    retentionDays: data.retentionDays,
    lastEntryTimestamp: data.lastEntryTimestamp,
  };
}

export function makeMeterReadingChannel(data: {
  channelId: string;
  lastReadingTransferred: number;
  lastTamperFlagsTransferred: string;
  transferCount: number;
}): MeterReadingChannel {
  return {
    channelId: data.channelId as MeterReadingChannelId,
    lastReadingTransferred: data.lastReadingTransferred,
    lastTamperFlagsTransferred: data.lastTamperFlagsTransferred,
    transferCount: data.transferCount,
  };
}

export function makeTamperFreezeChannel(data: {
  channelId: string;
  freezeCount: number;
  clearanceCount: number;
  lastFreezeTimestamp: number;
}): TamperFreezeChannel {
  return {
    channelId: data.channelId as TamperFreezeChannelId,
    freezeCount: data.freezeCount,
    clearanceCount: data.clearanceCount,
    lastFreezeTimestamp: data.lastFreezeTimestamp,
  };
}

export function makeMeterReadingFlowDesign(data: {
  flowId: string;
  triggeredBy: string;
  validationOutcome: string;
  billingOutcome: string;
}): MeterReadingFlowDesign {
  return {
    flowId: data.flowId as MeterReadingFlowDesignId,
    triggeredBy: data.triggeredBy,
    validationOutcome: data.validationOutcome,
    billingOutcome: data.billingOutcome,
  };
}

export function makeCustomer(data: {
  customerId: string;
  name: string;
  accountNumber: string;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
    accountNumber: data.accountNumber,
  };
}

export function makeUtilityProvider(data: {
  utilityId: string;
  name: string;
  regulatorCode: string;
}): UtilityProvider {
  return {
    utilityId: data.utilityId as UtilityProviderId,
    name: data.name,
    regulatorCode: data.regulatorCode,
  };
}

export function makeFieldTechnician(data: {
  technicianId: string;
  certification: string;
}): FieldTechnician {
  return {
    technicianId: data.technicianId as FieldTechnicianId,
    certification: data.certification,
  };
}

export function makeRegulatoryAuthority(data: {
  regulatorId: string;
  jurisdiction: string;
}): RegulatoryAuthority {
  return {
    regulatorId: data.regulatorId as RegulatoryAuthorityId,
    jurisdiction: data.jurisdiction,
  };
}

export function makeMeterVendor(data: {
  vendorId: string;
  name: string;
}): MeterVendor {
  return {
    vendorId: data.vendorId as MeterVendorId,
    name: data.name,
  };
}

export function makeMonotonicConsumptionCommitment(data: {
  commitmentId: string;
  maxNegativeDeltaThreshold: number;
}): MonotonicConsumptionCommitment {
  return {
    commitmentId: data.commitmentId as MonotonicConsumptionCommitmentId,
    maxNegativeDeltaThreshold: data.maxNegativeDeltaThreshold,
  };
}

export function makeTamperFreezeCommitment(data: {
  commitmentId: string;
  tamperFreezeActive: boolean;
}): TamperFreezeCommitment {
  return {
    commitmentId: data.commitmentId as TamperFreezeCommitmentId,
    tamperFreezeActive: data.tamperFreezeActive,
  };
}

export function makeTamperClearanceCommitment(data: {
  commitmentId: string;
  tamperCleared: boolean;
}): TamperClearanceCommitment {
  return {
    commitmentId: data.commitmentId as TamperClearanceCommitmentId,
    tamperCleared: data.tamperCleared,
  };
}

export function makeReadingImmutabilityCommitment(data: {
  commitmentId: string;
  acceptedReadingCount: number;
}): ReadingImmutabilityCommitment {
  return {
    commitmentId: data.commitmentId as ReadingImmutabilityCommitmentId,
    acceptedReadingCount: data.acceptedReadingCount,
  };
}

export function makeMeterReading(data: {
  readingId: string;
  timestamp: number;
  kwh: number;
  tamperFlags: string;
}): MeterReading {
  return {
    readingId: data.readingId as MeterReadingId,
    timestamp: data.timestamp,
    kwh: data.kwh,
    tamperFlags: data.tamperFlags,
  };
}

export function makeConsumptionDelta(data: {
  deltaId: string;
  previousKwh: number;
  currentKwh: number;
  value: number;
}): ConsumptionDelta {
  return {
    deltaId: data.deltaId as ConsumptionDeltaId,
    previousKwh: data.previousKwh,
    currentKwh: data.currentKwh,
    value: data.value,
  };
}

export function makeTamperEvent(data: {
  eventId: string;
  timestamp: number;
  eventType: string;
  description: string;
}): TamperEvent {
  return {
    eventId: data.eventId as TamperEventId,
    timestamp: data.timestamp,
    eventType: data.eventType,
    description: data.description,
  };
}

export function makeBillingIncrement(data: {
  incrementId: string;
  delta: ConsumptionDelta;
  amount: number;
  appliedTimestamp: number;
}): BillingIncrement {
  return {
    incrementId: data.incrementId as BillingIncrementId,
    delta: data.delta,
    amount: data.amount,
    appliedTimestamp: data.appliedTimestamp,
  };
}

export function makeTamperClearance(data: {
  clearanceId: string;
  clearedBy: FieldTechnician;
  timestamp: number;
}): TamperClearance {
  return {
    clearanceId: data.clearanceId as TamperClearanceId,
    clearedBy: data.clearedBy,
    timestamp: data.timestamp,
  };
}

export function makeMeterReadingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MeterReadingFlow {
  return {
    flowId: data.flowId as MeterReadingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeMeterBillingSystem(data: {
  systemId: string;
  maxNegativeDeltaThreshold: number;
  tamperFreezeActive: boolean;
  tamperCleared: boolean;
  acceptedReadingCount: number;
}): MeterBillingSystem {
  return {
    systemId: data.systemId as MeterBillingSystemId,
    maxNegativeDeltaThreshold: data.maxNegativeDeltaThreshold,
    tamperFreezeActive: data.tamperFreezeActive,
    tamperCleared: data.tamperCleared,
    acceptedReadingCount: data.acceptedReadingCount,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  riskLevel: string;
  validationMethod: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    riskLevel: data.riskLevel,
    validationMethod: data.validationMethod,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for MeterInterface. Returns empty array when valid. */
export function validateMeterInterface(instance: MeterInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[MeterInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastRawReadingKwh >= 0))) {
    violations.push("[MeterInterface] invariant violated: self.lastRawReadingKwh >= 0.0");
  }
  if (!((instance.lastRawReadingTimestamp >= 0))) {
    violations.push("[MeterInterface] invariant violated: self.lastRawReadingTimestamp >= 0.0");
  }
  if (!((instance.readingQueueSize >= 0))) {
    violations.push("[MeterInterface] invariant violated: self.readingQueueSize >= 0");
  }
  if (!((instance.readingQueueSize <= 1000))) {
    violations.push("[MeterInterface] invariant violated: self.readingQueueSize <= 1000");
  }
  return violations;
}

/** Runtime invariant check for MeterReadingValidator. Returns empty array when valid. */
export function validateMeterReadingValidator(instance: MeterReadingValidator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.validatorId !== null))) {
    violations.push("[MeterReadingValidator] invariant violated: self.validatorId <> null");
  }
  if (!((instance.lastAcceptedKwh >= 0))) {
    violations.push("[MeterReadingValidator] invariant violated: self.lastAcceptedKwh >= 0.0");
  }
  if (!((instance.lastAcceptedTimestamp >= 0))) {
    violations.push("[MeterReadingValidator] invariant violated: self.lastAcceptedTimestamp >= 0.0");
  }
  if (!((instance.lastComputedDelta >= 0))) {
    violations.push("[MeterReadingValidator] invariant violated: self.lastComputedDelta >= 0.0");
  }
  if (!((instance.anomalyCount >= 0))) {
    violations.push("[MeterReadingValidator] invariant violated: self.anomalyCount >= 0");
  }
  if (!((instance.maxNegativeDeltaThreshold >= 0))) {
    violations.push("[MeterReadingValidator] invariant violated: self.maxNegativeDeltaThreshold >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for BillingEngine. Returns empty array when valid. */
export function validateBillingEngine(instance: BillingEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[BillingEngine] invariant violated: self.engineId <> null");
  }
  if (!((instance.currentBillingTotal >= 0))) {
    violations.push("[BillingEngine] invariant violated: self.currentBillingTotal >= 0.0");
  }
  if (!((instance.lastAppliedIncrement >= 0))) {
    violations.push("[BillingEngine] invariant violated: self.lastAppliedIncrement >= 0.0");
  }
  if (!((instance.lastAppliedTimestamp >= 0))) {
    violations.push("[BillingEngine] invariant violated: self.lastAppliedTimestamp >= 0.0");
  }
  if (!((instance.acceptedReadingCount >= 0))) {
    violations.push("[BillingEngine] invariant violated: self.acceptedReadingCount >= 0");
  }
  if (!((instance.compensationTotal >= 0))) {
    violations.push("[BillingEngine] invariant violated: self.compensationTotal >= 0.0");
  }
  if (!((!(instance.isFrozen) || !(instance.isCleared)))) {
    violations.push("[BillingEngine] invariant violated: not (self.isFrozen) or (not self.isCleared)");
  }
  if (!((!(instance.isCleared) || !(instance.isFrozen)))) {
    violations.push("[BillingEngine] invariant violated: not (self.isCleared) or (not self.isFrozen)");
  }
  return violations;
}

/** Runtime invariant check for TamperMonitor. Returns empty array when valid. */
export function validateTamperMonitor(instance: TamperMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[TamperMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.lastTamperTimestamp >= 0))) {
    violations.push("[TamperMonitor] invariant violated: self.lastTamperTimestamp >= 0.0");
  }
  if (!((instance.tamperEventCount >= 0))) {
    violations.push("[TamperMonitor] invariant violated: self.tamperEventCount >= 0");
  }
  if (!((!(instance.isTamperActive) || !(instance.isManualClearancePending)))) {
    violations.push("[TamperMonitor] invariant violated: not (self.isTamperActive) or (not self.isManualClearancePending)");
  }
  return violations;
}

/** Runtime invariant check for AuditLogger. Returns empty array when valid. */
export function validateAuditLogger(instance: AuditLogger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.loggerId !== null))) {
    violations.push("[AuditLogger] invariant violated: self.loggerId <> null");
  }
  if (!((instance.logEntryCount >= 0))) {
    violations.push("[AuditLogger] invariant violated: self.logEntryCount >= 0");
  }
  if (!((instance.retentionDays >= 365))) {
    violations.push("[AuditLogger] invariant violated: self.retentionDays >= 365");
  }
  if (!((instance.lastEntryTimestamp >= 0))) {
    violations.push("[AuditLogger] invariant violated: self.lastEntryTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for MeterReadingChannel. Returns empty array when valid. */
export function validateMeterReadingChannel(instance: MeterReadingChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[MeterReadingChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastReadingTransferred >= 0))) {
    violations.push("[MeterReadingChannel] invariant violated: self.lastReadingTransferred >= 0.0");
  }
  if (!((instance.transferCount >= 0))) {
    violations.push("[MeterReadingChannel] invariant violated: self.transferCount >= 0");
  }
  if (!((instance.lastTamperFlagsTransferred !== null))) {
    violations.push("[MeterReadingChannel] invariant violated: self.lastTamperFlagsTransferred <> null");
  }
  return violations;
}

/** Runtime invariant check for TamperFreezeChannel. Returns empty array when valid. */
export function validateTamperFreezeChannel(instance: TamperFreezeChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[TamperFreezeChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.freezeCount >= 0))) {
    violations.push("[TamperFreezeChannel] invariant violated: self.freezeCount >= 0");
  }
  if (!((instance.clearanceCount >= 0))) {
    violations.push("[TamperFreezeChannel] invariant violated: self.clearanceCount >= 0");
  }
  if (!((instance.lastFreezeTimestamp >= 0))) {
    violations.push("[TamperFreezeChannel] invariant violated: self.lastFreezeTimestamp >= 0.0");
  }
  if (!((instance.freezeCount >= instance.clearanceCount))) {
    violations.push("[TamperFreezeChannel] invariant violated: self.freezeCount >= self.clearanceCount");
  }
  return violations;
}

/** Runtime invariant check for MeterReadingFlowDesign. Returns empty array when valid. */
export function validateMeterReadingFlowDesign(instance: MeterReadingFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeterReadingFlowDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[MeterReadingFlowDesign] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.validationOutcome !== null))) {
    violations.push("[MeterReadingFlowDesign] invariant violated: self.validationOutcome <> null");
  }
  if (!((instance.billingOutcome !== null))) {
    violations.push("[MeterReadingFlowDesign] invariant violated: self.billingOutcome <> null");
  }
  return violations;
}

/** Runtime invariant check for Customer. Returns empty array when valid. */
export function validateCustomer(instance: Customer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.customerId !== null))) {
    violations.push("[Customer] invariant violated: self.customerId <> null");
  }
  return violations;
}

/** Runtime invariant check for UtilityProvider. Returns empty array when valid. */
export function validateUtilityProvider(instance: UtilityProvider): readonly string[] {
  const violations: string[] = [];
  if (!((instance.utilityId !== null))) {
    violations.push("[UtilityProvider] invariant violated: self.utilityId <> null");
  }
  return violations;
}

/** Runtime invariant check for FieldTechnician. Returns empty array when valid. */
export function validateFieldTechnician(instance: FieldTechnician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.technicianId !== null))) {
    violations.push("[FieldTechnician] invariant violated: self.technicianId <> null");
  }
  return violations;
}

/** Runtime invariant check for RegulatoryAuthority. Returns empty array when valid. */
export function validateRegulatoryAuthority(instance: RegulatoryAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[RegulatoryAuthority] invariant violated: self.regulatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for MeterVendor. Returns empty array when valid. */
export function validateMeterVendor(instance: MeterVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[MeterVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for MonotonicConsumption. Returns empty array when valid. */
export function validateMonotonicConsumption(instance: MonotonicConsumption): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MonotonicConsumption] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for TamperHandling. Returns empty array when valid. */
export function validateTamperHandling(instance: TamperHandling): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[TamperHandling] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ReadingImmutability. Returns empty array when valid. */
export function validateReadingImmutability(instance: ReadingImmutability): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ReadingImmutability] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeterReading. Returns empty array when valid. */
export function validateMeterReading(instance: MeterReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[MeterReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[MeterReading] invariant violated: self.timestamp >= 0.0");
  }
  if (!((instance.kwh >= 0))) {
    violations.push("[MeterReading] invariant violated: self.kwh >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ConsumptionDelta. Returns empty array when valid. */
export function validateConsumptionDelta(instance: ConsumptionDelta): readonly string[] {
  const violations: string[] = [];
  if (!((instance.deltaId !== null))) {
    violations.push("[ConsumptionDelta] invariant violated: self.deltaId <> null");
  }
  if (!((instance.value >= 0))) {
    violations.push("[ConsumptionDelta] invariant violated: self.value >= 0.0");
  }
  if (!((instance.currentKwh >= instance.previousKwh))) {
    violations.push("[ConsumptionDelta] invariant violated: self.currentKwh >= self.previousKwh");
  }
  return violations;
}

/** Runtime invariant check for TamperEvent. Returns empty array when valid. */
export function validateTamperEvent(instance: TamperEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eventId !== null))) {
    violations.push("[TamperEvent] invariant violated: self.eventId <> null");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[TamperEvent] invariant violated: self.timestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for BillingIncrement. Returns empty array when valid. */
export function validateBillingIncrement(instance: BillingIncrement): readonly string[] {
  const violations: string[] = [];
  if (!((instance.incrementId !== null))) {
    violations.push("[BillingIncrement] invariant violated: self.incrementId <> null");
  }
  if (!((instance.amount >= 0))) {
    violations.push("[BillingIncrement] invariant violated: self.amount >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for TamperClearance. Returns empty array when valid. */
export function validateTamperClearance(instance: TamperClearance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearanceId !== null))) {
    violations.push("[TamperClearance] invariant violated: self.clearanceId <> null");
  }
  if (!((instance.clearedBy !== null))) {
    violations.push("[TamperClearance] invariant violated: self.clearedBy <> null");
  }
  return violations;
}

/** Runtime invariant check for MeterReadingFlow. Returns empty array when valid. */
export function validateMeterReadingFlow(instance: MeterReadingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeterReadingFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for MeterBillingSystem. Returns empty array when valid. */
export function validateMeterBillingSystem(instance: MeterBillingSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeterBillingSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxNegativeDeltaThreshold >= 0))) {
    violations.push("[MeterBillingSystem] invariant violated: self.maxNegativeDeltaThreshold >= 0.0");
  }
  if (!(!(instance.tamperFreezeActive))) {
    violations.push("[MeterBillingSystem] invariant violated: not self.tamperFreezeActive");
  }
  if (!(instance.tamperCleared)) {
    violations.push("[MeterBillingSystem] invariant violated: self.tamperCleared");
  }
  if (!((instance.acceptedReadingCount >= 0))) {
    violations.push("[MeterBillingSystem] invariant violated: self.acceptedReadingCount >= 0");
  }
  if (!((instance.acceptedReadingCount >= 0))) {
    violations.push("[MeterBillingSystem] invariant violated: self.acceptedReadingCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for WeeeCompliant. Returns empty array when valid. */
export function validateWeeeCompliant(instance: WeeeCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.weeeWasteCategoryCode !== null))) {
    violations.push("[WeeeCompliant] invariant violated: self.weeeWasteCategoryCode <> null");
  }
  if (!((instance.recyclableComponentsPct >= 0))) {
    violations.push("[WeeeCompliant] invariant violated: self.recyclableComponentsPct >= 0.0");
  }
  if (!((instance.recyclableComponentsPct <= 100))) {
    violations.push("[WeeeCompliant] invariant violated: self.recyclableComponentsPct <= 100.0");
  }
  return violations;
}

/** Runtime invariant check for MidCompliant. Returns empty array when valid. */
export function validateMidCompliant(instance: MidCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(((instance.midAccuracyClass === "B") || (instance.midAccuracyClass === "C")))) {
    violations.push("[MidCompliant] invariant violated: self.midAccuracyClass = 'B' or self.midAccuracyClass = 'C'");
  }
  if (!((instance.midTamperDetectionRequired === true))) {
    violations.push("[MidCompliant] invariant violated: self.midTamperDetectionRequired = true");
  }
  return violations;
}

/** Runtime invariant check for NistSmartGridFramework. Returns empty array when valid. */
export function validateNistSmartGridFramework(instance: NistSmartGridFramework): readonly string[] {
  const violations: string[] = [];
  if (!((instance.nistAuditRetentionDays >= 365))) {
    violations.push("[NistSmartGridFramework] invariant violated: self.nistAuditRetentionDays >= 365");
  }
  if (!((instance.nistTamperEvidenceRequired === true))) {
    violations.push("[NistSmartGridFramework] invariant violated: self.nistTamperEvidenceRequired = true");
  }
  return violations;
}

/** Runtime invariant check for GdprDataMinimization. Returns empty array when valid. */
export function validateGdprDataMinimization(instance: GdprDataMinimization): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gdprRetentionLimitDays >= 0))) {
    violations.push("[GdprDataMinimization] invariant violated: self.gdprRetentionLimitDays >= 0");
  }
  if (!((instance.gdprRetentionLimitDays <= 365))) {
    violations.push("[GdprDataMinimization] invariant violated: self.gdprRetentionLimitDays <= 365");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleReadings. Returns empty array when valid. */
export function validatePhysicallyPlausibleReadings(instance: PhysicallyPlausibleReadings): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxNegativeDeltaThreshold >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TamperImmutableInvariants. Returns empty array when valid. */
export function validateTamperImmutableInvariants(instance: TamperImmutableInvariants): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.tamperFreezeActive) or (not bearer.tamperCleared) — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.tamperCleared) or (not bearer.tamperFreezeActive) — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((((instance.riskLevel === "LOW") || (instance.riskLevel === "MEDIUM")) || (instance.riskLevel === "HIGH")))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.riskLevel = 'LOW' or self.riskLevel = 'MEDIUM' or self.riskLevel = 'HIGH'");
  }
  return violations;
}

/** Runtime invariant check for MeterBillingSystemFormalized. Returns empty array when valid. */
export function validateMeterBillingSystemFormalized(instance: MeterBillingSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeterBillingSystemFormalized] invariant violated: self.systemId <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for MeterInterface.receiveReading. User supplies this. */
export type MeterInterfaceReceiveReadingImpl = (self: MeterInterface, kwh: number, timestamp: number, tamperFlags: string) => { self: MeterInterface; modified: { lastRawReadingKwh: unknown; lastRawReadingTimestamp: unknown; lastRawTamperFlags: unknown; readingQueueSize: unknown } };

/** Contract-checking wrapper for MeterInterface.receiveReading. */
export function wrapMeterInterfaceReceiveReading(impl: MeterInterfaceReceiveReadingImpl): (self: MeterInterface, kwh: number, timestamp: number, tamperFlags: string) => MeterInterface {
  return (self, kwh, timestamp, tamperFlags) => {
    const preViolations: string[] = [];
    if (!(self.isConnected)) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: self.isConnected");
    }
    if (!((kwh >= 0))) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: kwh >= 0.0");
    }
    if (!((timestamp >= self.lastRawReadingTimestamp))) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: timestamp >= self.lastRawReadingTimestamp");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: tamperFlags <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.readingQueueSize": self.readingQueueSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, kwh, timestamp, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.lastRawReadingKwh === kwh))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.lastRawReadingKwh = kwh");
      }
      if (!((__result.self.lastRawReadingTimestamp === timestamp))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.lastRawReadingTimestamp = timestamp");
      }
      if (!((__result.self.lastRawTamperFlags === tamperFlags))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.lastRawTamperFlags = tamperFlags");
      }
      if (!((__result.self.readingQueueSize === (__pre["self.readingQueueSize"] + 1)))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.readingQueueSize = self.readingQueueSize@pre + 1");
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

/** Impl signature for MeterInterface.receiveReading (async). User supplies this. */
export type MeterInterfaceReceiveReadingAsyncImpl = (self: MeterInterface, kwh: number, timestamp: number, tamperFlags: string) => Promise<{ self: MeterInterface; modified: { lastRawReadingKwh: unknown; lastRawReadingTimestamp: unknown; lastRawTamperFlags: unknown; readingQueueSize: unknown } }>;

/** Contract-checking wrapper for MeterInterface.receiveReading (async). */
export function wrapMeterInterfaceReceiveReadingAsync(impl: MeterInterfaceReceiveReadingAsyncImpl): (self: MeterInterface, kwh: number, timestamp: number, tamperFlags: string) => Promise<MeterInterface> {
  return async (self, kwh, timestamp, tamperFlags) => {
    const preViolations: string[] = [];
    if (!(self.isConnected)) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: self.isConnected");
    }
    if (!((kwh >= 0))) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: kwh >= 0.0");
    }
    if (!((timestamp >= self.lastRawReadingTimestamp))) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: timestamp >= self.lastRawReadingTimestamp");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterInterface.receiveReading] pre violated: tamperFlags <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.readingQueueSize": self.readingQueueSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, kwh, timestamp, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.lastRawReadingKwh === kwh))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.lastRawReadingKwh = kwh");
      }
      if (!((__result.self.lastRawReadingTimestamp === timestamp))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.lastRawReadingTimestamp = timestamp");
      }
      if (!((__result.self.lastRawTamperFlags === tamperFlags))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.lastRawTamperFlags = tamperFlags");
      }
      if (!((__result.self.readingQueueSize === (__pre["self.readingQueueSize"] + 1)))) {
        postViolations.push("[MeterInterface.receiveReading] post violated: self.readingQueueSize = self.readingQueueSize@pre + 1");
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

/** Impl signature for MeterInterface.reportConnectionStatus. User supplies this. */
export type MeterInterfaceReportConnectionStatusImpl = (self: MeterInterface, status: boolean) => { self: MeterInterface; modified: { isConnected: unknown } };

/** Contract-checking wrapper for MeterInterface.reportConnectionStatus. */
export function wrapMeterInterfaceReportConnectionStatus(impl: MeterInterfaceReportConnectionStatusImpl): (self: MeterInterface, status: boolean) => MeterInterface {
  return (self, status) => {
    const preViolations: string[] = [];
    if (!((status !== self.isConnected))) {
      preViolations.push("[MeterInterface.reportConnectionStatus] pre violated: status <> self.isConnected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, status);
      const postViolations: string[] = [];
      if (!((__result.self.isConnected === status))) {
        postViolations.push("[MeterInterface.reportConnectionStatus] post violated: self.isConnected = status");
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

/** Impl signature for MeterInterface.reportConnectionStatus (async). User supplies this. */
export type MeterInterfaceReportConnectionStatusAsyncImpl = (self: MeterInterface, status: boolean) => Promise<{ self: MeterInterface; modified: { isConnected: unknown } }>;

/** Contract-checking wrapper for MeterInterface.reportConnectionStatus (async). */
export function wrapMeterInterfaceReportConnectionStatusAsync(impl: MeterInterfaceReportConnectionStatusAsyncImpl): (self: MeterInterface, status: boolean) => Promise<MeterInterface> {
  return async (self, status) => {
    const preViolations: string[] = [];
    if (!((status !== self.isConnected))) {
      preViolations.push("[MeterInterface.reportConnectionStatus] pre violated: status <> self.isConnected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, status);
      const postViolations: string[] = [];
      if (!((__result.self.isConnected === status))) {
        postViolations.push("[MeterInterface.reportConnectionStatus] post violated: self.isConnected = status");
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

/** Impl signature for MeterReadingValidator.validateReading. User supplies this. */
export type MeterReadingValidatorValidateReadingImpl = (self: MeterReadingValidator, kwh: number, timestamp: number, tamperFlags: string) => { self: MeterReadingValidator; modified: { lastComputedDelta: unknown; lastDeltaIsValid: unknown; anomalyCount: unknown; lastAcceptedKwh: unknown; lastAcceptedTimestamp: unknown } };

/** Contract-checking wrapper for MeterReadingValidator.validateReading. */
export function wrapMeterReadingValidatorValidateReading(impl: MeterReadingValidatorValidateReadingImpl): (self: MeterReadingValidator, kwh: number, timestamp: number, tamperFlags: string) => MeterReadingValidator {
  return (self, kwh, timestamp, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((kwh >= 0))) {
      preViolations.push("[MeterReadingValidator.validateReading] pre violated: kwh >= 0.0");
    }
    if (!((timestamp >= self.lastAcceptedTimestamp))) {
      preViolations.push("[MeterReadingValidator.validateReading] pre violated: timestamp >= self.lastAcceptedTimestamp");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterReadingValidator.validateReading] pre violated: tamperFlags <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.anomalyCount": self.anomalyCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, kwh, timestamp, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.lastComputedDelta === (kwh - __result.self.lastAcceptedKwh)))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastComputedDelta = kwh - self.lastAcceptedKwh");
      }
      if (!(((__result.self.lastDeltaIsValid === (kwh >= __result.self.lastAcceptedKwh)) && (tamperFlags === "")))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastDeltaIsValid = (kwh >= self.lastAcceptedKwh) and (tamperFlags = '')");
      }
      if (!(((((kwh < __result.self.lastAcceptedKwh) || (tamperFlags !== ""))) ? ((__result.self.anomalyCount === (__pre["self.anomalyCount"] + 1))) : ((__result.self.anomalyCount === __pre["self.anomalyCount"]))))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: if (kwh < self.lastAcceptedKwh) or (tamperFlags <> '') then\n            self.anomalyCount = self.anomalyCount@pre + 1\n          else\n            self.anomalyCount = self.anomalyCount@pre\n          endif");
      }
      if (!((__result.self.lastAcceptedKwh === kwh))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastAcceptedKwh = kwh");
      }
      if (!((__result.self.lastAcceptedTimestamp === timestamp))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastAcceptedTimestamp = timestamp");
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

/** Impl signature for MeterReadingValidator.validateReading (async). User supplies this. */
export type MeterReadingValidatorValidateReadingAsyncImpl = (self: MeterReadingValidator, kwh: number, timestamp: number, tamperFlags: string) => Promise<{ self: MeterReadingValidator; modified: { lastComputedDelta: unknown; lastDeltaIsValid: unknown; anomalyCount: unknown; lastAcceptedKwh: unknown; lastAcceptedTimestamp: unknown } }>;

/** Contract-checking wrapper for MeterReadingValidator.validateReading (async). */
export function wrapMeterReadingValidatorValidateReadingAsync(impl: MeterReadingValidatorValidateReadingAsyncImpl): (self: MeterReadingValidator, kwh: number, timestamp: number, tamperFlags: string) => Promise<MeterReadingValidator> {
  return async (self, kwh, timestamp, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((kwh >= 0))) {
      preViolations.push("[MeterReadingValidator.validateReading] pre violated: kwh >= 0.0");
    }
    if (!((timestamp >= self.lastAcceptedTimestamp))) {
      preViolations.push("[MeterReadingValidator.validateReading] pre violated: timestamp >= self.lastAcceptedTimestamp");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterReadingValidator.validateReading] pre violated: tamperFlags <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.anomalyCount": self.anomalyCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, kwh, timestamp, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.lastComputedDelta === (kwh - __result.self.lastAcceptedKwh)))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastComputedDelta = kwh - self.lastAcceptedKwh");
      }
      if (!(((__result.self.lastDeltaIsValid === (kwh >= __result.self.lastAcceptedKwh)) && (tamperFlags === "")))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastDeltaIsValid = (kwh >= self.lastAcceptedKwh) and (tamperFlags = '')");
      }
      if (!(((((kwh < __result.self.lastAcceptedKwh) || (tamperFlags !== ""))) ? ((__result.self.anomalyCount === (__pre["self.anomalyCount"] + 1))) : ((__result.self.anomalyCount === __pre["self.anomalyCount"]))))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: if (kwh < self.lastAcceptedKwh) or (tamperFlags <> '') then\n            self.anomalyCount = self.anomalyCount@pre + 1\n          else\n            self.anomalyCount = self.anomalyCount@pre\n          endif");
      }
      if (!((__result.self.lastAcceptedKwh === kwh))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastAcceptedKwh = kwh");
      }
      if (!((__result.self.lastAcceptedTimestamp === timestamp))) {
        postViolations.push("[MeterReadingValidator.validateReading] post violated: self.lastAcceptedTimestamp = timestamp");
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

/** Impl signature for BillingEngine.applyIncrement. User supplies this. */
export type BillingEngineApplyIncrementImpl = (self: BillingEngine, delta: number, timestamp: number) => { self: BillingEngine; modified: { currentBillingTotal: unknown; lastAppliedIncrement: unknown; lastAppliedTimestamp: unknown; acceptedReadingCount: unknown } };

/** Contract-checking wrapper for BillingEngine.applyIncrement. */
export function wrapBillingEngineApplyIncrement(impl: BillingEngineApplyIncrementImpl): (self: BillingEngine, delta: number, timestamp: number) => BillingEngine {
  return (self, delta, timestamp) => {
    const preViolations: string[] = [];
    if (!((delta >= 0))) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: delta >= 0.0");
    }
    if (!((timestamp >= self.lastAppliedTimestamp))) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: timestamp >= self.lastAppliedTimestamp");
    }
    if (!(!(self.isFrozen))) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: not self.isFrozen");
    }
    if (!(self.isCleared)) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: self.isCleared");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentBillingTotal": self.currentBillingTotal,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, delta, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.currentBillingTotal === (__pre["self.currentBillingTotal"] + delta)))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.currentBillingTotal = self.currentBillingTotal@pre + delta");
      }
      if (!((__result.self.lastAppliedIncrement === delta))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.lastAppliedIncrement = delta");
      }
      if (!((__result.self.lastAppliedTimestamp === timestamp))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.lastAppliedTimestamp = timestamp");
      }
      if (!((__result.self.acceptedReadingCount === (__pre["self.acceptedReadingCount"] + 1)))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre + 1");
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

/** Impl signature for BillingEngine.applyIncrement (async). User supplies this. */
export type BillingEngineApplyIncrementAsyncImpl = (self: BillingEngine, delta: number, timestamp: number) => Promise<{ self: BillingEngine; modified: { currentBillingTotal: unknown; lastAppliedIncrement: unknown; lastAppliedTimestamp: unknown; acceptedReadingCount: unknown } }>;

/** Contract-checking wrapper for BillingEngine.applyIncrement (async). */
export function wrapBillingEngineApplyIncrementAsync(impl: BillingEngineApplyIncrementAsyncImpl): (self: BillingEngine, delta: number, timestamp: number) => Promise<BillingEngine> {
  return async (self, delta, timestamp) => {
    const preViolations: string[] = [];
    if (!((delta >= 0))) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: delta >= 0.0");
    }
    if (!((timestamp >= self.lastAppliedTimestamp))) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: timestamp >= self.lastAppliedTimestamp");
    }
    if (!(!(self.isFrozen))) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: not self.isFrozen");
    }
    if (!(self.isCleared)) {
      preViolations.push("[BillingEngine.applyIncrement] pre violated: self.isCleared");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentBillingTotal": self.currentBillingTotal,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, delta, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.currentBillingTotal === (__pre["self.currentBillingTotal"] + delta)))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.currentBillingTotal = self.currentBillingTotal@pre + delta");
      }
      if (!((__result.self.lastAppliedIncrement === delta))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.lastAppliedIncrement = delta");
      }
      if (!((__result.self.lastAppliedTimestamp === timestamp))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.lastAppliedTimestamp = timestamp");
      }
      if (!((__result.self.acceptedReadingCount === (__pre["self.acceptedReadingCount"] + 1)))) {
        postViolations.push("[BillingEngine.applyIncrement] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre + 1");
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

/** Impl signature for BillingEngine.freezeBilling. User supplies this. */
export type BillingEngineFreezeBillingImpl = (self: BillingEngine) => { self: BillingEngine; modified: { isFrozen: unknown; isCleared: unknown } };

/** Contract-checking wrapper for BillingEngine.freezeBilling. */
export function wrapBillingEngineFreezeBilling(impl: BillingEngineFreezeBillingImpl): (self: BillingEngine) => BillingEngine {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isFrozen))) {
      preViolations.push("[BillingEngine.freezeBilling] pre violated: not self.isFrozen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === true))) {
        postViolations.push("[BillingEngine.freezeBilling] post violated: self.isFrozen = true");
      }
      if (!((__result.self.isCleared === false))) {
        postViolations.push("[BillingEngine.freezeBilling] post violated: self.isCleared = false");
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

/** Impl signature for BillingEngine.freezeBilling (async). User supplies this. */
export type BillingEngineFreezeBillingAsyncImpl = (self: BillingEngine) => Promise<{ self: BillingEngine; modified: { isFrozen: unknown; isCleared: unknown } }>;

/** Contract-checking wrapper for BillingEngine.freezeBilling (async). */
export function wrapBillingEngineFreezeBillingAsync(impl: BillingEngineFreezeBillingAsyncImpl): (self: BillingEngine) => Promise<BillingEngine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isFrozen))) {
      preViolations.push("[BillingEngine.freezeBilling] pre violated: not self.isFrozen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === true))) {
        postViolations.push("[BillingEngine.freezeBilling] post violated: self.isFrozen = true");
      }
      if (!((__result.self.isCleared === false))) {
        postViolations.push("[BillingEngine.freezeBilling] post violated: self.isCleared = false");
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

/** Impl signature for BillingEngine.clearFreeze. User supplies this. */
export type BillingEngineClearFreezeImpl = (self: BillingEngine) => { self: BillingEngine; modified: { isFrozen: unknown; isCleared: unknown } };

/** Contract-checking wrapper for BillingEngine.clearFreeze. */
export function wrapBillingEngineClearFreeze(impl: BillingEngineClearFreezeImpl): (self: BillingEngine) => BillingEngine {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isFrozen)) {
      preViolations.push("[BillingEngine.clearFreeze] pre violated: self.isFrozen");
    }
    if (!(!(self.isCleared))) {
      preViolations.push("[BillingEngine.clearFreeze] pre violated: not self.isCleared");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === false))) {
        postViolations.push("[BillingEngine.clearFreeze] post violated: self.isFrozen = false");
      }
      if (!((__result.self.isCleared === true))) {
        postViolations.push("[BillingEngine.clearFreeze] post violated: self.isCleared = true");
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

/** Impl signature for BillingEngine.clearFreeze (async). User supplies this. */
export type BillingEngineClearFreezeAsyncImpl = (self: BillingEngine) => Promise<{ self: BillingEngine; modified: { isFrozen: unknown; isCleared: unknown } }>;

/** Contract-checking wrapper for BillingEngine.clearFreeze (async). */
export function wrapBillingEngineClearFreezeAsync(impl: BillingEngineClearFreezeAsyncImpl): (self: BillingEngine) => Promise<BillingEngine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isFrozen)) {
      preViolations.push("[BillingEngine.clearFreeze] pre violated: self.isFrozen");
    }
    if (!(!(self.isCleared))) {
      preViolations.push("[BillingEngine.clearFreeze] pre violated: not self.isCleared");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === false))) {
        postViolations.push("[BillingEngine.clearFreeze] post violated: self.isFrozen = false");
      }
      if (!((__result.self.isCleared === true))) {
        postViolations.push("[BillingEngine.clearFreeze] post violated: self.isCleared = true");
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

/** Impl signature for BillingEngine.recordCompensation. User supplies this. */
export type BillingEngineRecordCompensationImpl = (self: BillingEngine, adjustment: number) => { self: BillingEngine; modified: { compensationTotal: unknown; currentBillingTotal: unknown; acceptedReadingCount: unknown } };

/** Contract-checking wrapper for BillingEngine.recordCompensation. */
export function wrapBillingEngineRecordCompensation(impl: BillingEngineRecordCompensationImpl): (self: BillingEngine, adjustment: number) => BillingEngine {
  return (self, adjustment) => {
    const preViolations: string[] = [];
    if (!((adjustment !== 0))) {
      preViolations.push("[BillingEngine.recordCompensation] pre violated: adjustment <> 0.0");
    }
    if (!(!(self.isFrozen))) {
      preViolations.push("[BillingEngine.recordCompensation] pre violated: not self.isFrozen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.compensationTotal": self.compensationTotal,
      "self.currentBillingTotal": self.currentBillingTotal,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, adjustment);
      const postViolations: string[] = [];
      if (!((((adjustment >= 0)) ? ((__result.self.compensationTotal === (__pre["self.compensationTotal"] + adjustment))) : ((__result.self.compensationTotal === (__pre["self.compensationTotal"] + (0 - adjustment))))))) {
        postViolations.push("[BillingEngine.recordCompensation] post violated: if adjustment >= 0.0 then\n            self.compensationTotal = self.compensationTotal@pre + adjustment\n          else\n            self.compensationTotal = self.compensationTotal@pre + (0.0 - adjustment)\n          endif");
      }
      if (!((__result.self.currentBillingTotal === (__pre["self.currentBillingTotal"] + adjustment)))) {
        postViolations.push("[BillingEngine.recordCompensation] post violated: self.currentBillingTotal = self.currentBillingTotal@pre + adjustment");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[BillingEngine.recordCompensation] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for BillingEngine.recordCompensation (async). User supplies this. */
export type BillingEngineRecordCompensationAsyncImpl = (self: BillingEngine, adjustment: number) => Promise<{ self: BillingEngine; modified: { compensationTotal: unknown; currentBillingTotal: unknown; acceptedReadingCount: unknown } }>;

/** Contract-checking wrapper for BillingEngine.recordCompensation (async). */
export function wrapBillingEngineRecordCompensationAsync(impl: BillingEngineRecordCompensationAsyncImpl): (self: BillingEngine, adjustment: number) => Promise<BillingEngine> {
  return async (self, adjustment) => {
    const preViolations: string[] = [];
    if (!((adjustment !== 0))) {
      preViolations.push("[BillingEngine.recordCompensation] pre violated: adjustment <> 0.0");
    }
    if (!(!(self.isFrozen))) {
      preViolations.push("[BillingEngine.recordCompensation] pre violated: not self.isFrozen");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.compensationTotal": self.compensationTotal,
      "self.currentBillingTotal": self.currentBillingTotal,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, adjustment);
      const postViolations: string[] = [];
      if (!((((adjustment >= 0)) ? ((__result.self.compensationTotal === (__pre["self.compensationTotal"] + adjustment))) : ((__result.self.compensationTotal === (__pre["self.compensationTotal"] + (0 - adjustment))))))) {
        postViolations.push("[BillingEngine.recordCompensation] post violated: if adjustment >= 0.0 then\n            self.compensationTotal = self.compensationTotal@pre + adjustment\n          else\n            self.compensationTotal = self.compensationTotal@pre + (0.0 - adjustment)\n          endif");
      }
      if (!((__result.self.currentBillingTotal === (__pre["self.currentBillingTotal"] + adjustment)))) {
        postViolations.push("[BillingEngine.recordCompensation] post violated: self.currentBillingTotal = self.currentBillingTotal@pre + adjustment");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[BillingEngine.recordCompensation] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for TamperMonitor.recordTamper. User supplies this. */
export type TamperMonitorRecordTamperImpl = (self: TamperMonitor, eventType: string, description: string) => { self: TamperMonitor; modified: { isTamperActive: unknown; lastTamperType: unknown; lastTamperDescription: unknown; lastTamperTimestamp: unknown; tamperEventCount: unknown } };

/** Contract-checking wrapper for TamperMonitor.recordTamper. */
export function wrapTamperMonitorRecordTamper(impl: TamperMonitorRecordTamperImpl): (self: TamperMonitor, eventType: string, description: string) => TamperMonitor {
  return (self, eventType, description) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[TamperMonitor.recordTamper] pre violated: eventType <> null");
    }
    if (!((description !== null))) {
      preViolations.push("[TamperMonitor.recordTamper] pre violated: description <> null");
    }
    if (!(!(self.isTamperActive))) {
      preViolations.push("[TamperMonitor.recordTamper] pre violated: not self.isTamperActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTamperTimestamp": self.lastTamperTimestamp,
      "self.tamperEventCount": self.tamperEventCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, eventType, description);
      const postViolations: string[] = [];
      if (!((__result.self.isTamperActive === true))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.isTamperActive = true");
      }
      if (!((__result.self.lastTamperType === eventType))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.lastTamperType = eventType");
      }
      if (!((__result.self.lastTamperDescription === description))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.lastTamperDescription = description");
      }
      if (!((__result.self.lastTamperTimestamp === (__pre["self.lastTamperTimestamp"] + 1)))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.lastTamperTimestamp = self.lastTamperTimestamp@pre + 1.0");
      }
      if (!((__result.self.tamperEventCount === (__pre["self.tamperEventCount"] + 1)))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.tamperEventCount = self.tamperEventCount@pre + 1");
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

/** Impl signature for TamperMonitor.recordTamper (async). User supplies this. */
export type TamperMonitorRecordTamperAsyncImpl = (self: TamperMonitor, eventType: string, description: string) => Promise<{ self: TamperMonitor; modified: { isTamperActive: unknown; lastTamperType: unknown; lastTamperDescription: unknown; lastTamperTimestamp: unknown; tamperEventCount: unknown } }>;

/** Contract-checking wrapper for TamperMonitor.recordTamper (async). */
export function wrapTamperMonitorRecordTamperAsync(impl: TamperMonitorRecordTamperAsyncImpl): (self: TamperMonitor, eventType: string, description: string) => Promise<TamperMonitor> {
  return async (self, eventType, description) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[TamperMonitor.recordTamper] pre violated: eventType <> null");
    }
    if (!((description !== null))) {
      preViolations.push("[TamperMonitor.recordTamper] pre violated: description <> null");
    }
    if (!(!(self.isTamperActive))) {
      preViolations.push("[TamperMonitor.recordTamper] pre violated: not self.isTamperActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTamperTimestamp": self.lastTamperTimestamp,
      "self.tamperEventCount": self.tamperEventCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, eventType, description);
      const postViolations: string[] = [];
      if (!((__result.self.isTamperActive === true))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.isTamperActive = true");
      }
      if (!((__result.self.lastTamperType === eventType))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.lastTamperType = eventType");
      }
      if (!((__result.self.lastTamperDescription === description))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.lastTamperDescription = description");
      }
      if (!((__result.self.lastTamperTimestamp === (__pre["self.lastTamperTimestamp"] + 1)))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.lastTamperTimestamp = self.lastTamperTimestamp@pre + 1.0");
      }
      if (!((__result.self.tamperEventCount === (__pre["self.tamperEventCount"] + 1)))) {
        postViolations.push("[TamperMonitor.recordTamper] post violated: self.tamperEventCount = self.tamperEventCount@pre + 1");
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

/** Impl signature for TamperMonitor.recordClearance. User supplies this. */
export type TamperMonitorRecordClearanceImpl = (self: TamperMonitor, clearanceId: string) => { self: TamperMonitor; modified: { isTamperActive: unknown; isManualClearancePending: unknown } };

/** Contract-checking wrapper for TamperMonitor.recordClearance. */
export function wrapTamperMonitorRecordClearance(impl: TamperMonitorRecordClearanceImpl): (self: TamperMonitor, clearanceId: string) => TamperMonitor {
  return (self, clearanceId) => {
    const preViolations: string[] = [];
    if (!((clearanceId !== null))) {
      preViolations.push("[TamperMonitor.recordClearance] pre violated: clearanceId <> null");
    }
    if (!(self.isTamperActive)) {
      preViolations.push("[TamperMonitor.recordClearance] pre violated: self.isTamperActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clearanceId);
      const postViolations: string[] = [];
      if (!((__result.self.isTamperActive === false))) {
        postViolations.push("[TamperMonitor.recordClearance] post violated: self.isTamperActive = false");
      }
      if (!((__result.self.isManualClearancePending === true))) {
        postViolations.push("[TamperMonitor.recordClearance] post violated: self.isManualClearancePending = true");
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

/** Impl signature for TamperMonitor.recordClearance (async). User supplies this. */
export type TamperMonitorRecordClearanceAsyncImpl = (self: TamperMonitor, clearanceId: string) => Promise<{ self: TamperMonitor; modified: { isTamperActive: unknown; isManualClearancePending: unknown } }>;

/** Contract-checking wrapper for TamperMonitor.recordClearance (async). */
export function wrapTamperMonitorRecordClearanceAsync(impl: TamperMonitorRecordClearanceAsyncImpl): (self: TamperMonitor, clearanceId: string) => Promise<TamperMonitor> {
  return async (self, clearanceId) => {
    const preViolations: string[] = [];
    if (!((clearanceId !== null))) {
      preViolations.push("[TamperMonitor.recordClearance] pre violated: clearanceId <> null");
    }
    if (!(self.isTamperActive)) {
      preViolations.push("[TamperMonitor.recordClearance] pre violated: self.isTamperActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clearanceId);
      const postViolations: string[] = [];
      if (!((__result.self.isTamperActive === false))) {
        postViolations.push("[TamperMonitor.recordClearance] post violated: self.isTamperActive = false");
      }
      if (!((__result.self.isManualClearancePending === true))) {
        postViolations.push("[TamperMonitor.recordClearance] post violated: self.isManualClearancePending = true");
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

/** Impl signature for TamperMonitor.resolveClearance. User supplies this. */
export type TamperMonitorResolveClearanceImpl = (self: TamperMonitor) => { self: TamperMonitor; modified: { isManualClearancePending: unknown } };

/** Contract-checking wrapper for TamperMonitor.resolveClearance. */
export function wrapTamperMonitorResolveClearance(impl: TamperMonitorResolveClearanceImpl): (self: TamperMonitor) => TamperMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isManualClearancePending)) {
      preViolations.push("[TamperMonitor.resolveClearance] pre violated: self.isManualClearancePending");
    }
    if (!(!(self.isTamperActive))) {
      preViolations.push("[TamperMonitor.resolveClearance] pre violated: not self.isTamperActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isManualClearancePending === false))) {
        postViolations.push("[TamperMonitor.resolveClearance] post violated: self.isManualClearancePending = false");
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

/** Impl signature for TamperMonitor.resolveClearance (async). User supplies this. */
export type TamperMonitorResolveClearanceAsyncImpl = (self: TamperMonitor) => Promise<{ self: TamperMonitor; modified: { isManualClearancePending: unknown } }>;

/** Contract-checking wrapper for TamperMonitor.resolveClearance (async). */
export function wrapTamperMonitorResolveClearanceAsync(impl: TamperMonitorResolveClearanceAsyncImpl): (self: TamperMonitor) => Promise<TamperMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isManualClearancePending)) {
      preViolations.push("[TamperMonitor.resolveClearance] pre violated: self.isManualClearancePending");
    }
    if (!(!(self.isTamperActive))) {
      preViolations.push("[TamperMonitor.resolveClearance] pre violated: not self.isTamperActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isManualClearancePending === false))) {
        postViolations.push("[TamperMonitor.resolveClearance] post violated: self.isManualClearancePending = false");
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

/** Impl signature for AuditLogger.writeEntry. User supplies this. */
export type AuditLoggerWriteEntryImpl = (self: AuditLogger, eventType: string, payload: string, timestamp: number) => { self: AuditLogger; modified: { logEntryCount: unknown; lastEntryTimestamp: unknown } };

/** Contract-checking wrapper for AuditLogger.writeEntry. */
export function wrapAuditLoggerWriteEntry(impl: AuditLoggerWriteEntryImpl): (self: AuditLogger, eventType: string, payload: string, timestamp: number) => AuditLogger {
  return (self, eventType, payload, timestamp) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[AuditLogger.writeEntry] pre violated: eventType <> null");
    }
    if (!((payload !== null))) {
      preViolations.push("[AuditLogger.writeEntry] pre violated: payload <> null");
    }
    if (!((timestamp >= self.lastEntryTimestamp))) {
      preViolations.push("[AuditLogger.writeEntry] pre violated: timestamp >= self.lastEntryTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.logEntryCount": self.logEntryCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, eventType, payload, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.logEntryCount === (__pre["self.logEntryCount"] + 1)))) {
        postViolations.push("[AuditLogger.writeEntry] post violated: self.logEntryCount = self.logEntryCount@pre + 1");
      }
      if (!((__result.self.lastEntryTimestamp === timestamp))) {
        postViolations.push("[AuditLogger.writeEntry] post violated: self.lastEntryTimestamp = timestamp");
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

/** Impl signature for AuditLogger.writeEntry (async). User supplies this. */
export type AuditLoggerWriteEntryAsyncImpl = (self: AuditLogger, eventType: string, payload: string, timestamp: number) => Promise<{ self: AuditLogger; modified: { logEntryCount: unknown; lastEntryTimestamp: unknown } }>;

/** Contract-checking wrapper for AuditLogger.writeEntry (async). */
export function wrapAuditLoggerWriteEntryAsync(impl: AuditLoggerWriteEntryAsyncImpl): (self: AuditLogger, eventType: string, payload: string, timestamp: number) => Promise<AuditLogger> {
  return async (self, eventType, payload, timestamp) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[AuditLogger.writeEntry] pre violated: eventType <> null");
    }
    if (!((payload !== null))) {
      preViolations.push("[AuditLogger.writeEntry] pre violated: payload <> null");
    }
    if (!((timestamp >= self.lastEntryTimestamp))) {
      preViolations.push("[AuditLogger.writeEntry] pre violated: timestamp >= self.lastEntryTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.logEntryCount": self.logEntryCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, eventType, payload, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.logEntryCount === (__pre["self.logEntryCount"] + 1)))) {
        postViolations.push("[AuditLogger.writeEntry] post violated: self.logEntryCount = self.logEntryCount@pre + 1");
      }
      if (!((__result.self.lastEntryTimestamp === timestamp))) {
        postViolations.push("[AuditLogger.writeEntry] post violated: self.lastEntryTimestamp = timestamp");
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

/** Impl signature for AuditLogger.checkRetentionLimit. User supplies this. */
export type AuditLoggerCheckRetentionLimitImpl = (self: AuditLogger) => { self: AuditLogger; modified: { logEntryCount: unknown; lastEntryTimestamp: unknown } };

/** Contract-checking wrapper for AuditLogger.checkRetentionLimit. */
export function wrapAuditLoggerCheckRetentionLimit(impl: AuditLoggerCheckRetentionLimitImpl): (self: AuditLogger) => AuditLogger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.retentionDays >= 365))) {
      preViolations.push("[AuditLogger.checkRetentionLimit] pre violated: self.retentionDays >= 365");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.logEntryCount": self.logEntryCount,
      "self.lastEntryTimestamp": self.lastEntryTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.logEntryCount === __pre["self.logEntryCount"]))) {
        postViolations.push("[AuditLogger.checkRetentionLimit] post violated: self.logEntryCount = self.logEntryCount@pre");
      }
      if (!((__result.self.lastEntryTimestamp === __pre["self.lastEntryTimestamp"]))) {
        postViolations.push("[AuditLogger.checkRetentionLimit] post violated: self.lastEntryTimestamp = self.lastEntryTimestamp@pre");
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

/** Impl signature for AuditLogger.checkRetentionLimit (async). User supplies this. */
export type AuditLoggerCheckRetentionLimitAsyncImpl = (self: AuditLogger) => Promise<{ self: AuditLogger; modified: { logEntryCount: unknown; lastEntryTimestamp: unknown } }>;

/** Contract-checking wrapper for AuditLogger.checkRetentionLimit (async). */
export function wrapAuditLoggerCheckRetentionLimitAsync(impl: AuditLoggerCheckRetentionLimitAsyncImpl): (self: AuditLogger) => Promise<AuditLogger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.retentionDays >= 365))) {
      preViolations.push("[AuditLogger.checkRetentionLimit] pre violated: self.retentionDays >= 365");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.logEntryCount": self.logEntryCount,
      "self.lastEntryTimestamp": self.lastEntryTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.logEntryCount === __pre["self.logEntryCount"]))) {
        postViolations.push("[AuditLogger.checkRetentionLimit] post violated: self.logEntryCount = self.logEntryCount@pre");
      }
      if (!((__result.self.lastEntryTimestamp === __pre["self.lastEntryTimestamp"]))) {
        postViolations.push("[AuditLogger.checkRetentionLimit] post violated: self.lastEntryTimestamp = self.lastEntryTimestamp@pre");
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

/** Impl signature for MeterReadingChannel.transferReading. User supplies this. */
export type MeterReadingChannelTransferReadingImpl = (self: MeterReadingChannel, kwh: number, tamperFlags: string) => { self: MeterReadingChannel; modified: { lastReadingTransferred: unknown; lastTamperFlagsTransferred: unknown; transferCount: unknown } };

/** Contract-checking wrapper for MeterReadingChannel.transferReading. */
export function wrapMeterReadingChannelTransferReading(impl: MeterReadingChannelTransferReadingImpl): (self: MeterReadingChannel, kwh: number, tamperFlags: string) => MeterReadingChannel {
  return (self, kwh, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((kwh >= 0))) {
      preViolations.push("[MeterReadingChannel.transferReading] pre violated: kwh >= 0.0");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterReadingChannel.transferReading] pre violated: tamperFlags <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.transferCount": self.transferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, kwh, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.lastReadingTransferred === kwh))) {
        postViolations.push("[MeterReadingChannel.transferReading] post violated: self.lastReadingTransferred = kwh");
      }
      if (!((__result.self.lastTamperFlagsTransferred === tamperFlags))) {
        postViolations.push("[MeterReadingChannel.transferReading] post violated: self.lastTamperFlagsTransferred = tamperFlags");
      }
      if (!((__result.self.transferCount === (__pre["self.transferCount"] + 1)))) {
        postViolations.push("[MeterReadingChannel.transferReading] post violated: self.transferCount = self.transferCount@pre + 1");
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

/** Impl signature for MeterReadingChannel.transferReading (async). User supplies this. */
export type MeterReadingChannelTransferReadingAsyncImpl = (self: MeterReadingChannel, kwh: number, tamperFlags: string) => Promise<{ self: MeterReadingChannel; modified: { lastReadingTransferred: unknown; lastTamperFlagsTransferred: unknown; transferCount: unknown } }>;

/** Contract-checking wrapper for MeterReadingChannel.transferReading (async). */
export function wrapMeterReadingChannelTransferReadingAsync(impl: MeterReadingChannelTransferReadingAsyncImpl): (self: MeterReadingChannel, kwh: number, tamperFlags: string) => Promise<MeterReadingChannel> {
  return async (self, kwh, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((kwh >= 0))) {
      preViolations.push("[MeterReadingChannel.transferReading] pre violated: kwh >= 0.0");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterReadingChannel.transferReading] pre violated: tamperFlags <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.transferCount": self.transferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, kwh, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.lastReadingTransferred === kwh))) {
        postViolations.push("[MeterReadingChannel.transferReading] post violated: self.lastReadingTransferred = kwh");
      }
      if (!((__result.self.lastTamperFlagsTransferred === tamperFlags))) {
        postViolations.push("[MeterReadingChannel.transferReading] post violated: self.lastTamperFlagsTransferred = tamperFlags");
      }
      if (!((__result.self.transferCount === (__pre["self.transferCount"] + 1)))) {
        postViolations.push("[MeterReadingChannel.transferReading] post violated: self.transferCount = self.transferCount@pre + 1");
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

/** Impl signature for TamperFreezeChannel.signalFreeze. User supplies this. */
export type TamperFreezeChannelSignalFreezeImpl = (self: TamperFreezeChannel, timestamp: number) => { self: TamperFreezeChannel; modified: { freezeCount: unknown; lastFreezeTimestamp: unknown } };

/** Contract-checking wrapper for TamperFreezeChannel.signalFreeze. */
export function wrapTamperFreezeChannelSignalFreeze(impl: TamperFreezeChannelSignalFreezeImpl): (self: TamperFreezeChannel, timestamp: number) => TamperFreezeChannel {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= self.lastFreezeTimestamp))) {
      preViolations.push("[TamperFreezeChannel.signalFreeze] pre violated: timestamp >= self.lastFreezeTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.freezeCount": self.freezeCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.freezeCount === (__pre["self.freezeCount"] + 1)))) {
        postViolations.push("[TamperFreezeChannel.signalFreeze] post violated: self.freezeCount = self.freezeCount@pre + 1");
      }
      if (!((__result.self.lastFreezeTimestamp === timestamp))) {
        postViolations.push("[TamperFreezeChannel.signalFreeze] post violated: self.lastFreezeTimestamp = timestamp");
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

/** Impl signature for TamperFreezeChannel.signalFreeze (async). User supplies this. */
export type TamperFreezeChannelSignalFreezeAsyncImpl = (self: TamperFreezeChannel, timestamp: number) => Promise<{ self: TamperFreezeChannel; modified: { freezeCount: unknown; lastFreezeTimestamp: unknown } }>;

/** Contract-checking wrapper for TamperFreezeChannel.signalFreeze (async). */
export function wrapTamperFreezeChannelSignalFreezeAsync(impl: TamperFreezeChannelSignalFreezeAsyncImpl): (self: TamperFreezeChannel, timestamp: number) => Promise<TamperFreezeChannel> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= self.lastFreezeTimestamp))) {
      preViolations.push("[TamperFreezeChannel.signalFreeze] pre violated: timestamp >= self.lastFreezeTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.freezeCount": self.freezeCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.freezeCount === (__pre["self.freezeCount"] + 1)))) {
        postViolations.push("[TamperFreezeChannel.signalFreeze] post violated: self.freezeCount = self.freezeCount@pre + 1");
      }
      if (!((__result.self.lastFreezeTimestamp === timestamp))) {
        postViolations.push("[TamperFreezeChannel.signalFreeze] post violated: self.lastFreezeTimestamp = timestamp");
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

/** Impl signature for TamperFreezeChannel.signalClearance. User supplies this. */
export type TamperFreezeChannelSignalClearanceImpl = (self: TamperFreezeChannel, timestamp: number) => { self: TamperFreezeChannel; modified: { clearanceCount: unknown; lastFreezeTimestamp: unknown } };

/** Contract-checking wrapper for TamperFreezeChannel.signalClearance. */
export function wrapTamperFreezeChannelSignalClearance(impl: TamperFreezeChannelSignalClearanceImpl): (self: TamperFreezeChannel, timestamp: number) => TamperFreezeChannel {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= self.lastFreezeTimestamp))) {
      preViolations.push("[TamperFreezeChannel.signalClearance] pre violated: timestamp >= self.lastFreezeTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clearanceCount": self.clearanceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.clearanceCount === (__pre["self.clearanceCount"] + 1)))) {
        postViolations.push("[TamperFreezeChannel.signalClearance] post violated: self.clearanceCount = self.clearanceCount@pre + 1");
      }
      if (!((__result.self.lastFreezeTimestamp === timestamp))) {
        postViolations.push("[TamperFreezeChannel.signalClearance] post violated: self.lastFreezeTimestamp = timestamp");
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

/** Impl signature for TamperFreezeChannel.signalClearance (async). User supplies this. */
export type TamperFreezeChannelSignalClearanceAsyncImpl = (self: TamperFreezeChannel, timestamp: number) => Promise<{ self: TamperFreezeChannel; modified: { clearanceCount: unknown; lastFreezeTimestamp: unknown } }>;

/** Contract-checking wrapper for TamperFreezeChannel.signalClearance (async). */
export function wrapTamperFreezeChannelSignalClearanceAsync(impl: TamperFreezeChannelSignalClearanceAsyncImpl): (self: TamperFreezeChannel, timestamp: number) => Promise<TamperFreezeChannel> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= self.lastFreezeTimestamp))) {
      preViolations.push("[TamperFreezeChannel.signalClearance] pre violated: timestamp >= self.lastFreezeTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.clearanceCount": self.clearanceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.clearanceCount === (__pre["self.clearanceCount"] + 1)))) {
        postViolations.push("[TamperFreezeChannel.signalClearance] post violated: self.clearanceCount = self.clearanceCount@pre + 1");
      }
      if (!((__result.self.lastFreezeTimestamp === timestamp))) {
        postViolations.push("[TamperFreezeChannel.signalClearance] post violated: self.lastFreezeTimestamp = timestamp");
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

/** Impl signature for MeterBillingSystem.processReading. User supplies this. */
export type MeterBillingSystemProcessReadingImpl = (self: MeterBillingSystem, kwh: number, tamperFlags: string) => { self: MeterBillingSystem; modified: { acceptedReadingCount: unknown; tamperFreezeActive: unknown } };

/** Contract-checking wrapper for MeterBillingSystem.processReading. */
export function wrapMeterBillingSystemProcessReading(impl: MeterBillingSystemProcessReadingImpl): (self: MeterBillingSystem, kwh: number, tamperFlags: string) => MeterBillingSystem {
  return (self, kwh, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((kwh >= 0))) {
      preViolations.push("[MeterBillingSystem.processReading] pre violated: kwh >= 0.0");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterBillingSystem.processReading] pre violated: tamperFlags <> null");
    }
    if (!((self.maxNegativeDeltaThreshold >= 0))) {
      preViolations.push("[MeterBillingSystem.processReading] pre violated: self.maxNegativeDeltaThreshold >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.acceptedReadingCount": self.acceptedReadingCount,
      "self.tamperCleared": self.tamperCleared,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, kwh, tamperFlags);
      const postViolations: string[] = [];
      if (!(((((!(__pre["self.tamperFreezeActive"]) && (tamperFlags === "")) && ((kwh - (((__pre["self.acceptedReadingCount"] > 0)) ? (__pre["self.acceptedReadingCount"]) : (kwh))) >= 0))) ? ((__result.self.acceptedReadingCount === (__pre["self.acceptedReadingCount"] + 1))) : ((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))))) {
        postViolations.push("[MeterBillingSystem.processReading] post violated: if not self.tamperFreezeActive@pre and tamperFlags = '' and\n               (kwh - (if self.acceptedReadingCount@pre > 0 then self.acceptedReadingCount@pre else kwh endif)) >= 0.0 then\n            self.acceptedReadingCount = self.acceptedReadingCount@pre + 1\n          else\n            self.acceptedReadingCount = self.acceptedReadingCount@pre\n          endif");
      }
      if (!(((((tamperFlags !== "") && !(__pre["self.tamperFreezeActive"]))) ? ((__result.self.tamperFreezeActive === true)) : ((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))))) {
        postViolations.push("[MeterBillingSystem.processReading] post violated: if tamperFlags <> '' and not self.tamperFreezeActive@pre then\n            self.tamperFreezeActive = true\n          else\n            self.tamperFreezeActive = self.tamperFreezeActive@pre\n          endif");
      }
      if (!((__result.self.tamperCleared === ((((tamperFlags === "") && !(__pre["self.tamperFreezeActive"]))) ? (__pre["self.tamperCleared"]) : (__pre["self.tamperCleared"]))))) {
        postViolations.push("[MeterBillingSystem.processReading] post violated: self.tamperCleared = (if tamperFlags = '' and not self.tamperFreezeActive@pre then self.tamperCleared@pre else self.tamperCleared@pre endif)");
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

/** Impl signature for MeterBillingSystem.processReading (async). User supplies this. */
export type MeterBillingSystemProcessReadingAsyncImpl = (self: MeterBillingSystem, kwh: number, tamperFlags: string) => Promise<{ self: MeterBillingSystem; modified: { acceptedReadingCount: unknown; tamperFreezeActive: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystem.processReading (async). */
export function wrapMeterBillingSystemProcessReadingAsync(impl: MeterBillingSystemProcessReadingAsyncImpl): (self: MeterBillingSystem, kwh: number, tamperFlags: string) => Promise<MeterBillingSystem> {
  return async (self, kwh, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((kwh >= 0))) {
      preViolations.push("[MeterBillingSystem.processReading] pre violated: kwh >= 0.0");
    }
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterBillingSystem.processReading] pre violated: tamperFlags <> null");
    }
    if (!((self.maxNegativeDeltaThreshold >= 0))) {
      preViolations.push("[MeterBillingSystem.processReading] pre violated: self.maxNegativeDeltaThreshold >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.acceptedReadingCount": self.acceptedReadingCount,
      "self.tamperCleared": self.tamperCleared,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, kwh, tamperFlags);
      const postViolations: string[] = [];
      if (!(((((!(__pre["self.tamperFreezeActive"]) && (tamperFlags === "")) && ((kwh - (((__pre["self.acceptedReadingCount"] > 0)) ? (__pre["self.acceptedReadingCount"]) : (kwh))) >= 0))) ? ((__result.self.acceptedReadingCount === (__pre["self.acceptedReadingCount"] + 1))) : ((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))))) {
        postViolations.push("[MeterBillingSystem.processReading] post violated: if not self.tamperFreezeActive@pre and tamperFlags = '' and\n               (kwh - (if self.acceptedReadingCount@pre > 0 then self.acceptedReadingCount@pre else kwh endif)) >= 0.0 then\n            self.acceptedReadingCount = self.acceptedReadingCount@pre + 1\n          else\n            self.acceptedReadingCount = self.acceptedReadingCount@pre\n          endif");
      }
      if (!(((((tamperFlags !== "") && !(__pre["self.tamperFreezeActive"]))) ? ((__result.self.tamperFreezeActive === true)) : ((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))))) {
        postViolations.push("[MeterBillingSystem.processReading] post violated: if tamperFlags <> '' and not self.tamperFreezeActive@pre then\n            self.tamperFreezeActive = true\n          else\n            self.tamperFreezeActive = self.tamperFreezeActive@pre\n          endif");
      }
      if (!((__result.self.tamperCleared === ((((tamperFlags === "") && !(__pre["self.tamperFreezeActive"]))) ? (__pre["self.tamperCleared"]) : (__pre["self.tamperCleared"]))))) {
        postViolations.push("[MeterBillingSystem.processReading] post violated: self.tamperCleared = (if tamperFlags = '' and not self.tamperFreezeActive@pre then self.tamperCleared@pre else self.tamperCleared@pre endif)");
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

/** Impl signature for MeterBillingSystem.detectTamper. User supplies this. */
export type MeterBillingSystemDetectTamperImpl = (self: MeterBillingSystem, eventType: string, description: string) => { self: MeterBillingSystem; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } };

/** Contract-checking wrapper for MeterBillingSystem.detectTamper. */
export function wrapMeterBillingSystemDetectTamper(impl: MeterBillingSystemDetectTamperImpl): (self: MeterBillingSystem, eventType: string, description: string) => MeterBillingSystem {
  return (self, eventType, description) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[MeterBillingSystem.detectTamper] pre violated: eventType <> null");
    }
    if (!((description !== null))) {
      preViolations.push("[MeterBillingSystem.detectTamper] pre violated: description <> null");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystem.detectTamper] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, eventType, description);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === true))) {
        postViolations.push("[MeterBillingSystem.detectTamper] post violated: self.tamperFreezeActive = true");
      }
      if (!((__result.self.tamperCleared === false))) {
        postViolations.push("[MeterBillingSystem.detectTamper] post violated: self.tamperCleared = false");
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

/** Impl signature for MeterBillingSystem.detectTamper (async). User supplies this. */
export type MeterBillingSystemDetectTamperAsyncImpl = (self: MeterBillingSystem, eventType: string, description: string) => Promise<{ self: MeterBillingSystem; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystem.detectTamper (async). */
export function wrapMeterBillingSystemDetectTamperAsync(impl: MeterBillingSystemDetectTamperAsyncImpl): (self: MeterBillingSystem, eventType: string, description: string) => Promise<MeterBillingSystem> {
  return async (self, eventType, description) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[MeterBillingSystem.detectTamper] pre violated: eventType <> null");
    }
    if (!((description !== null))) {
      preViolations.push("[MeterBillingSystem.detectTamper] pre violated: description <> null");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystem.detectTamper] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, eventType, description);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === true))) {
        postViolations.push("[MeterBillingSystem.detectTamper] post violated: self.tamperFreezeActive = true");
      }
      if (!((__result.self.tamperCleared === false))) {
        postViolations.push("[MeterBillingSystem.detectTamper] post violated: self.tamperCleared = false");
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

/** Impl signature for MeterBillingSystem.clearTamper. User supplies this. */
export type MeterBillingSystemClearTamperImpl = (self: MeterBillingSystem, clearanceId: string) => { self: MeterBillingSystem; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } };

/** Contract-checking wrapper for MeterBillingSystem.clearTamper. */
export function wrapMeterBillingSystemClearTamper(impl: MeterBillingSystemClearTamperImpl): (self: MeterBillingSystem, clearanceId: string) => MeterBillingSystem {
  return (self, clearanceId) => {
    const preViolations: string[] = [];
    if (!((clearanceId !== null))) {
      preViolations.push("[MeterBillingSystem.clearTamper] pre violated: clearanceId <> null");
    }
    if (!(self.tamperFreezeActive)) {
      preViolations.push("[MeterBillingSystem.clearTamper] pre violated: self.tamperFreezeActive");
    }
    if (!(!(self.tamperCleared))) {
      preViolations.push("[MeterBillingSystem.clearTamper] pre violated: not self.tamperCleared");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clearanceId);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === false))) {
        postViolations.push("[MeterBillingSystem.clearTamper] post violated: self.tamperFreezeActive = false");
      }
      if (!((__result.self.tamperCleared === true))) {
        postViolations.push("[MeterBillingSystem.clearTamper] post violated: self.tamperCleared = true");
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

/** Impl signature for MeterBillingSystem.clearTamper (async). User supplies this. */
export type MeterBillingSystemClearTamperAsyncImpl = (self: MeterBillingSystem, clearanceId: string) => Promise<{ self: MeterBillingSystem; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystem.clearTamper (async). */
export function wrapMeterBillingSystemClearTamperAsync(impl: MeterBillingSystemClearTamperAsyncImpl): (self: MeterBillingSystem, clearanceId: string) => Promise<MeterBillingSystem> {
  return async (self, clearanceId) => {
    const preViolations: string[] = [];
    if (!((clearanceId !== null))) {
      preViolations.push("[MeterBillingSystem.clearTamper] pre violated: clearanceId <> null");
    }
    if (!(self.tamperFreezeActive)) {
      preViolations.push("[MeterBillingSystem.clearTamper] pre violated: self.tamperFreezeActive");
    }
    if (!(!(self.tamperCleared))) {
      preViolations.push("[MeterBillingSystem.clearTamper] pre violated: not self.tamperCleared");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clearanceId);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === false))) {
        postViolations.push("[MeterBillingSystem.clearTamper] post violated: self.tamperFreezeActive = false");
      }
      if (!((__result.self.tamperCleared === true))) {
        postViolations.push("[MeterBillingSystem.clearTamper] post violated: self.tamperCleared = true");
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

/** Impl signature for MeterBillingSystem.applyCompensation. User supplies this. */
export type MeterBillingSystemApplyCompensationImpl = (self: MeterBillingSystem, adjustmentDelta: number) => { self: MeterBillingSystem; modified: { acceptedReadingCount: unknown; tamperFreezeActive: unknown; tamperCleared: unknown } };

/** Contract-checking wrapper for MeterBillingSystem.applyCompensation. */
export function wrapMeterBillingSystemApplyCompensation(impl: MeterBillingSystemApplyCompensationImpl): (self: MeterBillingSystem, adjustmentDelta: number) => MeterBillingSystem {
  return (self, adjustmentDelta) => {
    const preViolations: string[] = [];
    if (!((adjustmentDelta !== 0))) {
      preViolations.push("[MeterBillingSystem.applyCompensation] pre violated: adjustmentDelta <> 0.0");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystem.applyCompensation] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.acceptedReadingCount": self.acceptedReadingCount,
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, adjustmentDelta);
      const postViolations: string[] = [];
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystem.applyCompensation] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
      }
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystem.applyCompensation] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystem.applyCompensation] post violated: self.tamperCleared = self.tamperCleared@pre");
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

/** Impl signature for MeterBillingSystem.applyCompensation (async). User supplies this. */
export type MeterBillingSystemApplyCompensationAsyncImpl = (self: MeterBillingSystem, adjustmentDelta: number) => Promise<{ self: MeterBillingSystem; modified: { acceptedReadingCount: unknown; tamperFreezeActive: unknown; tamperCleared: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystem.applyCompensation (async). */
export function wrapMeterBillingSystemApplyCompensationAsync(impl: MeterBillingSystemApplyCompensationAsyncImpl): (self: MeterBillingSystem, adjustmentDelta: number) => Promise<MeterBillingSystem> {
  return async (self, adjustmentDelta) => {
    const preViolations: string[] = [];
    if (!((adjustmentDelta !== 0))) {
      preViolations.push("[MeterBillingSystem.applyCompensation] pre violated: adjustmentDelta <> 0.0");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystem.applyCompensation] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.acceptedReadingCount": self.acceptedReadingCount,
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, adjustmentDelta);
      const postViolations: string[] = [];
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystem.applyCompensation] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
      }
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystem.applyCompensation] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystem.applyCompensation] post violated: self.tamperCleared = self.tamperCleared@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectNegativeDelta. User supplies this. */
export type MeterBillingSystemFormalizedRejectNegativeDeltaImpl = (self: MeterBillingSystemFormalized, kwh: number, lastAcceptedKwh: number) => { self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } };

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectNegativeDelta. */
export function wrapMeterBillingSystemFormalizedRejectNegativeDelta(impl: MeterBillingSystemFormalizedRejectNegativeDeltaImpl): (self: MeterBillingSystemFormalized, kwh: number, lastAcceptedKwh: number) => MeterBillingSystemFormalized {
  return (self, kwh, lastAcceptedKwh) => {
    const preViolations: string[] = [];
    if (!((lastAcceptedKwh >= 0))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] pre violated: lastAcceptedKwh >= 0.0");
    }
    if (!((kwh >= 0))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] pre violated: kwh >= 0.0");
    }
    if (!((kwh < lastAcceptedKwh))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] pre violated: kwh < lastAcceptedKwh");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, kwh, lastAcceptedKwh);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectNegativeDelta (async). User supplies this. */
export type MeterBillingSystemFormalizedRejectNegativeDeltaAsyncImpl = (self: MeterBillingSystemFormalized, kwh: number, lastAcceptedKwh: number) => Promise<{ self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectNegativeDelta (async). */
export function wrapMeterBillingSystemFormalizedRejectNegativeDeltaAsync(impl: MeterBillingSystemFormalizedRejectNegativeDeltaAsyncImpl): (self: MeterBillingSystemFormalized, kwh: number, lastAcceptedKwh: number) => Promise<MeterBillingSystemFormalized> {
  return async (self, kwh, lastAcceptedKwh) => {
    const preViolations: string[] = [];
    if (!((lastAcceptedKwh >= 0))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] pre violated: lastAcceptedKwh >= 0.0");
    }
    if (!((kwh >= 0))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] pre violated: kwh >= 0.0");
    }
    if (!((kwh < lastAcceptedKwh))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] pre violated: kwh < lastAcceptedKwh");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, kwh, lastAcceptedKwh);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectNegativeDelta] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectTamperedReading. User supplies this. */
export type MeterBillingSystemFormalizedRejectTamperedReadingImpl = (self: MeterBillingSystemFormalized, tamperFlags: string) => { self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } };

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectTamperedReading. */
export function wrapMeterBillingSystemFormalizedRejectTamperedReading(impl: MeterBillingSystemFormalizedRejectTamperedReadingImpl): (self: MeterBillingSystemFormalized, tamperFlags: string) => MeterBillingSystemFormalized {
  return (self, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] pre violated: tamperFlags <> null");
    }
    if (!((tamperFlags !== ""))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] pre violated: tamperFlags <> ''");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === true))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] post violated: self.tamperFreezeActive = true");
      }
      if (!((__result.self.tamperCleared === false))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] post violated: self.tamperCleared = false");
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

/** Impl signature for MeterBillingSystemFormalized.rejectTamperedReading (async). User supplies this. */
export type MeterBillingSystemFormalizedRejectTamperedReadingAsyncImpl = (self: MeterBillingSystemFormalized, tamperFlags: string) => Promise<{ self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectTamperedReading (async). */
export function wrapMeterBillingSystemFormalizedRejectTamperedReadingAsync(impl: MeterBillingSystemFormalizedRejectTamperedReadingAsyncImpl): (self: MeterBillingSystemFormalized, tamperFlags: string) => Promise<MeterBillingSystemFormalized> {
  return async (self, tamperFlags) => {
    const preViolations: string[] = [];
    if (!((tamperFlags !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] pre violated: tamperFlags <> null");
    }
    if (!((tamperFlags !== ""))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] pre violated: tamperFlags <> ''");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tamperFlags);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === true))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] post violated: self.tamperFreezeActive = true");
      }
      if (!((__result.self.tamperCleared === false))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectTamperedReading] post violated: self.tamperCleared = false");
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

/** Impl signature for MeterBillingSystemFormalized.rejectPrematureClearance. User supplies this. */
export type MeterBillingSystemFormalizedRejectPrematureClearanceImpl = (self: MeterBillingSystemFormalized, clearanceId: string) => { self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } };

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectPrematureClearance. */
export function wrapMeterBillingSystemFormalizedRejectPrematureClearance(impl: MeterBillingSystemFormalizedRejectPrematureClearanceImpl): (self: MeterBillingSystemFormalized, clearanceId: string) => MeterBillingSystemFormalized {
  return (self, clearanceId) => {
    const preViolations: string[] = [];
    if (!((clearanceId !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] pre violated: clearanceId <> null");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clearanceId);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] post violated: self.tamperCleared = self.tamperCleared@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectPrematureClearance (async). User supplies this. */
export type MeterBillingSystemFormalizedRejectPrematureClearanceAsyncImpl = (self: MeterBillingSystemFormalized, clearanceId: string) => Promise<{ self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectPrematureClearance (async). */
export function wrapMeterBillingSystemFormalizedRejectPrematureClearanceAsync(impl: MeterBillingSystemFormalizedRejectPrematureClearanceAsyncImpl): (self: MeterBillingSystemFormalized, clearanceId: string) => Promise<MeterBillingSystemFormalized> {
  return async (self, clearanceId) => {
    const preViolations: string[] = [];
    if (!((clearanceId !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] pre violated: clearanceId <> null");
    }
    if (!(!(self.tamperFreezeActive))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] pre violated: not self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clearanceId);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectPrematureClearance] post violated: self.tamperCleared = self.tamperCleared@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectCompensationDuringFreeze. User supplies this. */
export type MeterBillingSystemFormalizedRejectCompensationDuringFreezeImpl = (self: MeterBillingSystemFormalized, adjustmentDelta: number) => { self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } };

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectCompensationDuringFreeze. */
export function wrapMeterBillingSystemFormalizedRejectCompensationDuringFreeze(impl: MeterBillingSystemFormalizedRejectCompensationDuringFreezeImpl): (self: MeterBillingSystemFormalized, adjustmentDelta: number) => MeterBillingSystemFormalized {
  return (self, adjustmentDelta) => {
    const preViolations: string[] = [];
    if (!((adjustmentDelta !== 0))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] pre violated: adjustmentDelta <> 0.0");
    }
    if (!(self.tamperFreezeActive)) {
      preViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] pre violated: self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, adjustmentDelta);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectCompensationDuringFreeze (async). User supplies this. */
export type MeterBillingSystemFormalizedRejectCompensationDuringFreezeAsyncImpl = (self: MeterBillingSystemFormalized, adjustmentDelta: number) => Promise<{ self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectCompensationDuringFreeze (async). */
export function wrapMeterBillingSystemFormalizedRejectCompensationDuringFreezeAsync(impl: MeterBillingSystemFormalizedRejectCompensationDuringFreezeAsyncImpl): (self: MeterBillingSystemFormalized, adjustmentDelta: number) => Promise<MeterBillingSystemFormalized> {
  return async (self, adjustmentDelta) => {
    const preViolations: string[] = [];
    if (!((adjustmentDelta !== 0))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] pre violated: adjustmentDelta <> 0.0");
    }
    if (!(self.tamperFreezeActive)) {
      preViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] pre violated: self.tamperFreezeActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, adjustmentDelta);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectCompensationDuringFreeze] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.recordAuditTrail. User supplies this. */
export type MeterBillingSystemFormalizedRecordAuditTrailImpl = (self: MeterBillingSystemFormalized, eventType: string, eventPayload: string) => { self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } };

/** Contract-checking wrapper for MeterBillingSystemFormalized.recordAuditTrail. */
export function wrapMeterBillingSystemFormalizedRecordAuditTrail(impl: MeterBillingSystemFormalizedRecordAuditTrailImpl): (self: MeterBillingSystemFormalized, eventType: string, eventPayload: string) => MeterBillingSystemFormalized {
  return (self, eventType, eventPayload) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] pre violated: eventType <> null");
    }
    if (!((eventPayload !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] pre violated: eventPayload <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, eventType, eventPayload);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.recordAuditTrail (async). User supplies this. */
export type MeterBillingSystemFormalizedRecordAuditTrailAsyncImpl = (self: MeterBillingSystemFormalized, eventType: string, eventPayload: string) => Promise<{ self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystemFormalized.recordAuditTrail (async). */
export function wrapMeterBillingSystemFormalizedRecordAuditTrailAsync(impl: MeterBillingSystemFormalizedRecordAuditTrailAsyncImpl): (self: MeterBillingSystemFormalized, eventType: string, eventPayload: string) => Promise<MeterBillingSystemFormalized> {
  return async (self, eventType, eventPayload) => {
    const preViolations: string[] = [];
    if (!((eventType !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] pre violated: eventType <> null");
    }
    if (!((eventPayload !== null))) {
      preViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] pre violated: eventPayload <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, eventType, eventPayload);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.recordAuditTrail] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectRetentionOverflow. User supplies this. */
export type MeterBillingSystemFormalizedRejectRetentionOverflowImpl = (self: MeterBillingSystemFormalized) => { self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } };

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectRetentionOverflow. */
export function wrapMeterBillingSystemFormalizedRejectRetentionOverflow(impl: MeterBillingSystemFormalizedRejectRetentionOverflowImpl): (self: MeterBillingSystemFormalized) => MeterBillingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.acceptedReadingCount >= 365))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] pre violated: self.acceptedReadingCount >= 365");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Impl signature for MeterBillingSystemFormalized.rejectRetentionOverflow (async). User supplies this. */
export type MeterBillingSystemFormalizedRejectRetentionOverflowAsyncImpl = (self: MeterBillingSystemFormalized) => Promise<{ self: MeterBillingSystemFormalized; modified: { tamperFreezeActive: unknown; tamperCleared: unknown; acceptedReadingCount: unknown } }>;

/** Contract-checking wrapper for MeterBillingSystemFormalized.rejectRetentionOverflow (async). */
export function wrapMeterBillingSystemFormalizedRejectRetentionOverflowAsync(impl: MeterBillingSystemFormalizedRejectRetentionOverflowAsyncImpl): (self: MeterBillingSystemFormalized) => Promise<MeterBillingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.acceptedReadingCount >= 365))) {
      preViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] pre violated: self.acceptedReadingCount >= 365");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tamperFreezeActive": self.tamperFreezeActive,
      "self.tamperCleared": self.tamperCleared,
      "self.acceptedReadingCount": self.acceptedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.tamperFreezeActive === __pre["self.tamperFreezeActive"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] post violated: self.tamperFreezeActive = self.tamperFreezeActive@pre");
      }
      if (!((__result.self.tamperCleared === __pre["self.tamperCleared"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] post violated: self.tamperCleared = self.tamperCleared@pre");
      }
      if (!((__result.self.acceptedReadingCount === __pre["self.acceptedReadingCount"]))) {
        postViolations.push("[MeterBillingSystemFormalized.rejectRetentionOverflow] post violated: self.acceptedReadingCount = self.acceptedReadingCount@pre");
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

/** Lifecycle registry for MonotonicConsumptionCommitment commitments. */
export class MonotonicConsumptionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MonotonicConsumptionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MonotonicConsumptionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MonotonicConsumptionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MonotonicConsumptionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MonotonicConsumptionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MonotonicConsumptionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MonotonicConsumptionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MonotonicConsumptionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MonotonicConsumptionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for TamperFreezeCommitment commitments. */
export class TamperFreezeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<TamperFreezeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a TamperFreezeCommitment — the typed wrapper guarantees that since
    // `register` only accepts TamperFreezeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: TamperFreezeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: TamperFreezeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: TamperFreezeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: TamperFreezeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<TamperFreezeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<TamperFreezeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for TamperClearanceCommitment commitments. */
export class TamperClearanceCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<TamperClearanceCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a TamperClearanceCommitment — the typed wrapper guarantees that since
    // `register` only accepts TamperClearanceCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: TamperClearanceCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: TamperClearanceCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: TamperClearanceCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: TamperClearanceCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<TamperClearanceCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<TamperClearanceCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ReadingImmutabilityCommitment commitments. */
export class ReadingImmutabilityCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ReadingImmutabilityCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ReadingImmutabilityCommitment — the typed wrapper guarantees that since
    // `register` only accepts ReadingImmutabilityCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ReadingImmutabilityCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ReadingImmutabilityCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ReadingImmutabilityCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ReadingImmutabilityCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ReadingImmutabilityCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ReadingImmutabilityCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

