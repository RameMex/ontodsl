// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for RideDispatchSystem. Runtime: string. Compile-time: branded. */
export type RideDispatchSystemId = string & { readonly __brand: "RideDispatchSystemId" };
/** Identity type for RideAssignmentResult. Runtime: string. Compile-time: branded. */
export type RideAssignmentResultId = string & { readonly __brand: "RideAssignmentResultId" };
/** Identity type for Passenger. Runtime: string. Compile-time: branded. */
export type PassengerId = string & { readonly __brand: "PassengerId" };
/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for RideVendor. Runtime: string. Compile-time: branded. */
export type RideVendorId = string & { readonly __brand: "RideVendorId" };
/** Identity type for RideRequest. Runtime: string. Compile-time: branded. */
export type RideRequestId = string & { readonly __brand: "RideRequestId" };
/** Identity type for Assignment. Runtime: string. Compile-time: branded. */
export type AssignmentId = string & { readonly __brand: "AssignmentId" };
/** Identity type for ExactlyOneDriverPerRide. Runtime: string. Compile-time: branded. */
export type ExactlyOneDriverPerRideId = string & { readonly __brand: "ExactlyOneDriverPerRideId" };
/** Identity type for ValidStateTransitions. Runtime: string. Compile-time: branded. */
export type ValidStateTransitionsId = string & { readonly __brand: "ValidStateTransitionsId" };
/** Identity type for BoundedAssignmentLatency. Runtime: string. Compile-time: branded. */
export type BoundedAssignmentLatencyId = string & { readonly __brand: "BoundedAssignmentLatencyId" };
/** Identity type for DriverMutualExclusion. Runtime: string. Compile-time: branded. */
export type DriverMutualExclusionId = string & { readonly __brand: "DriverMutualExclusionId" };
/** Identity type for RideAssignmentFlow. Runtime: string. Compile-time: branded. */
export type RideAssignmentFlowId = string & { readonly __brand: "RideAssignmentFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface RideDispatchSystem extends StateMachineConstraint, MutualExclusionConstraint {
  readonly systemId: RideDispatchSystemId;
  readonly assignmentsPerRide: number;
  readonly driverStateTransitionValid: boolean;
  readonly maxAssignmentLatencySec: number;
  readonly driverMutualExclusionHolds: boolean;
  readonly activeRides: number;
  readonly idleDrivers: number;
  readonly assignedDrivers: number;
  readonly enRouteDrivers: number;
  readonly completedRides: number;
  readonly offersMade: number;
  readonly offersAccepted: number;
  readonly offersExpired: number;
  readonly maxLatencyBudget: number;
}

/** @stereotype <<Kind>> */
export interface RideAssignmentResult {
  readonly resultId: RideAssignmentResultId;
  readonly isSuccess: boolean;
  readonly assignedDriverId: string;
  readonly rideRequestId: string;
  readonly assignmentIdentifier: string;
}

/** @stereotype <<Agent>> */
export interface Passenger {
  readonly passengerId: PassengerId;
}

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly currentLatitude: number;
  readonly currentLongitude: number;
  readonly state: string;
}

