// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { actuatorDrivers, displayManagers, safetyMonitors, setpointControllers, temperatureSensors, thermostatSystemFormalizeds, thermostatSystems } from "../db/schema.js";
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

// ─── Events on ActuatorDriver ───

export async function issueCommand(__selfId: string, newState: string, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newState = 'HEAT' or newState = 'COOL' or newState = 'OFF'
  //   pre: timestamp >= 0.0
  //   pre: if newState <> self.commandedState then
           timestamp - self.lastTransitionTimestamp >= self.minIntervalSecs
         else
           true
         endif
  // Post-conditions from spec:
  //   post: if newState <> self.commandedState@pre then
            self.commandedState = newState
            and
            self.lastTransitionTimestamp = timestamp
          else
            self.commandedState = self.commandedState@pre
            and
            self.lastTransitionTimestamp = timestamp
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDrivers).set({
      commandedState: sql`CASE WHEN ${newState} <> ${actuatorDrivers.commandedState} THEN ${newState} ELSE ${actuatorDrivers.commandedState} END`,
      lastTransitionTimestamp: sql`CASE WHEN ${newState} <> ${actuatorDrivers.commandedState} THEN ${timestamp} ELSE ${timestamp} END`,
    }).where(eq(actuatorDrivers.driverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriver` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDrivers).where(eq(actuatorDrivers.driverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriver(row as never), "issueCommand");
  });
}

export async function forceOff(__selfId: string, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: self.commandedState = 'OFF'
  //   post: self.lastTransitionTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDrivers).set({
      commandedState: "OFF",
      lastTransitionTimestamp: timestamp,
    }).where(eq(actuatorDrivers.driverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriver` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDrivers).where(eq(actuatorDrivers.driverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriver(row as never), "forceOff");
  });
}

