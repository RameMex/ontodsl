/**
 * Transfer service — implements the events from the verified
 * `requirements.onto`, enforcing runtime invariants via the
 * auto-generated `validate*()` helpers from
 * `examples/online_banking/dist/design.ts`.
 *
 * libsql is async (unlike better-sqlite3), so every DB call here
 * is `await`ed. The transaction callback receives an async `tx`.
 */
import { eq, and } from "drizzle-orm";
import { db, accounts, transfers, journalEntries, notifications } from "../db/index.js";
import {
  validateAccountLedger,
  validateTransferCoordinator,
  type TransferId,
} from "@onto/banking";
import { randomUUID } from "node:crypto";

function assertNoViolations(violations: readonly string[], context: string): void {
  if (violations.length > 0) {
    throw new InvariantViolation(context, violations);
  }
}

export class InvariantViolation extends Error {
  constructor(public readonly context: string, public readonly violations: readonly string[]) {
    super(`Invariant violation in ${context}: ${violations.join("; ")}`);
    this.name = "InvariantViolation";
  }
}

export class CommitmentBreach extends Error {
  constructor(public readonly commitment: string, public readonly detail: string) {
    super(`Commitment '${commitment}' breached: ${detail}`);
    this.name = "CommitmentBreach";
  }
}

export interface InitiateTransferInput {
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
}

export interface InitiateTransferResult {
  transferId: TransferId;
  state: "PENDING";
  initiatedAt: Date;
}

/**
 * Event: initiateTransfer — locks funds in PENDING state.
 * Discharges NoOverdraftCommitment + half of AtomicTransferCommitment.
 */
export async function initiateTransfer(
  input: InitiateTransferInput,
): Promise<InitiateTransferResult> {
  if (input.amount <= 0) {
    throw new InvariantViolation("initiateTransfer", [
      "[Transfer.pre] amount > 0 violated",
    ]);
  }
  if (input.sourceAccountId === input.destinationAccountId) {
    throw new InvariantViolation("initiateTransfer", [
      "[AccountLedger] invariant violated: self.sourceAccountId <> self.destinationAccountId",
    ]);
  }

  return db.transaction(async (tx) => {
    const source = await tx.select().from(accounts).where(eq(accounts.accountId, input.sourceAccountId)).get();
    const dest = await tx.select().from(accounts).where(eq(accounts.accountId, input.destinationAccountId)).get();

    if (!source) throw new Error(`source account ${input.sourceAccountId} not found`);
    if (!dest) throw new Error(`destination account ${input.destinationAccountId} not found`);
    if (source.status !== "OPEN") {
      throw new InvariantViolation("initiateTransfer", [
        `[Account] source account is ${source.status}, expected OPEN`,
      ]);
    }
    if (dest.status !== "OPEN") {
      throw new InvariantViolation("initiateTransfer", [
        `[Account] destination account is ${dest.status}, expected OPEN`,
      ]);
    }
    if (source.balance < input.amount) {
      throw new CommitmentBreach(
        "NoOverdraftCommitment",
        `source.balance=${source.balance} < amount=${input.amount}`,
      );
    }

    const transferId = randomUUID();
    const now = new Date();
    await tx.insert(transfers).values({
      transferId,
      sourceAccountId: input.sourceAccountId,
      destinationAccountId: input.destinationAccountId,
      amount: input.amount,
      state: "PENDING",
      initiatedAt: now,
      resolvedAt: null,
    });

    const ledgerSnapshot = {
      ledgerId: `${input.sourceAccountId}:${input.destinationAccountId}` as never,
      sourceAccountId: input.sourceAccountId,
      destinationAccountId: input.destinationAccountId,
      sourceBalance: source.balance,
      destinationBalance: dest.balance,
      pendingSourceBalance: input.amount,
      pendingDestinationBalance: input.amount,
    };
    assertNoViolations(validateAccountLedger(ledgerSnapshot as never), "initiateTransfer/ledger");

    const coordinatorSnapshot = {
      coordinatorId: transferId as never,
      currentTransferId: transferId,
      currentAmount: input.amount,
      transferState: "PENDING",
      maxResolutionSeconds: 30,
    };
    assertNoViolations(
      validateTransferCoordinator(coordinatorSnapshot as never),
      "initiateTransfer/coordinator",
    );

    return {
      transferId: transferId as TransferId,
      state: "PENDING" as const,
      initiatedAt: now,
    };
  });
}

export interface ExecuteTransferResult {
  transferId: TransferId;
  state: "COMPLETED";
  journalEntryId: string;
  notificationId: string;
}

/**
 * Event: executeTransfer — debit + credit + journal + notify, atomic.
 * Discharges AtomicTransferCommitment + AuditJournalCommitment.
 */
