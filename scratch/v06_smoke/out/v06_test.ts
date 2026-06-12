// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SensorKind. Runtime: string. Compile-time: branded. */
export type SensorKindId = string & { readonly __brand: "SensorKindId" };
/** Identity type for BrokenSensor. Runtime: string. Compile-time: branded. */
export type BrokenSensorId = string & { readonly __brand: "BrokenSensorId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleReadings {
}

/** @stereotype <<Kind>> */
export interface SensorKind extends PhysicallyPlausibleReadings {
  readonly sid: SensorKindId;
  readonly minPlausible: number;
  readonly maxPlausible: number;
}

/** @stereotype <<Kind>> */
export interface BrokenSensor extends PhysicallyPlausibleReadings {
  readonly bid: BrokenSensorId;
  readonly minPlausible: number;
  readonly maxPlausible: number;
}


// ─── Factory functions ───

export function makeSensorKind(data: {
  sid: string;
  minPlausible: number;
  maxPlausible: number;
}): SensorKind {
  return {
    sid: data.sid as SensorKindId,
    minPlausible: data.minPlausible,
    maxPlausible: data.maxPlausible,
  };
}

export function makeBrokenSensor(data: {
  bid: string;
  minPlausible: number;
  maxPlausible: number;
}): BrokenSensor {
  return {
    bid: data.bid as BrokenSensorId,
    minPlausible: data.minPlausible,
    maxPlausible: data.maxPlausible,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for PhysicallyPlausibleReadings. Returns empty array when valid. */
export function validatePhysicallyPlausibleReadings(instance: PhysicallyPlausibleReadings): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minPlausible >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxPlausible > bearer.minPlausible — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxPlausible <= 1000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorKind. Returns empty array when valid. */
export function validateSensorKind(instance: SensorKind): readonly string[] {
  const violations: string[] = [];
  if (!((instance.minPlausible === 0))) {
    violations.push("[SensorKind] invariant violated: self.minPlausible = 0.0");
  }
  if (!((instance.maxPlausible === 1000))) {
    violations.push("[SensorKind] invariant violated: self.maxPlausible = 1000.0");
  }
  return violations;
}

/** Runtime invariant check for BrokenSensor. Returns empty array when valid. */
export function validateBrokenSensor(instance: BrokenSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.minPlausible === 0))) {
    violations.push("[BrokenSensor] invariant violated: self.minPlausible = 0.0");
  }
  if (!((instance.maxPlausible === 10000))) {
    violations.push("[BrokenSensor] invariant violated: self.maxPlausible = 10000.0");
  }
  return violations;
}


// ─── Event handler wrappers ───



