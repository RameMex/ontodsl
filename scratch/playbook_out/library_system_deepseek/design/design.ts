// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for CopyInventory. Runtime: string. Compile-time: branded. */
export type CopyInventoryId = string & { readonly __brand: "CopyInventoryId" };
/** Identity type for BorrowerRegistry. Runtime: string. Compile-time: branded. */
export type BorrowerRegistryId = string & { readonly __brand: "BorrowerRegistryId" };
/** Identity type for LoanLedger. Runtime: string. Compile-time: branded. */
export type LoanLedgerId = string & { readonly __brand: "LoanLedgerId" };
/** Identity type for ReservationManager. Runtime: string. Compile-time: branded. */
export type ReservationManagerId = string & { readonly __brand: "ReservationManagerId" };
/** Identity type for AuditLogger. Runtime: string. Compile-time: branded. */
export type AuditLoggerId = string & { readonly __brand: "AuditLoggerId" };
/** Identity type for LoanServiceInterface. Runtime: string. Compile-time: branded. */
export type LoanServiceInterfaceId = string & { readonly __brand: "LoanServiceInterfaceId" };
/** Identity type for BorrowerValidationInterface. Runtime: string. Compile-time: branded. */
export type BorrowerValidationInterfaceId = string & { readonly __brand: "BorrowerValidationInterfaceId" };
/** Identity type for ReservationCoordinator. Runtime: string. Compile-time: branded. */
export type ReservationCoordinatorId = string & { readonly __brand: "ReservationCoordinatorId" };
/** Identity type for FullLoanFlow. Runtime: string. Compile-time: branded. */
export type FullLoanFlowId = string & { readonly __brand: "FullLoanFlowId" };
/** Identity type for ReturnFlow. Runtime: string. Compile-time: branded. */
export type ReturnFlowId = string & { readonly __brand: "ReturnFlowId" };
/** Identity type for Borrower. Runtime: string. Compile-time: branded. */
export type BorrowerId = string & { readonly __brand: "BorrowerId" };
/** Identity type for Librarian. Runtime: string. Compile-time: branded. */
export type LibrarianId = string & { readonly __brand: "LibrarianId" };
/** Identity type for LibraryVendor. Runtime: string. Compile-time: branded. */
export type LibraryVendorId = string & { readonly __brand: "LibraryVendorId" };
/** Identity type for BookCopy. Runtime: string. Compile-time: branded. */
export type BookCopyId = string & { readonly __brand: "BookCopyId" };
/** Identity type for Loan. Runtime: string. Compile-time: branded. */
export type LoanId = string & { readonly __brand: "LoanId" };
/** Identity type for Reservation. Runtime: string. Compile-time: branded. */
export type ReservationId = string & { readonly __brand: "ReservationId" };
/** Identity type for CopyStateExclusivity. Runtime: string. Compile-time: branded. */
export type CopyStateExclusivityId = string & { readonly __brand: "CopyStateExclusivityId" };
/** Identity type for BlockIndebtedBorrowers. Runtime: string. Compile-time: branded. */
export type BlockIndebtedBorrowersId = string & { readonly __brand: "BlockIndebtedBorrowersId" };
/** Identity type for ExpireStaleReservations. Runtime: string. Compile-time: branded. */
export type ExpireStaleReservationsId = string & { readonly __brand: "ExpireStaleReservationsId" };
/** Identity type for LateFeeAccuracy. Runtime: string. Compile-time: branded. */
export type LateFeeAccuracyId = string & { readonly __brand: "LateFeeAccuracyId" };
/** Identity type for LoanFlow. Runtime: string. Compile-time: branded. */
export type LoanFlowId = string & { readonly __brand: "LoanFlowId" };
/** Identity type for LibrarySystem. Runtime: string. Compile-time: branded. */
export type LibrarySystemId = string & { readonly __brand: "LibrarySystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for LibrarySystemFormalized. Runtime: string. Compile-time: branded. */
export type LibrarySystemFormalizedId = string & { readonly __brand: "LibrarySystemFormalizedId" };
/** Identity type for FormalizedCopyStateExclusivity. Runtime: string. Compile-time: branded. */
export type FormalizedCopyStateExclusivityId = string & { readonly __brand: "FormalizedCopyStateExclusivityId" };
/** Identity type for FormalizedBlockIndebted. Runtime: string. Compile-time: branded. */
export type FormalizedBlockIndebtedId = string & { readonly __brand: "FormalizedBlockIndebtedId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface CopyInventory {
  readonly inventoryId: CopyInventoryId;
  readonly copyStatuses: ReadonlySet<BookCopy>;
}

/** @stereotype <<Kind>> */
export interface BorrowerRegistry {
  readonly registryId: BorrowerRegistryId;
  readonly borrowers: ReadonlySet<Borrower>;
}

/** @stereotype <<Kind>> */
export interface LoanLedger {
  readonly ledgerId: LoanLedgerId;
  readonly loans: ReadonlySet<Loan>;
  readonly dailyLateFeeRate: number;
}

/** @stereotype <<Kind>> */
export interface ReservationManager {
  readonly reservationManagerId: ReservationManagerId;
  readonly reservations: ReadonlySet<Reservation>;
  readonly reservationExpiryDays: number;
}

/** @stereotype <<Kind>> */
export interface AuditLogger {
  readonly loggerId: AuditLoggerId;
  readonly auditLog: ReadonlySet<string>;
}

/** @stereotype <<Role>> */
export interface InventoryEndpoint {
  readonly inventoryId: string;
}

/** @stereotype <<Role>> */
export interface LoanEndpoint {
  readonly ledgerId: string;
}

/** @stereotype <<Relator>> */
export interface LoanServiceInterface {
  readonly interfaceId: LoanServiceInterfaceId;
}

/** @stereotype <<Role>> */
export interface RegistryEndpoint {
  readonly registryId: string;
}

/** @stereotype <<Role>> */
export interface LoanFlowEndpoint {
  readonly ledgerId: string;
}

/** @stereotype <<Relator>> */
export interface BorrowerValidationInterface {
  readonly interfaceId2: BorrowerValidationInterfaceId;
}

/** @stereotype <<Role>> */
export interface InventoryEndpoint2 {
  readonly inventoryId: string;
}

/** @stereotype <<Role>> */
export interface ReservationEndpoint {
  readonly reservationManagerId: string;
}

/** @stereotype <<Relator>> */
export interface ReservationCoordinator {
  readonly interfaceId3: ReservationCoordinatorId;
}

/** @stereotype <<Happening>> */
export interface FullLoanFlow {
  readonly flowId: FullLoanFlowId;
  readonly triggeredBy: string;
  readonly borrowerId: string;
  readonly copyId: string;
  readonly loanGranted: boolean;
}

/** @stereotype <<Happening>> */
export interface ReturnFlow {
  readonly flowId2: ReturnFlowId;
  readonly copyId: string;
  readonly returnDate: number;
  readonly lateFeeAccrued: number;
  readonly hasReservation: boolean;
}

/** @stereotype <<Agent>> */
export interface Borrower {
  readonly borrowerId: BorrowerId;
  readonly name: string;
  readonly outstandingFees: number;
}

/** @stereotype <<Agent>> */
export interface Librarian {
  readonly librarianId: LibrarianId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface LibraryVendor {
  readonly vendorId: LibraryVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface BookCopy {
  readonly copyId: BookCopyId;
  readonly title: string;
  readonly status: string;
  readonly currentBorrower: string;
  readonly dueDate: string;
}

/** @stereotype <<Kind>> */
export interface Loan {
  readonly loanId: LoanId;
  readonly copy: BookCopy;
  readonly borrower: Borrower;
  readonly startDate: string;
  readonly dueDate: string;
  readonly returnDate: string;
  readonly lateFee: number;
}

/** @stereotype <<Kind>> */
export interface Reservation {
  readonly reservationId: ReservationId;
  readonly copy: BookCopy;
  readonly borrower: Borrower;
  readonly placedDate: string;
  readonly expiresOn: string;
  readonly isActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface CopyStateExclusivity {
  readonly commitmentId: CopyStateExclusivityId;
  readonly mutuallyExclusiveState: boolean;
}

/** @stereotype <<Commitment>> */
export interface BlockIndebtedBorrowers {
  readonly commitmentId: BlockIndebtedBorrowersId;
  readonly blocksLoansForIndebted: boolean;
}

/** @stereotype <<Commitment>> */
export interface ExpireStaleReservations {
  readonly commitmentId: ExpireStaleReservationsId;
  readonly autoExpiresReservations: boolean;
}

/** @stereotype <<Commitment>> */
export interface LateFeeAccuracy {
  readonly commitmentId: LateFeeAccuracyId;
  readonly lateFeeComputed: boolean;
}

/** @stereotype <<Category>> */
export interface CopyStateConstraints {
}

/** @stereotype <<Happening>> */
export interface LoanFlow {
  readonly flowId: LoanFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface LibrarySystem extends CopyStateConstraints {
  readonly systemId: LibrarySystemId;
  readonly mutuallyExclusiveState: boolean;
  readonly blocksLoansForIndebted: boolean;
  readonly autoExpiresReservations: boolean;
  readonly lateFeeComputed: boolean;
  readonly dailyLateFeeRate: number;
  readonly reservationExpiryDays: number;
}

/** @stereotype <<Category>> */
export interface ConsumerProtectionCompliant {
  readonly regulationReference: string;
  readonly feeDisclosurePolicy: string;
  readonly termsOfServiceUrl: string;
}

/** @stereotype <<Category>> */
export interface DataPrivacyCompliant {
  readonly privacyPolicyUrl: string;
  readonly dataRetentionDays: number;
  readonly consentRecorded: boolean;
}

/** @stereotype <<Category>> */
export interface FinancialAuditCompliant {
  readonly auditTrailRetentionDays: number;
  readonly calculationMethodDoc: string;
}

/** @stereotype <<Category>> */
export interface MutuallyExclusiveCopyState {
}

/** @stereotype <<Category>> */
export interface LateFeeFormula {
}

/** @stereotype <<Category>> */
export interface ReservationExpiryPolicy {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionText: string;
  readonly assumptionNumber: string;
}

/** @stereotype <<Kind>> */
export interface LibrarySystemFormalized extends ConsumerProtectionCompliant, DataPrivacyCompliant, FinancialAuditCompliant {
  readonly systemId: LibrarySystemFormalizedId;
  readonly formalVerificationDone: boolean;
  readonly formalBlockVerification: boolean;
  readonly lastRejectionReason: string;
  readonly lastRejectionTimestamp: string;
  readonly activeLoanCount: number;
  readonly totalLateFeesCollected: number;
  readonly mutuallyExclusiveState: boolean;
  readonly blocksLoansForIndebted: boolean;
  readonly autoExpiresReservations: boolean;
  readonly lateFeeComputed: boolean;
}

/** @stereotype <<Commitment>> */
export interface FormalizedCopyStateExclusivity {
  readonly commitmentId: FormalizedCopyStateExclusivityId;
  readonly formalVerificationDone: boolean;
}

/** @stereotype <<Commitment>> */
export interface FormalizedBlockIndebted {
  readonly commitmentId: FormalizedBlockIndebtedId;
  readonly formalBlockVerification: boolean;
}


// ─── Factory functions ───

export function makeCopyInventory(data: {
  inventoryId: string;
  copyStatuses: ReadonlySet<BookCopy>;
}): CopyInventory {
  return {
    inventoryId: data.inventoryId as CopyInventoryId,
    copyStatuses: data.copyStatuses,
  };
}

export function makeBorrowerRegistry(data: {
  registryId: string;
  borrowers: ReadonlySet<Borrower>;
}): BorrowerRegistry {
  return {
    registryId: data.registryId as BorrowerRegistryId,
    borrowers: data.borrowers,
  };
}

export function makeLoanLedger(data: {
  ledgerId: string;
  loans: ReadonlySet<Loan>;
  dailyLateFeeRate: number;
}): LoanLedger {
  return {
    ledgerId: data.ledgerId as LoanLedgerId,
    loans: data.loans,
    dailyLateFeeRate: data.dailyLateFeeRate,
  };
}

export function makeReservationManager(data: {
  reservationManagerId: string;
  reservations: ReadonlySet<Reservation>;
  reservationExpiryDays: number;
}): ReservationManager {
  return {
    reservationManagerId: data.reservationManagerId as ReservationManagerId,
    reservations: data.reservations,
    reservationExpiryDays: data.reservationExpiryDays,
  };
}

export function makeAuditLogger(data: {
  loggerId: string;
  auditLog: ReadonlySet<string>;
}): AuditLogger {
  return {
    loggerId: data.loggerId as AuditLoggerId,
    auditLog: data.auditLog,
  };
}

export function makeLoanServiceInterface(data: {
  interfaceId: string;
}): LoanServiceInterface {
  return {
    interfaceId: data.interfaceId as LoanServiceInterfaceId,
  };
}

export function makeBorrowerValidationInterface(data: {
  interfaceId2: string;
}): BorrowerValidationInterface {
  return {
    interfaceId2: data.interfaceId2 as BorrowerValidationInterfaceId,
  };
}

export function makeReservationCoordinator(data: {
  interfaceId3: string;
}): ReservationCoordinator {
  return {
    interfaceId3: data.interfaceId3 as ReservationCoordinatorId,
  };
}

export function makeFullLoanFlow(data: {
  flowId: string;
  triggeredBy: string;
  borrowerId: string;
  copyId: string;
  loanGranted: boolean;
}): FullLoanFlow {
  return {
    flowId: data.flowId as FullLoanFlowId,
    triggeredBy: data.triggeredBy,
    borrowerId: data.borrowerId,
    copyId: data.copyId,
    loanGranted: data.loanGranted,
  };
}

export function makeReturnFlow(data: {
  flowId2: string;
  copyId: string;
  returnDate: number;
  lateFeeAccrued: number;
  hasReservation: boolean;
}): ReturnFlow {
  return {
    flowId2: data.flowId2 as ReturnFlowId,
    copyId: data.copyId,
    returnDate: data.returnDate,
    lateFeeAccrued: data.lateFeeAccrued,
    hasReservation: data.hasReservation,
  };
}

export function makeBorrower(data: {
  borrowerId: string;
  name: string;
  outstandingFees: number;
}): Borrower {
  return {
    borrowerId: data.borrowerId as BorrowerId,
    name: data.name,
    outstandingFees: data.outstandingFees,
  };
}

export function makeLibrarian(data: {
  librarianId: string;
  name: string;
}): Librarian {
  return {
    librarianId: data.librarianId as LibrarianId,
    name: data.name,
  };
}

export function makeLibraryVendor(data: {
  vendorId: string;
  name: string;
}): LibraryVendor {
  return {
    vendorId: data.vendorId as LibraryVendorId,
    name: data.name,
  };
}

export function makeBookCopy(data: {
  copyId: string;
  title: string;
  status: string;
  currentBorrower: string;
  dueDate: string;
}): BookCopy {
  return {
    copyId: data.copyId as BookCopyId,
    title: data.title,
    status: data.status,
    currentBorrower: data.currentBorrower,
    dueDate: data.dueDate,
  };
}

export function makeLoan(data: {
  loanId: string;
  copy: BookCopy;
  borrower: Borrower;
  startDate: string;
  dueDate: string;
  returnDate: string;
  lateFee: number;
}): Loan {
  return {
    loanId: data.loanId as LoanId,
    copy: data.copy,
    borrower: data.borrower,
    startDate: data.startDate,
    dueDate: data.dueDate,
    returnDate: data.returnDate,
    lateFee: data.lateFee,
  };
}

export function makeReservation(data: {
  reservationId: string;
  copy: BookCopy;
  borrower: Borrower;
  placedDate: string;
  expiresOn: string;
  isActive: boolean;
}): Reservation {
  return {
    reservationId: data.reservationId as ReservationId,
    copy: data.copy,
    borrower: data.borrower,
    placedDate: data.placedDate,
    expiresOn: data.expiresOn,
    isActive: data.isActive,
  };
}

export function makeCopyStateExclusivity(data: {
  commitmentId: string;
  mutuallyExclusiveState: boolean;
}): CopyStateExclusivity {
  return {
    commitmentId: data.commitmentId as CopyStateExclusivityId,
    mutuallyExclusiveState: data.mutuallyExclusiveState,
  };
}

export function makeBlockIndebtedBorrowers(data: {
  commitmentId: string;
  blocksLoansForIndebted: boolean;
}): BlockIndebtedBorrowers {
  return {
    commitmentId: data.commitmentId as BlockIndebtedBorrowersId,
    blocksLoansForIndebted: data.blocksLoansForIndebted,
  };
}

export function makeExpireStaleReservations(data: {
  commitmentId: string;
  autoExpiresReservations: boolean;
}): ExpireStaleReservations {
  return {
    commitmentId: data.commitmentId as ExpireStaleReservationsId,
    autoExpiresReservations: data.autoExpiresReservations,
  };
}

export function makeLateFeeAccuracy(data: {
  commitmentId: string;
  lateFeeComputed: boolean;
}): LateFeeAccuracy {
  return {
    commitmentId: data.commitmentId as LateFeeAccuracyId,
    lateFeeComputed: data.lateFeeComputed,
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

export function makeLibrarySystem(data: {
  systemId: string;
  mutuallyExclusiveState: boolean;
  blocksLoansForIndebted: boolean;
  autoExpiresReservations: boolean;
  lateFeeComputed: boolean;
  dailyLateFeeRate: number;
  reservationExpiryDays: number;
}): LibrarySystem {
  return {
    systemId: data.systemId as LibrarySystemId,
    mutuallyExclusiveState: data.mutuallyExclusiveState,
    blocksLoansForIndebted: data.blocksLoansForIndebted,
    autoExpiresReservations: data.autoExpiresReservations,
    lateFeeComputed: data.lateFeeComputed,
    dailyLateFeeRate: data.dailyLateFeeRate,
    reservationExpiryDays: data.reservationExpiryDays,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionText: string;
  assumptionNumber: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionText: data.assumptionText,
    assumptionNumber: data.assumptionNumber,
  };
}

export function makeLibrarySystemFormalized(data: {
  auditTrailRetentionDays: number;
  calculationMethodDoc: string;
  privacyPolicyUrl: string;
  dataRetentionDays: number;
  consentRecorded: boolean;
  regulationReference: string;
  feeDisclosurePolicy: string;
  termsOfServiceUrl: string;
  systemId: string;
  formalVerificationDone: boolean;
  formalBlockVerification: boolean;
  lastRejectionReason: string;
  lastRejectionTimestamp: string;
  activeLoanCount: number;
  totalLateFeesCollected: number;
  mutuallyExclusiveState: boolean;
  blocksLoansForIndebted: boolean;
  autoExpiresReservations: boolean;
  lateFeeComputed: boolean;
}): LibrarySystemFormalized {
  return {
    auditTrailRetentionDays: data.auditTrailRetentionDays,
    calculationMethodDoc: data.calculationMethodDoc,
    privacyPolicyUrl: data.privacyPolicyUrl,
    dataRetentionDays: data.dataRetentionDays,
    consentRecorded: data.consentRecorded,
    regulationReference: data.regulationReference,
    feeDisclosurePolicy: data.feeDisclosurePolicy,
    termsOfServiceUrl: data.termsOfServiceUrl,
    systemId: data.systemId as LibrarySystemFormalizedId,
    formalVerificationDone: data.formalVerificationDone,
    formalBlockVerification: data.formalBlockVerification,
    lastRejectionReason: data.lastRejectionReason,
    lastRejectionTimestamp: data.lastRejectionTimestamp,
    activeLoanCount: data.activeLoanCount,
    totalLateFeesCollected: data.totalLateFeesCollected,
    mutuallyExclusiveState: data.mutuallyExclusiveState,
    blocksLoansForIndebted: data.blocksLoansForIndebted,
    autoExpiresReservations: data.autoExpiresReservations,
    lateFeeComputed: data.lateFeeComputed,
  };
}

export function makeFormalizedCopyStateExclusivity(data: {
  commitmentId: string;
  formalVerificationDone: boolean;
}): FormalizedCopyStateExclusivity {
  return {
    commitmentId: data.commitmentId as FormalizedCopyStateExclusivityId,
    formalVerificationDone: data.formalVerificationDone,
  };
}

export function makeFormalizedBlockIndebted(data: {
  commitmentId: string;
  formalBlockVerification: boolean;
}): FormalizedBlockIndebted {
  return {
    commitmentId: data.commitmentId as FormalizedBlockIndebtedId,
    formalBlockVerification: data.formalBlockVerification,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for CopyInventory. Returns empty array when valid. */
export function validateCopyInventory(instance: CopyInventory): readonly string[] {
  const violations: string[] = [];
  if (!((instance.inventoryId !== null))) {
    violations.push("[CopyInventory] invariant violated: self.inventoryId <> null");
  }
  if (!(Array.from(instance.copyStatuses).every((__x) => ((((__x.status === "AVAILABLE") || (__x.status === "LOANED")) || (__x.status === "RESERVED")))))) {
    violations.push("[CopyInventory] invariant violated: self.copyStatuses->forAll(c | c.status = 'AVAILABLE' or c.status = 'LOANED' or c.status = 'RESERVED')");
  }
  return violations;
}

/** Runtime invariant check for BorrowerRegistry. Returns empty array when valid. */
export function validateBorrowerRegistry(instance: BorrowerRegistry): readonly string[] {
  const violations: string[] = [];
  if (!((instance.registryId !== null))) {
    violations.push("[BorrowerRegistry] invariant violated: self.registryId <> null");
  }
  if (!(Array.from(instance.borrowers).every((__x) => ((__x.outstandingFees >= 0))))) {
    violations.push("[BorrowerRegistry] invariant violated: self.borrowers->forAll(b | b.outstandingFees >= 0.0)");
  }
  return violations;
}

/** Runtime invariant check for LoanLedger. Returns empty array when valid. */
export function validateLoanLedger(instance: LoanLedger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ledgerId !== null))) {
    violations.push("[LoanLedger] invariant violated: self.ledgerId <> null");
  }
  if (!((instance.dailyLateFeeRate >= 0))) {
    violations.push("[LoanLedger] invariant violated: self.dailyLateFeeRate >= 0.0");
  }
  if (!(Array.from(instance.loans).every((__x) => ((((__x.startDate !== null) && (__x.dueDate !== null)) && (__x.lateFee >= 0)))))) {
    violations.push("[LoanLedger] invariant violated: self.loans->forAll(l | l.startDate <> null and l.dueDate <> null and l.lateFee >= 0.0)");
  }
  return violations;
}

/** Runtime invariant check for ReservationManager. Returns empty array when valid. */
export function validateReservationManager(instance: ReservationManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reservationManagerId !== null))) {
    violations.push("[ReservationManager] invariant violated: self.reservationManagerId <> null");
  }
  if (!((instance.reservationExpiryDays === 7))) {
    violations.push("[ReservationManager] invariant violated: self.reservationExpiryDays = 7");
  }
  if (!(Array.from(instance.reservations).every((__x) => ((!(__x.isActive) || (__x.expiresOn !== null)))))) {
    violations.push("[ReservationManager] invariant violated: self.reservations->forAll(r | r.isActive implies r.expiresOn <> null)");
  }
  return violations;
}

/** Runtime invariant check for AuditLogger. Returns empty array when valid. */
export function validateAuditLogger(instance: AuditLogger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.loggerId !== null))) {
    violations.push("[AuditLogger] invariant violated: self.loggerId <> null");
  }
  return violations;
}

