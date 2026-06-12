// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for AccountManager. Runtime: string. Compile-time: branded. */
export type AccountManagerId = string & { readonly __brand: "AccountManagerId" };
/** Identity type for TransferCoordinator. Runtime: string. Compile-time: branded. */
export type TransferCoordinatorId = string & { readonly __brand: "TransferCoordinatorId" };
/** Identity type for JournalWriter. Runtime: string. Compile-time: branded. */
export type JournalWriterId = string & { readonly __brand: "JournalWriterId" };
/** Identity type for NotificationService. Runtime: string. Compile-time: branded. */
export type NotificationServiceId = string & { readonly __brand: "NotificationServiceId" };
/** Identity type for RecoveryManager. Runtime: string. Compile-time: branded. */
export type RecoveryManagerId = string & { readonly __brand: "RecoveryManagerId" };
/** Identity type for AccountTransferMediation. Runtime: string. Compile-time: branded. */
export type AccountTransferMediationId = string & { readonly __brand: "AccountTransferMediationId" };
/** Identity type for JournalTransferMediation. Runtime: string. Compile-time: branded. */
export type JournalTransferMediationId = string & { readonly __brand: "JournalTransferMediationId" };
/** Identity type for NotificationJournalMediation. Runtime: string. Compile-time: branded. */
export type NotificationJournalMediationId = string & { readonly __brand: "NotificationJournalMediationId" };
/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for Regulator. Runtime: string. Compile-time: branded. */
export type RegulatorId = string & { readonly __brand: "RegulatorId" };
/** Identity type for BankVendor. Runtime: string. Compile-time: branded. */
export type BankVendorId = string & { readonly __brand: "BankVendorId" };
/** Identity type for Account. Runtime: string. Compile-time: branded. */
export type AccountId = string & { readonly __brand: "AccountId" };
/** Identity type for JournalEntry. Runtime: string. Compile-time: branded. */
export type JournalEntryId = string & { readonly __brand: "JournalEntryId" };
/** Identity type for AtomicTransferCommitment. Runtime: string. Compile-time: branded. */
export type AtomicTransferCommitmentId = string & { readonly __brand: "AtomicTransferCommitmentId" };
/** Identity type for NoOverdraftCommitment. Runtime: string. Compile-time: branded. */
export type NoOverdraftCommitmentId = string & { readonly __brand: "NoOverdraftCommitmentId" };
/** Identity type for AuditJournalCommitment. Runtime: string. Compile-time: branded. */
export type AuditJournalCommitmentId = string & { readonly __brand: "AuditJournalCommitmentId" };
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
export interface AccountManager {
  readonly managerId: AccountManagerId;
  readonly accounts: ReadonlySet<Account>;
  readonly operational: boolean;
}

/** @stereotype <<Kind>> */
export interface TransferCoordinator {
  readonly coordinatorId: TransferCoordinatorId;
  readonly pendingTransfers: ReadonlySet<TransferFlow>;
  readonly operational: boolean;
}

/** @stereotype <<Kind>> */
export interface JournalWriter {
  readonly writerId: JournalWriterId;
  readonly entries: ReadonlySet<JournalEntry>;
  readonly retentionDays: number;
  readonly operational: boolean;
}

/** @stereotype <<Kind>> */
export interface NotificationService {
  readonly serviceId: NotificationServiceId;
  readonly notificationQueue: ReadonlySet<string>;
  readonly operational: boolean;
}

/** @stereotype <<Kind>> */
export interface RecoveryManager {
  readonly recoveryId: RecoveryManagerId;
  readonly operational: boolean;
}

/** @stereotype <<Role>> */
export interface AccountDebitorRole {
  readonly coordinatorId: string;
}

/** @stereotype <<Role>> */
export interface AccountCreditorRole {
  readonly managerId: string;
}

/** @stereotype <<Relator>> */
export interface AccountTransferMediation {
  readonly mediationId: AccountTransferMediationId;
  readonly active: boolean;
}

/** @stereotype <<Role>> */
export interface JournalSubmittingRole {
  readonly coordinatorId: string;
}

/** @stereotype <<Role>> */
export interface JournalAcceptorRole {
  readonly writerId: string;
}

/** @stereotype <<Relator>> */
export interface JournalTransferMediation {
  readonly mediationId: JournalTransferMediationId;
  readonly pendingJournalWrites: ReadonlySet<string>;
}

/** @stereotype <<Role>> */
export interface NotificationInitiatingRole {
  readonly serviceId: string;
}

/** @stereotype <<Role>> */
export interface JournalConfirmedRole {
  readonly writerId: string;
}

/** @stereotype <<Relator>> */
export interface NotificationJournalMediation {
  readonly mediationId: NotificationJournalMediationId;
}

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Regulator {
  readonly regulatorId: RegulatorId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface BankVendor {
  readonly vendorId: BankVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Account {
  readonly accountId: AccountId;
  readonly ownerId: string;
  readonly balanceCents: number;
}

/** @stereotype <<Kind>> */
export interface JournalEntry {
  readonly entryId: JournalEntryId;
  readonly transferId: string;
  readonly sourceAccountId: string;
  readonly destAccountId: string;
  readonly amountCents: number;
  readonly preSourceBalanceCents: number;
  readonly postSourceBalanceCents: number;
  readonly preDestBalanceCents: number;
  readonly postDestBalanceCents: number;
  readonly timestamp: string;
}

/** @stereotype <<Commitment>> */
export interface AtomicTransferCommitment {
  readonly commitmentId: AtomicTransferCommitmentId;
  readonly maxAtomicLatencyMs: number;
}

/** @stereotype <<Commitment>> */
export interface NoOverdraftCommitment {
  readonly commitmentId: NoOverdraftCommitmentId;
  readonly minSourceBalanceCents: number;
}

/** @stereotype <<Commitment>> */
export interface AuditJournalCommitment {
  readonly commitmentId: AuditJournalCommitmentId;
  readonly journalRetentionDays: number;
}

/** @stereotype <<Commitment>> */
export interface BoundedLatencyCommitment {
  readonly commitmentId: BoundedLatencyCommitmentId;
  readonly maxPendingSec: number;
}

/** @stereotype <<Category>> */
export interface AtomicTransferConstraints {
}

/** @stereotype <<Category>> */
export interface NoOverdraftConstraints {
}

/** @stereotype <<Category>> */
export interface AuditTrailConstraints {
}

/** @stereotype <<Happening>> */
export interface TransferFlow {
  readonly flowId: TransferFlowId;
  readonly sourceAccount: Account;
  readonly destAccount: Account;
  readonly amountCents: number;
  readonly state: string;
  readonly enteredPendingAt: string;
}

/** @stereotype <<Kind>> */
export interface BankingTransactionSystem extends AtomicTransferConstraints, NoOverdraftConstraints, AuditTrailConstraints {
  readonly systemId: BankingTransactionSystemId;
  readonly maxAtomicLatencyMs: number;
  readonly minSourceBalanceCents: number;
  readonly journalRetentionDays: number;
  readonly maxPendingSec: number;
  readonly isOperational: boolean;
}

/** @stereotype <<Category>> */
export interface PciDssCompliant {
  readonly pciDssVersion: string;
}

/** @stereotype <<Category>> */
export interface SoxAuditCompliant {
  readonly auditRetentionYears: number;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly gdprDataControllerName: string;
  readonly gdprDataProtectionOfficerContact: string;
}

/** @stereotype <<Category>> */
export interface AccountPlausibility {
}

/** @stereotype <<Category>> */
export interface JournalBeforeNotification {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly statement: string;
  readonly owner: string;
  readonly riskRating: string;
}

/** @stereotype <<Subkind>> */
export interface BankingTransactionSystemFormalized extends BankingTransactionSystem {
  readonly pciDssVersion: string;
  readonly auditRetentionYears: number;
  readonly gdprDataControllerName: string;
  readonly gdprDataProtectionOfficerContact: string;
}


// ─── Factory functions ───

export function makeAccountManager(data: {
  managerId: string;
  accounts: ReadonlySet<Account>;
  operational: boolean;
}): AccountManager {
  return {
    managerId: data.managerId as AccountManagerId,
    accounts: data.accounts,
    operational: data.operational,
  };
}

export function makeTransferCoordinator(data: {
  coordinatorId: string;
  pendingTransfers: ReadonlySet<TransferFlow>;
  operational: boolean;
}): TransferCoordinator {
  return {
    coordinatorId: data.coordinatorId as TransferCoordinatorId,
    pendingTransfers: data.pendingTransfers,
    operational: data.operational,
  };
}

export function makeJournalWriter(data: {
  writerId: string;
  entries: ReadonlySet<JournalEntry>;
  retentionDays: number;
  operational: boolean;
}): JournalWriter {
  return {
    writerId: data.writerId as JournalWriterId,
    entries: data.entries,
    retentionDays: data.retentionDays,
    operational: data.operational,
  };
}

export function makeNotificationService(data: {
  serviceId: string;
  notificationQueue: ReadonlySet<string>;
  operational: boolean;
}): NotificationService {
  return {
    serviceId: data.serviceId as NotificationServiceId,
    notificationQueue: data.notificationQueue,
    operational: data.operational,
  };
}

export function makeRecoveryManager(data: {
  recoveryId: string;
  operational: boolean;
}): RecoveryManager {
  return {
    recoveryId: data.recoveryId as RecoveryManagerId,
    operational: data.operational,
  };
}

export function makeAccountTransferMediation(data: {
  mediationId: string;
  active: boolean;
}): AccountTransferMediation {
  return {
    mediationId: data.mediationId as AccountTransferMediationId,
    active: data.active,
  };
}

export function makeJournalTransferMediation(data: {
  mediationId: string;
  pendingJournalWrites: ReadonlySet<string>;
}): JournalTransferMediation {
  return {
    mediationId: data.mediationId as JournalTransferMediationId,
    pendingJournalWrites: data.pendingJournalWrites,
  };
}

export function makeNotificationJournalMediation(data: {
  mediationId: string;
}): NotificationJournalMediation {
  return {
    mediationId: data.mediationId as NotificationJournalMediationId,
  };
}

export function makeCustomer(data: {
  customerId: string;
  name: string;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
  };
}

export function makeRegulator(data: {
  regulatorId: string;
  jurisdiction: string;
}): Regulator {
  return {
    regulatorId: data.regulatorId as RegulatorId,
    jurisdiction: data.jurisdiction,
  };
}

export function makeBankVendor(data: {
  vendorId: string;
  name: string;
}): BankVendor {
  return {
    vendorId: data.vendorId as BankVendorId,
    name: data.name,
  };
}

export function makeAccount(data: {
  accountId: string;
  ownerId: string;
  balanceCents: number;
}): Account {
  return {
    accountId: data.accountId as AccountId,
    ownerId: data.ownerId,
    balanceCents: data.balanceCents,
  };
}

export function makeJournalEntry(data: {
  entryId: string;
  transferId: string;
  sourceAccountId: string;
  destAccountId: string;
  amountCents: number;
  preSourceBalanceCents: number;
  postSourceBalanceCents: number;
  preDestBalanceCents: number;
  postDestBalanceCents: number;
  timestamp: string;
}): JournalEntry {
  return {
    entryId: data.entryId as JournalEntryId,
    transferId: data.transferId,
    sourceAccountId: data.sourceAccountId,
    destAccountId: data.destAccountId,
    amountCents: data.amountCents,
    preSourceBalanceCents: data.preSourceBalanceCents,
    postSourceBalanceCents: data.postSourceBalanceCents,
    preDestBalanceCents: data.preDestBalanceCents,
    postDestBalanceCents: data.postDestBalanceCents,
    timestamp: data.timestamp,
  };
}

export function makeAtomicTransferCommitment(data: {
  commitmentId: string;
  maxAtomicLatencyMs: number;
}): AtomicTransferCommitment {
  return {
    commitmentId: data.commitmentId as AtomicTransferCommitmentId,
    maxAtomicLatencyMs: data.maxAtomicLatencyMs,
  };
}

export function makeNoOverdraftCommitment(data: {
  commitmentId: string;
  minSourceBalanceCents: number;
}): NoOverdraftCommitment {
  return {
    commitmentId: data.commitmentId as NoOverdraftCommitmentId,
    minSourceBalanceCents: data.minSourceBalanceCents,
  };
}

export function makeAuditJournalCommitment(data: {
  commitmentId: string;
  journalRetentionDays: number;
}): AuditJournalCommitment {
  return {
    commitmentId: data.commitmentId as AuditJournalCommitmentId,
    journalRetentionDays: data.journalRetentionDays,
  };
}

export function makeBoundedLatencyCommitment(data: {
  commitmentId: string;
  maxPendingSec: number;
}): BoundedLatencyCommitment {
  return {
    commitmentId: data.commitmentId as BoundedLatencyCommitmentId,
    maxPendingSec: data.maxPendingSec,
  };
}

export function makeTransferFlow(data: {
  flowId: string;
  sourceAccount: Account;
  destAccount: Account;
  amountCents: number;
  state: string;
  enteredPendingAt: string;
}): TransferFlow {
  return {
    flowId: data.flowId as TransferFlowId,
    sourceAccount: data.sourceAccount,
    destAccount: data.destAccount,
    amountCents: data.amountCents,
    state: data.state,
    enteredPendingAt: data.enteredPendingAt,
  };
}

export function makeBankingTransactionSystem(data: {
  systemId: string;
  maxAtomicLatencyMs: number;
  minSourceBalanceCents: number;
  journalRetentionDays: number;
  maxPendingSec: number;
  isOperational: boolean;
}): BankingTransactionSystem {
  return {
    systemId: data.systemId as BankingTransactionSystemId,
    maxAtomicLatencyMs: data.maxAtomicLatencyMs,
    minSourceBalanceCents: data.minSourceBalanceCents,
    journalRetentionDays: data.journalRetentionDays,
    maxPendingSec: data.maxPendingSec,
    isOperational: data.isOperational,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  statement: string;
  owner: string;
  riskRating: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    statement: data.statement,
    owner: data.owner,
    riskRating: data.riskRating,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for AccountManager. Returns empty array when valid. */
export function validateAccountManager(instance: AccountManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[AccountManager] invariant violated: self.managerId <> null");
  }
  if (!((!((instance.operational === true)) || ((instance.accounts).size > 0)))) {
    violations.push("[AccountManager] invariant violated: self.operational = true implies self.accounts->size() > 0");
  }
  if (!(Array.from(instance.accounts).every((__x) => ((__x.balanceCents >= 0))))) {
    violations.push("[AccountManager] invariant violated: self.accounts->forAll(a | a.balanceCents >= 0.0)");
  }
  return violations;
}

/** Runtime invariant check for TransferCoordinator. Returns empty array when valid. */
export function validateTransferCoordinator(instance: TransferCoordinator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.coordinatorId !== null))) {
    violations.push("[TransferCoordinator] invariant violated: self.coordinatorId <> null");
  }
  if (!(Array.from(instance.pendingTransfers).every((__x) => ((__x.state === "PENDING"))))) {
    violations.push("[TransferCoordinator] invariant violated: self.pendingTransfers->forAll(t | t.state = 'PENDING')");
  }
  if (!(Array.from(instance.pendingTransfers).every((__x) => (Array.from(instance.pendingTransfers).every((__x) => ((!(((__x.flowId === __x.flowId) && (__x !== __x))) || false))))))) {
    violations.push("[TransferCoordinator] invariant violated: self.pendingTransfers->forAll(t1 |\n      self.pendingTransfers->forAll(t2 |\n        (t1.flowId = t2.flowId and t1 <> t2) implies false))");
  }
  return violations;
}

