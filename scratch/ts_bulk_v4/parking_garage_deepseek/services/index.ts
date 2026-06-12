// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { entrySensors, exitSensors, gateControllers, occupancyTrackers, parkingGarageSystemFormalizeds, parkingGarageSystems, paymentProcessors, ticketIssuers, ticketValidators } from "../db/schema.js";
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

// ─── Events on EntrySensor ───

export async function detectVehicle(__selfId: string, timestamp: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp <> null
  // Post-conditions from spec:
  //   post: self.vehiclePresent = true
  //   post: self.lastDetectionTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(entrySensors).set({
      vehiclePresent: true,
      lastDetectionTimestamp: timestamp,
    }).where(eq(entrySensors.sensorId, __selfId));
    // After mutation: re-validate against `validateEntrySensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(entrySensors).where(eq(entrySensors.sensorId, __selfId)).get();
    // assertNoViolations(validateEntrySensor(row as never), "detectVehicle");
  });
}

export async function clearDetection(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.vehiclePresent = true
  // Post-conditions from spec:
  //   post: self.vehiclePresent = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(entrySensors).set({
      vehiclePresent: false,
    }).where(eq(entrySensors.sensorId, __selfId));
    // After mutation: re-validate against `validateEntrySensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(entrySensors).where(eq(entrySensors.sensorId, __selfId)).get();
    // assertNoViolations(validateEntrySensor(row as never), "clearDetection");
  });
}

// ─── Events on ExitSensor ───

export async function detectTicket(__selfId: string, ticketId: string, timestamp: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  //   pre: timestamp <> null
  // Post-conditions from spec:
  //   post: self.ticketPresented = true
  //   post: self.lastTicketId = ticketId
  //   post: self.lastDetectionTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(exitSensors).set({
      ticketPresented: true,
      lastTicketId: ticketId,
      lastDetectionTimestamp: timestamp,
    }).where(eq(exitSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateExitSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(exitSensors).where(eq(exitSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateExitSensor(row as never), "detectTicket");
  });
}

export async function clearDetection(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.ticketPresented = true
  // Post-conditions from spec:
  //   post: self.ticketPresented = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(exitSensors).set({
      ticketPresented: false,
    }).where(eq(exitSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateExitSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(exitSensors).where(eq(exitSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateExitSensor(row as never), "clearDetection");
  });
}

// ─── Events on GateController ───

export async function raiseEntryGate(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.entryGateOpen
  // Post-conditions from spec:
  //   post: self.entryGateOpen = true
  //   post: self.entryGateTimer = 5
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(gateControllers).set({
      entryGateOpen: true,
      entryGateTimer: 5,
    }).where(eq(gateControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateGateController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(gateControllers).where(eq(gateControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateGateController(row as never), "raiseEntryGate");
  });
}

export async function lowerEntryGate(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.entryGateOpen
  // Post-conditions from spec:
  //   post: self.entryGateOpen = false
  //   post: self.entryGateTimer = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(gateControllers).set({
      entryGateOpen: false,
      entryGateTimer: 0,
    }).where(eq(gateControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateGateController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(gateControllers).where(eq(gateControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateGateController(row as never), "lowerEntryGate");
  });
}

export async function raiseExitGate(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.exitGateOpen
  // Post-conditions from spec:
  //   post: self.exitGateOpen = true
  //   post: self.exitGateTimer = 5
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(gateControllers).set({
      exitGateOpen: true,
      exitGateTimer: 5,
    }).where(eq(gateControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateGateController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(gateControllers).where(eq(gateControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateGateController(row as never), "raiseExitGate");
  });
}

export async function lowerExitGate(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.exitGateOpen
  // Post-conditions from spec:
  //   post: self.exitGateOpen = false
  //   post: self.exitGateTimer = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(gateControllers).set({
      exitGateOpen: false,
      exitGateTimer: 0,
    }).where(eq(gateControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateGateController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(gateControllers).where(eq(gateControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateGateController(row as never), "lowerExitGate");
  });
}