/** Runtime invariant check for LoanServiceInterface. Returns empty array when valid. */
export function validateLoanServiceInterface(instance: LoanServiceInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[LoanServiceInterface] invariant violated: self.interfaceId <> null");
  }
  return violations;
}

/** Runtime invariant check for BorrowerValidationInterface. Returns empty array when valid. */
export function validateBorrowerValidationInterface(instance: BorrowerValidationInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId2 !== null))) {
    violations.push("[BorrowerValidationInterface] invariant violated: self.interfaceId2 <> null");
  }
  return violations;
}

/** Runtime invariant check for ReservationCoordinator. Returns empty array when valid. */
export function validateReservationCoordinator(instance: ReservationCoordinator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId3 !== null))) {
    violations.push("[ReservationCoordinator] invariant violated: self.interfaceId3 <> null");
  }
  return violations;
}

/** Runtime invariant check for FullLoanFlow. Returns empty array when valid. */
export function validateFullLoanFlow(instance: FullLoanFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[FullLoanFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[FullLoanFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for ReturnFlow. Returns empty array when valid. */
export function validateReturnFlow(instance: ReturnFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId2 !== null))) {
    violations.push("[ReturnFlow] invariant violated: self.flowId2 <> null");
  }
  if (!((instance.copyId !== null))) {
    violations.push("[ReturnFlow] invariant violated: self.copyId <> null");
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
  if (!((instance.outstandingFees >= 0))) {
    violations.push("[Borrower] invariant violated: self.outstandingFees >= 0.0");
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

/** Runtime invariant check for LibraryVendor. Returns empty array when valid. */
export function validateLibraryVendor(instance: LibraryVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[LibraryVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[LibraryVendor] invariant violated: self.name <> null");
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
  if (!((((instance.status === "AVAILABLE") || (instance.status === "LOANED")) || (instance.status === "RESERVED")))) {
    violations.push("[BookCopy] invariant violated: self.status = 'AVAILABLE' or self.status = 'LOANED' or self.status = 'RESERVED'");
  }
  return violations;
}

/** Runtime invariant check for Loan. Returns empty array when valid. */
export function validateLoan(instance: Loan): readonly string[] {
  const violations: string[] = [];
  if (!((instance.loanId !== null))) {
    violations.push("[Loan] invariant violated: self.loanId <> null");
  }
  if (!((instance.copy !== null))) {
    violations.push("[Loan] invariant violated: self.copy <> null");
  }
  if (!((instance.borrower !== null))) {
    violations.push("[Loan] invariant violated: self.borrower <> null");
  }
  if (!((instance.startDate !== null))) {
    violations.push("[Loan] invariant violated: self.startDate <> null");
  }
  if (!((instance.dueDate !== null))) {
    violations.push("[Loan] invariant violated: self.dueDate <> null");
  }
  if (!((instance.lateFee >= 0))) {
    violations.push("[Loan] invariant violated: self.lateFee >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Reservation. Returns empty array when valid. */
export function validateReservation(instance: Reservation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reservationId !== null))) {
    violations.push("[Reservation] invariant violated: self.reservationId <> null");
  }
  if (!((instance.copy !== null))) {
    violations.push("[Reservation] invariant violated: self.copy <> null");
  }
  if (!((instance.borrower !== null))) {
    violations.push("[Reservation] invariant violated: self.borrower <> null");
  }
  if (!((instance.placedDate !== null))) {
    violations.push("[Reservation] invariant violated: self.placedDate <> null");
  }
  if (!((instance.expiresOn !== null))) {
    violations.push("[Reservation] invariant violated: self.expiresOn <> null");
  }
  return violations;
}

/** Runtime invariant check for CopyStateConstraints. Returns empty array when valid. */
export function validateCopyStateConstraints(instance: CopyStateConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.status = 'AVAILABLE' or bearer.status = 'LOANED' or bearer.status = 'RESERVED' — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentBorrower <> null implies bearer.status <> 'AVAILABLE' — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((instance.outcome !== null))) {
    violations.push("[LoanFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for LibrarySystem. Returns empty array when valid. */
export function validateLibrarySystem(instance: LibrarySystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[LibrarySystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.mutuallyExclusiveState === true))) {
    violations.push("[LibrarySystem] invariant violated: self.mutuallyExclusiveState = true");
  }
  if (!((instance.blocksLoansForIndebted === true))) {
    violations.push("[LibrarySystem] invariant violated: self.blocksLoansForIndebted = true");
  }
  if (!((instance.autoExpiresReservations === true))) {
    violations.push("[LibrarySystem] invariant violated: self.autoExpiresReservations = true");
  }
  if (!((instance.lateFeeComputed === true))) {
    violations.push("[LibrarySystem] invariant violated: self.lateFeeComputed = true");
  }
  if (!((instance.dailyLateFeeRate >= 0))) {
    violations.push("[LibrarySystem] invariant violated: self.dailyLateFeeRate >= 0.0");
  }
  if (!((instance.reservationExpiryDays === 7))) {
    violations.push("[LibrarySystem] invariant violated: self.reservationExpiryDays = 7");
  }
  return violations;
}

/** Runtime invariant check for ConsumerProtectionCompliant. Returns empty array when valid. */
export function validateConsumerProtectionCompliant(instance: ConsumerProtectionCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulationReference !== null))) {
    violations.push("[ConsumerProtectionCompliant] invariant violated: self.regulationReference <> null");
  }
  if (!((instance.feeDisclosurePolicy !== null))) {
    violations.push("[ConsumerProtectionCompliant] invariant violated: self.feeDisclosurePolicy <> null");
  }
  return violations;
}

/** Runtime invariant check for DataPrivacyCompliant. Returns empty array when valid. */
export function validateDataPrivacyCompliant(instance: DataPrivacyCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.privacyPolicyUrl !== null))) {
    violations.push("[DataPrivacyCompliant] invariant violated: self.privacyPolicyUrl <> null");
  }
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[DataPrivacyCompliant] invariant violated: self.dataRetentionDays > 0");
  }
  return violations;
}

