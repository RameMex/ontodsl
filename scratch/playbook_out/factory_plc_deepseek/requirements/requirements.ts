// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SafetyControllerSystem. Runtime: string. Compile-time: branded. */
export type SafetyControllerSystemId = string & { readonly __brand: "SafetyControllerSystemId" };
/** Identity type for Operator. Runtime: string. Compile-time: branded. */
export type OperatorId = string & { readonly __brand: "OperatorId" };
/** Identity type for MaintenanceTechnician. Runtime: string. Compile-time: branded. */
export type MaintenanceTechnicianId = string & { readonly __brand: "MaintenanceTechnicianId" };
/** Identity type for PlantManager. Runtime: string. Compile-time: branded. */
export type PlantManagerId = string & { readonly __brand: "PlantManagerId" };
/** Identity type for SafetyRegulator. Runtime: string. Compile-time: branded. */
export type SafetyRegulatorId = string & { readonly __brand: "SafetyRegulatorId" };
/** Identity type for PLCSafetyVendor. Runtime: string. Compile-time: branded. */
export type PLCSafetyVendorId = string & { readonly __brand: "PLCSafetyVendorId" };
/** Identity type for EStopButton. Runtime: string. Compile-time: branded. */
export type EStopButtonId = string & { readonly __brand: "EStopButtonId" };
/** Identity type for FailsafeMode. Runtime: string. Compile-time: branded. */
export type FailsafeModeId = string & { readonly __brand: "FailsafeModeId" };
/** Identity type for MotionOutput. Runtime: string. Compile-time: branded. */
export type MotionOutputId = string & { readonly __brand: "MotionOutputId" };
/** Identity type for SafetySensor. Runtime: string. Compile-time: branded. */
export type SafetySensorId = string & { readonly __brand: "SafetySensorId" };
/** Identity type for ScanCycle. Runtime: string. Compile-time: branded. */
export type ScanCycleId = string & { readonly __brand: "ScanCycleId" };
/** Identity type for PLCSafetyController. Runtime: string. Compile-time: branded. */
export type PLCSafetyControllerId = string & { readonly __brand: "PLCSafetyControllerId" };
/** Identity type for EStopLatencyCommitment. Runtime: string. Compile-time: branded. */
export type EStopLatencyCommitmentId = string & { readonly __brand: "EStopLatencyCommitmentId" };
/** Identity type for EStopLatchingCommitment. Runtime: string. Compile-time: branded. */
export type EStopLatchingCommitmentId = string & { readonly __brand: "EStopLatchingCommitmentId" };
/** Identity type for SensorFaultFailsafeCommitment. Runtime: string. Compile-time: branded. */
export type SensorFaultFailsafeCommitmentId = string & { readonly __brand: "SensorFaultFailsafeCommitmentId" };
/** Identity type for MotionCommandRejectionCommitment. Runtime: string. Compile-time: branded. */
export type MotionCommandRejectionCommitmentId = string & { readonly __brand: "MotionCommandRejectionCommitmentId" };
/** Identity type for EStopActivationFlow. Runtime: string. Compile-time: branded. */
export type EStopActivationFlowId = string & { readonly __brand: "EStopActivationFlowId" };
/** Identity type for SensorFaultDetectionFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultDetectionFlowId = string & { readonly __brand: "SensorFaultDetectionFlowId" };
/** Identity type for FailsafeLatchFlow. Runtime: string. Compile-time: branded. */
export type FailsafeLatchFlowId = string & { readonly __brand: "FailsafeLatchFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface SafetyControllerSystem extends EStopHaltPerformance, FailsafeLatching, SensorFaultResponse, MotionRejectionInFailsafe {
  readonly controllerId: SafetyControllerSystemId;
  readonly maxEStopLatencyMs: number;
  readonly latchingEnforced: boolean;
  readonly maxSensorFaultResponseCycles: number;
  readonly rejectionActive: boolean;
  readonly isFailsafeActive: boolean;
  readonly eStopInputActive: boolean;
  readonly manualResetInputActive: boolean;
  readonly sensorFaultDetected: boolean;
  readonly allMotionOutputsDeEnergized: boolean;
  readonly eStopResponseTimeMs: number;
  readonly currentScanCycleId: string;
  readonly lastEStopTimestampMs: number;
  readonly lastSensorFaultTimestampMs: number;
  readonly connectedEStopButtons: ReadonlySet<string>;
  readonly connectedSensors: ReadonlySet<string>;
  readonly connectedMotionOutputs: ReadonlySet<string>;
}

/** @stereotype <<Agent>> */
export interface Operator {
  readonly operatorId: OperatorId;
  readonly badgeNumber: string;
  readonly trainingLevel: string;
}

/** @stereotype <<Agent>> */
export interface MaintenanceTechnician {
  readonly techId: MaintenanceTechnicianId;
  readonly certification: string;
  readonly shiftAssignment: string;
}

