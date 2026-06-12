// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
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
/** Identity type for PayrollSystem. Runtime: string. Compile-time: branded. */
export type PayrollSystemId = string & { readonly __brand: "PayrollSystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface IrrsRegistroLaboral {
  readonly imssRegistrationNumber: string;
  readonly infonavitRegistrationNumber: string;
}

/** @stereotype <<Category>> */
export interface LaborLawCompliant {
  readonly legalMinWage: number;
  readonly maxWeeklyRegularHours: number;
}

/** @stereotype <<Category>> */
export interface DataPrivacyCompliant {
  readonly privacyPolicyVersion: string;
  readonly dataRetentionDays: number;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleTimesheets {
}

/** @stereotype <<Category>> */
export interface DeductionPlausibility {
}

/** @stereotype <<Subkind>> */
export interface PayrollSystemFormalized extends PayrollSystem {
  readonly imssRegistrationNumber: string;
  readonly infonavitRegistrationNumber: string;
  readonly legalMinWage: number;
  readonly maxWeeklyRegularHours: number;
  readonly privacyPolicyVersion: string;
  readonly dataRetentionDays: number;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly artifactTimestamp: string;
}

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

/** @stereotype <<Kind>> */
export interface PayrollSystem extends OvertimeCompliance, ImmutablePaystub, PayrollIntegrity {
  readonly systemId: PayrollSystemId;
  readonly minPositiveNet: number;
  readonly commitmentId: string;
  readonly openPeriods: ReadonlySet<PayPeriod>;
  readonly employees: ReadonlySet<Employee>;
  readonly employeeTimesheets: ReadonlySet<Timesheet>;
  readonly employeeDeductions: ReadonlySet<Deduction>;
  readonly issuedPaystubs: ReadonlySet<Paystub>;
  readonly openHrTickets: ReadonlySet<string>;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  artifactTimestamp: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    artifactTimestamp: data.artifactTimestamp,
  };
}

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

export function makePayrollSystem(data: {
  systemId: string;
  minPositiveNet: number;
  commitmentId: string;
  openPeriods: ReadonlySet<PayPeriod>;
  employees: ReadonlySet<Employee>;
  employeeTimesheets: ReadonlySet<Timesheet>;
  employeeDeductions: ReadonlySet<Deduction>;
  issuedPaystubs: ReadonlySet<Paystub>;
  openHrTickets: ReadonlySet<string>;
}): PayrollSystem {
  return {
    systemId: data.systemId as PayrollSystemId,
    minPositiveNet: data.minPositiveNet,
    commitmentId: data.commitmentId,
    openPeriods: data.openPeriods,
    employees: data.employees,
    employeeTimesheets: data.employeeTimesheets,
    employeeDeductions: data.employeeDeductions,
    issuedPaystubs: data.issuedPaystubs,
    openHrTickets: data.openHrTickets,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for IrrsRegistroLaboral. Returns empty array when valid. */
export function validateIrrsRegistroLaboral(instance: IrrsRegistroLaboral): readonly string[] {
  const violations: string[] = [];
  if (!((instance.imssRegistrationNumber !== null))) {
    violations.push("[IrrsRegistroLaboral] invariant violated: self.imssRegistrationNumber <> null");
  }
  if (!((instance.infonavitRegistrationNumber !== null))) {
    violations.push("[IrrsRegistroLaboral] invariant violated: self.infonavitRegistrationNumber <> null");
  }
  return violations;
}

/** Runtime invariant check for LaborLawCompliant. Returns empty array when valid. */
export function validateLaborLawCompliant(instance: LaborLawCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.legalMinWage > 0))) {
    violations.push("[LaborLawCompliant] invariant violated: self.legalMinWage > 0.0");
  }
  if (!((instance.maxWeeklyRegularHours >= 40))) {
    violations.push("[LaborLawCompliant] invariant violated: self.maxWeeklyRegularHours >= 40");
  }
  return violations;
}

