// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const accessControlGatewayRegulatoryBodies = sqliteTable("access_control_gateway_regulatory_body", {
  regulatoryId: text("regulatory_id").primaryKey(),
  certificationDate: real("certification_date").notNull(),
  pciDssVersion: text("pci_dss_version").notNull(),
  cardholderDataScope: text("cardholder_data_scope").notNull(),
  securityLevel: text("security_level").notNull(),
  zoneModelDocumented: integer("zone_model_documented", { mode: "boolean" }).notNull(),
  retentionYears: real("retention_years").notNull(),
  financialScope: text("financial_scope").notNull(),
});

export type AccessControlGatewayRegulatoryBodyRow = typeof accessControlGatewayRegulatoryBodies.$inferSelect;

export const accessControlGatewaySystems = sqliteTable("access_control_gateway_system", {
  systemId: text("system_id").primaryKey(),
  tolerance: real("tolerance").notNull(),
  maxAuditLatencyMs: real("max_audit_latency_ms").notNull(),
  maxRoleExpiryDays: real("max_role_expiry_days").notNull(),
  maxP99LatencyMs: real("max_p99_latency_ms").notNull(),
  requestedPermission: text("requested_permission").notNull(),
  decisionOutcome: text("decision_outcome").notNull(),
  lastDecisionTimestamp: real("last_decision_timestamp").notNull(),
  p99LatencyRunning: real("p99_latency_running").notNull(),
});

export type AccessControlGatewaySystemRow = typeof accessControlGatewaySystems.$inferSelect;

export const accessControlGatewaySystemFormalizeds = sqliteTable("access_control_gateway_system_formalized", {
  id: text("id").primaryKey(),
  roleLastUsed: real("role_last_used").notNull(),
});

export type AccessControlGatewaySystemFormalizedRow = typeof accessControlGatewaySystemFormalizeds.$inferSelect;

export const auditEntries = sqliteTable("audit_entry", {
  entryId: text("entry_id").primaryKey(),
  timestamp: real("timestamp").notNull(),
  subjectId: text("subject_id").notNull(),
  permissionId: text("permission_id").notNull(),
  outcome: text("outcome").notNull(),
  isImmutable: integer("is_immutable", { mode: "boolean" }).notNull(),
});

export type AuditEntryRow = typeof auditEntries.$inferSelect;

export const auditLoggers = sqliteTable("audit_logger", {
  loggerId: text("logger_id").primaryKey(),
  lastWriteTimestamp: real("last_write_timestamp").notNull(),
  maxAuditLatencyMs: real("max_audit_latency_ms").notNull(),
  maxP99LatencyMs: real("max_p99_latency_ms").notNull(),
});

export type AuditLoggerRow = typeof auditLoggers.$inferSelect;

export const decisionEngines = sqliteTable("decision_engine", {
  decisionId: text("decision_id").primaryKey(),
  lastDecisionOutcome: text("last_decision_outcome").notNull(),
  lastDecisionTimestamp: real("last_decision_timestamp").notNull(),
  requestedPermissionId: text("requested_permission_id").notNull(),
  subjectToken: text("subject_token").notNull(),
  tolerance: real("tolerance").notNull(),
  maxAuditLatencyMs: real("max_audit_latency_ms").notNull(),
  maxP99LatencyMs: real("max_p99_latency_ms").notNull(),
  maxRoleExpiryDays: real("max_role_expiry_days").notNull(),
});

export type DecisionEngineRow = typeof decisionEngines.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  riskLevel: text("risk_level").notNull(),
  mitigationStrategy: text("mitigation_strategy").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const latencyMonitors = sqliteTable("latency_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  p99Latency: real("p99_latency").notNull(),
  peakLatency: real("peak_latency").notNull(),
  observationCount: integer("observation_count").notNull(),
  maxP99LatencyMs: real("max_p99_latency_ms").notNull(),
});

export type LatencyMonitorRow = typeof latencyMonitors.$inferSelect;

export const permissions = sqliteTable("permission", {
  permissionId: text("permission_id").primaryKey(),
  action: text("action").notNull(),
  resource: text("resource").notNull(),
});

export type PermissionRow = typeof permissions.$inferSelect;

export const policyEngines = sqliteTable("policy_engine", {
  engineId: text("engine_id").primaryKey(),
  lastComputationTimestamp: real("last_computation_timestamp").notNull(),
  tolerance: real("tolerance").notNull(),
  maxRoleExpiryDays: real("max_role_expiry_days").notNull(),
});

export type PolicyEngineRow = typeof policyEngines.$inferSelect;

export const roleExpirationJobs = sqliteTable("role_expiration_job", {
  jobId: text("job_id").primaryKey(),
  lastRunTimestamp: real("last_run_timestamp").notNull(),
  expiredRoleCount: integer("expired_role_count").notNull(),
  roleLastUsed: real("role_last_used").notNull(),
  maxRoleExpiryDays: real("max_role_expiry_days").notNull(),
  maxP99LatencyMs: real("max_p99_latency_ms").notNull(),
});

export type RoleExpirationJobRow = typeof roleExpirationJobs.$inferSelect;

export const tokenResolvers = sqliteTable("token_resolver", {
  resolverId: text("resolver_id").primaryKey(),
  token: text("token").notNull(),
  lastResolutionTimestamp: real("last_resolution_timestamp").notNull(),
  tolerance: real("tolerance").notNull(),
  maxRoleExpiryDays: real("max_role_expiry_days").notNull(),
});

export type TokenResolverRow = typeof tokenResolvers.$inferSelect;