/** @stereotype <<Agent>> */
export interface PlantManager {
  readonly managerId: PlantManagerId;
  readonly department: string;
  readonly authorityLevel: string;
}

/** @stereotype <<Agent>> */
export interface SafetyRegulator {
  readonly regulatorId: SafetyRegulatorId;
  readonly jurisdiction: string;
  readonly standardBody: string;
}

/** @stereotype <<Agent>> */
export interface PLCSafetyVendor {
  readonly vendorId: PLCSafetyVendorId;
  readonly companyName: string;
  readonly iso9001Certified: boolean;
}

/** @stereotype <<Kind>> */
export interface EStopButton {
  readonly estopId: EStopButtonId;
  readonly location: string;
  readonly isPressed: boolean;
  readonly isLatched: boolean;
}

/** @stereotype <<Kind>> */
export interface FailsafeMode {
  readonly modeId: FailsafeModeId;
  readonly entryTime: number;
  readonly isLatched: boolean;
}

/** @stereotype <<Kind>> */
export interface MotionOutput {
  readonly outputId: MotionOutputId;
  readonly actuatorType: string;
  readonly driveEnable: boolean;
  readonly powerState: boolean;
}

/** @stereotype <<Kind>> */
export interface SafetySensor {
  readonly sensorId: SafetySensorId;
  readonly sensingType: string;
  readonly calibratedRangeMin: number;
  readonly calibratedRangeMax: number;
  readonly currentReading: number;
  readonly isFaulted: boolean;
}

/** @stereotype <<Kind>> */
export interface ScanCycle {
  readonly cycleId: ScanCycleId;
  readonly cycleDurationMs: number;
  readonly cycleCount: number;
}

/** @stereotype <<Kind>> */
export interface PLCSafetyController {
  readonly controllerId: PLCSafetyControllerId;
  readonly maxEStopLatencyMs: number;
  readonly latchingEnforced: boolean;
  readonly maxSensorFaultResponseCycles: number;
  readonly rejectionActive: boolean;
  readonly isFailsafeActive: boolean;
  readonly eStopResponseTimeMs: number;
  readonly currentScanCycleId: string;
}

/** @stereotype <<Commitment>> */
export interface EStopLatencyCommitment {
  readonly commitmentId: EStopLatencyCommitmentId;
  readonly maxEStopLatencyMs: number;
}

/** @stereotype <<Commitment>> */
export interface EStopLatchingCommitment {
  readonly commitmentId: EStopLatchingCommitmentId;
  readonly latchingEnforced: boolean;
}

/** @stereotype <<Commitment>> */
export interface SensorFaultFailsafeCommitment {
  readonly commitmentId: SensorFaultFailsafeCommitmentId;
  readonly maxSensorFaultResponseCycles: number;
}

/** @stereotype <<Commitment>> */
export interface MotionCommandRejectionCommitment {
  readonly commitmentId: MotionCommandRejectionCommitmentId;
  readonly rejectionActive: boolean;
}

/** @stereotype <<Category>> */
export interface EStopHaltPerformance {
}

/** @stereotype <<Category>> */
export interface FailsafeLatching {
}

/** @stereotype <<Category>> */
export interface SensorFaultResponse {
}

/** @stereotype <<Category>> */
export interface MotionRejectionInFailsafe {
}

