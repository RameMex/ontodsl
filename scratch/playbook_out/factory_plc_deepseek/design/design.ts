// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for EStopInterruptHandler. Runtime: string. Compile-time: branded. */
export type EStopInterruptHandlerId = string & { readonly __brand: "EStopInterruptHandlerId" };
/** Identity type for FailsafeStateManager. Runtime: string. Compile-time: branded. */
export type FailsafeStateManagerId = string & { readonly __brand: "FailsafeStateManagerId" };
/** Identity type for MotionOutputController. Runtime: string. Compile-time: branded. */
export type MotionOutputControllerId = string & { readonly __brand: "MotionOutputControllerId" };
/** Identity type for SafetySensorManager. Runtime: string. Compile-time: branded. */
export type SafetySensorManagerId = string & { readonly __brand: "SafetySensorManagerId" };
/** Identity type for ManualResetController. Runtime: string. Compile-time: branded. */
export type ManualResetControllerId = string & { readonly __brand: "ManualResetControllerId" };
/** Identity type for ScanCycleSynchronizer. Runtime: string. Compile-time: branded. */
export type ScanCycleSynchronizerId = string & { readonly __brand: "ScanCycleSynchronizerId" };
/** Identity type for EStopActivationInterface. Runtime: string. Compile-time: branded. */
export type EStopActivationInterfaceId = string & { readonly __brand: "EStopActivationInterfaceId" };
/** Identity type for FailsafeToMotionInterface. Runtime: string. Compile-time: branded. */
export type FailsafeToMotionInterfaceId = string & { readonly __brand: "FailsafeToMotionInterfaceId" };
/** Identity type for SensorFaultFailsafeInterface. Runtime: string. Compile-time: branded. */
export type SensorFaultFailsafeInterfaceId = string & { readonly __brand: "SensorFaultFailsafeInterfaceId" };
/** Identity type for ManualResetInterface. Runtime: string. Compile-time: branded. */
export type ManualResetInterfaceId = string & { readonly __brand: "ManualResetInterfaceId" };
/** Identity type for EStopDeactivationFlow. Runtime: string. Compile-time: branded. */
export type EStopDeactivationFlowId = string & { readonly __brand: "EStopDeactivationFlowId" };
/** Identity type for SensorFaultToFailsafeFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultToFailsafeFlowId = string & { readonly __brand: "SensorFaultToFailsafeFlowId" };
/** Identity type for ManualResetFlow. Runtime: string. Compile-time: branded. */
export type ManualResetFlowId = string & { readonly __brand: "ManualResetFlowId" };
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
/** Identity type for SafetyControllerSystem. Runtime: string. Compile-time: branded. */
export type SafetyControllerSystemId = string & { readonly __brand: "SafetyControllerSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface EStopInterruptHandler {
  readonly handlerId: EStopInterruptHandlerId;
  readonly eStopSignalActive: boolean;
  readonly signalTimestampMs: number;
  readonly responseLatencyUs: number;
  readonly maxResponseLatencyUs: number;
  readonly maxEStopLatencyMs: number;
  readonly latchingEnforced: boolean;
}

/** @stereotype <<Kind>> */
export interface FailsafeStateManager {
  readonly managerId: FailsafeStateManagerId;
  readonly isFailsafeActive: boolean;
  readonly failSafeEntryTimeMs: number;
  readonly failSafeSource: string;
  readonly isLatched: boolean;
  readonly latchingEnforced: boolean;
  readonly rejectionActive: boolean;
  readonly maxEStopLatencyMs: number;
  readonly maxSensorFaultResponseCycles: number;
}

/** @stereotype <<Kind>> */
export interface MotionOutputController {
  readonly outputControllerId: MotionOutputControllerId;
  readonly allOutputsDeEnergized: boolean;
  readonly motionOutputSet: ReadonlySet<string>;
  readonly lastDeEnergizeTimestampMs: number;
  readonly maxDeEnergizeLatencyMs: number;
  readonly maxEStopLatencyMs: number;
  readonly rejectionActive: boolean;
  readonly latchingEnforced: boolean;
}

/** @stereotype <<Kind>> */
export interface SafetySensorManager {
  readonly sensorManagerId: SafetySensorManagerId;
  readonly sensorFaultDetected: boolean;
  readonly sensorIdSet: ReadonlySet<string>;
  readonly lastSensorReadings: ReadonlySet<string>;
  readonly sensorFaultTimestampMs: number;
  readonly faultRecoveryTimestampMs: number;
  readonly maxSensorFaultResponseCycles: number;
  readonly rejectionActive: boolean;
  readonly latchingEnforced: boolean;
  readonly maxEStopLatencyMs: number;
}

/** @stereotype <<Kind>> */
export interface ManualResetController {
  readonly resetControllerId: ManualResetControllerId;
  readonly manualResetInputActive: boolean;
  readonly resetRequestTimestampMs: number;
  readonly resetValid: boolean;
  readonly latchingEnforced: boolean;
  readonly maxEStopLatencyMs: number;
}

/** @stereotype <<Kind>> */
export interface ScanCycleSynchronizer {
  readonly synchId: ScanCycleSynchronizerId;
  readonly currentCycleId: string;
  readonly cycleStartTimestampMs: number;
  readonly cycleDurationMs: number;
  readonly cycleCount: number;
  readonly eStopResponseTimeMs: number;
  readonly faultWithinCurrentCycle: boolean;
  readonly maxEStopLatencyMs: number;
  readonly latchingEnforced: boolean;
  readonly rejectionActive: boolean;
  readonly maxSensorFaultResponseCycles: number;
}

/** @stereotype <<Relator>> */
export interface EStopActivationInterface {
  readonly intId: EStopActivationInterfaceId;
  readonly activationLatencyMs: number;
  readonly activationComplete: boolean;
}

/** @stereotype <<Relator>> */
export interface FailsafeToMotionInterface {
  readonly intId: FailsafeToMotionInterfaceId;
  readonly deEnergizeLatencyMs: number;
}

/** @stereotype <<Relator>> */
export interface SensorFaultFailsafeInterface {
  readonly intId: SensorFaultFailsafeInterfaceId;
  readonly failSafeEntryLatencyMs: number;
}

/** @stereotype <<Relator>> */
export interface ManualResetInterface {
  readonly intId: ManualResetInterfaceId;
  readonly resetConsumed: boolean;
}

/** @stereotype <<Happening>> */
export interface EStopDeactivationFlow {
  readonly flowId: EStopDeactivationFlowId;
  readonly eStopSignalTimestampMs: number;
  readonly failsafeEntryTimestampMs: number;
  readonly motionDeEnergizeTimestampMs: number;
  readonly totalLatencyMs: number;
  readonly withinSpec: boolean;
}

/** @stereotype <<Happening>> */
export interface SensorFaultToFailsafeFlow {
  readonly flowId: SensorFaultToFailsafeFlowId;
  readonly sensorFaultTimestampMs: number;
  readonly failsafeEntryTimestampMs: number;
  readonly cycleStartTimestampMs: number;
  readonly cyclesToResponse: number;
}

