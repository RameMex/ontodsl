// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for PhaseManager. Runtime: string. Compile-time: branded. */
export type PhaseManagerId = string & { readonly __brand: "PhaseManagerId" };
/** Identity type for SafetyMonitor. Runtime: string. Compile-time: branded. */
export type SafetyMonitorId = string & { readonly __brand: "SafetyMonitorId" };
/** Identity type for PedestrianModule. Runtime: string. Compile-time: branded. */
export type PedestrianModuleId = string & { readonly __brand: "PedestrianModuleId" };
/** Identity type for TimerService. Runtime: string. Compile-time: branded. */
export type TimerServiceId = string & { readonly __brand: "TimerServiceId" };
/** Identity type for PhaseTimerChannel. Runtime: string. Compile-time: branded. */
export type PhaseTimerChannelId = string & { readonly __brand: "PhaseTimerChannelId" };
/** Identity type for PedestrianTimerChannel. Runtime: string. Compile-time: branded. */
export type PedestrianTimerChannelId = string & { readonly __brand: "PedestrianTimerChannelId" };
/** Identity type for SafetyTimeoutChannel. Runtime: string. Compile-time: branded. */
export type SafetyTimeoutChannelId = string & { readonly __brand: "SafetyTimeoutChannelId" };
/** Identity type for NormalPhaseCycleFlow. Runtime: string. Compile-time: branded. */
export type NormalPhaseCycleFlowId = string & { readonly __brand: "NormalPhaseCycleFlowId" };
/** Identity type for EmergencyPreemptionFlowDesign. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionFlowDesignId = string & { readonly __brand: "EmergencyPreemptionFlowDesignId" };
/** Identity type for PedestrianRequestFlowDesign. Runtime: string. Compile-time: branded. */
export type PedestrianRequestFlowDesignId = string & { readonly __brand: "PedestrianRequestFlowDesignId" };
/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for Pedestrian. Runtime: string. Compile-time: branded. */
export type PedestrianId = string & { readonly __brand: "PedestrianId" };
/** Identity type for EmergencyVehicleOperator. Runtime: string. Compile-time: branded. */
export type EmergencyVehicleOperatorId = string & { readonly __brand: "EmergencyVehicleOperatorId" };
/** Identity type for CityTrafficAuthority. Runtime: string. Compile-time: branded. */
export type CityTrafficAuthorityId = string & { readonly __brand: "CityTrafficAuthorityId" };
/** Identity type for TrafficLightVendor. Runtime: string. Compile-time: branded. */
export type TrafficLightVendorId = string & { readonly __brand: "TrafficLightVendorId" };
/** Identity type for Approach. Runtime: string. Compile-time: branded. */
export type ApproachId = string & { readonly __brand: "ApproachId" };
/** Identity type for Phase. Runtime: string. Compile-time: branded. */
export type PhaseId = string & { readonly __brand: "PhaseId" };
/** Identity type for YellowInterval. Runtime: string. Compile-time: branded. */
export type YellowIntervalId = string & { readonly __brand: "YellowIntervalId" };
/** Identity type for Preemption. Runtime: string. Compile-time: branded. */
export type PreemptionId = string & { readonly __brand: "PreemptionId" };
/** Identity type for MutualExclusionCommitment. Runtime: string. Compile-time: branded. */
export type MutualExclusionCommitmentId = string & { readonly __brand: "MutualExclusionCommitmentId" };
/** Identity type for YellowIntervalCommitment. Runtime: string. Compile-time: branded. */
export type YellowIntervalCommitmentId = string & { readonly __brand: "YellowIntervalCommitmentId" };
/** Identity type for EmergencyPreemptionCommitment. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionCommitmentId = string & { readonly __brand: "EmergencyPreemptionCommitmentId" };
/** Identity type for PedestrianRequestCommitment. Runtime: string. Compile-time: branded. */
export type PedestrianRequestCommitmentId = string & { readonly __brand: "PedestrianRequestCommitmentId" };
/** Identity type for NormalPhaseCycle. Runtime: string. Compile-time: branded. */
export type NormalPhaseCycleId = string & { readonly __brand: "NormalPhaseCycleId" };
/** Identity type for EmergencyPreemptionFlow. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionFlowId = string & { readonly __brand: "EmergencyPreemptionFlowId" };
/** Identity type for PedestrianRequestFlow. Runtime: string. Compile-time: branded. */
export type PedestrianRequestFlowId = string & { readonly __brand: "PedestrianRequestFlowId" };
/** Identity type for TrafficLightSystem. Runtime: string. Compile-time: branded. */
export type TrafficLightSystemId = string & { readonly __brand: "TrafficLightSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface PhaseManager {
  readonly managerId: PhaseManagerId;
  readonly activePhase: Phase;
  readonly greenApproaches: ReadonlySet<Approach>;
  readonly phases: ReadonlySet<Phase>;
  readonly isOperating: boolean;
  readonly allRedDwellActive: boolean;
}

/** @stereotype <<Kind>> */
export interface SafetyMonitor {
  readonly monitorId: SafetyMonitorId;
  readonly preemptionActive: boolean;
  readonly allRedActive: boolean;
  readonly preemptionTimerElapsed: number;
  readonly preemptionResponseTimeSeconds: number;
}

/** @stereotype <<Kind>> */
export interface PedestrianModule {
  readonly moduleId: PedestrianModuleId;
  readonly pedestrianRequested: boolean;
  readonly pedestrianRequestPending: boolean;
  readonly walkSignalActive: boolean;
}

/** @stereotype <<Kind>> */
export interface TimerService {
  readonly timerId: TimerServiceId;
  readonly yellowTimerElapsed: number;
  readonly elapsedTime: number;
  readonly yellowIntervalSeconds: number;
}

/** @stereotype <<Role>> */
export interface PhaseManagerRole {
  readonly managerId: string;
  readonly isOperating: boolean;
  readonly yellowTimerElapsed: number;
}

/** @stereotype <<Role>> */
export interface TimerServiceRole {
  readonly timerId: string;
  readonly yellowTimerElapsed: number;
  readonly elapsedTime: number;
}

/** @stereotype <<Role>> */
export interface PedestrianModuleRole {
  readonly moduleId: string;
  readonly pedestrianRequestPending: boolean;
}

/** @stereotype <<Role>> */
export interface PedestrianTimerServiceRole {
  readonly timerId: string;
  readonly yellowTimerElapsed: number;
}

/** @stereotype <<Role>> */
export interface SafetyMonitorTimerRole {
  readonly monitorId: string;
  readonly preemptionActive: boolean;
  readonly preemptionTimerElapsed: number;
}

/** @stereotype <<Role>> */
export interface SafetyTimerServiceRole {
  readonly timerId: string;
  readonly elapsedTime: number;
}

/** @stereotype <<Relator>> */
export interface PhaseTimerChannel {
  readonly channelId: PhaseTimerChannelId;
  readonly lastTickTimestamp: number;
  readonly managerId: string;
  readonly timerId: string;
}

/** @stereotype <<Relator>> */
export interface PedestrianTimerChannel {
  readonly channelId: PedestrianTimerChannelId;
  readonly lastSyncTimestamp: number;
}

/** @stereotype <<Relator>> */
export interface SafetyTimeoutChannel {
  readonly channelId: SafetyTimeoutChannelId;
  readonly lastSyncTimestamp: number;
}

/** @stereotype <<Happening>> */
export interface NormalPhaseCycleFlow {
  readonly flowId: NormalPhaseCycleFlowId;
  readonly managerId: string;
  readonly timerId: string;
  readonly startPhaseId: string;
  readonly yellowDurationSeconds: number;
  readonly allRedDwellSeconds: number;
  readonly targetPhaseId: string;
}

/** @stereotype <<Happening>> */
export interface EmergencyPreemptionFlowDesign {
  readonly flowId: EmergencyPreemptionFlowDesignId;
  readonly monitorId: string;
  readonly managerId: string;
  readonly timerId: string;
  readonly responseTimeSeconds: number;
}

/** @stereotype <<Happening>> */
export interface PedestrianRequestFlowDesign {
  readonly flowId: PedestrianRequestFlowDesignId;
  readonly moduleId: string;
  readonly timerId: string;
  readonly requestTimestamp: number;
  readonly walkGranted: boolean;
}

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly vehicleType: string;
}

/** @stereotype <<Agent>> */
export interface Pedestrian {
  readonly pedestrianId: PedestrianId;
}

/** @stereotype <<Agent>> */
export interface EmergencyVehicleOperator {
  readonly operatorId: EmergencyVehicleOperatorId;
  readonly vehicleCategory: string;
}

/** @stereotype <<Agent>> */
export interface CityTrafficAuthority {
  readonly authorityId: CityTrafficAuthorityId;
  readonly jurisdictionCode: string;
}

