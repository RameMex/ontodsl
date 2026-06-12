// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Borrower. Runtime: string. Compile-time: branded. */
export type BorrowerId = string & { readonly __brand: "BorrowerId" };
/** Identity type for Librarian. Runtime: string. Compile-time: branded. */
export type LibrarianId = string & { readonly __brand: "LibrarianId" };
/** Identity type for LibrarySystemVendor. Runtime: string. Compile-time: branded. */
export type LibrarySystemVendorId = string & { readonly __brand: "LibrarySystemVendorId" };
/** Identity type for Title. Runtime: string. Compile-time: branded. */
export type TitleId = string & { readonly __brand: "TitleId" };
/** Identity type for BookCopy. Runtime: string. Compile-time: branded. */
export type BookCopyId = string & { readonly __brand: "BookCopyId" };
/** Identity type for Loan. Runtime: string. Compile-time: branded. */
export type LoanId = string & { readonly __brand: "LoanId" };
/** Identity type for Reservation. Runtime: string. Compile-time: branded. */
export type ReservationId = string & { readonly __brand: "ReservationId" };
/** Identity type for LateFee. Runtime: string. Compile-time: branded. */
export type LateFeeId = string & { readonly __brand: "LateFeeId" };
/** Identity type for MutuallyExclusiveCopyStateCommitment. Runtime: string. Compile-time: branded. */
export type MutuallyExclusiveCopyStateCommitmentId = string & { readonly __brand: "MutuallyExclusiveCopyStateCommitmentId" };
/** Identity type for IndebtedBorrowerBlockCommitment. Runtime: string. Compile-time: branded. */
export type IndebtedBorrowerBlockCommitmentId = string & { readonly __brand: "IndebtedBorrowerBlockCommitmentId" };
/** Identity type for StaleReservationExpiryCommitment. Runtime: string. Compile-time: branded. */
export type StaleReservationExpiryCommitmentId = string & { readonly __brand: "StaleReservationExpiryCommitmentId" };
/** Identity type for AccurateLateFeesCommitment. Runtime: string. Compile-time: branded. */
export type AccurateLateFeesCommitmentId = string & { readonly __brand: "AccurateLateFeesCommitmentId" };
/** Identity type for LibrarySystemVisionCommitment. Runtime: string. Compile-time: branded. */
export type LibrarySystemVisionCommitmentId = string & { readonly __brand: "LibrarySystemVisionCommitmentId" };
/** Identity type for LoanFlow. Runtime: string. Compile-time: branded. */
export type LoanFlowId = string & { readonly __brand: "LoanFlowId" };
/** Identity type for ReservationFlow. Runtime: string. Compile-time: branded. */
export type ReservationFlowId = string & { readonly __brand: "ReservationFlowId" };
/** Identity type for LateFeeFlow. Runtime: string. Compile-time: branded. */
export type LateFeeFlowId = string & { readonly __brand: "LateFeeFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Borrower {
  readonly borrowerId: BorrowerId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface Librarian {
  readonly librarianId: LibrarianId;
  readonly name: string;
  readonly employeeNumber: string;
}

/** @stereotype <<Agent>> */
export interface LibrarySystemVendor {
  readonly vendorId: LibrarySystemVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Title {
  readonly titleId: TitleId;
  readonly isbn: string;
  readonly name: string;
  readonly author: string;
}

/** @stereotype <<Kind>> */
export interface BookCopy {
  readonly copyId: BookCopyId;
  readonly title: Title;
  readonly status: string;
}

/** @stereotype <<Kind>> */
export interface Loan {
  readonly loanId: LoanId;
  readonly borrower: Borrower;
  readonly copy: BookCopy;
  readonly loanDate: number;
  readonly dueDate: number;
  readonly returnDate: number;
  readonly isReturned: boolean;
}

/** @stereotype <<Kind>> */
export interface Reservation {
  readonly reservationId: ReservationId;
  readonly borrower: Borrower;
  readonly copy: BookCopy;
  readonly reservationDate: number;
  readonly availableDate: number;
  readonly expiryDays: number;
  readonly isCancelled: boolean;
}

/** @stereotype <<Kind>> */
export interface LateFee {
  readonly feeId: LateFeeId;
  readonly borrower: Borrower;
  readonly loan: Loan;
  readonly dailyRate: number;
  readonly accruedAmount: number;
  readonly isPaid: boolean;
}

/** @stereotype <<Category>> */
export interface MutuallyExclusiveCopyState {
}

/** @stereotype <<Category>> */
export interface IndebtedBorrowerBlock {
}

/** @stereotype <<Category>> */
export interface StaleReservationExpiry {
}

/** @stereotype <<Category>> */
export interface AccurateLateFeesConstraint {
}

/** @stereotype <<Commitment>> */
export interface MutuallyExclusiveCopyStateCommitment {
  readonly commitmentId: MutuallyExclusiveCopyStateCommitmentId;
}

/** @stereotype <<Commitment>> */
export interface IndebtedBorrowerBlockCommitment {
  readonly commitmentId: IndebtedBorrowerBlockCommitmentId;
  readonly outstandingFeeThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface StaleReservationExpiryCommitment {
  readonly commitmentId: StaleReservationExpiryCommitmentId;
  readonly maxReservationHoldDays: number;
}

/** @stereotype <<Commitment>> */
export interface AccurateLateFeesCommitment {
  readonly commitmentId: AccurateLateFeesCommitmentId;
  readonly dailyRatePerDay: number;
}

/** @stereotype <<Commitment>> */
export interface LibrarySystemVisionCommitment {
  readonly commitmentId: LibrarySystemVisionCommitmentId;
  readonly systemName: string;
}

/** @stereotype <<Happening>> */
export interface LoanFlow {
  readonly flowId: LoanFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ReservationFlow {
  readonly flowId: ReservationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface LateFeeFlow {
  readonly flowId: LateFeeFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeBorrower(data: {
  borrowerId: string;
  name: string;
  email: string;
}): Borrower {
  return {
    borrowerId: data.borrowerId as BorrowerId,
    name: data.name,
    email: data.email,
  };
}

export function makeLibrarian(data: {
  librarianId: string;
  name: string;
  employeeNumber: string;
}): Librarian {
  return {
    librarianId: data.librarianId as LibrarianId,
    name: data.name,
    employeeNumber: data.employeeNumber,
  };
}

export function makeLibrarySystemVendor(data: {
  vendorId: string;
  name: string;
}): LibrarySystemVendor {
  return {
    vendorId: data.vendorId as LibrarySystemVendorId,
    name: data.name,
  };
}

export function makeTitle(data: {
  titleId: string;
  isbn: string;
  name: string;
  author: string;
}): Title {
  return {
    titleId: data.titleId as TitleId,
    isbn: data.isbn,
    name: data.name,
    author: data.author,
  };
}

export function makeBookCopy(data: {
  copyId: string;
  title: Title;
  status: string;
}): BookCopy {
  return {
    copyId: data.copyId as BookCopyId,
    title: data.title,
    status: data.status,
  };
}

export function makeLoan(data: {
  loanId: string;
  borrower: Borrower;
  copy: BookCopy;
  loanDate: number;
  dueDate: number;
  returnDate: number;
  isReturned: boolean;
}): Loan {
  return {
    loanId: data.loanId as LoanId,
    borrower: data.borrower,
    copy: data.copy,
    loanDate: data.loanDate,
    dueDate: data.dueDate,
    returnDate: data.returnDate,
    isReturned: data.isReturned,
  };
}

export function makeReservation(data: {
  reservationId: string;
  borrower: Borrower;
  copy: BookCopy;
  reservationDate: number;
  availableDate: number;
  expiryDays: number;
  isCancelled: boolean;
}): Reservation {
  return {
    reservationId: data.reservationId as ReservationId,
    borrower: data.borrower,
    copy: data.copy,
    reservationDate: data.reservationDate,
    availableDate: data.availableDate,
    expiryDays: data.expiryDays,
    isCancelled: data.isCancelled,
  };
}

export function makeLateFee(data: {
  feeId: string;
  borrower: Borrower;
  loan: Loan;
  dailyRate: number;
  accruedAmount: number;
  isPaid: boolean;
}): LateFee {
  return {
    feeId: data.feeId as LateFeeId,
    borrower: data.borrower,
    loan: data.loan,
    dailyRate: data.dailyRate,
    accruedAmount: data.accruedAmount,
    isPaid: data.isPaid,
  };
}

export function makeMutuallyExclusiveCopyStateCommitment(data: {
  commitmentId: string;
}): MutuallyExclusiveCopyStateCommitment {
  return {
    commitmentId: data.commitmentId as MutuallyExclusiveCopyStateCommitmentId,
  };
}

export function makeIndebtedBorrowerBlockCommitment(data: {
  commitmentId: string;
  outstandingFeeThreshold: number;
}): IndebtedBorrowerBlockCommitment {
  return {
    commitmentId: data.commitmentId as IndebtedBorrowerBlockCommitmentId,
    outstandingFeeThreshold: data.outstandingFeeThreshold,
  };
}

export function makeStaleReservationExpiryCommitment(data: {
  commitmentId: string;
  maxReservationHoldDays: number;
}): StaleReservationExpiryCommitment {
  return {
    commitmentId: data.commitmentId as StaleReservationExpiryCommitmentId,
    maxReservationHoldDays: data.maxReservationHoldDays,
  };
}

export function makeAccurateLateFeesCommitment(data: {
  commitmentId: string;
  dailyRatePerDay: number;
}): AccurateLateFeesCommitment {
  return {
    commitmentId: data.commitmentId as AccurateLateFeesCommitmentId,
    dailyRatePerDay: data.dailyRatePerDay,
  };
}

export function makeLibrarySystemVisionCommitment(data: {
  commitmentId: string;
  systemName: string;
}): LibrarySystemVisionCommitment {
  return {
    commitmentId: data.commitmentId as LibrarySystemVisionCommitmentId,
    systemName: data.systemName,
  };
}

export function makeLoanFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): LoanFlow {
  return {
    flowId: data.flowId as LoanFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeReservationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ReservationFlow {
  return {
    flowId: data.flowId as ReservationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeLateFeeFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): LateFeeFlow {
  return {
    flowId: data.flowId as LateFeeFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Borrower. Returns empty array when valid. */
export function validateBorrower(instance: Borrower): readonly string[] {
  const violations: string[] = [];
  if (!((instance.borrowerId !== null))) {
    violations.push("[Borrower] invariant violated: self.borrowerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Borrower] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Librarian. Returns empty array when valid. */
export function validateLibrarian(instance: Librarian): readonly string[] {
  const violations: string[] = [];
  if (!((instance.librarianId !== null))) {
    violations.push("[Librarian] invariant violated: self.librarianId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Librarian] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for LibrarySystemVendor. Returns empty array when valid. */
export function validateLibrarySystemVendor(instance: LibrarySystemVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[LibrarySystemVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Title. Returns empty array when valid. */
export function validateTitle(instance: Title): readonly string[] {
  const violations: string[] = [];
  if (!((instance.titleId !== null))) {
    violations.push("[Title] invariant violated: self.titleId <> null");
  }
  if (!((instance.isbn !== null))) {
    violations.push("[Title] invariant violated: self.isbn <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Title] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for BookCopy. Returns empty array when valid. */
export function validateBookCopy(instance: BookCopy): readonly string[] {
  const violations: string[] = [];
  if (!((instance.copyId !== null))) {
    violations.push("[BookCopy] invariant violated: self.copyId <> null");
  }
  if (!((instance.title !== null))) {
    violations.push("[BookCopy] invariant violated: self.title <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[BookCopy] invariant violated: self.status <> null");
  }
  return violations;
}

/** Runtime invariant check for Loan. Returns empty array when valid. */
export function validateLoan(instance: Loan): readonly string[] {
  const violations: string[] = [];
  if (!((instance.loanId !== null))) {
    violations.push("[Loan] invariant violated: self.loanId <> null");
  }
  if (!((instance.borrower !== null))) {
    violations.push("[Loan] invariant violated: self.borrower <> null");
  }
  if (!((instance.copy !== null))) {
    violations.push("[Loan] invariant violated: self.copy <> null");
  }
  if (!((instance.dueDate > instance.loanDate))) {
    violations.push("[Loan] invariant violated: self.dueDate > self.loanDate");
  }
  return violations;
}

/** Runtime invariant check for Reservation. Returns empty array when valid. */
export function validateReservation(instance: Reservation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reservationId !== null))) {
    violations.push("[Reservation] invariant violated: self.reservationId <> null");
  }
  if (!((instance.borrower !== null))) {
    violations.push("[Reservation] invariant violated: self.borrower <> null");
  }
  if (!((instance.copy !== null))) {
    violations.push("[Reservation] invariant violated: self.copy <> null");
  }
  if (!((instance.expiryDays > 0))) {
    violations.push("[Reservation] invariant violated: self.expiryDays > 0");
  }
  return violations;
}

/** Runtime invariant check for LateFee. Returns empty array when valid. */
export function validateLateFee(instance: LateFee): readonly string[] {
  const violations: string[] = [];
  if (!((instance.feeId !== null))) {
    violations.push("[LateFee] invariant violated: self.feeId <> null");
  }
  if (!((instance.borrower !== null))) {
    violations.push("[LateFee] invariant violated: self.borrower <> null");
  }
  if (!((instance.loan !== null))) {
    violations.push("[LateFee] invariant violated: self.loan <> null");
  }
  if (!((instance.dailyRate > 0))) {
    violations.push("[LateFee] invariant violated: self.dailyRate > 0.0");
  }
  if (!((instance.accruedAmount >= 0))) {
    violations.push("[LateFee] invariant violated: self.accruedAmount >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for MutuallyExclusiveCopyState. Returns empty array when valid. */
export function validateMutuallyExclusiveCopyState(instance: MutuallyExclusiveCopyState): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.status <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for IndebtedBorrowerBlock. Returns empty array when valid. */
export function validateIndebtedBorrowerBlock(instance: IndebtedBorrowerBlock): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.borrowerId <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for StaleReservationExpiry. Returns empty array when valid. */
export function validateStaleReservationExpiry(instance: StaleReservationExpiry): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.expiryDays > 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AccurateLateFeesConstraint. Returns empty array when valid. */
export function validateAccurateLateFeesConstraint(instance: AccurateLateFeesConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.dailyRate > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.accruedAmount >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for LoanFlow. Returns empty array when valid. */
export function validateLoanFlow(instance: LoanFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[LoanFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[LoanFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for ReservationFlow. Returns empty array when valid. */
export function validateReservationFlow(instance: ReservationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ReservationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[ReservationFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for LateFeeFlow. Returns empty array when valid. */
export function validateLateFeeFlow(instance: LateFeeFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[LateFeeFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[LateFeeFlow] invariant violated: self.triggeredBy <> null");
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

/** Lifecycle registry for MutuallyExclusiveCopyStateCommitment commitments. */
export class MutuallyExclusiveCopyStateCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MutuallyExclusiveCopyStateCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MutuallyExclusiveCopyStateCommitment — the typed wrapper guarantees that since
    // `register` only accepts MutuallyExclusiveCopyStateCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MutuallyExclusiveCopyStateCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MutuallyExclusiveCopyStateCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MutuallyExclusiveCopyStateCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MutuallyExclusiveCopyStateCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MutuallyExclusiveCopyStateCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MutuallyExclusiveCopyStateCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for IndebtedBorrowerBlockCommitment commitments. */
export class IndebtedBorrowerBlockCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<IndebtedBorrowerBlockCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a IndebtedBorrowerBlockCommitment — the typed wrapper guarantees that since
    // `register` only accepts IndebtedBorrowerBlockCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: IndebtedBorrowerBlockCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: IndebtedBorrowerBlockCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: IndebtedBorrowerBlockCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: IndebtedBorrowerBlockCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<IndebtedBorrowerBlockCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<IndebtedBorrowerBlockCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for StaleReservationExpiryCommitment commitments. */
export class StaleReservationExpiryCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<StaleReservationExpiryCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a StaleReservationExpiryCommitment — the typed wrapper guarantees that since
    // `register` only accepts StaleReservationExpiryCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: StaleReservationExpiryCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: StaleReservationExpiryCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: StaleReservationExpiryCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: StaleReservationExpiryCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<StaleReservationExpiryCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<StaleReservationExpiryCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AccurateLateFeesCommitment commitments. */
export class AccurateLateFeesCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AccurateLateFeesCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AccurateLateFeesCommitment — the typed wrapper guarantees that since
    // `register` only accepts AccurateLateFeesCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AccurateLateFeesCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AccurateLateFeesCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AccurateLateFeesCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AccurateLateFeesCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AccurateLateFeesCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AccurateLateFeesCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for LibrarySystemVisionCommitment commitments. */
export class LibrarySystemVisionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<LibrarySystemVisionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a LibrarySystemVisionCommitment — the typed wrapper guarantees that since
    // `register` only accepts LibrarySystemVisionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: LibrarySystemVisionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: LibrarySystemVisionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: LibrarySystemVisionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: LibrarySystemVisionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<LibrarySystemVisionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<LibrarySystemVisionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

