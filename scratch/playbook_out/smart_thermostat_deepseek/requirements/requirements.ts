// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for ThermostatSystem. Runtime: string. Compile-time: branded. */
export type ThermostatSystemId = string & { readonly __brand: "ThermostatSystemId" };
/** Identity type for HomeOwner. Runtime: string. Compile-time: branded. */
export type HomeOwnerId = string & { readonly __brand: "HomeOwnerId" };
/** Identity type for Regulator. Runtime: string. Compile-time: branded. */
export type RegulatorId = string & { readonly __brand: "RegulatorId" };
/** Identity type for Contractor. Runtime: string. Compile-time: branded. */
export type ContractorId = string & { readonly __brand: "ContractorId" };
/** Identity type for ThermostatVendor. Runtime: string. Compile-time: branded. */
export type ThermostatVendorId = string & { readonly __brand: "ThermostatVendorId" };
/** Identity type for ThermostatSystemKind. Runtime: string. Compile-time: branded. */
export type ThermostatSystemKindId = string & { readonly __brand: "ThermostatSystemKindId" };
/** Identity type for SafeSetpointCommitment. Runtime: string. Compile-time: branded. */
export type SafeSetpointCommitmentId = string & { readonly __brand: "SafeSetpointCommitmentId" };
/** Identity type for PlausibleSensorCommitment. Runtime: string. Compile-time: branded. */
export type PlausibleSensorCommitmentId = string & { readonly __brand: "PlausibleSensorCommitmentId" };
/** Identity type for FaultNotificationCommitment. Runtime: string. Compile-time: branded. */
export type FaultNotificationCommitmentId = string & { readonly __brand: "FaultNotificationCommitmentId" };
/** Identity type for CyclingLimitCommitment. Runtime: string. Compile-time: branded. */
export type CyclingLimitCommitmentId = string & { readonly __brand: "CyclingLimitCommitmentId" };
/** Identity type for DisplayStateCommitment. Runtime: string. Compile-time: branded. */
export type DisplayStateCommitmentId = string & { readonly __brand: "DisplayStateCommitmentId" };
/** Identity type for SetpointRequest. Runtime: string. Compile-time: branded. */
export type SetpointRequestId = string & { readonly __brand: "SetpointRequestId" };
/** Identity type for SensorReading. Runtime: string. Compile-time: branded. */
export type SensorReadingId = string & { readonly __brand: "SensorReadingId" };
/** Identity type for ActuatorCommand. Runtime: string. Compile-time: branded. */
export type ActuatorCommandId = string & { readonly __brand: "ActuatorCommandId" };
/** Identity type for SafeHaltEvent. Runtime: string. Compile-time: branded. */
export type SafeHaltEventId = string & { readonly __brand: "SafeHaltEventId" };
/** Identity type for UserAlert. Runtime: string. Compile-time: branded. */
export type UserAlertId = string & { readonly __brand: "UserAlertId" };
/** Identity type for ThermostatControlCycle. Runtime: string. Compile-time: branded. */
export type ThermostatControlCycleId = string & { readonly __brand: "ThermostatControlCycleId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface ThermostatSystem extends TemperatureSafetyConstraints, SensorPlausibilityConstraints, CyclingProtectionConstraints {
  readonly systemId: ThermostatSystemId;
  readonly safeMinSetpoint: number;
  readonly safeMaxSetpoint: number;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
  readonly faultAlertActive: boolean;
  readonly minCycleIntervalSecs: number;
  readonly currentTemperature: number;
  readonly currentSetpoint: number;
  readonly currentActuatorCommand: string;
  readonly lastCommandTimestamp: number;
  readonly halted: boolean;
}

