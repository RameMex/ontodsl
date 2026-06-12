// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for InsulinPump. Runtime: string. Compile-time: branded. */
export type InsulinPumpId = string & { readonly __brand: "InsulinPumpId" };
/** Identity type for BloodSugarReading. Runtime: string. Compile-time: branded. */
export type BloodSugarReadingId = string & { readonly __brand: "BloodSugarReadingId" };
/** Identity type for SelfTestResult. Runtime: string. Compile-time: branded. */
export type SelfTestResultId = string & { readonly __brand: "SelfTestResultId" };
/** Identity type for DeliverySession. Runtime: string. Compile-time: branded. */
export type DeliverySessionId = string & { readonly __brand: "DeliverySessionId" };
/** Identity type for AlarmEvent. Runtime: string. Compile-time: branded. */
export type AlarmEventId = string & { readonly __brand: "AlarmEventId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface InsulinPump {
  readonly pumpId: InsulinPumpId;
  readonly status: string;
  readonly reservoirLevelIU: number;
  readonly safeMaxDoseIU: number;
  readonly lowReservoirThresholdIU: number;
  readonly safeZoneLowMgDl: number;
  readonly safeZoneHighMgDl: number;
  readonly lastReadingMgDl: number;
  readonly prevReadingMgDl: number;
  readonly totalDeliveredIU: number;
  readonly alarmSounding: boolean;
  readonly lowReservoirAlarm: boolean;
}

/** @stereotype <<Subkind>> */
export interface ChildInsulinPump extends InsulinPump {
  readonly paediatricAbsMaxIU: number;
}

/** @stereotype <<Kind>> */
export interface BloodSugarReading {
  readonly readingId: BloodSugarReadingId;
  readonly valueMgDl: number;
  readonly intervalMinutes: number;
  readonly rateOfRiseMgDlPerMin: number;
  readonly safeZoneLowAtRead: number;
  readonly safeZoneHighAtRead: number;
}

/** @stereotype <<Kind>> */
export interface SelfTestResult {
  readonly testId: SelfTestResultId;
  readonly outcome: string;
  readonly sensorOk: boolean;
  readonly pumpMechanismOk: boolean;
  readonly needleOk: boolean;
  readonly reservoirSensorOk: boolean;
}

/** @stereotype <<Role>> */
export interface MonitoredPatient {
  readonly patientId: string;
  readonly name: string;
}

/** @stereotype <<Role>> */
export interface DeliveringPump {
  readonly pumpId: string;
  readonly status: string;
  readonly safeMaxDoseIU: number;
}

/** @stereotype <<Relator>> */
export interface DeliverySession {
  readonly sessionId: DeliverySessionId;
  readonly patient: MonitoredPatient;
  readonly pump: DeliveringPump;
  readonly reading: BloodSugarReading;
  readonly requestedDoseIU: number;
  readonly actualDoseIU: number;
  readonly sessionOutcome: string;
}

/** @stereotype <<Kind>> */
export interface AlarmEvent {
  readonly alarmId: AlarmEventId;
  readonly alarmType: string;
  readonly pumpId: string;
  readonly acknowledged: boolean;
}


// ─── Factory functions ───

export function makePatient(data: {
  patientId: string;
  name: string;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    name: data.name,
  };
}

export function makeInsulinPump(data: {
  pumpId: string;
  status: string;
  reservoirLevelIU: number;
  safeMaxDoseIU: number;
  lowReservoirThresholdIU: number;
  safeZoneLowMgDl: number;
  safeZoneHighMgDl: number;
  lastReadingMgDl: number;
  prevReadingMgDl: number;
  totalDeliveredIU: number;
  alarmSounding: boolean;
  lowReservoirAlarm: boolean;
}): InsulinPump {
  return {
    pumpId: data.pumpId as InsulinPumpId,
    status: data.status,
    reservoirLevelIU: data.reservoirLevelIU,
    safeMaxDoseIU: data.safeMaxDoseIU,
    lowReservoirThresholdIU: data.lowReservoirThresholdIU,
    safeZoneLowMgDl: data.safeZoneLowMgDl,
    safeZoneHighMgDl: data.safeZoneHighMgDl,
    lastReadingMgDl: data.lastReadingMgDl,
    prevReadingMgDl: data.prevReadingMgDl,
    totalDeliveredIU: data.totalDeliveredIU,
    alarmSounding: data.alarmSounding,
    lowReservoirAlarm: data.lowReservoirAlarm,
  };
}

export function makeBloodSugarReading(data: {
  readingId: string;
  valueMgDl: number;
  intervalMinutes: number;
  rateOfRiseMgDlPerMin: number;
  safeZoneLowAtRead: number;
  safeZoneHighAtRead: number;
}): BloodSugarReading {
  return {
    readingId: data.readingId as BloodSugarReadingId,
    valueMgDl: data.valueMgDl,
    intervalMinutes: data.intervalMinutes,
    rateOfRiseMgDlPerMin: data.rateOfRiseMgDlPerMin,
    safeZoneLowAtRead: data.safeZoneLowAtRead,
    safeZoneHighAtRead: data.safeZoneHighAtRead,
  };
}

export function makeSelfTestResult(data: {
  testId: string;
  outcome: string;
  sensorOk: boolean;
  pumpMechanismOk: boolean;
  needleOk: boolean;
  reservoirSensorOk: boolean;
}): SelfTestResult {
  return {
    testId: data.testId as SelfTestResultId,
    outcome: data.outcome,
    sensorOk: data.sensorOk,
    pumpMechanismOk: data.pumpMechanismOk,
    needleOk: data.needleOk,
    reservoirSensorOk: data.reservoirSensorOk,
  };
}