/** @stereotype <<Agent>> */
export interface TrafficLightVendor {
  readonly vendorId: TrafficLightVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Approach {
  readonly approachId: ApproachId;
  readonly direction: string;
}

/** @stereotype <<Kind>> */
export interface Phase {
  readonly phaseId: PhaseId;
  readonly name: string;
  readonly greenApproaches: ReadonlySet<Approach>;
}

/** @stereotype <<Kind>> */
export interface YellowInterval {
  readonly intervalId: YellowIntervalId;
  readonly minimumDurationSeconds: number;
}

/** @stereotype <<Kind>> */
export interface Preemption {
  readonly preemptionId: PreemptionId;
  readonly maxResponseTimeSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface MutualExclusionCommitment {
  readonly commitmentId: MutualExclusionCommitmentId;
  readonly greenApproaches: ReadonlySet<Approach>;
}

/** @stereotype <<Commitment>> */
export interface YellowIntervalCommitment {
  readonly commitmentId: YellowIntervalCommitmentId;
  readonly yellowIntervalSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface EmergencyPreemptionCommitment {
  readonly commitmentId: EmergencyPreemptionCommitmentId;
  readonly preemptionResponseTimeSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface PedestrianRequestCommitment {
  readonly commitmentId: PedestrianRequestCommitmentId;
  readonly pedestrianRequestPending: boolean;
  readonly walkSignalActive: boolean;
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraints {
}

/** @stereotype <<Category>> */
export interface YellowTimingConstraints {
}

/** @stereotype <<Category>> */
export interface EmergencyTimingConstraints {
}

/** @stereotype <<Happening>> */
export interface NormalPhaseCycle {
  readonly cycleId: NormalPhaseCycleId;
  readonly currentPhase: Phase;
  readonly nextPhase: Phase;
  readonly yellowInterval: YellowInterval;
  readonly allRedDwellSeconds: number;
}

/** @stereotype <<Happening>> */
export interface EmergencyPreemptionFlow {
  readonly flowId: EmergencyPreemptionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface PedestrianRequestFlow {
  readonly flowId: PedestrianRequestFlowId;
  readonly buttonPressTimestamp: number;
  readonly walkGranted: boolean;
}

/** @stereotype <<Kind>> */
export interface TrafficLightSystem {
  readonly systemId: TrafficLightSystemId;
  readonly approaches: ReadonlySet<Approach>;
  readonly phases: ReadonlySet<Phase>;
  readonly activePhase: Phase;
  readonly greenApproaches: ReadonlySet<Approach>;
  readonly yellowIntervalSeconds: number;
  readonly preemptionResponseTimeSeconds: number;
  readonly pedestrianRequestPending: boolean;
  readonly walkSignalActive: boolean;
  readonly isOperating: boolean;
  readonly preemptionActive: boolean;
  readonly pedestrianRequested: boolean;
  readonly allRedActive: boolean;
  readonly yellowTimerElapsed: number;
  readonly preemptionTimerElapsed: number;
}

/** @stereotype <<Category>> */
export interface MutcdCompliant {
  readonly mutcdEdition: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Category>> */
export interface Iec61508Compliant {
  readonly silLevel: string;
  readonly safetyCaseVersion: string;
}

/** @stereotype <<Category>> */
export interface AdaTitleIICompliant {
  readonly adaComplianceYear: string;
  readonly apsInstalled: boolean;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly rationales: string;
  readonly owner: string;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausiblePhases {
}

/** @stereotype <<Category>> */
export interface PhaseNamingConsistent {
}

/** @stereotype <<Subkind>> */
export interface TrafficLightSystemFormalized extends TrafficLightSystem {
}


// ─── Factory functions ───

export function makePhaseManager(data: {
  managerId: string;
  activePhase: Phase;
  greenApproaches: ReadonlySet<Approach>;
  phases: ReadonlySet<Phase>;
  isOperating: boolean;
  allRedDwellActive: boolean;
}): PhaseManager {
  return {
    managerId: data.managerId as PhaseManagerId,
    activePhase: data.activePhase,
    greenApproaches: data.greenApproaches,
    phases: data.phases,
    isOperating: data.isOperating,
    allRedDwellActive: data.allRedDwellActive,
  };
}

export function makeSafetyMonitor(data: {
  monitorId: string;
  preemptionActive: boolean;
  allRedActive: boolean;
  preemptionTimerElapsed: number;
  preemptionResponseTimeSeconds: number;
}): SafetyMonitor {
  return {
    monitorId: data.monitorId as SafetyMonitorId,
    preemptionActive: data.preemptionActive,
    allRedActive: data.allRedActive,
    preemptionTimerElapsed: data.preemptionTimerElapsed,
    preemptionResponseTimeSeconds: data.preemptionResponseTimeSeconds,
  };
}

export function makePedestrianModule(data: {
  moduleId: string;
  pedestrianRequested: boolean;
  pedestrianRequestPending: boolean;
  walkSignalActive: boolean;
}): PedestrianModule {
  return {
    moduleId: data.moduleId as PedestrianModuleId,
    pedestrianRequested: data.pedestrianRequested,
    pedestrianRequestPending: data.pedestrianRequestPending,
    walkSignalActive: data.walkSignalActive,
  };
}

export function makeTimerService(data: {
  timerId: string;
  yellowTimerElapsed: number;
  elapsedTime: number;
  yellowIntervalSeconds: number;
}): TimerService {
  return {
    timerId: data.timerId as TimerServiceId,
    yellowTimerElapsed: data.yellowTimerElapsed,
    elapsedTime: data.elapsedTime,
    yellowIntervalSeconds: data.yellowIntervalSeconds,
  };
}

export function makePhaseTimerChannel(data: {
  channelId: string;
  lastTickTimestamp: number;
  managerId: string;
  timerId: string;
}): PhaseTimerChannel {
  return {
    channelId: data.channelId as PhaseTimerChannelId,
    lastTickTimestamp: data.lastTickTimestamp,
    managerId: data.managerId,
    timerId: data.timerId,
  };
}

export function makePedestrianTimerChannel(data: {
  channelId: string;
  lastSyncTimestamp: number;
}): PedestrianTimerChannel {
  return {
    channelId: data.channelId as PedestrianTimerChannelId,
    lastSyncTimestamp: data.lastSyncTimestamp,
  };
}

export function makeSafetyTimeoutChannel(data: {
  channelId: string;
  lastSyncTimestamp: number;
}): SafetyTimeoutChannel {
  return {
    channelId: data.channelId as SafetyTimeoutChannelId,
    lastSyncTimestamp: data.lastSyncTimestamp,
  };
}

export function makeNormalPhaseCycleFlow(data: {
  flowId: string;
  managerId: string;
  timerId: string;
  startPhaseId: string;
  yellowDurationSeconds: number;
  allRedDwellSeconds: number;
  targetPhaseId: string;
}): NormalPhaseCycleFlow {
  return {
    flowId: data.flowId as NormalPhaseCycleFlowId,
    managerId: data.managerId,
    timerId: data.timerId,
    startPhaseId: data.startPhaseId,
    yellowDurationSeconds: data.yellowDurationSeconds,
    allRedDwellSeconds: data.allRedDwellSeconds,
    targetPhaseId: data.targetPhaseId,
  };
}

export function makeEmergencyPreemptionFlowDesign(data: {
  flowId: string;
  monitorId: string;
  managerId: string;
  timerId: string;
  responseTimeSeconds: number;
}): EmergencyPreemptionFlowDesign {
  return {
    flowId: data.flowId as EmergencyPreemptionFlowDesignId,
    monitorId: data.monitorId,
    managerId: data.managerId,
    timerId: data.timerId,
    responseTimeSeconds: data.responseTimeSeconds,
  };
}

export function makePedestrianRequestFlowDesign(data: {
  flowId: string;
  moduleId: string;
  timerId: string;
  requestTimestamp: number;
  walkGranted: boolean;
}): PedestrianRequestFlowDesign {
  return {
    flowId: data.flowId as PedestrianRequestFlowDesignId,
    moduleId: data.moduleId,
    timerId: data.timerId,
    requestTimestamp: data.requestTimestamp,
    walkGranted: data.walkGranted,
  };
}

export function makeDriver(data: {
  driverId: string;
  vehicleType: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    vehicleType: data.vehicleType,
  };
}

export function makePedestrian(data: {
  pedestrianId: string;
}): Pedestrian {
  return {
    pedestrianId: data.pedestrianId as PedestrianId,
  };
}

export function makeEmergencyVehicleOperator(data: {
  operatorId: string;
  vehicleCategory: string;
}): EmergencyVehicleOperator {
  return {
    operatorId: data.operatorId as EmergencyVehicleOperatorId,
    vehicleCategory: data.vehicleCategory,
  };
}

export function makeCityTrafficAuthority(data: {
  authorityId: string;
  jurisdictionCode: string;
}): CityTrafficAuthority {
  return {
    authorityId: data.authorityId as CityTrafficAuthorityId,
    jurisdictionCode: data.jurisdictionCode,
  };
}

export function makeTrafficLightVendor(data: {
  vendorId: string;
  name: string;
}): TrafficLightVendor {
  return {
    vendorId: data.vendorId as TrafficLightVendorId,
    name: data.name,
  };
}

export function makeApproach(data: {
  approachId: string;
  direction: string;
}): Approach {
  return {
    approachId: data.approachId as ApproachId,
    direction: data.direction,
  };
}

export function makePhase(data: {
  phaseId: string;
  name: string;
  greenApproaches: ReadonlySet<Approach>;
}): Phase {
  return {
    phaseId: data.phaseId as PhaseId,
    name: data.name,
    greenApproaches: data.greenApproaches,
  };
}

export function makeYellowInterval(data: {
  intervalId: string;
  minimumDurationSeconds: number;
}): YellowInterval {
  return {
    intervalId: data.intervalId as YellowIntervalId,
    minimumDurationSeconds: data.minimumDurationSeconds,
  };
}

export function makePreemption(data: {
  preemptionId: string;
  maxResponseTimeSeconds: number;
}): Preemption {
  return {
    preemptionId: data.preemptionId as PreemptionId,
    maxResponseTimeSeconds: data.maxResponseTimeSeconds,
  };
}

export function makeMutualExclusionCommitment(data: {
  commitmentId: string;
  greenApproaches: ReadonlySet<Approach>;
}): MutualExclusionCommitment {
  return {
    commitmentId: data.commitmentId as MutualExclusionCommitmentId,
    greenApproaches: data.greenApproaches,
  };
}

export function makeYellowIntervalCommitment(data: {
  commitmentId: string;
  yellowIntervalSeconds: number;
}): YellowIntervalCommitment {
  return {
    commitmentId: data.commitmentId as YellowIntervalCommitmentId,
    yellowIntervalSeconds: data.yellowIntervalSeconds,
  };
}

export function makeEmergencyPreemptionCommitment(data: {
  commitmentId: string;
  preemptionResponseTimeSeconds: number;
}): EmergencyPreemptionCommitment {
  return {
    commitmentId: data.commitmentId as EmergencyPreemptionCommitmentId,
    preemptionResponseTimeSeconds: data.preemptionResponseTimeSeconds,
  };
}

export function makePedestrianRequestCommitment(data: {
  commitmentId: string;
  pedestrianRequestPending: boolean;
  walkSignalActive: boolean;
}): PedestrianRequestCommitment {
  return {
    commitmentId: data.commitmentId as PedestrianRequestCommitmentId,
    pedestrianRequestPending: data.pedestrianRequestPending,
    walkSignalActive: data.walkSignalActive,
  };
}

export function makeNormalPhaseCycle(data: {
  cycleId: string;
  currentPhase: Phase;
  nextPhase: Phase;
  yellowInterval: YellowInterval;
  allRedDwellSeconds: number;
}): NormalPhaseCycle {
  return {
    cycleId: data.cycleId as NormalPhaseCycleId,
    currentPhase: data.currentPhase,
    nextPhase: data.nextPhase,
    yellowInterval: data.yellowInterval,
    allRedDwellSeconds: data.allRedDwellSeconds,
  };
}

export function makeEmergencyPreemptionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): EmergencyPreemptionFlow {
  return {
    flowId: data.flowId as EmergencyPreemptionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makePedestrianRequestFlow(data: {
  flowId: string;
  buttonPressTimestamp: number;
  walkGranted: boolean;
}): PedestrianRequestFlow {
  return {
    flowId: data.flowId as PedestrianRequestFlowId,
    buttonPressTimestamp: data.buttonPressTimestamp,
    walkGranted: data.walkGranted,
  };
}

export function makeTrafficLightSystem(data: {
  systemId: string;
  approaches: ReadonlySet<Approach>;
  phases: ReadonlySet<Phase>;
  activePhase: Phase;
  greenApproaches: ReadonlySet<Approach>;
  yellowIntervalSeconds: number;
  preemptionResponseTimeSeconds: number;
  pedestrianRequestPending: boolean;
  walkSignalActive: boolean;
  isOperating: boolean;
  preemptionActive: boolean;
  pedestrianRequested: boolean;
  allRedActive: boolean;
  yellowTimerElapsed: number;
  preemptionTimerElapsed: number;
}): TrafficLightSystem {
  return {
    systemId: data.systemId as TrafficLightSystemId,
    approaches: data.approaches,
    phases: data.phases,
    activePhase: data.activePhase,
    greenApproaches: data.greenApproaches,
    yellowIntervalSeconds: data.yellowIntervalSeconds,
    preemptionResponseTimeSeconds: data.preemptionResponseTimeSeconds,
    pedestrianRequestPending: data.pedestrianRequestPending,
    walkSignalActive: data.walkSignalActive,
    isOperating: data.isOperating,
    preemptionActive: data.preemptionActive,
    pedestrianRequested: data.pedestrianRequested,
    allRedActive: data.allRedActive,
    yellowTimerElapsed: data.yellowTimerElapsed,
    preemptionTimerElapsed: data.preemptionTimerElapsed,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  rationales: string;
  owner: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    rationales: data.rationales,
    owner: data.owner,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for PhaseManager. Returns empty array when valid. */
export function validatePhaseManager(instance: PhaseManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[PhaseManager] invariant violated: self.managerId <> null");
  }
  if (!(Array.from(instance.greenApproaches).every((__x) => (Array.from(instance.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))))) {
    violations.push("[PhaseManager] invariant violated: self.greenApproaches->forAll(a |\n      self.greenApproaches->forAll(b |\n        a = b or a.direction <> b.direction))");
  }
  if (!((!((instance.activePhase !== null)) || (instance.greenApproaches === instance.activePhase?.greenApproaches)))) {
    violations.push("[PhaseManager] invariant violated: self.activePhase <> null implies\n      self.greenApproaches = self.activePhase.greenApproaches");
  }
  return violations;
}

/** Runtime invariant check for SafetyMonitor. Returns empty array when valid. */
export function validateSafetyMonitor(instance: SafetyMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[SafetyMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.preemptionResponseTimeSeconds <= 1))) {
    violations.push("[SafetyMonitor] invariant violated: self.preemptionResponseTimeSeconds <= 1.0");
  }
  if (!((instance.preemptionTimerElapsed >= 0))) {
    violations.push("[SafetyMonitor] invariant violated: self.preemptionTimerElapsed >= 0.0");
  }
  if (!((!(instance.preemptionActive) || instance.allRedActive))) {
    violations.push("[SafetyMonitor] invariant violated: self.preemptionActive implies self.allRedActive");
  }
  return violations;
}

/** Runtime invariant check for PedestrianModule. Returns empty array when valid. */
export function validatePedestrianModule(instance: PedestrianModule): readonly string[] {
  const violations: string[] = [];
  if (!((instance.moduleId !== null))) {
    violations.push("[PedestrianModule] invariant violated: self.moduleId <> null");
  }
  if (!((!(instance.pedestrianRequested) || instance.pedestrianRequestPending))) {
    violations.push("[PedestrianModule] invariant violated: self.pedestrianRequested implies self.pedestrianRequestPending");
  }
  if (!((!(instance.walkSignalActive) || !(instance.pedestrianRequestPending)))) {
    violations.push("[PedestrianModule] invariant violated: self.walkSignalActive implies not self.pedestrianRequestPending");
  }
  return violations;
}

/** Runtime invariant check for TimerService. Returns empty array when valid. */
export function validateTimerService(instance: TimerService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.timerId !== null))) {
    violations.push("[TimerService] invariant violated: self.timerId <> null");
  }
  if (!((instance.yellowIntervalSeconds >= 3))) {
    violations.push("[TimerService] invariant violated: self.yellowIntervalSeconds >= 3.0");
  }
  if (!((instance.yellowTimerElapsed >= 0))) {
    violations.push("[TimerService] invariant violated: self.yellowTimerElapsed >= 0.0");
  }
  if (!((instance.elapsedTime >= 0))) {
    violations.push("[TimerService] invariant violated: self.elapsedTime >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for PhaseTimerChannel. Returns empty array when valid. */
export function validatePhaseTimerChannel(instance: PhaseTimerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[PhaseTimerChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.managerId !== null))) {
    violations.push("[PhaseTimerChannel] invariant violated: self.managerId <> null");
  }
  if (!((instance.timerId !== null))) {
    violations.push("[PhaseTimerChannel] invariant violated: self.timerId <> null");
  }
  if (!((instance.lastTickTimestamp >= 0))) {
    violations.push("[PhaseTimerChannel] invariant violated: self.lastTickTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for PedestrianTimerChannel. Returns empty array when valid. */
export function validatePedestrianTimerChannel(instance: PedestrianTimerChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[PedestrianTimerChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastSyncTimestamp >= 0))) {
    violations.push("[PedestrianTimerChannel] invariant violated: self.lastSyncTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for SafetyTimeoutChannel. Returns empty array when valid. */
export function validateSafetyTimeoutChannel(instance: SafetyTimeoutChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SafetyTimeoutChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastSyncTimestamp >= 0))) {
    violations.push("[SafetyTimeoutChannel] invariant violated: self.lastSyncTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for NormalPhaseCycleFlow. Returns empty array when valid. */
export function validateNormalPhaseCycleFlow(instance: NormalPhaseCycleFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.yellowDurationSeconds >= 3))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.yellowDurationSeconds >= 3.0");
  }
  if (!((instance.allRedDwellSeconds > 0))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.allRedDwellSeconds > 0.0");
  }
  if (!((instance.startPhaseId !== null))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.startPhaseId <> null");
  }
  if (!((instance.targetPhaseId !== null))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.targetPhaseId <> null");
  }
  return violations;
}

/** Runtime invariant check for EmergencyPreemptionFlowDesign. Returns empty array when valid. */
export function validateEmergencyPreemptionFlowDesign(instance: EmergencyPreemptionFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EmergencyPreemptionFlowDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.responseTimeSeconds <= 1))) {
    violations.push("[EmergencyPreemptionFlowDesign] invariant violated: self.responseTimeSeconds <= 1.0");
  }
  if (!((instance.monitorId !== null))) {
    violations.push("[EmergencyPreemptionFlowDesign] invariant violated: self.monitorId <> null");
  }
  if (!((instance.managerId !== null))) {
    violations.push("[EmergencyPreemptionFlowDesign] invariant violated: self.managerId <> null");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequestFlowDesign. Returns empty array when valid. */
export function validatePedestrianRequestFlowDesign(instance: PedestrianRequestFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PedestrianRequestFlowDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.requestTimestamp > 0))) {
    violations.push("[PedestrianRequestFlowDesign] invariant violated: self.requestTimestamp > 0.0");
  }
  if (!((instance.moduleId !== null))) {
    violations.push("[PedestrianRequestFlowDesign] invariant violated: self.moduleId <> null");
  }
  return violations;
}

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  return violations;
}

/** Runtime invariant check for Pedestrian. Returns empty array when valid. */
export function validatePedestrian(instance: Pedestrian): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pedestrianId !== null))) {
    violations.push("[Pedestrian] invariant violated: self.pedestrianId <> null");
  }
  return violations;
}

