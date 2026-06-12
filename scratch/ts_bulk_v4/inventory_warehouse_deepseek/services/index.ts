// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { movementJournals, orderManagers, receivingDocks, reconciliationEngines, stockLedgers, warehouseInventorySystemFormalizeds, warehouseInventorySystems } from "../db/schema.js";
import { eq, sql } from "drizzle-orm";
// Validators from the ontodls TypeScript codegen target.
// Import every `validate*` for the kinds this service touches.
// import { validateXxx, ... } from "@onto/<your-app>";

export class InvariantViolation extends Error {
  constructor(public readonly context: string, public readonly violations: readonly string[]) {
    super(`Invariant violation in ${context}: ${violations.join('; ')}`);
    this.name = "InvariantViolation";
  }
}
function assertNoViolations(violations: readonly string[], context: string): void {
  if (violations.length > 0) throw new InvariantViolation(context, violations);
}

// ─── Events on BackorderQueue ───

export async function addBackorder(__selfId: string, sku: string, qty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: qty > 0.0
  //   pre: not self.backorders->exists(bo | bo.sku = sku and bo.qty = qty)
  //   pre: self.isBackorderable = sku.isBackorderable
  // Post-conditions from spec:
  //   post: self.backorders->size() = self.backorders@pre->size() + 1
  // TODO: implement mutation logic for 'BackorderQueue.addBackorder'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: addBackorder");
}

export async function removeFulfilled(__selfId: string, bo: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: bo <> null
  //   pre: self.backorders->includes(bo)
  // Post-conditions from spec:
  //   post: not self.backorders->includes(bo)
  // TODO: implement mutation logic for 'BackorderQueue.removeFulfilled'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: removeFulfilled");
}

// ─── Events on MovementJournal ───

export async function writeEntry(__selfId: string, sku: string, delta: number, reason: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: reason <> null
  //   pre: delta <> 0.0
  // Post-conditions from spec:
  //   post: self.movementJournalSize = self.movementJournalSize@pre + 1
  //   post: self.entries->size() = self.entries@pre->size() + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(movementJournals).set({
      movementJournalSize: sql`${movementJournals.movementJournalSize} + ${1}`,
    }).where(eq(movementJournals.mjId, __selfId));
    // After mutation: re-validate against `validateMovementJournal` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(movementJournals).where(eq(movementJournals.mjId, __selfId)).get();
    // assertNoViolations(validateMovementJournal(row as never), "writeEntry");
  });
}

export async function flushEntries(__selfId: string, count: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: count > 0
  //   pre: count <= self.movementJournalSize
  // Post-conditions from spec:
  //   post: self.movementJournalSize = self.movementJournalSize@pre - count
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(movementJournals).set({
      movementJournalSize: sql`${movementJournals.movementJournalSize} - ${count}`,
    }).where(eq(movementJournals.mjId, __selfId));
    // After mutation: re-validate against `validateMovementJournal` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(movementJournals).where(eq(movementJournals.mjId, __selfId)).get();
    // assertNoViolations(validateMovementJournal(row as never), "flushEntries");
  });
}

// ─── Events on OrderManager ───

export async function receiveOrder(__selfId: string, order: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: order <> null
  //   pre: order.requestedQty > 0.0
  //   pre: order.sku <> null
  //   pre: not self.pendingOrders->includes(order)
  //   pre: not self.allocatedOrders->includes(order)
  //   pre: not self.rejectedOrders->includes(order)
  // Post-conditions from spec:
  //   post: self.pendingOrders->includes(order)
  // TODO: implement mutation logic for 'OrderManager.receiveOrder'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: receiveOrder");
}

export async function tryAllocate(__selfId: string, sku: string, requestedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: requestedQty > 0.0
  // Post-conditions from spec:
  //   post: self.stockOnHand = self.stockOnHand@pre - requestedQty
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(orderManagers).set({
      stockOnHand: sql`${orderManagers.stockOnHand} - ${requestedQty}`,
    }).where(eq(orderManagers.omId, __selfId));
    // After mutation: re-validate against `validateOrderManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(orderManagers).where(eq(orderManagers.omId, __selfId)).get();
    // assertNoViolations(validateOrderManager(row as never), "tryAllocate");
  });
}

export async function markAllocated(__selfId: string, order: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: order <> null
  //   pre: self.pendingOrders->includes(order)
  //   pre: not self.allocatedOrders->includes(order)
  //   pre: not self.rejectedOrders->includes(order)
  // Post-conditions from spec:
  //   post: not self.pendingOrders->includes(order)
  //   post: self.allocatedOrders->includes(order)
  // TODO: implement mutation logic for 'OrderManager.markAllocated'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: markAllocated");
}