/** Runtime invariant check for JournalWriter. Returns empty array when valid. */
export function validateJournalWriter(instance: JournalWriter): readonly string[] {
  const violations: string[] = [];
  if (!((instance.writerId !== null))) {
    violations.push("[JournalWriter] invariant violated: self.writerId <> null");
  }
  if (!((instance.retentionDays > 0))) {
    violations.push("[JournalWriter] invariant violated: self.retentionDays > 0");
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

/** Runtime invariant check for RecoveryManager. Returns empty array when valid. */
export function validateRecoveryManager(instance: RecoveryManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.recoveryId !== null))) {
    violations.push("[RecoveryManager] invariant violated: self.recoveryId <> null");
  }
  return violations;
}

/** Runtime invariant check for AccountTransferMediation. Returns empty array when valid. */
export function validateAccountTransferMediation(instance: AccountTransferMediation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.mediationId !== null))) {
    violations.push("[AccountTransferMediation] invariant violated: self.mediationId <> null");
  }
  return violations;
}

/** Runtime invariant check for JournalTransferMediation. Returns empty array when valid. */
export function validateJournalTransferMediation(instance: JournalTransferMediation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.mediationId !== null))) {
    violations.push("[JournalTransferMediation] invariant violated: self.mediationId <> null");
  }
  return violations;
}

/** Runtime invariant check for NotificationJournalMediation. Returns empty array when valid. */
export function validateNotificationJournalMediation(instance: NotificationJournalMediation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.mediationId !== null))) {
    violations.push("[NotificationJournalMediation] invariant violated: self.mediationId <> null");
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
  if (!((instance.jurisdiction !== null))) {
    violations.push("[Regulator] invariant violated: self.jurisdiction <> null");
  }
  return violations;
}

