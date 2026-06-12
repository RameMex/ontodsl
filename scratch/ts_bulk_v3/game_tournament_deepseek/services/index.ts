// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { bracketManagers, matchScorers, playerTrackers, tournamentBracketSystemFormalizeds, tournamentBracketSystems } from "../db/schema.js";
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

// ─── Events on BracketManager ───

export async function fillParentSlot(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.parentSlotFilled
  //   pre: self.parentSlotOccupiedCount < 1
  // Post-conditions from spec:
  //   post: self.parentSlotFilled = true
  //   post: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre + 1
  //   post: self.childrenResolved = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bracketManagers).set({
      parentSlotFilled: true,
      parentSlotOccupiedCount: sql`${bracketManagers.parentSlotOccupiedCount} + ${1}`,
      childrenResolved: true,
    }).where(eq(bracketManagers.managerId, __selfId));
    // After mutation: re-validate against `validateBracketManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bracketManagers).where(eq(bracketManagers.managerId, __selfId)).get();
    // assertNoViolations(validateBracketManager(row as never), "fillParentSlot");
  });
}

export async function enableParentMatch(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.parentSlotOccupiedCount = 1
  //   pre: not self.isPlayable
  //   pre: self.childrenResolved
  // Post-conditions from spec:
  //   post: self.isPlayable = true
  //   post: self.parentSlotOccupiedCount = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bracketManagers).set({
      isPlayable: true,
      parentSlotOccupiedCount: 0,
    }).where(eq(bracketManagers.managerId, __selfId));
    // After mutation: re-validate against `validateBracketManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bracketManagers).where(eq(bracketManagers.managerId, __selfId)).get();
    // assertNoViolations(validateBracketManager(row as never), "enableParentMatch");
  });
}

export async function rejectSlotAlreadyFilled(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.parentSlotOccupiedCount >= 1
  // Post-conditions from spec:
  //   post: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre
  //   post: self.isPlayable = self.isPlayable@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bracketManagers).set({
      parentSlotOccupiedCount: sql`${bracketManagers.parentSlotOccupiedCount}`,
      isPlayable: sql`${bracketManagers.isPlayable}`,
    }).where(eq(bracketManagers.managerId, __selfId));
    // After mutation: re-validate against `validateBracketManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bracketManagers).where(eq(bracketManagers.managerId, __selfId)).get();
    // assertNoViolations(validateBracketManager(row as never), "rejectSlotAlreadyFilled");
  });
}

export async function rejectMatchNotPlayable(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isPlayable
  // Post-conditions from spec:
  //   post: self.isPlayable = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bracketManagers).set({
      isPlayable: false,
    }).where(eq(bracketManagers.managerId, __selfId));
    // After mutation: re-validate against `validateBracketManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bracketManagers).where(eq(bracketManagers.managerId, __selfId)).get();
    // assertNoViolations(validateBracketManager(row as never), "rejectMatchNotPlayable");
  });
}

// ─── Events on MatchScorer ───

export async function recordMatchScore(__selfId: string, playerAScore: number, playerBScore: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: playerAScore >= 0.0
  //   pre: playerBScore >= 0.0
  //   pre: not self.matchDecided
  //   pre: (playerAScore = self.targetScore and playerBScore < self.targetScore)
  // Post-conditions from spec:
  //   post: self.matchDecided = true
  //   post: self.winnerScore = if playerAScore = self.targetScore then playerAScore else playerBScore endif
  //   post: self.loserScore = if playerAScore = self.targetScore then playerBScore else playerAScore endif
  //   post: self.matchCount = self.matchCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(matchScorers).set({
      matchDecided: true,
      matchCount: sql`${matchScorers.matchCount} + ${1}`,
    }).where(eq(matchScorers.scorerId, __selfId));
    // After mutation: re-validate against `validateMatchScorer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(matchScorers).where(eq(matchScorers.scorerId, __selfId)).get();
    // assertNoViolations(validateMatchScorer(row as never), "recordMatchScore");
  });
}

// ─── Events on PlayerTracker ───

export async function rejectEliminatedPlayer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isEliminated = true
  // Post-conditions from spec:
  //   post: self.isEliminated = true
  //   post: self.playerLossCount = self.playerLossCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(playerTrackers).set({
      isEliminated: true,
      playerLossCount: sql`${playerTrackers.playerLossCount}`,
    }).where(eq(playerTrackers.trackerId, __selfId));
    // After mutation: re-validate against `validatePlayerTracker` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(playerTrackers).where(eq(playerTrackers.trackerId, __selfId)).get();
    // assertNoViolations(validatePlayerTracker(row as never), "rejectEliminatedPlayer");
  });
}

export async function recordElimination(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isEliminated
  //   pre: self.playerLossCount = 0
  // Post-conditions from spec:
  //   post: self.playerLossCount = 1
  //   post: self.isEliminated = true
  //   post: self.playersEliminatedCount = self.playersEliminatedCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(playerTrackers).set({
      playerLossCount: 1,
      isEliminated: true,
      playersEliminatedCount: sql`${playerTrackers.playersEliminatedCount} + ${1}`,
    }).where(eq(playerTrackers.trackerId, __selfId));
    // After mutation: re-validate against `validatePlayerTracker` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(playerTrackers).where(eq(playerTrackers.trackerId, __selfId)).get();
    // assertNoViolations(validatePlayerTracker(row as never), "recordElimination");
  });
}