/** @stereotype <<Happening>> */
export interface EStopActivationFlow {
  readonly flowId: EStopActivationFlowId;
  readonly triggerCondition: string;
  readonly sequenceStep: number;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultDetectionFlow {
  readonly flowId: SensorFaultDetectionFlowId;
  readonly sensorId: string;
  readonly faultType: string;
  readonly recoveryType: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface FailsafeLatchFlow {
  readonly flowId: FailsafeLatchFlowId;
  readonly latchSet: boolean;
  readonly manualResetReceived: boolean;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeSafetyControllerSystem(data: {
  controllerId: string;
  maxEStopLatencyMs: number;
  latchingEnforced: boolean;
  maxSensorFaultResponseCycles: number;
  rejectionActive: boolean;
  isFailsafeActive: boolean;
  eStopInputActive: boolean;
  manualResetInputActive: boolean;
  sensorFaultDetected: boolean;
  allMotionOutputsDeEnergized: boolean;
  eStopResponseTimeMs: number;
  currentScanCycleId: string;
  lastEStopTimestampMs: number;
  lastSensorFaultTimestampMs: number;
  connectedEStopButtons: ReadonlySet<string>;
  connectedSensors: ReadonlySet<string>;
  connectedMotionOutputs: ReadonlySet<string>;
}): SafetyControllerSystem {
  return {
    controllerId: data.controllerId as SafetyControllerSystemId,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
    latchingEnforced: data.latchingEnforced,
    maxSensorFaultResponseCycles: data.maxSensorFaultResponseCycles,
    rejectionActive: data.rejectionActive,
    isFailsafeActive: data.isFailsafeActive,
    eStopInputActive: data.eStopInputActive,
    manualResetInputActive: data.manualResetInputActive,
    sensorFaultDetected: data.sensorFaultDetected,
    allMotionOutputsDeEnergized: data.allMotionOutputsDeEnergized,
    eStopResponseTimeMs: data.eStopResponseTimeMs,
    currentScanCycleId: data.currentScanCycleId,
    lastEStopTimestampMs: data.lastEStopTimestampMs,
    lastSensorFaultTimestampMs: data.lastSensorFaultTimestampMs,
    connectedEStopButtons: data.connectedEStopButtons,
    connectedSensors: data.connectedSensors,
    connectedMotionOutputs: data.connectedMotionOutputs,
  };
}

export function makeOperator(data: {
  operatorId: string;
  badgeNumber: string;
  trainingLevel: string;
}): Operator {
  return {
    operatorId: data.operatorId as OperatorId,
    badgeNumber: data.badgeNumber,
    trainingLevel: data.trainingLevel,
  };
}

export function makeMaintenanceTechnician(data: {
  techId: string;
  certification: string;
  shiftAssignment: string;
}): MaintenanceTechnician {
  return {
    techId: data.techId as MaintenanceTechnicianId,
    certification: data.certification,
    shiftAssignment: data.shiftAssignment,
  };
}

export function makePlantManager(data: {
  managerId: string;
  department: string;
  authorityLevel: string;
}): PlantManager {
  return {
    managerId: data.managerId as PlantManagerId,
    department: data.department,
    authorityLevel: data.authorityLevel,
  };
}

export function makeSafetyRegulator(data: {
  regulatorId: string;
  jurisdiction: string;
  standardBody: string;
}): SafetyRegulator {
  return {
    regulatorId: data.regulatorId as SafetyRegulatorId,
    jurisdiction: data.jurisdiction,
    standardBody: data.standardBody,
  };
}

export function makePLCSafetyVendor(data: {
  vendorId: string;
  companyName: string;
  iso9001Certified: boolean;
}): PLCSafetyVendor {
  return {
    vendorId: data.vendorId as PLCSafetyVendorId,
    companyName: data.companyName,
    iso9001Certified: data.iso9001Certified,
  };
}

export function makeEStopButton(data: {
  estopId: string;
  location: string;
  isPressed: boolean;
  isLatched: boolean;
}): EStopButton {
  return {
    estopId: data.estopId as EStopButtonId,
    location: data.location,
    isPressed: data.isPressed,
    isLatched: data.isLatched,
  };
}

export function makeFailsafeMode(data: {
  modeId: string;
  entryTime: number;
  isLatched: boolean;
}): FailsafeMode {
  return {
    modeId: data.modeId as FailsafeModeId,
    entryTime: data.entryTime,
    isLatched: data.isLatched,
  };
}

export function makeMotionOutput(data: {
  outputId: string;
  actuatorType: string;
  driveEnable: boolean;
  powerState: boolean;
}): MotionOutput {
  return {
    outputId: data.outputId as MotionOutputId,
    actuatorType: data.actuatorType,
    driveEnable: data.driveEnable,
    powerState: data.powerState,
  };
}

export function makeSafetySensor(data: {
  sensorId: string;
  sensingType: string;
  calibratedRangeMin: number;
  calibratedRangeMax: number;
  currentReading: number;
  isFaulted: boolean;
}): SafetySensor {
  return {
    sensorId: data.sensorId as SafetySensorId,
    sensingType: data.sensingType,
    calibratedRangeMin: data.calibratedRangeMin,
    calibratedRangeMax: data.calibratedRangeMax,
    currentReading: data.currentReading,
    isFaulted: data.isFaulted,
  };
}

export function makeScanCycle(data: {
  cycleId: string;
  cycleDurationMs: number;
  cycleCount: number;
}): ScanCycle {
  return {
    cycleId: data.cycleId as ScanCycleId,
    cycleDurationMs: data.cycleDurationMs,
    cycleCount: data.cycleCount,
  };
}

export function makePLCSafetyController(data: {
  controllerId: string;
  maxEStopLatencyMs: number;
  latchingEnforced: boolean;
  maxSensorFaultResponseCycles: number;
  rejectionActive: boolean;
  isFailsafeActive: boolean;
  eStopResponseTimeMs: number;
  currentScanCycleId: string;
}): PLCSafetyController {
  return {
    controllerId: data.controllerId as PLCSafetyControllerId,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
    latchingEnforced: data.latchingEnforced,
    maxSensorFaultResponseCycles: data.maxSensorFaultResponseCycles,
    rejectionActive: data.rejectionActive,
    isFailsafeActive: data.isFailsafeActive,
    eStopResponseTimeMs: data.eStopResponseTimeMs,
    currentScanCycleId: data.currentScanCycleId,
  };
}

export function makeEStopLatencyCommitment(data: {
  commitmentId: string;
  maxEStopLatencyMs: number;
}): EStopLatencyCommitment {
  return {
    commitmentId: data.commitmentId as EStopLatencyCommitmentId,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
  };
}

export function makeEStopLatchingCommitment(data: {
  commitmentId: string;
  latchingEnforced: boolean;
}): EStopLatchingCommitment {
  return {
    commitmentId: data.commitmentId as EStopLatchingCommitmentId,
    latchingEnforced: data.latchingEnforced,
  };
}

export function makeSensorFaultFailsafeCommitment(data: {
  commitmentId: string;
  maxSensorFaultResponseCycles: number;
}): SensorFaultFailsafeCommitment {
  return {
    commitmentId: data.commitmentId as SensorFaultFailsafeCommitmentId,
    maxSensorFaultResponseCycles: data.maxSensorFaultResponseCycles,
  };
}

export function makeMotionCommandRejectionCommitment(data: {
  commitmentId: string;
  rejectionActive: boolean;
}): MotionCommandRejectionCommitment {
  return {
    commitmentId: data.commitmentId as MotionCommandRejectionCommitmentId,
    rejectionActive: data.rejectionActive,
  };
}

export function makeEStopActivationFlow(data: {
  flowId: string;
  triggerCondition: string;
  sequenceStep: number;
  outcome: string;
}): EStopActivationFlow {
  return {
    flowId: data.flowId as EStopActivationFlowId,
    triggerCondition: data.triggerCondition,
    sequenceStep: data.sequenceStep,
    outcome: data.outcome,
  };
}

export function makeSensorFaultDetectionFlow(data: {
  flowId: string;
  sensorId: string;
  faultType: string;
  recoveryType: string;
  outcome: string;
}): SensorFaultDetectionFlow {
  return {
    flowId: data.flowId as SensorFaultDetectionFlowId,
    sensorId: data.sensorId,
    faultType: data.faultType,
    recoveryType: data.recoveryType,
    outcome: data.outcome,
  };
}

export function makeFailsafeLatchFlow(data: {
  flowId: string;
  latchSet: boolean;
  manualResetReceived: boolean;
  outcome: string;
}): FailsafeLatchFlow {
  return {
    flowId: data.flowId as FailsafeLatchFlowId,
    latchSet: data.latchSet,
    manualResetReceived: data.manualResetReceived,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for SafetyControllerSystem. Returns empty array when valid. */
export function validateSafetyControllerSystem(instance: SafetyControllerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[SafetyControllerSystem] invariant violated: self.controllerId <> null");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[SafetyControllerSystem] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[SafetyControllerSystem] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[SafetyControllerSystem] invariant violated: self.latchingEnforced");
  }
  if (!((instance.maxSensorFaultResponseCycles > 0))) {
    violations.push("[SafetyControllerSystem] invariant violated: self.maxSensorFaultResponseCycles > 0");
  }
  if (!((instance.maxSensorFaultResponseCycles <= 1))) {
    violations.push("[SafetyControllerSystem] invariant violated: self.maxSensorFaultResponseCycles <= 1");
  }
  if (!(instance.rejectionActive)) {
    violations.push("[SafetyControllerSystem] invariant violated: self.rejectionActive");
  }
  return violations;
}

/** Runtime invariant check for Operator. Returns empty array when valid. */
export function validateOperator(instance: Operator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[Operator] invariant violated: self.operatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for MaintenanceTechnician. Returns empty array when valid. */
export function validateMaintenanceTechnician(instance: MaintenanceTechnician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.techId !== null))) {
    violations.push("[MaintenanceTechnician] invariant violated: self.techId <> null");
  }
  return violations;
}

/** Runtime invariant check for PlantManager. Returns empty array when valid. */
export function validatePlantManager(instance: PlantManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[PlantManager] invariant violated: self.managerId <> null");
  }
  return violations;
}

