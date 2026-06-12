// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TransactionOrchestrator. Runtime: string. Compile-time: branded. */
export type TransactionOrchestratorId = string & { readonly __brand: "TransactionOrchestratorId" };
/** Identity type for AccountLedger. Runtime: string. Compile-time: branded. */
export type AccountLedgerId = string & { readonly __brand: "AccountLedgerId" };
/** Identity type for JournalWriter. Runtime: string. Compile-time: branded. */
export type JournalWriterId = string & { readonly __brand: "JournalWriterId" };
/** Identity type for NotificationDispatcher. Runtime: string. Compile-time: branded. */
export type NotificationDispatcherId = string & { readonly __brand: "NotificationDispatcherId" };
/** Identity type for PendingTransferRecovery. Runtime: string. Compile-time: branded. */
export type PendingTransferRecoveryId = string & { readonly __brand: "PendingTransferRecoveryId" };
/** Identity type for TimerKeeper. Runtime: string. Compile-time: branded. */
export type TimerKeeperId = string & { readonly __brand: "TimerKeeperId" };
/** Identity type for DebitCreditChannel. Runtime: string. Compile-time: branded. */
export type DebitCreditChannelId = string & { readonly __brand: "DebitCreditChannelId" };
/** Identity type for AuditChannel. Runtime: string. Compile-time: branded. */
export type AuditChannelId = string & { readonly __brand: "AuditChannelId" };
/** Identity type for NotificationChannel. Runtime: string. Compile-time: branded. */
export type NotificationChannelId = string & { readonly __brand: "NotificationChannelId" };
/** Identity type for RecoveryChannel. Runtime: string. Compile-time: branded. */
export type RecoveryChannelId = string & { readonly __brand: "RecoveryChannelId" };
/** Identity type for LatencyMonitoringChannel. Runtime: string. Compile-time: branded. */
export type LatencyMonitoringChannelId = string & { readonly __brand: "LatencyMonitoringChannelId" };
/** Identity type for TransferExecutionFlow. Runtime: string. Compile-time: branded. */
export type TransferExecutionFlowId = string & { readonly __brand: "TransferExecutionFlowId" };
/** Identity type for TransferRecoveryFlow. Runtime: string. Compile-time: branded. */
export type TransferRecoveryFlowId = string & { readonly __brand: "TransferRecoveryFlowId" };
/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for Regulator. Runtime: string. Compile-time: branded. */
export type RegulatorId = string & { readonly __brand: "RegulatorId" };
/** Identity type for BankingVendor. Runtime: string. Compile-time: branded. */
export type BankingVendorId = string & { readonly __brand: "BankingVendorId" };
/** Identity type for Account. Runtime: string. Compile-time: branded. */
export type AccountId = string & { readonly __brand: "AccountId" };
/** Identity type for Transfer. Runtime: string. Compile-time: branded. */
export type TransferId = string & { readonly __brand: "TransferId" };
/** Identity type for JournalEntry. Runtime: string. Compile-time: branded. */
export type JournalEntryId = string & { readonly __brand: "JournalEntryId" };
/** Identity type for AtomicTransferCommitment. Runtime: string. Compile-time: branded. */
export type AtomicTransferCommitmentId = string & { readonly __brand: "AtomicTransferCommitmentId" };
/** Identity type for NoOverdraftCommitment. Runtime: string. Compile-time: branded. */
export type NoOverdraftCommitmentId = string & { readonly __brand: "NoOverdraftCommitmentId" };
/** Identity type for AuditableJournalCommitment. Runtime: string. Compile-time: branded. */
export type AuditableJournalCommitmentId = string & { readonly __brand: "AuditableJournalCommitmentId" };
/** Identity type for BoundedLatencyCommitment. Runtime: string. Compile-time: branded. */
export type BoundedLatencyCommitmentId = string & { readonly __brand: "BoundedLatencyCommitmentId" };
/** Identity type for TransferFlow. Runtime: string. Compile-time: branded. */
export type TransferFlowId = string & { readonly __brand: "TransferFlowId" };
/** Identity type for BankingTransactionSystem. Runtime: string. Compile-time: branded. */
export type BankingTransactionSystemId = string & { readonly __brand: "BankingTransactionSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TransactionOrchestrator {
  readonly orchestratorId: TransactionOrchestratorId;
  readonly activeTransfers: ReadonlySet<Transfer>;
  readonly maxPendingLatencySecs: number;
  readonly transactionCount: number;
}

/** @stereotype <<Kind>> */
export interface AccountLedger {
  readonly ledgerId: AccountLedgerId;
  readonly knownAccounts: ReadonlySet<Account>;
}

/** @stereotype <<Kind>> */
export interface JournalWriter {
  readonly journalId: JournalWriterId;
  readonly journalEntries: ReadonlySet<JournalEntry>;
}

/** @stereotype <<Kind>> */
export interface NotificationDispatcher {
  readonly dispatcherId: NotificationDispatcherId;
  readonly notifiedTransfers: ReadonlySet<Transfer>;
}

/** @stereotype <<Kind>> */
export interface PendingTransferRecovery {
  readonly recoveryId: PendingTransferRecoveryId;
  readonly recoveryLog: ReadonlySet<Transfer>;
  readonly lastRecoveryTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface TimerKeeper {
  readonly timerId: TimerKeeperId;
  readonly pendingTimestamps: ReadonlySet<number>;
  readonly maxLatencySecs: number;
}

/** @stereotype <<Role>> */
export interface OrchestratorEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface LedgerEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface OrchestratorAuditEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface JournalEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface OrchestratorNotifyEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface NotificationEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface RecoveryEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface LedgerRecoveryEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface JournalRecoveryEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface OrchestratorTimerEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Role>> */
export interface TimerEndpoint {
  readonly componentId: string;
}

/** @stereotype <<Relator>> */
export interface DebitCreditChannel {
  readonly channelId: DebitCreditChannelId;
  readonly lastDebitTime: number;
  readonly lastCreditTime: number;
  readonly channelActive: boolean;
}

/** @stereotype <<Relator>> */
export interface AuditChannel {
  readonly channelId: AuditChannelId;
  readonly lastJournalWriteTime: number;
}

/** @stereotype <<Relator>> */
export interface NotificationChannel {
  readonly channelId: NotificationChannelId;
  readonly lastNotificationTime: number;
}

/** @stereotype <<Relator>> */
export interface RecoveryChannel {
  readonly channelId: RecoveryChannelId;
  readonly lastRecoveryTime: number;
  readonly pendingTransferCount: number;
}

/** @stereotype <<Relator>> */
export interface LatencyMonitoringChannel {
  readonly channelId: LatencyMonitoringChannelId;
  readonly lastLatencyCheckTime: number;
}

/** @stereotype <<Happening>> */
export interface TransferExecutionFlow extends TransferFlow {
  readonly executionFlowId: string;
  readonly stimulus: string;
  readonly response: string;
  readonly stepInitiateTransfer: string;
  readonly stepDebitSource: string;
  readonly stepCreditDest: string;
  readonly stepWriteJournal: string;
  readonly stepNotifyCustomer: string;
  readonly stepCompleteTransfer: string;
}

/** @stereotype <<Happening>> */
export interface TransferRecoveryFlow extends TransferFlow {
  readonly recoveryFlowId: string;
  readonly stimulus: string;
  readonly response: string;
  readonly stepScanTransfers: string;
  readonly stepRecoverTransfer: string;
  readonly stepRevertOrComplete: string;
}

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
  readonly accounts: ReadonlySet<Account>;
}