export async function markRejected(__selfId: string, order: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: order <> null
  //   pre: self.pendingOrders->includes(order)
  //   pre: not self.allocatedOrders->includes(order)
  //   pre: not self.rejectedOrders->includes(order)
  // Post-conditions from spec:
  //   post: not self.pendingOrders->includes(order)
  //   post: self.rejectedOrders->includes(order)
  // TODO: implement mutation logic for 'OrderManager.markRejected'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: markRejected");
}

// ─── Events on ReceivingDock ───

export async function processRestock(__selfId: string, sku: string, receivedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: receivedQty > 0.0
  //   pre: self.stockOnHand + receivedQty >= 0.0
  // Post-conditions from spec:
  //   post: self.inboundRecords->size() = self.inboundRecords@pre->size() + 1
  //   post: self.stockOnHand = self.stockOnHand@pre + receivedQty
  //   post: self.cachedStock = self.stockOnHand
  //   post: self.movementJournalSize = self.movementJournalSize@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(receivingDocks).set({
      stockOnHand: sql`${receivingDocks.stockOnHand} + ${receivedQty}`,
      cachedStock: sql`${receivingDocks.stockOnHand}`,
      movementJournalSize: sql`${receivingDocks.movementJournalSize} + ${1}`,
    }).where(eq(receivingDocks.rdId, __selfId));
    // After mutation: re-validate against `validateReceivingDock` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(receivingDocks).where(eq(receivingDocks.rdId, __selfId)).get();
    // assertNoViolations(validateReceivingDock(row as never), "processRestock");
  });
}

// ─── Events on ReconciliationEngine ───

export async function runReconciliation(__selfId: string, computedStock: number, cachedValue: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: computedStock >= 0.0
  //   pre: cachedValue >= 0.0
  // Post-conditions from spec:
  //   post: self.reconciledQty = computedStock
  //   post: self.cachedStock = cachedValue
  //   post: self.lastReconciliationResult = (computedStock = cachedValue)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(reconciliationEngines).set({
      reconciledQty: computedStock,
      cachedStock: cachedValue,
      lastReconciliationResult: sql`${computedStock} = ${cachedValue}`,
    }).where(eq(reconciliationEngines.reId, __selfId));
    // After mutation: re-validate against `validateReconciliationEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(reconciliationEngines).where(eq(reconciliationEngines.reId, __selfId)).get();
    // assertNoViolations(validateReconciliationEngine(row as never), "runReconciliation");
  });
}

export async function forceReconciliation(__selfId: string, computedStock: number, cachedValue: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: computedStock >= 0.0
  //   pre: cachedValue >= 0.0
  // Post-conditions from spec:
  //   post: self.reconciledQty = computedStock
  //   post: self.cachedStock = cachedValue
  //   post: self.lastReconciliationResult = (computedStock = cachedValue)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(reconciliationEngines).set({
      reconciledQty: computedStock,
      cachedStock: cachedValue,
      lastReconciliationResult: sql`${computedStock} = ${cachedValue}`,
    }).where(eq(reconciliationEngines.reId, __selfId));
    // After mutation: re-validate against `validateReconciliationEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(reconciliationEngines).where(eq(reconciliationEngines.reId, __selfId)).get();
    // assertNoViolations(validateReconciliationEngine(row as never), "forceReconciliation");
  });
}

// ─── Events on StockLedger ───

export async function deductStock(__selfId: string, sku: string, qty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: qty > 0.0
  //   pre: qty <= self.stockOnHand
  // Post-conditions from spec:
  //   post: self.stockOnHand = self.stockOnHand@pre - qty
  //   post: self.cachedStock = self.stockOnHand
  //   post: self.stockOnHand >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(stockLedgers).set({
      stockOnHand: sql`${stockLedgers.stockOnHand} - ${qty}`,
      cachedStock: sql`${stockLedgers.stockOnHand}`,
    }).where(eq(stockLedgers.slId, __selfId));
    // After mutation: re-validate against `validateStockLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(stockLedgers).where(eq(stockLedgers.slId, __selfId)).get();
    // assertNoViolations(validateStockLedger(row as never), "deductStock");
  });
}