/** Runtime invariant check for EmergencyVehicleOperator. Returns empty array when valid. */
export function validateEmergencyVehicleOperator(instance: EmergencyVehicleOperator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[EmergencyVehicleOperator] invariant violated: self.operatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for CityTrafficAuthority. Returns empty array when valid. */
export function validateCityTrafficAuthority(instance: CityTrafficAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[CityTrafficAuthority] invariant violated: self.authorityId <> null");
  }
  return violations;
}

/** Runtime invariant check for TrafficLightVendor. Returns empty array when valid. */
export function validateTrafficLightVendor(instance: TrafficLightVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[TrafficLightVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Approach. Returns empty array when valid. */
export function validateApproach(instance: Approach): readonly string[] {
  const violations: string[] = [];
  if (!((instance.approachId !== null))) {
    violations.push("[Approach] invariant violated: self.approachId <> null");
  }
  if (!((instance.direction !== null))) {
    violations.push("[Approach] invariant violated: self.direction <> null");
  }
  return violations;
}

/** Runtime invariant check for Phase. Returns empty array when valid. */
export function validatePhase(instance: Phase): readonly string[] {
  const violations: string[] = [];
  if (!((instance.phaseId !== null))) {
    violations.push("[Phase] invariant violated: self.phaseId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Phase] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for YellowInterval. Returns empty array when valid. */
export function validateYellowInterval(instance: YellowInterval): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intervalId !== null))) {
    violations.push("[YellowInterval] invariant violated: self.intervalId <> null");
  }
  if (!((instance.minimumDurationSeconds >= 3))) {
    violations.push("[YellowInterval] invariant violated: self.minimumDurationSeconds >= 3.0");
  }
  return violations;
}

/** Runtime invariant check for Preemption. Returns empty array when valid. */
export function validatePreemption(instance: Preemption): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preemptionId !== null))) {
    violations.push("[Preemption] invariant violated: self.preemptionId <> null");
  }
  if (!((instance.maxResponseTimeSeconds <= 1))) {
    violations.push("[Preemption] invariant violated: self.maxResponseTimeSeconds <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for MutualExclusionConstraints. Returns empty array when valid. */
export function validateMutualExclusionConstraints(instance: MutualExclusionConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->size() = 2 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->forAll(a | 
      bearer.greenApproaches->forAll(b | 
        a = b or a.direction <> b.direction)) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for YellowTimingConstraints. Returns empty array when valid. */
export function validateYellowTimingConstraints(instance: YellowTimingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minimumDurationSeconds >= 3.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EmergencyTimingConstraints. Returns empty array when valid. */
export function validateEmergencyTimingConstraints(instance: EmergencyTimingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxResponseTimeSeconds <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for NormalPhaseCycle. Returns empty array when valid. */
export function validateNormalPhaseCycle(instance: NormalPhaseCycle): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.cycleId <> null");
  }
  if (!((instance.currentPhase !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.currentPhase <> null");
  }
  if (!((instance.nextPhase !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.nextPhase <> null");
  }
  if (!((instance.yellowInterval !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.yellowInterval <> null");
  }
  if (!((instance.allRedDwellSeconds > 0))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.allRedDwellSeconds > 0.0");
  }
  if (!((instance.yellowInterval?.minimumDurationSeconds >= 3))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.yellowInterval.minimumDurationSeconds >= 3.0");
  }
  return violations;
}

/** Runtime invariant check for EmergencyPreemptionFlow. Returns empty array when valid. */
export function validateEmergencyPreemptionFlow(instance: EmergencyPreemptionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequestFlow. Returns empty array when valid. */
export function validatePedestrianRequestFlow(instance: PedestrianRequestFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PedestrianRequestFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.buttonPressTimestamp > 0))) {
    violations.push("[PedestrianRequestFlow] invariant violated: self.buttonPressTimestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for TrafficLightSystem. Returns empty array when valid. */
export function validateTrafficLightSystem(instance: TrafficLightSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[TrafficLightSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.yellowIntervalSeconds >= 3))) {
    violations.push("[TrafficLightSystem] invariant violated: self.yellowIntervalSeconds >= 3.0");
  }
  if (!((instance.preemptionResponseTimeSeconds <= 1))) {
    violations.push("[TrafficLightSystem] invariant violated: self.preemptionResponseTimeSeconds <= 1.0");
  }
  if (!((instance.yellowTimerElapsed >= 0))) {
    violations.push("[TrafficLightSystem] invariant violated: self.yellowTimerElapsed >= 0.0");
  }
  if (!((instance.preemptionTimerElapsed >= 0))) {
    violations.push("[TrafficLightSystem] invariant violated: self.preemptionTimerElapsed >= 0.0");
  }
  if (!(Array.from(instance.greenApproaches).every((__x) => (Array.from(instance.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))))) {
    violations.push("[TrafficLightSystem] invariant violated: self.greenApproaches->forAll(a |\n      self.greenApproaches->forAll(b |\n        a = b or a.direction <> b.direction))");
  }
  if (!(((instance.greenApproaches).size >= 0))) {
    violations.push("[TrafficLightSystem] invariant violated: self.greenApproaches->size() >= 0");
  }
  if (!(Array.from(instance.greenApproaches).every((__x) => ((instance.approaches).has(__x))))) {
    violations.push("[TrafficLightSystem] invariant violated: self.greenApproaches->forAll(a | self.approaches->includes(a))");
  }
  return violations;
}

/** Runtime invariant check for MutcdCompliant. Returns empty array when valid. */
export function validateMutcdCompliant(instance: MutcdCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.yellowIntervalSeconds >= 3.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->forAll(a |
      bearer.greenApproaches->forAll(b |
        a = b or a.direction <> b.direction)) — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.isOperating implies (bearer.yellowTimerElapsed <= 30.0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for Iec61508Compliant. Returns empty array when valid. */
export function validateIec61508Compliant(instance: Iec61508Compliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.preemptionResponseTimeSeconds <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.isOperating implies (bearer.preemptionTimerElapsed <= 2.0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AdaTitleIICompliant. Returns empty array when valid. */
export function validateAdaTitleIICompliant(instance: AdaTitleIICompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.walkSignalActive implies
      bearer.greenApproaches->forAll(a | true) — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.pedestrianRequested implies not bearer.allRedActive — reason: bare variable 'bearer' has no binding in this scope
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
  return violations;
}

/** Runtime invariant check for PhysicallyPlausiblePhases. Returns empty array when valid. */
export function validatePhysicallyPlausiblePhases(instance: PhysicallyPlausiblePhases): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->size() >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->size() <= 4 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PhaseNamingConsistent. Returns empty array when valid. */
export function validatePhaseNamingConsistent(instance: PhaseNamingConsistent): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.name <> null implies
      (bearer.name = 'NS' implies
        bearer.greenApproaches->forAll(a | a.direction = 'North-South')) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TrafficLightSystemFormalized. Returns empty array when valid. */
export function validateTrafficLightSystemFormalized(instance: TrafficLightSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.yellowIntervalSeconds >= 3))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.yellowIntervalSeconds >= 3.0");
  }
  if (!(Array.from(instance.greenApproaches).every((__x) => (Array.from(instance.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.greenApproaches->forAll(a |\n      self.greenApproaches->forAll(b |\n        a = b or a.direction <> b.direction))");
  }
  if (!((!(instance.isOperating) || (instance.yellowTimerElapsed <= 30)))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.isOperating implies (self.yellowTimerElapsed <= 30.0)");
  }
  if (!((instance.preemptionResponseTimeSeconds <= 1))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.preemptionResponseTimeSeconds <= 1.0");
  }
  if (!((!(instance.isOperating) || (instance.preemptionTimerElapsed <= 2)))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.isOperating implies (self.preemptionTimerElapsed <= 2.0)");
  }
  if (!((!(instance.walkSignalActive) || Array.from(instance.greenApproaches).every((__x) => (true))))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.walkSignalActive implies\n      self.greenApproaches->forAll(a | true)");
  }
  if (!((!(instance.pedestrianRequested) || !(instance.allRedActive)))) {
    violations.push("[TrafficLightSystemFormalized] invariant violated: self.pedestrianRequested implies not self.allRedActive");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for PhaseManager.startNormalPhase. User supplies this. */
export type PhaseManagerStartNormalPhaseImpl = (self: PhaseManager, p: Phase) => { self: PhaseManager; modified: { activePhase: unknown; greenApproaches: unknown; allRedDwellActive: unknown } };

/** Contract-checking wrapper for PhaseManager.startNormalPhase. */
export function wrapPhaseManagerStartNormalPhase(impl: PhaseManagerStartNormalPhaseImpl): (self: PhaseManager, p: Phase) => PhaseManager {
  return (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: p <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: self.isOperating");
    }
    if (!(!(self.allRedDwellActive))) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: not self.allRedDwellActive");
    }
    if (!(Array.from(p.greenApproaches).every((__x) => (Array.from(p.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))))) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: p.greenApproaches->forAll(a1 |\n           p.greenApproaches->forAll(a2 |\n             a1 = a2 or a1.direction <> a2.direction))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, p);
      const postViolations: string[] = [];
      if (!((__result.self.activePhase === p))) {
        postViolations.push("[PhaseManager.startNormalPhase] post violated: self.activePhase = p");
      }
      if (!((__result.self.greenApproaches === p.greenApproaches))) {
        postViolations.push("[PhaseManager.startNormalPhase] post violated: self.greenApproaches = p.greenApproaches");
      }
      if (!((__result.self.allRedDwellActive === false))) {
        postViolations.push("[PhaseManager.startNormalPhase] post violated: self.allRedDwellActive = false");
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

/** Impl signature for PhaseManager.startNormalPhase (async). User supplies this. */
export type PhaseManagerStartNormalPhaseAsyncImpl = (self: PhaseManager, p: Phase) => Promise<{ self: PhaseManager; modified: { activePhase: unknown; greenApproaches: unknown; allRedDwellActive: unknown } }>;

/** Contract-checking wrapper for PhaseManager.startNormalPhase (async). */
export function wrapPhaseManagerStartNormalPhaseAsync(impl: PhaseManagerStartNormalPhaseAsyncImpl): (self: PhaseManager, p: Phase) => Promise<PhaseManager> {
  return async (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: p <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: self.isOperating");
    }
    if (!(!(self.allRedDwellActive))) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: not self.allRedDwellActive");
    }
    if (!(Array.from(p.greenApproaches).every((__x) => (Array.from(p.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))))) {
      preViolations.push("[PhaseManager.startNormalPhase] pre violated: p.greenApproaches->forAll(a1 |\n           p.greenApproaches->forAll(a2 |\n             a1 = a2 or a1.direction <> a2.direction))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, p);
      const postViolations: string[] = [];
      if (!((__result.self.activePhase === p))) {
        postViolations.push("[PhaseManager.startNormalPhase] post violated: self.activePhase = p");
      }
      if (!((__result.self.greenApproaches === p.greenApproaches))) {
        postViolations.push("[PhaseManager.startNormalPhase] post violated: self.greenApproaches = p.greenApproaches");
      }
      if (!((__result.self.allRedDwellActive === false))) {
        postViolations.push("[PhaseManager.startNormalPhase] post violated: self.allRedDwellActive = false");
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

/** Impl signature for PhaseManager.transitionToYellow. User supplies this. */
export type PhaseManagerTransitionToYellowImpl = (self: PhaseManager) => { self: PhaseManager; modified: { greenApproaches: unknown } };

/** Contract-checking wrapper for PhaseManager.transitionToYellow. */
export function wrapPhaseManagerTransitionToYellow(impl: PhaseManagerTransitionToYellowImpl): (self: PhaseManager) => PhaseManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.activePhase !== null))) {
      preViolations.push("[PhaseManager.transitionToYellow] pre violated: self.activePhase <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.transitionToYellow] pre violated: self.isOperating");
    }
    if (!((self.greenApproaches).size > 0)) {
      preViolations.push("[PhaseManager.transitionToYellow] pre violated: self.greenApproaches->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.transitionToYellow] post violated: self.greenApproaches->isEmpty()");
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

/** Impl signature for PhaseManager.transitionToYellow (async). User supplies this. */
export type PhaseManagerTransitionToYellowAsyncImpl = (self: PhaseManager) => Promise<{ self: PhaseManager; modified: { greenApproaches: unknown } }>;

/** Contract-checking wrapper for PhaseManager.transitionToYellow (async). */
export function wrapPhaseManagerTransitionToYellowAsync(impl: PhaseManagerTransitionToYellowAsyncImpl): (self: PhaseManager) => Promise<PhaseManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.activePhase !== null))) {
      preViolations.push("[PhaseManager.transitionToYellow] pre violated: self.activePhase <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.transitionToYellow] pre violated: self.isOperating");
    }
    if (!((self.greenApproaches).size > 0)) {
      preViolations.push("[PhaseManager.transitionToYellow] pre violated: self.greenApproaches->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.transitionToYellow] post violated: self.greenApproaches->isEmpty()");
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

/** Impl signature for PhaseManager.transitionToRed. User supplies this. */
export type PhaseManagerTransitionToRedImpl = (self: PhaseManager) => { self: PhaseManager; modified: { allRedDwellActive: unknown } };

/** Contract-checking wrapper for PhaseManager.transitionToRed. */
export function wrapPhaseManagerTransitionToRed(impl: PhaseManagerTransitionToRedImpl): (self: PhaseManager) => PhaseManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.greenApproaches).size === 0)) {
      preViolations.push("[PhaseManager.transitionToRed] pre violated: self.greenApproaches->isEmpty()");
    }
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.transitionToRed] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.transitionToRed] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.allRedDwellActive === true))) {
        postViolations.push("[PhaseManager.transitionToRed] post violated: self.allRedDwellActive = true");
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

/** Impl signature for PhaseManager.transitionToRed (async). User supplies this. */
export type PhaseManagerTransitionToRedAsyncImpl = (self: PhaseManager) => Promise<{ self: PhaseManager; modified: { allRedDwellActive: unknown } }>;

/** Contract-checking wrapper for PhaseManager.transitionToRed (async). */
export function wrapPhaseManagerTransitionToRedAsync(impl: PhaseManagerTransitionToRedAsyncImpl): (self: PhaseManager) => Promise<PhaseManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.greenApproaches).size === 0)) {
      preViolations.push("[PhaseManager.transitionToRed] pre violated: self.greenApproaches->isEmpty()");
    }
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.transitionToRed] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.transitionToRed] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.allRedDwellActive === true))) {
        postViolations.push("[PhaseManager.transitionToRed] post violated: self.allRedDwellActive = true");
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

/** Impl signature for PhaseManager.completeAllRedDwell. User supplies this. */
export type PhaseManagerCompleteAllRedDwellImpl = (self: PhaseManager) => { self: PhaseManager; modified: { allRedDwellActive: unknown } };

/** Contract-checking wrapper for PhaseManager.completeAllRedDwell. */
export function wrapPhaseManagerCompleteAllRedDwell(impl: PhaseManagerCompleteAllRedDwellImpl): (self: PhaseManager) => PhaseManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.allRedDwellActive)) {
      preViolations.push("[PhaseManager.completeAllRedDwell] pre violated: self.allRedDwellActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.allRedDwellActive === false))) {
        postViolations.push("[PhaseManager.completeAllRedDwell] post violated: self.allRedDwellActive = false");
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

/** Impl signature for PhaseManager.completeAllRedDwell (async). User supplies this. */
export type PhaseManagerCompleteAllRedDwellAsyncImpl = (self: PhaseManager) => Promise<{ self: PhaseManager; modified: { allRedDwellActive: unknown } }>;

/** Contract-checking wrapper for PhaseManager.completeAllRedDwell (async). */
export function wrapPhaseManagerCompleteAllRedDwellAsync(impl: PhaseManagerCompleteAllRedDwellAsyncImpl): (self: PhaseManager) => Promise<PhaseManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.allRedDwellActive)) {
      preViolations.push("[PhaseManager.completeAllRedDwell] pre violated: self.allRedDwellActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.allRedDwellActive === false))) {
        postViolations.push("[PhaseManager.completeAllRedDwell] post violated: self.allRedDwellActive = false");
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

/** Impl signature for PhaseManager.emergencyAllRed. User supplies this. */
export type PhaseManagerEmergencyAllRedImpl = (self: PhaseManager) => { self: PhaseManager; modified: { greenApproaches: unknown; allRedDwellActive: unknown; activePhase: unknown } };

/** Contract-checking wrapper for PhaseManager.emergencyAllRed. */
export function wrapPhaseManagerEmergencyAllRed(impl: PhaseManagerEmergencyAllRedImpl): (self: PhaseManager) => PhaseManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.emergencyAllRed] pre violated: self.isOperating");
    }
    if (!(!(self.allRedDwellActive))) {
      preViolations.push("[PhaseManager.emergencyAllRed] pre violated: not self.allRedDwellActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.emergencyAllRed] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.allRedDwellActive === true))) {
        postViolations.push("[PhaseManager.emergencyAllRed] post violated: self.allRedDwellActive = true");
      }
      if (!((__result.self.activePhase === null))) {
        postViolations.push("[PhaseManager.emergencyAllRed] post violated: self.activePhase = null");
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

/** Impl signature for PhaseManager.emergencyAllRed (async). User supplies this. */
export type PhaseManagerEmergencyAllRedAsyncImpl = (self: PhaseManager) => Promise<{ self: PhaseManager; modified: { greenApproaches: unknown; allRedDwellActive: unknown; activePhase: unknown } }>;

/** Contract-checking wrapper for PhaseManager.emergencyAllRed (async). */
export function wrapPhaseManagerEmergencyAllRedAsync(impl: PhaseManagerEmergencyAllRedAsyncImpl): (self: PhaseManager) => Promise<PhaseManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.emergencyAllRed] pre violated: self.isOperating");
    }
    if (!(!(self.allRedDwellActive))) {
      preViolations.push("[PhaseManager.emergencyAllRed] pre violated: not self.allRedDwellActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.emergencyAllRed] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.allRedDwellActive === true))) {
        postViolations.push("[PhaseManager.emergencyAllRed] post violated: self.allRedDwellActive = true");
      }
      if (!((__result.self.activePhase === null))) {
        postViolations.push("[PhaseManager.emergencyAllRed] post violated: self.activePhase = null");
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

/** Impl signature for PhaseManager.startSystem. User supplies this. */
export type PhaseManagerStartSystemImpl = (self: PhaseManager) => { self: PhaseManager; modified: { isOperating: unknown; activePhase: unknown; greenApproaches: unknown; allRedDwellActive: unknown } };

/** Contract-checking wrapper for PhaseManager.startSystem. */
export function wrapPhaseManagerStartSystem(impl: PhaseManagerStartSystemImpl): (self: PhaseManager) => PhaseManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperating))) {
      preViolations.push("[PhaseManager.startSystem] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.isOperating = true");
      }
      if (!((__result.self.activePhase === null))) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.activePhase = null");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.allRedDwellActive === false))) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.allRedDwellActive = false");
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

