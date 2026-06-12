// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const bracketManagers = sqliteTable("bracket_manager", {
  managerId: text("manager_id").primaryKey(),
  parentSlotFilled: integer("parent_slot_filled", { mode: "boolean" }).notNull(),
  parentSlotOccupiedCount: integer("parent_slot_occupied_count").notNull(),
  isPlayable: integer("is_playable", { mode: "boolean" }).notNull(),
  childrenResolved: integer("children_resolved", { mode: "boolean" }).notNull(),
});

export type BracketManagerRow = typeof bracketManagers.$inferSelect;

export const bracketSlots = sqliteTable("bracket_slot", {
  slotId: text("slot_id").primaryKey(),
  depth: integer("depth").notNull(),
  position: integer("position").notNull(),
  parentSlotOccupiedCount: integer("parent_slot_occupied_count").notNull(),
  winnerAssigned: integer("winner_assigned", { mode: "boolean" }).notNull(),
});

export type BracketSlotRow = typeof bracketSlots.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  assumptionDescription: text("assumption_description").notNull(),
  assumptionRationale: text("assumption_rationale").notNull(),
  assumptionRisk: text("assumption_risk").notNull(),
  assumedBy: text("assumed_by").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const matches = sqliteTable("match", {
  matchId: text("match_id").primaryKey(),
  round: integer("round").notNull(),
  slot: integer("slot").notNull(),
  targetScore: real("target_score").notNull(),
  winnerScore: real("winner_score").notNull(),
  loserScore: real("loser_score").notNull(),
  matchDecided: integer("match_decided", { mode: "boolean" }).notNull(),
  isPlayable: integer("is_playable", { mode: "boolean" }).notNull(),
});

export type MatchRow = typeof matches.$inferSelect;

export const matchScorers = sqliteTable("match_scorer", {
  scorerId: text("scorer_id").primaryKey(),
  targetScore: real("target_score").notNull(),
  winnerScore: real("winner_score").notNull(),
  loserScore: real("loser_score").notNull(),
  matchDecided: integer("match_decided", { mode: "boolean" }).notNull(),
  leftChildDecided: integer("left_child_decided", { mode: "boolean" }).notNull(),
  rightChildDecided: integer("right_child_decided", { mode: "boolean" }).notNull(),
  matchCount: integer("match_count").notNull(),
});

export type MatchScorerRow = typeof matchScorers.$inferSelect;

export const playerTrackers = sqliteTable("player_tracker", {
  trackerId: text("tracker_id").primaryKey(),
  playerLossCount: integer("player_loss_count").notNull(),
  isEliminated: integer("is_eliminated", { mode: "boolean" }).notNull(),
  playersEliminatedCount: integer("players_eliminated_count").notNull(),
});

export type PlayerTrackerRow = typeof playerTrackers.$inferSelect;

export const tournamentBracketSystems = sqliteTable("tournament_bracket_system", {
  systemId: text("system_id").primaryKey(),
  targetScore: real("target_score").notNull(),
  playerLossCount: integer("player_loss_count").notNull(),
  parentSlotOccupiedCount: integer("parent_slot_occupied_count").notNull(),
  isPlayable: integer("is_playable", { mode: "boolean" }).notNull(),
  matchCount: integer("match_count").notNull(),
  playersEliminatedCount: integer("players_eliminated_count").notNull(),
});

export type TournamentBracketSystemRow = typeof tournamentBracketSystems.$inferSelect;

export const tournamentBracketSystemFormalizeds = sqliteTable("tournament_bracket_system_formalized", {
  id: text("id").primaryKey(),
  governanceStandardVersion: text("governance_standard_version").notNull(),
  certificationBody: text("certification_body").notNull(),
  antiCollusionPolicyId: text("anti_collusion_policy_id").notNull(),
  maxSimultaneousMatchesPerPlayer: integer("max_simultaneous_matches_per_player").notNull(),
  privacyPolicyVersion: text("privacy_policy_version").notNull(),
  dataRetentionDays: integer("data_retention_days").notNull(),
});

export type TournamentBracketSystemFormalizedRow = typeof tournamentBracketSystemFormalizeds.$inferSelect;
