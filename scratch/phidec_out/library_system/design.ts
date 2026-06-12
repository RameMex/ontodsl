// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for CopyLedger. Runtime: string. Compile-time: branded. */
export type CopyLedgerId = string & { readonly __brand: "CopyLedgerId" };
/** Identity type for LoanManager. Runtime: string. Compile-time: branded. */
export type LoanManagerId = string & { readonly __brand: "LoanManagerId" };
/** Identity type for ReservationManager. Runtime: string. Compile-time: branded. */
export type ReservationManagerId = string & { readonly __brand: "ReservationManagerId" };
/** Identity type for FeeManager. Runtime: string. Compile-time: branded. */
export type FeeManagerId = string & { readonly __brand: "FeeManagerId" };
/** Identity type for LoanIssuanceInterface. Runtime: string. Compile-time: branded. */
export type LoanIssuanceInterfaceId = string & { readonly __brand: "LoanIssuanceInterfaceId" };
/** Identity type for ReturnWithReservationInterface. Runtime: string. Compile-time: branded. */
export type ReturnWithReservationInterfaceId = string & { readonly __brand: "ReturnWithReservationInterfaceId" };
/** Identity type for LoanReturnFeeInterface. Runtime: string. Compile-time: branded. */
export type LoanReturnFeeInterfaceId = string & { readonly __brand: "LoanReturnFeeInterfaceId" };
/** Identity type for CheckOutFlow. Runtime: string. Compile-time: branded. */
export type CheckOutFlowId = string & { readonly __brand: "CheckOutFlowId" };
/** Identity type for ReturnNoReservationFlow. Runtime: string. Compile-time: branded. */
export type ReturnNoReservationFlowId = string & { readonly __brand: "ReturnNoReservationFlowId" };
/** Identity type for ReturnWithReservationFlow. Runtime: string. Compile-time: branded. */
export type ReturnWithReservationFlowId = string & { readonly __brand: "ReturnWithReservationFlowId" };
/** Identity type for ReservationExpiryFlow. Runtime: string. Compile-time: branded. */
export type ReservationExpiryFlowId = string & { readonly __brand: "ReservationExpiryFlowId" };
/** Identity type for PickUpReservationFlow. Runtime: string. Compile-time: branded. */
export type PickUpReservationFlowId = string & { readonly __brand: "PickUpReservationFlowId" };
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
/** Identity type for LibraryLendingSystem. Runtime: string. Compile-time: branded. */
export type LibraryLendingSystemId = string & { readonly __brand: "LibraryLendingSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Role>> */
export interface CopyLedgerEndpoint {
  readonly copyLedgerId: string;
}

/** @stereotype <<Role>> */
export interface CopyLedgerReservationEndpoint {
  readonly copyLedgerId: string;
}

/** @stereotype <<Role>> */
export interface LoanManagerEndpoint {
  readonly loanManagerId: string;
}

/** @stereotype <<Role>> */
export interface LoanManagerFeeEndpoint {
  readonly loanManagerId: string;
}

/** @stereotype <<Role>> */
export interface ReservationManagerEndpoint {
  readonly reservationManagerId: string;
}

/** @stereotype <<Role>> */
export interface FeeManagerEndpoint {
  readonly feeManagerId: string;
}

/** @stereotype <<Kind>> */
export interface CopyLedger {
  readonly copyLedgerId: CopyLedgerId;
  readonly copyId: string;
  readonly copyStatus: string;
}

/** @stereotype <<Kind>> */
export interface LoanManager {
  readonly loanManagerId: LoanManagerId;
  readonly activeLoanCount: number;
  readonly currentLoanId: string;
  readonly currentLoanDate: number;
  readonly currentDueDate: number;
  readonly currentReturnDate: number;
  readonly currentLoanReturned: boolean;
}

/** @stereotype <<Kind>> */
export interface ReservationManager {
  readonly reservationManagerId: ReservationManagerId;
  readonly currentReservationId: string;
  readonly reservationActive: boolean;
  readonly reservationAge: number;
  readonly maxHoldDays: number;
}

/** @stereotype <<Kind>> */
export interface FeeManager {
  readonly feeManagerId: FeeManagerId;
  readonly dailyLateRate: number;
  readonly outstandingBalance: number;
  readonly lastFeeCharged: number;
}

/** @stereotype <<Relator>> */
export interface LoanIssuanceInterface {
  readonly issuanceInterfaceId: LoanIssuanceInterfaceId;
  readonly loanDate: number;
  readonly dueDate: number;
  readonly copyId: string;
}

/** @stereotype <<Relator>> */
export interface ReturnWithReservationInterface {
  readonly returnReservationInterfaceId: ReturnWithReservationInterfaceId;
  readonly copyId: string;
  readonly returnDate: number;
}

/** @stereotype <<Relator>> */
export interface LoanReturnFeeInterface {
  readonly returnFeeInterfaceId: LoanReturnFeeInterfaceId;
  readonly returnDate: number;
  readonly dueDate: number;
  readonly dailyLateRate: number;
}

/** @stereotype <<Happening>> */
export interface CheckOutFlow {
  readonly flowId: CheckOutFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ReturnNoReservationFlow {
  readonly flowId: ReturnNoReservationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ReturnWithReservationFlow {
  readonly flowId: ReturnWithReservationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ReservationExpiryFlow {
  readonly flowId: ReservationExpiryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface PickUpReservationFlow {
  readonly flowId: PickUpReservationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

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

/** @stereotype <<Kind>> */
export interface LibraryLendingSystem extends MutuallyExclusiveCopyState, IndebtedBorrowerBlock, StaleReservationExpiry, AccurateLateFeesConstraint {
  readonly systemId: LibraryLendingSystemId;
  readonly systemName: string;
  readonly outstandingFeeThreshold: number;
  readonly maxReservationHoldDays: number;
  readonly dailyLateRate: number;
  readonly activeLoansCount: number;
  readonly currentCopyStatus: string;
  readonly currentBorrowerOutstandingFees: number;
  readonly currentReservationAge: number;
  readonly currentReservationCancelled: boolean;
  readonly lastFeeComputed: number;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly gdprControllerName: string;
  readonly legalBasisForProcessing: string;
  readonly dataRetentionPolicyDays: number;
}

/** @stereotype <<Category>> */
export interface Iso27001Compliant {
  readonly isoScope: string;
  readonly certificationBody: string;
}

/** @stereotype <<Category>> */
export interface LibraryAuditRetention {
  readonly minimumRetentionYears: number;
  readonly retentionPolicyRef: string;
}

/** @stereotype <<Category>> */
export interface PlausibleBookCopyState {
}

/** @stereotype <<Category>> */
export interface TemporallyConsistentLoan {
}

/** @stereotype <<Category>> */
export interface FinanciallyPlausibleFee {
}

/** @stereotype <<Category>> */
export interface PlausibleReservation {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly tag: string;
  readonly description: string;
  readonly rationaleSummary: string;
}

/** @stereotype <<Subkind>> */
export interface LibraryLendingSystemFormalized extends LibraryLendingSystem {
}


// ─── Factory functions ───

export function makeCopyLedger(data: {
  copyLedgerId: string;
  copyId: string;
  copyStatus: string;
}): CopyLedger {
  return {
    copyLedgerId: data.copyLedgerId as CopyLedgerId,
    copyId: data.copyId,
    copyStatus: data.copyStatus,
  };
}

export function makeLoanManager(data: {
  loanManagerId: string;
  activeLoanCount: number;
  currentLoanId: string;
  currentLoanDate: number;
  currentDueDate: number;
  currentReturnDate: number;
  currentLoanReturned: boolean;
}): LoanManager {
  return {
    loanManagerId: data.loanManagerId as LoanManagerId,
    activeLoanCount: data.activeLoanCount,
    currentLoanId: data.currentLoanId,
    currentLoanDate: data.currentLoanDate,
    currentDueDate: data.currentDueDate,
    currentReturnDate: data.currentReturnDate,
    currentLoanReturned: data.currentLoanReturned,
  };
}

export function makeReservationManager(data: {
  reservationManagerId: string;
  currentReservationId: string;
  reservationActive: boolean;
  reservationAge: number;
  maxHoldDays: number;
}): ReservationManager {
  return {
    reservationManagerId: data.reservationManagerId as ReservationManagerId,
    currentReservationId: data.currentReservationId,
    reservationActive: data.reservationActive,
    reservationAge: data.reservationAge,
    maxHoldDays: data.maxHoldDays,
  };
}

export function makeFeeManager(data: {
  feeManagerId: string;
  dailyLateRate: number;
  outstandingBalance: number;
  lastFeeCharged: number;
}): FeeManager {
  return {
    feeManagerId: data.feeManagerId as FeeManagerId,
    dailyLateRate: data.dailyLateRate,
    outstandingBalance: data.outstandingBalance,
    lastFeeCharged: data.lastFeeCharged,
  };
}

export function makeLoanIssuanceInterface(data: {
  issuanceInterfaceId: string;
  loanDate: number;
  dueDate: number;
  copyId: string;
}): LoanIssuanceInterface {
  return {
    issuanceInterfaceId: data.issuanceInterfaceId as LoanIssuanceInterfaceId,
    loanDate: data.loanDate,
    dueDate: data.dueDate,
    copyId: data.copyId,
  };
}

export function makeReturnWithReservationInterface(data: {
  returnReservationInterfaceId: string;
  copyId: string;
  returnDate: number;
}): ReturnWithReservationInterface {
  return {
    returnReservationInterfaceId: data.returnReservationInterfaceId as ReturnWithReservationInterfaceId,
    copyId: data.copyId,
    returnDate: data.returnDate,
  };
}

export function makeLoanReturnFeeInterface(data: {
  returnFeeInterfaceId: string;
  returnDate: number;
  dueDate: number;
  dailyLateRate: number;
}): LoanReturnFeeInterface {
  return {
    returnFeeInterfaceId: data.returnFeeInterfaceId as LoanReturnFeeInterfaceId,
    returnDate: data.returnDate,
    dueDate: data.dueDate,
    dailyLateRate: data.dailyLateRate,
  };
}

export function makeCheckOutFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): CheckOutFlow {
  return {
    flowId: data.flowId as CheckOutFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeReturnNoReservationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ReturnNoReservationFlow {
  return {
    flowId: data.flowId as ReturnNoReservationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeReturnWithReservationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ReturnWithReservationFlow {
  return {
    flowId: data.flowId as ReturnWithReservationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeReservationExpiryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ReservationExpiryFlow {
  return {
    flowId: data.flowId as ReservationExpiryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makePickUpReservationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): PickUpReservationFlow {
  return {
    flowId: data.flowId as PickUpReservationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

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

export function makeLibraryLendingSystem(data: {
  systemId: string;
  systemName: string;
  outstandingFeeThreshold: number;
  maxReservationHoldDays: number;
  dailyLateRate: number;
  activeLoansCount: number;
  currentCopyStatus: string;
  currentBorrowerOutstandingFees: number;
  currentReservationAge: number;
  currentReservationCancelled: boolean;
  lastFeeComputed: number;
}): LibraryLendingSystem {
  return {
    systemId: data.systemId as LibraryLendingSystemId,
    systemName: data.systemName,
    outstandingFeeThreshold: data.outstandingFeeThreshold,
    maxReservationHoldDays: data.maxReservationHoldDays,
    dailyLateRate: data.dailyLateRate,
    activeLoansCount: data.activeLoansCount,
    currentCopyStatus: data.currentCopyStatus,
    currentBorrowerOutstandingFees: data.currentBorrowerOutstandingFees,
    currentReservationAge: data.currentReservationAge,
    currentReservationCancelled: data.currentReservationCancelled,
    lastFeeComputed: data.lastFeeComputed,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  tag: string;
  description: string;
  rationaleSummary: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    tag: data.tag,
    description: data.description,
    rationaleSummary: data.rationaleSummary,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for CopyLedger. Returns empty array when valid. */
export function validateCopyLedger(instance: CopyLedger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.copyLedgerId !== null))) {
    violations.push("[CopyLedger] invariant violated: self.copyLedgerId <> null");
  }
  if (!((instance.copyId !== null))) {
    violations.push("[CopyLedger] invariant violated: self.copyId <> null");
  }
  if (!((instance.copyStatus !== null))) {
    violations.push("[CopyLedger] invariant violated: self.copyStatus <> null");
  }
  return violations;
}

/** Runtime invariant check for LoanManager. Returns empty array when valid. */
export function validateLoanManager(instance: LoanManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.loanManagerId !== null))) {
    violations.push("[LoanManager] invariant violated: self.loanManagerId <> null");
  }
  if (!((instance.activeLoanCount >= 0))) {
    violations.push("[LoanManager] invariant violated: self.activeLoanCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for ReservationManager. Returns empty array when valid. */
export function validateReservationManager(instance: ReservationManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reservationManagerId !== null))) {
    violations.push("[ReservationManager] invariant violated: self.reservationManagerId <> null");
  }
  if (!((instance.reservationAge >= 0))) {
    violations.push("[ReservationManager] invariant violated: self.reservationAge >= 0");
  }
  if (!((instance.maxHoldDays > 0))) {
    violations.push("[ReservationManager] invariant violated: self.maxHoldDays > 0");
  }
  return violations;
}

/** Runtime invariant check for FeeManager. Returns empty array when valid. */
export function validateFeeManager(instance: FeeManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.feeManagerId !== null))) {
    violations.push("[FeeManager] invariant violated: self.feeManagerId <> null");
  }
  if (!((instance.dailyLateRate > 0))) {
    violations.push("[FeeManager] invariant violated: self.dailyLateRate > 0.0");
  }
  if (!((instance.outstandingBalance >= 0))) {
    violations.push("[FeeManager] invariant violated: self.outstandingBalance >= 0.0");
  }
  if (!((instance.lastFeeCharged >= 0))) {
    violations.push("[FeeManager] invariant violated: self.lastFeeCharged >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for LoanIssuanceInterface. Returns empty array when valid. */
export function validateLoanIssuanceInterface(instance: LoanIssuanceInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.issuanceInterfaceId !== null))) {
    violations.push("[LoanIssuanceInterface] invariant violated: self.issuanceInterfaceId <> null");
  }
  if (!((instance.dueDate > instance.loanDate))) {
    violations.push("[LoanIssuanceInterface] invariant violated: self.dueDate > self.loanDate");
  }
  if (!((instance.copyId !== null))) {
    violations.push("[LoanIssuanceInterface] invariant violated: self.copyId <> null");
  }
  return violations;
}

/** Runtime invariant check for ReturnWithReservationInterface. Returns empty array when valid. */
export function validateReturnWithReservationInterface(instance: ReturnWithReservationInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.returnReservationInterfaceId !== null))) {
    violations.push("[ReturnWithReservationInterface] invariant violated: self.returnReservationInterfaceId <> null");
  }
  if (!((instance.copyId !== null))) {
    violations.push("[ReturnWithReservationInterface] invariant violated: self.copyId <> null");
  }
  if (!((instance.returnDate > 0))) {
    violations.push("[ReturnWithReservationInterface] invariant violated: self.returnDate > 0");
  }
  return violations;
}

/** Runtime invariant check for LoanReturnFeeInterface. Returns empty array when valid. */
export function validateLoanReturnFeeInterface(instance: LoanReturnFeeInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.returnFeeInterfaceId !== null))) {
    violations.push("[LoanReturnFeeInterface] invariant violated: self.returnFeeInterfaceId <> null");
  }
  if (!((instance.dailyLateRate > 0))) {
    violations.push("[LoanReturnFeeInterface] invariant violated: self.dailyLateRate > 0.0");
  }
  if (!((instance.returnDate > 0))) {
    violations.push("[LoanReturnFeeInterface] invariant violated: self.returnDate > 0");
  }
  if (!((instance.dueDate > 0))) {
    violations.push("[LoanReturnFeeInterface] invariant violated: self.dueDate > 0");
  }
  return violations;
}

/** Runtime invariant check for CheckOutFlow. Returns empty array when valid. */
export function validateCheckOutFlow(instance: CheckOutFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[CheckOutFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[CheckOutFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for ReturnNoReservationFlow. Returns empty array when valid. */
export function validateReturnNoReservationFlow(instance: ReturnNoReservationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ReturnNoReservationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[ReturnNoReservationFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for ReturnWithReservationFlow. Returns empty array when valid. */
export function validateReturnWithReservationFlow(instance: ReturnWithReservationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ReturnWithReservationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[ReturnWithReservationFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for ReservationExpiryFlow. Returns empty array when valid. */
export function validateReservationExpiryFlow(instance: ReservationExpiryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ReservationExpiryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[ReservationExpiryFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for PickUpReservationFlow. Returns empty array when valid. */
export function validatePickUpReservationFlow(instance: PickUpReservationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PickUpReservationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[PickUpReservationFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

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

/** Runtime invariant check for LibraryLendingSystem. Returns empty array when valid. */
export function validateLibraryLendingSystem(instance: LibraryLendingSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.systemName !== null))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.systemName <> null");
  }
  if (!((instance.outstandingFeeThreshold >= 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.outstandingFeeThreshold >= 0.0");
  }
  if (!((instance.maxReservationHoldDays > 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.maxReservationHoldDays > 0");
  }
  if (!((instance.dailyLateRate > 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.dailyLateRate > 0.0");
  }
  if (!((instance.activeLoansCount >= 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.activeLoansCount >= 0");
  }
  if (!((instance.currentBorrowerOutstandingFees >= 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.currentBorrowerOutstandingFees >= 0.0");
  }
  if (!((instance.currentReservationAge >= 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.currentReservationAge >= 0");
  }
  if (!((instance.lastFeeComputed >= 0))) {
    violations.push("[LibraryLendingSystem] invariant violated: self.lastFeeComputed >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gdprControllerName !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.gdprControllerName <> null");
  }
  if (!((instance.legalBasisForProcessing !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.legalBasisForProcessing <> null");
  }
  if (!((instance.dataRetentionPolicyDays > 0))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.dataRetentionPolicyDays > 0");
  }
  return violations;
}

/** Runtime invariant check for Iso27001Compliant. Returns empty array when valid. */
export function validateIso27001Compliant(instance: Iso27001Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.isoScope !== null))) {
    violations.push("[Iso27001Compliant] invariant violated: self.isoScope <> null");
  }
  return violations;
}

/** Runtime invariant check for LibraryAuditRetention. Returns empty array when valid. */
export function validateLibraryAuditRetention(instance: LibraryAuditRetention): readonly string[] {
  const violations: string[] = [];
  if (!((instance.minimumRetentionYears > 0))) {
    violations.push("[LibraryAuditRetention] invariant violated: self.minimumRetentionYears > 0");
  }
  if (!((instance.retentionPolicyRef !== null))) {
    violations.push("[LibraryAuditRetention] invariant violated: self.retentionPolicyRef <> null");
  }
  return violations;
}

/** Runtime invariant check for PlausibleBookCopyState. Returns empty array when valid. */
export function validatePlausibleBookCopyState(instance: PlausibleBookCopyState): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.copyId <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.status <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TemporallyConsistentLoan. Returns empty array when valid. */
export function validateTemporallyConsistentLoan(instance: TemporallyConsistentLoan): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.loanId <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.dueDate > bearer.loanDate — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FinanciallyPlausibleFee. Returns empty array when valid. */
export function validateFinanciallyPlausibleFee(instance: FinanciallyPlausibleFee): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.feeId <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.dailyRate > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.accruedAmount >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PlausibleReservation. Returns empty array when valid. */
export function validatePlausibleReservation(instance: PlausibleReservation): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.reservationId <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.expiryDays > 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.tag !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.tag <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for CopyLedger.transitionToLoaned. User supplies this. */
export type CopyLedgerTransitionToLoanedImpl = (self: CopyLedger) => { self: CopyLedger; modified: { copyStatus: unknown } };

/** Contract-checking wrapper for CopyLedger.transitionToLoaned. */
export function wrapCopyLedgerTransitionToLoaned(impl: CopyLedgerTransitionToLoanedImpl): (self: CopyLedger) => CopyLedger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "AVAILABLE"))) {
      preViolations.push("[CopyLedger.transitionToLoaned] pre violated: self.copyStatus = 'AVAILABLE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "LOANED"))) {
        postViolations.push("[CopyLedger.transitionToLoaned] post violated: self.copyStatus = 'LOANED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToLoaned (async). User supplies this. */
export type CopyLedgerTransitionToLoanedAsyncImpl = (self: CopyLedger) => Promise<{ self: CopyLedger; modified: { copyStatus: unknown } }>;

/** Contract-checking wrapper for CopyLedger.transitionToLoaned (async). */
export function wrapCopyLedgerTransitionToLoanedAsync(impl: CopyLedgerTransitionToLoanedAsyncImpl): (self: CopyLedger) => Promise<CopyLedger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "AVAILABLE"))) {
      preViolations.push("[CopyLedger.transitionToLoaned] pre violated: self.copyStatus = 'AVAILABLE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "LOANED"))) {
        postViolations.push("[CopyLedger.transitionToLoaned] post violated: self.copyStatus = 'LOANED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToLoanedFromReserved. User supplies this. */
export type CopyLedgerTransitionToLoanedFromReservedImpl = (self: CopyLedger) => { self: CopyLedger; modified: { copyStatus: unknown } };

/** Contract-checking wrapper for CopyLedger.transitionToLoanedFromReserved. */
export function wrapCopyLedgerTransitionToLoanedFromReserved(impl: CopyLedgerTransitionToLoanedFromReservedImpl): (self: CopyLedger) => CopyLedger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "RESERVED"))) {
      preViolations.push("[CopyLedger.transitionToLoanedFromReserved] pre violated: self.copyStatus = 'RESERVED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "LOANED"))) {
        postViolations.push("[CopyLedger.transitionToLoanedFromReserved] post violated: self.copyStatus = 'LOANED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToLoanedFromReserved (async). User supplies this. */
export type CopyLedgerTransitionToLoanedFromReservedAsyncImpl = (self: CopyLedger) => Promise<{ self: CopyLedger; modified: { copyStatus: unknown } }>;

/** Contract-checking wrapper for CopyLedger.transitionToLoanedFromReserved (async). */
export function wrapCopyLedgerTransitionToLoanedFromReservedAsync(impl: CopyLedgerTransitionToLoanedFromReservedAsyncImpl): (self: CopyLedger) => Promise<CopyLedger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "RESERVED"))) {
      preViolations.push("[CopyLedger.transitionToLoanedFromReserved] pre violated: self.copyStatus = 'RESERVED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "LOANED"))) {
        postViolations.push("[CopyLedger.transitionToLoanedFromReserved] post violated: self.copyStatus = 'LOANED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToAvailable. User supplies this. */
export type CopyLedgerTransitionToAvailableImpl = (self: CopyLedger) => { self: CopyLedger; modified: { copyStatus: unknown } };

/** Contract-checking wrapper for CopyLedger.transitionToAvailable. */
export function wrapCopyLedgerTransitionToAvailable(impl: CopyLedgerTransitionToAvailableImpl): (self: CopyLedger) => CopyLedger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "LOANED"))) {
      preViolations.push("[CopyLedger.transitionToAvailable] pre violated: self.copyStatus = 'LOANED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "AVAILABLE"))) {
        postViolations.push("[CopyLedger.transitionToAvailable] post violated: self.copyStatus = 'AVAILABLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToAvailable (async). User supplies this. */
export type CopyLedgerTransitionToAvailableAsyncImpl = (self: CopyLedger) => Promise<{ self: CopyLedger; modified: { copyStatus: unknown } }>;

/** Contract-checking wrapper for CopyLedger.transitionToAvailable (async). */
export function wrapCopyLedgerTransitionToAvailableAsync(impl: CopyLedgerTransitionToAvailableAsyncImpl): (self: CopyLedger) => Promise<CopyLedger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "LOANED"))) {
      preViolations.push("[CopyLedger.transitionToAvailable] pre violated: self.copyStatus = 'LOANED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "AVAILABLE"))) {
        postViolations.push("[CopyLedger.transitionToAvailable] post violated: self.copyStatus = 'AVAILABLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToAvailableFromReserved. User supplies this. */
export type CopyLedgerTransitionToAvailableFromReservedImpl = (self: CopyLedger) => { self: CopyLedger; modified: { copyStatus: unknown } };

/** Contract-checking wrapper for CopyLedger.transitionToAvailableFromReserved. */
export function wrapCopyLedgerTransitionToAvailableFromReserved(impl: CopyLedgerTransitionToAvailableFromReservedImpl): (self: CopyLedger) => CopyLedger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "RESERVED"))) {
      preViolations.push("[CopyLedger.transitionToAvailableFromReserved] pre violated: self.copyStatus = 'RESERVED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "AVAILABLE"))) {
        postViolations.push("[CopyLedger.transitionToAvailableFromReserved] post violated: self.copyStatus = 'AVAILABLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToAvailableFromReserved (async). User supplies this. */
export type CopyLedgerTransitionToAvailableFromReservedAsyncImpl = (self: CopyLedger) => Promise<{ self: CopyLedger; modified: { copyStatus: unknown } }>;

/** Contract-checking wrapper for CopyLedger.transitionToAvailableFromReserved (async). */
export function wrapCopyLedgerTransitionToAvailableFromReservedAsync(impl: CopyLedgerTransitionToAvailableFromReservedAsyncImpl): (self: CopyLedger) => Promise<CopyLedger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "RESERVED"))) {
      preViolations.push("[CopyLedger.transitionToAvailableFromReserved] pre violated: self.copyStatus = 'RESERVED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "AVAILABLE"))) {
        postViolations.push("[CopyLedger.transitionToAvailableFromReserved] post violated: self.copyStatus = 'AVAILABLE'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToReserved. User supplies this. */
export type CopyLedgerTransitionToReservedImpl = (self: CopyLedger) => { self: CopyLedger; modified: { copyStatus: unknown } };

/** Contract-checking wrapper for CopyLedger.transitionToReserved. */
export function wrapCopyLedgerTransitionToReserved(impl: CopyLedgerTransitionToReservedImpl): (self: CopyLedger) => CopyLedger {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "LOANED"))) {
      preViolations.push("[CopyLedger.transitionToReserved] pre violated: self.copyStatus = 'LOANED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "RESERVED"))) {
        postViolations.push("[CopyLedger.transitionToReserved] post violated: self.copyStatus = 'RESERVED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyLedger.transitionToReserved (async). User supplies this. */
export type CopyLedgerTransitionToReservedAsyncImpl = (self: CopyLedger) => Promise<{ self: CopyLedger; modified: { copyStatus: unknown } }>;

/** Contract-checking wrapper for CopyLedger.transitionToReserved (async). */
export function wrapCopyLedgerTransitionToReservedAsync(impl: CopyLedgerTransitionToReservedAsyncImpl): (self: CopyLedger) => Promise<CopyLedger> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.copyStatus === "LOANED"))) {
      preViolations.push("[CopyLedger.transitionToReserved] pre violated: self.copyStatus = 'LOANED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.copyStatus === "RESERVED"))) {
        postViolations.push("[CopyLedger.transitionToReserved] post violated: self.copyStatus = 'RESERVED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanManager.openLoan. User supplies this. */
export type LoanManagerOpenLoanImpl = (self: LoanManager, loanDate: number, dueDate: number) => { self: LoanManager; modified: { activeLoanCount: unknown; currentLoanDate: unknown; currentDueDate: unknown; currentLoanReturned: unknown } };

/** Contract-checking wrapper for LoanManager.openLoan. */
export function wrapLoanManagerOpenLoan(impl: LoanManagerOpenLoanImpl): (self: LoanManager, loanDate: number, dueDate: number) => LoanManager {
  return (self, loanDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((dueDate > loanDate))) {
      preViolations.push("[LoanManager.openLoan] pre violated: dueDate > loanDate");
    }
    if (!((self.activeLoanCount >= 0))) {
      preViolations.push("[LoanManager.openLoan] pre violated: self.activeLoanCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoanCount": self.activeLoanCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, loanDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.activeLoanCount === (__pre["self.activeLoanCount"] + 1)))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.activeLoanCount = self.activeLoanCount@pre + 1");
      }
      if (!((__result.self.currentLoanDate === loanDate))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.currentLoanDate = loanDate");
      }
      if (!((__result.self.currentDueDate === dueDate))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.currentDueDate = dueDate");
      }
      if (!((__result.self.currentLoanReturned === false))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.currentLoanReturned = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanManager.openLoan (async). User supplies this. */
export type LoanManagerOpenLoanAsyncImpl = (self: LoanManager, loanDate: number, dueDate: number) => Promise<{ self: LoanManager; modified: { activeLoanCount: unknown; currentLoanDate: unknown; currentDueDate: unknown; currentLoanReturned: unknown } }>;

/** Contract-checking wrapper for LoanManager.openLoan (async). */
export function wrapLoanManagerOpenLoanAsync(impl: LoanManagerOpenLoanAsyncImpl): (self: LoanManager, loanDate: number, dueDate: number) => Promise<LoanManager> {
  return async (self, loanDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((dueDate > loanDate))) {
      preViolations.push("[LoanManager.openLoan] pre violated: dueDate > loanDate");
    }
    if (!((self.activeLoanCount >= 0))) {
      preViolations.push("[LoanManager.openLoan] pre violated: self.activeLoanCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoanCount": self.activeLoanCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, loanDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.activeLoanCount === (__pre["self.activeLoanCount"] + 1)))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.activeLoanCount = self.activeLoanCount@pre + 1");
      }
      if (!((__result.self.currentLoanDate === loanDate))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.currentLoanDate = loanDate");
      }
      if (!((__result.self.currentDueDate === dueDate))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.currentDueDate = dueDate");
      }
      if (!((__result.self.currentLoanReturned === false))) {
        postViolations.push("[LoanManager.openLoan] post violated: self.currentLoanReturned = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanManager.closeLoan. User supplies this. */
export type LoanManagerCloseLoanImpl = (self: LoanManager, returnDate: number) => { self: LoanManager; modified: { currentReturnDate: unknown; currentLoanReturned: unknown; activeLoanCount: unknown } };

/** Contract-checking wrapper for LoanManager.closeLoan. */
export function wrapLoanManagerCloseLoan(impl: LoanManagerCloseLoanImpl): (self: LoanManager, returnDate: number) => LoanManager {
  return (self, returnDate) => {
    const preViolations: string[] = [];
    if (!((self.currentLoanReturned === false))) {
      preViolations.push("[LoanManager.closeLoan] pre violated: self.currentLoanReturned = false");
    }
    if (!((self.activeLoanCount > 0))) {
      preViolations.push("[LoanManager.closeLoan] pre violated: self.activeLoanCount > 0");
    }
    if (!((returnDate > 0))) {
      preViolations.push("[LoanManager.closeLoan] pre violated: returnDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoanCount": self.activeLoanCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, returnDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentReturnDate === returnDate))) {
        postViolations.push("[LoanManager.closeLoan] post violated: self.currentReturnDate = returnDate");
      }
      if (!((__result.self.currentLoanReturned === true))) {
        postViolations.push("[LoanManager.closeLoan] post violated: self.currentLoanReturned = true");
      }
      if (!((__result.self.activeLoanCount === (__pre["self.activeLoanCount"] - 1)))) {
        postViolations.push("[LoanManager.closeLoan] post violated: self.activeLoanCount = self.activeLoanCount@pre - 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanManager.closeLoan (async). User supplies this. */
export type LoanManagerCloseLoanAsyncImpl = (self: LoanManager, returnDate: number) => Promise<{ self: LoanManager; modified: { currentReturnDate: unknown; currentLoanReturned: unknown; activeLoanCount: unknown } }>;

/** Contract-checking wrapper for LoanManager.closeLoan (async). */
export function wrapLoanManagerCloseLoanAsync(impl: LoanManagerCloseLoanAsyncImpl): (self: LoanManager, returnDate: number) => Promise<LoanManager> {
  return async (self, returnDate) => {
    const preViolations: string[] = [];
    if (!((self.currentLoanReturned === false))) {
      preViolations.push("[LoanManager.closeLoan] pre violated: self.currentLoanReturned = false");
    }
    if (!((self.activeLoanCount > 0))) {
      preViolations.push("[LoanManager.closeLoan] pre violated: self.activeLoanCount > 0");
    }
    if (!((returnDate > 0))) {
      preViolations.push("[LoanManager.closeLoan] pre violated: returnDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoanCount": self.activeLoanCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, returnDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentReturnDate === returnDate))) {
        postViolations.push("[LoanManager.closeLoan] post violated: self.currentReturnDate = returnDate");
      }
      if (!((__result.self.currentLoanReturned === true))) {
        postViolations.push("[LoanManager.closeLoan] post violated: self.currentLoanReturned = true");
      }
      if (!((__result.self.activeLoanCount === (__pre["self.activeLoanCount"] - 1)))) {
        postViolations.push("[LoanManager.closeLoan] post violated: self.activeLoanCount = self.activeLoanCount@pre - 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.createReservation. User supplies this. */
export type ReservationManagerCreateReservationImpl = (self: ReservationManager) => { self: ReservationManager; modified: { reservationActive: unknown; reservationAge: unknown } };

/** Contract-checking wrapper for ReservationManager.createReservation. */
export function wrapReservationManagerCreateReservation(impl: ReservationManagerCreateReservationImpl): (self: ReservationManager) => ReservationManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === false))) {
      preViolations.push("[ReservationManager.createReservation] pre violated: self.reservationActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationActive === true))) {
        postViolations.push("[ReservationManager.createReservation] post violated: self.reservationActive = true");
      }
      if (!((__result.self.reservationAge === 0))) {
        postViolations.push("[ReservationManager.createReservation] post violated: self.reservationAge = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.createReservation (async). User supplies this. */
export type ReservationManagerCreateReservationAsyncImpl = (self: ReservationManager) => Promise<{ self: ReservationManager; modified: { reservationActive: unknown; reservationAge: unknown } }>;

/** Contract-checking wrapper for ReservationManager.createReservation (async). */
export function wrapReservationManagerCreateReservationAsync(impl: ReservationManagerCreateReservationAsyncImpl): (self: ReservationManager) => Promise<ReservationManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === false))) {
      preViolations.push("[ReservationManager.createReservation] pre violated: self.reservationActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationActive === true))) {
        postViolations.push("[ReservationManager.createReservation] post violated: self.reservationActive = true");
      }
      if (!((__result.self.reservationAge === 0))) {
        postViolations.push("[ReservationManager.createReservation] post violated: self.reservationAge = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.activateReservationOnReturn. User supplies this. */
export type ReservationManagerActivateReservationOnReturnImpl = (self: ReservationManager) => { self: ReservationManager; modified: { reservationAge: unknown } };

/** Contract-checking wrapper for ReservationManager.activateReservationOnReturn. */
export function wrapReservationManagerActivateReservationOnReturn(impl: ReservationManagerActivateReservationOnReturnImpl): (self: ReservationManager) => ReservationManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === true))) {
      preViolations.push("[ReservationManager.activateReservationOnReturn] pre violated: self.reservationActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationAge === 0))) {
        postViolations.push("[ReservationManager.activateReservationOnReturn] post violated: self.reservationAge = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.activateReservationOnReturn (async). User supplies this. */
export type ReservationManagerActivateReservationOnReturnAsyncImpl = (self: ReservationManager) => Promise<{ self: ReservationManager; modified: { reservationAge: unknown } }>;

/** Contract-checking wrapper for ReservationManager.activateReservationOnReturn (async). */
export function wrapReservationManagerActivateReservationOnReturnAsync(impl: ReservationManagerActivateReservationOnReturnAsyncImpl): (self: ReservationManager) => Promise<ReservationManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === true))) {
      preViolations.push("[ReservationManager.activateReservationOnReturn] pre violated: self.reservationActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationAge === 0))) {
        postViolations.push("[ReservationManager.activateReservationOnReturn] post violated: self.reservationAge = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.expireReservation. User supplies this. */
export type ReservationManagerExpireReservationImpl = (self: ReservationManager) => { self: ReservationManager; modified: { reservationActive: unknown } };

/** Contract-checking wrapper for ReservationManager.expireReservation. */
export function wrapReservationManagerExpireReservation(impl: ReservationManagerExpireReservationImpl): (self: ReservationManager) => ReservationManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === true))) {
      preViolations.push("[ReservationManager.expireReservation] pre violated: self.reservationActive = true");
    }
    if (!((self.reservationAge > self.maxHoldDays))) {
      preViolations.push("[ReservationManager.expireReservation] pre violated: self.reservationAge > self.maxHoldDays");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationActive === false))) {
        postViolations.push("[ReservationManager.expireReservation] post violated: self.reservationActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.expireReservation (async). User supplies this. */
export type ReservationManagerExpireReservationAsyncImpl = (self: ReservationManager) => Promise<{ self: ReservationManager; modified: { reservationActive: unknown } }>;

/** Contract-checking wrapper for ReservationManager.expireReservation (async). */
export function wrapReservationManagerExpireReservationAsync(impl: ReservationManagerExpireReservationAsyncImpl): (self: ReservationManager) => Promise<ReservationManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === true))) {
      preViolations.push("[ReservationManager.expireReservation] pre violated: self.reservationActive = true");
    }
    if (!((self.reservationAge > self.maxHoldDays))) {
      preViolations.push("[ReservationManager.expireReservation] pre violated: self.reservationAge > self.maxHoldDays");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationActive === false))) {
        postViolations.push("[ReservationManager.expireReservation] post violated: self.reservationActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.consumeReservation. User supplies this. */
export type ReservationManagerConsumeReservationImpl = (self: ReservationManager) => { self: ReservationManager; modified: { reservationActive: unknown } };

/** Contract-checking wrapper for ReservationManager.consumeReservation. */
export function wrapReservationManagerConsumeReservation(impl: ReservationManagerConsumeReservationImpl): (self: ReservationManager) => ReservationManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === true))) {
      preViolations.push("[ReservationManager.consumeReservation] pre violated: self.reservationActive = true");
    }
    if (!((self.reservationAge <= self.maxHoldDays))) {
      preViolations.push("[ReservationManager.consumeReservation] pre violated: self.reservationAge <= self.maxHoldDays");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationActive === false))) {
        postViolations.push("[ReservationManager.consumeReservation] post violated: self.reservationActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.consumeReservation (async). User supplies this. */
export type ReservationManagerConsumeReservationAsyncImpl = (self: ReservationManager) => Promise<{ self: ReservationManager; modified: { reservationActive: unknown } }>;

/** Contract-checking wrapper for ReservationManager.consumeReservation (async). */
export function wrapReservationManagerConsumeReservationAsync(impl: ReservationManagerConsumeReservationAsyncImpl): (self: ReservationManager) => Promise<ReservationManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reservationActive === true))) {
      preViolations.push("[ReservationManager.consumeReservation] pre violated: self.reservationActive = true");
    }
    if (!((self.reservationAge <= self.maxHoldDays))) {
      preViolations.push("[ReservationManager.consumeReservation] pre violated: self.reservationAge <= self.maxHoldDays");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservationActive === false))) {
        postViolations.push("[ReservationManager.consumeReservation] post violated: self.reservationActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.applyLateFee. User supplies this. */
export type FeeManagerApplyLateFeeImpl = (self: FeeManager, returnDate: number, dueDate: number) => { self: FeeManager; modified: { lastFeeCharged: unknown; outstandingBalance: unknown } };

/** Contract-checking wrapper for FeeManager.applyLateFee. */
export function wrapFeeManagerApplyLateFee(impl: FeeManagerApplyLateFeeImpl): (self: FeeManager, returnDate: number, dueDate: number) => FeeManager {
  return (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((returnDate > dueDate))) {
      preViolations.push("[FeeManager.applyLateFee] pre violated: returnDate > dueDate");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[FeeManager.applyLateFee] pre violated: dueDate > 0");
    }
    if (!((self.dailyLateRate > 0))) {
      preViolations.push("[FeeManager.applyLateFee] pre violated: self.dailyLateRate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.outstandingBalance": self.outstandingBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.lastFeeCharged === ((returnDate - dueDate) * __result.self.dailyLateRate)))) {
        postViolations.push("[FeeManager.applyLateFee] post violated: self.lastFeeCharged = (returnDate - dueDate) * self.dailyLateRate");
      }
      if (!((__result.self.outstandingBalance === (__pre["self.outstandingBalance"] + __result.self.lastFeeCharged)))) {
        postViolations.push("[FeeManager.applyLateFee] post violated: self.outstandingBalance = self.outstandingBalance@pre + self.lastFeeCharged");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.applyLateFee (async). User supplies this. */
export type FeeManagerApplyLateFeeAsyncImpl = (self: FeeManager, returnDate: number, dueDate: number) => Promise<{ self: FeeManager; modified: { lastFeeCharged: unknown; outstandingBalance: unknown } }>;

/** Contract-checking wrapper for FeeManager.applyLateFee (async). */
export function wrapFeeManagerApplyLateFeeAsync(impl: FeeManagerApplyLateFeeAsyncImpl): (self: FeeManager, returnDate: number, dueDate: number) => Promise<FeeManager> {
  return async (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((returnDate > dueDate))) {
      preViolations.push("[FeeManager.applyLateFee] pre violated: returnDate > dueDate");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[FeeManager.applyLateFee] pre violated: dueDate > 0");
    }
    if (!((self.dailyLateRate > 0))) {
      preViolations.push("[FeeManager.applyLateFee] pre violated: self.dailyLateRate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.outstandingBalance": self.outstandingBalance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.lastFeeCharged === ((returnDate - dueDate) * __result.self.dailyLateRate)))) {
        postViolations.push("[FeeManager.applyLateFee] post violated: self.lastFeeCharged = (returnDate - dueDate) * self.dailyLateRate");
      }
      if (!((__result.self.outstandingBalance === (__pre["self.outstandingBalance"] + __result.self.lastFeeCharged)))) {
        postViolations.push("[FeeManager.applyLateFee] post violated: self.outstandingBalance = self.outstandingBalance@pre + self.lastFeeCharged");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.applyNoFee. User supplies this. */
export type FeeManagerApplyNoFeeImpl = (self: FeeManager) => { self: FeeManager; modified: { lastFeeCharged: unknown } };

/** Contract-checking wrapper for FeeManager.applyNoFee. */
export function wrapFeeManagerApplyNoFee(impl: FeeManagerApplyNoFeeImpl): (self: FeeManager) => FeeManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.dailyLateRate > 0))) {
      preViolations.push("[FeeManager.applyNoFee] pre violated: self.dailyLateRate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastFeeCharged === 0))) {
        postViolations.push("[FeeManager.applyNoFee] post violated: self.lastFeeCharged = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.applyNoFee (async). User supplies this. */
export type FeeManagerApplyNoFeeAsyncImpl = (self: FeeManager) => Promise<{ self: FeeManager; modified: { lastFeeCharged: unknown } }>;

/** Contract-checking wrapper for FeeManager.applyNoFee (async). */
export function wrapFeeManagerApplyNoFeeAsync(impl: FeeManagerApplyNoFeeAsyncImpl): (self: FeeManager) => Promise<FeeManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.dailyLateRate > 0))) {
      preViolations.push("[FeeManager.applyNoFee] pre violated: self.dailyLateRate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastFeeCharged === 0))) {
        postViolations.push("[FeeManager.applyNoFee] post violated: self.lastFeeCharged = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.settleBalance. User supplies this. */
export type FeeManagerSettleBalanceImpl = (self: FeeManager, amount: number) => { self: FeeManager; modified: { outstandingBalance: unknown } };

/** Contract-checking wrapper for FeeManager.settleBalance. */
export function wrapFeeManagerSettleBalance(impl: FeeManagerSettleBalanceImpl): (self: FeeManager, amount: number) => FeeManager {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[FeeManager.settleBalance] pre violated: amount > 0.0");
    }
    if (!((amount >= self.outstandingBalance))) {
      preViolations.push("[FeeManager.settleBalance] pre violated: amount >= self.outstandingBalance");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.outstandingBalance === 0))) {
        postViolations.push("[FeeManager.settleBalance] post violated: self.outstandingBalance = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.settleBalance (async). User supplies this. */
export type FeeManagerSettleBalanceAsyncImpl = (self: FeeManager, amount: number) => Promise<{ self: FeeManager; modified: { outstandingBalance: unknown } }>;

/** Contract-checking wrapper for FeeManager.settleBalance (async). */
export function wrapFeeManagerSettleBalanceAsync(impl: FeeManagerSettleBalanceAsyncImpl): (self: FeeManager, amount: number) => Promise<FeeManager> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[FeeManager.settleBalance] pre violated: amount > 0.0");
    }
    if (!((amount >= self.outstandingBalance))) {
      preViolations.push("[FeeManager.settleBalance] pre violated: amount >= self.outstandingBalance");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.outstandingBalance === 0))) {
        postViolations.push("[FeeManager.settleBalance] post violated: self.outstandingBalance = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.rejectDueToOutstandingFees. User supplies this. */
export type FeeManagerRejectDueToOutstandingFeesImpl = (self: FeeManager) => { self: FeeManager; modified: {} };

/** Contract-checking wrapper for FeeManager.rejectDueToOutstandingFees. */
export function wrapFeeManagerRejectDueToOutstandingFees(impl: FeeManagerRejectDueToOutstandingFeesImpl): (self: FeeManager) => FeeManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.outstandingBalance > 0))) {
      preViolations.push("[FeeManager.rejectDueToOutstandingFees] pre violated: self.outstandingBalance > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.outstandingBalance > 0))) {
        postViolations.push("[FeeManager.rejectDueToOutstandingFees] post violated: self.outstandingBalance > 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FeeManager.rejectDueToOutstandingFees (async). User supplies this. */
export type FeeManagerRejectDueToOutstandingFeesAsyncImpl = (self: FeeManager) => Promise<{ self: FeeManager; modified: {} }>;

/** Contract-checking wrapper for FeeManager.rejectDueToOutstandingFees (async). */
export function wrapFeeManagerRejectDueToOutstandingFeesAsync(impl: FeeManagerRejectDueToOutstandingFeesAsyncImpl): (self: FeeManager) => Promise<FeeManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.outstandingBalance > 0))) {
      preViolations.push("[FeeManager.rejectDueToOutstandingFees] pre violated: self.outstandingBalance > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.outstandingBalance > 0))) {
        postViolations.push("[FeeManager.rejectDueToOutstandingFees] post violated: self.outstandingBalance > 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.checkOutCopy. User supplies this. */
export type LibraryLendingSystemCheckOutCopyImpl = (self: LibraryLendingSystem, dueDate: number, loanDate: number) => { self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.checkOutCopy. */
export function wrapLibraryLendingSystemCheckOutCopy(impl: LibraryLendingSystemCheckOutCopyImpl): (self: LibraryLendingSystem, dueDate: number, loanDate: number) => LibraryLendingSystem {
  return (self, dueDate, loanDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "AVAILABLE"))) {
      preViolations.push("[LibraryLendingSystem.checkOutCopy] pre violated: self.currentCopyStatus = 'AVAILABLE'");
    }
    if (!((self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.checkOutCopy] pre violated: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold");
    }
    if (!((dueDate > loanDate))) {
      preViolations.push("[LibraryLendingSystem.checkOutCopy] pre violated: dueDate > loanDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dueDate, loanDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystem.checkOutCopy] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] + 1)))) {
        postViolations.push("[LibraryLendingSystem.checkOutCopy] post violated: self.activeLoansCount = self.activeLoansCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.checkOutCopy (async). User supplies this. */
export type LibraryLendingSystemCheckOutCopyAsyncImpl = (self: LibraryLendingSystem, dueDate: number, loanDate: number) => Promise<{ self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.checkOutCopy (async). */
export function wrapLibraryLendingSystemCheckOutCopyAsync(impl: LibraryLendingSystemCheckOutCopyAsyncImpl): (self: LibraryLendingSystem, dueDate: number, loanDate: number) => Promise<LibraryLendingSystem> {
  return async (self, dueDate, loanDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "AVAILABLE"))) {
      preViolations.push("[LibraryLendingSystem.checkOutCopy] pre violated: self.currentCopyStatus = 'AVAILABLE'");
    }
    if (!((self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.checkOutCopy] pre violated: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold");
    }
    if (!((dueDate > loanDate))) {
      preViolations.push("[LibraryLendingSystem.checkOutCopy] pre violated: dueDate > loanDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dueDate, loanDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystem.checkOutCopy] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] + 1)))) {
        postViolations.push("[LibraryLendingSystem.checkOutCopy] post violated: self.activeLoansCount = self.activeLoansCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.returnLoan. User supplies this. */
export type LibraryLendingSystemReturnLoanImpl = (self: LibraryLendingSystem, returnDate: number, dueDate: number) => { self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown; lastFeeComputed: unknown; currentBorrowerOutstandingFees: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.returnLoan. */
export function wrapLibraryLendingSystemReturnLoan(impl: LibraryLendingSystemReturnLoanImpl): (self: LibraryLendingSystem, returnDate: number, dueDate: number) => LibraryLendingSystem {
  return (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystem.returnLoan] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((returnDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoan] pre violated: returnDate > 0");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoan] pre violated: dueDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
      "self.currentBorrowerOutstandingFees": self.currentBorrowerOutstandingFees,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "AVAILABLE"))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.currentCopyStatus = 'AVAILABLE'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] - 1)))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.activeLoansCount = self.activeLoansCount@pre - 1");
      }
      if (!((__result.self.lastFeeComputed === (((returnDate > dueDate)) ? (((returnDate - dueDate) * __result.self.dailyLateRate)) : (0))))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.lastFeeComputed =\n            (if returnDate > dueDate\n             then (returnDate - dueDate) * self.dailyLateRate\n             else 0.0\n             endif)");
      }
      if (!((__result.self.currentBorrowerOutstandingFees === (__pre["self.currentBorrowerOutstandingFees"] + __result.self.lastFeeComputed)))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.currentBorrowerOutstandingFees =\n            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.returnLoan (async). User supplies this. */
export type LibraryLendingSystemReturnLoanAsyncImpl = (self: LibraryLendingSystem, returnDate: number, dueDate: number) => Promise<{ self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown; lastFeeComputed: unknown; currentBorrowerOutstandingFees: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.returnLoan (async). */
export function wrapLibraryLendingSystemReturnLoanAsync(impl: LibraryLendingSystemReturnLoanAsyncImpl): (self: LibraryLendingSystem, returnDate: number, dueDate: number) => Promise<LibraryLendingSystem> {
  return async (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystem.returnLoan] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((returnDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoan] pre violated: returnDate > 0");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoan] pre violated: dueDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
      "self.currentBorrowerOutstandingFees": self.currentBorrowerOutstandingFees,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "AVAILABLE"))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.currentCopyStatus = 'AVAILABLE'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] - 1)))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.activeLoansCount = self.activeLoansCount@pre - 1");
      }
      if (!((__result.self.lastFeeComputed === (((returnDate > dueDate)) ? (((returnDate - dueDate) * __result.self.dailyLateRate)) : (0))))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.lastFeeComputed =\n            (if returnDate > dueDate\n             then (returnDate - dueDate) * self.dailyLateRate\n             else 0.0\n             endif)");
      }
      if (!((__result.self.currentBorrowerOutstandingFees === (__pre["self.currentBorrowerOutstandingFees"] + __result.self.lastFeeComputed)))) {
        postViolations.push("[LibraryLendingSystem.returnLoan] post violated: self.currentBorrowerOutstandingFees =\n            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.returnLoanWithReservation. User supplies this. */
export type LibraryLendingSystemReturnLoanWithReservationImpl = (self: LibraryLendingSystem, returnDate: number, dueDate: number) => { self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown; currentReservationAge: unknown; currentReservationCancelled: unknown; lastFeeComputed: unknown; currentBorrowerOutstandingFees: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.returnLoanWithReservation. */
export function wrapLibraryLendingSystemReturnLoanWithReservation(impl: LibraryLendingSystemReturnLoanWithReservationImpl): (self: LibraryLendingSystem, returnDate: number, dueDate: number) => LibraryLendingSystem {
  return (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystem.returnLoanWithReservation] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((returnDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoanWithReservation] pre violated: returnDate > 0");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoanWithReservation] pre violated: dueDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
      "self.currentBorrowerOutstandingFees": self.currentBorrowerOutstandingFees,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "RESERVED"))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentCopyStatus = 'RESERVED'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] - 1)))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.activeLoansCount = self.activeLoansCount@pre - 1");
      }
      if (!((__result.self.currentReservationAge === 0))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentReservationAge = 0");
      }
      if (!((__result.self.currentReservationCancelled === false))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentReservationCancelled = false");
      }
      if (!((__result.self.lastFeeComputed === (((returnDate > dueDate)) ? (((returnDate - dueDate) * __result.self.dailyLateRate)) : (0))))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.lastFeeComputed =\n            (if returnDate > dueDate\n             then (returnDate - dueDate) * self.dailyLateRate\n             else 0.0\n             endif)");
      }
      if (!((__result.self.currentBorrowerOutstandingFees === (__pre["self.currentBorrowerOutstandingFees"] + __result.self.lastFeeComputed)))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentBorrowerOutstandingFees =\n            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.returnLoanWithReservation (async). User supplies this. */
export type LibraryLendingSystemReturnLoanWithReservationAsyncImpl = (self: LibraryLendingSystem, returnDate: number, dueDate: number) => Promise<{ self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown; currentReservationAge: unknown; currentReservationCancelled: unknown; lastFeeComputed: unknown; currentBorrowerOutstandingFees: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.returnLoanWithReservation (async). */
export function wrapLibraryLendingSystemReturnLoanWithReservationAsync(impl: LibraryLendingSystemReturnLoanWithReservationAsyncImpl): (self: LibraryLendingSystem, returnDate: number, dueDate: number) => Promise<LibraryLendingSystem> {
  return async (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystem.returnLoanWithReservation] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((returnDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoanWithReservation] pre violated: returnDate > 0");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[LibraryLendingSystem.returnLoanWithReservation] pre violated: dueDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
      "self.currentBorrowerOutstandingFees": self.currentBorrowerOutstandingFees,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "RESERVED"))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentCopyStatus = 'RESERVED'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] - 1)))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.activeLoansCount = self.activeLoansCount@pre - 1");
      }
      if (!((__result.self.currentReservationAge === 0))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentReservationAge = 0");
      }
      if (!((__result.self.currentReservationCancelled === false))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentReservationCancelled = false");
      }
      if (!((__result.self.lastFeeComputed === (((returnDate > dueDate)) ? (((returnDate - dueDate) * __result.self.dailyLateRate)) : (0))))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.lastFeeComputed =\n            (if returnDate > dueDate\n             then (returnDate - dueDate) * self.dailyLateRate\n             else 0.0\n             endif)");
      }
      if (!((__result.self.currentBorrowerOutstandingFees === (__pre["self.currentBorrowerOutstandingFees"] + __result.self.lastFeeComputed)))) {
        postViolations.push("[LibraryLendingSystem.returnLoanWithReservation] post violated: self.currentBorrowerOutstandingFees =\n            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.placeReservation. User supplies this. */
export type LibraryLendingSystemPlaceReservationImpl = (self: LibraryLendingSystem) => { self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; currentReservationAge: unknown; currentReservationCancelled: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.placeReservation. */
export function wrapLibraryLendingSystemPlaceReservation(impl: LibraryLendingSystemPlaceReservationImpl): (self: LibraryLendingSystem) => LibraryLendingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystem.placeReservation] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.placeReservation] pre violated: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold");
    }
    if (!((self.currentReservationCancelled === true))) {
      preViolations.push("[LibraryLendingSystem.placeReservation] pre violated: self.currentReservationCancelled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystem.placeReservation] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (!((__result.self.currentReservationAge === 0))) {
        postViolations.push("[LibraryLendingSystem.placeReservation] post violated: self.currentReservationAge = 0");
      }
      if (!((__result.self.currentReservationCancelled === false))) {
        postViolations.push("[LibraryLendingSystem.placeReservation] post violated: self.currentReservationCancelled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.placeReservation (async). User supplies this. */
export type LibraryLendingSystemPlaceReservationAsyncImpl = (self: LibraryLendingSystem) => Promise<{ self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; currentReservationAge: unknown; currentReservationCancelled: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.placeReservation (async). */
export function wrapLibraryLendingSystemPlaceReservationAsync(impl: LibraryLendingSystemPlaceReservationAsyncImpl): (self: LibraryLendingSystem) => Promise<LibraryLendingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystem.placeReservation] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.placeReservation] pre violated: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold");
    }
    if (!((self.currentReservationCancelled === true))) {
      preViolations.push("[LibraryLendingSystem.placeReservation] pre violated: self.currentReservationCancelled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystem.placeReservation] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (!((__result.self.currentReservationAge === 0))) {
        postViolations.push("[LibraryLendingSystem.placeReservation] post violated: self.currentReservationAge = 0");
      }
      if (!((__result.self.currentReservationCancelled === false))) {
        postViolations.push("[LibraryLendingSystem.placeReservation] post violated: self.currentReservationCancelled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.expireReservation. User supplies this. */
export type LibraryLendingSystemExpireReservationImpl = (self: LibraryLendingSystem) => { self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; currentReservationCancelled: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.expireReservation. */
export function wrapLibraryLendingSystemExpireReservation(impl: LibraryLendingSystemExpireReservationImpl): (self: LibraryLendingSystem) => LibraryLendingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystem.expireReservation] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentReservationAge > self.maxReservationHoldDays))) {
      preViolations.push("[LibraryLendingSystem.expireReservation] pre violated: self.currentReservationAge > self.maxReservationHoldDays");
    }
    if (!(!(self.currentReservationCancelled))) {
      preViolations.push("[LibraryLendingSystem.expireReservation] pre violated: not self.currentReservationCancelled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "AVAILABLE"))) {
        postViolations.push("[LibraryLendingSystem.expireReservation] post violated: self.currentCopyStatus = 'AVAILABLE'");
      }
      if (!((__result.self.currentReservationCancelled === true))) {
        postViolations.push("[LibraryLendingSystem.expireReservation] post violated: self.currentReservationCancelled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.expireReservation (async). User supplies this. */
export type LibraryLendingSystemExpireReservationAsyncImpl = (self: LibraryLendingSystem) => Promise<{ self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; currentReservationCancelled: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.expireReservation (async). */
export function wrapLibraryLendingSystemExpireReservationAsync(impl: LibraryLendingSystemExpireReservationAsyncImpl): (self: LibraryLendingSystem) => Promise<LibraryLendingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystem.expireReservation] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentReservationAge > self.maxReservationHoldDays))) {
      preViolations.push("[LibraryLendingSystem.expireReservation] pre violated: self.currentReservationAge > self.maxReservationHoldDays");
    }
    if (!(!(self.currentReservationCancelled))) {
      preViolations.push("[LibraryLendingSystem.expireReservation] pre violated: not self.currentReservationCancelled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "AVAILABLE"))) {
        postViolations.push("[LibraryLendingSystem.expireReservation] post violated: self.currentCopyStatus = 'AVAILABLE'");
      }
      if (!((__result.self.currentReservationCancelled === true))) {
        postViolations.push("[LibraryLendingSystem.expireReservation] post violated: self.currentReservationCancelled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.pickUpReservation. User supplies this. */
export type LibraryLendingSystemPickUpReservationImpl = (self: LibraryLendingSystem, dueDate: number, pickUpDate: number) => { self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown; currentReservationCancelled: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.pickUpReservation. */
export function wrapLibraryLendingSystemPickUpReservation(impl: LibraryLendingSystemPickUpReservationImpl): (self: LibraryLendingSystem, dueDate: number, pickUpDate: number) => LibraryLendingSystem {
  return (self, dueDate, pickUpDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentReservationAge <= self.maxReservationHoldDays))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: self.currentReservationAge <= self.maxReservationHoldDays");
    }
    if (!(!(self.currentReservationCancelled))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: not self.currentReservationCancelled");
    }
    if (!((self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold");
    }
    if (!((dueDate > pickUpDate))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: dueDate > pickUpDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dueDate, pickUpDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystem.pickUpReservation] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] + 1)))) {
        postViolations.push("[LibraryLendingSystem.pickUpReservation] post violated: self.activeLoansCount = self.activeLoansCount@pre + 1");
      }
      if (!((__result.self.currentReservationCancelled === true))) {
        postViolations.push("[LibraryLendingSystem.pickUpReservation] post violated: self.currentReservationCancelled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.pickUpReservation (async). User supplies this. */
export type LibraryLendingSystemPickUpReservationAsyncImpl = (self: LibraryLendingSystem, dueDate: number, pickUpDate: number) => Promise<{ self: LibraryLendingSystem; modified: { currentCopyStatus: unknown; activeLoansCount: unknown; currentReservationCancelled: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.pickUpReservation (async). */
export function wrapLibraryLendingSystemPickUpReservationAsync(impl: LibraryLendingSystemPickUpReservationAsyncImpl): (self: LibraryLendingSystem, dueDate: number, pickUpDate: number) => Promise<LibraryLendingSystem> {
  return async (self, dueDate, pickUpDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentReservationAge <= self.maxReservationHoldDays))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: self.currentReservationAge <= self.maxReservationHoldDays");
    }
    if (!(!(self.currentReservationCancelled))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: not self.currentReservationCancelled");
    }
    if (!((self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold");
    }
    if (!((dueDate > pickUpDate))) {
      preViolations.push("[LibraryLendingSystem.pickUpReservation] pre violated: dueDate > pickUpDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeLoansCount": self.activeLoansCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dueDate, pickUpDate);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystem.pickUpReservation] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] + 1)))) {
        postViolations.push("[LibraryLendingSystem.pickUpReservation] post violated: self.activeLoansCount = self.activeLoansCount@pre + 1");
      }
      if (!((__result.self.currentReservationCancelled === true))) {
        postViolations.push("[LibraryLendingSystem.pickUpReservation] post violated: self.currentReservationCancelled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.payLateFees. User supplies this. */
export type LibraryLendingSystemPayLateFeesImpl = (self: LibraryLendingSystem, amount: number) => { self: LibraryLendingSystem; modified: { currentBorrowerOutstandingFees: unknown } };

/** Contract-checking wrapper for LibraryLendingSystem.payLateFees. */
export function wrapLibraryLendingSystemPayLateFees(impl: LibraryLendingSystemPayLateFeesImpl): (self: LibraryLendingSystem, amount: number) => LibraryLendingSystem {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[LibraryLendingSystem.payLateFees] pre violated: amount > 0.0");
    }
    if (!((amount >= self.currentBorrowerOutstandingFees))) {
      preViolations.push("[LibraryLendingSystem.payLateFees] pre violated: amount >= self.currentBorrowerOutstandingFees");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees === 0))) {
        postViolations.push("[LibraryLendingSystem.payLateFees] post violated: self.currentBorrowerOutstandingFees = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.payLateFees (async). User supplies this. */
export type LibraryLendingSystemPayLateFeesAsyncImpl = (self: LibraryLendingSystem, amount: number) => Promise<{ self: LibraryLendingSystem; modified: { currentBorrowerOutstandingFees: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystem.payLateFees (async). */
export function wrapLibraryLendingSystemPayLateFeesAsync(impl: LibraryLendingSystemPayLateFeesAsyncImpl): (self: LibraryLendingSystem, amount: number) => Promise<LibraryLendingSystem> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[LibraryLendingSystem.payLateFees] pre violated: amount > 0.0");
    }
    if (!((amount >= self.currentBorrowerOutstandingFees))) {
      preViolations.push("[LibraryLendingSystem.payLateFees] pre violated: amount >= self.currentBorrowerOutstandingFees");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees === 0))) {
        postViolations.push("[LibraryLendingSystem.payLateFees] post violated: self.currentBorrowerOutstandingFees = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.rejectLoanDueToFees. User supplies this. */
export type LibraryLendingSystemRejectLoanDueToFeesImpl = (self: LibraryLendingSystem) => { self: LibraryLendingSystem; modified: {} };

/** Contract-checking wrapper for LibraryLendingSystem.rejectLoanDueToFees. */
export function wrapLibraryLendingSystemRejectLoanDueToFees(impl: LibraryLendingSystemRejectLoanDueToFeesImpl): (self: LibraryLendingSystem) => LibraryLendingSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.rejectLoanDueToFees] pre violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees > __result.self.outstandingFeeThreshold))) {
        postViolations.push("[LibraryLendingSystem.rejectLoanDueToFees] post violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystem.rejectLoanDueToFees (async). User supplies this. */
export type LibraryLendingSystemRejectLoanDueToFeesAsyncImpl = (self: LibraryLendingSystem) => Promise<{ self: LibraryLendingSystem; modified: {} }>;

/** Contract-checking wrapper for LibraryLendingSystem.rejectLoanDueToFees (async). */
export function wrapLibraryLendingSystemRejectLoanDueToFeesAsync(impl: LibraryLendingSystemRejectLoanDueToFeesAsyncImpl): (self: LibraryLendingSystem) => Promise<LibraryLendingSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystem.rejectLoanDueToFees] pre violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees > __result.self.outstandingFeeThreshold))) {
        postViolations.push("[LibraryLendingSystem.rejectLoanDueToFees] post violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.rejectPickUpWithFees. User supplies this. */
export type LibraryLendingSystemFormalizedRejectPickUpWithFeesImpl = (self: LibraryLendingSystemFormalized) => { self: LibraryLendingSystemFormalized; modified: {} };

/** Contract-checking wrapper for LibraryLendingSystemFormalized.rejectPickUpWithFees. */
export function wrapLibraryLendingSystemFormalizedRejectPickUpWithFees(impl: LibraryLendingSystemFormalizedRejectPickUpWithFeesImpl): (self: LibraryLendingSystemFormalized) => LibraryLendingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectPickUpWithFees] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectPickUpWithFees] pre violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees > __result.self.outstandingFeeThreshold))) {
        postViolations.push("[LibraryLendingSystemFormalized.rejectPickUpWithFees] post violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.rejectPickUpWithFees (async). User supplies this. */
export type LibraryLendingSystemFormalizedRejectPickUpWithFeesAsyncImpl = (self: LibraryLendingSystemFormalized) => Promise<{ self: LibraryLendingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for LibraryLendingSystemFormalized.rejectPickUpWithFees (async). */
export function wrapLibraryLendingSystemFormalizedRejectPickUpWithFeesAsync(impl: LibraryLendingSystemFormalizedRejectPickUpWithFeesAsyncImpl): (self: LibraryLendingSystemFormalized) => Promise<LibraryLendingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectPickUpWithFees] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectPickUpWithFees] pre violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees > __result.self.outstandingFeeThreshold))) {
        postViolations.push("[LibraryLendingSystemFormalized.rejectPickUpWithFees] post violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.rejectReservationWithFees. User supplies this. */
export type LibraryLendingSystemFormalizedRejectReservationWithFeesImpl = (self: LibraryLendingSystemFormalized) => { self: LibraryLendingSystemFormalized; modified: {} };

/** Contract-checking wrapper for LibraryLendingSystemFormalized.rejectReservationWithFees. */
export function wrapLibraryLendingSystemFormalizedRejectReservationWithFees(impl: LibraryLendingSystemFormalizedRejectReservationWithFeesImpl): (self: LibraryLendingSystemFormalized) => LibraryLendingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectReservationWithFees] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectReservationWithFees] pre violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees > __result.self.outstandingFeeThreshold))) {
        postViolations.push("[LibraryLendingSystemFormalized.rejectReservationWithFees] post violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.rejectReservationWithFees (async). User supplies this. */
export type LibraryLendingSystemFormalizedRejectReservationWithFeesAsyncImpl = (self: LibraryLendingSystemFormalized) => Promise<{ self: LibraryLendingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for LibraryLendingSystemFormalized.rejectReservationWithFees (async). */
export function wrapLibraryLendingSystemFormalizedRejectReservationWithFeesAsync(impl: LibraryLendingSystemFormalizedRejectReservationWithFeesAsyncImpl): (self: LibraryLendingSystemFormalized) => Promise<LibraryLendingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectReservationWithFees] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectReservationWithFees] pre violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentBorrowerOutstandingFees > __result.self.outstandingFeeThreshold))) {
        postViolations.push("[LibraryLendingSystemFormalized.rejectReservationWithFees] post violated: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.rejectStaleReservationPickUp. User supplies this. */
export type LibraryLendingSystemFormalizedRejectStaleReservationPickUpImpl = (self: LibraryLendingSystemFormalized) => { self: LibraryLendingSystemFormalized; modified: {} };

/** Contract-checking wrapper for LibraryLendingSystemFormalized.rejectStaleReservationPickUp. */
export function wrapLibraryLendingSystemFormalizedRejectStaleReservationPickUp(impl: LibraryLendingSystemFormalizedRejectStaleReservationPickUpImpl): (self: LibraryLendingSystemFormalized) => LibraryLendingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentReservationAge > self.maxReservationHoldDays))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] pre violated: self.currentReservationAge > self.maxReservationHoldDays");
    }
    if (!(!(self.currentReservationCancelled))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] pre violated: not self.currentReservationCancelled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentReservationAge > __result.self.maxReservationHoldDays))) {
        postViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] post violated: self.currentReservationAge > self.maxReservationHoldDays");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.rejectStaleReservationPickUp (async). User supplies this. */
