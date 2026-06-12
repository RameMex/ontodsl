// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for WarehouseManager. Runtime: string. Compile-time: branded. */
export type WarehouseManagerId = string & { readonly __brand: "WarehouseManagerId" };
/** Identity type for FulfillmentPartner. Runtime: string. Compile-time: branded. */
export type FulfillmentPartnerId = string & { readonly __brand: "FulfillmentPartnerId" };
/** Identity type for Auditor. Runtime: string. Compile-time: branded. */
export type AuditorId = string & { readonly __brand: "AuditorId" };
/** Identity type for InventoryVendor. Runtime: string. Compile-time: branded. */
export type InventoryVendorId = string & { readonly __brand: "InventoryVendorId" };
/** Identity type for NonNegativeStockCommitment. Runtime: string. Compile-time: branded. */
export type NonNegativeStockCommitmentId = string & { readonly __brand: "NonNegativeStockCommitmentId" };
/** Identity type for JournaledMovementCommitment. Runtime: string. Compile-time: branded. */
export type JournaledMovementCommitmentId = string & { readonly __brand: "JournaledMovementCommitmentId" };
/** Identity type for BackorderPolicyCommitment. Runtime: string. Compile-time: branded. */
export type BackorderPolicyCommitmentId = string & { readonly __brand: "BackorderPolicyCommitmentId" };
/** Identity type for ReconciliationConvergenceCommitment. Runtime: string. Compile-time: branded. */
export type ReconciliationConvergenceCommitmentId = string & { readonly __brand: "ReconciliationConvergenceCommitmentId" };
/** Identity type for _WarehouseInventorySystem. Runtime: string. Compile-time: branded. */
export type _WarehouseInventorySystemId = string & { readonly __brand: "_WarehouseInventorySystemId" };
/** Identity type for SKU. Runtime: string. Compile-time: branded. */
export type SKUId = string & { readonly __brand: "SKUId" };
/** Identity type for StockOnHand. Runtime: string. Compile-time: branded. */
export type StockOnHandId = string & { readonly __brand: "StockOnHandId" };
/** Identity type for FulfillmentOrder. Runtime: string. Compile-time: branded. */
export type FulfillmentOrderId = string & { readonly __brand: "FulfillmentOrderId" };
/** Identity type for Restock. Runtime: string. Compile-time: branded. */
export type RestockId = string & { readonly __brand: "RestockId" };
/** Identity type for Backorder. Runtime: string. Compile-time: branded. */
export type BackorderId = string & { readonly __brand: "BackorderId" };
/** Identity type for MovementJournalEntry. Runtime: string. Compile-time: branded. */
export type MovementJournalEntryId = string & { readonly __brand: "MovementJournalEntryId" };
/** Identity type for OutboundShipmentFlow. Runtime: string. Compile-time: branded. */
export type OutboundShipmentFlowId = string & { readonly __brand: "OutboundShipmentFlowId" };
/** Identity type for InboundRestockFlow. Runtime: string. Compile-time: branded. */
export type InboundRestockFlowId = string & { readonly __brand: "InboundRestockFlowId" };
/** Identity type for NightlyReconciliationFlow. Runtime: string. Compile-time: branded. */
export type NightlyReconciliationFlowId = string & { readonly __brand: "NightlyReconciliationFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface WarehouseManager {
  readonly agentId: WarehouseManagerId;
  readonly name: string;
  readonly facilityCode: string;
}

/** @stereotype <<Agent>> */
export interface FulfillmentPartner {
  readonly partnerId: FulfillmentPartnerId;
  readonly companyName: string;
}

/** @stereotype <<Agent>> */
export interface Auditor {
  readonly auditorId: AuditorId;
  readonly certifyingBody: string;
}

