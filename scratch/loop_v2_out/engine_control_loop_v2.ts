// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FlightPhase. Runtime: string. Compile-time: branded. */
export type FlightPhaseId = string & { readonly __brand: "FlightPhaseId" };
/** Identity type for Sensor. Runtime: string. Compile-time: branded. */
export type SensorId = string & { readonly __brand: "SensorId" };
/** Identity type for Engine. Runtime: string. Compile-time: branded. */
export type EngineId = string & { readonly __brand: "EngineId" };
/** Identity type for Aircraft. Runtime: string. Compile-time: branded. */
export type AircraftId = string & { readonly __brand: "AircraftId" };
/** Identity type for SensorFaultRecord. Runtime: string. Compile-time: branded. */
export type SensorFaultRecordId = string & { readonly __brand: "SensorFaultRecordId" };
/** Identity type for EngineControlSession. Runtime: string. Compile-time: branded. */
export type EngineControlSessionId = string & { readonly __brand: "EngineControlSessionId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface FlightPhase {
  readonly phaseId: FlightPhaseId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Sensor {
  readonly sensorId: SensorId;
  readonly sensorType: string;
  readonly rawValue: number;
  readonly modelledValue: number;
  readonly isFaulty: boolean;
}

/** @stereotype <<Kind>> */
export interface Engine {
  readonly engineId: EngineId;
  readonly maxSafeSpeed: number;
  readonly currentSpeed: number;
  readonly fuelFlow: number;
  readonly maxFuelFlow: number;
  readonly thrustCommanded: number;
  readonly thrustActual: number;
  readonly isRunning: boolean;
  readonly ignitionActive: boolean;
  readonly continuousIgnitionCommanded: boolean;
  readonly overspeedProtectionFitted: boolean;
  readonly reverserDeployed: boolean;
  readonly reverserDeploymentEnabled: boolean;
}

/** @stereotype <<Kind>> */
export interface Aircraft {
  readonly aircraftId: AircraftId;
  readonly onGround: boolean;
  readonly currentPhase: FlightPhase;
}

/** @stereotype <<Kind>> */
export interface SensorFaultRecord {
  readonly faultRecordId: SensorFaultRecordId;
  readonly sensorType: string;
  readonly substituteValue: number;
  readonly isActive: boolean;
}

/** @stereotype <<Role>> */
export interface ControlledEngine {
  readonly engineId: string;
  readonly maxSafeSpeed: number;
  readonly overspeedProtectionFitted: boolean;
  readonly currentSpeed: number;
  readonly fuelFlow: number;
  readonly maxFuelFlow: number;
  readonly reverserDeployed: boolean;
  readonly reverserDeploymentEnabled: boolean;
}

/** @stereotype <<Role>> */
export interface ControllingAircraft {
  readonly aircraftId: string;
  readonly onGround: boolean;
}

/** @stereotype <<Relator>> */
export interface EngineControlSession {
  readonly sessionId: EngineControlSessionId;
  readonly engine: ControlledEngine;
  readonly aircraft: ControllingAircraft;
  readonly status: string;
  readonly faultCount: number;
}


// ─── Factory functions ───

export function makeFlightPhase(data: {
  phaseId: string;
  name: string;
}): FlightPhase {
  return {
    phaseId: data.phaseId as FlightPhaseId,
    name: data.name,
  };
}

export function makeSensor(data: {
  sensorId: string;
  sensorType: string;
  rawValue: number;
  modelledValue: number;
  isFaulty: boolean;
}): Sensor {
  return {
    sensorId: data.sensorId as SensorId,
    sensorType: data.sensorType,
    rawValue: data.rawValue,
    modelledValue: data.modelledValue,
    isFaulty: data.isFaulty,
  };
}

export function makeEngine(data: {
  engineId: string;
  maxSafeSpeed: number;
  currentSpeed: number;
  fuelFlow: number;
  maxFuelFlow: number;
  thrustCommanded: number;
  thrustActual: number;
  isRunning: boolean;
  ignitionActive: boolean;
  continuousIgnitionCommanded: boolean;
  overspeedProtectionFitted: boolean;
  reverserDeployed: boolean;
  reverserDeploymentEnabled: boolean;
}): Engine {
  return {
    engineId: data.engineId as EngineId,
    maxSafeSpeed: data.maxSafeSpeed,
    currentSpeed: data.currentSpeed,
    fuelFlow: data.fuelFlow,
    maxFuelFlow: data.maxFuelFlow,
    thrustCommanded: data.thrustCommanded,
    thrustActual: data.thrustActual,
    isRunning: data.isRunning,
    ignitionActive: data.ignitionActive,
    continuousIgnitionCommanded: data.continuousIgnitionCommanded,
    overspeedProtectionFitted: data.overspeedProtectionFitted,
    reverserDeployed: data.reverserDeployed,
    reverserDeploymentEnabled: data.reverserDeploymentEnabled,
  };
}

export function makeAircraft(data: {
  aircraftId: string;
  onGround: boolean;
  currentPhase: FlightPhase;
}): Aircraft {
  return {
    aircraftId: data.aircraftId as AircraftId,
    onGround: data.onGround,
    currentPhase: data.currentPhase,
  };
}

export function makeSensorFaultRecord(data: {
  faultRecordId: string;
  sensorType: string;
  substituteValue: number;
  isActive: boolean;
}): SensorFaultRecord {
  return {
    faultRecordId: data.faultRecordId as SensorFaultRecordId,
    sensorType: data.sensorType,
    substituteValue: data.substituteValue,
    isActive: data.isActive,
  };
}

export function makeEngineControlSession(data: {
  sessionId: string;
  engine: ControlledEngine;
  aircraft: ControllingAircraft;
  status: string;
  faultCount: number;
}): EngineControlSession {
  return {
    sessionId: data.sessionId as EngineControlSessionId,
    engine: data.engine,
    aircraft: data.aircraft,
    status: data.status,
    faultCount: data.faultCount,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for FlightPhase. Returns empty array when valid. */
export function validateFlightPhase(instance: FlightPhase): readonly string[] {
  const violations: string[] = [];
  if (!((instance.phaseId !== null))) {
    violations.push("[FlightPhase] invariant violated: self.phaseId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[FlightPhase] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Sensor. Returns empty array when valid. */
export function validateSensor(instance: Sensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[Sensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.sensorType !== null))) {
    violations.push("[Sensor] invariant violated: self.sensorType <> null");
  }
  return violations;
}

/** Runtime invariant check for Engine. Returns empty array when valid. */
export function validateEngine(instance: Engine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[Engine] invariant violated: self.engineId <> null");
  }
  if (!((instance.maxSafeSpeed > 0))) {
    violations.push("[Engine] invariant violated: self.maxSafeSpeed > 0.0");
  }
  if (!((instance.fuelFlow >= 0))) {
    violations.push("[Engine] invariant violated: self.fuelFlow >= 0.0");
  }
  if (!((instance.maxFuelFlow > 0))) {
    violations.push("[Engine] invariant violated: self.maxFuelFlow > 0.0");
  }
  if (!((instance.fuelFlow <= instance.maxFuelFlow))) {
    violations.push("[Engine] invariant violated: self.fuelFlow <= self.maxFuelFlow");
  }
  if (!((instance.thrustActual >= 0))) {
    violations.push("[Engine] invariant violated: self.thrustActual >= 0.0");
  }
  if (!((instance.thrustCommanded >= 0))) {
    violations.push("[Engine] invariant violated: self.thrustCommanded >= 0.0");
  }
  if (!((instance.currentSpeed <= instance.maxSafeSpeed))) {
    violations.push("[Engine] invariant violated: self.currentSpeed <= self.maxSafeSpeed");
  }
  if (!(!((instance.reverserDeployed && !(instance.reverserDeploymentEnabled))))) {
    violations.push("[Engine] invariant violated: not (self.reverserDeployed and not self.reverserDeploymentEnabled)");
  }
  return violations;
}

/** Runtime invariant check for Aircraft. Returns empty array when valid. */
export function validateAircraft(instance: Aircraft): readonly string[] {
  const violations: string[] = [];
  if (!((instance.aircraftId !== null))) {
    violations.push("[Aircraft] invariant violated: self.aircraftId <> null");
  }
  if (!((instance.currentPhase !== null))) {
    violations.push("[Aircraft] invariant violated: self.currentPhase <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultRecord. Returns empty array when valid. */
export function validateSensorFaultRecord(instance: SensorFaultRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.faultRecordId !== null))) {
    violations.push("[SensorFaultRecord] invariant violated: self.faultRecordId <> null");
  }
  if (!((instance.sensorType !== null))) {
    violations.push("[SensorFaultRecord] invariant violated: self.sensorType <> null");
  }
  if (!((instance.substituteValue >= 0))) {
    violations.push("[SensorFaultRecord] invariant violated: self.substituteValue >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for EngineControlSession. Returns empty array when valid. */
export function validateEngineControlSession(instance: EngineControlSession): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sessionId !== null))) {
    violations.push("[EngineControlSession] invariant violated: self.sessionId <> null");
  }
  if (!((instance.engine !== null))) {
    violations.push("[EngineControlSession] invariant violated: self.engine <> null");
  }
  if (!((instance.aircraft !== null))) {
    violations.push("[EngineControlSession] invariant violated: self.aircraft <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[EngineControlSession] invariant violated: self.status <> null");
  }
  if (!((instance.faultCount >= 0))) {
    violations.push("[EngineControlSession] invariant violated: self.faultCount >= 0");
  }
  if (!(!((instance.engine?.reverserDeployed && !(instance.aircraft?.onGround))))) {
    violations.push("[EngineControlSession] invariant violated: not (self.engine.reverserDeployed and not self.aircraft.onGround)");
  }
  if (!((instance.engine?.currentSpeed <= instance.engine?.maxSafeSpeed))) {
    violations.push("[EngineControlSession] invariant violated: self.engine.currentSpeed <= self.engine.maxSafeSpeed");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for Sensor.declareFault. User supplies this. */
export type SensorDeclareFaultImpl = (self: Sensor) => { self: Sensor; modified: { isFaulty: unknown } };

/** Contract-checking wrapper for Sensor.declareFault. */
export function wrapSensorDeclareFault(impl: SensorDeclareFaultImpl): (self: Sensor) => Sensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isFaulty === false))) {
      preViolations.push("[Sensor.declareFault] pre violated: self.isFaulty = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFaulty === true))) {
        postViolations.push("[Sensor.declareFault] post violated: self.isFaulty = true");
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

/** Impl signature for Sensor.declareFault (async). User supplies this. */
export type SensorDeclareFaultAsyncImpl = (self: Sensor) => Promise<{ self: Sensor; modified: { isFaulty: unknown } }>;

/** Contract-checking wrapper for Sensor.declareFault (async). */
export function wrapSensorDeclareFaultAsync(impl: SensorDeclareFaultAsyncImpl): (self: Sensor) => Promise<Sensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isFaulty === false))) {
      preViolations.push("[Sensor.declareFault] pre violated: self.isFaulty = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFaulty === true))) {
        postViolations.push("[Sensor.declareFault] post violated: self.isFaulty = true");
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

/** Impl signature for Sensor.clearFault. User supplies this. */
export type SensorClearFaultImpl = (self: Sensor, confirmedValue: number) => { self: Sensor; modified: { isFaulty: unknown; rawValue: unknown } };

/** Contract-checking wrapper for Sensor.clearFault. */
export function wrapSensorClearFault(impl: SensorClearFaultImpl): (self: Sensor, confirmedValue: number) => Sensor {
  return (self, confirmedValue) => {
    const preViolations: string[] = [];
    if (!((self.isFaulty === true))) {
      preViolations.push("[Sensor.clearFault] pre violated: self.isFaulty = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, confirmedValue);
      const postViolations: string[] = [];
      if (!((__result.self.isFaulty === false))) {
        postViolations.push("[Sensor.clearFault] post violated: self.isFaulty = false");
      }
      if (!((__result.self.rawValue === confirmedValue))) {
        postViolations.push("[Sensor.clearFault] post violated: self.rawValue = confirmedValue");
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

/** Impl signature for Sensor.clearFault (async). User supplies this. */
export type SensorClearFaultAsyncImpl = (self: Sensor, confirmedValue: number) => Promise<{ self: Sensor; modified: { isFaulty: unknown; rawValue: unknown } }>;

/** Contract-checking wrapper for Sensor.clearFault (async). */
export function wrapSensorClearFaultAsync(impl: SensorClearFaultAsyncImpl): (self: Sensor, confirmedValue: number) => Promise<Sensor> {
  return async (self, confirmedValue) => {
    const preViolations: string[] = [];
    if (!((self.isFaulty === true))) {
      preViolations.push("[Sensor.clearFault] pre violated: self.isFaulty = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, confirmedValue);
      const postViolations: string[] = [];
      if (!((__result.self.isFaulty === false))) {
        postViolations.push("[Sensor.clearFault] post violated: self.isFaulty = false");
      }
      if (!((__result.self.rawValue === confirmedValue))) {
        postViolations.push("[Sensor.clearFault] post violated: self.rawValue = confirmedValue");
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

/** Impl signature for Sensor.updateRaw. User supplies this. */
export type SensorUpdateRawImpl = (self: Sensor, value: number) => { self: Sensor; modified: { rawValue: unknown } };

/** Contract-checking wrapper for Sensor.updateRaw. */
export function wrapSensorUpdateRaw(impl: SensorUpdateRawImpl): (self: Sensor, value: number) => Sensor {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((self.isFaulty === false))) {
      preViolations.push("[Sensor.updateRaw] pre violated: self.isFaulty = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.rawValue === value))) {
        postViolations.push("[Sensor.updateRaw] post violated: self.rawValue = value");
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

/** Impl signature for Sensor.updateRaw (async). User supplies this. */
export type SensorUpdateRawAsyncImpl = (self: Sensor, value: number) => Promise<{ self: Sensor; modified: { rawValue: unknown } }>;

/** Contract-checking wrapper for Sensor.updateRaw (async). */
export function wrapSensorUpdateRawAsync(impl: SensorUpdateRawAsyncImpl): (self: Sensor, value: number) => Promise<Sensor> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((self.isFaulty === false))) {
      preViolations.push("[Sensor.updateRaw] pre violated: self.isFaulty = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.rawValue === value))) {
        postViolations.push("[Sensor.updateRaw] post violated: self.rawValue = value");
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

/** Impl signature for Sensor.updateModelled. User supplies this. */
export type SensorUpdateModelledImpl = (self: Sensor, value: number) => { self: Sensor; modified: { modelledValue: unknown } };

/** Contract-checking wrapper for Sensor.updateModelled. */
export function wrapSensorUpdateModelled(impl: SensorUpdateModelledImpl): (self: Sensor, value: number) => Sensor {
  return (self, value) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValue === value))) {
        postViolations.push("[Sensor.updateModelled] post violated: self.modelledValue = value");
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

/** Impl signature for Sensor.updateModelled (async). User supplies this. */
export type SensorUpdateModelledAsyncImpl = (self: Sensor, value: number) => Promise<{ self: Sensor; modified: { modelledValue: unknown } }>;

/** Contract-checking wrapper for Sensor.updateModelled (async). */
export function wrapSensorUpdateModelledAsync(impl: SensorUpdateModelledAsyncImpl): (self: Sensor, value: number) => Promise<Sensor> {
  return async (self, value) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValue === value))) {
        postViolations.push("[Sensor.updateModelled] post violated: self.modelledValue = value");
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

/** Impl signature for Engine.commandContinuousIgnition. User supplies this. */
export type EngineCommandContinuousIgnitionImpl = (self: Engine) => { self: Engine; modified: { continuousIgnitionCommanded: unknown; ignitionActive: unknown } };

/** Contract-checking wrapper for Engine.commandContinuousIgnition. */
export function wrapEngineCommandContinuousIgnition(impl: EngineCommandContinuousIgnitionImpl): (self: Engine) => Engine {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === true))) {
      preViolations.push("[Engine.commandContinuousIgnition] pre violated: self.isRunning = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionCommanded === true))) {
        postViolations.push("[Engine.commandContinuousIgnition] post violated: self.continuousIgnitionCommanded = true");
      }
      if (!((__result.self.ignitionActive === true))) {
        postViolations.push("[Engine.commandContinuousIgnition] post violated: self.ignitionActive = true");
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

/** Impl signature for Engine.commandContinuousIgnition (async). User supplies this. */
export type EngineCommandContinuousIgnitionAsyncImpl = (self: Engine) => Promise<{ self: Engine; modified: { continuousIgnitionCommanded: unknown; ignitionActive: unknown } }>;

/** Contract-checking wrapper for Engine.commandContinuousIgnition (async). */
export function wrapEngineCommandContinuousIgnitionAsync(impl: EngineCommandContinuousIgnitionAsyncImpl): (self: Engine) => Promise<Engine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === true))) {
      preViolations.push("[Engine.commandContinuousIgnition] pre violated: self.isRunning = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionCommanded === true))) {
        postViolations.push("[Engine.commandContinuousIgnition] post violated: self.continuousIgnitionCommanded = true");
      }
      if (!((__result.self.ignitionActive === true))) {
        postViolations.push("[Engine.commandContinuousIgnition] post violated: self.ignitionActive = true");
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

/** Impl signature for Engine.cancelContinuousIgnition. User supplies this. */
export type EngineCancelContinuousIgnitionImpl = (self: Engine) => { self: Engine; modified: { continuousIgnitionCommanded: unknown } };

/** Contract-checking wrapper for Engine.cancelContinuousIgnition. */
export function wrapEngineCancelContinuousIgnition(impl: EngineCancelContinuousIgnitionImpl): (self: Engine) => Engine {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionCommanded === false))) {
        postViolations.push("[Engine.cancelContinuousIgnition] post violated: self.continuousIgnitionCommanded = false");
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

/** Impl signature for Engine.cancelContinuousIgnition (async). User supplies this. */
export type EngineCancelContinuousIgnitionAsyncImpl = (self: Engine) => Promise<{ self: Engine; modified: { continuousIgnitionCommanded: unknown } }>;

/** Contract-checking wrapper for Engine.cancelContinuousIgnition (async). */
export function wrapEngineCancelContinuousIgnitionAsync(impl: EngineCancelContinuousIgnitionAsyncImpl): (self: Engine) => Promise<Engine> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionCommanded === false))) {
        postViolations.push("[Engine.cancelContinuousIgnition] post violated: self.continuousIgnitionCommanded = false");
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

/** Impl signature for Engine.applyOverspeedProtection. User supplies this. */
export type EngineApplyOverspeedProtectionImpl = (self: Engine) => { self: Engine; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for Engine.applyOverspeedProtection. */
export function wrapEngineApplyOverspeedProtection(impl: EngineApplyOverspeedProtectionImpl): (self: Engine) => Engine {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentSpeed > self.maxSafeSpeed))) {
      preViolations.push("[Engine.applyOverspeedProtection] pre violated: self.currentSpeed > self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === ((__result.self.overspeedProtectionFitted) ? ((__result.self.maxFuelFlow * 0.1)) : (0))))) {
        postViolations.push("[Engine.applyOverspeedProtection] post violated: self.fuelFlow = if self.overspeedProtectionFitted then\n                            self.maxFuelFlow * 0.1\n                          else\n                            0.0\n                          endif");
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

/** Impl signature for Engine.applyOverspeedProtection (async). User supplies this. */
export type EngineApplyOverspeedProtectionAsyncImpl = (self: Engine) => Promise<{ self: Engine; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for Engine.applyOverspeedProtection (async). */
export function wrapEngineApplyOverspeedProtectionAsync(impl: EngineApplyOverspeedProtectionAsyncImpl): (self: Engine) => Promise<Engine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentSpeed > self.maxSafeSpeed))) {
      preViolations.push("[Engine.applyOverspeedProtection] pre violated: self.currentSpeed > self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === ((__result.self.overspeedProtectionFitted) ? ((__result.self.maxFuelFlow * 0.1)) : (0))))) {
        postViolations.push("[Engine.applyOverspeedProtection] post violated: self.fuelFlow = if self.overspeedProtectionFitted then\n                            self.maxFuelFlow * 0.1\n                          else\n                            0.0\n                          endif");
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

/** Impl signature for Engine.setFuelFlow. User supplies this. */
export type EngineSetFuelFlowImpl = (self: Engine, newFlow: number) => { self: Engine; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for Engine.setFuelFlow. */
export function wrapEngineSetFuelFlow(impl: EngineSetFuelFlowImpl): (self: Engine, newFlow: number) => Engine {
  return (self, newFlow) => {
    const preViolations: string[] = [];
    if (!((newFlow >= 0))) {
      preViolations.push("[Engine.setFuelFlow] pre violated: newFlow >= 0.0");
    }
    if (!((newFlow <= self.maxFuelFlow))) {
      preViolations.push("[Engine.setFuelFlow] pre violated: newFlow <= self.maxFuelFlow");
    }
    if (!((self.currentSpeed <= self.maxSafeSpeed))) {
      preViolations.push("[Engine.setFuelFlow] pre violated: self.currentSpeed <= self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newFlow);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === newFlow))) {
        postViolations.push("[Engine.setFuelFlow] post violated: self.fuelFlow = newFlow");
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

/** Impl signature for Engine.setFuelFlow (async). User supplies this. */
export type EngineSetFuelFlowAsyncImpl = (self: Engine, newFlow: number) => Promise<{ self: Engine; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for Engine.setFuelFlow (async). */
export function wrapEngineSetFuelFlowAsync(impl: EngineSetFuelFlowAsyncImpl): (self: Engine, newFlow: number) => Promise<Engine> {
  return async (self, newFlow) => {
    const preViolations: string[] = [];
    if (!((newFlow >= 0))) {
      preViolations.push("[Engine.setFuelFlow] pre violated: newFlow >= 0.0");
    }
    if (!((newFlow <= self.maxFuelFlow))) {
      preViolations.push("[Engine.setFuelFlow] pre violated: newFlow <= self.maxFuelFlow");
    }
    if (!((self.currentSpeed <= self.maxSafeSpeed))) {
      preViolations.push("[Engine.setFuelFlow] pre violated: self.currentSpeed <= self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newFlow);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === newFlow))) {
        postViolations.push("[Engine.setFuelFlow] post violated: self.fuelFlow = newFlow");
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

/** Impl signature for Engine.holdThrustInFlight. User supplies this. */
export type EngineHoldThrustInFlightImpl = (self: Engine) => { self: Engine; modified: { thrustActual: unknown } };

/** Contract-checking wrapper for Engine.holdThrustInFlight. */
export function wrapEngineHoldThrustInFlight(impl: EngineHoldThrustInFlightImpl): (self: Engine) => Engine {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === true))) {
      preViolations.push("[Engine.holdThrustInFlight] pre violated: self.isRunning = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustActual === __result.self.thrustCommanded))) {
        postViolations.push("[Engine.holdThrustInFlight] post violated: self.thrustActual = self.thrustCommanded");
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

/** Impl signature for Engine.holdThrustInFlight (async). User supplies this. */
export type EngineHoldThrustInFlightAsyncImpl = (self: Engine) => Promise<{ self: Engine; modified: { thrustActual: unknown } }>;

/** Contract-checking wrapper for Engine.holdThrustInFlight (async). */
export function wrapEngineHoldThrustInFlightAsync(impl: EngineHoldThrustInFlightAsyncImpl): (self: Engine) => Promise<Engine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === true))) {
      preViolations.push("[Engine.holdThrustInFlight] pre violated: self.isRunning = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustActual === __result.self.thrustCommanded))) {
        postViolations.push("[Engine.holdThrustInFlight] post violated: self.thrustActual = self.thrustCommanded");
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

/** Impl signature for Engine.commandThrust. User supplies this. */
export type EngineCommandThrustImpl = (self: Engine, level: number) => { self: Engine; modified: { thrustCommanded: unknown } };

/** Contract-checking wrapper for Engine.commandThrust. */
export function wrapEngineCommandThrust(impl: EngineCommandThrustImpl): (self: Engine, level: number) => Engine {
  return (self, level) => {
    const preViolations: string[] = [];
    if (!((level >= 0))) {
      preViolations.push("[Engine.commandThrust] pre violated: level >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, level);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === level))) {
        postViolations.push("[Engine.commandThrust] post violated: self.thrustCommanded = level");
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

/** Impl signature for Engine.commandThrust (async). User supplies this. */
export type EngineCommandThrustAsyncImpl = (self: Engine, level: number) => Promise<{ self: Engine; modified: { thrustCommanded: unknown } }>;

/** Contract-checking wrapper for Engine.commandThrust (async). */
export function wrapEngineCommandThrustAsync(impl: EngineCommandThrustAsyncImpl): (self: Engine, level: number) => Promise<Engine> {
  return async (self, level) => {
    const preViolations: string[] = [];
    if (!((level >= 0))) {
      preViolations.push("[Engine.commandThrust] pre violated: level >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, level);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === level))) {
        postViolations.push("[Engine.commandThrust] post violated: self.thrustCommanded = level");
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

/** Impl signature for Engine.updateSpeed. User supplies this. */
export type EngineUpdateSpeedImpl = (self: Engine, observedSpeed: number) => { self: Engine; modified: { currentSpeed: unknown } };

/** Contract-checking wrapper for Engine.updateSpeed. */
export function wrapEngineUpdateSpeed(impl: EngineUpdateSpeedImpl): (self: Engine, observedSpeed: number) => Engine {
  return (self, observedSpeed) => {
    const preViolations: string[] = [];
    if (!((observedSpeed >= 0))) {
      preViolations.push("[Engine.updateSpeed] pre violated: observedSpeed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, observedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.currentSpeed === observedSpeed))) {
        postViolations.push("[Engine.updateSpeed] post violated: self.currentSpeed = observedSpeed");
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

/** Impl signature for Engine.updateSpeed (async). User supplies this. */
export type EngineUpdateSpeedAsyncImpl = (self: Engine, observedSpeed: number) => Promise<{ self: Engine; modified: { currentSpeed: unknown } }>;

/** Contract-checking wrapper for Engine.updateSpeed (async). */
export function wrapEngineUpdateSpeedAsync(impl: EngineUpdateSpeedAsyncImpl): (self: Engine, observedSpeed: number) => Promise<Engine> {
  return async (self, observedSpeed) => {
    const preViolations: string[] = [];
    if (!((observedSpeed >= 0))) {
      preViolations.push("[Engine.updateSpeed] pre violated: observedSpeed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, observedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.currentSpeed === observedSpeed))) {
        postViolations.push("[Engine.updateSpeed] post violated: self.currentSpeed = observedSpeed");
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

/** Impl signature for Engine.startEngine. User supplies this. */
export type EngineStartEngineImpl = (self: Engine) => { self: Engine; modified: { isRunning: unknown; ignitionActive: unknown } };

/** Contract-checking wrapper for Engine.startEngine. */
export function wrapEngineStartEngine(impl: EngineStartEngineImpl): (self: Engine) => Engine {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === false))) {
      preViolations.push("[Engine.startEngine] pre violated: self.isRunning = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isRunning === true))) {
        postViolations.push("[Engine.startEngine] post violated: self.isRunning = true");
      }
      if (!((__result.self.ignitionActive === true))) {
        postViolations.push("[Engine.startEngine] post violated: self.ignitionActive = true");
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

/** Impl signature for Engine.startEngine (async). User supplies this. */
export type EngineStartEngineAsyncImpl = (self: Engine) => Promise<{ self: Engine; modified: { isRunning: unknown; ignitionActive: unknown } }>;

/** Contract-checking wrapper for Engine.startEngine (async). */
export function wrapEngineStartEngineAsync(impl: EngineStartEngineAsyncImpl): (self: Engine) => Promise<Engine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === false))) {
      preViolations.push("[Engine.startEngine] pre violated: self.isRunning = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isRunning === true))) {
        postViolations.push("[Engine.startEngine] post violated: self.isRunning = true");
      }
      if (!((__result.self.ignitionActive === true))) {
        postViolations.push("[Engine.startEngine] post violated: self.ignitionActive = true");
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

/** Impl signature for Engine.shutdownEngine. User supplies this. */
export type EngineShutdownEngineImpl = (self: Engine) => { self: Engine; modified: { isRunning: unknown; fuelFlow: unknown; ignitionActive: unknown; continuousIgnitionCommanded: unknown; reverserDeployed: unknown; reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for Engine.shutdownEngine. */
export function wrapEngineShutdownEngine(impl: EngineShutdownEngineImpl): (self: Engine) => Engine {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === true))) {
      preViolations.push("[Engine.shutdownEngine] pre violated: self.isRunning = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isRunning === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.isRunning = false");
      }
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.fuelFlow = 0.0");
      }
      if (!((__result.self.ignitionActive === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.ignitionActive = false");
      }
      if (!((__result.self.continuousIgnitionCommanded === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.continuousIgnitionCommanded = false");
      }
      if (!((__result.self.reverserDeployed === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.reverserDeployed = false");
      }
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.reverserDeploymentEnabled = false");
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

/** Impl signature for Engine.shutdownEngine (async). User supplies this. */
export type EngineShutdownEngineAsyncImpl = (self: Engine) => Promise<{ self: Engine; modified: { isRunning: unknown; fuelFlow: unknown; ignitionActive: unknown; continuousIgnitionCommanded: unknown; reverserDeployed: unknown; reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for Engine.shutdownEngine (async). */
export function wrapEngineShutdownEngineAsync(impl: EngineShutdownEngineAsyncImpl): (self: Engine) => Promise<Engine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isRunning === true))) {
      preViolations.push("[Engine.shutdownEngine] pre violated: self.isRunning = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isRunning === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.isRunning = false");
      }
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.fuelFlow = 0.0");
      }
      if (!((__result.self.ignitionActive === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.ignitionActive = false");
      }
      if (!((__result.self.continuousIgnitionCommanded === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.continuousIgnitionCommanded = false");
      }
      if (!((__result.self.reverserDeployed === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.reverserDeployed = false");
      }
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[Engine.shutdownEngine] post violated: self.reverserDeploymentEnabled = false");
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

/** Impl signature for Aircraft.land. User supplies this. */
export type AircraftLandImpl = (self: Aircraft) => { self: Aircraft; modified: { onGround: unknown } };

/** Contract-checking wrapper for Aircraft.land. */
export function wrapAircraftLand(impl: AircraftLandImpl): (self: Aircraft) => Aircraft {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === false))) {
      preViolations.push("[Aircraft.land] pre violated: self.onGround = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.onGround === true))) {
        postViolations.push("[Aircraft.land] post violated: self.onGround = true");
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

/** Impl signature for Aircraft.land (async). User supplies this. */
export type AircraftLandAsyncImpl = (self: Aircraft) => Promise<{ self: Aircraft; modified: { onGround: unknown } }>;

/** Contract-checking wrapper for Aircraft.land (async). */
export function wrapAircraftLandAsync(impl: AircraftLandAsyncImpl): (self: Aircraft) => Promise<Aircraft> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === false))) {
      preViolations.push("[Aircraft.land] pre violated: self.onGround = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.onGround === true))) {
        postViolations.push("[Aircraft.land] post violated: self.onGround = true");
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

/** Impl signature for Aircraft.takeoff. User supplies this. */
export type AircraftTakeoffImpl = (self: Aircraft) => { self: Aircraft; modified: { onGround: unknown } };

/** Contract-checking wrapper for Aircraft.takeoff. */
export function wrapAircraftTakeoff(impl: AircraftTakeoffImpl): (self: Aircraft) => Aircraft {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === true))) {
      preViolations.push("[Aircraft.takeoff] pre violated: self.onGround = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.onGround === false))) {
        postViolations.push("[Aircraft.takeoff] post violated: self.onGround = false");
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

/** Impl signature for Aircraft.takeoff (async). User supplies this. */
export type AircraftTakeoffAsyncImpl = (self: Aircraft) => Promise<{ self: Aircraft; modified: { onGround: unknown } }>;

/** Contract-checking wrapper for Aircraft.takeoff (async). */
export function wrapAircraftTakeoffAsync(impl: AircraftTakeoffAsyncImpl): (self: Aircraft) => Promise<Aircraft> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === true))) {
      preViolations.push("[Aircraft.takeoff] pre violated: self.onGround = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.onGround === false))) {
        postViolations.push("[Aircraft.takeoff] post violated: self.onGround = false");
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

/** Impl signature for Aircraft.setPhase. User supplies this. */
export type AircraftSetPhaseImpl = (self: Aircraft, newPhase: FlightPhase) => { self: Aircraft; modified: { currentPhase: unknown } };

/** Contract-checking wrapper for Aircraft.setPhase. */
export function wrapAircraftSetPhase(impl: AircraftSetPhaseImpl): (self: Aircraft, newPhase: FlightPhase) => Aircraft {
  return (self, newPhase) => {
    const preViolations: string[] = [];
    if (!((newPhase !== null))) {
      preViolations.push("[Aircraft.setPhase] pre violated: newPhase <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newPhase);
      const postViolations: string[] = [];
      if (!((__result.self.currentPhase === newPhase))) {
        postViolations.push("[Aircraft.setPhase] post violated: self.currentPhase = newPhase");
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

/** Impl signature for Aircraft.setPhase (async). User supplies this. */
export type AircraftSetPhaseAsyncImpl = (self: Aircraft, newPhase: FlightPhase) => Promise<{ self: Aircraft; modified: { currentPhase: unknown } }>;

/** Contract-checking wrapper for Aircraft.setPhase (async). */
export function wrapAircraftSetPhaseAsync(impl: AircraftSetPhaseAsyncImpl): (self: Aircraft, newPhase: FlightPhase) => Promise<Aircraft> {
  return async (self, newPhase) => {
    const preViolations: string[] = [];
    if (!((newPhase !== null))) {
      preViolations.push("[Aircraft.setPhase] pre violated: newPhase <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newPhase);
      const postViolations: string[] = [];
      if (!((__result.self.currentPhase === newPhase))) {
        postViolations.push("[Aircraft.setPhase] post violated: self.currentPhase = newPhase");
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

/** Impl signature for SensorFaultRecord.activate. User supplies this. */
export type SensorFaultRecordActivateImpl = (self: SensorFaultRecord, sub: number) => { self: SensorFaultRecord; modified: { isActive: unknown; substituteValue: unknown } };

/** Contract-checking wrapper for SensorFaultRecord.activate. */
export function wrapSensorFaultRecordActivate(impl: SensorFaultRecordActivateImpl): (self: SensorFaultRecord, sub: number) => SensorFaultRecord {
  return (self, sub) => {
    const preViolations: string[] = [];
    if (!((self.isActive === false))) {
      preViolations.push("[SensorFaultRecord.activate] pre violated: self.isActive = false");
    }
    if (!((sub >= 0))) {
      preViolations.push("[SensorFaultRecord.activate] pre violated: sub >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sub);
      const postViolations: string[] = [];
      if (!((__result.self.isActive === true))) {
        postViolations.push("[SensorFaultRecord.activate] post violated: self.isActive = true");
      }
      if (!((__result.self.substituteValue === sub))) {
        postViolations.push("[SensorFaultRecord.activate] post violated: self.substituteValue = sub");
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

/** Impl signature for SensorFaultRecord.activate (async). User supplies this. */
export type SensorFaultRecordActivateAsyncImpl = (self: SensorFaultRecord, sub: number) => Promise<{ self: SensorFaultRecord; modified: { isActive: unknown; substituteValue: unknown } }>;

/** Contract-checking wrapper for SensorFaultRecord.activate (async). */
export function wrapSensorFaultRecordActivateAsync(impl: SensorFaultRecordActivateAsyncImpl): (self: SensorFaultRecord, sub: number) => Promise<SensorFaultRecord> {
  return async (self, sub) => {
    const preViolations: string[] = [];
    if (!((self.isActive === false))) {
      preViolations.push("[SensorFaultRecord.activate] pre violated: self.isActive = false");
    }
    if (!((sub >= 0))) {
      preViolations.push("[SensorFaultRecord.activate] pre violated: sub >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sub);
      const postViolations: string[] = [];
      if (!((__result.self.isActive === true))) {
        postViolations.push("[SensorFaultRecord.activate] post violated: self.isActive = true");
      }
      if (!((__result.self.substituteValue === sub))) {
        postViolations.push("[SensorFaultRecord.activate] post violated: self.substituteValue = sub");
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

/** Impl signature for SensorFaultRecord.deactivate. User supplies this. */
export type SensorFaultRecordDeactivateImpl = (self: SensorFaultRecord) => { self: SensorFaultRecord; modified: { isActive: unknown } };

/** Contract-checking wrapper for SensorFaultRecord.deactivate. */
export function wrapSensorFaultRecordDeactivate(impl: SensorFaultRecordDeactivateImpl): (self: SensorFaultRecord) => SensorFaultRecord {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isActive === true))) {
      preViolations.push("[SensorFaultRecord.deactivate] pre violated: self.isActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isActive === false))) {
        postViolations.push("[SensorFaultRecord.deactivate] post violated: self.isActive = false");
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

/** Impl signature for SensorFaultRecord.deactivate (async). User supplies this. */
export type SensorFaultRecordDeactivateAsyncImpl = (self: SensorFaultRecord) => Promise<{ self: SensorFaultRecord; modified: { isActive: unknown } }>;

/** Contract-checking wrapper for SensorFaultRecord.deactivate (async). */
export function wrapSensorFaultRecordDeactivateAsync(impl: SensorFaultRecordDeactivateAsyncImpl): (self: SensorFaultRecord) => Promise<SensorFaultRecord> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isActive === true))) {
      preViolations.push("[SensorFaultRecord.deactivate] pre violated: self.isActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isActive === false))) {
        postViolations.push("[SensorFaultRecord.deactivate] post violated: self.isActive = false");
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

/** Impl signature for EngineControlSession.enableThrustReverser. User supplies this. */
export type EngineControlSessionEnableThrustReverserImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: {} };

/** Contract-checking wrapper for EngineControlSession.enableThrustReverser. */
export function wrapEngineControlSessionEnableThrustReverser(impl: EngineControlSessionEnableThrustReverserImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.enableThrustReverser] pre violated: self.status = 'ACTIVE'");
    }
    if (!((self.aircraft?.onGround === true))) {
      preViolations.push("[EngineControlSession.enableThrustReverser] pre violated: self.aircraft.onGround = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.engine?.reverserDeploymentEnabled === true))) {
        postViolations.push("[EngineControlSession.enableThrustReverser] post violated: self.engine.reverserDeploymentEnabled = true");
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

/** Impl signature for EngineControlSession.enableThrustReverser (async). User supplies this. */
export type EngineControlSessionEnableThrustReverserAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: {} }>;

/** Contract-checking wrapper for EngineControlSession.enableThrustReverser (async). */
export function wrapEngineControlSessionEnableThrustReverserAsync(impl: EngineControlSessionEnableThrustReverserAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.enableThrustReverser] pre violated: self.status = 'ACTIVE'");
    }
    if (!((self.aircraft?.onGround === true))) {
      preViolations.push("[EngineControlSession.enableThrustReverser] pre violated: self.aircraft.onGround = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.engine?.reverserDeploymentEnabled === true))) {
        postViolations.push("[EngineControlSession.enableThrustReverser] post violated: self.engine.reverserDeploymentEnabled = true");
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

/** Impl signature for EngineControlSession.deployThrustReverser. User supplies this. */
export type EngineControlSessionDeployThrustReverserImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: {} };

/** Contract-checking wrapper for EngineControlSession.deployThrustReverser. */
export function wrapEngineControlSessionDeployThrustReverser(impl: EngineControlSessionDeployThrustReverserImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.deployThrustReverser] pre violated: self.status = 'ACTIVE'");
    }
    if (!((self.aircraft?.onGround === true))) {
      preViolations.push("[EngineControlSession.deployThrustReverser] pre violated: self.aircraft.onGround = true");
    }
    if (!((self.engine?.reverserDeploymentEnabled === true))) {
      preViolations.push("[EngineControlSession.deployThrustReverser] pre violated: self.engine.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.engine?.reverserDeployed === true))) {
        postViolations.push("[EngineControlSession.deployThrustReverser] post violated: self.engine.reverserDeployed = true");
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

/** Impl signature for EngineControlSession.deployThrustReverser (async). User supplies this. */
export type EngineControlSessionDeployThrustReverserAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: {} }>;

/** Contract-checking wrapper for EngineControlSession.deployThrustReverser (async). */
export function wrapEngineControlSessionDeployThrustReverserAsync(impl: EngineControlSessionDeployThrustReverserAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.deployThrustReverser] pre violated: self.status = 'ACTIVE'");
    }
    if (!((self.aircraft?.onGround === true))) {
      preViolations.push("[EngineControlSession.deployThrustReverser] pre violated: self.aircraft.onGround = true");
    }
    if (!((self.engine?.reverserDeploymentEnabled === true))) {
      preViolations.push("[EngineControlSession.deployThrustReverser] pre violated: self.engine.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.engine?.reverserDeployed === true))) {
        postViolations.push("[EngineControlSession.deployThrustReverser] post violated: self.engine.reverserDeployed = true");
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

/** Impl signature for EngineControlSession.retractThrustReverser. User supplies this. */
export type EngineControlSessionRetractThrustReverserImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: {} };

/** Contract-checking wrapper for EngineControlSession.retractThrustReverser. */
export function wrapEngineControlSessionRetractThrustReverser(impl: EngineControlSessionRetractThrustReverserImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.retractThrustReverser] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.engine?.reverserDeployed === false))) {
        postViolations.push("[EngineControlSession.retractThrustReverser] post violated: self.engine.reverserDeployed = false");
      }
      if (!((__result.self.engine?.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSession.retractThrustReverser] post violated: self.engine.reverserDeploymentEnabled = false");
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

/** Impl signature for EngineControlSession.retractThrustReverser (async). User supplies this. */
export type EngineControlSessionRetractThrustReverserAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: {} }>;

/** Contract-checking wrapper for EngineControlSession.retractThrustReverser (async). */
export function wrapEngineControlSessionRetractThrustReverserAsync(impl: EngineControlSessionRetractThrustReverserAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.retractThrustReverser] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.engine?.reverserDeployed === false))) {
        postViolations.push("[EngineControlSession.retractThrustReverser] post violated: self.engine.reverserDeployed = false");
      }
      if (!((__result.self.engine?.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSession.retractThrustReverser] post violated: self.engine.reverserDeploymentEnabled = false");
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

/** Impl signature for EngineControlSession.noteSensorFault. User supplies this. */
export type EngineControlSessionNoteSensorFaultImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: { faultCount: unknown } };

/** Contract-checking wrapper for EngineControlSession.noteSensorFault. */
export function wrapEngineControlSessionNoteSensorFault(impl: EngineControlSessionNoteSensorFaultImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.noteSensorFault] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultCount": self.faultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultCount === (__pre["self.faultCount"] + 1)))) {
        postViolations.push("[EngineControlSession.noteSensorFault] post violated: self.faultCount = self.faultCount@pre + 1");
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

/** Impl signature for EngineControlSession.noteSensorFault (async). User supplies this. */
export type EngineControlSessionNoteSensorFaultAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: { faultCount: unknown } }>;

/** Contract-checking wrapper for EngineControlSession.noteSensorFault (async). */
export function wrapEngineControlSessionNoteSensorFaultAsync(impl: EngineControlSessionNoteSensorFaultAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.noteSensorFault] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultCount": self.faultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultCount === (__pre["self.faultCount"] + 1)))) {
        postViolations.push("[EngineControlSession.noteSensorFault] post violated: self.faultCount = self.faultCount@pre + 1");
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

/** Impl signature for EngineControlSession.clearSensorFault. User supplies this. */
export type EngineControlSessionClearSensorFaultImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: { faultCount: unknown } };

/** Contract-checking wrapper for EngineControlSession.clearSensorFault. */
export function wrapEngineControlSessionClearSensorFault(impl: EngineControlSessionClearSensorFaultImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultCount > 0))) {
      preViolations.push("[EngineControlSession.clearSensorFault] pre violated: self.faultCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultCount": self.faultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultCount === (__pre["self.faultCount"] - 1)))) {
        postViolations.push("[EngineControlSession.clearSensorFault] post violated: self.faultCount = self.faultCount@pre - 1");
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

/** Impl signature for EngineControlSession.clearSensorFault (async). User supplies this. */
export type EngineControlSessionClearSensorFaultAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: { faultCount: unknown } }>;

/** Contract-checking wrapper for EngineControlSession.clearSensorFault (async). */
export function wrapEngineControlSessionClearSensorFaultAsync(impl: EngineControlSessionClearSensorFaultAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultCount > 0))) {
      preViolations.push("[EngineControlSession.clearSensorFault] pre violated: self.faultCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.faultCount": self.faultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultCount === (__pre["self.faultCount"] - 1)))) {
        postViolations.push("[EngineControlSession.clearSensorFault] post violated: self.faultCount = self.faultCount@pre - 1");
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

/** Impl signature for EngineControlSession.runOverspeedCheck. User supplies this. */
export type EngineControlSessionRunOverspeedCheckImpl = (self: EngineControlSession, isFaulty: boolean, rawSpeed: number, modelledSpeed: number) => { self: EngineControlSession; modified: {} };

/** Contract-checking wrapper for EngineControlSession.runOverspeedCheck. */
export function wrapEngineControlSessionRunOverspeedCheck(impl: EngineControlSessionRunOverspeedCheckImpl): (self: EngineControlSession, isFaulty: boolean, rawSpeed: number, modelledSpeed: number) => EngineControlSession {
  return (self, isFaulty, rawSpeed, modelledSpeed) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.runOverspeedCheck] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, isFaulty, rawSpeed, modelledSpeed);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.engine.fuelFlow =
            if (if isFaulty then modelledSpeed else rawSpeed endif) > self.engine.maxSafeSpeed then
              if self.engine.overspeedProtectionFitted then
                self.engine.maxFuelFlow * 0.1
              else
                0.0
              endif
            else
              self.engine.fuelFlow@pre
            endif — @pre supported only on self.<prop> (depth 1)
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

/** Impl signature for EngineControlSession.runOverspeedCheck (async). User supplies this. */
export type EngineControlSessionRunOverspeedCheckAsyncImpl = (self: EngineControlSession, isFaulty: boolean, rawSpeed: number, modelledSpeed: number) => Promise<{ self: EngineControlSession; modified: {} }>;

/** Contract-checking wrapper for EngineControlSession.runOverspeedCheck (async). */
export function wrapEngineControlSessionRunOverspeedCheckAsync(impl: EngineControlSessionRunOverspeedCheckAsyncImpl): (self: EngineControlSession, isFaulty: boolean, rawSpeed: number, modelledSpeed: number) => Promise<EngineControlSession> {
  return async (self, isFaulty, rawSpeed, modelledSpeed) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.runOverspeedCheck] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, isFaulty, rawSpeed, modelledSpeed);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.engine.fuelFlow =
            if (if isFaulty then modelledSpeed else rawSpeed endif) > self.engine.maxSafeSpeed then
              if self.engine.overspeedProtectionFitted then
                self.engine.maxFuelFlow * 0.1
              else
                0.0
              endif
            else
              self.engine.fuelFlow@pre
            endif — @pre supported only on self.<prop> (depth 1)
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

/** Impl signature for EngineControlSession.activateSession. User supplies this. */
export type EngineControlSessionActivateSessionImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: { status: unknown } };

/** Contract-checking wrapper for EngineControlSession.activateSession. */
export function wrapEngineControlSessionActivateSession(impl: EngineControlSessionActivateSessionImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "INACTIVE"))) {
      preViolations.push("[EngineControlSession.activateSession] pre violated: self.status = 'INACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "ACTIVE"))) {
        postViolations.push("[EngineControlSession.activateSession] post violated: self.status = 'ACTIVE'");
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

/** Impl signature for EngineControlSession.activateSession (async). User supplies this. */
export type EngineControlSessionActivateSessionAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: { status: unknown } }>;

/** Contract-checking wrapper for EngineControlSession.activateSession (async). */
export function wrapEngineControlSessionActivateSessionAsync(impl: EngineControlSessionActivateSessionAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "INACTIVE"))) {
      preViolations.push("[EngineControlSession.activateSession] pre violated: self.status = 'INACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "ACTIVE"))) {
        postViolations.push("[EngineControlSession.activateSession] post violated: self.status = 'ACTIVE'");
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

/** Impl signature for EngineControlSession.deactivateSession. User supplies this. */
export type EngineControlSessionDeactivateSessionImpl = (self: EngineControlSession) => { self: EngineControlSession; modified: { status: unknown } };

/** Contract-checking wrapper for EngineControlSession.deactivateSession. */
export function wrapEngineControlSessionDeactivateSession(impl: EngineControlSessionDeactivateSessionImpl): (self: EngineControlSession) => EngineControlSession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.deactivateSession] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "INACTIVE"))) {
        postViolations.push("[EngineControlSession.deactivateSession] post violated: self.status = 'INACTIVE'");
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

/** Impl signature for EngineControlSession.deactivateSession (async). User supplies this. */
export type EngineControlSessionDeactivateSessionAsyncImpl = (self: EngineControlSession) => Promise<{ self: EngineControlSession; modified: { status: unknown } }>;

/** Contract-checking wrapper for EngineControlSession.deactivateSession (async). */
export function wrapEngineControlSessionDeactivateSessionAsync(impl: EngineControlSessionDeactivateSessionAsyncImpl): (self: EngineControlSession) => Promise<EngineControlSession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "ACTIVE"))) {
      preViolations.push("[EngineControlSession.deactivateSession] pre violated: self.status = 'ACTIVE'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "INACTIVE"))) {
        postViolations.push("[EngineControlSession.deactivateSession] post violated: self.status = 'INACTIVE'");
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