/** Runtime invariant check for SafetyRegulator. Returns empty array when valid. */
export function validateSafetyRegulator(instance: SafetyRegulator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[SafetyRegulator] invariant violated: self.regulatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for PLCSafetyVendor. Returns empty array when valid. */
export function validatePLCSafetyVendor(instance: PLCSafetyVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[PLCSafetyVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for EStopButton. Returns empty array when valid. */
export function validateEStopButton(instance: EStopButton): readonly string[] {
  const violations: string[] = [];
  if (!((instance.estopId !== null))) {
    violations.push("[EStopButton] invariant violated: self.estopId <> null");
  }
  return violations;
}

/** Runtime invariant check for FailsafeMode. Returns empty array when valid. */
export function validateFailsafeMode(instance: FailsafeMode): readonly string[] {
  const violations: string[] = [];
  if (!((instance.modeId !== null))) {
    violations.push("[FailsafeMode] invariant violated: self.modeId <> null");
  }
  return violations;
}

/** Runtime invariant check for MotionOutput. Returns empty array when valid. */
export function validateMotionOutput(instance: MotionOutput): readonly string[] {
  const violations: string[] = [];
  if (!((instance.outputId !== null))) {
    violations.push("[MotionOutput] invariant violated: self.outputId <> null");
  }
  return violations;
}

/** Runtime invariant check for SafetySensor. Returns empty array when valid. */
export function validateSafetySensor(instance: SafetySensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[SafetySensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.calibratedRangeMin < instance.calibratedRangeMax))) {
    violations.push("[SafetySensor] invariant violated: self.calibratedRangeMin < self.calibratedRangeMax");
  }
  return violations;
}

/** Runtime invariant check for ScanCycle. Returns empty array when valid. */
export function validateScanCycle(instance: ScanCycle): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[ScanCycle] invariant violated: self.cycleId <> null");
  }
  if (!((instance.cycleDurationMs > 0))) {
    violations.push("[ScanCycle] invariant violated: self.cycleDurationMs > 0.0");
  }
  return violations;
}

