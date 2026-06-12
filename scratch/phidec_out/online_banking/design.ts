// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for DesignTeam. Runtime: string. Compile-time: branded. */
export type DesignTeamId = string & { readonly __brand: "DesignTeamId" };
/** Identity type for DesignCustomerProxy. Runtime: string. Compile-time: branded. */
export type DesignCustomerProxyId = string & { readonly __brand: "DesignCustomerProxyId" };
/** Identity type for DesignRegulatorProxy. Runtime: string. Compile-time: branded. */
export type DesignRegulatorProxyId = string & { readonly __brand: "DesignRegulatorProxyId" };
/** Identity type for DesignOperatorProxy. Runtime: string. Compile-time: branded. */
export type DesignOperatorProxyId = string & { readonly __brand: "DesignOperatorProxyId" };
/** Identity type for AccountLedger. Runtime: string. Compile-time: branded. */
export type AccountLedgerId = string & { readonly __brand: "AccountLedgerId" };
/** Identity type for TransferCoordinator. Runtime: string. Compile-time: branded. */
export type TransferCoordinatorId = string & { readonly __brand: "TransferCoordinatorId" };
/** Identity type for JournalStore. Runtime: string. Compile-time: branded. */
export type JournalStoreId = string & { readonly __brand: "JournalStoreId" };
/** Identity type for NotificationService. Runtime: string. Compile-time: branded. */
export type NotificationServiceId = string & { readonly __brand: "NotificationServiceId" };
/** Identity type for LedgerCoordinatorChannel. Runtime: string. Compile-time: branded. */
export type LedgerCoordinatorChannelId = string & { readonly __brand: "LedgerCoordinatorChannelId" };
/** Identity type for CoordinatorJournalChannel. Runtime: string. Compile-time: branded. */
export type CoordinatorJournalChannelId = string & { readonly __brand: "CoordinatorJournalChannelId" };
/** Identity type for CoordinatorNotificationChannel. Runtime: string. Compile-time: branded. */
export type CoordinatorNotificationChannelId = string & { readonly __brand: "CoordinatorNotificationChannelId" };
/** Identity type for SuccessfulTransferFlow. Runtime: string. Compile-time: branded. */
export type SuccessfulTransferFlowId = string & { readonly __brand: "SuccessfulTransferFlowId" };
/** Identity type for RollbackTransferFlow. Runtime: string. Compile-time: branded. */
export type RollbackTransferFlowId = string & { readonly __brand: "RollbackTransferFlowId" };
/** Identity type for RecoveryTransferFlow. Runtime: string. Compile-time: branded. */
export type RecoveryTransferFlowId = string & { readonly __brand: "RecoveryTransferFlowId" };
/** Identity type for TimeoutRollbackFlow. Runtime: string. Compile-time: branded. */
export type TimeoutRollbackFlowId = string & { readonly __brand: "TimeoutRollbackFlowId" };
/** Identity type for AdrComponentBoundary. Runtime: string. Compile-time: branded. */
export type AdrComponentBoundaryId = string & { readonly __brand: "AdrComponentBoundaryId" };
/** Identity type for AdrJournalOrderingEnforcement. Runtime: string. Compile-time: branded. */
export type AdrJournalOrderingEnforcementId = string & { readonly __brand: "AdrJournalOrderingEnforcementId" };
/** Identity type for AdrRollbackAtomicity. Runtime: string. Compile-time: branded. */
export type AdrRollbackAtomicityId = string & { readonly __brand: "AdrRollbackAtomicityId" };
/** Identity type for Account. Runtime: string. Compile-time: branded. */
export type AccountId = string & { readonly __brand: "AccountId" };
/** Identity type for Transfer. Runtime: string. Compile-time: branded. */
export type TransferId = string & { readonly __brand: "TransferId" };
/** Identity type for JournalEntry. Runtime: string. Compile-time: branded. */
export type JournalEntryId = string & { readonly __brand: "JournalEntryId" };
/** Identity type for PendingState. Runtime: string. Compile-time: branded. */
export type PendingStateId = string & { readonly __brand: "PendingStateId" };
/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for Regulator. Runtime: string. Compile-time: branded. */
export type RegulatorId = string & { readonly __brand: "RegulatorId" };
/** Identity type for BankOperator. Runtime: string. Compile-time: branded. */
export type BankOperatorId = string & { readonly __brand: "BankOperatorId" };
/** Identity type for BankingSystemVendor. Runtime: string. Compile-time: branded. */
export type BankingSystemVendorId = string & { readonly __brand: "BankingSystemVendorId" };
/** Identity type for AtomicTransferCommitment. Runtime: string. Compile-time: branded. */
export type AtomicTransferCommitmentId = string & { readonly __brand: "AtomicTransferCommitmentId" };
/** Identity type for NoOverdraftCommitment. Runtime: string. Compile-time: branded. */
export type NoOverdraftCommitmentId = string & { readonly __brand: "NoOverdraftCommitmentId" };
/** Identity type for AuditJournalCommitment. Runtime: string. Compile-time: branded. */
export type AuditJournalCommitmentId = string & { readonly __brand: "AuditJournalCommitmentId" };
/** Identity type for BoundedLatencyCommitment. Runtime: string. Compile-time: branded. */
export type BoundedLatencyCommitmentId = string & { readonly __brand: "BoundedLatencyCommitmentId" };
/** Identity type for BankingSystemVisionCommitment. Runtime: string. Compile-time: branded. */
export type BankingSystemVisionCommitmentId = string & { readonly __brand: "BankingSystemVisionCommitmentId" };
/** Identity type for TransferFlow. Runtime: string. Compile-time: branded. */
export type TransferFlowId = string & { readonly __brand: "TransferFlowId" };
/** Identity type for RecoveryFlow. Runtime: string. Compile-time: branded. */
export type RecoveryFlowId = string & { readonly __brand: "RecoveryFlowId" };
/** Identity type for RollbackFlow. Runtime: string. Compile-time: branded. */
export type RollbackFlowId = string & { readonly __brand: "RollbackFlowId" };
/** Identity type for OnlineBankingSystem. Runtime: string. Compile-time: branded. */
export type OnlineBankingSystemId = string & { readonly __brand: "OnlineBankingSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface DesignTeam {
  readonly teamId: DesignTeamId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface DesignCustomerProxy {
  readonly proxyId: DesignCustomerProxyId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface DesignRegulatorProxy {
  readonly proxyId: DesignRegulatorProxyId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface DesignOperatorProxy {
  readonly proxyId: DesignOperatorProxyId;
  readonly name: string;
}

/** @stereotype <<Role>> */
export interface LedgerEndpoint {
  readonly ledgerId: string;
}

/** @stereotype <<Role>> */
export interface CoordinatorEndpoint {
  readonly coordinatorId: string;
}

/** @stereotype <<Role>> */
export interface CoordinatorJournalEndpoint {
  readonly coordinatorId: string;
}

/** @stereotype <<Role>> */
export interface JournalEndpoint {
  readonly storeId: string;
}

/** @stereotype <<Role>> */
export interface CoordinatorNotifyEndpoint {
  readonly coordinatorId: string;
}

/** @stereotype <<Role>> */
export interface NotificationEndpoint {
  readonly serviceId: string;
}

/** @stereotype <<Kind>> */
export interface AccountLedger {
  readonly ledgerId: AccountLedgerId;
  readonly sourceAccountId: string;
  readonly destinationAccountId: string;
  readonly sourceBalance: number;
  readonly destinationBalance: number;
  readonly pendingSourceBalance: number;
  readonly pendingDestinationBalance: number;
}

/** @stereotype <<Kind>> */
export interface TransferCoordinator {
  readonly coordinatorId: TransferCoordinatorId;
  readonly currentTransferId: string;
  readonly currentAmount: number;
  readonly transferState: string;
  readonly maxResolutionSeconds: number;
}

/** @stereotype <<Kind>> */
export interface JournalStore {
  readonly storeId: JournalStoreId;
  readonly journalWritten: boolean;
  readonly entryTransferId: string;
  readonly preSourceBalance: number;
  readonly postSourceBalance: number;
  readonly preDestinationBalance: number;
  readonly postDestinationBalance: number;
  readonly entryAmount: number;
  readonly entryCreatedAt: number;
}

/** @stereotype <<Kind>> */
export interface NotificationService {
  readonly serviceId: NotificationServiceId;
  readonly customerNotified: boolean;
  readonly lastNotifiedTransferId: string;
}

/** @stereotype <<Relator>> */
export interface LedgerCoordinatorChannel {
  readonly channelId: LedgerCoordinatorChannelId;
  readonly maxLatencyMs: number;
}

/** @stereotype <<Relator>> */
export interface CoordinatorJournalChannel {
  readonly channelId: CoordinatorJournalChannelId;
  readonly maxLatencyMs: number;
  readonly journalMustPrecedeCompletion: boolean;
}

/** @stereotype <<Relator>> */
export interface CoordinatorNotificationChannel {
  readonly channelId: CoordinatorNotificationChannelId;
  readonly maxLatencyMs: number;
  readonly journalConfirmedBeforeNotify: boolean;
}

/** @stereotype <<Happening>> */
export interface SuccessfulTransferFlow {
  readonly flowId: SuccessfulTransferFlowId;
  readonly transferId: string;
  readonly triggeredBy: string;
  readonly ledgerSnapshotStep: string;
  readonly debitCreditStep: string;
  readonly journalWriteStep: string;
  readonly completionStep: string;
  readonly notificationStep: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface RollbackTransferFlow {
  readonly flowId: RollbackTransferFlowId;
  readonly transferId: string;
  readonly triggeredBy: string;
  readonly ledgerRestoreStep: string;
  readonly coordinatorRollbackStep: string;
  readonly notificationStep: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface RecoveryTransferFlow {
  readonly flowId: RecoveryTransferFlowId;
  readonly triggeredBy: string;
  readonly pendingTransferId: string;
  readonly recoveryDecision: string;
  readonly ledgerActionStep: string;
  readonly journalActionStep: string;
  readonly notificationStep: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface TimeoutRollbackFlow {
  readonly flowId: TimeoutRollbackFlowId;
  readonly transferId: string;
  readonly triggeredBy: string;
  readonly elapsedSeconds: number;
  readonly ledgerRestoreStep: string;
  readonly coordinatorRollbackStep: string;
  readonly notificationStep: string;
  readonly outcome: string;
}

/** @stereotype <<Commitment>> */
export interface AdrComponentBoundary {
  readonly adrId: AdrComponentBoundaryId;
  readonly rationale: string;
}

/** @stereotype <<Commitment>> */
export interface AdrJournalOrderingEnforcement {
  readonly adrId: AdrJournalOrderingEnforcementId;
  readonly rationale: string;
}

/** @stereotype <<Commitment>> */
export interface AdrRollbackAtomicity {
  readonly adrId: AdrRollbackAtomicityId;
  readonly rationale: string;
}

/** @stereotype <<Kind>> */
export interface Account {
  readonly accountId: AccountId;
  readonly ownerId: string;
  readonly balance: number;
  readonly status: string;
}

/** @stereotype <<Kind>> */
export interface Transfer {
  readonly transferId: TransferId;
  readonly sourceAccountId: string;
  readonly destinationAccountId: string;
  readonly amount: number;
  readonly state: string;
  readonly initiatedAt: number;
}

/** @stereotype <<Kind>> */
export interface JournalEntry {
  readonly entryId: JournalEntryId;
  readonly transferId: string;
  readonly sourceAccountIdRef: string;
  readonly destinationAccountIdRef: string;
  readonly amount: number;
  readonly preSourceBalance: number;
  readonly postSourceBalance: number;
  readonly preDestinationBalance: number;
  readonly postDestinationBalance: number;
  readonly createdAt: number;
  readonly immutable: boolean;
}

/** @stereotype <<Kind>> */
export interface PendingState {
  readonly pendingId: PendingStateId;
  readonly transferId: string;
  readonly originalSourceBalance: number;
  readonly originalDestinationBalance: number;
  readonly pendingSince: number;
  readonly maxResolutionSeconds: number;
}

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface Regulator {
  readonly regulatorId: RegulatorId;
  readonly name: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface BankOperator {
  readonly operatorId: BankOperatorId;
  readonly name: string;
  readonly operatorRole: string;
}

/** @stereotype <<Agent>> */
export interface BankingSystemVendor {
  readonly vendorId: BankingSystemVendorId;
  readonly name: string;
  readonly regulatoryLicenseId: string;
}

/** @stereotype <<Category>> */
export interface NoOverdraftConstraint {
}

/** @stereotype <<Category>> */
export interface AtomicTransferConstraint {
}

/** @stereotype <<Category>> */
export interface ImmutableJournalConstraint {
}

/** @stereotype <<Category>> */
export interface BoundedLatencyConstraint {
}

/** @stereotype <<Commitment>> */
export interface AtomicTransferCommitment {
  readonly commitmentId: AtomicTransferCommitmentId;
  readonly maxPartialStateSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface NoOverdraftCommitment {
  readonly commitmentId: NoOverdraftCommitmentId;
  readonly minimumAllowedBalance: number;
}

/** @stereotype <<Commitment>> */
export interface AuditJournalCommitment {
  readonly commitmentId: AuditJournalCommitmentId;
  readonly journalPrecedesNotification: boolean;
}

/** @stereotype <<Commitment>> */
export interface BoundedLatencyCommitment {
  readonly commitmentId: BoundedLatencyCommitmentId;
  readonly maxResolutionSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface BankingSystemVisionCommitment {
  readonly commitmentId: BankingSystemVisionCommitmentId;
  readonly visionStatement: string;
}

/** @stereotype <<Happening>> */
export interface TransferFlow {
  readonly flowId: TransferFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly involvedTransferId: string;
  readonly involvedSourceAccountId: string;
  readonly involvedDestinationAccountId: string;
}

/** @stereotype <<Happening>> */
export interface RecoveryFlow {
  readonly flowId: RecoveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly pendingTransferCount: number;
}

/** @stereotype <<Happening>> */
export interface RollbackFlow {
  readonly flowId: RollbackFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly involvedTransferId: string;
}

/** @stereotype <<Kind>> */
export interface OnlineBankingSystem {
  readonly systemId: OnlineBankingSystemId;
  readonly sourceBalance: number;
  readonly destinationBalance: number;
  readonly transferState: string;
  readonly currentTransferId: string;
  readonly currentAmount: number;
  readonly journalWritten: boolean;
  readonly customerNotified: boolean;
  readonly pendingSourceBalance: number;
  readonly pendingDestinationBalance: number;
  readonly maxResolutionSeconds: number;
}

/** @stereotype <<Category>> */
export interface PciDssCompliant {
  readonly pciDssVersion: string;
  readonly merchantLevel: number;
  readonly lastAssessmentDate: string;
  readonly qsaName: string;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly dataProtectionOfficer: string;
  readonly retentionPolicyYears: number;
  readonly purposeLimitation: string;
  readonly dataMinimisationConfirmed: boolean;
}

/** @stereotype <<Category>> */
export interface NationalClearingCompliant {
  readonly clearingRulesetId: string;
  readonly jurisdiction: string;
  readonly sameDayFinalityRequired: boolean;
  readonly mandatoryReversibilityWindow: number;
}

/** @stereotype <<Category>> */
export interface FinanciallyPlausibleAccount {
}

/** @stereotype <<Category>> */
export interface FinanciallyPlausibleTransfer {
}

/** @stereotype <<Category>> */
export interface ImmutableAndConsistentJournal {
}

/** @stereotype <<Category>> */
export interface BoundedPendingResolution {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly title: string;
  readonly rationale: string;
  readonly riskIfViolated: string;
}

/** @stereotype <<Subkind>> */
export interface OnlineBankingSystemFormalized extends OnlineBankingSystem {
  readonly pciDssVersion: string;
  readonly merchantLevel: number;
  readonly gdprRetentionPolicyYears: number;
  readonly gdprDataMinimisationConfirmed: boolean;
}


// ─── Factory functions ───

export function makeDesignTeam(data: {
  teamId: string;
  name: string;
}): DesignTeam {
  return {
    teamId: data.teamId as DesignTeamId,
    name: data.name,
  };
}

export function makeDesignCustomerProxy(data: {
  proxyId: string;
  name: string;
}): DesignCustomerProxy {
  return {
    proxyId: data.proxyId as DesignCustomerProxyId,
    name: data.name,
  };
}

export function makeDesignRegulatorProxy(data: {
  proxyId: string;
  name: string;
}): DesignRegulatorProxy {
  return {
    proxyId: data.proxyId as DesignRegulatorProxyId,
    name: data.name,
  };
}

export function makeDesignOperatorProxy(data: {
  proxyId: string;
  name: string;
}): DesignOperatorProxy {
  return {
    proxyId: data.proxyId as DesignOperatorProxyId,
    name: data.name,
  };
}

export function makeAccountLedger(data: {
  ledgerId: string;
  sourceAccountId: string;
  destinationAccountId: string;
  sourceBalance: number;
  destinationBalance: number;
  pendingSourceBalance: number;
  pendingDestinationBalance: number;
}): AccountLedger {
  return {
    ledgerId: data.ledgerId as AccountLedgerId,
    sourceAccountId: data.sourceAccountId,
    destinationAccountId: data.destinationAccountId,
    sourceBalance: data.sourceBalance,
    destinationBalance: data.destinationBalance,
    pendingSourceBalance: data.pendingSourceBalance,
    pendingDestinationBalance: data.pendingDestinationBalance,
  };
}

export function makeTransferCoordinator(data: {
  coordinatorId: string;
  currentTransferId: string;
  currentAmount: number;
  transferState: string;
  maxResolutionSeconds: number;
}): TransferCoordinator {
  return {
    coordinatorId: data.coordinatorId as TransferCoordinatorId,
    currentTransferId: data.currentTransferId,
    currentAmount: data.currentAmount,
    transferState: data.transferState,
    maxResolutionSeconds: data.maxResolutionSeconds,
  };
}

export function makeJournalStore(data: {
  storeId: string;
  journalWritten: boolean;
  entryTransferId: string;
  preSourceBalance: number;
  postSourceBalance: number;
  preDestinationBalance: number;
  postDestinationBalance: number;
  entryAmount: number;
  entryCreatedAt: number;
}): JournalStore {
  return {
    storeId: data.storeId as JournalStoreId,
    journalWritten: data.journalWritten,
    entryTransferId: data.entryTransferId,
    preSourceBalance: data.preSourceBalance,
    postSourceBalance: data.postSourceBalance,
    preDestinationBalance: data.preDestinationBalance,
    postDestinationBalance: data.postDestinationBalance,
    entryAmount: data.entryAmount,
    entryCreatedAt: data.entryCreatedAt,
  };
}

export function makeNotificationService(data: {
  serviceId: string;
  customerNotified: boolean;
  lastNotifiedTransferId: string;
}): NotificationService {
  return {
    serviceId: data.serviceId as NotificationServiceId,
    customerNotified: data.customerNotified,
    lastNotifiedTransferId: data.lastNotifiedTransferId,
  };
}

export function makeLedgerCoordinatorChannel(data: {
  channelId: string;
  maxLatencyMs: number;
}): LedgerCoordinatorChannel {
  return {
    channelId: data.channelId as LedgerCoordinatorChannelId,
    maxLatencyMs: data.maxLatencyMs,
  };
}

export function makeCoordinatorJournalChannel(data: {
  channelId: string;
  maxLatencyMs: number;
  journalMustPrecedeCompletion: boolean;
}): CoordinatorJournalChannel {
  return {
    channelId: data.channelId as CoordinatorJournalChannelId,
    maxLatencyMs: data.maxLatencyMs,
    journalMustPrecedeCompletion: data.journalMustPrecedeCompletion,
  };
}

export function makeCoordinatorNotificationChannel(data: {
  channelId: string;
  maxLatencyMs: number;
  journalConfirmedBeforeNotify: boolean;
}): CoordinatorNotificationChannel {
  return {
    channelId: data.channelId as CoordinatorNotificationChannelId,
    maxLatencyMs: data.maxLatencyMs,
    journalConfirmedBeforeNotify: data.journalConfirmedBeforeNotify,
  };
}

export function makeSuccessfulTransferFlow(data: {
  flowId: string;
  transferId: string;
  triggeredBy: string;
  ledgerSnapshotStep: string;
  debitCreditStep: string;
  journalWriteStep: string;
  completionStep: string;
  notificationStep: string;
  outcome: string;
}): SuccessfulTransferFlow {
  return {
    flowId: data.flowId as SuccessfulTransferFlowId,
    transferId: data.transferId,
    triggeredBy: data.triggeredBy,
    ledgerSnapshotStep: data.ledgerSnapshotStep,
    debitCreditStep: data.debitCreditStep,
    journalWriteStep: data.journalWriteStep,
    completionStep: data.completionStep,
    notificationStep: data.notificationStep,
    outcome: data.outcome,
  };
}

export function makeRollbackTransferFlow(data: {
  flowId: string;
  transferId: string;
  triggeredBy: string;
  ledgerRestoreStep: string;
  coordinatorRollbackStep: string;
  notificationStep: string;
  outcome: string;
}): RollbackTransferFlow {
  return {
    flowId: data.flowId as RollbackTransferFlowId,
    transferId: data.transferId,
    triggeredBy: data.triggeredBy,
    ledgerRestoreStep: data.ledgerRestoreStep,
    coordinatorRollbackStep: data.coordinatorRollbackStep,
    notificationStep: data.notificationStep,
    outcome: data.outcome,
  };
}

export function makeRecoveryTransferFlow(data: {
  flowId: string;
  triggeredBy: string;
  pendingTransferId: string;
  recoveryDecision: string;
  ledgerActionStep: string;
  journalActionStep: string;
  notificationStep: string;
  outcome: string;
}): RecoveryTransferFlow {
  return {
    flowId: data.flowId as RecoveryTransferFlowId,
    triggeredBy: data.triggeredBy,
    pendingTransferId: data.pendingTransferId,
    recoveryDecision: data.recoveryDecision,
    ledgerActionStep: data.ledgerActionStep,
    journalActionStep: data.journalActionStep,
    notificationStep: data.notificationStep,
    outcome: data.outcome,
  };
}

export function makeTimeoutRollbackFlow(data: {
  flowId: string;
  transferId: string;
  triggeredBy: string;
  elapsedSeconds: number;
  ledgerRestoreStep: string;
  coordinatorRollbackStep: string;
  notificationStep: string;
  outcome: string;
}): TimeoutRollbackFlow {
  return {
    flowId: data.flowId as TimeoutRollbackFlowId,
    transferId: data.transferId,
    triggeredBy: data.triggeredBy,
    elapsedSeconds: data.elapsedSeconds,
    ledgerRestoreStep: data.ledgerRestoreStep,
    coordinatorRollbackStep: data.coordinatorRollbackStep,
    notificationStep: data.notificationStep,
    outcome: data.outcome,
  };
}

export function makeAdrComponentBoundary(data: {
  adrId: string;
  rationale: string;
}): AdrComponentBoundary {
  return {
    adrId: data.adrId as AdrComponentBoundaryId,
    rationale: data.rationale,
  };
}

export function makeAdrJournalOrderingEnforcement(data: {
  adrId: string;
  rationale: string;
}): AdrJournalOrderingEnforcement {
  return {
    adrId: data.adrId as AdrJournalOrderingEnforcementId,
    rationale: data.rationale,
  };
}

export function makeAdrRollbackAtomicity(data: {
  adrId: string;
  rationale: string;
}): AdrRollbackAtomicity {
  return {
    adrId: data.adrId as AdrRollbackAtomicityId,
    rationale: data.rationale,
  };
}

export function makeAccount(data: {
  accountId: string;
  ownerId: string;
  balance: number;
  status: string;
}): Account {
  return {
    accountId: data.accountId as AccountId,
    ownerId: data.ownerId,
    balance: data.balance,
    status: data.status,
  };
}

export function makeTransfer(data: {
  transferId: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
  state: string;
  initiatedAt: number;
}): Transfer {
  return {
    transferId: data.transferId as TransferId,
    sourceAccountId: data.sourceAccountId,
    destinationAccountId: data.destinationAccountId,
    amount: data.amount,
    state: data.state,
    initiatedAt: data.initiatedAt,
  };
}

export function makeJournalEntry(data: {
  entryId: string;
  transferId: string;
  sourceAccountIdRef: string;
  destinationAccountIdRef: string;
  amount: number;
  preSourceBalance: number;
  postSourceBalance: number;
  preDestinationBalance: number;
  postDestinationBalance: number;
  createdAt: number;
  immutable: boolean;
}): JournalEntry {
  return {
    entryId: data.entryId as JournalEntryId,
    transferId: data.transferId,
    sourceAccountIdRef: data.sourceAccountIdRef,
    destinationAccountIdRef: data.destinationAccountIdRef,
    amount: data.amount,
    preSourceBalance: data.preSourceBalance,
    postSourceBalance: data.postSourceBalance,
    preDestinationBalance: data.preDestinationBalance,
    postDestinationBalance: data.postDestinationBalance,
    createdAt: data.createdAt,
    immutable: data.immutable,
  };
}

export function makePendingState(data: {
  pendingId: string;
  transferId: string;
  originalSourceBalance: number;
  originalDestinationBalance: number;
  pendingSince: number;
  maxResolutionSeconds: number;
}): PendingState {
  return {
    pendingId: data.pendingId as PendingStateId,
    transferId: data.transferId,
    originalSourceBalance: data.originalSourceBalance,
    originalDestinationBalance: data.originalDestinationBalance,
    pendingSince: data.pendingSince,
    maxResolutionSeconds: data.maxResolutionSeconds,
  };
}

export function makeCustomer(data: {
  customerId: string;
  name: string;
  email: string;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
    email: data.email,
  };
}

export function makeRegulator(data: {
  regulatorId: string;
  name: string;
  jurisdiction: string;
}): Regulator {
  return {
    regulatorId: data.regulatorId as RegulatorId,
    name: data.name,
    jurisdiction: data.jurisdiction,
  };
}

export function makeBankOperator(data: {
  operatorId: string;
  name: string;
  operatorRole: string;
}): BankOperator {
  return {
    operatorId: data.operatorId as BankOperatorId,
    name: data.name,
    operatorRole: data.operatorRole,
  };
}

export function makeBankingSystemVendor(data: {
  vendorId: string;
  name: string;
  regulatoryLicenseId: string;
}): BankingSystemVendor {
  return {
    vendorId: data.vendorId as BankingSystemVendorId,
    name: data.name,
    regulatoryLicenseId: data.regulatoryLicenseId,
  };
}

export function makeAtomicTransferCommitment(data: {
  commitmentId: string;
  maxPartialStateSeconds: number;
}): AtomicTransferCommitment {
  return {
    commitmentId: data.commitmentId as AtomicTransferCommitmentId,
    maxPartialStateSeconds: data.maxPartialStateSeconds,
  };
}

export function makeNoOverdraftCommitment(data: {
  commitmentId: string;
  minimumAllowedBalance: number;
}): NoOverdraftCommitment {
  return {
    commitmentId: data.commitmentId as NoOverdraftCommitmentId,
    minimumAllowedBalance: data.minimumAllowedBalance,
  };
}

export function makeAuditJournalCommitment(data: {
  commitmentId: string;
  journalPrecedesNotification: boolean;
}): AuditJournalCommitment {
  return {
    commitmentId: data.commitmentId as AuditJournalCommitmentId,
    journalPrecedesNotification: data.journalPrecedesNotification,
  };
}

export function makeBoundedLatencyCommitment(data: {
  commitmentId: string;
  maxResolutionSeconds: number;
}): BoundedLatencyCommitment {
  return {
    commitmentId: data.commitmentId as BoundedLatencyCommitmentId,
    maxResolutionSeconds: data.maxResolutionSeconds,
  };
}

export function makeBankingSystemVisionCommitment(data: {
  commitmentId: string;
  visionStatement: string;
}): BankingSystemVisionCommitment {
  return {
    commitmentId: data.commitmentId as BankingSystemVisionCommitmentId,
    visionStatement: data.visionStatement,
  };
}

export function makeTransferFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  involvedTransferId: string;
  involvedSourceAccountId: string;
  involvedDestinationAccountId: string;
}): TransferFlow {
  return {
    flowId: data.flowId as TransferFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    involvedTransferId: data.involvedTransferId,
    involvedSourceAccountId: data.involvedSourceAccountId,
    involvedDestinationAccountId: data.involvedDestinationAccountId,
  };
}

export function makeRecoveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  pendingTransferCount: number;
}): RecoveryFlow {
  return {
    flowId: data.flowId as RecoveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    pendingTransferCount: data.pendingTransferCount,
  };
}

export function makeRollbackFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  involvedTransferId: string;
}): RollbackFlow {
  return {
    flowId: data.flowId as RollbackFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    involvedTransferId: data.involvedTransferId,
  };
}

export function makeOnlineBankingSystem(data: {
  systemId: string;
  sourceBalance: number;
  destinationBalance: number;
  transferState: string;
  currentTransferId: string;
  currentAmount: number;
  journalWritten: boolean;
  customerNotified: boolean;
  pendingSourceBalance: number;
  pendingDestinationBalance: number;
  maxResolutionSeconds: number;
}): OnlineBankingSystem {
  return {
    systemId: data.systemId as OnlineBankingSystemId,
    sourceBalance: data.sourceBalance,
    destinationBalance: data.destinationBalance,
    transferState: data.transferState,
    currentTransferId: data.currentTransferId,
    currentAmount: data.currentAmount,
    journalWritten: data.journalWritten,
    customerNotified: data.customerNotified,
    pendingSourceBalance: data.pendingSourceBalance,
    pendingDestinationBalance: data.pendingDestinationBalance,
    maxResolutionSeconds: data.maxResolutionSeconds,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  title: string;
  rationale: string;
  riskIfViolated: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    title: data.title,
    rationale: data.rationale,
    riskIfViolated: data.riskIfViolated,
  };
}


// ─── Runtime invariant validators ───

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

/** Runtime invariant check for DesignCustomerProxy. Returns empty array when valid. */
export function validateDesignCustomerProxy(instance: DesignCustomerProxy): readonly string[] {
  const violations: string[] = [];
  if (!((instance.proxyId !== null))) {
    violations.push("[DesignCustomerProxy] invariant violated: self.proxyId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[DesignCustomerProxy] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignRegulatorProxy. Returns empty array when valid. */
export function validateDesignRegulatorProxy(instance: DesignRegulatorProxy): readonly string[] {
  const violations: string[] = [];
  if (!((instance.proxyId !== null))) {
    violations.push("[DesignRegulatorProxy] invariant violated: self.proxyId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[DesignRegulatorProxy] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignOperatorProxy. Returns empty array when valid. */
export function validateDesignOperatorProxy(instance: DesignOperatorProxy): readonly string[] {
  const violations: string[] = [];
  if (!((instance.proxyId !== null))) {
    violations.push("[DesignOperatorProxy] invariant violated: self.proxyId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[DesignOperatorProxy] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for AccountLedger. Returns empty array when valid. */
export function validateAccountLedger(instance: AccountLedger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ledgerId !== null))) {
    violations.push("[AccountLedger] invariant violated: self.ledgerId <> null");
  }
  if (!((instance.sourceAccountId !== null))) {
    violations.push("[AccountLedger] invariant violated: self.sourceAccountId <> null");
  }
  if (!((instance.destinationAccountId !== null))) {
    violations.push("[AccountLedger] invariant violated: self.destinationAccountId <> null");
  }
  if (!((instance.sourceAccountId !== instance.destinationAccountId))) {
    violations.push("[AccountLedger] invariant violated: self.sourceAccountId <> self.destinationAccountId");
  }
  if (!((instance.sourceBalance >= 0))) {
    violations.push("[AccountLedger] invariant violated: self.sourceBalance >= 0.0");
  }
  if (!((instance.destinationBalance >= 0))) {
    violations.push("[AccountLedger] invariant violated: self.destinationBalance >= 0.0");
  }
  if (!((instance.pendingSourceBalance >= 0))) {
    violations.push("[AccountLedger] invariant violated: self.pendingSourceBalance >= 0.0");
  }
  if (!((instance.pendingDestinationBalance >= 0))) {
    violations.push("[AccountLedger] invariant violated: self.pendingDestinationBalance >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for TransferCoordinator. Returns empty array when valid. */
export function validateTransferCoordinator(instance: TransferCoordinator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.coordinatorId !== null))) {
    violations.push("[TransferCoordinator] invariant violated: self.coordinatorId <> null");
  }
  if (!((instance.currentAmount >= 0))) {
    violations.push("[TransferCoordinator] invariant violated: self.currentAmount >= 0.0");
  }
  if (!(((((instance.transferState === "IDLE") || (instance.transferState === "PENDING")) || (instance.transferState === "COMPLETED")) || (instance.transferState === "ROLLED_BACK")))) {
    violations.push("[TransferCoordinator] invariant violated: self.transferState = 'IDLE'\n      or self.transferState = 'PENDING'\n      or self.transferState = 'COMPLETED'\n      or self.transferState = 'ROLLED_BACK'");
  }
  if (!((instance.maxResolutionSeconds <= 30))) {
    violations.push("[TransferCoordinator] invariant violated: self.maxResolutionSeconds <= 30");
  }
  return violations;
}

/** Runtime invariant check for JournalStore. Returns empty array when valid. */
export function validateJournalStore(instance: JournalStore): readonly string[] {
  const violations: string[] = [];
  if (!((instance.storeId !== null))) {
    violations.push("[JournalStore] invariant violated: self.storeId <> null");
  }
  if (!((instance.preSourceBalance >= 0))) {
    violations.push("[JournalStore] invariant violated: self.preSourceBalance >= 0.0");
  }
  if (!((instance.postSourceBalance >= 0))) {
    violations.push("[JournalStore] invariant violated: self.postSourceBalance >= 0.0");
  }
  if (!((instance.preDestinationBalance >= 0))) {
    violations.push("[JournalStore] invariant violated: self.preDestinationBalance >= 0.0");
  }
  if (!((instance.postDestinationBalance >= 0))) {
    violations.push("[JournalStore] invariant violated: self.postDestinationBalance >= 0.0");
  }
  if (!((!(instance.journalWritten) || (instance.entryAmount > 0)))) {
    violations.push("[JournalStore] invariant violated: self.journalWritten implies self.entryAmount > 0.0");
  }
  return violations;
}

/** Runtime invariant check for NotificationService. Returns empty array when valid. */
export function validateNotificationService(instance: NotificationService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.serviceId !== null))) {
    violations.push("[NotificationService] invariant violated: self.serviceId <> null");
  }
  return violations;
}

/** Runtime invariant check for LedgerCoordinatorChannel. Returns empty array when valid. */
export function validateLedgerCoordinatorChannel(instance: LedgerCoordinatorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[LedgerCoordinatorChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.maxLatencyMs > 0))) {
    violations.push("[LedgerCoordinatorChannel] invariant violated: self.maxLatencyMs > 0");
  }
  if (!((instance.maxLatencyMs <= 5000))) {
    violations.push("[LedgerCoordinatorChannel] invariant violated: self.maxLatencyMs <= 5000");
  }
  return violations;
}

/** Runtime invariant check for CoordinatorJournalChannel. Returns empty array when valid. */
export function validateCoordinatorJournalChannel(instance: CoordinatorJournalChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[CoordinatorJournalChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.maxLatencyMs > 0))) {
    violations.push("[CoordinatorJournalChannel] invariant violated: self.maxLatencyMs > 0");
  }
  if (!((instance.maxLatencyMs <= 5000))) {
    violations.push("[CoordinatorJournalChannel] invariant violated: self.maxLatencyMs <= 5000");
  }
  if (!((instance.journalMustPrecedeCompletion === true))) {
    violations.push("[CoordinatorJournalChannel] invariant violated: self.journalMustPrecedeCompletion = true");
  }
  return violations;
}

/** Runtime invariant check for CoordinatorNotificationChannel. Returns empty array when valid. */
export function validateCoordinatorNotificationChannel(instance: CoordinatorNotificationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[CoordinatorNotificationChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.maxLatencyMs > 0))) {
    violations.push("[CoordinatorNotificationChannel] invariant violated: self.maxLatencyMs > 0");
  }
  if (!((instance.maxLatencyMs <= 5000))) {
    violations.push("[CoordinatorNotificationChannel] invariant violated: self.maxLatencyMs <= 5000");
  }
  if (!((instance.journalConfirmedBeforeNotify === true))) {
    violations.push("[CoordinatorNotificationChannel] invariant violated: self.journalConfirmedBeforeNotify = true");
  }
  return violations;
}