export async function initialize(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.commandedState = 'OFF'
  //   post: self.lastTransitionTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDrivers).set({
      commandedState: "OFF",
      lastTransitionTimestamp: 0,
    }).where(eq(actuatorDrivers.driverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriver` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDrivers).where(eq(actuatorDrivers.driverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriver(row as never), "initialize");
  });
}

// ─── Events on DisplayManager ───

export async function updateTemperature(__selfId: string, temp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec:
  //   post: self.displayedTemperature = temp
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  //   post: self.displayedActuatorState = self.displayedActuatorState@pre
  //   post: self.displayError = self.displayError@pre
  //   post: self.isErrorActive = self.isErrorActive@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayManagers).set({
      displayedTemperature: temp,
      displayedSetpoint: sql`${displayManagers.displayedSetpoint}`,
      displayedActuatorState: sql`${displayManagers.displayedActuatorState}`,
      displayError: sql`${displayManagers.displayError}`,
      isErrorActive: sql`${displayManagers.isErrorActive}`,
    }).where(eq(displayManagers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayManagers).where(eq(displayManagers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayManager(row as never), "updateTemperature");
  });
}

export async function updateSetpoint(__selfId: string, real: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: real >= 40.0
  //   pre: real <= 90.0
  // Post-conditions from spec:
  //   post: self.displayedSetpoint = real
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedActuatorState = self.displayedActuatorState@pre
  //   post: self.displayError = self.displayError@pre
  //   post: self.isErrorActive = self.isErrorActive@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayManagers).set({
      displayedSetpoint: real,
      displayedTemperature: sql`${displayManagers.displayedTemperature}`,
      displayedActuatorState: sql`${displayManagers.displayedActuatorState}`,
      displayError: sql`${displayManagers.displayError}`,
      isErrorActive: sql`${displayManagers.isErrorActive}`,
    }).where(eq(displayManagers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayManagers).where(eq(displayManagers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayManager(row as never), "updateSetpoint");
  });
}

export async function updateActuatorState(__selfId: string, state: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: state = 'HEAT' or state = 'COOL' or state = 'OFF' or state = 'SAFE_HALT'
  // Post-conditions from spec:
  //   post: self.displayedActuatorState = state
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  //   post: self.displayError = self.displayError@pre
  //   post: self.isErrorActive = self.isErrorActive@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayManagers).set({
      displayedActuatorState: state,
      displayedTemperature: sql`${displayManagers.displayedTemperature}`,
      displayedSetpoint: sql`${displayManagers.displayedSetpoint}`,
      displayError: sql`${displayManagers.displayError}`,
      isErrorActive: sql`${displayManagers.isErrorActive}`,
    }).where(eq(displayManagers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayManagers).where(eq(displayManagers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayManager(row as never), "updateActuatorState");
  });
}

export async function showError(__selfId: string, message: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: message <> null
  // Post-conditions from spec:
  //   post: self.displayError = message
  //   post: self.displayedActuatorState = 'SAFE_HALT'
  //   post: self.isErrorActive = true
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayManagers).set({
      displayError: message,
      displayedActuatorState: "SAFE_HALT",
      isErrorActive: true,
      displayedTemperature: sql`${displayManagers.displayedTemperature}`,
      displayedSetpoint: sql`${displayManagers.displayedSetpoint}`,
    }).where(eq(displayManagers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayManagers).where(eq(displayManagers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayManager(row as never), "showError");
  });
}

export async function clearError(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.displayError = ''
  //   post: self.isErrorActive = false
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedActuatorState = self.displayedActuatorState@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayManagers).set({
      displayError: "",
      isErrorActive: false,
      displayedSetpoint: sql`${displayManagers.displayedSetpoint}`,
      displayedTemperature: sql`${displayManagers.displayedTemperature}`,
      displayedActuatorState: sql`${displayManagers.displayedActuatorState}`,
    }).where(eq(displayManagers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayManagers).where(eq(displayManagers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayManager(row as never), "clearError");
  });
}

export async function initialize(__selfId: string, setpoint: number, temp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: setpoint >= 40.0
  //   pre: setpoint <= 90.0
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec:
  //   post: self.displayedTemperature = temp
  //   post: self.displayedSetpoint = setpoint
  //   post: self.displayedActuatorState = 'OFF'
  //   post: self.displayError = ''
  //   post: self.isErrorActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayManagers).set({
      displayedTemperature: temp,
      displayedSetpoint: setpoint,
      displayedActuatorState: "OFF",
      displayError: "",
      isErrorActive: false,
    }).where(eq(displayManagers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayManagers).where(eq(displayManagers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayManager(row as never), "initialize");
  });
}

// ─── Events on SafetyMonitor ───

export async function inspectReading(__selfId: string, reading: number, timestamp: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: reading >= -200.0
  //   pre: reading <= 200.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: if reading < self.plausibilityMin or reading > self.plausibilityMax then
            self.systemHalted = true
            and
            self.faultAlertRaised = true
            and
            result = false
          else
            self.systemHalted = self.systemHalted@pre
            and
            self.faultAlertRaised = self.faultAlertRaised@pre
            and
            result = true
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      systemHalted: sql`CASE WHEN (${reading} < ${safetyMonitors.plausibilityMin}) OR (${reading} > ${safetyMonitors.plausibilityMax}) THEN ${true} ELSE ${safetyMonitors.systemHalted} END`,
      faultAlertRaised: sql`CASE WHEN (${reading} < ${safetyMonitors.plausibilityMin}) OR (${reading} > ${safetyMonitors.plausibilityMax}) THEN ${true} ELSE ${safetyMonitors.faultAlertRaised} END`,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "inspectReading");
  });
}

export async function reset(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.systemHalted = false
  //   post: self.faultAlertRaised = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      systemHalted: false,
      faultAlertRaised: false,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "reset");
  });
}

export async function initialize(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.systemHalted = false
  //   post: self.faultAlertRaised = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      systemHalted: false,
      faultAlertRaised: false,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "initialize");
  });
}

// ─── Events on SetpointController ───

export async function receiveUserSetpoint(__selfId: string, requestedSetpoint: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestedSetpoint >= -100.0
  //   pre: self.safeMin >= 40.0
  //   pre: self.safeMax <= 90.0
  // Post-conditions from spec:
  //   post: self.clampedSetpoint = if requestedSetpoint < self.safeMin then self.safeMin
                                  else if requestedSetpoint > self.safeMax then self.safeMax
                                  else requestedSetpoint endif endif
  //   post: self.currentTemperatureInput = self.currentTemperatureInput@pre
  //   post: self.decisionCommand = self.decisionCommand@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(setpointControllers).set({
      clampedSetpoint: sql`CASE WHEN ${requestedSetpoint} < ${setpointControllers.safeMin} THEN ${setpointControllers.safeMin} ELSE CASE WHEN ${requestedSetpoint} > ${setpointControllers.safeMax} THEN ${setpointControllers.safeMax} ELSE ${requestedSetpoint} END END`,
      currentTemperatureInput: sql`${setpointControllers.currentTemperatureInput}`,
      decisionCommand: sql`${setpointControllers.decisionCommand}`,
    }).where(eq(setpointControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateSetpointController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(setpointControllers).where(eq(setpointControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateSetpointController(row as never), "receiveUserSetpoint");
  });
}

export async function receiveTemperatureInput(__selfId: string, temp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec:
  //   post: self.currentTemperatureInput = temp
  //   post: self.decisionCommand =
      if temp < self.clampedSetpoint - 1.0 then 'HEAT'
      else if temp > self.clampedSetpoint + 1.0 then 'COOL'
      else 'OFF' endif endif
  //   post: self.clampedSetpoint = self.clampedSetpoint@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(setpointControllers).set({
      currentTemperatureInput: temp,
      decisionCommand: sql`CASE WHEN ${temp} < ${setpointControllers.clampedSetpoint} - ${1} THEN ${"HEAT"} ELSE CASE WHEN ${temp} > ${setpointControllers.clampedSetpoint} + ${1} THEN ${"COOL"} ELSE ${"OFF"} END END`,
      clampedSetpoint: sql`${setpointControllers.clampedSetpoint}`,
    }).where(eq(setpointControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateSetpointController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(setpointControllers).where(eq(setpointControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateSetpointController(row as never), "receiveTemperatureInput");
  });
}

export async function clearDecision(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.decisionCommand = 'OFF'
  //   post: self.clampedSetpoint = self.clampedSetpoint@pre
  //   post: self.currentTemperatureInput = self.currentTemperatureInput@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(setpointControllers).set({
      decisionCommand: "OFF",
      clampedSetpoint: sql`${setpointControllers.clampedSetpoint}`,
      currentTemperatureInput: sql`${setpointControllers.currentTemperatureInput}`,
    }).where(eq(setpointControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateSetpointController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(setpointControllers).where(eq(setpointControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateSetpointController(row as never), "clearDecision");
  });
}

export async function initialize(__selfId: string, clamped: number, temp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clamped >= 40.0
  //   pre: clamped <= 90.0
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec:
  //   post: self.clampedSetpoint = clamped
  //   post: self.currentTemperatureInput = temp
  //   post: self.decisionCommand = 'OFF'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(setpointControllers).set({
      clampedSetpoint: clamped,
      currentTemperatureInput: temp,
      decisionCommand: "OFF",
    }).where(eq(setpointControllers.controllerId, __selfId));
    // After mutation: re-validate against `validateSetpointController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(setpointControllers).where(eq(setpointControllers.controllerId, __selfId)).get();
    // assertNoViolations(validateSetpointController(row as never), "initialize");
  });
}

