// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for MatchReportingFlowDesign. Runtime: string. Compile-time: branded. */
export type MatchReportingFlowDesignId = string & { readonly __brand: "MatchReportingFlowDesignId" };
/** Identity type for MatchScorer. Runtime: string. Compile-time: branded. */
export type MatchScorerId = string & { readonly __brand: "MatchScorerId" };
/** Identity type for PlayerTracker. Runtime: string. Compile-time: branded. */
export type PlayerTrackerId = string & { readonly __brand: "PlayerTrackerId" };
/** Identity type for BracketManager. Runtime: string. Compile-time: branded. */
export type BracketManagerId = string & { readonly __brand: "BracketManagerId" };
/** Identity type for MatchResultChannel. Runtime: string. Compile-time: branded. */
export type MatchResultChannelId = string & { readonly __brand: "MatchResultChannelId" };
/** Identity type for Arbiter. Runtime: string. Compile-time: branded. */
export type ArbiterId = string & { readonly __brand: "ArbiterId" };
/** Identity type for Player. Runtime: string. Compile-time: branded. */
export type PlayerId = string & { readonly __brand: "PlayerId" };
/** Identity type for TournamentOrganizer. Runtime: string. Compile-time: branded. */
export type TournamentOrganizerId = string & { readonly __brand: "TournamentOrganizerId" };
/** Identity type for Spectator. Runtime: string. Compile-time: branded. */
export type SpectatorId = string & { readonly __brand: "SpectatorId" };
/** Identity type for TournamentVendor. Runtime: string. Compile-time: branded. */
export type TournamentVendorId = string & { readonly __brand: "TournamentVendorId" };
/** Identity type for Match. Runtime: string. Compile-time: branded. */
export type MatchId = string & { readonly __brand: "MatchId" };
/** Identity type for BracketSlot. Runtime: string. Compile-time: branded. */
export type BracketSlotId = string & { readonly __brand: "BracketSlotId" };
/** Identity type for ValidScoresCommitment. Runtime: string. Compile-time: branded. */
export type ValidScoresCommitmentId = string & { readonly __brand: "ValidScoresCommitmentId" };
/** Identity type for SingleEliminationCommitment. Runtime: string. Compile-time: branded. */
export type SingleEliminationCommitmentId = string & { readonly __brand: "SingleEliminationCommitmentId" };
/** Identity type for CorrectAdvancementCommitment. Runtime: string. Compile-time: branded. */
export type CorrectAdvancementCommitmentId = string & { readonly __brand: "CorrectAdvancementCommitmentId" };
/** Identity type for ParentGatingCommitment. Runtime: string. Compile-time: branded. */
export type ParentGatingCommitmentId = string & { readonly __brand: "ParentGatingCommitmentId" };
/** Identity type for MatchReportingFlow. Runtime: string. Compile-time: branded. */
export type MatchReportingFlowId = string & { readonly __brand: "MatchReportingFlowId" };
/** Identity type for BracketProgressionFlow. Runtime: string. Compile-time: branded. */
export type BracketProgressionFlowId = string & { readonly __brand: "BracketProgressionFlowId" };
/** Identity type for TournamentBracketSystem. Runtime: string. Compile-time: branded. */
export type TournamentBracketSystemId = string & { readonly __brand: "TournamentBracketSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Happening>> */
export interface MatchReportingFlowDesign {
  readonly flowId: MatchReportingFlowDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface MatchScorer {
  readonly scorerId: MatchScorerId;
  readonly targetScore: number;
  readonly winnerScore: number;
  readonly loserScore: number;
  readonly matchDecided: boolean;
  readonly leftChildDecided: boolean;
  readonly rightChildDecided: boolean;
  readonly matchCount: number;
}

/** @stereotype <<Kind>> */
export interface PlayerTracker {
  readonly trackerId: PlayerTrackerId;
  readonly playerLossCount: number;
  readonly isEliminated: boolean;
  readonly playersEliminatedCount: number;
}

/** @stereotype <<Kind>> */
export interface BracketManager {
  readonly managerId: BracketManagerId;
  readonly parentSlotFilled: boolean;
  readonly parentSlotOccupiedCount: number;
  readonly isPlayable: boolean;
  readonly childrenResolved: boolean;
}

/** @stereotype <<Role>> */
export interface ScorerEndpoint {
  readonly scorerId: string;
  readonly matchDecided: boolean;
  readonly winnerScore: number;
  readonly loserScore: number;
  readonly leftChildDecided: boolean;
  readonly rightChildDecided: boolean;
}

/** @stereotype <<Role>> */
export interface TrackerEndpoint {
  readonly trackerId: string;
  readonly playerLossCount: number;
  readonly isEliminated: boolean;
}

/** @stereotype <<Role>> */
export interface ManagerEndpoint {
  readonly managerId: string;
  readonly parentSlotFilled: boolean;
  readonly parentSlotOccupiedCount: number;
  readonly isPlayable: boolean;
  readonly childrenResolved: boolean;
}

/** @stereotype <<Relator>> */
export interface MatchResultChannel {
  readonly channelId: MatchResultChannelId;
  readonly scorerRef: ScorerEndpoint;
  readonly trackerRef: TrackerEndpoint;
  readonly managerRef: ManagerEndpoint;
  readonly relayedWinnerAssigned: boolean;
  readonly relayedLoserEliminated: boolean;
  readonly relayedChildrenChecked: boolean;
}

/** @stereotype <<Agent>> */
export interface Arbiter {
  readonly arbiterId: ArbiterId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface Player {
  readonly playerId: PlayerId;
  readonly name: string;
  readonly playerLossCount: number;
}

/** @stereotype <<Agent>> */
export interface TournamentOrganizer {
  readonly organizerId: TournamentOrganizerId;
  readonly organizationName: string;
}

/** @stereotype <<Agent>> */
export interface Spectator {
  readonly spectatorId: SpectatorId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface TournamentVendor {
  readonly vendorId: TournamentVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Match {
  readonly matchId: MatchId;
  readonly round: number;
  readonly slot: number;
  readonly targetScore: number;
  readonly winnerScore: number;
  readonly loserScore: number;
  readonly matchDecided: boolean;
  readonly leftChildMatch: Match;
  readonly rightChildMatch: Match;
  readonly isPlayable: boolean;
}

/** @stereotype <<Kind>> */
export interface BracketSlot {
  readonly slotId: BracketSlotId;
  readonly depth: number;
  readonly position: number;
  readonly parentSlotOccupiedCount: number;
  readonly winnerAssigned: boolean;
}

/** @stereotype <<Commitment>> */
export interface ValidScoresCommitment {
  readonly commitmentId: ValidScoresCommitmentId;
  readonly targetScore: number;
}

/** @stereotype <<Commitment>> */
export interface SingleEliminationCommitment {
  readonly commitmentId: SingleEliminationCommitmentId;
  readonly playerLossCount: number;
}

/** @stereotype <<Commitment>> */
export interface CorrectAdvancementCommitment {
  readonly commitmentId: CorrectAdvancementCommitmentId;
  readonly parentSlotOccupiedCount: number;
}

/** @stereotype <<Commitment>> */
export interface ParentGatingCommitment {
  readonly commitmentId: ParentGatingCommitmentId;
  readonly isPlayable: boolean;
}

/** @stereotype <<Category>> */
export interface ValidScoresConstraints {
}

/** @stereotype <<Category>> */
export interface SingleEliminationConstraints {
}

/** @stereotype <<Category>> */
export interface CorrectAdvancementConstraints {
}

/** @stereotype <<Category>> */
export interface ParentGatingConstraints {
}

/** @stereotype <<Happening>> */
export interface MatchReportingFlow {
  readonly flowId: MatchReportingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface BracketProgressionFlow {
  readonly flowId: BracketProgressionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface TournamentBracketSystem extends ValidScoresConstraints, SingleEliminationConstraints, CorrectAdvancementConstraints, ParentGatingConstraints {
  readonly systemId: TournamentBracketSystemId;
  readonly targetScore: number;
  readonly playerLossCount: number;
  readonly parentSlotOccupiedCount: number;
  readonly isPlayable: boolean;
  readonly matchCount: number;
  readonly playersEliminatedCount: number;
}

/** @stereotype <<Category>> */
export interface WtgfCompliant {
  readonly governanceStandardVersion: string;
  readonly certificationBody: string;
}

/** @stereotype <<Category>> */
export interface AntiCollusionCompliant {
  readonly antiCollusionPolicyId: string;
  readonly maxSimultaneousMatchesPerPlayer: number;
}

/** @stereotype <<Category>> */
export interface GdprCompliant {
  readonly privacyPolicyVersion: string;
  readonly dataRetentionDays: number;
}

/** @stereotype <<Category>> */
export interface ScoreValidityRule {
}

/** @stereotype <<Category>> */
export interface EliminationIrreversibility {
}

/** @stereotype <<Category>> */
export interface SlotOccupancyRule {
}

/** @stereotype <<Category>> */
export interface ParentGatingCondition {
}

/** @stereotype <<Subkind>> */
export interface TournamentBracketSystemFormalized extends TournamentBracketSystem {
  readonly governanceStandardVersion: string;
  readonly certificationBody: string;
  readonly antiCollusionPolicyId: string;
  readonly maxSimultaneousMatchesPerPlayer: number;
  readonly privacyPolicyVersion: string;
  readonly dataRetentionDays: number;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly assumptionDescription: string;
  readonly assumptionRationale: string;
  readonly assumptionRisk: string;
  readonly assumedBy: string;
}


// ─── Factory functions ───

export function makeMatchReportingFlowDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MatchReportingFlowDesign {
  return {
    flowId: data.flowId as MatchReportingFlowDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeMatchScorer(data: {
  scorerId: string;
  targetScore: number;
  winnerScore: number;
  loserScore: number;
  matchDecided: boolean;
  leftChildDecided: boolean;
  rightChildDecided: boolean;
  matchCount: number;
}): MatchScorer {
  return {
    scorerId: data.scorerId as MatchScorerId,
    targetScore: data.targetScore,
    winnerScore: data.winnerScore,
    loserScore: data.loserScore,
    matchDecided: data.matchDecided,
    leftChildDecided: data.leftChildDecided,
    rightChildDecided: data.rightChildDecided,
    matchCount: data.matchCount,
  };
}

export function makePlayerTracker(data: {
  trackerId: string;
  playerLossCount: number;
  isEliminated: boolean;
  playersEliminatedCount: number;
}): PlayerTracker {
  return {
    trackerId: data.trackerId as PlayerTrackerId,
    playerLossCount: data.playerLossCount,
    isEliminated: data.isEliminated,
    playersEliminatedCount: data.playersEliminatedCount,
  };
}

export function makeBracketManager(data: {
  managerId: string;
  parentSlotFilled: boolean;
  parentSlotOccupiedCount: number;
  isPlayable: boolean;
  childrenResolved: boolean;
}): BracketManager {
  return {
    managerId: data.managerId as BracketManagerId,
    parentSlotFilled: data.parentSlotFilled,
    parentSlotOccupiedCount: data.parentSlotOccupiedCount,
    isPlayable: data.isPlayable,
    childrenResolved: data.childrenResolved,
  };
}

export function makeMatchResultChannel(data: {
  channelId: string;
  scorerRef: ScorerEndpoint;
  trackerRef: TrackerEndpoint;
  managerRef: ManagerEndpoint;
  relayedWinnerAssigned: boolean;
  relayedLoserEliminated: boolean;
  relayedChildrenChecked: boolean;
}): MatchResultChannel {
  return {
    channelId: data.channelId as MatchResultChannelId,
    scorerRef: data.scorerRef,
    trackerRef: data.trackerRef,
    managerRef: data.managerRef,
    relayedWinnerAssigned: data.relayedWinnerAssigned,
    relayedLoserEliminated: data.relayedLoserEliminated,
    relayedChildrenChecked: data.relayedChildrenChecked,
  };
}

export function makeArbiter(data: {
  arbiterId: string;
  name: string;
  certification: string;
}): Arbiter {
  return {
    arbiterId: data.arbiterId as ArbiterId,
    name: data.name,
    certification: data.certification,
  };
}

export function makePlayer(data: {
  playerId: string;
  name: string;
  playerLossCount: number;
}): Player {
  return {
    playerId: data.playerId as PlayerId,
    name: data.name,
    playerLossCount: data.playerLossCount,
  };
}

export function makeTournamentOrganizer(data: {
  organizerId: string;
  organizationName: string;
}): TournamentOrganizer {
  return {
    organizerId: data.organizerId as TournamentOrganizerId,
    organizationName: data.organizationName,
  };
}

export function makeSpectator(data: {
  spectatorId: string;
  name: string;
}): Spectator {
  return {
    spectatorId: data.spectatorId as SpectatorId,
    name: data.name,
  };
}

export function makeTournamentVendor(data: {
  vendorId: string;
  name: string;
}): TournamentVendor {
  return {
    vendorId: data.vendorId as TournamentVendorId,
    name: data.name,
  };
}

export function makeMatch(data: {
  matchId: string;
  round: number;
  slot: number;
  targetScore: number;
  winnerScore: number;
  loserScore: number;
  matchDecided: boolean;
  leftChildMatch: Match;
  rightChildMatch: Match;
  isPlayable: boolean;
}): Match {
  return {
    matchId: data.matchId as MatchId,
    round: data.round,
    slot: data.slot,
    targetScore: data.targetScore,
    winnerScore: data.winnerScore,
    loserScore: data.loserScore,
    matchDecided: data.matchDecided,
    leftChildMatch: data.leftChildMatch,
    rightChildMatch: data.rightChildMatch,
    isPlayable: data.isPlayable,
  };
}

export function makeBracketSlot(data: {
  slotId: string;
  depth: number;
  position: number;
  parentSlotOccupiedCount: number;
  winnerAssigned: boolean;
}): BracketSlot {
  return {
    slotId: data.slotId as BracketSlotId,
    depth: data.depth,
    position: data.position,
    parentSlotOccupiedCount: data.parentSlotOccupiedCount,
    winnerAssigned: data.winnerAssigned,
  };
}

export function makeValidScoresCommitment(data: {
  commitmentId: string;
  targetScore: number;
}): ValidScoresCommitment {
  return {
    commitmentId: data.commitmentId as ValidScoresCommitmentId,
    targetScore: data.targetScore,
  };
}

export function makeSingleEliminationCommitment(data: {
  commitmentId: string;
  playerLossCount: number;
}): SingleEliminationCommitment {
  return {
    commitmentId: data.commitmentId as SingleEliminationCommitmentId,
    playerLossCount: data.playerLossCount,
  };
}

export function makeCorrectAdvancementCommitment(data: {
  commitmentId: string;
  parentSlotOccupiedCount: number;
}): CorrectAdvancementCommitment {
  return {
    commitmentId: data.commitmentId as CorrectAdvancementCommitmentId,
    parentSlotOccupiedCount: data.parentSlotOccupiedCount,
  };
}

export function makeParentGatingCommitment(data: {
  commitmentId: string;
  isPlayable: boolean;
}): ParentGatingCommitment {
  return {
    commitmentId: data.commitmentId as ParentGatingCommitmentId,
    isPlayable: data.isPlayable,
  };
}

export function makeMatchReportingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MatchReportingFlow {
  return {
    flowId: data.flowId as MatchReportingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeBracketProgressionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): BracketProgressionFlow {
  return {
    flowId: data.flowId as BracketProgressionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeTournamentBracketSystem(data: {
  systemId: string;
  targetScore: number;
  playerLossCount: number;
  parentSlotOccupiedCount: number;
  isPlayable: boolean;
  matchCount: number;
  playersEliminatedCount: number;
}): TournamentBracketSystem {
  return {
    systemId: data.systemId as TournamentBracketSystemId,
    targetScore: data.targetScore,
    playerLossCount: data.playerLossCount,
    parentSlotOccupiedCount: data.parentSlotOccupiedCount,
    isPlayable: data.isPlayable,
    matchCount: data.matchCount,
    playersEliminatedCount: data.playersEliminatedCount,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  assumptionDescription: string;
  assumptionRationale: string;
  assumptionRisk: string;
  assumedBy: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    assumptionDescription: data.assumptionDescription,
    assumptionRationale: data.assumptionRationale,
    assumptionRisk: data.assumptionRisk,
    assumedBy: data.assumedBy,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for MatchReportingFlowDesign. Returns empty array when valid. */
export function validateMatchReportingFlowDesign(instance: MatchReportingFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MatchReportingFlowDesign] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for MatchScorer. Returns empty array when valid. */
export function validateMatchScorer(instance: MatchScorer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.scorerId !== null))) {
    violations.push("[MatchScorer] invariant violated: self.scorerId <> null");
  }
  if (!((instance.targetScore > 0))) {
    violations.push("[MatchScorer] invariant violated: self.targetScore > 0.0");
  }
  if (!((instance.winnerScore >= 0))) {
    violations.push("[MatchScorer] invariant violated: self.winnerScore >= 0.0");
  }
  if (!((instance.loserScore >= 0))) {
    violations.push("[MatchScorer] invariant violated: self.loserScore >= 0.0");
  }
  if (!((instance.matchCount >= 0))) {
    violations.push("[MatchScorer] invariant violated: self.matchCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for PlayerTracker. Returns empty array when valid. */
export function validatePlayerTracker(instance: PlayerTracker): readonly string[] {
  const violations: string[] = [];
  if (!((instance.trackerId !== null))) {
    violations.push("[PlayerTracker] invariant violated: self.trackerId <> null");
  }
  if (!((instance.playerLossCount >= 0))) {
    violations.push("[PlayerTracker] invariant violated: self.playerLossCount >= 0");
  }
  if (!((instance.playerLossCount <= 1))) {
    violations.push("[PlayerTracker] invariant violated: self.playerLossCount <= 1");
  }
  if (!((instance.playersEliminatedCount >= 0))) {
    violations.push("[PlayerTracker] invariant violated: self.playersEliminatedCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for BracketManager. Returns empty array when valid. */
export function validateBracketManager(instance: BracketManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[BracketManager] invariant violated: self.managerId <> null");
  }
  if (!((instance.parentSlotOccupiedCount >= 0))) {
    violations.push("[BracketManager] invariant violated: self.parentSlotOccupiedCount >= 0");
  }
  if (!((instance.parentSlotOccupiedCount <= 1))) {
    violations.push("[BracketManager] invariant violated: self.parentSlotOccupiedCount <= 1");
  }
  return violations;
}

/** Runtime invariant check for MatchResultChannel. Returns empty array when valid. */
export function validateMatchResultChannel(instance: MatchResultChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[MatchResultChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.scorerRef !== null))) {
    violations.push("[MatchResultChannel] invariant violated: self.scorerRef <> null");
  }
  if (!((instance.trackerRef !== null))) {
    violations.push("[MatchResultChannel] invariant violated: self.trackerRef <> null");
  }
  if (!((instance.managerRef !== null))) {
    violations.push("[MatchResultChannel] invariant violated: self.managerRef <> null");
  }
  return violations;
}

/** Runtime invariant check for ValidScoresConstraints. Returns empty array when valid. */
export function validateValidScoresConstraints(instance: ValidScoresConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.targetScore > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SingleEliminationConstraints. Returns empty array when valid. */
export function validateSingleEliminationConstraints(instance: SingleEliminationConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.playerLossCount <= 1 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for CorrectAdvancementConstraints. Returns empty array when valid. */
export function validateCorrectAdvancementConstraints(instance: CorrectAdvancementConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.parentSlotOccupiedCount <= 1 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.parentSlotOccupiedCount >= 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ParentGatingConstraints. Returns empty array when valid. */
export function validateParentGatingConstraints(instance: ParentGatingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.isPlayable) or
      (bearer.leftChildMatch <> null and bearer.rightChildMatch <> null) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for MatchReportingFlow. Returns empty array when valid. */
export function validateMatchReportingFlow(instance: MatchReportingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MatchReportingFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for BracketProgressionFlow. Returns empty array when valid. */
export function validateBracketProgressionFlow(instance: BracketProgressionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[BracketProgressionFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for TournamentBracketSystem. Returns empty array when valid. */
export function validateTournamentBracketSystem(instance: TournamentBracketSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.targetScore > 0))) {
    violations.push("[TournamentBracketSystem] invariant violated: self.targetScore > 0.0");
  }
  if (!((instance.playerLossCount <= 1))) {
    violations.push("[TournamentBracketSystem] invariant violated: self.playerLossCount <= 1");
  }
  if (!((instance.parentSlotOccupiedCount <= 1))) {
    violations.push("[TournamentBracketSystem] invariant violated: self.parentSlotOccupiedCount <= 1");
  }
  if (!((instance.parentSlotOccupiedCount >= 0))) {
    violations.push("[TournamentBracketSystem] invariant violated: self.parentSlotOccupiedCount >= 0");
  }
  if (!((instance.matchCount >= 0))) {
    violations.push("[TournamentBracketSystem] invariant violated: self.matchCount >= 0");
  }
  if (!((instance.playersEliminatedCount >= 0))) {
    violations.push("[TournamentBracketSystem] invariant violated: self.playersEliminatedCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for WtgfCompliant. Returns empty array when valid. */
export function validateWtgfCompliant(instance: WtgfCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[WtgfCompliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AntiCollusionCompliant. Returns empty array when valid. */
export function validateAntiCollusionCompliant(instance: AntiCollusionCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.maxSimultaneousMatchesPerPlayer === 1))) {
    violations.push("[AntiCollusionCompliant] invariant violated: self.maxSimultaneousMatchesPerPlayer = 1");
  }
  return violations;
}

/** Runtime invariant check for GdprCompliant. Returns empty array when valid. */
export function validateGdprCompliant(instance: GdprCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dataRetentionDays >= 30))) {
    violations.push("[GdprCompliant] invariant violated: self.dataRetentionDays >= 30");
  }
  if (!((instance.dataRetentionDays <= 365))) {
    violations.push("[GdprCompliant] invariant violated: self.dataRetentionDays <= 365");
  }
  return violations;
}

/** Runtime invariant check for ScoreValidityRule. Returns empty array when valid. */
export function validateScoreValidityRule(instance: ScoreValidityRule): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.matchDecided) or
      (bearer.winnerScore = bearer.targetScore
       and bearer.winnerScore > bearer.loserScore) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EliminationIrreversibility. Returns empty array when valid. */
export function validateEliminationIrreversibility(instance: EliminationIrreversibility): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.playerLossCount <= 1 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SlotOccupancyRule. Returns empty array when valid. */
export function validateSlotOccupancyRule(instance: SlotOccupancyRule): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.parentSlotOccupiedCount <= 1 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ParentGatingCondition. Returns empty array when valid. */
export function validateParentGatingCondition(instance: ParentGatingCondition): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.leftChildMatch.matchDecided
         and bearer.rightChildMatch.matchDecided)
      or bearer.isPlayable — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TournamentBracketSystemFormalized. Returns empty array when valid. */
export function validateTournamentBracketSystemFormalized(instance: TournamentBracketSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.antiCollusionPolicyId !== null))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.antiCollusionPolicyId <> null");
  }
  if (!((instance.maxSimultaneousMatchesPerPlayer === 1))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.maxSimultaneousMatchesPerPlayer = 1");
  }
  if (!((instance.privacyPolicyVersion !== null))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.privacyPolicyVersion <> null");
  }
  if (!((instance.dataRetentionDays >= 30))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.dataRetentionDays >= 30");
  }
  if (!((instance.dataRetentionDays <= 365))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.dataRetentionDays <= 365");
  }
  if (!((instance.governanceStandardVersion !== null))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.governanceStandardVersion <> null");
  }
  if (!((instance.certificationBody !== null))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.certificationBody <> null");
  }
  if (!((instance.matchCount >= 0))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.matchCount >= 0");
  }
  if (!((instance.playersEliminatedCount >= 0))) {
    violations.push("[TournamentBracketSystemFormalized] invariant violated: self.playersEliminatedCount >= 0");
  }
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
  if (!((instance.assumptionDescription !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionDescription <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for MatchScorer.recordMatchScore. User supplies this. */
export type MatchScorerRecordMatchScoreImpl = (self: MatchScorer, playerAScore: number, playerBScore: number) => { self: MatchScorer; modified: { matchDecided: unknown; winnerScore: unknown; loserScore: unknown; matchCount: unknown } };

/** Contract-checking wrapper for MatchScorer.recordMatchScore. */
export function wrapMatchScorerRecordMatchScore(impl: MatchScorerRecordMatchScoreImpl): (self: MatchScorer, playerAScore: number, playerBScore: number) => MatchScorer {
  return (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!((playerAScore >= 0))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: playerAScore >= 0.0");
    }
    if (!((playerBScore >= 0))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: playerBScore >= 0.0");
    }
    if (!(!(self.matchDecided))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: not self.matchDecided");
    }
    if (!(((playerAScore === self.targetScore) && (playerBScore < self.targetScore)))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: (playerAScore = self.targetScore and playerBScore < self.targetScore)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchDecided === true))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.matchDecided = true");
      }
      if (!((__result.self.winnerScore === (((playerAScore === __result.self.targetScore)) ? (playerAScore) : (playerBScore))))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.winnerScore = if playerAScore = self.targetScore then playerAScore else playerBScore endif");
      }
      if (!((__result.self.loserScore === (((playerAScore === __result.self.targetScore)) ? (playerBScore) : (playerAScore))))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.loserScore = if playerAScore = self.targetScore then playerBScore else playerAScore endif");
      }
      if (!((__result.self.matchCount === (__pre["self.matchCount"] + 1)))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.matchCount = self.matchCount@pre + 1");
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

/** Impl signature for MatchScorer.recordMatchScore (async). User supplies this. */
export type MatchScorerRecordMatchScoreAsyncImpl = (self: MatchScorer, playerAScore: number, playerBScore: number) => Promise<{ self: MatchScorer; modified: { matchDecided: unknown; winnerScore: unknown; loserScore: unknown; matchCount: unknown } }>;

/** Contract-checking wrapper for MatchScorer.recordMatchScore (async). */
export function wrapMatchScorerRecordMatchScoreAsync(impl: MatchScorerRecordMatchScoreAsyncImpl): (self: MatchScorer, playerAScore: number, playerBScore: number) => Promise<MatchScorer> {
  return async (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!((playerAScore >= 0))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: playerAScore >= 0.0");
    }
    if (!((playerBScore >= 0))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: playerBScore >= 0.0");
    }
    if (!(!(self.matchDecided))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: not self.matchDecided");
    }
    if (!(((playerAScore === self.targetScore) && (playerBScore < self.targetScore)))) {
      preViolations.push("[MatchScorer.recordMatchScore] pre violated: (playerAScore = self.targetScore and playerBScore < self.targetScore)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchDecided === true))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.matchDecided = true");
      }
      if (!((__result.self.winnerScore === (((playerAScore === __result.self.targetScore)) ? (playerAScore) : (playerBScore))))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.winnerScore = if playerAScore = self.targetScore then playerAScore else playerBScore endif");
      }
      if (!((__result.self.loserScore === (((playerAScore === __result.self.targetScore)) ? (playerBScore) : (playerAScore))))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.loserScore = if playerAScore = self.targetScore then playerBScore else playerAScore endif");
      }
      if (!((__result.self.matchCount === (__pre["self.matchCount"] + 1)))) {
        postViolations.push("[MatchScorer.recordMatchScore] post violated: self.matchCount = self.matchCount@pre + 1");
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

/** Impl signature for PlayerTracker.rejectEliminatedPlayer. User supplies this. */
export type PlayerTrackerRejectEliminatedPlayerImpl = (self: PlayerTracker) => { self: PlayerTracker; modified: { playerLossCount: unknown; isEliminated: unknown } };

/** Contract-checking wrapper for PlayerTracker.rejectEliminatedPlayer. */
export function wrapPlayerTrackerRejectEliminatedPlayer(impl: PlayerTrackerRejectEliminatedPlayerImpl): (self: PlayerTracker) => PlayerTracker {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isEliminated === true))) {
      preViolations.push("[PlayerTracker.rejectEliminatedPlayer] pre violated: self.isEliminated = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.playerLossCount": self.playerLossCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isEliminated === true))) {
        postViolations.push("[PlayerTracker.rejectEliminatedPlayer] post violated: self.isEliminated = true");
      }
      if (!((__result.self.playerLossCount === __pre["self.playerLossCount"]))) {
        postViolations.push("[PlayerTracker.rejectEliminatedPlayer] post violated: self.playerLossCount = self.playerLossCount@pre");
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

/** Impl signature for PlayerTracker.rejectEliminatedPlayer (async). User supplies this. */
export type PlayerTrackerRejectEliminatedPlayerAsyncImpl = (self: PlayerTracker) => Promise<{ self: PlayerTracker; modified: { playerLossCount: unknown; isEliminated: unknown } }>;

/** Contract-checking wrapper for PlayerTracker.rejectEliminatedPlayer (async). */
export function wrapPlayerTrackerRejectEliminatedPlayerAsync(impl: PlayerTrackerRejectEliminatedPlayerAsyncImpl): (self: PlayerTracker) => Promise<PlayerTracker> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isEliminated === true))) {
      preViolations.push("[PlayerTracker.rejectEliminatedPlayer] pre violated: self.isEliminated = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.playerLossCount": self.playerLossCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isEliminated === true))) {
        postViolations.push("[PlayerTracker.rejectEliminatedPlayer] post violated: self.isEliminated = true");
      }
      if (!((__result.self.playerLossCount === __pre["self.playerLossCount"]))) {
        postViolations.push("[PlayerTracker.rejectEliminatedPlayer] post violated: self.playerLossCount = self.playerLossCount@pre");
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

/** Impl signature for PlayerTracker.recordElimination. User supplies this. */
export type PlayerTrackerRecordEliminationImpl = (self: PlayerTracker) => { self: PlayerTracker; modified: { playerLossCount: unknown; isEliminated: unknown; playersEliminatedCount: unknown } };

/** Contract-checking wrapper for PlayerTracker.recordElimination. */
export function wrapPlayerTrackerRecordElimination(impl: PlayerTrackerRecordEliminationImpl): (self: PlayerTracker) => PlayerTracker {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isEliminated))) {
      preViolations.push("[PlayerTracker.recordElimination] pre violated: not self.isEliminated");
    }
    if (!((self.playerLossCount === 0))) {
      preViolations.push("[PlayerTracker.recordElimination] pre violated: self.playerLossCount = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.playersEliminatedCount": self.playersEliminatedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.playerLossCount === 1))) {
        postViolations.push("[PlayerTracker.recordElimination] post violated: self.playerLossCount = 1");
      }
      if (!((__result.self.isEliminated === true))) {
        postViolations.push("[PlayerTracker.recordElimination] post violated: self.isEliminated = true");
      }
      if (!((__result.self.playersEliminatedCount === (__pre["self.playersEliminatedCount"] + 1)))) {
        postViolations.push("[PlayerTracker.recordElimination] post violated: self.playersEliminatedCount = self.playersEliminatedCount@pre + 1");
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

/** Impl signature for PlayerTracker.recordElimination (async). User supplies this. */
export type PlayerTrackerRecordEliminationAsyncImpl = (self: PlayerTracker) => Promise<{ self: PlayerTracker; modified: { playerLossCount: unknown; isEliminated: unknown; playersEliminatedCount: unknown } }>;

/** Contract-checking wrapper for PlayerTracker.recordElimination (async). */
export function wrapPlayerTrackerRecordEliminationAsync(impl: PlayerTrackerRecordEliminationAsyncImpl): (self: PlayerTracker) => Promise<PlayerTracker> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isEliminated))) {
      preViolations.push("[PlayerTracker.recordElimination] pre violated: not self.isEliminated");
    }
    if (!((self.playerLossCount === 0))) {
      preViolations.push("[PlayerTracker.recordElimination] pre violated: self.playerLossCount = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.playersEliminatedCount": self.playersEliminatedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.playerLossCount === 1))) {
        postViolations.push("[PlayerTracker.recordElimination] post violated: self.playerLossCount = 1");
      }
      if (!((__result.self.isEliminated === true))) {
        postViolations.push("[PlayerTracker.recordElimination] post violated: self.isEliminated = true");
      }
      if (!((__result.self.playersEliminatedCount === (__pre["self.playersEliminatedCount"] + 1)))) {
        postViolations.push("[PlayerTracker.recordElimination] post violated: self.playersEliminatedCount = self.playersEliminatedCount@pre + 1");
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

/** Impl signature for PlayerTracker.resetPlayerForNextMatch. User supplies this. */
export type PlayerTrackerResetPlayerForNextMatchImpl = (self: PlayerTracker) => { self: PlayerTracker; modified: { playerLossCount: unknown } };

/** Contract-checking wrapper for PlayerTracker.resetPlayerForNextMatch. */
export function wrapPlayerTrackerResetPlayerForNextMatch(impl: PlayerTrackerResetPlayerForNextMatchImpl): (self: PlayerTracker) => PlayerTracker {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.playerLossCount === 1))) {
      preViolations.push("[PlayerTracker.resetPlayerForNextMatch] pre violated: self.playerLossCount = 1");
    }
    if (!(!(self.isEliminated))) {
      preViolations.push("[PlayerTracker.resetPlayerForNextMatch] pre violated: not self.isEliminated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.playerLossCount === 0))) {
        postViolations.push("[PlayerTracker.resetPlayerForNextMatch] post violated: self.playerLossCount = 0");
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

/** Impl signature for PlayerTracker.resetPlayerForNextMatch (async). User supplies this. */
export type PlayerTrackerResetPlayerForNextMatchAsyncImpl = (self: PlayerTracker) => Promise<{ self: PlayerTracker; modified: { playerLossCount: unknown } }>;

/** Contract-checking wrapper for PlayerTracker.resetPlayerForNextMatch (async). */
export function wrapPlayerTrackerResetPlayerForNextMatchAsync(impl: PlayerTrackerResetPlayerForNextMatchAsyncImpl): (self: PlayerTracker) => Promise<PlayerTracker> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.playerLossCount === 1))) {
      preViolations.push("[PlayerTracker.resetPlayerForNextMatch] pre violated: self.playerLossCount = 1");
    }
    if (!(!(self.isEliminated))) {
      preViolations.push("[PlayerTracker.resetPlayerForNextMatch] pre violated: not self.isEliminated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.playerLossCount === 0))) {
        postViolations.push("[PlayerTracker.resetPlayerForNextMatch] post violated: self.playerLossCount = 0");
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

/** Impl signature for BracketManager.fillParentSlot. User supplies this. */
export type BracketManagerFillParentSlotImpl = (self: BracketManager) => { self: BracketManager; modified: { parentSlotFilled: unknown; parentSlotOccupiedCount: unknown; childrenResolved: unknown } };

/** Contract-checking wrapper for BracketManager.fillParentSlot. */
export function wrapBracketManagerFillParentSlot(impl: BracketManagerFillParentSlotImpl): (self: BracketManager) => BracketManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.parentSlotFilled))) {
      preViolations.push("[BracketManager.fillParentSlot] pre violated: not self.parentSlotFilled");
    }
    if (!((self.parentSlotOccupiedCount < 1))) {
      preViolations.push("[BracketManager.fillParentSlot] pre violated: self.parentSlotOccupiedCount < 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.parentSlotFilled === true))) {
        postViolations.push("[BracketManager.fillParentSlot] post violated: self.parentSlotFilled = true");
      }
      if (!((__result.self.parentSlotOccupiedCount === (__pre["self.parentSlotOccupiedCount"] + 1)))) {
        postViolations.push("[BracketManager.fillParentSlot] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre + 1");
      }
      if (!((__result.self.childrenResolved === true))) {
        postViolations.push("[BracketManager.fillParentSlot] post violated: self.childrenResolved = true");
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

/** Impl signature for BracketManager.fillParentSlot (async). User supplies this. */
export type BracketManagerFillParentSlotAsyncImpl = (self: BracketManager) => Promise<{ self: BracketManager; modified: { parentSlotFilled: unknown; parentSlotOccupiedCount: unknown; childrenResolved: unknown } }>;

/** Contract-checking wrapper for BracketManager.fillParentSlot (async). */
export function wrapBracketManagerFillParentSlotAsync(impl: BracketManagerFillParentSlotAsyncImpl): (self: BracketManager) => Promise<BracketManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.parentSlotFilled))) {
      preViolations.push("[BracketManager.fillParentSlot] pre violated: not self.parentSlotFilled");
    }
    if (!((self.parentSlotOccupiedCount < 1))) {
      preViolations.push("[BracketManager.fillParentSlot] pre violated: self.parentSlotOccupiedCount < 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.parentSlotFilled === true))) {
        postViolations.push("[BracketManager.fillParentSlot] post violated: self.parentSlotFilled = true");
      }
      if (!((__result.self.parentSlotOccupiedCount === (__pre["self.parentSlotOccupiedCount"] + 1)))) {
        postViolations.push("[BracketManager.fillParentSlot] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre + 1");
      }
      if (!((__result.self.childrenResolved === true))) {
        postViolations.push("[BracketManager.fillParentSlot] post violated: self.childrenResolved = true");
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

/** Impl signature for BracketManager.enableParentMatch. User supplies this. */
export type BracketManagerEnableParentMatchImpl = (self: BracketManager) => { self: BracketManager; modified: { isPlayable: unknown; parentSlotOccupiedCount: unknown } };

/** Contract-checking wrapper for BracketManager.enableParentMatch. */
export function wrapBracketManagerEnableParentMatch(impl: BracketManagerEnableParentMatchImpl): (self: BracketManager) => BracketManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount === 1))) {
      preViolations.push("[BracketManager.enableParentMatch] pre violated: self.parentSlotOccupiedCount = 1");
    }
    if (!(!(self.isPlayable))) {
      preViolations.push("[BracketManager.enableParentMatch] pre violated: not self.isPlayable");
    }
    if (!(self.childrenResolved)) {
      preViolations.push("[BracketManager.enableParentMatch] pre violated: self.childrenResolved");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === true))) {
        postViolations.push("[BracketManager.enableParentMatch] post violated: self.isPlayable = true");
      }
      if (!((__result.self.parentSlotOccupiedCount === 0))) {
        postViolations.push("[BracketManager.enableParentMatch] post violated: self.parentSlotOccupiedCount = 0");
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

/** Impl signature for BracketManager.enableParentMatch (async). User supplies this. */
export type BracketManagerEnableParentMatchAsyncImpl = (self: BracketManager) => Promise<{ self: BracketManager; modified: { isPlayable: unknown; parentSlotOccupiedCount: unknown } }>;

/** Contract-checking wrapper for BracketManager.enableParentMatch (async). */
export function wrapBracketManagerEnableParentMatchAsync(impl: BracketManagerEnableParentMatchAsyncImpl): (self: BracketManager) => Promise<BracketManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount === 1))) {
      preViolations.push("[BracketManager.enableParentMatch] pre violated: self.parentSlotOccupiedCount = 1");
    }
    if (!(!(self.isPlayable))) {
      preViolations.push("[BracketManager.enableParentMatch] pre violated: not self.isPlayable");
    }
    if (!(self.childrenResolved)) {
      preViolations.push("[BracketManager.enableParentMatch] pre violated: self.childrenResolved");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === true))) {
        postViolations.push("[BracketManager.enableParentMatch] post violated: self.isPlayable = true");
      }
      if (!((__result.self.parentSlotOccupiedCount === 0))) {
        postViolations.push("[BracketManager.enableParentMatch] post violated: self.parentSlotOccupiedCount = 0");
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

/** Impl signature for BracketManager.rejectSlotAlreadyFilled. User supplies this. */
export type BracketManagerRejectSlotAlreadyFilledImpl = (self: BracketManager) => { self: BracketManager; modified: { parentSlotOccupiedCount: unknown; isPlayable: unknown } };

/** Contract-checking wrapper for BracketManager.rejectSlotAlreadyFilled. */
export function wrapBracketManagerRejectSlotAlreadyFilled(impl: BracketManagerRejectSlotAlreadyFilledImpl): (self: BracketManager) => BracketManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount >= 1))) {
      preViolations.push("[BracketManager.rejectSlotAlreadyFilled] pre violated: self.parentSlotOccupiedCount >= 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
      "self.isPlayable": self.isPlayable,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.parentSlotOccupiedCount === __pre["self.parentSlotOccupiedCount"]))) {
        postViolations.push("[BracketManager.rejectSlotAlreadyFilled] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre");
      }
      if (!((__result.self.isPlayable === __pre["self.isPlayable"]))) {
        postViolations.push("[BracketManager.rejectSlotAlreadyFilled] post violated: self.isPlayable = self.isPlayable@pre");
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

/** Impl signature for BracketManager.rejectSlotAlreadyFilled (async). User supplies this. */
export type BracketManagerRejectSlotAlreadyFilledAsyncImpl = (self: BracketManager) => Promise<{ self: BracketManager; modified: { parentSlotOccupiedCount: unknown; isPlayable: unknown } }>;

/** Contract-checking wrapper for BracketManager.rejectSlotAlreadyFilled (async). */
export function wrapBracketManagerRejectSlotAlreadyFilledAsync(impl: BracketManagerRejectSlotAlreadyFilledAsyncImpl): (self: BracketManager) => Promise<BracketManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount >= 1))) {
      preViolations.push("[BracketManager.rejectSlotAlreadyFilled] pre violated: self.parentSlotOccupiedCount >= 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
      "self.isPlayable": self.isPlayable,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.parentSlotOccupiedCount === __pre["self.parentSlotOccupiedCount"]))) {
        postViolations.push("[BracketManager.rejectSlotAlreadyFilled] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre");
      }
      if (!((__result.self.isPlayable === __pre["self.isPlayable"]))) {
        postViolations.push("[BracketManager.rejectSlotAlreadyFilled] post violated: self.isPlayable = self.isPlayable@pre");
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

/** Impl signature for BracketManager.rejectMatchNotPlayable. User supplies this. */
export type BracketManagerRejectMatchNotPlayableImpl = (self: BracketManager) => { self: BracketManager; modified: { isPlayable: unknown } };

/** Contract-checking wrapper for BracketManager.rejectMatchNotPlayable. */
export function wrapBracketManagerRejectMatchNotPlayable(impl: BracketManagerRejectMatchNotPlayableImpl): (self: BracketManager) => BracketManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isPlayable))) {
      preViolations.push("[BracketManager.rejectMatchNotPlayable] pre violated: not self.isPlayable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === false))) {
        postViolations.push("[BracketManager.rejectMatchNotPlayable] post violated: self.isPlayable = false");
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

/** Impl signature for BracketManager.rejectMatchNotPlayable (async). User supplies this. */
export type BracketManagerRejectMatchNotPlayableAsyncImpl = (self: BracketManager) => Promise<{ self: BracketManager; modified: { isPlayable: unknown } }>;

/** Contract-checking wrapper for BracketManager.rejectMatchNotPlayable (async). */
export function wrapBracketManagerRejectMatchNotPlayableAsync(impl: BracketManagerRejectMatchNotPlayableAsyncImpl): (self: BracketManager) => Promise<BracketManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isPlayable))) {
      preViolations.push("[BracketManager.rejectMatchNotPlayable] pre violated: not self.isPlayable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === false))) {
        postViolations.push("[BracketManager.rejectMatchNotPlayable] post violated: self.isPlayable = false");
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

/** Impl signature for MatchResultChannel.relayMatchOutcome. User supplies this. */
export type MatchResultChannelRelayMatchOutcomeImpl = (self: MatchResultChannel) => { self: MatchResultChannel; modified: { relayedWinnerAssigned: unknown; relayedLoserEliminated: unknown; relayedChildrenChecked: unknown } };

/** Contract-checking wrapper for MatchResultChannel.relayMatchOutcome. */
export function wrapMatchResultChannelRelayMatchOutcome(impl: MatchResultChannelRelayMatchOutcomeImpl): (self: MatchResultChannel) => MatchResultChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.scorerRef?.matchDecided === true))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: self.scorerRef.matchDecided = true");
    }
    if (!(!(self.relayedWinnerAssigned))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: not self.relayedWinnerAssigned");
    }
    if (!(!(self.relayedLoserEliminated))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: not self.relayedLoserEliminated");
    }
    if (!(!(self.relayedChildrenChecked))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: not self.relayedChildrenChecked");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.relayedWinnerAssigned === true))) {
        postViolations.push("[MatchResultChannel.relayMatchOutcome] post violated: self.relayedWinnerAssigned = true");
      }
      if (!((__result.self.relayedLoserEliminated === true))) {
        postViolations.push("[MatchResultChannel.relayMatchOutcome] post violated: self.relayedLoserEliminated = true");
      }
      if (!(((__result.self.relayedChildrenChecked === __result.self.scorerRef?.leftChildDecided) && __result.self.scorerRef?.rightChildDecided))) {
        postViolations.push("[MatchResultChannel.relayMatchOutcome] post violated: self.relayedChildrenChecked = self.scorerRef.leftChildDecided\n                                          and self.scorerRef.rightChildDecided");
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

/** Impl signature for MatchResultChannel.relayMatchOutcome (async). User supplies this. */
export type MatchResultChannelRelayMatchOutcomeAsyncImpl = (self: MatchResultChannel) => Promise<{ self: MatchResultChannel; modified: { relayedWinnerAssigned: unknown; relayedLoserEliminated: unknown; relayedChildrenChecked: unknown } }>;

/** Contract-checking wrapper for MatchResultChannel.relayMatchOutcome (async). */
export function wrapMatchResultChannelRelayMatchOutcomeAsync(impl: MatchResultChannelRelayMatchOutcomeAsyncImpl): (self: MatchResultChannel) => Promise<MatchResultChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.scorerRef?.matchDecided === true))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: self.scorerRef.matchDecided = true");
    }
    if (!(!(self.relayedWinnerAssigned))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: not self.relayedWinnerAssigned");
    }
    if (!(!(self.relayedLoserEliminated))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: not self.relayedLoserEliminated");
    }
    if (!(!(self.relayedChildrenChecked))) {
      preViolations.push("[MatchResultChannel.relayMatchOutcome] pre violated: not self.relayedChildrenChecked");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.relayedWinnerAssigned === true))) {
        postViolations.push("[MatchResultChannel.relayMatchOutcome] post violated: self.relayedWinnerAssigned = true");
      }
      if (!((__result.self.relayedLoserEliminated === true))) {
        postViolations.push("[MatchResultChannel.relayMatchOutcome] post violated: self.relayedLoserEliminated = true");
      }
      if (!(((__result.self.relayedChildrenChecked === __result.self.scorerRef?.leftChildDecided) && __result.self.scorerRef?.rightChildDecided))) {
        postViolations.push("[MatchResultChannel.relayMatchOutcome] post violated: self.relayedChildrenChecked = self.scorerRef.leftChildDecided\n                                          and self.scorerRef.rightChildDecided");
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

/** Impl signature for TournamentBracketSystem.reportMatchScore. User supplies this. */
export type TournamentBracketSystemReportMatchScoreImpl = (self: TournamentBracketSystem, playerAScore: number, playerBScore: number) => { self: TournamentBracketSystem; modified: { matchCount: unknown; parentSlotOccupiedCount: unknown; playerLossCount: unknown; playersEliminatedCount: unknown; isPlayable: unknown } };

/** Contract-checking wrapper for TournamentBracketSystem.reportMatchScore. */
export function wrapTournamentBracketSystemReportMatchScore(impl: TournamentBracketSystemReportMatchScoreImpl): (self: TournamentBracketSystem, playerAScore: number, playerBScore: number) => TournamentBracketSystem {
  return (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!((playerAScore >= 0))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: playerAScore >= 0.0");
    }
    if (!((playerBScore >= 0))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: playerBScore >= 0.0");
    }
    if (!((self.isPlayable === true))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: self.isPlayable = true");
    }
    if (!((self.parentSlotOccupiedCount < 1))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: self.parentSlotOccupiedCount < 1");
    }
    if (!((self.playerLossCount === 0))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: self.playerLossCount = 0");
    }
    if (!((((playerAScore === self.targetScore) && (playerBScore < self.targetScore)) || ((playerBScore === self.targetScore) && (playerAScore < self.targetScore))))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: (playerAScore = self.targetScore and playerBScore < self.targetScore)\n         or (playerBScore = self.targetScore and playerAScore < self.targetScore)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
      "self.playersEliminatedCount": self.playersEliminatedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchCount === (__pre["self.matchCount"] + 1)))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.matchCount = self.matchCount@pre + 1");
      }
      if (!((__result.self.parentSlotOccupiedCount === (__pre["self.parentSlotOccupiedCount"] + 1)))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre + 1");
      }
      if (!((__result.self.playerLossCount === 1))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.playerLossCount = 1");
      }
      if (!((__result.self.playersEliminatedCount === (__pre["self.playersEliminatedCount"] + 1)))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.playersEliminatedCount = self.playersEliminatedCount@pre + 1");
      }
      if (!((__result.self.isPlayable === false))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.isPlayable = false");
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

/** Impl signature for TournamentBracketSystem.reportMatchScore (async). User supplies this. */
export type TournamentBracketSystemReportMatchScoreAsyncImpl = (self: TournamentBracketSystem, playerAScore: number, playerBScore: number) => Promise<{ self: TournamentBracketSystem; modified: { matchCount: unknown; parentSlotOccupiedCount: unknown; playerLossCount: unknown; playersEliminatedCount: unknown; isPlayable: unknown } }>;

/** Contract-checking wrapper for TournamentBracketSystem.reportMatchScore (async). */
export function wrapTournamentBracketSystemReportMatchScoreAsync(impl: TournamentBracketSystemReportMatchScoreAsyncImpl): (self: TournamentBracketSystem, playerAScore: number, playerBScore: number) => Promise<TournamentBracketSystem> {
  return async (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!((playerAScore >= 0))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: playerAScore >= 0.0");
    }
    if (!((playerBScore >= 0))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: playerBScore >= 0.0");
    }
    if (!((self.isPlayable === true))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: self.isPlayable = true");
    }
    if (!((self.parentSlotOccupiedCount < 1))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: self.parentSlotOccupiedCount < 1");
    }
    if (!((self.playerLossCount === 0))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: self.playerLossCount = 0");
    }
    if (!((((playerAScore === self.targetScore) && (playerBScore < self.targetScore)) || ((playerBScore === self.targetScore) && (playerAScore < self.targetScore))))) {
      preViolations.push("[TournamentBracketSystem.reportMatchScore] pre violated: (playerAScore = self.targetScore and playerBScore < self.targetScore)\n         or (playerBScore = self.targetScore and playerAScore < self.targetScore)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
      "self.playersEliminatedCount": self.playersEliminatedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchCount === (__pre["self.matchCount"] + 1)))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.matchCount = self.matchCount@pre + 1");
      }
      if (!((__result.self.parentSlotOccupiedCount === (__pre["self.parentSlotOccupiedCount"] + 1)))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre + 1");
      }
      if (!((__result.self.playerLossCount === 1))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.playerLossCount = 1");
      }
      if (!((__result.self.playersEliminatedCount === (__pre["self.playersEliminatedCount"] + 1)))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.playersEliminatedCount = self.playersEliminatedCount@pre + 1");
      }
      if (!((__result.self.isPlayable === false))) {
        postViolations.push("[TournamentBracketSystem.reportMatchScore] post violated: self.isPlayable = false");
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

/** Impl signature for TournamentBracketSystem.enableParentMatch. User supplies this. */
export type TournamentBracketSystemEnableParentMatchImpl = (self: TournamentBracketSystem) => { self: TournamentBracketSystem; modified: { isPlayable: unknown; parentSlotOccupiedCount: unknown } };

/** Contract-checking wrapper for TournamentBracketSystem.enableParentMatch. */
export function wrapTournamentBracketSystemEnableParentMatch(impl: TournamentBracketSystemEnableParentMatchImpl): (self: TournamentBracketSystem) => TournamentBracketSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount === 1))) {
      preViolations.push("[TournamentBracketSystem.enableParentMatch] pre violated: self.parentSlotOccupiedCount = 1");
    }
    if (!(!(self.isPlayable))) {
      preViolations.push("[TournamentBracketSystem.enableParentMatch] pre violated: not self.isPlayable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === true))) {
        postViolations.push("[TournamentBracketSystem.enableParentMatch] post violated: self.isPlayable = true");
      }
      if (!((__result.self.parentSlotOccupiedCount === 0))) {
        postViolations.push("[TournamentBracketSystem.enableParentMatch] post violated: self.parentSlotOccupiedCount = 0");
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

/** Impl signature for TournamentBracketSystem.enableParentMatch (async). User supplies this. */
export type TournamentBracketSystemEnableParentMatchAsyncImpl = (self: TournamentBracketSystem) => Promise<{ self: TournamentBracketSystem; modified: { isPlayable: unknown; parentSlotOccupiedCount: unknown } }>;

/** Contract-checking wrapper for TournamentBracketSystem.enableParentMatch (async). */
export function wrapTournamentBracketSystemEnableParentMatchAsync(impl: TournamentBracketSystemEnableParentMatchAsyncImpl): (self: TournamentBracketSystem) => Promise<TournamentBracketSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount === 1))) {
      preViolations.push("[TournamentBracketSystem.enableParentMatch] pre violated: self.parentSlotOccupiedCount = 1");
    }
    if (!(!(self.isPlayable))) {
      preViolations.push("[TournamentBracketSystem.enableParentMatch] pre violated: not self.isPlayable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === true))) {
        postViolations.push("[TournamentBracketSystem.enableParentMatch] post violated: self.isPlayable = true");
      }
      if (!((__result.self.parentSlotOccupiedCount === 0))) {
        postViolations.push("[TournamentBracketSystem.enableParentMatch] post violated: self.parentSlotOccupiedCount = 0");
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

/** Impl signature for TournamentBracketSystem.resetPlayer. User supplies this. */
export type TournamentBracketSystemResetPlayerImpl = (self: TournamentBracketSystem) => { self: TournamentBracketSystem; modified: { playerLossCount: unknown } };

/** Contract-checking wrapper for TournamentBracketSystem.resetPlayer. */
export function wrapTournamentBracketSystemResetPlayer(impl: TournamentBracketSystemResetPlayerImpl): (self: TournamentBracketSystem) => TournamentBracketSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.playerLossCount === 1))) {
      preViolations.push("[TournamentBracketSystem.resetPlayer] pre violated: self.playerLossCount = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.playerLossCount === 0))) {
        postViolations.push("[TournamentBracketSystem.resetPlayer] post violated: self.playerLossCount = 0");
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

/** Impl signature for TournamentBracketSystem.resetPlayer (async). User supplies this. */
export type TournamentBracketSystemResetPlayerAsyncImpl = (self: TournamentBracketSystem) => Promise<{ self: TournamentBracketSystem; modified: { playerLossCount: unknown } }>;

/** Contract-checking wrapper for TournamentBracketSystem.resetPlayer (async). */
export function wrapTournamentBracketSystemResetPlayerAsync(impl: TournamentBracketSystemResetPlayerAsyncImpl): (self: TournamentBracketSystem) => Promise<TournamentBracketSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.playerLossCount === 1))) {
      preViolations.push("[TournamentBracketSystem.resetPlayer] pre violated: self.playerLossCount = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.playerLossCount === 0))) {
        postViolations.push("[TournamentBracketSystem.resetPlayer] post violated: self.playerLossCount = 0");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer. User supplies this. */
export type TournamentBracketSystemFormalizedRejectMatchForEliminatedPlayerImpl = (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => { self: TournamentBracketSystemFormalized; modified: {} };

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer. */
export function wrapTournamentBracketSystemFormalizedRejectMatchForEliminatedPlayer(impl: TournamentBracketSystemFormalizedRejectMatchForEliminatedPlayerImpl): (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => TournamentBracketSystemFormalized {
  return (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!((self.playerLossCount === 1))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer] pre violated: self.playerLossCount = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
      "self.playerLossCount": self.playerLossCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchCount === __pre["self.matchCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer] post violated: self.matchCount = self.matchCount@pre");
      }
      if (!((__result.self.playerLossCount === __pre["self.playerLossCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer] post violated: self.playerLossCount = self.playerLossCount@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer (async). User supplies this. */
export type TournamentBracketSystemFormalizedRejectMatchForEliminatedPlayerAsyncImpl = (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => Promise<{ self: TournamentBracketSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer (async). */
export function wrapTournamentBracketSystemFormalizedRejectMatchForEliminatedPlayerAsync(impl: TournamentBracketSystemFormalizedRejectMatchForEliminatedPlayerAsyncImpl): (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => Promise<TournamentBracketSystemFormalized> {
  return async (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!((self.playerLossCount === 1))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer] pre violated: self.playerLossCount = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
      "self.playerLossCount": self.playerLossCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchCount === __pre["self.matchCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer] post violated: self.matchCount = self.matchCount@pre");
      }
      if (!((__result.self.playerLossCount === __pre["self.playerLossCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchForEliminatedPlayer] post violated: self.playerLossCount = self.playerLossCount@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectInvalidScore. User supplies this. */
export type TournamentBracketSystemFormalizedRejectInvalidScoreImpl = (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => { self: TournamentBracketSystemFormalized; modified: {} };

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectInvalidScore. */
export function wrapTournamentBracketSystemFormalizedRejectInvalidScore(impl: TournamentBracketSystemFormalizedRejectInvalidScoreImpl): (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => TournamentBracketSystemFormalized {
  return (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!(!((((playerAScore === self.targetScore) && (playerBScore < self.targetScore)) || ((playerBScore === self.targetScore) && (playerAScore < self.targetScore)))))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectInvalidScore] pre violated: not ((playerAScore = self.targetScore and playerBScore < self.targetScore)\n              or (playerBScore = self.targetScore and playerAScore < self.targetScore))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
      "self.playerLossCount": self.playerLossCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchCount === __pre["self.matchCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectInvalidScore] post violated: self.matchCount = self.matchCount@pre");
      }
      if (!((__result.self.playerLossCount === __pre["self.playerLossCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectInvalidScore] post violated: self.playerLossCount = self.playerLossCount@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectInvalidScore (async). User supplies this. */
export type TournamentBracketSystemFormalizedRejectInvalidScoreAsyncImpl = (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => Promise<{ self: TournamentBracketSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectInvalidScore (async). */
export function wrapTournamentBracketSystemFormalizedRejectInvalidScoreAsync(impl: TournamentBracketSystemFormalizedRejectInvalidScoreAsyncImpl): (self: TournamentBracketSystemFormalized, playerAScore: number, playerBScore: number) => Promise<TournamentBracketSystemFormalized> {
  return async (self, playerAScore, playerBScore) => {
    const preViolations: string[] = [];
    if (!(!((((playerAScore === self.targetScore) && (playerBScore < self.targetScore)) || ((playerBScore === self.targetScore) && (playerAScore < self.targetScore)))))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectInvalidScore] pre violated: not ((playerAScore = self.targetScore and playerBScore < self.targetScore)\n              or (playerBScore = self.targetScore and playerAScore < self.targetScore))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
      "self.playerLossCount": self.playerLossCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, playerAScore, playerBScore);
      const postViolations: string[] = [];
      if (!((__result.self.matchCount === __pre["self.matchCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectInvalidScore] post violated: self.matchCount = self.matchCount@pre");
      }
      if (!((__result.self.playerLossCount === __pre["self.playerLossCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectInvalidScore] post violated: self.playerLossCount = self.playerLossCount@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectSlotAlreadyFilled. User supplies this. */
export type TournamentBracketSystemFormalizedRejectSlotAlreadyFilledImpl = (self: TournamentBracketSystemFormalized) => { self: TournamentBracketSystemFormalized; modified: {} };

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectSlotAlreadyFilled. */
export function wrapTournamentBracketSystemFormalizedRejectSlotAlreadyFilled(impl: TournamentBracketSystemFormalizedRejectSlotAlreadyFilledImpl): (self: TournamentBracketSystemFormalized) => TournamentBracketSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount >= 1))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectSlotAlreadyFilled] pre violated: self.parentSlotOccupiedCount >= 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
      "self.isPlayable": self.isPlayable,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.parentSlotOccupiedCount === __pre["self.parentSlotOccupiedCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectSlotAlreadyFilled] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre");
      }
      if (!((__result.self.isPlayable === __pre["self.isPlayable"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectSlotAlreadyFilled] post violated: self.isPlayable = self.isPlayable@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectSlotAlreadyFilled (async). User supplies this. */
export type TournamentBracketSystemFormalizedRejectSlotAlreadyFilledAsyncImpl = (self: TournamentBracketSystemFormalized) => Promise<{ self: TournamentBracketSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectSlotAlreadyFilled (async). */
export function wrapTournamentBracketSystemFormalizedRejectSlotAlreadyFilledAsync(impl: TournamentBracketSystemFormalizedRejectSlotAlreadyFilledAsyncImpl): (self: TournamentBracketSystemFormalized) => Promise<TournamentBracketSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.parentSlotOccupiedCount >= 1))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectSlotAlreadyFilled] pre violated: self.parentSlotOccupiedCount >= 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.parentSlotOccupiedCount": self.parentSlotOccupiedCount,
      "self.isPlayable": self.isPlayable,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.parentSlotOccupiedCount === __pre["self.parentSlotOccupiedCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectSlotAlreadyFilled] post violated: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre");
      }
      if (!((__result.self.isPlayable === __pre["self.isPlayable"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectSlotAlreadyFilled] post violated: self.isPlayable = self.isPlayable@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectMatchNotPlayable. User supplies this. */
export type TournamentBracketSystemFormalizedRejectMatchNotPlayableImpl = (self: TournamentBracketSystemFormalized) => { self: TournamentBracketSystemFormalized; modified: {} };

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectMatchNotPlayable. */
export function wrapTournamentBracketSystemFormalizedRejectMatchNotPlayable(impl: TournamentBracketSystemFormalizedRejectMatchNotPlayableImpl): (self: TournamentBracketSystemFormalized) => TournamentBracketSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isPlayable))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectMatchNotPlayable] pre violated: not self.isPlayable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === false))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchNotPlayable] post violated: self.isPlayable = false");
      }
      if (!((__result.self.matchCount === __pre["self.matchCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchNotPlayable] post violated: self.matchCount = self.matchCount@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectMatchNotPlayable (async). User supplies this. */
export type TournamentBracketSystemFormalizedRejectMatchNotPlayableAsyncImpl = (self: TournamentBracketSystemFormalized) => Promise<{ self: TournamentBracketSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectMatchNotPlayable (async). */
export function wrapTournamentBracketSystemFormalizedRejectMatchNotPlayableAsync(impl: TournamentBracketSystemFormalizedRejectMatchNotPlayableAsyncImpl): (self: TournamentBracketSystemFormalized) => Promise<TournamentBracketSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isPlayable))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectMatchNotPlayable] pre violated: not self.isPlayable");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.matchCount": self.matchCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isPlayable === false))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchNotPlayable] post violated: self.isPlayable = false");
      }
      if (!((__result.self.matchCount === __pre["self.matchCount"]))) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectMatchNotPlayable] post violated: self.matchCount = self.matchCount@pre");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod. User supplies this. */
export type TournamentBracketSystemFormalizedRejectDataAccessAfterRetentionPeriodImpl = (self: TournamentBracketSystemFormalized) => { self: TournamentBracketSystemFormalized; modified: {} };

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod. */
export function wrapTournamentBracketSystemFormalizedRejectDataAccessAfterRetentionPeriod(impl: TournamentBracketSystemFormalizedRejectDataAccessAfterRetentionPeriodImpl): (self: TournamentBracketSystemFormalized) => TournamentBracketSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.dataRetentionDays > 365))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod] pre violated: self.dataRetentionDays > 365");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod] post violated: true");
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

/** Impl signature for TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod (async). User supplies this. */
export type TournamentBracketSystemFormalizedRejectDataAccessAfterRetentionPeriodAsyncImpl = (self: TournamentBracketSystemFormalized) => Promise<{ self: TournamentBracketSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod (async). */
export function wrapTournamentBracketSystemFormalizedRejectDataAccessAfterRetentionPeriodAsync(impl: TournamentBracketSystemFormalizedRejectDataAccessAfterRetentionPeriodAsyncImpl): (self: TournamentBracketSystemFormalized) => Promise<TournamentBracketSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.dataRetentionDays > 365))) {
      preViolations.push("[TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod] pre violated: self.dataRetentionDays > 365");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod] post violated: true");
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

/** Lifecycle registry for ValidScoresCommitment commitments. */
export class ValidScoresCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ValidScoresCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ValidScoresCommitment — the typed wrapper guarantees that since
    // `register` only accepts ValidScoresCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ValidScoresCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ValidScoresCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ValidScoresCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ValidScoresCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ValidScoresCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ValidScoresCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SingleEliminationCommitment commitments. */
export class SingleEliminationCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SingleEliminationCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SingleEliminationCommitment — the typed wrapper guarantees that since
    // `register` only accepts SingleEliminationCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SingleEliminationCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SingleEliminationCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SingleEliminationCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SingleEliminationCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SingleEliminationCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SingleEliminationCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for CorrectAdvancementCommitment commitments. */
export class CorrectAdvancementCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CorrectAdvancementCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CorrectAdvancementCommitment — the typed wrapper guarantees that since
    // `register` only accepts CorrectAdvancementCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CorrectAdvancementCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CorrectAdvancementCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CorrectAdvancementCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CorrectAdvancementCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CorrectAdvancementCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CorrectAdvancementCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ParentGatingCommitment commitments. */
export class ParentGatingCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ParentGatingCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ParentGatingCommitment — the typed wrapper guarantees that since
    // `register` only accepts ParentGatingCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ParentGatingCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ParentGatingCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ParentGatingCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ParentGatingCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ParentGatingCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ParentGatingCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

