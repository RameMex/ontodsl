// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for ParkingGarageSystem. Runtime: string. Compile-time: branded. */
export type ParkingGarageSystemId = string & { readonly __brand: "ParkingGarageSystemId" };
/** Identity type for GarageOwner. Runtime: string. Compile-time: branded. */
export type GarageOwnerId = string & { readonly __brand: "GarageOwnerId" };
/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for MunicipalAuthority. Runtime: string. Compile-time: branded. */
export type MunicipalAuthorityId = string & { readonly __brand: "MunicipalAuthorityId" };
/** Identity type for ParkingVendor. Runtime: string. Compile-time: branded. */
export type ParkingVendorId = string & { readonly __brand: "ParkingVendorId" };
/** Identity type for Ticket. Runtime: string. Compile-time: branded. */
export type TicketId = string & { readonly __brand: "TicketId" };
/** Identity type for EntryEvent. Runtime: string. Compile-time: branded. */
export type EntryEventId = string & { readonly __brand: "EntryEventId" };
/** Identity type for ExitEvent. Runtime: string. Compile-time: branded. */
export type ExitEventId = string & { readonly __brand: "ExitEventId" };
/** Identity type for OccupancyCounter. Runtime: string. Compile-time: branded. */
export type OccupancyCounterId = string & { readonly __brand: "OccupancyCounterId" };
/** Identity type for CapacityRespectedGoal. Runtime: string. Compile-time: branded. */
export type CapacityRespectedGoalId = string & { readonly __brand: "CapacityRespectedGoalId" };
/** Identity type for TicketUniquenessGoal. Runtime: string. Compile-time: branded. */
export type TicketUniquenessGoalId = string & { readonly __brand: "TicketUniquenessGoalId" };
/** Identity type for ExitGatingGoal. Runtime: string. Compile-time: branded. */
export type ExitGatingGoalId = string & { readonly __brand: "ExitGatingGoalId" };
/** Identity type for OccupancyAccuracyGoal. Runtime: string. Compile-time: branded. */
export type OccupancyAccuracyGoalId = string & { readonly __brand: "OccupancyAccuracyGoalId" };
/** Identity type for EntryFlow. Runtime: string. Compile-time: branded. */
export type EntryFlowId = string & { readonly __brand: "EntryFlowId" };
/** Identity type for ExitFlow. Runtime: string. Compile-time: branded. */
export type ExitFlowId = string & { readonly __brand: "ExitFlowId" };
/** Identity type for RejectedExitFlow. Runtime: string. Compile-time: branded. */
export type RejectedExitFlowId = string & { readonly __brand: "RejectedExitFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface ParkingGarageSystem extends CapacityConstraints, TicketIntegrityConstraints {
  readonly systemId: ParkingGarageSystemId;
  readonly certifiedCapacity: number;
  readonly currentOccupancy: number;
  readonly ticketCount: number;
  readonly entryGateOpen: boolean;
  readonly exitGateOpen: boolean;
  readonly isFull: boolean;
}

