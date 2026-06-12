// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for OrderManager. Runtime: string. Compile-time: branded. */
export type OrderManagerId = string & { readonly __brand: "OrderManagerId" };
/** Identity type for StockLedger. Runtime: string. Compile-time: branded. */
export type StockLedgerId = string & { readonly __brand: "StockLedgerId" };
/** Identity type for MovementJournal. Runtime: string. Compile-time: branded. */
export type MovementJournalId = string & { readonly __brand: "MovementJournalId" };
/** Identity type for BackorderQueue. Runtime: string. Compile-time: branded. */
export type BackorderQueueId = string & { readonly __brand: "BackorderQueueId" };
/** Identity type for ReceivingDock. Runtime: string. Compile-time: branded. */
export type ReceivingDockId = string & { readonly __brand: "ReceivingDockId" };
/** Identity type for ReconciliationEngine. Runtime: string. Compile-time: branded. */
export type ReconciliationEngineId = string & { readonly __brand: "ReconciliationEngineId" };
/** Identity type for AllocationChannel. Runtime: string. Compile-time: branded. */
export type AllocationChannelId = string & { readonly __brand: "AllocationChannelId" };
/** Identity type for JournalWriteChannel. Runtime: string. Compile-time: branded. */
export type JournalWriteChannelId = string & { readonly __brand: "JournalWriteChannelId" };
/** Identity type for BackorderFulfillment. Runtime: string. Compile-time: branded. */
export type BackorderFulfillmentId = string & { readonly __brand: "BackorderFulfillmentId" };
/** Identity type for ReconciliationCheck. Runtime: string. Compile-time: branded. */
export type ReconciliationCheckId = string & { readonly __brand: "ReconciliationCheckId" };
/** Identity type for OutboundShipment. Runtime: string. Compile-time: branded. */
export type OutboundShipmentId = string & { readonly __brand: "OutboundShipmentId" };
/** Identity type for InboundRestock. Runtime: string. Compile-time: branded. */
export type InboundRestockId = string & { readonly __brand: "InboundRestockId" };
/** Identity type for NightlyReconciliation. Runtime: string. Compile-time: branded. */
export type NightlyReconciliationId = string & { readonly __brand: "NightlyReconciliationId" };
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
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface OrderManager {
  readonly omId: OrderManagerId;
  readonly stockOnHand: number;
  readonly isBackorderable: boolean;
  readonly pendingOrders: ReadonlySet<FulfillmentOrder>;
  readonly allocatedOrders: ReadonlySet<FulfillmentOrder>;
  readonly rejectedOrders: ReadonlySet<FulfillmentOrder>;
}

/** @stereotype <<Kind>> */
export interface StockLedger {
  readonly slId: StockLedgerId;
  readonly stockOnHand: number;
  readonly cachedStock: number;
  readonly reconciledQty: number;
  readonly isBackorderable: boolean;
  readonly trackedSkus: ReadonlySet<SKU>;
  readonly currentStock: ReadonlySet<StockOnHand>;
}

/** @stereotype <<Kind>> */
export interface MovementJournal {
  readonly mjId: MovementJournalId;
  readonly movementJournalSize: number;
  readonly cachedStock: number;
  readonly entries: ReadonlySet<MovementJournalEntry>;
}

/** @stereotype <<Kind>> */
export interface BackorderQueue {
  readonly bqId: BackorderQueueId;
  readonly stockOnHand: number;
  readonly isBackorderable: boolean;
  readonly backorders: ReadonlySet<Backorder>;
}

/** @stereotype <<Kind>> */
export interface ReceivingDock {
  readonly rdId: ReceivingDockId;
  readonly stockOnHand: number;
  readonly movementJournalSize: number;
  readonly cachedStock: number;
  readonly inboundRecords: ReadonlySet<Restock>;
}

/** @stereotype <<Kind>> */
export interface ReconciliationEngine {
  readonly reId: ReconciliationEngineId;
  readonly reconciledQty: number;
  readonly cachedStock: number;
  readonly lastReconciliationResult: boolean;
}

/** @stereotype <<Role>> */
export interface AllocationEndpoint {
  readonly omId: string;
  readonly stockOnHand: number;
  readonly isBackorderable: boolean;
}

/** @stereotype <<Role>> */
export interface LedgerEndpoint {
  readonly slId: string;
  readonly stockOnHand: number;
  readonly cachedStock: number;
}

/** @stereotype <<Role>> */
export interface JournalWriterEndpoint {
  readonly slId: string;
  readonly stockOnHand: number;
  readonly cachedStock: number;
}

/** @stereotype <<Role>> */
export interface JournalAppendEndpoint {
  readonly mjId: string;
  readonly movementJournalSize: number;
}

/** @stereotype <<Role>> */
export interface RestockFulfillmentEndpoint {
  readonly rdId: string;
  readonly stockOnHand: number;
}

/** @stereotype <<Role>> */
export interface BackorderEndpoint {
  readonly bqId: string;
  readonly backorders: ReadonlySet<Backorder>;
}

/** @stereotype <<Role>> */
export interface ReconciliationQueryEndpoint {
  readonly reId: string;
  readonly reconciledQty: number;
}

/** @stereotype <<Role>> */
export interface StockVerifiedEndpoint {
  readonly slId: string;
  readonly stockOnHand: number;
  readonly cachedStock: number;
}

/** @stereotype <<Relator>> */
export interface AllocationChannel {
  readonly channelId: AllocationChannelId;
  readonly lastAllocationRequest: string;
  readonly lastAllocationResult: boolean;
}

/** @stereotype <<Relator>> */
export interface JournalWriteChannel {
  readonly channelId: JournalWriteChannelId;
  readonly lastWrittenEntryId: string;
}

/** @stereotype <<Relator>> */
export interface BackorderFulfillment {
  readonly channelId: BackorderFulfillmentId;
  readonly lastFulfilledBackorderQty: number;
}

/** @stereotype <<Relator>> */
export interface ReconciliationCheck {
  readonly channelId: ReconciliationCheckId;
  readonly lastComputedQty: number;
  readonly lastCachedQty: number;
  readonly lastMatch: boolean;
}

