// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Server routes — one POST per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { z } from "zod";
import * as service from "../services/index.js";
import { InvariantViolation } from "../services/index.js";

type Handler = (body: unknown) => Promise<unknown>;

export const routes: Record<string, Handler> = {
  "POST /api/deduction-engine/apply-deductions": async (body) => {
    const schema = z.object({
    grossPay: z.number(),
    deductionSet: z.unknown()
    });
    const input = schema.parse(body);
    return await service.applyDeductions(input.grossPay, input.deductionSet);
  },
  "POST /api/pay-period-manager/authorize-period": async (body) => {
    const schema = z.object({
    period: z.string()
    });
    const input = schema.parse(body);
    return await service.authorizePeriod(input.period);
  },
  "POST /api/payroll-system/authorize-pay-period": async (body) => {
    const schema = z.object({
    period: z.string()
    });
    const input = schema.parse(body);
    return await service.authorizePayPeriod(input.period);
  },
  "POST /api/payroll-system/process-timesheet": async (body) => {
    const schema = z.object({
    baseRate: z.number(),
    timesheet: z.string(),
    isExempt: z.boolean()
    });
    const input = schema.parse(body);
    return await service.processTimesheet(input.baseRate, input.timesheet, input.isExempt);
  },
  "POST /api/payroll-system/apply-deductions": async (body) => {
    const schema = z.object({
    grossPay: z.number(),
    deductionSet: z.unknown()
    });
    const input = schema.parse(body);
    return await service.applyDeductions(input.grossPay, input.deductionSet);
  },
  "POST /api/payroll-system/issue-paystub": async (body) => {
    const schema = z.object({
    employee: z.string(),
    period: z.string(),
    grossPay: z.number(),
    deductions: z.unknown()
    });
    const input = schema.parse(body);
    return await service.issuePaystub(input.employee, input.period, input.grossPay, input.deductions);
  },
  "POST /api/payroll-system/halt-for-negative-net": async (body) => {
    const schema = z.object({
    employee: z.string(),
    grossPay: z.number(),
    deductionSum: z.number(),
    ticketRef: z.string()
    });
    const input = schema.parse(body);
    return await service.haltForNegativeNet(input.employee, input.grossPay, input.deductionSum, input.ticketRef);
  },
  "POST /api/payroll-system/issue-adjustment": async (body) => {
    const schema = z.object({
    employee: z.string(),
    originalPaystub: z.string(),
    correctionAmount: z.number()
    });
    const input = schema.parse(body);
    return await service.issueAdjustment(input.employee, input.originalPaystub, input.correctionAmount);
  },
  "POST /api/payroll-system-formalized/reject-implausible-timesheet": async (body) => {
    const schema = z.object({
    timesheet: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectImplausibleTimesheet(input.timesheet);
  },
  "POST /api/payroll-system-formalized/reject-excessive-deduction": async (body) => {
    const schema = z.object({
    grossPay: z.number(),
    deduction: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectExcessiveDeduction(input.grossPay, input.deduction);
  },
  "POST /api/payroll-system-formalized/reject-unregistered-employee": async (body) => {
    const schema = z.object({
    employee: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUnregisteredEmployee(input.employee);
  },
  "POST /api/payroll-system-formalized/reject-stale-pay-period": async (body) => {
    const schema = z.object({
    periodEndDateInt: z.number().int(),
    referenceDateInt: z.number().int()
    });
    const input = schema.parse(body);
    return await service.rejectStalePayPeriod(input.periodEndDateInt, input.referenceDateInt);
  },
  "POST /api/paystub-issuer/issue-paystub": async (body) => {
    const schema = z.object({
    employee: z.string(),
    period: z.string(),
    grossPay: z.number(),
    deductions: z.unknown()
    });
    const input = schema.parse(body);
    return await service.issuePaystub(input.employee, input.period, input.grossPay, input.deductions);
  },
  "POST /api/paystub-issuer/issue-adjustment": async (body) => {
    const schema = z.object({
    employee: z.string(),
    originalPaystub: z.string(),
    correctionAmount: z.number()
    });
    const input = schema.parse(body);
    return await service.issueAdjustment(input.employee, input.originalPaystub, input.correctionAmount);
  },
  "POST /api/timesheet-processor/compute-gross": async (body) => {
    const schema = z.object({
    baseRate: z.number(),
    timesheet: z.string(),
    isExempt: z.boolean()
    });
    const input = schema.parse(body);
    return await service.computeGross(input.baseRate, input.timesheet, input.isExempt);
  },
};

export async function handle(method: string, path: string, body: unknown): Promise<{ status: number; body: unknown }> {
  const h = routes[`${method} ${path}`];
  if (!h) return { status: 404, body: { error: "not found" } };
  try {
    return { status: 200, body: await h(body) };
  } catch (e) {
    if (e instanceof InvariantViolation) {
      return { status: 422, body: { error: e.message, kind: "InvariantViolation", context: e.context, violations: e.violations } };
    }
    return { status: 500, body: { error: (e as Error).message } };
  }
}