/** Runtime invariant check for PLCSafetyController. Returns empty array when valid. */
export function validatePLCSafetyController(instance: PLCSafetyController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[PLCSafetyController] invariant violated: self.controllerId <> null");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[PLCSafetyController] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[PLCSafetyController] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  if (!((instance.maxSensorFaultResponseCycles > 0))) {
    violations.push("[PLCSafetyController] invariant violated: self.maxSensorFaultResponseCycles > 0");
  }
  if (!((instance.maxSensorFaultResponseCycles <= 1))) {
    violations.push("[PLCSafetyController] invariant violated: self.maxSensorFaultResponseCycles <= 1");
  }
  return violations;
}

/** Runtime invariant check for EStopHaltPerformance. Returns empty array when valid. */
export function validateEStopHaltPerformance(instance: EStopHaltPerformance): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxEStopLatencyMs > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxEStopLatencyMs <= 50.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FailsafeLatching. Returns empty array when valid. */
export function validateFailsafeLatching(instance: FailsafeLatching): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.latchingEnforced — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorFaultResponse. Returns empty array when valid. */
export function validateSensorFaultResponse(instance: SensorFaultResponse): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSensorFaultResponseCycles > 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSensorFaultResponseCycles <= 1 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for MotionRejectionInFailsafe. Returns empty array when valid. */
export function validateMotionRejectionInFailsafe(instance: MotionRejectionInFailsafe): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.rejectionActive — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EStopActivationFlow. Returns empty array when valid. */
export function validateEStopActivationFlow(instance: EStopActivationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EStopActivationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.sequenceStep >= 0))) {
    violations.push("[EStopActivationFlow] invariant violated: self.sequenceStep >= 0");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultDetectionFlow. Returns empty array when valid. */
export function validateSensorFaultDetectionFlow(instance: SensorFaultDetectionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultDetectionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.sensorId !== null))) {
    violations.push("[SensorFaultDetectionFlow] invariant violated: self.sensorId <> null");
  }
  return violations;
}