/** Impl signature for PhaseManager.startSystem (async). User supplies this. */
export type PhaseManagerStartSystemAsyncImpl = (self: PhaseManager) => Promise<{ self: PhaseManager; modified: { isOperating: unknown; activePhase: unknown; greenApproaches: unknown; allRedDwellActive: unknown } }>;

/** Contract-checking wrapper for PhaseManager.startSystem (async). */
export function wrapPhaseManagerStartSystemAsync(impl: PhaseManagerStartSystemAsyncImpl): (self: PhaseManager) => Promise<PhaseManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperating))) {
      preViolations.push("[PhaseManager.startSystem] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.isOperating = true");
      }
      if (!((__result.self.activePhase === null))) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.activePhase = null");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.allRedDwellActive === false))) {
        postViolations.push("[PhaseManager.startSystem] post violated: self.allRedDwellActive = false");
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

/** Impl signature for PhaseManager.stopSystem. User supplies this. */
export type PhaseManagerStopSystemImpl = (self: PhaseManager) => { self: PhaseManager; modified: { isOperating: unknown; greenApproaches: unknown } };

/** Contract-checking wrapper for PhaseManager.stopSystem. */
export function wrapPhaseManagerStopSystem(impl: PhaseManagerStopSystemImpl): (self: PhaseManager) => PhaseManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.stopSystem] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[PhaseManager.stopSystem] post violated: self.isOperating = false");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.stopSystem] post violated: self.greenApproaches->isEmpty()");
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

/** Impl signature for PhaseManager.stopSystem (async). User supplies this. */
export type PhaseManagerStopSystemAsyncImpl = (self: PhaseManager) => Promise<{ self: PhaseManager; modified: { isOperating: unknown; greenApproaches: unknown } }>;

/** Contract-checking wrapper for PhaseManager.stopSystem (async). */
export function wrapPhaseManagerStopSystemAsync(impl: PhaseManagerStopSystemAsyncImpl): (self: PhaseManager) => Promise<PhaseManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[PhaseManager.stopSystem] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[PhaseManager.stopSystem] post violated: self.isOperating = false");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[PhaseManager.stopSystem] post violated: self.greenApproaches->isEmpty()");
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