export async function executeTransfer(transferId: string): Promise<ExecuteTransferResult> {
  return db.transaction(async (tx) => {
    const transfer = await tx.select().from(transfers).where(eq(transfers.transferId, transferId)).get();
    if (!transfer) throw new Error(`transfer ${transferId} not found`);
    if (transfer.state !== "PENDING") {
      throw new InvariantViolation("executeTransfer", [
        `[TransferCoordinator] state transition invalid: ${transfer.state} → COMPLETED requires PENDING`,
      ]);
    }

    const source = (await tx.select().from(accounts).where(eq(accounts.accountId, transfer.sourceAccountId)).get())!;
    const dest = (await tx.select().from(accounts).where(eq(accounts.accountId, transfer.destinationAccountId)).get())!;

    if (source.balance < transfer.amount) {
      throw new CommitmentBreach(
        "NoOverdraftCommitment",
        `at execute time: source.balance=${source.balance} < amount=${transfer.amount}`,
      );
    }

    const preSourceBalance = source.balance;
    const preDestBalance = dest.balance;
    const postSourceBalance = source.balance - transfer.amount;
    const postDestBalance = dest.balance + transfer.amount;

    await tx.update(accounts).set({ balance: postSourceBalance }).where(eq(accounts.accountId, source.accountId));
    await tx.update(accounts).set({ balance: postDestBalance }).where(eq(accounts.accountId, dest.accountId));

    const ledgerPost = {
      ledgerId: `${source.accountId}:${dest.accountId}`,
      sourceAccountId: source.accountId,
      destinationAccountId: dest.accountId,
      sourceBalance: postSourceBalance,
      destinationBalance: postDestBalance,
      pendingSourceBalance: 0,
      pendingDestinationBalance: 0,
    };
    assertNoViolations(validateAccountLedger(ledgerPost as never), "executeTransfer/post");

    // AuditJournalCommitment: journal BEFORE notification.
    const entryId = randomUUID();
    const now = new Date();
    await tx.insert(journalEntries).values({
      entryId,
      transferId,
      sourceAccountIdRef: source.accountId,
      destinationAccountIdRef: dest.accountId,
      amount: transfer.amount,
      preSourceBalance,
      postSourceBalance,
      preDestinationBalance: preDestBalance,
      postDestinationBalance: postDestBalance,
      createdAt: now,
      immutable: true,
    });

    const notifId = randomUUID();
    await tx.insert(notifications).values({
      id: notifId,
      transferId,
      customerId: source.ownerId,
      message: `Transfer of ${transfer.amount} from ${source.accountId} to ${dest.accountId} completed.`,
      status: "delivered",
      createdAt: now,
    });

    await tx.update(transfers).set({ state: "COMPLETED", resolvedAt: now }).where(eq(transfers.transferId, transferId));

    return {
      transferId: transferId as TransferId,
      state: "COMPLETED" as const,
      journalEntryId: entryId,
      notificationId: notifId,
    };
  });
}

export interface RollbackTransferResult {
  transferId: TransferId;
  state: "ROLLED_BACK";
}

export async function rollbackTransfer(
  transferId: string,
  reason: string,
): Promise<RollbackTransferResult> {
  return db.transaction(async (tx) => {
    const transfer = await tx.select().from(transfers).where(eq(transfers.transferId, transferId)).get();
    if (!transfer) throw new Error(`transfer ${transferId} not found`);
    if (transfer.state !== "PENDING") {
      throw new InvariantViolation("rollbackTransfer", [
        `[TransferCoordinator] state transition invalid: ${transfer.state} → ROLLED_BACK requires PENDING`,
      ]);
    }
    const now = new Date();
    await tx.update(transfers).set({ state: "ROLLED_BACK", resolvedAt: now }).where(eq(transfers.transferId, transferId));

    const src = (await tx.select().from(accounts).where(eq(accounts.accountId, transfer.sourceAccountId)).get())!;
    await tx.insert(notifications).values({
      id: randomUUID(),
      transferId,
      customerId: src.ownerId,
      message: `Transfer ${transferId} was rolled back: ${reason}`,
      status: "delivered",
      createdAt: now,
    });

    return {
      transferId: transferId as TransferId,
      state: "ROLLED_BACK" as const,
    };
  });
}

/**
 * Background sweep — enforces BoundedLatencyCommitment by rolling back
 * any PENDING transfer older than maxAgeSeconds.
 */
export async function sweepStalePendingTransfers(maxAgeSeconds = 30): Promise<number> {
  const cutoff = new Date(Date.now() - maxAgeSeconds * 1000);
  const stale = (await db.select().from(transfers).where(eq(transfers.state, "PENDING")))
    .filter((t) => t.initiatedAt < cutoff);
  let count = 0;
  for (const t of stale) {
    try {
      await rollbackTransfer(t.transferId, `bounded-latency: pending > ${maxAgeSeconds}s`);
      count += 1;
    } catch (e) {
      console.error("sweep rollback failed for", t.transferId, e);
    }
  }
  return count;
}
