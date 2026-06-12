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
  "POST /api/entry-sensor/detect-vehicle": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestamp: z.string()
    });
    const input = schema.parse(body);
    return await service.detectVehicle(input.__selfId, input.timestamp);
  },
  "POST /api/entry-sensor/clear-detection": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearDetection(input.__selfId);
  },
  "POST /api/exit-sensor/detect-ticket": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string(),
    timestamp: z.string()
    });
    const input = schema.parse(body);
    return await service.detectTicket(input.__selfId, input.ticketId, input.timestamp);
  },
  "POST /api/exit-sensor/clear-detection": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearDetection(input.__selfId);
  },
  "POST /api/gate-controller/raise-entry-gate": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.raiseEntryGate(input.__selfId);
  },
  "POST /api/gate-controller/lower-entry-gate": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.lowerEntryGate(input.__selfId);
  },
  "POST /api/gate-controller/raise-exit-gate": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.raiseExitGate(input.__selfId);
  },
  "POST /api/gate-controller/lower-exit-gate": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.lowerExitGate(input.__selfId);
  },
  "POST /api/gate-controller/display-full-sign": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    full: z.boolean()
    });
    const input = schema.parse(body);
    return await service.displayFullSign(input.__selfId, input.full);
  },
  "POST /api/occupancy-tracker/increment-occupancy": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.incrementOccupancy(input.__selfId);
  },
  "POST /api/occupancy-tracker/decrement-occupancy": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.decrementOccupancy(input.__selfId);
  },
  "POST /api/occupancy-tracker/check-capacity": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.checkCapacity(input.__selfId);
  },
  "POST /api/parking-garage-system/enter-garage": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    vehicleId: z.string()
    });
    const input = schema.parse(body);
    return await service.enterGarage(input.__selfId, input.vehicleId);
  },
  "POST /api/parking-garage-system/exit-garage": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.exitGarage(input.__selfId, input.ticketId);
  },
  "POST /api/parking-garage-system/pay-for-ticket": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.payForTicket(input.__selfId, input.ticketId);
  },
  "POST /api/parking-garage-system-formalized/reject-entry-when-full": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectEntryWhenFull(input.__selfId);
  },
  "POST /api/parking-garage-system-formalized/reject-used-ticket-exit": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUsedTicketExit(input.__selfId);
  },
  "POST /api/parking-garage-system-formalized/reject-unpaid-exit": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUnpaidExit(input.__selfId);
  },
  "POST /api/parking-garage-system-formalized/attendant-override-exit": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.attendantOverrideExit(input.__selfId);
  },
  "POST /api/payment-processor/process-payment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.processPayment(input.__selfId, input.ticketId, input.amount);
  },
  "POST /api/payment-processor/mark-ticket-paid": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.markTicketPaid(input.__selfId, input.ticketId);
  },
  "POST /api/ticket-issuer/issue-ticket": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketCode: z.string()
    });
    const input = schema.parse(body);
    return await service.issueTicket(input.__selfId, input.ticketCode);
  },
  "POST /api/ticket-issuer/reset-counter": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetCounter(input.__selfId);
  },
  "POST /api/ticket-validator/validate-ticket": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.validateTicket(input.__selfId, input.ticketId);
  },
  "POST /api/ticket-validator/mark-ticket-exited": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.markTicketExited(input.__selfId, input.ticketId);
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