export async function displayFullSign(__selfId: string, full: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: full implies not self.entryGateOpen
  // Post-conditions from spec:
  //   post: if full then 
            self.entryGateOpen = false 
          else 
            self.entryGateOpen = self.entryGateOpen@pre 
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(gateControllers).set({
      entryGateOpen: sql`CASE WHEN ${full} THEN ${false} ELSE ${gateControllers.entryGateOpen} END`,
    }).where(eq(gateControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateGateController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(gateControllers).where(eq(gateControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateGateController(row as never), "displayFullSign");
  });
}

// ─── Events on OccupancyTracker ───

export async function incrementOccupancy(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentOccupancy < self.certifiedCapacity
  // Post-conditions from spec:
  //   post: self.currentOccupancy = self.currentOccupancy@pre + 1
  //   post: self.isFull = (self.currentOccupancy = self.certifiedCapacity)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(occupancyTrackers).set({
      currentOccupancy: sql`${occupancyTrackers.currentOccupancy} + ${1}`,
      isFull: sql`${occupancyTrackers.currentOccupancy} = ${occupancyTrackers.certifiedCapacity}`,
    }).where(eq(occupancyTrackers.trackerId, __selfId));
    // After mutation: re-validate against `validateOccupancyTracker` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(occupancyTrackers).where(eq(occupancyTrackers.trackerId, __selfId)).get();
    // assertNoViolations(validateOccupancyTracker(row as never), "incrementOccupancy");
  });
}

export async function decrementOccupancy(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentOccupancy > 0
  // Post-conditions from spec:
  //   post: self.currentOccupancy = self.currentOccupancy@pre - 1
  //   post: self.isFull = (self.currentOccupancy = self.certifiedCapacity)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(occupancyTrackers).set({
      currentOccupancy: sql`${occupancyTrackers.currentOccupancy} - ${1}`,
      isFull: sql`${occupancyTrackers.currentOccupancy} = ${occupancyTrackers.certifiedCapacity}`,
    }).where(eq(occupancyTrackers.trackerId, __selfId));
    // After mutation: re-validate against `validateOccupancyTracker` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(occupancyTrackers).where(eq(occupancyTrackers.trackerId, __selfId)).get();
    // assertNoViolations(validateOccupancyTracker(row as never), "decrementOccupancy");
  });
}

export async function checkCapacity(__selfId: string): Promise<boolean> {
  // Post-conditions from spec:
  //   post: result = (self.currentOccupancy < self.certifiedCapacity)
  // TODO: implement mutation logic for 'OccupancyTracker.checkCapacity'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: checkCapacity");
}

// ─── Events on ParkingGarageSystem ───

export async function enterGarage(__selfId: string, vehicleId: string): Promise<string> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: vehicleId <> null
  // Post-conditions from spec:
  //   post: if self.currentOccupancy@pre < self.certifiedCapacity then
            self.currentOccupancy = self.currentOccupancy@pre + 1
            and result <> null
            and result.ticketId <> null
            and result.issuedAtEntry <> null
            and result.isUsed = false
            and result.isPaid = false
            and result.consumedAtExit = null
            and self.ticketCount = self.ticketCount@pre + 1
            and self.entryGateOpen = true
            and self.isFull = (self.currentOccupancy = self.certifiedCapacity)
          else
            result = null
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.ticketCount = self.ticketCount@pre
            and self.entryGateOpen = false
            and self.isFull = true
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(parkingGarageSystems).set({
      currentOccupancy: sql`CASE WHEN ${parkingGarageSystems.currentOccupancy} < ${parkingGarageSystems.certifiedCapacity} THEN ${parkingGarageSystems.currentOccupancy} + ${1} ELSE ${parkingGarageSystems.currentOccupancy} END`,
      ticketCount: sql`CASE WHEN ${parkingGarageSystems.currentOccupancy} < ${parkingGarageSystems.certifiedCapacity} THEN ${parkingGarageSystems.ticketCount} + ${1} ELSE ${parkingGarageSystems.ticketCount} END`,
      entryGateOpen: sql`CASE WHEN ${parkingGarageSystems.currentOccupancy} < ${parkingGarageSystems.certifiedCapacity} THEN ${true} ELSE ${false} END`,
      isFull: sql`CASE WHEN ${parkingGarageSystems.currentOccupancy} < ${parkingGarageSystems.certifiedCapacity} THEN ${parkingGarageSystems.currentOccupancy} = ${parkingGarageSystems.certifiedCapacity} ELSE ${true} END`,
    }).where(eq(parkingGarageSystems.systemId, __selfId));
    // After mutation: re-validate against `validateParkingGarageSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(parkingGarageSystems).where(eq(parkingGarageSystems.systemId, __selfId)).get();
    // assertNoViolations(validateParkingGarageSystem(row as never), "enterGarage");
  });
}