/** Runtime invariant check for DataPrivacyCompliant. Returns empty array when valid. */
export function validateDataPrivacyCompliant(instance: DataPrivacyCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.privacyPolicyVersion !== null))) {
    violations.push("[DataPrivacyCompliant] invariant violated: self.privacyPolicyVersion <> null");
  }
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[DataPrivacyCompliant] invariant violated: self.dataRetentionDays > 0");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleTimesheets. Returns empty array when valid. */
export function validatePhysicallyPlausibleTimesheets(instance: PhysicallyPlausibleTimesheets): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.regularHours >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.overtimeHours >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.regularHours + bearer.overtimeHours <= 168.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for DeductionPlausibility. Returns empty array when valid. */
export function validateDeductionPlausibility(instance: DeductionPlausibility): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PayrollSystemFormalized. Returns empty array when valid. */
export function validatePayrollSystemFormalized(instance: PayrollSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.imssRegistrationNumber !== null))) {
    violations.push("[PayrollSystemFormalized] invariant violated: self.imssRegistrationNumber <> null");
  }
  if (!((instance.infonavitRegistrationNumber !== null))) {
    violations.push("[PayrollSystemFormalized] invariant violated: self.infonavitRegistrationNumber <> null");
  }
  if (!((instance.legalMinWage > 0))) {
    violations.push("[PayrollSystemFormalized] invariant violated: self.legalMinWage > 0.0");
  }
  if (!((instance.maxWeeklyRegularHours >= 40))) {
    violations.push("[PayrollSystemFormalized] invariant violated: self.maxWeeklyRegularHours >= 40");
  }
  if (!((instance.privacyPolicyVersion !== null))) {
    violations.push("[PayrollSystemFormalized] invariant violated: self.privacyPolicyVersion <> null");
  }
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[PayrollSystemFormalized] invariant violated: self.dataRetentionDays > 0");
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
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  return violations;
}

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