export function makeDeliverySession(data: {
  sessionId: string;
  patient: MonitoredPatient;
  pump: DeliveringPump;
  reading: BloodSugarReading;
  requestedDoseIU: number;
  actualDoseIU: number;
  sessionOutcome: string;
}): DeliverySession {
  return {
    sessionId: data.sessionId as DeliverySessionId,
    patient: data.patient,
    pump: data.pump,
    reading: data.reading,
    requestedDoseIU: data.requestedDoseIU,
    actualDoseIU: data.actualDoseIU,
    sessionOutcome: data.sessionOutcome,
  };
}

export function makeAlarmEvent(data: {
  alarmId: string;
  alarmType: string;
  pumpId: string;
  acknowledged: boolean;
}): AlarmEvent {
  return {
    alarmId: data.alarmId as AlarmEventId,
    alarmType: data.alarmType,
    pumpId: data.pumpId,
    acknowledged: data.acknowledged,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Patient] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinPump. Returns empty array when valid. */
export function validateInsulinPump(instance: InsulinPump): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pumpId !== null))) {
    violations.push("[InsulinPump] invariant violated: self.pumpId <> null");
  }
  if (!((instance.safeMaxDoseIU > 0))) {
    violations.push("[InsulinPump] invariant violated: self.safeMaxDoseIU > 0.0");
  }
  if (!((instance.lowReservoirThresholdIU >= 0))) {
    violations.push("[InsulinPump] invariant violated: self.lowReservoirThresholdIU >= 0.0");
  }
  if (!((instance.safeZoneLowMgDl > 0))) {
    violations.push("[InsulinPump] invariant violated: self.safeZoneLowMgDl > 0.0");
  }
  if (!((instance.safeZoneHighMgDl > instance.safeZoneLowMgDl))) {
    violations.push("[InsulinPump] invariant violated: self.safeZoneHighMgDl > self.safeZoneLowMgDl");
  }
  if (!((instance.reservoirLevelIU >= 0))) {
    violations.push("[InsulinPump] invariant violated: self.reservoirLevelIU >= 0.0");
  }
  if (!((instance.totalDeliveredIU >= 0))) {
    violations.push("[InsulinPump] invariant violated: self.totalDeliveredIU >= 0.0");
  }
  if (!((((instance.status === "OPERATIONAL") || (instance.status === "FAULT")) || (instance.status === "SUSPENDED")))) {
    violations.push("[InsulinPump] invariant violated: (self.status = 'OPERATIONAL') or (self.status = 'FAULT') or (self.status = 'SUSPENDED')");
  }
  if (!(((instance.status === "FAULT") === (instance.alarmSounding === true)))) {
    violations.push("[InsulinPump] invariant violated: (self.status = 'FAULT') = (self.alarmSounding = true)");
  }
  return violations;
}

/** Runtime invariant check for ChildInsulinPump. Returns empty array when valid. */
export function validateChildInsulinPump(instance: ChildInsulinPump): readonly string[] {
  const violations: string[] = [];
  if (!((instance.paediatricAbsMaxIU > 0))) {
    violations.push("[ChildInsulinPump] invariant violated: self.paediatricAbsMaxIU > 0.0");
  }
  if (!((instance.safeMaxDoseIU <= instance.paediatricAbsMaxIU))) {
    violations.push("[ChildInsulinPump] invariant violated: self.safeMaxDoseIU <= self.paediatricAbsMaxIU");
  }
  return violations;
}

/** Runtime invariant check for BloodSugarReading. Returns empty array when valid. */
export function validateBloodSugarReading(instance: BloodSugarReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[BloodSugarReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.valueMgDl > 0))) {
    violations.push("[BloodSugarReading] invariant violated: self.valueMgDl > 0.0");
  }
  if (!((instance.intervalMinutes > 0))) {
    violations.push("[BloodSugarReading] invariant violated: self.intervalMinutes > 0.0");
  }
  if (!((instance.safeZoneLowAtRead > 0))) {
    violations.push("[BloodSugarReading] invariant violated: self.safeZoneLowAtRead > 0.0");
  }
  if (!((instance.safeZoneHighAtRead > instance.safeZoneLowAtRead))) {
    violations.push("[BloodSugarReading] invariant violated: self.safeZoneHighAtRead > self.safeZoneLowAtRead");
  }
  return violations;
}

/** Runtime invariant check for SelfTestResult. Returns empty array when valid. */
export function validateSelfTestResult(instance: SelfTestResult): readonly string[] {
  const violations: string[] = [];
  if (!((instance.testId !== null))) {
    violations.push("[SelfTestResult] invariant violated: self.testId <> null");
  }
  if (!(((instance.outcome === "PASS") || (instance.outcome === "FAIL")))) {
    violations.push("[SelfTestResult] invariant violated: (self.outcome = 'PASS') or (self.outcome = 'FAIL')");
  }
  if (!(((instance.outcome === "PASS") === (((instance.sensorOk && instance.pumpMechanismOk) && instance.needleOk) && instance.reservoirSensorOk)))) {
    violations.push("[SelfTestResult] invariant violated: (self.outcome = 'PASS') = (self.sensorOk and self.pumpMechanismOk and self.needleOk and self.reservoirSensorOk)");
  }
  return violations;
}

