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
  "POST /api/backorder-queue/add-backorder": async (body) => {
    const schema = z.object({
    sku: z.string(),
    qty: z.number()
    });
    const input = schema.parse(body);
    return await service.addBackorder(input.sku, input.qty);
  },
  "POST /api/backorder-queue/remove-fulfilled": async (body) => {
    const schema = z.object({
    bo: z.string()
    });
    const input = schema.parse(body);
    return await service.removeFulfilled(input.bo);
  },
  "POST /api/movement-journal/write-entry": async (body) => {
    const schema = z.object({
    sku: z.string(),
    delta: z.number(),
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.writeEntry(input.sku, input.delta, input.reason);
  },
  "POST /api/movement-journal/flush-entries": async (body) => {
    const schema = z.object({
    count: z.number().int()
    });
    const input = schema.parse(body);
    return await service.flushEntries(input.count);
  },
  "POST /api/order-manager/receive-order": async (body) => {
    const schema = z.object({
    order: z.string()
    });
    const input = schema.parse(body);
    return await service.receiveOrder(input.order);
  },
  "POST /api/order-manager/try-allocate": async (body) => {
    const schema = z.object({
    sku: z.string(),
    requestedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.tryAllocate(input.sku, input.requestedQty);
  },
  "POST /api/order-manager/mark-allocated": async (body) => {
    const schema = z.object({
    order: z.string()
    });
    const input = schema.parse(body);
    return await service.markAllocated(input.order);
  },
  "POST /api/order-manager/mark-rejected": async (body) => {
    const schema = z.object({
    order: z.string()
    });
    const input = schema.parse(body);
    return await service.markRejected(input.order);
  },
  "POST /api/receiving-dock/process-restock": async (body) => {
    const schema = z.object({
    sku: z.string(),
    receivedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.processRestock(input.sku, input.receivedQty);
  },
  "POST /api/reconciliation-engine/run-reconciliation": async (body) => {
    const schema = z.object({
    computedStock: z.number(),
    cachedValue: z.number()
    });
    const input = schema.parse(body);
    return await service.runReconciliation(input.computedStock, input.cachedValue);
  },
  "POST /api/reconciliation-engine/force-reconciliation": async (body) => {
    const schema = z.object({
    computedStock: z.number(),
    cachedValue: z.number()
    });
    const input = schema.parse(body);
    return await service.forceReconciliation(input.computedStock, input.cachedValue);
  },
  "POST /api/stock-ledger/deduct-stock": async (body) => {
    const schema = z.object({
    sku: z.string(),
    qty: z.number()
    });
    const input = schema.parse(body);
    return await service.deductStock(input.sku, input.qty);
  },
  "POST /api/stock-ledger/add-stock": async (body) => {
    const schema = z.object({
    sku: z.string(),
    qty: z.number()
    });
    const input = schema.parse(body);
    return await service.addStock(input.sku, input.qty);
  },
  "POST /api/stock-ledger/fulfill-backorder-stock": async (body) => {
    const schema = z.object({
    sku: z.string(),
    qty: z.number()
    });
    const input = schema.parse(body);
    return await service.fulfillBackorderStock(input.sku, input.qty);
  },
  "POST /api/warehouse-inventory-system/allocate-stock": async (body) => {
    const schema = z.object({
    sku: z.string(),
    requestedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.allocateStock(input.sku, input.requestedQty);
  },
  "POST /api/warehouse-inventory-system/record-restock": async (body) => {
    const schema = z.object({
    sku: z.string(),
    receivedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.recordRestock(input.sku, input.receivedQty);
  },
  "POST /api/warehouse-inventory-system/fulfill-backorder": async (body) => {
    const schema = z.object({
    sku: z.string(),
    backorderQty: z.number()
    });
    const input = schema.parse(body);
    return await service.fulfillBackorder(input.sku, input.backorderQty);
  },
  "POST /api/warehouse-inventory-system/reconcile": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reconcile();
  },
  "POST /api/warehouse-inventory-system/reject-allocation": async (body) => {
    const schema = z.object({
    sku: z.string(),
    requestedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectAllocation(input.sku, input.requestedQty);
  },
  "POST /api/warehouse-inventory-system-formalized/guard-reject-allocation": async (body) => {
    const schema = z.object({
    sku: z.string(),
    requestedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.guardRejectAllocation(input.sku, input.requestedQty);
  },
  "POST /api/warehouse-inventory-system-formalized/guard-journal-flush": async (body) => {
    const schema = z.object({
    flushCount: z.number().int()
    });
    const input = schema.parse(body);
    return await service.guardJournalFlush(input.flushCount);
  },
  "POST /api/warehouse-inventory-system-formalized/guard-low-stock-alert": async (body) => {
    const schema = z.object({
    sku: z.string(),
    requestedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.guardLowStockAlert(input.sku, input.requestedQty);
  },
  "POST /api/warehouse-inventory-system-formalized/guard-reject-restock-when-journal-full": async (body) => {
    const schema = z.object({
    sku: z.string(),
    receivedQty: z.number()
    });
    const input = schema.parse(body);
    return await service.guardRejectRestockWhenJournalFull(input.sku, input.receivedQty);
  },
  "POST /api/warehouse-inventory-system-formalized/guard-force-reconciliation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.guardForceReconciliation();
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