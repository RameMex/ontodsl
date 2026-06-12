// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for LibrarySystem. Runtime: string. Compile-time: branded. */
export type LibrarySystemId = string & { readonly __brand: "LibrarySystemId" };
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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