/** @stereotype <<Happening>> */
export interface ManualResetFlow {
  readonly flowId: ManualResetFlowId;
  readonly resetRequestTimestampMs: number;
  readonly failsafeExitTimestampMs: number;
  readonly latchReleased: boolean;
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

/** @stereotype <<Category>> */
export interface Iec61508Sil3Compliant {
  readonly silLevel: string;
  readonly pfH_Rate: number;
  readonly proofTestIntervalDays: number;
}

/** @stereotype <<Category>> */
export interface Iso13849PlECompliant {
  readonly performanceLevel: string;
  readonly mttfDYears: number;
  readonly dcAvg: number;
  readonly categoryArchitecture: string;
}

/** @stereotype <<Category>> */
export interface Iec61131_3Compliant {
  readonly languageUsed: string;
  readonly revision: string;
  readonly certifiedCompilers: ReadonlySet<string>;
}

/** @stereotype <<Category>> */
export interface Iec61131_6SafetyCompliant {
  readonly safetyFunctionList: ReadonlySet<string>;
  readonly validatedLibraries: ReadonlySet<string>;
  readonly faultExclusionTimesMs: number;
}

/** @stereotype <<Category>> */
export interface EuMachineryDirectiveCompliant {
  readonly declarationOfConformityRef: string;
  readonly ceMarkingYear: number;
  readonly essentialSafetyReqs: ReadonlySet<string>;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleSensorReadings {
}

/** @stereotype <<Category>> */
export interface EStopHaltTiming {
}

/** @stereotype <<Category>> */
export interface SensorFaultWithinOneCycle {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly rationale: string;
  readonly status: string;
  readonly verificationMethod: string;
}

/** @stereotype <<Subkind>> */
export interface SafetyControllerFormalized extends SafetyControllerSystem {
}


// ─── Factory functions ───

export function makeEStopInterruptHandler(data: {
  handlerId: string;
  eStopSignalActive: boolean;
  signalTimestampMs: number;
  responseLatencyUs: number;
  maxResponseLatencyUs: number;
  maxEStopLatencyMs: number;
  latchingEnforced: boolean;
}): EStopInterruptHandler {
  return {
    handlerId: data.handlerId as EStopInterruptHandlerId,
    eStopSignalActive: data.eStopSignalActive,
    signalTimestampMs: data.signalTimestampMs,
    responseLatencyUs: data.responseLatencyUs,
    maxResponseLatencyUs: data.maxResponseLatencyUs,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
    latchingEnforced: data.latchingEnforced,
  };
}

export function makeFailsafeStateManager(data: {
  managerId: string;
  isFailsafeActive: boolean;
  failSafeEntryTimeMs: number;
  failSafeSource: string;
  isLatched: boolean;
  latchingEnforced: boolean;
  rejectionActive: boolean;
  maxEStopLatencyMs: number;
  maxSensorFaultResponseCycles: number;
}): FailsafeStateManager {
  return {
    managerId: data.managerId as FailsafeStateManagerId,
    isFailsafeActive: data.isFailsafeActive,
    failSafeEntryTimeMs: data.failSafeEntryTimeMs,
    failSafeSource: data.failSafeSource,
    isLatched: data.isLatched,
    latchingEnforced: data.latchingEnforced,
    rejectionActive: data.rejectionActive,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
    maxSensorFaultResponseCycles: data.maxSensorFaultResponseCycles,
  };
}

export function makeMotionOutputController(data: {
  outputControllerId: string;
  allOutputsDeEnergized: boolean;
  motionOutputSet: ReadonlySet<string>;
  lastDeEnergizeTimestampMs: number;
  maxDeEnergizeLatencyMs: number;
  maxEStopLatencyMs: number;
  rejectionActive: boolean;
  latchingEnforced: boolean;
}): MotionOutputController {
  return {
    outputControllerId: data.outputControllerId as MotionOutputControllerId,
    allOutputsDeEnergized: data.allOutputsDeEnergized,
    motionOutputSet: data.motionOutputSet,
    lastDeEnergizeTimestampMs: data.lastDeEnergizeTimestampMs,
    maxDeEnergizeLatencyMs: data.maxDeEnergizeLatencyMs,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
    rejectionActive: data.rejectionActive,
    latchingEnforced: data.latchingEnforced,
  };
}

export function makeSafetySensorManager(data: {
  sensorManagerId: string;
  sensorFaultDetected: boolean;
  sensorIdSet: ReadonlySet<string>;
  lastSensorReadings: ReadonlySet<string>;
  sensorFaultTimestampMs: number;
  faultRecoveryTimestampMs: number;
  maxSensorFaultResponseCycles: number;
  rejectionActive: boolean;
  latchingEnforced: boolean;
  maxEStopLatencyMs: number;
}): SafetySensorManager {
  return {
    sensorManagerId: data.sensorManagerId as SafetySensorManagerId,
    sensorFaultDetected: data.sensorFaultDetected,
    sensorIdSet: data.sensorIdSet,
    lastSensorReadings: data.lastSensorReadings,
    sensorFaultTimestampMs: data.sensorFaultTimestampMs,
    faultRecoveryTimestampMs: data.faultRecoveryTimestampMs,
    maxSensorFaultResponseCycles: data.maxSensorFaultResponseCycles,
    rejectionActive: data.rejectionActive,
    latchingEnforced: data.latchingEnforced,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
  };
}

export function makeManualResetController(data: {
  resetControllerId: string;
  manualResetInputActive: boolean;
  resetRequestTimestampMs: number;
  resetValid: boolean;
  latchingEnforced: boolean;
  maxEStopLatencyMs: number;
}): ManualResetController {
  return {
    resetControllerId: data.resetControllerId as ManualResetControllerId,
    manualResetInputActive: data.manualResetInputActive,
    resetRequestTimestampMs: data.resetRequestTimestampMs,
    resetValid: data.resetValid,
    latchingEnforced: data.latchingEnforced,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
  };
}

export function makeScanCycleSynchronizer(data: {
  synchId: string;
  currentCycleId: string;
  cycleStartTimestampMs: number;
  cycleDurationMs: number;
  cycleCount: number;
  eStopResponseTimeMs: number;
  faultWithinCurrentCycle: boolean;
  maxEStopLatencyMs: number;
  latchingEnforced: boolean;
  rejectionActive: boolean;
  maxSensorFaultResponseCycles: number;
}): ScanCycleSynchronizer {
  return {
    synchId: data.synchId as ScanCycleSynchronizerId,
    currentCycleId: data.currentCycleId,
    cycleStartTimestampMs: data.cycleStartTimestampMs,
    cycleDurationMs: data.cycleDurationMs,
    cycleCount: data.cycleCount,
    eStopResponseTimeMs: data.eStopResponseTimeMs,
    faultWithinCurrentCycle: data.faultWithinCurrentCycle,
    maxEStopLatencyMs: data.maxEStopLatencyMs,
    latchingEnforced: data.latchingEnforced,
    rejectionActive: data.rejectionActive,
    maxSensorFaultResponseCycles: data.maxSensorFaultResponseCycles,
  };
}

export function makeEStopActivationInterface(data: {
  intId: string;
  activationLatencyMs: number;
  activationComplete: boolean;
}): EStopActivationInterface {
  return {
    intId: data.intId as EStopActivationInterfaceId,
    activationLatencyMs: data.activationLatencyMs,
    activationComplete: data.activationComplete,
  };
}

export function makeFailsafeToMotionInterface(data: {
  intId: string;
  deEnergizeLatencyMs: number;
}): FailsafeToMotionInterface {
  return {
    intId: data.intId as FailsafeToMotionInterfaceId,
    deEnergizeLatencyMs: data.deEnergizeLatencyMs,
  };
}

export function makeSensorFaultFailsafeInterface(data: {
  intId: string;
  failSafeEntryLatencyMs: number;
}): SensorFaultFailsafeInterface {
  return {
    intId: data.intId as SensorFaultFailsafeInterfaceId,
    failSafeEntryLatencyMs: data.failSafeEntryLatencyMs,
  };
}

export function makeManualResetInterface(data: {
  intId: string;
  resetConsumed: boolean;
}): ManualResetInterface {
  return {
    intId: data.intId as ManualResetInterfaceId,
    resetConsumed: data.resetConsumed,
  };
}

export function makeEStopDeactivationFlow(data: {
  flowId: string;
  eStopSignalTimestampMs: number;
  failsafeEntryTimestampMs: number;
  motionDeEnergizeTimestampMs: number;
  totalLatencyMs: number;
  withinSpec: boolean;
}): EStopDeactivationFlow {
  return {
    flowId: data.flowId as EStopDeactivationFlowId,
    eStopSignalTimestampMs: data.eStopSignalTimestampMs,
    failsafeEntryTimestampMs: data.failsafeEntryTimestampMs,
    motionDeEnergizeTimestampMs: data.motionDeEnergizeTimestampMs,
    totalLatencyMs: data.totalLatencyMs,
    withinSpec: data.withinSpec,
  };
}

export function makeSensorFaultToFailsafeFlow(data: {
  flowId: string;
  sensorFaultTimestampMs: number;
  failsafeEntryTimestampMs: number;
  cycleStartTimestampMs: number;
  cyclesToResponse: number;
}): SensorFaultToFailsafeFlow {
  return {
    flowId: data.flowId as SensorFaultToFailsafeFlowId,
    sensorFaultTimestampMs: data.sensorFaultTimestampMs,
    failsafeEntryTimestampMs: data.failsafeEntryTimestampMs,
    cycleStartTimestampMs: data.cycleStartTimestampMs,
    cyclesToResponse: data.cyclesToResponse,
  };
}

export function makeManualResetFlow(data: {
  flowId: string;
  resetRequestTimestampMs: number;
  failsafeExitTimestampMs: number;
  latchReleased: boolean;
}): ManualResetFlow {
  return {
    flowId: data.flowId as ManualResetFlowId,
    resetRequestTimestampMs: data.resetRequestTimestampMs,
    failsafeExitTimestampMs: data.failsafeExitTimestampMs,
    latchReleased: data.latchReleased,
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

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  rationale: string;
  status: string;
  verificationMethod: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    rationale: data.rationale,
    status: data.status,
    verificationMethod: data.verificationMethod,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for EStopInterruptHandler. Returns empty array when valid. */
export function validateEStopInterruptHandler(instance: EStopInterruptHandler): readonly string[] {
  const violations: string[] = [];
  if (!((instance.handlerId !== null))) {
    violations.push("[EStopInterruptHandler] invariant violated: self.handlerId <> null");
  }
  if (!((instance.maxResponseLatencyUs > 0))) {
    violations.push("[EStopInterruptHandler] invariant violated: self.maxResponseLatencyUs > 0.0");
  }
  if (!((instance.maxResponseLatencyUs <= 1000))) {
    violations.push("[EStopInterruptHandler] invariant violated: self.maxResponseLatencyUs <= 1000.0");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[EStopInterruptHandler] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[EStopInterruptHandler] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[EStopInterruptHandler] invariant violated: self.latchingEnforced");
  }
  return violations;
}

/** Runtime invariant check for FailsafeStateManager. Returns empty array when valid. */
export function validateFailsafeStateManager(instance: FailsafeStateManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[FailsafeStateManager] invariant violated: self.managerId <> null");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[FailsafeStateManager] invariant violated: self.latchingEnforced");
  }
  if (!(instance.rejectionActive)) {
    violations.push("[FailsafeStateManager] invariant violated: self.rejectionActive");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[FailsafeStateManager] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[FailsafeStateManager] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  if (!((instance.maxSensorFaultResponseCycles > 0))) {
    violations.push("[FailsafeStateManager] invariant violated: self.maxSensorFaultResponseCycles > 0");
  }
  if (!((instance.maxSensorFaultResponseCycles <= 1))) {
    violations.push("[FailsafeStateManager] invariant violated: self.maxSensorFaultResponseCycles <= 1");
  }
  return violations;
}

/** Runtime invariant check for MotionOutputController. Returns empty array when valid. */
export function validateMotionOutputController(instance: MotionOutputController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.outputControllerId !== null))) {
    violations.push("[MotionOutputController] invariant violated: self.outputControllerId <> null");
  }
  if (!((instance.maxDeEnergizeLatencyMs > 0))) {
    violations.push("[MotionOutputController] invariant violated: self.maxDeEnergizeLatencyMs > 0.0");
  }
  if (!((instance.maxDeEnergizeLatencyMs <= 50))) {
    violations.push("[MotionOutputController] invariant violated: self.maxDeEnergizeLatencyMs <= 50.0");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[MotionOutputController] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[MotionOutputController] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  if (!(instance.rejectionActive)) {
    violations.push("[MotionOutputController] invariant violated: self.rejectionActive");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[MotionOutputController] invariant violated: self.latchingEnforced");
  }
  return violations;
}

/** Runtime invariant check for SafetySensorManager. Returns empty array when valid. */
export function validateSafetySensorManager(instance: SafetySensorManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorManagerId !== null))) {
    violations.push("[SafetySensorManager] invariant violated: self.sensorManagerId <> null");
  }
  if (!((instance.maxSensorFaultResponseCycles > 0))) {
    violations.push("[SafetySensorManager] invariant violated: self.maxSensorFaultResponseCycles > 0");
  }
  if (!((instance.maxSensorFaultResponseCycles <= 1))) {
    violations.push("[SafetySensorManager] invariant violated: self.maxSensorFaultResponseCycles <= 1");
  }
  if (!(instance.rejectionActive)) {
    violations.push("[SafetySensorManager] invariant violated: self.rejectionActive");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[SafetySensorManager] invariant violated: self.latchingEnforced");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[SafetySensorManager] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[SafetySensorManager] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  return violations;
}