/** Impl signature for SafetyMonitor.emergencyPreemption. User supplies this. */
export type SafetyMonitorEmergencyPreemptionImpl = (self: SafetyMonitor) => { self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for SafetyMonitor.emergencyPreemption. */
export function wrapSafetyMonitorEmergencyPreemption(impl: SafetyMonitorEmergencyPreemptionImpl): (self: SafetyMonitor) => SafetyMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.preemptionActive))) {
      preViolations.push("[SafetyMonitor.emergencyPreemption] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === true))) {
        postViolations.push("[SafetyMonitor.emergencyPreemption] post violated: self.preemptionActive = true");
      }
      if (!((__result.self.allRedActive === true))) {
        postViolations.push("[SafetyMonitor.emergencyPreemption] post violated: self.allRedActive = true");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.emergencyPreemption] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.emergencyPreemption (async). User supplies this. */
export type SafetyMonitorEmergencyPreemptionAsyncImpl = (self: SafetyMonitor) => Promise<{ self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.emergencyPreemption (async). */
export function wrapSafetyMonitorEmergencyPreemptionAsync(impl: SafetyMonitorEmergencyPreemptionAsyncImpl): (self: SafetyMonitor) => Promise<SafetyMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.preemptionActive))) {
      preViolations.push("[SafetyMonitor.emergencyPreemption] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === true))) {
        postViolations.push("[SafetyMonitor.emergencyPreemption] post violated: self.preemptionActive = true");
      }
      if (!((__result.self.allRedActive === true))) {
        postViolations.push("[SafetyMonitor.emergencyPreemption] post violated: self.allRedActive = true");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.emergencyPreemption] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.clearPreemption. User supplies this. */
export type SafetyMonitorClearPreemptionImpl = (self: SafetyMonitor) => { self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for SafetyMonitor.clearPreemption. */
export function wrapSafetyMonitorClearPreemption(impl: SafetyMonitorClearPreemptionImpl): (self: SafetyMonitor) => SafetyMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[SafetyMonitor.clearPreemption] pre violated: self.preemptionActive");
    }
    if (!((self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds))) {
      preViolations.push("[SafetyMonitor.clearPreemption] pre violated: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[SafetyMonitor.clearPreemption] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[SafetyMonitor.clearPreemption] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.clearPreemption] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.clearPreemption (async). User supplies this. */
export type SafetyMonitorClearPreemptionAsyncImpl = (self: SafetyMonitor) => Promise<{ self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.clearPreemption (async). */
export function wrapSafetyMonitorClearPreemptionAsync(impl: SafetyMonitorClearPreemptionAsyncImpl): (self: SafetyMonitor) => Promise<SafetyMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[SafetyMonitor.clearPreemption] pre violated: self.preemptionActive");
    }
    if (!((self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds))) {
      preViolations.push("[SafetyMonitor.clearPreemption] pre violated: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[SafetyMonitor.clearPreemption] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[SafetyMonitor.clearPreemption] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.clearPreemption] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.advancePreemptionTimer. User supplies this. */
export type SafetyMonitorAdvancePreemptionTimerImpl = (self: SafetyMonitor, dt: number) => { self: SafetyMonitor; modified: { preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for SafetyMonitor.advancePreemptionTimer. */
export function wrapSafetyMonitorAdvancePreemptionTimer(impl: SafetyMonitorAdvancePreemptionTimerImpl): (self: SafetyMonitor, dt: number) => SafetyMonitor {
  return (self, dt) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[SafetyMonitor.advancePreemptionTimer] pre violated: self.preemptionActive");
    }
    if (!((dt >= 0))) {
      preViolations.push("[SafetyMonitor.advancePreemptionTimer] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.preemptionTimerElapsed": self.preemptionTimerElapsed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionTimerElapsed === (__pre["self.preemptionTimerElapsed"] + dt)))) {
        postViolations.push("[SafetyMonitor.advancePreemptionTimer] post violated: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt");
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

/** Impl signature for SafetyMonitor.advancePreemptionTimer (async). User supplies this. */
export type SafetyMonitorAdvancePreemptionTimerAsyncImpl = (self: SafetyMonitor, dt: number) => Promise<{ self: SafetyMonitor; modified: { preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.advancePreemptionTimer (async). */
export function wrapSafetyMonitorAdvancePreemptionTimerAsync(impl: SafetyMonitorAdvancePreemptionTimerAsyncImpl): (self: SafetyMonitor, dt: number) => Promise<SafetyMonitor> {
  return async (self, dt) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[SafetyMonitor.advancePreemptionTimer] pre violated: self.preemptionActive");
    }
    if (!((dt >= 0))) {
      preViolations.push("[SafetyMonitor.advancePreemptionTimer] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.preemptionTimerElapsed": self.preemptionTimerElapsed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionTimerElapsed === (__pre["self.preemptionTimerElapsed"] + dt)))) {
        postViolations.push("[SafetyMonitor.advancePreemptionTimer] post violated: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt");
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

/** Impl signature for SafetyMonitor.startSystem. User supplies this. */
export type SafetyMonitorStartSystemImpl = (self: SafetyMonitor) => { self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for SafetyMonitor.startSystem. */
export function wrapSafetyMonitorStartSystem(impl: SafetyMonitorStartSystemImpl): (self: SafetyMonitor) => SafetyMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.preemptionActive))) {
      preViolations.push("[SafetyMonitor.startSystem] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[SafetyMonitor.startSystem] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[SafetyMonitor.startSystem] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.startSystem] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.startSystem (async). User supplies this. */
export type SafetyMonitorStartSystemAsyncImpl = (self: SafetyMonitor) => Promise<{ self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.startSystem (async). */
export function wrapSafetyMonitorStartSystemAsync(impl: SafetyMonitorStartSystemAsyncImpl): (self: SafetyMonitor) => Promise<SafetyMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.preemptionActive))) {
      preViolations.push("[SafetyMonitor.startSystem] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[SafetyMonitor.startSystem] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[SafetyMonitor.startSystem] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.startSystem] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.stopSystem. User supplies this. */
export type SafetyMonitorStopSystemImpl = (self: SafetyMonitor) => { self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for SafetyMonitor.stopSystem. */
export function wrapSafetyMonitorStopSystem(impl: SafetyMonitorStopSystemImpl): (self: SafetyMonitor) => SafetyMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.preemptionActive))) {
      preViolations.push("[SafetyMonitor.stopSystem] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[SafetyMonitor.stopSystem] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[SafetyMonitor.stopSystem] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.stopSystem] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for SafetyMonitor.stopSystem (async). User supplies this. */
export type SafetyMonitorStopSystemAsyncImpl = (self: SafetyMonitor) => Promise<{ self: SafetyMonitor; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for SafetyMonitor.stopSystem (async). */
export function wrapSafetyMonitorStopSystemAsync(impl: SafetyMonitorStopSystemAsyncImpl): (self: SafetyMonitor) => Promise<SafetyMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.preemptionActive))) {
      preViolations.push("[SafetyMonitor.stopSystem] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[SafetyMonitor.stopSystem] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[SafetyMonitor.stopSystem] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[SafetyMonitor.stopSystem] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for PedestrianModule.registerPedestrianRequest. User supplies this. */
export type PedestrianModuleRegisterPedestrianRequestImpl = (self: PedestrianModule) => { self: PedestrianModule; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown } };

/** Contract-checking wrapper for PedestrianModule.registerPedestrianRequest. */
export function wrapPedestrianModuleRegisterPedestrianRequest(impl: PedestrianModuleRegisterPedestrianRequestImpl): (self: PedestrianModule) => PedestrianModule {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pedestrianRequested))) {
      preViolations.push("[PedestrianModule.registerPedestrianRequest] pre violated: not self.pedestrianRequested");
    }
    if (!(!(self.pedestrianRequestPending))) {
      preViolations.push("[PedestrianModule.registerPedestrianRequest] pre violated: not self.pedestrianRequestPending");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === true))) {
        postViolations.push("[PedestrianModule.registerPedestrianRequest] post violated: self.pedestrianRequested = true");
      }
      if (!((__result.self.pedestrianRequestPending === true))) {
        postViolations.push("[PedestrianModule.registerPedestrianRequest] post violated: self.pedestrianRequestPending = true");
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

/** Impl signature for PedestrianModule.registerPedestrianRequest (async). User supplies this. */
export type PedestrianModuleRegisterPedestrianRequestAsyncImpl = (self: PedestrianModule) => Promise<{ self: PedestrianModule; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown } }>;

/** Contract-checking wrapper for PedestrianModule.registerPedestrianRequest (async). */
export function wrapPedestrianModuleRegisterPedestrianRequestAsync(impl: PedestrianModuleRegisterPedestrianRequestAsyncImpl): (self: PedestrianModule) => Promise<PedestrianModule> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pedestrianRequested))) {
      preViolations.push("[PedestrianModule.registerPedestrianRequest] pre violated: not self.pedestrianRequested");
    }
    if (!(!(self.pedestrianRequestPending))) {
      preViolations.push("[PedestrianModule.registerPedestrianRequest] pre violated: not self.pedestrianRequestPending");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === true))) {
        postViolations.push("[PedestrianModule.registerPedestrianRequest] post violated: self.pedestrianRequested = true");
      }
      if (!((__result.self.pedestrianRequestPending === true))) {
        postViolations.push("[PedestrianModule.registerPedestrianRequest] post violated: self.pedestrianRequestPending = true");
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

/** Impl signature for PedestrianModule.grantWalk. User supplies this. */
export type PedestrianModuleGrantWalkImpl = (self: PedestrianModule) => { self: PedestrianModule; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown } };

/** Contract-checking wrapper for PedestrianModule.grantWalk. */
export function wrapPedestrianModuleGrantWalk(impl: PedestrianModuleGrantWalkImpl): (self: PedestrianModule) => PedestrianModule {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.pedestrianRequested)) {
      preViolations.push("[PedestrianModule.grantWalk] pre violated: self.pedestrianRequested");
    }
    if (!(self.pedestrianRequestPending)) {
      preViolations.push("[PedestrianModule.grantWalk] pre violated: self.pedestrianRequestPending");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[PedestrianModule.grantWalk] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[PedestrianModule.grantWalk] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === true))) {
        postViolations.push("[PedestrianModule.grantWalk] post violated: self.walkSignalActive = true");
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

/** Impl signature for PedestrianModule.grantWalk (async). User supplies this. */
export type PedestrianModuleGrantWalkAsyncImpl = (self: PedestrianModule) => Promise<{ self: PedestrianModule; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown } }>;

/** Contract-checking wrapper for PedestrianModule.grantWalk (async). */
export function wrapPedestrianModuleGrantWalkAsync(impl: PedestrianModuleGrantWalkAsyncImpl): (self: PedestrianModule) => Promise<PedestrianModule> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.pedestrianRequested)) {
      preViolations.push("[PedestrianModule.grantWalk] pre violated: self.pedestrianRequested");
    }
    if (!(self.pedestrianRequestPending)) {
      preViolations.push("[PedestrianModule.grantWalk] pre violated: self.pedestrianRequestPending");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[PedestrianModule.grantWalk] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[PedestrianModule.grantWalk] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === true))) {
        postViolations.push("[PedestrianModule.grantWalk] post violated: self.walkSignalActive = true");
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

/** Impl signature for PedestrianModule.clearWalk. User supplies this. */
export type PedestrianModuleClearWalkImpl = (self: PedestrianModule) => { self: PedestrianModule; modified: { walkSignalActive: unknown } };

/** Contract-checking wrapper for PedestrianModule.clearWalk. */
export function wrapPedestrianModuleClearWalk(impl: PedestrianModuleClearWalkImpl): (self: PedestrianModule) => PedestrianModule {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.walkSignalActive)) {
      preViolations.push("[PedestrianModule.clearWalk] pre violated: self.walkSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[PedestrianModule.clearWalk] post violated: self.walkSignalActive = false");
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

/** Impl signature for PedestrianModule.clearWalk (async). User supplies this. */
export type PedestrianModuleClearWalkAsyncImpl = (self: PedestrianModule) => Promise<{ self: PedestrianModule; modified: { walkSignalActive: unknown } }>;

/** Contract-checking wrapper for PedestrianModule.clearWalk (async). */
export function wrapPedestrianModuleClearWalkAsync(impl: PedestrianModuleClearWalkAsyncImpl): (self: PedestrianModule) => Promise<PedestrianModule> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.walkSignalActive)) {
      preViolations.push("[PedestrianModule.clearWalk] pre violated: self.walkSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[PedestrianModule.clearWalk] post violated: self.walkSignalActive = false");
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

/** Impl signature for PedestrianModule.startSystem. User supplies this. */
export type PedestrianModuleStartSystemImpl = (self: PedestrianModule) => { self: PedestrianModule; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown } };

/** Contract-checking wrapper for PedestrianModule.startSystem. */
export function wrapPedestrianModuleStartSystem(impl: PedestrianModuleStartSystemImpl): (self: PedestrianModule) => PedestrianModule {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pedestrianRequested))) {
      preViolations.push("[PedestrianModule.startSystem] pre violated: not self.pedestrianRequested");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[PedestrianModule.startSystem] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[PedestrianModule.startSystem] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[PedestrianModule.startSystem] post violated: self.walkSignalActive = false");
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

/** Impl signature for PedestrianModule.startSystem (async). User supplies this. */
export type PedestrianModuleStartSystemAsyncImpl = (self: PedestrianModule) => Promise<{ self: PedestrianModule; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown } }>;

