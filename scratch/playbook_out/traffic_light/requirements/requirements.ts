// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TrafficLightControllerSystem. Runtime: string. Compile-time: branded. */
export type TrafficLightControllerSystemId = string & { readonly __brand: "TrafficLightControllerSystemId" };
/** Identity type for Approach. Runtime: string. Compile-time: branded. */
export type ApproachId = string & { readonly __brand: "ApproachId" };
/** Identity type for Phase. Runtime: string. Compile-time: branded. */
export type PhaseId = string & { readonly __brand: "PhaseId" };
/** Identity type for YellowInterval. Runtime: string. Compile-time: branded. */
export type YellowIntervalId = string & { readonly __brand: "YellowIntervalId" };
/** Identity type for PreemptionEvent. Runtime: string. Compile-time: branded. */
export type PreemptionEventId = string & { readonly __brand: "PreemptionEventId" };
/** Identity type for PedestrianRequest. Runtime: string. Compile-time: branded. */
export type PedestrianRequestId = string & { readonly __brand: "PedestrianRequestId" };
/** Identity type for RoadUser. Runtime: string. Compile-time: branded. */
export type RoadUserId = string & { readonly __brand: "RoadUserId" };
/** Identity type for Pedestrian. Runtime: string. Compile-time: branded. */
export type PedestrianId = string & { readonly __brand: "PedestrianId" };
/** Identity type for EmergencyResponder. Runtime: string. Compile-time: branded. */
export type EmergencyResponderId = string & { readonly __brand: "EmergencyResponderId" };
/** Identity type for TrafficAuthority. Runtime: string. Compile-time: branded. */
export type TrafficAuthorityId = string & { readonly __brand: "TrafficAuthorityId" };
/** Identity type for TrafficLightVendor. Runtime: string. Compile-time: branded. */
export type TrafficLightVendorId = string & { readonly __brand: "TrafficLightVendorId" };
/** Identity type for MutualExclusionCommitment. Runtime: string. Compile-time: branded. */
export type MutualExclusionCommitmentId = string & { readonly __brand: "MutualExclusionCommitmentId" };
/** Identity type for YellowIntervalCommitment. Runtime: string. Compile-time: branded. */
export type YellowIntervalCommitmentId = string & { readonly __brand: "YellowIntervalCommitmentId" };
/** Identity type for EmergencyPreemptionCommitment. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionCommitmentId = string & { readonly __brand: "EmergencyPreemptionCommitmentId" };
/** Identity type for PedestrianWalkCommitment. Runtime: string. Compile-time: branded. */
export type PedestrianWalkCommitmentId = string & { readonly __brand: "PedestrianWalkCommitmentId" };
/** Identity type for SafeIntersectionControlCommitment. Runtime: string. Compile-time: branded. */
export type SafeIntersectionControlCommitmentId = string & { readonly __brand: "SafeIntersectionControlCommitmentId" };
/** Identity type for NormalPhaseCycleFlow. Runtime: string. Compile-time: branded. */
export type NormalPhaseCycleFlowId = string & { readonly __brand: "NormalPhaseCycleFlowId" };
/** Identity type for GreenToRedTransitionFlow. Runtime: string. Compile-time: branded. */
export type GreenToRedTransitionFlowId = string & { readonly __brand: "GreenToRedTransitionFlowId" };
/** Identity type for AllRedDwellFlow. Runtime: string. Compile-time: branded. */
export type AllRedDwellFlowId = string & { readonly __brand: "AllRedDwellFlowId" };
/** Identity type for EmergencyPreemptionFlow. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionFlowId = string & { readonly __brand: "EmergencyPreemptionFlowId" };
/** Identity type for PedestrianRequestFlow. Runtime: string. Compile-time: branded. */
export type PedestrianRequestFlowId = string & { readonly __brand: "PedestrianRequestFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TrafficLightControllerSystem extends MutualExclusionConstraints, YellowIntervalConstraints, PreemptionTimingConstraints, PedestrianSafetyConstraints {
  readonly controllerId: TrafficLightControllerSystemId;
  readonly minimumYellowSeconds: number;
  readonly maxPreemptionResponseSeconds: number;
  readonly currentPhaseId: string;
  readonly nsSignalState: string;
  readonly ewSignalState: string;
  readonly nsStateElapsedSeconds: number;
  readonly ewStateElapsedSeconds: number;
  readonly preemptionActive: boolean;
  readonly allRedCommandedAt: number;
  readonly pedestrianRequestPending: boolean;
  readonly pedestrianRequestApproach: string;
  readonly pedestrianWalkActive: boolean;
}

/** @stereotype <<Kind>> */
export interface Approach {
  readonly approachId: ApproachId;
  readonly direction: string;
  readonly signalState: string;
}

/** @stereotype <<Kind>> */
export interface Phase {
  readonly phaseId: PhaseId;
  readonly configuredDurationSeconds: number;
  readonly greenApproaches: ReadonlySet<Approach>;
  readonly redApproaches: ReadonlySet<Approach>;
}

/** @stereotype <<Kind>> */
export interface YellowInterval {
  readonly intervalId: YellowIntervalId;
  readonly durationSeconds: number;
  readonly approach: Approach;
}

/** @stereotype <<Kind>> */
export interface PreemptionEvent {
  readonly preemptionId: PreemptionEventId;
  readonly sensorActivatedAt: number;
  readonly allRedCommandedAt: number;
  readonly responseTimeSeconds: number;
}

/** @stereotype <<Kind>> */
export interface PedestrianRequest {
  readonly requestId: PedestrianRequestId;
  readonly approach: Approach;
  readonly walkGranted: boolean;
}

/** @stereotype <<Agent>> */
export interface RoadUser {
  readonly roadUserId: RoadUserId;
  readonly userType: string;
}

/** @stereotype <<Agent>> */
export interface Pedestrian {
  readonly pedestrianId: PedestrianId;
}

/** @stereotype <<Agent>> */
export interface EmergencyResponder {
  readonly responderId: EmergencyResponderId;
  readonly vehicleType: string;
}