/** Runtime invariant check for SuccessfulTransferFlow. Returns empty array when valid. */
export function validateSuccessfulTransferFlow(instance: SuccessfulTransferFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SuccessfulTransferFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.transferId !== null))) {
    violations.push("[SuccessfulTransferFlow] invariant violated: self.transferId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[SuccessfulTransferFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SuccessfulTransferFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for RollbackTransferFlow. Returns empty array when valid. */
export function validateRollbackTransferFlow(instance: RollbackTransferFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RollbackTransferFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.transferId !== null))) {
    violations.push("[RollbackTransferFlow] invariant violated: self.transferId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[RollbackTransferFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[RollbackTransferFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for RecoveryTransferFlow. Returns empty array when valid. */
export function validateRecoveryTransferFlow(instance: RecoveryTransferFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RecoveryTransferFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[RecoveryTransferFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.pendingTransferId !== null))) {
    violations.push("[RecoveryTransferFlow] invariant violated: self.pendingTransferId <> null");
  }
  if (!(((instance.recoveryDecision === "COMPLETE") || (instance.recoveryDecision === "ROLLBACK")))) {
    violations.push("[RecoveryTransferFlow] invariant violated: self.recoveryDecision = 'COMPLETE' or self.recoveryDecision = 'ROLLBACK'");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[RecoveryTransferFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for TimeoutRollbackFlow. Returns empty array when valid. */
export function validateTimeoutRollbackFlow(instance: TimeoutRollbackFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[TimeoutRollbackFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.transferId !== null))) {
    violations.push("[TimeoutRollbackFlow] invariant violated: self.transferId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[TimeoutRollbackFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.elapsedSeconds > 0))) {
    violations.push("[TimeoutRollbackFlow] invariant violated: self.elapsedSeconds > 0");
  }
  if (!((instance.elapsedSeconds <= 30))) {
    violations.push("[TimeoutRollbackFlow] invariant violated: self.elapsedSeconds <= 30");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[TimeoutRollbackFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for Account. Returns empty array when valid. */
export function validateAccount(instance: Account): readonly string[] {
  const violations: string[] = [];
  if (!((instance.accountId !== null))) {
    violations.push("[Account] invariant violated: self.accountId <> null");
  }
  if (!((instance.ownerId !== null))) {
    violations.push("[Account] invariant violated: self.ownerId <> null");
  }
  if (!((instance.balance >= 0))) {
    violations.push("[Account] invariant violated: self.balance >= 0.0");
  }
  if (!((instance.status !== null))) {
    violations.push("[Account] invariant violated: self.status <> null");
  }
  return violations;
}

/** Runtime invariant check for Transfer. Returns empty array when valid. */
export function validateTransfer(instance: Transfer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.transferId !== null))) {
    violations.push("[Transfer] invariant violated: self.transferId <> null");
  }
  if (!((instance.sourceAccountId !== null))) {
    violations.push("[Transfer] invariant violated: self.sourceAccountId <> null");
  }
  if (!((instance.destinationAccountId !== null))) {
    violations.push("[Transfer] invariant violated: self.destinationAccountId <> null");
  }
  if (!((instance.sourceAccountId !== instance.destinationAccountId))) {
    violations.push("[Transfer] invariant violated: self.sourceAccountId <> self.destinationAccountId");
  }
  if (!((instance.amount > 0))) {
    violations.push("[Transfer] invariant violated: self.amount > 0.0");
  }
  if (!((instance.state !== null))) {
    violations.push("[Transfer] invariant violated: self.state <> null");
  }
  return violations;
}

/** Runtime invariant check for JournalEntry. Returns empty array when valid. */
export function validateJournalEntry(instance: JournalEntry): readonly string[] {
  const violations: string[] = [];
  if (!((instance.entryId !== null))) {
    violations.push("[JournalEntry] invariant violated: self.entryId <> null");
  }
  if (!((instance.transferId !== null))) {
    violations.push("[JournalEntry] invariant violated: self.transferId <> null");
  }
  if (!((instance.amount > 0))) {
    violations.push("[JournalEntry] invariant violated: self.amount > 0.0");
  }
  if (!((instance.immutable === true))) {
    violations.push("[JournalEntry] invariant violated: self.immutable = true");
  }
  if (!((instance.preSourceBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.preSourceBalance >= 0.0");
  }
  if (!((instance.postSourceBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.postSourceBalance >= 0.0");
  }
  if (!((instance.preDestinationBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.preDestinationBalance >= 0.0");
  }
  if (!((instance.postDestinationBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.postDestinationBalance >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for PendingState. Returns empty array when valid. */
export function validatePendingState(instance: PendingState): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pendingId !== null))) {
    violations.push("[PendingState] invariant violated: self.pendingId <> null");
  }
  if (!((instance.transferId !== null))) {
    violations.push("[PendingState] invariant violated: self.transferId <> null");
  }
  if (!((instance.originalSourceBalance >= 0))) {
    violations.push("[PendingState] invariant violated: self.originalSourceBalance >= 0.0");
  }
  if (!((instance.originalDestinationBalance >= 0))) {
    violations.push("[PendingState] invariant violated: self.originalDestinationBalance >= 0.0");
  }
  if (!((instance.maxResolutionSeconds > 0))) {
    violations.push("[PendingState] invariant violated: self.maxResolutionSeconds > 0");
  }
  return violations;
}

/** Runtime invariant check for Customer. Returns empty array when valid. */
export function validateCustomer(instance: Customer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.customerId !== null))) {
    violations.push("[Customer] invariant violated: self.customerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Customer] invariant violated: self.name <> null");
  }
  if (!((instance.email !== null))) {
    violations.push("[Customer] invariant violated: self.email <> null");
  }
  return violations;
}

/** Runtime invariant check for Regulator. Returns empty array when valid. */
export function validateRegulator(instance: Regulator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[Regulator] invariant violated: self.regulatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Regulator] invariant violated: self.name <> null");
  }
  if (!((instance.jurisdiction !== null))) {
    violations.push("[Regulator] invariant violated: self.jurisdiction <> null");
  }
  return violations;
}

/** Runtime invariant check for BankOperator. Returns empty array when valid. */
export function validateBankOperator(instance: BankOperator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[BankOperator] invariant violated: self.operatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[BankOperator] invariant violated: self.name <> null");
  }
  if (!((instance.operatorRole !== null))) {
    violations.push("[BankOperator] invariant violated: self.operatorRole <> null");
  }
  return violations;
}

/** Runtime invariant check for BankingSystemVendor. Returns empty array when valid. */
export function validateBankingSystemVendor(instance: BankingSystemVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[BankingSystemVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[BankingSystemVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for NoOverdraftConstraint. Returns empty array when valid. */
export function validateNoOverdraftConstraint(instance: NoOverdraftConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.balance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AtomicTransferConstraint. Returns empty array when valid. */
export function validateAtomicTransferConstraint(instance: AtomicTransferConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.state = 'PENDING' or bearer.state = 'COMPLETED' or bearer.state = 'ROLLED_BACK' — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ImmutableJournalConstraint. Returns empty array when valid. */
export function validateImmutableJournalConstraint(instance: ImmutableJournalConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.immutable = true — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BoundedLatencyConstraint. Returns empty array when valid. */
export function validateBoundedLatencyConstraint(instance: BoundedLatencyConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxResolutionSeconds <= 30 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TransferFlow. Returns empty array when valid. */
export function validateTransferFlow(instance: TransferFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[TransferFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[TransferFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[TransferFlow] invariant violated: self.outcome <> null");
  }
  if (!((instance.involvedTransferId !== null))) {
    violations.push("[TransferFlow] invariant violated: self.involvedTransferId <> null");
  }
  return violations;
}

/** Runtime invariant check for RecoveryFlow. Returns empty array when valid. */
export function validateRecoveryFlow(instance: RecoveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RecoveryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[RecoveryFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.pendingTransferCount >= 0))) {
    violations.push("[RecoveryFlow] invariant violated: self.pendingTransferCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for RollbackFlow. Returns empty array when valid. */
export function validateRollbackFlow(instance: RollbackFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RollbackFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[RollbackFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.involvedTransferId !== null))) {
    violations.push("[RollbackFlow] invariant violated: self.involvedTransferId <> null");
  }
  return violations;
}

/** Runtime invariant check for OnlineBankingSystem. Returns empty array when valid. */
export function validateOnlineBankingSystem(instance: OnlineBankingSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[OnlineBankingSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.sourceBalance >= 0))) {
    violations.push("[OnlineBankingSystem] invariant violated: self.sourceBalance >= 0.0");
  }
  if (!((instance.destinationBalance >= 0))) {
    violations.push("[OnlineBankingSystem] invariant violated: self.destinationBalance >= 0.0");
  }
  if (!((instance.currentAmount >= 0))) {
    violations.push("[OnlineBankingSystem] invariant violated: self.currentAmount >= 0.0");
  }
  if (!(((((instance.transferState === "IDLE") || (instance.transferState === "PENDING")) || (instance.transferState === "COMPLETED")) || (instance.transferState === "ROLLED_BACK")))) {
    violations.push("[OnlineBankingSystem] invariant violated: self.transferState = 'IDLE'\n      or self.transferState = 'PENDING'\n      or self.transferState = 'COMPLETED'\n      or self.transferState = 'ROLLED_BACK'");
  }
  if (!((instance.maxResolutionSeconds <= 30))) {
    violations.push("[OnlineBankingSystem] invariant violated: self.maxResolutionSeconds <= 30");
  }
  if (!((!((instance.customerNotified === true)) || (instance.journalWritten === true)))) {
    violations.push("[OnlineBankingSystem] invariant violated: (self.customerNotified = true) implies (self.journalWritten = true)");
  }
  return violations;
}

/** Runtime invariant check for PciDssCompliant. Returns empty array when valid. */
export function validatePciDssCompliant(instance: PciDssCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pciDssVersion !== null))) {
    violations.push("[PciDssCompliant] invariant violated: self.pciDssVersion <> null");
  }
  if (!((instance.merchantLevel >= 1))) {
    violations.push("[PciDssCompliant] invariant violated: self.merchantLevel >= 1");
  }
  if (!((instance.merchantLevel <= 4))) {
    violations.push("[PciDssCompliant] invariant violated: self.merchantLevel <= 4");
  }
  if (!((instance.lastAssessmentDate !== null))) {
    violations.push("[PciDssCompliant] invariant violated: self.lastAssessmentDate <> null");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.retentionPolicyYears > 0))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.retentionPolicyYears > 0");
  }
  if (!((instance.dataMinimisationConfirmed === true))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.dataMinimisationConfirmed = true");
  }
  if (!((instance.purposeLimitation !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.purposeLimitation <> null");
  }
  return violations;
}

/** Runtime invariant check for NationalClearingCompliant. Returns empty array when valid. */
export function validateNationalClearingCompliant(instance: NationalClearingCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearingRulesetId !== null))) {
    violations.push("[NationalClearingCompliant] invariant violated: self.clearingRulesetId <> null");
  }
  if (!((instance.jurisdiction !== null))) {
    violations.push("[NationalClearingCompliant] invariant violated: self.jurisdiction <> null");
  }
  if (!((instance.mandatoryReversibilityWindow >= 0))) {
    violations.push("[NationalClearingCompliant] invariant violated: self.mandatoryReversibilityWindow >= 0");
  }
  return violations;
}

/** Runtime invariant check for FinanciallyPlausibleAccount. Returns empty array when valid. */
export function validateFinanciallyPlausibleAccount(instance: FinanciallyPlausibleAccount): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.balance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.balance <= 1000000000000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FinanciallyPlausibleTransfer. Returns empty array when valid. */
export function validateFinanciallyPlausibleTransfer(instance: FinanciallyPlausibleTransfer): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount <= 10000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ImmutableAndConsistentJournal. Returns empty array when valid. */
export function validateImmutableAndConsistentJournal(instance: ImmutableAndConsistentJournal): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.immutable = true — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.preSourceBalance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.postSourceBalance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.preDestinationBalance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.postDestinationBalance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.postSourceBalance < bearer.preSourceBalance — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.postDestinationBalance > bearer.preDestinationBalance — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BoundedPendingResolution. Returns empty array when valid. */
export function validateBoundedPendingResolution(instance: BoundedPendingResolution): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxResolutionSeconds > 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxResolutionSeconds <= 30 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.title !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.title <> null");
  }
  if (!((instance.rationale !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.rationale <> null");
  }
  return violations;
}

/** Runtime invariant check for OnlineBankingSystemFormalized. Returns empty array when valid. */
export function validateOnlineBankingSystemFormalized(instance: OnlineBankingSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pciDssVersion !== null))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.pciDssVersion <> null");
  }
  if (!((instance.merchantLevel >= 1))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.merchantLevel >= 1");
  }
  if (!((instance.merchantLevel <= 4))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.merchantLevel <= 4");
  }
  if (!((instance.gdprRetentionPolicyYears > 0))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.gdprRetentionPolicyYears > 0");
  }
  if (!((instance.gdprDataMinimisationConfirmed === true))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.gdprDataMinimisationConfirmed = true");
  }
  if (!((instance.currentAmount <= 10000))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.currentAmount <= 10000.0");
  }
  if (!((instance.maxResolutionSeconds <= 30))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: self.maxResolutionSeconds <= 30");
  }
  if (!((!((instance.customerNotified === true)) || (instance.journalWritten === true)))) {
    violations.push("[OnlineBankingSystemFormalized] invariant violated: (self.customerNotified = true) implies (self.journalWritten = true)");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for AccountLedger.captureSnapshot. User supplies this. */
export type AccountLedgerCaptureSnapshotImpl = (self: AccountLedger, amount: number) => { self: AccountLedger; modified: { pendingSourceBalance: unknown; pendingDestinationBalance: unknown } };

/** Contract-checking wrapper for AccountLedger.captureSnapshot. */
export function wrapAccountLedgerCaptureSnapshot(impl: AccountLedgerCaptureSnapshotImpl): (self: AccountLedger, amount: number) => AccountLedger {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.captureSnapshot] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance >= amount))) {
      preViolations.push("[AccountLedger.captureSnapshot] pre violated: self.sourceBalance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.pendingSourceBalance === __result.self.sourceBalance))) {
        postViolations.push("[AccountLedger.captureSnapshot] post violated: self.pendingSourceBalance = self.sourceBalance");
      }
      if (!((__result.self.pendingDestinationBalance === __result.self.destinationBalance))) {
        postViolations.push("[AccountLedger.captureSnapshot] post violated: self.pendingDestinationBalance = self.destinationBalance");
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

/** Impl signature for AccountLedger.captureSnapshot (async). User supplies this. */
export type AccountLedgerCaptureSnapshotAsyncImpl = (self: AccountLedger, amount: number) => Promise<{ self: AccountLedger; modified: { pendingSourceBalance: unknown; pendingDestinationBalance: unknown } }>;

/** Contract-checking wrapper for AccountLedger.captureSnapshot (async). */
export function wrapAccountLedgerCaptureSnapshotAsync(impl: AccountLedgerCaptureSnapshotAsyncImpl): (self: AccountLedger, amount: number) => Promise<AccountLedger> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.captureSnapshot] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance >= amount))) {
      preViolations.push("[AccountLedger.captureSnapshot] pre violated: self.sourceBalance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.pendingSourceBalance === __result.self.sourceBalance))) {
        postViolations.push("[AccountLedger.captureSnapshot] post violated: self.pendingSourceBalance = self.sourceBalance");
      }
      if (!((__result.self.pendingDestinationBalance === __result.self.destinationBalance))) {
        postViolations.push("[AccountLedger.captureSnapshot] post violated: self.pendingDestinationBalance = self.destinationBalance");
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

/** Impl signature for AccountLedger.applyDebitCredit. User supplies this. */
export type AccountLedgerApplyDebitCreditImpl = (self: AccountLedger, amount: number) => { self: AccountLedger; modified: { sourceBalance: unknown; destinationBalance: unknown } };

/** Contract-checking wrapper for AccountLedger.applyDebitCredit. */
export function wrapAccountLedgerApplyDebitCredit(impl: AccountLedgerApplyDebitCreditImpl): (self: AccountLedger, amount: number) => AccountLedger {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.applyDebitCredit] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance >= amount))) {
      preViolations.push("[AccountLedger.applyDebitCredit] pre violated: self.sourceBalance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sourceBalance": self.sourceBalance,
      "self.destinationBalance": self.destinationBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === (__pre["self.sourceBalance"] - amount)))) {
        postViolations.push("[AccountLedger.applyDebitCredit] post violated: self.sourceBalance = self.sourceBalance@pre - amount");
      }
      if (!((__result.self.destinationBalance === (__pre["self.destinationBalance"] + amount)))) {
        postViolations.push("[AccountLedger.applyDebitCredit] post violated: self.destinationBalance = self.destinationBalance@pre + amount");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[AccountLedger.applyDebitCredit] post violated: self.sourceBalance >= 0.0");
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

/** Impl signature for AccountLedger.applyDebitCredit (async). User supplies this. */
export type AccountLedgerApplyDebitCreditAsyncImpl = (self: AccountLedger, amount: number) => Promise<{ self: AccountLedger; modified: { sourceBalance: unknown; destinationBalance: unknown } }>;

/** Contract-checking wrapper for AccountLedger.applyDebitCredit (async). */
export function wrapAccountLedgerApplyDebitCreditAsync(impl: AccountLedgerApplyDebitCreditAsyncImpl): (self: AccountLedger, amount: number) => Promise<AccountLedger> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.applyDebitCredit] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance >= amount))) {
      preViolations.push("[AccountLedger.applyDebitCredit] pre violated: self.sourceBalance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sourceBalance": self.sourceBalance,
      "self.destinationBalance": self.destinationBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === (__pre["self.sourceBalance"] - amount)))) {
        postViolations.push("[AccountLedger.applyDebitCredit] post violated: self.sourceBalance = self.sourceBalance@pre - amount");
      }
      if (!((__result.self.destinationBalance === (__pre["self.destinationBalance"] + amount)))) {
        postViolations.push("[AccountLedger.applyDebitCredit] post violated: self.destinationBalance = self.destinationBalance@pre + amount");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[AccountLedger.applyDebitCredit] post violated: self.sourceBalance >= 0.0");
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

/** Impl signature for AccountLedger.restoreSnapshot. User supplies this. */
export type AccountLedgerRestoreSnapshotImpl = (self: AccountLedger) => { self: AccountLedger; modified: { sourceBalance: unknown; destinationBalance: unknown } };

/** Contract-checking wrapper for AccountLedger.restoreSnapshot. */
export function wrapAccountLedgerRestoreSnapshot(impl: AccountLedgerRestoreSnapshotImpl): (self: AccountLedger) => AccountLedger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.pendingSourceBalance >= 0))) {
      preViolations.push("[AccountLedger.restoreSnapshot] pre violated: self.pendingSourceBalance >= 0.0");
    }
    if (!((self.pendingDestinationBalance >= 0))) {
      preViolations.push("[AccountLedger.restoreSnapshot] pre violated: self.pendingDestinationBalance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === __result.self.pendingSourceBalance))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.sourceBalance = self.pendingSourceBalance");
      }
      if (!((__result.self.destinationBalance === __result.self.pendingDestinationBalance))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.destinationBalance = self.pendingDestinationBalance");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for AccountLedger.restoreSnapshot (async). User supplies this. */
export type AccountLedgerRestoreSnapshotAsyncImpl = (self: AccountLedger) => Promise<{ self: AccountLedger; modified: { sourceBalance: unknown; destinationBalance: unknown } }>;

/** Contract-checking wrapper for AccountLedger.restoreSnapshot (async). */
export function wrapAccountLedgerRestoreSnapshotAsync(impl: AccountLedgerRestoreSnapshotAsyncImpl): (self: AccountLedger) => Promise<AccountLedger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.pendingSourceBalance >= 0))) {
      preViolations.push("[AccountLedger.restoreSnapshot] pre violated: self.pendingSourceBalance >= 0.0");
    }
    if (!((self.pendingDestinationBalance >= 0))) {
      preViolations.push("[AccountLedger.restoreSnapshot] pre violated: self.pendingDestinationBalance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === __result.self.pendingSourceBalance))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.sourceBalance = self.pendingSourceBalance");
      }
      if (!((__result.self.destinationBalance === __result.self.pendingDestinationBalance))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.destinationBalance = self.pendingDestinationBalance");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[AccountLedger.restoreSnapshot] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for AccountLedger.clearSnapshot. User supplies this. */
export type AccountLedgerClearSnapshotImpl = (self: AccountLedger) => { self: AccountLedger; modified: { pendingSourceBalance: unknown; pendingDestinationBalance: unknown } };

/** Contract-checking wrapper for AccountLedger.clearSnapshot. */
export function wrapAccountLedgerClearSnapshot(impl: AccountLedgerClearSnapshotImpl): (self: AccountLedger) => AccountLedger {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pendingSourceBalance === 0))) {
        postViolations.push("[AccountLedger.clearSnapshot] post violated: self.pendingSourceBalance = 0.0");
      }
      if (!((__result.self.pendingDestinationBalance === 0))) {
        postViolations.push("[AccountLedger.clearSnapshot] post violated: self.pendingDestinationBalance = 0.0");
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

/** Impl signature for AccountLedger.clearSnapshot (async). User supplies this. */
export type AccountLedgerClearSnapshotAsyncImpl = (self: AccountLedger) => Promise<{ self: AccountLedger; modified: { pendingSourceBalance: unknown; pendingDestinationBalance: unknown } }>;

/** Contract-checking wrapper for AccountLedger.clearSnapshot (async). */
export function wrapAccountLedgerClearSnapshotAsync(impl: AccountLedgerClearSnapshotAsyncImpl): (self: AccountLedger) => Promise<AccountLedger> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pendingSourceBalance === 0))) {
        postViolations.push("[AccountLedger.clearSnapshot] post violated: self.pendingSourceBalance = 0.0");
      }
      if (!((__result.self.pendingDestinationBalance === 0))) {
        postViolations.push("[AccountLedger.clearSnapshot] post violated: self.pendingDestinationBalance = 0.0");
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

/** Impl signature for TransferCoordinator.beginTransfer. User supplies this. */
export type TransferCoordinatorBeginTransferImpl = (self: TransferCoordinator, transferId: string, amount: number) => { self: TransferCoordinator; modified: { transferState: unknown; currentTransferId: unknown; currentAmount: unknown } };

/** Contract-checking wrapper for TransferCoordinator.beginTransfer. */
export function wrapTransferCoordinatorBeginTransfer(impl: TransferCoordinatorBeginTransferImpl): (self: TransferCoordinator, transferId: string, amount: number) => TransferCoordinator {
  return (self, transferId, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[TransferCoordinator.beginTransfer] pre violated: self.transferState = 'IDLE'");
    }
    if (!((transferId !== null))) {
      preViolations.push("[TransferCoordinator.beginTransfer] pre violated: transferId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[TransferCoordinator.beginTransfer] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "PENDING"))) {
        postViolations.push("[TransferCoordinator.beginTransfer] post violated: self.transferState = 'PENDING'");
      }
      if (!((__result.self.currentTransferId === transferId))) {
        postViolations.push("[TransferCoordinator.beginTransfer] post violated: self.currentTransferId = transferId");
      }
      if (!((__result.self.currentAmount === amount))) {
        postViolations.push("[TransferCoordinator.beginTransfer] post violated: self.currentAmount = amount");
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

/** Impl signature for TransferCoordinator.beginTransfer (async). User supplies this. */
export type TransferCoordinatorBeginTransferAsyncImpl = (self: TransferCoordinator, transferId: string, amount: number) => Promise<{ self: TransferCoordinator; modified: { transferState: unknown; currentTransferId: unknown; currentAmount: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.beginTransfer (async). */
export function wrapTransferCoordinatorBeginTransferAsync(impl: TransferCoordinatorBeginTransferAsyncImpl): (self: TransferCoordinator, transferId: string, amount: number) => Promise<TransferCoordinator> {
  return async (self, transferId, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[TransferCoordinator.beginTransfer] pre violated: self.transferState = 'IDLE'");
    }
    if (!((transferId !== null))) {
      preViolations.push("[TransferCoordinator.beginTransfer] pre violated: transferId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[TransferCoordinator.beginTransfer] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "PENDING"))) {
        postViolations.push("[TransferCoordinator.beginTransfer] post violated: self.transferState = 'PENDING'");
      }
      if (!((__result.self.currentTransferId === transferId))) {
        postViolations.push("[TransferCoordinator.beginTransfer] post violated: self.currentTransferId = transferId");
      }
      if (!((__result.self.currentAmount === amount))) {
        postViolations.push("[TransferCoordinator.beginTransfer] post violated: self.currentAmount = amount");
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

/** Impl signature for TransferCoordinator.completeTransfer. User supplies this. */
export type TransferCoordinatorCompleteTransferImpl = (self: TransferCoordinator) => { self: TransferCoordinator; modified: { transferState: unknown } };

/** Contract-checking wrapper for TransferCoordinator.completeTransfer. */
export function wrapTransferCoordinatorCompleteTransfer(impl: TransferCoordinatorCompleteTransferImpl): (self: TransferCoordinator) => TransferCoordinator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[TransferCoordinator.completeTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "COMPLETED"))) {
        postViolations.push("[TransferCoordinator.completeTransfer] post violated: self.transferState = 'COMPLETED'");
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

/** Impl signature for TransferCoordinator.completeTransfer (async). User supplies this. */
export type TransferCoordinatorCompleteTransferAsyncImpl = (self: TransferCoordinator) => Promise<{ self: TransferCoordinator; modified: { transferState: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.completeTransfer (async). */
export function wrapTransferCoordinatorCompleteTransferAsync(impl: TransferCoordinatorCompleteTransferAsyncImpl): (self: TransferCoordinator) => Promise<TransferCoordinator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[TransferCoordinator.completeTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "COMPLETED"))) {
        postViolations.push("[TransferCoordinator.completeTransfer] post violated: self.transferState = 'COMPLETED'");
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

/** Impl signature for TransferCoordinator.markRolledBack. User supplies this. */
export type TransferCoordinatorMarkRolledBackImpl = (self: TransferCoordinator) => { self: TransferCoordinator; modified: { transferState: unknown } };

/** Contract-checking wrapper for TransferCoordinator.markRolledBack. */
export function wrapTransferCoordinatorMarkRolledBack(impl: TransferCoordinatorMarkRolledBackImpl): (self: TransferCoordinator) => TransferCoordinator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[TransferCoordinator.markRolledBack] pre violated: self.transferState = 'PENDING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "ROLLED_BACK"))) {
        postViolations.push("[TransferCoordinator.markRolledBack] post violated: self.transferState = 'ROLLED_BACK'");
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

/** Impl signature for TransferCoordinator.markRolledBack (async). User supplies this. */
export type TransferCoordinatorMarkRolledBackAsyncImpl = (self: TransferCoordinator) => Promise<{ self: TransferCoordinator; modified: { transferState: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.markRolledBack (async). */
export function wrapTransferCoordinatorMarkRolledBackAsync(impl: TransferCoordinatorMarkRolledBackAsyncImpl): (self: TransferCoordinator) => Promise<TransferCoordinator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[TransferCoordinator.markRolledBack] pre violated: self.transferState = 'PENDING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "ROLLED_BACK"))) {
        postViolations.push("[TransferCoordinator.markRolledBack] post violated: self.transferState = 'ROLLED_BACK'");
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

/** Impl signature for TransferCoordinator.resetCoordinator. User supplies this. */
export type TransferCoordinatorResetCoordinatorImpl = (self: TransferCoordinator) => { self: TransferCoordinator; modified: { transferState: unknown; currentAmount: unknown } };

/** Contract-checking wrapper for TransferCoordinator.resetCoordinator. */
export function wrapTransferCoordinatorResetCoordinator(impl: TransferCoordinatorResetCoordinatorImpl): (self: TransferCoordinator) => TransferCoordinator {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.transferState === "COMPLETED") || (self.transferState === "ROLLED_BACK")))) {
      preViolations.push("[TransferCoordinator.resetCoordinator] pre violated: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[TransferCoordinator.resetCoordinator] post violated: self.transferState = 'IDLE'");
      }
      if (!((__result.self.currentAmount === 0))) {
        postViolations.push("[TransferCoordinator.resetCoordinator] post violated: self.currentAmount = 0.0");
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

/** Impl signature for TransferCoordinator.resetCoordinator (async). User supplies this. */
export type TransferCoordinatorResetCoordinatorAsyncImpl = (self: TransferCoordinator) => Promise<{ self: TransferCoordinator; modified: { transferState: unknown; currentAmount: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.resetCoordinator (async). */
export function wrapTransferCoordinatorResetCoordinatorAsync(impl: TransferCoordinatorResetCoordinatorAsyncImpl): (self: TransferCoordinator) => Promise<TransferCoordinator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.transferState === "COMPLETED") || (self.transferState === "ROLLED_BACK")))) {
      preViolations.push("[TransferCoordinator.resetCoordinator] pre violated: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[TransferCoordinator.resetCoordinator] post violated: self.transferState = 'IDLE'");
      }
      if (!((__result.self.currentAmount === 0))) {
        postViolations.push("[TransferCoordinator.resetCoordinator] post violated: self.currentAmount = 0.0");
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

/** Impl signature for JournalStore.writeEntry. User supplies this. */
export type JournalStoreWriteEntryImpl = (self: JournalStore, transferId: string, preSrc: number, postSrc: number, preDst: number, postDst: number, amount: number, createdAt: number) => { self: JournalStore; modified: { journalWritten: unknown; entryTransferId: unknown; preSourceBalance: unknown; postSourceBalance: unknown; preDestinationBalance: unknown; postDestinationBalance: unknown; entryAmount: unknown; entryCreatedAt: unknown } };

/** Contract-checking wrapper for JournalStore.writeEntry. */
export function wrapJournalStoreWriteEntry(impl: JournalStoreWriteEntryImpl): (self: JournalStore, transferId: string, preSrc: number, postSrc: number, preDst: number, postDst: number, amount: number, createdAt: number) => JournalStore {
  return (self, transferId, preSrc, postSrc, preDst, postDst, amount, createdAt) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === false))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: self.journalWritten = false");
    }
    if (!((transferId !== null))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: transferId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: amount > 0.0");
    }
    if (!((preSrc >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: preSrc >= 0.0");
    }
    if (!((postSrc >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postSrc >= 0.0");
    }
    if (!((preDst >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: preDst >= 0.0");
    }
    if (!((postDst >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postDst >= 0.0");
    }
    if (!((postSrc < preSrc))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postSrc < preSrc");
    }
    if (!((postDst > preDst))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postDst > preDst");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId, preSrc, postSrc, preDst, postDst, amount, createdAt);
      const postViolations: string[] = [];
      if (!((__result.self.journalWritten === true))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.journalWritten = true");
      }
      if (!((__result.self.entryTransferId === transferId))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.entryTransferId = transferId");
      }
      if (!((__result.self.preSourceBalance === preSrc))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.preSourceBalance = preSrc");
      }
      if (!((__result.self.postSourceBalance === postSrc))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.postSourceBalance = postSrc");
      }
      if (!((__result.self.preDestinationBalance === preDst))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.preDestinationBalance = preDst");
      }
      if (!((__result.self.postDestinationBalance === postDst))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.postDestinationBalance = postDst");
      }
      if (!((__result.self.entryAmount === amount))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.entryAmount = amount");
      }
      if (!((__result.self.entryCreatedAt === createdAt))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.entryCreatedAt = createdAt");
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

/** Impl signature for JournalStore.writeEntry (async). User supplies this. */
export type JournalStoreWriteEntryAsyncImpl = (self: JournalStore, transferId: string, preSrc: number, postSrc: number, preDst: number, postDst: number, amount: number, createdAt: number) => Promise<{ self: JournalStore; modified: { journalWritten: unknown; entryTransferId: unknown; preSourceBalance: unknown; postSourceBalance: unknown; preDestinationBalance: unknown; postDestinationBalance: unknown; entryAmount: unknown; entryCreatedAt: unknown } }>;

/** Contract-checking wrapper for JournalStore.writeEntry (async). */
export function wrapJournalStoreWriteEntryAsync(impl: JournalStoreWriteEntryAsyncImpl): (self: JournalStore, transferId: string, preSrc: number, postSrc: number, preDst: number, postDst: number, amount: number, createdAt: number) => Promise<JournalStore> {
  return async (self, transferId, preSrc, postSrc, preDst, postDst, amount, createdAt) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === false))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: self.journalWritten = false");
    }
    if (!((transferId !== null))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: transferId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: amount > 0.0");
    }
    if (!((preSrc >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: preSrc >= 0.0");
    }
    if (!((postSrc >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postSrc >= 0.0");
    }
    if (!((preDst >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: preDst >= 0.0");
    }
    if (!((postDst >= 0))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postDst >= 0.0");
    }
    if (!((postSrc < preSrc))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postSrc < preSrc");
    }
    if (!((postDst > preDst))) {
      preViolations.push("[JournalStore.writeEntry] pre violated: postDst > preDst");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId, preSrc, postSrc, preDst, postDst, amount, createdAt);
      const postViolations: string[] = [];
      if (!((__result.self.journalWritten === true))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.journalWritten = true");
      }
      if (!((__result.self.entryTransferId === transferId))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.entryTransferId = transferId");
      }
      if (!((__result.self.preSourceBalance === preSrc))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.preSourceBalance = preSrc");
      }
      if (!((__result.self.postSourceBalance === postSrc))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.postSourceBalance = postSrc");
      }
      if (!((__result.self.preDestinationBalance === preDst))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.preDestinationBalance = preDst");
      }
      if (!((__result.self.postDestinationBalance === postDst))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.postDestinationBalance = postDst");
      }
      if (!((__result.self.entryAmount === amount))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.entryAmount = amount");
      }
      if (!((__result.self.entryCreatedAt === createdAt))) {
        postViolations.push("[JournalStore.writeEntry] post violated: self.entryCreatedAt = createdAt");
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

/** Impl signature for JournalStore.clearJournal. User supplies this. */
export type JournalStoreClearJournalImpl = (self: JournalStore) => { self: JournalStore; modified: { journalWritten: unknown } };

/** Contract-checking wrapper for JournalStore.clearJournal. */
export function wrapJournalStoreClearJournal(impl: JournalStoreClearJournalImpl): (self: JournalStore) => JournalStore {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === true))) {
      preViolations.push("[JournalStore.clearJournal] pre violated: self.journalWritten = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.journalWritten === false))) {
        postViolations.push("[JournalStore.clearJournal] post violated: self.journalWritten = false");
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

/** Impl signature for JournalStore.clearJournal (async). User supplies this. */
export type JournalStoreClearJournalAsyncImpl = (self: JournalStore) => Promise<{ self: JournalStore; modified: { journalWritten: unknown } }>;

/** Contract-checking wrapper for JournalStore.clearJournal (async). */
export function wrapJournalStoreClearJournalAsync(impl: JournalStoreClearJournalAsyncImpl): (self: JournalStore) => Promise<JournalStore> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === true))) {
      preViolations.push("[JournalStore.clearJournal] pre violated: self.journalWritten = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.journalWritten === false))) {
        postViolations.push("[JournalStore.clearJournal] post violated: self.journalWritten = false");
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

/** Impl signature for NotificationService.sendSuccessNotification. User supplies this. */
export type NotificationServiceSendSuccessNotificationImpl = (self: NotificationService, transferId: string, journalConfirmed: boolean) => { self: NotificationService; modified: { customerNotified: unknown; lastNotifiedTransferId: unknown } };

/** Contract-checking wrapper for NotificationService.sendSuccessNotification. */
export function wrapNotificationServiceSendSuccessNotification(impl: NotificationServiceSendSuccessNotificationImpl): (self: NotificationService, transferId: string, journalConfirmed: boolean) => NotificationService {
  return (self, transferId, journalConfirmed) => {
    const preViolations: string[] = [];
    if (!((journalConfirmed === true))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: journalConfirmed = true");
    }
    if (!((transferId !== null))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: transferId <> null");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId, journalConfirmed);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === true))) {
        postViolations.push("[NotificationService.sendSuccessNotification] post violated: self.customerNotified = true");
      }
      if (!((__result.self.lastNotifiedTransferId === transferId))) {
        postViolations.push("[NotificationService.sendSuccessNotification] post violated: self.lastNotifiedTransferId = transferId");
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

/** Impl signature for NotificationService.sendSuccessNotification (async). User supplies this. */
export type NotificationServiceSendSuccessNotificationAsyncImpl = (self: NotificationService, transferId: string, journalConfirmed: boolean) => Promise<{ self: NotificationService; modified: { customerNotified: unknown; lastNotifiedTransferId: unknown } }>;

/** Contract-checking wrapper for NotificationService.sendSuccessNotification (async). */
export function wrapNotificationServiceSendSuccessNotificationAsync(impl: NotificationServiceSendSuccessNotificationAsyncImpl): (self: NotificationService, transferId: string, journalConfirmed: boolean) => Promise<NotificationService> {
  return async (self, transferId, journalConfirmed) => {
    const preViolations: string[] = [];
    if (!((journalConfirmed === true))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: journalConfirmed = true");
    }
    if (!((transferId !== null))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: transferId <> null");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId, journalConfirmed);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === true))) {
        postViolations.push("[NotificationService.sendSuccessNotification] post violated: self.customerNotified = true");
      }
      if (!((__result.self.lastNotifiedTransferId === transferId))) {
        postViolations.push("[NotificationService.sendSuccessNotification] post violated: self.lastNotifiedTransferId = transferId");
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

/** Impl signature for NotificationService.sendFailureNotification. User supplies this. */
export type NotificationServiceSendFailureNotificationImpl = (self: NotificationService, transferId: string) => { self: NotificationService; modified: { customerNotified: unknown; lastNotifiedTransferId: unknown } };

/** Contract-checking wrapper for NotificationService.sendFailureNotification. */
export function wrapNotificationServiceSendFailureNotification(impl: NotificationServiceSendFailureNotificationImpl): (self: NotificationService, transferId: string) => NotificationService {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: transferId <> null");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === true))) {
        postViolations.push("[NotificationService.sendFailureNotification] post violated: self.customerNotified = true");
      }
      if (!((__result.self.lastNotifiedTransferId === transferId))) {
        postViolations.push("[NotificationService.sendFailureNotification] post violated: self.lastNotifiedTransferId = transferId");
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

/** Impl signature for NotificationService.sendFailureNotification (async). User supplies this. */
export type NotificationServiceSendFailureNotificationAsyncImpl = (self: NotificationService, transferId: string) => Promise<{ self: NotificationService; modified: { customerNotified: unknown; lastNotifiedTransferId: unknown } }>;

/** Contract-checking wrapper for NotificationService.sendFailureNotification (async). */
export function wrapNotificationServiceSendFailureNotificationAsync(impl: NotificationServiceSendFailureNotificationAsyncImpl): (self: NotificationService, transferId: string) => Promise<NotificationService> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: transferId <> null");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === true))) {
        postViolations.push("[NotificationService.sendFailureNotification] post violated: self.customerNotified = true");
      }
      if (!((__result.self.lastNotifiedTransferId === transferId))) {
        postViolations.push("[NotificationService.sendFailureNotification] post violated: self.lastNotifiedTransferId = transferId");
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

/** Impl signature for NotificationService.resetNotification. User supplies this. */
export type NotificationServiceResetNotificationImpl = (self: NotificationService) => { self: NotificationService; modified: { customerNotified: unknown } };

/** Contract-checking wrapper for NotificationService.resetNotification. */
export function wrapNotificationServiceResetNotification(impl: NotificationServiceResetNotificationImpl): (self: NotificationService) => NotificationService {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[NotificationService.resetNotification] post violated: self.customerNotified = false");
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

/** Impl signature for NotificationService.resetNotification (async). User supplies this. */
export type NotificationServiceResetNotificationAsyncImpl = (self: NotificationService) => Promise<{ self: NotificationService; modified: { customerNotified: unknown } }>;

/** Contract-checking wrapper for NotificationService.resetNotification (async). */
export function wrapNotificationServiceResetNotificationAsync(impl: NotificationServiceResetNotificationAsyncImpl): (self: NotificationService) => Promise<NotificationService> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[NotificationService.resetNotification] post violated: self.customerNotified = false");
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

/** Impl signature for OnlineBankingSystem.initiateTransfer. User supplies this. */
export type OnlineBankingSystemInitiateTransferImpl = (self: OnlineBankingSystem, transferId: string, amount: number) => { self: OnlineBankingSystem; modified: { transferState: unknown; currentTransferId: unknown; currentAmount: unknown; pendingSourceBalance: unknown; pendingDestinationBalance: unknown; journalWritten: unknown; customerNotified: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.initiateTransfer. */
export function wrapOnlineBankingSystemInitiateTransfer(impl: OnlineBankingSystemInitiateTransferImpl): (self: OnlineBankingSystem, transferId: string, amount: number) => OnlineBankingSystem {
  return (self, transferId, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: self.transferState = 'IDLE'");
    }
    if (!((transferId !== null))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: transferId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance >= amount))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: self.sourceBalance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sourceBalance": self.sourceBalance,
      "self.destinationBalance": self.destinationBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "PENDING"))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.transferState = 'PENDING'");
      }
      if (!((__result.self.currentTransferId === transferId))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.currentTransferId = transferId");
      }
      if (!((__result.self.currentAmount === amount))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.currentAmount = amount");
      }
      if (!((__result.self.pendingSourceBalance === __pre["self.sourceBalance"]))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.pendingSourceBalance = self.sourceBalance@pre");
      }
      if (!((__result.self.pendingDestinationBalance === __pre["self.destinationBalance"]))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.pendingDestinationBalance = self.destinationBalance@pre");
      }
      if (!((__result.self.journalWritten === false))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.journalWritten = false");
      }
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.customerNotified = false");
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

/** Impl signature for OnlineBankingSystem.initiateTransfer (async). User supplies this. */
export type OnlineBankingSystemInitiateTransferAsyncImpl = (self: OnlineBankingSystem, transferId: string, amount: number) => Promise<{ self: OnlineBankingSystem; modified: { transferState: unknown; currentTransferId: unknown; currentAmount: unknown; pendingSourceBalance: unknown; pendingDestinationBalance: unknown; journalWritten: unknown; customerNotified: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.initiateTransfer (async). */
export function wrapOnlineBankingSystemInitiateTransferAsync(impl: OnlineBankingSystemInitiateTransferAsyncImpl): (self: OnlineBankingSystem, transferId: string, amount: number) => Promise<OnlineBankingSystem> {
  return async (self, transferId, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: self.transferState = 'IDLE'");
    }
    if (!((transferId !== null))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: transferId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance >= amount))) {
      preViolations.push("[OnlineBankingSystem.initiateTransfer] pre violated: self.sourceBalance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sourceBalance": self.sourceBalance,
      "self.destinationBalance": self.destinationBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "PENDING"))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.transferState = 'PENDING'");
      }
      if (!((__result.self.currentTransferId === transferId))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.currentTransferId = transferId");
      }
      if (!((__result.self.currentAmount === amount))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.currentAmount = amount");
      }
      if (!((__result.self.pendingSourceBalance === __pre["self.sourceBalance"]))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.pendingSourceBalance = self.sourceBalance@pre");
      }
      if (!((__result.self.pendingDestinationBalance === __pre["self.destinationBalance"]))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.pendingDestinationBalance = self.destinationBalance@pre");
      }
      if (!((__result.self.journalWritten === false))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.journalWritten = false");
      }
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[OnlineBankingSystem.initiateTransfer] post violated: self.customerNotified = false");
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

/** Impl signature for OnlineBankingSystem.executeTransfer. User supplies this. */
export type OnlineBankingSystemExecuteTransferImpl = (self: OnlineBankingSystem) => { self: OnlineBankingSystem; modified: { sourceBalance: unknown; destinationBalance: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.executeTransfer. */
export function wrapOnlineBankingSystemExecuteTransfer(impl: OnlineBankingSystemExecuteTransferImpl): (self: OnlineBankingSystem) => OnlineBankingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.executeTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.currentAmount > 0))) {
      preViolations.push("[OnlineBankingSystem.executeTransfer] pre violated: self.currentAmount > 0.0");
    }
    if (!((self.sourceBalance >= self.currentAmount))) {
      preViolations.push("[OnlineBankingSystem.executeTransfer] pre violated: self.sourceBalance >= self.currentAmount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sourceBalance": self.sourceBalance,
      "self.destinationBalance": self.destinationBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === (__pre["self.sourceBalance"] - __result.self.currentAmount)))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.sourceBalance = self.sourceBalance@pre - self.currentAmount");
      }
      if (!((__result.self.destinationBalance === (__pre["self.destinationBalance"] + __result.self.currentAmount)))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.destinationBalance = self.destinationBalance@pre + self.currentAmount");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.transferState === "PENDING"))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.transferState = 'PENDING'");
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

/** Impl signature for OnlineBankingSystem.executeTransfer (async). User supplies this. */
export type OnlineBankingSystemExecuteTransferAsyncImpl = (self: OnlineBankingSystem) => Promise<{ self: OnlineBankingSystem; modified: { sourceBalance: unknown; destinationBalance: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.executeTransfer (async). */
export function wrapOnlineBankingSystemExecuteTransferAsync(impl: OnlineBankingSystemExecuteTransferAsyncImpl): (self: OnlineBankingSystem) => Promise<OnlineBankingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.executeTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.currentAmount > 0))) {
      preViolations.push("[OnlineBankingSystem.executeTransfer] pre violated: self.currentAmount > 0.0");
    }
    if (!((self.sourceBalance >= self.currentAmount))) {
      preViolations.push("[OnlineBankingSystem.executeTransfer] pre violated: self.sourceBalance >= self.currentAmount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sourceBalance": self.sourceBalance,
      "self.destinationBalance": self.destinationBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === (__pre["self.sourceBalance"] - __result.self.currentAmount)))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.sourceBalance = self.sourceBalance@pre - self.currentAmount");
      }
      if (!((__result.self.destinationBalance === (__pre["self.destinationBalance"] + __result.self.currentAmount)))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.destinationBalance = self.destinationBalance@pre + self.currentAmount");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.transferState === "PENDING"))) {
        postViolations.push("[OnlineBankingSystem.executeTransfer] post violated: self.transferState = 'PENDING'");
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

/** Impl signature for OnlineBankingSystem.writeJournalEntry. User supplies this. */
export type OnlineBankingSystemWriteJournalEntryImpl = (self: OnlineBankingSystem) => { self: OnlineBankingSystem; modified: { journalWritten: unknown; transferState: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.writeJournalEntry. */
export function wrapOnlineBankingSystemWriteJournalEntry(impl: OnlineBankingSystemWriteJournalEntryImpl): (self: OnlineBankingSystem) => OnlineBankingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.writeJournalEntry] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.journalWritten === false))) {
      preViolations.push("[OnlineBankingSystem.writeJournalEntry] pre violated: self.journalWritten = false");
    }
    if (!((self.sourceBalance < self.pendingSourceBalance))) {
      preViolations.push("[OnlineBankingSystem.writeJournalEntry] pre violated: self.sourceBalance < self.pendingSourceBalance");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.journalWritten === true))) {
        postViolations.push("[OnlineBankingSystem.writeJournalEntry] post violated: self.journalWritten = true");
      }
      if (!((__result.self.transferState === "COMPLETED"))) {
        postViolations.push("[OnlineBankingSystem.writeJournalEntry] post violated: self.transferState = 'COMPLETED'");
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

/** Impl signature for OnlineBankingSystem.writeJournalEntry (async). User supplies this. */
export type OnlineBankingSystemWriteJournalEntryAsyncImpl = (self: OnlineBankingSystem) => Promise<{ self: OnlineBankingSystem; modified: { journalWritten: unknown; transferState: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.writeJournalEntry (async). */
export function wrapOnlineBankingSystemWriteJournalEntryAsync(impl: OnlineBankingSystemWriteJournalEntryAsyncImpl): (self: OnlineBankingSystem) => Promise<OnlineBankingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.writeJournalEntry] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.journalWritten === false))) {
      preViolations.push("[OnlineBankingSystem.writeJournalEntry] pre violated: self.journalWritten = false");
    }
    if (!((self.sourceBalance < self.pendingSourceBalance))) {
      preViolations.push("[OnlineBankingSystem.writeJournalEntry] pre violated: self.sourceBalance < self.pendingSourceBalance");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.journalWritten === true))) {
        postViolations.push("[OnlineBankingSystem.writeJournalEntry] post violated: self.journalWritten = true");
      }
      if (!((__result.self.transferState === "COMPLETED"))) {
        postViolations.push("[OnlineBankingSystem.writeJournalEntry] post violated: self.transferState = 'COMPLETED'");
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

/** Impl signature for OnlineBankingSystem.notifyCustomer. User supplies this. */
export type OnlineBankingSystemNotifyCustomerImpl = (self: OnlineBankingSystem) => { self: OnlineBankingSystem; modified: { customerNotified: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.notifyCustomer. */
export function wrapOnlineBankingSystemNotifyCustomer(impl: OnlineBankingSystemNotifyCustomerImpl): (self: OnlineBankingSystem) => OnlineBankingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === true))) {
      preViolations.push("[OnlineBankingSystem.notifyCustomer] pre violated: self.journalWritten = true");
    }
    if (!((self.transferState === "COMPLETED"))) {
      preViolations.push("[OnlineBankingSystem.notifyCustomer] pre violated: self.transferState = 'COMPLETED'");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[OnlineBankingSystem.notifyCustomer] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === true))) {
        postViolations.push("[OnlineBankingSystem.notifyCustomer] post violated: self.customerNotified = true");
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

/** Impl signature for OnlineBankingSystem.notifyCustomer (async). User supplies this. */
export type OnlineBankingSystemNotifyCustomerAsyncImpl = (self: OnlineBankingSystem) => Promise<{ self: OnlineBankingSystem; modified: { customerNotified: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.notifyCustomer (async). */
export function wrapOnlineBankingSystemNotifyCustomerAsync(impl: OnlineBankingSystemNotifyCustomerAsyncImpl): (self: OnlineBankingSystem) => Promise<OnlineBankingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === true))) {
      preViolations.push("[OnlineBankingSystem.notifyCustomer] pre violated: self.journalWritten = true");
    }
    if (!((self.transferState === "COMPLETED"))) {
      preViolations.push("[OnlineBankingSystem.notifyCustomer] pre violated: self.transferState = 'COMPLETED'");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[OnlineBankingSystem.notifyCustomer] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === true))) {
        postViolations.push("[OnlineBankingSystem.notifyCustomer] post violated: self.customerNotified = true");
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

/** Impl signature for OnlineBankingSystem.rollbackTransfer. User supplies this. */
export type OnlineBankingSystemRollbackTransferImpl = (self: OnlineBankingSystem) => { self: OnlineBankingSystem; modified: { sourceBalance: unknown; destinationBalance: unknown; transferState: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.rollbackTransfer. */
export function wrapOnlineBankingSystemRollbackTransfer(impl: OnlineBankingSystemRollbackTransferImpl): (self: OnlineBankingSystem) => OnlineBankingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.rollbackTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === __result.self.pendingSourceBalance))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.sourceBalance = self.pendingSourceBalance");
      }
      if (!((__result.self.destinationBalance === __result.self.pendingDestinationBalance))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.destinationBalance = self.pendingDestinationBalance");
      }
      if (!((__result.self.transferState === "ROLLED_BACK"))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.transferState = 'ROLLED_BACK'");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for OnlineBankingSystem.rollbackTransfer (async). User supplies this. */
export type OnlineBankingSystemRollbackTransferAsyncImpl = (self: OnlineBankingSystem) => Promise<{ self: OnlineBankingSystem; modified: { sourceBalance: unknown; destinationBalance: unknown; transferState: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.rollbackTransfer (async). */
export function wrapOnlineBankingSystemRollbackTransferAsync(impl: OnlineBankingSystemRollbackTransferAsyncImpl): (self: OnlineBankingSystem) => Promise<OnlineBankingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.rollbackTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === __result.self.pendingSourceBalance))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.sourceBalance = self.pendingSourceBalance");
      }
      if (!((__result.self.destinationBalance === __result.self.pendingDestinationBalance))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.destinationBalance = self.pendingDestinationBalance");
      }
      if (!((__result.self.transferState === "ROLLED_BACK"))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.transferState = 'ROLLED_BACK'");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.rollbackTransfer] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for OnlineBankingSystem.recoverPendingTransfer. User supplies this. */
export type OnlineBankingSystemRecoverPendingTransferImpl = (self: OnlineBankingSystem, shouldComplete: boolean) => { self: OnlineBankingSystem; modified: { sourceBalance: unknown; destinationBalance: unknown; transferState: unknown; journalWritten: unknown; customerNotified: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.recoverPendingTransfer. */
export function wrapOnlineBankingSystemRecoverPendingTransfer(impl: OnlineBankingSystemRecoverPendingTransferImpl): (self: OnlineBankingSystem, shouldComplete: boolean) => OnlineBankingSystem {
  return (self, shouldComplete) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.recoverPendingTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.pendingSourceBalance >= 0))) {
      preViolations.push("[OnlineBankingSystem.recoverPendingTransfer] pre violated: self.pendingSourceBalance >= 0.0");
    }
    if (!((self.pendingDestinationBalance >= 0))) {
      preViolations.push("[OnlineBankingSystem.recoverPendingTransfer] pre violated: self.pendingDestinationBalance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, shouldComplete);
      const postViolations: string[] = [];
      if (!(((__result.self.transferState === "COMPLETED") || (__result.self.transferState === "ROLLED_BACK")))) {
        postViolations.push("[OnlineBankingSystem.recoverPendingTransfer] post violated: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.recoverPendingTransfer] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.recoverPendingTransfer] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for OnlineBankingSystem.recoverPendingTransfer (async). User supplies this. */
export type OnlineBankingSystemRecoverPendingTransferAsyncImpl = (self: OnlineBankingSystem, shouldComplete: boolean) => Promise<{ self: OnlineBankingSystem; modified: { sourceBalance: unknown; destinationBalance: unknown; transferState: unknown; journalWritten: unknown; customerNotified: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.recoverPendingTransfer (async). */
export function wrapOnlineBankingSystemRecoverPendingTransferAsync(impl: OnlineBankingSystemRecoverPendingTransferAsyncImpl): (self: OnlineBankingSystem, shouldComplete: boolean) => Promise<OnlineBankingSystem> {
  return async (self, shouldComplete) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystem.recoverPendingTransfer] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.pendingSourceBalance >= 0))) {
      preViolations.push("[OnlineBankingSystem.recoverPendingTransfer] pre violated: self.pendingSourceBalance >= 0.0");
    }
    if (!((self.pendingDestinationBalance >= 0))) {
      preViolations.push("[OnlineBankingSystem.recoverPendingTransfer] pre violated: self.pendingDestinationBalance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, shouldComplete);
      const postViolations: string[] = [];
      if (!(((__result.self.transferState === "COMPLETED") || (__result.self.transferState === "ROLLED_BACK")))) {
        postViolations.push("[OnlineBankingSystem.recoverPendingTransfer] post violated: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.recoverPendingTransfer] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[OnlineBankingSystem.recoverPendingTransfer] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for OnlineBankingSystem.resetToIdle. User supplies this. */
export type OnlineBankingSystemResetToIdleImpl = (self: OnlineBankingSystem) => { self: OnlineBankingSystem; modified: { transferState: unknown; currentAmount: unknown; journalWritten: unknown; customerNotified: unknown; pendingSourceBalance: unknown; pendingDestinationBalance: unknown } };

/** Contract-checking wrapper for OnlineBankingSystem.resetToIdle. */
export function wrapOnlineBankingSystemResetToIdle(impl: OnlineBankingSystemResetToIdleImpl): (self: OnlineBankingSystem) => OnlineBankingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.transferState === "COMPLETED") || (self.transferState === "ROLLED_BACK")))) {
      preViolations.push("[OnlineBankingSystem.resetToIdle] pre violated: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.transferState = 'IDLE'");
      }
      if (!((__result.self.currentAmount === 0))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.currentAmount = 0.0");
      }
      if (!((__result.self.journalWritten === false))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.journalWritten = false");
      }
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.customerNotified = false");
      }
      if (!((__result.self.pendingSourceBalance === 0))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.pendingSourceBalance = 0.0");
      }
      if (!((__result.self.pendingDestinationBalance === 0))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.pendingDestinationBalance = 0.0");
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

/** Impl signature for OnlineBankingSystem.resetToIdle (async). User supplies this. */
export type OnlineBankingSystemResetToIdleAsyncImpl = (self: OnlineBankingSystem) => Promise<{ self: OnlineBankingSystem; modified: { transferState: unknown; currentAmount: unknown; journalWritten: unknown; customerNotified: unknown; pendingSourceBalance: unknown; pendingDestinationBalance: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystem.resetToIdle (async). */
export function wrapOnlineBankingSystemResetToIdleAsync(impl: OnlineBankingSystemResetToIdleAsyncImpl): (self: OnlineBankingSystem) => Promise<OnlineBankingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.transferState === "COMPLETED") || (self.transferState === "ROLLED_BACK")))) {
      preViolations.push("[OnlineBankingSystem.resetToIdle] pre violated: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.transferState = 'IDLE'");
      }
      if (!((__result.self.currentAmount === 0))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.currentAmount = 0.0");
      }
      if (!((__result.self.journalWritten === false))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.journalWritten = false");
      }
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.customerNotified = false");
      }
      if (!((__result.self.pendingSourceBalance === 0))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.pendingSourceBalance = 0.0");
      }
      if (!((__result.self.pendingDestinationBalance === 0))) {
        postViolations.push("[OnlineBankingSystem.resetToIdle] post violated: self.pendingDestinationBalance = 0.0");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectOverdraftTransfer. User supplies this. */
export type OnlineBankingSystemFormalizedRejectOverdraftTransferImpl = (self: OnlineBankingSystemFormalized, amount: number) => { self: OnlineBankingSystemFormalized; modified: {} };

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectOverdraftTransfer. */
export function wrapOnlineBankingSystemFormalizedRejectOverdraftTransfer(impl: OnlineBankingSystemFormalizedRejectOverdraftTransferImpl): (self: OnlineBankingSystemFormalized, amount: number) => OnlineBankingSystemFormalized {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] pre violated: self.transferState = 'IDLE'");
    }
    if (!((amount > 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance < amount))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] pre violated: self.sourceBalance < amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] post violated: self.transferState = 'IDLE'");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectOverdraftTransfer (async). User supplies this. */
export type OnlineBankingSystemFormalizedRejectOverdraftTransferAsyncImpl = (self: OnlineBankingSystemFormalized, amount: number) => Promise<{ self: OnlineBankingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectOverdraftTransfer (async). */
export function wrapOnlineBankingSystemFormalizedRejectOverdraftTransferAsync(impl: OnlineBankingSystemFormalizedRejectOverdraftTransferAsyncImpl): (self: OnlineBankingSystemFormalized, amount: number) => Promise<OnlineBankingSystemFormalized> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] pre violated: self.transferState = 'IDLE'");
    }
    if (!((amount > 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] pre violated: amount > 0.0");
    }
    if (!((self.sourceBalance < amount))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] pre violated: self.sourceBalance < amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectOverdraftTransfer] post violated: self.transferState = 'IDLE'");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectPrematureNotification. User supplies this. */
export type OnlineBankingSystemFormalizedRejectPrematureNotificationImpl = (self: OnlineBankingSystemFormalized) => { self: OnlineBankingSystemFormalized; modified: {} };

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectPrematureNotification. */
export function wrapOnlineBankingSystemFormalizedRejectPrematureNotification(impl: OnlineBankingSystemFormalizedRejectPrematureNotificationImpl): (self: OnlineBankingSystemFormalized) => OnlineBankingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === false))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectPrematureNotification] pre violated: self.journalWritten = false");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectPrematureNotification] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectPrematureNotification] post violated: self.customerNotified = false");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectPrematureNotification (async). User supplies this. */
export type OnlineBankingSystemFormalizedRejectPrematureNotificationAsyncImpl = (self: OnlineBankingSystemFormalized) => Promise<{ self: OnlineBankingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectPrematureNotification (async). */
export function wrapOnlineBankingSystemFormalizedRejectPrematureNotificationAsync(impl: OnlineBankingSystemFormalizedRejectPrematureNotificationAsyncImpl): (self: OnlineBankingSystemFormalized) => Promise<OnlineBankingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.journalWritten === false))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectPrematureNotification] pre violated: self.journalWritten = false");
    }
    if (!((self.customerNotified === false))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectPrematureNotification] pre violated: self.customerNotified = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.customerNotified === false))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectPrematureNotification] post violated: self.customerNotified = false");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectAmlCapViolation. User supplies this. */
export type OnlineBankingSystemFormalizedRejectAmlCapViolationImpl = (self: OnlineBankingSystemFormalized, amount: number) => { self: OnlineBankingSystemFormalized; modified: {} };

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectAmlCapViolation. */
export function wrapOnlineBankingSystemFormalizedRejectAmlCapViolation(impl: OnlineBankingSystemFormalizedRejectAmlCapViolationImpl): (self: OnlineBankingSystemFormalized, amount: number) => OnlineBankingSystemFormalized {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectAmlCapViolation] pre violated: self.transferState = 'IDLE'");
    }
    if (!((amount > 10000))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectAmlCapViolation] pre violated: amount > 10000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectAmlCapViolation] post violated: self.transferState = 'IDLE'");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectAmlCapViolation (async). User supplies this. */