export async function resetPlayerForNextMatch(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.playerLossCount = 1
  //   pre: not self.isEliminated
  // Post-conditions from spec:
  //   post: self.playerLossCount = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(playerTrackers).set({
      playerLossCount: 0,
    }).where(eq(playerTrackers.trackerId, __selfId));
    // After mutation: re-validate against `validatePlayerTracker` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(playerTrackers).where(eq(playerTrackers.trackerId, __selfId)).get();
    // assertNoViolations(validatePlayerTracker(row as never), "resetPlayerForNextMatch");
  });
}

// ─── Events on TournamentBracketSystem ───

export async function reportMatchScore(__selfId: string, playerAScore: number, playerBScore: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: playerAScore >= 0.0
  //   pre: playerBScore >= 0.0
  //   pre: self.isPlayable = true
  //   pre: self.parentSlotOccupiedCount < 1
  //   pre: self.playerLossCount = 0
  //   pre: (playerAScore = self.targetScore and playerBScore < self.targetScore)
         or (playerBScore = self.targetScore and playerAScore < self.targetScore)
  // Post-conditions from spec:
  //   post: self.matchCount = self.matchCount@pre + 1
  //   post: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre + 1
  //   post: self.playerLossCount = 1
  //   post: self.playersEliminatedCount = self.playersEliminatedCount@pre + 1
  //   post: self.isPlayable = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystems).set({
      matchCount: sql`${tournamentBracketSystems.matchCount} + ${1}`,
      parentSlotOccupiedCount: sql`${tournamentBracketSystems.parentSlotOccupiedCount} + ${1}`,
      playerLossCount: 1,
      playersEliminatedCount: sql`${tournamentBracketSystems.playersEliminatedCount} + ${1}`,
      isPlayable: false,
    }).where(eq(tournamentBracketSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystems).where(eq(tournamentBracketSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystem(row as never), "reportMatchScore");
  });
}

export async function enableParentMatch(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.parentSlotOccupiedCount = 1
  //   pre: not self.isPlayable
  // Post-conditions from spec:
  //   post: self.isPlayable = true
  //   post: self.parentSlotOccupiedCount = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystems).set({
      isPlayable: true,
      parentSlotOccupiedCount: 0,
    }).where(eq(tournamentBracketSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystems).where(eq(tournamentBracketSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystem(row as never), "enableParentMatch");
  });
}

export async function resetPlayer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.playerLossCount = 1
  // Post-conditions from spec:
  //   post: self.playerLossCount = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystems).set({
      playerLossCount: 0,
    }).where(eq(tournamentBracketSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystems).where(eq(tournamentBracketSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystem(row as never), "resetPlayer");
  });
}

// ─── Events on TournamentBracketSystemFormalized ───

export async function rejectMatchForEliminatedPlayer(__selfId: string, playerAScore: number, playerBScore: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.playerLossCount = 1
  // Post-conditions from spec:
  //   post: self.matchCount = self.matchCount@pre
  //   post: self.playerLossCount = self.playerLossCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystemFormalizeds).set({
      matchCount: sql`${tournamentBracketSystemFormalizeds.matchCount}`,
      playerLossCount: sql`${tournamentBracketSystemFormalizeds.playerLossCount}`,
    }).where(eq(tournamentBracketSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystemFormalizeds).where(eq(tournamentBracketSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystemFormalized(row as never), "rejectMatchForEliminatedPlayer");
  });
}

export async function rejectInvalidScore(__selfId: string, playerAScore: number, playerBScore: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not ((playerAScore = self.targetScore and playerBScore < self.targetScore)
              or (playerBScore = self.targetScore and playerAScore < self.targetScore))
  // Post-conditions from spec:
  //   post: self.matchCount = self.matchCount@pre
  //   post: self.playerLossCount = self.playerLossCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystemFormalizeds).set({
      matchCount: sql`${tournamentBracketSystemFormalizeds.matchCount}`,
      playerLossCount: sql`${tournamentBracketSystemFormalizeds.playerLossCount}`,
    }).where(eq(tournamentBracketSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystemFormalizeds).where(eq(tournamentBracketSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystemFormalized(row as never), "rejectInvalidScore");
  });
}

export async function rejectSlotAlreadyFilled(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.parentSlotOccupiedCount >= 1
  // Post-conditions from spec:
  //   post: self.parentSlotOccupiedCount = self.parentSlotOccupiedCount@pre
  //   post: self.isPlayable = self.isPlayable@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystemFormalizeds).set({
      parentSlotOccupiedCount: sql`${tournamentBracketSystemFormalizeds.parentSlotOccupiedCount}`,
      isPlayable: sql`${tournamentBracketSystemFormalizeds.isPlayable}`,
    }).where(eq(tournamentBracketSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystemFormalizeds).where(eq(tournamentBracketSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystemFormalized(row as never), "rejectSlotAlreadyFilled");
  });
}

export async function rejectMatchNotPlayable(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isPlayable
  // Post-conditions from spec:
  //   post: self.isPlayable = false
  //   post: self.matchCount = self.matchCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(tournamentBracketSystemFormalizeds).set({
      isPlayable: false,
      matchCount: sql`${tournamentBracketSystemFormalizeds.matchCount}`,
    }).where(eq(tournamentBracketSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateTournamentBracketSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(tournamentBracketSystemFormalizeds).where(eq(tournamentBracketSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateTournamentBracketSystemFormalized(row as never), "rejectMatchNotPlayable");
  });
}

export async function rejectDataAccessAfterRetentionPeriod(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.dataRetentionDays > 365
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'TournamentBracketSystemFormalized.rejectDataAccessAfterRetentionPeriod'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectDataAccessAfterRetentionPeriod");
}