export type LibraryLendingSystemFormalizedRejectStaleReservationPickUpAsyncImpl = (self: LibraryLendingSystemFormalized) => Promise<{ self: LibraryLendingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for LibraryLendingSystemFormalized.rejectStaleReservationPickUp (async). */
export function wrapLibraryLendingSystemFormalizedRejectStaleReservationPickUpAsync(impl: LibraryLendingSystemFormalizedRejectStaleReservationPickUpAsyncImpl): (self: LibraryLendingSystemFormalized) => Promise<LibraryLendingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "RESERVED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] pre violated: self.currentCopyStatus = 'RESERVED'");
    }
    if (!((self.currentReservationAge > self.maxReservationHoldDays))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] pre violated: self.currentReservationAge > self.maxReservationHoldDays");
    }
    if (!(!(self.currentReservationCancelled))) {
      preViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] pre violated: not self.currentReservationCancelled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentReservationAge > __result.self.maxReservationHoldDays))) {
        postViolations.push("[LibraryLendingSystemFormalized.rejectStaleReservationPickUp] post violated: self.currentReservationAge > self.maxReservationHoldDays");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.enforceSingleActiveLoan. User supplies this. */
export type LibraryLendingSystemFormalizedEnforceSingleActiveLoanImpl = (self: LibraryLendingSystemFormalized) => { self: LibraryLendingSystemFormalized; modified: {} };

/** Contract-checking wrapper for LibraryLendingSystemFormalized.enforceSingleActiveLoan. */
export function wrapLibraryLendingSystemFormalizedEnforceSingleActiveLoan(impl: LibraryLendingSystemFormalizedEnforceSingleActiveLoanImpl): (self: LibraryLendingSystemFormalized) => LibraryLendingSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceSingleActiveLoan] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceSingleActiveLoan] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.enforceSingleActiveLoan (async). User supplies this. */
export type LibraryLendingSystemFormalizedEnforceSingleActiveLoanAsyncImpl = (self: LibraryLendingSystemFormalized) => Promise<{ self: LibraryLendingSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for LibraryLendingSystemFormalized.enforceSingleActiveLoan (async). */
export function wrapLibraryLendingSystemFormalizedEnforceSingleActiveLoanAsync(impl: LibraryLendingSystemFormalizedEnforceSingleActiveLoanAsyncImpl): (self: LibraryLendingSystemFormalized) => Promise<LibraryLendingSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceSingleActiveLoan] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentCopyStatus === "LOANED"))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceSingleActiveLoan] post violated: self.currentCopyStatus = 'LOANED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.enforceLateFeeFormula. User supplies this. */
export type LibraryLendingSystemFormalizedEnforceLateFeeFormulaImpl = (self: LibraryLendingSystemFormalized, returnDate: number, dueDate: number) => { self: LibraryLendingSystemFormalized; modified: { lastFeeComputed: unknown; currentBorrowerOutstandingFees: unknown; currentCopyStatus: unknown; activeLoansCount: unknown } };