/** @stereotype <<Agent>> */
export interface GarageOwner {
  readonly ownerId: GarageOwnerId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface MunicipalAuthority {
  readonly authorityId: MunicipalAuthorityId;
  readonly jurisdictionCode: string;
}

/** @stereotype <<Agent>> */
export interface ParkingVendor {
  readonly vendorId: ParkingVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Ticket {
  readonly ticketId: TicketId;
  readonly issuedAtEntry: string;
  readonly consumedAtExit: string;
  readonly isPaid: boolean;
  readonly isUsed: boolean;
}

/** @stereotype <<Kind>> */
export interface EntryEvent {
  readonly eventId: EntryEventId;
  readonly timestamp: string;
  readonly vehicleId: string;
  readonly issuedTicket: Ticket;
}

/** @stereotype <<Kind>> */
export interface ExitEvent {
  readonly eventId: ExitEventId;
  readonly timestamp: string;
  readonly vehicleId: string;
  readonly consumedTicket: Ticket;
}

/** @stereotype <<Kind>> */
export interface OccupancyCounter {
  readonly counterId: OccupancyCounterId;
  readonly currentOccupancy: number;
  readonly maxCapacity: number;
}

/** @stereotype <<Commitment>> */
export interface CapacityRespectedGoal {
  readonly commitmentId: CapacityRespectedGoalId;
}

/** @stereotype <<Commitment>> */
export interface TicketUniquenessGoal {
  readonly commitmentId: TicketUniquenessGoalId;
}

/** @stereotype <<Commitment>> */
export interface ExitGatingGoal {
  readonly commitmentId: ExitGatingGoalId;
}

/** @stereotype <<Commitment>> */
export interface OccupancyAccuracyGoal {
  readonly commitmentId: OccupancyAccuracyGoalId;
}

/** @stereotype <<Category>> */
export interface CapacityConstraints {
}

/** @stereotype <<Category>> */
export interface TicketIntegrityConstraints {
}

/** @stereotype <<Happening>> */
export interface EntryFlow {
  readonly flowId: EntryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ExitFlow {
  readonly flowId: ExitFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface RejectedExitFlow {
  readonly flowId: RejectedExitFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeParkingGarageSystem(data: {
  systemId: string;
  certifiedCapacity: number;
  currentOccupancy: number;
  ticketCount: number;
  entryGateOpen: boolean;
  exitGateOpen: boolean;
  isFull: boolean;
}): ParkingGarageSystem {
  return {
    systemId: data.systemId as ParkingGarageSystemId,
    certifiedCapacity: data.certifiedCapacity,
    currentOccupancy: data.currentOccupancy,
    ticketCount: data.ticketCount,
    entryGateOpen: data.entryGateOpen,
    exitGateOpen: data.exitGateOpen,
    isFull: data.isFull,
  };
}

export function makeGarageOwner(data: {
  ownerId: string;
  name: string;
}): GarageOwner {
  return {
    ownerId: data.ownerId as GarageOwnerId,
    name: data.name,
  };
}

export function makeDriver(data: {
  driverId: string;
  name: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    name: data.name,
  };
}

export function makeMunicipalAuthority(data: {
  authorityId: string;
  jurisdictionCode: string;
}): MunicipalAuthority {
  return {
    authorityId: data.authorityId as MunicipalAuthorityId,
    jurisdictionCode: data.jurisdictionCode,
  };
}

export function makeParkingVendor(data: {
  vendorId: string;
  name: string;
}): ParkingVendor {
  return {
    vendorId: data.vendorId as ParkingVendorId,
    name: data.name,
  };
}

export function makeTicket(data: {
  ticketId: string;
  issuedAtEntry: string;
  consumedAtExit: string;
  isPaid: boolean;
  isUsed: boolean;
}): Ticket {
  return {
    ticketId: data.ticketId as TicketId,
    issuedAtEntry: data.issuedAtEntry,
    consumedAtExit: data.consumedAtExit,
    isPaid: data.isPaid,
    isUsed: data.isUsed,
  };
}

export function makeEntryEvent(data: {
  eventId: string;
  timestamp: string;
  vehicleId: string;
  issuedTicket: Ticket;
}): EntryEvent {
  return {
    eventId: data.eventId as EntryEventId,
    timestamp: data.timestamp,
    vehicleId: data.vehicleId,
    issuedTicket: data.issuedTicket,
  };
}

export function makeExitEvent(data: {
  eventId: string;
  timestamp: string;
  vehicleId: string;
  consumedTicket: Ticket;
}): ExitEvent {
  return {
    eventId: data.eventId as ExitEventId,
    timestamp: data.timestamp,
    vehicleId: data.vehicleId,
    consumedTicket: data.consumedTicket,
  };
}

export function makeOccupancyCounter(data: {
  counterId: string;
  currentOccupancy: number;
  maxCapacity: number;
}): OccupancyCounter {
  return {
    counterId: data.counterId as OccupancyCounterId,
    currentOccupancy: data.currentOccupancy,
    maxCapacity: data.maxCapacity,
  };
}

export function makeCapacityRespectedGoal(data: {
  commitmentId: string;
}): CapacityRespectedGoal {
  return {
    commitmentId: data.commitmentId as CapacityRespectedGoalId,
  };
}

export function makeTicketUniquenessGoal(data: {
  commitmentId: string;
}): TicketUniquenessGoal {
  return {
    commitmentId: data.commitmentId as TicketUniquenessGoalId,
  };
}

export function makeExitGatingGoal(data: {
  commitmentId: string;
}): ExitGatingGoal {
  return {
    commitmentId: data.commitmentId as ExitGatingGoalId,
  };
}

export function makeOccupancyAccuracyGoal(data: {
  commitmentId: string;
}): OccupancyAccuracyGoal {
  return {
    commitmentId: data.commitmentId as OccupancyAccuracyGoalId,
  };
}

export function makeEntryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): EntryFlow {
  return {
    flowId: data.flowId as EntryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeExitFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ExitFlow {
  return {
    flowId: data.flowId as ExitFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeRejectedExitFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): RejectedExitFlow {
  return {
    flowId: data.flowId as RejectedExitFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for ParkingGarageSystem. Returns empty array when valid. */
export function validateParkingGarageSystem(instance: ParkingGarageSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.certifiedCapacity > 0))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.certifiedCapacity > 0");
  }
  if (!((instance.currentOccupancy >= 0))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.currentOccupancy >= 0");
  }
  if (!((instance.currentOccupancy <= instance.certifiedCapacity))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.currentOccupancy <= self.certifiedCapacity");
  }
  if (!((instance.isFull === (instance.currentOccupancy === instance.certifiedCapacity)))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.isFull = (self.currentOccupancy = self.certifiedCapacity)");
  }
  if (!((!(instance.entryGateOpen) || (instance.currentOccupancy < instance.certifiedCapacity)))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.entryGateOpen implies self.currentOccupancy < self.certifiedCapacity");
  }
  if (!((!(instance.exitGateOpen) || (instance.currentOccupancy > 0)))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.exitGateOpen implies (self.currentOccupancy > 0)");
  }
  if (!((instance.ticketCount >= 0))) {
    violations.push("[ParkingGarageSystem] invariant violated: self.ticketCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for GarageOwner. Returns empty array when valid. */
export function validateGarageOwner(instance: GarageOwner): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ownerId !== null))) {
    violations.push("[GarageOwner] invariant violated: self.ownerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[GarageOwner] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Driver] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for MunicipalAuthority. Returns empty array when valid. */
export function validateMunicipalAuthority(instance: MunicipalAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[MunicipalAuthority] invariant violated: self.authorityId <> null");
  }
  if (!((instance.jurisdictionCode !== null))) {
    violations.push("[MunicipalAuthority] invariant violated: self.jurisdictionCode <> null");
  }
  return violations;
}

/** Runtime invariant check for ParkingVendor. Returns empty array when valid. */
export function validateParkingVendor(instance: ParkingVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ParkingVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[ParkingVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Ticket. Returns empty array when valid. */
export function validateTicket(instance: Ticket): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ticketId !== null))) {
    violations.push("[Ticket] invariant violated: self.ticketId <> null");
  }
  if (!((instance.issuedAtEntry !== null))) {
    violations.push("[Ticket] invariant violated: self.issuedAtEntry <> null");
  }
  if (!((!(instance.isUsed) || (instance.consumedAtExit !== null)))) {
    violations.push("[Ticket] invariant violated: self.isUsed implies self.consumedAtExit <> null");
  }
  return violations;
}

/** Runtime invariant check for EntryEvent. Returns empty array when valid. */
export function validateEntryEvent(instance: EntryEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eventId !== null))) {
    violations.push("[EntryEvent] invariant violated: self.eventId <> null");
  }
  if (!((instance.timestamp !== null))) {
    violations.push("[EntryEvent] invariant violated: self.timestamp <> null");
  }
  if (!((instance.issuedTicket !== null))) {
    violations.push("[EntryEvent] invariant violated: self.issuedTicket <> null");
  }
  return violations;
}

/** Runtime invariant check for ExitEvent. Returns empty array when valid. */
export function validateExitEvent(instance: ExitEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eventId !== null))) {
    violations.push("[ExitEvent] invariant violated: self.eventId <> null");
  }
  if (!((instance.timestamp !== null))) {
    violations.push("[ExitEvent] invariant violated: self.timestamp <> null");
  }
  if (!((instance.consumedTicket !== null))) {
    violations.push("[ExitEvent] invariant violated: self.consumedTicket <> null");
  }
  if (!((instance.consumedTicket?.isUsed === true))) {
    violations.push("[ExitEvent] invariant violated: self.consumedTicket.isUsed = true");
  }
  return violations;
}