/** @stereotype <<Happening>> */
export interface OutboundShipment {
  readonly flowId: OutboundShipmentId;
  readonly order: FulfillmentOrder;
  readonly sku: SKU;
  readonly requestedQty: number;
  readonly allocatedQty: number;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface InboundRestock {
  readonly flowId: InboundRestockId;
  readonly restock: Restock;
  readonly sku: SKU;
  readonly receivedQty: number;
  readonly fulfilledBackorderQty: number;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface NightlyReconciliation {
  readonly flowId: NightlyReconciliationId;
  readonly startAt: string;
  readonly endAt: string;
  readonly computedQty: number;
  readonly cachedQty: number;
  readonly outcome: string;
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


// ─── Factory functions ───

export function makeOrderManager(data: {
  omId: string;
  stockOnHand: number;
  isBackorderable: boolean;
  pendingOrders: ReadonlySet<FulfillmentOrder>;
  allocatedOrders: ReadonlySet<FulfillmentOrder>;
  rejectedOrders: ReadonlySet<FulfillmentOrder>;
}): OrderManager {
  return {
    omId: data.omId as OrderManagerId,
    stockOnHand: data.stockOnHand,
    isBackorderable: data.isBackorderable,
    pendingOrders: data.pendingOrders,
    allocatedOrders: data.allocatedOrders,
    rejectedOrders: data.rejectedOrders,
  };
}

export function makeStockLedger(data: {
  slId: string;
  stockOnHand: number;
  cachedStock: number;
  reconciledQty: number;
  isBackorderable: boolean;
  trackedSkus: ReadonlySet<SKU>;
  currentStock: ReadonlySet<StockOnHand>;
}): StockLedger {
  return {
    slId: data.slId as StockLedgerId,
    stockOnHand: data.stockOnHand,
    cachedStock: data.cachedStock,
    reconciledQty: data.reconciledQty,
    isBackorderable: data.isBackorderable,
    trackedSkus: data.trackedSkus,
    currentStock: data.currentStock,
  };
}

export function makeMovementJournal(data: {
  mjId: string;
  movementJournalSize: number;
  cachedStock: number;
  entries: ReadonlySet<MovementJournalEntry>;
}): MovementJournal {
  return {
    mjId: data.mjId as MovementJournalId,
    movementJournalSize: data.movementJournalSize,
    cachedStock: data.cachedStock,
    entries: data.entries,
  };
}

export function makeBackorderQueue(data: {
  bqId: string;
  stockOnHand: number;
  isBackorderable: boolean;
  backorders: ReadonlySet<Backorder>;
}): BackorderQueue {
  return {
    bqId: data.bqId as BackorderQueueId,
    stockOnHand: data.stockOnHand,
    isBackorderable: data.isBackorderable,
    backorders: data.backorders,
  };
}

export function makeReceivingDock(data: {
  rdId: string;
  stockOnHand: number;
  movementJournalSize: number;
  cachedStock: number;
  inboundRecords: ReadonlySet<Restock>;
}): ReceivingDock {
  return {
    rdId: data.rdId as ReceivingDockId,
    stockOnHand: data.stockOnHand,
    movementJournalSize: data.movementJournalSize,
    cachedStock: data.cachedStock,
    inboundRecords: data.inboundRecords,
  };
}

export function makeReconciliationEngine(data: {
  reId: string;
  reconciledQty: number;
  cachedStock: number;
  lastReconciliationResult: boolean;
}): ReconciliationEngine {
  return {
    reId: data.reId as ReconciliationEngineId,
    reconciledQty: data.reconciledQty,
    cachedStock: data.cachedStock,
    lastReconciliationResult: data.lastReconciliationResult,
  };
}

export function makeAllocationChannel(data: {
  channelId: string;
  lastAllocationRequest: string;
  lastAllocationResult: boolean;
}): AllocationChannel {
  return {
    channelId: data.channelId as AllocationChannelId,
    lastAllocationRequest: data.lastAllocationRequest,
    lastAllocationResult: data.lastAllocationResult,
  };
}

export function makeJournalWriteChannel(data: {
  channelId: string;
  lastWrittenEntryId: string;
}): JournalWriteChannel {
  return {
    channelId: data.channelId as JournalWriteChannelId,
    lastWrittenEntryId: data.lastWrittenEntryId,
  };
}

export function makeBackorderFulfillment(data: {
  channelId: string;
  lastFulfilledBackorderQty: number;
}): BackorderFulfillment {
  return {
    channelId: data.channelId as BackorderFulfillmentId,
    lastFulfilledBackorderQty: data.lastFulfilledBackorderQty,
  };
}

export function makeReconciliationCheck(data: {
  channelId: string;
  lastComputedQty: number;
  lastCachedQty: number;
  lastMatch: boolean;
}): ReconciliationCheck {
  return {
    channelId: data.channelId as ReconciliationCheckId,
    lastComputedQty: data.lastComputedQty,
    lastCachedQty: data.lastCachedQty,
    lastMatch: data.lastMatch,
  };
}

export function makeOutboundShipment(data: {
  flowId: string;
  order: FulfillmentOrder;
  sku: SKU;
  requestedQty: number;
  allocatedQty: number;
  outcome: string;
}): OutboundShipment {
  return {
    flowId: data.flowId as OutboundShipmentId,
    order: data.order,
    sku: data.sku,
    requestedQty: data.requestedQty,
    allocatedQty: data.allocatedQty,
    outcome: data.outcome,
  };
}

export function makeInboundRestock(data: {
  flowId: string;
  restock: Restock;
  sku: SKU;
  receivedQty: number;
  fulfilledBackorderQty: number;
  outcome: string;
}): InboundRestock {
  return {
    flowId: data.flowId as InboundRestockId,
    restock: data.restock,
    sku: data.sku,
    receivedQty: data.receivedQty,
    fulfilledBackorderQty: data.fulfilledBackorderQty,
    outcome: data.outcome,
  };
}

export function makeNightlyReconciliation(data: {
  flowId: string;
  startAt: string;
  endAt: string;
  computedQty: number;
  cachedQty: number;
  outcome: string;
}): NightlyReconciliation {
  return {
    flowId: data.flowId as NightlyReconciliationId,
    startAt: data.startAt,
    endAt: data.endAt,
    computedQty: data.computedQty,
    cachedQty: data.cachedQty,
    outcome: data.outcome,
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


// ─── Runtime invariant validators ───

/** Runtime invariant check for OrderManager. Returns empty array when valid. */
export function validateOrderManager(instance: OrderManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.omId !== null))) {
    violations.push("[OrderManager] invariant violated: self.omId <> null");
  }
  if (!((instance.stockOnHand >= 0))) {
    violations.push("[OrderManager] invariant violated: self.stockOnHand >= 0.0");
  }
  if (!(Array.from(instance.pendingOrders).every((__x) => ((__x.status === "PENDING"))))) {
    violations.push("[OrderManager] invariant violated: self.pendingOrders->forAll(o | o.status = 'PENDING')");
  }
  if (!(Array.from(instance.allocatedOrders).every((__x) => ((__x.status === "ALLOCATED"))))) {
    violations.push("[OrderManager] invariant violated: self.allocatedOrders->forAll(o | o.status = 'ALLOCATED')");
  }
  if (!(Array.from(instance.rejectedOrders).every((__x) => ((__x.status === "REJECTED"))))) {
    violations.push("[OrderManager] invariant violated: self.rejectedOrders->forAll(o | o.status = 'REJECTED')");
  }
  if (!(Array.from(instance.pendingOrders).every((__x) => ((!((instance.allocatedOrders).has(__x)) && !((instance.rejectedOrders).has(__x))))))) {
    violations.push("[OrderManager] invariant violated: self.pendingOrders->forAll(o |\n      not self.allocatedOrders->includes(o) and\n      not self.rejectedOrders->includes(o))");
  }
  return violations;
}

/** Runtime invariant check for StockLedger. Returns empty array when valid. */
export function validateStockLedger(instance: StockLedger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.slId !== null))) {
    violations.push("[StockLedger] invariant violated: self.slId <> null");
  }
  if (!((instance.stockOnHand >= 0))) {
    violations.push("[StockLedger] invariant violated: self.stockOnHand >= 0.0");
  }
  if (!((instance.cachedStock >= 0))) {
    violations.push("[StockLedger] invariant violated: self.cachedStock >= 0.0");
  }
  if (!((instance.reconciledQty >= 0))) {
    violations.push("[StockLedger] invariant violated: self.reconciledQty >= 0.0");
  }
  if (!(Array.from(instance.trackedSkus).every((__x) => (Array.from(instance.currentStock).some((__x) => ((__x.sku === __x))))))) {
    violations.push("[StockLedger] invariant violated: self.trackedSkus->forAll(s | self.currentStock->exists(entry | entry.sku = s))");
  }
  return violations;
}