// ─── Events on TemperatureSensor ───

export async function takeReading(__selfId: string, value: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: value >= -200.0
  //   pre: value <= 200.0
  //   pre: timestamp >= 0.0
  //   pre: self.isOperational
  // Post-conditions from spec:
  //   post: self.lastReading = value
  //   post: self.lastTimestamp = timestamp
  //   post: self.isOperational = self.isOperational@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(temperatureSensors).set({
      lastReading: value,
      lastTimestamp: timestamp,
      isOperational: sql`${temperatureSensors.isOperational}`,
    }).where(eq(temperatureSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateTemperatureSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(temperatureSensors).where(eq(temperatureSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateTemperatureSensor(row as never), "takeReading");
  });
}

export async function setFaulty(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperational
  // Post-conditions from spec:
  //   post: self.isOperational = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(temperatureSensors).set({
      isOperational: false,
    }).where(eq(temperatureSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateTemperatureSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(temperatureSensors).where(eq(temperatureSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateTemperatureSensor(row as never), "setFaulty");
  });
}

export async function restore(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isOperational
  // Post-conditions from spec:
  //   post: self.isOperational = true
  //   post: self.lastReading = self.lastReading@pre
  //   post: self.lastTimestamp = self.lastTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(temperatureSensors).set({
      isOperational: true,
      lastReading: sql`${temperatureSensors.lastReading}`,
      lastTimestamp: sql`${temperatureSensors.lastTimestamp}`,
    }).where(eq(temperatureSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateTemperatureSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(temperatureSensors).where(eq(temperatureSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateTemperatureSensor(row as never), "restore");
  });
}