/** Runtime invariant check for DeliverySession. Returns empty array when valid. */
export function validateDeliverySession(instance: DeliverySession): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sessionId !== null))) {
    violations.push("[DeliverySession] invariant violated: self.sessionId <> null");
  }
  if (!((instance.patient !== null))) {
    violations.push("[DeliverySession] invariant violated: self.patient <> null");
  }
  if (!((instance.pump !== null))) {
    violations.push("[DeliverySession] invariant violated: self.pump <> null");
  }
  if (!((instance.reading !== null))) {
    violations.push("[DeliverySession] invariant violated: self.reading <> null");
  }
  if (!((instance.requestedDoseIU >= 0))) {
    violations.push("[DeliverySession] invariant violated: self.requestedDoseIU >= 0.0");
  }
  if (!((instance.actualDoseIU >= 0))) {
    violations.push("[DeliverySession] invariant violated: self.actualDoseIU >= 0.0");
  }
  if (!((instance.actualDoseIU <= instance.pump?.safeMaxDoseIU))) {
    violations.push("[DeliverySession] invariant violated: self.actualDoseIU <= self.pump.safeMaxDoseIU");
  }
  if (!(((((instance.sessionOutcome === "NO_ACTION") || (instance.sessionOutcome === "DOSE_DELIVERED")) || (instance.sessionOutcome === "DOSE_CAPPED")) || (instance.sessionOutcome === "FAULT_SUSPENDED")))) {
    violations.push("[DeliverySession] invariant violated: (self.sessionOutcome = 'NO_ACTION') or (self.sessionOutcome = 'DOSE_DELIVERED') or (self.sessionOutcome = 'DOSE_CAPPED') or (self.sessionOutcome = 'FAULT_SUSPENDED')");
  }
  return violations;
}