/** @stereotype <<Agent>> */
export interface Regulator {
  readonly regulatorId: RegulatorId;
  readonly authority: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface BankingVendor {
  readonly vendorId: BankingVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Account {
  readonly accountId: AccountId;
  readonly owner: Customer;
  readonly balance: number;
}

/** @stereotype <<Kind>> */
export interface Transfer {
  readonly transferId: TransferId;
  readonly source: Account;
  readonly destination: Account;
  readonly amount: number;
  readonly status: string;
}

/** @stereotype <<Kind>> */
export interface JournalEntry {
  readonly entryId: JournalEntryId;
  readonly transferId: string;
  readonly preSourceBalance: number;
  readonly postSourceBalance: number;
  readonly preDestBalance: number;
  readonly postDestBalance: number;
  readonly timestamp: number;
}

/** @stereotype <<Commitment>> */
export interface AtomicTransferCommitment {
  readonly commitmentId: AtomicTransferCommitmentId;
  readonly minAtomicityAssurance: string;
}

/** @stereotype <<Commitment>> */
export interface NoOverdraftCommitment {
  readonly commitmentId: NoOverdraftCommitmentId;
  readonly minPostTransferBalance: number;
}

/** @stereotype <<Commitment>> */
export interface AuditableJournalCommitment {
  readonly commitmentId: AuditableJournalCommitmentId;
  readonly journalRetentionDays: number;
}

/** @stereotype <<Commitment>> */
export interface BoundedLatencyCommitment {
  readonly commitmentId: BoundedLatencyCommitmentId;
  readonly maxPendingSeconds: number;
}

/** @stereotype <<Category>> */
export interface AtomicityConstraints {
}

/** @stereotype <<Category>> */
export interface NoOverdraftConstraint {
}

/** @stereotype <<Category>> */
export interface AuditableConstraint {
}

/** @stereotype <<Category>> */
export interface BoundedLatencyConstraint {
}

/** @stereotype <<Happening>> */
export interface TransferFlow {
  readonly flowId: TransferFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface BankingTransactionSystem extends AuditableConstraint, AtomicityConstraints, BoundedLatencyConstraint, NoOverdraftConstraint {
  readonly systemId: BankingTransactionSystemId;
  readonly knownAccounts: ReadonlySet<Account>;
  readonly activeTransfers: ReadonlySet<Transfer>;
  readonly journalEntries: ReadonlySet<JournalEntry>;
  readonly maxPendingLatencySecs: number;
  readonly transactionCount: number;
}

/** @stereotype <<Category>> */
export interface PciDssCompliant {
}

/** @stereotype <<Category>> */
export interface SoxAuditCompliant {
}

/** @stereotype <<Category>> */
export interface GdprCompliant {
}

/** @stereotype <<Category>> */
export interface MonotonicTimestampInvariant {
}

/** @stereotype <<Category>> */
export interface ZeroSumTransferInvariant {
}

/** @stereotype <<Subkind>> */
export interface BankingTransactionSystemFormalized extends BankingTransactionSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly statement: string;
  readonly origin: string;
  readonly riskLevel: string;
}


// ─── Factory functions ───

export function makeTransactionOrchestrator(data: {
  orchestratorId: string;
  activeTransfers: ReadonlySet<Transfer>;
  maxPendingLatencySecs: number;
  transactionCount: number;
}): TransactionOrchestrator {
  return {
    orchestratorId: data.orchestratorId as TransactionOrchestratorId,
    activeTransfers: data.activeTransfers,
    maxPendingLatencySecs: data.maxPendingLatencySecs,
    transactionCount: data.transactionCount,
  };
}

export function makeAccountLedger(data: {
  ledgerId: string;
  knownAccounts: ReadonlySet<Account>;
}): AccountLedger {
  return {
    ledgerId: data.ledgerId as AccountLedgerId,
    knownAccounts: data.knownAccounts,
  };
}

export function makeJournalWriter(data: {
  journalId: string;
  journalEntries: ReadonlySet<JournalEntry>;
}): JournalWriter {
  return {
    journalId: data.journalId as JournalWriterId,
    journalEntries: data.journalEntries,
  };
}

export function makeNotificationDispatcher(data: {
  dispatcherId: string;
  notifiedTransfers: ReadonlySet<Transfer>;
}): NotificationDispatcher {
  return {
    dispatcherId: data.dispatcherId as NotificationDispatcherId,
    notifiedTransfers: data.notifiedTransfers,
  };
}

export function makePendingTransferRecovery(data: {
  recoveryId: string;
  recoveryLog: ReadonlySet<Transfer>;
  lastRecoveryTimestamp: number;
}): PendingTransferRecovery {
  return {
    recoveryId: data.recoveryId as PendingTransferRecoveryId,
    recoveryLog: data.recoveryLog,
    lastRecoveryTimestamp: data.lastRecoveryTimestamp,
  };
}

export function makeTimerKeeper(data: {
  timerId: string;
  pendingTimestamps: ReadonlySet<number>;
  maxLatencySecs: number;
}): TimerKeeper {
  return {
    timerId: data.timerId as TimerKeeperId,
    pendingTimestamps: data.pendingTimestamps,
    maxLatencySecs: data.maxLatencySecs,
  };
}

export function makeDebitCreditChannel(data: {
  channelId: string;
  lastDebitTime: number;
  lastCreditTime: number;
  channelActive: boolean;
}): DebitCreditChannel {
  return {
    channelId: data.channelId as DebitCreditChannelId,
    lastDebitTime: data.lastDebitTime,
    lastCreditTime: data.lastCreditTime,
    channelActive: data.channelActive,
  };
}

export function makeAuditChannel(data: {
  channelId: string;
  lastJournalWriteTime: number;
}): AuditChannel {
  return {
    channelId: data.channelId as AuditChannelId,
    lastJournalWriteTime: data.lastJournalWriteTime,
  };
}

export function makeNotificationChannel(data: {
  channelId: string;
  lastNotificationTime: number;
}): NotificationChannel {
  return {
    channelId: data.channelId as NotificationChannelId,
    lastNotificationTime: data.lastNotificationTime,
  };
}

export function makeRecoveryChannel(data: {
  channelId: string;
  lastRecoveryTime: number;
  pendingTransferCount: number;
}): RecoveryChannel {
  return {
    channelId: data.channelId as RecoveryChannelId,
    lastRecoveryTime: data.lastRecoveryTime,
    pendingTransferCount: data.pendingTransferCount,
  };
}

export function makeLatencyMonitoringChannel(data: {
  channelId: string;
  lastLatencyCheckTime: number;
}): LatencyMonitoringChannel {
  return {
    channelId: data.channelId as LatencyMonitoringChannelId,
    lastLatencyCheckTime: data.lastLatencyCheckTime,
  };
}

export function makeCustomer(data: {
  customerId: string;
  name: string;
  accounts: ReadonlySet<Account>;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
    accounts: data.accounts,
  };
}

export function makeRegulator(data: {
  regulatorId: string;
  authority: string;
  jurisdiction: string;
}): Regulator {
  return {
    regulatorId: data.regulatorId as RegulatorId,
    authority: data.authority,
    jurisdiction: data.jurisdiction,
  };
}

export function makeBankingVendor(data: {
  vendorId: string;
  name: string;
}): BankingVendor {
  return {
    vendorId: data.vendorId as BankingVendorId,
    name: data.name,
  };
}

export function makeAccount(data: {
  accountId: string;
  owner: Customer;
  balance: number;
}): Account {
  return {
    accountId: data.accountId as AccountId,
    owner: data.owner,
    balance: data.balance,
  };
}

export function makeTransfer(data: {
  transferId: string;
  source: Account;
  destination: Account;
  amount: number;
  status: string;
}): Transfer {
  return {
    transferId: data.transferId as TransferId,
    source: data.source,
    destination: data.destination,
    amount: data.amount,
    status: data.status,
  };
}

export function makeJournalEntry(data: {
  entryId: string;
  transferId: string;
  preSourceBalance: number;
  postSourceBalance: number;
  preDestBalance: number;
  postDestBalance: number;
  timestamp: number;
}): JournalEntry {
  return {
    entryId: data.entryId as JournalEntryId,
    transferId: data.transferId,
    preSourceBalance: data.preSourceBalance,
    postSourceBalance: data.postSourceBalance,
    preDestBalance: data.preDestBalance,
    postDestBalance: data.postDestBalance,
    timestamp: data.timestamp,
  };
}

export function makeAtomicTransferCommitment(data: {
  commitmentId: string;
  minAtomicityAssurance: string;
}): AtomicTransferCommitment {
  return {
    commitmentId: data.commitmentId as AtomicTransferCommitmentId,
    minAtomicityAssurance: data.minAtomicityAssurance,
  };
}

export function makeNoOverdraftCommitment(data: {
  commitmentId: string;
  minPostTransferBalance: number;
}): NoOverdraftCommitment {
  return {
    commitmentId: data.commitmentId as NoOverdraftCommitmentId,
    minPostTransferBalance: data.minPostTransferBalance,
  };
}

export function makeAuditableJournalCommitment(data: {
  commitmentId: string;
  journalRetentionDays: number;
}): AuditableJournalCommitment {
  return {
    commitmentId: data.commitmentId as AuditableJournalCommitmentId,
    journalRetentionDays: data.journalRetentionDays,
  };
}

export function makeBoundedLatencyCommitment(data: {
  commitmentId: string;
  maxPendingSeconds: number;
}): BoundedLatencyCommitment {
  return {
    commitmentId: data.commitmentId as BoundedLatencyCommitmentId,
    maxPendingSeconds: data.maxPendingSeconds,
  };
}

export function makeTransferFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): TransferFlow {
  return {
    flowId: data.flowId as TransferFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeBankingTransactionSystem(data: {
  systemId: string;
  knownAccounts: ReadonlySet<Account>;
  activeTransfers: ReadonlySet<Transfer>;
  journalEntries: ReadonlySet<JournalEntry>;
  maxPendingLatencySecs: number;
  transactionCount: number;
}): BankingTransactionSystem {
  return {
    systemId: data.systemId as BankingTransactionSystemId,
    knownAccounts: data.knownAccounts,
    activeTransfers: data.activeTransfers,
    journalEntries: data.journalEntries,
    maxPendingLatencySecs: data.maxPendingLatencySecs,
    transactionCount: data.transactionCount,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  statement: string;
  origin: string;
  riskLevel: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    statement: data.statement,
    origin: data.origin,
    riskLevel: data.riskLevel,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for TransactionOrchestrator. Returns empty array when valid. */
export function validateTransactionOrchestrator(instance: TransactionOrchestrator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.orchestratorId !== null))) {
    violations.push("[TransactionOrchestrator] invariant violated: self.orchestratorId <> null");
  }
  if (!((instance.maxPendingLatencySecs === 30))) {
    violations.push("[TransactionOrchestrator] invariant violated: self.maxPendingLatencySecs = 30.0");
  }
  if (!(Array.from(instance.activeTransfers).every((__x) => (((((__x.source !== null) && (__x.destination !== null)) && (__x.amount > 0)) && (((__x.status === "PENDING") || (__x.status === "COMMITTED")) || (__x.status === "ROLLED_BACK"))))))) {
    violations.push("[TransactionOrchestrator] invariant violated: self.activeTransfers->forAll(t |\n      t.source <> null and t.destination <> null and\n      t.amount > 0.0 and\n      (t.status = 'PENDING' or t.status = 'COMMITTED' or t.status = 'ROLLED_BACK')\n    )");
  }
  return violations;
}

/** Runtime invariant check for AccountLedger. Returns empty array when valid. */
export function validateAccountLedger(instance: AccountLedger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ledgerId !== null))) {
    violations.push("[AccountLedger] invariant violated: self.ledgerId <> null");
  }
  if (!(Array.from(instance.knownAccounts).every((__x) => ((__x.balance >= 0))))) {
    violations.push("[AccountLedger] invariant violated: self.knownAccounts->forAll(a | a.balance >= 0.0)");
  }
  return violations;
}

/** Runtime invariant check for JournalWriter. Returns empty array when valid. */
export function validateJournalWriter(instance: JournalWriter): readonly string[] {
  const violations: string[] = [];
  if (!((instance.journalId !== null))) {
    violations.push("[JournalWriter] invariant violated: self.journalId <> null");
  }
  if (!(Array.from(instance.journalEntries).every((__x) => (((((((__x.transferId !== null) && (__x.preSourceBalance >= 0)) && (__x.postSourceBalance >= 0)) && (__x.preDestBalance >= 0)) && (__x.postDestBalance >= 0)) && ((__x.preSourceBalance - __x.postSourceBalance) === (__x.postDestBalance - __x.preDestBalance))))))) {
    violations.push("[JournalWriter] invariant violated: self.journalEntries->forAll(e |\n      e.transferId <> null and\n      e.preSourceBalance >= 0.0 and\n      e.postSourceBalance >= 0.0 and\n      e.preDestBalance >= 0.0 and\n      e.postDestBalance >= 0.0 and\n      (e.preSourceBalance - e.postSourceBalance) = (e.postDestBalance - e.preDestBalance)\n    )");
  }
  return violations;
}

/** Runtime invariant check for NotificationDispatcher. Returns empty array when valid. */
export function validateNotificationDispatcher(instance: NotificationDispatcher): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dispatcherId !== null))) {
    violations.push("[NotificationDispatcher] invariant violated: self.dispatcherId <> null");
  }
  return violations;
}

/** Runtime invariant check for PendingTransferRecovery. Returns empty array when valid. */
export function validatePendingTransferRecovery(instance: PendingTransferRecovery): readonly string[] {
  const violations: string[] = [];
  if (!((instance.recoveryId !== null))) {
    violations.push("[PendingTransferRecovery] invariant violated: self.recoveryId <> null");
  }
  if (!((instance.lastRecoveryTimestamp >= 0))) {
    violations.push("[PendingTransferRecovery] invariant violated: self.lastRecoveryTimestamp >= 0.0");
  }
  if (!(Array.from(instance.recoveryLog).every((__x) => (((__x.status === "COMMITTED") || (__x.status === "ROLLED_BACK")))))) {
    violations.push("[PendingTransferRecovery] invariant violated: self.recoveryLog->forAll(t | t.status = 'COMMITTED' or t.status = 'ROLLED_BACK')");
  }
  return violations;
}

/** Runtime invariant check for TimerKeeper. Returns empty array when valid. */
export function validateTimerKeeper(instance: TimerKeeper): readonly string[] {
  const violations: string[] = [];
  if (!((instance.timerId !== null))) {
    violations.push("[TimerKeeper] invariant violated: self.timerId <> null");
  }
  if (!((instance.maxLatencySecs === 30))) {
    violations.push("[TimerKeeper] invariant violated: self.maxLatencySecs = 30.0");
  }
  if (!(Array.from(instance.pendingTimestamps).every((__x) => ((__x > 0))))) {
    violations.push("[TimerKeeper] invariant violated: self.pendingTimestamps->forAll(ts | ts > 0.0)");
  }
  return violations;
}