/** Runtime invariant check for FinancialAuditCompliant. Returns empty array when valid. */
export function validateFinancialAuditCompliant(instance: FinancialAuditCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.auditTrailRetentionDays >= 365))) {
    violations.push("[FinancialAuditCompliant] invariant violated: self.auditTrailRetentionDays >= 365");
  }
  if (!((instance.calculationMethodDoc !== null))) {
    violations.push("[FinancialAuditCompliant] invariant violated: self.calculationMethodDoc <> null");
  }
  return violations;
}

/** Runtime invariant check for MutuallyExclusiveCopyState. Returns empty array when valid. */
export function validateMutuallyExclusiveCopyState(instance: MutuallyExclusiveCopyState): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.status <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for LateFeeFormula. Returns empty array when valid. */
export function validateLateFeeFormula(instance: LateFeeFormula): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.lateFee >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.dueDate <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.returnDate <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ReservationExpiryPolicy. Returns empty array when valid. */
export function validateReservationExpiryPolicy(instance: ReservationExpiryPolicy): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.expiresOn <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.isActive implies bearer.expiresOn <> bearer.placedDate — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionText !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionText <> null");
  }
  if (!((instance.assumptionNumber !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionNumber <> null");
  }
  return violations;
}

/** Runtime invariant check for LibrarySystemFormalized. Returns empty array when valid. */
export function validateLibrarySystemFormalized(instance: LibrarySystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.systemId <> null");
  }
  if (!((instance.regulationReference !== null))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.regulationReference <> null");
  }
  if (!((instance.feeDisclosurePolicy !== null))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.feeDisclosurePolicy <> null");
  }
  if (!((instance.privacyPolicyUrl !== null))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.privacyPolicyUrl <> null");
  }
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.dataRetentionDays > 0");
  }
  if (!((instance.auditTrailRetentionDays >= 365))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.auditTrailRetentionDays >= 365");
  }
  if (!((instance.calculationMethodDoc !== null))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.calculationMethodDoc <> null");
  }
  if (!((instance.lastRejectionReason !== null))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.lastRejectionReason <> null");
  }
  if (!((instance.activeLoanCount >= 0))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.activeLoanCount >= 0");
  }
  if (!((instance.totalLateFeesCollected >= 0))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.totalLateFeesCollected >= 0.0");
  }
  if (!((instance.mutuallyExclusiveState === true))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.mutuallyExclusiveState = true");
  }
  if (!((instance.blocksLoansForIndebted === true))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.blocksLoansForIndebted = true");
  }
  if (!((instance.autoExpiresReservations === true))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.autoExpiresReservations = true");
  }
  if (!((instance.lateFeeComputed === true))) {
    violations.push("[LibrarySystemFormalized] invariant violated: self.lateFeeComputed = true");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for CopyInventory.verifyCopyAvailable. User supplies this. */
export type CopyInventoryVerifyCopyAvailableImpl = (self: CopyInventory, copyId: string) => { self: CopyInventory; modified: { inventoryId: unknown } };

/** Contract-checking wrapper for CopyInventory.verifyCopyAvailable. */
export function wrapCopyInventoryVerifyCopyAvailable(impl: CopyInventoryVerifyCopyAvailableImpl): (self: CopyInventory, copyId: string) => CopyInventory {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.verifyCopyAvailable] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'AVAILABLE') — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.verifyCopyAvailable (async). User supplies this. */
export type CopyInventoryVerifyCopyAvailableAsyncImpl = (self: CopyInventory, copyId: string) => Promise<{ self: CopyInventory; modified: { inventoryId: unknown } }>;

/** Contract-checking wrapper for CopyInventory.verifyCopyAvailable (async). */
export function wrapCopyInventoryVerifyCopyAvailableAsync(impl: CopyInventoryVerifyCopyAvailableAsyncImpl): (self: CopyInventory, copyId: string) => Promise<CopyInventory> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.verifyCopyAvailable] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'AVAILABLE') — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.markCopyLoaned. User supplies this. */
export type CopyInventoryMarkCopyLoanedImpl = (self: CopyInventory, copyId: string, borrowerId: string) => { self: CopyInventory; modified: { copyStatuses: unknown } };