/** Runtime invariant check for ManualResetController. Returns empty array when valid. */
export function validateManualResetController(instance: ManualResetController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.resetControllerId !== null))) {
    violations.push("[ManualResetController] invariant violated: self.resetControllerId <> null");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[ManualResetController] invariant violated: self.latchingEnforced");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[ManualResetController] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[ManualResetController] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  return violations;
}

/** Runtime invariant check for ScanCycleSynchronizer. Returns empty array when valid. */
export function validateScanCycleSynchronizer(instance: ScanCycleSynchronizer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.synchId !== null))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.synchId <> null");
  }
  if (!((instance.cycleDurationMs > 0))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.cycleDurationMs > 0.0");
  }
  if (!((instance.cycleDurationMs <= 50))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.cycleDurationMs <= 50.0");
  }
  if (!((instance.maxEStopLatencyMs > 0))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.maxEStopLatencyMs > 0.0");
  }
  if (!((instance.maxEStopLatencyMs <= 50))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.maxEStopLatencyMs <= 50.0");
  }
  if (!(instance.latchingEnforced)) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.latchingEnforced");
  }
  if (!(instance.rejectionActive)) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.rejectionActive");
  }
  if (!((instance.maxSensorFaultResponseCycles > 0))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.maxSensorFaultResponseCycles > 0");
  }
  if (!((instance.maxSensorFaultResponseCycles <= 1))) {
    violations.push("[ScanCycleSynchronizer] invariant violated: self.maxSensorFaultResponseCycles <= 1");
  }
  return violations;
}

/** Runtime invariant check for EStopActivationInterface. Returns empty array when valid. */
export function validateEStopActivationInterface(instance: EStopActivationInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intId !== null))) {
    violations.push("[EStopActivationInterface] invariant violated: self.intId <> null");
  }
  if (!((instance.activationLatencyMs >= 0))) {
    violations.push("[EStopActivationInterface] invariant violated: self.activationLatencyMs >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for FailsafeToMotionInterface. Returns empty array when valid. */
export function validateFailsafeToMotionInterface(instance: FailsafeToMotionInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intId !== null))) {
    violations.push("[FailsafeToMotionInterface] invariant violated: self.intId <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultFailsafeInterface. Returns empty array when valid. */
export function validateSensorFaultFailsafeInterface(instance: SensorFaultFailsafeInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intId !== null))) {
    violations.push("[SensorFaultFailsafeInterface] invariant violated: self.intId <> null");
  }
  return violations;
}

/** Runtime invariant check for ManualResetInterface. Returns empty array when valid. */
export function validateManualResetInterface(instance: ManualResetInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intId !== null))) {
    violations.push("[ManualResetInterface] invariant violated: self.intId <> null");
  }
  return violations;
}

/** Runtime invariant check for EStopDeactivationFlow. Returns empty array when valid. */
export function validateEStopDeactivationFlow(instance: EStopDeactivationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EStopDeactivationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.eStopSignalTimestampMs >= 0))) {
    violations.push("[EStopDeactivationFlow] invariant violated: self.eStopSignalTimestampMs >= 0.0");
  }
  if (!((instance.failsafeEntryTimestampMs >= 0))) {
    violations.push("[EStopDeactivationFlow] invariant violated: self.failsafeEntryTimestampMs >= 0.0");
  }
  if (!((instance.motionDeEnergizeTimestampMs >= 0))) {
    violations.push("[EStopDeactivationFlow] invariant violated: self.motionDeEnergizeTimestampMs >= 0.0");
  }
  if (!((instance.totalLatencyMs === (instance.motionDeEnergizeTimestampMs - instance.eStopSignalTimestampMs)))) {
    violations.push("[EStopDeactivationFlow] invariant violated: self.totalLatencyMs = self.motionDeEnergizeTimestampMs - self.eStopSignalTimestampMs");
  }
  if (!((instance.withinSpec === (instance.totalLatencyMs <= 50)))) {
    violations.push("[EStopDeactivationFlow] invariant violated: self.withinSpec = (self.totalLatencyMs <= 50.0)");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultToFailsafeFlow. Returns empty array when valid. */
export function validateSensorFaultToFailsafeFlow(instance: SensorFaultToFailsafeFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultToFailsafeFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.sensorFaultTimestampMs >= 0))) {
    violations.push("[SensorFaultToFailsafeFlow] invariant violated: self.sensorFaultTimestampMs >= 0.0");
  }
  if (!((instance.failsafeEntryTimestampMs >= 0))) {
    violations.push("[SensorFaultToFailsafeFlow] invariant violated: self.failsafeEntryTimestampMs >= 0.0");
  }
  if (!((instance.cyclesToResponse >= 0))) {
    violations.push("[SensorFaultToFailsafeFlow] invariant violated: self.cyclesToResponse >= 0");
  }
  if (!((instance.cyclesToResponse <= 1))) {
    violations.push("[SensorFaultToFailsafeFlow] invariant violated: self.cyclesToResponse <= 1");
  }
  return violations;
}

/** Runtime invariant check for ManualResetFlow. Returns empty array when valid. */
export function validateManualResetFlow(instance: ManualResetFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ManualResetFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.resetRequestTimestampMs >= 0))) {
    violations.push("[ManualResetFlow] invariant violated: self.resetRequestTimestampMs >= 0.0");
  }
  if (!((instance.failsafeExitTimestampMs >= 0))) {
    violations.push("[ManualResetFlow] invariant violated: self.failsafeExitTimestampMs >= 0.0");
  }
  if (!(instance.latchReleased)) {
    violations.push("[ManualResetFlow] invariant violated: self.latchReleased");
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

/** Runtime invariant check for Iec61508Sil3Compliant. Returns empty array when valid. */
export function validateIec61508Sil3Compliant(instance: Iec61508Sil3Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.silLevel === "SIL3"))) {
    violations.push("[Iec61508Sil3Compliant] invariant violated: self.silLevel = 'SIL3'");
  }
  if (!((instance.pfH_Rate >= 1e-8))) {
    violations.push("[Iec61508Sil3Compliant] invariant violated: self.pfH_Rate >= 0.00000001");
  }
  if (!((instance.pfH_Rate < 1e-7))) {
    violations.push("[Iec61508Sil3Compliant] invariant violated: self.pfH_Rate <  0.0000001");
  }
  if (!((instance.proofTestIntervalDays > 0))) {
    violations.push("[Iec61508Sil3Compliant] invariant violated: self.proofTestIntervalDays > 0");
  }
  if (!((instance.proofTestIntervalDays <= 365))) {
    violations.push("[Iec61508Sil3Compliant] invariant violated: self.proofTestIntervalDays <= 365");
  }
  return violations;
}

/** Runtime invariant check for Iso13849PlECompliant. Returns empty array when valid. */
export function validateIso13849PlECompliant(instance: Iso13849PlECompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.performanceLevel === "PL e"))) {
    violations.push("[Iso13849PlECompliant] invariant violated: self.performanceLevel = 'PL e'");
  }
  if (!((instance.mttfDYears >= 30))) {
    violations.push("[Iso13849PlECompliant] invariant violated: self.mttfDYears >= 30.0");
  }
  if (!((instance.dcAvg >= 0.99))) {
    violations.push("[Iso13849PlECompliant] invariant violated: self.dcAvg >= 0.99");
  }
  if (!((instance.categoryArchitecture === "Cat 4"))) {
    violations.push("[Iso13849PlECompliant] invariant violated: self.categoryArchitecture = 'Cat 4'");
  }
  return violations;
}

/** Runtime invariant check for Iec61131_3Compliant. Returns empty array when valid. */
export function validateIec61131_3Compliant(instance: Iec61131_3Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((((instance.languageUsed === "ST") || (instance.languageUsed === "LD")) || (instance.languageUsed === "FBD")))) {
    violations.push("[Iec61131_3Compliant] invariant violated: (self.languageUsed = 'ST') or (self.languageUsed = 'LD') or (self.languageUsed = 'FBD')");
  }
  if (!((instance.revision !== null))) {
    violations.push("[Iec61131_3Compliant] invariant violated: self.revision <> null");
  }
  if (!((instance.certifiedCompilers).size > 0)) {
    violations.push("[Iec61131_3Compliant] invariant violated: self.certifiedCompilers->notEmpty()");
  }
  return violations;
}

/** Runtime invariant check for Iec61131_6SafetyCompliant. Returns empty array when valid. */
export function validateIec61131_6SafetyCompliant(instance: Iec61131_6SafetyCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.safetyFunctionList).size > 0)) {
    violations.push("[Iec61131_6SafetyCompliant] invariant violated: self.safetyFunctionList->notEmpty()");
  }
  if (!((instance.validatedLibraries).size > 0)) {
    violations.push("[Iec61131_6SafetyCompliant] invariant violated: self.validatedLibraries->notEmpty()");
  }
  if (!((instance.faultExclusionTimesMs >= 0))) {
    violations.push("[Iec61131_6SafetyCompliant] invariant violated: self.faultExclusionTimesMs >= 0.0");
  }
  if (!((instance.faultExclusionTimesMs <= 50))) {
    violations.push("[Iec61131_6SafetyCompliant] invariant violated: self.faultExclusionTimesMs <= 50.0");
  }
  return violations;
}