/** Contract-checking wrapper for LibraryLendingSystemFormalized.enforceLateFeeFormula. */
export function wrapLibraryLendingSystemFormalizedEnforceLateFeeFormula(impl: LibraryLendingSystemFormalizedEnforceLateFeeFormulaImpl): (self: LibraryLendingSystemFormalized, returnDate: number, dueDate: number) => LibraryLendingSystemFormalized {
  return (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((returnDate > dueDate))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] pre violated: returnDate > dueDate");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] pre violated: dueDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentBorrowerOutstandingFees": self.currentBorrowerOutstandingFees,
      "self.activeLoansCount": self.activeLoansCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.lastFeeComputed === ((returnDate - dueDate) * __result.self.dailyLateRate)))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.lastFeeComputed =\n            (returnDate - dueDate) * self.dailyLateRate");
      }
      if (!((__result.self.currentBorrowerOutstandingFees === (__pre["self.currentBorrowerOutstandingFees"] + __result.self.lastFeeComputed)))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.currentBorrowerOutstandingFees =\n            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed");
      }
      if (!((__result.self.currentCopyStatus === "AVAILABLE"))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.currentCopyStatus = 'AVAILABLE'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] - 1)))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.activeLoansCount = self.activeLoansCount@pre - 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibraryLendingSystemFormalized.enforceLateFeeFormula (async). User supplies this. */