export async function addStock(__selfId: string, sku: string, qty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: qty > 0.0
  //   pre: self.stockOnHand + qty >= 0.0
  // Post-conditions from spec:
  //   post: self.stockOnHand = self.stockOnHand@pre + qty
  //   post: self.cachedStock = self.stockOnHand
  //   post: self.stockOnHand >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(stockLedgers).set({
      stockOnHand: sql`${stockLedgers.stockOnHand} + ${qty}`,
      cachedStock: sql`${stockLedgers.stockOnHand}`,
    }).where(eq(stockLedgers.slId, __selfId));
    // After mutation: re-validate against `validateStockLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(stockLedgers).where(eq(stockLedgers.slId, __selfId)).get();
    // assertNoViolations(validateStockLedger(row as never), "addStock");
  });
}

export async function fulfillBackorderStock(__selfId: string, sku: string, qty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: qty > 0.0
  //   pre: qty <= self.stockOnHand
  // Post-conditions from spec:
  //   post: self.stockOnHand = self.stockOnHand@pre - qty
  //   post: self.cachedStock = self.stockOnHand
  //   post: self.stockOnHand >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(stockLedgers).set({
      stockOnHand: sql`${stockLedgers.stockOnHand} - ${qty}`,
      cachedStock: sql`${stockLedgers.stockOnHand}`,
    }).where(eq(stockLedgers.slId, __selfId));
    // After mutation: re-validate against `validateStockLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(stockLedgers).where(eq(stockLedgers.slId, __selfId)).get();
    // assertNoViolations(validateStockLedger(row as never), "fulfillBackorderStock");
  });
}

// ─── Events on WarehouseInventorySystem ───

export async function allocateStock(__selfId: string, sku: string, requestedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: requestedQty > 0.0
  // Post-conditions from spec:
  //   post: if self.stockOnHand@pre >= requestedQty then
            self.stockOnHand = self.stockOnHand@pre - requestedQty and
            self.cachedStock = self.stockOnHand and
            self.movementJournalSize = self.movementJournalSize@pre + 1
          else if sku.isBackorderable then
            self.stockOnHand = self.stockOnHand@pre and
            self.cachedStock = self.stockOnHand and
            self.movementJournalSize = self.movementJournalSize@pre
          else
            self.stockOnHand = self.stockOnHand@pre and
            self.cachedStock = self.stockOnHand and
            self.movementJournalSize = self.movementJournalSize@pre
          endif endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(warehouseInventorySystems).set({
      stockOnHand: sql`CASE WHEN ${warehouseInventorySystems.stockOnHand} >= ${requestedQty} THEN ${warehouseInventorySystems.stockOnHand} - ${requestedQty} ELSE ${warehouseInventorySystems.stockOnHand} END`,
      cachedStock: sql`CASE WHEN ${warehouseInventorySystems.stockOnHand} >= ${requestedQty} THEN ${warehouseInventorySystems.stockOnHand} ELSE ${warehouseInventorySystems.cachedStock} END`,
      movementJournalSize: sql`CASE WHEN ${warehouseInventorySystems.stockOnHand} >= ${requestedQty} THEN ${warehouseInventorySystems.movementJournalSize} + ${1} ELSE ${warehouseInventorySystems.movementJournalSize} END`,
    }).where(eq(warehouseInventorySystems.systemId, __selfId));
    // After mutation: re-validate against `validateWarehouseInventorySystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(warehouseInventorySystems).where(eq(warehouseInventorySystems.systemId, __selfId)).get();
    // assertNoViolations(validateWarehouseInventorySystem(row as never), "allocateStock");
  });
}

export async function recordRestock(__selfId: string, sku: string, receivedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: receivedQty > 0.0
  // Post-conditions from spec:
  //   post: self.movementJournalSize = self.movementJournalSize@pre + 1
  //   post: self.stockOnHand = self.stockOnHand@pre + receivedQty
  //   post: self.cachedStock = self.stockOnHand
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(warehouseInventorySystems).set({
      movementJournalSize: sql`${warehouseInventorySystems.movementJournalSize} + ${1}`,
      stockOnHand: sql`${warehouseInventorySystems.stockOnHand} + ${receivedQty}`,
      cachedStock: sql`${warehouseInventorySystems.stockOnHand}`,
    }).where(eq(warehouseInventorySystems.systemId, __selfId));
    // After mutation: re-validate against `validateWarehouseInventorySystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(warehouseInventorySystems).where(eq(warehouseInventorySystems.systemId, __selfId)).get();
    // assertNoViolations(validateWarehouseInventorySystem(row as never), "recordRestock");
  });
}