/** Runtime invariant check for MovementJournal. Returns empty array when valid. */
export function validateMovementJournal(instance: MovementJournal): readonly string[] {
  const violations: string[] = [];
  if (!((instance.mjId !== null))) {
    violations.push("[MovementJournal] invariant violated: self.mjId <> null");
  }
  if (!((instance.movementJournalSize >= 0))) {
    violations.push("[MovementJournal] invariant violated: self.movementJournalSize >= 0");
  }
  if (!((instance.movementJournalSize === (instance.entries).size))) {
    violations.push("[MovementJournal] invariant violated: self.movementJournalSize = self.entries->size()");
  }
  if (!((instance.cachedStock >= 0))) {
    violations.push("[MovementJournal] invariant violated: self.cachedStock >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for BackorderQueue. Returns empty array when valid. */
export function validateBackorderQueue(instance: BackorderQueue): readonly string[] {
  const violations: string[] = [];
  if (!((instance.bqId !== null))) {
    violations.push("[BackorderQueue] invariant violated: self.bqId <> null");
  }
  if (!(Array.from(instance.backorders).every((__x) => ((((__x.sku !== null) && (__x.qty > 0)) && (__x.createdAt !== null)))))) {
    violations.push("[BackorderQueue] invariant violated: self.backorders->forAll(bo | bo.sku <> null and bo.qty > 0.0 and bo.createdAt <> null)");
  }
  return violations;
}

/** Runtime invariant check for ReceivingDock. Returns empty array when valid. */
export function validateReceivingDock(instance: ReceivingDock): readonly string[] {
  const violations: string[] = [];
  if (!((instance.rdId !== null))) {
    violations.push("[ReceivingDock] invariant violated: self.rdId <> null");
  }
  if (!((instance.stockOnHand >= 0))) {
    violations.push("[ReceivingDock] invariant violated: self.stockOnHand >= 0.0");
  }
  if (!((instance.movementJournalSize >= 0))) {
    violations.push("[ReceivingDock] invariant violated: self.movementJournalSize >= 0");
  }
  if (!((instance.cachedStock >= 0))) {
    violations.push("[ReceivingDock] invariant violated: self.cachedStock >= 0.0");
  }
  if (!(Array.from(instance.inboundRecords).every((__x) => (((__x.receivedQty > 0) && (__x.inboundTimestamp !== null)))))) {
    violations.push("[ReceivingDock] invariant violated: self.inboundRecords->forAll(r | r.receivedQty > 0.0 and r.inboundTimestamp <> null)");
  }
  return violations;
}

/** Runtime invariant check for ReconciliationEngine. Returns empty array when valid. */
export function validateReconciliationEngine(instance: ReconciliationEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reId !== null))) {
    violations.push("[ReconciliationEngine] invariant violated: self.reId <> null");
  }
  if (!((instance.reconciledQty >= 0))) {
    violations.push("[ReconciliationEngine] invariant violated: self.reconciledQty >= 0.0");
  }
  if (!((instance.cachedStock >= 0))) {
    violations.push("[ReconciliationEngine] invariant violated: self.cachedStock >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for AllocationChannel. Returns empty array when valid. */
export function validateAllocationChannel(instance: AllocationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[AllocationChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for JournalWriteChannel. Returns empty array when valid. */
export function validateJournalWriteChannel(instance: JournalWriteChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[JournalWriteChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for BackorderFulfillment. Returns empty array when valid. */
export function validateBackorderFulfillment(instance: BackorderFulfillment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[BackorderFulfillment] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastFulfilledBackorderQty >= 0))) {
    violations.push("[BackorderFulfillment] invariant violated: self.lastFulfilledBackorderQty >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ReconciliationCheck. Returns empty array when valid. */
export function validateReconciliationCheck(instance: ReconciliationCheck): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ReconciliationCheck] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastComputedQty >= 0))) {
    violations.push("[ReconciliationCheck] invariant violated: self.lastComputedQty >= 0.0");
  }
  if (!((instance.lastCachedQty >= 0))) {
    violations.push("[ReconciliationCheck] invariant violated: self.lastCachedQty >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for OutboundShipment. Returns empty array when valid. */
export function validateOutboundShipment(instance: OutboundShipment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OutboundShipment] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[OutboundShipment] invariant violated: self.outcome <> null");
  }
  if (!((instance.requestedQty > 0))) {
    violations.push("[OutboundShipment] invariant violated: self.requestedQty > 0.0");
  }
  if (!((instance.allocatedQty >= 0))) {
    violations.push("[OutboundShipment] invariant violated: self.allocatedQty >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for InboundRestock. Returns empty array when valid. */
export function validateInboundRestock(instance: InboundRestock): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[InboundRestock] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[InboundRestock] invariant violated: self.outcome <> null");
  }
  if (!((instance.receivedQty > 0))) {
    violations.push("[InboundRestock] invariant violated: self.receivedQty > 0.0");
  }
  if (!((instance.fulfilledBackorderQty >= 0))) {
    violations.push("[InboundRestock] invariant violated: self.fulfilledBackorderQty >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for NightlyReconciliation. Returns empty array when valid. */
export function validateNightlyReconciliation(instance: NightlyReconciliation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NightlyReconciliation] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[NightlyReconciliation] invariant violated: self.outcome <> null");
  }
  if (!((instance.computedQty >= 0))) {
    violations.push("[NightlyReconciliation] invariant violated: self.computedQty >= 0.0");
  }
  if (!((instance.cachedQty >= 0))) {
    violations.push("[NightlyReconciliation] invariant violated: self.cachedQty >= 0.0");
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


// ─── Event handler wrappers ───

/** Impl signature for OrderManager.receiveOrder. User supplies this. */
export type OrderManagerReceiveOrderImpl = (self: OrderManager, order: FulfillmentOrder) => { self: OrderManager; modified: { pendingOrders: unknown } };

/** Contract-checking wrapper for OrderManager.receiveOrder. */
export function wrapOrderManagerReceiveOrder(impl: OrderManagerReceiveOrderImpl): (self: OrderManager, order: FulfillmentOrder) => OrderManager {
  return (self, order) => {
    const preViolations: string[] = [];
    if (!((order !== null))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: order <> null");
    }
    if (!((order.requestedQty > 0))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: order.requestedQty > 0.0");
    }
    if (!((order.sku !== null))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: order.sku <> null");
    }
    if (!(!((self.pendingOrders).has(order)))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: not self.pendingOrders->includes(order)");
    }
    if (!(!((self.allocatedOrders).has(order)))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: not self.allocatedOrders->includes(order)");
    }
    if (!(!((self.rejectedOrders).has(order)))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: not self.rejectedOrders->includes(order)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, order);
      const postViolations: string[] = [];
      if (!((__result.self.pendingOrders).has(order))) {
        postViolations.push("[OrderManager.receiveOrder] post violated: self.pendingOrders->includes(order)");
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

/** Impl signature for OrderManager.receiveOrder (async). User supplies this. */
export type OrderManagerReceiveOrderAsyncImpl = (self: OrderManager, order: FulfillmentOrder) => Promise<{ self: OrderManager; modified: { pendingOrders: unknown } }>;

/** Contract-checking wrapper for OrderManager.receiveOrder (async). */
export function wrapOrderManagerReceiveOrderAsync(impl: OrderManagerReceiveOrderAsyncImpl): (self: OrderManager, order: FulfillmentOrder) => Promise<OrderManager> {
  return async (self, order) => {
    const preViolations: string[] = [];
    if (!((order !== null))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: order <> null");
    }
    if (!((order.requestedQty > 0))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: order.requestedQty > 0.0");
    }
    if (!((order.sku !== null))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: order.sku <> null");
    }
    if (!(!((self.pendingOrders).has(order)))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: not self.pendingOrders->includes(order)");
    }
    if (!(!((self.allocatedOrders).has(order)))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: not self.allocatedOrders->includes(order)");
    }
    if (!(!((self.rejectedOrders).has(order)))) {
      preViolations.push("[OrderManager.receiveOrder] pre violated: not self.rejectedOrders->includes(order)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, order);
      const postViolations: string[] = [];
      if (!((__result.self.pendingOrders).has(order))) {
        postViolations.push("[OrderManager.receiveOrder] post violated: self.pendingOrders->includes(order)");
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

/** Impl signature for OrderManager.tryAllocate. User supplies this. */
export type OrderManagerTryAllocateImpl = (self: OrderManager, sku: SKU, requestedQty: number) => { self: OrderManager; modified: { stockOnHand: unknown } };

/** Contract-checking wrapper for OrderManager.tryAllocate. */
export function wrapOrderManagerTryAllocate(impl: OrderManagerTryAllocateImpl): (self: OrderManager, sku: SKU, requestedQty: number) => OrderManager {
  return (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[OrderManager.tryAllocate] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[OrderManager.tryAllocate] pre violated: requestedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, requestedQty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - requestedQty)))) {
        postViolations.push("[OrderManager.tryAllocate] post violated: self.stockOnHand = self.stockOnHand@pre - requestedQty");
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

/** Impl signature for OrderManager.tryAllocate (async). User supplies this. */
export type OrderManagerTryAllocateAsyncImpl = (self: OrderManager, sku: SKU, requestedQty: number) => Promise<{ self: OrderManager; modified: { stockOnHand: unknown } }>;

/** Contract-checking wrapper for OrderManager.tryAllocate (async). */
export function wrapOrderManagerTryAllocateAsync(impl: OrderManagerTryAllocateAsyncImpl): (self: OrderManager, sku: SKU, requestedQty: number) => Promise<OrderManager> {
  return async (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[OrderManager.tryAllocate] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[OrderManager.tryAllocate] pre violated: requestedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, requestedQty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - requestedQty)))) {
        postViolations.push("[OrderManager.tryAllocate] post violated: self.stockOnHand = self.stockOnHand@pre - requestedQty");
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

/** Impl signature for OrderManager.markAllocated. User supplies this. */
export type OrderManagerMarkAllocatedImpl = (self: OrderManager, order: FulfillmentOrder) => { self: OrderManager; modified: { pendingOrders: unknown; allocatedOrders: unknown } };

/** Contract-checking wrapper for OrderManager.markAllocated. */
export function wrapOrderManagerMarkAllocated(impl: OrderManagerMarkAllocatedImpl): (self: OrderManager, order: FulfillmentOrder) => OrderManager {
  return (self, order) => {
    const preViolations: string[] = [];
    if (!((order !== null))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: order <> null");
    }
    if (!((self.pendingOrders).has(order))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: self.pendingOrders->includes(order)");
    }
    if (!(!((self.allocatedOrders).has(order)))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: not self.allocatedOrders->includes(order)");
    }
    if (!(!((self.rejectedOrders).has(order)))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: not self.rejectedOrders->includes(order)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, order);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingOrders).has(order)))) {
        postViolations.push("[OrderManager.markAllocated] post violated: not self.pendingOrders->includes(order)");
      }
      if (!((__result.self.allocatedOrders).has(order))) {
        postViolations.push("[OrderManager.markAllocated] post violated: self.allocatedOrders->includes(order)");
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

/** Impl signature for OrderManager.markAllocated (async). User supplies this. */
export type OrderManagerMarkAllocatedAsyncImpl = (self: OrderManager, order: FulfillmentOrder) => Promise<{ self: OrderManager; modified: { pendingOrders: unknown; allocatedOrders: unknown } }>;

/** Contract-checking wrapper for OrderManager.markAllocated (async). */
export function wrapOrderManagerMarkAllocatedAsync(impl: OrderManagerMarkAllocatedAsyncImpl): (self: OrderManager, order: FulfillmentOrder) => Promise<OrderManager> {
  return async (self, order) => {
    const preViolations: string[] = [];
    if (!((order !== null))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: order <> null");
    }
    if (!((self.pendingOrders).has(order))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: self.pendingOrders->includes(order)");
    }
    if (!(!((self.allocatedOrders).has(order)))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: not self.allocatedOrders->includes(order)");
    }
    if (!(!((self.rejectedOrders).has(order)))) {
      preViolations.push("[OrderManager.markAllocated] pre violated: not self.rejectedOrders->includes(order)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, order);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingOrders).has(order)))) {
        postViolations.push("[OrderManager.markAllocated] post violated: not self.pendingOrders->includes(order)");
      }
      if (!((__result.self.allocatedOrders).has(order))) {
        postViolations.push("[OrderManager.markAllocated] post violated: self.allocatedOrders->includes(order)");
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

/** Impl signature for OrderManager.markRejected. User supplies this. */
export type OrderManagerMarkRejectedImpl = (self: OrderManager, order: FulfillmentOrder) => { self: OrderManager; modified: { pendingOrders: unknown; rejectedOrders: unknown } };

/** Contract-checking wrapper for OrderManager.markRejected. */
export function wrapOrderManagerMarkRejected(impl: OrderManagerMarkRejectedImpl): (self: OrderManager, order: FulfillmentOrder) => OrderManager {
  return (self, order) => {
    const preViolations: string[] = [];
    if (!((order !== null))) {
      preViolations.push("[OrderManager.markRejected] pre violated: order <> null");
    }
    if (!((self.pendingOrders).has(order))) {
      preViolations.push("[OrderManager.markRejected] pre violated: self.pendingOrders->includes(order)");
    }
    if (!(!((self.allocatedOrders).has(order)))) {
      preViolations.push("[OrderManager.markRejected] pre violated: not self.allocatedOrders->includes(order)");
    }
    if (!(!((self.rejectedOrders).has(order)))) {
      preViolations.push("[OrderManager.markRejected] pre violated: not self.rejectedOrders->includes(order)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, order);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingOrders).has(order)))) {
        postViolations.push("[OrderManager.markRejected] post violated: not self.pendingOrders->includes(order)");
      }
      if (!((__result.self.rejectedOrders).has(order))) {
        postViolations.push("[OrderManager.markRejected] post violated: self.rejectedOrders->includes(order)");
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

/** Impl signature for OrderManager.markRejected (async). User supplies this. */
export type OrderManagerMarkRejectedAsyncImpl = (self: OrderManager, order: FulfillmentOrder) => Promise<{ self: OrderManager; modified: { pendingOrders: unknown; rejectedOrders: unknown } }>;

/** Contract-checking wrapper for OrderManager.markRejected (async). */
export function wrapOrderManagerMarkRejectedAsync(impl: OrderManagerMarkRejectedAsyncImpl): (self: OrderManager, order: FulfillmentOrder) => Promise<OrderManager> {
  return async (self, order) => {
    const preViolations: string[] = [];
    if (!((order !== null))) {
      preViolations.push("[OrderManager.markRejected] pre violated: order <> null");
    }
    if (!((self.pendingOrders).has(order))) {
      preViolations.push("[OrderManager.markRejected] pre violated: self.pendingOrders->includes(order)");
    }
    if (!(!((self.allocatedOrders).has(order)))) {
      preViolations.push("[OrderManager.markRejected] pre violated: not self.allocatedOrders->includes(order)");
    }
    if (!(!((self.rejectedOrders).has(order)))) {
      preViolations.push("[OrderManager.markRejected] pre violated: not self.rejectedOrders->includes(order)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, order);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingOrders).has(order)))) {
        postViolations.push("[OrderManager.markRejected] post violated: not self.pendingOrders->includes(order)");
      }
      if (!((__result.self.rejectedOrders).has(order))) {
        postViolations.push("[OrderManager.markRejected] post violated: self.rejectedOrders->includes(order)");
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

/** Impl signature for StockLedger.deductStock. User supplies this. */
export type StockLedgerDeductStockImpl = (self: StockLedger, sku: SKU, qty: number) => { self: StockLedger; modified: { stockOnHand: unknown; cachedStock: unknown } };

/** Contract-checking wrapper for StockLedger.deductStock. */
export function wrapStockLedgerDeductStock(impl: StockLedgerDeductStockImpl): (self: StockLedger, sku: SKU, qty: number) => StockLedger {
  return (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[StockLedger.deductStock] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[StockLedger.deductStock] pre violated: qty > 0.0");
    }
    if (!((qty <= self.stockOnHand))) {
      preViolations.push("[StockLedger.deductStock] pre violated: qty <= self.stockOnHand");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - qty)))) {
        postViolations.push("[StockLedger.deductStock] post violated: self.stockOnHand = self.stockOnHand@pre - qty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[StockLedger.deductStock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.stockOnHand >= 0))) {
        postViolations.push("[StockLedger.deductStock] post violated: self.stockOnHand >= 0.0");
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

/** Impl signature for StockLedger.deductStock (async). User supplies this. */
export type StockLedgerDeductStockAsyncImpl = (self: StockLedger, sku: SKU, qty: number) => Promise<{ self: StockLedger; modified: { stockOnHand: unknown; cachedStock: unknown } }>;

/** Contract-checking wrapper for StockLedger.deductStock (async). */
export function wrapStockLedgerDeductStockAsync(impl: StockLedgerDeductStockAsyncImpl): (self: StockLedger, sku: SKU, qty: number) => Promise<StockLedger> {
  return async (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[StockLedger.deductStock] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[StockLedger.deductStock] pre violated: qty > 0.0");
    }
    if (!((qty <= self.stockOnHand))) {
      preViolations.push("[StockLedger.deductStock] pre violated: qty <= self.stockOnHand");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - qty)))) {
        postViolations.push("[StockLedger.deductStock] post violated: self.stockOnHand = self.stockOnHand@pre - qty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[StockLedger.deductStock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.stockOnHand >= 0))) {
        postViolations.push("[StockLedger.deductStock] post violated: self.stockOnHand >= 0.0");
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

/** Impl signature for StockLedger.addStock. User supplies this. */
export type StockLedgerAddStockImpl = (self: StockLedger, sku: SKU, qty: number) => { self: StockLedger; modified: { stockOnHand: unknown; cachedStock: unknown } };

/** Contract-checking wrapper for StockLedger.addStock. */
export function wrapStockLedgerAddStock(impl: StockLedgerAddStockImpl): (self: StockLedger, sku: SKU, qty: number) => StockLedger {
  return (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[StockLedger.addStock] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[StockLedger.addStock] pre violated: qty > 0.0");
    }
    if (!(((self.stockOnHand + qty) >= 0))) {
      preViolations.push("[StockLedger.addStock] pre violated: self.stockOnHand + qty >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] + qty)))) {
        postViolations.push("[StockLedger.addStock] post violated: self.stockOnHand = self.stockOnHand@pre + qty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[StockLedger.addStock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.stockOnHand >= 0))) {
        postViolations.push("[StockLedger.addStock] post violated: self.stockOnHand >= 0.0");
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

/** Impl signature for StockLedger.addStock (async). User supplies this. */
export type StockLedgerAddStockAsyncImpl = (self: StockLedger, sku: SKU, qty: number) => Promise<{ self: StockLedger; modified: { stockOnHand: unknown; cachedStock: unknown } }>;

/** Contract-checking wrapper for StockLedger.addStock (async). */
export function wrapStockLedgerAddStockAsync(impl: StockLedgerAddStockAsyncImpl): (self: StockLedger, sku: SKU, qty: number) => Promise<StockLedger> {
  return async (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[StockLedger.addStock] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[StockLedger.addStock] pre violated: qty > 0.0");
    }
    if (!(((self.stockOnHand + qty) >= 0))) {
      preViolations.push("[StockLedger.addStock] pre violated: self.stockOnHand + qty >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] + qty)))) {
        postViolations.push("[StockLedger.addStock] post violated: self.stockOnHand = self.stockOnHand@pre + qty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[StockLedger.addStock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.stockOnHand >= 0))) {
        postViolations.push("[StockLedger.addStock] post violated: self.stockOnHand >= 0.0");
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

/** Impl signature for StockLedger.fulfillBackorderStock. User supplies this. */
export type StockLedgerFulfillBackorderStockImpl = (self: StockLedger, sku: SKU, qty: number) => { self: StockLedger; modified: { stockOnHand: unknown; cachedStock: unknown } };

/** Contract-checking wrapper for StockLedger.fulfillBackorderStock. */
export function wrapStockLedgerFulfillBackorderStock(impl: StockLedgerFulfillBackorderStockImpl): (self: StockLedger, sku: SKU, qty: number) => StockLedger {
  return (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[StockLedger.fulfillBackorderStock] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[StockLedger.fulfillBackorderStock] pre violated: qty > 0.0");
    }
    if (!((qty <= self.stockOnHand))) {
      preViolations.push("[StockLedger.fulfillBackorderStock] pre violated: qty <= self.stockOnHand");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - qty)))) {
        postViolations.push("[StockLedger.fulfillBackorderStock] post violated: self.stockOnHand = self.stockOnHand@pre - qty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[StockLedger.fulfillBackorderStock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.stockOnHand >= 0))) {
        postViolations.push("[StockLedger.fulfillBackorderStock] post violated: self.stockOnHand >= 0.0");
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

/** Impl signature for StockLedger.fulfillBackorderStock (async). User supplies this. */
export type StockLedgerFulfillBackorderStockAsyncImpl = (self: StockLedger, sku: SKU, qty: number) => Promise<{ self: StockLedger; modified: { stockOnHand: unknown; cachedStock: unknown } }>;

/** Contract-checking wrapper for StockLedger.fulfillBackorderStock (async). */
export function wrapStockLedgerFulfillBackorderStockAsync(impl: StockLedgerFulfillBackorderStockAsyncImpl): (self: StockLedger, sku: SKU, qty: number) => Promise<StockLedger> {
  return async (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[StockLedger.fulfillBackorderStock] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[StockLedger.fulfillBackorderStock] pre violated: qty > 0.0");
    }
    if (!((qty <= self.stockOnHand))) {
      preViolations.push("[StockLedger.fulfillBackorderStock] pre violated: qty <= self.stockOnHand");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.stockOnHand": self.stockOnHand,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] - qty)))) {
        postViolations.push("[StockLedger.fulfillBackorderStock] post violated: self.stockOnHand = self.stockOnHand@pre - qty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[StockLedger.fulfillBackorderStock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.stockOnHand >= 0))) {
        postViolations.push("[StockLedger.fulfillBackorderStock] post violated: self.stockOnHand >= 0.0");
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

/** Impl signature for MovementJournal.writeEntry. User supplies this. */
export type MovementJournalWriteEntryImpl = (self: MovementJournal, sku: SKU, delta: number, reason: string) => { self: MovementJournal; modified: { movementJournalSize: unknown; entries: unknown } };

/** Contract-checking wrapper for MovementJournal.writeEntry. */
export function wrapMovementJournalWriteEntry(impl: MovementJournalWriteEntryImpl): (self: MovementJournal, sku: SKU, delta: number, reason: string) => MovementJournal {
  return (self, sku, delta, reason) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[MovementJournal.writeEntry] pre violated: sku <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[MovementJournal.writeEntry] pre violated: reason <> null");
    }
    if (!((delta !== 0))) {
      preViolations.push("[MovementJournal.writeEntry] pre violated: delta <> 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
      "self.entries": self.entries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, delta, reason);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[MovementJournal.writeEntry] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
      }
      if (!(((__result.self.entries).size === ((__pre["self.entries"]).size + 1)))) {
        postViolations.push("[MovementJournal.writeEntry] post violated: self.entries->size() = self.entries@pre->size() + 1");
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

/** Impl signature for MovementJournal.writeEntry (async). User supplies this. */
export type MovementJournalWriteEntryAsyncImpl = (self: MovementJournal, sku: SKU, delta: number, reason: string) => Promise<{ self: MovementJournal; modified: { movementJournalSize: unknown; entries: unknown } }>;

/** Contract-checking wrapper for MovementJournal.writeEntry (async). */
export function wrapMovementJournalWriteEntryAsync(impl: MovementJournalWriteEntryAsyncImpl): (self: MovementJournal, sku: SKU, delta: number, reason: string) => Promise<MovementJournal> {
  return async (self, sku, delta, reason) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[MovementJournal.writeEntry] pre violated: sku <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[MovementJournal.writeEntry] pre violated: reason <> null");
    }
    if (!((delta !== 0))) {
      preViolations.push("[MovementJournal.writeEntry] pre violated: delta <> 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
      "self.entries": self.entries,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, delta, reason);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[MovementJournal.writeEntry] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
      }
      if (!(((__result.self.entries).size === ((__pre["self.entries"]).size + 1)))) {
        postViolations.push("[MovementJournal.writeEntry] post violated: self.entries->size() = self.entries@pre->size() + 1");
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

/** Impl signature for MovementJournal.flushEntries. User supplies this. */
export type MovementJournalFlushEntriesImpl = (self: MovementJournal, count: number) => { self: MovementJournal; modified: { movementJournalSize: unknown } };

/** Contract-checking wrapper for MovementJournal.flushEntries. */
export function wrapMovementJournalFlushEntries(impl: MovementJournalFlushEntriesImpl): (self: MovementJournal, count: number) => MovementJournal {
  return (self, count) => {
    const preViolations: string[] = [];
    if (!((count > 0))) {
      preViolations.push("[MovementJournal.flushEntries] pre violated: count > 0");
    }
    if (!((count <= self.movementJournalSize))) {
      preViolations.push("[MovementJournal.flushEntries] pre violated: count <= self.movementJournalSize");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, count);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] - count)))) {
        postViolations.push("[MovementJournal.flushEntries] post violated: self.movementJournalSize = self.movementJournalSize@pre - count");
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

/** Impl signature for MovementJournal.flushEntries (async). User supplies this. */
export type MovementJournalFlushEntriesAsyncImpl = (self: MovementJournal, count: number) => Promise<{ self: MovementJournal; modified: { movementJournalSize: unknown } }>;

/** Contract-checking wrapper for MovementJournal.flushEntries (async). */
export function wrapMovementJournalFlushEntriesAsync(impl: MovementJournalFlushEntriesAsyncImpl): (self: MovementJournal, count: number) => Promise<MovementJournal> {
  return async (self, count) => {
    const preViolations: string[] = [];
    if (!((count > 0))) {
      preViolations.push("[MovementJournal.flushEntries] pre violated: count > 0");
    }
    if (!((count <= self.movementJournalSize))) {
      preViolations.push("[MovementJournal.flushEntries] pre violated: count <= self.movementJournalSize");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, count);
      const postViolations: string[] = [];
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] - count)))) {
        postViolations.push("[MovementJournal.flushEntries] post violated: self.movementJournalSize = self.movementJournalSize@pre - count");
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

/** Impl signature for BackorderQueue.addBackorder. User supplies this. */
export type BackorderQueueAddBackorderImpl = (self: BackorderQueue, sku: SKU, qty: number) => { self: BackorderQueue; modified: { backorders: unknown } };

/** Contract-checking wrapper for BackorderQueue.addBackorder. */
export function wrapBackorderQueueAddBackorder(impl: BackorderQueueAddBackorderImpl): (self: BackorderQueue, sku: SKU, qty: number) => BackorderQueue {
  return (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: qty > 0.0");
    }
    if (!(!(Array.from(self.backorders).some((__x) => (((__x.sku === sku) && (__x.qty === qty))))))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: not self.backorders->exists(bo | bo.sku = sku and bo.qty = qty)");
    }
    if (!((self.isBackorderable === sku.isBackorderable))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: self.isBackorderable = sku.isBackorderable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.backorders": self.backorders,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!(((__result.self.backorders).size === ((__pre["self.backorders"]).size + 1)))) {
        postViolations.push("[BackorderQueue.addBackorder] post violated: self.backorders->size() = self.backorders@pre->size() + 1");
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

/** Impl signature for BackorderQueue.addBackorder (async). User supplies this. */
export type BackorderQueueAddBackorderAsyncImpl = (self: BackorderQueue, sku: SKU, qty: number) => Promise<{ self: BackorderQueue; modified: { backorders: unknown } }>;

/** Contract-checking wrapper for BackorderQueue.addBackorder (async). */
export function wrapBackorderQueueAddBackorderAsync(impl: BackorderQueueAddBackorderAsyncImpl): (self: BackorderQueue, sku: SKU, qty: number) => Promise<BackorderQueue> {
  return async (self, sku, qty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: sku <> null");
    }
    if (!((qty > 0))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: qty > 0.0");
    }
    if (!(!(Array.from(self.backorders).some((__x) => (((__x.sku === sku) && (__x.qty === qty))))))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: not self.backorders->exists(bo | bo.sku = sku and bo.qty = qty)");
    }
    if (!((self.isBackorderable === sku.isBackorderable))) {
      preViolations.push("[BackorderQueue.addBackorder] pre violated: self.isBackorderable = sku.isBackorderable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.backorders": self.backorders,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, qty);
      const postViolations: string[] = [];
      if (!(((__result.self.backorders).size === ((__pre["self.backorders"]).size + 1)))) {
        postViolations.push("[BackorderQueue.addBackorder] post violated: self.backorders->size() = self.backorders@pre->size() + 1");
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

/** Impl signature for BackorderQueue.removeFulfilled. User supplies this. */
export type BackorderQueueRemoveFulfilledImpl = (self: BackorderQueue, bo: Backorder) => { self: BackorderQueue; modified: { backorders: unknown } };

/** Contract-checking wrapper for BackorderQueue.removeFulfilled. */
export function wrapBackorderQueueRemoveFulfilled(impl: BackorderQueueRemoveFulfilledImpl): (self: BackorderQueue, bo: Backorder) => BackorderQueue {
  return (self, bo) => {
    const preViolations: string[] = [];
    if (!((bo !== null))) {
      preViolations.push("[BackorderQueue.removeFulfilled] pre violated: bo <> null");
    }
    if (!((self.backorders).has(bo))) {
      preViolations.push("[BackorderQueue.removeFulfilled] pre violated: self.backorders->includes(bo)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, bo);
      const postViolations: string[] = [];
      if (!(!((__result.self.backorders).has(bo)))) {
        postViolations.push("[BackorderQueue.removeFulfilled] post violated: not self.backorders->includes(bo)");
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

/** Impl signature for BackorderQueue.removeFulfilled (async). User supplies this. */
export type BackorderQueueRemoveFulfilledAsyncImpl = (self: BackorderQueue, bo: Backorder) => Promise<{ self: BackorderQueue; modified: { backorders: unknown } }>;

/** Contract-checking wrapper for BackorderQueue.removeFulfilled (async). */
export function wrapBackorderQueueRemoveFulfilledAsync(impl: BackorderQueueRemoveFulfilledAsyncImpl): (self: BackorderQueue, bo: Backorder) => Promise<BackorderQueue> {
  return async (self, bo) => {
    const preViolations: string[] = [];
    if (!((bo !== null))) {
      preViolations.push("[BackorderQueue.removeFulfilled] pre violated: bo <> null");
    }
    if (!((self.backorders).has(bo))) {
      preViolations.push("[BackorderQueue.removeFulfilled] pre violated: self.backorders->includes(bo)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, bo);
      const postViolations: string[] = [];
      if (!(!((__result.self.backorders).has(bo)))) {
        postViolations.push("[BackorderQueue.removeFulfilled] post violated: not self.backorders->includes(bo)");
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

/** Impl signature for ReceivingDock.processRestock. User supplies this. */
export type ReceivingDockProcessRestockImpl = (self: ReceivingDock, sku: SKU, receivedQty: number) => { self: ReceivingDock; modified: { inboundRecords: unknown; stockOnHand: unknown; cachedStock: unknown; movementJournalSize: unknown } };

/** Contract-checking wrapper for ReceivingDock.processRestock. */
export function wrapReceivingDockProcessRestock(impl: ReceivingDockProcessRestockImpl): (self: ReceivingDock, sku: SKU, receivedQty: number) => ReceivingDock {
  return (self, sku, receivedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[ReceivingDock.processRestock] pre violated: sku <> null");
    }
    if (!((receivedQty > 0))) {
      preViolations.push("[ReceivingDock.processRestock] pre violated: receivedQty > 0.0");
    }
    if (!(((self.stockOnHand + receivedQty) >= 0))) {
      preViolations.push("[ReceivingDock.processRestock] pre violated: self.stockOnHand + receivedQty >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.inboundRecords": self.inboundRecords,
      "self.stockOnHand": self.stockOnHand,
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, receivedQty);
      const postViolations: string[] = [];
      if (!(((__result.self.inboundRecords).size === ((__pre["self.inboundRecords"]).size + 1)))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.inboundRecords->size() = self.inboundRecords@pre->size() + 1");
      }
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] + receivedQty)))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.stockOnHand = self.stockOnHand@pre + receivedQty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
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

/** Impl signature for ReceivingDock.processRestock (async). User supplies this. */
export type ReceivingDockProcessRestockAsyncImpl = (self: ReceivingDock, sku: SKU, receivedQty: number) => Promise<{ self: ReceivingDock; modified: { inboundRecords: unknown; stockOnHand: unknown; cachedStock: unknown; movementJournalSize: unknown } }>;

/** Contract-checking wrapper for ReceivingDock.processRestock (async). */
export function wrapReceivingDockProcessRestockAsync(impl: ReceivingDockProcessRestockAsyncImpl): (self: ReceivingDock, sku: SKU, receivedQty: number) => Promise<ReceivingDock> {
  return async (self, sku, receivedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[ReceivingDock.processRestock] pre violated: sku <> null");
    }
    if (!((receivedQty > 0))) {
      preViolations.push("[ReceivingDock.processRestock] pre violated: receivedQty > 0.0");
    }
    if (!(((self.stockOnHand + receivedQty) >= 0))) {
      preViolations.push("[ReceivingDock.processRestock] pre violated: self.stockOnHand + receivedQty >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.inboundRecords": self.inboundRecords,
      "self.stockOnHand": self.stockOnHand,
      "self.movementJournalSize": self.movementJournalSize,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, receivedQty);
      const postViolations: string[] = [];
      if (!(((__result.self.inboundRecords).size === ((__pre["self.inboundRecords"]).size + 1)))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.inboundRecords->size() = self.inboundRecords@pre->size() + 1");
      }
      if (!((__result.self.stockOnHand === (__pre["self.stockOnHand"] + receivedQty)))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.stockOnHand = self.stockOnHand@pre + receivedQty");
      }
      if (!((__result.self.cachedStock === __result.self.stockOnHand))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.cachedStock = self.stockOnHand");
      }
      if (!((__result.self.movementJournalSize === (__pre["self.movementJournalSize"] + 1)))) {
        postViolations.push("[ReceivingDock.processRestock] post violated: self.movementJournalSize = self.movementJournalSize@pre + 1");
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

/** Impl signature for ReconciliationEngine.runReconciliation. User supplies this. */
export type ReconciliationEngineRunReconciliationImpl = (self: ReconciliationEngine, computedStock: number, cachedValue: number) => { self: ReconciliationEngine; modified: { reconciledQty: unknown; cachedStock: unknown; lastReconciliationResult: unknown } };

/** Contract-checking wrapper for ReconciliationEngine.runReconciliation. */
export function wrapReconciliationEngineRunReconciliation(impl: ReconciliationEngineRunReconciliationImpl): (self: ReconciliationEngine, computedStock: number, cachedValue: number) => ReconciliationEngine {
  return (self, computedStock, cachedValue) => {
    const preViolations: string[] = [];
    if (!((computedStock >= 0))) {
      preViolations.push("[ReconciliationEngine.runReconciliation] pre violated: computedStock >= 0.0");
    }
    if (!((cachedValue >= 0))) {
      preViolations.push("[ReconciliationEngine.runReconciliation] pre violated: cachedValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, computedStock, cachedValue);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === computedStock))) {
        postViolations.push("[ReconciliationEngine.runReconciliation] post violated: self.reconciledQty = computedStock");
      }
      if (!((__result.self.cachedStock === cachedValue))) {
        postViolations.push("[ReconciliationEngine.runReconciliation] post violated: self.cachedStock = cachedValue");
      }
      if (!((__result.self.lastReconciliationResult === (computedStock === cachedValue)))) {
        postViolations.push("[ReconciliationEngine.runReconciliation] post violated: self.lastReconciliationResult = (computedStock = cachedValue)");
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

/** Impl signature for ReconciliationEngine.runReconciliation (async). User supplies this. */
export type ReconciliationEngineRunReconciliationAsyncImpl = (self: ReconciliationEngine, computedStock: number, cachedValue: number) => Promise<{ self: ReconciliationEngine; modified: { reconciledQty: unknown; cachedStock: unknown; lastReconciliationResult: unknown } }>;

/** Contract-checking wrapper for ReconciliationEngine.runReconciliation (async). */
export function wrapReconciliationEngineRunReconciliationAsync(impl: ReconciliationEngineRunReconciliationAsyncImpl): (self: ReconciliationEngine, computedStock: number, cachedValue: number) => Promise<ReconciliationEngine> {
  return async (self, computedStock, cachedValue) => {
    const preViolations: string[] = [];
    if (!((computedStock >= 0))) {
      preViolations.push("[ReconciliationEngine.runReconciliation] pre violated: computedStock >= 0.0");
    }
    if (!((cachedValue >= 0))) {
      preViolations.push("[ReconciliationEngine.runReconciliation] pre violated: cachedValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, computedStock, cachedValue);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === computedStock))) {
        postViolations.push("[ReconciliationEngine.runReconciliation] post violated: self.reconciledQty = computedStock");
      }
      if (!((__result.self.cachedStock === cachedValue))) {
        postViolations.push("[ReconciliationEngine.runReconciliation] post violated: self.cachedStock = cachedValue");
      }
      if (!((__result.self.lastReconciliationResult === (computedStock === cachedValue)))) {
        postViolations.push("[ReconciliationEngine.runReconciliation] post violated: self.lastReconciliationResult = (computedStock = cachedValue)");
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

/** Impl signature for ReconciliationEngine.forceReconciliation. User supplies this. */
export type ReconciliationEngineForceReconciliationImpl = (self: ReconciliationEngine, computedStock: number, cachedValue: number) => { self: ReconciliationEngine; modified: { reconciledQty: unknown; cachedStock: unknown; lastReconciliationResult: unknown } };

/** Contract-checking wrapper for ReconciliationEngine.forceReconciliation. */
export function wrapReconciliationEngineForceReconciliation(impl: ReconciliationEngineForceReconciliationImpl): (self: ReconciliationEngine, computedStock: number, cachedValue: number) => ReconciliationEngine {
  return (self, computedStock, cachedValue) => {
    const preViolations: string[] = [];
    if (!((computedStock >= 0))) {
      preViolations.push("[ReconciliationEngine.forceReconciliation] pre violated: computedStock >= 0.0");
    }
    if (!((cachedValue >= 0))) {
      preViolations.push("[ReconciliationEngine.forceReconciliation] pre violated: cachedValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, computedStock, cachedValue);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === computedStock))) {
        postViolations.push("[ReconciliationEngine.forceReconciliation] post violated: self.reconciledQty = computedStock");
      }
      if (!((__result.self.cachedStock === cachedValue))) {
        postViolations.push("[ReconciliationEngine.forceReconciliation] post violated: self.cachedStock = cachedValue");
      }
      if (!((__result.self.lastReconciliationResult === (computedStock === cachedValue)))) {
        postViolations.push("[ReconciliationEngine.forceReconciliation] post violated: self.lastReconciliationResult = (computedStock = cachedValue)");
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

/** Impl signature for ReconciliationEngine.forceReconciliation (async). User supplies this. */
export type ReconciliationEngineForceReconciliationAsyncImpl = (self: ReconciliationEngine, computedStock: number, cachedValue: number) => Promise<{ self: ReconciliationEngine; modified: { reconciledQty: unknown; cachedStock: unknown; lastReconciliationResult: unknown } }>;

/** Contract-checking wrapper for ReconciliationEngine.forceReconciliation (async). */
export function wrapReconciliationEngineForceReconciliationAsync(impl: ReconciliationEngineForceReconciliationAsyncImpl): (self: ReconciliationEngine, computedStock: number, cachedValue: number) => Promise<ReconciliationEngine> {
  return async (self, computedStock, cachedValue) => {
    const preViolations: string[] = [];
    if (!((computedStock >= 0))) {
      preViolations.push("[ReconciliationEngine.forceReconciliation] pre violated: computedStock >= 0.0");
    }
    if (!((cachedValue >= 0))) {
      preViolations.push("[ReconciliationEngine.forceReconciliation] pre violated: cachedValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, computedStock, cachedValue);
      const postViolations: string[] = [];
      if (!((__result.self.reconciledQty === computedStock))) {
        postViolations.push("[ReconciliationEngine.forceReconciliation] post violated: self.reconciledQty = computedStock");
      }
      if (!((__result.self.cachedStock === cachedValue))) {
        postViolations.push("[ReconciliationEngine.forceReconciliation] post violated: self.cachedStock = cachedValue");
      }
      if (!((__result.self.lastReconciliationResult === (computedStock === cachedValue)))) {
        postViolations.push("[ReconciliationEngine.forceReconciliation] post violated: self.lastReconciliationResult = (computedStock = cachedValue)");
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

/** Impl signature for AllocationChannel.allocate. User supplies this. */
export type AllocationChannelAllocateImpl = (self: AllocationChannel, sku: SKU, requestedQty: number) => { self: AllocationChannel; modified: { lastAllocationRequest: unknown; lastAllocationResult: unknown } };

/** Contract-checking wrapper for AllocationChannel.allocate. */
export function wrapAllocationChannelAllocate(impl: AllocationChannelAllocateImpl): (self: AllocationChannel, sku: SKU, requestedQty: number) => AllocationChannel {
  return (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[AllocationChannel.allocate] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[AllocationChannel.allocate] pre violated: requestedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, requestedQty);
      const postViolations: string[] = [];
      if (!((__result.self.lastAllocationRequest === sku.skuId))) {
        postViolations.push("[AllocationChannel.allocate] post violated: self.lastAllocationRequest = sku.skuId");
      }
      if (!((__result.self.lastAllocationResult === true))) {
        postViolations.push("[AllocationChannel.allocate] post violated: self.lastAllocationResult = true");
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

/** Impl signature for AllocationChannel.allocate (async). User supplies this. */
export type AllocationChannelAllocateAsyncImpl = (self: AllocationChannel, sku: SKU, requestedQty: number) => Promise<{ self: AllocationChannel; modified: { lastAllocationRequest: unknown; lastAllocationResult: unknown } }>;

/** Contract-checking wrapper for AllocationChannel.allocate (async). */
export function wrapAllocationChannelAllocateAsync(impl: AllocationChannelAllocateAsyncImpl): (self: AllocationChannel, sku: SKU, requestedQty: number) => Promise<AllocationChannel> {
  return async (self, sku, requestedQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[AllocationChannel.allocate] pre violated: sku <> null");
    }
    if (!((requestedQty > 0))) {
      preViolations.push("[AllocationChannel.allocate] pre violated: requestedQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, requestedQty);
      const postViolations: string[] = [];
      if (!((__result.self.lastAllocationRequest === sku.skuId))) {
        postViolations.push("[AllocationChannel.allocate] post violated: self.lastAllocationRequest = sku.skuId");
      }
      if (!((__result.self.lastAllocationResult === true))) {
        postViolations.push("[AllocationChannel.allocate] post violated: self.lastAllocationResult = true");
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

/** Impl signature for JournalWriteChannel.writeJournalBeforeCache. User supplies this. */
export type JournalWriteChannelWriteJournalBeforeCacheImpl = (self: JournalWriteChannel, sku: SKU, delta: number, reason: string) => { self: JournalWriteChannel; modified: { lastWrittenEntryId: unknown } };

/** Contract-checking wrapper for JournalWriteChannel.writeJournalBeforeCache. */
export function wrapJournalWriteChannelWriteJournalBeforeCache(impl: JournalWriteChannelWriteJournalBeforeCacheImpl): (self: JournalWriteChannel, sku: SKU, delta: number, reason: string) => JournalWriteChannel {
  return (self, sku, delta, reason) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[JournalWriteChannel.writeJournalBeforeCache] pre violated: sku <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[JournalWriteChannel.writeJournalBeforeCache] pre violated: reason <> null");
    }
    if (!((delta !== 0))) {
      preViolations.push("[JournalWriteChannel.writeJournalBeforeCache] pre violated: delta <> 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, delta, reason);
      const postViolations: string[] = [];
      if (!((__result.self.lastWrittenEntryId === sku.skuId))) {
        postViolations.push("[JournalWriteChannel.writeJournalBeforeCache] post violated: self.lastWrittenEntryId = sku.skuId");
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

/** Impl signature for JournalWriteChannel.writeJournalBeforeCache (async). User supplies this. */
export type JournalWriteChannelWriteJournalBeforeCacheAsyncImpl = (self: JournalWriteChannel, sku: SKU, delta: number, reason: string) => Promise<{ self: JournalWriteChannel; modified: { lastWrittenEntryId: unknown } }>;

/** Contract-checking wrapper for JournalWriteChannel.writeJournalBeforeCache (async). */
export function wrapJournalWriteChannelWriteJournalBeforeCacheAsync(impl: JournalWriteChannelWriteJournalBeforeCacheAsyncImpl): (self: JournalWriteChannel, sku: SKU, delta: number, reason: string) => Promise<JournalWriteChannel> {
  return async (self, sku, delta, reason) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[JournalWriteChannel.writeJournalBeforeCache] pre violated: sku <> null");
    }
    if (!((reason !== null))) {
      preViolations.push("[JournalWriteChannel.writeJournalBeforeCache] pre violated: reason <> null");
    }
    if (!((delta !== 0))) {
      preViolations.push("[JournalWriteChannel.writeJournalBeforeCache] pre violated: delta <> 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, delta, reason);
      const postViolations: string[] = [];
      if (!((__result.self.lastWrittenEntryId === sku.skuId))) {
        postViolations.push("[JournalWriteChannel.writeJournalBeforeCache] post violated: self.lastWrittenEntryId = sku.skuId");
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

/** Impl signature for BackorderFulfillment.fulfillMatchingBackorders. User supplies this. */
export type BackorderFulfillmentFulfillMatchingBackordersImpl = (self: BackorderFulfillment, sku: SKU, availableQty: number) => { self: BackorderFulfillment; modified: { lastFulfilledBackorderQty: unknown } };

/** Contract-checking wrapper for BackorderFulfillment.fulfillMatchingBackorders. */
export function wrapBackorderFulfillmentFulfillMatchingBackorders(impl: BackorderFulfillmentFulfillMatchingBackordersImpl): (self: BackorderFulfillment, sku: SKU, availableQty: number) => BackorderFulfillment {
  return (self, sku, availableQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[BackorderFulfillment.fulfillMatchingBackorders] pre violated: sku <> null");
    }
    if (!((availableQty > 0))) {
      preViolations.push("[BackorderFulfillment.fulfillMatchingBackorders] pre violated: availableQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sku, availableQty);
      const postViolations: string[] = [];
      if (!((__result.self.lastFulfilledBackorderQty === availableQty))) {
        postViolations.push("[BackorderFulfillment.fulfillMatchingBackorders] post violated: self.lastFulfilledBackorderQty = availableQty");
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

/** Impl signature for BackorderFulfillment.fulfillMatchingBackorders (async). User supplies this. */
export type BackorderFulfillmentFulfillMatchingBackordersAsyncImpl = (self: BackorderFulfillment, sku: SKU, availableQty: number) => Promise<{ self: BackorderFulfillment; modified: { lastFulfilledBackorderQty: unknown } }>;

/** Contract-checking wrapper for BackorderFulfillment.fulfillMatchingBackorders (async). */
export function wrapBackorderFulfillmentFulfillMatchingBackordersAsync(impl: BackorderFulfillmentFulfillMatchingBackordersAsyncImpl): (self: BackorderFulfillment, sku: SKU, availableQty: number) => Promise<BackorderFulfillment> {
  return async (self, sku, availableQty) => {
    const preViolations: string[] = [];
    if (!((sku !== null))) {
      preViolations.push("[BackorderFulfillment.fulfillMatchingBackorders] pre violated: sku <> null");
    }
    if (!((availableQty > 0))) {
      preViolations.push("[BackorderFulfillment.fulfillMatchingBackorders] pre violated: availableQty > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sku, availableQty);
      const postViolations: string[] = [];
      if (!((__result.self.lastFulfilledBackorderQty === availableQty))) {
        postViolations.push("[BackorderFulfillment.fulfillMatchingBackorders] post violated: self.lastFulfilledBackorderQty = availableQty");
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

/** Impl signature for ReconciliationCheck.verify. User supplies this. */
export type ReconciliationCheckVerifyImpl = (self: ReconciliationCheck, computedQty: number, cachedQty: number) => { self: ReconciliationCheck; modified: { lastComputedQty: unknown; lastCachedQty: unknown; lastMatch: unknown } };

/** Contract-checking wrapper for ReconciliationCheck.verify. */
export function wrapReconciliationCheckVerify(impl: ReconciliationCheckVerifyImpl): (self: ReconciliationCheck, computedQty: number, cachedQty: number) => ReconciliationCheck {
  return (self, computedQty, cachedQty) => {
    const preViolations: string[] = [];
    if (!((computedQty >= 0))) {
      preViolations.push("[ReconciliationCheck.verify] pre violated: computedQty >= 0.0");
    }
    if (!((cachedQty >= 0))) {
      preViolations.push("[ReconciliationCheck.verify] pre violated: cachedQty >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, computedQty, cachedQty);
      const postViolations: string[] = [];
      if (!((__result.self.lastComputedQty === computedQty))) {
        postViolations.push("[ReconciliationCheck.verify] post violated: self.lastComputedQty = computedQty");
      }
      if (!((__result.self.lastCachedQty === cachedQty))) {
        postViolations.push("[ReconciliationCheck.verify] post violated: self.lastCachedQty = cachedQty");
      }
      if (!((__result.self.lastMatch === (computedQty === cachedQty)))) {
        postViolations.push("[ReconciliationCheck.verify] post violated: self.lastMatch = (computedQty = cachedQty)");
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

/** Impl signature for ReconciliationCheck.verify (async). User supplies this. */
export type ReconciliationCheckVerifyAsyncImpl = (self: ReconciliationCheck, computedQty: number, cachedQty: number) => Promise<{ self: ReconciliationCheck; modified: { lastComputedQty: unknown; lastCachedQty: unknown; lastMatch: unknown } }>;

/** Contract-checking wrapper for ReconciliationCheck.verify (async). */
export function wrapReconciliationCheckVerifyAsync(impl: ReconciliationCheckVerifyAsyncImpl): (self: ReconciliationCheck, computedQty: number, cachedQty: number) => Promise<ReconciliationCheck> {
  return async (self, computedQty, cachedQty) => {
    const preViolations: string[] = [];
    if (!((computedQty >= 0))) {
      preViolations.push("[ReconciliationCheck.verify] pre violated: computedQty >= 0.0");
    }
    if (!((cachedQty >= 0))) {
      preViolations.push("[ReconciliationCheck.verify] pre violated: cachedQty >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, computedQty, cachedQty);
      const postViolations: string[] = [];
      if (!((__result.self.lastComputedQty === computedQty))) {
        postViolations.push("[ReconciliationCheck.verify] post violated: self.lastComputedQty = computedQty");
      }
      if (!((__result.self.lastCachedQty === cachedQty))) {
        postViolations.push("[ReconciliationCheck.verify] post violated: self.lastCachedQty = cachedQty");
      }
      if (!((__result.self.lastMatch === (computedQty === cachedQty)))) {
        postViolations.push("[ReconciliationCheck.verify] post violated: self.lastMatch = (computedQty = cachedQty)");
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