/** Runtime invariant check for EuMachineryDirectiveCompliant. Returns empty array when valid. */
export function validateEuMachineryDirectiveCompliant(instance: EuMachineryDirectiveCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.declarationOfConformityRef !== null))) {
    violations.push("[EuMachineryDirectiveCompliant] invariant violated: self.declarationOfConformityRef <> null");
  }
  if (!((instance.ceMarkingYear >= 2024))) {
    violations.push("[EuMachineryDirectiveCompliant] invariant violated: self.ceMarkingYear >= 2024");
  }
  if (!((instance.essentialSafetyReqs).size > 0)) {
    violations.push("[EuMachineryDirectiveCompliant] invariant violated: self.essentialSafetyReqs->notEmpty()");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleSensorReadings. Returns empty array when valid. */
export function validatePhysicallyPlausibleSensorReadings(instance: PhysicallyPlausibleSensorReadings): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.calibratedRangeMin >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.calibratedRangeMax > bearer.calibratedRangeMin — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.calibratedRangeMax <= 1000000.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentReading >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentReading <= 1000000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EStopHaltTiming. Returns empty array when valid. */
export function validateEStopHaltTiming(instance: EStopHaltTiming): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxEStopLatencyMs > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxEStopLatencyMs <= 50.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorFaultWithinOneCycle. Returns empty array when valid. */
export function validateSensorFaultWithinOneCycle(instance: SensorFaultWithinOneCycle): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSensorFaultResponseCycles > 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSensorFaultResponseCycles <= 1 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionCode !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionCode <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.status <> null");
  }
  if (!((instance.verificationMethod !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.verificationMethod <> null");
  }
  return violations;
}

/** Runtime invariant check for SafetyControllerFormalized. Returns empty array when valid. */
export function validateSafetyControllerFormalized(instance: SafetyControllerFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eStopResponseTimeMs <= instance.maxEStopLatencyMs))) {
    violations.push("[SafetyControllerFormalized] invariant violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
  }
  if (!((!(instance.eStopInputActive) || instance.isFailsafeActive))) {
    violations.push("[SafetyControllerFormalized] invariant violated: (not self.eStopInputActive) or self.isFailsafeActive");
  }
  if (!((!(instance.sensorFaultDetected) || instance.isFailsafeActive))) {
    violations.push("[SafetyControllerFormalized] invariant violated: (not self.sensorFaultDetected) or self.isFailsafeActive");
  }
  if (!((!(instance.isFailsafeActive) || instance.allMotionOutputsDeEnergized))) {
    violations.push("[SafetyControllerFormalized] invariant violated: (not self.isFailsafeActive) or self.allMotionOutputsDeEnergized");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for EStopInterruptHandler.detectEStopSignal. User supplies this. */
export type EStopInterruptHandlerDetectEStopSignalImpl = (self: EStopInterruptHandler, timestampMs: number) => { self: EStopInterruptHandler; modified: { eStopSignalActive: unknown; signalTimestampMs: unknown; responseLatencyUs: unknown } };

/** Contract-checking wrapper for EStopInterruptHandler.detectEStopSignal. */
export function wrapEStopInterruptHandlerDetectEStopSignal(impl: EStopInterruptHandlerDetectEStopSignalImpl): (self: EStopInterruptHandler, timestampMs: number) => EStopInterruptHandler {
  return (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.eStopSignalActive))) {
      preViolations.push("[EStopInterruptHandler.detectEStopSignal] pre violated: not self.eStopSignalActive");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[EStopInterruptHandler.detectEStopSignal] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.eStopSignalActive === true))) {
        postViolations.push("[EStopInterruptHandler.detectEStopSignal] post violated: self.eStopSignalActive = true");
      }
      if (!((__result.self.signalTimestampMs === timestampMs))) {
        postViolations.push("[EStopInterruptHandler.detectEStopSignal] post violated: self.signalTimestampMs = timestampMs");
      }
      if (!((__result.self.responseLatencyUs <= __result.self.maxResponseLatencyUs))) {
        postViolations.push("[EStopInterruptHandler.detectEStopSignal] post violated: self.responseLatencyUs <= self.maxResponseLatencyUs");
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

/** Impl signature for EStopInterruptHandler.detectEStopSignal (async). User supplies this. */
export type EStopInterruptHandlerDetectEStopSignalAsyncImpl = (self: EStopInterruptHandler, timestampMs: number) => Promise<{ self: EStopInterruptHandler; modified: { eStopSignalActive: unknown; signalTimestampMs: unknown; responseLatencyUs: unknown } }>;

/** Contract-checking wrapper for EStopInterruptHandler.detectEStopSignal (async). */
export function wrapEStopInterruptHandlerDetectEStopSignalAsync(impl: EStopInterruptHandlerDetectEStopSignalAsyncImpl): (self: EStopInterruptHandler, timestampMs: number) => Promise<EStopInterruptHandler> {
  return async (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.eStopSignalActive))) {
      preViolations.push("[EStopInterruptHandler.detectEStopSignal] pre violated: not self.eStopSignalActive");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[EStopInterruptHandler.detectEStopSignal] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.eStopSignalActive === true))) {
        postViolations.push("[EStopInterruptHandler.detectEStopSignal] post violated: self.eStopSignalActive = true");
      }
      if (!((__result.self.signalTimestampMs === timestampMs))) {
        postViolations.push("[EStopInterruptHandler.detectEStopSignal] post violated: self.signalTimestampMs = timestampMs");
      }
      if (!((__result.self.responseLatencyUs <= __result.self.maxResponseLatencyUs))) {
        postViolations.push("[EStopInterruptHandler.detectEStopSignal] post violated: self.responseLatencyUs <= self.maxResponseLatencyUs");
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

/** Impl signature for EStopInterruptHandler.clearEStopSignal. User supplies this. */
export type EStopInterruptHandlerClearEStopSignalImpl = (self: EStopInterruptHandler) => { self: EStopInterruptHandler; modified: { eStopSignalActive: unknown } };

/** Contract-checking wrapper for EStopInterruptHandler.clearEStopSignal. */
export function wrapEStopInterruptHandlerClearEStopSignal(impl: EStopInterruptHandlerClearEStopSignalImpl): (self: EStopInterruptHandler) => EStopInterruptHandler {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.eStopSignalActive)) {
      preViolations.push("[EStopInterruptHandler.clearEStopSignal] pre violated: self.eStopSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.eStopSignalActive === false))) {
        postViolations.push("[EStopInterruptHandler.clearEStopSignal] post violated: self.eStopSignalActive = false");
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

/** Impl signature for EStopInterruptHandler.clearEStopSignal (async). User supplies this. */
export type EStopInterruptHandlerClearEStopSignalAsyncImpl = (self: EStopInterruptHandler) => Promise<{ self: EStopInterruptHandler; modified: { eStopSignalActive: unknown } }>;

/** Contract-checking wrapper for EStopInterruptHandler.clearEStopSignal (async). */
export function wrapEStopInterruptHandlerClearEStopSignalAsync(impl: EStopInterruptHandlerClearEStopSignalAsyncImpl): (self: EStopInterruptHandler) => Promise<EStopInterruptHandler> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.eStopSignalActive)) {
      preViolations.push("[EStopInterruptHandler.clearEStopSignal] pre violated: self.eStopSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.eStopSignalActive === false))) {
        postViolations.push("[EStopInterruptHandler.clearEStopSignal] post violated: self.eStopSignalActive = false");
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

/** Impl signature for FailsafeStateManager.enterFailsafeFromEStop. User supplies this. */
export type FailsafeStateManagerEnterFailsafeFromEStopImpl = (self: FailsafeStateManager, timestampMs: number) => { self: FailsafeStateManager; modified: { isFailsafeActive: unknown; failSafeEntryTimeMs: unknown; failSafeSource: unknown; isLatched: unknown } };

/** Contract-checking wrapper for FailsafeStateManager.enterFailsafeFromEStop. */
export function wrapFailsafeStateManagerEnterFailsafeFromEStop(impl: FailsafeStateManagerEnterFailsafeFromEStopImpl): (self: FailsafeStateManager, timestampMs: number) => FailsafeStateManager {
  return (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] pre violated: not self.isFailsafeActive");
    }
    if (!(!(self.isLatched))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] pre violated: not self.isLatched");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.failSafeEntryTimeMs === timestampMs))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.failSafeEntryTimeMs = timestampMs");
      }
      if (!((__result.self.failSafeSource === "ESTOP"))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.failSafeSource = 'ESTOP'");
      }
      if (!((__result.self.isLatched === true))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.isLatched = true");
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

/** Impl signature for FailsafeStateManager.enterFailsafeFromEStop (async). User supplies this. */
export type FailsafeStateManagerEnterFailsafeFromEStopAsyncImpl = (self: FailsafeStateManager, timestampMs: number) => Promise<{ self: FailsafeStateManager; modified: { isFailsafeActive: unknown; failSafeEntryTimeMs: unknown; failSafeSource: unknown; isLatched: unknown } }>;

/** Contract-checking wrapper for FailsafeStateManager.enterFailsafeFromEStop (async). */
export function wrapFailsafeStateManagerEnterFailsafeFromEStopAsync(impl: FailsafeStateManagerEnterFailsafeFromEStopAsyncImpl): (self: FailsafeStateManager, timestampMs: number) => Promise<FailsafeStateManager> {
  return async (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] pre violated: not self.isFailsafeActive");
    }
    if (!(!(self.isLatched))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] pre violated: not self.isLatched");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.failSafeEntryTimeMs === timestampMs))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.failSafeEntryTimeMs = timestampMs");
      }
      if (!((__result.self.failSafeSource === "ESTOP"))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.failSafeSource = 'ESTOP'");
      }
      if (!((__result.self.isLatched === true))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromEStop] post violated: self.isLatched = true");
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

/** Impl signature for FailsafeStateManager.enterFailsafeFromSensorFault. User supplies this. */
export type FailsafeStateManagerEnterFailsafeFromSensorFaultImpl = (self: FailsafeStateManager, timestampMs: number) => { self: FailsafeStateManager; modified: { isFailsafeActive: unknown; failSafeEntryTimeMs: unknown; failSafeSource: unknown; isLatched: unknown } };