/** Runtime invariant check for OccupancyCounter. Returns empty array when valid. */
export function validateOccupancyCounter(instance: OccupancyCounter): readonly string[] {
  const violations: string[] = [];
  if (!((instance.counterId !== null))) {
    violations.push("[OccupancyCounter] invariant violated: self.counterId <> null");
  }
  if (!((instance.currentOccupancy >= 0))) {
    violations.push("[OccupancyCounter] invariant violated: self.currentOccupancy >= 0");
  }
  if (!((instance.maxCapacity > 0))) {
    violations.push("[OccupancyCounter] invariant violated: self.maxCapacity > 0");
  }
  if (!((instance.currentOccupancy <= instance.maxCapacity))) {
    violations.push("[OccupancyCounter] invariant violated: self.currentOccupancy <= self.maxCapacity");
  }
  return violations;
}

/** Runtime invariant check for CapacityConstraints. Returns empty array when valid. */
export function validateCapacityConstraints(instance: CapacityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentOccupancy <= bearer.maxCapacity — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxCapacity > 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentOccupancy >= 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TicketIntegrityConstraints. Returns empty array when valid. */
export function validateTicketIntegrityConstraints(instance: TicketIntegrityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.isUsed implies bearer.consumedAtExit <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.issuedAtEntry <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EntryFlow. Returns empty array when valid. */
export function validateEntryFlow(instance: EntryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EntryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "vehicle detected at entry sensor"))) {
    violations.push("[EntryFlow] invariant violated: self.triggeredBy = 'vehicle detected at entry sensor'");
  }
  if (!((instance.outcome === "ticket issued, gate raised, occupancy incremented"))) {
    violations.push("[EntryFlow] invariant violated: self.outcome = 'ticket issued, gate raised, occupancy incremented'");
  }
  return violations;
}

