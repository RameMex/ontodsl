// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
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

export async function detectVehicle(timestamp: string): Promise<void> {
  // TODO: implement mutation logic for 'EntrySensor.detectVehicle'.
  // Pre-conditions from spec:
  //   pre: timestamp <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.vehiclePresent = true
  //   post: self.lastDetectionTimestamp = timestamp
  // After mutations, call validate*() on the affected EntrySensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectVehicle");
}

export async function clearDetection(): Promise<void> {
  // TODO: implement mutation logic for 'EntrySensor.clearDetection'.
  // Pre-conditions from spec:
  //   pre: self.vehiclePresent = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.vehiclePresent = false
  // After mutations, call validate*() on the affected EntrySensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearDetection");
}

// ─── Events on ExitSensor ───

export async function detectTicket(ticketId: string, timestamp: string): Promise<void> {
  // TODO: implement mutation logic for 'ExitSensor.detectTicket'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  //   pre: timestamp <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.ticketPresented = true
  //   post: self.lastTicketId = ticketId
  //   post: self.lastDetectionTimestamp = timestamp
  // After mutations, call validate*() on the affected ExitSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectTicket");
}

export async function clearDetection(): Promise<void> {
  // TODO: implement mutation logic for 'ExitSensor.clearDetection'.
  // Pre-conditions from spec:
  //   pre: self.ticketPresented = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.ticketPresented = false
  // After mutations, call validate*() on the affected ExitSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearDetection");
}

// ─── Events on GateController ───

export async function raiseEntryGate(): Promise<void> {
  // TODO: implement mutation logic for 'GateController.raiseEntryGate'.
  // Pre-conditions from spec:
  //   pre: not self.entryGateOpen
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.entryGateOpen = true
  //   post: self.entryGateTimer = 5
  // After mutations, call validate*() on the affected GateController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseEntryGate");
}

export async function lowerEntryGate(): Promise<void> {
  // TODO: implement mutation logic for 'GateController.lowerEntryGate'.
  // Pre-conditions from spec:
  //   pre: self.entryGateOpen
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.entryGateOpen = false
  //   post: self.entryGateTimer = 0
  // After mutations, call validate*() on the affected GateController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: lowerEntryGate");
}

export async function raiseExitGate(): Promise<void> {
  // TODO: implement mutation logic for 'GateController.raiseExitGate'.
  // Pre-conditions from spec:
  //   pre: not self.exitGateOpen
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.exitGateOpen = true
  //   post: self.exitGateTimer = 5
  // After mutations, call validate*() on the affected GateController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseExitGate");
}

export async function lowerExitGate(): Promise<void> {
  // TODO: implement mutation logic for 'GateController.lowerExitGate'.
  // Pre-conditions from spec:
  //   pre: self.exitGateOpen
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.exitGateOpen = false
  //   post: self.exitGateTimer = 0
  // After mutations, call validate*() on the affected GateController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: lowerExitGate");
}

export async function displayFullSign(full: boolean): Promise<void> {
  // TODO: implement mutation logic for 'GateController.displayFullSign'.
  // Pre-conditions from spec:
  //   pre: full implies not self.entryGateOpen
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if full then 
            self.entryGateOpen = false 
          else 
            self.entryGateOpen = self.entryGateOpen@pre 
          endif
  // After mutations, call validate*() on the affected GateController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: displayFullSign");
}

// ─── Events on OccupancyTracker ───

export async function incrementOccupancy(): Promise<void> {
  // TODO: implement mutation logic for 'OccupancyTracker.incrementOccupancy'.
  // Pre-conditions from spec:
  //   pre: self.currentOccupancy < self.certifiedCapacity
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentOccupancy = self.currentOccupancy@pre + 1
  //   post: self.isFull = (self.currentOccupancy = self.certifiedCapacity)
  // After mutations, call validate*() on the affected OccupancyTracker snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: incrementOccupancy");
}

export async function decrementOccupancy(): Promise<void> {
  // TODO: implement mutation logic for 'OccupancyTracker.decrementOccupancy'.
  // Pre-conditions from spec:
  //   pre: self.currentOccupancy > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentOccupancy = self.currentOccupancy@pre - 1
  //   post: self.isFull = (self.currentOccupancy = self.certifiedCapacity)
  // After mutations, call validate*() on the affected OccupancyTracker snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: decrementOccupancy");
}

export async function checkCapacity(): Promise<boolean> {
  // TODO: implement mutation logic for 'OccupancyTracker.checkCapacity'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = (self.currentOccupancy < self.certifiedCapacity)
  // After mutations, call validate*() on the affected OccupancyTracker snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: checkCapacity");
}

// ─── Events on ParkingGarageSystem ───