export type LibraryLendingSystemFormalizedEnforceLateFeeFormulaAsyncImpl = (self: LibraryLendingSystemFormalized, returnDate: number, dueDate: number) => Promise<{ self: LibraryLendingSystemFormalized; modified: { lastFeeComputed: unknown; currentBorrowerOutstandingFees: unknown; currentCopyStatus: unknown; activeLoansCount: unknown } }>;

/** Contract-checking wrapper for LibraryLendingSystemFormalized.enforceLateFeeFormula (async). */
export function wrapLibraryLendingSystemFormalizedEnforceLateFeeFormulaAsync(impl: LibraryLendingSystemFormalizedEnforceLateFeeFormulaAsyncImpl): (self: LibraryLendingSystemFormalized, returnDate: number, dueDate: number) => Promise<LibraryLendingSystemFormalized> {
  return async (self, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((self.currentCopyStatus === "LOANED"))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] pre violated: self.currentCopyStatus = 'LOANED'");
    }
    if (!((returnDate > dueDate))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] pre violated: returnDate > dueDate");
    }
    if (!((dueDate > 0))) {
      preViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] pre violated: dueDate > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentBorrowerOutstandingFees": self.currentBorrowerOutstandingFees,
      "self.activeLoansCount": self.activeLoansCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, returnDate, dueDate);
      const postViolations: string[] = [];
      if (!((__result.self.lastFeeComputed === ((returnDate - dueDate) * __result.self.dailyLateRate)))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.lastFeeComputed =\n            (returnDate - dueDate) * self.dailyLateRate");
      }
      if (!((__result.self.currentBorrowerOutstandingFees === (__pre["self.currentBorrowerOutstandingFees"] + __result.self.lastFeeComputed)))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.currentBorrowerOutstandingFees =\n            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed");
      }
      if (!((__result.self.currentCopyStatus === "AVAILABLE"))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.currentCopyStatus = 'AVAILABLE'");
      }
      if (!((__result.self.activeLoansCount === (__pre["self.activeLoansCount"] - 1)))) {
        postViolations.push("[LibraryLendingSystemFormalized.enforceLateFeeFormula] post violated: self.activeLoansCount = self.activeLoansCount@pre - 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