export async function exitGarage(__selfId: string, ticketId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  // Post-conditions from spec:
  //   post: if self.ticketCount@pre > 0 and self.currentOccupancy@pre > 0 then
            result = true
            and self.currentOccupancy = self.currentOccupancy@pre - 1
            and self.exitGateOpen = true
            and self.ticketCount = self.ticketCount@pre
          else
            result = false
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.exitGateOpen = false
            and self.ticketCount = self.ticketCount@pre
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(parkingGarageSystems).set({
      currentOccupancy: sql`CASE WHEN (${parkingGarageSystems.ticketCount} > ${0}) AND (${parkingGarageSystems.currentOccupancy} > ${0}) THEN ${parkingGarageSystems.currentOccupancy} - ${1} ELSE ${parkingGarageSystems.currentOccupancy} END`,
      exitGateOpen: sql`CASE WHEN (${parkingGarageSystems.ticketCount} > ${0}) AND (${parkingGarageSystems.currentOccupancy} > ${0}) THEN ${true} ELSE ${false} END`,
      ticketCount: sql`CASE WHEN (${parkingGarageSystems.ticketCount} > ${0}) AND (${parkingGarageSystems.currentOccupancy} > ${0}) THEN ${parkingGarageSystems.ticketCount} ELSE ${parkingGarageSystems.ticketCount} END`,
    }).where(eq(parkingGarageSystems.systemId, __selfId));
    // After mutation: re-validate against `validateParkingGarageSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(parkingGarageSystems).where(eq(parkingGarageSystems.systemId, __selfId)).get();
    // assertNoViolations(validateParkingGarageSystem(row as never), "exitGarage");
  });
}

export async function payForTicket(__selfId: string, ticketId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  // Post-conditions from spec:
  //   post: if self.ticketCount@pre > 0 then
            result = true
          else
            result = false
          endif
  // TODO: implement mutation logic for 'ParkingGarageSystem.payForTicket'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: payForTicket");
}

// ─── Events on ParkingGarageSystemFormalized ───

export async function rejectEntryWhenFull(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentOccupancy = self.certifiedCapacity
  // Post-conditions from spec:
  //   post: self.entryGateOpen = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(parkingGarageSystemFormalizeds).set({
      entryGateOpen: false,
    }).where(eq(parkingGarageSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateParkingGarageSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(parkingGarageSystemFormalizeds).where(eq(parkingGarageSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateParkingGarageSystemFormalized(row as never), "rejectEntryWhenFull");
  });
}

export async function rejectUsedTicketExit(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentOccupancy > 0
  //   pre: self.ticketCount > 0
  // Post-conditions from spec:
  //   post: self.exitGateOpen = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(parkingGarageSystemFormalizeds).set({
      exitGateOpen: false,
    }).where(eq(parkingGarageSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateParkingGarageSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(parkingGarageSystemFormalizeds).where(eq(parkingGarageSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateParkingGarageSystemFormalized(row as never), "rejectUsedTicketExit");
  });
}

export async function rejectUnpaidExit(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentOccupancy > 0
  //   pre: self.ticketCount > 0
  // Post-conditions from spec:
  //   post: self.exitGateOpen = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(parkingGarageSystemFormalizeds).set({
      exitGateOpen: false,
    }).where(eq(parkingGarageSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateParkingGarageSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(parkingGarageSystemFormalizeds).where(eq(parkingGarageSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateParkingGarageSystemFormalized(row as never), "rejectUnpaidExit");
  });
}