/** Contract-checking wrapper for FailsafeStateManager.enterFailsafeFromSensorFault. */
export function wrapFailsafeStateManagerEnterFailsafeFromSensorFault(impl: FailsafeStateManagerEnterFailsafeFromSensorFaultImpl): (self: FailsafeStateManager, timestampMs: number) => FailsafeStateManager {
  return (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] pre violated: not self.isFailsafeActive");
    }
    if (!(!(self.isLatched))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] pre violated: not self.isLatched");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.failSafeEntryTimeMs === timestampMs))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.failSafeEntryTimeMs = timestampMs");
      }
      if (!((__result.self.failSafeSource === "SENSOR_FAULT"))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.failSafeSource = 'SENSOR_FAULT'");
      }
      if (!((__result.self.isLatched === false))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.isLatched = false");
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

/** Impl signature for FailsafeStateManager.enterFailsafeFromSensorFault (async). User supplies this. */
export type FailsafeStateManagerEnterFailsafeFromSensorFaultAsyncImpl = (self: FailsafeStateManager, timestampMs: number) => Promise<{ self: FailsafeStateManager; modified: { isFailsafeActive: unknown; failSafeEntryTimeMs: unknown; failSafeSource: unknown; isLatched: unknown } }>;

/** Contract-checking wrapper for FailsafeStateManager.enterFailsafeFromSensorFault (async). */
export function wrapFailsafeStateManagerEnterFailsafeFromSensorFaultAsync(impl: FailsafeStateManagerEnterFailsafeFromSensorFaultAsyncImpl): (self: FailsafeStateManager, timestampMs: number) => Promise<FailsafeStateManager> {
  return async (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] pre violated: not self.isFailsafeActive");
    }
    if (!(!(self.isLatched))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] pre violated: not self.isLatched");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.failSafeEntryTimeMs === timestampMs))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.failSafeEntryTimeMs = timestampMs");
      }
      if (!((__result.self.failSafeSource === "SENSOR_FAULT"))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.failSafeSource = 'SENSOR_FAULT'");
      }
      if (!((__result.self.isLatched === false))) {
        postViolations.push("[FailsafeStateManager.enterFailsafeFromSensorFault] post violated: self.isLatched = false");
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

/** Impl signature for FailsafeStateManager.resetFailsafeMode. User supplies this. */
export type FailsafeStateManagerResetFailsafeModeImpl = (self: FailsafeStateManager) => { self: FailsafeStateManager; modified: { isFailsafeActive: unknown; isLatched: unknown } };

/** Contract-checking wrapper for FailsafeStateManager.resetFailsafeMode. */
export function wrapFailsafeStateManagerResetFailsafeMode(impl: FailsafeStateManagerResetFailsafeModeImpl): (self: FailsafeStateManager) => FailsafeStateManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[FailsafeStateManager.resetFailsafeMode] pre violated: self.isFailsafeActive");
    }
    if (!((!(self.isLatched) || (self.failSafeSource === "ESTOP")))) {
      preViolations.push("[FailsafeStateManager.resetFailsafeMode] pre violated: not self.isLatched or self.failSafeSource = 'ESTOP'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[FailsafeStateManager.resetFailsafeMode] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.isLatched === false))) {
        postViolations.push("[FailsafeStateManager.resetFailsafeMode] post violated: self.isLatched = false");
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

/** Impl signature for FailsafeStateManager.resetFailsafeMode (async). User supplies this. */
export type FailsafeStateManagerResetFailsafeModeAsyncImpl = (self: FailsafeStateManager) => Promise<{ self: FailsafeStateManager; modified: { isFailsafeActive: unknown; isLatched: unknown } }>;

/** Contract-checking wrapper for FailsafeStateManager.resetFailsafeMode (async). */
export function wrapFailsafeStateManagerResetFailsafeModeAsync(impl: FailsafeStateManagerResetFailsafeModeAsyncImpl): (self: FailsafeStateManager) => Promise<FailsafeStateManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[FailsafeStateManager.resetFailsafeMode] pre violated: self.isFailsafeActive");
    }
    if (!((!(self.isLatched) || (self.failSafeSource === "ESTOP")))) {
      preViolations.push("[FailsafeStateManager.resetFailsafeMode] pre violated: not self.isLatched or self.failSafeSource = 'ESTOP'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[FailsafeStateManager.resetFailsafeMode] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.isLatched === false))) {
        postViolations.push("[FailsafeStateManager.resetFailsafeMode] post violated: self.isLatched = false");
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

/** Impl signature for FailsafeStateManager.rejectMotionCommand. User supplies this. */
export type FailsafeStateManagerRejectMotionCommandImpl = (self: FailsafeStateManager, commandId: string, commandType: string) => { self: FailsafeStateManager; modified: {} };

/** Contract-checking wrapper for FailsafeStateManager.rejectMotionCommand. */
export function wrapFailsafeStateManagerRejectMotionCommand(impl: FailsafeStateManagerRejectMotionCommandImpl): (self: FailsafeStateManager, commandId: string, commandType: string) => FailsafeStateManager {
  return (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: self.isFailsafeActive");
    }
    if (!(self.rejectionActive)) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: self.rejectionActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[FailsafeStateManager.rejectMotionCommand] post violated: true");
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

/** Impl signature for FailsafeStateManager.rejectMotionCommand (async). User supplies this. */
export type FailsafeStateManagerRejectMotionCommandAsyncImpl = (self: FailsafeStateManager, commandId: string, commandType: string) => Promise<{ self: FailsafeStateManager; modified: {} }>;

/** Contract-checking wrapper for FailsafeStateManager.rejectMotionCommand (async). */
export function wrapFailsafeStateManagerRejectMotionCommandAsync(impl: FailsafeStateManagerRejectMotionCommandAsyncImpl): (self: FailsafeStateManager, commandId: string, commandType: string) => Promise<FailsafeStateManager> {
  return async (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: self.isFailsafeActive");
    }
    if (!(self.rejectionActive)) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: self.rejectionActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[FailsafeStateManager.rejectMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[FailsafeStateManager.rejectMotionCommand] post violated: true");
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

/** Impl signature for FailsafeStateManager.acceptMotionCommand. User supplies this. */
export type FailsafeStateManagerAcceptMotionCommandImpl = (self: FailsafeStateManager, commandId: string, commandType: string) => { self: FailsafeStateManager; modified: {} };

/** Contract-checking wrapper for FailsafeStateManager.acceptMotionCommand. */
export function wrapFailsafeStateManagerAcceptMotionCommand(impl: FailsafeStateManagerAcceptMotionCommandImpl): (self: FailsafeStateManager, commandId: string, commandType: string) => FailsafeStateManager {
  return (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[FailsafeStateManager.acceptMotionCommand] pre violated: not self.isFailsafeActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[FailsafeStateManager.acceptMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[FailsafeStateManager.acceptMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[FailsafeStateManager.acceptMotionCommand] post violated: true");
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

/** Impl signature for FailsafeStateManager.acceptMotionCommand (async). User supplies this. */
export type FailsafeStateManagerAcceptMotionCommandAsyncImpl = (self: FailsafeStateManager, commandId: string, commandType: string) => Promise<{ self: FailsafeStateManager; modified: {} }>;

/** Contract-checking wrapper for FailsafeStateManager.acceptMotionCommand (async). */
export function wrapFailsafeStateManagerAcceptMotionCommandAsync(impl: FailsafeStateManagerAcceptMotionCommandAsyncImpl): (self: FailsafeStateManager, commandId: string, commandType: string) => Promise<FailsafeStateManager> {
  return async (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(!(self.isFailsafeActive))) {
      preViolations.push("[FailsafeStateManager.acceptMotionCommand] pre violated: not self.isFailsafeActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[FailsafeStateManager.acceptMotionCommand] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[FailsafeStateManager.acceptMotionCommand] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[FailsafeStateManager.acceptMotionCommand] post violated: true");
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

/** Impl signature for MotionOutputController.deEnergizeAllOutputs. User supplies this. */
export type MotionOutputControllerDeEnergizeAllOutputsImpl = (self: MotionOutputController, timestampMs: number) => { self: MotionOutputController; modified: { allOutputsDeEnergized: unknown; lastDeEnergizeTimestampMs: unknown } };

/** Contract-checking wrapper for MotionOutputController.deEnergizeAllOutputs. */
export function wrapMotionOutputControllerDeEnergizeAllOutputs(impl: MotionOutputControllerDeEnergizeAllOutputsImpl): (self: MotionOutputController, timestampMs: number) => MotionOutputController {
  return (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.allOutputsDeEnergized))) {
      preViolations.push("[MotionOutputController.deEnergizeAllOutputs] pre violated: not self.allOutputsDeEnergized");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[MotionOutputController.deEnergizeAllOutputs] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.allOutputsDeEnergized === true))) {
        postViolations.push("[MotionOutputController.deEnergizeAllOutputs] post violated: self.allOutputsDeEnergized = true");
      }
      if (!((__result.self.lastDeEnergizeTimestampMs === timestampMs))) {
        postViolations.push("[MotionOutputController.deEnergizeAllOutputs] post violated: self.lastDeEnergizeTimestampMs = timestampMs");
      }
      if (!(Array.from(__result.self.motionOutputSet).every((__x) => (true)))) {
        postViolations.push("[MotionOutputController.deEnergizeAllOutputs] post violated: self.motionOutputSet->forAll(id | true)");
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

/** Impl signature for MotionOutputController.deEnergizeAllOutputs (async). User supplies this. */
export type MotionOutputControllerDeEnergizeAllOutputsAsyncImpl = (self: MotionOutputController, timestampMs: number) => Promise<{ self: MotionOutputController; modified: { allOutputsDeEnergized: unknown; lastDeEnergizeTimestampMs: unknown } }>;

/** Contract-checking wrapper for MotionOutputController.deEnergizeAllOutputs (async). */
export function wrapMotionOutputControllerDeEnergizeAllOutputsAsync(impl: MotionOutputControllerDeEnergizeAllOutputsAsyncImpl): (self: MotionOutputController, timestampMs: number) => Promise<MotionOutputController> {
  return async (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.allOutputsDeEnergized))) {
      preViolations.push("[MotionOutputController.deEnergizeAllOutputs] pre violated: not self.allOutputsDeEnergized");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[MotionOutputController.deEnergizeAllOutputs] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.allOutputsDeEnergized === true))) {
        postViolations.push("[MotionOutputController.deEnergizeAllOutputs] post violated: self.allOutputsDeEnergized = true");
      }
      if (!((__result.self.lastDeEnergizeTimestampMs === timestampMs))) {
        postViolations.push("[MotionOutputController.deEnergizeAllOutputs] post violated: self.lastDeEnergizeTimestampMs = timestampMs");
      }
      if (!(Array.from(__result.self.motionOutputSet).every((__x) => (true)))) {
        postViolations.push("[MotionOutputController.deEnergizeAllOutputs] post violated: self.motionOutputSet->forAll(id | true)");
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

/** Impl signature for MotionOutputController.reEnergizeAllOutputs. User supplies this. */
export type MotionOutputControllerReEnergizeAllOutputsImpl = (self: MotionOutputController) => { self: MotionOutputController; modified: { allOutputsDeEnergized: unknown } };

/** Contract-checking wrapper for MotionOutputController.reEnergizeAllOutputs. */
export function wrapMotionOutputControllerReEnergizeAllOutputs(impl: MotionOutputControllerReEnergizeAllOutputsImpl): (self: MotionOutputController) => MotionOutputController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.allOutputsDeEnergized)) {
      preViolations.push("[MotionOutputController.reEnergizeAllOutputs] pre violated: self.allOutputsDeEnergized");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.allOutputsDeEnergized === false))) {
        postViolations.push("[MotionOutputController.reEnergizeAllOutputs] post violated: self.allOutputsDeEnergized = false");
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

/** Impl signature for MotionOutputController.reEnergizeAllOutputs (async). User supplies this. */
export type MotionOutputControllerReEnergizeAllOutputsAsyncImpl = (self: MotionOutputController) => Promise<{ self: MotionOutputController; modified: { allOutputsDeEnergized: unknown } }>;

/** Contract-checking wrapper for MotionOutputController.reEnergizeAllOutputs (async). */
export function wrapMotionOutputControllerReEnergizeAllOutputsAsync(impl: MotionOutputControllerReEnergizeAllOutputsAsyncImpl): (self: MotionOutputController) => Promise<MotionOutputController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.allOutputsDeEnergized)) {
      preViolations.push("[MotionOutputController.reEnergizeAllOutputs] pre violated: self.allOutputsDeEnergized");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.allOutputsDeEnergized === false))) {
        postViolations.push("[MotionOutputController.reEnergizeAllOutputs] post violated: self.allOutputsDeEnergized = false");
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

/** Impl signature for MotionOutputController.issueMotionCommand. User supplies this. */
export type MotionOutputControllerIssueMotionCommandImpl = (self: MotionOutputController, outputId: string, commandType: string) => { self: MotionOutputController; modified: {} };

/** Contract-checking wrapper for MotionOutputController.issueMotionCommand. */
export function wrapMotionOutputControllerIssueMotionCommand(impl: MotionOutputControllerIssueMotionCommandImpl): (self: MotionOutputController, outputId: string, commandType: string) => MotionOutputController {
  return (self, outputId, commandType) => {
    const preViolations: string[] = [];
    if (!(!(self.allOutputsDeEnergized))) {
      preViolations.push("[MotionOutputController.issueMotionCommand] pre violated: not self.allOutputsDeEnergized");
    }
    if (!((outputId !== null))) {
      preViolations.push("[MotionOutputController.issueMotionCommand] pre violated: outputId <> null");
    }
    if (!((self.motionOutputSet).has(outputId))) {
      preViolations.push("[MotionOutputController.issueMotionCommand] pre violated: self.motionOutputSet->includes(outputId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, outputId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[MotionOutputController.issueMotionCommand] post violated: true");
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

/** Impl signature for MotionOutputController.issueMotionCommand (async). User supplies this. */
export type MotionOutputControllerIssueMotionCommandAsyncImpl = (self: MotionOutputController, outputId: string, commandType: string) => Promise<{ self: MotionOutputController; modified: {} }>;

/** Contract-checking wrapper for MotionOutputController.issueMotionCommand (async). */
export function wrapMotionOutputControllerIssueMotionCommandAsync(impl: MotionOutputControllerIssueMotionCommandAsyncImpl): (self: MotionOutputController, outputId: string, commandType: string) => Promise<MotionOutputController> {
  return async (self, outputId, commandType) => {
    const preViolations: string[] = [];
    if (!(!(self.allOutputsDeEnergized))) {
      preViolations.push("[MotionOutputController.issueMotionCommand] pre violated: not self.allOutputsDeEnergized");
    }
    if (!((outputId !== null))) {
      preViolations.push("[MotionOutputController.issueMotionCommand] pre violated: outputId <> null");
    }
    if (!((self.motionOutputSet).has(outputId))) {
      preViolations.push("[MotionOutputController.issueMotionCommand] pre violated: self.motionOutputSet->includes(outputId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, outputId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[MotionOutputController.issueMotionCommand] post violated: true");
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

/** Impl signature for SafetySensorManager.detectSensorFault. User supplies this. */
export type SafetySensorManagerDetectSensorFaultImpl = (self: SafetySensorManager, sensorId: string, faultTimestampMs: number, faultReported: boolean) => { self: SafetySensorManager; modified: { sensorFaultDetected: unknown; sensorFaultTimestampMs: unknown } };

/** Contract-checking wrapper for SafetySensorManager.detectSensorFault. */
export function wrapSafetySensorManagerDetectSensorFault(impl: SafetySensorManagerDetectSensorFaultImpl): (self: SafetySensorManager, sensorId: string, faultTimestampMs: number, faultReported: boolean) => SafetySensorManager {
  return (self, sensorId, faultTimestampMs, faultReported) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(faultReported)) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: faultReported");
    }
    if (!((sensorId !== null))) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: sensorId <> null");
    }
    if (!((faultTimestampMs >= 0))) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: faultTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sensorId, faultTimestampMs, faultReported);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SafetySensorManager.detectSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.sensorFaultTimestampMs === faultTimestampMs))) {
        postViolations.push("[SafetySensorManager.detectSensorFault] post violated: self.sensorFaultTimestampMs = faultTimestampMs");
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

/** Impl signature for SafetySensorManager.detectSensorFault (async). User supplies this. */
export type SafetySensorManagerDetectSensorFaultAsyncImpl = (self: SafetySensorManager, sensorId: string, faultTimestampMs: number, faultReported: boolean) => Promise<{ self: SafetySensorManager; modified: { sensorFaultDetected: unknown; sensorFaultTimestampMs: unknown } }>;

/** Contract-checking wrapper for SafetySensorManager.detectSensorFault (async). */
export function wrapSafetySensorManagerDetectSensorFaultAsync(impl: SafetySensorManagerDetectSensorFaultAsyncImpl): (self: SafetySensorManager, sensorId: string, faultTimestampMs: number, faultReported: boolean) => Promise<SafetySensorManager> {
  return async (self, sensorId, faultTimestampMs, faultReported) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(faultReported)) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: faultReported");
    }
    if (!((sensorId !== null))) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: sensorId <> null");
    }
    if (!((faultTimestampMs >= 0))) {
      preViolations.push("[SafetySensorManager.detectSensorFault] pre violated: faultTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sensorId, faultTimestampMs, faultReported);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SafetySensorManager.detectSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.sensorFaultTimestampMs === faultTimestampMs))) {
        postViolations.push("[SafetySensorManager.detectSensorFault] post violated: self.sensorFaultTimestampMs = faultTimestampMs");
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

/** Impl signature for SafetySensorManager.clearSensorFault. User supplies this. */
export type SafetySensorManagerClearSensorFaultImpl = (self: SafetySensorManager, recoveryTimestampMs: number) => { self: SafetySensorManager; modified: { sensorFaultDetected: unknown; faultRecoveryTimestampMs: unknown } };

/** Contract-checking wrapper for SafetySensorManager.clearSensorFault. */
export function wrapSafetySensorManagerClearSensorFault(impl: SafetySensorManagerClearSensorFaultImpl): (self: SafetySensorManager, recoveryTimestampMs: number) => SafetySensorManager {
  return (self, recoveryTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SafetySensorManager.clearSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (!((recoveryTimestampMs >= 0))) {
      preViolations.push("[SafetySensorManager.clearSensorFault] pre violated: recoveryTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recoveryTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SafetySensorManager.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.faultRecoveryTimestampMs === recoveryTimestampMs))) {
        postViolations.push("[SafetySensorManager.clearSensorFault] post violated: self.faultRecoveryTimestampMs = recoveryTimestampMs");
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

/** Impl signature for SafetySensorManager.clearSensorFault (async). User supplies this. */
export type SafetySensorManagerClearSensorFaultAsyncImpl = (self: SafetySensorManager, recoveryTimestampMs: number) => Promise<{ self: SafetySensorManager; modified: { sensorFaultDetected: unknown; faultRecoveryTimestampMs: unknown } }>;

/** Contract-checking wrapper for SafetySensorManager.clearSensorFault (async). */
export function wrapSafetySensorManagerClearSensorFaultAsync(impl: SafetySensorManagerClearSensorFaultAsyncImpl): (self: SafetySensorManager, recoveryTimestampMs: number) => Promise<SafetySensorManager> {
  return async (self, recoveryTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SafetySensorManager.clearSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (!((recoveryTimestampMs >= 0))) {
      preViolations.push("[SafetySensorManager.clearSensorFault] pre violated: recoveryTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recoveryTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SafetySensorManager.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.faultRecoveryTimestampMs === recoveryTimestampMs))) {
        postViolations.push("[SafetySensorManager.clearSensorFault] post violated: self.faultRecoveryTimestampMs = recoveryTimestampMs");
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

/** Impl signature for ManualResetController.receiveResetRequest. User supplies this. */
export type ManualResetControllerReceiveResetRequestImpl = (self: ManualResetController, timestampMs: number) => { self: ManualResetController; modified: { manualResetInputActive: unknown; resetRequestTimestampMs: unknown; resetValid: unknown } };

/** Contract-checking wrapper for ManualResetController.receiveResetRequest. */
export function wrapManualResetControllerReceiveResetRequest(impl: ManualResetControllerReceiveResetRequestImpl): (self: ManualResetController, timestampMs: number) => ManualResetController {
  return (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.manualResetInputActive))) {
      preViolations.push("[ManualResetController.receiveResetRequest] pre violated: not self.manualResetInputActive");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[ManualResetController.receiveResetRequest] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.manualResetInputActive === true))) {
        postViolations.push("[ManualResetController.receiveResetRequest] post violated: self.manualResetInputActive = true");
      }
      if (!((__result.self.resetRequestTimestampMs === timestampMs))) {
        postViolations.push("[ManualResetController.receiveResetRequest] post violated: self.resetRequestTimestampMs = timestampMs");
      }
      if (!((__result.self.resetValid === true))) {
        postViolations.push("[ManualResetController.receiveResetRequest] post violated: self.resetValid = true");
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

/** Impl signature for ManualResetController.receiveResetRequest (async). User supplies this. */
export type ManualResetControllerReceiveResetRequestAsyncImpl = (self: ManualResetController, timestampMs: number) => Promise<{ self: ManualResetController; modified: { manualResetInputActive: unknown; resetRequestTimestampMs: unknown; resetValid: unknown } }>;

/** Contract-checking wrapper for ManualResetController.receiveResetRequest (async). */
export function wrapManualResetControllerReceiveResetRequestAsync(impl: ManualResetControllerReceiveResetRequestAsyncImpl): (self: ManualResetController, timestampMs: number) => Promise<ManualResetController> {
  return async (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.manualResetInputActive))) {
      preViolations.push("[ManualResetController.receiveResetRequest] pre violated: not self.manualResetInputActive");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[ManualResetController.receiveResetRequest] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.manualResetInputActive === true))) {
        postViolations.push("[ManualResetController.receiveResetRequest] post violated: self.manualResetInputActive = true");
      }
      if (!((__result.self.resetRequestTimestampMs === timestampMs))) {
        postViolations.push("[ManualResetController.receiveResetRequest] post violated: self.resetRequestTimestampMs = timestampMs");
      }
      if (!((__result.self.resetValid === true))) {
        postViolations.push("[ManualResetController.receiveResetRequest] post violated: self.resetValid = true");
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

/** Impl signature for ManualResetController.consumeResetRequest. User supplies this. */
export type ManualResetControllerConsumeResetRequestImpl = (self: ManualResetController) => { self: ManualResetController; modified: { manualResetInputActive: unknown } };

/** Contract-checking wrapper for ManualResetController.consumeResetRequest. */
export function wrapManualResetControllerConsumeResetRequest(impl: ManualResetControllerConsumeResetRequestImpl): (self: ManualResetController) => ManualResetController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.manualResetInputActive)) {
      preViolations.push("[ManualResetController.consumeResetRequest] pre violated: self.manualResetInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.manualResetInputActive === false))) {
        postViolations.push("[ManualResetController.consumeResetRequest] post violated: self.manualResetInputActive = false");
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

/** Impl signature for ManualResetController.consumeResetRequest (async). User supplies this. */
export type ManualResetControllerConsumeResetRequestAsyncImpl = (self: ManualResetController) => Promise<{ self: ManualResetController; modified: { manualResetInputActive: unknown } }>;

/** Contract-checking wrapper for ManualResetController.consumeResetRequest (async). */
export function wrapManualResetControllerConsumeResetRequestAsync(impl: ManualResetControllerConsumeResetRequestAsyncImpl): (self: ManualResetController) => Promise<ManualResetController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.manualResetInputActive)) {
      preViolations.push("[ManualResetController.consumeResetRequest] pre violated: self.manualResetInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.manualResetInputActive === false))) {
        postViolations.push("[ManualResetController.consumeResetRequest] post violated: self.manualResetInputActive = false");
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

/** Impl signature for ScanCycleSynchronizer.startNextCycle. User supplies this. */
export type ScanCycleSynchronizerStartNextCycleImpl = (self: ScanCycleSynchronizer, cycleId: string, startTimestampMs: number) => { self: ScanCycleSynchronizer; modified: { currentCycleId: unknown; cycleStartTimestampMs: unknown; cycleCount: unknown; faultWithinCurrentCycle: unknown } };

/** Contract-checking wrapper for ScanCycleSynchronizer.startNextCycle. */
export function wrapScanCycleSynchronizerStartNextCycle(impl: ScanCycleSynchronizerStartNextCycleImpl): (self: ScanCycleSynchronizer, cycleId: string, startTimestampMs: number) => ScanCycleSynchronizer {
  return (self, cycleId, startTimestampMs) => {
    const preViolations: string[] = [];
    if (!((cycleId !== null))) {
      preViolations.push("[ScanCycleSynchronizer.startNextCycle] pre violated: cycleId <> null");
    }
    if (!((startTimestampMs >= 0))) {
      preViolations.push("[ScanCycleSynchronizer.startNextCycle] pre violated: startTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, cycleId, startTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.currentCycleId === cycleId))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.currentCycleId = cycleId");
      }
      if (!((__result.self.cycleStartTimestampMs === startTimestampMs))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.cycleStartTimestampMs = startTimestampMs");
      }
      if (!((__result.self.cycleCount === (__result.self.cycleCount + 1)))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.cycleCount = self.cycleCount + 1");
      }
      if (!((__result.self.faultWithinCurrentCycle === false))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.faultWithinCurrentCycle = false");
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

/** Impl signature for ScanCycleSynchronizer.startNextCycle (async). User supplies this. */
export type ScanCycleSynchronizerStartNextCycleAsyncImpl = (self: ScanCycleSynchronizer, cycleId: string, startTimestampMs: number) => Promise<{ self: ScanCycleSynchronizer; modified: { currentCycleId: unknown; cycleStartTimestampMs: unknown; cycleCount: unknown; faultWithinCurrentCycle: unknown } }>;

/** Contract-checking wrapper for ScanCycleSynchronizer.startNextCycle (async). */
export function wrapScanCycleSynchronizerStartNextCycleAsync(impl: ScanCycleSynchronizerStartNextCycleAsyncImpl): (self: ScanCycleSynchronizer, cycleId: string, startTimestampMs: number) => Promise<ScanCycleSynchronizer> {
  return async (self, cycleId, startTimestampMs) => {
    const preViolations: string[] = [];
    if (!((cycleId !== null))) {
      preViolations.push("[ScanCycleSynchronizer.startNextCycle] pre violated: cycleId <> null");
    }
    if (!((startTimestampMs >= 0))) {
      preViolations.push("[ScanCycleSynchronizer.startNextCycle] pre violated: startTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, cycleId, startTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.currentCycleId === cycleId))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.currentCycleId = cycleId");
      }
      if (!((__result.self.cycleStartTimestampMs === startTimestampMs))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.cycleStartTimestampMs = startTimestampMs");
      }
      if (!((__result.self.cycleCount === (__result.self.cycleCount + 1)))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.cycleCount = self.cycleCount + 1");
      }
      if (!((__result.self.faultWithinCurrentCycle === false))) {
        postViolations.push("[ScanCycleSynchronizer.startNextCycle] post violated: self.faultWithinCurrentCycle = false");
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

/** Impl signature for ScanCycleSynchronizer.recordFaultInCycle. User supplies this. */
export type ScanCycleSynchronizerRecordFaultInCycleImpl = (self: ScanCycleSynchronizer, timestampMs: number) => { self: ScanCycleSynchronizer; modified: { faultWithinCurrentCycle: unknown; eStopResponseTimeMs: unknown } };

/** Contract-checking wrapper for ScanCycleSynchronizer.recordFaultInCycle. */
export function wrapScanCycleSynchronizerRecordFaultInCycle(impl: ScanCycleSynchronizerRecordFaultInCycleImpl): (self: ScanCycleSynchronizer, timestampMs: number) => ScanCycleSynchronizer {
  return (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.faultWithinCurrentCycle))) {
      preViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] pre violated: not self.faultWithinCurrentCycle");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.faultWithinCurrentCycle === true))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.faultWithinCurrentCycle = true");
      }
      if (!((__result.self.eStopResponseTimeMs === (timestampMs - __result.self.cycleStartTimestampMs)))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.eStopResponseTimeMs = timestampMs - self.cycleStartTimestampMs");
      }
      if (!((__result.self.eStopResponseTimeMs >= 0))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.eStopResponseTimeMs >= 0.0");
      }
      if (!((__result.self.eStopResponseTimeMs <= __result.self.maxEStopLatencyMs))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
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

/** Impl signature for ScanCycleSynchronizer.recordFaultInCycle (async). User supplies this. */
export type ScanCycleSynchronizerRecordFaultInCycleAsyncImpl = (self: ScanCycleSynchronizer, timestampMs: number) => Promise<{ self: ScanCycleSynchronizer; modified: { faultWithinCurrentCycle: unknown; eStopResponseTimeMs: unknown } }>;

/** Contract-checking wrapper for ScanCycleSynchronizer.recordFaultInCycle (async). */
export function wrapScanCycleSynchronizerRecordFaultInCycleAsync(impl: ScanCycleSynchronizerRecordFaultInCycleAsyncImpl): (self: ScanCycleSynchronizer, timestampMs: number) => Promise<ScanCycleSynchronizer> {
  return async (self, timestampMs) => {
    const preViolations: string[] = [];
    if (!(!(self.faultWithinCurrentCycle))) {
      preViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] pre violated: not self.faultWithinCurrentCycle");
    }
    if (!((timestampMs >= 0))) {
      preViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] pre violated: timestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.faultWithinCurrentCycle === true))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.faultWithinCurrentCycle = true");
      }
      if (!((__result.self.eStopResponseTimeMs === (timestampMs - __result.self.cycleStartTimestampMs)))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.eStopResponseTimeMs = timestampMs - self.cycleStartTimestampMs");
      }
      if (!((__result.self.eStopResponseTimeMs >= 0))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.eStopResponseTimeMs >= 0.0");
      }
      if (!((__result.self.eStopResponseTimeMs <= __result.self.maxEStopLatencyMs))) {
        postViolations.push("[ScanCycleSynchronizer.recordFaultInCycle] post violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
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

/** Impl signature for ScanCycleSynchronizer.completeCycle. User supplies this. */
export type ScanCycleSynchronizerCompleteCycleImpl = (self: ScanCycleSynchronizer) => { self: ScanCycleSynchronizer; modified: { faultWithinCurrentCycle: unknown } };

/** Contract-checking wrapper for ScanCycleSynchronizer.completeCycle. */
export function wrapScanCycleSynchronizerCompleteCycle(impl: ScanCycleSynchronizerCompleteCycleImpl): (self: ScanCycleSynchronizer) => ScanCycleSynchronizer {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ScanCycleSynchronizer.completeCycle] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultWithinCurrentCycle === false))) {
        postViolations.push("[ScanCycleSynchronizer.completeCycle] post violated: self.faultWithinCurrentCycle = false");
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

/** Impl signature for ScanCycleSynchronizer.completeCycle (async). User supplies this. */
export type ScanCycleSynchronizerCompleteCycleAsyncImpl = (self: ScanCycleSynchronizer) => Promise<{ self: ScanCycleSynchronizer; modified: { faultWithinCurrentCycle: unknown } }>;

/** Contract-checking wrapper for ScanCycleSynchronizer.completeCycle (async). */
export function wrapScanCycleSynchronizerCompleteCycleAsync(impl: ScanCycleSynchronizerCompleteCycleAsyncImpl): (self: ScanCycleSynchronizer) => Promise<ScanCycleSynchronizer> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ScanCycleSynchronizer.completeCycle] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultWithinCurrentCycle === false))) {
        postViolations.push("[ScanCycleSynchronizer.completeCycle] post violated: self.faultWithinCurrentCycle = false");
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

/** Impl signature for SafetyControllerFormalized.rejectMotionCommandDuringFailsafe. User supplies this. */
export type SafetyControllerFormalizedRejectMotionCommandDuringFailsafeImpl = (self: SafetyControllerFormalized, commandId: string, commandType: string) => { self: SafetyControllerFormalized; modified: {} };

/** Contract-checking wrapper for SafetyControllerFormalized.rejectMotionCommandDuringFailsafe. */
export function wrapSafetyControllerFormalizedRejectMotionCommandDuringFailsafe(impl: SafetyControllerFormalizedRejectMotionCommandDuringFailsafeImpl): (self: SafetyControllerFormalized, commandId: string, commandType: string) => SafetyControllerFormalized {
  return (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: self.isFailsafeActive");
    }
    if (!(self.rejectionActive)) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: self.rejectionActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] post violated: true");
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

/** Impl signature for SafetyControllerFormalized.rejectMotionCommandDuringFailsafe (async). User supplies this. */
export type SafetyControllerFormalizedRejectMotionCommandDuringFailsafeAsyncImpl = (self: SafetyControllerFormalized, commandId: string, commandType: string) => Promise<{ self: SafetyControllerFormalized; modified: {} }>;

/** Contract-checking wrapper for SafetyControllerFormalized.rejectMotionCommandDuringFailsafe (async). */
export function wrapSafetyControllerFormalizedRejectMotionCommandDuringFailsafeAsync(impl: SafetyControllerFormalizedRejectMotionCommandDuringFailsafeAsyncImpl): (self: SafetyControllerFormalized, commandId: string, commandType: string) => Promise<SafetyControllerFormalized> {
  return async (self, commandId, commandType) => {
    const preViolations: string[] = [];
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: self.isFailsafeActive");
    }
    if (!(self.rejectionActive)) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: self.rejectionActive");
    }
    if (!((commandId !== null))) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: commandId <> null");
    }
    if (!((commandType !== null))) {
      preViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] pre violated: commandType <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandId, commandType);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[SafetyControllerFormalized.rejectMotionCommandDuringFailsafe] post violated: true");
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

/** Impl signature for SafetyControllerFormalized.enforceEStopLatch. User supplies this. */
export type SafetyControllerFormalizedEnforceEStopLatchImpl = (self: SafetyControllerFormalized, activationTimestampMs: number) => { self: SafetyControllerFormalized; modified: { eStopResponseTimeMs: unknown } };

/** Contract-checking wrapper for SafetyControllerFormalized.enforceEStopLatch. */
export function wrapSafetyControllerFormalizedEnforceEStopLatch(impl: SafetyControllerFormalizedEnforceEStopLatchImpl): (self: SafetyControllerFormalized, activationTimestampMs: number) => SafetyControllerFormalized {
  return (self, activationTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.eStopInputActive)) {
      preViolations.push("[SafetyControllerFormalized.enforceEStopLatch] pre violated: self.eStopInputActive");
    }
    if (!(!(self.manualResetInputActive))) {
      preViolations.push("[SafetyControllerFormalized.enforceEStopLatch] pre violated: not self.manualResetInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, activationTimestampMs);
      const postViolations: string[] = [];
      if (!(__result.self.eStopInputActive)) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopInputActive");
      }
      if (!(__result.self.isFailsafeActive)) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.isFailsafeActive");
      }
      if (!(__result.self.allMotionOutputsDeEnergized)) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.allMotionOutputsDeEnergized");
      }
      if (!((__result.self.eStopResponseTimeMs === (activationTimestampMs - __result.self.lastEStopTimestampMs)))) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopResponseTimeMs = activationTimestampMs - self.lastEStopTimestampMs");
      }
      if (!((__result.self.eStopResponseTimeMs >= 0))) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopResponseTimeMs >= 0.0");
      }
      if (!((__result.self.eStopResponseTimeMs <= __result.self.maxEStopLatencyMs))) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
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

/** Impl signature for SafetyControllerFormalized.enforceEStopLatch (async). User supplies this. */
export type SafetyControllerFormalizedEnforceEStopLatchAsyncImpl = (self: SafetyControllerFormalized, activationTimestampMs: number) => Promise<{ self: SafetyControllerFormalized; modified: { eStopResponseTimeMs: unknown } }>;

/** Contract-checking wrapper for SafetyControllerFormalized.enforceEStopLatch (async). */
export function wrapSafetyControllerFormalizedEnforceEStopLatchAsync(impl: SafetyControllerFormalizedEnforceEStopLatchAsyncImpl): (self: SafetyControllerFormalized, activationTimestampMs: number) => Promise<SafetyControllerFormalized> {
  return async (self, activationTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.eStopInputActive)) {
      preViolations.push("[SafetyControllerFormalized.enforceEStopLatch] pre violated: self.eStopInputActive");
    }
    if (!(!(self.manualResetInputActive))) {
      preViolations.push("[SafetyControllerFormalized.enforceEStopLatch] pre violated: not self.manualResetInputActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, activationTimestampMs);
      const postViolations: string[] = [];
      if (!(__result.self.eStopInputActive)) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopInputActive");
      }
      if (!(__result.self.isFailsafeActive)) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.isFailsafeActive");
      }
      if (!(__result.self.allMotionOutputsDeEnergized)) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.allMotionOutputsDeEnergized");
      }
      if (!((__result.self.eStopResponseTimeMs === (activationTimestampMs - __result.self.lastEStopTimestampMs)))) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopResponseTimeMs = activationTimestampMs - self.lastEStopTimestampMs");
      }
      if (!((__result.self.eStopResponseTimeMs >= 0))) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopResponseTimeMs >= 0.0");
      }
      if (!((__result.self.eStopResponseTimeMs <= __result.self.maxEStopLatencyMs))) {
        postViolations.push("[SafetyControllerFormalized.enforceEStopLatch] post violated: self.eStopResponseTimeMs <= self.maxEStopLatencyMs");
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

/** Impl signature for SafetyControllerFormalized.autoRecoverFromSensorFault. User supplies this. */
export type SafetyControllerFormalizedAutoRecoverFromSensorFaultImpl = (self: SafetyControllerFormalized, recoveryTimestampMs: number) => { self: SafetyControllerFormalized; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown } };

/** Contract-checking wrapper for SafetyControllerFormalized.autoRecoverFromSensorFault. */
export function wrapSafetyControllerFormalizedAutoRecoverFromSensorFault(impl: SafetyControllerFormalizedAutoRecoverFromSensorFaultImpl): (self: SafetyControllerFormalized, recoveryTimestampMs: number) => SafetyControllerFormalized {
  return (self, recoveryTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: self.isFailsafeActive");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: not self.eStopInputActive");
    }
    if (!((recoveryTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: recoveryTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recoveryTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === false))) {
        postViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] post violated: self.allMotionOutputsDeEnergized = false");
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

/** Impl signature for SafetyControllerFormalized.autoRecoverFromSensorFault (async). User supplies this. */
export type SafetyControllerFormalizedAutoRecoverFromSensorFaultAsyncImpl = (self: SafetyControllerFormalized, recoveryTimestampMs: number) => Promise<{ self: SafetyControllerFormalized; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown } }>;

/** Contract-checking wrapper for SafetyControllerFormalized.autoRecoverFromSensorFault (async). */
export function wrapSafetyControllerFormalizedAutoRecoverFromSensorFaultAsync(impl: SafetyControllerFormalizedAutoRecoverFromSensorFaultAsyncImpl): (self: SafetyControllerFormalized, recoveryTimestampMs: number) => Promise<SafetyControllerFormalized> {
  return async (self, recoveryTimestampMs) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (!(self.isFailsafeActive)) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: self.isFailsafeActive");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: not self.eStopInputActive");
    }
    if (!((recoveryTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] pre violated: recoveryTimestampMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recoveryTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.isFailsafeActive === false))) {
        postViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] post violated: self.isFailsafeActive = false");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === false))) {
        postViolations.push("[SafetyControllerFormalized.autoRecoverFromSensorFault] post violated: self.allMotionOutputsDeEnergized = false");
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

