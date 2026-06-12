// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { auditLoggers, billingEngines, meterBillingSystemFormalizeds, meterBillingSystems, meterInterfaces, meterReadingValidators, tamperMonitors } from "../db/schema.js";
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

// ─── Events on AuditLogger ───

export async function writeEntry(__selfId: string, eventType: string, payload: string, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: eventType <> null
  //   pre: payload <> null
  //   pre: timestamp >= self.lastEntryTimestamp
  // Post-conditions from spec:
  //   post: self.logEntryCount = self.logEntryCount@pre + 1
  //   post: self.lastEntryTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(auditLoggers).set({
      logEntryCount: sql`${auditLoggers.logEntryCount} + ${1}`,
      lastEntryTimestamp: timestamp,
    }).where(eq(auditLoggers.loggerId, __selfId));
    // After mutation: re-validate against `validateAuditLogger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(auditLoggers).where(eq(auditLoggers.loggerId, __selfId)).get();
    // assertNoViolations(validateAuditLogger(row as never), "writeEntry");
  });
}

export async function checkRetentionLimit(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.retentionDays >= 365
  // Post-conditions from spec:
  //   post: self.logEntryCount = self.logEntryCount@pre
  //   post: self.lastEntryTimestamp = self.lastEntryTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(auditLoggers).set({
      logEntryCount: sql`${auditLoggers.logEntryCount}`,
      lastEntryTimestamp: sql`${auditLoggers.lastEntryTimestamp}`,
    }).where(eq(auditLoggers.loggerId, __selfId));
    // After mutation: re-validate against `validateAuditLogger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(auditLoggers).where(eq(auditLoggers.loggerId, __selfId)).get();
    // assertNoViolations(validateAuditLogger(row as never), "checkRetentionLimit");
  });
}

// ─── Events on BillingEngine ───

export async function applyIncrement(__selfId: string, delta: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: delta >= 0.0
  //   pre: timestamp >= self.lastAppliedTimestamp
  //   pre: not self.isFrozen
  //   pre: self.isCleared
  // Post-conditions from spec:
  //   post: self.currentBillingTotal = self.currentBillingTotal@pre + delta
  //   post: self.lastAppliedIncrement = delta
  //   post: self.lastAppliedTimestamp = timestamp
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(billingEngines).set({
      currentBillingTotal: sql`${billingEngines.currentBillingTotal} + ${delta}`,
      lastAppliedIncrement: delta,
      lastAppliedTimestamp: timestamp,
      acceptedReadingCount: sql`${billingEngines.acceptedReadingCount} + ${1}`,
    }).where(eq(billingEngines.engineId, __selfId));
    // After mutation: re-validate against `validateBillingEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(billingEngines).where(eq(billingEngines.engineId, __selfId)).get();
    // assertNoViolations(validateBillingEngine(row as never), "applyIncrement");
  });
}

export async function freezeBilling(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFrozen
  // Post-conditions from spec:
  //   post: self.isFrozen = true
  //   post: self.isCleared = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(billingEngines).set({
      isFrozen: true,
      isCleared: false,
    }).where(eq(billingEngines.engineId, __selfId));
    // After mutation: re-validate against `validateBillingEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(billingEngines).where(eq(billingEngines.engineId, __selfId)).get();
    // assertNoViolations(validateBillingEngine(row as never), "freezeBilling");
  });
}

export async function clearFreeze(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFrozen
  //   pre: not self.isCleared
  // Post-conditions from spec:
  //   post: self.isFrozen = false
  //   post: self.isCleared = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(billingEngines).set({
      isFrozen: false,
      isCleared: true,
    }).where(eq(billingEngines.engineId, __selfId));
    // After mutation: re-validate against `validateBillingEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(billingEngines).where(eq(billingEngines.engineId, __selfId)).get();
    // assertNoViolations(validateBillingEngine(row as never), "clearFreeze");
  });
}

export async function recordCompensation(__selfId: string, adjustment: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: adjustment <> 0.0
  //   pre: not self.isFrozen
  // Post-conditions from spec:
  //   post: if adjustment >= 0.0 then
            self.compensationTotal = self.compensationTotal@pre + adjustment
          else
            self.compensationTotal = self.compensationTotal@pre + (0.0 - adjustment)
          endif
  //   post: self.currentBillingTotal = self.currentBillingTotal@pre + adjustment
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(billingEngines).set({
      compensationTotal: sql`CASE WHEN ${adjustment} >= ${0} THEN ${billingEngines.compensationTotal} + ${adjustment} ELSE ${billingEngines.compensationTotal} + ${0} - ${adjustment} END`,
      currentBillingTotal: sql`${billingEngines.currentBillingTotal} + ${adjustment}`,
      acceptedReadingCount: sql`${billingEngines.acceptedReadingCount}`,
    }).where(eq(billingEngines.engineId, __selfId));
    // After mutation: re-validate against `validateBillingEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(billingEngines).where(eq(billingEngines.engineId, __selfId)).get();
    // assertNoViolations(validateBillingEngine(row as never), "recordCompensation");
  });
}