export async function attendantOverrideExit(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentOccupancy > 0
  // Post-conditions from spec:
  //   post: self.exitGateOpen = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(parkingGarageSystemFormalizeds).set({
      exitGateOpen: true,
    }).where(eq(parkingGarageSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateParkingGarageSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(parkingGarageSystemFormalizeds).where(eq(parkingGarageSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateParkingGarageSystemFormalized(row as never), "attendantOverrideExit");
  });
}

// ─── Events on PaymentProcessor ───

export async function processPayment(__selfId: string, ticketId: string, amount: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  //   pre: amount >= 0.0
  // Post-conditions from spec:
  //   post: self.lastPaidTicketId = ticketId
  //   post: self.paymentSuccessful = result
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(paymentProcessors).set({
      lastPaidTicketId: ticketId,
    }).where(eq(paymentProcessors.processorId, __selfId));
    // After mutation: re-validate against `validatePaymentProcessor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(paymentProcessors).where(eq(paymentProcessors.processorId, __selfId)).get();
    // assertNoViolations(validatePaymentProcessor(row as never), "processPayment");
  });
}

export async function markTicketPaid(__selfId: string, ticketId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  //   pre: self.paymentSuccessful = true
  // Post-conditions from spec:
  //   post: self.paymentSuccessful = false
  //   post: self.lastPaidTicketId = ticketId
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(paymentProcessors).set({
      paymentSuccessful: false,
      lastPaidTicketId: ticketId,
    }).where(eq(paymentProcessors.processorId, __selfId));
    // After mutation: re-validate against `validatePaymentProcessor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(paymentProcessors).where(eq(paymentProcessors.processorId, __selfId)).get();
    // assertNoViolations(validatePaymentProcessor(row as never), "markTicketPaid");
  });
}

// ─── Events on TicketIssuer ───

export async function issueTicket(__selfId: string, ticketCode: string): Promise<string> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketCode <> null
  // Post-conditions from spec:
  //   post: result <> null
  //   post: result.ticketId = ticketCode
  //   post: result.isUsed = false
  //   post: result.isPaid = false
  //   post: result.consumedAtExit = null
  //   post: self.nextTicketNumber = self.nextTicketNumber@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ticketIssuers).set({
      nextTicketNumber: sql`${ticketIssuers.nextTicketNumber} + ${1}`,
    }).where(eq(ticketIssuers.issuerId, __selfId));
    // After mutation: re-validate against `validateTicketIssuer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ticketIssuers).where(eq(ticketIssuers.issuerId, __selfId)).get();
    // assertNoViolations(validateTicketIssuer(row as never), "issueTicket");
  });
}

export async function resetCounter(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.nextTicketNumber > 0
  // Post-conditions from spec:
  //   post: self.nextTicketNumber = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ticketIssuers).set({
      nextTicketNumber: 0,
    }).where(eq(ticketIssuers.issuerId, __selfId));
    // After mutation: re-validate against `validateTicketIssuer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ticketIssuers).where(eq(ticketIssuers.issuerId, __selfId)).get();
    // assertNoViolations(validateTicketIssuer(row as never), "resetCounter");
  });
}

// ─── Events on TicketValidator ───

export async function validateTicket(__selfId: string, ticketId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  // Post-conditions from spec:
  //   post: self.lastValidatedTicketId = ticketId
  //   post: self.validationResult = result
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ticketValidators).set({
      lastValidatedTicketId: ticketId,
    }).where(eq(ticketValidators.validatorId, __selfId));
    // After mutation: re-validate against `validateTicketValidator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ticketValidators).where(eq(ticketValidators.validatorId, __selfId)).get();
    // assertNoViolations(validateTicketValidator(row as never), "validateTicket");
  });
}

export async function markTicketExited(__selfId: string, ticketId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: ticketId <> null
  // Post-conditions from spec:
  //   post: if self.validationResult@pre then
            result = true
          else
            result = false
          endif
  //   post: self.validationResult = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ticketValidators).set({
      validationResult: false,
    }).where(eq(ticketValidators.validatorId, __selfId));
    // After mutation: re-validate against `validateTicketValidator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ticketValidators).where(eq(ticketValidators.validatorId, __selfId)).get();
    // assertNoViolations(validateTicketValidator(row as never), "markTicketExited");
  });
}
