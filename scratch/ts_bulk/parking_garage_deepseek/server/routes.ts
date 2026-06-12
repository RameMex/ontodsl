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
    timestamp: z.string()
    });
    const input = schema.parse(body);
    return await service.detectVehicle(input.timestamp);
  },
  "POST /api/entry-sensor/clear-detection": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearDetection();
  },
  "POST /api/exit-sensor/detect-ticket": async (body) => {
    const schema = z.object({
    ticketId: z.string(),
    timestamp: z.string()
    });
    const input = schema.parse(body);
    return await service.detectTicket(input.ticketId, input.timestamp);
  },
  "POST /api/exit-sensor/clear-detection": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearDetection();
  },
  "POST /api/gate-controller/raise-entry-gate": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.raiseEntryGate();
  },
  "POST /api/gate-controller/lower-entry-gate": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.lowerEntryGate();
  },
  "POST /api/gate-controller/raise-exit-gate": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.raiseExitGate();
  },
  "POST /api/gate-controller/lower-exit-gate": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.lowerExitGate();
  },
  "POST /api/gate-controller/display-full-sign": async (body) => {
    const schema = z.object({
    full: z.boolean()
    });
    const input = schema.parse(body);
    return await service.displayFullSign(input.full);
  },
  "POST /api/occupancy-tracker/increment-occupancy": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.incrementOccupancy();
  },
  "POST /api/occupancy-tracker/decrement-occupancy": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.decrementOccupancy();
  },
  "POST /api/occupancy-tracker/check-capacity": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.checkCapacity();
  },
  "POST /api/parking-garage-system/enter-garage": async (body) => {
    const schema = z.object({
    vehicleId: z.string()
    });
    const input = schema.parse(body);
    return await service.enterGarage(input.vehicleId);
  },
  "POST /api/parking-garage-system/exit-garage": async (body) => {
    const schema = z.object({
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.exitGarage(input.ticketId);
  },
  "POST /api/parking-garage-system/pay-for-ticket": async (body) => {
    const schema = z.object({
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.payForTicket(input.ticketId);
  },
  "POST /api/parking-garage-system-formalized/reject-entry-when-full": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectEntryWhenFull();
  },
  "POST /api/parking-garage-system-formalized/reject-used-ticket-exit": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectUsedTicketExit();
  },
  "POST /api/parking-garage-system-formalized/reject-unpaid-exit": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectUnpaidExit();
  },
  "POST /api/parking-garage-system-formalized/attendant-override-exit": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.attendantOverrideExit();
  },
  "POST /api/payment-processor/process-payment": async (body) => {
    const schema = z.object({
    ticketId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.processPayment(input.ticketId, input.amount);
  },
  "POST /api/payment-processor/mark-ticket-paid": async (body) => {
    const schema = z.object({
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.markTicketPaid(input.ticketId);
  },
  "POST /api/ticket-issuer/issue-ticket": async (body) => {
    const schema = z.object({
    ticketCode: z.string()
    });
    const input = schema.parse(body);
    return await service.issueTicket(input.ticketCode);
  },
  "POST /api/ticket-issuer/reset-counter": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetCounter();
  },
  "POST /api/ticket-validator/validate-ticket": async (body) => {
    const schema = z.object({
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.validateTicket(input.ticketId);
  },
  "POST /api/ticket-validator/mark-ticket-exited": async (body) => {
    const schema = z.object({
    ticketId: z.string()
    });
    const input = schema.parse(body);
    return await service.markTicketExited(input.ticketId);
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