/** Runtime invariant check for PayrollSystem. Returns empty array when valid. */
export function validatePayrollSystem(instance: PayrollSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[PayrollSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.commitmentId !== null))) {
    violations.push("[PayrollSystem] invariant violated: self.commitmentId <> null");
  }
  if (!((instance.minPositiveNet > 0))) {
    violations.push("[PayrollSystem] invariant violated: self.minPositiveNet > 0.0");
  }
  if (!(Array.from(instance.openPeriods).every((__x) => ((__x.isAuthorized === true))))) {
    violations.push("[PayrollSystem] invariant violated: self.openPeriods->forAll(p | p.isAuthorized = true)");
  }
  if (!(Array.from(instance.issuedPaystubs).every((__x) => (((__x.netPay === (__x.grossPay - __x.deductionSum)) && (__x.netPay >= 0)))))) {
    violations.push("[PayrollSystem] invariant violated: self.issuedPaystubs->forAll(ps | ps.netPay = ps.grossPay - ps.deductionSum and ps.netPay >= 0.0)");
  }
  if (!(Array.from(instance.issuedPaystubs).every((__x) => ((__x.isDeleted === false))))) {
    violations.push("[PayrollSystem] invariant violated: self.issuedPaystubs->forAll(ps | ps.isDeleted = false)");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for PayrollSystemFormalized.rejectImplausibleTimesheet. User supplies this. */
export type PayrollSystemFormalizedRejectImplausibleTimesheetImpl = (self: PayrollSystemFormalized, timesheet: Timesheet) => { self: PayrollSystemFormalized; modified: {} };

/** Contract-checking wrapper for PayrollSystemFormalized.rejectImplausibleTimesheet. */
export function wrapPayrollSystemFormalizedRejectImplausibleTimesheet(impl: PayrollSystemFormalizedRejectImplausibleTimesheetImpl): (self: PayrollSystemFormalized, timesheet: Timesheet) => PayrollSystemFormalized {
  return (self, timesheet) => {
    const preViolations: string[] = [];
    if (!((timesheet.isSigned === true))) {
      preViolations.push("[PayrollSystemFormalized.rejectImplausibleTimesheet] pre violated: timesheet.isSigned = true");
    }
    if (!((((timesheet.regularHours < 0) || (timesheet.overtimeHours < 0)) || ((timesheet.regularHours + timesheet.overtimeHours) > 168)))) {
      preViolations.push("[PayrollSystemFormalized.rejectImplausibleTimesheet] pre violated: timesheet.regularHours < 0.0 or timesheet.overtimeHours < 0.0\n         or timesheet.regularHours + timesheet.overtimeHours > 168.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timesheet);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectImplausibleTimesheet (async). User supplies this. */
export type PayrollSystemFormalizedRejectImplausibleTimesheetAsyncImpl = (self: PayrollSystemFormalized, timesheet: Timesheet) => Promise<{ self: PayrollSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for PayrollSystemFormalized.rejectImplausibleTimesheet (async). */
export function wrapPayrollSystemFormalizedRejectImplausibleTimesheetAsync(impl: PayrollSystemFormalizedRejectImplausibleTimesheetAsyncImpl): (self: PayrollSystemFormalized, timesheet: Timesheet) => Promise<PayrollSystemFormalized> {
  return async (self, timesheet) => {
    const preViolations: string[] = [];
    if (!((timesheet.isSigned === true))) {
      preViolations.push("[PayrollSystemFormalized.rejectImplausibleTimesheet] pre violated: timesheet.isSigned = true");
    }
    if (!((((timesheet.regularHours < 0) || (timesheet.overtimeHours < 0)) || ((timesheet.regularHours + timesheet.overtimeHours) > 168)))) {
      preViolations.push("[PayrollSystemFormalized.rejectImplausibleTimesheet] pre violated: timesheet.regularHours < 0.0 or timesheet.overtimeHours < 0.0\n         or timesheet.regularHours + timesheet.overtimeHours > 168.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timesheet);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectExcessiveDeduction. User supplies this. */
export type PayrollSystemFormalizedRejectExcessiveDeductionImpl = (self: PayrollSystemFormalized, grossPay: number, deduction: Deduction) => { self: PayrollSystemFormalized; modified: {} };

/** Contract-checking wrapper for PayrollSystemFormalized.rejectExcessiveDeduction. */
export function wrapPayrollSystemFormalizedRejectExcessiveDeduction(impl: PayrollSystemFormalizedRejectExcessiveDeductionImpl): (self: PayrollSystemFormalized, grossPay: number, deduction: Deduction) => PayrollSystemFormalized {
  return (self, grossPay, deduction) => {
    const preViolations: string[] = [];
    if (!((deduction.amount > grossPay))) {
      preViolations.push("[PayrollSystemFormalized.rejectExcessiveDeduction] pre violated: deduction.amount > grossPay");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, grossPay, deduction);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectExcessiveDeduction (async). User supplies this. */
export type PayrollSystemFormalizedRejectExcessiveDeductionAsyncImpl = (self: PayrollSystemFormalized, grossPay: number, deduction: Deduction) => Promise<{ self: PayrollSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for PayrollSystemFormalized.rejectExcessiveDeduction (async). */
export function wrapPayrollSystemFormalizedRejectExcessiveDeductionAsync(impl: PayrollSystemFormalizedRejectExcessiveDeductionAsyncImpl): (self: PayrollSystemFormalized, grossPay: number, deduction: Deduction) => Promise<PayrollSystemFormalized> {
  return async (self, grossPay, deduction) => {
    const preViolations: string[] = [];
    if (!((deduction.amount > grossPay))) {
      preViolations.push("[PayrollSystemFormalized.rejectExcessiveDeduction] pre violated: deduction.amount > grossPay");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, grossPay, deduction);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectUnregisteredEmployee. User supplies this. */
export type PayrollSystemFormalizedRejectUnregisteredEmployeeImpl = (self: PayrollSystemFormalized, employee: Employee) => { self: PayrollSystemFormalized; modified: {} };

/** Contract-checking wrapper for PayrollSystemFormalized.rejectUnregisteredEmployee. */
export function wrapPayrollSystemFormalizedRejectUnregisteredEmployee(impl: PayrollSystemFormalizedRejectUnregisteredEmployeeImpl): (self: PayrollSystemFormalized, employee: Employee) => PayrollSystemFormalized {
  return (self, employee) => {
    const preViolations: string[] = [];
    if (!((employee.employeeId === null))) {
      preViolations.push("[PayrollSystemFormalized.rejectUnregisteredEmployee] pre violated: employee.employeeId = null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, employee);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectUnregisteredEmployee (async). User supplies this. */
export type PayrollSystemFormalizedRejectUnregisteredEmployeeAsyncImpl = (self: PayrollSystemFormalized, employee: Employee) => Promise<{ self: PayrollSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for PayrollSystemFormalized.rejectUnregisteredEmployee (async). */
export function wrapPayrollSystemFormalizedRejectUnregisteredEmployeeAsync(impl: PayrollSystemFormalizedRejectUnregisteredEmployeeAsyncImpl): (self: PayrollSystemFormalized, employee: Employee) => Promise<PayrollSystemFormalized> {
  return async (self, employee) => {
    const preViolations: string[] = [];
    if (!((employee.employeeId === null))) {
      preViolations.push("[PayrollSystemFormalized.rejectUnregisteredEmployee] pre violated: employee.employeeId = null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, employee);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectStalePayPeriod. User supplies this. */
export type PayrollSystemFormalizedRejectStalePayPeriodImpl = (self: PayrollSystemFormalized, periodEndDateInt: number, referenceDateInt: number) => { self: PayrollSystemFormalized; modified: {} };

/** Contract-checking wrapper for PayrollSystemFormalized.rejectStalePayPeriod. */
export function wrapPayrollSystemFormalizedRejectStalePayPeriod(impl: PayrollSystemFormalizedRejectStalePayPeriodImpl): (self: PayrollSystemFormalized, periodEndDateInt: number, referenceDateInt: number) => PayrollSystemFormalized {
  return (self, periodEndDateInt, referenceDateInt) => {
    const preViolations: string[] = [];
    if (!((periodEndDateInt < referenceDateInt))) {
      preViolations.push("[PayrollSystemFormalized.rejectStalePayPeriod] pre violated: periodEndDateInt < referenceDateInt");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, periodEndDateInt, referenceDateInt);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystemFormalized.rejectStalePayPeriod (async). User supplies this. */
export type PayrollSystemFormalizedRejectStalePayPeriodAsyncImpl = (self: PayrollSystemFormalized, periodEndDateInt: number, referenceDateInt: number) => Promise<{ self: PayrollSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for PayrollSystemFormalized.rejectStalePayPeriod (async). */
export function wrapPayrollSystemFormalizedRejectStalePayPeriodAsync(impl: PayrollSystemFormalizedRejectStalePayPeriodAsyncImpl): (self: PayrollSystemFormalized, periodEndDateInt: number, referenceDateInt: number) => Promise<PayrollSystemFormalized> {
  return async (self, periodEndDateInt, referenceDateInt) => {
    const preViolations: string[] = [];
    if (!((periodEndDateInt < referenceDateInt))) {
      preViolations.push("[PayrollSystemFormalized.rejectStalePayPeriod] pre violated: periodEndDateInt < referenceDateInt");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, periodEndDateInt, referenceDateInt);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystem.authorizePayPeriod. User supplies this. */
export type PayrollSystemAuthorizePayPeriodImpl = (self: PayrollSystem, period: PayPeriod) => { self: PayrollSystem; modified: { openPeriods: unknown } };

/** Contract-checking wrapper for PayrollSystem.authorizePayPeriod. */
export function wrapPayrollSystemAuthorizePayPeriod(impl: PayrollSystemAuthorizePayPeriodImpl): (self: PayrollSystem, period: PayPeriod) => PayrollSystem {
  return (self, period) => {
    const preViolations: string[] = [];
    if (!((period !== null))) {
      preViolations.push("[PayrollSystem.authorizePayPeriod] pre violated: period <> null");
    }
    if (!((period.isAuthorized === false))) {
      preViolations.push("[PayrollSystem.authorizePayPeriod] pre violated: period.isAuthorized = false");
    }
    if (!(!((self.openPeriods).has(period)))) {
      preViolations.push("[PayrollSystem.authorizePayPeriod] pre violated: not self.openPeriods->includes(period)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, period);
      const postViolations: string[] = [];
      if (!((period.isAuthorized === true))) {
        postViolations.push("[PayrollSystem.authorizePayPeriod] post violated: period.isAuthorized = true");
      }
      if (!((__result.self.openPeriods).has(period))) {
        postViolations.push("[PayrollSystem.authorizePayPeriod] post violated: self.openPeriods->includes(period)");
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

/** Impl signature for PayrollSystem.authorizePayPeriod (async). User supplies this. */
export type PayrollSystemAuthorizePayPeriodAsyncImpl = (self: PayrollSystem, period: PayPeriod) => Promise<{ self: PayrollSystem; modified: { openPeriods: unknown } }>;

/** Contract-checking wrapper for PayrollSystem.authorizePayPeriod (async). */
export function wrapPayrollSystemAuthorizePayPeriodAsync(impl: PayrollSystemAuthorizePayPeriodAsyncImpl): (self: PayrollSystem, period: PayPeriod) => Promise<PayrollSystem> {
  return async (self, period) => {
    const preViolations: string[] = [];
    if (!((period !== null))) {
      preViolations.push("[PayrollSystem.authorizePayPeriod] pre violated: period <> null");
    }
    if (!((period.isAuthorized === false))) {
      preViolations.push("[PayrollSystem.authorizePayPeriod] pre violated: period.isAuthorized = false");
    }
    if (!(!((self.openPeriods).has(period)))) {
      preViolations.push("[PayrollSystem.authorizePayPeriod] pre violated: not self.openPeriods->includes(period)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, period);
      const postViolations: string[] = [];
      if (!((period.isAuthorized === true))) {
        postViolations.push("[PayrollSystem.authorizePayPeriod] post violated: period.isAuthorized = true");
      }
      if (!((__result.self.openPeriods).has(period))) {
        postViolations.push("[PayrollSystem.authorizePayPeriod] post violated: self.openPeriods->includes(period)");
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

/** Impl signature for PayrollSystem.processTimesheet. User supplies this. */
export type PayrollSystemProcessTimesheetImpl = (self: PayrollSystem, baseRate: number, timesheet: Timesheet, isExempt: boolean) => { self: PayrollSystem; modified: {} };

/** Contract-checking wrapper for PayrollSystem.processTimesheet. */
export function wrapPayrollSystemProcessTimesheet(impl: PayrollSystemProcessTimesheetImpl): (self: PayrollSystem, baseRate: number, timesheet: Timesheet, isExempt: boolean) => PayrollSystem {
  return (self, baseRate, timesheet, isExempt) => {
    const preViolations: string[] = [];
    if (!((timesheet.isSigned === true))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: timesheet.isSigned = true");
    }
    if (!((baseRate >= 0))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: baseRate >= 0.0");
    }
    if (!((timesheet.regularHours >= 0))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: timesheet.regularHours >= 0.0");
    }
    if (!((timesheet.overtimeHours >= 0))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: timesheet.overtimeHours >= 0.0");
    }
    if (!((!((!(isExempt) && (timesheet.regularHours > 40))) || (timesheet.overtimeHours >= 0)))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: not (not isExempt and timesheet.regularHours > 40.0) or timesheet.overtimeHours >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, baseRate, timesheet, isExempt);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystem.processTimesheet (async). User supplies this. */
export type PayrollSystemProcessTimesheetAsyncImpl = (self: PayrollSystem, baseRate: number, timesheet: Timesheet, isExempt: boolean) => Promise<{ self: PayrollSystem; modified: {} }>;

/** Contract-checking wrapper for PayrollSystem.processTimesheet (async). */
export function wrapPayrollSystemProcessTimesheetAsync(impl: PayrollSystemProcessTimesheetAsyncImpl): (self: PayrollSystem, baseRate: number, timesheet: Timesheet, isExempt: boolean) => Promise<PayrollSystem> {
  return async (self, baseRate, timesheet, isExempt) => {
    const preViolations: string[] = [];
    if (!((timesheet.isSigned === true))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: timesheet.isSigned = true");
    }
    if (!((baseRate >= 0))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: baseRate >= 0.0");
    }
    if (!((timesheet.regularHours >= 0))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: timesheet.regularHours >= 0.0");
    }
    if (!((timesheet.overtimeHours >= 0))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: timesheet.overtimeHours >= 0.0");
    }
    if (!((!((!(isExempt) && (timesheet.regularHours > 40))) || (timesheet.overtimeHours >= 0)))) {
      preViolations.push("[PayrollSystem.processTimesheet] pre violated: not (not isExempt and timesheet.regularHours > 40.0) or timesheet.overtimeHours >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, baseRate, timesheet, isExempt);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystem.applyDeductions. User supplies this. */
export type PayrollSystemApplyDeductionsImpl = (self: PayrollSystem, grossPay: number, deductionSet: ReadonlySet<Deduction>) => { self: PayrollSystem; modified: {} };

/** Contract-checking wrapper for PayrollSystem.applyDeductions. */
export function wrapPayrollSystemApplyDeductions(impl: PayrollSystemApplyDeductionsImpl): (self: PayrollSystem, grossPay: number, deductionSet: ReadonlySet<Deduction>) => PayrollSystem {
  return (self, grossPay, deductionSet) => {
    const preViolations: string[] = [];
    if (!((grossPay >= 0))) {
      preViolations.push("[PayrollSystem.applyDeductions] pre violated: grossPay >= 0.0");
    }
    if (!(Array.from(deductionSet).every((__x) => ((__x.amount >= 0))))) {
      preViolations.push("[PayrollSystem.applyDeductions] pre violated: deductionSet->forAll(d | d.amount >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, grossPay, deductionSet);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= self.minPositiveNet — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystem.applyDeductions (async). User supplies this. */
export type PayrollSystemApplyDeductionsAsyncImpl = (self: PayrollSystem, grossPay: number, deductionSet: ReadonlySet<Deduction>) => Promise<{ self: PayrollSystem; modified: {} }>;

/** Contract-checking wrapper for PayrollSystem.applyDeductions (async). */
export function wrapPayrollSystemApplyDeductionsAsync(impl: PayrollSystemApplyDeductionsAsyncImpl): (self: PayrollSystem, grossPay: number, deductionSet: ReadonlySet<Deduction>) => Promise<PayrollSystem> {
  return async (self, grossPay, deductionSet) => {
    const preViolations: string[] = [];
    if (!((grossPay >= 0))) {
      preViolations.push("[PayrollSystem.applyDeductions] pre violated: grossPay >= 0.0");
    }
    if (!(Array.from(deductionSet).every((__x) => ((__x.amount >= 0))))) {
      preViolations.push("[PayrollSystem.applyDeductions] pre violated: deductionSet->forAll(d | d.amount >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, grossPay, deductionSet);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= self.minPositiveNet — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PayrollSystem.issuePaystub. User supplies this. */
export type PayrollSystemIssuePaystubImpl = (self: PayrollSystem, employee: Employee, period: PayPeriod, grossPay: number, deductions: ReadonlySet<Deduction>) => { self: PayrollSystem; modified: { issuedPaystubs: unknown } };

/** Contract-checking wrapper for PayrollSystem.issuePaystub. */
export function wrapPayrollSystemIssuePaystub(impl: PayrollSystemIssuePaystubImpl): (self: PayrollSystem, employee: Employee, period: PayPeriod, grossPay: number, deductions: ReadonlySet<Deduction>) => PayrollSystem {
  return (self, employee, period, grossPay, deductions) => {
    const preViolations: string[] = [];
    if (!((employee !== null))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: employee <> null");
    }
    if (!((period !== null))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: period <> null");
    }
    if (!((self.openPeriods).has(period))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: self.openPeriods->includes(period)");
    }
    if (!((self.employees).has(employee))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: self.employees->includes(employee)");
    }
    if (!((grossPay >= 0))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: grossPay >= 0.0");
    }
    if (!(Array.from(deductions).every((__x) => ((__x.amount >= 0))))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: deductions->forAll(d | d.amount >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.issuedPaystubs": self.issuedPaystubs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, employee, period, grossPay, deductions);
      const postViolations: string[] = [];
      if (!(((__result.self.issuedPaystubs).size === ((__pre["self.issuedPaystubs"]).size + 1)))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.issuedPaystubs->size() = self.issuedPaystubs@pre->size() + 1");
      }
      if (!(Array.from(__pre["self.issuedPaystubs"]).every((__x) => ((__result.self.issuedPaystubs).has(__x))))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.issuedPaystubs@pre->forAll(ps | self.issuedPaystubs->includes(ps))");
      }
      if (!(Array.from(__result.self.issuedPaystubs).some((__x) => ((((((__x.grossPay === grossPay) && (__x.deductionSum >= 0)) && (__x.netPay === (__x.grossPay - __x.deductionSum))) && (__x.adjustmentTo === null)) && (__x.isDeleted === false)))))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.issuedPaystubs->exists(ps |\n      ps.grossPay = grossPay and\n      ps.deductionSum >= 0.0 and\n      ps.netPay = ps.grossPay - ps.deductionSum and\n      ps.adjustmentTo = null and\n      ps.isDeleted = false\n    )");
      }
      if (!((__result.self.commitmentId !== null))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.commitmentId <> null");
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

/** Impl signature for PayrollSystem.issuePaystub (async). User supplies this. */
export type PayrollSystemIssuePaystubAsyncImpl = (self: PayrollSystem, employee: Employee, period: PayPeriod, grossPay: number, deductions: ReadonlySet<Deduction>) => Promise<{ self: PayrollSystem; modified: { issuedPaystubs: unknown } }>;

/** Contract-checking wrapper for PayrollSystem.issuePaystub (async). */
export function wrapPayrollSystemIssuePaystubAsync(impl: PayrollSystemIssuePaystubAsyncImpl): (self: PayrollSystem, employee: Employee, period: PayPeriod, grossPay: number, deductions: ReadonlySet<Deduction>) => Promise<PayrollSystem> {
  return async (self, employee, period, grossPay, deductions) => {
    const preViolations: string[] = [];
    if (!((employee !== null))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: employee <> null");
    }
    if (!((period !== null))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: period <> null");
    }
    if (!((self.openPeriods).has(period))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: self.openPeriods->includes(period)");
    }
    if (!((self.employees).has(employee))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: self.employees->includes(employee)");
    }
    if (!((grossPay >= 0))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: grossPay >= 0.0");
    }
    if (!(Array.from(deductions).every((__x) => ((__x.amount >= 0))))) {
      preViolations.push("[PayrollSystem.issuePaystub] pre violated: deductions->forAll(d | d.amount >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.issuedPaystubs": self.issuedPaystubs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, employee, period, grossPay, deductions);
      const postViolations: string[] = [];
      if (!(((__result.self.issuedPaystubs).size === ((__pre["self.issuedPaystubs"]).size + 1)))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.issuedPaystubs->size() = self.issuedPaystubs@pre->size() + 1");
      }
      if (!(Array.from(__pre["self.issuedPaystubs"]).every((__x) => ((__result.self.issuedPaystubs).has(__x))))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.issuedPaystubs@pre->forAll(ps | self.issuedPaystubs->includes(ps))");
      }
      if (!(Array.from(__result.self.issuedPaystubs).some((__x) => ((((((__x.grossPay === grossPay) && (__x.deductionSum >= 0)) && (__x.netPay === (__x.grossPay - __x.deductionSum))) && (__x.adjustmentTo === null)) && (__x.isDeleted === false)))))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.issuedPaystubs->exists(ps |\n      ps.grossPay = grossPay and\n      ps.deductionSum >= 0.0 and\n      ps.netPay = ps.grossPay - ps.deductionSum and\n      ps.adjustmentTo = null and\n      ps.isDeleted = false\n    )");
      }
      if (!((__result.self.commitmentId !== null))) {
        postViolations.push("[PayrollSystem.issuePaystub] post violated: self.commitmentId <> null");
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

/** Impl signature for PayrollSystem.haltForNegativeNet. User supplies this. */
export type PayrollSystemHaltForNegativeNetImpl = (self: PayrollSystem, employee: Employee, grossPay: number, deductionSum: number, ticketRef: string) => { self: PayrollSystem; modified: { openHrTickets: unknown } };

/** Contract-checking wrapper for PayrollSystem.haltForNegativeNet. */
export function wrapPayrollSystemHaltForNegativeNet(impl: PayrollSystemHaltForNegativeNetImpl): (self: PayrollSystem, employee: Employee, grossPay: number, deductionSum: number, ticketRef: string) => PayrollSystem {
  return (self, employee, grossPay, deductionSum, ticketRef) => {
    const preViolations: string[] = [];
    if (!((grossPay >= 0))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: grossPay >= 0.0");
    }
    if (!((deductionSum >= 0))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: deductionSum >= 0.0");
    }
    if (!(((grossPay - deductionSum) < 0))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: grossPay - deductionSum < 0.0");
    }
    if (!((ticketRef !== null))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: ticketRef <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.openHrTickets": self.openHrTickets,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, employee, grossPay, deductionSum, ticketRef);
      const postViolations: string[] = [];
      if (!((__result.self.openHrTickets).has(ticketRef))) {
        postViolations.push("[PayrollSystem.haltForNegativeNet] post violated: self.openHrTickets->includes(ticketRef)");
      }
      if (!(((__result.self.openHrTickets).size === ((__pre["self.openHrTickets"]).size + 1)))) {
        postViolations.push("[PayrollSystem.haltForNegativeNet] post violated: self.openHrTickets->size() = self.openHrTickets@pre->size() + 1");
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

/** Impl signature for PayrollSystem.haltForNegativeNet (async). User supplies this. */
export type PayrollSystemHaltForNegativeNetAsyncImpl = (self: PayrollSystem, employee: Employee, grossPay: number, deductionSum: number, ticketRef: string) => Promise<{ self: PayrollSystem; modified: { openHrTickets: unknown } }>;

/** Contract-checking wrapper for PayrollSystem.haltForNegativeNet (async). */
export function wrapPayrollSystemHaltForNegativeNetAsync(impl: PayrollSystemHaltForNegativeNetAsyncImpl): (self: PayrollSystem, employee: Employee, grossPay: number, deductionSum: number, ticketRef: string) => Promise<PayrollSystem> {
  return async (self, employee, grossPay, deductionSum, ticketRef) => {
    const preViolations: string[] = [];
    if (!((grossPay >= 0))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: grossPay >= 0.0");
    }
    if (!((deductionSum >= 0))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: deductionSum >= 0.0");
    }
    if (!(((grossPay - deductionSum) < 0))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: grossPay - deductionSum < 0.0");
    }
    if (!((ticketRef !== null))) {
      preViolations.push("[PayrollSystem.haltForNegativeNet] pre violated: ticketRef <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.openHrTickets": self.openHrTickets,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, employee, grossPay, deductionSum, ticketRef);
      const postViolations: string[] = [];
      if (!((__result.self.openHrTickets).has(ticketRef))) {
        postViolations.push("[PayrollSystem.haltForNegativeNet] post violated: self.openHrTickets->includes(ticketRef)");
      }
      if (!(((__result.self.openHrTickets).size === ((__pre["self.openHrTickets"]).size + 1)))) {
        postViolations.push("[PayrollSystem.haltForNegativeNet] post violated: self.openHrTickets->size() = self.openHrTickets@pre->size() + 1");
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

/** Impl signature for PayrollSystem.issueAdjustment. User supplies this. */
export type PayrollSystemIssueAdjustmentImpl = (self: PayrollSystem, employee: Employee, originalPaystub: Paystub, correctionAmount: number) => { self: PayrollSystem; modified: { issuedPaystubs: unknown } };

/** Contract-checking wrapper for PayrollSystem.issueAdjustment. */
export function wrapPayrollSystemIssueAdjustment(impl: PayrollSystemIssueAdjustmentImpl): (self: PayrollSystem, employee: Employee, originalPaystub: Paystub, correctionAmount: number) => PayrollSystem {
  return (self, employee, originalPaystub, correctionAmount) => {
    const preViolations: string[] = [];
    if (!((employee !== null))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: employee <> null");
    }
    if (!((originalPaystub !== null))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: originalPaystub <> null");
    }
    if (!((self.issuedPaystubs).has(originalPaystub))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: self.issuedPaystubs->includes(originalPaystub)");
    }
    if (!((correctionAmount !== 0))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: correctionAmount <> 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.issuedPaystubs": self.issuedPaystubs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, employee, originalPaystub, correctionAmount);
      const postViolations: string[] = [];
      if (!(((__result.self.issuedPaystubs).size === ((__pre["self.issuedPaystubs"]).size + 1)))) {
        postViolations.push("[PayrollSystem.issueAdjustment] post violated: self.issuedPaystubs->size() = self.issuedPaystubs@pre->size() + 1");
      }
      if (!(Array.from(__pre["self.issuedPaystubs"]).every((__x) => ((__result.self.issuedPaystubs).has(__x))))) {
        postViolations.push("[PayrollSystem.issueAdjustment] post violated: self.issuedPaystubs@pre->forAll(ps | self.issuedPaystubs->includes(ps))");
      }
      if (!(Array.from(__result.self.issuedPaystubs).some((__x) => ((((__x.grossPay === correctionAmount) && (__x.adjustmentTo === originalPaystub.paystubId)) && (__x.isDeleted === false)))))) {
        postViolations.push("[PayrollSystem.issueAdjustment] post violated: self.issuedPaystubs->exists(ps |\n      ps.grossPay = correctionAmount and\n      ps.adjustmentTo = originalPaystub.paystubId and\n      ps.isDeleted = false\n    )");
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

/** Impl signature for PayrollSystem.issueAdjustment (async). User supplies this. */
export type PayrollSystemIssueAdjustmentAsyncImpl = (self: PayrollSystem, employee: Employee, originalPaystub: Paystub, correctionAmount: number) => Promise<{ self: PayrollSystem; modified: { issuedPaystubs: unknown } }>;

/** Contract-checking wrapper for PayrollSystem.issueAdjustment (async). */
export function wrapPayrollSystemIssueAdjustmentAsync(impl: PayrollSystemIssueAdjustmentAsyncImpl): (self: PayrollSystem, employee: Employee, originalPaystub: Paystub, correctionAmount: number) => Promise<PayrollSystem> {
  return async (self, employee, originalPaystub, correctionAmount) => {
    const preViolations: string[] = [];
    if (!((employee !== null))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: employee <> null");
    }
    if (!((originalPaystub !== null))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: originalPaystub <> null");
    }
    if (!((self.issuedPaystubs).has(originalPaystub))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: self.issuedPaystubs->includes(originalPaystub)");
    }
    if (!((correctionAmount !== 0))) {
      preViolations.push("[PayrollSystem.issueAdjustment] pre violated: correctionAmount <> 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.issuedPaystubs": self.issuedPaystubs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, employee, originalPaystub, correctionAmount);
      const postViolations: string[] = [];
      if (!(((__result.self.issuedPaystubs).size === ((__pre["self.issuedPaystubs"]).size + 1)))) {
        postViolations.push("[PayrollSystem.issueAdjustment] post violated: self.issuedPaystubs->size() = self.issuedPaystubs@pre->size() + 1");
      }
      if (!(Array.from(__pre["self.issuedPaystubs"]).every((__x) => ((__result.self.issuedPaystubs).has(__x))))) {
        postViolations.push("[PayrollSystem.issueAdjustment] post violated: self.issuedPaystubs@pre->forAll(ps | self.issuedPaystubs->includes(ps))");
      }
      if (!(Array.from(__result.self.issuedPaystubs).some((__x) => ((((__x.grossPay === correctionAmount) && (__x.adjustmentTo === originalPaystub.paystubId)) && (__x.isDeleted === false)))))) {
        postViolations.push("[PayrollSystem.issueAdjustment] post violated: self.issuedPaystubs->exists(ps |\n      ps.grossPay = correctionAmount and\n      ps.adjustmentTo = originalPaystub.paystubId and\n      ps.isDeleted = false\n    )");
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

