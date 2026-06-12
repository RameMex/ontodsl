// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Employee. Runtime: string. Compile-time: branded. */
export type EmployeeId = string & { readonly __brand: "EmployeeId" };
/** Identity type for Employer. Runtime: string. Compile-time: branded. */
export type EmployerId = string & { readonly __brand: "EmployerId" };
/** Identity type for PayrollTeam. Runtime: string. Compile-time: branded. */
export type PayrollTeamId = string & { readonly __brand: "PayrollTeamId" };
/** Identity type for PayrollVendor. Runtime: string. Compile-time: branded. */
export type PayrollVendorId = string & { readonly __brand: "PayrollVendorId" };
/** Identity type for PayPeriod. Runtime: string. Compile-time: branded. */
export type PayPeriodId = string & { readonly __brand: "PayPeriodId" };
/** Identity type for Timesheet. Runtime: string. Compile-time: branded. */
export type TimesheetId = string & { readonly __brand: "TimesheetId" };
/** Identity type for Deduction. Runtime: string. Compile-time: branded. */
export type DeductionId = string & { readonly __brand: "DeductionId" };
/** Identity type for Paystub. Runtime: string. Compile-time: branded. */
export type PaystubId = string & { readonly __brand: "PaystubId" };
/** Identity type for ArithmeticCorrectness. Runtime: string. Compile-time: branded. */
export type ArithmeticCorrectnessId = string & { readonly __brand: "ArithmeticCorrectnessId" };
/** Identity type for PeriodAuthorization. Runtime: string. Compile-time: branded. */
export type PeriodAuthorizationId = string & { readonly __brand: "PeriodAuthorizationId" };
/** Identity type for PayrollRunFlow. Runtime: string. Compile-time: branded. */
export type PayrollRunFlowId = string & { readonly __brand: "PayrollRunFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Employee {
  readonly employeeId: EmployeeId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Employer {
  readonly employerId: EmployerId;
  readonly companyName: string;
}

/** @stereotype <<Agent>> */
export interface PayrollTeam {
  readonly teamId: PayrollTeamId;
  readonly teamName: string;
}

/** @stereotype <<Agent>> */
export interface PayrollVendor {
  readonly vendorId: PayrollVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface PayPeriod {
  readonly periodId: PayPeriodId;
  readonly startDate: string;
  readonly endDate: string;
  readonly isAuthorized: boolean;
}

/** @stereotype <<Kind>> */
export interface Timesheet {
  readonly timesheetId: TimesheetId;
  readonly regularHours: number;
  readonly overtimeHours: number;
  readonly isSigned: boolean;
}

/** @stereotype <<Kind>> */
export interface Deduction {
  readonly deductionId: DeductionId;
  readonly deductionType: string;
  readonly amount: number;
}

/** @stereotype <<Kind>> */
export interface Paystub {
  readonly paystubId: PaystubId;
  readonly grossPay: number;
  readonly netPay: number;
  readonly deductionSum: number;
  readonly isDeleted: boolean;
  readonly adjustmentTo: string;
}

/** @stereotype <<Commitment>> */
export interface ArithmeticCorrectness {
  readonly commitmentId: ArithmeticCorrectnessId;
  readonly minPositiveNet: number;
}

/** @stereotype <<Commitment>> */
export interface PeriodAuthorization {
  readonly commitmentId: PeriodAuthorizationId;
}

/** @stereotype <<Category>> */
export interface OvertimeCompliance {
}

/** @stereotype <<Category>> */
export interface ImmutablePaystub {
}

/** @stereotype <<Category>> */
export interface PayrollIntegrity {
}

/** @stereotype <<Happening>> */
export interface PayrollRunFlow {
  readonly flowId: PayrollRunFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeEmployee(data: {
  employeeId: string;
  name: string;
}): Employee {
  return {
    employeeId: data.employeeId as EmployeeId,
    name: data.name,
  };
}

export function makeEmployer(data: {
  employerId: string;
  companyName: string;
}): Employer {
  return {
    employerId: data.employerId as EmployerId,
    companyName: data.companyName,
  };
}

export function makePayrollTeam(data: {
  teamId: string;
  teamName: string;
}): PayrollTeam {
  return {
    teamId: data.teamId as PayrollTeamId,
    teamName: data.teamName,
  };
}

export function makePayrollVendor(data: {
  vendorId: string;
  name: string;
}): PayrollVendor {
  return {
    vendorId: data.vendorId as PayrollVendorId,
    name: data.name,
  };
}

export function makePayPeriod(data: {
  periodId: string;
  startDate: string;
  endDate: string;
  isAuthorized: boolean;
}): PayPeriod {
  return {
    periodId: data.periodId as PayPeriodId,
    startDate: data.startDate,
    endDate: data.endDate,
    isAuthorized: data.isAuthorized,
  };
}

export function makeTimesheet(data: {
  timesheetId: string;
  regularHours: number;
  overtimeHours: number;
  isSigned: boolean;
}): Timesheet {
  return {
    timesheetId: data.timesheetId as TimesheetId,
    regularHours: data.regularHours,
    overtimeHours: data.overtimeHours,
    isSigned: data.isSigned,
  };
}

export function makeDeduction(data: {
  deductionId: string;
  deductionType: string;
  amount: number;
}): Deduction {
  return {
    deductionId: data.deductionId as DeductionId,
    deductionType: data.deductionType,
    amount: data.amount,
  };
}

export function makePaystub(data: {
  paystubId: string;
  grossPay: number;
  netPay: number;
  deductionSum: number;
  isDeleted: boolean;
  adjustmentTo: string;
}): Paystub {
  return {
    paystubId: data.paystubId as PaystubId,
    grossPay: data.grossPay,
    netPay: data.netPay,
    deductionSum: data.deductionSum,
    isDeleted: data.isDeleted,
    adjustmentTo: data.adjustmentTo,
  };
}

export function makeArithmeticCorrectness(data: {
  commitmentId: string;
  minPositiveNet: number;
}): ArithmeticCorrectness {
  return {
    commitmentId: data.commitmentId as ArithmeticCorrectnessId,
    minPositiveNet: data.minPositiveNet,
  };
}

export function makePeriodAuthorization(data: {
  commitmentId: string;
}): PeriodAuthorization {
  return {
    commitmentId: data.commitmentId as PeriodAuthorizationId,
  };
}

export function makePayrollRunFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): PayrollRunFlow {
  return {
    flowId: data.flowId as PayrollRunFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Employee. Returns empty array when valid. */
export function validateEmployee(instance: Employee): readonly string[] {
  const violations: string[] = [];
  if (!((instance.employeeId !== null))) {
    violations.push("[Employee] invariant violated: self.employeeId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Employee] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Employer. Returns empty array when valid. */
export function validateEmployer(instance: Employer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.employerId !== null))) {
    violations.push("[Employer] invariant violated: self.employerId <> null");
  }
  if (!((instance.companyName !== null))) {
    violations.push("[Employer] invariant violated: self.companyName <> null");
  }
  return violations;
}

/** Runtime invariant check for PayrollTeam. Returns empty array when valid. */
export function validatePayrollTeam(instance: PayrollTeam): readonly string[] {
  const violations: string[] = [];
  if (!((instance.teamId !== null))) {
    violations.push("[PayrollTeam] invariant violated: self.teamId <> null");
  }
  return violations;
}

/** Runtime invariant check for PayrollVendor. Returns empty array when valid. */
export function validatePayrollVendor(instance: PayrollVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[PayrollVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for PayPeriod. Returns empty array when valid. */
export function validatePayPeriod(instance: PayPeriod): readonly string[] {
  const violations: string[] = [];
  if (!((instance.periodId !== null))) {
    violations.push("[PayPeriod] invariant violated: self.periodId <> null");
  }
  if (!((instance.startDate !== null))) {
    violations.push("[PayPeriod] invariant violated: self.startDate <> null");
  }
  if (!((instance.endDate !== null))) {
    violations.push("[PayPeriod] invariant violated: self.endDate <> null");
  }
  return violations;
}

/** Runtime invariant check for Timesheet. Returns empty array when valid. */
export function validateTimesheet(instance: Timesheet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.timesheetId !== null))) {
    violations.push("[Timesheet] invariant violated: self.timesheetId <> null");
  }
  if (!((instance.regularHours >= 0))) {
    violations.push("[Timesheet] invariant violated: self.regularHours >= 0.0");
  }
  if (!((instance.overtimeHours >= 0))) {
    violations.push("[Timesheet] invariant violated: self.overtimeHours >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Deduction. Returns empty array when valid. */
export function validateDeduction(instance: Deduction): readonly string[] {
  const violations: string[] = [];
  if (!((instance.deductionId !== null))) {
    violations.push("[Deduction] invariant violated: self.deductionId <> null");
  }
  if (!((instance.deductionType !== null))) {
    violations.push("[Deduction] invariant violated: self.deductionType <> null");
  }
  if (!((instance.amount >= 0))) {
    violations.push("[Deduction] invariant violated: self.amount >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Paystub. Returns empty array when valid. */
export function validatePaystub(instance: Paystub): readonly string[] {
  const violations: string[] = [];
  if (!((instance.paystubId !== null))) {
    violations.push("[Paystub] invariant violated: self.paystubId <> null");
  }
  if (!((instance.grossPay >= 0))) {
    violations.push("[Paystub] invariant violated: self.grossPay >= 0.0");
  }
  if (!((instance.netPay >= 0))) {
    violations.push("[Paystub] invariant violated: self.netPay >= 0.0");
  }
  if (!((instance.deductionSum >= 0))) {
    violations.push("[Paystub] invariant violated: self.deductionSum >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for OvertimeCompliance. Returns empty array when valid. */
export function validateOvertimeCompliance(instance: OvertimeCompliance): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.isSigned = true) or (bearer.regularHours <= 40.0 or bearer.overtimeHours >= 0.0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ImmutablePaystub. Returns empty array when valid. */
export function validateImmutablePaystub(instance: ImmutablePaystub): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not bearer.isDeleted — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PayrollIntegrity. Returns empty array when valid. */
export function validatePayrollIntegrity(instance: PayrollIntegrity): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.netPay = bearer.grossPay - bearer.deductionSum — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PayrollRunFlow. Returns empty array when valid. */
export function validatePayrollRunFlow(instance: PayrollRunFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PayrollRunFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[PayrollRunFlow] invariant violated: self.triggeredBy <> null");
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

/** Lifecycle registry for ArithmeticCorrectness commitments. */
export class ArithmeticCorrectnessRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ArithmeticCorrectness>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ArithmeticCorrectness — the typed wrapper guarantees that since
    // `register` only accepts ArithmeticCorrectness instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ArithmeticCorrectness): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ArithmeticCorrectnessId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ArithmeticCorrectnessId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ArithmeticCorrectnessId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ArithmeticCorrectness>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ArithmeticCorrectness>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PeriodAuthorization commitments. */
export class PeriodAuthorizationRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PeriodAuthorization>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PeriodAuthorization — the typed wrapper guarantees that since
    // `register` only accepts PeriodAuthorization instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PeriodAuthorization): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PeriodAuthorizationId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PeriodAuthorizationId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PeriodAuthorizationId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PeriodAuthorization>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PeriodAuthorization>[];
  }

  size(): number {
    return this.inner.size();
  }
}