/** Contract-checking wrapper for PedestrianModule.startSystem (async). */
export function wrapPedestrianModuleStartSystemAsync(impl: PedestrianModuleStartSystemAsyncImpl): (self: PedestrianModule) => Promise<PedestrianModule> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pedestrianRequested))) {
      preViolations.push("[PedestrianModule.startSystem] pre violated: not self.pedestrianRequested");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[PedestrianModule.startSystem] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[PedestrianModule.startSystem] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[PedestrianModule.startSystem] post violated: self.walkSignalActive = false");
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

/** Impl signature for PedestrianModule.stopSystem. User supplies this. */
export type PedestrianModuleStopSystemImpl = (self: PedestrianModule) => { self: PedestrianModule; modified: { walkSignalActive: unknown } };

/** Contract-checking wrapper for PedestrianModule.stopSystem. */
export function wrapPedestrianModuleStopSystem(impl: PedestrianModuleStopSystemImpl): (self: PedestrianModule) => PedestrianModule {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.walkSignalActive))) {
      preViolations.push("[PedestrianModule.stopSystem] pre violated: not self.walkSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[PedestrianModule.stopSystem] post violated: self.walkSignalActive = false");
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

/** Impl signature for PedestrianModule.stopSystem (async). User supplies this. */
export type PedestrianModuleStopSystemAsyncImpl = (self: PedestrianModule) => Promise<{ self: PedestrianModule; modified: { walkSignalActive: unknown } }>;

/** Contract-checking wrapper for PedestrianModule.stopSystem (async). */
export function wrapPedestrianModuleStopSystemAsync(impl: PedestrianModuleStopSystemAsyncImpl): (self: PedestrianModule) => Promise<PedestrianModule> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.walkSignalActive))) {
      preViolations.push("[PedestrianModule.stopSystem] pre violated: not self.walkSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[PedestrianModule.stopSystem] post violated: self.walkSignalActive = false");
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

/** Impl signature for TimerService.tickElapsedTimers. User supplies this. */
export type TimerServiceTickElapsedTimersImpl = (self: TimerService, dt: number) => { self: TimerService; modified: { yellowTimerElapsed: unknown; elapsedTime: unknown } };

/** Contract-checking wrapper for TimerService.tickElapsedTimers. */
export function wrapTimerServiceTickElapsedTimers(impl: TimerServiceTickElapsedTimersImpl): (self: TimerService, dt: number) => TimerService {
  return (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[TimerService.tickElapsedTimers] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.yellowTimerElapsed": self.yellowTimerElapsed,
      "self.elapsedTime": self.elapsedTime,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === (__pre["self.yellowTimerElapsed"] + dt)))) {
        postViolations.push("[TimerService.tickElapsedTimers] post violated: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt");
      }
      if (!((__result.self.elapsedTime === (__pre["self.elapsedTime"] + dt)))) {
        postViolations.push("[TimerService.tickElapsedTimers] post violated: self.elapsedTime = self.elapsedTime@pre + dt");
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

/** Impl signature for TimerService.tickElapsedTimers (async). User supplies this. */
export type TimerServiceTickElapsedTimersAsyncImpl = (self: TimerService, dt: number) => Promise<{ self: TimerService; modified: { yellowTimerElapsed: unknown; elapsedTime: unknown } }>;

/** Contract-checking wrapper for TimerService.tickElapsedTimers (async). */
export function wrapTimerServiceTickElapsedTimersAsync(impl: TimerServiceTickElapsedTimersAsyncImpl): (self: TimerService, dt: number) => Promise<TimerService> {
  return async (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[TimerService.tickElapsedTimers] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.yellowTimerElapsed": self.yellowTimerElapsed,
      "self.elapsedTime": self.elapsedTime,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === (__pre["self.yellowTimerElapsed"] + dt)))) {
        postViolations.push("[TimerService.tickElapsedTimers] post violated: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt");
      }
      if (!((__result.self.elapsedTime === (__pre["self.elapsedTime"] + dt)))) {
        postViolations.push("[TimerService.tickElapsedTimers] post violated: self.elapsedTime = self.elapsedTime@pre + dt");
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

/** Impl signature for TimerService.resetYellowTimer. User supplies this. */
export type TimerServiceResetYellowTimerImpl = (self: TimerService) => { self: TimerService; modified: { yellowTimerElapsed: unknown } };

/** Contract-checking wrapper for TimerService.resetYellowTimer. */
export function wrapTimerServiceResetYellowTimer(impl: TimerServiceResetYellowTimerImpl): (self: TimerService) => TimerService {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= 0))) {
      preViolations.push("[TimerService.resetYellowTimer] pre violated: self.yellowTimerElapsed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.resetYellowTimer] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TimerService.resetYellowTimer (async). User supplies this. */
export type TimerServiceResetYellowTimerAsyncImpl = (self: TimerService) => Promise<{ self: TimerService; modified: { yellowTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TimerService.resetYellowTimer (async). */
export function wrapTimerServiceResetYellowTimerAsync(impl: TimerServiceResetYellowTimerAsyncImpl): (self: TimerService) => Promise<TimerService> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= 0))) {
      preViolations.push("[TimerService.resetYellowTimer] pre violated: self.yellowTimerElapsed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.resetYellowTimer] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TimerService.resetYellowTimerForRed. User supplies this. */
export type TimerServiceResetYellowTimerForRedImpl = (self: TimerService) => { self: TimerService; modified: { yellowTimerElapsed: unknown } };

/** Contract-checking wrapper for TimerService.resetYellowTimerForRed. */
export function wrapTimerServiceResetYellowTimerForRed(impl: TimerServiceResetYellowTimerForRedImpl): (self: TimerService) => TimerService {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= self.yellowIntervalSeconds))) {
      preViolations.push("[TimerService.resetYellowTimerForRed] pre violated: self.yellowTimerElapsed >= self.yellowIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.resetYellowTimerForRed] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TimerService.resetYellowTimerForRed (async). User supplies this. */
export type TimerServiceResetYellowTimerForRedAsyncImpl = (self: TimerService) => Promise<{ self: TimerService; modified: { yellowTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TimerService.resetYellowTimerForRed (async). */
export function wrapTimerServiceResetYellowTimerForRedAsync(impl: TimerServiceResetYellowTimerForRedAsyncImpl): (self: TimerService) => Promise<TimerService> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= self.yellowIntervalSeconds))) {
      preViolations.push("[TimerService.resetYellowTimerForRed] pre violated: self.yellowTimerElapsed >= self.yellowIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.resetYellowTimerForRed] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TimerService.startSystem. User supplies this. */
export type TimerServiceStartSystemImpl = (self: TimerService) => { self: TimerService; modified: { yellowTimerElapsed: unknown; elapsedTime: unknown } };

/** Contract-checking wrapper for TimerService.startSystem. */
export function wrapTimerServiceStartSystem(impl: TimerServiceStartSystemImpl): (self: TimerService) => TimerService {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= 0))) {
      preViolations.push("[TimerService.startSystem] pre violated: self.yellowTimerElapsed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.startSystem] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.elapsedTime === 0))) {
        postViolations.push("[TimerService.startSystem] post violated: self.elapsedTime = 0.0");
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

/** Impl signature for TimerService.startSystem (async). User supplies this. */
export type TimerServiceStartSystemAsyncImpl = (self: TimerService) => Promise<{ self: TimerService; modified: { yellowTimerElapsed: unknown; elapsedTime: unknown } }>;

/** Contract-checking wrapper for TimerService.startSystem (async). */
export function wrapTimerServiceStartSystemAsync(impl: TimerServiceStartSystemAsyncImpl): (self: TimerService) => Promise<TimerService> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= 0))) {
      preViolations.push("[TimerService.startSystem] pre violated: self.yellowTimerElapsed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.startSystem] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.elapsedTime === 0))) {
        postViolations.push("[TimerService.startSystem] post violated: self.elapsedTime = 0.0");
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

/** Impl signature for TimerService.stopSystem. User supplies this. */
export type TimerServiceStopSystemImpl = (self: TimerService) => { self: TimerService; modified: { yellowTimerElapsed: unknown } };

/** Contract-checking wrapper for TimerService.stopSystem. */
export function wrapTimerServiceStopSystem(impl: TimerServiceStopSystemImpl): (self: TimerService) => TimerService {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.stopSystem] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TimerService.stopSystem (async). User supplies this. */
export type TimerServiceStopSystemAsyncImpl = (self: TimerService) => Promise<{ self: TimerService; modified: { yellowTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TimerService.stopSystem (async). */
export function wrapTimerServiceStopSystemAsync(impl: TimerServiceStopSystemAsyncImpl): (self: TimerService) => Promise<TimerService> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TimerService.stopSystem] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for PhaseTimerChannel.propagateTick. User supplies this. */
export type PhaseTimerChannelPropagateTickImpl = (self: PhaseTimerChannel, dt: number) => { self: PhaseTimerChannel; modified: { lastTickTimestamp: unknown } };

/** Contract-checking wrapper for PhaseTimerChannel.propagateTick. */
export function wrapPhaseTimerChannelPropagateTick(impl: PhaseTimerChannelPropagateTickImpl): (self: PhaseTimerChannel, dt: number) => PhaseTimerChannel {
  return (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[PhaseTimerChannel.propagateTick] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTickTimestamp": self.lastTickTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.lastTickTimestamp === (__pre["self.lastTickTimestamp"] + dt)))) {
        postViolations.push("[PhaseTimerChannel.propagateTick] post violated: self.lastTickTimestamp = self.lastTickTimestamp@pre + dt");
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

/** Impl signature for PhaseTimerChannel.propagateTick (async). User supplies this. */
export type PhaseTimerChannelPropagateTickAsyncImpl = (self: PhaseTimerChannel, dt: number) => Promise<{ self: PhaseTimerChannel; modified: { lastTickTimestamp: unknown } }>;

/** Contract-checking wrapper for PhaseTimerChannel.propagateTick (async). */
export function wrapPhaseTimerChannelPropagateTickAsync(impl: PhaseTimerChannelPropagateTickAsyncImpl): (self: PhaseTimerChannel, dt: number) => Promise<PhaseTimerChannel> {
  return async (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[PhaseTimerChannel.propagateTick] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastTickTimestamp": self.lastTickTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.lastTickTimestamp === (__pre["self.lastTickTimestamp"] + dt)))) {
        postViolations.push("[PhaseTimerChannel.propagateTick] post violated: self.lastTickTimestamp = self.lastTickTimestamp@pre + dt");
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

/** Impl signature for PedestrianTimerChannel.syncPedestrianTimer. User supplies this. */
export type PedestrianTimerChannelSyncPedestrianTimerImpl = (self: PedestrianTimerChannel, timestamp: number) => { self: PedestrianTimerChannel; modified: { lastSyncTimestamp: unknown } };

/** Contract-checking wrapper for PedestrianTimerChannel.syncPedestrianTimer. */
export function wrapPedestrianTimerChannelSyncPedestrianTimer(impl: PedestrianTimerChannelSyncPedestrianTimerImpl): (self: PedestrianTimerChannel, timestamp: number) => PedestrianTimerChannel {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[PedestrianTimerChannel.syncPedestrianTimer] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastSyncTimestamp === timestamp))) {
        postViolations.push("[PedestrianTimerChannel.syncPedestrianTimer] post violated: self.lastSyncTimestamp = timestamp");
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

/** Impl signature for PedestrianTimerChannel.syncPedestrianTimer (async). User supplies this. */
export type PedestrianTimerChannelSyncPedestrianTimerAsyncImpl = (self: PedestrianTimerChannel, timestamp: number) => Promise<{ self: PedestrianTimerChannel; modified: { lastSyncTimestamp: unknown } }>;

/** Contract-checking wrapper for PedestrianTimerChannel.syncPedestrianTimer (async). */
export function wrapPedestrianTimerChannelSyncPedestrianTimerAsync(impl: PedestrianTimerChannelSyncPedestrianTimerAsyncImpl): (self: PedestrianTimerChannel, timestamp: number) => Promise<PedestrianTimerChannel> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[PedestrianTimerChannel.syncPedestrianTimer] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastSyncTimestamp === timestamp))) {
        postViolations.push("[PedestrianTimerChannel.syncPedestrianTimer] post violated: self.lastSyncTimestamp = timestamp");
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

/** Impl signature for SafetyTimeoutChannel.syncSafetyTimer. User supplies this. */
export type SafetyTimeoutChannelSyncSafetyTimerImpl = (self: SafetyTimeoutChannel, timestamp: number) => { self: SafetyTimeoutChannel; modified: { lastSyncTimestamp: unknown } };

/** Contract-checking wrapper for SafetyTimeoutChannel.syncSafetyTimer. */
export function wrapSafetyTimeoutChannelSyncSafetyTimer(impl: SafetyTimeoutChannelSyncSafetyTimerImpl): (self: SafetyTimeoutChannel, timestamp: number) => SafetyTimeoutChannel {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[SafetyTimeoutChannel.syncSafetyTimer] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastSyncTimestamp === timestamp))) {
        postViolations.push("[SafetyTimeoutChannel.syncSafetyTimer] post violated: self.lastSyncTimestamp = timestamp");
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

/** Impl signature for SafetyTimeoutChannel.syncSafetyTimer (async). User supplies this. */
export type SafetyTimeoutChannelSyncSafetyTimerAsyncImpl = (self: SafetyTimeoutChannel, timestamp: number) => Promise<{ self: SafetyTimeoutChannel; modified: { lastSyncTimestamp: unknown } }>;

/** Contract-checking wrapper for SafetyTimeoutChannel.syncSafetyTimer (async). */
export function wrapSafetyTimeoutChannelSyncSafetyTimerAsync(impl: SafetyTimeoutChannelSyncSafetyTimerAsyncImpl): (self: SafetyTimeoutChannel, timestamp: number) => Promise<SafetyTimeoutChannel> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[SafetyTimeoutChannel.syncSafetyTimer] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastSyncTimestamp === timestamp))) {
        postViolations.push("[SafetyTimeoutChannel.syncSafetyTimer] post violated: self.lastSyncTimestamp = timestamp");
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

/** Impl signature for TrafficLightSystem.startNormalPhase. User supplies this. */
export type TrafficLightSystemStartNormalPhaseImpl = (self: TrafficLightSystem, p: Phase) => { self: TrafficLightSystem; modified: { activePhase: unknown; greenApproaches: unknown; preemptionActive: unknown; allRedActive: unknown; yellowTimerElapsed: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.startNormalPhase. */
export function wrapTrafficLightSystemStartNormalPhase(impl: TrafficLightSystemStartNormalPhaseImpl): (self: TrafficLightSystem, p: Phase) => TrafficLightSystem {
  return (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: p <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: not self.preemptionActive");
    }
    if (!(!(self.allRedActive))) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: not self.allRedActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, p);
      const postViolations: string[] = [];
      if (!((__result.self.activePhase === p))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.activePhase = p");
      }
      if (!((__result.self.greenApproaches === p.greenApproaches))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.greenApproaches = p.greenApproaches");
      }
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.allRedActive = false");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.startNormalPhase (async). User supplies this. */
export type TrafficLightSystemStartNormalPhaseAsyncImpl = (self: TrafficLightSystem, p: Phase) => Promise<{ self: TrafficLightSystem; modified: { activePhase: unknown; greenApproaches: unknown; preemptionActive: unknown; allRedActive: unknown; yellowTimerElapsed: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.startNormalPhase (async). */
export function wrapTrafficLightSystemStartNormalPhaseAsync(impl: TrafficLightSystemStartNormalPhaseAsyncImpl): (self: TrafficLightSystem, p: Phase) => Promise<TrafficLightSystem> {
  return async (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: p <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: not self.preemptionActive");
    }
    if (!(!(self.allRedActive))) {
      preViolations.push("[TrafficLightSystem.startNormalPhase] pre violated: not self.allRedActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, p);
      const postViolations: string[] = [];
      if (!((__result.self.activePhase === p))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.activePhase = p");
      }
      if (!((__result.self.greenApproaches === p.greenApproaches))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.greenApproaches = p.greenApproaches");
      }
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.allRedActive = false");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startNormalPhase] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.transitionToYellow. User supplies this. */
export type TrafficLightSystemTransitionToYellowImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { greenApproaches: unknown; yellowTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.transitionToYellow. */
export function wrapTrafficLightSystemTransitionToYellow(impl: TrafficLightSystemTransitionToYellowImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.activePhase !== null))) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: self.activePhase <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: not self.preemptionActive");
    }
    if (!(!(self.allRedActive))) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: not self.allRedActive");
    }
    if (!((self.greenApproaches).size > 0)) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: self.greenApproaches->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.transitionToYellow] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.transitionToYellow] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.yellowIntervalSeconds >= 3))) {
        postViolations.push("[TrafficLightSystem.transitionToYellow] post violated: self.yellowIntervalSeconds >= 3.0");
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

/** Impl signature for TrafficLightSystem.transitionToYellow (async). User supplies this. */
export type TrafficLightSystemTransitionToYellowAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { greenApproaches: unknown; yellowTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.transitionToYellow (async). */
export function wrapTrafficLightSystemTransitionToYellowAsync(impl: TrafficLightSystemTransitionToYellowAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.activePhase !== null))) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: self.activePhase <> null");
    }
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: not self.preemptionActive");
    }
    if (!(!(self.allRedActive))) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: not self.allRedActive");
    }
    if (!((self.greenApproaches).size > 0)) {
      preViolations.push("[TrafficLightSystem.transitionToYellow] pre violated: self.greenApproaches->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.transitionToYellow] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.transitionToYellow] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.yellowIntervalSeconds >= 3))) {
        postViolations.push("[TrafficLightSystem.transitionToYellow] post violated: self.yellowIntervalSeconds >= 3.0");
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

/** Impl signature for TrafficLightSystem.transitionToRed. User supplies this. */
export type TrafficLightSystemTransitionToRedImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { greenApproaches: unknown; yellowTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.transitionToRed. */
export function wrapTrafficLightSystemTransitionToRed(impl: TrafficLightSystemTransitionToRedImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= self.yellowIntervalSeconds))) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: self.yellowTimerElapsed >= self.yellowIntervalSeconds");
    }
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: not self.preemptionActive");
    }
    if (!(!(self.allRedActive))) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: not self.allRedActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.transitionToRed] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.transitionToRed] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.transitionToRed (async). User supplies this. */
export type TrafficLightSystemTransitionToRedAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { greenApproaches: unknown; yellowTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.transitionToRed (async). */
export function wrapTrafficLightSystemTransitionToRedAsync(impl: TrafficLightSystemTransitionToRedAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.yellowTimerElapsed >= self.yellowIntervalSeconds))) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: self.yellowTimerElapsed >= self.yellowIntervalSeconds");
    }
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: not self.preemptionActive");
    }
    if (!(!(self.allRedActive))) {
      preViolations.push("[TrafficLightSystem.transitionToRed] pre violated: not self.allRedActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.transitionToRed] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.transitionToRed] post violated: self.yellowTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.emergencyPreemption. User supplies this. */
export type TrafficLightSystemEmergencyPreemptionImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { preemptionActive: unknown; allRedActive: unknown; greenApproaches: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.emergencyPreemption. */
export function wrapTrafficLightSystemEmergencyPreemption(impl: TrafficLightSystemEmergencyPreemptionImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.emergencyPreemption] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.emergencyPreemption] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === true))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.preemptionActive = true");
      }
      if (!((__result.self.allRedActive === true))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.allRedActive = true");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.preemptionTimerElapsed = 0.0");
      }
      if (!((__result.self.preemptionResponseTimeSeconds <= 1))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.preemptionResponseTimeSeconds <= 1.0");
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

/** Impl signature for TrafficLightSystem.emergencyPreemption (async). User supplies this. */
export type TrafficLightSystemEmergencyPreemptionAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { preemptionActive: unknown; allRedActive: unknown; greenApproaches: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.emergencyPreemption (async). */
export function wrapTrafficLightSystemEmergencyPreemptionAsync(impl: TrafficLightSystemEmergencyPreemptionAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.emergencyPreemption] pre violated: self.isOperating");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.emergencyPreemption] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === true))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.preemptionActive = true");
      }
      if (!((__result.self.allRedActive === true))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.allRedActive = true");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.preemptionTimerElapsed = 0.0");
      }
      if (!((__result.self.preemptionResponseTimeSeconds <= 1))) {
        postViolations.push("[TrafficLightSystem.emergencyPreemption] post violated: self.preemptionResponseTimeSeconds <= 1.0");
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

/** Impl signature for TrafficLightSystem.clearPreemption. User supplies this. */
export type TrafficLightSystemClearPreemptionImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.clearPreemption. */
export function wrapTrafficLightSystemClearPreemption(impl: TrafficLightSystemClearPreemptionImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[TrafficLightSystem.clearPreemption] pre violated: self.preemptionActive");
    }
    if (!((self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds))) {
      preViolations.push("[TrafficLightSystem.clearPreemption] pre violated: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightSystem.clearPreemption] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[TrafficLightSystem.clearPreemption] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.clearPreemption] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.clearPreemption (async). User supplies this. */
export type TrafficLightSystemClearPreemptionAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { preemptionActive: unknown; allRedActive: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.clearPreemption (async). */
export function wrapTrafficLightSystemClearPreemptionAsync(impl: TrafficLightSystemClearPreemptionAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[TrafficLightSystem.clearPreemption] pre violated: self.preemptionActive");
    }
    if (!((self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds))) {
      preViolations.push("[TrafficLightSystem.clearPreemption] pre violated: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightSystem.clearPreemption] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[TrafficLightSystem.clearPreemption] post violated: self.allRedActive = false");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.clearPreemption] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.registerPedestrianRequest. User supplies this. */
export type TrafficLightSystemRegisterPedestrianRequestImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.registerPedestrianRequest. */
export function wrapTrafficLightSystemRegisterPedestrianRequest(impl: TrafficLightSystemRegisterPedestrianRequestImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pedestrianRequested))) {
      preViolations.push("[TrafficLightSystem.registerPedestrianRequest] pre violated: not self.pedestrianRequested");
    }
    if (!(!(self.pedestrianRequestPending))) {
      preViolations.push("[TrafficLightSystem.registerPedestrianRequest] pre violated: not self.pedestrianRequestPending");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === true))) {
        postViolations.push("[TrafficLightSystem.registerPedestrianRequest] post violated: self.pedestrianRequested = true");
      }
      if (!((__result.self.pedestrianRequestPending === true))) {
        postViolations.push("[TrafficLightSystem.registerPedestrianRequest] post violated: self.pedestrianRequestPending = true");
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

/** Impl signature for TrafficLightSystem.registerPedestrianRequest (async). User supplies this. */
export type TrafficLightSystemRegisterPedestrianRequestAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.registerPedestrianRequest (async). */
export function wrapTrafficLightSystemRegisterPedestrianRequestAsync(impl: TrafficLightSystemRegisterPedestrianRequestAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.pedestrianRequested))) {
      preViolations.push("[TrafficLightSystem.registerPedestrianRequest] pre violated: not self.pedestrianRequested");
    }
    if (!(!(self.pedestrianRequestPending))) {
      preViolations.push("[TrafficLightSystem.registerPedestrianRequest] pre violated: not self.pedestrianRequestPending");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === true))) {
        postViolations.push("[TrafficLightSystem.registerPedestrianRequest] post violated: self.pedestrianRequested = true");
      }
      if (!((__result.self.pedestrianRequestPending === true))) {
        postViolations.push("[TrafficLightSystem.registerPedestrianRequest] post violated: self.pedestrianRequestPending = true");
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

/** Impl signature for TrafficLightSystem.grantWalk. User supplies this. */
export type TrafficLightSystemGrantWalkImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.grantWalk. */
export function wrapTrafficLightSystemGrantWalk(impl: TrafficLightSystemGrantWalkImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.pedestrianRequested)) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: self.pedestrianRequested");
    }
    if (!(self.pedestrianRequestPending)) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: self.pedestrianRequestPending");
    }
    if (!((self.greenApproaches).size === 0)) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: self.greenApproaches->isEmpty()");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[TrafficLightSystem.grantWalk] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[TrafficLightSystem.grantWalk] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === true))) {
        postViolations.push("[TrafficLightSystem.grantWalk] post violated: self.walkSignalActive = true");
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

