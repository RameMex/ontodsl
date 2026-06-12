// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for BloodSugarSensor. Runtime: string. Compile-time: branded. */
export type BloodSugarSensorId = string & { readonly __brand: "BloodSugarSensorId" };
/** Identity type for PumpActuator. Runtime: string. Compile-time: branded. */
export type PumpActuatorId = string & { readonly __brand: "PumpActuatorId" };
/** Identity type for SystemKind. Runtime: string. Compile-time: branded. */
export type SystemKindId = string & { readonly __brand: "SystemKindId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface BloodSugarSensor {
  readonly cid: BloodSugarSensorId;
  readonly lastReadingMgDl: number;
}

/** @stereotype <<Kind>> */
export interface PumpActuator {
  readonly pid: PumpActuatorId;
  readonly tankCharge: number;
}

/** @stereotype <<Kind>> */
export interface SystemKind {
  readonly sid: SystemKindId;
  readonly currentBloodSugar: number;
  readonly safeMaxDose: number;
  readonly reservoirUnits: number;
}


// ─── Factory functions ───

export function makeBloodSugarSensor(data: {
  cid: string;
  lastReadingMgDl: number;
}): BloodSugarSensor {
  return {
    cid: data.cid as BloodSugarSensorId,
    lastReadingMgDl: data.lastReadingMgDl,
  };
}

export function makePumpActuator(data: {
  pid: string;
  tankCharge: number;
}): PumpActuator {
  return {
    pid: data.pid as PumpActuatorId,
    tankCharge: data.tankCharge,
  };
}

export function makeSystemKind(data: {
  sid: string;
  currentBloodSugar: number;
  safeMaxDose: number;
  reservoirUnits: number;
}): SystemKind {
  return {
    sid: data.sid as SystemKindId,
    currentBloodSugar: data.currentBloodSugar,
    safeMaxDose: data.safeMaxDose,
    reservoirUnits: data.reservoirUnits,
  };
}


// ─── Runtime invariant validators ───


// ─── Event handler wrappers ───

/** Impl signature for BloodSugarSensor.takeReading. User supplies this. */
export type BloodSugarSensorTakeReadingImpl = (self: BloodSugarSensor, value: number) => { self: BloodSugarSensor; modified: { lastReadingMgDl: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.takeReading. */
export function wrapBloodSugarSensorTakeReading(impl: BloodSugarSensorTakeReadingImpl): (self: BloodSugarSensor, value: number) => BloodSugarSensor {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastReadingMgDl === value))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.lastReadingMgDl = value");
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

/** Impl signature for BloodSugarSensor.takeReading (async). User supplies this. */
export type BloodSugarSensorTakeReadingAsyncImpl = (self: BloodSugarSensor, value: number) => Promise<{ self: BloodSugarSensor; modified: { lastReadingMgDl: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.takeReading (async). */
export function wrapBloodSugarSensorTakeReadingAsync(impl: BloodSugarSensorTakeReadingAsyncImpl): (self: BloodSugarSensor, value: number) => Promise<BloodSugarSensor> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastReadingMgDl === value))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.lastReadingMgDl = value");
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

/** Impl signature for PumpActuator.drainTank. User supplies this. */
export type PumpActuatorDrainTankImpl = (self: PumpActuator, amount: number) => { self: PumpActuator; modified: { tankCharge: unknown } };

/** Contract-checking wrapper for PumpActuator.drainTank. */
export function wrapPumpActuatorDrainTank(impl: PumpActuatorDrainTankImpl): (self: PumpActuator, amount: number) => PumpActuator {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount >= 0))) {
      preViolations.push("[PumpActuator.drainTank] pre violated: amount >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tankCharge": self.tankCharge,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.tankCharge === (__pre["self.tankCharge"] - amount)))) {
        postViolations.push("[PumpActuator.drainTank] post violated: self.tankCharge = self.tankCharge@pre - amount");
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

/** Impl signature for PumpActuator.drainTank (async). User supplies this. */
export type PumpActuatorDrainTankAsyncImpl = (self: PumpActuator, amount: number) => Promise<{ self: PumpActuator; modified: { tankCharge: unknown } }>;

/** Contract-checking wrapper for PumpActuator.drainTank (async). */
export function wrapPumpActuatorDrainTankAsync(impl: PumpActuatorDrainTankAsyncImpl): (self: PumpActuator, amount: number) => Promise<PumpActuator> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount >= 0))) {
      preViolations.push("[PumpActuator.drainTank] pre violated: amount >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.tankCharge": self.tankCharge,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.tankCharge === (__pre["self.tankCharge"] - amount)))) {
        postViolations.push("[PumpActuator.drainTank] post violated: self.tankCharge = self.tankCharge@pre - amount");
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

/** Impl signature for SystemKind.deliverInsulin. User supplies this. */
export type SystemKindDeliverInsulinImpl = (self: SystemKind) => { self: SystemKind; modified: { reservoirUnits: unknown; currentBloodSugar: unknown } };

/** Contract-checking wrapper for SystemKind.deliverInsulin. */
export function wrapSystemKindDeliverInsulin(impl: SystemKindDeliverInsulinImpl): (self: SystemKind) => SystemKind {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentBloodSugar > 0))) {
      preViolations.push("[SystemKind.deliverInsulin] pre violated: self.currentBloodSugar > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits >= 0))) {
        postViolations.push("[SystemKind.deliverInsulin] post violated: self.reservoirUnits >= 0.0");
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

/** Impl signature for SystemKind.deliverInsulin (async). User supplies this. */
export type SystemKindDeliverInsulinAsyncImpl = (self: SystemKind) => Promise<{ self: SystemKind; modified: { reservoirUnits: unknown; currentBloodSugar: unknown } }>;

/** Contract-checking wrapper for SystemKind.deliverInsulin (async). */
export function wrapSystemKindDeliverInsulinAsync(impl: SystemKindDeliverInsulinAsyncImpl): (self: SystemKind) => Promise<SystemKind> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentBloodSugar > 0))) {
      preViolations.push("[SystemKind.deliverInsulin] pre violated: self.currentBloodSugar > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits >= 0))) {
        postViolations.push("[SystemKind.deliverInsulin] post violated: self.reservoirUnits >= 0.0");
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



