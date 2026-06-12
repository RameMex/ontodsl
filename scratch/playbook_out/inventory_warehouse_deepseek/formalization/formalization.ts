// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
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
/** Identity type for WarehouseInventorySystem. Runtime: string. Compile-time: branded. */
export type WarehouseInventorySystemId = string & { readonly __brand: "WarehouseInventorySystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleStock {
}

/** @stereotype <<Category>> */
export interface JournalConsistency {
}

/** @stereotype <<Category>> */
export interface BackorderIntegrity {
}

/** @stereotype <<Category>> */
export interface ReconciliationCompleteness {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly domainAuthority: string;
}

/** @stereotype <<Subkind>> */
export interface WarehouseInventorySystemFormalized extends WarehouseInventorySystem {
  readonly soxControlId: string;
  readonly auditRetentionDays: number;
  readonly gdprDataController: string;
  readonly gdprProcessorContract: string;
  readonly maxStackHeightCm: number;
  readonly hazmatSegregationRequired: boolean;
}

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

/** @stereotype <<Kind>> */
export interface WarehouseInventorySystem extends NonNegativeStockConstraint, JournalBeforeMovement, BackorderDiscipline, ReconciliationConvergent {
  readonly systemId: WarehouseInventorySystemId;
  readonly stockOnHand: number;
  readonly movementJournalSize: number;
  readonly cachedStock: number;
  readonly isBackorderable: boolean;
  readonly reconciledQty: number;
  readonly lowStockAlertThreshold: number;
  readonly maxJournalEntriesPerCycle: number;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  domainAuthority: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    domainAuthority: data.domainAuthority,
  };
}

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

export function makeWarehouseInventorySystem(data: {
  systemId: string;
  stockOnHand: number;
  movementJournalSize: number;
  cachedStock: number;
  isBackorderable: boolean;
  reconciledQty: number;
  lowStockAlertThreshold: number;
  maxJournalEntriesPerCycle: number;
}): WarehouseInventorySystem {
  return {
    systemId: data.systemId as WarehouseInventorySystemId,
    stockOnHand: data.stockOnHand,
    movementJournalSize: data.movementJournalSize,
    cachedStock: data.cachedStock,
    isBackorderable: data.isBackorderable,
    reconciledQty: data.reconciledQty,
    lowStockAlertThreshold: data.lowStockAlertThreshold,
    maxJournalEntriesPerCycle: data.maxJournalEntriesPerCycle,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for PhysicallyPlausibleStock. Returns empty array when valid. */
export function validatePhysicallyPlausibleStock(instance: PhysicallyPlausibleStock): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.stockOnHand >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.cachedStock >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.reconciledQty >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.lowStockAlertThreshold >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxJournalEntriesPerCycle > 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for JournalConsistency. Returns empty array when valid. */
export function validateJournalConsistency(instance: JournalConsistency): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.movementJournalSize >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): (if bearer.cachedStock > 0.0 then bearer.movementJournalSize > 0 else true endif) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BackorderIntegrity. Returns empty array when valid. */
export function validateBackorderIntegrity(instance: BackorderIntegrity): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): (if bearer.stockOnHand = 0.0 then bearer.isBackorderable = true else true endif) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ReconciliationCompleteness. Returns empty array when valid. */
export function validateReconciliationCompleteness(instance: ReconciliationCompleteness): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.reconciledQty = bearer.cachedStock — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((instance.domainAuthority !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.domainAuthority <> null");
  }
  return violations;
}