/** Runtime invariant check for DebitCreditChannel. Returns empty array when valid. */
export function validateDebitCreditChannel(instance: DebitCreditChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[DebitCreditChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastDebitTime >= 0))) {
    violations.push("[DebitCreditChannel] invariant violated: self.lastDebitTime >= 0.0");
  }
  if (!((instance.lastCreditTime >= 0))) {
    violations.push("[DebitCreditChannel] invariant violated: self.lastCreditTime >= 0.0");
  }
  if (!((!(instance.channelActive) || ((instance.lastDebitTime <= instance.lastCreditTime) || (instance.lastCreditTime === 0))))) {
    violations.push("[DebitCreditChannel] invariant violated: self.channelActive implies\n      (self.lastDebitTime <= self.lastCreditTime or self.lastCreditTime = 0.0)");
  }
  return violations;
}

/** Runtime invariant check for AuditChannel. Returns empty array when valid. */
export function validateAuditChannel(instance: AuditChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[AuditChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastJournalWriteTime >= 0))) {
    violations.push("[AuditChannel] invariant violated: self.lastJournalWriteTime >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for NotificationChannel. Returns empty array when valid. */
export function validateNotificationChannel(instance: NotificationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[NotificationChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastNotificationTime >= 0))) {
    violations.push("[NotificationChannel] invariant violated: self.lastNotificationTime >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for RecoveryChannel. Returns empty array when valid. */
export function validateRecoveryChannel(instance: RecoveryChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[RecoveryChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastRecoveryTime >= 0))) {
    violations.push("[RecoveryChannel] invariant violated: self.lastRecoveryTime >= 0.0");
  }
  if (!((instance.pendingTransferCount >= 0))) {
    violations.push("[RecoveryChannel] invariant violated: self.pendingTransferCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for LatencyMonitoringChannel. Returns empty array when valid. */
export function validateLatencyMonitoringChannel(instance: LatencyMonitoringChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[LatencyMonitoringChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastLatencyCheckTime >= 0))) {
    violations.push("[LatencyMonitoringChannel] invariant violated: self.lastLatencyCheckTime >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for TransferExecutionFlow. Returns empty array when valid. */
export function validateTransferExecutionFlow(instance: TransferExecutionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.executionFlowId !== null))) {
    violations.push("[TransferExecutionFlow] invariant violated: self.executionFlowId <> null");
  }
  if (!((instance.stimulus !== null))) {
    violations.push("[TransferExecutionFlow] invariant violated: self.stimulus <> null");
  }
  if (!((instance.response !== null))) {
    violations.push("[TransferExecutionFlow] invariant violated: self.response <> null");
  }
  return violations;
}

/** Runtime invariant check for TransferRecoveryFlow. Returns empty array when valid. */
export function validateTransferRecoveryFlow(instance: TransferRecoveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.recoveryFlowId !== null))) {
    violations.push("[TransferRecoveryFlow] invariant violated: self.recoveryFlowId <> null");
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
  return violations;
}

/** Runtime invariant check for Regulator. Returns empty array when valid. */
export function validateRegulator(instance: Regulator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[Regulator] invariant violated: self.regulatorId <> null");
  }
  if (!((instance.authority !== null))) {
    violations.push("[Regulator] invariant violated: self.authority <> null");
  }
  return violations;
}