// ─── Events on ThermostatSystem ───

export async function setUserSetpoint(__selfId: string, requestedSetpoint: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.halted
  //   pre: requestedSetpoint >= -100.0
  // Post-conditions from spec:
  //   post: self.currentSetpoint = if requestedSetpoint < self.safeMinSetpoint then self.safeMinSetpoint
                                 else if requestedSetpoint > self.safeMaxSetpoint then self.safeMaxSetpoint
                                 else requestedSetpoint endif endif
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentActuatorCommand = self.currentActuatorCommand@pre
  //   post: self.lastCommandTimestamp = self.lastCommandTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thermostatSystems).set({
      currentSetpoint: sql`CASE WHEN ${requestedSetpoint} < ${thermostatSystems.safeMinSetpoint} THEN ${thermostatSystems.safeMinSetpoint} ELSE CASE WHEN ${requestedSetpoint} > ${thermostatSystems.safeMaxSetpoint} THEN ${thermostatSystems.safeMaxSetpoint} ELSE ${requestedSetpoint} END END`,
      currentTemperature: sql`${thermostatSystems.currentTemperature}`,
      currentActuatorCommand: sql`${thermostatSystems.currentActuatorCommand}`,
      lastCommandTimestamp: sql`${thermostatSystems.lastCommandTimestamp}`,
    }).where(eq(thermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thermostatSystems).where(eq(thermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateThermostatSystem(row as never), "setUserSetpoint");
  });
}