// ─── Events on MeterBillingSystem ───

export async function processReading(__selfId: string, kwh: number, tamperFlags: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: kwh >= 0.0
  //   pre: tamperFlags <> null
  //   pre: self.maxNegativeDeltaThreshold >= 0.0
  // Post-conditions from spec:
  //   post: if not self.tamperFreezeActive@pre and tamperFlags = '' and
               (kwh - (if self.acceptedReadingCount@pre > 0 then self.acceptedReadingCount@pre else kwh endif)) >= 0.0 then
            self.acceptedReadingCount = self.acceptedReadingCount@pre + 1
          else
            self.acceptedReadingCount = self.acceptedReadingCount@pre
          endif
  //   post: if tamperFlags <> '' and not self.tamperFreezeActive@pre then
            self.tamperFreezeActive = true
          else
            self.tamperFreezeActive = self.tamperFreezeActive@pre
          endif
  //   post: self.tamperCleared = (if tamperFlags = '' and not self.tamperFreezeActive@pre then self.tamperCleared@pre else self.tamperCleared@pre endif)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystems).set({
      acceptedReadingCount: sql`CASE WHEN ((NOT (${meterBillingSystems.tamperFreezeActive})) AND (${tamperFlags} = ${""})) AND (${kwh} - CASE WHEN ${meterBillingSystems.acceptedReadingCount} > ${0} THEN ${meterBillingSystems.acceptedReadingCount} ELSE ${kwh} END >= ${0}) THEN ${meterBillingSystems.acceptedReadingCount} + ${1} ELSE ${meterBillingSystems.acceptedReadingCount} END`,
      tamperFreezeActive: sql`CASE WHEN (${tamperFlags} <> ${""}) AND (NOT (${meterBillingSystems.tamperFreezeActive})) THEN ${true} ELSE ${meterBillingSystems.tamperFreezeActive} END`,
      tamperCleared: sql`CASE WHEN (${tamperFlags} = ${""}) AND (NOT (${meterBillingSystems.tamperFreezeActive})) THEN ${meterBillingSystems.tamperCleared} ELSE ${meterBillingSystems.tamperCleared} END`,
    }).where(eq(meterBillingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystems).where(eq(meterBillingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystem(row as never), "processReading");
  });
}

export async function detectTamper(__selfId: string, eventType: string, description: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: eventType <> null
  //   pre: description <> null
  //   pre: not self.tamperFreezeActive
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = true
  //   post: self.tamperCleared = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystems).set({
      tamperFreezeActive: true,
      tamperCleared: false,
    }).where(eq(meterBillingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystems).where(eq(meterBillingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystem(row as never), "detectTamper");
  });
}

export async function clearTamper(__selfId: string, clearanceId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clearanceId <> null
  //   pre: self.tamperFreezeActive
  //   pre: not self.tamperCleared
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = false
  //   post: self.tamperCleared = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystems).set({
      tamperFreezeActive: false,
      tamperCleared: true,
    }).where(eq(meterBillingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystems).where(eq(meterBillingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystem(row as never), "clearTamper");
  });
}

export async function applyCompensation(__selfId: string, adjustmentDelta: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: adjustmentDelta <> 0.0
  //   pre: not self.tamperFreezeActive
  // Post-conditions from spec:
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre
  //   post: self.tamperFreezeActive = self.tamperFreezeActive@pre
  //   post: self.tamperCleared = self.tamperCleared@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystems).set({
      acceptedReadingCount: sql`${meterBillingSystems.acceptedReadingCount}`,
      tamperFreezeActive: sql`${meterBillingSystems.tamperFreezeActive}`,
      tamperCleared: sql`${meterBillingSystems.tamperCleared}`,
    }).where(eq(meterBillingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystems).where(eq(meterBillingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystem(row as never), "applyCompensation");
  });
}

// ─── Events on MeterBillingSystemFormalized ───