/** Runtime invariant check for BankVendor. Returns empty array when valid. */
export function validateBankVendor(instance: BankVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[BankVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[BankVendor] invariant violated: self.name <> null");
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
  if (!((instance.balanceCents >= 0))) {
    violations.push("[Account] invariant violated: self.balanceCents >= 0.0");
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
  if (!((instance.sourceAccountId !== null))) {
    violations.push("[JournalEntry] invariant violated: self.sourceAccountId <> null");
  }
  if (!((instance.destAccountId !== null))) {
    violations.push("[JournalEntry] invariant violated: self.destAccountId <> null");
  }
  if (!((instance.amountCents >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.amountCents >= 0.0");
  }
  if (!((instance.preSourceBalanceCents >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.preSourceBalanceCents >= 0.0");
  }
  if (!((instance.postSourceBalanceCents >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.postSourceBalanceCents >= 0.0");
  }
  if (!((instance.preDestBalanceCents >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.preDestBalanceCents >= 0.0");
  }
  if (!((instance.postDestBalanceCents >= 0))) {
    violations.push("[JournalEntry] invariant violated: self.postDestBalanceCents >= 0.0");
  }
  if (!((instance.timestamp !== null))) {
    violations.push("[JournalEntry] invariant violated: self.timestamp <> null");
  }
  if (!((instance.postSourceBalanceCents === (instance.preSourceBalanceCents - instance.amountCents)))) {
    violations.push("[JournalEntry] invariant violated: self.postSourceBalanceCents = self.preSourceBalanceCents - self.amountCents");
  }
  if (!((instance.postDestBalanceCents === (instance.preDestBalanceCents + instance.amountCents)))) {
    violations.push("[JournalEntry] invariant violated: self.postDestBalanceCents = self.preDestBalanceCents + self.amountCents");
  }
  return violations;
}

/** Runtime invariant check for AtomicTransferConstraints. Returns empty array when valid. */
export function validateAtomicTransferConstraints(instance: AtomicTransferConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AtomicTransferConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for NoOverdraftConstraints. Returns empty array when valid. */
export function validateNoOverdraftConstraints(instance: NoOverdraftConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.balanceCents >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AuditTrailConstraints. Returns empty array when valid. */
export function validateAuditTrailConstraints(instance: AuditTrailConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AuditTrailConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for TransferFlow. Returns empty array when valid. */
export function validateTransferFlow(instance: TransferFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[TransferFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.sourceAccount !== null))) {
    violations.push("[TransferFlow] invariant violated: self.sourceAccount <> null");
  }
  if (!((instance.destAccount !== null))) {
    violations.push("[TransferFlow] invariant violated: self.destAccount <> null");
  }
  if (!((instance.amountCents >= 0))) {
    violations.push("[TransferFlow] invariant violated: self.amountCents >= 0.0");
  }
  if (!((instance.sourceAccount?.accountId !== instance.destAccount?.accountId))) {
    violations.push("[TransferFlow] invariant violated: self.sourceAccount.accountId <> self.destAccount.accountId");
  }
  if (!((((instance.state === "PENDING") || (instance.state === "COMPLETED")) || (instance.state === "ROLLED_BACK")))) {
    violations.push("[TransferFlow] invariant violated: self.state = 'PENDING' or self.state = 'COMPLETED' or self.state = 'ROLLED_BACK'");
  }
  return violations;
}

/** Runtime invariant check for BankingTransactionSystem. Returns empty array when valid. */
export function validateBankingTransactionSystem(instance: BankingTransactionSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxAtomicLatencyMs >= 0))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.maxAtomicLatencyMs >= 0.0");
  }
  if (!((instance.minSourceBalanceCents >= 0))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.minSourceBalanceCents >= 0.0");
  }
  if (!((instance.journalRetentionDays > 0))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.journalRetentionDays > 0");
  }
  if (!((instance.maxPendingSec > 0))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.maxPendingSec > 0.0");
  }
  if (!((instance.maxPendingSec <= 30))) {
    violations.push("[BankingTransactionSystem] invariant violated: self.maxPendingSec <= 30.0");
  }
  return violations;
}

/** Runtime invariant check for PciDssCompliant. Returns empty array when valid. */
export function validatePciDssCompliant(instance: PciDssCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.pciDssVersion <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SoxAuditCompliant. Returns empty array when valid. */
export function validateSoxAuditCompliant(instance: SoxAuditCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.auditRetentionYears >= 5 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.gdprDataControllerName <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AccountPlausibility. Returns empty array when valid. */
export function validateAccountPlausibility(instance: AccountPlausibility): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.balanceCents >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.balanceCents <= 1000000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for JournalBeforeNotification. Returns empty array when valid. */
export function validateJournalBeforeNotification(instance: JournalBeforeNotification): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[JournalBeforeNotification] invariant violated: true");
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
  if (!((instance.statement !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.statement <> null");
  }
  return violations;
}

/** Runtime invariant check for BankingTransactionSystemFormalized. Returns empty array when valid. */
export function validateBankingTransactionSystemFormalized(instance: BankingTransactionSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pciDssVersion !== null))) {
    violations.push("[BankingTransactionSystemFormalized] invariant violated: self.pciDssVersion <> null");
  }
  if (!((instance.auditRetentionYears >= 5))) {
    violations.push("[BankingTransactionSystemFormalized] invariant violated: self.auditRetentionYears >= 5");
  }
  if (!((instance.gdprDataControllerName !== null))) {
    violations.push("[BankingTransactionSystemFormalized] invariant violated: self.gdprDataControllerName <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for AccountManager.debitAccount. User supplies this. */
export type AccountManagerDebitAccountImpl = (self: AccountManager, accountId: string, amountCents: number) => { self: AccountManager; modified: { accounts: unknown } };

/** Contract-checking wrapper for AccountManager.debitAccount. */
export function wrapAccountManagerDebitAccount(impl: AccountManagerDebitAccountImpl): (self: AccountManager, accountId: string, amountCents: number) => AccountManager {
  return (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    // SKIPPED pre-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a | a.balanceCents >= amountCents) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre - amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.debitAccount (async). User supplies this. */
export type AccountManagerDebitAccountAsyncImpl = (self: AccountManager, accountId: string, amountCents: number) => Promise<{ self: AccountManager; modified: { accounts: unknown } }>;

/** Contract-checking wrapper for AccountManager.debitAccount (async). */
export function wrapAccountManagerDebitAccountAsync(impl: AccountManagerDebitAccountAsyncImpl): (self: AccountManager, accountId: string, amountCents: number) => Promise<AccountManager> {
  return async (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.debitAccount] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    // SKIPPED pre-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a | a.balanceCents >= amountCents) — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre - amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.creditAccount. User supplies this. */
export type AccountManagerCreditAccountImpl = (self: AccountManager, accountId: string, amountCents: number) => { self: AccountManager; modified: { accounts: unknown } };

/** Contract-checking wrapper for AccountManager.creditAccount. */
export function wrapAccountManagerCreditAccount(impl: AccountManagerCreditAccountImpl): (self: AccountManager, accountId: string, amountCents: number) => AccountManager {
  return (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre + amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.creditAccount (async). User supplies this. */
export type AccountManagerCreditAccountAsyncImpl = (self: AccountManager, accountId: string, amountCents: number) => Promise<{ self: AccountManager; modified: { accounts: unknown } }>;

/** Contract-checking wrapper for AccountManager.creditAccount (async). */
export function wrapAccountManagerCreditAccountAsync(impl: AccountManagerCreditAccountAsyncImpl): (self: AccountManager, accountId: string, amountCents: number) => Promise<AccountManager> {
  return async (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.creditAccount] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre + amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.rollbackDebit. User supplies this. */
export type AccountManagerRollbackDebitImpl = (self: AccountManager, accountId: string, amountCents: number) => { self: AccountManager; modified: { accounts: unknown } };

/** Contract-checking wrapper for AccountManager.rollbackDebit. */
export function wrapAccountManagerRollbackDebit(impl: AccountManagerRollbackDebitImpl): (self: AccountManager, accountId: string, amountCents: number) => AccountManager {
  return (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre + amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.rollbackDebit (async). User supplies this. */
export type AccountManagerRollbackDebitAsyncImpl = (self: AccountManager, accountId: string, amountCents: number) => Promise<{ self: AccountManager; modified: { accounts: unknown } }>;

/** Contract-checking wrapper for AccountManager.rollbackDebit (async). */
export function wrapAccountManagerRollbackDebitAsync(impl: AccountManagerRollbackDebitAsyncImpl): (self: AccountManager, accountId: string, amountCents: number) => Promise<AccountManager> {
  return async (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.rollbackDebit] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre + amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.rollbackCredit. User supplies this. */
export type AccountManagerRollbackCreditImpl = (self: AccountManager, accountId: string, amountCents: number) => { self: AccountManager; modified: { accounts: unknown } };

/** Contract-checking wrapper for AccountManager.rollbackCredit. */
export function wrapAccountManagerRollbackCredit(impl: AccountManagerRollbackCreditImpl): (self: AccountManager, accountId: string, amountCents: number) => AccountManager {
  return (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre - amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.rollbackCredit (async). User supplies this. */
export type AccountManagerRollbackCreditAsyncImpl = (self: AccountManager, accountId: string, amountCents: number) => Promise<{ self: AccountManager; modified: { accounts: unknown } }>;

/** Contract-checking wrapper for AccountManager.rollbackCredit (async). */
export function wrapAccountManagerRollbackCreditAsync(impl: AccountManagerRollbackCreditAsyncImpl): (self: AccountManager, accountId: string, amountCents: number) => Promise<AccountManager> {
  return async (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: self.operational = true");
    }
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: accountId <> null");
    }
    if (!((amountCents > 0))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: amountCents > 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.rollbackCredit] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->forAll(a |
          a.balanceCents = a.balanceCents@pre - amountCents) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.checkSufficientFunds. User supplies this. */
export type AccountManagerCheckSufficientFundsImpl = (self: AccountManager, accountId: string, amountCents: number) => { self: AccountManager; modified: {} };

/** Contract-checking wrapper for AccountManager.checkSufficientFunds. */
export function wrapAccountManagerCheckSufficientFunds(impl: AccountManagerCheckSufficientFundsImpl): (self: AccountManager, accountId: string, amountCents: number) => AccountManager {
  return (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.checkSufficientFunds] pre violated: accountId <> null");
    }
    if (!((amountCents >= 0))) {
      preViolations.push("[AccountManager.checkSufficientFunds] pre violated: amountCents >= 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.checkSufficientFunds] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.accounts->select(a | a.accountId = accountId)->exists(a | a.balanceCents >= amountCents) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.checkSufficientFunds (async). User supplies this. */
export type AccountManagerCheckSufficientFundsAsyncImpl = (self: AccountManager, accountId: string, amountCents: number) => Promise<{ self: AccountManager; modified: {} }>;

/** Contract-checking wrapper for AccountManager.checkSufficientFunds (async). */
export function wrapAccountManagerCheckSufficientFundsAsync(impl: AccountManagerCheckSufficientFundsAsyncImpl): (self: AccountManager, accountId: string, amountCents: number) => Promise<AccountManager> {
  return async (self, accountId, amountCents) => {
    const preViolations: string[] = [];
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.checkSufficientFunds] pre violated: accountId <> null");
    }
    if (!((amountCents >= 0))) {
      preViolations.push("[AccountManager.checkSufficientFunds] pre violated: amountCents >= 0.0");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.checkSufficientFunds] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId, amountCents);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.accounts->select(a | a.accountId = accountId)->exists(a | a.balanceCents >= amountCents) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.getBalances. User supplies this. */
export type AccountManagerGetBalancesImpl = (self: AccountManager, accountId: string) => { self: AccountManager; modified: {} };

/** Contract-checking wrapper for AccountManager.getBalances. */
export function wrapAccountManagerGetBalances(impl: AccountManagerGetBalancesImpl): (self: AccountManager, accountId: string) => AccountManager {
  return (self, accountId) => {
    const preViolations: string[] = [];
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.getBalances] pre violated: accountId <> null");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.getBalances] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, accountId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->collect(a | a.balanceCents)->forAll(b | result->includes(b)) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result->size() = 1 — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountManager.getBalances (async). User supplies this. */
export type AccountManagerGetBalancesAsyncImpl = (self: AccountManager, accountId: string) => Promise<{ self: AccountManager; modified: {} }>;

/** Contract-checking wrapper for AccountManager.getBalances (async). */
export function wrapAccountManagerGetBalancesAsync(impl: AccountManagerGetBalancesAsyncImpl): (self: AccountManager, accountId: string) => Promise<AccountManager> {
  return async (self, accountId) => {
    const preViolations: string[] = [];
    if (!((accountId !== null))) {
      preViolations.push("[AccountManager.getBalances] pre violated: accountId <> null");
    }
    if (!(Array.from(self.accounts).some((__x) => ((__x.accountId === accountId))))) {
      preViolations.push("[AccountManager.getBalances] pre violated: self.accounts->exists(a | a.accountId = accountId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, accountId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.accounts->select(a | a.accountId = accountId)->collect(a | a.balanceCents)->forAll(b | result->includes(b)) — unsupported OclExpr kind
      // SKIPPED post-clause (not translatable): result->size() = 1 — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransferCoordinator.initiateTransfer. User supplies this. */
export type TransferCoordinatorInitiateTransferImpl = (self: TransferCoordinator, srcId: string, dstId: string, amtCents: number) => { self: TransferCoordinator; modified: { pendingTransfers: unknown } };

/** Contract-checking wrapper for TransferCoordinator.initiateTransfer. */
export function wrapTransferCoordinatorInitiateTransfer(impl: TransferCoordinatorInitiateTransferImpl): (self: TransferCoordinator, srcId: string, dstId: string, amtCents: number) => TransferCoordinator {
  return (self, srcId, dstId, amtCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: self.operational = true");
    }
    if (!((srcId !== null))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: dstId <> null");
    }
    if (!((srcId !== dstId))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: srcId <> dstId");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: amtCents > 0.0");
    }
    if (!(!(Array.from(self.pendingTransfers).some((__x) => ((((__x.sourceAccount?.accountId === srcId) && (__x.destAccount?.accountId === dstId)) && (__x.state === "PENDING"))))))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: not self.pendingTransfers->exists(t |\n      t.sourceAccount.accountId = srcId and\n      t.destAccount.accountId = dstId and\n      t.state = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, srcId, dstId, amtCents);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.pendingTransfers).some((__x) => (((((__x.sourceAccount?.accountId === srcId) && (__x.destAccount?.accountId === dstId)) && (__x.amountCents === amtCents)) && (__x.state === "PENDING")))))) {
        postViolations.push("[TransferCoordinator.initiateTransfer] post violated: self.pendingTransfers->exists(t |\n      t.sourceAccount.accountId = srcId and\n      t.destAccount.accountId = dstId and\n      t.amountCents = amtCents and\n      t.state = 'PENDING')");
      }
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransferCoordinator.initiateTransfer (async). User supplies this. */
export type TransferCoordinatorInitiateTransferAsyncImpl = (self: TransferCoordinator, srcId: string, dstId: string, amtCents: number) => Promise<{ self: TransferCoordinator; modified: { pendingTransfers: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.initiateTransfer (async). */
export function wrapTransferCoordinatorInitiateTransferAsync(impl: TransferCoordinatorInitiateTransferAsyncImpl): (self: TransferCoordinator, srcId: string, dstId: string, amtCents: number) => Promise<TransferCoordinator> {
  return async (self, srcId, dstId, amtCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: self.operational = true");
    }
    if (!((srcId !== null))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: dstId <> null");
    }
    if (!((srcId !== dstId))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: srcId <> dstId");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: amtCents > 0.0");
    }
    if (!(!(Array.from(self.pendingTransfers).some((__x) => ((((__x.sourceAccount?.accountId === srcId) && (__x.destAccount?.accountId === dstId)) && (__x.state === "PENDING"))))))) {
      preViolations.push("[TransferCoordinator.initiateTransfer] pre violated: not self.pendingTransfers->exists(t |\n      t.sourceAccount.accountId = srcId and\n      t.destAccount.accountId = dstId and\n      t.state = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, srcId, dstId, amtCents);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.pendingTransfers).some((__x) => (((((__x.sourceAccount?.accountId === srcId) && (__x.destAccount?.accountId === dstId)) && (__x.amountCents === amtCents)) && (__x.state === "PENDING")))))) {
        postViolations.push("[TransferCoordinator.initiateTransfer] post violated: self.pendingTransfers->exists(t |\n      t.sourceAccount.accountId = srcId and\n      t.destAccount.accountId = dstId and\n      t.amountCents = amtCents and\n      t.state = 'PENDING')");
      }
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type TransferCoordinatorCompleteTransferImpl = (self: TransferCoordinator, flowId: string) => { self: TransferCoordinator; modified: { pendingTransfers: unknown } };

/** Contract-checking wrapper for TransferCoordinator.completeTransfer. */
export function wrapTransferCoordinatorCompleteTransfer(impl: TransferCoordinatorCompleteTransferImpl): (self: TransferCoordinator, flowId: string) => TransferCoordinator {
  return (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[TransferCoordinator.completeTransfer] pre violated: flowId <> null");
    }
    if (!(Array.from(self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING")))))) {
      preViolations.push("[TransferCoordinator.completeTransfer] pre violated: self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flowId);
      const postViolations: string[] = [];
      if (!(!(Array.from(__result.self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING"))))))) {
        postViolations.push("[TransferCoordinator.completeTransfer] post violated: not self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type TransferCoordinatorCompleteTransferAsyncImpl = (self: TransferCoordinator, flowId: string) => Promise<{ self: TransferCoordinator; modified: { pendingTransfers: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.completeTransfer (async). */
export function wrapTransferCoordinatorCompleteTransferAsync(impl: TransferCoordinatorCompleteTransferAsyncImpl): (self: TransferCoordinator, flowId: string) => Promise<TransferCoordinator> {
  return async (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[TransferCoordinator.completeTransfer] pre violated: flowId <> null");
    }
    if (!(Array.from(self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING")))))) {
      preViolations.push("[TransferCoordinator.completeTransfer] pre violated: self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flowId);
      const postViolations: string[] = [];
      if (!(!(Array.from(__result.self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING"))))))) {
        postViolations.push("[TransferCoordinator.completeTransfer] post violated: not self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransferCoordinator.rollbackTransfer. User supplies this. */
export type TransferCoordinatorRollbackTransferImpl = (self: TransferCoordinator, flowId: string) => { self: TransferCoordinator; modified: { pendingTransfers: unknown } };

/** Contract-checking wrapper for TransferCoordinator.rollbackTransfer. */
export function wrapTransferCoordinatorRollbackTransfer(impl: TransferCoordinatorRollbackTransferImpl): (self: TransferCoordinator, flowId: string) => TransferCoordinator {
  return (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[TransferCoordinator.rollbackTransfer] pre violated: flowId <> null");
    }
    if (!(Array.from(self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING")))))) {
      preViolations.push("[TransferCoordinator.rollbackTransfer] pre violated: self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flowId);
      const postViolations: string[] = [];
      if (!(!(Array.from(__result.self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING"))))))) {
        postViolations.push("[TransferCoordinator.rollbackTransfer] post violated: not self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransferCoordinator.rollbackTransfer (async). User supplies this. */
export type TransferCoordinatorRollbackTransferAsyncImpl = (self: TransferCoordinator, flowId: string) => Promise<{ self: TransferCoordinator; modified: { pendingTransfers: unknown } }>;

/** Contract-checking wrapper for TransferCoordinator.rollbackTransfer (async). */
export function wrapTransferCoordinatorRollbackTransferAsync(impl: TransferCoordinatorRollbackTransferAsyncImpl): (self: TransferCoordinator, flowId: string) => Promise<TransferCoordinator> {
  return async (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[TransferCoordinator.rollbackTransfer] pre violated: flowId <> null");
    }
    if (!(Array.from(self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING")))))) {
      preViolations.push("[TransferCoordinator.rollbackTransfer] pre violated: self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flowId);
      const postViolations: string[] = [];
      if (!(!(Array.from(__result.self.pendingTransfers).some((__x) => (((__x.flowId === flowId) && (__x.state === "PENDING"))))))) {
        postViolations.push("[TransferCoordinator.rollbackTransfer] post violated: not self.pendingTransfers->exists(t | t.flowId = flowId and t.state = 'PENDING')");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransferCoordinator.countExpiredPendingTransfers. User supplies this. */
export type TransferCoordinatorCountExpiredPendingTransfersImpl = (self: TransferCoordinator, elapsedSeconds: number) => { self: TransferCoordinator; modified: {} };

/** Contract-checking wrapper for TransferCoordinator.countExpiredPendingTransfers. */
export function wrapTransferCoordinatorCountExpiredPendingTransfers(impl: TransferCoordinatorCountExpiredPendingTransfersImpl): (self: TransferCoordinator, elapsedSeconds: number) => TransferCoordinator {
  return (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((elapsedSeconds >= 0))) {
      preViolations.push("[TransferCoordinator.countExpiredPendingTransfers] pre violated: elapsedSeconds >= 0.0");
    }
    if (!((elapsedSeconds <= 30))) {
      preViolations.push("[TransferCoordinator.countExpiredPendingTransfers] pre violated: elapsedSeconds <= 30.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.pendingTransfers->select(t |
          t.state = 'PENDING' and elapsedSeconds > 30.0)->size() — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for TransferCoordinator.countExpiredPendingTransfers (async). User supplies this. */
export type TransferCoordinatorCountExpiredPendingTransfersAsyncImpl = (self: TransferCoordinator, elapsedSeconds: number) => Promise<{ self: TransferCoordinator; modified: {} }>;

/** Contract-checking wrapper for TransferCoordinator.countExpiredPendingTransfers (async). */
export function wrapTransferCoordinatorCountExpiredPendingTransfersAsync(impl: TransferCoordinatorCountExpiredPendingTransfersAsyncImpl): (self: TransferCoordinator, elapsedSeconds: number) => Promise<TransferCoordinator> {
  return async (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((elapsedSeconds >= 0))) {
      preViolations.push("[TransferCoordinator.countExpiredPendingTransfers] pre violated: elapsedSeconds >= 0.0");
    }
    if (!((elapsedSeconds <= 30))) {
      preViolations.push("[TransferCoordinator.countExpiredPendingTransfers] pre violated: elapsedSeconds <= 30.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.pendingTransfers->select(t |
          t.state = 'PENDING' and elapsedSeconds > 30.0)->size() — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type JournalWriterWriteEntryImpl = (self: JournalWriter, tfrId: string, srcId: string, dstId: string, amtCents: number, preSrcBalCents: number, postSrcBalCents: number, preDstBalCents: number, postDstBalCents: number) => { self: JournalWriter; modified: { entries: unknown } };

/** Contract-checking wrapper for JournalWriter.writeEntry. */
export function wrapJournalWriterWriteEntry(impl: JournalWriterWriteEntryImpl): (self: JournalWriter, tfrId: string, srcId: string, dstId: string, amtCents: number, preSrcBalCents: number, postSrcBalCents: number, preDstBalCents: number, postDstBalCents: number) => JournalWriter {
  return (self, tfrId, srcId, dstId, amtCents, preSrcBalCents, postSrcBalCents, preDstBalCents, postDstBalCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: self.operational = true");
    }
    if (!((tfrId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: tfrId <> null");
    }
    if (!((srcId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: dstId <> null");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: amtCents > 0.0");
    }
    if (!((preSrcBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preSrcBalCents >= 0.0");
    }
    if (!((postSrcBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postSrcBalCents >= 0.0");
    }
    if (!((preDstBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preDstBalCents >= 0.0");
    }
    if (!((postDstBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postDstBalCents >= 0.0");
    }
    if (!((postSrcBalCents === (preSrcBalCents - amtCents)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postSrcBalCents = preSrcBalCents - amtCents");
    }
    if (!((postDstBalCents === (preDstBalCents + amtCents)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postDstBalCents = preDstBalCents + amtCents");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, srcId, dstId, amtCents, preSrcBalCents, postSrcBalCents, preDstBalCents, postDstBalCents);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.entries).some((__x) => (((((((((__x.transferId === tfrId) && (__x.sourceAccountId === srcId)) && (__x.destAccountId === dstId)) && (__x.amountCents === amtCents)) && (__x.preSourceBalanceCents === preSrcBalCents)) && (__x.postSourceBalanceCents === postSrcBalCents)) && (__x.preDestBalanceCents === preDstBalCents)) && (__x.postDestBalanceCents === postDstBalCents)))))) {
        postViolations.push("[JournalWriter.writeEntry] post violated: self.entries->exists(e |\n      e.transferId = tfrId and\n      e.sourceAccountId = srcId and\n      e.destAccountId = dstId and\n      e.amountCents = amtCents and\n      e.preSourceBalanceCents = preSrcBalCents and\n      e.postSourceBalanceCents = postSrcBalCents and\n      e.preDestBalanceCents = preDstBalCents and\n      e.postDestBalanceCents = postDstBalCents)");
      }
      // SKIPPED post-clause (not translatable): result = tfrId — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type JournalWriterWriteEntryAsyncImpl = (self: JournalWriter, tfrId: string, srcId: string, dstId: string, amtCents: number, preSrcBalCents: number, postSrcBalCents: number, preDstBalCents: number, postDstBalCents: number) => Promise<{ self: JournalWriter; modified: { entries: unknown } }>;

/** Contract-checking wrapper for JournalWriter.writeEntry (async). */
export function wrapJournalWriterWriteEntryAsync(impl: JournalWriterWriteEntryAsyncImpl): (self: JournalWriter, tfrId: string, srcId: string, dstId: string, amtCents: number, preSrcBalCents: number, postSrcBalCents: number, preDstBalCents: number, postDstBalCents: number) => Promise<JournalWriter> {
  return async (self, tfrId, srcId, dstId, amtCents, preSrcBalCents, postSrcBalCents, preDstBalCents, postDstBalCents) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: self.operational = true");
    }
    if (!((tfrId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: tfrId <> null");
    }
    if (!((srcId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: dstId <> null");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: amtCents > 0.0");
    }
    if (!((preSrcBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preSrcBalCents >= 0.0");
    }
    if (!((postSrcBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postSrcBalCents >= 0.0");
    }
    if (!((preDstBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: preDstBalCents >= 0.0");
    }
    if (!((postDstBalCents >= 0))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postDstBalCents >= 0.0");
    }
    if (!((postSrcBalCents === (preSrcBalCents - amtCents)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postSrcBalCents = preSrcBalCents - amtCents");
    }
    if (!((postDstBalCents === (preDstBalCents + amtCents)))) {
      preViolations.push("[JournalWriter.writeEntry] pre violated: postDstBalCents = preDstBalCents + amtCents");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, srcId, dstId, amtCents, preSrcBalCents, postSrcBalCents, preDstBalCents, postDstBalCents);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.entries).some((__x) => (((((((((__x.transferId === tfrId) && (__x.sourceAccountId === srcId)) && (__x.destAccountId === dstId)) && (__x.amountCents === amtCents)) && (__x.preSourceBalanceCents === preSrcBalCents)) && (__x.postSourceBalanceCents === postSrcBalCents)) && (__x.preDestBalanceCents === preDstBalCents)) && (__x.postDestBalanceCents === postDstBalCents)))))) {
        postViolations.push("[JournalWriter.writeEntry] post violated: self.entries->exists(e |\n      e.transferId = tfrId and\n      e.sourceAccountId = srcId and\n      e.destAccountId = dstId and\n      e.amountCents = amtCents and\n      e.preSourceBalanceCents = preSrcBalCents and\n      e.postSourceBalanceCents = postSrcBalCents and\n      e.preDestBalanceCents = preDstBalCents and\n      e.postDestBalanceCents = postDstBalCents)");
      }
      // SKIPPED post-clause (not translatable): result = tfrId — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.hasEntryForTransfer. User supplies this. */
export type JournalWriterHasEntryForTransferImpl = (self: JournalWriter, tfrId: string) => { self: JournalWriter; modified: {} };

/** Contract-checking wrapper for JournalWriter.hasEntryForTransfer. */
export function wrapJournalWriterHasEntryForTransfer(impl: JournalWriterHasEntryForTransferImpl): (self: JournalWriter, tfrId: string) => JournalWriter {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalWriter.hasEntryForTransfer] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.entries->exists(e | e.transferId = tfrId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.hasEntryForTransfer (async). User supplies this. */
export type JournalWriterHasEntryForTransferAsyncImpl = (self: JournalWriter, tfrId: string) => Promise<{ self: JournalWriter; modified: {} }>;

/** Contract-checking wrapper for JournalWriter.hasEntryForTransfer (async). */
export function wrapJournalWriterHasEntryForTransferAsync(impl: JournalWriterHasEntryForTransferAsyncImpl): (self: JournalWriter, tfrId: string) => Promise<JournalWriter> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalWriter.hasEntryForTransfer] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.entries->exists(e | e.transferId = tfrId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.getAllEntries. User supplies this. */
export type JournalWriterGetAllEntriesImpl = (self: JournalWriter) => { self: JournalWriter; modified: {} };

/** Contract-checking wrapper for JournalWriter.getAllEntries. */
export function wrapJournalWriterGetAllEntries(impl: JournalWriterGetAllEntriesImpl): (self: JournalWriter) => JournalWriter {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[JournalWriter.getAllEntries] pre violated: self.operational = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.entries — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalWriter.getAllEntries (async). User supplies this. */
export type JournalWriterGetAllEntriesAsyncImpl = (self: JournalWriter) => Promise<{ self: JournalWriter; modified: {} }>;

/** Contract-checking wrapper for JournalWriter.getAllEntries (async). */
export function wrapJournalWriterGetAllEntriesAsync(impl: JournalWriterGetAllEntriesAsyncImpl): (self: JournalWriter) => Promise<JournalWriter> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[JournalWriter.getAllEntries] pre violated: self.operational = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.entries — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationService.queueNotification. User supplies this. */
export type NotificationServiceQueueNotificationImpl = (self: NotificationService, tfrId: string, customerId: string) => { self: NotificationService; modified: { notificationQueue: unknown } };

/** Contract-checking wrapper for NotificationService.queueNotification. */
export function wrapNotificationServiceQueueNotification(impl: NotificationServiceQueueNotificationImpl): (self: NotificationService, tfrId: string, customerId: string) => NotificationService {
  return (self, tfrId, customerId) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: self.operational = true");
    }
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: tfrId <> null");
    }
    if (!((customerId !== null))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: customerId <> null");
    }
    if (!(!((self.notificationQueue).has(tfrId)))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: not self.notificationQueue->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, customerId);
      const postViolations: string[] = [];
      if (!((__result.self.notificationQueue).has(tfrId))) {
        postViolations.push("[NotificationService.queueNotification] post violated: self.notificationQueue->includes(tfrId)");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationService.queueNotification (async). User supplies this. */
export type NotificationServiceQueueNotificationAsyncImpl = (self: NotificationService, tfrId: string, customerId: string) => Promise<{ self: NotificationService; modified: { notificationQueue: unknown } }>;

/** Contract-checking wrapper for NotificationService.queueNotification (async). */
export function wrapNotificationServiceQueueNotificationAsync(impl: NotificationServiceQueueNotificationAsyncImpl): (self: NotificationService, tfrId: string, customerId: string) => Promise<NotificationService> {
  return async (self, tfrId, customerId) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: self.operational = true");
    }
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: tfrId <> null");
    }
    if (!((customerId !== null))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: customerId <> null");
    }
    if (!(!((self.notificationQueue).has(tfrId)))) {
      preViolations.push("[NotificationService.queueNotification] pre violated: not self.notificationQueue->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, customerId);
      const postViolations: string[] = [];
      if (!((__result.self.notificationQueue).has(tfrId))) {
        postViolations.push("[NotificationService.queueNotification] post violated: self.notificationQueue->includes(tfrId)");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type NotificationServiceSendSuccessNotificationImpl = (self: NotificationService, tfrId: string) => { self: NotificationService; modified: { notificationQueue: unknown } };

/** Contract-checking wrapper for NotificationService.sendSuccessNotification. */
export function wrapNotificationServiceSendSuccessNotification(impl: NotificationServiceSendSuccessNotificationImpl): (self: NotificationService, tfrId: string) => NotificationService {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: tfrId <> null");
    }
    if (!((self.notificationQueue).has(tfrId))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: self.notificationQueue->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      if (!(!((__result.self.notificationQueue).has(tfrId)))) {
        postViolations.push("[NotificationService.sendSuccessNotification] post violated: not self.notificationQueue->includes(tfrId)");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type NotificationServiceSendSuccessNotificationAsyncImpl = (self: NotificationService, tfrId: string) => Promise<{ self: NotificationService; modified: { notificationQueue: unknown } }>;

/** Contract-checking wrapper for NotificationService.sendSuccessNotification (async). */
export function wrapNotificationServiceSendSuccessNotificationAsync(impl: NotificationServiceSendSuccessNotificationAsyncImpl): (self: NotificationService, tfrId: string) => Promise<NotificationService> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: tfrId <> null");
    }
    if (!((self.notificationQueue).has(tfrId))) {
      preViolations.push("[NotificationService.sendSuccessNotification] pre violated: self.notificationQueue->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      if (!(!((__result.self.notificationQueue).has(tfrId)))) {
        postViolations.push("[NotificationService.sendSuccessNotification] post violated: not self.notificationQueue->includes(tfrId)");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type NotificationServiceSendFailureNotificationImpl = (self: NotificationService, tfrId: string, reason: string) => { self: NotificationService; modified: {} };

/** Contract-checking wrapper for NotificationService.sendFailureNotification. */
export function wrapNotificationServiceSendFailureNotification(impl: NotificationServiceSendFailureNotificationImpl): (self: NotificationService, tfrId: string, reason: string) => NotificationService {
  return (self, tfrId, reason) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: tfrId <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, reason);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type NotificationServiceSendFailureNotificationAsyncImpl = (self: NotificationService, tfrId: string, reason: string) => Promise<{ self: NotificationService; modified: {} }>;

/** Contract-checking wrapper for NotificationService.sendFailureNotification (async). */
export function wrapNotificationServiceSendFailureNotificationAsync(impl: NotificationServiceSendFailureNotificationAsyncImpl): (self: NotificationService, tfrId: string, reason: string) => Promise<NotificationService> {
  return async (self, tfrId, reason) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: tfrId <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[NotificationService.sendFailureNotification] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, reason);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationService.hasPendingNotification. User supplies this. */
export type NotificationServiceHasPendingNotificationImpl = (self: NotificationService, tfrId: string) => { self: NotificationService; modified: {} };

/** Contract-checking wrapper for NotificationService.hasPendingNotification. */
export function wrapNotificationServiceHasPendingNotification(impl: NotificationServiceHasPendingNotificationImpl): (self: NotificationService, tfrId: string) => NotificationService {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.hasPendingNotification] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.notificationQueue->includes(tfrId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationService.hasPendingNotification (async). User supplies this. */
export type NotificationServiceHasPendingNotificationAsyncImpl = (self: NotificationService, tfrId: string) => Promise<{ self: NotificationService; modified: {} }>;

/** Contract-checking wrapper for NotificationService.hasPendingNotification (async). */
export function wrapNotificationServiceHasPendingNotificationAsync(impl: NotificationServiceHasPendingNotificationAsyncImpl): (self: NotificationService, tfrId: string) => Promise<NotificationService> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationService.hasPendingNotification] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.notificationQueue->includes(tfrId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RecoveryManager.recoverTransfer. User supplies this. */
export type RecoveryManagerRecoverTransferImpl = (self: RecoveryManager, entryId: string) => { self: RecoveryManager; modified: {} };

/** Contract-checking wrapper for RecoveryManager.recoverTransfer. */
export function wrapRecoveryManagerRecoverTransfer(impl: RecoveryManagerRecoverTransferImpl): (self: RecoveryManager, entryId: string) => RecoveryManager {
  return (self, entryId) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[RecoveryManager.recoverTransfer] pre violated: self.operational = true");
    }
    if (!((entryId !== null))) {
      preViolations.push("[RecoveryManager.recoverTransfer] pre violated: entryId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RecoveryManager.recoverTransfer (async). User supplies this. */
export type RecoveryManagerRecoverTransferAsyncImpl = (self: RecoveryManager, entryId: string) => Promise<{ self: RecoveryManager; modified: {} }>;

/** Contract-checking wrapper for RecoveryManager.recoverTransfer (async). */
export function wrapRecoveryManagerRecoverTransferAsync(impl: RecoveryManagerRecoverTransferAsyncImpl): (self: RecoveryManager, entryId: string) => Promise<RecoveryManager> {
  return async (self, entryId) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[RecoveryManager.recoverTransfer] pre violated: self.operational = true");
    }
    if (!((entryId !== null))) {
      preViolations.push("[RecoveryManager.recoverTransfer] pre violated: entryId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RecoveryManager.scanForPendingEntries. User supplies this. */
export type RecoveryManagerScanForPendingEntriesImpl = (self: RecoveryManager) => { self: RecoveryManager; modified: {} };

/** Contract-checking wrapper for RecoveryManager.scanForPendingEntries. */
export function wrapRecoveryManagerScanForPendingEntries(impl: RecoveryManagerScanForPendingEntriesImpl): (self: RecoveryManager) => RecoveryManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[RecoveryManager.scanForPendingEntries] pre violated: self.operational = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->forAll(e | e.transferId <> null) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RecoveryManager.scanForPendingEntries (async). User supplies this. */
export type RecoveryManagerScanForPendingEntriesAsyncImpl = (self: RecoveryManager) => Promise<{ self: RecoveryManager; modified: {} }>;

/** Contract-checking wrapper for RecoveryManager.scanForPendingEntries (async). */
export function wrapRecoveryManagerScanForPendingEntriesAsync(impl: RecoveryManagerScanForPendingEntriesAsyncImpl): (self: RecoveryManager) => Promise<RecoveryManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.operational === true))) {
      preViolations.push("[RecoveryManager.scanForPendingEntries] pre violated: self.operational = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->forAll(e | e.transferId <> null) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RecoveryManager.resolveTransferAction. User supplies this. */
export type RecoveryManagerResolveTransferActionImpl = (self: RecoveryManager, flowId: string) => { self: RecoveryManager; modified: {} };

/** Contract-checking wrapper for RecoveryManager.resolveTransferAction. */
export function wrapRecoveryManagerResolveTransferAction(impl: RecoveryManagerResolveTransferActionImpl): (self: RecoveryManager, flowId: string) => RecoveryManager {
  return (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[RecoveryManager.resolveTransferAction] pre violated: flowId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flowId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = 'COMPLETE' or result = 'ROLLBACK' — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RecoveryManager.resolveTransferAction (async). User supplies this. */
export type RecoveryManagerResolveTransferActionAsyncImpl = (self: RecoveryManager, flowId: string) => Promise<{ self: RecoveryManager; modified: {} }>;

/** Contract-checking wrapper for RecoveryManager.resolveTransferAction (async). */
export function wrapRecoveryManagerResolveTransferActionAsync(impl: RecoveryManagerResolveTransferActionAsyncImpl): (self: RecoveryManager, flowId: string) => Promise<RecoveryManager> {
  return async (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[RecoveryManager.resolveTransferAction] pre violated: flowId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flowId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = 'COMPLETE' or result = 'ROLLBACK' — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountTransferMediation.registerDebitFlow. User supplies this. */
export type AccountTransferMediationRegisterDebitFlowImpl = (self: AccountTransferMediation, flowId: string, srcId: string, amtCents: number) => { self: AccountTransferMediation; modified: { active: unknown } };

/** Contract-checking wrapper for AccountTransferMediation.registerDebitFlow. */
export function wrapAccountTransferMediationRegisterDebitFlow(impl: AccountTransferMediationRegisterDebitFlowImpl): (self: AccountTransferMediation, flowId: string, srcId: string, amtCents: number) => AccountTransferMediation {
  return (self, flowId, srcId, amtCents) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[AccountTransferMediation.registerDebitFlow] pre violated: flowId <> null");
    }
    if (!((srcId !== null))) {
      preViolations.push("[AccountTransferMediation.registerDebitFlow] pre violated: srcId <> null");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[AccountTransferMediation.registerDebitFlow] pre violated: amtCents > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flowId, srcId, amtCents);
      const postViolations: string[] = [];
      if (!((__result.self.active === true))) {
        postViolations.push("[AccountTransferMediation.registerDebitFlow] post violated: self.active = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountTransferMediation.registerDebitFlow (async). User supplies this. */
export type AccountTransferMediationRegisterDebitFlowAsyncImpl = (self: AccountTransferMediation, flowId: string, srcId: string, amtCents: number) => Promise<{ self: AccountTransferMediation; modified: { active: unknown } }>;

/** Contract-checking wrapper for AccountTransferMediation.registerDebitFlow (async). */
export function wrapAccountTransferMediationRegisterDebitFlowAsync(impl: AccountTransferMediationRegisterDebitFlowAsyncImpl): (self: AccountTransferMediation, flowId: string, srcId: string, amtCents: number) => Promise<AccountTransferMediation> {
  return async (self, flowId, srcId, amtCents) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[AccountTransferMediation.registerDebitFlow] pre violated: flowId <> null");
    }
    if (!((srcId !== null))) {
      preViolations.push("[AccountTransferMediation.registerDebitFlow] pre violated: srcId <> null");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[AccountTransferMediation.registerDebitFlow] pre violated: amtCents > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flowId, srcId, amtCents);
      const postViolations: string[] = [];
      if (!((__result.self.active === true))) {
        postViolations.push("[AccountTransferMediation.registerDebitFlow] post violated: self.active = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountTransferMediation.registerCreditFlow. User supplies this. */
export type AccountTransferMediationRegisterCreditFlowImpl = (self: AccountTransferMediation, flowId: string, dstId: string, amtCents: number) => { self: AccountTransferMediation; modified: { active: unknown } };

/** Contract-checking wrapper for AccountTransferMediation.registerCreditFlow. */
export function wrapAccountTransferMediationRegisterCreditFlow(impl: AccountTransferMediationRegisterCreditFlowImpl): (self: AccountTransferMediation, flowId: string, dstId: string, amtCents: number) => AccountTransferMediation {
  return (self, flowId, dstId, amtCents) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[AccountTransferMediation.registerCreditFlow] pre violated: flowId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[AccountTransferMediation.registerCreditFlow] pre violated: dstId <> null");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[AccountTransferMediation.registerCreditFlow] pre violated: amtCents > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flowId, dstId, amtCents);
      const postViolations: string[] = [];
      if (!((__result.self.active === true))) {
        postViolations.push("[AccountTransferMediation.registerCreditFlow] post violated: self.active = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountTransferMediation.registerCreditFlow (async). User supplies this. */
export type AccountTransferMediationRegisterCreditFlowAsyncImpl = (self: AccountTransferMediation, flowId: string, dstId: string, amtCents: number) => Promise<{ self: AccountTransferMediation; modified: { active: unknown } }>;

/** Contract-checking wrapper for AccountTransferMediation.registerCreditFlow (async). */
export function wrapAccountTransferMediationRegisterCreditFlowAsync(impl: AccountTransferMediationRegisterCreditFlowAsyncImpl): (self: AccountTransferMediation, flowId: string, dstId: string, amtCents: number) => Promise<AccountTransferMediation> {
  return async (self, flowId, dstId, amtCents) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[AccountTransferMediation.registerCreditFlow] pre violated: flowId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[AccountTransferMediation.registerCreditFlow] pre violated: dstId <> null");
    }
    if (!((amtCents > 0))) {
      preViolations.push("[AccountTransferMediation.registerCreditFlow] pre violated: amtCents > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flowId, dstId, amtCents);
      const postViolations: string[] = [];
      if (!((__result.self.active === true))) {
        postViolations.push("[AccountTransferMediation.registerCreditFlow] post violated: self.active = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountTransferMediation.finalizeFlow. User supplies this. */
export type AccountTransferMediationFinalizeFlowImpl = (self: AccountTransferMediation, flowId: string) => { self: AccountTransferMediation; modified: { active: unknown } };

/** Contract-checking wrapper for AccountTransferMediation.finalizeFlow. */
export function wrapAccountTransferMediationFinalizeFlow(impl: AccountTransferMediationFinalizeFlowImpl): (self: AccountTransferMediation, flowId: string) => AccountTransferMediation {
  return (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[AccountTransferMediation.finalizeFlow] pre violated: flowId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flowId);
      const postViolations: string[] = [];
      if (!((__result.self.active === false))) {
        postViolations.push("[AccountTransferMediation.finalizeFlow] post violated: self.active = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AccountTransferMediation.finalizeFlow (async). User supplies this. */
export type AccountTransferMediationFinalizeFlowAsyncImpl = (self: AccountTransferMediation, flowId: string) => Promise<{ self: AccountTransferMediation; modified: { active: unknown } }>;

/** Contract-checking wrapper for AccountTransferMediation.finalizeFlow (async). */
export function wrapAccountTransferMediationFinalizeFlowAsync(impl: AccountTransferMediationFinalizeFlowAsyncImpl): (self: AccountTransferMediation, flowId: string) => Promise<AccountTransferMediation> {
  return async (self, flowId) => {
    const preViolations: string[] = [];
    if (!((flowId !== null))) {
      preViolations.push("[AccountTransferMediation.finalizeFlow] pre violated: flowId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flowId);
      const postViolations: string[] = [];
      if (!((__result.self.active === false))) {
        postViolations.push("[AccountTransferMediation.finalizeFlow] post violated: self.active = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalTransferMediation.requestJournalWrite. User supplies this. */
export type JournalTransferMediationRequestJournalWriteImpl = (self: JournalTransferMediation, tfrId: string) => { self: JournalTransferMediation; modified: { pendingJournalWrites: unknown } };

/** Contract-checking wrapper for JournalTransferMediation.requestJournalWrite. */
export function wrapJournalTransferMediationRequestJournalWrite(impl: JournalTransferMediationRequestJournalWriteImpl): (self: JournalTransferMediation, tfrId: string) => JournalTransferMediation {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalTransferMediation.requestJournalWrite] pre violated: tfrId <> null");
    }
    if (!(!((self.pendingJournalWrites).has(tfrId)))) {
      preViolations.push("[JournalTransferMediation.requestJournalWrite] pre violated: not self.pendingJournalWrites->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      if (!((__result.self.pendingJournalWrites).has(tfrId))) {
        postViolations.push("[JournalTransferMediation.requestJournalWrite] post violated: self.pendingJournalWrites->includes(tfrId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalTransferMediation.requestJournalWrite (async). User supplies this. */
export type JournalTransferMediationRequestJournalWriteAsyncImpl = (self: JournalTransferMediation, tfrId: string) => Promise<{ self: JournalTransferMediation; modified: { pendingJournalWrites: unknown } }>;

/** Contract-checking wrapper for JournalTransferMediation.requestJournalWrite (async). */
export function wrapJournalTransferMediationRequestJournalWriteAsync(impl: JournalTransferMediationRequestJournalWriteAsyncImpl): (self: JournalTransferMediation, tfrId: string) => Promise<JournalTransferMediation> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalTransferMediation.requestJournalWrite] pre violated: tfrId <> null");
    }
    if (!(!((self.pendingJournalWrites).has(tfrId)))) {
      preViolations.push("[JournalTransferMediation.requestJournalWrite] pre violated: not self.pendingJournalWrites->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      if (!((__result.self.pendingJournalWrites).has(tfrId))) {
        postViolations.push("[JournalTransferMediation.requestJournalWrite] post violated: self.pendingJournalWrites->includes(tfrId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalTransferMediation.confirmJournalWrite. User supplies this. */
export type JournalTransferMediationConfirmJournalWriteImpl = (self: JournalTransferMediation, tfrId: string) => { self: JournalTransferMediation; modified: { pendingJournalWrites: unknown } };

/** Contract-checking wrapper for JournalTransferMediation.confirmJournalWrite. */
export function wrapJournalTransferMediationConfirmJournalWrite(impl: JournalTransferMediationConfirmJournalWriteImpl): (self: JournalTransferMediation, tfrId: string) => JournalTransferMediation {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalTransferMediation.confirmJournalWrite] pre violated: tfrId <> null");
    }
    if (!((self.pendingJournalWrites).has(tfrId))) {
      preViolations.push("[JournalTransferMediation.confirmJournalWrite] pre violated: self.pendingJournalWrites->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingJournalWrites).has(tfrId)))) {
        postViolations.push("[JournalTransferMediation.confirmJournalWrite] post violated: not self.pendingJournalWrites->includes(tfrId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalTransferMediation.confirmJournalWrite (async). User supplies this. */
export type JournalTransferMediationConfirmJournalWriteAsyncImpl = (self: JournalTransferMediation, tfrId: string) => Promise<{ self: JournalTransferMediation; modified: { pendingJournalWrites: unknown } }>;

/** Contract-checking wrapper for JournalTransferMediation.confirmJournalWrite (async). */
export function wrapJournalTransferMediationConfirmJournalWriteAsync(impl: JournalTransferMediationConfirmJournalWriteAsyncImpl): (self: JournalTransferMediation, tfrId: string) => Promise<JournalTransferMediation> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalTransferMediation.confirmJournalWrite] pre violated: tfrId <> null");
    }
    if (!((self.pendingJournalWrites).has(tfrId))) {
      preViolations.push("[JournalTransferMediation.confirmJournalWrite] pre violated: self.pendingJournalWrites->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingJournalWrites).has(tfrId)))) {
        postViolations.push("[JournalTransferMediation.confirmJournalWrite] post violated: not self.pendingJournalWrites->includes(tfrId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalTransferMediation.rejectJournalWrite. User supplies this. */
export type JournalTransferMediationRejectJournalWriteImpl = (self: JournalTransferMediation, tfrId: string) => { self: JournalTransferMediation; modified: { pendingJournalWrites: unknown } };

/** Contract-checking wrapper for JournalTransferMediation.rejectJournalWrite. */
export function wrapJournalTransferMediationRejectJournalWrite(impl: JournalTransferMediationRejectJournalWriteImpl): (self: JournalTransferMediation, tfrId: string) => JournalTransferMediation {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalTransferMediation.rejectJournalWrite] pre violated: tfrId <> null");
    }
    if (!((self.pendingJournalWrites).has(tfrId))) {
      preViolations.push("[JournalTransferMediation.rejectJournalWrite] pre violated: self.pendingJournalWrites->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingJournalWrites).has(tfrId)))) {
        postViolations.push("[JournalTransferMediation.rejectJournalWrite] post violated: not self.pendingJournalWrites->includes(tfrId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for JournalTransferMediation.rejectJournalWrite (async). User supplies this. */
export type JournalTransferMediationRejectJournalWriteAsyncImpl = (self: JournalTransferMediation, tfrId: string) => Promise<{ self: JournalTransferMediation; modified: { pendingJournalWrites: unknown } }>;

/** Contract-checking wrapper for JournalTransferMediation.rejectJournalWrite (async). */
export function wrapJournalTransferMediationRejectJournalWriteAsync(impl: JournalTransferMediationRejectJournalWriteAsyncImpl): (self: JournalTransferMediation, tfrId: string) => Promise<JournalTransferMediation> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[JournalTransferMediation.rejectJournalWrite] pre violated: tfrId <> null");
    }
    if (!((self.pendingJournalWrites).has(tfrId))) {
      preViolations.push("[JournalTransferMediation.rejectJournalWrite] pre violated: self.pendingJournalWrites->includes(tfrId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingJournalWrites).has(tfrId)))) {
        postViolations.push("[JournalTransferMediation.rejectJournalWrite] post violated: not self.pendingJournalWrites->includes(tfrId)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationJournalMediation.checkJournalBeforeNotify. User supplies this. */
export type NotificationJournalMediationCheckJournalBeforeNotifyImpl = (self: NotificationJournalMediation, tfrId: string) => { self: NotificationJournalMediation; modified: {} };

/** Contract-checking wrapper for NotificationJournalMediation.checkJournalBeforeNotify. */
export function wrapNotificationJournalMediationCheckJournalBeforeNotify(impl: NotificationJournalMediationCheckJournalBeforeNotifyImpl): (self: NotificationJournalMediation, tfrId: string) => NotificationJournalMediation {
  return (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationJournalMediation.checkJournalBeforeNotify] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationJournalMediation.checkJournalBeforeNotify (async). User supplies this. */
export type NotificationJournalMediationCheckJournalBeforeNotifyAsyncImpl = (self: NotificationJournalMediation, tfrId: string) => Promise<{ self: NotificationJournalMediation; modified: {} }>;

/** Contract-checking wrapper for NotificationJournalMediation.checkJournalBeforeNotify (async). */
export function wrapNotificationJournalMediationCheckJournalBeforeNotifyAsync(impl: NotificationJournalMediationCheckJournalBeforeNotifyAsyncImpl): (self: NotificationJournalMediation, tfrId: string) => Promise<NotificationJournalMediation> {
  return async (self, tfrId) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[NotificationJournalMediation.checkJournalBeforeNotify] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type BankingTransactionSystemInitiateTransferImpl = (self: BankingTransactionSystem, srcId: string, dstId: string, amt: number) => { self: BankingTransactionSystem; modified: { minSourceBalanceCents: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.initiateTransfer. */
export function wrapBankingTransactionSystemInitiateTransfer(impl: BankingTransactionSystemInitiateTransferImpl): (self: BankingTransactionSystem, srcId: string, dstId: string, amt: number) => BankingTransactionSystem {
  return (self, srcId, dstId, amt) => {
    const preViolations: string[] = [];
    if (!((self.isOperational === true))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: self.isOperational = true");
    }
    if (!((srcId !== null))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: dstId <> null");
    }
    if (!((srcId !== dstId))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: srcId <> dstId");
    }
    if (!((amt > 0))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: amt > 0.0");
    }
    if (!((amt <= self.minSourceBalanceCents))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: amt <= self.minSourceBalanceCents");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.minSourceBalanceCents": self.minSourceBalanceCents,
      "self.maxAtomicLatencyMs": self.maxAtomicLatencyMs,
      "self.maxPendingSec": self.maxPendingSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, srcId, dstId, amt);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.minSourceBalanceCents === (__pre["self.minSourceBalanceCents"] - amt)))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.minSourceBalanceCents = self.minSourceBalanceCents@pre - amt");
      }
      if (!((__result.self.maxAtomicLatencyMs === __pre["self.maxAtomicLatencyMs"]))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.maxAtomicLatencyMs = self.maxAtomicLatencyMs@pre");
      }
      if (!((__result.self.maxPendingSec === __pre["self.maxPendingSec"]))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.maxPendingSec = self.maxPendingSec@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type BankingTransactionSystemInitiateTransferAsyncImpl = (self: BankingTransactionSystem, srcId: string, dstId: string, amt: number) => Promise<{ self: BankingTransactionSystem; modified: { minSourceBalanceCents: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.initiateTransfer (async). */
export function wrapBankingTransactionSystemInitiateTransferAsync(impl: BankingTransactionSystemInitiateTransferAsyncImpl): (self: BankingTransactionSystem, srcId: string, dstId: string, amt: number) => Promise<BankingTransactionSystem> {
  return async (self, srcId, dstId, amt) => {
    const preViolations: string[] = [];
    if (!((self.isOperational === true))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: self.isOperational = true");
    }
    if (!((srcId !== null))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: dstId <> null");
    }
    if (!((srcId !== dstId))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: srcId <> dstId");
    }
    if (!((amt > 0))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: amt > 0.0");
    }
    if (!((amt <= self.minSourceBalanceCents))) {
      preViolations.push("[BankingTransactionSystem.initiateTransfer] pre violated: amt <= self.minSourceBalanceCents");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.minSourceBalanceCents": self.minSourceBalanceCents,
      "self.maxAtomicLatencyMs": self.maxAtomicLatencyMs,
      "self.maxPendingSec": self.maxPendingSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, srcId, dstId, amt);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.minSourceBalanceCents === (__pre["self.minSourceBalanceCents"] - amt)))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.minSourceBalanceCents = self.minSourceBalanceCents@pre - amt");
      }
      if (!((__result.self.maxAtomicLatencyMs === __pre["self.maxAtomicLatencyMs"]))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.maxAtomicLatencyMs = self.maxAtomicLatencyMs@pre");
      }
      if (!((__result.self.maxPendingSec === __pre["self.maxPendingSec"]))) {
        postViolations.push("[BankingTransactionSystem.initiateTransfer] post violated: self.maxPendingSec = self.maxPendingSec@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.createJournalEntry. User supplies this. */
export type BankingTransactionSystemCreateJournalEntryImpl = (self: BankingTransactionSystem, tfrId: string, srcId: string, dstId: string, amt: number) => { self: BankingTransactionSystem; modified: { journalRetentionDays: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.createJournalEntry. */
export function wrapBankingTransactionSystemCreateJournalEntry(impl: BankingTransactionSystemCreateJournalEntryImpl): (self: BankingTransactionSystem, tfrId: string, srcId: string, dstId: string, amt: number) => BankingTransactionSystem {
  return (self, tfrId, srcId, dstId, amt) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: tfrId <> null");
    }
    if (!((srcId !== null))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: dstId <> null");
    }
    if (!((amt > 0))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: amt > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalRetentionDays": self.journalRetentionDays,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, srcId, dstId, amt);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.journalRetentionDays === __pre["self.journalRetentionDays"]))) {
        postViolations.push("[BankingTransactionSystem.createJournalEntry] post violated: self.journalRetentionDays = self.journalRetentionDays@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.createJournalEntry (async). User supplies this. */
export type BankingTransactionSystemCreateJournalEntryAsyncImpl = (self: BankingTransactionSystem, tfrId: string, srcId: string, dstId: string, amt: number) => Promise<{ self: BankingTransactionSystem; modified: { journalRetentionDays: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.createJournalEntry (async). */
export function wrapBankingTransactionSystemCreateJournalEntryAsync(impl: BankingTransactionSystemCreateJournalEntryAsyncImpl): (self: BankingTransactionSystem, tfrId: string, srcId: string, dstId: string, amt: number) => Promise<BankingTransactionSystem> {
  return async (self, tfrId, srcId, dstId, amt) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: tfrId <> null");
    }
    if (!((srcId !== null))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: srcId <> null");
    }
    if (!((dstId !== null))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: dstId <> null");
    }
    if (!((amt > 0))) {
      preViolations.push("[BankingTransactionSystem.createJournalEntry] pre violated: amt > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.journalRetentionDays": self.journalRetentionDays,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, srcId, dstId, amt);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.journalRetentionDays === __pre["self.journalRetentionDays"]))) {
        postViolations.push("[BankingTransactionSystem.createJournalEntry] post violated: self.journalRetentionDays = self.journalRetentionDays@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.recoverPendingTransfer. User supplies this. */
export type BankingTransactionSystemRecoverPendingTransferImpl = (self: BankingTransactionSystem, entryId: string) => { self: BankingTransactionSystem; modified: { maxAtomicLatencyMs: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.recoverPendingTransfer. */
export function wrapBankingTransactionSystemRecoverPendingTransfer(impl: BankingTransactionSystemRecoverPendingTransferImpl): (self: BankingTransactionSystem, entryId: string) => BankingTransactionSystem {
  return (self, entryId) => {
    const preViolations: string[] = [];
    if (!((entryId !== null))) {
      preViolations.push("[BankingTransactionSystem.recoverPendingTransfer] pre violated: entryId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.maxAtomicLatencyMs": self.maxAtomicLatencyMs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.maxAtomicLatencyMs === __pre["self.maxAtomicLatencyMs"]))) {
        postViolations.push("[BankingTransactionSystem.recoverPendingTransfer] post violated: self.maxAtomicLatencyMs = self.maxAtomicLatencyMs@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.recoverPendingTransfer (async). User supplies this. */
export type BankingTransactionSystemRecoverPendingTransferAsyncImpl = (self: BankingTransactionSystem, entryId: string) => Promise<{ self: BankingTransactionSystem; modified: { maxAtomicLatencyMs: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.recoverPendingTransfer (async). */
export function wrapBankingTransactionSystemRecoverPendingTransferAsync(impl: BankingTransactionSystemRecoverPendingTransferAsyncImpl): (self: BankingTransactionSystem, entryId: string) => Promise<BankingTransactionSystem> {
  return async (self, entryId) => {
    const preViolations: string[] = [];
    if (!((entryId !== null))) {
      preViolations.push("[BankingTransactionSystem.recoverPendingTransfer] pre violated: entryId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.maxAtomicLatencyMs": self.maxAtomicLatencyMs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entryId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.maxAtomicLatencyMs === __pre["self.maxAtomicLatencyMs"]))) {
        postViolations.push("[BankingTransactionSystem.recoverPendingTransfer] post violated: self.maxAtomicLatencyMs = self.maxAtomicLatencyMs@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.resolvePendingTransfer. User supplies this. */
export type BankingTransactionSystemResolvePendingTransferImpl = (self: BankingTransactionSystem, timeoutSec: number) => { self: BankingTransactionSystem; modified: { maxPendingSec: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.resolvePendingTransfer. */
export function wrapBankingTransactionSystemResolvePendingTransfer(impl: BankingTransactionSystemResolvePendingTransferImpl): (self: BankingTransactionSystem, timeoutSec: number) => BankingTransactionSystem {
  return (self, timeoutSec) => {
    const preViolations: string[] = [];
    if (!((timeoutSec > 0))) {
      preViolations.push("[BankingTransactionSystem.resolvePendingTransfer] pre violated: timeoutSec > 0.0");
    }
    if (!((timeoutSec <= self.maxPendingSec))) {
      preViolations.push("[BankingTransactionSystem.resolvePendingTransfer] pre violated: timeoutSec <= self.maxPendingSec");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.maxPendingSec": self.maxPendingSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeoutSec);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.maxPendingSec === __pre["self.maxPendingSec"]))) {
        postViolations.push("[BankingTransactionSystem.resolvePendingTransfer] post violated: self.maxPendingSec = self.maxPendingSec@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.resolvePendingTransfer (async). User supplies this. */
export type BankingTransactionSystemResolvePendingTransferAsyncImpl = (self: BankingTransactionSystem, timeoutSec: number) => Promise<{ self: BankingTransactionSystem; modified: { maxPendingSec: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.resolvePendingTransfer (async). */
export function wrapBankingTransactionSystemResolvePendingTransferAsync(impl: BankingTransactionSystemResolvePendingTransferAsyncImpl): (self: BankingTransactionSystem, timeoutSec: number) => Promise<BankingTransactionSystem> {
  return async (self, timeoutSec) => {
    const preViolations: string[] = [];
    if (!((timeoutSec > 0))) {
      preViolations.push("[BankingTransactionSystem.resolvePendingTransfer] pre violated: timeoutSec > 0.0");
    }
    if (!((timeoutSec <= self.maxPendingSec))) {
      preViolations.push("[BankingTransactionSystem.resolvePendingTransfer] pre violated: timeoutSec <= self.maxPendingSec");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.maxPendingSec": self.maxPendingSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeoutSec);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (!((__result.self.maxPendingSec === __pre["self.maxPendingSec"]))) {
        postViolations.push("[BankingTransactionSystem.resolvePendingTransfer] post violated: self.maxPendingSec = self.maxPendingSec@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type BankingTransactionSystemNotifyCustomerImpl = (self: BankingTransactionSystem, tfrId: string, ok: boolean) => { self: BankingTransactionSystem; modified: { isOperational: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.notifyCustomer. */
export function wrapBankingTransactionSystemNotifyCustomer(impl: BankingTransactionSystemNotifyCustomerImpl): (self: BankingTransactionSystem, tfrId: string, ok: boolean) => BankingTransactionSystem {
  return (self, tfrId, ok) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, ok);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type BankingTransactionSystemNotifyCustomerAsyncImpl = (self: BankingTransactionSystem, tfrId: string, ok: boolean) => Promise<{ self: BankingTransactionSystem; modified: { isOperational: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.notifyCustomer (async). */
export function wrapBankingTransactionSystemNotifyCustomerAsync(impl: BankingTransactionSystemNotifyCustomerAsyncImpl): (self: BankingTransactionSystem, tfrId: string, ok: boolean) => Promise<BankingTransactionSystem> {
  return async (self, tfrId, ok) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystem.notifyCustomer] pre violated: tfrId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, ok);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.healthCheck. User supplies this. */
export type BankingTransactionSystemHealthCheckImpl = (self: BankingTransactionSystem) => { self: BankingTransactionSystem; modified: { isOperational: unknown } };

/** Contract-checking wrapper for BankingTransactionSystem.healthCheck. */
export function wrapBankingTransactionSystemHealthCheck(impl: BankingTransactionSystemHealthCheckImpl): (self: BankingTransactionSystem) => BankingTransactionSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[BankingTransactionSystem.healthCheck] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperational === true))) {
        postViolations.push("[BankingTransactionSystem.healthCheck] post violated: self.isOperational = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystem.healthCheck (async). User supplies this. */
export type BankingTransactionSystemHealthCheckAsyncImpl = (self: BankingTransactionSystem) => Promise<{ self: BankingTransactionSystem; modified: { isOperational: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystem.healthCheck (async). */
export function wrapBankingTransactionSystemHealthCheckAsync(impl: BankingTransactionSystemHealthCheckAsyncImpl): (self: BankingTransactionSystem) => Promise<BankingTransactionSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[BankingTransactionSystem.healthCheck] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperational === true))) {
        postViolations.push("[BankingTransactionSystem.healthCheck] post violated: self.isOperational = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.enforceJournalBeforeNotification. User supplies this. */
export type BankingTransactionSystemFormalizedEnforceJournalBeforeNotificationImpl = (self: BankingTransactionSystemFormalized, tfrId: string, journalTimestampOk: boolean, notificationTimestampOk: boolean) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.enforceJournalBeforeNotification. */
export function wrapBankingTransactionSystemFormalizedEnforceJournalBeforeNotification(impl: BankingTransactionSystemFormalizedEnforceJournalBeforeNotificationImpl): (self: BankingTransactionSystemFormalized, tfrId: string, journalTimestampOk: boolean, notificationTimestampOk: boolean) => BankingTransactionSystemFormalized {
  return (self, tfrId, journalTimestampOk, notificationTimestampOk) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] pre violated: tfrId <> null");
    }
    if (!((journalTimestampOk === true))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] pre violated: journalTimestampOk = true");
    }
    if (!((notificationTimestampOk === true))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] pre violated: notificationTimestampOk = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, journalTimestampOk, notificationTimestampOk);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.enforceJournalBeforeNotification (async). User supplies this. */
export type BankingTransactionSystemFormalizedEnforceJournalBeforeNotificationAsyncImpl = (self: BankingTransactionSystemFormalized, tfrId: string, journalTimestampOk: boolean, notificationTimestampOk: boolean) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.enforceJournalBeforeNotification (async). */
export function wrapBankingTransactionSystemFormalizedEnforceJournalBeforeNotificationAsync(impl: BankingTransactionSystemFormalizedEnforceJournalBeforeNotificationAsyncImpl): (self: BankingTransactionSystemFormalized, tfrId: string, journalTimestampOk: boolean, notificationTimestampOk: boolean) => Promise<BankingTransactionSystemFormalized> {
  return async (self, tfrId, journalTimestampOk, notificationTimestampOk) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] pre violated: tfrId <> null");
    }
    if (!((journalTimestampOk === true))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] pre violated: journalTimestampOk = true");
    }
    if (!((notificationTimestampOk === true))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] pre violated: notificationTimestampOk = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, journalTimestampOk, notificationTimestampOk);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[BankingTransactionSystemFormalized.enforceJournalBeforeNotification] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.auditRejection. User supplies this. */
export type BankingTransactionSystemFormalizedAuditRejectionImpl = (self: BankingTransactionSystemFormalized, tfrId: string, reason: string) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.auditRejection. */
export function wrapBankingTransactionSystemFormalizedAuditRejection(impl: BankingTransactionSystemFormalizedAuditRejectionImpl): (self: BankingTransactionSystemFormalized, tfrId: string, reason: string) => BankingTransactionSystemFormalized {
  return (self, tfrId, reason) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.auditRejection] pre violated: tfrId <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.auditRejection] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tfrId, reason);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.auditRejection (async). User supplies this. */
export type BankingTransactionSystemFormalizedAuditRejectionAsyncImpl = (self: BankingTransactionSystemFormalized, tfrId: string, reason: string) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.auditRejection (async). */
export function wrapBankingTransactionSystemFormalizedAuditRejectionAsync(impl: BankingTransactionSystemFormalizedAuditRejectionAsyncImpl): (self: BankingTransactionSystemFormalized, tfrId: string, reason: string) => Promise<BankingTransactionSystemFormalized> {
  return async (self, tfrId, reason) => {
    const preViolations: string[] = [];
    if (!((tfrId !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.auditRejection] pre violated: tfrId <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.auditRejection] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tfrId, reason);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <> null — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.enforcePendingTtl. User supplies this. */
export type BankingTransactionSystemFormalizedEnforcePendingTtlImpl = (self: BankingTransactionSystemFormalized, elapsedSeconds: number, maxPendingSeconds: number) => { self: BankingTransactionSystemFormalized; modified: {} };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.enforcePendingTtl. */
export function wrapBankingTransactionSystemFormalizedEnforcePendingTtl(impl: BankingTransactionSystemFormalizedEnforcePendingTtlImpl): (self: BankingTransactionSystemFormalized, elapsedSeconds: number, maxPendingSeconds: number) => BankingTransactionSystemFormalized {
  return (self, elapsedSeconds, maxPendingSeconds) => {
    const preViolations: string[] = [];
    if (!((elapsedSeconds >= 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforcePendingTtl] pre violated: elapsedSeconds >= 0.0");
    }
    if (!((maxPendingSeconds > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforcePendingTtl] pre violated: maxPendingSeconds > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, elapsedSeconds, maxPendingSeconds);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (elapsedSeconds <= maxPendingSeconds) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.enforcePendingTtl (async). User supplies this. */
export type BankingTransactionSystemFormalizedEnforcePendingTtlAsyncImpl = (self: BankingTransactionSystemFormalized, elapsedSeconds: number, maxPendingSeconds: number) => Promise<{ self: BankingTransactionSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.enforcePendingTtl (async). */
export function wrapBankingTransactionSystemFormalizedEnforcePendingTtlAsync(impl: BankingTransactionSystemFormalizedEnforcePendingTtlAsyncImpl): (self: BankingTransactionSystemFormalized, elapsedSeconds: number, maxPendingSeconds: number) => Promise<BankingTransactionSystemFormalized> {
  return async (self, elapsedSeconds, maxPendingSeconds) => {
    const preViolations: string[] = [];
    if (!((elapsedSeconds >= 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforcePendingTtl] pre violated: elapsedSeconds >= 0.0");
    }
    if (!((maxPendingSeconds > 0))) {
      preViolations.push("[BankingTransactionSystemFormalized.enforcePendingTtl] pre violated: maxPendingSeconds > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, elapsedSeconds, maxPendingSeconds);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (elapsedSeconds <= maxPendingSeconds) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.setAuditRetentionYears. User supplies this. */
export type BankingTransactionSystemFormalizedSetAuditRetentionYearsImpl = (self: BankingTransactionSystemFormalized, years: number) => { self: BankingTransactionSystemFormalized; modified: { auditRetentionYears: unknown } };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.setAuditRetentionYears. */
export function wrapBankingTransactionSystemFormalizedSetAuditRetentionYears(impl: BankingTransactionSystemFormalizedSetAuditRetentionYearsImpl): (self: BankingTransactionSystemFormalized, years: number) => BankingTransactionSystemFormalized {
  return (self, years) => {
    const preViolations: string[] = [];
    if (!((years >= 5))) {
      preViolations.push("[BankingTransactionSystemFormalized.setAuditRetentionYears] pre violated: years >= 5");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, years);
      const postViolations: string[] = [];
      if (!((__result.self.auditRetentionYears === years))) {
        postViolations.push("[BankingTransactionSystemFormalized.setAuditRetentionYears] post violated: self.auditRetentionYears = years");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.setAuditRetentionYears (async). User supplies this. */
export type BankingTransactionSystemFormalizedSetAuditRetentionYearsAsyncImpl = (self: BankingTransactionSystemFormalized, years: number) => Promise<{ self: BankingTransactionSystemFormalized; modified: { auditRetentionYears: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.setAuditRetentionYears (async). */
export function wrapBankingTransactionSystemFormalizedSetAuditRetentionYearsAsync(impl: BankingTransactionSystemFormalizedSetAuditRetentionYearsAsyncImpl): (self: BankingTransactionSystemFormalized, years: number) => Promise<BankingTransactionSystemFormalized> {
  return async (self, years) => {
    const preViolations: string[] = [];
    if (!((years >= 5))) {
      preViolations.push("[BankingTransactionSystemFormalized.setAuditRetentionYears] pre violated: years >= 5");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, years);
      const postViolations: string[] = [];
      if (!((__result.self.auditRetentionYears === years))) {
        postViolations.push("[BankingTransactionSystemFormalized.setAuditRetentionYears] post violated: self.auditRetentionYears = years");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.setGdprControllerName. User supplies this. */
export type BankingTransactionSystemFormalizedSetGdprControllerNameImpl = (self: BankingTransactionSystemFormalized, name: string) => { self: BankingTransactionSystemFormalized; modified: { gdprDataControllerName: unknown } };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.setGdprControllerName. */
export function wrapBankingTransactionSystemFormalizedSetGdprControllerName(impl: BankingTransactionSystemFormalizedSetGdprControllerNameImpl): (self: BankingTransactionSystemFormalized, name: string) => BankingTransactionSystemFormalized {
  return (self, name) => {
    const preViolations: string[] = [];
    if (!((name !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.setGdprControllerName] pre violated: name <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, name);
      const postViolations: string[] = [];
      if (!((__result.self.gdprDataControllerName === name))) {
        postViolations.push("[BankingTransactionSystemFormalized.setGdprControllerName] post violated: self.gdprDataControllerName = name");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.setGdprControllerName (async). User supplies this. */
export type BankingTransactionSystemFormalizedSetGdprControllerNameAsyncImpl = (self: BankingTransactionSystemFormalized, name: string) => Promise<{ self: BankingTransactionSystemFormalized; modified: { gdprDataControllerName: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.setGdprControllerName (async). */
export function wrapBankingTransactionSystemFormalizedSetGdprControllerNameAsync(impl: BankingTransactionSystemFormalizedSetGdprControllerNameAsyncImpl): (self: BankingTransactionSystemFormalized, name: string) => Promise<BankingTransactionSystemFormalized> {
  return async (self, name) => {
    const preViolations: string[] = [];
    if (!((name !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.setGdprControllerName] pre violated: name <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, name);
      const postViolations: string[] = [];
      if (!((__result.self.gdprDataControllerName === name))) {
        postViolations.push("[BankingTransactionSystemFormalized.setGdprControllerName] post violated: self.gdprDataControllerName = name");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.setGdprDPOContact. User supplies this. */
export type BankingTransactionSystemFormalizedSetGdprDPOContactImpl = (self: BankingTransactionSystemFormalized, contact: string) => { self: BankingTransactionSystemFormalized; modified: { gdprDataProtectionOfficerContact: unknown } };

/** Contract-checking wrapper for BankingTransactionSystemFormalized.setGdprDPOContact. */
export function wrapBankingTransactionSystemFormalizedSetGdprDPOContact(impl: BankingTransactionSystemFormalizedSetGdprDPOContactImpl): (self: BankingTransactionSystemFormalized, contact: string) => BankingTransactionSystemFormalized {
  return (self, contact) => {
    const preViolations: string[] = [];
    if (!((contact !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.setGdprDPOContact] pre violated: contact <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, contact);
      const postViolations: string[] = [];
      if (!((__result.self.gdprDataProtectionOfficerContact === contact))) {
        postViolations.push("[BankingTransactionSystemFormalized.setGdprDPOContact] post violated: self.gdprDataProtectionOfficerContact = contact");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BankingTransactionSystemFormalized.setGdprDPOContact (async). User supplies this. */
export type BankingTransactionSystemFormalizedSetGdprDPOContactAsyncImpl = (self: BankingTransactionSystemFormalized, contact: string) => Promise<{ self: BankingTransactionSystemFormalized; modified: { gdprDataProtectionOfficerContact: unknown } }>;

/** Contract-checking wrapper for BankingTransactionSystemFormalized.setGdprDPOContact (async). */
export function wrapBankingTransactionSystemFormalizedSetGdprDPOContactAsync(impl: BankingTransactionSystemFormalizedSetGdprDPOContactAsyncImpl): (self: BankingTransactionSystemFormalized, contact: string) => Promise<BankingTransactionSystemFormalized> {
  return async (self, contact) => {
    const preViolations: string[] = [];
    if (!((contact !== null))) {
      preViolations.push("[BankingTransactionSystemFormalized.setGdprDPOContact] pre violated: contact <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, contact);
      const postViolations: string[] = [];
      if (!((__result.self.gdprDataProtectionOfficerContact === contact))) {
        postViolations.push("[BankingTransactionSystemFormalized.setGdprDPOContact] post violated: self.gdprDataProtectionOfficerContact = contact");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