export async function processSensorReading(__selfId: string, reading: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: reading >= -200.0
  //   pre: reading <= 200.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted then
            self.currentTemperature = reading
            and
            self.currentActuatorCommand =
              if reading < self.currentSetpoint - 1.0 then 'HEAT'
              else if reading > self.currentSetpoint + 1.0 then 'COOL'
              else 'OFF' endif endif
          else if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and self.halted then
            self.currentTemperature = reading
            and
            self.currentActuatorCommand = 'OFF'
            and
            self.halted = true
            and
            self.faultAlertActive = true
          else
            self.halted = true
            and
            self.faultAlertActive = true
            and
            self.currentActuatorCommand = 'OFF'
            and
            self.currentTemperature = self.currentTemperature@pre
          endif endif
  //   post: if (reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted@pre) then
            self.lastCommandTimestamp = timestamp
          else
            self.lastCommandTimestamp = self.lastCommandTimestamp@pre
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thermostatSystems).set({
      currentTemperature: sql`CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (NOT (${thermostatSystems.halted})) THEN ${reading} ELSE CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (${thermostatSystems.halted}) THEN ${reading} ELSE ${thermostatSystems.currentTemperature} END END`,
      currentActuatorCommand: sql`CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (NOT (${thermostatSystems.halted})) THEN CASE WHEN ${reading} < ${thermostatSystems.currentSetpoint} - ${1} THEN ${"HEAT"} ELSE CASE WHEN ${reading} > ${thermostatSystems.currentSetpoint} + ${1} THEN ${"COOL"} ELSE ${"OFF"} END END ELSE CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (${thermostatSystems.halted}) THEN ${"OFF"} ELSE ${"OFF"} END END`,
      halted: sql`CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (NOT (${thermostatSystems.halted})) THEN ${thermostatSystems.halted} ELSE CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (${thermostatSystems.halted}) THEN ${true} ELSE ${true} END END`,
      faultAlertActive: sql`CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (NOT (${thermostatSystems.halted})) THEN ${thermostatSystems.faultAlertActive} ELSE CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (${thermostatSystems.halted}) THEN ${true} ELSE ${true} END END`,
      lastCommandTimestamp: sql`CASE WHEN ((${reading} >= ${thermostatSystems.sensorPlausibilityMin}) AND (${reading} <= ${thermostatSystems.sensorPlausibilityMax})) AND (NOT (${thermostatSystems.halted})) THEN ${timestamp} ELSE ${thermostatSystems.lastCommandTimestamp} END`,
    }).where(eq(thermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thermostatSystems).where(eq(thermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateThermostatSystem(row as never), "processSensorReading");
  });
}

export async function requestCommandTransition(__selfId: string, newCommand: string, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newCommand = 'HEAT' or newCommand = 'COOL' or newCommand = 'OFF'
  //   pre: timestamp >= 0.0
  //   pre: not self.halted
  // Post-conditions from spec:
  //   post: if newCommand <> self.currentActuatorCommand@pre then
            if timestamp - self.lastCommandTimestamp@pre >= self.minCycleIntervalSecs then
              self.currentActuatorCommand = newCommand
              and
              self.lastCommandTimestamp = timestamp
            else
              self.currentActuatorCommand = self.currentActuatorCommand@pre
              and
              self.lastCommandTimestamp = self.lastCommandTimestamp@pre
            endif
          else
            self.currentActuatorCommand = self.currentActuatorCommand@pre
            and
            self.lastCommandTimestamp = timestamp
          endif
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentSetpoint = self.currentSetpoint@pre
  //   post: self.halted = self.halted@pre
  //   post: self.faultAlertActive = self.faultAlertActive@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thermostatSystems).set({
      currentActuatorCommand: sql`CASE WHEN ${newCommand} <> ${thermostatSystems.currentActuatorCommand} THEN CASE WHEN ${timestamp} - ${thermostatSystems.lastCommandTimestamp} >= ${thermostatSystems.minCycleIntervalSecs} THEN ${newCommand} ELSE ${thermostatSystems.currentActuatorCommand} END ELSE ${thermostatSystems.currentActuatorCommand} END`,
      lastCommandTimestamp: sql`CASE WHEN ${newCommand} <> ${thermostatSystems.currentActuatorCommand} THEN CASE WHEN ${timestamp} - ${thermostatSystems.lastCommandTimestamp} >= ${thermostatSystems.minCycleIntervalSecs} THEN ${timestamp} ELSE ${thermostatSystems.lastCommandTimestamp} END ELSE ${timestamp} END`,
      currentTemperature: sql`${thermostatSystems.currentTemperature}`,
      currentSetpoint: sql`${thermostatSystems.currentSetpoint}`,
      halted: sql`${thermostatSystems.halted}`,
      faultAlertActive: sql`${thermostatSystems.faultAlertActive}`,
    }).where(eq(thermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thermostatSystems).where(eq(thermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateThermostatSystem(row as never), "requestCommandTransition");
  });
}