/** @stereotype <<Agent>> */
export interface InventoryVendor {
  readonly vendorId: InventoryVendorId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface NonNegativeStockCommitment {
  readonly commitmentId: NonNegativeStockCommitmentId;
  readonly stockOnHand: number;
}

/** @stereotype <<Commitment>> */
export interface JournaledMovementCommitment {
  readonly commitmentId: JournaledMovementCommitmentId;
  readonly movementJournalSize: number;
  readonly cachedStock: number;
}

/** @stereotype <<Commitment>> */
export interface BackorderPolicyCommitment {
  readonly commitmentId: BackorderPolicyCommitmentId;
  readonly stockOnHand: number;
  readonly isBackorderable: boolean;
}

/** @stereotype <<Commitment>> */
export interface ReconciliationConvergenceCommitment {
  readonly commitmentId: ReconciliationConvergenceCommitmentId;
  readonly reconciledQty: number;
  readonly cachedStock: number;
}

/** @stereotype <<Kind>> */
export interface _WarehouseInventorySystem {
  readonly _placeholderId: _WarehouseInventorySystemId;
  readonly stockOnHand: number;
  readonly movementJournalSize: number;
  readonly cachedStock: number;
  readonly isBackorderable: boolean;
  readonly reconciledQty: number;
}

/** @stereotype <<Category>> */
export interface NonNegativeStockConstraint {
}

/** @stereotype <<Category>> */
export interface JournalBeforeMovement {
}

/** @stereotype <<Category>> */
export interface BackorderDiscipline {
}

/** @stereotype <<Category>> */
export interface ReconciliationConvergent {
}

/** @stereotype <<Kind>> */
export interface SKU {
  readonly skuId: SKUId;
  readonly description: string;
  readonly isBackorderable: boolean;
}

/** @stereotype <<Kind>> */
export interface StockOnHand {
  readonly entryId: StockOnHandId;
  readonly sku: SKU;
  readonly qty: number;
  readonly lastUpdated: string;
}

/** @stereotype <<Kind>> */
export interface FulfillmentOrder {
  readonly orderId: FulfillmentOrderId;
  readonly sku: SKU;
  readonly requestedQty: number;
  readonly status: string;
}

/** @stereotype <<Kind>> */
export interface Restock {
  readonly restockId: RestockId;
  readonly sku: SKU;
  readonly receivedQty: number;
  readonly inboundTimestamp: string;
}

/** @stereotype <<Kind>> */
export interface Backorder {
  readonly boId: BackorderId;
  readonly sku: SKU;
  readonly qty: number;
  readonly createdAt: string;
}

/** @stereotype <<Kind>> */
export interface MovementJournalEntry {
  readonly entryId: MovementJournalEntryId;
  readonly sku: SKU;
  readonly delta: number;
  readonly reason: string;
  readonly recordedAt: string;
}

/** @stereotype <<Happening>> */
export interface OutboundShipmentFlow {
  readonly flowId: OutboundShipmentFlowId;
  readonly sku: SKU;
  readonly requestedQty: number;
  readonly allocatedQty: number;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface InboundRestockFlow {
  readonly flowId: InboundRestockFlowId;
  readonly sku: SKU;
  readonly receivedQty: number;
  readonly fulfilledBackorderQty: number;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface NightlyReconciliationFlow {
  readonly flowId: NightlyReconciliationFlowId;
  readonly startAt: string;
  readonly endAt: string;
  readonly computedQty: number;
  readonly cachedQty: number;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeWarehouseManager(data: {
  agentId: string;
  name: string;
  facilityCode: string;
}): WarehouseManager {
  return {
    agentId: data.agentId as WarehouseManagerId,
    name: data.name,
    facilityCode: data.facilityCode,
  };
}

export function makeFulfillmentPartner(data: {
  partnerId: string;
  companyName: string;
}): FulfillmentPartner {
  return {
    partnerId: data.partnerId as FulfillmentPartnerId,
    companyName: data.companyName,
  };
}

export function makeAuditor(data: {
  auditorId: string;
  certifyingBody: string;
}): Auditor {
  return {
    auditorId: data.auditorId as AuditorId,
    certifyingBody: data.certifyingBody,
  };
}

export function makeInventoryVendor(data: {
  vendorId: string;
  name: string;
}): InventoryVendor {
  return {
    vendorId: data.vendorId as InventoryVendorId,
    name: data.name,
  };
}

export function makeNonNegativeStockCommitment(data: {
  commitmentId: string;
  stockOnHand: number;
}): NonNegativeStockCommitment {
  return {
    commitmentId: data.commitmentId as NonNegativeStockCommitmentId,
    stockOnHand: data.stockOnHand,
  };
}

export function makeJournaledMovementCommitment(data: {
  commitmentId: string;
  movementJournalSize: number;
  cachedStock: number;
}): JournaledMovementCommitment {
  return {
    commitmentId: data.commitmentId as JournaledMovementCommitmentId,
    movementJournalSize: data.movementJournalSize,
    cachedStock: data.cachedStock,
  };
}

export function makeBackorderPolicyCommitment(data: {
  commitmentId: string;
  stockOnHand: number;
  isBackorderable: boolean;
}): BackorderPolicyCommitment {
  return {
    commitmentId: data.commitmentId as BackorderPolicyCommitmentId,
    stockOnHand: data.stockOnHand,
    isBackorderable: data.isBackorderable,
  };
}

export function makeReconciliationConvergenceCommitment(data: {
  commitmentId: string;
  reconciledQty: number;
  cachedStock: number;
}): ReconciliationConvergenceCommitment {
  return {
    commitmentId: data.commitmentId as ReconciliationConvergenceCommitmentId,
    reconciledQty: data.reconciledQty,
    cachedStock: data.cachedStock,
  };
}

export function make_WarehouseInventorySystem(data: {
  _placeholderId: string;
  stockOnHand: number;
  movementJournalSize: number;
  cachedStock: number;
  isBackorderable: boolean;
  reconciledQty: number;
}): _WarehouseInventorySystem {
  return {
    _placeholderId: data._placeholderId as _WarehouseInventorySystemId,
    stockOnHand: data.stockOnHand,
    movementJournalSize: data.movementJournalSize,
    cachedStock: data.cachedStock,
    isBackorderable: data.isBackorderable,
    reconciledQty: data.reconciledQty,
  };
}

export function makeSKU(data: {
  skuId: string;
  description: string;
  isBackorderable: boolean;
}): SKU {
  return {
    skuId: data.skuId as SKUId,
    description: data.description,
    isBackorderable: data.isBackorderable,
  };
}

export function makeStockOnHand(data: {
  entryId: string;
  sku: SKU;
  qty: number;
  lastUpdated: string;
}): StockOnHand {
  return {
    entryId: data.entryId as StockOnHandId,
    sku: data.sku,
    qty: data.qty,
    lastUpdated: data.lastUpdated,
  };
}

export function makeFulfillmentOrder(data: {
  orderId: string;
  sku: SKU;
  requestedQty: number;
  status: string;
}): FulfillmentOrder {
  return {
    orderId: data.orderId as FulfillmentOrderId,
    sku: data.sku,
    requestedQty: data.requestedQty,
    status: data.status,
  };
}

export function makeRestock(data: {
  restockId: string;
  sku: SKU;
  receivedQty: number;
  inboundTimestamp: string;
}): Restock {
  return {
    restockId: data.restockId as RestockId,
    sku: data.sku,
    receivedQty: data.receivedQty,
    inboundTimestamp: data.inboundTimestamp,
  };
}

export function makeBackorder(data: {
  boId: string;
  sku: SKU;
  qty: number;
  createdAt: string;
}): Backorder {
  return {
    boId: data.boId as BackorderId,
    sku: data.sku,
    qty: data.qty,
    createdAt: data.createdAt,
  };
}

export function makeMovementJournalEntry(data: {
  entryId: string;
  sku: SKU;
  delta: number;
  reason: string;
  recordedAt: string;
}): MovementJournalEntry {
  return {
    entryId: data.entryId as MovementJournalEntryId,
    sku: data.sku,
    delta: data.delta,
    reason: data.reason,
    recordedAt: data.recordedAt,
  };
}

export function makeOutboundShipmentFlow(data: {
  flowId: string;
  sku: SKU;
  requestedQty: number;
  allocatedQty: number;
  triggeredBy: string;
  outcome: string;
}): OutboundShipmentFlow {
  return {
    flowId: data.flowId as OutboundShipmentFlowId,
    sku: data.sku,
    requestedQty: data.requestedQty,
    allocatedQty: data.allocatedQty,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeInboundRestockFlow(data: {
  flowId: string;
  sku: SKU;
  receivedQty: number;
  fulfilledBackorderQty: number;
  triggeredBy: string;
  outcome: string;
}): InboundRestockFlow {
  return {
    flowId: data.flowId as InboundRestockFlowId,
    sku: data.sku,
    receivedQty: data.receivedQty,
    fulfilledBackorderQty: data.fulfilledBackorderQty,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeNightlyReconciliationFlow(data: {
  flowId: string;
  startAt: string;
  endAt: string;
  computedQty: number;
  cachedQty: number;
  outcome: string;
}): NightlyReconciliationFlow {
  return {
    flowId: data.flowId as NightlyReconciliationFlowId,
    startAt: data.startAt,
    endAt: data.endAt,
    computedQty: data.computedQty,
    cachedQty: data.cachedQty,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for WarehouseManager. Returns empty array when valid. */
export function validateWarehouseManager(instance: WarehouseManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.agentId !== null))) {
    violations.push("[WarehouseManager] invariant violated: self.agentId <> null");
  }
  if (!((instance.facilityCode !== null))) {
    violations.push("[WarehouseManager] invariant violated: self.facilityCode <> null");
  }
  return violations;
}

/** Runtime invariant check for FulfillmentPartner. Returns empty array when valid. */
export function validateFulfillmentPartner(instance: FulfillmentPartner): readonly string[] {
  const violations: string[] = [];
  if (!((instance.partnerId !== null))) {
    violations.push("[FulfillmentPartner] invariant violated: self.partnerId <> null");
  }
  if (!((instance.companyName !== null))) {
    violations.push("[FulfillmentPartner] invariant violated: self.companyName <> null");
  }
  return violations;
}

/** Runtime invariant check for Auditor. Returns empty array when valid. */
export function validateAuditor(instance: Auditor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.auditorId !== null))) {
    violations.push("[Auditor] invariant violated: self.auditorId <> null");
  }
  if (!((instance.certifyingBody !== null))) {
    violations.push("[Auditor] invariant violated: self.certifyingBody <> null");
  }
  return violations;
}

/** Runtime invariant check for InventoryVendor. Returns empty array when valid. */
export function validateInventoryVendor(instance: InventoryVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[InventoryVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for NonNegativeStockConstraint. Returns empty array when valid. */
export function validateNonNegativeStockConstraint(instance: NonNegativeStockConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.stockOnHand >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for JournalBeforeMovement. Returns empty array when valid. */
export function validateJournalBeforeMovement(instance: JournalBeforeMovement): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.movementJournalSize >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): (if bearer.cachedStock > 0.0 then bearer.movementJournalSize > 0 else true endif) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BackorderDiscipline. Returns empty array when valid. */
export function validateBackorderDiscipline(instance: BackorderDiscipline): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): (if bearer.stockOnHand = 0.0 then bearer.isBackorderable = true else true endif) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ReconciliationConvergent. Returns empty array when valid. */
export function validateReconciliationConvergent(instance: ReconciliationConvergent): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.reconciledQty = bearer.cachedStock — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SKU. Returns empty array when valid. */
export function validateSKU(instance: SKU): readonly string[] {
  const violations: string[] = [];
  if (!((instance.skuId !== null))) {
    violations.push("[SKU] invariant violated: self.skuId <> null");
  }
  return violations;
}

/** Runtime invariant check for StockOnHand. Returns empty array when valid. */
export function validateStockOnHand(instance: StockOnHand): readonly string[] {
  const violations: string[] = [];
  if (!((instance.entryId !== null))) {
    violations.push("[StockOnHand] invariant violated: self.entryId <> null");
  }
  if (!((instance.sku !== null))) {
    violations.push("[StockOnHand] invariant violated: self.sku <> null");
  }
  if (!((instance.qty >= 0))) {
    violations.push("[StockOnHand] invariant violated: self.qty >= 0.0");
  }
  if (!((instance.lastUpdated !== null))) {
    violations.push("[StockOnHand] invariant violated: self.lastUpdated <> null");
  }
  return violations;
}

/** Runtime invariant check for FulfillmentOrder. Returns empty array when valid. */
export function validateFulfillmentOrder(instance: FulfillmentOrder): readonly string[] {
  const violations: string[] = [];
  if (!((instance.orderId !== null))) {
    violations.push("[FulfillmentOrder] invariant violated: self.orderId <> null");
  }
  if (!((instance.sku !== null))) {
    violations.push("[FulfillmentOrder] invariant violated: self.sku <> null");
  }
  if (!((instance.requestedQty > 0))) {
    violations.push("[FulfillmentOrder] invariant violated: self.requestedQty > 0.0");
  }
  if (!((instance.status !== null))) {
    violations.push("[FulfillmentOrder] invariant violated: self.status <> null");
  }
  return violations;
}

/** Runtime invariant check for Restock. Returns empty array when valid. */
export function validateRestock(instance: Restock): readonly string[] {
  const violations: string[] = [];
  if (!((instance.restockId !== null))) {
    violations.push("[Restock] invariant violated: self.restockId <> null");
  }
  if (!((instance.sku !== null))) {
    violations.push("[Restock] invariant violated: self.sku <> null");
  }
  if (!((instance.receivedQty > 0))) {
    violations.push("[Restock] invariant violated: self.receivedQty > 0.0");
  }
  if (!((instance.inboundTimestamp !== null))) {
    violations.push("[Restock] invariant violated: self.inboundTimestamp <> null");
  }
  return violations;
}

/** Runtime invariant check for Backorder. Returns empty array when valid. */
export function validateBackorder(instance: Backorder): readonly string[] {
  const violations: string[] = [];
  if (!((instance.boId !== null))) {
    violations.push("[Backorder] invariant violated: self.boId <> null");
  }
  if (!((instance.sku !== null))) {
    violations.push("[Backorder] invariant violated: self.sku <> null");
  }
  if (!((instance.qty > 0))) {
    violations.push("[Backorder] invariant violated: self.qty > 0.0");
  }
  if (!((instance.createdAt !== null))) {
    violations.push("[Backorder] invariant violated: self.createdAt <> null");
  }
  return violations;
}

/** Runtime invariant check for MovementJournalEntry. Returns empty array when valid. */
export function validateMovementJournalEntry(instance: MovementJournalEntry): readonly string[] {
  const violations: string[] = [];
  if (!((instance.entryId !== null))) {
    violations.push("[MovementJournalEntry] invariant violated: self.entryId <> null");
  }
  if (!((instance.sku !== null))) {
    violations.push("[MovementJournalEntry] invariant violated: self.sku <> null");
  }
  if (!((instance.recordedAt !== null))) {
    violations.push("[MovementJournalEntry] invariant violated: self.recordedAt <> null");
  }
  return violations;
}

/** Runtime invariant check for OutboundShipmentFlow. Returns empty array when valid. */
export function validateOutboundShipmentFlow(instance: OutboundShipmentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OutboundShipmentFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[OutboundShipmentFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for InboundRestockFlow. Returns empty array when valid. */
export function validateInboundRestockFlow(instance: InboundRestockFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[InboundRestockFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[InboundRestockFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for NightlyReconciliationFlow. Returns empty array when valid. */
export function validateNightlyReconciliationFlow(instance: NightlyReconciliationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NightlyReconciliationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[NightlyReconciliationFlow] invariant violated: self.outcome <> null");
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

/** Lifecycle registry for NonNegativeStockCommitment commitments. */
export class NonNegativeStockCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<NonNegativeStockCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a NonNegativeStockCommitment — the typed wrapper guarantees that since
    // `register` only accepts NonNegativeStockCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: NonNegativeStockCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: NonNegativeStockCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: NonNegativeStockCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: NonNegativeStockCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<NonNegativeStockCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<NonNegativeStockCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for JournaledMovementCommitment commitments. */
export class JournaledMovementCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<JournaledMovementCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a JournaledMovementCommitment — the typed wrapper guarantees that since
    // `register` only accepts JournaledMovementCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: JournaledMovementCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: JournaledMovementCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: JournaledMovementCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: JournaledMovementCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<JournaledMovementCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<JournaledMovementCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BackorderPolicyCommitment commitments. */
export class BackorderPolicyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BackorderPolicyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BackorderPolicyCommitment — the typed wrapper guarantees that since
    // `register` only accepts BackorderPolicyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BackorderPolicyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BackorderPolicyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BackorderPolicyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BackorderPolicyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BackorderPolicyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BackorderPolicyCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ReconciliationConvergenceCommitment commitments. */
export class ReconciliationConvergenceCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ReconciliationConvergenceCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ReconciliationConvergenceCommitment — the typed wrapper guarantees that since
    // `register` only accepts ReconciliationConvergenceCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ReconciliationConvergenceCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ReconciliationConvergenceCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ReconciliationConvergenceCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ReconciliationConvergenceCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ReconciliationConvergenceCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ReconciliationConvergenceCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