export async function fulfillBackorder(__selfId: string, sku: string, backorderQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: backorderQty > 0.0
  // Post-conditions from spec:
  //   post: self.stockOnHand = self.stockOnHand@pre - backorderQty
  //   post: self.cachedStock = self.stockOnHand
  //   post: self.movementJournalSize = self.movementJournalSize@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(warehouseInventorySystems).set({
      stockOnHand: sql`${warehouseInventorySystems.stockOnHand} - ${backorderQty}`,
      cachedStock: sql`${warehouseInventorySystems.stockOnHand}`,
      movementJournalSize: sql`${warehouseInventorySystems.movementJournalSize} + ${1}`,
    }).where(eq(warehouseInventorySystems.systemId, __selfId));
    // After mutation: re-validate against `validateWarehouseInventorySystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(warehouseInventorySystems).where(eq(warehouseInventorySystems.systemId, __selfId)).get();
    // assertNoViolations(validateWarehouseInventorySystem(row as never), "fulfillBackorder");
  });
}

export async function reconcile(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.cachedStock >= 0.0
  // Post-conditions from spec:
  //   post: self.reconciledQty = self.cachedStock
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(warehouseInventorySystems).set({
      reconciledQty: sql`${warehouseInventorySystems.cachedStock}`,
    }).where(eq(warehouseInventorySystems.systemId, __selfId));
    // After mutation: re-validate against `validateWarehouseInventorySystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(warehouseInventorySystems).where(eq(warehouseInventorySystems.systemId, __selfId)).get();
    // assertNoViolations(validateWarehouseInventorySystem(row as never), "reconcile");
  });
}

export async function rejectAllocation(__selfId: string, sku: string, requestedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: requestedQty > 0.0
  //   pre: requestedQty > self.stockOnHand
  //   pre: not sku.isBackorderable
  // TODO: implement mutation logic for 'WarehouseInventorySystem.rejectAllocation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectAllocation");
}

// ─── Events on WarehouseInventorySystemFormalized ───

export async function guardRejectAllocation(__selfId: string, sku: string, requestedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: requestedQty > 0.0
  //   pre: requestedQty > self.stockOnHand
  //   pre: not sku.isBackorderable
  // TODO: implement mutation logic for 'WarehouseInventorySystemFormalized.guardRejectAllocation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: guardRejectAllocation");
}

export async function guardJournalFlush(__selfId: string, flushCount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.movementJournalSize >= self.maxJournalEntriesPerCycle
  //   pre: flushCount > 0
  //   pre: flushCount <= self.movementJournalSize
  // Post-conditions from spec:
  //   post: self.movementJournalSize = self.movementJournalSize@pre - flushCount
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(warehouseInventorySystemFormalizeds).set({
      movementJournalSize: sql`${warehouseInventorySystemFormalizeds.movementJournalSize} - ${flushCount}`,
    }).where(eq(warehouseInventorySystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateWarehouseInventorySystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(warehouseInventorySystemFormalizeds).where(eq(warehouseInventorySystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateWarehouseInventorySystemFormalized(row as never), "guardJournalFlush");
  });
}

export async function guardLowStockAlert(__selfId: string, sku: string, requestedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: requestedQty > 0.0
  //   pre: self.stockOnHand - requestedQty >= 0.0
  //   pre: self.stockOnHand - requestedQty <= self.lowStockAlertThreshold
  // TODO: implement mutation logic for 'WarehouseInventorySystemFormalized.guardLowStockAlert'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: guardLowStockAlert");
}

export async function guardRejectRestockWhenJournalFull(__selfId: string, sku: string, receivedQty: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sku <> null
  //   pre: receivedQty > 0.0
  //   pre: self.movementJournalSize >= self.maxJournalEntriesPerCycle
  // TODO: implement mutation logic for 'WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: guardRejectRestockWhenJournalFull");
}

export async function guardForceReconciliation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.movementJournalSize >= self.maxJournalEntriesPerCycle
  // Post-conditions from spec:
  //   post: self.reconciledQty = self.cachedStock
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(warehouseInventorySystemFormalizeds).set({
      reconciledQty: sql`${warehouseInventorySystemFormalizeds.cachedStock}`,
    }).where(eq(warehouseInventorySystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateWarehouseInventorySystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(warehouseInventorySystemFormalizeds).where(eq(warehouseInventorySystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateWarehouseInventorySystemFormalized(row as never), "guardForceReconciliation");
  });
}