export async function displayCurrentState(__selfId: string): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: result = self.currentTemperature
  // TODO: implement mutation logic for 'ThermostatSystem.displayCurrentState'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: displayCurrentState");
}

export async function initialize(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.systemId <> null
  // Post-conditions from spec:
  //   post: self.halted = false
  //   post: self.faultAlertActive = false
  //   post: self.currentSetpoint = 72.0
  //   post: self.currentTemperature = 72.0
  //   post: self.currentActuatorCommand = 'OFF'
  //   post: self.lastCommandTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thermostatSystems).set({
      halted: false,
      faultAlertActive: false,
      currentSetpoint: 72,
      currentTemperature: 72,
      currentActuatorCommand: "OFF",
      lastCommandTimestamp: 0,
    }).where(eq(thermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thermostatSystems).where(eq(thermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateThermostatSystem(row as never), "initialize");
  });
}

// ─── Events on ThermostatSystemFormalized ───

export async function guardPlausibleReading(__selfId: string, reading: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.halted
  //   pre: reading < self.sensorPlausibilityMin or reading > self.sensorPlausibilityMax
  // Post-conditions from spec:
  //   post: self.halted = true
  //   post: self.faultAlertActive = true
  //   post: self.currentActuatorCommand = 'OFF'
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentSetpoint = self.currentSetpoint@pre
  //   post: self.lastCommandTimestamp = self.lastCommandTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thermostatSystemFormalizeds).set({
      halted: true,
      faultAlertActive: true,
      currentActuatorCommand: "OFF",
      currentTemperature: sql`${thermostatSystemFormalizeds.currentTemperature}`,
      currentSetpoint: sql`${thermostatSystemFormalizeds.currentSetpoint}`,
      lastCommandTimestamp: sql`${thermostatSystemFormalizeds.lastCommandTimestamp}`,
    }).where(eq(thermostatSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateThermostatSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thermostatSystemFormalizeds).where(eq(thermostatSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateThermostatSystemFormalized(row as never), "guardPlausibleReading");
  });
}

export async function guardUnsafeSetpoint(__selfId: string, requestedSetpoint: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.halted
  //   pre: requestedSetpoint < self.safeMinSetpoint or requestedSetpoint > self.safeMaxSetpoint
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'ThermostatSystemFormalized.guardUnsafeSetpoint'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: guardUnsafeSetpoint");
}

export async function guardCyclingViolation(__selfId: string, newCommand: string, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.halted
  //   pre: newCommand <> self.currentActuatorCommand
  //   pre: timestamp - self.lastCommandTimestamp < self.minCycleIntervalSecs
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'ThermostatSystemFormalized.guardCyclingViolation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: guardCyclingViolation");
}

export async function enforceDisplayConsistency(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.halted or self.faultAlertActive
  // Post-conditions from spec:
  //   post: self.currentTemperature <> null
  //   post: self.currentSetpoint <> null
  //   post: self.currentActuatorCommand <> null
  //   post: self.faultAlertActive = true
  //   post: self.halted = self.halted@pre
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentSetpoint = self.currentSetpoint@pre
  //   post: self.currentActuatorCommand = self.currentActuatorCommand@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thermostatSystemFormalizeds).set({
      faultAlertActive: true,
      halted: sql`${thermostatSystemFormalizeds.halted}`,
      currentTemperature: sql`${thermostatSystemFormalizeds.currentTemperature}`,
      currentSetpoint: sql`${thermostatSystemFormalizeds.currentSetpoint}`,
      currentActuatorCommand: sql`${thermostatSystemFormalizeds.currentActuatorCommand}`,
    }).where(eq(thermostatSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateThermostatSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thermostatSystemFormalizeds).where(eq(thermostatSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateThermostatSystemFormalized(row as never), "enforceDisplayConsistency");
  });
}