/** Runtime invariant check for BankingVendor. Returns empty array when valid. */
export function validateBankingVendor(instance: BankingVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[BankingVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Account. Returns empty array when valid. */
export function validateAccount(instance: Account): readonly string[] {
  const violations: string[] = [];
  if (!((instance.accountId !== null))) {
    violations.push("[Account] invariant violated: self.accountId <> null");
  }
  if (!((instance.owner !== null))) {
    violations.push("[Account] invariant violated: self.owner <> null");
  }
  if (!((instance.balance >= 0))) {
    violations.push("[Account] invariant violated: self.balance >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Transfer. Returns empty array when valid. */
export function validateTransfer(instance: Transfer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.transferId !== null))) {
    violations.push("[Transfer] invariant violated: self.transferId <> null");
  }
  if (!((instance.source !== null))) {
    violations.push("[Transfer] invariant violated: self.source <> null");
  }
  if (!((instance.destination !== null))) {
    violations.push("[Transfer] invariant violated: self.destination <> null");
  }
  if (!((instance.amount > 0))) {
    violations.push("[Transfer] invariant violated: self.amount > 0.0");
  }
  if (!((instance.source !== instance.destination))) {
    violations.push("[Transfer] invariant violated: self.source <> self.destination");
  }
  if (!((((instance.status === "PENDING") || (instance.status === "COMMITTED")) || (instance.status === "ROLLED_BACK")))) {
    violations.push("[Transfer] invariant violated: self.status = 'PENDING' or self.status = 'COMMITTED' or self.status = 'ROLLED_BACK'");
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
  if (!((instance.preSourceBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.preSourceBalance >= 0.0");
  }
  if (!((instance.postSourceBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.postSourceBalance >= 0.0");
  }
  if (!((instance.preDestBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.preDestBalance >= 0.0");
  }
  if (!((instance.postDestBalance >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.postDestBalance >= 0.0");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[JournalEntry] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for AtomicityConstraints. Returns empty array when valid. */
export function validateAtomicityConstraints(instance: AtomicityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for NoOverdraftConstraint. Returns empty array when valid. */
export function validateNoOverdraftConstraint(instance: NoOverdraftConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.balance >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AuditableConstraint. Returns empty array when valid. */
export function validateAuditableConstraint(instance: AuditableConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AuditableConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for BoundedLatencyConstraint. Returns empty array when valid. */
export function validateBoundedLatencyConstraint(instance: BoundedLatencyConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.status <> 'PENDING' — reason: bare variable 'bearer' has no binding in this scope
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
  return violations;
}

/** Runtime invariant check for BankingTransactionSystem. Returns empty array when valid. */
export function validateBankingTransactionSystem(instance: BankingTransactionSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxPendingLatencySecs === 30))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.maxPendingLatencySecs = 30.0");
  }
  if (!((instance.transactionCount >= 0))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.transactionCount >= 0");
  }
  if (!(Array.from(instance.knownAccounts).every((__x) => ((__x.balance >= 0))))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.knownAccounts->forAll(a | a.balance >= 0.0)");
  }
  if (!(Array.from(instance.activeTransfers).every((__x) => ((((__x.source !== __x.destination) && (__x.amount > 0)) && (((__x.status === "PENDING") || (__x.status === "COMMITTED")) || (__x.status === "ROLLED_BACK"))))))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.activeTransfers->forAll(t |\n      t.source <> t.destination and\n      t.amount > 0.0 and\n      (t.status = 'PENDING' or t.status = 'COMMITTED' or t.status = 'ROLLED_BACK')\n    )");
  }
  if (!(Array.from(instance.journalEntries).every((__x) => (Array.from(instance.activeTransfers).some((__x) => ((__x.transferId === __x.transferId))))))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.journalEntries->forAll(e |\n      self.activeTransfers->exists(t | t.transferId = e.transferId)\n    )");
  }
  return violations;
}

/** Runtime invariant check for PciDssCompliant. Returns empty array when valid. */
export function validatePciDssCompliant(instance: PciDssCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.systemId <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SoxAuditCompliant. Returns empty array when valid. */
export function validateSoxAuditCompliant(instance: SoxAuditCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.journalEntries->forAll(e |
      e.preSourceBalance >= 0.0 and
      e.postSourceBalance >= 0.0 and
      e.preDestBalance >= 0.0 and
      e.postDestBalance >= 0.0
    ) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for GdprCompliant. Returns empty array when valid. */
export function validateGdprCompliant(instance: GdprCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[GdprCompliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MonotonicTimestampInvariant. Returns empty array when valid. */
export function validateMonotonicTimestampInvariant(instance: MonotonicTimestampInvariant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.timestamp > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ZeroSumTransferInvariant. Returns empty array when valid. */
export function validateZeroSumTransferInvariant(instance: ZeroSumTransferInvariant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BankingTransactionSystemFormalized. Returns empty array when valid. */
export function validateBankingTransactionSystemFormalized(instance: BankingTransactionSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[BankingTransactionSystemFormalized] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.statement !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.statement <> null");
  }
  if (!((instance.origin !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.origin <> null");
  }
  if (!((((instance.riskLevel === "LOW") || (instance.riskLevel === "MEDIUM")) || (instance.riskLevel === "HIGH")))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.riskLevel = 'LOW' or self.riskLevel = 'MEDIUM' or self.riskLevel = 'HIGH'");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for TransactionOrchestrator.initiateTransfer. User supplies this. */
export type TransactionOrchestratorInitiateTransferImpl = (self: TransactionOrchestrator, sourceId: string, destId: string, amount: number) => { self: TransactionOrchestrator; modified: { activeTransfers: unknown; transactionCount: unknown } };

/** Contract-checking wrapper for TransactionOrchestrator.initiateTransfer. */
export function wrapTransactionOrchestratorInitiateTransfer(impl: TransactionOrchestratorInitiateTransferImpl): (self: TransactionOrchestrator, sourceId: string, destId: string, amount: number) => TransactionOrchestrator {
  return (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[TransactionOrchestrator.initiateTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((sourceId !== destId))) {
      preViolations.push("[TransactionOrchestrator.initiateTransfer] pre violated: sourceId <> destId");
    }
    if (!((amount > 0))) {
      preViolations.push("[TransactionOrchestrator.initiateTransfer] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeTransfers": self.activeTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.activeTransfers).some((__x) => (((((__x.source?.accountId === sourceId) && (__x.destination?.accountId === destId)) && (__x.amount === amount)) && (__x.status === "PENDING")))))) {
        postViolations.push("[TransactionOrchestrator.initiateTransfer] post violated: self.activeTransfers->exists(t |\n      t.source.accountId = sourceId and\n      t.destination.accountId = destId and\n      t.amount = amount and\n      t.status = 'PENDING'\n    )");
      }
      if (!(((__result.self.activeTransfers).size === ((__pre["self.activeTransfers"]).size + 1)))) {
        postViolations.push("[TransactionOrchestrator.initiateTransfer] post violated: self.activeTransfers->size() = self.activeTransfers@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.initiateTransfer (async). User supplies this. */
export type TransactionOrchestratorInitiateTransferAsyncImpl = (self: TransactionOrchestrator, sourceId: string, destId: string, amount: number) => Promise<{ self: TransactionOrchestrator; modified: { activeTransfers: unknown; transactionCount: unknown } }>;

/** Contract-checking wrapper for TransactionOrchestrator.initiateTransfer (async). */
export function wrapTransactionOrchestratorInitiateTransferAsync(impl: TransactionOrchestratorInitiateTransferAsyncImpl): (self: TransactionOrchestrator, sourceId: string, destId: string, amount: number) => Promise<TransactionOrchestrator> {
  return async (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[TransactionOrchestrator.initiateTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((sourceId !== destId))) {
      preViolations.push("[TransactionOrchestrator.initiateTransfer] pre violated: sourceId <> destId");
    }
    if (!((amount > 0))) {
      preViolations.push("[TransactionOrchestrator.initiateTransfer] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeTransfers": self.activeTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.activeTransfers).some((__x) => (((((__x.source?.accountId === sourceId) && (__x.destination?.accountId === destId)) && (__x.amount === amount)) && (__x.status === "PENDING")))))) {
        postViolations.push("[TransactionOrchestrator.initiateTransfer] post violated: self.activeTransfers->exists(t |\n      t.source.accountId = sourceId and\n      t.destination.accountId = destId and\n      t.amount = amount and\n      t.status = 'PENDING'\n    )");
      }
      if (!(((__result.self.activeTransfers).size === ((__pre["self.activeTransfers"]).size + 1)))) {
        postViolations.push("[TransactionOrchestrator.initiateTransfer] post violated: self.activeTransfers->size() = self.activeTransfers@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.completeTransfer. User supplies this. */
export type TransactionOrchestratorCompleteTransferImpl = (self: TransactionOrchestrator, transferId: string) => { self: TransactionOrchestrator; modified: { activeTransfers: unknown; transactionCount: unknown } };

/** Contract-checking wrapper for TransactionOrchestrator.completeTransfer. */
export function wrapTransactionOrchestratorCompleteTransfer(impl: TransactionOrchestratorCompleteTransferImpl): (self: TransactionOrchestrator, transferId: string) => TransactionOrchestrator {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[TransactionOrchestrator.completeTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "PENDING")))))) {
      preViolations.push("[TransactionOrchestrator.completeTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.transactionCount": self.transactionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'COMMITTED') — unsupported OclExpr kind
      if (!((__result.self.transactionCount === (__pre["self.transactionCount"] + 1)))) {
        postViolations.push("[TransactionOrchestrator.completeTransfer] post violated: self.transactionCount = self.transactionCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.completeTransfer (async). User supplies this. */
export type TransactionOrchestratorCompleteTransferAsyncImpl = (self: TransactionOrchestrator, transferId: string) => Promise<{ self: TransactionOrchestrator; modified: { activeTransfers: unknown; transactionCount: unknown } }>;

/** Contract-checking wrapper for TransactionOrchestrator.completeTransfer (async). */
export function wrapTransactionOrchestratorCompleteTransferAsync(impl: TransactionOrchestratorCompleteTransferAsyncImpl): (self: TransactionOrchestrator, transferId: string) => Promise<TransactionOrchestrator> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[TransactionOrchestrator.completeTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "PENDING")))))) {
      preViolations.push("[TransactionOrchestrator.completeTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.transactionCount": self.transactionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'COMMITTED') — unsupported OclExpr kind
      if (!((__result.self.transactionCount === (__pre["self.transactionCount"] + 1)))) {
        postViolations.push("[TransactionOrchestrator.completeTransfer] post violated: self.transactionCount = self.transactionCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.rollbackTransfer. User supplies this. */
export type TransactionOrchestratorRollbackTransferImpl = (self: TransactionOrchestrator, transferId: string) => { self: TransactionOrchestrator; modified: { activeTransfers: unknown } };

/** Contract-checking wrapper for TransactionOrchestrator.rollbackTransfer. */
export function wrapTransactionOrchestratorRollbackTransfer(impl: TransactionOrchestratorRollbackTransferImpl): (self: TransactionOrchestrator, transferId: string) => TransactionOrchestrator {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[TransactionOrchestrator.rollbackTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "PENDING")))))) {
      preViolations.push("[TransactionOrchestrator.rollbackTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'ROLLED_BACK') — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.rollbackTransfer (async). User supplies this. */
export type TransactionOrchestratorRollbackTransferAsyncImpl = (self: TransactionOrchestrator, transferId: string) => Promise<{ self: TransactionOrchestrator; modified: { activeTransfers: unknown } }>;

/** Contract-checking wrapper for TransactionOrchestrator.rollbackTransfer (async). */
export function wrapTransactionOrchestratorRollbackTransferAsync(impl: TransactionOrchestratorRollbackTransferAsyncImpl): (self: TransactionOrchestrator, transferId: string) => Promise<TransactionOrchestrator> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[TransactionOrchestrator.rollbackTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "PENDING")))))) {
      preViolations.push("[TransactionOrchestrator.rollbackTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'ROLLED_BACK') — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.queryTransferStatus. User supplies this. */
export type TransactionOrchestratorQueryTransferStatusImpl = (self: TransactionOrchestrator, transferId: string) => { self: TransactionOrchestrator; modified: {} };

/** Contract-checking wrapper for TransactionOrchestrator.queryTransferStatus. */
export function wrapTransactionOrchestratorQueryTransferStatus(impl: TransactionOrchestratorQueryTransferStatusImpl): (self: TransactionOrchestrator, transferId: string) => TransactionOrchestrator {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[TransactionOrchestrator.queryTransferStatus] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[TransactionOrchestrator.queryTransferStatus] pre violated: self.activeTransfers->exists(t | t.transferId = transferId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.activeTransfers->select(t | t.transferId = transferId)->notEmpty() then
            self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | result = t.status)
          else
            result = 'UNKNOWN'
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransactionOrchestrator.queryTransferStatus (async). User supplies this. */
export type TransactionOrchestratorQueryTransferStatusAsyncImpl = (self: TransactionOrchestrator, transferId: string) => Promise<{ self: TransactionOrchestrator; modified: {} }>;

/** Contract-checking wrapper for TransactionOrchestrator.queryTransferStatus (async). */
export function wrapTransactionOrchestratorQueryTransferStatusAsync(impl: TransactionOrchestratorQueryTransferStatusAsyncImpl): (self: TransactionOrchestrator, transferId: string) => Promise<TransactionOrchestrator> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[TransactionOrchestrator.queryTransferStatus] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[TransactionOrchestrator.queryTransferStatus] pre violated: self.activeTransfers->exists(t | t.transferId = transferId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.activeTransfers->select(t | t.transferId = transferId)->notEmpty() then
            self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | result = t.status)
          else
            result = 'UNKNOWN'
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.debitAccount. User supplies this. */
export type AccountLedgerDebitAccountImpl = (self: AccountLedger, accountId: string, amount: number) => { self: AccountLedger; modified: { knownAccounts: unknown } };

/** Contract-checking wrapper for AccountLedger.debitAccount. */
export function wrapAccountLedgerDebitAccount(impl: AccountLedgerDebitAccountImpl): (self: AccountLedger, accountId: string, amount: number) => AccountLedger {
  return (self, accountId, amount) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.debitAccount] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.debitAccount] pre violated: amount > 0.0");
    }
    // SKIPPED pre-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance >= amount) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance = a.balance@pre - amount) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance >= 0.0) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.debitAccount (async). User supplies this. */
export type AccountLedgerDebitAccountAsyncImpl = (self: AccountLedger, accountId: string, amount: number) => Promise<{ self: AccountLedger; modified: { knownAccounts: unknown } }>;

/** Contract-checking wrapper for AccountLedger.debitAccount (async). */
export function wrapAccountLedgerDebitAccountAsync(impl: AccountLedgerDebitAccountAsyncImpl): (self: AccountLedger, accountId: string, amount: number) => Promise<AccountLedger> {
  return async (self, accountId, amount) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.debitAccount] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.debitAccount] pre violated: amount > 0.0");
    }
    // SKIPPED pre-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance >= amount) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance = a.balance@pre - amount) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance >= 0.0) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.creditAccount. User supplies this. */
export type AccountLedgerCreditAccountImpl = (self: AccountLedger, accountId: string, amount: number) => { self: AccountLedger; modified: { knownAccounts: unknown } };

/** Contract-checking wrapper for AccountLedger.creditAccount. */
export function wrapAccountLedgerCreditAccount(impl: AccountLedgerCreditAccountImpl): (self: AccountLedger, accountId: string, amount: number) => AccountLedger {
  return (self, accountId, amount) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.creditAccount] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.creditAccount] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance = a.balance@pre + amount) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.creditAccount (async). User supplies this. */
export type AccountLedgerCreditAccountAsyncImpl = (self: AccountLedger, accountId: string, amount: number) => Promise<{ self: AccountLedger; modified: { knownAccounts: unknown } }>;

/** Contract-checking wrapper for AccountLedger.creditAccount (async). */
export function wrapAccountLedgerCreditAccountAsync(impl: AccountLedgerCreditAccountAsyncImpl): (self: AccountLedger, accountId: string, amount: number) => Promise<AccountLedger> {
  return async (self, accountId, amount) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.creditAccount] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.creditAccount] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance = a.balance@pre + amount) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.revertDebit. User supplies this. */
export type AccountLedgerRevertDebitImpl = (self: AccountLedger, accountId: string, amount: number) => { self: AccountLedger; modified: { knownAccounts: unknown } };

/** Contract-checking wrapper for AccountLedger.revertDebit. */
export function wrapAccountLedgerRevertDebit(impl: AccountLedgerRevertDebitImpl): (self: AccountLedger, accountId: string, amount: number) => AccountLedger {
  return (self, accountId, amount) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.revertDebit] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.revertDebit] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance = a.balance@pre + amount) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.revertDebit (async). User supplies this. */
export type AccountLedgerRevertDebitAsyncImpl = (self: AccountLedger, accountId: string, amount: number) => Promise<{ self: AccountLedger; modified: { knownAccounts: unknown } }>;

/** Contract-checking wrapper for AccountLedger.revertDebit (async). */
export function wrapAccountLedgerRevertDebitAsync(impl: AccountLedgerRevertDebitAsyncImpl): (self: AccountLedger, accountId: string, amount: number) => Promise<AccountLedger> {
  return async (self, accountId, amount) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.revertDebit] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (!((amount > 0))) {
      preViolations.push("[AccountLedger.revertDebit] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | a.balance = a.balance@pre + amount) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.queryBalance. User supplies this. */
export type AccountLedgerQueryBalanceImpl = (self: AccountLedger, accountId: string) => { self: AccountLedger; modified: {} };

/** Contract-checking wrapper for AccountLedger.queryBalance. */
export function wrapAccountLedgerQueryBalance(impl: AccountLedgerQueryBalanceImpl): (self: AccountLedger, accountId: string) => AccountLedger {
  return (self, accountId) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.queryBalance] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if self.knownAccounts->select(a | a.accountId = accountId)->notEmpty() then
            self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | result = a.balance)
          else
            result = -1.0
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountLedger.queryBalance (async). User supplies this. */
export type AccountLedgerQueryBalanceAsyncImpl = (self: AccountLedger, accountId: string) => Promise<{ self: AccountLedger; modified: {} }>;

/** Contract-checking wrapper for AccountLedger.queryBalance (async). */
export function wrapAccountLedgerQueryBalanceAsync(impl: AccountLedgerQueryBalanceAsyncImpl): (self: AccountLedger, accountId: string) => Promise<AccountLedger> {
  return async (self, accountId) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountLedger.queryBalance] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if self.knownAccounts->select(a | a.accountId = accountId)->notEmpty() then
            self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | result = a.balance)
          else
            result = -1.0
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.writeEntry. User supplies this. */
export type JournalWriterWriteEntryImpl = (self: JournalWriter, transferId: string, preSrcBal: number, postSrcBal: number, preDstBal: number, postDstBal: number) => { self: JournalWriter; modified: { journalEntries: unknown } };

/** Contract-checking wrapper for JournalWriter.writeEntry. */
export function wrapJournalWriterWriteEntry(impl: JournalWriterWriteEntryImpl): (self: JournalWriter, transferId: string, preSrcBal: number, postSrcBal: number, preDstBal: number, postDstBal: number) => JournalWriter {
  return (self, transferId, preSrcBal, postSrcBal, preDstBal, postDstBal) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: transferId <> null");
    }
    if (!(((preSrcBal >= 0) && (postSrcBal >= 0)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preSrcBal >= 0.0 and postSrcBal >= 0.0");
    }
    if (!(((preDstBal >= 0) && (postDstBal >= 0)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preDstBal >= 0.0 and postDstBal >= 0.0");
    }
    if (!(((preSrcBal - postSrcBal) === (postDstBal - preDstBal)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: (preSrcBal - postSrcBal) = (postDstBal - preDstBal)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalEntries": self.journalEntries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId, preSrcBal, postSrcBal, preDstBal, postDstBal);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.journalEntries).some((__x) => (((((((__x.transferId === transferId) && (__x.preSourceBalance === preSrcBal)) && (__x.postSourceBalance === postSrcBal)) && (__x.preDestBalance === preDstBal)) && (__x.postDestBalance === postDstBal)) && (__x.timestamp >= 0)))))) {
        postViolations.push("[JournalWriter.writeEntry] post violated: self.journalEntries->exists(e |\n      e.transferId = transferId and\n      e.preSourceBalance = preSrcBal and\n      e.postSourceBalance = postSrcBal and\n      e.preDestBalance = preDstBal and\n      e.postDestBalance = postDstBal and\n      e.timestamp >= 0.0\n    )");
      }
      if (!(((__result.self.journalEntries).size === ((__pre["self.journalEntries"]).size + 1)))) {
        postViolations.push("[JournalWriter.writeEntry] post violated: self.journalEntries->size() = self.journalEntries@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.writeEntry (async). User supplies this. */
export type JournalWriterWriteEntryAsyncImpl = (self: JournalWriter, transferId: string, preSrcBal: number, postSrcBal: number, preDstBal: number, postDstBal: number) => Promise<{ self: JournalWriter; modified: { journalEntries: unknown } }>;

/** Contract-checking wrapper for JournalWriter.writeEntry (async). */
export function wrapJournalWriterWriteEntryAsync(impl: JournalWriterWriteEntryAsyncImpl): (self: JournalWriter, transferId: string, preSrcBal: number, postSrcBal: number, preDstBal: number, postDstBal: number) => Promise<JournalWriter> {
  return async (self, transferId, preSrcBal, postSrcBal, preDstBal, postDstBal) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: transferId <> null");
    }
    if (!(((preSrcBal >= 0) && (postSrcBal >= 0)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preSrcBal >= 0.0 and postSrcBal >= 0.0");
    }
    if (!(((preDstBal >= 0) && (postDstBal >= 0)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preDstBal >= 0.0 and postDstBal >= 0.0");
    }
    if (!(((preSrcBal - postSrcBal) === (postDstBal - preDstBal)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: (preSrcBal - postSrcBal) = (postDstBal - preDstBal)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalEntries": self.journalEntries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId, preSrcBal, postSrcBal, preDstBal, postDstBal);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.journalEntries).some((__x) => (((((((__x.transferId === transferId) && (__x.preSourceBalance === preSrcBal)) && (__x.postSourceBalance === postSrcBal)) && (__x.preDestBalance === preDstBal)) && (__x.postDestBalance === postDstBal)) && (__x.timestamp >= 0)))))) {
        postViolations.push("[JournalWriter.writeEntry] post violated: self.journalEntries->exists(e |\n      e.transferId = transferId and\n      e.preSourceBalance = preSrcBal and\n      e.postSourceBalance = postSrcBal and\n      e.preDestBalance = preDstBal and\n      e.postDestBalance = postDstBal and\n      e.timestamp >= 0.0\n    )");
      }
      if (!(((__result.self.journalEntries).size === ((__pre["self.journalEntries"]).size + 1)))) {
        postViolations.push("[JournalWriter.writeEntry] post violated: self.journalEntries->size() = self.journalEntries@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.verifyEntry. User supplies this. */
export type JournalWriterVerifyEntryImpl = (self: JournalWriter, entryId: string) => { self: JournalWriter; modified: {} };

/** Contract-checking wrapper for JournalWriter.verifyEntry. */
export function wrapJournalWriterVerifyEntry(impl: JournalWriterVerifyEntryImpl): (self: JournalWriter, entryId: string) => JournalWriter {
  return (self, entryId) => {
    const preViolations: string[] = [];
    if (!((entryId !== null))) {
      preViolations.push("[JournalWriter.verifyEntry] pre violated: entryId <> null");
    }
    if (!(Array.from(self.journalEntries).some((__x) => ((__x.entryId === entryId))))) {
      preViolations.push("[JournalWriter.verifyEntry] pre violated: self.journalEntries->exists(e | e.entryId = entryId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.journalEntries->select(e | e.entryId = entryId)->notEmpty() then
            self.journalEntries->select(e | e.entryId = entryId)->forAll(e |
              e.preSourceBalance >= 0.0 and e.postSourceBalance >= 0.0 and
              e.preDestBalance >= 0.0 and e.postDestBalance >= 0.0 and
              (e.preSourceBalance - e.postSourceBalance) = (e.postDestBalance - e.preDestBalance)
            ) and result = true
          else
            result = false
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.verifyEntry (async). User supplies this. */
export type JournalWriterVerifyEntryAsyncImpl = (self: JournalWriter, entryId: string) => Promise<{ self: JournalWriter; modified: {} }>;

/** Contract-checking wrapper for JournalWriter.verifyEntry (async). */
export function wrapJournalWriterVerifyEntryAsync(impl: JournalWriterVerifyEntryAsyncImpl): (self: JournalWriter, entryId: string) => Promise<JournalWriter> {
  return async (self, entryId) => {
    const preViolations: string[] = [];
    if (!((entryId !== null))) {
      preViolations.push("[JournalWriter.verifyEntry] pre violated: entryId <> null");
    }
    if (!(Array.from(self.journalEntries).some((__x) => ((__x.entryId === entryId))))) {
      preViolations.push("[JournalWriter.verifyEntry] pre violated: self.journalEntries->exists(e | e.entryId = entryId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.journalEntries->select(e | e.entryId = entryId)->notEmpty() then
            self.journalEntries->select(e | e.entryId = entryId)->forAll(e |
              e.preSourceBalance >= 0.0 and e.postSourceBalance >= 0.0 and
              e.preDestBalance >= 0.0 and e.postDestBalance >= 0.0 and
              (e.preSourceBalance - e.postSourceBalance) = (e.postDestBalance - e.preDestBalance)
            ) and result = true
          else
            result = false
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcher.notifyCustomer. User supplies this. */
export type NotificationDispatcherNotifyCustomerImpl = (self: NotificationDispatcher, transferId: string) => { self: NotificationDispatcher; modified: { notifiedTransfers: unknown } };

/** Contract-checking wrapper for NotificationDispatcher.notifyCustomer. */
export function wrapNotificationDispatcherNotifyCustomer(impl: NotificationDispatcherNotifyCustomerImpl): (self: NotificationDispatcher, transferId: string) => NotificationDispatcher {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[NotificationDispatcher.notifyCustomer] pre violated: transferId <> null");
    }
    if (!(true)) {
      preViolations.push("[NotificationDispatcher.notifyCustomer] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notifiedTransfers": self.notifiedTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.notifiedTransfers).some((__x) => ((__x.transferId === transferId))))) {
        postViolations.push("[NotificationDispatcher.notifyCustomer] post violated: self.notifiedTransfers->exists(t | t.transferId = transferId)");
      }
      if (!(((__result.self.notifiedTransfers).size === ((__pre["self.notifiedTransfers"]).size + 1)))) {
        postViolations.push("[NotificationDispatcher.notifyCustomer] post violated: self.notifiedTransfers->size() = self.notifiedTransfers@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcher.notifyCustomer (async). User supplies this. */
export type NotificationDispatcherNotifyCustomerAsyncImpl = (self: NotificationDispatcher, transferId: string) => Promise<{ self: NotificationDispatcher; modified: { notifiedTransfers: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcher.notifyCustomer (async). */
export function wrapNotificationDispatcherNotifyCustomerAsync(impl: NotificationDispatcherNotifyCustomerAsyncImpl): (self: NotificationDispatcher, transferId: string) => Promise<NotificationDispatcher> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[NotificationDispatcher.notifyCustomer] pre violated: transferId <> null");
    }
    if (!(true)) {
      preViolations.push("[NotificationDispatcher.notifyCustomer] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notifiedTransfers": self.notifiedTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.notifiedTransfers).some((__x) => ((__x.transferId === transferId))))) {
        postViolations.push("[NotificationDispatcher.notifyCustomer] post violated: self.notifiedTransfers->exists(t | t.transferId = transferId)");
      }
      if (!(((__result.self.notifiedTransfers).size === ((__pre["self.notifiedTransfers"]).size + 1)))) {
        postViolations.push("[NotificationDispatcher.notifyCustomer] post violated: self.notifiedTransfers->size() = self.notifiedTransfers@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcher.notifyFailure. User supplies this. */
export type NotificationDispatcherNotifyFailureImpl = (self: NotificationDispatcher, transferId: string) => { self: NotificationDispatcher; modified: {} };

/** Contract-checking wrapper for NotificationDispatcher.notifyFailure. */
export function wrapNotificationDispatcherNotifyFailure(impl: NotificationDispatcherNotifyFailureImpl): (self: NotificationDispatcher, transferId: string) => NotificationDispatcher {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[NotificationDispatcher.notifyFailure] pre violated: transferId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notifiedTransfers": self.notifiedTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      if (!(((__result.self.notifiedTransfers).size === (__pre["self.notifiedTransfers"]).size))) {
        postViolations.push("[NotificationDispatcher.notifyFailure] post violated: self.notifiedTransfers->size() = self.notifiedTransfers@pre->size()");
      }
      if (!(!(Array.from(__result.self.notifiedTransfers).some((__x) => ((__x.transferId === transferId)))))) {
        postViolations.push("[NotificationDispatcher.notifyFailure] post violated: not self.notifiedTransfers->exists(t | t.transferId = transferId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcher.notifyFailure (async). User supplies this. */
export type NotificationDispatcherNotifyFailureAsyncImpl = (self: NotificationDispatcher, transferId: string) => Promise<{ self: NotificationDispatcher; modified: {} }>;

/** Contract-checking wrapper for NotificationDispatcher.notifyFailure (async). */
export function wrapNotificationDispatcherNotifyFailureAsync(impl: NotificationDispatcherNotifyFailureAsyncImpl): (self: NotificationDispatcher, transferId: string) => Promise<NotificationDispatcher> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[NotificationDispatcher.notifyFailure] pre violated: transferId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notifiedTransfers": self.notifiedTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      if (!(((__result.self.notifiedTransfers).size === (__pre["self.notifiedTransfers"]).size))) {
        postViolations.push("[NotificationDispatcher.notifyFailure] post violated: self.notifiedTransfers->size() = self.notifiedTransfers@pre->size()");
      }
      if (!(!(Array.from(__result.self.notifiedTransfers).some((__x) => ((__x.transferId === transferId)))))) {
        postViolations.push("[NotificationDispatcher.notifyFailure] post violated: not self.notifiedTransfers->exists(t | t.transferId = transferId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PendingTransferRecovery.recoverPendingTransfer. User supplies this. */
export type PendingTransferRecoveryRecoverPendingTransferImpl = (self: PendingTransferRecovery, transferId: string) => { self: PendingTransferRecovery; modified: { recoveryLog: unknown; lastRecoveryTimestamp: unknown } };

/** Contract-checking wrapper for PendingTransferRecovery.recoverPendingTransfer. */
export function wrapPendingTransferRecoveryRecoverPendingTransfer(impl: PendingTransferRecoveryRecoverPendingTransferImpl): (self: PendingTransferRecovery, transferId: string) => PendingTransferRecovery {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[PendingTransferRecovery.recoverPendingTransfer] pre violated: transferId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastRecoveryTimestamp": self.lastRecoveryTimestamp,
      "self.recoveryLog": self.recoveryLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.recoveryLog).some((__x) => (((__x.transferId === transferId) && ((__x.status === "COMMITTED") || (__x.status === "ROLLED_BACK"))))))) {
        postViolations.push("[PendingTransferRecovery.recoverPendingTransfer] post violated: self.recoveryLog->exists(t | t.transferId = transferId and (t.status = 'COMMITTED' or t.status = 'ROLLED_BACK'))");
      }
      if (!((__result.self.lastRecoveryTimestamp >= __pre["self.lastRecoveryTimestamp"]))) {
        postViolations.push("[PendingTransferRecovery.recoverPendingTransfer] post violated: self.lastRecoveryTimestamp >= self.lastRecoveryTimestamp@pre");
      }
      if (!(((__result.self.recoveryLog).size === ((__pre["self.recoveryLog"]).size + 1)))) {
        postViolations.push("[PendingTransferRecovery.recoverPendingTransfer] post violated: self.recoveryLog->size() = self.recoveryLog@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PendingTransferRecovery.recoverPendingTransfer (async). User supplies this. */
export type PendingTransferRecoveryRecoverPendingTransferAsyncImpl = (self: PendingTransferRecovery, transferId: string) => Promise<{ self: PendingTransferRecovery; modified: { recoveryLog: unknown; lastRecoveryTimestamp: unknown } }>;

/** Contract-checking wrapper for PendingTransferRecovery.recoverPendingTransfer (async). */
export function wrapPendingTransferRecoveryRecoverPendingTransferAsync(impl: PendingTransferRecoveryRecoverPendingTransferAsyncImpl): (self: PendingTransferRecovery, transferId: string) => Promise<PendingTransferRecovery> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[PendingTransferRecovery.recoverPendingTransfer] pre violated: transferId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastRecoveryTimestamp": self.lastRecoveryTimestamp,
      "self.recoveryLog": self.recoveryLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.recoveryLog).some((__x) => (((__x.transferId === transferId) && ((__x.status === "COMMITTED") || (__x.status === "ROLLED_BACK"))))))) {
        postViolations.push("[PendingTransferRecovery.recoverPendingTransfer] post violated: self.recoveryLog->exists(t | t.transferId = transferId and (t.status = 'COMMITTED' or t.status = 'ROLLED_BACK'))");
      }
      if (!((__result.self.lastRecoveryTimestamp >= __pre["self.lastRecoveryTimestamp"]))) {
        postViolations.push("[PendingTransferRecovery.recoverPendingTransfer] post violated: self.lastRecoveryTimestamp >= self.lastRecoveryTimestamp@pre");
      }
      if (!(((__result.self.recoveryLog).size === ((__pre["self.recoveryLog"]).size + 1)))) {
        postViolations.push("[PendingTransferRecovery.recoverPendingTransfer] post violated: self.recoveryLog->size() = self.recoveryLog@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PendingTransferRecovery.scanPendingTransfers. User supplies this. */
export type PendingTransferRecoveryScanPendingTransfersImpl = (self: PendingTransferRecovery) => { self: PendingTransferRecovery; modified: {} };

/** Contract-checking wrapper for PendingTransferRecovery.scanPendingTransfers. */
export function wrapPendingTransferRecoveryScanPendingTransfers(impl: PendingTransferRecoveryScanPendingTransfersImpl): (self: PendingTransferRecovery) => PendingTransferRecovery {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[PendingTransferRecovery.scanPendingTransfers] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[PendingTransferRecovery.scanPendingTransfers] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PendingTransferRecovery.scanPendingTransfers (async). User supplies this. */
export type PendingTransferRecoveryScanPendingTransfersAsyncImpl = (self: PendingTransferRecovery) => Promise<{ self: PendingTransferRecovery; modified: {} }>;

/** Contract-checking wrapper for PendingTransferRecovery.scanPendingTransfers (async). */
export function wrapPendingTransferRecoveryScanPendingTransfersAsync(impl: PendingTransferRecoveryScanPendingTransfersAsyncImpl): (self: PendingTransferRecovery) => Promise<PendingTransferRecovery> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[PendingTransferRecovery.scanPendingTransfers] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[PendingTransferRecovery.scanPendingTransfers] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TimerKeeper.recordPendingTimestamp. User supplies this. */
export type TimerKeeperRecordPendingTimestampImpl = (self: TimerKeeper, timestamp: number) => { self: TimerKeeper; modified: { pendingTimestamps: unknown } };

/** Contract-checking wrapper for TimerKeeper.recordPendingTimestamp. */
export function wrapTimerKeeperRecordPendingTimestamp(impl: TimerKeeperRecordPendingTimestampImpl): (self: TimerKeeper, timestamp: number) => TimerKeeper {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp > 0))) {
      preViolations.push("[TimerKeeper.recordPendingTimestamp] pre violated: timestamp > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.pendingTimestamps": self.pendingTimestamps,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.pendingTimestamps).has(timestamp))) {
        postViolations.push("[TimerKeeper.recordPendingTimestamp] post violated: self.pendingTimestamps->includes(timestamp)");
      }
      if (!(((__result.self.pendingTimestamps).size === ((__pre["self.pendingTimestamps"]).size + 1)))) {
        postViolations.push("[TimerKeeper.recordPendingTimestamp] post violated: self.pendingTimestamps->size() = self.pendingTimestamps@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TimerKeeper.recordPendingTimestamp (async). User supplies this. */
export type TimerKeeperRecordPendingTimestampAsyncImpl = (self: TimerKeeper, timestamp: number) => Promise<{ self: TimerKeeper; modified: { pendingTimestamps: unknown } }>;

/** Contract-checking wrapper for TimerKeeper.recordPendingTimestamp (async). */
export function wrapTimerKeeperRecordPendingTimestampAsync(impl: TimerKeeperRecordPendingTimestampAsyncImpl): (self: TimerKeeper, timestamp: number) => Promise<TimerKeeper> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp > 0))) {
      preViolations.push("[TimerKeeper.recordPendingTimestamp] pre violated: timestamp > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.pendingTimestamps": self.pendingTimestamps,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.pendingTimestamps).has(timestamp))) {
        postViolations.push("[TimerKeeper.recordPendingTimestamp] post violated: self.pendingTimestamps->includes(timestamp)");
      }
      if (!(((__result.self.pendingTimestamps).size === ((__pre["self.pendingTimestamps"]).size + 1)))) {
        postViolations.push("[TimerKeeper.recordPendingTimestamp] post violated: self.pendingTimestamps->size() = self.pendingTimestamps@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TimerKeeper.checkLatencyBreach. User supplies this. */
export type TimerKeeperCheckLatencyBreachImpl = (self: TimerKeeper, currentTime: number) => { self: TimerKeeper; modified: {} };

/** Contract-checking wrapper for TimerKeeper.checkLatencyBreach. */
export function wrapTimerKeeperCheckLatencyBreach(impl: TimerKeeperCheckLatencyBreachImpl): (self: TimerKeeper, currentTime: number) => TimerKeeper {
  return (self, currentTime) => {
    const preViolations: string[] = [];
    if (!((currentTime > 0))) {
      preViolations.push("[TimerKeeper.checkLatencyBreach] pre violated: currentTime > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTime);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->forAll(ts | ts > 0.0 and (currentTime - ts) > self.maxLatencySecs) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TimerKeeper.checkLatencyBreach (async). User supplies this. */
export type TimerKeeperCheckLatencyBreachAsyncImpl = (self: TimerKeeper, currentTime: number) => Promise<{ self: TimerKeeper; modified: {} }>;

/** Contract-checking wrapper for TimerKeeper.checkLatencyBreach (async). */
export function wrapTimerKeeperCheckLatencyBreachAsync(impl: TimerKeeperCheckLatencyBreachAsyncImpl): (self: TimerKeeper, currentTime: number) => Promise<TimerKeeper> {
  return async (self, currentTime) => {
    const preViolations: string[] = [];
    if (!((currentTime > 0))) {
      preViolations.push("[TimerKeeper.checkLatencyBreach] pre violated: currentTime > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTime);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->forAll(ts | ts > 0.0 and (currentTime - ts) > self.maxLatencySecs) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TimerKeeper.clearTimestamp. User supplies this. */
export type TimerKeeperClearTimestampImpl = (self: TimerKeeper, timestamp: number) => { self: TimerKeeper; modified: { pendingTimestamps: unknown } };

/** Contract-checking wrapper for TimerKeeper.clearTimestamp. */
export function wrapTimerKeeperClearTimestamp(impl: TimerKeeperClearTimestampImpl): (self: TimerKeeper, timestamp: number) => TimerKeeper {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((self.pendingTimestamps).has(timestamp))) {
      preViolations.push("[TimerKeeper.clearTimestamp] pre violated: self.pendingTimestamps->includes(timestamp)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.pendingTimestamps": self.pendingTimestamps,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingTimestamps).has(timestamp)))) {
        postViolations.push("[TimerKeeper.clearTimestamp] post violated: not self.pendingTimestamps->includes(timestamp)");
      }
      if (!(((__result.self.pendingTimestamps).size === ((__pre["self.pendingTimestamps"]).size - 1)))) {
        postViolations.push("[TimerKeeper.clearTimestamp] post violated: self.pendingTimestamps->size() = self.pendingTimestamps@pre->size() - 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TimerKeeper.clearTimestamp (async). User supplies this. */
export type TimerKeeperClearTimestampAsyncImpl = (self: TimerKeeper, timestamp: number) => Promise<{ self: TimerKeeper; modified: { pendingTimestamps: unknown } }>;

/** Contract-checking wrapper for TimerKeeper.clearTimestamp (async). */
export function wrapTimerKeeperClearTimestampAsync(impl: TimerKeeperClearTimestampAsyncImpl): (self: TimerKeeper, timestamp: number) => Promise<TimerKeeper> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((self.pendingTimestamps).has(timestamp))) {
      preViolations.push("[TimerKeeper.clearTimestamp] pre violated: self.pendingTimestamps->includes(timestamp)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.pendingTimestamps": self.pendingTimestamps,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingTimestamps).has(timestamp)))) {
        postViolations.push("[TimerKeeper.clearTimestamp] post violated: not self.pendingTimestamps->includes(timestamp)");
      }
      if (!(((__result.self.pendingTimestamps).size === ((__pre["self.pendingTimestamps"]).size - 1)))) {
        postViolations.push("[TimerKeeper.clearTimestamp] post violated: self.pendingTimestamps->size() = self.pendingTimestamps@pre->size() - 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.initiateTransfer. User supplies this. */
export type BankingTransactionSystemInitiateTransferImpl = (self: BankingTransactionSystem, sourceId: string, destId: string, amount: number) => { self: BankingTransactionSystem; modified: { activeTransfers: unknown; transactionCount: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.initiateTransfer. */
export function wrapBankingTransactionSystemInitiateTransfer(impl: BankingTransactionSystemInitiateTransferImpl): (self: BankingTransactionSystem, sourceId: string, destId: string, amount: number) => BankingTransactionSystem {
  return (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((sourceId !== destId))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: sourceId <> destId");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: amount > 0.0");
    }
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === sourceId))))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: self.knownAccounts->exists(a1 | a1.accountId = sourceId)");
    }
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === destId))))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: self.knownAccounts->exists(a2 | a2.accountId = destId)");
    }
    // SKIPPED pre-clause (not translatable): self.knownAccounts->select(a | a.accountId = sourceId)->forAll(a | a.balance >= amount) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeTransfers": self.activeTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.activeTransfers).some((__x) => (((((__x.source?.accountId === sourceId) && (__x.destination?.accountId === destId)) && (__x.amount === amount)) && (__x.status === "PENDING")))))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.activeTransfers->exists(t |\n      t.source.accountId = sourceId and\n      t.destination.accountId = destId and\n      t.amount = amount and\n      t.status = 'PENDING'\n    )");
      }
      if (!(((__result.self.activeTransfers).size === ((__pre["self.activeTransfers"]).size + 1)))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.activeTransfers->size() = self.activeTransfers@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.initiateTransfer (async). User supplies this. */
export type BankingTransactionSystemInitiateTransferAsyncImpl = (self: BankingTransactionSystem, sourceId: string, destId: string, amount: number) => Promise<{ self: BankingTransactionSystem; modified: { activeTransfers: unknown; transactionCount: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.initiateTransfer (async). */
export function wrapBankingTransactionSystemInitiateTransferAsync(impl: BankingTransactionSystemInitiateTransferAsyncImpl): (self: BankingTransactionSystem, sourceId: string, destId: string, amount: number) => Promise<BankingTransactionSystem> {
  return async (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((sourceId !== destId))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: sourceId <> destId");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: amount > 0.0");
    }
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === sourceId))))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: self.knownAccounts->exists(a1 | a1.accountId = sourceId)");
    }
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === destId))))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: self.knownAccounts->exists(a2 | a2.accountId = destId)");
    }
    // SKIPPED pre-clause (not translatable): self.knownAccounts->select(a | a.accountId = sourceId)->forAll(a | a.balance >= amount) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeTransfers": self.activeTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.activeTransfers).some((__x) => (((((__x.source?.accountId === sourceId) && (__x.destination?.accountId === destId)) && (__x.amount === amount)) && (__x.status === "PENDING")))))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.activeTransfers->exists(t |\n      t.source.accountId = sourceId and\n      t.destination.accountId = destId and\n      t.amount = amount and\n      t.status = 'PENDING'\n    )");
      }
      if (!(((__result.self.activeTransfers).size === ((__pre["self.activeTransfers"]).size + 1)))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.activeTransfers->size() = self.activeTransfers@pre->size() + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.completeTransfer. User supplies this. */
export type BankingTransactionSystemCompleteTransferImpl = (self: BankingTransactionSystem, transferId: string) => { self: BankingTransactionSystem; modified: { knownAccounts: unknown; activeTransfers: unknown; journalEntries: unknown; transactionCount: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.completeTransfer. */
export function wrapBankingTransactionSystemCompleteTransfer(impl: BankingTransactionSystemCompleteTransferImpl): (self: BankingTransactionSystem, transferId: string) => BankingTransactionSystem {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystem.completeTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[BankingTransactionSystem.completeTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId)");
    }
    // SKIPPED pre-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'PENDING') — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalEntries": self.journalEntries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): (
      
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'COMMITTED') and

      
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t |
        (
          self.knownAccounts->select(a | a.accountId = t.source.accountId)->forAll(a |
            a.balance = a.balance@pre - t.amount
          ) and
          self.knownAccounts->select(a | a.accountId = t.destination.accountId)->forAll(a |
            a.balance = a.balance@pre + t.amount
          )
        )
      ) and

      
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t |
        self.knownAccounts->select(a | a.accountId = t.source.accountId)->forAll(a |
          a.balance >= 0.0
        )
      ) and

      
      self.journalEntries->exists(e |
        e.transferId = transferId and
        e.postSourceBalance >= 0.0 and
        e.postDestBalance >= 0.0
      ) and
      self.journalEntries->size() = self.journalEntries@pre->size() + 1 and

      
      self.knownAccounts->forAll(a |
        (self.activeTransfers->select(t | t.transferId = transferId)->exists(t |
          t.source.accountId = a.accountId or t.destination.accountId = a.accountId
        )) or
        (a.balance = a.balance@pre)
      )
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.completeTransfer (async). User supplies this. */
export type BankingTransactionSystemCompleteTransferAsyncImpl = (self: BankingTransactionSystem, transferId: string) => Promise<{ self: BankingTransactionSystem; modified: { knownAccounts: unknown; activeTransfers: unknown; journalEntries: unknown; transactionCount: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.completeTransfer (async). */
export function wrapBankingTransactionSystemCompleteTransferAsync(impl: BankingTransactionSystemCompleteTransferAsyncImpl): (self: BankingTransactionSystem, transferId: string) => Promise<BankingTransactionSystem> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystem.completeTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[BankingTransactionSystem.completeTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId)");
    }
    // SKIPPED pre-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'PENDING') — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalEntries": self.journalEntries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): (
      
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'COMMITTED') and

      
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t |
        (
          self.knownAccounts->select(a | a.accountId = t.source.accountId)->forAll(a |
            a.balance = a.balance@pre - t.amount
          ) and
          self.knownAccounts->select(a | a.accountId = t.destination.accountId)->forAll(a |
            a.balance = a.balance@pre + t.amount
          )
        )
      ) and

      
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t |
        self.knownAccounts->select(a | a.accountId = t.source.accountId)->forAll(a |
          a.balance >= 0.0
        )
      ) and

      
      self.journalEntries->exists(e |
        e.transferId = transferId and
        e.postSourceBalance >= 0.0 and
        e.postDestBalance >= 0.0
      ) and
      self.journalEntries->size() = self.journalEntries@pre->size() + 1 and

      
      self.knownAccounts->forAll(a |
        (self.activeTransfers->select(t | t.transferId = transferId)->exists(t |
          t.source.accountId = a.accountId or t.destination.accountId = a.accountId
        )) or
        (a.balance = a.balance@pre)
      )
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.rollbackTransfer. User supplies this. */
export type BankingTransactionSystemRollbackTransferImpl = (self: BankingTransactionSystem, transferId: string) => { self: BankingTransactionSystem; modified: { activeTransfers: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.rollbackTransfer. */
export function wrapBankingTransactionSystemRollbackTransfer(impl: BankingTransactionSystemRollbackTransferImpl): (self: BankingTransactionSystem, transferId: string) => BankingTransactionSystem {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystem.rollbackTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[BankingTransactionSystem.rollbackTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId)");
    }
    // SKIPPED pre-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'PENDING') — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalEntries": self.journalEntries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): (
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'ROLLED_BACK') and
      self.knownAccounts->forAll(a | a.balance = a.balance@pre) and
      not self.journalEntries->exists(e | e.transferId = transferId) and
      self.journalEntries->size() = self.journalEntries@pre->size()
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.rollbackTransfer (async). User supplies this. */
export type BankingTransactionSystemRollbackTransferAsyncImpl = (self: BankingTransactionSystem, transferId: string) => Promise<{ self: BankingTransactionSystem; modified: { activeTransfers: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.rollbackTransfer (async). */
export function wrapBankingTransactionSystemRollbackTransferAsync(impl: BankingTransactionSystemRollbackTransferAsyncImpl): (self: BankingTransactionSystem, transferId: string) => Promise<BankingTransactionSystem> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystem.rollbackTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[BankingTransactionSystem.rollbackTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId)");
    }
    // SKIPPED pre-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'PENDING') — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalEntries": self.journalEntries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): (
      self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'ROLLED_BACK') and
      self.knownAccounts->forAll(a | a.balance = a.balance@pre) and
      not self.journalEntries->exists(e | e.transferId = transferId) and
      self.journalEntries->size() = self.journalEntries@pre->size()
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.recoverPendingTransfers. User supplies this. */
export type BankingTransactionSystemRecoverPendingTransfersImpl = (self: BankingTransactionSystem) => { self: BankingTransactionSystem; modified: { knownAccounts: unknown; activeTransfers: unknown; journalEntries: unknown; transactionCount: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.recoverPendingTransfers. */
export function wrapBankingTransactionSystemRecoverPendingTransfers(impl: BankingTransactionSystemRecoverPendingTransfersImpl): (self: BankingTransactionSystem) => BankingTransactionSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[BankingTransactionSystem.recoverPendingTransfers] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeTransfers": self.activeTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): (
      self.activeTransfers@pre->forAll(t |
        (t.status = 'PENDING') implies
        (self.activeTransfers->select(t2 | t2.transferId = t.transferId)->forAll(t2 |
          t2.status = 'COMMITTED' or t2.status = 'ROLLED_BACK'
        ))
      ) and
      self.knownAccounts->forAll(a | a.balance >= 0.0)
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.recoverPendingTransfers (async). User supplies this. */
export type BankingTransactionSystemRecoverPendingTransfersAsyncImpl = (self: BankingTransactionSystem) => Promise<{ self: BankingTransactionSystem; modified: { knownAccounts: unknown; activeTransfers: unknown; journalEntries: unknown; transactionCount: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.recoverPendingTransfers (async). */
export function wrapBankingTransactionSystemRecoverPendingTransfersAsync(impl: BankingTransactionSystemRecoverPendingTransfersAsyncImpl): (self: BankingTransactionSystem) => Promise<BankingTransactionSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[BankingTransactionSystem.recoverPendingTransfers] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeTransfers": self.activeTransfers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): (
      self.activeTransfers@pre->forAll(t |
        (t.status = 'PENDING') implies
        (self.activeTransfers->select(t2 | t2.transferId = t.transferId)->forAll(t2 |
          t2.status = 'COMMITTED' or t2.status = 'ROLLED_BACK'
        ))
      ) and
      self.knownAccounts->forAll(a | a.balance >= 0.0)
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.notifyCustomer. User supplies this. */
export type BankingTransactionSystemNotifyCustomerImpl = (self: BankingTransactionSystem, transferId: string) => { self: BankingTransactionSystem; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystem.notifyCustomer. */
export function wrapBankingTransactionSystemNotifyCustomer(impl: BankingTransactionSystemNotifyCustomerImpl): (self: BankingTransactionSystem, transferId: string) => BankingTransactionSystem {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "COMMITTED")))))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'COMMITTED')");
    }
    if (!(Array.from(self.journalEntries).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: self.journalEntries->exists(e | e.transferId = transferId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystem.notifyCustomer] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.notifyCustomer (async). User supplies this. */
export type BankingTransactionSystemNotifyCustomerAsyncImpl = (self: BankingTransactionSystem, transferId: string) => Promise<{ self: BankingTransactionSystem; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystem.notifyCustomer (async). */
export function wrapBankingTransactionSystemNotifyCustomerAsync(impl: BankingTransactionSystemNotifyCustomerAsyncImpl): (self: BankingTransactionSystem, transferId: string) => Promise<BankingTransactionSystem> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "COMMITTED")))))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'COMMITTED')");
    }
    if (!(Array.from(self.journalEntries).some((__x) => ((__x.transferId === transferId))))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: self.journalEntries->exists(e | e.transferId = transferId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystem.notifyCustomer] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.queryBalance. User supplies this. */
export type BankingTransactionSystemQueryBalanceImpl = (self: BankingTransactionSystem, accountId: string) => { self: BankingTransactionSystem; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystem.queryBalance. */
export function wrapBankingTransactionSystemQueryBalance(impl: BankingTransactionSystemQueryBalanceImpl): (self: BankingTransactionSystem, accountId: string) => BankingTransactionSystem {
  return (self, accountId) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[BankingTransactionSystem.queryBalance] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if self.knownAccounts->select(a | a.accountId = accountId)->notEmpty() then
            self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | result = a.balance)
          else
            result = -1.0
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.queryBalance (async). User supplies this. */
export type BankingTransactionSystemQueryBalanceAsyncImpl = (self: BankingTransactionSystem, accountId: string) => Promise<{ self: BankingTransactionSystem; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystem.queryBalance (async). */
export function wrapBankingTransactionSystemQueryBalanceAsync(impl: BankingTransactionSystemQueryBalanceAsyncImpl): (self: BankingTransactionSystem, accountId: string) => Promise<BankingTransactionSystem> {
  return async (self, accountId) => {
    const preViolations: string[] = [];
    if (!(Array.from(self.knownAccounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[BankingTransactionSystem.queryBalance] pre violated: self.knownAccounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if self.knownAccounts->select(a | a.accountId = accountId)->notEmpty() then
            self.knownAccounts->select(a | a.accountId = accountId)->forAll(a | result = a.balance)
          else
            result = -1.0
          endif — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectSanctionedTransfer. User supplies this. */
export type BankingTransactionSystemFormalizedRejectSanctionedTransferImpl = (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectSanctionedTransfer. */
export function wrapBankingTransactionSystemFormalizedRejectSanctionedTransfer(impl: BankingTransactionSystemFormalizedRejectSanctionedTransferImpl): (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => BankingTransactionSystemFormalized {
  return (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectSanctionedTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectSanctionedTransfer] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.rejectSanctionedTransfer] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectSanctionedTransfer (async). User supplies this. */
export type BankingTransactionSystemFormalizedRejectSanctionedTransferAsyncImpl = (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectSanctionedTransfer (async). */
export function wrapBankingTransactionSystemFormalizedRejectSanctionedTransferAsync(impl: BankingTransactionSystemFormalizedRejectSanctionedTransferAsyncImpl): (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => Promise<BankingTransactionSystemFormalized> {
  return async (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectSanctionedTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectSanctionedTransfer] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.rejectSanctionedTransfer] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectAmlThresholdTransfer. User supplies this. */
export type BankingTransactionSystemFormalizedRejectAmlThresholdTransferImpl = (self: BankingTransactionSystemFormalized, transferId: string) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectAmlThresholdTransfer. */
export function wrapBankingTransactionSystemFormalizedRejectAmlThresholdTransfer(impl: BankingTransactionSystemFormalizedRejectAmlThresholdTransferImpl): (self: BankingTransactionSystemFormalized, transferId: string) => BankingTransactionSystemFormalized {
  return (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectAmlThresholdTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "PENDING")))))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectAmlThresholdTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'PENDING')");
    }
    // SKIPPED pre-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.amount > 10000.0) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'PENDING') — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectAmlThresholdTransfer (async). User supplies this. */
export type BankingTransactionSystemFormalizedRejectAmlThresholdTransferAsyncImpl = (self: BankingTransactionSystemFormalized, transferId: string) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectAmlThresholdTransfer (async). */
export function wrapBankingTransactionSystemFormalizedRejectAmlThresholdTransferAsync(impl: BankingTransactionSystemFormalizedRejectAmlThresholdTransferAsyncImpl): (self: BankingTransactionSystemFormalized, transferId: string) => Promise<BankingTransactionSystemFormalized> {
  return async (self, transferId) => {
    const preViolations: string[] = [];
    if (!((transferId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectAmlThresholdTransfer] pre violated: transferId <> null");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((__x.transferId === transferId) && (__x.status === "PENDING")))))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectAmlThresholdTransfer] pre violated: self.activeTransfers->exists(t | t.transferId = transferId and t.status = 'PENDING')");
    }
    // SKIPPED pre-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.amount > 10000.0) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, transferId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.activeTransfers->select(t | t.transferId = transferId)->forAll(t | t.status = 'PENDING') — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectDailyLimitExceeded. User supplies this. */
export type BankingTransactionSystemFormalizedRejectDailyLimitExceededImpl = (self: BankingTransactionSystemFormalized, sourceId: string, amount: number) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectDailyLimitExceeded. */
export function wrapBankingTransactionSystemFormalizedRejectDailyLimitExceeded(impl: BankingTransactionSystemFormalizedRejectDailyLimitExceededImpl): (self: BankingTransactionSystemFormalized, sourceId: string, amount: number) => BankingTransactionSystemFormalized {
  return (self, sourceId, amount) => {
    const preViolations: string[] = [];
    if (!((sourceId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDailyLimitExceeded] pre violated: sourceId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDailyLimitExceeded] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sourceId, amount);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.rejectDailyLimitExceeded] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectDailyLimitExceeded (async). User supplies this. */
export type BankingTransactionSystemFormalizedRejectDailyLimitExceededAsyncImpl = (self: BankingTransactionSystemFormalized, sourceId: string, amount: number) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectDailyLimitExceeded (async). */
export function wrapBankingTransactionSystemFormalizedRejectDailyLimitExceededAsync(impl: BankingTransactionSystemFormalizedRejectDailyLimitExceededAsyncImpl): (self: BankingTransactionSystemFormalized, sourceId: string, amount: number) => Promise<BankingTransactionSystemFormalized> {
  return async (self, sourceId, amount) => {
    const preViolations: string[] = [];
    if (!((sourceId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDailyLimitExceeded] pre violated: sourceId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDailyLimitExceeded] pre violated: amount > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sourceId, amount);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.rejectDailyLimitExceeded] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectDuplicateTransfer. User supplies this. */
export type BankingTransactionSystemFormalizedRejectDuplicateTransferImpl = (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectDuplicateTransfer. */
export function wrapBankingTransactionSystemFormalizedRejectDuplicateTransfer(impl: BankingTransactionSystemFormalizedRejectDuplicateTransferImpl): (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => BankingTransactionSystemFormalized {
  return (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] pre violated: amount > 0.0");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((((__x.source?.accountId === sourceId) && (__x.destination?.accountId === destId)) && (__x.amount === amount)) && (__x.status === "PENDING")))))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] pre violated: self.activeTransfers->exists(t |\n      t.source.accountId = sourceId and\n      t.destination.accountId = destId and\n      t.amount = amount and\n      t.status = 'PENDING'\n    )");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.rejectDuplicateTransfer (async). User supplies this. */
export type BankingTransactionSystemFormalizedRejectDuplicateTransferAsyncImpl = (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.rejectDuplicateTransfer (async). */
export function wrapBankingTransactionSystemFormalizedRejectDuplicateTransferAsync(impl: BankingTransactionSystemFormalizedRejectDuplicateTransferAsyncImpl): (self: BankingTransactionSystemFormalized, sourceId: string, destId: string, amount: number) => Promise<BankingTransactionSystemFormalized> {
  return async (self, sourceId, destId, amount) => {
    const preViolations: string[] = [];
    if (!(((sourceId !== null) && (destId !== null)))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] pre violated: sourceId <> null and destId <> null");
    }
    if (!((amount > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] pre violated: amount > 0.0");
    }
    if (!(Array.from(self.activeTransfers).some((__x) => (((((__x.source?.accountId === sourceId) && (__x.destination?.accountId === destId)) && (__x.amount === amount)) && (__x.status === "PENDING")))))) {
      preViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] pre violated: self.activeTransfers->exists(t |\n      t.source.accountId = sourceId and\n      t.destination.accountId = destId and\n      t.amount = amount and\n      t.status = 'PENDING'\n    )");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sourceId, destId, amount);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.rejectDuplicateTransfer] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.verifyJournalEntry. User supplies this. */
export type BankingTransactionSystemFormalizedVerifyJournalEntryImpl = (self: BankingTransactionSystemFormalized, entryId: string) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.verifyJournalEntry. */
export function wrapBankingTransactionSystemFormalizedVerifyJournalEntry(impl: BankingTransactionSystemFormalizedVerifyJournalEntryImpl): (self: BankingTransactionSystemFormalized, entryId: string) => BankingTransactionSystemFormalized {
  return (self, entryId) => {
    const preViolations: string[] = [];
    if (!((entryId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.verifyJournalEntry] pre violated: entryId <> null");
    }
    if (!(Array.from(self.journalEntries).some((__x) => ((__x.entryId === entryId))))) {
      preViolations.push("[BankingTransactionSystemFormalized.verifyJournalEntry] pre violated: self.journalEntries->exists(e | e.entryId = entryId)");
    }
    // SKIPPED pre-clause (not translatable): self.journalEntries->select(e | e.entryId = entryId)->forAll(e |
      e.preSourceBalance >= 0.0 and
      e.postSourceBalance >= 0.0 and
      e.preDestBalance >= 0.0 and
      e.postDestBalance >= 0.0
    ) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.journalEntries->select(e | e.entryId = entryId)->forAll(e |
      (e.preSourceBalance - e.postSourceBalance) = (e.postDestBalance - e.preDestBalance)
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.verifyJournalEntry (async). User supplies this. */
export type BankingTransactionSystemFormalizedVerifyJournalEntryAsyncImpl = (self: BankingTransactionSystemFormalized, entryId: string) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.verifyJournalEntry (async). */
export function wrapBankingTransactionSystemFormalizedVerifyJournalEntryAsync(impl: BankingTransactionSystemFormalizedVerifyJournalEntryAsyncImpl): (self: BankingTransactionSystemFormalized, entryId: string) => Promise<BankingTransactionSystemFormalized> {
  return async (self, entryId) => {
    const preViolations: string[] = [];
    if (!((entryId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.verifyJournalEntry] pre violated: entryId <> null");
    }
    if (!(Array.from(self.journalEntries).some((__x) => ((__x.entryId === entryId))))) {
      preViolations.push("[BankingTransactionSystemFormalized.verifyJournalEntry] pre violated: self.journalEntries->exists(e | e.entryId = entryId)");
    }
    // SKIPPED pre-clause (not translatable): self.journalEntries->select(e | e.entryId = entryId)->forAll(e |
      e.preSourceBalance >= 0.0 and
      e.postSourceBalance >= 0.0 and
      e.preDestBalance >= 0.0 and
      e.postDestBalance >= 0.0
    ) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.journalEntries->select(e | e.entryId = entryId)->forAll(e |
      (e.preSourceBalance - e.postSourceBalance) = (e.postDestBalance - e.preDestBalance)
    ) — unsupported OclExpr kind
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for AuditableJournalCommitment commitments. */
export class AuditableJournalCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AuditableJournalCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AuditableJournalCommitment — the typed wrapper guarantees that since
    // `register` only accepts AuditableJournalCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AuditableJournalCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AuditableJournalCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AuditableJournalCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AuditableJournalCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AuditableJournalCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AuditableJournalCommitment>[];
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

