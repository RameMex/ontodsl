// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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