export async function enterGarage(vehicleId: string): Promise<string> {
  // TODO: implement mutation logic for 'ParkingGarageSystem.enterGarage'.
  // Pre-conditions from spec:
  //   pre: vehicleId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
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
  // After mutations, call validate*() on the affected ParkingGarageSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enterGarage");
}

export async function exitGarage(ticketId: string): Promise<boolean> {
  // TODO: implement mutation logic for 'ParkingGarageSystem.exitGarage'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
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
  // After mutations, call validate*() on the affected ParkingGarageSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: exitGarage");
}

export async function payForTicket(ticketId: string): Promise<boolean> {
  // TODO: implement mutation logic for 'ParkingGarageSystem.payForTicket'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if self.ticketCount@pre > 0 then
            result = true
          else
            result = false
          endif
  // After mutations, call validate*() on the affected ParkingGarageSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: payForTicket");
}

// ─── Events on ParkingGarageSystemFormalized ───

export async function rejectEntryWhenFull(): Promise<void> {
  // TODO: implement mutation logic for 'ParkingGarageSystemFormalized.rejectEntryWhenFull'.
  // Pre-conditions from spec:
  //   pre: self.currentOccupancy = self.certifiedCapacity
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.entryGateOpen = false
  // After mutations, call validate*() on the affected ParkingGarageSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectEntryWhenFull");
}

export async function rejectUsedTicketExit(): Promise<void> {
  // TODO: implement mutation logic for 'ParkingGarageSystemFormalized.rejectUsedTicketExit'.
  // Pre-conditions from spec:
  //   pre: self.currentOccupancy > 0
  //   pre: self.ticketCount > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.exitGateOpen = false
  // After mutations, call validate*() on the affected ParkingGarageSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectUsedTicketExit");
}

export async function rejectUnpaidExit(): Promise<void> {
  // TODO: implement mutation logic for 'ParkingGarageSystemFormalized.rejectUnpaidExit'.
  // Pre-conditions from spec:
  //   pre: self.currentOccupancy > 0
  //   pre: self.ticketCount > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.exitGateOpen = false
  // After mutations, call validate*() on the affected ParkingGarageSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectUnpaidExit");
}

export async function attendantOverrideExit(): Promise<void> {
  // TODO: implement mutation logic for 'ParkingGarageSystemFormalized.attendantOverrideExit'.
  // Pre-conditions from spec:
  //   pre: self.currentOccupancy > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.exitGateOpen = true
  // After mutations, call validate*() on the affected ParkingGarageSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: attendantOverrideExit");
}

// ─── Events on PaymentProcessor ───

export async function processPayment(ticketId: string, amount: number): Promise<boolean> {
  // TODO: implement mutation logic for 'PaymentProcessor.processPayment'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  //   pre: amount >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastPaidTicketId = ticketId
  //   post: self.paymentSuccessful = result
  // After mutations, call validate*() on the affected PaymentProcessor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: processPayment");
}

export async function markTicketPaid(ticketId: string): Promise<void> {
  // TODO: implement mutation logic for 'PaymentProcessor.markTicketPaid'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  //   pre: self.paymentSuccessful = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.paymentSuccessful = false
  //   post: self.lastPaidTicketId = ticketId
  // After mutations, call validate*() on the affected PaymentProcessor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: markTicketPaid");
}

// ─── Events on TicketIssuer ───

export async function issueTicket(ticketCode: string): Promise<string> {
  // TODO: implement mutation logic for 'TicketIssuer.issueTicket'.
  // Pre-conditions from spec:
  //   pre: ticketCode <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result <> null
  //   post: result.ticketId = ticketCode
  //   post: result.isUsed = false
  //   post: result.isPaid = false
  //   post: result.consumedAtExit = null
  //   post: self.nextTicketNumber = self.nextTicketNumber@pre + 1
  // After mutations, call validate*() on the affected TicketIssuer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: issueTicket");
}

export async function resetCounter(): Promise<void> {
  // TODO: implement mutation logic for 'TicketIssuer.resetCounter'.
  // Pre-conditions from spec:
  //   pre: self.nextTicketNumber > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.nextTicketNumber = 0
  // After mutations, call validate*() on the affected TicketIssuer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetCounter");
}

// ─── Events on TicketValidator ───

export async function validateTicket(ticketId: string): Promise<boolean> {
  // TODO: implement mutation logic for 'TicketValidator.validateTicket'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastValidatedTicketId = ticketId
  //   post: self.validationResult = result
  // After mutations, call validate*() on the affected TicketValidator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: validateTicket");
}

export async function markTicketExited(ticketId: string): Promise<boolean> {
  // TODO: implement mutation logic for 'TicketValidator.markTicketExited'.
  // Pre-conditions from spec:
  //   pre: ticketId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if self.validationResult@pre then
            result = true
          else
            result = false
          endif
  //   post: self.validationResult = false
  // After mutations, call validate*() on the affected TicketValidator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: markTicketExited");
}