/** Impl signature for TrafficLightSystem.grantWalk (async). User supplies this. */
export type TrafficLightSystemGrantWalkAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.grantWalk (async). */
export function wrapTrafficLightSystemGrantWalkAsync(impl: TrafficLightSystemGrantWalkAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.pedestrianRequested)) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: self.pedestrianRequested");
    }
    if (!(self.pedestrianRequestPending)) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: self.pedestrianRequestPending");
    }
    if (!((self.greenApproaches).size === 0)) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: self.greenApproaches->isEmpty()");
    }
    if (!(!(self.preemptionActive))) {
      preViolations.push("[TrafficLightSystem.grantWalk] pre violated: not self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[TrafficLightSystem.grantWalk] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[TrafficLightSystem.grantWalk] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === true))) {
        postViolations.push("[TrafficLightSystem.grantWalk] post violated: self.walkSignalActive = true");
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

/** Impl signature for TrafficLightSystem.clearWalk. User supplies this. */
export type TrafficLightSystemClearWalkImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { walkSignalActive: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.clearWalk. */
export function wrapTrafficLightSystemClearWalk(impl: TrafficLightSystemClearWalkImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.walkSignalActive)) {
      preViolations.push("[TrafficLightSystem.clearWalk] pre violated: self.walkSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[TrafficLightSystem.clearWalk] post violated: self.walkSignalActive = false");
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

/** Impl signature for TrafficLightSystem.clearWalk (async). User supplies this. */
export type TrafficLightSystemClearWalkAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { walkSignalActive: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.clearWalk (async). */
export function wrapTrafficLightSystemClearWalkAsync(impl: TrafficLightSystemClearWalkAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.walkSignalActive)) {
      preViolations.push("[TrafficLightSystem.clearWalk] pre violated: self.walkSignalActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[TrafficLightSystem.clearWalk] post violated: self.walkSignalActive = false");
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

/** Impl signature for TrafficLightSystem.tickElapsedTimers. User supplies this. */
export type TrafficLightSystemTickElapsedTimersImpl = (self: TrafficLightSystem, dt: number) => { self: TrafficLightSystem; modified: { yellowTimerElapsed: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.tickElapsedTimers. */
export function wrapTrafficLightSystemTickElapsedTimers(impl: TrafficLightSystemTickElapsedTimersImpl): (self: TrafficLightSystem, dt: number) => TrafficLightSystem {
  return (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[TrafficLightSystem.tickElapsedTimers] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.yellowTimerElapsed": self.yellowTimerElapsed,
      "self.preemptionTimerElapsed": self.preemptionTimerElapsed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === (__pre["self.yellowTimerElapsed"] + dt)))) {
        postViolations.push("[TrafficLightSystem.tickElapsedTimers] post violated: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt");
      }
      if (!((__result.self.preemptionTimerElapsed === (__pre["self.preemptionTimerElapsed"] + dt)))) {
        postViolations.push("[TrafficLightSystem.tickElapsedTimers] post violated: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt");
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

/** Impl signature for TrafficLightSystem.tickElapsedTimers (async). User supplies this. */
export type TrafficLightSystemTickElapsedTimersAsyncImpl = (self: TrafficLightSystem, dt: number) => Promise<{ self: TrafficLightSystem; modified: { yellowTimerElapsed: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.tickElapsedTimers (async). */
export function wrapTrafficLightSystemTickElapsedTimersAsync(impl: TrafficLightSystemTickElapsedTimersAsyncImpl): (self: TrafficLightSystem, dt: number) => Promise<TrafficLightSystem> {
  return async (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[TrafficLightSystem.tickElapsedTimers] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.yellowTimerElapsed": self.yellowTimerElapsed,
      "self.preemptionTimerElapsed": self.preemptionTimerElapsed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dt);
      const postViolations: string[] = [];
      if (!((__result.self.yellowTimerElapsed === (__pre["self.yellowTimerElapsed"] + dt)))) {
        postViolations.push("[TrafficLightSystem.tickElapsedTimers] post violated: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt");
      }
      if (!((__result.self.preemptionTimerElapsed === (__pre["self.preemptionTimerElapsed"] + dt)))) {
        postViolations.push("[TrafficLightSystem.tickElapsedTimers] post violated: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt");
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

/** Impl signature for TrafficLightSystem.startSystem. User supplies this. */
export type TrafficLightSystemStartSystemImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { isOperating: unknown; preemptionActive: unknown; allRedActive: unknown; pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown; greenApproaches: unknown; yellowTimerElapsed: unknown; preemptionTimerElapsed: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.startSystem. */
export function wrapTrafficLightSystemStartSystem(impl: TrafficLightSystemStartSystemImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperating))) {
      preViolations.push("[TrafficLightSystem.startSystem] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.isOperating = true");
      }
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.allRedActive = false");
      }
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.walkSignalActive = false");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.startSystem (async). User supplies this. */
export type TrafficLightSystemStartSystemAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { isOperating: unknown; preemptionActive: unknown; allRedActive: unknown; pedestrianRequested: unknown; pedestrianRequestPending: unknown; walkSignalActive: unknown; greenApproaches: unknown; yellowTimerElapsed: unknown; preemptionTimerElapsed: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.startSystem (async). */
export function wrapTrafficLightSystemStartSystemAsync(impl: TrafficLightSystemStartSystemAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isOperating))) {
      preViolations.push("[TrafficLightSystem.startSystem] pre violated: not self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.isOperating = true");
      }
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.allRedActive === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.allRedActive = false");
      }
      if (!((__result.self.pedestrianRequested === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.pedestrianRequested = false");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.pedestrianRequestPending = false");
      }
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.walkSignalActive = false");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.yellowTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.yellowTimerElapsed = 0.0");
      }
      if (!((__result.self.preemptionTimerElapsed === 0))) {
        postViolations.push("[TrafficLightSystem.startSystem] post violated: self.preemptionTimerElapsed = 0.0");
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

/** Impl signature for TrafficLightSystem.stopSystem. User supplies this. */
export type TrafficLightSystemStopSystemImpl = (self: TrafficLightSystem) => { self: TrafficLightSystem; modified: { isOperating: unknown; greenApproaches: unknown; walkSignalActive: unknown } };

/** Contract-checking wrapper for TrafficLightSystem.stopSystem. */
export function wrapTrafficLightSystemStopSystem(impl: TrafficLightSystemStopSystemImpl): (self: TrafficLightSystem) => TrafficLightSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.stopSystem] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[TrafficLightSystem.stopSystem] post violated: self.isOperating = false");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.stopSystem] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[TrafficLightSystem.stopSystem] post violated: self.walkSignalActive = false");
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

/** Impl signature for TrafficLightSystem.stopSystem (async). User supplies this. */
export type TrafficLightSystemStopSystemAsyncImpl = (self: TrafficLightSystem) => Promise<{ self: TrafficLightSystem; modified: { isOperating: unknown; greenApproaches: unknown; walkSignalActive: unknown } }>;

/** Contract-checking wrapper for TrafficLightSystem.stopSystem (async). */
export function wrapTrafficLightSystemStopSystemAsync(impl: TrafficLightSystemStopSystemAsyncImpl): (self: TrafficLightSystem) => Promise<TrafficLightSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystem.stopSystem] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[TrafficLightSystem.stopSystem] post violated: self.isOperating = false");
      }
      if (!((__result.self.greenApproaches).size === 0)) {
        postViolations.push("[TrafficLightSystem.stopSystem] post violated: self.greenApproaches->isEmpty()");
      }
      if (!((__result.self.walkSignalActive === false))) {
        postViolations.push("[TrafficLightSystem.stopSystem] post violated: self.walkSignalActive = false");
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

/** Impl signature for TrafficLightSystemFormalized.rejectConflictingPhase. User supplies this. */
export type TrafficLightSystemFormalizedRejectConflictingPhaseImpl = (self: TrafficLightSystemFormalized, p: Phase) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectConflictingPhase. */
export function wrapTrafficLightSystemFormalizedRejectConflictingPhase(impl: TrafficLightSystemFormalizedRejectConflictingPhaseImpl): (self: TrafficLightSystemFormalized, p: Phase) => TrafficLightSystemFormalized {
  return (self, p) => {
    const preViolations: string[] = [];
    if (!((Array.from(p.greenApproaches).every((__x) => (Array.from(p.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))) === false))) {
      preViolations.push("[TrafficLightSystemFormalized.rejectConflictingPhase] pre violated: p.greenApproaches->forAll(a1 |\n           p.greenApproaches->forAll(a2 |\n             a1 = a2 or a1.direction <> a2.direction)) = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, p);
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

/** Impl signature for TrafficLightSystemFormalized.rejectConflictingPhase (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectConflictingPhaseAsyncImpl = (self: TrafficLightSystemFormalized, p: Phase) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectConflictingPhase (async). */
export function wrapTrafficLightSystemFormalizedRejectConflictingPhaseAsync(impl: TrafficLightSystemFormalizedRejectConflictingPhaseAsyncImpl): (self: TrafficLightSystemFormalized, p: Phase) => Promise<TrafficLightSystemFormalized> {
  return async (self, p) => {
    const preViolations: string[] = [];
    if (!((Array.from(p.greenApproaches).every((__x) => (Array.from(p.greenApproaches).every((__x) => (((__x === __x) || (__x.direction !== __x.direction)))))) === false))) {
      preViolations.push("[TrafficLightSystemFormalized.rejectConflictingPhase] pre violated: p.greenApproaches->forAll(a1 |\n           p.greenApproaches->forAll(a2 |\n             a1 = a2 or a1.direction <> a2.direction)) = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, p);
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

/** Impl signature for TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen. User supplies this. */
export type TrafficLightSystemFormalizedRejectTransitionToYellowNoGreenImpl = (self: TrafficLightSystemFormalized) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen. */
export function wrapTrafficLightSystemFormalizedRejectTransitionToYellowNoGreen(impl: TrafficLightSystemFormalizedRejectTransitionToYellowNoGreenImpl): (self: TrafficLightSystemFormalized) => TrafficLightSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.greenApproaches).size === 0)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen] pre violated: self.greenApproaches->isEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectTransitionToYellowNoGreenAsyncImpl = (self: TrafficLightSystemFormalized) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen (async). */
export function wrapTrafficLightSystemFormalizedRejectTransitionToYellowNoGreenAsync(impl: TrafficLightSystemFormalizedRejectTransitionToYellowNoGreenAsyncImpl): (self: TrafficLightSystemFormalized) => Promise<TrafficLightSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.greenApproaches).size === 0)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen] pre violated: self.greenApproaches->isEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectDuplicatePreemption. User supplies this. */
export type TrafficLightSystemFormalizedRejectDuplicatePreemptionImpl = (self: TrafficLightSystemFormalized) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectDuplicatePreemption. */
export function wrapTrafficLightSystemFormalizedRejectDuplicatePreemption(impl: TrafficLightSystemFormalizedRejectDuplicatePreemptionImpl): (self: TrafficLightSystemFormalized) => TrafficLightSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectDuplicatePreemption] pre violated: self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectDuplicatePreemption (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectDuplicatePreemptionAsyncImpl = (self: TrafficLightSystemFormalized) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectDuplicatePreemption (async). */
export function wrapTrafficLightSystemFormalizedRejectDuplicatePreemptionAsync(impl: TrafficLightSystemFormalizedRejectDuplicatePreemptionAsyncImpl): (self: TrafficLightSystemFormalized) => Promise<TrafficLightSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.preemptionActive)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectDuplicatePreemption] pre violated: self.preemptionActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest. User supplies this. */
export type TrafficLightSystemFormalizedRejectDuplicatePedestrianRequestImpl = (self: TrafficLightSystemFormalized) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest. */
export function wrapTrafficLightSystemFormalizedRejectDuplicatePedestrianRequest(impl: TrafficLightSystemFormalizedRejectDuplicatePedestrianRequestImpl): (self: TrafficLightSystemFormalized) => TrafficLightSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.pedestrianRequested)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest] pre violated: self.pedestrianRequested");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectDuplicatePedestrianRequestAsyncImpl = (self: TrafficLightSystemFormalized) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest (async). */
export function wrapTrafficLightSystemFormalizedRejectDuplicatePedestrianRequestAsync(impl: TrafficLightSystemFormalizedRejectDuplicatePedestrianRequestAsyncImpl): (self: TrafficLightSystemFormalized) => Promise<TrafficLightSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.pedestrianRequested)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest] pre violated: self.pedestrianRequested");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectWalkConflictingGreen. User supplies this. */
export type TrafficLightSystemFormalizedRejectWalkConflictingGreenImpl = (self: TrafficLightSystemFormalized) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectWalkConflictingGreen. */
export function wrapTrafficLightSystemFormalizedRejectWalkConflictingGreen(impl: TrafficLightSystemFormalizedRejectWalkConflictingGreenImpl): (self: TrafficLightSystemFormalized) => TrafficLightSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.greenApproaches).size > 0)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectWalkConflictingGreen] pre violated: self.greenApproaches->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectWalkConflictingGreen (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectWalkConflictingGreenAsyncImpl = (self: TrafficLightSystemFormalized) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectWalkConflictingGreen (async). */
export function wrapTrafficLightSystemFormalizedRejectWalkConflictingGreenAsync(impl: TrafficLightSystemFormalizedRejectWalkConflictingGreenAsyncImpl): (self: TrafficLightSystemFormalized) => Promise<TrafficLightSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.greenApproaches).size > 0)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectWalkConflictingGreen] pre violated: self.greenApproaches->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectSystemAlreadyRunning. User supplies this. */
export type TrafficLightSystemFormalizedRejectSystemAlreadyRunningImpl = (self: TrafficLightSystemFormalized) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectSystemAlreadyRunning. */
export function wrapTrafficLightSystemFormalizedRejectSystemAlreadyRunning(impl: TrafficLightSystemFormalizedRejectSystemAlreadyRunningImpl): (self: TrafficLightSystemFormalized) => TrafficLightSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectSystemAlreadyRunning] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectSystemAlreadyRunning (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectSystemAlreadyRunningAsyncImpl = (self: TrafficLightSystemFormalized) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectSystemAlreadyRunning (async). */
export function wrapTrafficLightSystemFormalizedRejectSystemAlreadyRunningAsync(impl: TrafficLightSystemFormalizedRejectSystemAlreadyRunningAsyncImpl): (self: TrafficLightSystemFormalized) => Promise<TrafficLightSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isOperating)) {
      preViolations.push("[TrafficLightSystemFormalized.rejectSystemAlreadyRunning] pre violated: self.isOperating");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for TrafficLightSystemFormalized.rejectInvalidTickDt. User supplies this. */
export type TrafficLightSystemFormalizedRejectInvalidTickDtImpl = (self: TrafficLightSystemFormalized, dt: number) => { self: TrafficLightSystemFormalized; modified: {} };

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectInvalidTickDt. */
export function wrapTrafficLightSystemFormalizedRejectInvalidTickDt(impl: TrafficLightSystemFormalizedRejectInvalidTickDtImpl): (self: TrafficLightSystemFormalized, dt: number) => TrafficLightSystemFormalized {
  return (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt <= 0))) {
      preViolations.push("[TrafficLightSystemFormalized.rejectInvalidTickDt] pre violated: dt <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dt);
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

/** Impl signature for TrafficLightSystemFormalized.rejectInvalidTickDt (async). User supplies this. */
export type TrafficLightSystemFormalizedRejectInvalidTickDtAsyncImpl = (self: TrafficLightSystemFormalized, dt: number) => Promise<{ self: TrafficLightSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TrafficLightSystemFormalized.rejectInvalidTickDt (async). */
export function wrapTrafficLightSystemFormalizedRejectInvalidTickDtAsync(impl: TrafficLightSystemFormalizedRejectInvalidTickDtAsyncImpl): (self: TrafficLightSystemFormalized, dt: number) => Promise<TrafficLightSystemFormalized> {
  return async (self, dt) => {
    const preViolations: string[] = [];
    if (!((dt <= 0))) {
      preViolations.push("[TrafficLightSystemFormalized.rejectInvalidTickDt] pre violated: dt <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dt);
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

/** Lifecycle registry for MutualExclusionCommitment commitments. */
export class MutualExclusionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MutualExclusionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MutualExclusionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MutualExclusionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MutualExclusionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MutualExclusionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MutualExclusionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MutualExclusionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MutualExclusionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MutualExclusionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for YellowIntervalCommitment commitments. */
export class YellowIntervalCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<YellowIntervalCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a YellowIntervalCommitment — the typed wrapper guarantees that since
    // `register` only accepts YellowIntervalCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: YellowIntervalCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: YellowIntervalCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: YellowIntervalCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: YellowIntervalCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<YellowIntervalCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<YellowIntervalCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for EmergencyPreemptionCommitment commitments. */
export class EmergencyPreemptionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<EmergencyPreemptionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a EmergencyPreemptionCommitment — the typed wrapper guarantees that since
    // `register` only accepts EmergencyPreemptionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: EmergencyPreemptionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: EmergencyPreemptionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: EmergencyPreemptionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: EmergencyPreemptionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<EmergencyPreemptionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<EmergencyPreemptionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PedestrianRequestCommitment commitments. */
export class PedestrianRequestCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PedestrianRequestCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PedestrianRequestCommitment — the typed wrapper guarantees that since
    // `register` only accepts PedestrianRequestCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PedestrianRequestCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PedestrianRequestCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PedestrianRequestCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PedestrianRequestCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PedestrianRequestCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PedestrianRequestCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