/** Contract-checking wrapper for CopyInventory.markCopyLoaned. */
export function wrapCopyInventoryMarkCopyLoaned(impl: CopyInventoryMarkCopyLoanedImpl): (self: CopyInventory, copyId: string, borrowerId: string) => CopyInventory {
  return (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.markCopyLoaned] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "AVAILABLE")))))) {
      preViolations.push("[CopyInventory.markCopyLoaned] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'AVAILABLE')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'LOANED' and c.currentBorrower = borrowerId
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.markCopyLoaned (async). User supplies this. */
export type CopyInventoryMarkCopyLoanedAsyncImpl = (self: CopyInventory, copyId: string, borrowerId: string) => Promise<{ self: CopyInventory; modified: { copyStatuses: unknown } }>;

/** Contract-checking wrapper for CopyInventory.markCopyLoaned (async). */
export function wrapCopyInventoryMarkCopyLoanedAsync(impl: CopyInventoryMarkCopyLoanedAsyncImpl): (self: CopyInventory, copyId: string, borrowerId: string) => Promise<CopyInventory> {
  return async (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.markCopyLoaned] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "AVAILABLE")))))) {
      preViolations.push("[CopyInventory.markCopyLoaned] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'AVAILABLE')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'LOANED' and c.currentBorrower = borrowerId
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.markCopyReturned. User supplies this. */
export type CopyInventoryMarkCopyReturnedImpl = (self: CopyInventory, copyId: string) => { self: CopyInventory; modified: { copyStatuses: unknown } };

/** Contract-checking wrapper for CopyInventory.markCopyReturned. */
export function wrapCopyInventoryMarkCopyReturned(impl: CopyInventoryMarkCopyReturnedImpl): (self: CopyInventory, copyId: string) => CopyInventory {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.markCopyReturned] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "LOANED")))))) {
      preViolations.push("[CopyInventory.markCopyReturned] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'LOANED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'AVAILABLE' and c.currentBorrower = null
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.markCopyReturned (async). User supplies this. */
export type CopyInventoryMarkCopyReturnedAsyncImpl = (self: CopyInventory, copyId: string) => Promise<{ self: CopyInventory; modified: { copyStatuses: unknown } }>;

/** Contract-checking wrapper for CopyInventory.markCopyReturned (async). */
export function wrapCopyInventoryMarkCopyReturnedAsync(impl: CopyInventoryMarkCopyReturnedAsyncImpl): (self: CopyInventory, copyId: string) => Promise<CopyInventory> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.markCopyReturned] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "LOANED")))))) {
      preViolations.push("[CopyInventory.markCopyReturned] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'LOANED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'AVAILABLE' and c.currentBorrower = null
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.markCopyReserved. User supplies this. */
export type CopyInventoryMarkCopyReservedImpl = (self: CopyInventory, copyId: string, borrowerId: string) => { self: CopyInventory; modified: { copyStatuses: unknown } };

/** Contract-checking wrapper for CopyInventory.markCopyReserved. */
export function wrapCopyInventoryMarkCopyReserved(impl: CopyInventoryMarkCopyReservedImpl): (self: CopyInventory, copyId: string, borrowerId: string) => CopyInventory {
  return (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.markCopyReserved] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "LOANED")))))) {
      preViolations.push("[CopyInventory.markCopyReserved] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'LOANED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'RESERVED' and c.currentBorrower = borrowerId
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.markCopyReserved (async). User supplies this. */
export type CopyInventoryMarkCopyReservedAsyncImpl = (self: CopyInventory, copyId: string, borrowerId: string) => Promise<{ self: CopyInventory; modified: { copyStatuses: unknown } }>;

/** Contract-checking wrapper for CopyInventory.markCopyReserved (async). */
export function wrapCopyInventoryMarkCopyReservedAsync(impl: CopyInventoryMarkCopyReservedAsyncImpl): (self: CopyInventory, copyId: string, borrowerId: string) => Promise<CopyInventory> {
  return async (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.markCopyReserved] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "LOANED")))))) {
      preViolations.push("[CopyInventory.markCopyReserved] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'LOANED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'RESERVED' and c.currentBorrower = borrowerId
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.expireCopyReservation. User supplies this. */
export type CopyInventoryExpireCopyReservationImpl = (self: CopyInventory, copyId: string) => { self: CopyInventory; modified: { copyStatuses: unknown } };

/** Contract-checking wrapper for CopyInventory.expireCopyReservation. */
export function wrapCopyInventoryExpireCopyReservation(impl: CopyInventoryExpireCopyReservationImpl): (self: CopyInventory, copyId: string) => CopyInventory {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.expireCopyReservation] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "RESERVED")))))) {
      preViolations.push("[CopyInventory.expireCopyReservation] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'RESERVED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'AVAILABLE' and c.currentBorrower = null
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.expireCopyReservation (async). User supplies this. */
export type CopyInventoryExpireCopyReservationAsyncImpl = (self: CopyInventory, copyId: string) => Promise<{ self: CopyInventory; modified: { copyStatuses: unknown } }>;

/** Contract-checking wrapper for CopyInventory.expireCopyReservation (async). */
export function wrapCopyInventoryExpireCopyReservationAsync(impl: CopyInventoryExpireCopyReservationAsyncImpl): (self: CopyInventory, copyId: string) => Promise<CopyInventory> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.expireCopyReservation] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => (((__x.copyId === copyId) && (__x.status === "RESERVED")))))) {
      preViolations.push("[CopyInventory.expireCopyReservation] pre violated: self.copyStatuses->exists(c | c.copyId = copyId and c.status = 'RESERVED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(
            c | if c.copyId = copyId then c.status = 'AVAILABLE' and c.currentBorrower = null
                else c.status = c.status@pre and c.currentBorrower = c.currentBorrower@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.doesCopyExist. User supplies this. */
export type CopyInventoryDoesCopyExistImpl = (self: CopyInventory, copyId: string) => { self: CopyInventory; modified: { inventoryId: unknown } };

/** Contract-checking wrapper for CopyInventory.doesCopyExist. */
export function wrapCopyInventoryDoesCopyExist(impl: CopyInventoryDoesCopyExistImpl): (self: CopyInventory, copyId: string) => CopyInventory {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.doesCopyExist] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.copyStatuses->exists(c | c.copyId = copyId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.doesCopyExist (async). User supplies this. */
export type CopyInventoryDoesCopyExistAsyncImpl = (self: CopyInventory, copyId: string) => Promise<{ self: CopyInventory; modified: { inventoryId: unknown } }>;

/** Contract-checking wrapper for CopyInventory.doesCopyExist (async). */
export function wrapCopyInventoryDoesCopyExistAsync(impl: CopyInventoryDoesCopyExistAsyncImpl): (self: CopyInventory, copyId: string) => Promise<CopyInventory> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.doesCopyExist] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.copyStatuses->exists(c | c.copyId = copyId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.getCopyStatus. User supplies this. */
export type CopyInventoryGetCopyStatusImpl = (self: CopyInventory, copyId: string) => { self: CopyInventory; modified: { inventoryId: unknown } };

/** Contract-checking wrapper for CopyInventory.getCopyStatus. */
export function wrapCopyInventoryGetCopyStatus(impl: CopyInventoryGetCopyStatusImpl): (self: CopyInventory, copyId: string) => CopyInventory {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.getCopyStatus] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => ((__x.copyId === copyId))))) {
      preViolations.push("[CopyInventory.getCopyStatus] pre violated: self.copyStatuses->exists(c | c.copyId = copyId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(c | c.copyId = copyId implies result = c.status) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for CopyInventory.getCopyStatus (async). User supplies this. */
export type CopyInventoryGetCopyStatusAsyncImpl = (self: CopyInventory, copyId: string) => Promise<{ self: CopyInventory; modified: { inventoryId: unknown } }>;

/** Contract-checking wrapper for CopyInventory.getCopyStatus (async). */
export function wrapCopyInventoryGetCopyStatusAsync(impl: CopyInventoryGetCopyStatusAsyncImpl): (self: CopyInventory, copyId: string) => Promise<CopyInventory> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[CopyInventory.getCopyStatus] pre violated: copyId <> null");
    }
    if (!(Array.from(self.copyStatuses).some((__x) => ((__x.copyId === copyId))))) {
      preViolations.push("[CopyInventory.getCopyStatus] pre violated: self.copyStatuses->exists(c | c.copyId = copyId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.copyStatuses->forAll(c | c.copyId = copyId implies result = c.status) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.verifyBorrowerEligible. User supplies this. */
export type BorrowerRegistryVerifyBorrowerEligibleImpl = (self: BorrowerRegistry, borrowerId: string) => { self: BorrowerRegistry; modified: { registryId: unknown } };

/** Contract-checking wrapper for BorrowerRegistry.verifyBorrowerEligible. */
export function wrapBorrowerRegistryVerifyBorrowerEligible(impl: BorrowerRegistryVerifyBorrowerEligibleImpl): (self: BorrowerRegistry, borrowerId: string) => BorrowerRegistry {
  return (self, borrowerId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.verifyBorrowerEligible] pre violated: borrowerId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.borrowers->exists(b | b.borrowerId = borrowerId and b.outstandingFees = 0.0) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.verifyBorrowerEligible (async). User supplies this. */
export type BorrowerRegistryVerifyBorrowerEligibleAsyncImpl = (self: BorrowerRegistry, borrowerId: string) => Promise<{ self: BorrowerRegistry; modified: { registryId: unknown } }>;

/** Contract-checking wrapper for BorrowerRegistry.verifyBorrowerEligible (async). */
export function wrapBorrowerRegistryVerifyBorrowerEligibleAsync(impl: BorrowerRegistryVerifyBorrowerEligibleAsyncImpl): (self: BorrowerRegistry, borrowerId: string) => Promise<BorrowerRegistry> {
  return async (self, borrowerId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.verifyBorrowerEligible] pre violated: borrowerId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.borrowers->exists(b | b.borrowerId = borrowerId and b.outstandingFees = 0.0) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.accrueLateFee. User supplies this. */
export type BorrowerRegistryAccrueLateFeeImpl = (self: BorrowerRegistry, borrowerId: string, amount: number) => { self: BorrowerRegistry; modified: { borrowers: unknown } };

/** Contract-checking wrapper for BorrowerRegistry.accrueLateFee. */
export function wrapBorrowerRegistryAccrueLateFee(impl: BorrowerRegistryAccrueLateFeeImpl): (self: BorrowerRegistry, borrowerId: string, amount: number) => BorrowerRegistry {
  return (self, borrowerId, amount) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.accrueLateFee] pre violated: borrowerId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[BorrowerRegistry.accrueLateFee] pre violated: amount >= 0.0");
    }
    if (!(Array.from(self.borrowers).some((__x) => ((__x.borrowerId === borrowerId))))) {
      preViolations.push("[BorrowerRegistry.accrueLateFee] pre violated: self.borrowers->exists(b | b.borrowerId = borrowerId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.borrowers->forAll(
            b | if b.borrowerId = borrowerId then b.outstandingFees = b.outstandingFees@pre + amount
                else b.outstandingFees = b.outstandingFees@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.accrueLateFee (async). User supplies this. */
export type BorrowerRegistryAccrueLateFeeAsyncImpl = (self: BorrowerRegistry, borrowerId: string, amount: number) => Promise<{ self: BorrowerRegistry; modified: { borrowers: unknown } }>;

/** Contract-checking wrapper for BorrowerRegistry.accrueLateFee (async). */
export function wrapBorrowerRegistryAccrueLateFeeAsync(impl: BorrowerRegistryAccrueLateFeeAsyncImpl): (self: BorrowerRegistry, borrowerId: string, amount: number) => Promise<BorrowerRegistry> {
  return async (self, borrowerId, amount) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.accrueLateFee] pre violated: borrowerId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[BorrowerRegistry.accrueLateFee] pre violated: amount >= 0.0");
    }
    if (!(Array.from(self.borrowers).some((__x) => ((__x.borrowerId === borrowerId))))) {
      preViolations.push("[BorrowerRegistry.accrueLateFee] pre violated: self.borrowers->exists(b | b.borrowerId = borrowerId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.borrowers->forAll(
            b | if b.borrowerId = borrowerId then b.outstandingFees = b.outstandingFees@pre + amount
                else b.outstandingFees = b.outstandingFees@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.payFee. User supplies this. */
export type BorrowerRegistryPayFeeImpl = (self: BorrowerRegistry, borrowerId: string, amount: number) => { self: BorrowerRegistry; modified: { borrowers: unknown } };

/** Contract-checking wrapper for BorrowerRegistry.payFee. */
export function wrapBorrowerRegistryPayFee(impl: BorrowerRegistryPayFeeImpl): (self: BorrowerRegistry, borrowerId: string, amount: number) => BorrowerRegistry {
  return (self, borrowerId, amount) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.payFee] pre violated: borrowerId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[BorrowerRegistry.payFee] pre violated: amount >= 0.0");
    }
    if (!(Array.from(self.borrowers).some((__x) => (((__x.borrowerId === borrowerId) && (__x.outstandingFees >= amount)))))) {
      preViolations.push("[BorrowerRegistry.payFee] pre violated: self.borrowers->exists(b | b.borrowerId = borrowerId and b.outstandingFees >= amount)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.borrowers->forAll(
            b | if b.borrowerId = borrowerId then b.outstandingFees = b.outstandingFees@pre - amount
                else b.outstandingFees = b.outstandingFees@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.payFee (async). User supplies this. */
export type BorrowerRegistryPayFeeAsyncImpl = (self: BorrowerRegistry, borrowerId: string, amount: number) => Promise<{ self: BorrowerRegistry; modified: { borrowers: unknown } }>;

/** Contract-checking wrapper for BorrowerRegistry.payFee (async). */
export function wrapBorrowerRegistryPayFeeAsync(impl: BorrowerRegistryPayFeeAsyncImpl): (self: BorrowerRegistry, borrowerId: string, amount: number) => Promise<BorrowerRegistry> {
  return async (self, borrowerId, amount) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.payFee] pre violated: borrowerId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[BorrowerRegistry.payFee] pre violated: amount >= 0.0");
    }
    if (!(Array.from(self.borrowers).some((__x) => (((__x.borrowerId === borrowerId) && (__x.outstandingFees >= amount)))))) {
      preViolations.push("[BorrowerRegistry.payFee] pre violated: self.borrowers->exists(b | b.borrowerId = borrowerId and b.outstandingFees >= amount)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, amount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.borrowers->forAll(
            b | if b.borrowerId = borrowerId then b.outstandingFees = b.outstandingFees@pre - amount
                else b.outstandingFees = b.outstandingFees@pre
                endif
          ) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.getOutstandingFees. User supplies this. */
export type BorrowerRegistryGetOutstandingFeesImpl = (self: BorrowerRegistry, borrowerId: string) => { self: BorrowerRegistry; modified: { registryId: unknown } };

/** Contract-checking wrapper for BorrowerRegistry.getOutstandingFees. */
export function wrapBorrowerRegistryGetOutstandingFees(impl: BorrowerRegistryGetOutstandingFeesImpl): (self: BorrowerRegistry, borrowerId: string) => BorrowerRegistry {
  return (self, borrowerId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.getOutstandingFees] pre violated: borrowerId <> null");
    }
    if (!(Array.from(self.borrowers).some((__x) => ((__x.borrowerId === borrowerId))))) {
      preViolations.push("[BorrowerRegistry.getOutstandingFees] pre violated: self.borrowers->exists(b | b.borrowerId = borrowerId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.borrowers->forAll(b | b.borrowerId = borrowerId implies result = b.outstandingFees) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BorrowerRegistry.getOutstandingFees (async). User supplies this. */
export type BorrowerRegistryGetOutstandingFeesAsyncImpl = (self: BorrowerRegistry, borrowerId: string) => Promise<{ self: BorrowerRegistry; modified: { registryId: unknown } }>;

/** Contract-checking wrapper for BorrowerRegistry.getOutstandingFees (async). */
export function wrapBorrowerRegistryGetOutstandingFeesAsync(impl: BorrowerRegistryGetOutstandingFeesAsyncImpl): (self: BorrowerRegistry, borrowerId: string) => Promise<BorrowerRegistry> {
  return async (self, borrowerId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[BorrowerRegistry.getOutstandingFees] pre violated: borrowerId <> null");
    }
    if (!(Array.from(self.borrowers).some((__x) => ((__x.borrowerId === borrowerId))))) {
      preViolations.push("[BorrowerRegistry.getOutstandingFees] pre violated: self.borrowers->exists(b | b.borrowerId = borrowerId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.borrowers->forAll(b | b.borrowerId = borrowerId implies result = b.outstandingFees) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.recordLoan. User supplies this. */
export type LoanLedgerRecordLoanImpl = (self: LoanLedger, copyId: string, borrowerId: string, loanId: string, startDate: string, dueDate: string) => { self: LoanLedger; modified: { loans: unknown } };

/** Contract-checking wrapper for LoanLedger.recordLoan. */
export function wrapLoanLedgerRecordLoan(impl: LoanLedgerRecordLoanImpl): (self: LoanLedger, copyId: string, borrowerId: string, loanId: string, startDate: string, dueDate: string) => LoanLedger {
  return (self, copyId, borrowerId, loanId, startDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: borrowerId <> null");
    }
    if (!((loanId !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: loanId <> null");
    }
    if (!((startDate !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: startDate <> null");
    }
    if (!((dueDate !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: dueDate <> null");
    }
    if (!(!(Array.from(self.loans).some((__x) => ((__x.loanId === loanId)))))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: not self.loans->exists(l | l.loanId = loanId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, borrowerId, loanId, startDate, dueDate);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.loans).some((__x) => (((((((__x.loanId === loanId) && (__x.copy?.copyId === copyId)) && (__x.borrower?.borrowerId === borrowerId)) && (__x.startDate === startDate)) && (__x.dueDate === dueDate)) && (__x.lateFee === 0)))))) {
        postViolations.push("[LoanLedger.recordLoan] post violated: self.loans->exists(l | l.loanId = loanId and l.copy.copyId = copyId\n                                  and l.borrower.borrowerId = borrowerId\n                                  and l.startDate = startDate and l.dueDate = dueDate\n                                  and l.lateFee = 0.0)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.recordLoan (async). User supplies this. */
export type LoanLedgerRecordLoanAsyncImpl = (self: LoanLedger, copyId: string, borrowerId: string, loanId: string, startDate: string, dueDate: string) => Promise<{ self: LoanLedger; modified: { loans: unknown } }>;

/** Contract-checking wrapper for LoanLedger.recordLoan (async). */
export function wrapLoanLedgerRecordLoanAsync(impl: LoanLedgerRecordLoanAsyncImpl): (self: LoanLedger, copyId: string, borrowerId: string, loanId: string, startDate: string, dueDate: string) => Promise<LoanLedger> {
  return async (self, copyId, borrowerId, loanId, startDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: borrowerId <> null");
    }
    if (!((loanId !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: loanId <> null");
    }
    if (!((startDate !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: startDate <> null");
    }
    if (!((dueDate !== null))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: dueDate <> null");
    }
    if (!(!(Array.from(self.loans).some((__x) => ((__x.loanId === loanId)))))) {
      preViolations.push("[LoanLedger.recordLoan] pre violated: not self.loans->exists(l | l.loanId = loanId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, borrowerId, loanId, startDate, dueDate);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.loans).some((__x) => (((((((__x.loanId === loanId) && (__x.copy?.copyId === copyId)) && (__x.borrower?.borrowerId === borrowerId)) && (__x.startDate === startDate)) && (__x.dueDate === dueDate)) && (__x.lateFee === 0)))))) {
        postViolations.push("[LoanLedger.recordLoan] post violated: self.loans->exists(l | l.loanId = loanId and l.copy.copyId = copyId\n                                  and l.borrower.borrowerId = borrowerId\n                                  and l.startDate = startDate and l.dueDate = dueDate\n                                  and l.lateFee = 0.0)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.processReturn. User supplies this. */
export type LoanLedgerProcessReturnImpl = (self: LoanLedger, copyId: string, returnDate: number, dueDate: number) => { self: LoanLedger; modified: { loans: unknown } };

/** Contract-checking wrapper for LoanLedger.processReturn. */
export function wrapLoanLedgerProcessReturn(impl: LoanLedgerProcessReturnImpl): (self: LoanLedger, copyId: string, returnDate: number, dueDate: number) => LoanLedger {
  return (self, copyId, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: copyId <> null");
    }
    if (!(Array.from(self.loans).some((__x) => (((__x.copy?.copyId === copyId) && (__x.returnDate === "")))))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: self.loans->exists(l | l.copy.copyId = copyId and l.returnDate = '')");
    }
    if (!((returnDate >= 0))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: returnDate >= 0.0");
    }
    if (!((dueDate >= 0))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: dueDate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, returnDate, dueDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if returnDate > dueDate then
            result = (returnDate - dueDate) * self.dailyLateFeeRate
          else
            result = 0.0
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.loans->forAll(l | if l.copy.copyId = copyId then
                                  l.lateFee = result
                                 else
                                  l.lateFee = l.lateFee@pre
                                 endif) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.processReturn (async). User supplies this. */
export type LoanLedgerProcessReturnAsyncImpl = (self: LoanLedger, copyId: string, returnDate: number, dueDate: number) => Promise<{ self: LoanLedger; modified: { loans: unknown } }>;

/** Contract-checking wrapper for LoanLedger.processReturn (async). */
export function wrapLoanLedgerProcessReturnAsync(impl: LoanLedgerProcessReturnAsyncImpl): (self: LoanLedger, copyId: string, returnDate: number, dueDate: number) => Promise<LoanLedger> {
  return async (self, copyId, returnDate, dueDate) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: copyId <> null");
    }
    if (!(Array.from(self.loans).some((__x) => (((__x.copy?.copyId === copyId) && (__x.returnDate === "")))))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: self.loans->exists(l | l.copy.copyId = copyId and l.returnDate = '')");
    }
    if (!((returnDate >= 0))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: returnDate >= 0.0");
    }
    if (!((dueDate >= 0))) {
      preViolations.push("[LoanLedger.processReturn] pre violated: dueDate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, returnDate, dueDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if returnDate > dueDate then
            result = (returnDate - dueDate) * self.dailyLateFeeRate
          else
            result = 0.0
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.loans->forAll(l | if l.copy.copyId = copyId then
                                  l.lateFee = result
                                 else
                                  l.lateFee = l.lateFee@pre
                                 endif) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.isCopyOnLoan. User supplies this. */
export type LoanLedgerIsCopyOnLoanImpl = (self: LoanLedger, copyId: string) => { self: LoanLedger; modified: { ledgerId: unknown } };

/** Contract-checking wrapper for LoanLedger.isCopyOnLoan. */
export function wrapLoanLedgerIsCopyOnLoan(impl: LoanLedgerIsCopyOnLoanImpl): (self: LoanLedger, copyId: string) => LoanLedger {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.isCopyOnLoan] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.loans->exists(l | l.copy.copyId = copyId and l.returnDate = '') — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.isCopyOnLoan (async). User supplies this. */
export type LoanLedgerIsCopyOnLoanAsyncImpl = (self: LoanLedger, copyId: string) => Promise<{ self: LoanLedger; modified: { ledgerId: unknown } }>;

/** Contract-checking wrapper for LoanLedger.isCopyOnLoan (async). */
export function wrapLoanLedgerIsCopyOnLoanAsync(impl: LoanLedgerIsCopyOnLoanAsyncImpl): (self: LoanLedger, copyId: string) => Promise<LoanLedger> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.isCopyOnLoan] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.loans->exists(l | l.copy.copyId = copyId and l.returnDate = '') — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.getBorrowerOfCopy. User supplies this. */
export type LoanLedgerGetBorrowerOfCopyImpl = (self: LoanLedger, copyId: string) => { self: LoanLedger; modified: { ledgerId: unknown } };

/** Contract-checking wrapper for LoanLedger.getBorrowerOfCopy. */
export function wrapLoanLedgerGetBorrowerOfCopy(impl: LoanLedgerGetBorrowerOfCopyImpl): (self: LoanLedger, copyId: string) => LoanLedger {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.getBorrowerOfCopy] pre violated: copyId <> null");
    }
    if (!(Array.from(self.loans).some((__x) => (((__x.copy?.copyId === copyId) && (__x.returnDate === "")))))) {
      preViolations.push("[LoanLedger.getBorrowerOfCopy] pre violated: self.loans->exists(l | l.copy.copyId = copyId and l.returnDate = '')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.loans->forAll(l | l.copy.copyId = copyId and l.returnDate = ''
                                implies result = l.borrower.borrowerId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LoanLedger.getBorrowerOfCopy (async). User supplies this. */
export type LoanLedgerGetBorrowerOfCopyAsyncImpl = (self: LoanLedger, copyId: string) => Promise<{ self: LoanLedger; modified: { ledgerId: unknown } }>;

/** Contract-checking wrapper for LoanLedger.getBorrowerOfCopy (async). */
export function wrapLoanLedgerGetBorrowerOfCopyAsync(impl: LoanLedgerGetBorrowerOfCopyAsyncImpl): (self: LoanLedger, copyId: string) => Promise<LoanLedger> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LoanLedger.getBorrowerOfCopy] pre violated: copyId <> null");
    }
    if (!(Array.from(self.loans).some((__x) => (((__x.copy?.copyId === copyId) && (__x.returnDate === "")))))) {
      preViolations.push("[LoanLedger.getBorrowerOfCopy] pre violated: self.loans->exists(l | l.copy.copyId = copyId and l.returnDate = '')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.loans->forAll(l | l.copy.copyId = copyId and l.returnDate = ''
                                implies result = l.borrower.borrowerId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.placeReservation. User supplies this. */
export type ReservationManagerPlaceReservationImpl = (self: ReservationManager, copyId: string, borrowerId: string, placedDate: string, reservationId: string) => { self: ReservationManager; modified: { reservations: unknown } };

/** Contract-checking wrapper for ReservationManager.placeReservation. */
export function wrapReservationManagerPlaceReservation(impl: ReservationManagerPlaceReservationImpl): (self: ReservationManager, copyId: string, borrowerId: string, placedDate: string, reservationId: string) => ReservationManager {
  return (self, copyId, borrowerId, placedDate, reservationId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: borrowerId <> null");
    }
    if (!((placedDate !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: placedDate <> null");
    }
    if (!((reservationId !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: reservationId <> null");
    }
    if (!(!(Array.from(self.reservations).some((__x) => ((__x.reservationId === reservationId)))))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: not self.reservations->exists(r | r.reservationId = reservationId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, borrowerId, placedDate, reservationId);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.reservations).some((__x) => ((((((__x.reservationId === reservationId) && (__x.copy?.copyId === copyId)) && (__x.borrower?.borrowerId === borrowerId)) && (__x.placedDate === placedDate)) && (__x.isActive === true)))))) {
        postViolations.push("[ReservationManager.placeReservation] post violated: self.reservations->exists(r | r.reservationId = reservationId\n                                        and r.copy.copyId = copyId\n                                        and r.borrower.borrowerId = borrowerId\n                                        and r.placedDate = placedDate\n                                        and r.isActive = true)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.placeReservation (async). User supplies this. */
export type ReservationManagerPlaceReservationAsyncImpl = (self: ReservationManager, copyId: string, borrowerId: string, placedDate: string, reservationId: string) => Promise<{ self: ReservationManager; modified: { reservations: unknown } }>;

/** Contract-checking wrapper for ReservationManager.placeReservation (async). */
export function wrapReservationManagerPlaceReservationAsync(impl: ReservationManagerPlaceReservationAsyncImpl): (self: ReservationManager, copyId: string, borrowerId: string, placedDate: string, reservationId: string) => Promise<ReservationManager> {
  return async (self, copyId, borrowerId, placedDate, reservationId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: borrowerId <> null");
    }
    if (!((placedDate !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: placedDate <> null");
    }
    if (!((reservationId !== null))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: reservationId <> null");
    }
    if (!(!(Array.from(self.reservations).some((__x) => ((__x.reservationId === reservationId)))))) {
      preViolations.push("[ReservationManager.placeReservation] pre violated: not self.reservations->exists(r | r.reservationId = reservationId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, borrowerId, placedDate, reservationId);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.reservations).some((__x) => ((((((__x.reservationId === reservationId) && (__x.copy?.copyId === copyId)) && (__x.borrower?.borrowerId === borrowerId)) && (__x.placedDate === placedDate)) && (__x.isActive === true)))))) {
        postViolations.push("[ReservationManager.placeReservation] post violated: self.reservations->exists(r | r.reservationId = reservationId\n                                        and r.copy.copyId = copyId\n                                        and r.borrower.borrowerId = borrowerId\n                                        and r.placedDate = placedDate\n                                        and r.isActive = true)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.hasPendingReservation. User supplies this. */
export type ReservationManagerHasPendingReservationImpl = (self: ReservationManager, copyId: string) => { self: ReservationManager; modified: { reservationManagerId: unknown } };

/** Contract-checking wrapper for ReservationManager.hasPendingReservation. */
export function wrapReservationManagerHasPendingReservation(impl: ReservationManagerHasPendingReservationImpl): (self: ReservationManager, copyId: string) => ReservationManager {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[ReservationManager.hasPendingReservation] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.reservations->exists(r | r.copy.copyId = copyId
                                                 and r.isActive = true) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.hasPendingReservation (async). User supplies this. */
export type ReservationManagerHasPendingReservationAsyncImpl = (self: ReservationManager, copyId: string) => Promise<{ self: ReservationManager; modified: { reservationManagerId: unknown } }>;

/** Contract-checking wrapper for ReservationManager.hasPendingReservation (async). */
export function wrapReservationManagerHasPendingReservationAsync(impl: ReservationManagerHasPendingReservationAsyncImpl): (self: ReservationManager, copyId: string) => Promise<ReservationManager> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[ReservationManager.hasPendingReservation] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.reservations->exists(r | r.copy.copyId = copyId
                                                 and r.isActive = true) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.getNextReservationBorrower. User supplies this. */
export type ReservationManagerGetNextReservationBorrowerImpl = (self: ReservationManager, copyId: string) => { self: ReservationManager; modified: { reservationManagerId: unknown } };

/** Contract-checking wrapper for ReservationManager.getNextReservationBorrower. */
export function wrapReservationManagerGetNextReservationBorrower(impl: ReservationManagerGetNextReservationBorrowerImpl): (self: ReservationManager, copyId: string) => ReservationManager {
  return (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[ReservationManager.getNextReservationBorrower] pre violated: copyId <> null");
    }
    if (!(Array.from(self.reservations).some((__x) => (((__x.copy?.copyId === copyId) && (__x.isActive === true)))))) {
      preViolations.push("[ReservationManager.getNextReservationBorrower] pre violated: self.reservations->exists(r | r.copy.copyId = copyId and r.isActive = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.reservations->forAll(r | r.copy.copyId = copyId and r.isActive = true
                                      implies result = r.borrower.borrowerId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.getNextReservationBorrower (async). User supplies this. */
export type ReservationManagerGetNextReservationBorrowerAsyncImpl = (self: ReservationManager, copyId: string) => Promise<{ self: ReservationManager; modified: { reservationManagerId: unknown } }>;

/** Contract-checking wrapper for ReservationManager.getNextReservationBorrower (async). */
export function wrapReservationManagerGetNextReservationBorrowerAsync(impl: ReservationManagerGetNextReservationBorrowerAsyncImpl): (self: ReservationManager, copyId: string) => Promise<ReservationManager> {
  return async (self, copyId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[ReservationManager.getNextReservationBorrower] pre violated: copyId <> null");
    }
    if (!(Array.from(self.reservations).some((__x) => (((__x.copy?.copyId === copyId) && (__x.isActive === true)))))) {
      preViolations.push("[ReservationManager.getNextReservationBorrower] pre violated: self.reservations->exists(r | r.copy.copyId = copyId and r.isActive = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.reservations->forAll(r | r.copy.copyId = copyId and r.isActive = true
                                      implies result = r.borrower.borrowerId) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.expireOldReservation. User supplies this. */
export type ReservationManagerExpireOldReservationImpl = (self: ReservationManager, reservationId: string) => { self: ReservationManager; modified: { reservations: unknown } };

/** Contract-checking wrapper for ReservationManager.expireOldReservation. */
export function wrapReservationManagerExpireOldReservation(impl: ReservationManagerExpireOldReservationImpl): (self: ReservationManager, reservationId: string) => ReservationManager {
  return (self, reservationId) => {
    const preViolations: string[] = [];
    if (!((reservationId !== null))) {
      preViolations.push("[ReservationManager.expireOldReservation] pre violated: reservationId <> null");
    }
    if (!(Array.from(self.reservations).some((__x) => (((__x.reservationId === reservationId) && (__x.isActive === true)))))) {
      preViolations.push("[ReservationManager.expireOldReservation] pre violated: self.reservations->exists(r | r.reservationId = reservationId and r.isActive = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reservationId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.reservations->forAll(r | if r.reservationId = reservationId then r.isActive = false
                                        else r.isActive = r.isActive@pre endif) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservationManager.expireOldReservation (async). User supplies this. */
export type ReservationManagerExpireOldReservationAsyncImpl = (self: ReservationManager, reservationId: string) => Promise<{ self: ReservationManager; modified: { reservations: unknown } }>;

/** Contract-checking wrapper for ReservationManager.expireOldReservation (async). */
export function wrapReservationManagerExpireOldReservationAsync(impl: ReservationManagerExpireOldReservationAsyncImpl): (self: ReservationManager, reservationId: string) => Promise<ReservationManager> {
  return async (self, reservationId) => {
    const preViolations: string[] = [];
    if (!((reservationId !== null))) {
      preViolations.push("[ReservationManager.expireOldReservation] pre violated: reservationId <> null");
    }
    if (!(Array.from(self.reservations).some((__x) => (((__x.reservationId === reservationId) && (__x.isActive === true)))))) {
      preViolations.push("[ReservationManager.expireOldReservation] pre violated: self.reservations->exists(r | r.reservationId = reservationId and r.isActive = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reservationId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.reservations->forAll(r | if r.reservationId = reservationId then r.isActive = false
                                        else r.isActive = r.isActive@pre endif) — @pre supported only on self.<prop> (depth 1)
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AuditLogger.logTransition. User supplies this. */
export type AuditLoggerLogTransitionImpl = (self: AuditLogger, entityId: string, fromState: string, toState: string, timestamp: string) => { self: AuditLogger; modified: { auditLog: unknown } };

/** Contract-checking wrapper for AuditLogger.logTransition. */
export function wrapAuditLoggerLogTransition(impl: AuditLoggerLogTransitionImpl): (self: AuditLogger, entityId: string, fromState: string, toState: string, timestamp: string) => AuditLogger {
  return (self, entityId, fromState, toState, timestamp) => {
    const preViolations: string[] = [];
    if (!((entityId !== null))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: entityId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: toState <> null");
    }
    if (!((fromState !== toState))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: fromState <> toState");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entityId, fromState, toState, timestamp);
      const postViolations: string[] = [];
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AuditLogger.logTransition] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
      }
      if (!(true)) {
        postViolations.push("[AuditLogger.logTransition] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AuditLogger.logTransition (async). User supplies this. */
export type AuditLoggerLogTransitionAsyncImpl = (self: AuditLogger, entityId: string, fromState: string, toState: string, timestamp: string) => Promise<{ self: AuditLogger; modified: { auditLog: unknown } }>;

/** Contract-checking wrapper for AuditLogger.logTransition (async). */
export function wrapAuditLoggerLogTransitionAsync(impl: AuditLoggerLogTransitionAsyncImpl): (self: AuditLogger, entityId: string, fromState: string, toState: string, timestamp: string) => Promise<AuditLogger> {
  return async (self, entityId, fromState, toState, timestamp) => {
    const preViolations: string[] = [];
    if (!((entityId !== null))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: entityId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: toState <> null");
    }
    if (!((fromState !== toState))) {
      preViolations.push("[AuditLogger.logTransition] pre violated: fromState <> toState");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entityId, fromState, toState, timestamp);
      const postViolations: string[] = [];
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AuditLogger.logTransition] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
      }
      if (!(true)) {
        postViolations.push("[AuditLogger.logTransition] post violated: true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.requestLoan. User supplies this. */
export type LibrarySystemRequestLoanImpl = (self: LibrarySystem, copyId: string, borrowerId: string) => { self: LibrarySystem; modified: { mutuallyExclusiveState: unknown; blocksLoansForIndebted: unknown } };

/** Contract-checking wrapper for LibrarySystem.requestLoan. */
export function wrapLibrarySystemRequestLoan(impl: LibrarySystemRequestLoanImpl): (self: LibrarySystem, copyId: string, borrowerId: string) => LibrarySystem {
  return (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystem.requestLoan] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystem.requestLoan] pre violated: borrowerId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.mutuallyExclusiveState === true))) {
        postViolations.push("[LibrarySystem.requestLoan] post violated: self.mutuallyExclusiveState = true");
      }
      if (!((__result.self.blocksLoansForIndebted === true))) {
        postViolations.push("[LibrarySystem.requestLoan] post violated: self.blocksLoansForIndebted = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.requestLoan (async). User supplies this. */
export type LibrarySystemRequestLoanAsyncImpl = (self: LibrarySystem, copyId: string, borrowerId: string) => Promise<{ self: LibrarySystem; modified: { mutuallyExclusiveState: unknown; blocksLoansForIndebted: unknown } }>;

/** Contract-checking wrapper for LibrarySystem.requestLoan (async). */
export function wrapLibrarySystemRequestLoanAsync(impl: LibrarySystemRequestLoanAsyncImpl): (self: LibrarySystem, copyId: string, borrowerId: string) => Promise<LibrarySystem> {
  return async (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystem.requestLoan] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystem.requestLoan] pre violated: borrowerId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, borrowerId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.mutuallyExclusiveState === true))) {
        postViolations.push("[LibrarySystem.requestLoan] post violated: self.mutuallyExclusiveState = true");
      }
      if (!((__result.self.blocksLoansForIndebted === true))) {
        postViolations.push("[LibrarySystem.requestLoan] post violated: self.blocksLoansForIndebted = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.returnCopy. User supplies this. */
export type LibrarySystemReturnCopyImpl = (self: LibrarySystem, copyId: string, returnDate: string) => { self: LibrarySystem; modified: { lateFeeComputed: unknown } };

/** Contract-checking wrapper for LibrarySystem.returnCopy. */
export function wrapLibrarySystemReturnCopy(impl: LibrarySystemReturnCopyImpl): (self: LibrarySystem, copyId: string, returnDate: string) => LibrarySystem {
  return (self, copyId, returnDate) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystem.returnCopy] pre violated: copyId <> null");
    }
    if (!((returnDate !== null))) {
      preViolations.push("[LibrarySystem.returnCopy] pre violated: returnDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, returnDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.lateFeeComputed === true))) {
        postViolations.push("[LibrarySystem.returnCopy] post violated: self.lateFeeComputed = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.returnCopy (async). User supplies this. */
export type LibrarySystemReturnCopyAsyncImpl = (self: LibrarySystem, copyId: string, returnDate: string) => Promise<{ self: LibrarySystem; modified: { lateFeeComputed: unknown } }>;

/** Contract-checking wrapper for LibrarySystem.returnCopy (async). */
export function wrapLibrarySystemReturnCopyAsync(impl: LibrarySystemReturnCopyAsyncImpl): (self: LibrarySystem, copyId: string, returnDate: string) => Promise<LibrarySystem> {
  return async (self, copyId, returnDate) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystem.returnCopy] pre violated: copyId <> null");
    }
    if (!((returnDate !== null))) {
      preViolations.push("[LibrarySystem.returnCopy] pre violated: returnDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, returnDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.lateFeeComputed === true))) {
        postViolations.push("[LibrarySystem.returnCopy] post violated: self.lateFeeComputed = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.placeReservation. User supplies this. */
export type LibrarySystemPlaceReservationImpl = (self: LibrarySystem, copyId: string, borrowerId: string) => { self: LibrarySystem; modified: { autoExpiresReservations: unknown } };

/** Contract-checking wrapper for LibrarySystem.placeReservation. */
export function wrapLibrarySystemPlaceReservation(impl: LibrarySystemPlaceReservationImpl): (self: LibrarySystem, copyId: string, borrowerId: string) => LibrarySystem {
  return (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystem.placeReservation] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystem.placeReservation] pre violated: borrowerId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, borrowerId);
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

/** Impl signature for LibrarySystem.placeReservation (async). User supplies this. */
export type LibrarySystemPlaceReservationAsyncImpl = (self: LibrarySystem, copyId: string, borrowerId: string) => Promise<{ self: LibrarySystem; modified: { autoExpiresReservations: unknown } }>;

/** Contract-checking wrapper for LibrarySystem.placeReservation (async). */
export function wrapLibrarySystemPlaceReservationAsync(impl: LibrarySystemPlaceReservationAsyncImpl): (self: LibrarySystem, copyId: string, borrowerId: string) => Promise<LibrarySystem> {
  return async (self, copyId, borrowerId) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystem.placeReservation] pre violated: copyId <> null");
    }
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystem.placeReservation] pre violated: borrowerId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, borrowerId);
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

/** Impl signature for LibrarySystem.expireStaleReservation. User supplies this. */
export type LibrarySystemExpireStaleReservationImpl = (self: LibrarySystem, reservationId: string) => { self: LibrarySystem; modified: { autoExpiresReservations: unknown } };

/** Contract-checking wrapper for LibrarySystem.expireStaleReservation. */
export function wrapLibrarySystemExpireStaleReservation(impl: LibrarySystemExpireStaleReservationImpl): (self: LibrarySystem, reservationId: string) => LibrarySystem {
  return (self, reservationId) => {
    const preViolations: string[] = [];
    if (!((reservationId !== null))) {
      preViolations.push("[LibrarySystem.expireStaleReservation] pre violated: reservationId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reservationId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.autoExpiresReservations === true))) {
        postViolations.push("[LibrarySystem.expireStaleReservation] post violated: self.autoExpiresReservations = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.expireStaleReservation (async). User supplies this. */
export type LibrarySystemExpireStaleReservationAsyncImpl = (self: LibrarySystem, reservationId: string) => Promise<{ self: LibrarySystem; modified: { autoExpiresReservations: unknown } }>;

/** Contract-checking wrapper for LibrarySystem.expireStaleReservation (async). */
export function wrapLibrarySystemExpireStaleReservationAsync(impl: LibrarySystemExpireStaleReservationAsyncImpl): (self: LibrarySystem, reservationId: string) => Promise<LibrarySystem> {
  return async (self, reservationId) => {
    const preViolations: string[] = [];
    if (!((reservationId !== null))) {
      preViolations.push("[LibrarySystem.expireStaleReservation] pre violated: reservationId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reservationId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.autoExpiresReservations === true))) {
        postViolations.push("[LibrarySystem.expireStaleReservation] post violated: self.autoExpiresReservations = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystem.payLateFee. User supplies this. */
export type LibrarySystemPayLateFeeImpl = (self: LibrarySystem, borrowerId: string, amount: number) => { self: LibrarySystem; modified: { lateFeeComputed: unknown } };

/** Contract-checking wrapper for LibrarySystem.payLateFee. */
export function wrapLibrarySystemPayLateFee(impl: LibrarySystemPayLateFeeImpl): (self: LibrarySystem, borrowerId: string, amount: number) => LibrarySystem {
  return (self, borrowerId, amount) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystem.payLateFee] pre violated: borrowerId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[LibrarySystem.payLateFee] pre violated: amount >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, amount);
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

/** Impl signature for LibrarySystem.payLateFee (async). User supplies this. */
export type LibrarySystemPayLateFeeAsyncImpl = (self: LibrarySystem, borrowerId: string, amount: number) => Promise<{ self: LibrarySystem; modified: { lateFeeComputed: unknown } }>;

/** Contract-checking wrapper for LibrarySystem.payLateFee (async). */
export function wrapLibrarySystemPayLateFeeAsync(impl: LibrarySystemPayLateFeeAsyncImpl): (self: LibrarySystem, borrowerId: string, amount: number) => Promise<LibrarySystem> {
  return async (self, borrowerId, amount) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystem.payLateFee] pre violated: borrowerId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[LibrarySystem.payLateFee] pre violated: amount >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, amount);
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

/** Impl signature for LibrarySystemFormalized.enforceDebtFreeBorrowerCheck. User supplies this. */
export type LibrarySystemFormalizedEnforceDebtFreeBorrowerCheckImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => { self: LibrarySystemFormalized; modified: { lastRejectionReason: unknown; lastRejectionTimestamp: unknown } };

/** Contract-checking wrapper for LibrarySystemFormalized.enforceDebtFreeBorrowerCheck. */
export function wrapLibrarySystemFormalizedEnforceDebtFreeBorrowerCheck(impl: LibrarySystemFormalizedEnforceDebtFreeBorrowerCheckImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => LibrarySystemFormalized {
  return (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] pre violated: copyId <> null");
    }
    if (!((self.blocksLoansForIndebted === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] pre violated: self.blocksLoansForIndebted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!((__result.self.lastRejectionReason === "Borrower has outstanding fees"))) {
        postViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] post violated: self.lastRejectionReason = 'Borrower has outstanding fees'");
      }
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceDebtFreeBorrowerCheck (async). User supplies this. */
export type LibrarySystemFormalizedEnforceDebtFreeBorrowerCheckAsyncImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<{ self: LibrarySystemFormalized; modified: { lastRejectionReason: unknown; lastRejectionTimestamp: unknown } }>;

/** Contract-checking wrapper for LibrarySystemFormalized.enforceDebtFreeBorrowerCheck (async). */
export function wrapLibrarySystemFormalizedEnforceDebtFreeBorrowerCheckAsync(impl: LibrarySystemFormalizedEnforceDebtFreeBorrowerCheckAsyncImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<LibrarySystemFormalized> {
  return async (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] pre violated: copyId <> null");
    }
    if (!((self.blocksLoansForIndebted === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] pre violated: self.blocksLoansForIndebted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!((__result.self.lastRejectionReason === "Borrower has outstanding fees"))) {
        postViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] post violated: self.lastRejectionReason = 'Borrower has outstanding fees'");
      }
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.enforceDebtFreeBorrowerCheck] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceCopyAvailabilityCheck. User supplies this. */
export type LibrarySystemFormalizedEnforceCopyAvailabilityCheckImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => { self: LibrarySystemFormalized; modified: { lastRejectionReason: unknown; lastRejectionTimestamp: unknown } };

/** Contract-checking wrapper for LibrarySystemFormalized.enforceCopyAvailabilityCheck. */
export function wrapLibrarySystemFormalizedEnforceCopyAvailabilityCheck(impl: LibrarySystemFormalizedEnforceCopyAvailabilityCheckImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => LibrarySystemFormalized {
  return (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] pre violated: copyId <> null");
    }
    if (!((self.mutuallyExclusiveState === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] pre violated: self.mutuallyExclusiveState = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!((__result.self.lastRejectionReason === "Copy not available"))) {
        postViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] post violated: self.lastRejectionReason = 'Copy not available'");
      }
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceCopyAvailabilityCheck (async). User supplies this. */
export type LibrarySystemFormalizedEnforceCopyAvailabilityCheckAsyncImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<{ self: LibrarySystemFormalized; modified: { lastRejectionReason: unknown; lastRejectionTimestamp: unknown } }>;

/** Contract-checking wrapper for LibrarySystemFormalized.enforceCopyAvailabilityCheck (async). */
export function wrapLibrarySystemFormalizedEnforceCopyAvailabilityCheckAsync(impl: LibrarySystemFormalizedEnforceCopyAvailabilityCheckAsyncImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<LibrarySystemFormalized> {
  return async (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] pre violated: copyId <> null");
    }
    if (!((self.mutuallyExclusiveState === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] pre violated: self.mutuallyExclusiveState = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!((__result.self.lastRejectionReason === "Copy not available"))) {
        postViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] post violated: self.lastRejectionReason = 'Copy not available'");
      }
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.enforceCopyAvailabilityCheck] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceReservationExpiry. User supplies this. */
export type LibrarySystemFormalizedEnforceReservationExpiryImpl = (self: LibrarySystemFormalized, reservationId: string) => { self: LibrarySystemFormalized; modified: { autoExpiresReservations: unknown } };

/** Contract-checking wrapper for LibrarySystemFormalized.enforceReservationExpiry. */
export function wrapLibrarySystemFormalizedEnforceReservationExpiry(impl: LibrarySystemFormalizedEnforceReservationExpiryImpl): (self: LibrarySystemFormalized, reservationId: string) => LibrarySystemFormalized {
  return (self, reservationId) => {
    const preViolations: string[] = [];
    if (!((reservationId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationExpiry] pre violated: reservationId <> null");
    }
    if (!((self.autoExpiresReservations === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationExpiry] pre violated: self.autoExpiresReservations = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reservationId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.autoExpiresReservations === true))) {
        postViolations.push("[LibrarySystemFormalized.enforceReservationExpiry] post violated: self.autoExpiresReservations = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceReservationExpiry (async). User supplies this. */
export type LibrarySystemFormalizedEnforceReservationExpiryAsyncImpl = (self: LibrarySystemFormalized, reservationId: string) => Promise<{ self: LibrarySystemFormalized; modified: { autoExpiresReservations: unknown } }>;

/** Contract-checking wrapper for LibrarySystemFormalized.enforceReservationExpiry (async). */
export function wrapLibrarySystemFormalizedEnforceReservationExpiryAsync(impl: LibrarySystemFormalizedEnforceReservationExpiryAsyncImpl): (self: LibrarySystemFormalized, reservationId: string) => Promise<LibrarySystemFormalized> {
  return async (self, reservationId) => {
    const preViolations: string[] = [];
    if (!((reservationId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationExpiry] pre violated: reservationId <> null");
    }
    if (!((self.autoExpiresReservations === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationExpiry] pre violated: self.autoExpiresReservations = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reservationId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.autoExpiresReservations === true))) {
        postViolations.push("[LibrarySystemFormalized.enforceReservationExpiry] post violated: self.autoExpiresReservations = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceLateFeeComputation. User supplies this. */
export type LibrarySystemFormalizedEnforceLateFeeComputationImpl = (self: LibrarySystemFormalized, loanId: string, returnDate: string) => { self: LibrarySystemFormalized; modified: { lateFeeComputed: unknown; totalLateFeesCollected: unknown } };

/** Contract-checking wrapper for LibrarySystemFormalized.enforceLateFeeComputation. */
export function wrapLibrarySystemFormalizedEnforceLateFeeComputation(impl: LibrarySystemFormalizedEnforceLateFeeComputationImpl): (self: LibrarySystemFormalized, loanId: string, returnDate: string) => LibrarySystemFormalized {
  return (self, loanId, returnDate) => {
    const preViolations: string[] = [];
    if (!((loanId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] pre violated: loanId <> null");
    }
    if (!((returnDate !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] pre violated: returnDate <> null");
    }
    if (!((self.lateFeeComputed === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] pre violated: self.lateFeeComputed = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.totalLateFeesCollected": self.totalLateFeesCollected,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, loanId, returnDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result = 0.0 — unbound variable 'result'
      if (!((__result.self.lateFeeComputed === true))) {
        postViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] post violated: self.lateFeeComputed = true");
      }
      // SKIPPED post-clause (not translatable): self.totalLateFeesCollected = self.totalLateFeesCollected@pre + result — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceLateFeeComputation (async). User supplies this. */
export type LibrarySystemFormalizedEnforceLateFeeComputationAsyncImpl = (self: LibrarySystemFormalized, loanId: string, returnDate: string) => Promise<{ self: LibrarySystemFormalized; modified: { lateFeeComputed: unknown; totalLateFeesCollected: unknown } }>;

/** Contract-checking wrapper for LibrarySystemFormalized.enforceLateFeeComputation (async). */
export function wrapLibrarySystemFormalizedEnforceLateFeeComputationAsync(impl: LibrarySystemFormalizedEnforceLateFeeComputationAsyncImpl): (self: LibrarySystemFormalized, loanId: string, returnDate: string) => Promise<LibrarySystemFormalized> {
  return async (self, loanId, returnDate) => {
    const preViolations: string[] = [];
    if (!((loanId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] pre violated: loanId <> null");
    }
    if (!((returnDate !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] pre violated: returnDate <> null");
    }
    if (!((self.lateFeeComputed === true))) {
      preViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] pre violated: self.lateFeeComputed = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.totalLateFeesCollected": self.totalLateFeesCollected,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, loanId, returnDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result = 0.0 — unbound variable 'result'
      if (!((__result.self.lateFeeComputed === true))) {
        postViolations.push("[LibrarySystemFormalized.enforceLateFeeComputation] post violated: self.lateFeeComputed = true");
      }
      // SKIPPED post-clause (not translatable): self.totalLateFeesCollected = self.totalLateFeesCollected@pre + result — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.logCopyStateTransition. User supplies this. */
export type LibrarySystemFormalizedLogCopyStateTransitionImpl = (self: LibrarySystemFormalized, copyId: string, fromState: string, toState: string) => { self: LibrarySystemFormalized; modified: { lastRejectionTimestamp: unknown } };

/** Contract-checking wrapper for LibrarySystemFormalized.logCopyStateTransition. */
export function wrapLibrarySystemFormalizedLogCopyStateTransition(impl: LibrarySystemFormalizedLogCopyStateTransitionImpl): (self: LibrarySystemFormalized, copyId: string, fromState: string, toState: string) => LibrarySystemFormalized {
  return (self, copyId, fromState, toState) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: copyId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: toState <> null");
    }
    if (!((fromState !== toState))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: fromState <> toState");
    }
    if (!((((fromState === "AVAILABLE") || (fromState === "LOANED")) || (fromState === "RESERVED")))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: fromState = 'AVAILABLE' or fromState = 'LOANED' or fromState = 'RESERVED'");
    }
    if (!((((toState === "AVAILABLE") || (toState === "LOANED")) || (toState === "RESERVED")))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: toState = 'AVAILABLE' or toState = 'LOANED' or toState = 'RESERVED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, copyId, fromState, toState);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.logCopyStateTransition] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.logCopyStateTransition (async). User supplies this. */
export type LibrarySystemFormalizedLogCopyStateTransitionAsyncImpl = (self: LibrarySystemFormalized, copyId: string, fromState: string, toState: string) => Promise<{ self: LibrarySystemFormalized; modified: { lastRejectionTimestamp: unknown } }>;

/** Contract-checking wrapper for LibrarySystemFormalized.logCopyStateTransition (async). */
export function wrapLibrarySystemFormalizedLogCopyStateTransitionAsync(impl: LibrarySystemFormalizedLogCopyStateTransitionAsyncImpl): (self: LibrarySystemFormalized, copyId: string, fromState: string, toState: string) => Promise<LibrarySystemFormalized> {
  return async (self, copyId, fromState, toState) => {
    const preViolations: string[] = [];
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: copyId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: toState <> null");
    }
    if (!((fromState !== toState))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: fromState <> toState");
    }
    if (!((((fromState === "AVAILABLE") || (fromState === "LOANED")) || (fromState === "RESERVED")))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: fromState = 'AVAILABLE' or fromState = 'LOANED' or fromState = 'RESERVED'");
    }
    if (!((((toState === "AVAILABLE") || (toState === "LOANED")) || (toState === "RESERVED")))) {
      preViolations.push("[LibrarySystemFormalized.logCopyStateTransition] pre violated: toState = 'AVAILABLE' or toState = 'LOANED' or toState = 'RESERVED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, copyId, fromState, toState);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.logCopyStateTransition] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceReservationOnLoanedOnly. User supplies this. */
export type LibrarySystemFormalizedEnforceReservationOnLoanedOnlyImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => { self: LibrarySystemFormalized; modified: { lastRejectionReason: unknown; lastRejectionTimestamp: unknown } };

/** Contract-checking wrapper for LibrarySystemFormalized.enforceReservationOnLoanedOnly. */
export function wrapLibrarySystemFormalizedEnforceReservationOnLoanedOnly(impl: LibrarySystemFormalizedEnforceReservationOnLoanedOnlyImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => LibrarySystemFormalized {
  return (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!((__result.self.lastRejectionReason === "Cannot reserve an available copy"))) {
        postViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] post violated: self.lastRejectionReason = 'Cannot reserve an available copy'");
      }
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.enforceReservationOnLoanedOnly (async). User supplies this. */
export type LibrarySystemFormalizedEnforceReservationOnLoanedOnlyAsyncImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<{ self: LibrarySystemFormalized; modified: { lastRejectionReason: unknown; lastRejectionTimestamp: unknown } }>;

/** Contract-checking wrapper for LibrarySystemFormalized.enforceReservationOnLoanedOnly (async). */
export function wrapLibrarySystemFormalizedEnforceReservationOnLoanedOnlyAsync(impl: LibrarySystemFormalizedEnforceReservationOnLoanedOnlyAsyncImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<LibrarySystemFormalized> {
  return async (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!((__result.self.lastRejectionReason === "Cannot reserve an available copy"))) {
        postViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] post violated: self.lastRejectionReason = 'Cannot reserve an available copy'");
      }
      if (!((__result.self.lastRejectionTimestamp !== null))) {
        postViolations.push("[LibrarySystemFormalized.enforceReservationOnLoanedOnly] post violated: self.lastRejectionTimestamp <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.guardLoanRequest. User supplies this. */
export type LibrarySystemFormalizedGuardLoanRequestImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => { self: LibrarySystemFormalized; modified: {} };

/** Contract-checking wrapper for LibrarySystemFormalized.guardLoanRequest. */
export function wrapLibrarySystemFormalizedGuardLoanRequest(impl: LibrarySystemFormalizedGuardLoanRequestImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => LibrarySystemFormalized {
  return (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.guardLoanRequest] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.guardLoanRequest] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LibrarySystemFormalized.guardLoanRequest (async). User supplies this. */
export type LibrarySystemFormalizedGuardLoanRequestAsyncImpl = (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<{ self: LibrarySystemFormalized; modified: {} }>;

/** Contract-checking wrapper for LibrarySystemFormalized.guardLoanRequest (async). */
export function wrapLibrarySystemFormalizedGuardLoanRequestAsync(impl: LibrarySystemFormalizedGuardLoanRequestAsyncImpl): (self: LibrarySystemFormalized, borrowerId: string, copyId: string) => Promise<LibrarySystemFormalized> {
  return async (self, borrowerId, copyId) => {
    const preViolations: string[] = [];
    if (!((borrowerId !== null))) {
      preViolations.push("[LibrarySystemFormalized.guardLoanRequest] pre violated: borrowerId <> null");
    }
    if (!((copyId !== null))) {
      preViolations.push("[LibrarySystemFormalized.guardLoanRequest] pre violated: copyId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, borrowerId, copyId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for CopyStateExclusivity commitments. */
export class CopyStateExclusivityRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CopyStateExclusivity>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CopyStateExclusivity — the typed wrapper guarantees that since
    // `register` only accepts CopyStateExclusivity instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CopyStateExclusivity): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CopyStateExclusivityId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CopyStateExclusivityId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CopyStateExclusivityId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CopyStateExclusivity>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CopyStateExclusivity>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BlockIndebtedBorrowers commitments. */
export class BlockIndebtedBorrowersRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BlockIndebtedBorrowers>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BlockIndebtedBorrowers — the typed wrapper guarantees that since
    // `register` only accepts BlockIndebtedBorrowers instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BlockIndebtedBorrowers): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BlockIndebtedBorrowersId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BlockIndebtedBorrowersId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BlockIndebtedBorrowersId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BlockIndebtedBorrowers>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BlockIndebtedBorrowers>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ExpireStaleReservations commitments. */
export class ExpireStaleReservationsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExpireStaleReservations>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExpireStaleReservations — the typed wrapper guarantees that since
    // `register` only accepts ExpireStaleReservations instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExpireStaleReservations): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExpireStaleReservationsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExpireStaleReservationsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExpireStaleReservationsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExpireStaleReservations>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExpireStaleReservations>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for LateFeeAccuracy commitments. */
export class LateFeeAccuracyRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<LateFeeAccuracy>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a LateFeeAccuracy — the typed wrapper guarantees that since
    // `register` only accepts LateFeeAccuracy instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: LateFeeAccuracy): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: LateFeeAccuracyId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: LateFeeAccuracyId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: LateFeeAccuracyId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<LateFeeAccuracy>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<LateFeeAccuracy>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for FormalizedCopyStateExclusivity commitments. */
export class FormalizedCopyStateExclusivityRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FormalizedCopyStateExclusivity>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FormalizedCopyStateExclusivity — the typed wrapper guarantees that since
    // `register` only accepts FormalizedCopyStateExclusivity instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FormalizedCopyStateExclusivity): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FormalizedCopyStateExclusivityId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FormalizedCopyStateExclusivityId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FormalizedCopyStateExclusivityId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FormalizedCopyStateExclusivity>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FormalizedCopyStateExclusivity>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for FormalizedBlockIndebted commitments. */
export class FormalizedBlockIndebtedRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FormalizedBlockIndebted>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FormalizedBlockIndebted — the typed wrapper guarantees that since
    // `register` only accepts FormalizedBlockIndebted instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FormalizedBlockIndebted): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FormalizedBlockIndebtedId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FormalizedBlockIndebtedId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FormalizedBlockIndebtedId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FormalizedBlockIndebted>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FormalizedBlockIndebted>[];
  }

  size(): number {
    return this.inner.size();
  }
}

