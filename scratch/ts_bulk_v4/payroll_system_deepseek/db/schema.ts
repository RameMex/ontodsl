// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const deductions = sqliteTable("deduction", {
  deductionId: text("deduction_id").primaryKey(),
  deductionType: text("deduction_type").notNull(),
  amount: real("amount").notNull(),
});

export type DeductionRow = typeof deductions.$inferSelect;

export const deductionEngines = sqliteTable("deduction_engine", {
  engineId: text("engine_id").primaryKey(),
});

export type DeductionEngineRow = typeof deductionEngines.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  artifactTimestamp: text("artifact_timestamp").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const payPeriods = sqliteTable("pay_period", {
  periodId: text("period_id").primaryKey(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  isAuthorized: integer("is_authorized", { mode: "boolean" }).notNull(),
});

export type PayPeriodRow = typeof payPeriods.$inferSelect;

export const payPeriodManagers = sqliteTable("pay_period_manager", {
  managerId: text("manager_id").primaryKey(),
});

export type PayPeriodManagerRow = typeof payPeriodManagers.$inferSelect;

export const payrollSystems = sqliteTable("payroll_system", {
  systemId: text("system_id").primaryKey(),
  minPositiveNet: real("min_positive_net").notNull(),
  commitmentId: text("commitment_id").notNull(),
});

export type PayrollSystemRow = typeof payrollSystems.$inferSelect;

export const payrollSystemFormalizeds = sqliteTable("payroll_system_formalized", {
  id: text("id").primaryKey(),
  imssRegistrationNumber: text("imss_registration_number").notNull(),
  infonavitRegistrationNumber: text("infonavit_registration_number").notNull(),
  legalMinWage: real("legal_min_wage").notNull(),
  maxWeeklyRegularHours: integer("max_weekly_regular_hours").notNull(),
  privacyPolicyVersion: text("privacy_policy_version").notNull(),
  dataRetentionDays: integer("data_retention_days").notNull(),
});

export type PayrollSystemFormalizedRow = typeof payrollSystemFormalizeds.$inferSelect;

export const paystubs = sqliteTable("paystub", {
  paystubId: text("paystub_id").primaryKey(),
  grossPay: real("gross_pay").notNull(),
  netPay: real("net_pay").notNull(),
  deductionSum: real("deduction_sum").notNull(),
  isDeleted: integer("is_deleted", { mode: "boolean" }).notNull(),
  adjustmentTo: text("adjustment_to").notNull(),
});

export type PaystubRow = typeof paystubs.$inferSelect;

export const paystubIssuers = sqliteTable("paystub_issuer", {
  issuerId: text("issuer_id").primaryKey(),
});

export type PaystubIssuerRow = typeof paystubIssuers.$inferSelect;

export const timesheets = sqliteTable("timesheet", {
  timesheetId: text("timesheet_id").primaryKey(),
  regularHours: real("regular_hours").notNull(),
  overtimeHours: real("overtime_hours").notNull(),
  isSigned: integer("is_signed", { mode: "boolean" }).notNull(),
});

export type TimesheetRow = typeof timesheets.$inferSelect;

export const timesheetProcessors = sqliteTable("timesheet_processor", {
  processorId: text("processor_id").primaryKey(),
});

export type TimesheetProcessorRow = typeof timesheetProcessors.$inferSelect;