/** Impl signature for SafetyControllerFormalized.transitionToFailsafeDueToSensorFault. User supplies this. */
export type SafetyControllerFormalizedTransitionToFailsafeDueToSensorFaultImpl = (self: SafetyControllerFormalized, sensorId: string, faultTimestampMs: number) => { self: SafetyControllerFormalized; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; lastSensorFaultTimestampMs: unknown } };

/** Contract-checking wrapper for SafetyControllerFormalized.transitionToFailsafeDueToSensorFault. */
export function wrapSafetyControllerFormalizedTransitionToFailsafeDueToSensorFault(impl: SafetyControllerFormalizedTransitionToFailsafeDueToSensorFaultImpl): (self: SafetyControllerFormalized, sensorId: string, faultTimestampMs: number) => SafetyControllerFormalized {
  return (self, sensorId, faultTimestampMs) => {
    const preViolations: string[] = [];
    if (!((sensorId !== null))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: sensorId <> null");
    }
    if (!((faultTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: faultTimestampMs >= 0.0");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: not self.eStopInputActive");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sensorId, faultTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === true))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.allMotionOutputsDeEnergized = true");
      }
      if (!((__result.self.lastSensorFaultTimestampMs === faultTimestampMs))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.lastSensorFaultTimestampMs = faultTimestampMs");
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

/** Impl signature for SafetyControllerFormalized.transitionToFailsafeDueToSensorFault (async). User supplies this. */
export type SafetyControllerFormalizedTransitionToFailsafeDueToSensorFaultAsyncImpl = (self: SafetyControllerFormalized, sensorId: string, faultTimestampMs: number) => Promise<{ self: SafetyControllerFormalized; modified: { sensorFaultDetected: unknown; isFailsafeActive: unknown; allMotionOutputsDeEnergized: unknown; lastSensorFaultTimestampMs: unknown } }>;

/** Contract-checking wrapper for SafetyControllerFormalized.transitionToFailsafeDueToSensorFault (async). */
export function wrapSafetyControllerFormalizedTransitionToFailsafeDueToSensorFaultAsync(impl: SafetyControllerFormalizedTransitionToFailsafeDueToSensorFaultAsyncImpl): (self: SafetyControllerFormalized, sensorId: string, faultTimestampMs: number) => Promise<SafetyControllerFormalized> {
  return async (self, sensorId, faultTimestampMs) => {
    const preViolations: string[] = [];
    if (!((sensorId !== null))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: sensorId <> null");
    }
    if (!((faultTimestampMs >= 0))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: faultTimestampMs >= 0.0");
    }
    if (!(!(self.eStopInputActive))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: not self.eStopInputActive");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sensorId, faultTimestampMs);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.isFailsafeActive === true))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.isFailsafeActive = true");
      }
      if (!((__result.self.allMotionOutputsDeEnergized === true))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.allMotionOutputsDeEnergized = true");
      }
      if (!((__result.self.lastSensorFaultTimestampMs === faultTimestampMs))) {
        postViolations.push("[SafetyControllerFormalized.transitionToFailsafeDueToSensorFault] post violated: self.lastSensorFaultTimestampMs = faultTimestampMs");
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