/** Runtime invariant check for WarehouseInventorySystemFormalized. Returns empty array when valid. */
export function validateWarehouseInventorySystemFormalized(instance: WarehouseInventorySystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stockOnHand >= 0))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.stockOnHand >= 0.0");
  }
  if (!((instance.cachedStock >= 0))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.cachedStock >= 0.0");
  }
  if (!((instance.reconciledQty >= 0))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.reconciledQty >= 0.0");
  }
  if (!((instance.movementJournalSize >= 0))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.movementJournalSize >= 0");
  }
  if (!((((instance.cachedStock > 0)) ? ((instance.movementJournalSize > 0)) : (true)))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: (if self.cachedStock > 0.0 then self.movementJournalSize > 0 else true endif)");
  }
  if (!((((instance.stockOnHand === 0)) ? ((instance.isBackorderable === true)) : (true)))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: (if self.stockOnHand = 0.0 then self.isBackorderable = true else true endif)");
  }
  if (!((instance.reconciledQty === instance.cachedStock))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.reconciledQty = self.cachedStock");
  }
  if (!((instance.soxControlId !== null))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.soxControlId <> null");
  }
  if (!((instance.auditRetentionDays >= 2555))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.auditRetentionDays >= 2555");
  }
  if (!((instance.gdprDataController !== null))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.gdprDataController <> null");
  }
  if (!((instance.gdprProcessorContract !== null))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.gdprProcessorContract <> null");
  }
  if (!((instance.maxStackHeightCm > 0))) {
    violations.push("[WarehouseInventorySystemFormalized] invariant violated: self.maxStackHeightCm > 0");
  }
  return violations;
}

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

