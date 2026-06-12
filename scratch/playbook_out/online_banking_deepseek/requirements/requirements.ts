// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for BankingTransactionSystem. Runtime: string. Compile-time: branded. */
export type BankingTransactionSystemId = string & { readonly __brand: "BankingTransactionSystemId" };
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

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface BankingTransactionSystem extends AtomicTransferConstraints, NoOverdraftConstraints, AuditTrailConstraints {
  readonly systemId: BankingTransactionSystemId;
  readonly maxAtomicLatencyMs: number;
  readonly minSourceBalanceCents: number;
  readonly journalRetentionDays: number;
  readonly maxPendingSec: number;
  readonly isOperational: boolean;
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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

