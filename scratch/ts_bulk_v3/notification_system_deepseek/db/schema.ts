// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const alertManagers = sqliteTable("alert_manager", {
  alertManagerId: text("alert_manager_id").primaryKey(),
  maxDeliveredPerChannel: integer("max_delivered_per_channel").notNull(),
  allowedRetries: integer("allowed_retries").notNull(),
  backoffBaseSeconds: integer("backoff_base_seconds").notNull(),
  alertThreshold: integer("alert_threshold").notNull(),
  alertCount: integer("alert_count").notNull(),
});

export type AlertManagerRow = typeof alertManagers.$inferSelect;

export const channels = sqliteTable("channel", {
  channelId: text("channel_id").primaryKey(),
  channelType: text("channel_type").notNull(),
  maxRetries: integer("max_retries").notNull(),
});

export type ChannelRow = typeof channels.$inferSelect;

export const deliveryAttempts = sqliteTable("delivery_attempt", {
  attemptId: text("attempt_id").primaryKey(),
  requestId: text("request_id").notNull(),
  channelId: text("channel_id").notNull(),
  attemptNumber: integer("attempt_number").notNull(),
  scheduledAt: integer("scheduled_at").notNull(),
  result: text("result").notNull(),
});

export type DeliveryAttemptRow = typeof deliveryAttempts.$inferSelect;

export const deliveryOrchestrators = sqliteTable("delivery_orchestrator", {
  orchestratorId: text("orchestrator_id").primaryKey(),
  maxDeliveredPerChannel: integer("max_delivered_per_channel").notNull(),
  allowedRetries: integer("allowed_retries").notNull(),
  backoffBaseSeconds: integer("backoff_base_seconds").notNull(),
  alertThreshold: integer("alert_threshold").notNull(),
  totalDeliveries: integer("total_deliveries").notNull(),
});

export type DeliveryOrchestratorRow = typeof deliveryOrchestrators.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  classification: text("classification").notNull(),
  isPassive: integer("is_passive", { mode: "boolean" }).notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const notificationDispatcherSystems = sqliteTable("notification_dispatcher_system", {
  systemId: text("system_id").primaryKey(),
  maxDeliveredPerChannel: integer("max_delivered_per_channel").notNull(),
  allowedRetries: integer("allowed_retries").notNull(),
  backoffBaseSeconds: integer("backoff_base_seconds").notNull(),
  alertThreshold: integer("alert_threshold").notNull(),
  deliveryCount: integer("delivery_count").notNull(),
  retryCount: integer("retry_count").notNull(),
  alertsRaisedCount: integer("alerts_raised_count").notNull(),
  currentRetrySeconds: integer("current_retry_seconds").notNull(),
});

export type NotificationDispatcherSystemRow = typeof notificationDispatcherSystems.$inferSelect;

export const notificationRequests = sqliteTable("notification_request", {
  requestId: text("request_id").primaryKey(),
  recipient: text("recipient").notNull(),
  messageBody: text("message_body").notNull(),
  channelList: text("channel_list").notNull(),
});

export type NotificationRequestRow = typeof notificationRequests.$inferSelect;

export const requestIngestors = sqliteTable("request_ingestor", {
  ingestorId: text("ingestor_id").primaryKey(),
  maxDeliveredPerChannel: integer("max_delivered_per_channel").notNull(),
  allowedRetries: integer("allowed_retries").notNull(),
  backoffBaseSeconds: integer("backoff_base_seconds").notNull(),
  alertThreshold: integer("alert_threshold").notNull(),
  processedRequestCount: integer("processed_request_count").notNull(),
  totalRequestsIntaken: integer("total_requests_intaken").notNull(),
});

export type RequestIngestorRow = typeof requestIngestors.$inferSelect;

export const retrySchedulers = sqliteTable("retry_scheduler", {
  schedulerId: text("scheduler_id").primaryKey(),
  maxDeliveredPerChannel: integer("max_delivered_per_channel").notNull(),
  allowedRetries: integer("allowed_retries").notNull(),
  backoffBaseSeconds: integer("backoff_base_seconds").notNull(),
  alertThreshold: integer("alert_threshold").notNull(),
  activeRetryCount: integer("active_retry_count").notNull(),
  currentBackoffSeconds: integer("current_backoff_seconds").notNull(),
  totalRetriesScheduled: integer("total_retries_scheduled").notNull(),
});

export type RetrySchedulerRow = typeof retrySchedulers.$inferSelect;