/** Runtime invariant check for ExitFlow. Returns empty array when valid. */
export function validateExitFlow(instance: ExitFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ExitFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "ticket presented at exit gate"))) {
    violations.push("[ExitFlow] invariant violated: self.triggeredBy = 'ticket presented at exit gate'");
  }
  if (!((instance.outcome === "ticket validated, gate raised, occupancy decremented"))) {
    violations.push("[ExitFlow] invariant violated: self.outcome = 'ticket validated, gate raised, occupancy decremented'");
  }
  return violations;
}

/** Runtime invariant check for RejectedExitFlow. Returns empty array when valid. */
export function validateRejectedExitFlow(instance: RejectedExitFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RejectedExitFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "invalid or already-used ticket presented"))) {
    violations.push("[RejectedExitFlow] invariant violated: self.triggeredBy = 'invalid or already-used ticket presented'");
  }
  if (!((instance.outcome === "exit denied, attendant called"))) {
    violations.push("[RejectedExitFlow] invariant violated: self.outcome = 'exit denied, attendant called'");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for ParkingGarageSystem.enterGarage. User supplies this. */
export type ParkingGarageSystemEnterGarageImpl = (self: ParkingGarageSystem, vehicleId: string) => { self: ParkingGarageSystem; modified: { currentOccupancy: unknown; ticketCount: unknown; entryGateOpen: unknown; isFull: unknown } };

/** Contract-checking wrapper for ParkingGarageSystem.enterGarage. */
export function wrapParkingGarageSystemEnterGarage(impl: ParkingGarageSystemEnterGarageImpl): (self: ParkingGarageSystem, vehicleId: string) => ParkingGarageSystem {
  return (self, vehicleId) => {
    const preViolations: string[] = [];
    if (!((vehicleId !== null))) {
      preViolations.push("[ParkingGarageSystem.enterGarage] pre violated: vehicleId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, vehicleId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.currentOccupancy@pre < self.certifiedCapacity then
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
          endif — unbound variable 'result'
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

/** Impl signature for ParkingGarageSystem.enterGarage (async). User supplies this. */
export type ParkingGarageSystemEnterGarageAsyncImpl = (self: ParkingGarageSystem, vehicleId: string) => Promise<{ self: ParkingGarageSystem; modified: { currentOccupancy: unknown; ticketCount: unknown; entryGateOpen: unknown; isFull: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystem.enterGarage (async). */
export function wrapParkingGarageSystemEnterGarageAsync(impl: ParkingGarageSystemEnterGarageAsyncImpl): (self: ParkingGarageSystem, vehicleId: string) => Promise<ParkingGarageSystem> {
  return async (self, vehicleId) => {
    const preViolations: string[] = [];
    if (!((vehicleId !== null))) {
      preViolations.push("[ParkingGarageSystem.enterGarage] pre violated: vehicleId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentOccupancy": self.currentOccupancy,
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, vehicleId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.currentOccupancy@pre < self.certifiedCapacity then
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
          endif — unbound variable 'result'
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

/** Impl signature for ParkingGarageSystem.exitGarage. User supplies this. */
export type ParkingGarageSystemExitGarageImpl = (self: ParkingGarageSystem, ticketId: string) => { self: ParkingGarageSystem; modified: { currentOccupancy: unknown; exitGateOpen: unknown; ticketCount: unknown } };

/** Contract-checking wrapper for ParkingGarageSystem.exitGarage. */
export function wrapParkingGarageSystemExitGarage(impl: ParkingGarageSystemExitGarageImpl): (self: ParkingGarageSystem, ticketId: string) => ParkingGarageSystem {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.exitGarage] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 and self.currentOccupancy@pre > 0 then
            result = true
            and self.currentOccupancy = self.currentOccupancy@pre - 1
            and self.exitGateOpen = true
            and self.ticketCount = self.ticketCount@pre
          else
            result = false
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.exitGateOpen = false
            and self.ticketCount = self.ticketCount@pre
          endif — unbound variable 'result'
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

/** Impl signature for ParkingGarageSystem.exitGarage (async). User supplies this. */
export type ParkingGarageSystemExitGarageAsyncImpl = (self: ParkingGarageSystem, ticketId: string) => Promise<{ self: ParkingGarageSystem; modified: { currentOccupancy: unknown; exitGateOpen: unknown; ticketCount: unknown } }>;

/** Contract-checking wrapper for ParkingGarageSystem.exitGarage (async). */
export function wrapParkingGarageSystemExitGarageAsync(impl: ParkingGarageSystemExitGarageAsyncImpl): (self: ParkingGarageSystem, ticketId: string) => Promise<ParkingGarageSystem> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.exitGarage] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
      "self.currentOccupancy": self.currentOccupancy,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 and self.currentOccupancy@pre > 0 then
            result = true
            and self.currentOccupancy = self.currentOccupancy@pre - 1
            and self.exitGateOpen = true
            and self.ticketCount = self.ticketCount@pre
          else
            result = false
            and self.currentOccupancy = self.currentOccupancy@pre
            and self.exitGateOpen = false
            and self.ticketCount = self.ticketCount@pre
          endif — unbound variable 'result'
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

/** Impl signature for ParkingGarageSystem.payForTicket. User supplies this. */
export type ParkingGarageSystemPayForTicketImpl = (self: ParkingGarageSystem, ticketId: string) => { self: ParkingGarageSystem; modified: {} };

/** Contract-checking wrapper for ParkingGarageSystem.payForTicket. */
export function wrapParkingGarageSystemPayForTicket(impl: ParkingGarageSystemPayForTicketImpl): (self: ParkingGarageSystem, ticketId: string) => ParkingGarageSystem {
  return (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.payForTicket] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 then
            result = true
          else
            result = false
          endif — unbound variable 'result'
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

/** Impl signature for ParkingGarageSystem.payForTicket (async). User supplies this. */
export type ParkingGarageSystemPayForTicketAsyncImpl = (self: ParkingGarageSystem, ticketId: string) => Promise<{ self: ParkingGarageSystem; modified: {} }>;

/** Contract-checking wrapper for ParkingGarageSystem.payForTicket (async). */
export function wrapParkingGarageSystemPayForTicketAsync(impl: ParkingGarageSystemPayForTicketAsyncImpl): (self: ParkingGarageSystem, ticketId: string) => Promise<ParkingGarageSystem> {
  return async (self, ticketId) => {
    const preViolations: string[] = [];
    if (!((ticketId !== null))) {
      preViolations.push("[ParkingGarageSystem.payForTicket] pre violated: ticketId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.ticketCount": self.ticketCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ticketId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if self.ticketCount@pre > 0 then
            result = true
          else
            result = false
          endif — unbound variable 'result'
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

/** Lifecycle registry for CapacityRespectedGoal commitments. */
export class CapacityRespectedGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CapacityRespectedGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CapacityRespectedGoal — the typed wrapper guarantees that since
    // `register` only accepts CapacityRespectedGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CapacityRespectedGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CapacityRespectedGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CapacityRespectedGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CapacityRespectedGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CapacityRespectedGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CapacityRespectedGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for TicketUniquenessGoal commitments. */
export class TicketUniquenessGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<TicketUniquenessGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a TicketUniquenessGoal — the typed wrapper guarantees that since
    // `register` only accepts TicketUniquenessGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: TicketUniquenessGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: TicketUniquenessGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: TicketUniquenessGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: TicketUniquenessGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<TicketUniquenessGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<TicketUniquenessGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ExitGatingGoal commitments. */
export class ExitGatingGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExitGatingGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExitGatingGoal — the typed wrapper guarantees that since
    // `register` only accepts ExitGatingGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExitGatingGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExitGatingGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExitGatingGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExitGatingGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExitGatingGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExitGatingGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for OccupancyAccuracyGoal commitments. */
export class OccupancyAccuracyGoalRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<OccupancyAccuracyGoal>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a OccupancyAccuracyGoal — the typed wrapper guarantees that since
    // `register` only accepts OccupancyAccuracyGoal instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: OccupancyAccuracyGoal): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: OccupancyAccuracyGoalId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: OccupancyAccuracyGoalId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: OccupancyAccuracyGoalId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<OccupancyAccuracyGoal>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<OccupancyAccuracyGoal>[];
  }

  size(): number {
    return this.inner.size();
  }
}