export async function rejectNegativeDelta(__selfId: string, kwh: number, lastAcceptedKwh: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lastAcceptedKwh >= 0.0
  //   pre: kwh >= 0.0
  //   pre: kwh < lastAcceptedKwh
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = self.tamperFreezeActive@pre
  //   post: self.tamperCleared = self.tamperCleared@pre
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystemFormalizeds).set({
      tamperFreezeActive: sql`${meterBillingSystemFormalizeds.tamperFreezeActive}`,
      tamperCleared: sql`${meterBillingSystemFormalizeds.tamperCleared}`,
      acceptedReadingCount: sql`${meterBillingSystemFormalizeds.acceptedReadingCount}`,
    }).where(eq(meterBillingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystemFormalizeds).where(eq(meterBillingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystemFormalized(row as never), "rejectNegativeDelta");
  });
}

export async function rejectTamperedReading(__selfId: string, tamperFlags: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: tamperFlags <> null
  //   pre: tamperFlags <> ''
  //   pre: not self.tamperFreezeActive
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = true
  //   post: self.tamperCleared = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystemFormalizeds).set({
      tamperFreezeActive: true,
      tamperCleared: false,
    }).where(eq(meterBillingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystemFormalizeds).where(eq(meterBillingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystemFormalized(row as never), "rejectTamperedReading");
  });
}

export async function rejectPrematureClearance(__selfId: string, clearanceId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clearanceId <> null
  //   pre: not self.tamperFreezeActive
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = self.tamperFreezeActive@pre
  //   post: self.tamperCleared = self.tamperCleared@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystemFormalizeds).set({
      tamperFreezeActive: sql`${meterBillingSystemFormalizeds.tamperFreezeActive}`,
      tamperCleared: sql`${meterBillingSystemFormalizeds.tamperCleared}`,
    }).where(eq(meterBillingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystemFormalizeds).where(eq(meterBillingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystemFormalized(row as never), "rejectPrematureClearance");
  });
}

export async function rejectCompensationDuringFreeze(__selfId: string, adjustmentDelta: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: adjustmentDelta <> 0.0
  //   pre: self.tamperFreezeActive
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = self.tamperFreezeActive@pre
  //   post: self.tamperCleared = self.tamperCleared@pre
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystemFormalizeds).set({
      tamperFreezeActive: sql`${meterBillingSystemFormalizeds.tamperFreezeActive}`,
      tamperCleared: sql`${meterBillingSystemFormalizeds.tamperCleared}`,
      acceptedReadingCount: sql`${meterBillingSystemFormalizeds.acceptedReadingCount}`,
    }).where(eq(meterBillingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystemFormalizeds).where(eq(meterBillingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystemFormalized(row as never), "rejectCompensationDuringFreeze");
  });
}

export async function recordAuditTrail(__selfId: string, eventType: string, eventPayload: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: eventType <> null
  //   pre: eventPayload <> null
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = self.tamperFreezeActive@pre
  //   post: self.tamperCleared = self.tamperCleared@pre
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystemFormalizeds).set({
      tamperFreezeActive: sql`${meterBillingSystemFormalizeds.tamperFreezeActive}`,
      tamperCleared: sql`${meterBillingSystemFormalizeds.tamperCleared}`,
      acceptedReadingCount: sql`${meterBillingSystemFormalizeds.acceptedReadingCount}`,
    }).where(eq(meterBillingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystemFormalizeds).where(eq(meterBillingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystemFormalized(row as never), "recordAuditTrail");
  });
}

export async function rejectRetentionOverflow(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.acceptedReadingCount >= 365
  // Post-conditions from spec:
  //   post: self.tamperFreezeActive = self.tamperFreezeActive@pre
  //   post: self.tamperCleared = self.tamperCleared@pre
  //   post: self.acceptedReadingCount = self.acceptedReadingCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterBillingSystemFormalizeds).set({
      tamperFreezeActive: sql`${meterBillingSystemFormalizeds.tamperFreezeActive}`,
      tamperCleared: sql`${meterBillingSystemFormalizeds.tamperCleared}`,
      acceptedReadingCount: sql`${meterBillingSystemFormalizeds.acceptedReadingCount}`,
    }).where(eq(meterBillingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeterBillingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterBillingSystemFormalizeds).where(eq(meterBillingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeterBillingSystemFormalized(row as never), "rejectRetentionOverflow");
  });
}

// ─── Events on MeterInterface ───

export async function receiveReading(__selfId: string, kwh: number, timestamp: number, tamperFlags: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isConnected
  //   pre: kwh >= 0.0
  //   pre: timestamp >= self.lastRawReadingTimestamp
  //   pre: tamperFlags <> null
  // Post-conditions from spec:
  //   post: self.lastRawReadingKwh = kwh
  //   post: self.lastRawReadingTimestamp = timestamp
  //   post: self.lastRawTamperFlags = tamperFlags
  //   post: self.readingQueueSize = self.readingQueueSize@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterInterfaces).set({
      lastRawReadingKwh: kwh,
      lastRawReadingTimestamp: timestamp,
      lastRawTamperFlags: tamperFlags,
      readingQueueSize: sql`${meterInterfaces.readingQueueSize} + ${1}`,
    }).where(eq(meterInterfaces.interfaceId, __selfId));
    // After mutation: re-validate against `validateMeterInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterInterfaces).where(eq(meterInterfaces.interfaceId, __selfId)).get();
    // assertNoViolations(validateMeterInterface(row as never), "receiveReading");
  });
}