/** Runtime invariant check for FailsafeLatchFlow. Returns empty array when valid. */
export function validateFailsafeLatchFlow(instance: FailsafeLatchFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[FailsafeLatchFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for SafetyControllerSystem.activateEStop. User supplies this. */
export type SafetyControllerSystemActivateEStopImpl = (self: SafetyControllerSystem, activationTimestampMs: number) => { self: SafetyControllerSystem; modified: { eStopInputActive: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; lastEStopTimestampMs: unknown; eStopResponseTimeMs: unknown } };

/** Contract-checking wrapper for SafetyControllerSystem.activateEStop. */
export function wrapSafetyControllerSystemActivateEStop(impl: SafetyControllerSystemActivateEStopImpl): (self: SafetyControllerSystem, activationTimestampMs: number) => SafetyControllerSystem {
  return (self, activationTimestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerSystem.activateEStop] pre violated: not self.eStopInputActive");
    }
    if (!((activationTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerSystem.activateEStop] pre violated: activationTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastEStopTimestampMs": self.lastEStopTimestampMs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, activationTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.eStopInputActive === true))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopInputActive = true");
      }
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === true))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.allMotionOutputsDeEnergized = true");
      }
      if (!((__result.self.lastEStopTimestampMs === activationTimestampMs))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.lastEStopTimestampMs = activationTimestampMs");
      }
      if (!((__result.self.eStopResponseTimeMs === (__result.self.lastEStopTimestampMs - __pre["self.lastEStopTimestampMs"])))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopResponseTimeMs = self.lastEStopTimestampMs - self.lastEStopTimestampMs@pre");
      }
      if (!((__result.self.eStopResponseTimeMs >= 0))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopResponseTimeMs >= 0.0");
      }
      if (!((__result.self.eStopResponseTimeMs <= __result.self.maxEStopLatencyMs))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
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

/** Impl signature for SafetyControllerSystem.activateEStop (async). User supplies this. */
export type SafetyControllerSystemActivateEStopAsyncImpl = (self: SafetyControllerSystem, activationTimestampMs: number) => Promise<{ self: SafetyControllerSystem; modified: { eStopInputActive: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; lastEStopTimestampMs: unknown; eStopResponseTimeMs: unknown } }>;

/** Contract-checking wrapper for SafetyControllerSystem.activateEStop (async). */
export function wrapSafetyControllerSystemActivateEStopAsync(impl: SafetyControllerSystemActivateEStopAsyncImpl): (self: SafetyControllerSystem, activationTimestampMs: number) => Promise<SafetyControllerSystem> {
  return async (self, activationTimestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerSystem.activateEStop] pre violated: not self.eStopInputActive");
    }
    if (!((activationTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerSystem.activateEStop] pre violated: activationTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastEStopTimestampMs": self.lastEStopTimestampMs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, activationTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.eStopInputActive === true))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopInputActive = true");
      }
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === true))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.allMotionOutputsDeEnergized = true");
      }
      if (!((__result.self.lastEStopTimestampMs === activationTimestampMs))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.lastEStopTimestampMs = activationTimestampMs");
      }
      if (!((__result.self.eStopResponseTimeMs === (__result.self.lastEStopTimestampMs - __pre["self.lastEStopTimestampMs"])))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopResponseTimeMs = self.lastEStopTimestampMs - self.lastEStopTimestampMs@pre");
      }
      if (!((__result.self.eStopResponseTimeMs >= 0))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopResponseTimeMs >= 0.0");
      }
      if (!((__result.self.eStopResponseTimeMs <= __result.self.maxEStopLatencyMs))) {
        postViolations.push("[SafetyControllerSystem.activateEStop] post violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
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

/** Impl signature for SafetyControllerSystem.manualReset. User supplies this. */
export type SafetyControllerSystemManualResetImpl = (self: SafetyControllerSystem, resetTimestampMs: number) => { self: SafetyControllerSystem; modified: { eStopInputActive: unknown; manualResetInputActive: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; rejectionActive: unknown } };

/** Contract-checking wrapper for SafetyControllerSystem.manualReset. */
export function wrapSafetyControllerSystemManualReset(impl: SafetyControllerSystemManualResetImpl): (self: SafetyControllerSystem, resetTimestampMs: number) => SafetyControllerSystem {
  return (self, resetTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.eStopInputActive)) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: self.eStopInputActive");
    }
    if (!((self.manualResetInputActive === true))) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: self.manualResetInputActive = true");
    }
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: self.isFailsafeActive");
    }
    if (!((resetTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: resetTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, resetTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.eStopInputActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.eStopInputActive = false");
      }
      if (!((__result.self.manualResetInputActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.manualResetInputActive = false");
      }
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.allMotionOutputsDeEnergized = false");
      }
      if (!((__result.self.rejectionActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.rejectionActive = false");
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

/** Impl signature for SafetyControllerSystem.manualReset (async). User supplies this. */
export type SafetyControllerSystemManualResetAsyncImpl = (self: SafetyControllerSystem, resetTimestampMs: number) => Promise<{ self: SafetyControllerSystem; modified: { eStopInputActive: unknown; manualResetInputActive: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; rejectionActive: unknown } }>;

/** Contract-checking wrapper for SafetyControllerSystem.manualReset (async). */
export function wrapSafetyControllerSystemManualResetAsync(impl: SafetyControllerSystemManualResetAsyncImpl): (self: SafetyControllerSystem, resetTimestampMs: number) => Promise<SafetyControllerSystem> {
  return async (self, resetTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.eStopInputActive)) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: self.eStopInputActive");
    }
    if (!((self.manualResetInputActive === true))) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: self.manualResetInputActive = true");
    }
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: self.isFailsafeActive");
    }
    if (!((resetTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerSystem.manualReset] pre violated: resetTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, resetTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.eStopInputActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.eStopInputActive = false");
      }
      if (!((__result.self.manualResetInputActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.manualResetInputActive = false");
      }
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.allMotionOutputsDeEnergized = false");
      }
      if (!((__result.self.rejectionActive === false))) {
        postViolations.push("[SafetyControllerSystem.manualReset] post violated: self.rejectionActive = false");
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

/** Impl signature for SafetyControllerSystem.detectSensorFault. User supplies this. */
export type SafetyControllerSystemDetectSensorFaultImpl = (self: SafetyControllerSystem, faultTimestampMs: number, faultReported: boolean) => { self: SafetyControllerSystem; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; lastSensorFaultTimestampMs: unknown } };

/** Contract-checking wrapper for SafetyControllerSystem.detectSensorFault. */
export function wrapSafetyControllerSystemDetectSensorFault(impl: SafetyControllerSystemDetectSensorFaultImpl): (self: SafetyControllerSystem, faultTimestampMs: number, faultReported: boolean) => SafetyControllerSystem {
  return (self, faultTimestampMs, faultReported) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(faultReported)) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: faultReported");
    }
    if (!((faultTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: faultTimestampMs >= 0.0");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: not self.eStopInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultTimestampMs, faultReported);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === true))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.allMotionOutputsDeEnergized = true");
      }
      if (!((__result.self.lastSensorFaultTimestampMs === faultTimestampMs))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.lastSensorFaultTimestampMs = faultTimestampMs");
      }
      if (!((!(__result.self.sensorFaultDetected) || __result.self.isFailsafeActive))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: not self.sensorFaultDetected or self.isFailsafeActive");
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

/** Impl signature for SafetyControllerSystem.detectSensorFault (async). User supplies this. */
export type SafetyControllerSystemDetectSensorFaultAsyncImpl = (self: SafetyControllerSystem, faultTimestampMs: number, faultReported: boolean) => Promise<{ self: SafetyControllerSystem; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; lastSensorFaultTimestampMs: unknown } }>;

/** Contract-checking wrapper for SafetyControllerSystem.detectSensorFault (async). */
export function wrapSafetyControllerSystemDetectSensorFaultAsync(impl: SafetyControllerSystemDetectSensorFaultAsyncImpl): (self: SafetyControllerSystem, faultTimestampMs: number, faultReported: boolean) => Promise<SafetyControllerSystem> {
  return async (self, faultTimestampMs, faultReported) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(faultReported)) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: faultReported");
    }
    if (!((faultTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: faultTimestampMs >= 0.0");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerSystem.detectSensorFault] pre violated: not self.eStopInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultTimestampMs, faultReported);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === true))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.allMotionOutputsDeEnergized = true");
      }
      if (!((__result.self.lastSensorFaultTimestampMs === faultTimestampMs))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: self.lastSensorFaultTimestampMs = faultTimestampMs");
      }
      if (!((!(__result.self.sensorFaultDetected) || __result.self.isFailsafeActive))) {
        postViolations.push("[SafetyControllerSystem.detectSensorFault] post violated: not self.sensorFaultDetected or self.isFailsafeActive");
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

/** Impl signature for SafetyControllerSystem.sensorFaultRecovery. User supplies this. */
export type SafetyControllerSystemSensorFaultRecoveryImpl = (self: SafetyControllerSystem, recoveryTimestampMs: number) => { self: SafetyControllerSystem; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown } };

/** Contract-checking wrapper for SafetyControllerSystem.sensorFaultRecovery. */
export function wrapSafetyControllerSystemSensorFaultRecovery(impl: SafetyControllerSystemSensorFaultRecoveryImpl): (self: SafetyControllerSystem, recoveryTimestampMs: number) => SafetyControllerSystem {
  return (self, recoveryTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SafetyControllerSystem.sensorFaultRecovery] pre violated: self.sensorFaultDetected");
    }
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerSystem.sensorFaultRecovery] pre violated: self.isFailsafeActive");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerSystem.sensorFaultRecovery] pre violated: not self.eStopInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recoveryTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SafetyControllerSystem.sensorFaultRecovery] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[SafetyControllerSystem.sensorFaultRecovery] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === false))) {
        postViolations.push("[SafetyControllerSystem.sensorFaultRecovery] post violated: self.allMotionOutputsDeEnergized = false");
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

/** Impl signature for SafetyControllerSystem.sensorFaultRecovery (async). User supplies this. */
export type SafetyControllerSystemSensorFaultRecoveryAsyncImpl = (self: SafetyControllerSystem, recoveryTimestampMs: number) => Promise<{ self: SafetyControllerSystem; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown } }>;

/** Contract-checking wrapper for SafetyControllerSystem.sensorFaultRecovery (async). */
export function wrapSafetyControllerSystemSensorFaultRecoveryAsync(impl: SafetyControllerSystemSensorFaultRecoveryAsyncImpl): (self: SafetyControllerSystem, recoveryTimestampMs: number) => Promise<SafetyControllerSystem> {
  return async (self, recoveryTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SafetyControllerSystem.sensorFaultRecovery] pre violated: self.sensorFaultDetected");
    }
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerSystem.sensorFaultRecovery] pre violated: self.isFailsafeActive");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerSystem.sensorFaultRecovery] pre violated: not self.eStopInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recoveryTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SafetyControllerSystem.sensorFaultRecovery] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[SafetyControllerSystem.sensorFaultRecovery] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === false))) {
        postViolations.push("[SafetyControllerSystem.sensorFaultRecovery] post violated: self.allMotionOutputsDeEnergized = false");
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

/** Impl signature for SafetyControllerSystem.rejectMotionCommand. User supplies this. */
export type SafetyControllerSystemRejectMotionCommandImpl = (self: SafetyControllerSystem, commandId: string, commandType: string) => { self: SafetyControllerSystem; modified: {} };

/** Contract-checking wrapper for SafetyControllerSystem.rejectMotionCommand. */
export function wrapSafetyControllerSystemRejectMotionCommand(impl: SafetyControllerSystemRejectMotionCommandImpl): (self: SafetyControllerSystem, commandId: string, commandType: string) => SafetyControllerSystem {
  return (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: self.isFailsafeActive");
    }
    if (!(self.rejectionActive)) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: self.rejectionActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SafetyControllerSystem.rejectMotionCommand] post violated: true");
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

/** Impl signature for SafetyControllerSystem.rejectMotionCommand (async). User supplies this. */
export type SafetyControllerSystemRejectMotionCommandAsyncImpl = (self: SafetyControllerSystem, commandId: string, commandType: string) => Promise<{ self: SafetyControllerSystem; modified: {} }>;

/** Contract-checking wrapper for SafetyControllerSystem.rejectMotionCommand (async). */
export function wrapSafetyControllerSystemRejectMotionCommandAsync(impl: SafetyControllerSystemRejectMotionCommandAsyncImpl): (self: SafetyControllerSystem, commandId: string, commandType: string) => Promise<SafetyControllerSystem> {
  return async (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: self.isFailsafeActive");
    }
    if (!(self.rejectionActive)) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: self.rejectionActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[SafetyControllerSystem.rejectMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SafetyControllerSystem.rejectMotionCommand] post violated: true");
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

/** Impl signature for SafetyControllerSystem.acceptMotionCommand. User supplies this. */
export type SafetyControllerSystemAcceptMotionCommandImpl = (self: SafetyControllerSystem, commandId: string, commandType: string) => { self: SafetyControllerSystem; modified: {} };

/** Contract-checking wrapper for SafetyControllerSystem.acceptMotionCommand. */
export function wrapSafetyControllerSystemAcceptMotionCommand(impl: SafetyControllerSystemAcceptMotionCommandImpl): (self: SafetyControllerSystem, commandId: string, commandType: string) => SafetyControllerSystem {
  return (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[SafetyControllerSystem.acceptMotionCommand] pre violated: not self.isFailsafeActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[SafetyControllerSystem.acceptMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[SafetyControllerSystem.acceptMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SafetyControllerSystem.acceptMotionCommand] post violated: true");
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

/** Impl signature for SafetyControllerSystem.acceptMotionCommand (async). User supplies this. */
export type SafetyControllerSystemAcceptMotionCommandAsyncImpl = (self: SafetyControllerSystem, commandId: string, commandType: string) => Promise<{ self: SafetyControllerSystem; modified: {} }>;

/** Contract-checking wrapper for SafetyControllerSystem.acceptMotionCommand (async). */
export function wrapSafetyControllerSystemAcceptMotionCommandAsync(impl: SafetyControllerSystemAcceptMotionCommandAsyncImpl): (self: SafetyControllerSystem, commandId: string, commandType: string) => Promise<SafetyControllerSystem> {
  return async (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[SafetyControllerSystem.acceptMotionCommand] pre violated: not self.isFailsafeActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[SafetyControllerSystem.acceptMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[SafetyControllerSystem.acceptMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SafetyControllerSystem.acceptMotionCommand] post violated: true");
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

/** Lifecycle registry for EStopLatencyCommitment commitments. */
export class EStopLatencyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<EStopLatencyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a EStopLatencyCommitment — the typed wrapper guarantees that since
    // `register` only accepts EStopLatencyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: EStopLatencyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: EStopLatencyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: EStopLatencyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: EStopLatencyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<EStopLatencyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<EStopLatencyCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for EStopLatchingCommitment commitments. */
export class EStopLatchingCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<EStopLatchingCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a EStopLatchingCommitment — the typed wrapper guarantees that since
    // `register` only accepts EStopLatchingCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: EStopLatchingCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: EStopLatchingCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: EStopLatchingCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: EStopLatchingCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<EStopLatchingCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<EStopLatchingCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SensorFaultFailsafeCommitment commitments. */
export class SensorFaultFailsafeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SensorFaultFailsafeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SensorFaultFailsafeCommitment — the typed wrapper guarantees that since
    // `register` only accepts SensorFaultFailsafeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SensorFaultFailsafeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SensorFaultFailsafeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SensorFaultFailsafeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SensorFaultFailsafeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SensorFaultFailsafeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SensorFaultFailsafeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for MotionCommandRejectionCommitment commitments. */
export class MotionCommandRejectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MotionCommandRejectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MotionCommandRejectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MotionCommandRejectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MotionCommandRejectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MotionCommandRejectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MotionCommandRejectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MotionCommandRejectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MotionCommandRejectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MotionCommandRejectionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