/** Runtime invariant check for WarehouseInventorySystem. Returns empty array when valid. */
export function validateWarehouseInventorySystem(instance: WarehouseInventorySystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.stockOnHand >= 0))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.stockOnHand >= 0.0");
  }
  if (!((instance.movementJournalSize >= 0))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.movementJournalSize >= 0");
  }
  if (!((instance.cachedStock >= 0))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.cachedStock >= 0.0");
  }
  if (!((instance.reconciledQty >= 0))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.reconciledQty >= 0.0");
  }
  if (!((instance.lowStockAlertThreshold >= 0))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.lowStockAlertThreshold >= 0.0");
  }
  if (!((instance.maxJournalEntriesPerCycle > 0))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.maxJournalEntriesPerCycle > 0");
  }
  if (!((((instance.cachedStock > 0)) ? ((instance.movementJournalSize > 0)) : (true)))) {
    violations.push("[WarehouseInventorySystem] invariant violated: (if self.cachedStock > 0.0 then self.movementJournalSize > 0 else true endif)");
  }
  if (!((((instance.stockOnHand === 0)) ? ((instance.isBackorderable === true)) : (true)))) {
    violations.push("[WarehouseInventorySystem] invariant violated: (if self.stockOnHand = 0.0 then self.isBackorderable = true else true endif)");
  }
  if (!((instance.reconciledQty === instance.cachedStock))) {
    violations.push("[WarehouseInventorySystem] invariant violated: self.reconciledQty = self.cachedStock");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for WarehouseInventorySystemFormalized.guardRejectAllocation. User supplies this. */
export type WarehouseInventorySystemFormalizedGuardRejectAllocationImpl = (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => { self: WarehouseInventorySystemFormalized; modified: {} };

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardRejectAllocation. */
export function wrapWarehouseInventorySystemFormalizedGuardRejectAllocation(impl: WarehouseInventorySystemFormalizedGuardRejectAllocationImpl): (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => WarehouseInventorySystemFormalized {
  return (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: requestedQty > 0.0");
    }
    if (!((requestedQty > self.stockOnHand))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: requestedQty > self.stockOnHand");
    }
    if (!(!(sku.isBackorderable))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: not sku.isBackorderable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, requestedQty);
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

/** Impl signature for WarehouseInventorySystemFormalized.guardRejectAllocation (async). User supplies this. */
export type WarehouseInventorySystemFormalizedGuardRejectAllocationAsyncImpl = (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => Promise<{ self: WarehouseInventorySystemFormalized; modified: {} }>;

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardRejectAllocation (async). */
export function wrapWarehouseInventorySystemFormalizedGuardRejectAllocationAsync(impl: WarehouseInventorySystemFormalizedGuardRejectAllocationAsyncImpl): (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => Promise<WarehouseInventorySystemFormalized> {
  return async (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: requestedQty > 0.0");
    }
    if (!((requestedQty > self.stockOnHand))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: requestedQty > self.stockOnHand");
    }
    if (!(!(sku.isBackorderable))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectAllocation] pre violated: not sku.isBackorderable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, requestedQty);
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

/** Impl signature for WarehouseInventorySystemFormalized.guardJournalFlush. User supplies this. */
export type WarehouseInventorySystemFormalizedGuardJournalFlushImpl = (self: WarehouseInventorySystemFormalized, flushCount: number) => { self: WarehouseInventorySystemFormalized; modified: { movementJournalSize: unknown } };

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardJournalFlush. */
export function wrapWarehouseInventorySystemFormalizedGuardJournalFlush(impl: WarehouseInventorySystemFormalizedGuardJournalFlushImpl): (self: WarehouseInventorySystemFormalized, flushCount: number) => WarehouseInventorySystemFormalized {
  return (self, flushCount) => {
    const preViolations: string[] = [];
    if (!((self.movementJournalSize >= self.maxJournalEntriesPerCycle))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] pre violated: self.movementJournalSize >= self.maxJournalEntriesPerCycle");
    }
    if (!((flushCount > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] pre violated: flushCount > 0");
    }
    if (!((flushCount <= self.movementJournalSize))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] pre violated: flushCount <= self.movementJournalSize");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flushCount);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] - flushCount)))) {
        postViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] post violated: self.movementJournalSize = self.movementJournalSize@pre - flushCount");
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

/** Impl signature for WarehouseInventorySystemFormalized.guardJournalFlush (async). User supplies this. */
export type WarehouseInventorySystemFormalizedGuardJournalFlushAsyncImpl = (self: WarehouseInventorySystemFormalized, flushCount: number) => Promise<{ self: WarehouseInventorySystemFormalized; modified: { movementJournalSize: unknown } }>;

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardJournalFlush (async). */
export function wrapWarehouseInventorySystemFormalizedGuardJournalFlushAsync(impl: WarehouseInventorySystemFormalizedGuardJournalFlushAsyncImpl): (self: WarehouseInventorySystemFormalized, flushCount: number) => Promise<WarehouseInventorySystemFormalized> {
  return async (self, flushCount) => {
    const preViolations: string[] = [];
    if (!((self.movementJournalSize >= self.maxJournalEntriesPerCycle))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] pre violated: self.movementJournalSize >= self.maxJournalEntriesPerCycle");
    }
    if (!((flushCount > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] pre violated: flushCount > 0");
    }
    if (!((flushCount <= self.movementJournalSize))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] pre violated: flushCount <= self.movementJournalSize");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flushCount);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] - flushCount)))) {
        postViolations.push("[WarehouseInventorySystemFormalized.guardJournalFlush] post violated: self.movementJournalSize = self.movementJournalSize@pre - flushCount");
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

/** Impl signature for WarehouseInventorySystemFormalized.guardLowStockAlert. User supplies this. */
export type WarehouseInventorySystemFormalizedGuardLowStockAlertImpl = (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => { self: WarehouseInventorySystemFormalized; modified: {} };

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardLowStockAlert. */
export function wrapWarehouseInventorySystemFormalizedGuardLowStockAlert(impl: WarehouseInventorySystemFormalizedGuardLowStockAlertImpl): (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => WarehouseInventorySystemFormalized {
  return (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: requestedQty > 0.0");
    }
    if (!(((self.stockOnHand - requestedQty) >= 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: self.stockOnHand - requestedQty >= 0.0");
    }
    if (!(((self.stockOnHand - requestedQty) <= self.lowStockAlertThreshold))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: self.stockOnHand - requestedQty <= self.lowStockAlertThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, requestedQty);
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

/** Impl signature for WarehouseInventorySystemFormalized.guardLowStockAlert (async). User supplies this. */
export type WarehouseInventorySystemFormalizedGuardLowStockAlertAsyncImpl = (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => Promise<{ self: WarehouseInventorySystemFormalized; modified: {} }>;

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardLowStockAlert (async). */
export function wrapWarehouseInventorySystemFormalizedGuardLowStockAlertAsync(impl: WarehouseInventorySystemFormalizedGuardLowStockAlertAsyncImpl): (self: WarehouseInventorySystemFormalized, sku: SKU, requestedQty: number) => Promise<WarehouseInventorySystemFormalized> {
  return async (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: requestedQty > 0.0");
    }
    if (!(((self.stockOnHand - requestedQty) >= 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: self.stockOnHand - requestedQty >= 0.0");
    }
    if (!(((self.stockOnHand - requestedQty) <= self.lowStockAlertThreshold))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardLowStockAlert] pre violated: self.stockOnHand - requestedQty <= self.lowStockAlertThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, requestedQty);
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

/** Impl signature for WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull. User supplies this. */
export type WarehouseInventorySystemFormalizedGuardRejectRestockWhenJournalFullImpl = (self: WarehouseInventorySystemFormalized, sku: SKU, receivedQty: number) => { self: WarehouseInventorySystemFormalized; modified: {} };

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull. */
export function wrapWarehouseInventorySystemFormalizedGuardRejectRestockWhenJournalFull(impl: WarehouseInventorySystemFormalizedGuardRejectRestockWhenJournalFullImpl): (self: WarehouseInventorySystemFormalized, sku: SKU, receivedQty: number) => WarehouseInventorySystemFormalized {
  return (self, sku, receivedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull] pre violated: sku <> null");
    }
    if (!((receivedQty > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull] pre violated: receivedQty > 0.0");
    }
    if (!((self.movementJournalSize >= self.maxJournalEntriesPerCycle))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull] pre violated: self.movementJournalSize >= self.maxJournalEntriesPerCycle");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, receivedQty);
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

/** Impl signature for WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull (async). User supplies this. */
export type WarehouseInventorySystemFormalizedGuardRejectRestockWhenJournalFullAsyncImpl = (self: WarehouseInventorySystemFormalized, sku: SKU, receivedQty: number) => Promise<{ self: WarehouseInventorySystemFormalized; modified: {} }>;

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull (async). */
export function wrapWarehouseInventorySystemFormalizedGuardRejectRestockWhenJournalFullAsync(impl: WarehouseInventorySystemFormalizedGuardRejectRestockWhenJournalFullAsyncImpl): (self: WarehouseInventorySystemFormalized, sku: SKU, receivedQty: number) => Promise<WarehouseInventorySystemFormalized> {
  return async (self, sku, receivedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull] pre violated: sku <> null");
    }
    if (!((receivedQty > 0))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull] pre violated: receivedQty > 0.0");
    }
    if (!((self.movementJournalSize >= self.maxJournalEntriesPerCycle))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull] pre violated: self.movementJournalSize >= self.maxJournalEntriesPerCycle");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, receivedQty);
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

/** Impl signature for WarehouseInventorySystemFormalized.guardForceReconciliation. User supplies this. */
export type WarehouseInventorySystemFormalizedGuardForceReconciliationImpl = (self: WarehouseInventorySystemFormalized) => { self: WarehouseInventorySystemFormalized; modified: { reconciledQty: unknown } };

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardForceReconciliation. */
export function wrapWarehouseInventorySystemFormalizedGuardForceReconciliation(impl: WarehouseInventorySystemFormalizedGuardForceReconciliationImpl): (self: WarehouseInventorySystemFormalized) => WarehouseInventorySystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.movementJournalSize >= self.maxJournalEntriesPerCycle))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardForceReconciliation] pre violated: self.movementJournalSize >= self.maxJournalEntriesPerCycle");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === __result.self.cachedStock))) {
        postViolations.push("[WarehouseInventorySystemFormalized.guardForceReconciliation] post violated: self.reconciledQty = self.cachedStock");
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

/** Impl signature for WarehouseInventorySystemFormalized.guardForceReconciliation (async). User supplies this. */
export type WarehouseInventorySystemFormalizedGuardForceReconciliationAsyncImpl = (self: WarehouseInventorySystemFormalized) => Promise<{ self: WarehouseInventorySystemFormalized; modified: { reconciledQty: unknown } }>;

/** Contract-checking wrapper for WarehouseInventorySystemFormalized.guardForceReconciliation (async). */
export function wrapWarehouseInventorySystemFormalizedGuardForceReconciliationAsync(impl: WarehouseInventorySystemFormalizedGuardForceReconciliationAsyncImpl): (self: WarehouseInventorySystemFormalized) => Promise<WarehouseInventorySystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.movementJournalSize >= self.maxJournalEntriesPerCycle))) {
      preViolations.push("[WarehouseInventorySystemFormalized.guardForceReconciliation] pre violated: self.movementJournalSize >= self.maxJournalEntriesPerCycle");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === __result.self.cachedStock))) {
        postViolations.push("[WarehouseInventorySystemFormalized.guardForceReconciliation] post violated: self.reconciledQty = self.cachedStock");
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

/** Impl signature for WarehouseInventorySystem.allocateStock. User supplies this. */
export type WarehouseInventorySystemAllocateStockImpl = (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => { self: WarehouseInventorySystem; modified: { stockOnHand: unknown; cachedStock: unknown; movementJournalSize: unknown } };

/** Contract-checking wrapper for WarehouseInventorySystem.allocateStock. */
export function wrapWarehouseInventorySystemAllocateStock(impl: WarehouseInventorySystemAllocateStockImpl): (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => WarehouseInventorySystem {
  return (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.allocateStock] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.allocateStock] pre violated: requestedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, requestedQty);
      const postViolations: string[] = [];
      if (!((((__pre["self.stockOnHand"] >= requestedQty)) ? ((((__result.self.stockOnHand === (__pre["self.stockOnHand"] - requestedQty)) && (__result.self.cachedStock === __result.self.stockOnHand)) && (__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) : (((sku.isBackorderable) ? ((((__result.self.stockOnHand === __pre["self.stockOnHand"]) && (__result.self.cachedStock === __result.self.stockOnHand)) && (__result.self.movementJournalSize === __pre["self.movementJournalSize"]))) : ((((__result.self.stockOnHand === __pre["self.stockOnHand"]) && (__result.self.cachedStock === __result.self.stockOnHand)) && (__result.self.movementJournalSize === __pre["self.movementJournalSize"])))))))) {
        postViolations.push("[WarehouseInventorySystem.allocateStock] post violated: if self.stockOnHand@pre >= requestedQty then\n            self.stockOnHand = self.stockOnHand@pre - requestedQty and\n            self.cachedStock = self.stockOnHand and\n            self.movementJournalSize = self.movementJournalSize@pre + 1\n          else if sku.isBackorderable then\n            self.stockOnHand = self.stockOnHand@pre and\n            self.cachedStock = self.stockOnHand and\n            self.movementJournalSize = self.movementJournalSize@pre\n          else\n            self.stockOnHand = self.stockOnHand@pre and\n            self.cachedStock = self.stockOnHand and\n            self.movementJournalSize = self.movementJournalSize@pre\n          endif endif");
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

/** Impl signature for WarehouseInventorySystem.allocateStock (async). User supplies this. */
export type WarehouseInventorySystemAllocateStockAsyncImpl = (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => Promise<{ self: WarehouseInventorySystem; modified: { stockOnHand: unknown; cachedStock: unknown; movementJournalSize: unknown } }>;

/** Contract-checking wrapper for WarehouseInventorySystem.allocateStock (async). */
export function wrapWarehouseInventorySystemAllocateStockAsync(impl: WarehouseInventorySystemAllocateStockAsyncImpl): (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => Promise<WarehouseInventorySystem> {
  return async (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.allocateStock] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.allocateStock] pre violated: requestedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, requestedQty);
      const postViolations: string[] = [];
      if (!((((__pre["self.stockOnHand"] >= requestedQty)) ? ((((__result.self.stockOnHand === (__pre["self.stockOnHand"] - requestedQty)) && (__result.self.cachedStock === __result.self.stockOnHand)) && (__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) : (((sku.isBackorderable) ? ((((__result.self.stockOnHand === __pre["self.stockOnHand"]) && (__result.self.cachedStock === __result.self.stockOnHand)) && (__result.self.movementJournalSize === __pre["self.movementJournalSize"]))) : ((((__result.self.stockOnHand === __pre["self.stockOnHand"]) && (__result.self.cachedStock === __result.self.stockOnHand)) && (__result.self.movementJournalSize === __pre["self.movementJournalSize"])))))))) {
        postViolations.push("[WarehouseInventorySystem.allocateStock] post violated: if self.stockOnHand@pre >= requestedQty then\n            self.stockOnHand = self.stockOnHand@pre - requestedQty and\n            self.cachedStock = self.stockOnHand and\n            self.movementJournalSize = self.movementJournalSize@pre + 1\n          else if sku.isBackorderable then\n            self.stockOnHand = self.stockOnHand@pre and\n            self.cachedStock = self.stockOnHand and\n            self.movementJournalSize = self.movementJournalSize@pre\n          else\n            self.stockOnHand = self.stockOnHand@pre and\n            self.cachedStock = self.stockOnHand and\n            self.movementJournalSize = self.movementJournalSize@pre\n          endif endif");
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

/** Impl signature for WarehouseInventorySystem.recordRestock. User supplies this. */
export type WarehouseInventorySystemRecordRestockImpl = (self: WarehouseInventorySystem, sku: SKU, receivedQty: number) => { self: WarehouseInventorySystem; modified: { movementJournalSize: unknown; stockOnHand: unknown; cachedStock: unknown } };

/** Contract-checking wrapper for WarehouseInventorySystem.recordRestock. */
export function wrapWarehouseInventorySystemRecordRestock(impl: WarehouseInventorySystemRecordRestockImpl): (self: WarehouseInventorySystem, sku: SKU, receivedQty: number) => WarehouseInventorySystem {
  return (self, sku, receivedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.recordRestock] pre violated: sku <> null");
    }
    if (!((receivedQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.recordRestock] pre violated: receivedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, receivedQty);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[WarehouseInventorySystem.recordRestock] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
      }
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] + receivedQty)))) {
        postViolations.push("[WarehouseInventorySystem.recordRestock] post violated: self.stockOnHand = self.stockOnHand@pre + receivedQty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[WarehouseInventorySystem.recordRestock] post violated: self.cachedStock = self.stockOnHand");
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

/** Impl signature for WarehouseInventorySystem.recordRestock (async). User supplies this. */
export type WarehouseInventorySystemRecordRestockAsyncImpl = (self: WarehouseInventorySystem, sku: SKU, receivedQty: number) => Promise<{ self: WarehouseInventorySystem; modified: { movementJournalSize: unknown; stockOnHand: unknown; cachedStock: unknown } }>;

/** Contract-checking wrapper for WarehouseInventorySystem.recordRestock (async). */
export function wrapWarehouseInventorySystemRecordRestockAsync(impl: WarehouseInventorySystemRecordRestockAsyncImpl): (self: WarehouseInventorySystem, sku: SKU, receivedQty: number) => Promise<WarehouseInventorySystem> {
  return async (self, sku, receivedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.recordRestock] pre violated: sku <> null");
    }
    if (!((receivedQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.recordRestock] pre violated: receivedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, receivedQty);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[WarehouseInventorySystem.recordRestock] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
      }
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] + receivedQty)))) {
        postViolations.push("[WarehouseInventorySystem.recordRestock] post violated: self.stockOnHand = self.stockOnHand@pre + receivedQty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[WarehouseInventorySystem.recordRestock] post violated: self.cachedStock = self.stockOnHand");
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

/** Impl signature for WarehouseInventorySystem.fulfillBackorder. User supplies this. */
export type WarehouseInventorySystemFulfillBackorderImpl = (self: WarehouseInventorySystem, sku: SKU, backorderQty: number) => { self: WarehouseInventorySystem; modified: { stockOnHand: unknown; cachedStock: unknown; movementJournalSize: unknown } };

/** Contract-checking wrapper for WarehouseInventorySystem.fulfillBackorder. */
export function wrapWarehouseInventorySystemFulfillBackorder(impl: WarehouseInventorySystemFulfillBackorderImpl): (self: WarehouseInventorySystem, sku: SKU, backorderQty: number) => WarehouseInventorySystem {
  return (self, sku, backorderQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.fulfillBackorder] pre violated: sku <> null");
    }
    if (!((backorderQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.fulfillBackorder] pre violated: backorderQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, backorderQty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - backorderQty)))) {
        postViolations.push("[WarehouseInventorySystem.fulfillBackorder] post violated: self.stockOnHand = self.stockOnHand@pre - backorderQty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[WarehouseInventorySystem.fulfillBackorder] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[WarehouseInventorySystem.fulfillBackorder] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
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

/** Impl signature for WarehouseInventorySystem.fulfillBackorder (async). User supplies this. */
export type WarehouseInventorySystemFulfillBackorderAsyncImpl = (self: WarehouseInventorySystem, sku: SKU, backorderQty: number) => Promise<{ self: WarehouseInventorySystem; modified: { stockOnHand: unknown; cachedStock: unknown; movementJournalSize: unknown } }>;

/** Contract-checking wrapper for WarehouseInventorySystem.fulfillBackorder (async). */
export function wrapWarehouseInventorySystemFulfillBackorderAsync(impl: WarehouseInventorySystemFulfillBackorderAsyncImpl): (self: WarehouseInventorySystem, sku: SKU, backorderQty: number) => Promise<WarehouseInventorySystem> {
  return async (self, sku, backorderQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.fulfillBackorder] pre violated: sku <> null");
    }
    if (!((backorderQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.fulfillBackorder] pre violated: backorderQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, backorderQty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - backorderQty)))) {
        postViolations.push("[WarehouseInventorySystem.fulfillBackorder] post violated: self.stockOnHand = self.stockOnHand@pre - backorderQty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[WarehouseInventorySystem.fulfillBackorder] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[WarehouseInventorySystem.fulfillBackorder] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
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

/** Impl signature for WarehouseInventorySystem.reconcile. User supplies this. */
export type WarehouseInventorySystemReconcileImpl = (self: WarehouseInventorySystem) => { self: WarehouseInventorySystem; modified: { reconciledQty: unknown } };

/** Contract-checking wrapper for WarehouseInventorySystem.reconcile. */
export function wrapWarehouseInventorySystemReconcile(impl: WarehouseInventorySystemReconcileImpl): (self: WarehouseInventorySystem) => WarehouseInventorySystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.cachedStock >= 0))) {
      preViolations.push("[WarehouseInventorySystem.reconcile] pre violated: self.cachedStock >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === __result.self.cachedStock))) {
        postViolations.push("[WarehouseInventorySystem.reconcile] post violated: self.reconciledQty = self.cachedStock");
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

/** Impl signature for WarehouseInventorySystem.reconcile (async). User supplies this. */
export type WarehouseInventorySystemReconcileAsyncImpl = (self: WarehouseInventorySystem) => Promise<{ self: WarehouseInventorySystem; modified: { reconciledQty: unknown } }>;

/** Contract-checking wrapper for WarehouseInventorySystem.reconcile (async). */
export function wrapWarehouseInventorySystemReconcileAsync(impl: WarehouseInventorySystemReconcileAsyncImpl): (self: WarehouseInventorySystem) => Promise<WarehouseInventorySystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.cachedStock >= 0))) {
      preViolations.push("[WarehouseInventorySystem.reconcile] pre violated: self.cachedStock >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === __result.self.cachedStock))) {
        postViolations.push("[WarehouseInventorySystem.reconcile] post violated: self.reconciledQty = self.cachedStock");
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

/** Impl signature for WarehouseInventorySystem.rejectAllocation. User supplies this. */
export type WarehouseInventorySystemRejectAllocationImpl = (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => { self: WarehouseInventorySystem; modified: {} };

/** Contract-checking wrapper for WarehouseInventorySystem.rejectAllocation. */
export function wrapWarehouseInventorySystemRejectAllocation(impl: WarehouseInventorySystemRejectAllocationImpl): (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => WarehouseInventorySystem {
  return (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: requestedQty > 0.0");
    }
    if (!((requestedQty > self.stockOnHand))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: requestedQty > self.stockOnHand");
    }
    if (!(!(sku.isBackorderable))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: not sku.isBackorderable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, requestedQty);
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

/** Impl signature for WarehouseInventorySystem.rejectAllocation (async). User supplies this. */
export type WarehouseInventorySystemRejectAllocationAsyncImpl = (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => Promise<{ self: WarehouseInventorySystem; modified: {} }>;

/** Contract-checking wrapper for WarehouseInventorySystem.rejectAllocation (async). */
export function wrapWarehouseInventorySystemRejectAllocationAsync(impl: WarehouseInventorySystemRejectAllocationAsyncImpl): (self: WarehouseInventorySystem, sku: SKU, requestedQty: number) => Promise<WarehouseInventorySystem> {
  return async (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: requestedQty > 0.0");
    }
    if (!((requestedQty > self.stockOnHand))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: requestedQty > self.stockOnHand");
    }
    if (!(!(sku.isBackorderable))) {
      preViolations.push("[WarehouseInventorySystem.rejectAllocation] pre violated: not sku.isBackorderable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, requestedQty);
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