export async function reportConnectionStatus(__selfId: string, status: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: status <> self.isConnected
  // Post-conditions from spec:
  //   post: self.isConnected = status
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterInterfaces).set({
      isConnected: status,
    }).where(eq(meterInterfaces.interfaceId, __selfId));
    // After mutation: re-validate against `validateMeterInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterInterfaces).where(eq(meterInterfaces.interfaceId, __selfId)).get();
    // assertNoViolations(validateMeterInterface(row as never), "reportConnectionStatus");
  });
}

// ─── Events on MeterReadingValidator ───

export async function validateReading(__selfId: string, kwh: number, timestamp: number, tamperFlags: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: kwh >= 0.0
  //   pre: timestamp >= self.lastAcceptedTimestamp
  //   pre: tamperFlags <> null
  // Post-conditions from spec:
  //   post: self.lastComputedDelta = kwh - self.lastAcceptedKwh
  //   post: self.lastDeltaIsValid = (kwh >= self.lastAcceptedKwh) and (tamperFlags = '')
  //   post: if (kwh < self.lastAcceptedKwh) or (tamperFlags <> '') then
            self.anomalyCount = self.anomalyCount@pre + 1
          else
            self.anomalyCount = self.anomalyCount@pre
          endif
  //   post: self.lastAcceptedKwh = kwh
  //   post: self.lastAcceptedTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meterReadingValidators).set({
      lastComputedDelta: sql`${kwh} - ${meterReadingValidators.lastAcceptedKwh}`,
      lastDeltaIsValid: sql`${kwh} >= ${meterReadingValidators.lastAcceptedKwh}`,
      anomalyCount: sql`CASE WHEN (${kwh} < ${meterReadingValidators.lastAcceptedKwh}) OR (${tamperFlags} <> ${""}) THEN ${meterReadingValidators.anomalyCount} + ${1} ELSE ${meterReadingValidators.anomalyCount} END`,
      lastAcceptedKwh: kwh,
      lastAcceptedTimestamp: timestamp,
    }).where(eq(meterReadingValidators.validatorId, __selfId));
    // After mutation: re-validate against `validateMeterReadingValidator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meterReadingValidators).where(eq(meterReadingValidators.validatorId, __selfId)).get();
    // assertNoViolations(validateMeterReadingValidator(row as never), "validateReading");
  });
}

// ─── Events on TamperMonitor ───

export async function recordTamper(__selfId: string, eventType: string, description: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: eventType <> null
  //   pre: description <> null
  //   pre: not self.isTamperActive
  // Post-conditions from spec:
  //   post: self.isTamperActive = true
  //   post: self.lastTamperType = eventType
  //   post: self.lastTamperDescription = description
  //   post: self.lastTamperTimestamp = self.lastTamperTimestamp@pre + 1.0
  //   post: self.tamperEventCount = self.tamperEventCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tamperMonitors).set({
      isTamperActive: true,
      lastTamperType: eventType,
      lastTamperDescription: description,
      lastTamperTimestamp: sql`${tamperMonitors.lastTamperTimestamp} + ${1}`,
      tamperEventCount: sql`${tamperMonitors.tamperEventCount} + ${1}`,
    }).where(eq(tamperMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateTamperMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tamperMonitors).where(eq(tamperMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateTamperMonitor(row as never), "recordTamper");
  });
}

export async function recordClearance(__selfId: string, clearanceId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clearanceId <> null
  //   pre: self.isTamperActive
  // Post-conditions from spec:
  //   post: self.isTamperActive = false
  //   post: self.isManualClearancePending = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tamperMonitors).set({
      isTamperActive: false,
      isManualClearancePending: true,
    }).where(eq(tamperMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateTamperMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tamperMonitors).where(eq(tamperMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateTamperMonitor(row as never), "recordClearance");
  });
}

export async function resolveClearance(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isManualClearancePending
  //   pre: not self.isTamperActive
  // Post-conditions from spec:
  //   post: self.isManualClearancePending = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tamperMonitors).set({
      isManualClearancePending: false,
    }).where(eq(tamperMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateTamperMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tamperMonitors).where(eq(tamperMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateTamperMonitor(row as never), "resolveClearance");
  });
}