export type OnlineBankingSystemFormalizedRejectAmlCapViolationAsyncImpl = (self: OnlineBankingSystemFormalized, amount: number) => Promise<{ self: OnlineBankingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectAmlCapViolation (async). */
export function wrapOnlineBankingSystemFormalizedRejectAmlCapViolationAsync(impl: OnlineBankingSystemFormalizedRejectAmlCapViolationAsyncImpl): (self: OnlineBankingSystemFormalized, amount: number) => Promise<OnlineBankingSystemFormalized> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectAmlCapViolation] pre violated: self.transferState = 'IDLE'");
    }
    if (!((amount > 10000))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectAmlCapViolation] pre violated: amount > 10000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectAmlCapViolation] post violated: self.transferState = 'IDLE'");
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

/** Impl signature for OnlineBankingSystemFormalized.forceRollbackOnTimeout. User supplies this. */
export type OnlineBankingSystemFormalizedForceRollbackOnTimeoutImpl = (self: OnlineBankingSystemFormalized) => { self: OnlineBankingSystemFormalized; modified: { sourceBalance: unknown; destinationBalance: unknown; transferState: unknown } };

/** Contract-checking wrapper for OnlineBankingSystemFormalized.forceRollbackOnTimeout. */
export function wrapOnlineBankingSystemFormalizedForceRollbackOnTimeout(impl: OnlineBankingSystemFormalizedForceRollbackOnTimeoutImpl): (self: OnlineBankingSystemFormalized) => OnlineBankingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.pendingSourceBalance >= 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] pre violated: self.pendingSourceBalance >= 0.0");
    }
    if (!((self.pendingDestinationBalance >= 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] pre violated: self.pendingDestinationBalance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === __result.self.pendingSourceBalance))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.sourceBalance = self.pendingSourceBalance");
      }
      if (!((__result.self.destinationBalance === __result.self.pendingDestinationBalance))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.destinationBalance = self.pendingDestinationBalance");
      }
      if (!((__result.self.transferState === "ROLLED_BACK"))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.transferState = 'ROLLED_BACK'");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for OnlineBankingSystemFormalized.forceRollbackOnTimeout (async). User supplies this. */
export type OnlineBankingSystemFormalizedForceRollbackOnTimeoutAsyncImpl = (self: OnlineBankingSystemFormalized) => Promise<{ self: OnlineBankingSystemFormalized; modified: { sourceBalance: unknown; destinationBalance: unknown; transferState: unknown } }>;

/** Contract-checking wrapper for OnlineBankingSystemFormalized.forceRollbackOnTimeout (async). */
export function wrapOnlineBankingSystemFormalizedForceRollbackOnTimeoutAsync(impl: OnlineBankingSystemFormalizedForceRollbackOnTimeoutAsyncImpl): (self: OnlineBankingSystemFormalized) => Promise<OnlineBankingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "PENDING"))) {
      preViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] pre violated: self.transferState = 'PENDING'");
    }
    if (!((self.pendingSourceBalance >= 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] pre violated: self.pendingSourceBalance >= 0.0");
    }
    if (!((self.pendingDestinationBalance >= 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] pre violated: self.pendingDestinationBalance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sourceBalance === __result.self.pendingSourceBalance))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.sourceBalance = self.pendingSourceBalance");
      }
      if (!((__result.self.destinationBalance === __result.self.pendingDestinationBalance))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.destinationBalance = self.pendingDestinationBalance");
      }
      if (!((__result.self.transferState === "ROLLED_BACK"))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.transferState = 'ROLLED_BACK'");
      }
      if (!((__result.self.sourceBalance >= 0))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.sourceBalance >= 0.0");
      }
      if (!((__result.self.destinationBalance >= 0))) {
        postViolations.push("[OnlineBankingSystemFormalized.forceRollbackOnTimeout] post violated: self.destinationBalance >= 0.0");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectNonPositiveAmount. User supplies this. */
export type OnlineBankingSystemFormalizedRejectNonPositiveAmountImpl = (self: OnlineBankingSystemFormalized, amount: number) => { self: OnlineBankingSystemFormalized; modified: {} };

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectNonPositiveAmount. */
export function wrapOnlineBankingSystemFormalizedRejectNonPositiveAmount(impl: OnlineBankingSystemFormalizedRejectNonPositiveAmountImpl): (self: OnlineBankingSystemFormalized, amount: number) => OnlineBankingSystemFormalized {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectNonPositiveAmount] pre violated: self.transferState = 'IDLE'");
    }
    if (!((amount <= 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectNonPositiveAmount] pre violated: amount <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectNonPositiveAmount] post violated: self.transferState = 'IDLE'");
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

/** Impl signature for OnlineBankingSystemFormalized.rejectNonPositiveAmount (async). User supplies this. */
export type OnlineBankingSystemFormalizedRejectNonPositiveAmountAsyncImpl = (self: OnlineBankingSystemFormalized, amount: number) => Promise<{ self: OnlineBankingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for OnlineBankingSystemFormalized.rejectNonPositiveAmount (async). */
export function wrapOnlineBankingSystemFormalizedRejectNonPositiveAmountAsync(impl: OnlineBankingSystemFormalizedRejectNonPositiveAmountAsyncImpl): (self: OnlineBankingSystemFormalized, amount: number) => Promise<OnlineBankingSystemFormalized> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((self.transferState === "IDLE"))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectNonPositiveAmount] pre violated: self.transferState = 'IDLE'");
    }
    if (!((amount <= 0))) {
      preViolations.push("[OnlineBankingSystemFormalized.rejectNonPositiveAmount] pre violated: amount <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.transferState === "IDLE"))) {
        postViolations.push("[OnlineBankingSystemFormalized.rejectNonPositiveAmount] post violated: self.transferState = 'IDLE'");
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

/** Lifecycle registry for AdrComponentBoundary commitments. */
export class AdrComponentBoundaryRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AdrComponentBoundary>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AdrComponentBoundary — the typed wrapper guarantees that since
    // `register` only accepts AdrComponentBoundary instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AdrComponentBoundary): void {
    this.inner.register(commitment.adrId as string, commitment);
  }

  getState(id: AdrComponentBoundaryId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AdrComponentBoundaryId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AdrComponentBoundaryId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AdrComponentBoundary>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AdrComponentBoundary>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AdrJournalOrderingEnforcement commitments. */
export class AdrJournalOrderingEnforcementRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AdrJournalOrderingEnforcement>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AdrJournalOrderingEnforcement — the typed wrapper guarantees that since
    // `register` only accepts AdrJournalOrderingEnforcement instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AdrJournalOrderingEnforcement): void {
    this.inner.register(commitment.adrId as string, commitment);
  }

  getState(id: AdrJournalOrderingEnforcementId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AdrJournalOrderingEnforcementId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AdrJournalOrderingEnforcementId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AdrJournalOrderingEnforcement>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AdrJournalOrderingEnforcement>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AdrRollbackAtomicity commitments. */
export class AdrRollbackAtomicityRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AdrRollbackAtomicity>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AdrRollbackAtomicity — the typed wrapper guarantees that since
    // `register` only accepts AdrRollbackAtomicity instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AdrRollbackAtomicity): void {
    this.inner.register(commitment.adrId as string, commitment);
  }

  getState(id: AdrRollbackAtomicityId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AdrRollbackAtomicityId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AdrRollbackAtomicityId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AdrRollbackAtomicity>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AdrRollbackAtomicity>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AtomicTransferCommitment commitments. */
export class AtomicTransferCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AtomicTransferCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AtomicTransferCommitment — the typed wrapper guarantees that since
    // `register` only accepts AtomicTransferCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AtomicTransferCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AtomicTransferCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AtomicTransferCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AtomicTransferCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AtomicTransferCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AtomicTransferCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for NoOverdraftCommitment commitments. */
export class NoOverdraftCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<NoOverdraftCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a NoOverdraftCommitment — the typed wrapper guarantees that since
    // `register` only accepts NoOverdraftCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: NoOverdraftCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: NoOverdraftCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: NoOverdraftCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: NoOverdraftCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<NoOverdraftCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<NoOverdraftCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AuditJournalCommitment commitments. */
export class AuditJournalCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AuditJournalCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AuditJournalCommitment — the typed wrapper guarantees that since
    // `register` only accepts AuditJournalCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AuditJournalCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AuditJournalCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AuditJournalCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AuditJournalCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AuditJournalCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AuditJournalCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BoundedLatencyCommitment commitments. */
export class BoundedLatencyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BoundedLatencyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BoundedLatencyCommitment — the typed wrapper guarantees that since
    // `register` only accepts BoundedLatencyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BoundedLatencyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BoundedLatencyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BoundedLatencyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BoundedLatencyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BoundedLatencyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BoundedLatencyCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BankingSystemVisionCommitment commitments. */
export class BankingSystemVisionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BankingSystemVisionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BankingSystemVisionCommitment — the typed wrapper guarantees that since
    // `register` only accepts BankingSystemVisionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BankingSystemVisionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BankingSystemVisionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BankingSystemVisionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BankingSystemVisionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BankingSystemVisionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BankingSystemVisionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