/** @stereotype <<Agent>> */
export interface HomeOwner {
  readonly ownerId: HomeOwnerId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface Regulator {
  readonly regulatorId: RegulatorId;
  readonly jurisdiction: string;
  readonly departmentName: string;
}

/** @stereotype <<Agent>> */
export interface Contractor {
  readonly contractorId: ContractorId;
  readonly companyName: string;
  readonly certificationNumber: string;
}

/** @stereotype <<Agent>> */
export interface ThermostatVendor {
  readonly vendorId: ThermostatVendorId;
  readonly name: string;
  readonly warrantyYears: number;
}

/** @stereotype <<Kind>> */
export interface ThermostatSystemKind {
  readonly systemId: ThermostatSystemKindId;
  readonly safeMinSetpoint: number;
  readonly safeMaxSetpoint: number;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
  readonly faultAlertActive: boolean;
  readonly minCycleIntervalSecs: number;
  readonly currentTemperature: number;
  readonly currentSetpoint: number;
  readonly currentActuatorCommand: string;
}

/** @stereotype <<Commitment>> */
export interface SafeSetpointCommitment {
  readonly commitmentId: SafeSetpointCommitmentId;
  readonly safeMinSetpoint: number;
  readonly safeMaxSetpoint: number;
}

/** @stereotype <<Commitment>> */
export interface PlausibleSensorCommitment {
  readonly commitmentId: PlausibleSensorCommitmentId;
  readonly sensorPlausibilityMin: number;
  readonly sensorPlausibilityMax: number;
}

/** @stereotype <<Commitment>> */
export interface FaultNotificationCommitment {
  readonly commitmentId: FaultNotificationCommitmentId;
  readonly faultAlertActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface CyclingLimitCommitment {
  readonly commitmentId: CyclingLimitCommitmentId;
  readonly minCycleIntervalSecs: number;
}

/** @stereotype <<Commitment>> */
export interface DisplayStateCommitment {
  readonly commitmentId: DisplayStateCommitmentId;
  readonly currentTemperature: number;
  readonly currentSetpoint: number;
  readonly currentActuatorCommand: string;
}

/** @stereotype <<Category>> */
export interface TemperatureSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface SensorPlausibilityConstraints {
}

/** @stereotype <<Category>> */
export interface CyclingProtectionConstraints {
}

/** @stereotype <<Kind>> */
export interface SetpointRequest {
  readonly requestId: SetpointRequestId;
  readonly requestedTemperature: number;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface SensorReading {
  readonly readingId: SensorReadingId;
  readonly temperature: number;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface ActuatorCommand {
  readonly commandId: ActuatorCommandId;
  readonly commandState: string;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface SafeHaltEvent {
  readonly haltEventId: SafeHaltEventId;
  readonly reason: string;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface UserAlert {
  readonly alertId: UserAlertId;
  readonly message: string;
  readonly timestamp: number;
}

/** @stereotype <<Happening>> */
export interface ThermostatControlCycle {
  readonly cycleId: ThermostatControlCycleId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly steps: string;
}


// ─── Factory functions ───

export function makeThermostatSystem(data: {
  systemId: string;
  safeMinSetpoint: number;
  safeMaxSetpoint: number;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
  faultAlertActive: boolean;
  minCycleIntervalSecs: number;
  currentTemperature: number;
  currentSetpoint: number;
  currentActuatorCommand: string;
  lastCommandTimestamp: number;
  halted: boolean;
}): ThermostatSystem {
  return {
    systemId: data.systemId as ThermostatSystemId,
    safeMinSetpoint: data.safeMinSetpoint,
    safeMaxSetpoint: data.safeMaxSetpoint,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
    faultAlertActive: data.faultAlertActive,
    minCycleIntervalSecs: data.minCycleIntervalSecs,
    currentTemperature: data.currentTemperature,
    currentSetpoint: data.currentSetpoint,
    currentActuatorCommand: data.currentActuatorCommand,
    lastCommandTimestamp: data.lastCommandTimestamp,
    halted: data.halted,
  };
}

export function makeHomeOwner(data: {
  ownerId: string;
  name: string;
  email: string;
}): HomeOwner {
  return {
    ownerId: data.ownerId as HomeOwnerId,
    name: data.name,
    email: data.email,
  };
}

export function makeRegulator(data: {
  regulatorId: string;
  jurisdiction: string;
  departmentName: string;
}): Regulator {
  return {
    regulatorId: data.regulatorId as RegulatorId,
    jurisdiction: data.jurisdiction,
    departmentName: data.departmentName,
  };
}

export function makeContractor(data: {
  contractorId: string;
  companyName: string;
  certificationNumber: string;
}): Contractor {
  return {
    contractorId: data.contractorId as ContractorId,
    companyName: data.companyName,
    certificationNumber: data.certificationNumber,
  };
}

export function makeThermostatVendor(data: {
  vendorId: string;
  name: string;
  warrantyYears: number;
}): ThermostatVendor {
  return {
    vendorId: data.vendorId as ThermostatVendorId,
    name: data.name,
    warrantyYears: data.warrantyYears,
  };
}

export function makeThermostatSystemKind(data: {
  systemId: string;
  safeMinSetpoint: number;
  safeMaxSetpoint: number;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
  faultAlertActive: boolean;
  minCycleIntervalSecs: number;
  currentTemperature: number;
  currentSetpoint: number;
  currentActuatorCommand: string;
}): ThermostatSystemKind {
  return {
    systemId: data.systemId as ThermostatSystemKindId,
    safeMinSetpoint: data.safeMinSetpoint,
    safeMaxSetpoint: data.safeMaxSetpoint,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
    faultAlertActive: data.faultAlertActive,
    minCycleIntervalSecs: data.minCycleIntervalSecs,
    currentTemperature: data.currentTemperature,
    currentSetpoint: data.currentSetpoint,
    currentActuatorCommand: data.currentActuatorCommand,
  };
}

export function makeSafeSetpointCommitment(data: {
  commitmentId: string;
  safeMinSetpoint: number;
  safeMaxSetpoint: number;
}): SafeSetpointCommitment {
  return {
    commitmentId: data.commitmentId as SafeSetpointCommitmentId,
    safeMinSetpoint: data.safeMinSetpoint,
    safeMaxSetpoint: data.safeMaxSetpoint,
  };
}

export function makePlausibleSensorCommitment(data: {
  commitmentId: string;
  sensorPlausibilityMin: number;
  sensorPlausibilityMax: number;
}): PlausibleSensorCommitment {
  return {
    commitmentId: data.commitmentId as PlausibleSensorCommitmentId,
    sensorPlausibilityMin: data.sensorPlausibilityMin,
    sensorPlausibilityMax: data.sensorPlausibilityMax,
  };
}

export function makeFaultNotificationCommitment(data: {
  commitmentId: string;
  faultAlertActive: boolean;
}): FaultNotificationCommitment {
  return {
    commitmentId: data.commitmentId as FaultNotificationCommitmentId,
    faultAlertActive: data.faultAlertActive,
  };
}

export function makeCyclingLimitCommitment(data: {
  commitmentId: string;
  minCycleIntervalSecs: number;
}): CyclingLimitCommitment {
  return {
    commitmentId: data.commitmentId as CyclingLimitCommitmentId,
    minCycleIntervalSecs: data.minCycleIntervalSecs,
  };
}

export function makeDisplayStateCommitment(data: {
  commitmentId: string;
  currentTemperature: number;
  currentSetpoint: number;
  currentActuatorCommand: string;
}): DisplayStateCommitment {
  return {
    commitmentId: data.commitmentId as DisplayStateCommitmentId,
    currentTemperature: data.currentTemperature,
    currentSetpoint: data.currentSetpoint,
    currentActuatorCommand: data.currentActuatorCommand,
  };
}

export function makeSetpointRequest(data: {
  requestId: string;
  requestedTemperature: number;
  timestamp: number;
}): SetpointRequest {
  return {
    requestId: data.requestId as SetpointRequestId,
    requestedTemperature: data.requestedTemperature,
    timestamp: data.timestamp,
  };
}

export function makeSensorReading(data: {
  readingId: string;
  temperature: number;
  timestamp: number;
}): SensorReading {
  return {
    readingId: data.readingId as SensorReadingId,
    temperature: data.temperature,
    timestamp: data.timestamp,
  };
}

export function makeActuatorCommand(data: {
  commandId: string;
  commandState: string;
  timestamp: number;
}): ActuatorCommand {
  return {
    commandId: data.commandId as ActuatorCommandId,
    commandState: data.commandState,
    timestamp: data.timestamp,
  };
}

export function makeSafeHaltEvent(data: {
  haltEventId: string;
  reason: string;
  timestamp: number;
}): SafeHaltEvent {
  return {
    haltEventId: data.haltEventId as SafeHaltEventId,
    reason: data.reason,
    timestamp: data.timestamp,
  };
}

export function makeUserAlert(data: {
  alertId: string;
  message: string;
  timestamp: number;
}): UserAlert {
  return {
    alertId: data.alertId as UserAlertId,
    message: data.message,
    timestamp: data.timestamp,
  };
}

export function makeThermostatControlCycle(data: {
  cycleId: string;
  triggeredBy: string;
  outcome: string;
  steps: string;
}): ThermostatControlCycle {
  return {
    cycleId: data.cycleId as ThermostatControlCycleId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    steps: data.steps,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for ThermostatSystem. Returns empty array when valid. */
export function validateThermostatSystem(instance: ThermostatSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMinSetpoint >= 40))) {
    violations.push("[ThermostatSystem] invariant violated: self.safeMinSetpoint >= 40.0");
  }
  if (!((instance.safeMaxSetpoint <= 90))) {
    violations.push("[ThermostatSystem] invariant violated: self.safeMaxSetpoint <= 90.0");
  }
  if (!((instance.sensorPlausibilityMin <= -(40)))) {
    violations.push("[ThermostatSystem] invariant violated: self.sensorPlausibilityMin <= -40.0");
  }
  if (!((instance.sensorPlausibilityMax >= 150))) {
    violations.push("[ThermostatSystem] invariant violated: self.sensorPlausibilityMax >= 150.0");
  }
  if (!((instance.minCycleIntervalSecs >= 300))) {
    violations.push("[ThermostatSystem] invariant violated: self.minCycleIntervalSecs >= 300.0");
  }
  if (!((instance.currentTemperature !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.currentTemperature <> null");
  }
  if (!((instance.currentSetpoint !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.currentSetpoint <> null");
  }
  if (!((instance.currentActuatorCommand !== null))) {
    violations.push("[ThermostatSystem] invariant violated: self.currentActuatorCommand <> null");
  }
  if (!((instance.lastCommandTimestamp >= 0))) {
    violations.push("[ThermostatSystem] invariant violated: self.lastCommandTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for HomeOwner. Returns empty array when valid. */
export function validateHomeOwner(instance: HomeOwner): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ownerId !== null))) {
    violations.push("[HomeOwner] invariant violated: self.ownerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[HomeOwner] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Regulator. Returns empty array when valid. */
export function validateRegulator(instance: Regulator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[Regulator] invariant violated: self.regulatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Contractor. Returns empty array when valid. */
export function validateContractor(instance: Contractor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.contractorId !== null))) {
    violations.push("[Contractor] invariant violated: self.contractorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThermostatVendor. Returns empty array when valid. */
export function validateThermostatVendor(instance: ThermostatVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ThermostatVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.warrantyYears >= 1))) {
    violations.push("[ThermostatVendor] invariant violated: self.warrantyYears >= 1");
  }
  return violations;
}

/** Runtime invariant check for ThermostatSystemKind. Returns empty array when valid. */
export function validateThermostatSystemKind(instance: ThermostatSystemKind): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ThermostatSystemKind] invariant violated: self.systemId <> null");
  }
  return violations;
}

/** Runtime invariant check for TemperatureSafetyConstraints. Returns empty array when valid. */
export function validateTemperatureSafetyConstraints(instance: TemperatureSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMinSetpoint >= 40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxSetpoint <= 90.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorPlausibilityConstraints. Returns empty array when valid. */
export function validateSensorPlausibilityConstraints(instance: SensorPlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.sensorPlausibilityMin <= -40.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.sensorPlausibilityMax >= 150.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for CyclingProtectionConstraints. Returns empty array when valid. */
export function validateCyclingProtectionConstraints(instance: CyclingProtectionConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minCycleIntervalSecs >= 300.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SetpointRequest. Returns empty array when valid. */
export function validateSetpointRequest(instance: SetpointRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[SetpointRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.requestedTemperature >= -(100)))) {
    violations.push("[SetpointRequest] invariant violated: self.requestedTemperature >= -100.0");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[SetpointRequest] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for SensorReading. Returns empty array when valid. */
export function validateSensorReading(instance: SensorReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[SensorReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[SensorReading] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ActuatorCommand. Returns empty array when valid. */
export function validateActuatorCommand(instance: ActuatorCommand): readonly string[] {
  const violations: string[] = [];
  if (!((instance.commandId !== null))) {
    violations.push("[ActuatorCommand] invariant violated: self.commandId <> null");
  }
  if (!((((instance.commandState === "HEAT") || (instance.commandState === "COOL")) || (instance.commandState === "OFF")))) {
    violations.push("[ActuatorCommand] invariant violated: self.commandState = 'HEAT' or self.commandState = 'COOL' or self.commandState = 'OFF'");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[ActuatorCommand] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for SafeHaltEvent. Returns empty array when valid. */
export function validateSafeHaltEvent(instance: SafeHaltEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.haltEventId !== null))) {
    violations.push("[SafeHaltEvent] invariant violated: self.haltEventId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[SafeHaltEvent] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for UserAlert. Returns empty array when valid. */
export function validateUserAlert(instance: UserAlert): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alertId !== null))) {
    violations.push("[UserAlert] invariant violated: self.alertId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[UserAlert] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ThermostatControlCycle. Returns empty array when valid. */
export function validateThermostatControlCycle(instance: ThermostatControlCycle): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[ThermostatControlCycle] invariant violated: self.cycleId <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for ThermostatSystem.setUserSetpoint. User supplies this. */
export type ThermostatSystemSetUserSetpointImpl = (self: ThermostatSystem, requestedSetpoint: number) => { self: ThermostatSystem; modified: { currentSetpoint: unknown } };

/** Contract-checking wrapper for ThermostatSystem.setUserSetpoint. */
export function wrapThermostatSystemSetUserSetpoint(impl: ThermostatSystemSetUserSetpointImpl): (self: ThermostatSystem, requestedSetpoint: number) => ThermostatSystem {
  return (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: not self.halted");
    }
    if (!((requestedSetpoint >= -(100)))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: requestedSetpoint >= -100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!((__result.self.currentSetpoint === (((requestedSetpoint < __result.self.safeMinSetpoint)) ? (__result.self.safeMinSetpoint) : ((((requestedSetpoint > __result.self.safeMaxSetpoint)) ? (__result.self.safeMaxSetpoint) : (requestedSetpoint))))))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentSetpoint = if requestedSetpoint < self.safeMinSetpoint then self.safeMinSetpoint\n                                 else if requestedSetpoint > self.safeMaxSetpoint then self.safeMaxSetpoint\n                                 else requestedSetpoint endif endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentActuatorCommand = self.currentActuatorCommand@pre");
      }
      if (!((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre");
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

/** Impl signature for ThermostatSystem.setUserSetpoint (async). User supplies this. */
export type ThermostatSystemSetUserSetpointAsyncImpl = (self: ThermostatSystem, requestedSetpoint: number) => Promise<{ self: ThermostatSystem; modified: { currentSetpoint: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.setUserSetpoint (async). */
export function wrapThermostatSystemSetUserSetpointAsync(impl: ThermostatSystemSetUserSetpointAsyncImpl): (self: ThermostatSystem, requestedSetpoint: number) => Promise<ThermostatSystem> {
  return async (self, requestedSetpoint) => {
    const preViolations: string[] = [];
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: not self.halted");
    }
    if (!((requestedSetpoint >= -(100)))) {
      preViolations.push("[ThermostatSystem.setUserSetpoint] pre violated: requestedSetpoint >= -100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedSetpoint);
      const postViolations: string[] = [];
      if (!((__result.self.currentSetpoint === (((requestedSetpoint < __result.self.safeMinSetpoint)) ? (__result.self.safeMinSetpoint) : ((((requestedSetpoint > __result.self.safeMaxSetpoint)) ? (__result.self.safeMaxSetpoint) : (requestedSetpoint))))))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentSetpoint = if requestedSetpoint < self.safeMinSetpoint then self.safeMinSetpoint\n                                 else if requestedSetpoint > self.safeMaxSetpoint then self.safeMaxSetpoint\n                                 else requestedSetpoint endif endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.currentActuatorCommand = self.currentActuatorCommand@pre");
      }
      if (!((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))) {
        postViolations.push("[ThermostatSystem.setUserSetpoint] post violated: self.lastCommandTimestamp = self.lastCommandTimestamp@pre");
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

/** Impl signature for ThermostatSystem.processSensorReading. User supplies this. */
export type ThermostatSystemProcessSensorReadingImpl = (self: ThermostatSystem, reading: number, timestamp: number) => { self: ThermostatSystem; modified: { currentTemperature: unknown; currentActuatorCommand: unknown; halted: unknown; faultAlertActive: unknown; lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ThermostatSystem.processSensorReading. */
export function wrapThermostatSystemProcessSensorReading(impl: ThermostatSystemProcessSensorReadingImpl): (self: ThermostatSystem, reading: number, timestamp: number) => ThermostatSystem {
  return (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!((reading >= -(200)))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading >= -200.0");
    }
    if (!((reading <= 200))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.halted": self.halted,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reading, timestamp);
      const postViolations: string[] = [];
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__result.self.halted))) ? (((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === (((reading < (__result.self.currentSetpoint - 1))) ? ("HEAT") : ((((reading > (__result.self.currentSetpoint + 1))) ? ("COOL") : ("OFF"))))))) : ((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && __result.self.halted)) ? (((((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.halted === true)) && (__result.self.faultAlertActive === true))) : (((((__result.self.halted === true) && (__result.self.faultAlertActive === true)) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.currentTemperature === __pre["self.currentTemperature"])))))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand =\n              if reading < self.currentSetpoint - 1.0 then 'HEAT'\n              else if reading > self.currentSetpoint + 1.0 then 'COOL'\n              else 'OFF' endif endif\n          else if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.halted = true\n            and\n            self.faultAlertActive = true\n          else\n            self.halted = true\n            and\n            self.faultAlertActive = true\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.currentTemperature = self.currentTemperature@pre\n          endif endif");
      }
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__pre["self.halted"]))) ? ((__result.self.lastCommandTimestamp === timestamp)) : ((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if (reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted@pre) then\n            self.lastCommandTimestamp = timestamp\n          else\n            self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n          endif");
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

/** Impl signature for ThermostatSystem.processSensorReading (async). User supplies this. */
export type ThermostatSystemProcessSensorReadingAsyncImpl = (self: ThermostatSystem, reading: number, timestamp: number) => Promise<{ self: ThermostatSystem; modified: { currentTemperature: unknown; currentActuatorCommand: unknown; halted: unknown; faultAlertActive: unknown; lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.processSensorReading (async). */
export function wrapThermostatSystemProcessSensorReadingAsync(impl: ThermostatSystemProcessSensorReadingAsyncImpl): (self: ThermostatSystem, reading: number, timestamp: number) => Promise<ThermostatSystem> {
  return async (self, reading, timestamp) => {
    const preViolations: string[] = [];
    if (!((reading >= -(200)))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading >= -200.0");
    }
    if (!((reading <= 200))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: reading <= 200.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.processSensorReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTemperature": self.currentTemperature,
      "self.halted": self.halted,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reading, timestamp);
      const postViolations: string[] = [];
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__result.self.halted))) ? (((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === (((reading < (__result.self.currentSetpoint - 1))) ? ("HEAT") : ((((reading > (__result.self.currentSetpoint + 1))) ? ("COOL") : ("OFF"))))))) : ((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && __result.self.halted)) ? (((((__result.self.currentTemperature === reading) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.halted === true)) && (__result.self.faultAlertActive === true))) : (((((__result.self.halted === true) && (__result.self.faultAlertActive === true)) && (__result.self.currentActuatorCommand === "OFF")) && (__result.self.currentTemperature === __pre["self.currentTemperature"])))))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand =\n              if reading < self.currentSetpoint - 1.0 then 'HEAT'\n              else if reading > self.currentSetpoint + 1.0 then 'COOL'\n              else 'OFF' endif endif\n          else if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and self.halted then\n            self.currentTemperature = reading\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.halted = true\n            and\n            self.faultAlertActive = true\n          else\n            self.halted = true\n            and\n            self.faultAlertActive = true\n            and\n            self.currentActuatorCommand = 'OFF'\n            and\n            self.currentTemperature = self.currentTemperature@pre\n          endif endif");
      }
      if (!((((((reading >= __result.self.sensorPlausibilityMin) && (reading <= __result.self.sensorPlausibilityMax)) && !(__pre["self.halted"]))) ? ((__result.self.lastCommandTimestamp === timestamp)) : ((__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) {
        postViolations.push("[ThermostatSystem.processSensorReading] post violated: if (reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted@pre) then\n            self.lastCommandTimestamp = timestamp\n          else\n            self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n          endif");
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

/** Impl signature for ThermostatSystem.requestCommandTransition. User supplies this. */
export type ThermostatSystemRequestCommandTransitionImpl = (self: ThermostatSystem, newCommand: string, timestamp: number) => { self: ThermostatSystem; modified: { currentActuatorCommand: unknown; lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ThermostatSystem.requestCommandTransition. */
export function wrapThermostatSystemRequestCommandTransition(impl: ThermostatSystemRequestCommandTransitionImpl): (self: ThermostatSystem, newCommand: string, timestamp: number) => ThermostatSystem {
  return (self, newCommand, timestamp) => {
    const preViolations: string[] = [];
    if (!((((newCommand === "HEAT") || (newCommand === "COOL")) || (newCommand === "OFF")))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: newCommand = 'HEAT' or newCommand = 'COOL' or newCommand = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: timestamp >= 0.0");
    }
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: not self.halted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.halted": self.halted,
      "self.faultAlertActive": self.faultAlertActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newCommand, timestamp);
      const postViolations: string[] = [];
      if (!((((newCommand !== __pre["self.currentActuatorCommand"])) ? (((((timestamp - __pre["self.lastCommandTimestamp"]) >= __result.self.minCycleIntervalSecs)) ? (((__result.self.currentActuatorCommand === newCommand) && (__result.self.lastCommandTimestamp === timestamp))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === timestamp)))))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: if newCommand <> self.currentActuatorCommand@pre then\n            if timestamp - self.lastCommandTimestamp@pre >= self.minCycleIntervalSecs then\n              self.currentActuatorCommand = newCommand\n              and\n              self.lastCommandTimestamp = timestamp\n            else\n              self.currentActuatorCommand = self.currentActuatorCommand@pre\n              and\n              self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n            endif\n          else\n            self.currentActuatorCommand = self.currentActuatorCommand@pre\n            and\n            self.lastCommandTimestamp = timestamp\n          endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.halted === __pre["self.halted"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.halted = self.halted@pre");
      }
      if (!((__result.self.faultAlertActive === __pre["self.faultAlertActive"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.faultAlertActive = self.faultAlertActive@pre");
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

/** Impl signature for ThermostatSystem.requestCommandTransition (async). User supplies this. */
export type ThermostatSystemRequestCommandTransitionAsyncImpl = (self: ThermostatSystem, newCommand: string, timestamp: number) => Promise<{ self: ThermostatSystem; modified: { currentActuatorCommand: unknown; lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.requestCommandTransition (async). */
export function wrapThermostatSystemRequestCommandTransitionAsync(impl: ThermostatSystemRequestCommandTransitionAsyncImpl): (self: ThermostatSystem, newCommand: string, timestamp: number) => Promise<ThermostatSystem> {
  return async (self, newCommand, timestamp) => {
    const preViolations: string[] = [];
    if (!((((newCommand === "HEAT") || (newCommand === "COOL")) || (newCommand === "OFF")))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: newCommand = 'HEAT' or newCommand = 'COOL' or newCommand = 'OFF'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: timestamp >= 0.0");
    }
    if (!(!(self.halted))) {
      preViolations.push("[ThermostatSystem.requestCommandTransition] pre violated: not self.halted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentActuatorCommand": self.currentActuatorCommand,
      "self.lastCommandTimestamp": self.lastCommandTimestamp,
      "self.currentTemperature": self.currentTemperature,
      "self.currentSetpoint": self.currentSetpoint,
      "self.halted": self.halted,
      "self.faultAlertActive": self.faultAlertActive,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newCommand, timestamp);
      const postViolations: string[] = [];
      if (!((((newCommand !== __pre["self.currentActuatorCommand"])) ? (((((timestamp - __pre["self.lastCommandTimestamp"]) >= __result.self.minCycleIntervalSecs)) ? (((__result.self.currentActuatorCommand === newCommand) && (__result.self.lastCommandTimestamp === timestamp))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === __pre["self.lastCommandTimestamp"]))))) : (((__result.self.currentActuatorCommand === __pre["self.currentActuatorCommand"]) && (__result.self.lastCommandTimestamp === timestamp)))))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: if newCommand <> self.currentActuatorCommand@pre then\n            if timestamp - self.lastCommandTimestamp@pre >= self.minCycleIntervalSecs then\n              self.currentActuatorCommand = newCommand\n              and\n              self.lastCommandTimestamp = timestamp\n            else\n              self.currentActuatorCommand = self.currentActuatorCommand@pre\n              and\n              self.lastCommandTimestamp = self.lastCommandTimestamp@pre\n            endif\n          else\n            self.currentActuatorCommand = self.currentActuatorCommand@pre\n            and\n            self.lastCommandTimestamp = timestamp\n          endif");
      }
      if (!((__result.self.currentTemperature === __pre["self.currentTemperature"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentTemperature = self.currentTemperature@pre");
      }
      if (!((__result.self.currentSetpoint === __pre["self.currentSetpoint"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.currentSetpoint = self.currentSetpoint@pre");
      }
      if (!((__result.self.halted === __pre["self.halted"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.halted = self.halted@pre");
      }
      if (!((__result.self.faultAlertActive === __pre["self.faultAlertActive"]))) {
        postViolations.push("[ThermostatSystem.requestCommandTransition] post violated: self.faultAlertActive = self.faultAlertActive@pre");
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

/** Impl signature for ThermostatSystem.displayCurrentState. User supplies this. */
export type ThermostatSystemDisplayCurrentStateImpl = (self: ThermostatSystem) => { self: ThermostatSystem; modified: {} };

/** Contract-checking wrapper for ThermostatSystem.displayCurrentState. */
export function wrapThermostatSystemDisplayCurrentState(impl: ThermostatSystemDisplayCurrentStateImpl): (self: ThermostatSystem) => ThermostatSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThermostatSystem.displayCurrentState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.currentTemperature — unbound variable 'result'
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

/** Impl signature for ThermostatSystem.displayCurrentState (async). User supplies this. */
export type ThermostatSystemDisplayCurrentStateAsyncImpl = (self: ThermostatSystem) => Promise<{ self: ThermostatSystem; modified: {} }>;

/** Contract-checking wrapper for ThermostatSystem.displayCurrentState (async). */
export function wrapThermostatSystemDisplayCurrentStateAsync(impl: ThermostatSystemDisplayCurrentStateAsyncImpl): (self: ThermostatSystem) => Promise<ThermostatSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThermostatSystem.displayCurrentState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.currentTemperature — unbound variable 'result'
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

/** Impl signature for ThermostatSystem.initialize. User supplies this. */
export type ThermostatSystemInitializeImpl = (self: ThermostatSystem) => { self: ThermostatSystem; modified: { halted: unknown; faultAlertActive: unknown; currentSetpoint: unknown; currentTemperature: unknown; currentActuatorCommand: unknown; lastCommandTimestamp: unknown } };

/** Contract-checking wrapper for ThermostatSystem.initialize. */
export function wrapThermostatSystemInitialize(impl: ThermostatSystemInitializeImpl): (self: ThermostatSystem) => ThermostatSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.systemId !== null))) {
      preViolations.push("[ThermostatSystem.initialize] pre violated: self.systemId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.halted === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.halted = false");
      }
      if (!((__result.self.faultAlertActive === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.faultAlertActive = false");
      }
      if (!((__result.self.currentSetpoint === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentSetpoint = 72.0");
      }
      if (!((__result.self.currentTemperature === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentTemperature = 72.0");
      }
      if (!((__result.self.currentActuatorCommand === "OFF"))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentActuatorCommand = 'OFF'");
      }
      if (!((__result.self.lastCommandTimestamp === 0))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.lastCommandTimestamp = 0.0");
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

/** Impl signature for ThermostatSystem.initialize (async). User supplies this. */
export type ThermostatSystemInitializeAsyncImpl = (self: ThermostatSystem) => Promise<{ self: ThermostatSystem; modified: { halted: unknown; faultAlertActive: unknown; currentSetpoint: unknown; currentTemperature: unknown; currentActuatorCommand: unknown; lastCommandTimestamp: unknown } }>;

/** Contract-checking wrapper for ThermostatSystem.initialize (async). */
export function wrapThermostatSystemInitializeAsync(impl: ThermostatSystemInitializeAsyncImpl): (self: ThermostatSystem) => Promise<ThermostatSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.systemId !== null))) {
      preViolations.push("[ThermostatSystem.initialize] pre violated: self.systemId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.halted === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.halted = false");
      }
      if (!((__result.self.faultAlertActive === false))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.faultAlertActive = false");
      }
      if (!((__result.self.currentSetpoint === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentSetpoint = 72.0");
      }
      if (!((__result.self.currentTemperature === 72))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentTemperature = 72.0");
      }
      if (!((__result.self.currentActuatorCommand === "OFF"))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.currentActuatorCommand = 'OFF'");
      }
      if (!((__result.self.lastCommandTimestamp === 0))) {
        postViolations.push("[ThermostatSystem.initialize] post violated: self.lastCommandTimestamp = 0.0");
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

/** Lifecycle registry for SafeSetpointCommitment commitments. */
export class SafeSetpointCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SafeSetpointCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SafeSetpointCommitment — the typed wrapper guarantees that since
    // `register` only accepts SafeSetpointCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SafeSetpointCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SafeSetpointCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SafeSetpointCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SafeSetpointCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SafeSetpointCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SafeSetpointCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PlausibleSensorCommitment commitments. */
export class PlausibleSensorCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PlausibleSensorCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PlausibleSensorCommitment — the typed wrapper guarantees that since
    // `register` only accepts PlausibleSensorCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PlausibleSensorCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PlausibleSensorCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PlausibleSensorCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PlausibleSensorCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PlausibleSensorCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PlausibleSensorCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for FaultNotificationCommitment commitments. */
export class FaultNotificationCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FaultNotificationCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FaultNotificationCommitment — the typed wrapper guarantees that since
    // `register` only accepts FaultNotificationCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FaultNotificationCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FaultNotificationCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FaultNotificationCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FaultNotificationCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FaultNotificationCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FaultNotificationCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for CyclingLimitCommitment commitments. */
export class CyclingLimitCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CyclingLimitCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CyclingLimitCommitment — the typed wrapper guarantees that since
    // `register` only accepts CyclingLimitCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CyclingLimitCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CyclingLimitCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CyclingLimitCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CyclingLimitCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CyclingLimitCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CyclingLimitCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DisplayStateCommitment commitments. */
export class DisplayStateCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DisplayStateCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DisplayStateCommitment — the typed wrapper guarantees that since
    // `register` only accepts DisplayStateCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DisplayStateCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DisplayStateCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DisplayStateCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DisplayStateCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DisplayStateCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DisplayStateCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

