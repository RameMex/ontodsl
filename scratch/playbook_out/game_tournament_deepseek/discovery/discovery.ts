// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───


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