/** Runtime invariant check for AlarmEvent. Returns empty array when valid. */
export function validateAlarmEvent(instance: AlarmEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmId !== null))) {
    violations.push("[AlarmEvent] invariant violated: self.alarmId <> null");
  }
  if (!((instance.pumpId !== null))) {
    violations.push("[AlarmEvent] invariant violated: self.pumpId <> null");
  }
  if (!(((instance.alarmType === "HARDWARE_FAULT") || (instance.alarmType === "LOW_RESERVOIR")))) {
    violations.push("[AlarmEvent] invariant violated: (self.alarmType = 'HARDWARE_FAULT') or (self.alarmType = 'LOW_RESERVOIR')");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for InsulinPump.configure. User supplies this. */
export type InsulinPumpConfigureImpl = (self: InsulinPump, maxDoseIU: number, lowResThr: number, zoneLow: number, zoneHigh: number) => { self: InsulinPump; modified: { safeMaxDoseIU: unknown; lowReservoirThresholdIU: unknown; safeZoneLowMgDl: unknown; safeZoneHighMgDl: unknown } };

/** Contract-checking wrapper for InsulinPump.configure. */
export function wrapInsulinPumpConfigure(impl: InsulinPumpConfigureImpl): (self: InsulinPump, maxDoseIU: number, lowResThr: number, zoneLow: number, zoneHigh: number) => InsulinPump {
  return (self, maxDoseIU, lowResThr, zoneLow, zoneHigh) => {
    const preViolations: string[] = [];
    if (!((maxDoseIU > 0))) {
      preViolations.push("[InsulinPump.configure] pre violated: maxDoseIU > 0.0");
    }
    if (!((lowResThr >= 0))) {
      preViolations.push("[InsulinPump.configure] pre violated: lowResThr >= 0.0");
    }
    if (!((zoneLow > 0))) {
      preViolations.push("[InsulinPump.configure] pre violated: zoneLow > 0.0");
    }
    if (!((zoneHigh > zoneLow))) {
      preViolations.push("[InsulinPump.configure] pre violated: zoneHigh > zoneLow");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, maxDoseIU, lowResThr, zoneLow, zoneHigh);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseIU === maxDoseIU))) {
        postViolations.push("[InsulinPump.configure] post violated: self.safeMaxDoseIU = maxDoseIU");
      }
      if (!((__result.self.lowReservoirThresholdIU === lowResThr))) {
        postViolations.push("[InsulinPump.configure] post violated: self.lowReservoirThresholdIU = lowResThr");
      }
      if (!((__result.self.safeZoneLowMgDl === zoneLow))) {
        postViolations.push("[InsulinPump.configure] post violated: self.safeZoneLowMgDl = zoneLow");
      }
      if (!((__result.self.safeZoneHighMgDl === zoneHigh))) {
        postViolations.push("[InsulinPump.configure] post violated: self.safeZoneHighMgDl = zoneHigh");
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

/** Impl signature for InsulinPump.configure (async). User supplies this. */
export type InsulinPumpConfigureAsyncImpl = (self: InsulinPump, maxDoseIU: number, lowResThr: number, zoneLow: number, zoneHigh: number) => Promise<{ self: InsulinPump; modified: { safeMaxDoseIU: unknown; lowReservoirThresholdIU: unknown; safeZoneLowMgDl: unknown; safeZoneHighMgDl: unknown } }>;

/** Contract-checking wrapper for InsulinPump.configure (async). */
export function wrapInsulinPumpConfigureAsync(impl: InsulinPumpConfigureAsyncImpl): (self: InsulinPump, maxDoseIU: number, lowResThr: number, zoneLow: number, zoneHigh: number) => Promise<InsulinPump> {
  return async (self, maxDoseIU, lowResThr, zoneLow, zoneHigh) => {
    const preViolations: string[] = [];
    if (!((maxDoseIU > 0))) {
      preViolations.push("[InsulinPump.configure] pre violated: maxDoseIU > 0.0");
    }
    if (!((lowResThr >= 0))) {
      preViolations.push("[InsulinPump.configure] pre violated: lowResThr >= 0.0");
    }
    if (!((zoneLow > 0))) {
      preViolations.push("[InsulinPump.configure] pre violated: zoneLow > 0.0");
    }
    if (!((zoneHigh > zoneLow))) {
      preViolations.push("[InsulinPump.configure] pre violated: zoneHigh > zoneLow");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, maxDoseIU, lowResThr, zoneLow, zoneHigh);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseIU === maxDoseIU))) {
        postViolations.push("[InsulinPump.configure] post violated: self.safeMaxDoseIU = maxDoseIU");
      }
      if (!((__result.self.lowReservoirThresholdIU === lowResThr))) {
        postViolations.push("[InsulinPump.configure] post violated: self.lowReservoirThresholdIU = lowResThr");
      }
      if (!((__result.self.safeZoneLowMgDl === zoneLow))) {
        postViolations.push("[InsulinPump.configure] post violated: self.safeZoneLowMgDl = zoneLow");
      }
      if (!((__result.self.safeZoneHighMgDl === zoneHigh))) {
        postViolations.push("[InsulinPump.configure] post violated: self.safeZoneHighMgDl = zoneHigh");
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

/** Impl signature for InsulinPump.recordReading. User supplies this. */
export type InsulinPumpRecordReadingImpl = (self: InsulinPump, bgMgDl: number) => { self: InsulinPump; modified: { prevReadingMgDl: unknown; lastReadingMgDl: unknown } };

/** Contract-checking wrapper for InsulinPump.recordReading. */
export function wrapInsulinPumpRecordReading(impl: InsulinPumpRecordReadingImpl): (self: InsulinPump, bgMgDl: number) => InsulinPump {
  return (self, bgMgDl) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.recordReading] pre violated: self.status = 'OPERATIONAL'");
    }
    if (!((bgMgDl > 0))) {
      preViolations.push("[InsulinPump.recordReading] pre violated: bgMgDl > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastReadingMgDl": self.lastReadingMgDl,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, bgMgDl);
      const postViolations: string[] = [];
      if (!((__result.self.prevReadingMgDl === __pre["self.lastReadingMgDl"]))) {
        postViolations.push("[InsulinPump.recordReading] post violated: self.prevReadingMgDl = self.lastReadingMgDl@pre");
      }
      if (!((__result.self.lastReadingMgDl === bgMgDl))) {
        postViolations.push("[InsulinPump.recordReading] post violated: self.lastReadingMgDl = bgMgDl");
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

/** Impl signature for InsulinPump.recordReading (async). User supplies this. */
export type InsulinPumpRecordReadingAsyncImpl = (self: InsulinPump, bgMgDl: number) => Promise<{ self: InsulinPump; modified: { prevReadingMgDl: unknown; lastReadingMgDl: unknown } }>;

/** Contract-checking wrapper for InsulinPump.recordReading (async). */
export function wrapInsulinPumpRecordReadingAsync(impl: InsulinPumpRecordReadingAsyncImpl): (self: InsulinPump, bgMgDl: number) => Promise<InsulinPump> {
  return async (self, bgMgDl) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.recordReading] pre violated: self.status = 'OPERATIONAL'");
    }
    if (!((bgMgDl > 0))) {
      preViolations.push("[InsulinPump.recordReading] pre violated: bgMgDl > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastReadingMgDl": self.lastReadingMgDl,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, bgMgDl);
      const postViolations: string[] = [];
      if (!((__result.self.prevReadingMgDl === __pre["self.lastReadingMgDl"]))) {
        postViolations.push("[InsulinPump.recordReading] post violated: self.prevReadingMgDl = self.lastReadingMgDl@pre");
      }
      if (!((__result.self.lastReadingMgDl === bgMgDl))) {
        postViolations.push("[InsulinPump.recordReading] post violated: self.lastReadingMgDl = bgMgDl");
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

/** Impl signature for InsulinPump.deliverInsulin. User supplies this. */
export type InsulinPumpDeliverInsulinImpl = (self: InsulinPump, doseIU: number) => { self: InsulinPump; modified: { reservoirLevelIU: unknown; totalDeliveredIU: unknown; lowReservoirAlarm: unknown } };

/** Contract-checking wrapper for InsulinPump.deliverInsulin. */
export function wrapInsulinPumpDeliverInsulin(impl: InsulinPumpDeliverInsulinImpl): (self: InsulinPump, doseIU: number) => InsulinPump {
  return (self, doseIU) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.deliverInsulin] pre violated: self.status = 'OPERATIONAL'");
    }
    if (!((doseIU > 0))) {
      preViolations.push("[InsulinPump.deliverInsulin] pre violated: doseIU > 0.0");
    }
    if (!((self.reservoirLevelIU > 0))) {
      preViolations.push("[InsulinPump.deliverInsulin] pre violated: self.reservoirLevelIU > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirLevelIU": self.reservoirLevelIU,
      "self.totalDeliveredIU": self.totalDeliveredIU,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, doseIU);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirLevelIU === (__pre["self.reservoirLevelIU"] - (((doseIU <= __result.self.safeMaxDoseIU)) ? (doseIU) : (__result.self.safeMaxDoseIU)))))) {
        postViolations.push("[InsulinPump.deliverInsulin] post violated: self.reservoirLevelIU = self.reservoirLevelIU@pre - (if doseIU <= self.safeMaxDoseIU then doseIU else self.safeMaxDoseIU endif)");
      }
      if (!((__result.self.totalDeliveredIU === (__pre["self.totalDeliveredIU"] + (((doseIU <= __result.self.safeMaxDoseIU)) ? (doseIU) : (__result.self.safeMaxDoseIU)))))) {
        postViolations.push("[InsulinPump.deliverInsulin] post violated: self.totalDeliveredIU = self.totalDeliveredIU@pre + (if doseIU <= self.safeMaxDoseIU then doseIU else self.safeMaxDoseIU endif)");
      }
      if (!((__result.self.lowReservoirAlarm === (__result.self.reservoirLevelIU <= __result.self.lowReservoirThresholdIU)))) {
        postViolations.push("[InsulinPump.deliverInsulin] post violated: self.lowReservoirAlarm = (self.reservoirLevelIU <= self.lowReservoirThresholdIU)");
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

/** Impl signature for InsulinPump.deliverInsulin (async). User supplies this. */
export type InsulinPumpDeliverInsulinAsyncImpl = (self: InsulinPump, doseIU: number) => Promise<{ self: InsulinPump; modified: { reservoirLevelIU: unknown; totalDeliveredIU: unknown; lowReservoirAlarm: unknown } }>;

/** Contract-checking wrapper for InsulinPump.deliverInsulin (async). */
export function wrapInsulinPumpDeliverInsulinAsync(impl: InsulinPumpDeliverInsulinAsyncImpl): (self: InsulinPump, doseIU: number) => Promise<InsulinPump> {
  return async (self, doseIU) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.deliverInsulin] pre violated: self.status = 'OPERATIONAL'");
    }
    if (!((doseIU > 0))) {
      preViolations.push("[InsulinPump.deliverInsulin] pre violated: doseIU > 0.0");
    }
    if (!((self.reservoirLevelIU > 0))) {
      preViolations.push("[InsulinPump.deliverInsulin] pre violated: self.reservoirLevelIU > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirLevelIU": self.reservoirLevelIU,
      "self.totalDeliveredIU": self.totalDeliveredIU,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, doseIU);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirLevelIU === (__pre["self.reservoirLevelIU"] - (((doseIU <= __result.self.safeMaxDoseIU)) ? (doseIU) : (__result.self.safeMaxDoseIU)))))) {
        postViolations.push("[InsulinPump.deliverInsulin] post violated: self.reservoirLevelIU = self.reservoirLevelIU@pre - (if doseIU <= self.safeMaxDoseIU then doseIU else self.safeMaxDoseIU endif)");
      }
      if (!((__result.self.totalDeliveredIU === (__pre["self.totalDeliveredIU"] + (((doseIU <= __result.self.safeMaxDoseIU)) ? (doseIU) : (__result.self.safeMaxDoseIU)))))) {
        postViolations.push("[InsulinPump.deliverInsulin] post violated: self.totalDeliveredIU = self.totalDeliveredIU@pre + (if doseIU <= self.safeMaxDoseIU then doseIU else self.safeMaxDoseIU endif)");
      }
      if (!((__result.self.lowReservoirAlarm === (__result.self.reservoirLevelIU <= __result.self.lowReservoirThresholdIU)))) {
        postViolations.push("[InsulinPump.deliverInsulin] post violated: self.lowReservoirAlarm = (self.reservoirLevelIU <= self.lowReservoirThresholdIU)");
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

/** Impl signature for InsulinPump.declareFault. User supplies this. */
export type InsulinPumpDeclareFaultImpl = (self: InsulinPump) => { self: InsulinPump; modified: { status: unknown; alarmSounding: unknown } };

/** Contract-checking wrapper for InsulinPump.declareFault. */
export function wrapInsulinPumpDeclareFault(impl: InsulinPumpDeclareFaultImpl): (self: InsulinPump) => InsulinPump {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.declareFault] pre violated: self.status = 'OPERATIONAL'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "FAULT"))) {
        postViolations.push("[InsulinPump.declareFault] post violated: self.status = 'FAULT'");
      }
      if (!((__result.self.alarmSounding === true))) {
        postViolations.push("[InsulinPump.declareFault] post violated: self.alarmSounding = true");
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

/** Impl signature for InsulinPump.declareFault (async). User supplies this. */
export type InsulinPumpDeclareFaultAsyncImpl = (self: InsulinPump) => Promise<{ self: InsulinPump; modified: { status: unknown; alarmSounding: unknown } }>;

/** Contract-checking wrapper for InsulinPump.declareFault (async). */
export function wrapInsulinPumpDeclareFaultAsync(impl: InsulinPumpDeclareFaultAsyncImpl): (self: InsulinPump) => Promise<InsulinPump> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.declareFault] pre violated: self.status = 'OPERATIONAL'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "FAULT"))) {
        postViolations.push("[InsulinPump.declareFault] post violated: self.status = 'FAULT'");
      }
      if (!((__result.self.alarmSounding === true))) {
        postViolations.push("[InsulinPump.declareFault] post violated: self.alarmSounding = true");
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

/** Impl signature for InsulinPump.suspend. User supplies this. */
export type InsulinPumpSuspendImpl = (self: InsulinPump) => { self: InsulinPump; modified: { status: unknown } };

/** Contract-checking wrapper for InsulinPump.suspend. */
export function wrapInsulinPumpSuspend(impl: InsulinPumpSuspendImpl): (self: InsulinPump) => InsulinPump {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.suspend] pre violated: self.status = 'OPERATIONAL'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "SUSPENDED"))) {
        postViolations.push("[InsulinPump.suspend] post violated: self.status = 'SUSPENDED'");
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

/** Impl signature for InsulinPump.suspend (async). User supplies this. */
export type InsulinPumpSuspendAsyncImpl = (self: InsulinPump) => Promise<{ self: InsulinPump; modified: { status: unknown } }>;

/** Contract-checking wrapper for InsulinPump.suspend (async). */
export function wrapInsulinPumpSuspendAsync(impl: InsulinPumpSuspendAsyncImpl): (self: InsulinPump) => Promise<InsulinPump> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPERATIONAL"))) {
      preViolations.push("[InsulinPump.suspend] pre violated: self.status = 'OPERATIONAL'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "SUSPENDED"))) {
        postViolations.push("[InsulinPump.suspend] post violated: self.status = 'SUSPENDED'");
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

/** Impl signature for InsulinPump.resume. User supplies this. */
export type InsulinPumpResumeImpl = (self: InsulinPump) => { self: InsulinPump; modified: { status: unknown } };

/** Contract-checking wrapper for InsulinPump.resume. */
export function wrapInsulinPumpResume(impl: InsulinPumpResumeImpl): (self: InsulinPump) => InsulinPump {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "SUSPENDED"))) {
      preViolations.push("[InsulinPump.resume] pre violated: self.status = 'SUSPENDED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "OPERATIONAL"))) {
        postViolations.push("[InsulinPump.resume] post violated: self.status = 'OPERATIONAL'");
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

/** Impl signature for InsulinPump.resume (async). User supplies this. */
export type InsulinPumpResumeAsyncImpl = (self: InsulinPump) => Promise<{ self: InsulinPump; modified: { status: unknown } }>;

/** Contract-checking wrapper for InsulinPump.resume (async). */
export function wrapInsulinPumpResumeAsync(impl: InsulinPumpResumeAsyncImpl): (self: InsulinPump) => Promise<InsulinPump> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "SUSPENDED"))) {
      preViolations.push("[InsulinPump.resume] pre violated: self.status = 'SUSPENDED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "OPERATIONAL"))) {
        postViolations.push("[InsulinPump.resume] post violated: self.status = 'OPERATIONAL'");
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

/** Impl signature for InsulinPump.clearFault. User supplies this. */
export type InsulinPumpClearFaultImpl = (self: InsulinPump, newReservoirLevelIU: number) => { self: InsulinPump; modified: { status: unknown; alarmSounding: unknown; lowReservoirAlarm: unknown; reservoirLevelIU: unknown; totalDeliveredIU: unknown } };

/** Contract-checking wrapper for InsulinPump.clearFault. */
export function wrapInsulinPumpClearFault(impl: InsulinPumpClearFaultImpl): (self: InsulinPump, newReservoirLevelIU: number) => InsulinPump {
  return (self, newReservoirLevelIU) => {
    const preViolations: string[] = [];
    if (!((self.status === "FAULT"))) {
      preViolations.push("[InsulinPump.clearFault] pre violated: self.status = 'FAULT'");
    }
    if (!((newReservoirLevelIU > self.lowReservoirThresholdIU))) {
      preViolations.push("[InsulinPump.clearFault] pre violated: newReservoirLevelIU > self.lowReservoirThresholdIU");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newReservoirLevelIU);
      const postViolations: string[] = [];
      if (!((__result.self.status === "OPERATIONAL"))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.status = 'OPERATIONAL'");
      }
      if (!((__result.self.alarmSounding === false))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.alarmSounding = false");
      }
      if (!((__result.self.lowReservoirAlarm === false))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.lowReservoirAlarm = false");
      }
      if (!((__result.self.reservoirLevelIU === newReservoirLevelIU))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.reservoirLevelIU = newReservoirLevelIU");
      }
      if (!((__result.self.totalDeliveredIU === 0))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.totalDeliveredIU = 0.0");
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

/** Impl signature for InsulinPump.clearFault (async). User supplies this. */
export type InsulinPumpClearFaultAsyncImpl = (self: InsulinPump, newReservoirLevelIU: number) => Promise<{ self: InsulinPump; modified: { status: unknown; alarmSounding: unknown; lowReservoirAlarm: unknown; reservoirLevelIU: unknown; totalDeliveredIU: unknown } }>;

/** Contract-checking wrapper for InsulinPump.clearFault (async). */
export function wrapInsulinPumpClearFaultAsync(impl: InsulinPumpClearFaultAsyncImpl): (self: InsulinPump, newReservoirLevelIU: number) => Promise<InsulinPump> {
  return async (self, newReservoirLevelIU) => {
    const preViolations: string[] = [];
    if (!((self.status === "FAULT"))) {
      preViolations.push("[InsulinPump.clearFault] pre violated: self.status = 'FAULT'");
    }
    if (!((newReservoirLevelIU > self.lowReservoirThresholdIU))) {
      preViolations.push("[InsulinPump.clearFault] pre violated: newReservoirLevelIU > self.lowReservoirThresholdIU");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newReservoirLevelIU);
      const postViolations: string[] = [];
      if (!((__result.self.status === "OPERATIONAL"))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.status = 'OPERATIONAL'");
      }
      if (!((__result.self.alarmSounding === false))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.alarmSounding = false");
      }
      if (!((__result.self.lowReservoirAlarm === false))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.lowReservoirAlarm = false");
      }
      if (!((__result.self.reservoirLevelIU === newReservoirLevelIU))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.reservoirLevelIU = newReservoirLevelIU");
      }
      if (!((__result.self.totalDeliveredIU === 0))) {
        postViolations.push("[InsulinPump.clearFault] post violated: self.totalDeliveredIU = 0.0");
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

/** Impl signature for InsulinPump.refillReservoir. User supplies this. */
export type InsulinPumpRefillReservoirImpl = (self: InsulinPump, addedIU: number) => { self: InsulinPump; modified: { reservoirLevelIU: unknown; lowReservoirAlarm: unknown } };

/** Contract-checking wrapper for InsulinPump.refillReservoir. */
export function wrapInsulinPumpRefillReservoir(impl: InsulinPumpRefillReservoirImpl): (self: InsulinPump, addedIU: number) => InsulinPump {
  return (self, addedIU) => {
    const preViolations: string[] = [];
    if (!((self.status !== "FAULT"))) {
      preViolations.push("[InsulinPump.refillReservoir] pre violated: self.status <> 'FAULT'");
    }
    if (!((addedIU > 0))) {
      preViolations.push("[InsulinPump.refillReservoir] pre violated: addedIU > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirLevelIU": self.reservoirLevelIU,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, addedIU);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirLevelIU === (__pre["self.reservoirLevelIU"] + addedIU)))) {
        postViolations.push("[InsulinPump.refillReservoir] post violated: self.reservoirLevelIU = self.reservoirLevelIU@pre + addedIU");
      }
      if (!((__result.self.lowReservoirAlarm === (__result.self.reservoirLevelIU <= __result.self.lowReservoirThresholdIU)))) {
        postViolations.push("[InsulinPump.refillReservoir] post violated: self.lowReservoirAlarm = (self.reservoirLevelIU <= self.lowReservoirThresholdIU)");
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

/** Impl signature for InsulinPump.refillReservoir (async). User supplies this. */
export type InsulinPumpRefillReservoirAsyncImpl = (self: InsulinPump, addedIU: number) => Promise<{ self: InsulinPump; modified: { reservoirLevelIU: unknown; lowReservoirAlarm: unknown } }>;

/** Contract-checking wrapper for InsulinPump.refillReservoir (async). */
export function wrapInsulinPumpRefillReservoirAsync(impl: InsulinPumpRefillReservoirAsyncImpl): (self: InsulinPump, addedIU: number) => Promise<InsulinPump> {
  return async (self, addedIU) => {
    const preViolations: string[] = [];
    if (!((self.status !== "FAULT"))) {
      preViolations.push("[InsulinPump.refillReservoir] pre violated: self.status <> 'FAULT'");
    }
    if (!((addedIU > 0))) {
      preViolations.push("[InsulinPump.refillReservoir] pre violated: addedIU > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirLevelIU": self.reservoirLevelIU,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, addedIU);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirLevelIU === (__pre["self.reservoirLevelIU"] + addedIU)))) {
        postViolations.push("[InsulinPump.refillReservoir] post violated: self.reservoirLevelIU = self.reservoirLevelIU@pre + addedIU");
      }
      if (!((__result.self.lowReservoirAlarm === (__result.self.reservoirLevelIU <= __result.self.lowReservoirThresholdIU)))) {
        postViolations.push("[InsulinPump.refillReservoir] post violated: self.lowReservoirAlarm = (self.reservoirLevelIU <= self.lowReservoirThresholdIU)");
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

/** Impl signature for ChildInsulinPump.setPaediatricMax. User supplies this. */
export type ChildInsulinPumpSetPaediatricMaxImpl = (self: ChildInsulinPump, absMax: number) => { self: ChildInsulinPump; modified: { paediatricAbsMaxIU: unknown } };

/** Contract-checking wrapper for ChildInsulinPump.setPaediatricMax. */
export function wrapChildInsulinPumpSetPaediatricMax(impl: ChildInsulinPumpSetPaediatricMaxImpl): (self: ChildInsulinPump, absMax: number) => ChildInsulinPump {
  return (self, absMax) => {
    const preViolations: string[] = [];
    if (!((absMax > 0))) {
      preViolations.push("[ChildInsulinPump.setPaediatricMax] pre violated: absMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, absMax);
      const postViolations: string[] = [];
      if (!((__result.self.paediatricAbsMaxIU === absMax))) {
        postViolations.push("[ChildInsulinPump.setPaediatricMax] post violated: self.paediatricAbsMaxIU = absMax");
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

/** Impl signature for ChildInsulinPump.setPaediatricMax (async). User supplies this. */
export type ChildInsulinPumpSetPaediatricMaxAsyncImpl = (self: ChildInsulinPump, absMax: number) => Promise<{ self: ChildInsulinPump; modified: { paediatricAbsMaxIU: unknown } }>;

/** Contract-checking wrapper for ChildInsulinPump.setPaediatricMax (async). */
export function wrapChildInsulinPumpSetPaediatricMaxAsync(impl: ChildInsulinPumpSetPaediatricMaxAsyncImpl): (self: ChildInsulinPump, absMax: number) => Promise<ChildInsulinPump> {
  return async (self, absMax) => {
    const preViolations: string[] = [];
    if (!((absMax > 0))) {
      preViolations.push("[ChildInsulinPump.setPaediatricMax] pre violated: absMax > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, absMax);
      const postViolations: string[] = [];
      if (!((__result.self.paediatricAbsMaxIU === absMax))) {
        postViolations.push("[ChildInsulinPump.setPaediatricMax] post violated: self.paediatricAbsMaxIU = absMax");
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

/** Impl signature for DeliverySession.decideDose. User supplies this. */
export type DeliverySessionDecideDoseImpl = (self: DeliverySession, reqDoseIU: number) => { self: DeliverySession; modified: { requestedDoseIU: unknown; actualDoseIU: unknown; sessionOutcome: unknown } };

/** Contract-checking wrapper for DeliverySession.decideDose. */
export function wrapDeliverySessionDecideDose(impl: DeliverySessionDecideDoseImpl): (self: DeliverySession, reqDoseIU: number) => DeliverySession {
  return (self, reqDoseIU) => {
    const preViolations: string[] = [];
    if (!((self.pump?.status === "OPERATIONAL"))) {
      preViolations.push("[DeliverySession.decideDose] pre violated: self.pump.status = 'OPERATIONAL'");
    }
    if (!((reqDoseIU >= 0))) {
      preViolations.push("[DeliverySession.decideDose] pre violated: reqDoseIU >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reqDoseIU);
      const postViolations: string[] = [];
      if (!((__result.self.requestedDoseIU === reqDoseIU))) {
        postViolations.push("[DeliverySession.decideDose] post violated: self.requestedDoseIU = reqDoseIU");
      }
      if (!((__result.self.actualDoseIU === (((reqDoseIU === 0)) ? (0) : ((((reqDoseIU <= __result.self.pump?.safeMaxDoseIU)) ? (reqDoseIU) : (__result.self.pump?.safeMaxDoseIU))))))) {
        postViolations.push("[DeliverySession.decideDose] post violated: self.actualDoseIU = if reqDoseIU = 0.0 then 0.0 else if reqDoseIU <= self.pump.safeMaxDoseIU then reqDoseIU else self.pump.safeMaxDoseIU endif endif");
      }
      if (!((__result.self.sessionOutcome === (((reqDoseIU === 0)) ? ("NO_ACTION") : ((((reqDoseIU <= __result.self.pump?.safeMaxDoseIU)) ? ("DOSE_DELIVERED") : ("DOSE_CAPPED"))))))) {
        postViolations.push("[DeliverySession.decideDose] post violated: self.sessionOutcome = if reqDoseIU = 0.0 then 'NO_ACTION' else if reqDoseIU <= self.pump.safeMaxDoseIU then 'DOSE_DELIVERED' else 'DOSE_CAPPED' endif endif");
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

/** Impl signature for DeliverySession.decideDose (async). User supplies this. */
export type DeliverySessionDecideDoseAsyncImpl = (self: DeliverySession, reqDoseIU: number) => Promise<{ self: DeliverySession; modified: { requestedDoseIU: unknown; actualDoseIU: unknown; sessionOutcome: unknown } }>;

/** Contract-checking wrapper for DeliverySession.decideDose (async). */
export function wrapDeliverySessionDecideDoseAsync(impl: DeliverySessionDecideDoseAsyncImpl): (self: DeliverySession, reqDoseIU: number) => Promise<DeliverySession> {
  return async (self, reqDoseIU) => {
    const preViolations: string[] = [];
    if (!((self.pump?.status === "OPERATIONAL"))) {
      preViolations.push("[DeliverySession.decideDose] pre violated: self.pump.status = 'OPERATIONAL'");
    }
    if (!((reqDoseIU >= 0))) {
      preViolations.push("[DeliverySession.decideDose] pre violated: reqDoseIU >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reqDoseIU);
      const postViolations: string[] = [];
      if (!((__result.self.requestedDoseIU === reqDoseIU))) {
        postViolations.push("[DeliverySession.decideDose] post violated: self.requestedDoseIU = reqDoseIU");
      }
      if (!((__result.self.actualDoseIU === (((reqDoseIU === 0)) ? (0) : ((((reqDoseIU <= __result.self.pump?.safeMaxDoseIU)) ? (reqDoseIU) : (__result.self.pump?.safeMaxDoseIU))))))) {
        postViolations.push("[DeliverySession.decideDose] post violated: self.actualDoseIU = if reqDoseIU = 0.0 then 0.0 else if reqDoseIU <= self.pump.safeMaxDoseIU then reqDoseIU else self.pump.safeMaxDoseIU endif endif");
      }
      if (!((__result.self.sessionOutcome === (((reqDoseIU === 0)) ? ("NO_ACTION") : ((((reqDoseIU <= __result.self.pump?.safeMaxDoseIU)) ? ("DOSE_DELIVERED") : ("DOSE_CAPPED"))))))) {
        postViolations.push("[DeliverySession.decideDose] post violated: self.sessionOutcome = if reqDoseIU = 0.0 then 'NO_ACTION' else if reqDoseIU <= self.pump.safeMaxDoseIU then 'DOSE_DELIVERED' else 'DOSE_CAPPED' endif endif");
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

/** Impl signature for DeliverySession.suspendOnFault. User supplies this. */
export type DeliverySessionSuspendOnFaultImpl = (self: DeliverySession) => { self: DeliverySession; modified: { sessionOutcome: unknown; actualDoseIU: unknown } };

/** Contract-checking wrapper for DeliverySession.suspendOnFault. */
export function wrapDeliverySessionSuspendOnFault(impl: DeliverySessionSuspendOnFaultImpl): (self: DeliverySession) => DeliverySession {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.pump?.status === "FAULT"))) {
      preViolations.push("[DeliverySession.suspendOnFault] pre violated: self.pump.status = 'FAULT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sessionOutcome === "FAULT_SUSPENDED"))) {
        postViolations.push("[DeliverySession.suspendOnFault] post violated: self.sessionOutcome = 'FAULT_SUSPENDED'");
      }
      if (!((__result.self.actualDoseIU === 0))) {
        postViolations.push("[DeliverySession.suspendOnFault] post violated: self.actualDoseIU = 0.0");
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

/** Impl signature for DeliverySession.suspendOnFault (async). User supplies this. */
export type DeliverySessionSuspendOnFaultAsyncImpl = (self: DeliverySession) => Promise<{ self: DeliverySession; modified: { sessionOutcome: unknown; actualDoseIU: unknown } }>;

/** Contract-checking wrapper for DeliverySession.suspendOnFault (async). */
export function wrapDeliverySessionSuspendOnFaultAsync(impl: DeliverySessionSuspendOnFaultAsyncImpl): (self: DeliverySession) => Promise<DeliverySession> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.pump?.status === "FAULT"))) {
      preViolations.push("[DeliverySession.suspendOnFault] pre violated: self.pump.status = 'FAULT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sessionOutcome === "FAULT_SUSPENDED"))) {
        postViolations.push("[DeliverySession.suspendOnFault] post violated: self.sessionOutcome = 'FAULT_SUSPENDED'");
      }
      if (!((__result.self.actualDoseIU === 0))) {
        postViolations.push("[DeliverySession.suspendOnFault] post violated: self.actualDoseIU = 0.0");
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

/** Impl signature for AlarmEvent.acknowledge. User supplies this. */
export type AlarmEventAcknowledgeImpl = (self: AlarmEvent) => { self: AlarmEvent; modified: { acknowledged: unknown } };

/** Contract-checking wrapper for AlarmEvent.acknowledge. */
export function wrapAlarmEventAcknowledge(impl: AlarmEventAcknowledgeImpl): (self: AlarmEvent) => AlarmEvent {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.acknowledged === false))) {
      preViolations.push("[AlarmEvent.acknowledge] pre violated: self.acknowledged = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.acknowledged === true))) {
        postViolations.push("[AlarmEvent.acknowledge] post violated: self.acknowledged = true");
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

/** Impl signature for AlarmEvent.acknowledge (async). User supplies this. */
export type AlarmEventAcknowledgeAsyncImpl = (self: AlarmEvent) => Promise<{ self: AlarmEvent; modified: { acknowledged: unknown } }>;

/** Contract-checking wrapper for AlarmEvent.acknowledge (async). */
export function wrapAlarmEventAcknowledgeAsync(impl: AlarmEventAcknowledgeAsyncImpl): (self: AlarmEvent) => Promise<AlarmEvent> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.acknowledged === false))) {
      preViolations.push("[AlarmEvent.acknowledge] pre violated: self.acknowledged = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.acknowledged === true))) {
        postViolations.push("[AlarmEvent.acknowledge] post violated: self.acknowledged = true");
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