/** @stereotype <<Agent>> */
export interface RideVendor {
  readonly vendorId: RideVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface RideRequest {
  readonly requestId: RideRequestId;
  readonly pickupLatitude: number;
  readonly pickupLongitude: number;
  readonly destinationLatitude: number;
  readonly destinationLongitude: number;
  readonly preferences: string;
}

/** @stereotype <<Kind>> */
export interface Assignment {
  readonly assignmentId: AssignmentId;
  readonly driverId: string;
  readonly requestId: string;
  readonly timestamp: number;
}

/** @stereotype <<Commitment>> */
export interface ExactlyOneDriverPerRide {
  readonly commitmentId: ExactlyOneDriverPerRideId;
  readonly assignmentsPerRide: number;
}

/** @stereotype <<Commitment>> */
export interface ValidStateTransitions {
  readonly commitmentId: ValidStateTransitionsId;
  readonly driverStateTransitionValid: boolean;
}

/** @stereotype <<Commitment>> */
export interface BoundedAssignmentLatency {
  readonly commitmentId: BoundedAssignmentLatencyId;
  readonly maxAssignmentLatencySec: number;
}

/** @stereotype <<Commitment>> */
export interface DriverMutualExclusion {
  readonly commitmentId: DriverMutualExclusionId;
  readonly driverMutualExclusionHolds: boolean;
}

/** @stereotype <<Category>> */
export interface StateMachineConstraint {
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraint {
}

/** @stereotype <<Happening>> */
export interface RideAssignmentFlow {
  readonly flowId: RideAssignmentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeRideDispatchSystem(data: {
  systemId: string;
  assignmentsPerRide: number;
  driverStateTransitionValid: boolean;
  maxAssignmentLatencySec: number;
  driverMutualExclusionHolds: boolean;
  activeRides: number;
  idleDrivers: number;
  assignedDrivers: number;
  enRouteDrivers: number;
  completedRides: number;
  offersMade: number;
  offersAccepted: number;
  offersExpired: number;
  maxLatencyBudget: number;
}): RideDispatchSystem {
  return {
    systemId: data.systemId as RideDispatchSystemId,
    assignmentsPerRide: data.assignmentsPerRide,
    driverStateTransitionValid: data.driverStateTransitionValid,
    maxAssignmentLatencySec: data.maxAssignmentLatencySec,
    driverMutualExclusionHolds: data.driverMutualExclusionHolds,
    activeRides: data.activeRides,
    idleDrivers: data.idleDrivers,
    assignedDrivers: data.assignedDrivers,
    enRouteDrivers: data.enRouteDrivers,
    completedRides: data.completedRides,
    offersMade: data.offersMade,
    offersAccepted: data.offersAccepted,
    offersExpired: data.offersExpired,
    maxLatencyBudget: data.maxLatencyBudget,
  };
}

export function makeRideAssignmentResult(data: {
  resultId: string;
  isSuccess: boolean;
  assignedDriverId: string;
  rideRequestId: string;
  assignmentIdentifier: string;
}): RideAssignmentResult {
  return {
    resultId: data.resultId as RideAssignmentResultId,
    isSuccess: data.isSuccess,
    assignedDriverId: data.assignedDriverId,
    rideRequestId: data.rideRequestId,
    assignmentIdentifier: data.assignmentIdentifier,
  };
}

export function makePassenger(data: {
  passengerId: string;
}): Passenger {
  return {
    passengerId: data.passengerId as PassengerId,
  };
}

export function makeDriver(data: {
  driverId: string;
  currentLatitude: number;
  currentLongitude: number;
  state: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    currentLatitude: data.currentLatitude,
    currentLongitude: data.currentLongitude,
    state: data.state,
  };
}

export function makeRideVendor(data: {
  vendorId: string;
  name: string;
}): RideVendor {
  return {
    vendorId: data.vendorId as RideVendorId,
    name: data.name,
  };
}

export function makeRideRequest(data: {
  requestId: string;
  pickupLatitude: number;
  pickupLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
  preferences: string;
}): RideRequest {
  return {
    requestId: data.requestId as RideRequestId,
    pickupLatitude: data.pickupLatitude,
    pickupLongitude: data.pickupLongitude,
    destinationLatitude: data.destinationLatitude,
    destinationLongitude: data.destinationLongitude,
    preferences: data.preferences,
  };
}

export function makeAssignment(data: {
  assignmentId: string;
  driverId: string;
  requestId: string;
  timestamp: number;
}): Assignment {
  return {
    assignmentId: data.assignmentId as AssignmentId,
    driverId: data.driverId,
    requestId: data.requestId,
    timestamp: data.timestamp,
  };
}

export function makeExactlyOneDriverPerRide(data: {
  commitmentId: string;
  assignmentsPerRide: number;
}): ExactlyOneDriverPerRide {
  return {
    commitmentId: data.commitmentId as ExactlyOneDriverPerRideId,
    assignmentsPerRide: data.assignmentsPerRide,
  };
}

export function makeValidStateTransitions(data: {
  commitmentId: string;
  driverStateTransitionValid: boolean;
}): ValidStateTransitions {
  return {
    commitmentId: data.commitmentId as ValidStateTransitionsId,
    driverStateTransitionValid: data.driverStateTransitionValid,
  };
}

export function makeBoundedAssignmentLatency(data: {
  commitmentId: string;
  maxAssignmentLatencySec: number;
}): BoundedAssignmentLatency {
  return {
    commitmentId: data.commitmentId as BoundedAssignmentLatencyId,
    maxAssignmentLatencySec: data.maxAssignmentLatencySec,
  };
}

export function makeDriverMutualExclusion(data: {
  commitmentId: string;
  driverMutualExclusionHolds: boolean;
}): DriverMutualExclusion {
  return {
    commitmentId: data.commitmentId as DriverMutualExclusionId,
    driverMutualExclusionHolds: data.driverMutualExclusionHolds,
  };
}

export function makeRideAssignmentFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): RideAssignmentFlow {
  return {
    flowId: data.flowId as RideAssignmentFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for RideDispatchSystem. Returns empty array when valid. */
export function validateRideDispatchSystem(instance: RideDispatchSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[RideDispatchSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.activeRides >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.activeRides >= 0");
  }
  if (!((instance.idleDrivers >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.idleDrivers >= 0");
  }
  if (!((instance.assignedDrivers >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.assignedDrivers >= 0");
  }
  if (!((instance.enRouteDrivers >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.enRouteDrivers >= 0");
  }
  if (!((instance.completedRides >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.completedRides >= 0");
  }
  if (!((instance.offersMade >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.offersMade >= 0");
  }
  if (!((instance.offersAccepted >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.offersAccepted >= 0");
  }
  if (!((instance.offersExpired >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.offersExpired >= 0");
  }
  if (!((instance.maxLatencyBudget <= 30))) {
    violations.push("[RideDispatchSystem] invariant violated: self.maxLatencyBudget <= 30.0");
  }
  if (!((instance.maxAssignmentLatencySec >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.maxAssignmentLatencySec >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for RideAssignmentResult. Returns empty array when valid. */
export function validateRideAssignmentResult(instance: RideAssignmentResult): readonly string[] {
  const violations: string[] = [];
  if (!((instance.resultId !== null))) {
    violations.push("[RideAssignmentResult] invariant violated: self.resultId <> null");
  }
  if (!(((instance.isSuccess === true) || (instance.isSuccess === false)))) {
    violations.push("[RideAssignmentResult] invariant violated: self.isSuccess = true or self.isSuccess = false");
  }
  return violations;
}

/** Runtime invariant check for Passenger. Returns empty array when valid. */
export function validatePassenger(instance: Passenger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.passengerId !== null))) {
    violations.push("[Passenger] invariant violated: self.passengerId <> null");
  }
  return violations;
}

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  if (!(((((instance.state === "idle") || (instance.state === "assigned")) || (instance.state === "en_route")) || (instance.state === "completed")))) {
    violations.push("[Driver] invariant violated: self.state = 'idle' or self.state = 'assigned' or self.state = 'en_route' or self.state = 'completed'");
  }
  return violations;
}

/** Runtime invariant check for RideVendor. Returns empty array when valid. */
export function validateRideVendor(instance: RideVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[RideVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for RideRequest. Returns empty array when valid. */
export function validateRideRequest(instance: RideRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[RideRequest] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for Assignment. Returns empty array when valid. */
export function validateAssignment(instance: Assignment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assignmentId !== null))) {
    violations.push("[Assignment] invariant violated: self.assignmentId <> null");
  }
  return violations;
}

/** Runtime invariant check for StateMachineConstraint. Returns empty array when valid. */
export function validateStateMachineConstraint(instance: StateMachineConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[StateMachineConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MutualExclusionConstraint. Returns empty array when valid. */
export function validateMutualExclusionConstraint(instance: MutualExclusionConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MutualExclusionConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for RideAssignmentFlow. Returns empty array when valid. */
export function validateRideAssignmentFlow(instance: RideAssignmentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RideAssignmentFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for RideDispatchSystem.assignDriver. User supplies this. */
export type RideDispatchSystemAssignDriverImpl = (self: RideDispatchSystem, requestId: string, driverId: string) => { self: RideDispatchSystem; modified: { assignmentsPerRide: unknown; assignedDrivers: unknown; idleDrivers: unknown; activeRides: unknown; offersAccepted: unknown; driverMutualExclusionHolds: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.assignDriver. */
export function wrapRideDispatchSystemAssignDriver(impl: RideDispatchSystemAssignDriverImpl): (self: RideDispatchSystem, requestId: string, driverId: string) => RideDispatchSystem {
  return (self, requestId, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: requestId <> null");
    }
    if (!((self.assignmentsPerRide === 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.assignmentsPerRide = 0");
    }
    if (!((self.idleDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.idleDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.idleDrivers": self.idleDrivers,
      "self.activeRides": self.activeRides,
      "self.offersAccepted": self.offersAccepted,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignmentsPerRide === 1))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignmentsPerRide = 1");
      }
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignedDrivers = self.assignedDrivers@pre + 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.idleDrivers = self.idleDrivers@pre - 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.activeRides = self.activeRides@pre + 1");
      }
      if (!((__result.self.offersAccepted === (__pre["self.offersAccepted"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.offersAccepted = self.offersAccepted@pre + 1");
      }
      if (!((__result.self.driverMutualExclusionHolds === true))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.driverMutualExclusionHolds = true");
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

/** Impl signature for RideDispatchSystem.assignDriver (async). User supplies this. */
export type RideDispatchSystemAssignDriverAsyncImpl = (self: RideDispatchSystem, requestId: string, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { assignmentsPerRide: unknown; assignedDrivers: unknown; idleDrivers: unknown; activeRides: unknown; offersAccepted: unknown; driverMutualExclusionHolds: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.assignDriver (async). */
export function wrapRideDispatchSystemAssignDriverAsync(impl: RideDispatchSystemAssignDriverAsyncImpl): (self: RideDispatchSystem, requestId: string, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, requestId, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: requestId <> null");
    }
    if (!((self.assignmentsPerRide === 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.assignmentsPerRide = 0");
    }
    if (!((self.idleDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.idleDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.idleDrivers": self.idleDrivers,
      "self.activeRides": self.activeRides,
      "self.offersAccepted": self.offersAccepted,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignmentsPerRide === 1))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignmentsPerRide = 1");
      }
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignedDrivers = self.assignedDrivers@pre + 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.idleDrivers = self.idleDrivers@pre - 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.activeRides = self.activeRides@pre + 1");
      }
      if (!((__result.self.offersAccepted === (__pre["self.offersAccepted"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.offersAccepted = self.offersAccepted@pre + 1");
      }
      if (!((__result.self.driverMutualExclusionHolds === true))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.driverMutualExclusionHolds = true");
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

/** Impl signature for RideDispatchSystem.driverEnRoute. User supplies this. */
export type RideDispatchSystemDriverEnRouteImpl = (self: RideDispatchSystem, driverId: string) => { self: RideDispatchSystem; modified: { assignedDrivers: unknown; enRouteDrivers: unknown; driverStateTransitionValid: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.driverEnRoute. */
export function wrapRideDispatchSystemDriverEnRoute(impl: RideDispatchSystemDriverEnRouteImpl): (self: RideDispatchSystem, driverId: string) => RideDispatchSystem {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: driverId <> null");
    }
    if (!((self.assignedDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: self.assignedDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.enRouteDrivers": self.enRouteDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.assignedDrivers = self.assignedDrivers@pre - 1");
      }
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.enRouteDrivers = self.enRouteDrivers@pre + 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.driverStateTransitionValid = true");
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

/** Impl signature for RideDispatchSystem.driverEnRoute (async). User supplies this. */
export type RideDispatchSystemDriverEnRouteAsyncImpl = (self: RideDispatchSystem, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { assignedDrivers: unknown; enRouteDrivers: unknown; driverStateTransitionValid: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.driverEnRoute (async). */
export function wrapRideDispatchSystemDriverEnRouteAsync(impl: RideDispatchSystemDriverEnRouteAsyncImpl): (self: RideDispatchSystem, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: driverId <> null");
    }
    if (!((self.assignedDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: self.assignedDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.enRouteDrivers": self.enRouteDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.assignedDrivers = self.assignedDrivers@pre - 1");
      }
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.enRouteDrivers = self.enRouteDrivers@pre + 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.driverStateTransitionValid = true");
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

/** Impl signature for RideDispatchSystem.completeRide. User supplies this. */
export type RideDispatchSystemCompleteRideImpl = (self: RideDispatchSystem, driverId: string) => { self: RideDispatchSystem; modified: { enRouteDrivers: unknown; completedRides: unknown; activeRides: unknown; driverStateTransitionValid: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.completeRide. */
export function wrapRideDispatchSystemCompleteRide(impl: RideDispatchSystemCompleteRideImpl): (self: RideDispatchSystem, driverId: string) => RideDispatchSystem {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: driverId <> null");
    }
    if (!((self.enRouteDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: self.enRouteDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.enRouteDrivers": self.enRouteDrivers,
      "self.completedRides": self.completedRides,
      "self.activeRides": self.activeRides,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.enRouteDrivers = self.enRouteDrivers@pre - 1");
      }
      if (!((__result.self.completedRides === (__pre["self.completedRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.completedRides = self.completedRides@pre + 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.activeRides = self.activeRides@pre - 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.driverStateTransitionValid = true");
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

/** Impl signature for RideDispatchSystem.completeRide (async). User supplies this. */
export type RideDispatchSystemCompleteRideAsyncImpl = (self: RideDispatchSystem, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { enRouteDrivers: unknown; completedRides: unknown; activeRides: unknown; driverStateTransitionValid: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.completeRide (async). */
export function wrapRideDispatchSystemCompleteRideAsync(impl: RideDispatchSystemCompleteRideAsyncImpl): (self: RideDispatchSystem, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: driverId <> null");
    }
    if (!((self.enRouteDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: self.enRouteDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.enRouteDrivers": self.enRouteDrivers,
      "self.completedRides": self.completedRides,
      "self.activeRides": self.activeRides,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.enRouteDrivers = self.enRouteDrivers@pre - 1");
      }
      if (!((__result.self.completedRides === (__pre["self.completedRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.completedRides = self.completedRides@pre + 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.activeRides = self.activeRides@pre - 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.driverStateTransitionValid = true");
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

/** Impl signature for RideDispatchSystem.attemptFirstOffer. User supplies this. */
export type RideDispatchSystemAttemptFirstOfferImpl = (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => { self: RideDispatchSystem; modified: { offersMade: unknown; maxAssignmentLatencySec: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.attemptFirstOffer. */
export function wrapRideDispatchSystemAttemptFirstOffer(impl: RideDispatchSystemAttemptFirstOfferImpl): (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => RideDispatchSystem {
  return (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest >= 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest >= 0.0");
    }
    if (!((timeSinceRequest <= 30))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest <= 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: requestId <> null");
    }
    if (!((self.offersMade === 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: self.offersMade = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersMade": self.offersMade,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeSinceRequest, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersMade === (__pre["self.offersMade"] + 1)))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.offersMade = self.offersMade@pre + 1");
      }
      if (!((__result.self.maxAssignmentLatencySec === timeSinceRequest))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.maxAssignmentLatencySec = timeSinceRequest");
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

/** Impl signature for RideDispatchSystem.attemptFirstOffer (async). User supplies this. */
export type RideDispatchSystemAttemptFirstOfferAsyncImpl = (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => Promise<{ self: RideDispatchSystem; modified: { offersMade: unknown; maxAssignmentLatencySec: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.attemptFirstOffer (async). */
export function wrapRideDispatchSystemAttemptFirstOfferAsync(impl: RideDispatchSystemAttemptFirstOfferAsyncImpl): (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => Promise<RideDispatchSystem> {
  return async (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest >= 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest >= 0.0");
    }
    if (!((timeSinceRequest <= 30))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest <= 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: requestId <> null");
    }
    if (!((self.offersMade === 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: self.offersMade = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersMade": self.offersMade,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeSinceRequest, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersMade === (__pre["self.offersMade"] + 1)))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.offersMade = self.offersMade@pre + 1");
      }
      if (!((__result.self.maxAssignmentLatencySec === timeSinceRequest))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.maxAssignmentLatencySec = timeSinceRequest");
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

/** Impl signature for RideDispatchSystem.expireOffer. User supplies this. */
export type RideDispatchSystemExpireOfferImpl = (self: RideDispatchSystem, driverId: string, requestId: string) => { self: RideDispatchSystem; modified: {} };

/** Contract-checking wrapper for RideDispatchSystem.expireOffer. */
export function wrapRideDispatchSystemExpireOffer(impl: RideDispatchSystemExpireOfferImpl): (self: RideDispatchSystem, driverId: string, requestId: string) => RideDispatchSystem {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersExpired": self.offersExpired,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersExpired === (__pre["self.offersExpired"] + 1)))) {
        postViolations.push("[RideDispatchSystem.expireOffer] post violated: self.offersExpired = self.offersExpired@pre + 1");
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

/** Impl signature for RideDispatchSystem.expireOffer (async). User supplies this. */
export type RideDispatchSystemExpireOfferAsyncImpl = (self: RideDispatchSystem, driverId: string, requestId: string) => Promise<{ self: RideDispatchSystem; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystem.expireOffer (async). */
export function wrapRideDispatchSystemExpireOfferAsync(impl: RideDispatchSystemExpireOfferAsyncImpl): (self: RideDispatchSystem, driverId: string, requestId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersExpired": self.offersExpired,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersExpired === (__pre["self.offersExpired"] + 1)))) {
        postViolations.push("[RideDispatchSystem.expireOffer] post violated: self.offersExpired = self.offersExpired@pre + 1");
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

/** Impl signature for RideDispatchSystem.escalateRadius. User supplies this. */
export type RideDispatchSystemEscalateRadiusImpl = (self: RideDispatchSystem, timeSinceRequest: number) => { self: RideDispatchSystem; modified: {} };

/** Contract-checking wrapper for RideDispatchSystem.escalateRadius. */
export function wrapRideDispatchSystemEscalateRadius(impl: RideDispatchSystemEscalateRadiusImpl): (self: RideDispatchSystem, timeSinceRequest: number) => RideDispatchSystem {
  return (self, timeSinceRequest) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest > 30.0");
    }
    if (!((timeSinceRequest <= 60))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest <= 60.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeSinceRequest);
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

/** Impl signature for RideDispatchSystem.escalateRadius (async). User supplies this. */
export type RideDispatchSystemEscalateRadiusAsyncImpl = (self: RideDispatchSystem, timeSinceRequest: number) => Promise<{ self: RideDispatchSystem; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystem.escalateRadius (async). */
export function wrapRideDispatchSystemEscalateRadiusAsync(impl: RideDispatchSystemEscalateRadiusAsyncImpl): (self: RideDispatchSystem, timeSinceRequest: number) => Promise<RideDispatchSystem> {
  return async (self, timeSinceRequest) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest > 30.0");
    }
    if (!((timeSinceRequest <= 60))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest <= 60.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeSinceRequest);
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

/** Impl signature for RideDispatchSystem.returnToIdle. User supplies this. */
export type RideDispatchSystemReturnToIdleImpl = (self: RideDispatchSystem, driverId: string) => { self: RideDispatchSystem; modified: { completedRides: unknown; idleDrivers: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.returnToIdle. */
export function wrapRideDispatchSystemReturnToIdle(impl: RideDispatchSystemReturnToIdleImpl): (self: RideDispatchSystem, driverId: string) => RideDispatchSystem {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: driverId <> null");
    }
    if (!((self.completedRides > 0))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: self.completedRides > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedRides": self.completedRides,
      "self.idleDrivers": self.idleDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.completedRides === (__pre["self.completedRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.completedRides = self.completedRides@pre - 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.idleDrivers = self.idleDrivers@pre + 1");
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

/** Impl signature for RideDispatchSystem.returnToIdle (async). User supplies this. */
export type RideDispatchSystemReturnToIdleAsyncImpl = (self: RideDispatchSystem, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { completedRides: unknown; idleDrivers: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.returnToIdle (async). */
export function wrapRideDispatchSystemReturnToIdleAsync(impl: RideDispatchSystemReturnToIdleAsyncImpl): (self: RideDispatchSystem, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: driverId <> null");
    }
    if (!((self.completedRides > 0))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: self.completedRides > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedRides": self.completedRides,
      "self.idleDrivers": self.idleDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.completedRides === (__pre["self.completedRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.completedRides = self.completedRides@pre - 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.idleDrivers = self.idleDrivers@pre + 1");
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

/** Lifecycle registry for ExactlyOneDriverPerRide commitments. */
export class ExactlyOneDriverPerRideRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExactlyOneDriverPerRide>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExactlyOneDriverPerRide — the typed wrapper guarantees that since
    // `register` only accepts ExactlyOneDriverPerRide instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExactlyOneDriverPerRide): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExactlyOneDriverPerRideId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExactlyOneDriverPerRideId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExactlyOneDriverPerRideId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExactlyOneDriverPerRide>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExactlyOneDriverPerRide>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ValidStateTransitions commitments. */
export class ValidStateTransitionsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ValidStateTransitions>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ValidStateTransitions — the typed wrapper guarantees that since
    // `register` only accepts ValidStateTransitions instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ValidStateTransitions): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ValidStateTransitionsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ValidStateTransitionsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ValidStateTransitionsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ValidStateTransitions>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ValidStateTransitions>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BoundedAssignmentLatency commitments. */
export class BoundedAssignmentLatencyRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BoundedAssignmentLatency>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BoundedAssignmentLatency — the typed wrapper guarantees that since
    // `register` only accepts BoundedAssignmentLatency instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BoundedAssignmentLatency): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BoundedAssignmentLatencyId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BoundedAssignmentLatencyId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BoundedAssignmentLatencyId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BoundedAssignmentLatency>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BoundedAssignmentLatency>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DriverMutualExclusion commitments. */
export class DriverMutualExclusionRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DriverMutualExclusion>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DriverMutualExclusion — the typed wrapper guarantees that since
    // `register` only accepts DriverMutualExclusion instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DriverMutualExclusion): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DriverMutualExclusionId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DriverMutualExclusionId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DriverMutualExclusionId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DriverMutualExclusion>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DriverMutualExclusion>[];
  }

  size(): number {
    return this.inner.size();
  }
}