/** @stereotype <<Agent>> */
export interface TrafficAuthority {
  readonly authorityId: TrafficAuthorityId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface TrafficLightVendor {
  readonly vendorId: TrafficLightVendorId;
  readonly name: string;
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraints {
}

/** @stereotype <<Category>> */
export interface YellowIntervalConstraints {
}

/** @stereotype <<Category>> */
export interface PreemptionTimingConstraints {
}

/** @stereotype <<Category>> */
export interface PedestrianSafetyConstraints {
}

/** @stereotype <<Commitment>> */
export interface MutualExclusionCommitment {
  readonly commitmentId: MutualExclusionCommitmentId;
  readonly maxSimultaneousConflictingGreens: number;
}

/** @stereotype <<Commitment>> */
export interface YellowIntervalCommitment {
  readonly commitmentId: YellowIntervalCommitmentId;
  readonly minimumYellowSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface EmergencyPreemptionCommitment {
  readonly commitmentId: EmergencyPreemptionCommitmentId;
  readonly maxPreemptionResponseSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface PedestrianWalkCommitment {
  readonly commitmentId: PedestrianWalkCommitmentId;
  readonly walkRequestHonoured: boolean;
}

/** @stereotype <<Commitment>> */
export interface SafeIntersectionControlCommitment {
  readonly commitmentId: SafeIntersectionControlCommitmentId;
  readonly safetyGuaranteed: boolean;
}

/** @stereotype <<Happening>> */
export interface NormalPhaseCycleFlow {
  readonly flowId: NormalPhaseCycleFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface GreenToRedTransitionFlow {
  readonly flowId: GreenToRedTransitionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly yellowDurationSeconds: number;
}

/** @stereotype <<Happening>> */
export interface AllRedDwellFlow {
  readonly flowId: AllRedDwellFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface EmergencyPreemptionFlow {
  readonly flowId: EmergencyPreemptionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly sensorActivatedAt: number;
  readonly allRedCommandedAt: number;
}

/** @stereotype <<Happening>> */
export interface PedestrianRequestFlow {
  readonly flowId: PedestrianRequestFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeTrafficLightControllerSystem(data: {
  controllerId: string;
  minimumYellowSeconds: number;
  maxPreemptionResponseSeconds: number;
  currentPhaseId: string;
  nsSignalState: string;
  ewSignalState: string;
  nsStateElapsedSeconds: number;
  ewStateElapsedSeconds: number;
  preemptionActive: boolean;
  allRedCommandedAt: number;
  pedestrianRequestPending: boolean;
  pedestrianRequestApproach: string;
  pedestrianWalkActive: boolean;
}): TrafficLightControllerSystem {
  return {
    controllerId: data.controllerId as TrafficLightControllerSystemId,
    minimumYellowSeconds: data.minimumYellowSeconds,
    maxPreemptionResponseSeconds: data.maxPreemptionResponseSeconds,
    currentPhaseId: data.currentPhaseId,
    nsSignalState: data.nsSignalState,
    ewSignalState: data.ewSignalState,
    nsStateElapsedSeconds: data.nsStateElapsedSeconds,
    ewStateElapsedSeconds: data.ewStateElapsedSeconds,
    preemptionActive: data.preemptionActive,
    allRedCommandedAt: data.allRedCommandedAt,
    pedestrianRequestPending: data.pedestrianRequestPending,
    pedestrianRequestApproach: data.pedestrianRequestApproach,
    pedestrianWalkActive: data.pedestrianWalkActive,
  };
}

export function makeApproach(data: {
  approachId: string;
  direction: string;
  signalState: string;
}): Approach {
  return {
    approachId: data.approachId as ApproachId,
    direction: data.direction,
    signalState: data.signalState,
  };
}

export function makePhase(data: {
  phaseId: string;
  configuredDurationSeconds: number;
  greenApproaches: ReadonlySet<Approach>;
  redApproaches: ReadonlySet<Approach>;
}): Phase {
  return {
    phaseId: data.phaseId as PhaseId,
    configuredDurationSeconds: data.configuredDurationSeconds,
    greenApproaches: data.greenApproaches,
    redApproaches: data.redApproaches,
  };
}

export function makeYellowInterval(data: {
  intervalId: string;
  durationSeconds: number;
  approach: Approach;
}): YellowInterval {
  return {
    intervalId: data.intervalId as YellowIntervalId,
    durationSeconds: data.durationSeconds,
    approach: data.approach,
  };
}

export function makePreemptionEvent(data: {
  preemptionId: string;
  sensorActivatedAt: number;
  allRedCommandedAt: number;
  responseTimeSeconds: number;
}): PreemptionEvent {
  return {
    preemptionId: data.preemptionId as PreemptionEventId,
    sensorActivatedAt: data.sensorActivatedAt,
    allRedCommandedAt: data.allRedCommandedAt,
    responseTimeSeconds: data.responseTimeSeconds,
  };
}

export function makePedestrianRequest(data: {
  requestId: string;
  approach: Approach;
  walkGranted: boolean;
}): PedestrianRequest {
  return {
    requestId: data.requestId as PedestrianRequestId,
    approach: data.approach,
    walkGranted: data.walkGranted,
  };
}

export function makeRoadUser(data: {
  roadUserId: string;
  userType: string;
}): RoadUser {
  return {
    roadUserId: data.roadUserId as RoadUserId,
    userType: data.userType,
  };
}

export function makePedestrian(data: {
  pedestrianId: string;
}): Pedestrian {
  return {
    pedestrianId: data.pedestrianId as PedestrianId,
  };
}

export function makeEmergencyResponder(data: {
  responderId: string;
  vehicleType: string;
}): EmergencyResponder {
  return {
    responderId: data.responderId as EmergencyResponderId,
    vehicleType: data.vehicleType,
  };
}

export function makeTrafficAuthority(data: {
  authorityId: string;
  jurisdiction: string;
}): TrafficAuthority {
  return {
    authorityId: data.authorityId as TrafficAuthorityId,
    jurisdiction: data.jurisdiction,
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

export function makeMutualExclusionCommitment(data: {
  commitmentId: string;
  maxSimultaneousConflictingGreens: number;
}): MutualExclusionCommitment {
  return {
    commitmentId: data.commitmentId as MutualExclusionCommitmentId,
    maxSimultaneousConflictingGreens: data.maxSimultaneousConflictingGreens,
  };
}

export function makeYellowIntervalCommitment(data: {
  commitmentId: string;
  minimumYellowSeconds: number;
}): YellowIntervalCommitment {
  return {
    commitmentId: data.commitmentId as YellowIntervalCommitmentId,
    minimumYellowSeconds: data.minimumYellowSeconds,
  };
}

export function makeEmergencyPreemptionCommitment(data: {
  commitmentId: string;
  maxPreemptionResponseSeconds: number;
}): EmergencyPreemptionCommitment {
  return {
    commitmentId: data.commitmentId as EmergencyPreemptionCommitmentId,
    maxPreemptionResponseSeconds: data.maxPreemptionResponseSeconds,
  };
}

export function makePedestrianWalkCommitment(data: {
  commitmentId: string;
  walkRequestHonoured: boolean;
}): PedestrianWalkCommitment {
  return {
    commitmentId: data.commitmentId as PedestrianWalkCommitmentId,
    walkRequestHonoured: data.walkRequestHonoured,
  };
}

export function makeSafeIntersectionControlCommitment(data: {
  commitmentId: string;
  safetyGuaranteed: boolean;
}): SafeIntersectionControlCommitment {
  return {
    commitmentId: data.commitmentId as SafeIntersectionControlCommitmentId,
    safetyGuaranteed: data.safetyGuaranteed,
  };
}

export function makeNormalPhaseCycleFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): NormalPhaseCycleFlow {
  return {
    flowId: data.flowId as NormalPhaseCycleFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeGreenToRedTransitionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  yellowDurationSeconds: number;
}): GreenToRedTransitionFlow {
  return {
    flowId: data.flowId as GreenToRedTransitionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    yellowDurationSeconds: data.yellowDurationSeconds,
  };
}

export function makeAllRedDwellFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): AllRedDwellFlow {
  return {
    flowId: data.flowId as AllRedDwellFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeEmergencyPreemptionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  sensorActivatedAt: number;
  allRedCommandedAt: number;
}): EmergencyPreemptionFlow {
  return {
    flowId: data.flowId as EmergencyPreemptionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    sensorActivatedAt: data.sensorActivatedAt,
    allRedCommandedAt: data.allRedCommandedAt,
  };
}

export function makePedestrianRequestFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): PedestrianRequestFlow {
  return {
    flowId: data.flowId as PedestrianRequestFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for TrafficLightControllerSystem. Returns empty array when valid. */
export function validateTrafficLightControllerSystem(instance: TrafficLightControllerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: self.controllerId <> null");
  }
  if (!((instance.minimumYellowSeconds >= 3))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: self.minimumYellowSeconds >= 3.0");
  }
  if (!((instance.maxPreemptionResponseSeconds <= 1))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: self.maxPreemptionResponseSeconds <= 1.0");
  }
  if (!((instance.maxPreemptionResponseSeconds > 0))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: self.maxPreemptionResponseSeconds > 0.0");
  }
  if (!((((instance.nsSignalState === "GREEN") || (instance.nsSignalState === "YELLOW")) || (instance.nsSignalState === "RED")))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: (self.nsSignalState = 'GREEN' or\n     self.nsSignalState = 'YELLOW' or\n     self.nsSignalState = 'RED')");
  }
  if (!((((instance.ewSignalState === "GREEN") || (instance.ewSignalState === "YELLOW")) || (instance.ewSignalState === "RED")))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: (self.ewSignalState = 'GREEN' or\n     self.ewSignalState = 'YELLOW' or\n     self.ewSignalState = 'RED')");
  }
  if (!(!(((instance.nsSignalState === "GREEN") && (instance.ewSignalState === "GREEN"))))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')");
  }
  if (!((!((instance.pedestrianWalkActive === true)) || ((((instance.pedestrianRequestApproach === "NS") && (instance.nsSignalState === "GREEN")) && !((instance.ewSignalState === "GREEN"))) || (((instance.pedestrianRequestApproach === "EW") && (instance.ewSignalState === "GREEN")) && !((instance.nsSignalState === "GREEN"))))))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: (self.pedestrianWalkActive = true) implies\n      (\n        (self.pedestrianRequestApproach = 'NS' and\n         self.nsSignalState = 'GREEN' and\n         not (self.ewSignalState = 'GREEN'))\n        or\n        (self.pedestrianRequestApproach = 'EW' and\n         self.ewSignalState = 'GREEN' and\n         not (self.nsSignalState = 'GREEN'))\n      )");
  }
  if (!((instance.nsStateElapsedSeconds >= 0))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: self.nsStateElapsedSeconds >= 0.0");
  }
  if (!((instance.ewStateElapsedSeconds >= 0))) {
    violations.push("[TrafficLightControllerSystem] invariant violated: self.ewStateElapsedSeconds >= 0.0");
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
  if (!((instance.signalState !== null))) {
    violations.push("[Approach] invariant violated: self.signalState <> null");
  }
  return violations;
}

/** Runtime invariant check for Phase. Returns empty array when valid. */
export function validatePhase(instance: Phase): readonly string[] {
  const violations: string[] = [];
  if (!((instance.phaseId !== null))) {
    violations.push("[Phase] invariant violated: self.phaseId <> null");
  }
  if (!((instance.configuredDurationSeconds > 0))) {
    violations.push("[Phase] invariant violated: self.configuredDurationSeconds > 0.0");
  }
  return violations;
}

/** Runtime invariant check for YellowInterval. Returns empty array when valid. */
export function validateYellowInterval(instance: YellowInterval): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intervalId !== null))) {
    violations.push("[YellowInterval] invariant violated: self.intervalId <> null");
  }
  if (!((instance.durationSeconds >= 3))) {
    violations.push("[YellowInterval] invariant violated: self.durationSeconds >= 3.0");
  }
  if (!((instance.approach !== null))) {
    violations.push("[YellowInterval] invariant violated: self.approach <> null");
  }
  return violations;
}

/** Runtime invariant check for PreemptionEvent. Returns empty array when valid. */
export function validatePreemptionEvent(instance: PreemptionEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preemptionId !== null))) {
    violations.push("[PreemptionEvent] invariant violated: self.preemptionId <> null");
  }
  if (!((instance.responseTimeSeconds >= 0))) {
    violations.push("[PreemptionEvent] invariant violated: self.responseTimeSeconds >= 0.0");
  }
  if (!((instance.responseTimeSeconds <= 1))) {
    violations.push("[PreemptionEvent] invariant violated: self.responseTimeSeconds <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequest. Returns empty array when valid. */
export function validatePedestrianRequest(instance: PedestrianRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[PedestrianRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.approach !== null))) {
    violations.push("[PedestrianRequest] invariant violated: self.approach <> null");
  }
  return violations;
}

/** Runtime invariant check for RoadUser. Returns empty array when valid. */
export function validateRoadUser(instance: RoadUser): readonly string[] {
  const violations: string[] = [];
  if (!((instance.roadUserId !== null))) {
    violations.push("[RoadUser] invariant violated: self.roadUserId <> null");
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

/** Runtime invariant check for EmergencyResponder. Returns empty array when valid. */
export function validateEmergencyResponder(instance: EmergencyResponder): readonly string[] {
  const violations: string[] = [];
  if (!((instance.responderId !== null))) {
    violations.push("[EmergencyResponder] invariant violated: self.responderId <> null");
  }
  return violations;
}

/** Runtime invariant check for TrafficAuthority. Returns empty array when valid. */
export function validateTrafficAuthority(instance: TrafficAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[TrafficAuthority] invariant violated: self.authorityId <> null");
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

/** Runtime invariant check for MutualExclusionConstraints. Returns empty array when valid. */
export function validateMutualExclusionConstraints(instance: MutualExclusionConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MutualExclusionConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for YellowIntervalConstraints. Returns empty array when valid. */
export function validateYellowIntervalConstraints(instance: YellowIntervalConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[YellowIntervalConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PreemptionTimingConstraints. Returns empty array when valid. */
export function validatePreemptionTimingConstraints(instance: PreemptionTimingConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PreemptionTimingConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PedestrianSafetyConstraints. Returns empty array when valid. */
export function validatePedestrianSafetyConstraints(instance: PedestrianSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PedestrianSafetyConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for NormalPhaseCycleFlow. Returns empty array when valid. */
export function validateNormalPhaseCycleFlow(instance: NormalPhaseCycleFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for GreenToRedTransitionFlow. Returns empty array when valid. */
export function validateGreenToRedTransitionFlow(instance: GreenToRedTransitionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[GreenToRedTransitionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.yellowDurationSeconds >= 3))) {
    violations.push("[GreenToRedTransitionFlow] invariant violated: self.yellowDurationSeconds >= 3.0");
  }
  return violations;
}

/** Runtime invariant check for AllRedDwellFlow. Returns empty array when valid. */
export function validateAllRedDwellFlow(instance: AllRedDwellFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AllRedDwellFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for EmergencyPreemptionFlow. Returns empty array when valid. */
export function validateEmergencyPreemptionFlow(instance: EmergencyPreemptionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.allRedCommandedAt >= instance.sensorActivatedAt))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.allRedCommandedAt >= self.sensorActivatedAt");
  }
  if (!(((instance.allRedCommandedAt - instance.sensorActivatedAt) <= 1))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: (self.allRedCommandedAt - self.sensorActivatedAt) <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequestFlow. Returns empty array when valid. */
export function validatePedestrianRequestFlow(instance: PedestrianRequestFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PedestrianRequestFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for TrafficLightControllerSystem.startPhase. User supplies this. */
export type TrafficLightControllerSystemStartPhaseImpl = (self: TrafficLightControllerSystem, phaseId: string, greenAxis: string) => { self: TrafficLightControllerSystem; modified: { currentPhaseId: unknown; nsSignalState: unknown; ewSignalState: unknown; nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.startPhase. */
export function wrapTrafficLightControllerSystemStartPhase(impl: TrafficLightControllerSystemStartPhaseImpl): (self: TrafficLightControllerSystem, phaseId: string, greenAxis: string) => TrafficLightControllerSystem {
  return (self, phaseId, greenAxis) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: self.preemptionActive = false");
    }
    if (!((phaseId !== null))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: phaseId <> null");
    }
    if (!(((greenAxis === "NS") || (greenAxis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: (greenAxis = 'NS' or greenAxis = 'EW')");
    }
    if (!((!((greenAxis === "NS")) || (self.ewSignalState === "RED")))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')");
    }
    if (!((!((greenAxis === "EW")) || (self.nsSignalState === "RED")))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, phaseId, greenAxis);
      const postViolations: string[] = [];
      if (!((__result.self.currentPhaseId === phaseId))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: self.currentPhaseId = phaseId");
      }
      if (!((!((greenAxis === "NS")) || (__result.self.nsSignalState === "GREEN")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')");
      }
      if (!((!((greenAxis === "NS")) || (__result.self.ewSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')");
      }
      if (!((!((greenAxis === "EW")) || (__result.self.ewSignalState === "GREEN")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')");
      }
      if (!((!((greenAxis === "EW")) || (__result.self.nsSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')");
      }
      if (!(!(((__result.self.nsSignalState === "GREEN") && (__result.self.ewSignalState === "GREEN"))))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')");
      }
      if (!((__result.self.nsStateElapsedSeconds === 0))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: self.nsStateElapsedSeconds = 0.0");
      }
      if (!((__result.self.ewStateElapsedSeconds === 0))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: self.ewStateElapsedSeconds = 0.0");
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

/** Impl signature for TrafficLightControllerSystem.startPhase (async). User supplies this. */
export type TrafficLightControllerSystemStartPhaseAsyncImpl = (self: TrafficLightControllerSystem, phaseId: string, greenAxis: string) => Promise<{ self: TrafficLightControllerSystem; modified: { currentPhaseId: unknown; nsSignalState: unknown; ewSignalState: unknown; nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.startPhase (async). */
export function wrapTrafficLightControllerSystemStartPhaseAsync(impl: TrafficLightControllerSystemStartPhaseAsyncImpl): (self: TrafficLightControllerSystem, phaseId: string, greenAxis: string) => Promise<TrafficLightControllerSystem> {
  return async (self, phaseId, greenAxis) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: self.preemptionActive = false");
    }
    if (!((phaseId !== null))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: phaseId <> null");
    }
    if (!(((greenAxis === "NS") || (greenAxis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: (greenAxis = 'NS' or greenAxis = 'EW')");
    }
    if (!((!((greenAxis === "NS")) || (self.ewSignalState === "RED")))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')");
    }
    if (!((!((greenAxis === "EW")) || (self.nsSignalState === "RED")))) {
      preViolations.push("[TrafficLightControllerSystem.startPhase] pre violated: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, phaseId, greenAxis);
      const postViolations: string[] = [];
      if (!((__result.self.currentPhaseId === phaseId))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: self.currentPhaseId = phaseId");
      }
      if (!((!((greenAxis === "NS")) || (__result.self.nsSignalState === "GREEN")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')");
      }
      if (!((!((greenAxis === "NS")) || (__result.self.ewSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')");
      }
      if (!((!((greenAxis === "EW")) || (__result.self.ewSignalState === "GREEN")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')");
      }
      if (!((!((greenAxis === "EW")) || (__result.self.nsSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')");
      }
      if (!(!(((__result.self.nsSignalState === "GREEN") && (__result.self.ewSignalState === "GREEN"))))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')");
      }
      if (!((__result.self.nsStateElapsedSeconds === 0))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: self.nsStateElapsedSeconds = 0.0");
      }
      if (!((__result.self.ewStateElapsedSeconds === 0))) {
        postViolations.push("[TrafficLightControllerSystem.startPhase] post violated: self.ewStateElapsedSeconds = 0.0");
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

/** Impl signature for TrafficLightControllerSystem.beginYellow. User supplies this. */
export type TrafficLightControllerSystemBeginYellowImpl = (self: TrafficLightControllerSystem, axis: string) => { self: TrafficLightControllerSystem; modified: { nsSignalState: unknown; ewSignalState: unknown; nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.beginYellow. */
export function wrapTrafficLightControllerSystemBeginYellow(impl: TrafficLightControllerSystemBeginYellowImpl): (self: TrafficLightControllerSystem, axis: string) => TrafficLightControllerSystem {
  return (self, axis) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: self.preemptionActive = false");
    }
    if (!(((axis === "NS") || (axis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: (axis = 'NS' or axis = 'EW')");
    }
    if (!((!((axis === "NS")) || (self.nsSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: (axis = 'NS') implies (self.nsSignalState = 'GREEN')");
    }
    if (!((!((axis === "EW")) || (self.ewSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: (axis = 'EW') implies (self.ewSignalState = 'GREEN')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, axis);
      const postViolations: string[] = [];
      if (!((!((axis === "NS")) || (__result.self.nsSignalState === "YELLOW")))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')");
      }
      if (!((!((axis === "EW")) || (__result.self.ewSignalState === "YELLOW")))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')");
      }
      if (!((!((axis === "NS")) || (__result.self.nsStateElapsedSeconds === 0)))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'NS') implies (self.nsStateElapsedSeconds = 0.0)");
      }
      if (!((!((axis === "EW")) || (__result.self.ewStateElapsedSeconds === 0)))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'EW') implies (self.ewStateElapsedSeconds = 0.0)");
      }
      if (!((__result.self.minimumYellowSeconds >= 3))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: self.minimumYellowSeconds >= 3.0");
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

/** Impl signature for TrafficLightControllerSystem.beginYellow (async). User supplies this. */
export type TrafficLightControllerSystemBeginYellowAsyncImpl = (self: TrafficLightControllerSystem, axis: string) => Promise<{ self: TrafficLightControllerSystem; modified: { nsSignalState: unknown; ewSignalState: unknown; nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.beginYellow (async). */
export function wrapTrafficLightControllerSystemBeginYellowAsync(impl: TrafficLightControllerSystemBeginYellowAsyncImpl): (self: TrafficLightControllerSystem, axis: string) => Promise<TrafficLightControllerSystem> {
  return async (self, axis) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: self.preemptionActive = false");
    }
    if (!(((axis === "NS") || (axis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: (axis = 'NS' or axis = 'EW')");
    }
    if (!((!((axis === "NS")) || (self.nsSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: (axis = 'NS') implies (self.nsSignalState = 'GREEN')");
    }
    if (!((!((axis === "EW")) || (self.ewSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.beginYellow] pre violated: (axis = 'EW') implies (self.ewSignalState = 'GREEN')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, axis);
      const postViolations: string[] = [];
      if (!((!((axis === "NS")) || (__result.self.nsSignalState === "YELLOW")))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')");
      }
      if (!((!((axis === "EW")) || (__result.self.ewSignalState === "YELLOW")))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')");
      }
      if (!((!((axis === "NS")) || (__result.self.nsStateElapsedSeconds === 0)))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'NS') implies (self.nsStateElapsedSeconds = 0.0)");
      }
      if (!((!((axis === "EW")) || (__result.self.ewStateElapsedSeconds === 0)))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: (axis = 'EW') implies (self.ewStateElapsedSeconds = 0.0)");
      }
      if (!((__result.self.minimumYellowSeconds >= 3))) {
        postViolations.push("[TrafficLightControllerSystem.beginYellow] post violated: self.minimumYellowSeconds >= 3.0");
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

/** Impl signature for TrafficLightControllerSystem.endYellowGoRed. User supplies this. */
export type TrafficLightControllerSystemEndYellowGoRedImpl = (self: TrafficLightControllerSystem, axis: string, elapsedYellowSeconds: number) => { self: TrafficLightControllerSystem; modified: { nsSignalState: unknown; ewSignalState: unknown; nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.endYellowGoRed. */
export function wrapTrafficLightControllerSystemEndYellowGoRed(impl: TrafficLightControllerSystemEndYellowGoRedImpl): (self: TrafficLightControllerSystem, axis: string, elapsedYellowSeconds: number) => TrafficLightControllerSystem {
  return (self, axis, elapsedYellowSeconds) => {
    const preViolations: string[] = [];
    if (!(((axis === "NS") || (axis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: (axis = 'NS' or axis = 'EW')");
    }
    if (!((!((axis === "NS")) || (self.nsSignalState === "YELLOW")))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')");
    }
    if (!((!((axis === "EW")) || (self.ewSignalState === "YELLOW")))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')");
    }
    if (!((elapsedYellowSeconds >= self.minimumYellowSeconds))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: elapsedYellowSeconds >= self.minimumYellowSeconds");
    }
    if (!((self.minimumYellowSeconds >= 3))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: self.minimumYellowSeconds >= 3.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, axis, elapsedYellowSeconds);
      const postViolations: string[] = [];
      if (!((!((axis === "NS")) || (__result.self.nsSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'NS') implies (self.nsSignalState = 'RED')");
      }
      if (!((!((axis === "EW")) || (__result.self.ewSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'EW') implies (self.ewSignalState = 'RED')");
      }
      if (!((!((axis === "NS")) || (__result.self.nsStateElapsedSeconds === elapsedYellowSeconds)))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'NS') implies (self.nsStateElapsedSeconds = elapsedYellowSeconds)");
      }
      if (!((!((axis === "EW")) || (__result.self.ewStateElapsedSeconds === elapsedYellowSeconds)))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'EW') implies (self.ewStateElapsedSeconds = elapsedYellowSeconds)");
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

/** Impl signature for TrafficLightControllerSystem.endYellowGoRed (async). User supplies this. */
export type TrafficLightControllerSystemEndYellowGoRedAsyncImpl = (self: TrafficLightControllerSystem, axis: string, elapsedYellowSeconds: number) => Promise<{ self: TrafficLightControllerSystem; modified: { nsSignalState: unknown; ewSignalState: unknown; nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.endYellowGoRed (async). */
export function wrapTrafficLightControllerSystemEndYellowGoRedAsync(impl: TrafficLightControllerSystemEndYellowGoRedAsyncImpl): (self: TrafficLightControllerSystem, axis: string, elapsedYellowSeconds: number) => Promise<TrafficLightControllerSystem> {
  return async (self, axis, elapsedYellowSeconds) => {
    const preViolations: string[] = [];
    if (!(((axis === "NS") || (axis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: (axis = 'NS' or axis = 'EW')");
    }
    if (!((!((axis === "NS")) || (self.nsSignalState === "YELLOW")))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')");
    }
    if (!((!((axis === "EW")) || (self.ewSignalState === "YELLOW")))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')");
    }
    if (!((elapsedYellowSeconds >= self.minimumYellowSeconds))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: elapsedYellowSeconds >= self.minimumYellowSeconds");
    }
    if (!((self.minimumYellowSeconds >= 3))) {
      preViolations.push("[TrafficLightControllerSystem.endYellowGoRed] pre violated: self.minimumYellowSeconds >= 3.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, axis, elapsedYellowSeconds);
      const postViolations: string[] = [];
      if (!((!((axis === "NS")) || (__result.self.nsSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'NS') implies (self.nsSignalState = 'RED')");
      }
      if (!((!((axis === "EW")) || (__result.self.ewSignalState === "RED")))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'EW') implies (self.ewSignalState = 'RED')");
      }
      if (!((!((axis === "NS")) || (__result.self.nsStateElapsedSeconds === elapsedYellowSeconds)))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'NS') implies (self.nsStateElapsedSeconds = elapsedYellowSeconds)");
      }
      if (!((!((axis === "EW")) || (__result.self.ewStateElapsedSeconds === elapsedYellowSeconds)))) {
        postViolations.push("[TrafficLightControllerSystem.endYellowGoRed] post violated: (axis = 'EW') implies (self.ewStateElapsedSeconds = elapsedYellowSeconds)");
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

/** Impl signature for TrafficLightControllerSystem.commandAllRedPreemption. User supplies this. */
export type TrafficLightControllerSystemCommandAllRedPreemptionImpl = (self: TrafficLightControllerSystem, responseTimeSeconds: number) => { self: TrafficLightControllerSystem; modified: { nsSignalState: unknown; ewSignalState: unknown; preemptionActive: unknown; pedestrianWalkActive: unknown; allRedCommandedAt: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.commandAllRedPreemption. */
export function wrapTrafficLightControllerSystemCommandAllRedPreemption(impl: TrafficLightControllerSystemCommandAllRedPreemptionImpl): (self: TrafficLightControllerSystem, responseTimeSeconds: number) => TrafficLightControllerSystem {
  return (self, responseTimeSeconds) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] pre violated: self.preemptionActive = false");
    }
    if (!((responseTimeSeconds >= 0))) {
      preViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] pre violated: responseTimeSeconds >= 0.0");
    }
    if (!((responseTimeSeconds <= self.maxPreemptionResponseSeconds))) {
      preViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] pre violated: responseTimeSeconds <= self.maxPreemptionResponseSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, responseTimeSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.nsSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.nsSignalState = 'RED'");
      }
      if (!((__result.self.ewSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.ewSignalState = 'RED'");
      }
      if (!((__result.self.preemptionActive === true))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.preemptionActive = true");
      }
      if (!((__result.self.pedestrianWalkActive === false))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.pedestrianWalkActive = false");
      }
      if (!((responseTimeSeconds <= __result.self.maxPreemptionResponseSeconds))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: responseTimeSeconds <= self.maxPreemptionResponseSeconds");
      }
      if (!((__result.self.maxPreemptionResponseSeconds <= 1))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.maxPreemptionResponseSeconds <= 1.0");
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

/** Impl signature for TrafficLightControllerSystem.commandAllRedPreemption (async). User supplies this. */
export type TrafficLightControllerSystemCommandAllRedPreemptionAsyncImpl = (self: TrafficLightControllerSystem, responseTimeSeconds: number) => Promise<{ self: TrafficLightControllerSystem; modified: { nsSignalState: unknown; ewSignalState: unknown; preemptionActive: unknown; pedestrianWalkActive: unknown; allRedCommandedAt: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.commandAllRedPreemption (async). */
export function wrapTrafficLightControllerSystemCommandAllRedPreemptionAsync(impl: TrafficLightControllerSystemCommandAllRedPreemptionAsyncImpl): (self: TrafficLightControllerSystem, responseTimeSeconds: number) => Promise<TrafficLightControllerSystem> {
  return async (self, responseTimeSeconds) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] pre violated: self.preemptionActive = false");
    }
    if (!((responseTimeSeconds >= 0))) {
      preViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] pre violated: responseTimeSeconds >= 0.0");
    }
    if (!((responseTimeSeconds <= self.maxPreemptionResponseSeconds))) {
      preViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] pre violated: responseTimeSeconds <= self.maxPreemptionResponseSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, responseTimeSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.nsSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.nsSignalState = 'RED'");
      }
      if (!((__result.self.ewSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.ewSignalState = 'RED'");
      }
      if (!((__result.self.preemptionActive === true))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.preemptionActive = true");
      }
      if (!((__result.self.pedestrianWalkActive === false))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.pedestrianWalkActive = false");
      }
      if (!((responseTimeSeconds <= __result.self.maxPreemptionResponseSeconds))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: responseTimeSeconds <= self.maxPreemptionResponseSeconds");
      }
      if (!((__result.self.maxPreemptionResponseSeconds <= 1))) {
        postViolations.push("[TrafficLightControllerSystem.commandAllRedPreemption] post violated: self.maxPreemptionResponseSeconds <= 1.0");
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

/** Impl signature for TrafficLightControllerSystem.clearPreemption. User supplies this. */
export type TrafficLightControllerSystemClearPreemptionImpl = (self: TrafficLightControllerSystem) => { self: TrafficLightControllerSystem; modified: { preemptionActive: unknown; nsSignalState: unknown; ewSignalState: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.clearPreemption. */
export function wrapTrafficLightControllerSystemClearPreemption(impl: TrafficLightControllerSystemClearPreemptionImpl): (self: TrafficLightControllerSystem) => TrafficLightControllerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === true))) {
      preViolations.push("[TrafficLightControllerSystem.clearPreemption] pre violated: self.preemptionActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightControllerSystem.clearPreemption] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.nsSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.clearPreemption] post violated: self.nsSignalState = 'RED'");
      }
      if (!((__result.self.ewSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.clearPreemption] post violated: self.ewSignalState = 'RED'");
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

/** Impl signature for TrafficLightControllerSystem.clearPreemption (async). User supplies this. */
export type TrafficLightControllerSystemClearPreemptionAsyncImpl = (self: TrafficLightControllerSystem) => Promise<{ self: TrafficLightControllerSystem; modified: { preemptionActive: unknown; nsSignalState: unknown; ewSignalState: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.clearPreemption (async). */
export function wrapTrafficLightControllerSystemClearPreemptionAsync(impl: TrafficLightControllerSystemClearPreemptionAsyncImpl): (self: TrafficLightControllerSystem) => Promise<TrafficLightControllerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.preemptionActive === true))) {
      preViolations.push("[TrafficLightControllerSystem.clearPreemption] pre violated: self.preemptionActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.preemptionActive === false))) {
        postViolations.push("[TrafficLightControllerSystem.clearPreemption] post violated: self.preemptionActive = false");
      }
      if (!((__result.self.nsSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.clearPreemption] post violated: self.nsSignalState = 'RED'");
      }
      if (!((__result.self.ewSignalState === "RED"))) {
        postViolations.push("[TrafficLightControllerSystem.clearPreemption] post violated: self.ewSignalState = 'RED'");
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

/** Impl signature for TrafficLightControllerSystem.registerPedestrianRequest. User supplies this. */
export type TrafficLightControllerSystemRegisterPedestrianRequestImpl = (self: TrafficLightControllerSystem, approachAxis: string) => { self: TrafficLightControllerSystem; modified: { pedestrianRequestPending: unknown; pedestrianRequestApproach: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.registerPedestrianRequest. */
export function wrapTrafficLightControllerSystemRegisterPedestrianRequest(impl: TrafficLightControllerSystemRegisterPedestrianRequestImpl): (self: TrafficLightControllerSystem, approachAxis: string) => TrafficLightControllerSystem {
  return (self, approachAxis) => {
    const preViolations: string[] = [];
    if (!(((approachAxis === "NS") || (approachAxis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] pre violated: (approachAxis = 'NS' or approachAxis = 'EW')");
    }
    if (!((self.pedestrianRequestPending === false))) {
      preViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] pre violated: self.pedestrianRequestPending = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, approachAxis);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequestPending === true))) {
        postViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] post violated: self.pedestrianRequestPending = true");
      }
      if (!((__result.self.pedestrianRequestApproach === approachAxis))) {
        postViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] post violated: self.pedestrianRequestApproach = approachAxis");
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

/** Impl signature for TrafficLightControllerSystem.registerPedestrianRequest (async). User supplies this. */
export type TrafficLightControllerSystemRegisterPedestrianRequestAsyncImpl = (self: TrafficLightControllerSystem, approachAxis: string) => Promise<{ self: TrafficLightControllerSystem; modified: { pedestrianRequestPending: unknown; pedestrianRequestApproach: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.registerPedestrianRequest (async). */
export function wrapTrafficLightControllerSystemRegisterPedestrianRequestAsync(impl: TrafficLightControllerSystemRegisterPedestrianRequestAsyncImpl): (self: TrafficLightControllerSystem, approachAxis: string) => Promise<TrafficLightControllerSystem> {
  return async (self, approachAxis) => {
    const preViolations: string[] = [];
    if (!(((approachAxis === "NS") || (approachAxis === "EW")))) {
      preViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] pre violated: (approachAxis = 'NS' or approachAxis = 'EW')");
    }
    if (!((self.pedestrianRequestPending === false))) {
      preViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] pre violated: self.pedestrianRequestPending = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, approachAxis);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianRequestPending === true))) {
        postViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] post violated: self.pedestrianRequestPending = true");
      }
      if (!((__result.self.pedestrianRequestApproach === approachAxis))) {
        postViolations.push("[TrafficLightControllerSystem.registerPedestrianRequest] post violated: self.pedestrianRequestApproach = approachAxis");
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

/** Impl signature for TrafficLightControllerSystem.activateWalk. User supplies this. */
export type TrafficLightControllerSystemActivateWalkImpl = (self: TrafficLightControllerSystem) => { self: TrafficLightControllerSystem; modified: { pedestrianWalkActive: unknown; pedestrianRequestPending: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.activateWalk. */
export function wrapTrafficLightControllerSystemActivateWalk(impl: TrafficLightControllerSystemActivateWalkImpl): (self: TrafficLightControllerSystem) => TrafficLightControllerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.pedestrianRequestPending === true))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: self.pedestrianRequestPending = true");
    }
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: self.preemptionActive = false");
    }
    if (!((!((self.pedestrianRequestApproach === "NS")) || (self.nsSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'NS') implies (self.nsSignalState = 'GREEN')");
    }
    if (!((!((self.pedestrianRequestApproach === "EW")) || (self.ewSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'EW') implies (self.ewSignalState = 'GREEN')");
    }
    if (!((!((self.pedestrianRequestApproach === "NS")) || !((self.ewSignalState === "GREEN"))))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'NS') implies (not (self.ewSignalState = 'GREEN'))");
    }
    if (!((!((self.pedestrianRequestApproach === "EW")) || !((self.nsSignalState === "GREEN"))))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'EW') implies (not (self.nsSignalState = 'GREEN'))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianWalkActive === true))) {
        postViolations.push("[TrafficLightControllerSystem.activateWalk] post violated: self.pedestrianWalkActive = true");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[TrafficLightControllerSystem.activateWalk] post violated: self.pedestrianRequestPending = false");
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

/** Impl signature for TrafficLightControllerSystem.activateWalk (async). User supplies this. */
export type TrafficLightControllerSystemActivateWalkAsyncImpl = (self: TrafficLightControllerSystem) => Promise<{ self: TrafficLightControllerSystem; modified: { pedestrianWalkActive: unknown; pedestrianRequestPending: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.activateWalk (async). */
export function wrapTrafficLightControllerSystemActivateWalkAsync(impl: TrafficLightControllerSystemActivateWalkAsyncImpl): (self: TrafficLightControllerSystem) => Promise<TrafficLightControllerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.pedestrianRequestPending === true))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: self.pedestrianRequestPending = true");
    }
    if (!((self.preemptionActive === false))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: self.preemptionActive = false");
    }
    if (!((!((self.pedestrianRequestApproach === "NS")) || (self.nsSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'NS') implies (self.nsSignalState = 'GREEN')");
    }
    if (!((!((self.pedestrianRequestApproach === "EW")) || (self.ewSignalState === "GREEN")))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'EW') implies (self.ewSignalState = 'GREEN')");
    }
    if (!((!((self.pedestrianRequestApproach === "NS")) || !((self.ewSignalState === "GREEN"))))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'NS') implies (not (self.ewSignalState = 'GREEN'))");
    }
    if (!((!((self.pedestrianRequestApproach === "EW")) || !((self.nsSignalState === "GREEN"))))) {
      preViolations.push("[TrafficLightControllerSystem.activateWalk] pre violated: (self.pedestrianRequestApproach = 'EW') implies (not (self.nsSignalState = 'GREEN'))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianWalkActive === true))) {
        postViolations.push("[TrafficLightControllerSystem.activateWalk] post violated: self.pedestrianWalkActive = true");
      }
      if (!((__result.self.pedestrianRequestPending === false))) {
        postViolations.push("[TrafficLightControllerSystem.activateWalk] post violated: self.pedestrianRequestPending = false");
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

/** Impl signature for TrafficLightControllerSystem.deactivateWalk. User supplies this. */
export type TrafficLightControllerSystemDeactivateWalkImpl = (self: TrafficLightControllerSystem) => { self: TrafficLightControllerSystem; modified: { pedestrianWalkActive: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.deactivateWalk. */
export function wrapTrafficLightControllerSystemDeactivateWalk(impl: TrafficLightControllerSystemDeactivateWalkImpl): (self: TrafficLightControllerSystem) => TrafficLightControllerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.pedestrianWalkActive === true))) {
      preViolations.push("[TrafficLightControllerSystem.deactivateWalk] pre violated: self.pedestrianWalkActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianWalkActive === false))) {
        postViolations.push("[TrafficLightControllerSystem.deactivateWalk] post violated: self.pedestrianWalkActive = false");
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

/** Impl signature for TrafficLightControllerSystem.deactivateWalk (async). User supplies this. */
export type TrafficLightControllerSystemDeactivateWalkAsyncImpl = (self: TrafficLightControllerSystem) => Promise<{ self: TrafficLightControllerSystem; modified: { pedestrianWalkActive: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.deactivateWalk (async). */
export function wrapTrafficLightControllerSystemDeactivateWalkAsync(impl: TrafficLightControllerSystemDeactivateWalkAsyncImpl): (self: TrafficLightControllerSystem) => Promise<TrafficLightControllerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.pedestrianWalkActive === true))) {
      preViolations.push("[TrafficLightControllerSystem.deactivateWalk] pre violated: self.pedestrianWalkActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.pedestrianWalkActive === false))) {
        postViolations.push("[TrafficLightControllerSystem.deactivateWalk] post violated: self.pedestrianWalkActive = false");
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

/** Impl signature for TrafficLightControllerSystem.clockTick. User supplies this. */
export type TrafficLightControllerSystemClockTickImpl = (self: TrafficLightControllerSystem, deltaNs: number, deltaEw: number) => { self: TrafficLightControllerSystem; modified: { nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } };

/** Contract-checking wrapper for TrafficLightControllerSystem.clockTick. */
export function wrapTrafficLightControllerSystemClockTick(impl: TrafficLightControllerSystemClockTickImpl): (self: TrafficLightControllerSystem, deltaNs: number, deltaEw: number) => TrafficLightControllerSystem {
  return (self, deltaNs, deltaEw) => {
    const preViolations: string[] = [];
    if (!((deltaNs >= 0))) {
      preViolations.push("[TrafficLightControllerSystem.clockTick] pre violated: deltaNs >= 0.0");
    }
    if (!((deltaEw >= 0))) {
      preViolations.push("[TrafficLightControllerSystem.clockTick] pre violated: deltaEw >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.nsStateElapsedSeconds": self.nsStateElapsedSeconds,
      "self.ewStateElapsedSeconds": self.ewStateElapsedSeconds,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, deltaNs, deltaEw);
      const postViolations: string[] = [];
      if (!((__result.self.nsStateElapsedSeconds === (__pre["self.nsStateElapsedSeconds"] + deltaNs)))) {
        postViolations.push("[TrafficLightControllerSystem.clockTick] post violated: self.nsStateElapsedSeconds = self.nsStateElapsedSeconds@pre + deltaNs");
      }
      if (!((__result.self.ewStateElapsedSeconds === (__pre["self.ewStateElapsedSeconds"] + deltaEw)))) {
        postViolations.push("[TrafficLightControllerSystem.clockTick] post violated: self.ewStateElapsedSeconds = self.ewStateElapsedSeconds@pre + deltaEw");
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

/** Impl signature for TrafficLightControllerSystem.clockTick (async). User supplies this. */
export type TrafficLightControllerSystemClockTickAsyncImpl = (self: TrafficLightControllerSystem, deltaNs: number, deltaEw: number) => Promise<{ self: TrafficLightControllerSystem; modified: { nsStateElapsedSeconds: unknown; ewStateElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for TrafficLightControllerSystem.clockTick (async). */
export function wrapTrafficLightControllerSystemClockTickAsync(impl: TrafficLightControllerSystemClockTickAsyncImpl): (self: TrafficLightControllerSystem, deltaNs: number, deltaEw: number) => Promise<TrafficLightControllerSystem> {
  return async (self, deltaNs, deltaEw) => {
    const preViolations: string[] = [];
    if (!((deltaNs >= 0))) {
      preViolations.push("[TrafficLightControllerSystem.clockTick] pre violated: deltaNs >= 0.0");
    }
    if (!((deltaEw >= 0))) {
      preViolations.push("[TrafficLightControllerSystem.clockTick] pre violated: deltaEw >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.nsStateElapsedSeconds": self.nsStateElapsedSeconds,
      "self.ewStateElapsedSeconds": self.ewStateElapsedSeconds,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, deltaNs, deltaEw);
      const postViolations: string[] = [];
      if (!((__result.self.nsStateElapsedSeconds === (__pre["self.nsStateElapsedSeconds"] + deltaNs)))) {
        postViolations.push("[TrafficLightControllerSystem.clockTick] post violated: self.nsStateElapsedSeconds = self.nsStateElapsedSeconds@pre + deltaNs");
      }
      if (!((__result.self.ewStateElapsedSeconds === (__pre["self.ewStateElapsedSeconds"] + deltaEw)))) {
        postViolations.push("[TrafficLightControllerSystem.clockTick] post violated: self.ewStateElapsedSeconds = self.ewStateElapsedSeconds@pre + deltaEw");
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

/** Lifecycle registry for PedestrianWalkCommitment commitments. */
export class PedestrianWalkCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PedestrianWalkCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PedestrianWalkCommitment — the typed wrapper guarantees that since
    // `register` only accepts PedestrianWalkCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PedestrianWalkCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PedestrianWalkCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PedestrianWalkCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PedestrianWalkCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PedestrianWalkCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PedestrianWalkCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SafeIntersectionControlCommitment commitments. */
export class SafeIntersectionControlCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SafeIntersectionControlCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SafeIntersectionControlCommitment — the typed wrapper guarantees that since
    // `register` only accepts SafeIntersectionControlCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SafeIntersectionControlCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SafeIntersectionControlCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SafeIntersectionControlCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SafeIntersectionControlCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SafeIntersectionControlCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SafeIntersectionControlCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

