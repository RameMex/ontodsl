// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const auditTrails = sqliteTable("audit_trail", {
  auditTrailId: text("audit_trail_id").primaryKey(),
});

export type AuditTrailRow = typeof auditTrails.$inferSelect;

export const chatModerationSystems = sqliteTable("chat_moderation_system", {
  systemId: text("system_id").primaryKey(),
  p95ReviewHours: real("p95_review_hours").notNull(),
  classifierAvailable: integer("classifier_available", { mode: "boolean" }).notNull(),
});

export type ChatModerationSystemRow = typeof chatModerationSystems.$inferSelect;

export const chatModerationSystemFormalizeds = sqliteTable("chat_moderation_system_formalized", {
  id: text("id").primaryKey(),
  dsaStatementOfReasons: text("dsa_statement_of_reasons").notNull(),
  dsaRedressMechanism: text("dsa_redress_mechanism").notNull(),
  dsaModerationFrequency: text("dsa_moderation_frequency").notNull(),
  gdprProcessingPurpose: text("gdpr_processing_purpose").notNull(),
  tsPolicyVersion: text("ts_policy_version").notNull(),
  tsPolicyEffectiveDate: text("ts_policy_effective_date").notNull(),
  tsPolicyBodyUrl: text("ts_policy_body_url").notNull(),
});

export type ChatModerationSystemFormalizedRow = typeof chatModerationSystemFormalizeds.$inferSelect;

export const classifiers = sqliteTable("classifier", {
  classifierId: text("classifier_id").primaryKey(),
  confidence: real("confidence").notNull(),
});

export type ClassifierRow = typeof classifiers.$inferSelect;

export const classifierServices = sqliteTable("classifier_service", {
  classifierServiceId: text("classifier_service_id").primaryKey(),
  lastConfidence: real("last_confidence").notNull(),
  available: integer("available", { mode: "boolean" }).notNull(),
});

export type ClassifierServiceRow = typeof classifierServices.$inferSelect;

export const decisionEngines = sqliteTable("decision_engine", {
  engineId: text("engine_id").primaryKey(),
  threshold: real("threshold").notNull(),
});

export type DecisionEngineRow = typeof decisionEngines.$inferSelect;

export const deliveryServices = sqliteTable("delivery_service", {
  deliveryServiceId: text("delivery_service_id").primaryKey(),
});

export type DeliveryServiceRow = typeof deliveryServices.$inferSelect;

export const escalationServices = sqliteTable("escalation_service", {
  escalationServiceId: text("escalation_service_id").primaryKey(),
  slaDurationHours: real("sla_duration_hours").notNull(),
});

export type EscalationServiceRow = typeof escalationServices.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  assumptionText: text("assumption_text").notNull(),
  responsibleParty: text("responsible_party").notNull(),
  statusAtFormalization: text("status_at_formalization").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const messages = sqliteTable("message", {
  messageId: text("message_id").primaryKey(),
  senderId: text("sender_id").notNull(),
  recipientId: text("recipient_id").notNull(),
  messageBody: text("message_body").notNull(),
  riskLevel: text("risk_level").notNull(),
});

export type MessageRow = typeof messages.$inferSelect;

export const messageIngestors = sqliteTable("message_ingestor", {
  ingestorId: text("ingestor_id").primaryKey(),
});

export type MessageIngestorRow = typeof messageIngestors.$inferSelect;

export const moderationDecisions = sqliteTable("moderation_decision", {
  decisionId: text("decision_id").primaryKey(),
  outcome: text("outcome").notNull(),
  classifierConfidence: real("classifier_confidence").notNull(),
  thresholdUsed: real("threshold_used").notNull(),
  timestamp: text("timestamp").notNull(),
});

export type ModerationDecisionRow = typeof moderationDecisions.$inferSelect;

export const moderatorInterfaces = sqliteTable("moderator_interface", {
  moderatorInterfaceId: text("moderator_interface_id").primaryKey(),
  assignedModerator: text("assigned_moderator").notNull(),
});

export type ModeratorInterfaceRow = typeof moderatorInterfaces.$inferSelect;

export const pendingReviewQueues = sqliteTable("pending_review_queue", {
  queueId: text("queue_id").primaryKey(),
});

export type PendingReviewQueueRow = typeof pendingReviewQueues.$inferSelect;
