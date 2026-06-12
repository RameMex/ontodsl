// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TokenResolver. Runtime: string. Compile-time: branded. */
export type TokenResolverId = string & { readonly __brand: "TokenResolverId" };
/** Identity type for PolicyEngine. Runtime: string. Compile-time: branded. */
export type PolicyEngineId = string & { readonly __brand: "PolicyEngineId" };
/** Identity type for DecisionEngine. Runtime: string. Compile-time: branded. */
export type DecisionEngineId = string & { readonly __brand: "DecisionEngineId" };
/** Identity type for AuditLogger. Runtime: string. Compile-time: branded. */
export type AuditLoggerId = string & { readonly __brand: "AuditLoggerId" };
/** Identity type for RoleExpirationJob. Runtime: string. Compile-time: branded. */
export type RoleExpirationJobId = string & { readonly __brand: "RoleExpirationJobId" };
/** Identity type for LatencyMonitor. Runtime: string. Compile-time: branded. */
export type LatencyMonitorId = string & { readonly __brand: "LatencyMonitorId" };
/** Identity type for TokenPolicyChannel. Runtime: string. Compile-time: branded. */
export type TokenPolicyChannelId = string & { readonly __brand: "TokenPolicyChannelId" };
/** Identity type for PolicyDecisionChannel. Runtime: string. Compile-time: branded. */
export type PolicyDecisionChannelId = string & { readonly __brand: "PolicyDecisionChannelId" };
/** Identity type for DecisionAuditChannel. Runtime: string. Compile-time: branded. */
export type DecisionAuditChannelId = string & { readonly __brand: "DecisionAuditChannelId" };
/** Identity type for ExpirationAuditChannel. Runtime: string. Compile-time: branded. */
export type ExpirationAuditChannelId = string & { readonly __brand: "ExpirationAuditChannelId" };
/** Identity type for MonitorChannel. Runtime: string. Compile-time: branded. */
export type MonitorChannelId = string & { readonly __brand: "MonitorChannelId" };
/** Identity type for AuthorizationFlowDecomposition. Runtime: string. Compile-time: branded. */
export type AuthorizationFlowDecompositionId = string & { readonly __brand: "AuthorizationFlowDecompositionId" };
/** Identity type for Subject. Runtime: string. Compile-time: branded. */
export type SubjectId = string & { readonly __brand: "SubjectId" };
/** Identity type for SecurityAuditor. Runtime: string. Compile-time: branded. */
export type SecurityAuditorId = string & { readonly __brand: "SecurityAuditorId" };
/** Identity type for GatewayVendor. Runtime: string. Compile-time: branded. */
export type GatewayVendorId = string & { readonly __brand: "GatewayVendorId" };
/** Identity type for Permission. Runtime: string. Compile-time: branded. */
export type PermissionId = string & { readonly __brand: "PermissionId" };
/** Identity type for AuditEntry. Runtime: string. Compile-time: branded. */
export type AuditEntryId = string & { readonly __brand: "AuditEntryId" };
/** Identity type for PermissionUnionCorrectness. Runtime: string. Compile-time: branded. */
export type PermissionUnionCorrectnessId = string & { readonly __brand: "PermissionUnionCorrectnessId" };
/** Identity type for AuditedDecisions. Runtime: string. Compile-time: branded. */
export type AuditedDecisionsId = string & { readonly __brand: "AuditedDecisionsId" };
/** Identity type for StaleRoleExpiration. Runtime: string. Compile-time: branded. */
export type StaleRoleExpirationId = string & { readonly __brand: "StaleRoleExpirationId" };
/** Identity type for LatencyBudget. Runtime: string. Compile-time: branded. */
export type LatencyBudgetId = string & { readonly __brand: "LatencyBudgetId" };
/** Identity type for AuthorizationFlow. Runtime: string. Compile-time: branded. */
export type AuthorizationFlowId = string & { readonly __brand: "AuthorizationFlowId" };
/** Identity type for AccessControlGatewaySystem. Runtime: string. Compile-time: branded. */
export type AccessControlGatewaySystemId = string & { readonly __brand: "AccessControlGatewaySystemId" };
/** Identity type for AccessControlGatewayRegulatoryBody. Runtime: string. Compile-time: branded. */
export type AccessControlGatewayRegulatoryBodyId = string & { readonly __brand: "AccessControlGatewayRegulatoryBodyId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TokenResolver {
  readonly resolverId: TokenResolverId;
  readonly token: string;
  readonly resolvedRoles: ReadonlySet<string>;
  readonly lastResolutionTimestamp: number;
  readonly tolerance: number;
  readonly maxRoleExpiryDays: number;
}

/** @stereotype <<Kind>> */
export interface PolicyEngine {
  readonly engineId: PolicyEngineId;
  readonly computedPermissionUnion: ReadonlySet<Permission>;
  readonly rolePermissionMap: ReadonlySet<string>;
  readonly lastComputationTimestamp: number;
  readonly tolerance: number;
  readonly maxRoleExpiryDays: number;
}

/** @stereotype <<Kind>> */
export interface DecisionEngine {
  readonly decisionId: DecisionEngineId;
  readonly lastDecisionOutcome: string;
  readonly lastDecisionTimestamp: number;
  readonly requestedPermissionId: string;
  readonly subjectToken: string;
  readonly tolerance: number;
  readonly maxAuditLatencyMs: number;
  readonly maxP99LatencyMs: number;
  readonly maxRoleExpiryDays: number;
}

/** @stereotype <<Kind>> */
export interface AuditLogger {
  readonly loggerId: AuditLoggerId;
  readonly auditLog: ReadonlySet<AuditEntry>;
  readonly lastWriteTimestamp: number;
  readonly maxAuditLatencyMs: number;
  readonly maxP99LatencyMs: number;
}

/** @stereotype <<Kind>> */
export interface RoleExpirationJob {
  readonly jobId: RoleExpirationJobId;
  readonly lastRunTimestamp: number;
  readonly expiredRoleCount: number;
  readonly roleLastUsed: number;
  readonly activeRoles: ReadonlySet<string>;
  readonly maxRoleExpiryDays: number;
  readonly maxP99LatencyMs: number;
}

/** @stereotype <<Kind>> */
export interface LatencyMonitor {
  readonly monitorId: LatencyMonitorId;
  readonly p99Latency: number;
  readonly peakLatency: number;
  readonly observationCount: number;
  readonly maxP99LatencyMs: number;
}

/** @stereotype <<Role>> */
export interface ResolverRole {
  readonly resolverId: string;
  readonly resolvedRoles: ReadonlySet<string>;
}

/** @stereotype <<Role>> */
export interface PolicyRole {
  readonly engineId: string;
  readonly computedPermissionUnion: ReadonlySet<Permission>;
}

/** @stereotype <<Relator>> */
export interface TokenPolicyChannel {
  readonly channelId: TokenPolicyChannelId;
  readonly lastTransferTimestamp: number;
  readonly transferCount: number;
}

/** @stereotype <<Role>> */
export interface PolicySideRole {
  readonly engineId: string;
  readonly computedPermissionUnion: ReadonlySet<Permission>;
}

/** @stereotype <<Role>> */
export interface DecisionSideRole {
  readonly decisionId: string;
  readonly lastDecisionOutcome: string;
}

/** @stereotype <<Relator>> */
export interface PolicyDecisionChannel {
  readonly channelId: PolicyDecisionChannelId;
  readonly lastDecisionTimestamp: number;
  readonly decisionsMade: number;
}

/** @stereotype <<Role>> */
export interface DecisionAuditRole {
  readonly decisionId: string;
  readonly lastDecisionOutcome: string;
  readonly subjectToken: string;
  readonly requestedPermissionId: string;
}

/** @stereotype <<Role>> */
export interface AuditDecisionRole {
  readonly loggerId: string;
  readonly auditLog: ReadonlySet<AuditEntry>;
}

/** @stereotype <<Relator>> */
export interface DecisionAuditChannel {
  readonly channelId: DecisionAuditChannelId;
  readonly lastAuditWriteTimestamp: number;
  readonly auditWritesCount: number;
}

/** @stereotype <<Role>> */
export interface ExpirationSourceRole {
  readonly jobId: string;
  readonly expiredRoleCount: number;
}

/** @stereotype <<Role>> */
export interface ExpirationAuditRole {
  readonly loggerId: string;
  readonly auditLog: ReadonlySet<AuditEntry>;
}

/** @stereotype <<Relator>> */
export interface ExpirationAuditChannel {
  readonly channelId: ExpirationAuditChannelId;
  readonly lastExpirationTimestamp: number;
  readonly expirationWritesCount: number;
}

/** @stereotype <<Role>> */
export interface DecisionMonitorRole {
  readonly decisionId: string;
  readonly lastDecisionOutcome: string;
  readonly lastDecisionTimestamp: number;
}

/** @stereotype <<Role>> */
export interface LatencyMonitorRole {
  readonly monitorId: string;
  readonly p99Latency: number;
}

/** @stereotype <<Relator>> */
export interface MonitorChannel {
  readonly channelId: MonitorChannelId;
  readonly lastReportedLatency: number;
  readonly latencyReportsCount: number;
}

/** @stereotype <<Happening>> */
export interface AuthorizationFlowDecomposition {
  readonly flowId: AuthorizationFlowDecompositionId;
  readonly stepSequence: ReadonlySet<string>;
}

/** @stereotype <<Agent>> */
export interface Subject {
  readonly subjectId: SubjectId;
  readonly token: string;
}

/** @stereotype <<Agent>> */
export interface SecurityAuditor {
  readonly auditorId: SecurityAuditorId;
  readonly complianceScope: string;
}

/** @stereotype <<Agent>> */
export interface GatewayVendor {
  readonly vendorId: GatewayVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Permission {
  readonly permissionId: PermissionId;
  readonly action: string;
  readonly resource: string;
}

/** @stereotype <<Kind>> */
export interface AuditEntry {
  readonly entryId: AuditEntryId;
  readonly timestamp: number;
  readonly subjectId: string;
  readonly permissionId: string;
  readonly outcome: string;
  readonly isImmutable: boolean;
}

/** @stereotype <<Commitment>> */
export interface PermissionUnionCorrectness {
  readonly commitmentId: PermissionUnionCorrectnessId;
  readonly tolerance: number;
}

/** @stereotype <<Commitment>> */
export interface AuditedDecisions {
  readonly commitmentId: AuditedDecisionsId;
  readonly maxAuditLatencyMs: number;
}

/** @stereotype <<Commitment>> */
export interface StaleRoleExpiration {
  readonly commitmentId: StaleRoleExpirationId;
  readonly maxRoleExpiryDays: number;
}

/** @stereotype <<Commitment>> */
export interface LatencyBudget {
  readonly commitmentId: LatencyBudgetId;
  readonly maxP99LatencyMs: number;
}

/** @stereotype <<Category>> */
export interface PermissionCorrectnessCategory {
}

/** @stereotype <<Category>> */
export interface AuditComplianceCategory {
}

/** @stereotype <<Category>> */
export interface StaleRoleExpiryCategory {
}

/** @stereotype <<Category>> */
export interface LatencyBudgetCategory {
}

/** @stereotype <<Happening>> */
export interface AuthorizationFlow {
  readonly flowId: AuthorizationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface AccessControlGatewaySystem extends PermissionCorrectnessCategory, AuditComplianceCategory, StaleRoleExpiryCategory, LatencyBudgetCategory {
  readonly systemId: AccessControlGatewaySystemId;
  readonly tolerance: number;
  readonly maxAuditLatencyMs: number;
  readonly maxRoleExpiryDays: number;
  readonly maxP99LatencyMs: number;
  readonly auditLog: ReadonlySet<AuditEntry>;
  readonly activeRoles: ReadonlySet<string>;
  readonly rolePermissions: ReadonlySet<Permission>;
  readonly requestedPermission: string;
  readonly decisionOutcome: string;
  readonly lastDecisionTimestamp: number;
  readonly p99LatencyRunning: number;
}

/** @stereotype <<Category>> */
export interface PciDssCompliant {
}

/** @stereotype <<Category>> */
export interface Iec62443OrEquivalent {
}

/** @stereotype <<Category>> */
export interface SoxRelevantDecisionRecord {
}

/** @stereotype <<Category>> */
export interface AuditLatencyBound {
}

/** @stereotype <<Category>> */
export interface PermissionUnionFinite {
}

/** @stereotype <<Category>> */
export interface ImmutableAuditLogContract {
}

/** @stereotype <<Kind>> */
export interface AccessControlGatewayRegulatoryBody extends PciDssCompliant, Iec62443OrEquivalent, SoxRelevantDecisionRecord {
  readonly regulatoryId: AccessControlGatewayRegulatoryBodyId;
  readonly certificationDate: number;
  readonly pciDssVersion: string;
  readonly cardholderDataScope: string;
  readonly securityLevel: string;
  readonly zoneModelDocumented: boolean;
  readonly retentionYears: number;
  readonly financialScope: string;
}

/** @stereotype <<Subkind>> */
export interface AccessControlGatewaySystemFormalized extends AccessControlGatewaySystem {
  readonly complianceAlerts: ReadonlySet<string>;
  readonly roleLastUsed: number;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly riskLevel: string;
  readonly mitigationStrategy: string;
}


// ─── Factory functions ───

export function makeTokenResolver(data: {
  resolverId: string;
  token: string;
  resolvedRoles: ReadonlySet<string>;
  lastResolutionTimestamp: number;
  tolerance: number;
  maxRoleExpiryDays: number;
}): TokenResolver {
  return {
    resolverId: data.resolverId as TokenResolverId,
    token: data.token,
    resolvedRoles: data.resolvedRoles,
    lastResolutionTimestamp: data.lastResolutionTimestamp,
    tolerance: data.tolerance,
    maxRoleExpiryDays: data.maxRoleExpiryDays,
  };
}

export function makePolicyEngine(data: {
  engineId: string;
  computedPermissionUnion: ReadonlySet<Permission>;
  rolePermissionMap: ReadonlySet<string>;
  lastComputationTimestamp: number;
  tolerance: number;
  maxRoleExpiryDays: number;
}): PolicyEngine {
  return {
    engineId: data.engineId as PolicyEngineId,
    computedPermissionUnion: data.computedPermissionUnion,
    rolePermissionMap: data.rolePermissionMap,
    lastComputationTimestamp: data.lastComputationTimestamp,
    tolerance: data.tolerance,
    maxRoleExpiryDays: data.maxRoleExpiryDays,
  };
}

export function makeDecisionEngine(data: {
  decisionId: string;
  lastDecisionOutcome: string;
  lastDecisionTimestamp: number;
  requestedPermissionId: string;
  subjectToken: string;
  tolerance: number;
  maxAuditLatencyMs: number;
  maxP99LatencyMs: number;
  maxRoleExpiryDays: number;
}): DecisionEngine {
  return {
    decisionId: data.decisionId as DecisionEngineId,
    lastDecisionOutcome: data.lastDecisionOutcome,
    lastDecisionTimestamp: data.lastDecisionTimestamp,
    requestedPermissionId: data.requestedPermissionId,
    subjectToken: data.subjectToken,
    tolerance: data.tolerance,
    maxAuditLatencyMs: data.maxAuditLatencyMs,
    maxP99LatencyMs: data.maxP99LatencyMs,
    maxRoleExpiryDays: data.maxRoleExpiryDays,
  };
}

export function makeAuditLogger(data: {
  loggerId: string;
  auditLog: ReadonlySet<AuditEntry>;
  lastWriteTimestamp: number;
  maxAuditLatencyMs: number;
  maxP99LatencyMs: number;
}): AuditLogger {
  return {
    loggerId: data.loggerId as AuditLoggerId,
    auditLog: data.auditLog,
    lastWriteTimestamp: data.lastWriteTimestamp,
    maxAuditLatencyMs: data.maxAuditLatencyMs,
    maxP99LatencyMs: data.maxP99LatencyMs,
  };
}

export function makeRoleExpirationJob(data: {
  jobId: string;
  lastRunTimestamp: number;
  expiredRoleCount: number;
  roleLastUsed: number;
  activeRoles: ReadonlySet<string>;
  maxRoleExpiryDays: number;
  maxP99LatencyMs: number;
}): RoleExpirationJob {
  return {
    jobId: data.jobId as RoleExpirationJobId,
    lastRunTimestamp: data.lastRunTimestamp,
    expiredRoleCount: data.expiredRoleCount,
    roleLastUsed: data.roleLastUsed,
    activeRoles: data.activeRoles,
    maxRoleExpiryDays: data.maxRoleExpiryDays,
    maxP99LatencyMs: data.maxP99LatencyMs,
  };
}

export function makeLatencyMonitor(data: {
  monitorId: string;
  p99Latency: number;
  peakLatency: number;
  observationCount: number;
  maxP99LatencyMs: number;
}): LatencyMonitor {
  return {
    monitorId: data.monitorId as LatencyMonitorId,
    p99Latency: data.p99Latency,
    peakLatency: data.peakLatency,
    observationCount: data.observationCount,
    maxP99LatencyMs: data.maxP99LatencyMs,
  };
}

export function makeTokenPolicyChannel(data: {
  channelId: string;
  lastTransferTimestamp: number;
  transferCount: number;
}): TokenPolicyChannel {
  return {
    channelId: data.channelId as TokenPolicyChannelId,
    lastTransferTimestamp: data.lastTransferTimestamp,
    transferCount: data.transferCount,
  };
}

export function makePolicyDecisionChannel(data: {
  channelId: string;
  lastDecisionTimestamp: number;
  decisionsMade: number;
}): PolicyDecisionChannel {
  return {
    channelId: data.channelId as PolicyDecisionChannelId,
    lastDecisionTimestamp: data.lastDecisionTimestamp,
    decisionsMade: data.decisionsMade,
  };
}

export function makeDecisionAuditChannel(data: {
  channelId: string;
  lastAuditWriteTimestamp: number;
  auditWritesCount: number;
}): DecisionAuditChannel {
  return {
    channelId: data.channelId as DecisionAuditChannelId,
    lastAuditWriteTimestamp: data.lastAuditWriteTimestamp,
    auditWritesCount: data.auditWritesCount,
  };
}

export function makeExpirationAuditChannel(data: {
  channelId: string;
  lastExpirationTimestamp: number;
  expirationWritesCount: number;
}): ExpirationAuditChannel {
  return {
    channelId: data.channelId as ExpirationAuditChannelId,
    lastExpirationTimestamp: data.lastExpirationTimestamp,
    expirationWritesCount: data.expirationWritesCount,
  };
}

export function makeMonitorChannel(data: {
  channelId: string;
  lastReportedLatency: number;
  latencyReportsCount: number;
}): MonitorChannel {
  return {
    channelId: data.channelId as MonitorChannelId,
    lastReportedLatency: data.lastReportedLatency,
    latencyReportsCount: data.latencyReportsCount,
  };
}

export function makeAuthorizationFlowDecomposition(data: {
  flowId: string;
  stepSequence: ReadonlySet<string>;
}): AuthorizationFlowDecomposition {
  return {
    flowId: data.flowId as AuthorizationFlowDecompositionId,
    stepSequence: data.stepSequence,
  };
}

export function makeSubject(data: {
  subjectId: string;
  token: string;
}): Subject {
  return {
    subjectId: data.subjectId as SubjectId,
    token: data.token,
  };
}

export function makeSecurityAuditor(data: {
  auditorId: string;
  complianceScope: string;
}): SecurityAuditor {
  return {
    auditorId: data.auditorId as SecurityAuditorId,
    complianceScope: data.complianceScope,
  };
}

export function makeGatewayVendor(data: {
  vendorId: string;
  name: string;
}): GatewayVendor {
  return {
    vendorId: data.vendorId as GatewayVendorId,
    name: data.name,
  };
}

export function makePermission(data: {
  permissionId: string;
  action: string;
  resource: string;
}): Permission {
  return {
    permissionId: data.permissionId as PermissionId,
    action: data.action,
    resource: data.resource,
  };
}

export function makeAuditEntry(data: {
  entryId: string;
  timestamp: number;
  subjectId: string;
  permissionId: string;
  outcome: string;
  isImmutable: boolean;
}): AuditEntry {
  return {
    entryId: data.entryId as AuditEntryId,
    timestamp: data.timestamp,
    subjectId: data.subjectId,
    permissionId: data.permissionId,
    outcome: data.outcome,
    isImmutable: data.isImmutable,
  };
}

export function makePermissionUnionCorrectness(data: {
  commitmentId: string;
  tolerance: number;
}): PermissionUnionCorrectness {
  return {
    commitmentId: data.commitmentId as PermissionUnionCorrectnessId,
    tolerance: data.tolerance,
  };
}

export function makeAuditedDecisions(data: {
  commitmentId: string;
  maxAuditLatencyMs: number;
}): AuditedDecisions {
  return {
    commitmentId: data.commitmentId as AuditedDecisionsId,
    maxAuditLatencyMs: data.maxAuditLatencyMs,
  };
}

export function makeStaleRoleExpiration(data: {
  commitmentId: string;
  maxRoleExpiryDays: number;
}): StaleRoleExpiration {
  return {
    commitmentId: data.commitmentId as StaleRoleExpirationId,
    maxRoleExpiryDays: data.maxRoleExpiryDays,
  };
}

export function makeLatencyBudget(data: {
  commitmentId: string;
  maxP99LatencyMs: number;
}): LatencyBudget {
  return {
    commitmentId: data.commitmentId as LatencyBudgetId,
    maxP99LatencyMs: data.maxP99LatencyMs,
  };
}

export function makeAuthorizationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): AuthorizationFlow {
  return {
    flowId: data.flowId as AuthorizationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeAccessControlGatewaySystem(data: {
  systemId: string;
  tolerance: number;
  maxAuditLatencyMs: number;
  maxRoleExpiryDays: number;
  maxP99LatencyMs: number;
  auditLog: ReadonlySet<AuditEntry>;
  activeRoles: ReadonlySet<string>;
  rolePermissions: ReadonlySet<Permission>;
  requestedPermission: string;
  decisionOutcome: string;
  lastDecisionTimestamp: number;
  p99LatencyRunning: number;
}): AccessControlGatewaySystem {
  return {
    systemId: data.systemId as AccessControlGatewaySystemId,
    tolerance: data.tolerance,
    maxAuditLatencyMs: data.maxAuditLatencyMs,
    maxRoleExpiryDays: data.maxRoleExpiryDays,
    maxP99LatencyMs: data.maxP99LatencyMs,
    auditLog: data.auditLog,
    activeRoles: data.activeRoles,
    rolePermissions: data.rolePermissions,
    requestedPermission: data.requestedPermission,
    decisionOutcome: data.decisionOutcome,
    lastDecisionTimestamp: data.lastDecisionTimestamp,
    p99LatencyRunning: data.p99LatencyRunning,
  };
}

export function makeAccessControlGatewayRegulatoryBody(data: {
  regulatoryId: string;
  certificationDate: number;
  pciDssVersion: string;
  cardholderDataScope: string;
  securityLevel: string;
  zoneModelDocumented: boolean;
  retentionYears: number;
  financialScope: string;
}): AccessControlGatewayRegulatoryBody {
  return {
    regulatoryId: data.regulatoryId as AccessControlGatewayRegulatoryBodyId,
    certificationDate: data.certificationDate,
    pciDssVersion: data.pciDssVersion,
    cardholderDataScope: data.cardholderDataScope,
    securityLevel: data.securityLevel,
    zoneModelDocumented: data.zoneModelDocumented,
    retentionYears: data.retentionYears,
    financialScope: data.financialScope,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  riskLevel: string;
  mitigationStrategy: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    riskLevel: data.riskLevel,
    mitigationStrategy: data.mitigationStrategy,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for TokenResolver. Returns empty array when valid. */
export function validateTokenResolver(instance: TokenResolver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.resolverId !== null))) {
    violations.push("[TokenResolver] invariant violated: self.resolverId <> null");
  }
  if (!((instance.token !== null))) {
    violations.push("[TokenResolver] invariant violated: self.token <> null");
  }
  if (!((instance.lastResolutionTimestamp >= 0))) {
    violations.push("[TokenResolver] invariant violated: self.lastResolutionTimestamp >= 0.0");
  }
  if (!((instance.tolerance >= 0))) {
    violations.push("[TokenResolver] invariant violated: self.tolerance >= 0.0");
  }
  if (!((instance.maxRoleExpiryDays <= 90))) {
    violations.push("[TokenResolver] invariant violated: self.maxRoleExpiryDays <= 90.0");
  }
  return violations;
}

/** Runtime invariant check for PolicyEngine. Returns empty array when valid. */
export function validatePolicyEngine(instance: PolicyEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[PolicyEngine] invariant violated: self.engineId <> null");
  }
  if (!((instance.lastComputationTimestamp >= 0))) {
    violations.push("[PolicyEngine] invariant violated: self.lastComputationTimestamp >= 0.0");
  }
  if (!((instance.tolerance >= 0))) {
    violations.push("[PolicyEngine] invariant violated: self.tolerance >= 0.0");
  }
  if (!((instance.maxRoleExpiryDays <= 90))) {
    violations.push("[PolicyEngine] invariant violated: self.maxRoleExpiryDays <= 90.0");
  }
  if (!(((instance.computedPermissionUnion).size >= 0))) {
    violations.push("[PolicyEngine] invariant violated: self.computedPermissionUnion->size() >= 0");
  }
  return violations;
}

/** Runtime invariant check for DecisionEngine. Returns empty array when valid. */
export function validateDecisionEngine(instance: DecisionEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.decisionId !== null))) {
    violations.push("[DecisionEngine] invariant violated: self.decisionId <> null");
  }
  if (!((instance.lastDecisionTimestamp >= 0))) {
    violations.push("[DecisionEngine] invariant violated: self.lastDecisionTimestamp >= 0.0");
  }
  if (!((instance.tolerance >= 0))) {
    violations.push("[DecisionEngine] invariant violated: self.tolerance >= 0.0");
  }
  if (!((instance.maxAuditLatencyMs <= 100))) {
    violations.push("[DecisionEngine] invariant violated: self.maxAuditLatencyMs <= 100.0");
  }
  if (!((instance.maxP99LatencyMs <= 50))) {
    violations.push("[DecisionEngine] invariant violated: self.maxP99LatencyMs <= 50.0");
  }
  if (!((instance.maxRoleExpiryDays <= 90))) {
    violations.push("[DecisionEngine] invariant violated: self.maxRoleExpiryDays <= 90.0");
  }
  if (!(((instance.lastDecisionOutcome === "allow") || (instance.lastDecisionOutcome === "deny")))) {
    violations.push("[DecisionEngine] invariant violated: self.lastDecisionOutcome = 'allow' or self.lastDecisionOutcome = 'deny'");
  }
  return violations;
}

/** Runtime invariant check for AuditLogger. Returns empty array when valid. */
export function validateAuditLogger(instance: AuditLogger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.loggerId !== null))) {
    violations.push("[AuditLogger] invariant violated: self.loggerId <> null");
  }
  if (!((instance.lastWriteTimestamp >= 0))) {
    violations.push("[AuditLogger] invariant violated: self.lastWriteTimestamp >= 0.0");
  }
  if (!((instance.maxAuditLatencyMs <= 100))) {
    violations.push("[AuditLogger] invariant violated: self.maxAuditLatencyMs <= 100.0");
  }
  if (!((instance.maxP99LatencyMs <= 50))) {
    violations.push("[AuditLogger] invariant violated: self.maxP99LatencyMs <= 50.0");
  }
  if (!(((instance.auditLog).size >= 0))) {
    violations.push("[AuditLogger] invariant violated: self.auditLog->size() >= 0");
  }
  return violations;
}

/** Runtime invariant check for RoleExpirationJob. Returns empty array when valid. */
export function validateRoleExpirationJob(instance: RoleExpirationJob): readonly string[] {
  const violations: string[] = [];
  if (!((instance.jobId !== null))) {
    violations.push("[RoleExpirationJob] invariant violated: self.jobId <> null");
  }
  if (!((instance.lastRunTimestamp >= 0))) {
    violations.push("[RoleExpirationJob] invariant violated: self.lastRunTimestamp >= 0.0");
  }
  if (!((instance.expiredRoleCount >= 0))) {
    violations.push("[RoleExpirationJob] invariant violated: self.expiredRoleCount >= 0");
  }
  if (!((instance.maxRoleExpiryDays <= 90))) {
    violations.push("[RoleExpirationJob] invariant violated: self.maxRoleExpiryDays <= 90.0");
  }
  if (!((instance.maxP99LatencyMs <= 50))) {
    violations.push("[RoleExpirationJob] invariant violated: self.maxP99LatencyMs <= 50.0");
  }
  return violations;
}

/** Runtime invariant check for LatencyMonitor. Returns empty array when valid. */
export function validateLatencyMonitor(instance: LatencyMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[LatencyMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.p99Latency >= 0))) {
    violations.push("[LatencyMonitor] invariant violated: self.p99Latency >= 0.0");
  }
  if (!((instance.peakLatency >= 0))) {
    violations.push("[LatencyMonitor] invariant violated: self.peakLatency >= 0.0");
  }
  if (!((instance.observationCount >= 0))) {
    violations.push("[LatencyMonitor] invariant violated: self.observationCount >= 0");
  }
  if (!((instance.maxP99LatencyMs <= 50))) {
    violations.push("[LatencyMonitor] invariant violated: self.maxP99LatencyMs <= 50.0");
  }
  if (!((instance.p99Latency <= instance.maxP99LatencyMs))) {
    violations.push("[LatencyMonitor] invariant violated: self.p99Latency <= self.maxP99LatencyMs");
  }
  return violations;
}

/** Runtime invariant check for TokenPolicyChannel. Returns empty array when valid. */
export function validateTokenPolicyChannel(instance: TokenPolicyChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[TokenPolicyChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastTransferTimestamp >= 0))) {
    violations.push("[TokenPolicyChannel] invariant violated: self.lastTransferTimestamp >= 0.0");
  }
  if (!((instance.transferCount >= 0))) {
    violations.push("[TokenPolicyChannel] invariant violated: self.transferCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for PolicyDecisionChannel. Returns empty array when valid. */
export function validatePolicyDecisionChannel(instance: PolicyDecisionChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[PolicyDecisionChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastDecisionTimestamp >= 0))) {
    violations.push("[PolicyDecisionChannel] invariant violated: self.lastDecisionTimestamp >= 0.0");
  }
  if (!((instance.decisionsMade >= 0))) {
    violations.push("[PolicyDecisionChannel] invariant violated: self.decisionsMade >= 0");
  }
  return violations;
}

/** Runtime invariant check for DecisionAuditChannel. Returns empty array when valid. */
export function validateDecisionAuditChannel(instance: DecisionAuditChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[DecisionAuditChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastAuditWriteTimestamp >= 0))) {
    violations.push("[DecisionAuditChannel] invariant violated: self.lastAuditWriteTimestamp >= 0.0");
  }
  if (!((instance.auditWritesCount >= 0))) {
    violations.push("[DecisionAuditChannel] invariant violated: self.auditWritesCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for ExpirationAuditChannel. Returns empty array when valid. */
export function validateExpirationAuditChannel(instance: ExpirationAuditChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ExpirationAuditChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastExpirationTimestamp >= 0))) {
    violations.push("[ExpirationAuditChannel] invariant violated: self.lastExpirationTimestamp >= 0.0");
  }
  if (!((instance.expirationWritesCount >= 0))) {
    violations.push("[ExpirationAuditChannel] invariant violated: self.expirationWritesCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for MonitorChannel. Returns empty array when valid. */
export function validateMonitorChannel(instance: MonitorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[MonitorChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastReportedLatency >= 0))) {
    violations.push("[MonitorChannel] invariant violated: self.lastReportedLatency >= 0.0");
  }
  if (!((instance.latencyReportsCount >= 0))) {
    violations.push("[MonitorChannel] invariant violated: self.latencyReportsCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for AuthorizationFlowDecomposition. Returns empty array when valid. */
export function validateAuthorizationFlowDecomposition(instance: AuthorizationFlowDecomposition): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AuthorizationFlowDecomposition] invariant violated: self.flowId <> null");
  }
  if (!((instance.stepSequence).size > 0)) {
    violations.push("[AuthorizationFlowDecomposition] invariant violated: self.stepSequence->notEmpty()");
  }
  if (!(((instance.stepSequence).size === 10))) {
    violations.push("[AuthorizationFlowDecomposition] invariant violated: self.stepSequence->size() = 10");
  }
  return violations;
}

/** Runtime invariant check for Subject. Returns empty array when valid. */
export function validateSubject(instance: Subject): readonly string[] {
  const violations: string[] = [];
  if (!((instance.subjectId !== null))) {
    violations.push("[Subject] invariant violated: self.subjectId <> null");
  }
  return violations;
}

/** Runtime invariant check for SecurityAuditor. Returns empty array when valid. */
export function validateSecurityAuditor(instance: SecurityAuditor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.auditorId !== null))) {
    violations.push("[SecurityAuditor] invariant violated: self.auditorId <> null");
  }
  if (!((instance.complianceScope !== null))) {
    violations.push("[SecurityAuditor] invariant violated: self.complianceScope <> null");
  }
  return violations;
}

/** Runtime invariant check for Permission. Returns empty array when valid. */
export function validatePermission(instance: Permission): readonly string[] {
  const violations: string[] = [];
  if (!((instance.permissionId !== null))) {
    violations.push("[Permission] invariant violated: self.permissionId <> null");
  }
  if (!((instance.action !== null))) {
    violations.push("[Permission] invariant violated: self.action <> null");
  }
  if (!((instance.resource !== null))) {
    violations.push("[Permission] invariant violated: self.resource <> null");
  }
  return violations;
}

/** Runtime invariant check for AuditEntry. Returns empty array when valid. */
export function validateAuditEntry(instance: AuditEntry): readonly string[] {
  const violations: string[] = [];
  if (!((instance.entryId !== null))) {
    violations.push("[AuditEntry] invariant violated: self.entryId <> null");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[AuditEntry] invariant violated: self.timestamp >= 0.0");
  }
  if (!((instance.isImmutable === true))) {
    violations.push("[AuditEntry] invariant violated: self.isImmutable = true");
  }
  return violations;
}

/** Runtime invariant check for PermissionCorrectnessCategory. Returns empty array when valid. */
export function validatePermissionCorrectnessCategory(instance: PermissionCorrectnessCategory): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PermissionCorrectnessCategory] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AuditComplianceCategory. Returns empty array when valid. */
export function validateAuditComplianceCategory(instance: AuditComplianceCategory): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AuditComplianceCategory] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for StaleRoleExpiryCategory. Returns empty array when valid. */
export function validateStaleRoleExpiryCategory(instance: StaleRoleExpiryCategory): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[StaleRoleExpiryCategory] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for LatencyBudgetCategory. Returns empty array when valid. */
export function validateLatencyBudgetCategory(instance: LatencyBudgetCategory): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[LatencyBudgetCategory] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AuthorizationFlow. Returns empty array when valid. */
export function validateAuthorizationFlow(instance: AuthorizationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AuthorizationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[AuthorizationFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!(((instance.outcome === "allow") || (instance.outcome === "deny")))) {
    violations.push("[AuthorizationFlow] invariant violated: self.outcome = 'allow' or self.outcome = 'deny'");
  }
  return violations;
}

/** Runtime invariant check for AccessControlGatewaySystem. Returns empty array when valid. */
export function validateAccessControlGatewaySystem(instance: AccessControlGatewaySystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.tolerance >= 0))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.tolerance >= 0.0");
  }
  if (!((instance.maxAuditLatencyMs <= 100))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.maxAuditLatencyMs <= 100.0");
  }
  if (!((instance.maxRoleExpiryDays <= 90))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.maxRoleExpiryDays <= 90.0");
  }
  if (!((instance.maxP99LatencyMs <= 50))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.maxP99LatencyMs <= 50.0");
  }
  if (!((instance.p99LatencyRunning >= 0))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.p99LatencyRunning >= 0.0");
  }
  if (!((instance.lastDecisionTimestamp >= 0))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.lastDecisionTimestamp >= 0.0");
  }
  if (!(((instance.decisionOutcome === "allow") || (instance.decisionOutcome === "deny")))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.decisionOutcome = 'allow' or self.decisionOutcome = 'deny'");
  }
  if (!(Array.from(instance.auditLog).every((__x) => ((((__x.isImmutable === true) && (__x.timestamp >= 0)) && ((__x.outcome === "allow") || (__x.outcome === "deny"))))))) {
    violations.push("[AccessControlGatewaySystem] invariant violated: self.auditLog->forAll(e |\n      e.isImmutable = true and\n      e.timestamp >= 0.0 and\n      (e.outcome = 'allow' or e.outcome = 'deny')\n    )");
  }
  return violations;
}

/** Runtime invariant check for PciDssCompliant. Returns empty array when valid. */
export function validatePciDssCompliant(instance: PciDssCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.pciDssVersion <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.cardholderDataScope <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for Iec62443OrEquivalent. Returns empty array when valid. */
export function validateIec62443OrEquivalent(instance: Iec62443OrEquivalent): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.securityLevel <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.zoneModelDocumented = true — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SoxRelevantDecisionRecord. Returns empty array when valid. */
export function validateSoxRelevantDecisionRecord(instance: SoxRelevantDecisionRecord): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.retentionYears >= 7.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.financialScope <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AuditLatencyBound. Returns empty array when valid. */
export function validateAuditLatencyBound(instance: AuditLatencyBound): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxAuditLatencyMs >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxAuditLatencyMs <= 100.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PermissionUnionFinite. Returns empty array when valid. */
export function validatePermissionUnionFinite(instance: PermissionUnionFinite): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.rolePermissions->size() >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.activeRoles->size() >= 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ImmutableAuditLogContract. Returns empty array when valid. */
export function validateImmutableAuditLogContract(instance: ImmutableAuditLogContract): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.auditLog->forAll(e |
      e.isImmutable = true and
      e.timestamp >= 0.0 and
      (e.outcome = 'allow' or e.outcome = 'deny')
    ) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AccessControlGatewayRegulatoryBody. Returns empty array when valid. */
export function validateAccessControlGatewayRegulatoryBody(instance: AccessControlGatewayRegulatoryBody): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatoryId !== null))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.regulatoryId <> null");
  }
  if (!((instance.certificationDate >= 0))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.certificationDate >= 0.0");
  }
  if (!((instance.pciDssVersion !== null))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.pciDssVersion <> null");
  }
  if (!((instance.cardholderDataScope !== null))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.cardholderDataScope <> null");
  }
  if (!((instance.securityLevel !== null))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.securityLevel <> null");
  }
  if (!((instance.zoneModelDocumented === true))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.zoneModelDocumented = true");
  }
  if (!((instance.retentionYears >= 7))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.retentionYears >= 7.0");
  }
  if (!((instance.financialScope !== null))) {
    violations.push("[AccessControlGatewayRegulatoryBody] invariant violated: self.financialScope <> null");
  }
  return violations;
}

/** Runtime invariant check for AccessControlGatewaySystemFormalized. Returns empty array when valid. */
export function validateAccessControlGatewaySystemFormalized(instance: AccessControlGatewaySystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!(Array.from(instance.complianceAlerts).every((__x) => ((__x !== null))))) {
    violations.push("[AccessControlGatewaySystemFormalized] invariant violated: self.complianceAlerts->forAll(a | a <> null)");
  }
  if (!((instance.roleLastUsed >= 0))) {
    violations.push("[AccessControlGatewaySystemFormalized] invariant violated: self.roleLastUsed >= 0.0");
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
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.riskLevel !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.riskLevel <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for TokenResolver.resolveRoles. User supplies this. */
export type TokenResolverResolveRolesImpl = (self: TokenResolver, subjectToken: string) => { self: TokenResolver; modified: { resolvedRoles: unknown; lastResolutionTimestamp: unknown } };

/** Contract-checking wrapper for TokenResolver.resolveRoles. */
export function wrapTokenResolverResolveRoles(impl: TokenResolverResolveRolesImpl): (self: TokenResolver, subjectToken: string) => TokenResolver {
  return (self, subjectToken) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[TokenResolver.resolveRoles] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!((self.tolerance >= 0))) {
      preViolations.push("[TokenResolver.resolveRoles] pre violated: self.tolerance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastResolutionTimestamp": self.lastResolutionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, subjectToken);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->notEmpty() — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.resolvedRoles = result — unbound variable 'result'
      if (!((__result.self.lastResolutionTimestamp > __pre["self.lastResolutionTimestamp"]))) {
        postViolations.push("[TokenResolver.resolveRoles] post violated: self.lastResolutionTimestamp > self.lastResolutionTimestamp@pre");
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

/** Impl signature for TokenResolver.resolveRoles (async). User supplies this. */
export type TokenResolverResolveRolesAsyncImpl = (self: TokenResolver, subjectToken: string) => Promise<{ self: TokenResolver; modified: { resolvedRoles: unknown; lastResolutionTimestamp: unknown } }>;

/** Contract-checking wrapper for TokenResolver.resolveRoles (async). */
export function wrapTokenResolverResolveRolesAsync(impl: TokenResolverResolveRolesAsyncImpl): (self: TokenResolver, subjectToken: string) => Promise<TokenResolver> {
  return async (self, subjectToken) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[TokenResolver.resolveRoles] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!((self.tolerance >= 0))) {
      preViolations.push("[TokenResolver.resolveRoles] pre violated: self.tolerance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastResolutionTimestamp": self.lastResolutionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, subjectToken);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->notEmpty() — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.resolvedRoles = result — unbound variable 'result'
      if (!((__result.self.lastResolutionTimestamp > __pre["self.lastResolutionTimestamp"]))) {
        postViolations.push("[TokenResolver.resolveRoles] post violated: self.lastResolutionTimestamp > self.lastResolutionTimestamp@pre");
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

/** Impl signature for PolicyEngine.computePermissionUnion. User supplies this. */
export type PolicyEngineComputePermissionUnionImpl = (self: PolicyEngine, roleIds: ReadonlySet<string>) => { self: PolicyEngine; modified: { computedPermissionUnion: unknown; lastComputationTimestamp: unknown } };

/** Contract-checking wrapper for PolicyEngine.computePermissionUnion. */
export function wrapPolicyEngineComputePermissionUnion(impl: PolicyEngineComputePermissionUnionImpl): (self: PolicyEngine, roleIds: ReadonlySet<string>) => PolicyEngine {
  return (self, roleIds) => {
    const preViolations: string[] = [];
    if (!((roleIds).size > 0)) {
      preViolations.push("[PolicyEngine.computePermissionUnion] pre violated: roleIds->notEmpty()");
    }
    if (!((self.tolerance >= 0))) {
      preViolations.push("[PolicyEngine.computePermissionUnion] pre violated: self.tolerance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastComputationTimestamp": self.lastComputationTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, roleIds);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->notEmpty() — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result->forAll(p | p <> null) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.computedPermissionUnion = result — unbound variable 'result'
      if (!((__result.self.lastComputationTimestamp > __pre["self.lastComputationTimestamp"]))) {
        postViolations.push("[PolicyEngine.computePermissionUnion] post violated: self.lastComputationTimestamp > self.lastComputationTimestamp@pre");
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

/** Impl signature for PolicyEngine.computePermissionUnion (async). User supplies this. */
export type PolicyEngineComputePermissionUnionAsyncImpl = (self: PolicyEngine, roleIds: ReadonlySet<string>) => Promise<{ self: PolicyEngine; modified: { computedPermissionUnion: unknown; lastComputationTimestamp: unknown } }>;

/** Contract-checking wrapper for PolicyEngine.computePermissionUnion (async). */
export function wrapPolicyEngineComputePermissionUnionAsync(impl: PolicyEngineComputePermissionUnionAsyncImpl): (self: PolicyEngine, roleIds: ReadonlySet<string>) => Promise<PolicyEngine> {
  return async (self, roleIds) => {
    const preViolations: string[] = [];
    if (!((roleIds).size > 0)) {
      preViolations.push("[PolicyEngine.computePermissionUnion] pre violated: roleIds->notEmpty()");
    }
    if (!((self.tolerance >= 0))) {
      preViolations.push("[PolicyEngine.computePermissionUnion] pre violated: self.tolerance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastComputationTimestamp": self.lastComputationTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, roleIds);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->notEmpty() — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result->forAll(p | p <> null) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.computedPermissionUnion = result — unbound variable 'result'
      if (!((__result.self.lastComputationTimestamp > __pre["self.lastComputationTimestamp"]))) {
        postViolations.push("[PolicyEngine.computePermissionUnion] post violated: self.lastComputationTimestamp > self.lastComputationTimestamp@pre");
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

/** Impl signature for PolicyEngine.checkPermissionInUnion. User supplies this. */
export type PolicyEngineCheckPermissionInUnionImpl = (self: PolicyEngine, permissionId: string) => { self: PolicyEngine; modified: {} };

/** Contract-checking wrapper for PolicyEngine.checkPermissionInUnion. */
export function wrapPolicyEngineCheckPermissionInUnion(impl: PolicyEngineCheckPermissionInUnionImpl): (self: PolicyEngine, permissionId: string) => PolicyEngine {
  return (self, permissionId) => {
    const preViolations: string[] = [];
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[PolicyEngine.checkPermissionInUnion] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!((self.computedPermissionUnion).size > 0)) {
      preViolations.push("[PolicyEngine.checkPermissionInUnion] pre violated: self.computedPermissionUnion->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, permissionId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.computedPermissionUnion->exists(p |
      p.permissionId = permissionId
    ) — unbound variable 'result'
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

/** Impl signature for PolicyEngine.checkPermissionInUnion (async). User supplies this. */
export type PolicyEngineCheckPermissionInUnionAsyncImpl = (self: PolicyEngine, permissionId: string) => Promise<{ self: PolicyEngine; modified: {} }>;

/** Contract-checking wrapper for PolicyEngine.checkPermissionInUnion (async). */
export function wrapPolicyEngineCheckPermissionInUnionAsync(impl: PolicyEngineCheckPermissionInUnionAsyncImpl): (self: PolicyEngine, permissionId: string) => Promise<PolicyEngine> {
  return async (self, permissionId) => {
    const preViolations: string[] = [];
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[PolicyEngine.checkPermissionInUnion] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!((self.computedPermissionUnion).size > 0)) {
      preViolations.push("[PolicyEngine.checkPermissionInUnion] pre violated: self.computedPermissionUnion->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, permissionId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.computedPermissionUnion->exists(p |
      p.permissionId = permissionId
    ) — unbound variable 'result'
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

/** Impl signature for DecisionEngine.evaluateRequest. User supplies this. */
export type DecisionEngineEvaluateRequestImpl = (self: DecisionEngine, subjectToken: string, permissionId: string) => { self: DecisionEngine; modified: { lastDecisionOutcome: unknown; lastDecisionTimestamp: unknown; subjectToken: unknown; requestedPermissionId: unknown } };

/** Contract-checking wrapper for DecisionEngine.evaluateRequest. */
export function wrapDecisionEngineEvaluateRequest(impl: DecisionEngineEvaluateRequestImpl): (self: DecisionEngine, subjectToken: string, permissionId: string) => DecisionEngine {
  return (self, subjectToken, permissionId) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (!((self.maxP99LatencyMs <= 50))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: self.maxP99LatencyMs <= 50.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastDecisionTimestamp": self.lastDecisionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, subjectToken, permissionId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true or result = false — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastDecisionOutcome = (if result then 'allow' else 'deny' endif) — unbound variable 'result'
      if (!((__result.self.lastDecisionTimestamp > __pre["self.lastDecisionTimestamp"]))) {
        postViolations.push("[DecisionEngine.evaluateRequest] post violated: self.lastDecisionTimestamp > self.lastDecisionTimestamp@pre");
      }
      if (!((__result.self.subjectToken === subjectToken))) {
        postViolations.push("[DecisionEngine.evaluateRequest] post violated: self.subjectToken = subjectToken");
      }
      if (!((__result.self.requestedPermissionId === permissionId))) {
        postViolations.push("[DecisionEngine.evaluateRequest] post violated: self.requestedPermissionId = permissionId");
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

/** Impl signature for DecisionEngine.evaluateRequest (async). User supplies this. */
export type DecisionEngineEvaluateRequestAsyncImpl = (self: DecisionEngine, subjectToken: string, permissionId: string) => Promise<{ self: DecisionEngine; modified: { lastDecisionOutcome: unknown; lastDecisionTimestamp: unknown; subjectToken: unknown; requestedPermissionId: unknown } }>;

/** Contract-checking wrapper for DecisionEngine.evaluateRequest (async). */
export function wrapDecisionEngineEvaluateRequestAsync(impl: DecisionEngineEvaluateRequestAsyncImpl): (self: DecisionEngine, subjectToken: string, permissionId: string) => Promise<DecisionEngine> {
  return async (self, subjectToken, permissionId) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (!((self.maxP99LatencyMs <= 50))) {
      preViolations.push("[DecisionEngine.evaluateRequest] pre violated: self.maxP99LatencyMs <= 50.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastDecisionTimestamp": self.lastDecisionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, subjectToken, permissionId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true or result = false — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastDecisionOutcome = (if result then 'allow' else 'deny' endif) — unbound variable 'result'
      if (!((__result.self.lastDecisionTimestamp > __pre["self.lastDecisionTimestamp"]))) {
        postViolations.push("[DecisionEngine.evaluateRequest] post violated: self.lastDecisionTimestamp > self.lastDecisionTimestamp@pre");
      }
      if (!((__result.self.subjectToken === subjectToken))) {
        postViolations.push("[DecisionEngine.evaluateRequest] post violated: self.subjectToken = subjectToken");
      }
      if (!((__result.self.requestedPermissionId === permissionId))) {
        postViolations.push("[DecisionEngine.evaluateRequest] post violated: self.requestedPermissionId = permissionId");
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

/** Impl signature for AuditLogger.writeAuditEntry. User supplies this. */
export type AuditLoggerWriteAuditEntryImpl = (self: AuditLogger, subjectId: string, permissionId: string, outcome: string, currentTimestamp: number) => { self: AuditLogger; modified: { auditLog: unknown; lastWriteTimestamp: unknown } };

/** Contract-checking wrapper for AuditLogger.writeAuditEntry. */
export function wrapAuditLoggerWriteAuditEntry(impl: AuditLoggerWriteAuditEntryImpl): (self: AuditLogger, subjectId: string, permissionId: string, outcome: string, currentTimestamp: number) => AuditLogger {
  return (self, subjectId, permissionId, outcome, currentTimestamp) => {
    const preViolations: string[] = [];
    if (!(((subjectId !== null) && (subjectId !== "")))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: subjectId <> null and subjectId <> ''");
    }
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!(((outcome === "allow") || (outcome === "deny")))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: outcome = 'allow' or outcome = 'deny'");
    }
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, subjectId, permissionId, outcome, currentTimestamp);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((((__x.subjectId === subjectId) && (__x.permissionId === permissionId)) && (__x.outcome === outcome)) && (__x.isImmutable === true)) && (__x.timestamp >= currentTimestamp)) && ((__x.timestamp - currentTimestamp) <= __result.self.maxAuditLatencyMs)))))) {
        postViolations.push("[AuditLogger.writeAuditEntry] post violated: self.auditLog->exists(e |\n      e.subjectId = subjectId and\n      e.permissionId = permissionId and\n      e.outcome = outcome and\n      e.isImmutable = true and\n      e.timestamp >= currentTimestamp and\n      (e.timestamp - currentTimestamp) <= self.maxAuditLatencyMs\n    )");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AuditLogger.writeAuditEntry] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
      }
      if (!((__result.self.lastWriteTimestamp === currentTimestamp))) {
        postViolations.push("[AuditLogger.writeAuditEntry] post violated: self.lastWriteTimestamp = currentTimestamp");
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

/** Impl signature for AuditLogger.writeAuditEntry (async). User supplies this. */
export type AuditLoggerWriteAuditEntryAsyncImpl = (self: AuditLogger, subjectId: string, permissionId: string, outcome: string, currentTimestamp: number) => Promise<{ self: AuditLogger; modified: { auditLog: unknown; lastWriteTimestamp: unknown } }>;

/** Contract-checking wrapper for AuditLogger.writeAuditEntry (async). */
export function wrapAuditLoggerWriteAuditEntryAsync(impl: AuditLoggerWriteAuditEntryAsyncImpl): (self: AuditLogger, subjectId: string, permissionId: string, outcome: string, currentTimestamp: number) => Promise<AuditLogger> {
  return async (self, subjectId, permissionId, outcome, currentTimestamp) => {
    const preViolations: string[] = [];
    if (!(((subjectId !== null) && (subjectId !== "")))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: subjectId <> null and subjectId <> ''");
    }
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!(((outcome === "allow") || (outcome === "deny")))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: outcome = 'allow' or outcome = 'deny'");
    }
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[AuditLogger.writeAuditEntry] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, subjectId, permissionId, outcome, currentTimestamp);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((((__x.subjectId === subjectId) && (__x.permissionId === permissionId)) && (__x.outcome === outcome)) && (__x.isImmutable === true)) && (__x.timestamp >= currentTimestamp)) && ((__x.timestamp - currentTimestamp) <= __result.self.maxAuditLatencyMs)))))) {
        postViolations.push("[AuditLogger.writeAuditEntry] post violated: self.auditLog->exists(e |\n      e.subjectId = subjectId and\n      e.permissionId = permissionId and\n      e.outcome = outcome and\n      e.isImmutable = true and\n      e.timestamp >= currentTimestamp and\n      (e.timestamp - currentTimestamp) <= self.maxAuditLatencyMs\n    )");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AuditLogger.writeAuditEntry] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
      }
      if (!((__result.self.lastWriteTimestamp === currentTimestamp))) {
        postViolations.push("[AuditLogger.writeAuditEntry] post violated: self.lastWriteTimestamp = currentTimestamp");
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

/** Impl signature for AuditLogger.appendMultipleEntries. User supplies this. */
export type AuditLoggerAppendMultipleEntriesImpl = (self: AuditLogger, entries: ReadonlySet<AuditEntry>) => { self: AuditLogger; modified: { auditLog: unknown; lastWriteTimestamp: unknown } };

/** Contract-checking wrapper for AuditLogger.appendMultipleEntries. */
export function wrapAuditLoggerAppendMultipleEntries(impl: AuditLoggerAppendMultipleEntriesImpl): (self: AuditLogger, entries: ReadonlySet<AuditEntry>) => AuditLogger {
  return (self, entries) => {
    const preViolations: string[] = [];
    if (!((entries).size > 0)) {
      preViolations.push("[AuditLogger.appendMultipleEntries] pre violated: entries->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
      "self.lastWriteTimestamp": self.lastWriteTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entries);
      const postViolations: string[] = [];
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + (entries).size)))) {
        postViolations.push("[AuditLogger.appendMultipleEntries] post violated: self.auditLog->size() = self.auditLog@pre->size() + entries->size()");
      }
      if (!(Array.from(entries).every((__x) => ((__result.self.auditLog).has(__x))))) {
        postViolations.push("[AuditLogger.appendMultipleEntries] post violated: entries->forAll(e |\n      self.auditLog->includes(e)\n    )");
      }
      if (!((__result.self.lastWriteTimestamp > __pre["self.lastWriteTimestamp"]))) {
        postViolations.push("[AuditLogger.appendMultipleEntries] post violated: self.lastWriteTimestamp > self.lastWriteTimestamp@pre");
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

/** Impl signature for AuditLogger.appendMultipleEntries (async). User supplies this. */
export type AuditLoggerAppendMultipleEntriesAsyncImpl = (self: AuditLogger, entries: ReadonlySet<AuditEntry>) => Promise<{ self: AuditLogger; modified: { auditLog: unknown; lastWriteTimestamp: unknown } }>;

/** Contract-checking wrapper for AuditLogger.appendMultipleEntries (async). */
export function wrapAuditLoggerAppendMultipleEntriesAsync(impl: AuditLoggerAppendMultipleEntriesAsyncImpl): (self: AuditLogger, entries: ReadonlySet<AuditEntry>) => Promise<AuditLogger> {
  return async (self, entries) => {
    const preViolations: string[] = [];
    if (!((entries).size > 0)) {
      preViolations.push("[AuditLogger.appendMultipleEntries] pre violated: entries->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
      "self.lastWriteTimestamp": self.lastWriteTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entries);
      const postViolations: string[] = [];
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + (entries).size)))) {
        postViolations.push("[AuditLogger.appendMultipleEntries] post violated: self.auditLog->size() = self.auditLog@pre->size() + entries->size()");
      }
      if (!(Array.from(entries).every((__x) => ((__result.self.auditLog).has(__x))))) {
        postViolations.push("[AuditLogger.appendMultipleEntries] post violated: entries->forAll(e |\n      self.auditLog->includes(e)\n    )");
      }
      if (!((__result.self.lastWriteTimestamp > __pre["self.lastWriteTimestamp"]))) {
        postViolations.push("[AuditLogger.appendMultipleEntries] post violated: self.lastWriteTimestamp > self.lastWriteTimestamp@pre");
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

/** Impl signature for RoleExpirationJob.expireStaleRoles. User supplies this. */
export type RoleExpirationJobExpireStaleRolesImpl = (self: RoleExpirationJob, currentTimestamp: number, rolesWithLastUsed: ReadonlySet<string>) => { self: RoleExpirationJob; modified: { activeRoles: unknown; expiredRoleCount: unknown; lastRunTimestamp: unknown } };

/** Contract-checking wrapper for RoleExpirationJob.expireStaleRoles. */
export function wrapRoleExpirationJobExpireStaleRoles(impl: RoleExpirationJobExpireStaleRolesImpl): (self: RoleExpirationJob, currentTimestamp: number, rolesWithLastUsed: ReadonlySet<string>) => RoleExpirationJob {
  return (self, currentTimestamp, rolesWithLastUsed) => {
    const preViolations: string[] = [];
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[RoleExpirationJob.expireStaleRoles] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.maxRoleExpiryDays <= 90))) {
      preViolations.push("[RoleExpirationJob.expireStaleRoles] pre violated: self.maxRoleExpiryDays <= 90.0");
    }
    if (!((rolesWithLastUsed).size > 0)) {
      preViolations.push("[RoleExpirationJob.expireStaleRoles] pre violated: rolesWithLastUsed->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.expiredRoleCount": self.expiredRoleCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTimestamp, rolesWithLastUsed);
      const postViolations: string[] = [];
      if (!(((__result.self.activeRoles).size >= 0))) {
        postViolations.push("[RoleExpirationJob.expireStaleRoles] post violated: self.activeRoles->size() >= 0");
      }
      if (!((__result.self.expiredRoleCount >= __pre["self.expiredRoleCount"]))) {
        postViolations.push("[RoleExpirationJob.expireStaleRoles] post violated: self.expiredRoleCount >= self.expiredRoleCount@pre");
      }
      if (!((__result.self.lastRunTimestamp === currentTimestamp))) {
        postViolations.push("[RoleExpirationJob.expireStaleRoles] post violated: self.lastRunTimestamp = currentTimestamp");
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

/** Impl signature for RoleExpirationJob.expireStaleRoles (async). User supplies this. */
export type RoleExpirationJobExpireStaleRolesAsyncImpl = (self: RoleExpirationJob, currentTimestamp: number, rolesWithLastUsed: ReadonlySet<string>) => Promise<{ self: RoleExpirationJob; modified: { activeRoles: unknown; expiredRoleCount: unknown; lastRunTimestamp: unknown } }>;

/** Contract-checking wrapper for RoleExpirationJob.expireStaleRoles (async). */
export function wrapRoleExpirationJobExpireStaleRolesAsync(impl: RoleExpirationJobExpireStaleRolesAsyncImpl): (self: RoleExpirationJob, currentTimestamp: number, rolesWithLastUsed: ReadonlySet<string>) => Promise<RoleExpirationJob> {
  return async (self, currentTimestamp, rolesWithLastUsed) => {
    const preViolations: string[] = [];
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[RoleExpirationJob.expireStaleRoles] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.maxRoleExpiryDays <= 90))) {
      preViolations.push("[RoleExpirationJob.expireStaleRoles] pre violated: self.maxRoleExpiryDays <= 90.0");
    }
    if (!((rolesWithLastUsed).size > 0)) {
      preViolations.push("[RoleExpirationJob.expireStaleRoles] pre violated: rolesWithLastUsed->notEmpty()");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.expiredRoleCount": self.expiredRoleCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTimestamp, rolesWithLastUsed);
      const postViolations: string[] = [];
      if (!(((__result.self.activeRoles).size >= 0))) {
        postViolations.push("[RoleExpirationJob.expireStaleRoles] post violated: self.activeRoles->size() >= 0");
      }
      if (!((__result.self.expiredRoleCount >= __pre["self.expiredRoleCount"]))) {
        postViolations.push("[RoleExpirationJob.expireStaleRoles] post violated: self.expiredRoleCount >= self.expiredRoleCount@pre");
      }
      if (!((__result.self.lastRunTimestamp === currentTimestamp))) {
        postViolations.push("[RoleExpirationJob.expireStaleRoles] post violated: self.lastRunTimestamp = currentTimestamp");
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

/** Impl signature for RoleExpirationJob.renewRole. User supplies this. */
export type RoleExpirationJobRenewRoleImpl = (self: RoleExpirationJob, roleId: string) => { self: RoleExpirationJob; modified: { activeRoles: unknown; roleLastUsed: unknown } };

/** Contract-checking wrapper for RoleExpirationJob.renewRole. */
export function wrapRoleExpirationJobRenewRole(impl: RoleExpirationJobRenewRoleImpl): (self: RoleExpirationJob, roleId: string) => RoleExpirationJob {
  return (self, roleId) => {
    const preViolations: string[] = [];
    if (!(((roleId !== null) && (roleId !== "")))) {
      preViolations.push("[RoleExpirationJob.renewRole] pre violated: roleId <> null and roleId <> ''");
    }
    if (!((self.activeRoles).has(roleId))) {
      preViolations.push("[RoleExpirationJob.renewRole] pre violated: self.activeRoles->includes(roleId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.roleLastUsed": self.roleLastUsed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, roleId);
      const postViolations: string[] = [];
      if (!((__result.self.activeRoles).has(roleId))) {
        postViolations.push("[RoleExpirationJob.renewRole] post violated: self.activeRoles->includes(roleId)");
      }
      if (!((__result.self.roleLastUsed > __pre["self.roleLastUsed"]))) {
        postViolations.push("[RoleExpirationJob.renewRole] post violated: self.roleLastUsed > self.roleLastUsed@pre");
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

/** Impl signature for RoleExpirationJob.renewRole (async). User supplies this. */
export type RoleExpirationJobRenewRoleAsyncImpl = (self: RoleExpirationJob, roleId: string) => Promise<{ self: RoleExpirationJob; modified: { activeRoles: unknown; roleLastUsed: unknown } }>;

/** Contract-checking wrapper for RoleExpirationJob.renewRole (async). */
export function wrapRoleExpirationJobRenewRoleAsync(impl: RoleExpirationJobRenewRoleAsyncImpl): (self: RoleExpirationJob, roleId: string) => Promise<RoleExpirationJob> {
  return async (self, roleId) => {
    const preViolations: string[] = [];
    if (!(((roleId !== null) && (roleId !== "")))) {
      preViolations.push("[RoleExpirationJob.renewRole] pre violated: roleId <> null and roleId <> ''");
    }
    if (!((self.activeRoles).has(roleId))) {
      preViolations.push("[RoleExpirationJob.renewRole] pre violated: self.activeRoles->includes(roleId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.roleLastUsed": self.roleLastUsed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, roleId);
      const postViolations: string[] = [];
      if (!((__result.self.activeRoles).has(roleId))) {
        postViolations.push("[RoleExpirationJob.renewRole] post violated: self.activeRoles->includes(roleId)");
      }
      if (!((__result.self.roleLastUsed > __pre["self.roleLastUsed"]))) {
        postViolations.push("[RoleExpirationJob.renewRole] post violated: self.roleLastUsed > self.roleLastUsed@pre");
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

/** Impl signature for LatencyMonitor.recordLatencyObservation. User supplies this. */
export type LatencyMonitorRecordLatencyObservationImpl = (self: LatencyMonitor, latencyMs: number) => { self: LatencyMonitor; modified: { p99Latency: unknown; peakLatency: unknown; observationCount: unknown } };

/** Contract-checking wrapper for LatencyMonitor.recordLatencyObservation. */
export function wrapLatencyMonitorRecordLatencyObservation(impl: LatencyMonitorRecordLatencyObservationImpl): (self: LatencyMonitor, latencyMs: number) => LatencyMonitor {
  return (self, latencyMs) => {
    const preViolations: string[] = [];
    if (!((latencyMs >= 0))) {
      preViolations.push("[LatencyMonitor.recordLatencyObservation] pre violated: latencyMs >= 0.0");
    }
    if (!((self.maxP99LatencyMs <= 50))) {
      preViolations.push("[LatencyMonitor.recordLatencyObservation] pre violated: self.maxP99LatencyMs <= 50.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.observationCount": self.observationCount,
      "self.peakLatency": self.peakLatency,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, latencyMs);
      const postViolations: string[] = [];
      if (!((__result.self.p99Latency <= __result.self.maxP99LatencyMs))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.p99Latency <= self.maxP99LatencyMs");
      }
      if (!((__result.self.observationCount === (__pre["self.observationCount"] + 1)))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.observationCount = self.observationCount@pre + 1");
      }
      if (!((__result.self.peakLatency >= __pre["self.peakLatency"]))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.peakLatency >= self.peakLatency@pre");
      }
      if (!((__result.self.peakLatency >= latencyMs))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.peakLatency >= latencyMs");
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

/** Impl signature for LatencyMonitor.recordLatencyObservation (async). User supplies this. */
export type LatencyMonitorRecordLatencyObservationAsyncImpl = (self: LatencyMonitor, latencyMs: number) => Promise<{ self: LatencyMonitor; modified: { p99Latency: unknown; peakLatency: unknown; observationCount: unknown } }>;

/** Contract-checking wrapper for LatencyMonitor.recordLatencyObservation (async). */
export function wrapLatencyMonitorRecordLatencyObservationAsync(impl: LatencyMonitorRecordLatencyObservationAsyncImpl): (self: LatencyMonitor, latencyMs: number) => Promise<LatencyMonitor> {
  return async (self, latencyMs) => {
    const preViolations: string[] = [];
    if (!((latencyMs >= 0))) {
      preViolations.push("[LatencyMonitor.recordLatencyObservation] pre violated: latencyMs >= 0.0");
    }
    if (!((self.maxP99LatencyMs <= 50))) {
      preViolations.push("[LatencyMonitor.recordLatencyObservation] pre violated: self.maxP99LatencyMs <= 50.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.observationCount": self.observationCount,
      "self.peakLatency": self.peakLatency,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, latencyMs);
      const postViolations: string[] = [];
      if (!((__result.self.p99Latency <= __result.self.maxP99LatencyMs))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.p99Latency <= self.maxP99LatencyMs");
      }
      if (!((__result.self.observationCount === (__pre["self.observationCount"] + 1)))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.observationCount = self.observationCount@pre + 1");
      }
      if (!((__result.self.peakLatency >= __pre["self.peakLatency"]))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.peakLatency >= self.peakLatency@pre");
      }
      if (!((__result.self.peakLatency >= latencyMs))) {
        postViolations.push("[LatencyMonitor.recordLatencyObservation] post violated: self.peakLatency >= latencyMs");
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

/** Impl signature for LatencyMonitor.resetMetrics. User supplies this. */
export type LatencyMonitorResetMetricsImpl = (self: LatencyMonitor) => { self: LatencyMonitor; modified: { p99Latency: unknown; peakLatency: unknown; observationCount: unknown } };

/** Contract-checking wrapper for LatencyMonitor.resetMetrics. */
export function wrapLatencyMonitorResetMetrics(impl: LatencyMonitorResetMetricsImpl): (self: LatencyMonitor) => LatencyMonitor {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.p99Latency === 0))) {
        postViolations.push("[LatencyMonitor.resetMetrics] post violated: self.p99Latency = 0.0");
      }
      if (!((__result.self.peakLatency === 0))) {
        postViolations.push("[LatencyMonitor.resetMetrics] post violated: self.peakLatency = 0.0");
      }
      if (!((__result.self.observationCount === 0))) {
        postViolations.push("[LatencyMonitor.resetMetrics] post violated: self.observationCount = 0");
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

/** Impl signature for LatencyMonitor.resetMetrics (async). User supplies this. */
export type LatencyMonitorResetMetricsAsyncImpl = (self: LatencyMonitor) => Promise<{ self: LatencyMonitor; modified: { p99Latency: unknown; peakLatency: unknown; observationCount: unknown } }>;

/** Contract-checking wrapper for LatencyMonitor.resetMetrics (async). */
export function wrapLatencyMonitorResetMetricsAsync(impl: LatencyMonitorResetMetricsAsyncImpl): (self: LatencyMonitor) => Promise<LatencyMonitor> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.p99Latency === 0))) {
        postViolations.push("[LatencyMonitor.resetMetrics] post violated: self.p99Latency = 0.0");
      }
      if (!((__result.self.peakLatency === 0))) {
        postViolations.push("[LatencyMonitor.resetMetrics] post violated: self.peakLatency = 0.0");
      }
      if (!((__result.self.observationCount === 0))) {
        postViolations.push("[LatencyMonitor.resetMetrics] post violated: self.observationCount = 0");
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

/** Impl signature for TokenPolicyChannel.transferRoles. User supplies this. */
export type TokenPolicyChannelTransferRolesImpl = (self: TokenPolicyChannel, roleIds: ReadonlySet<string>) => { self: TokenPolicyChannel; modified: { transferCount: unknown; lastTransferTimestamp: unknown } };

/** Contract-checking wrapper for TokenPolicyChannel.transferRoles. */
export function wrapTokenPolicyChannelTransferRoles(impl: TokenPolicyChannelTransferRolesImpl): (self: TokenPolicyChannel, roleIds: ReadonlySet<string>) => TokenPolicyChannel {
  return (self, roleIds) => {
    const preViolations: string[] = [];
    if (!((roleIds).size > 0)) {
      preViolations.push("[TokenPolicyChannel.transferRoles] pre violated: roleIds->notEmpty()");
    }
    if (!((self.transferCount >= 0))) {
      preViolations.push("[TokenPolicyChannel.transferRoles] pre violated: self.transferCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.transferCount": self.transferCount,
      "self.lastTransferTimestamp": self.lastTransferTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, roleIds);
      const postViolations: string[] = [];
      if (!((__result.self.transferCount === (__pre["self.transferCount"] + 1)))) {
        postViolations.push("[TokenPolicyChannel.transferRoles] post violated: self.transferCount = self.transferCount@pre + 1");
      }
      if (!((__result.self.lastTransferTimestamp > __pre["self.lastTransferTimestamp"]))) {
        postViolations.push("[TokenPolicyChannel.transferRoles] post violated: self.lastTransferTimestamp > self.lastTransferTimestamp@pre");
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

/** Impl signature for TokenPolicyChannel.transferRoles (async). User supplies this. */
export type TokenPolicyChannelTransferRolesAsyncImpl = (self: TokenPolicyChannel, roleIds: ReadonlySet<string>) => Promise<{ self: TokenPolicyChannel; modified: { transferCount: unknown; lastTransferTimestamp: unknown } }>;

/** Contract-checking wrapper for TokenPolicyChannel.transferRoles (async). */
export function wrapTokenPolicyChannelTransferRolesAsync(impl: TokenPolicyChannelTransferRolesAsyncImpl): (self: TokenPolicyChannel, roleIds: ReadonlySet<string>) => Promise<TokenPolicyChannel> {
  return async (self, roleIds) => {
    const preViolations: string[] = [];
    if (!((roleIds).size > 0)) {
      preViolations.push("[TokenPolicyChannel.transferRoles] pre violated: roleIds->notEmpty()");
    }
    if (!((self.transferCount >= 0))) {
      preViolations.push("[TokenPolicyChannel.transferRoles] pre violated: self.transferCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.transferCount": self.transferCount,
      "self.lastTransferTimestamp": self.lastTransferTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, roleIds);
      const postViolations: string[] = [];
      if (!((__result.self.transferCount === (__pre["self.transferCount"] + 1)))) {
        postViolations.push("[TokenPolicyChannel.transferRoles] post violated: self.transferCount = self.transferCount@pre + 1");
      }
      if (!((__result.self.lastTransferTimestamp > __pre["self.lastTransferTimestamp"]))) {
        postViolations.push("[TokenPolicyChannel.transferRoles] post violated: self.lastTransferTimestamp > self.lastTransferTimestamp@pre");
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

/** Impl signature for PolicyDecisionChannel.transferDecision. User supplies this. */
export type PolicyDecisionChannelTransferDecisionImpl = (self: PolicyDecisionChannel, permissionId: string, isAllowed: boolean) => { self: PolicyDecisionChannel; modified: { decisionsMade: unknown; lastDecisionTimestamp: unknown } };

/** Contract-checking wrapper for PolicyDecisionChannel.transferDecision. */
export function wrapPolicyDecisionChannelTransferDecision(impl: PolicyDecisionChannelTransferDecisionImpl): (self: PolicyDecisionChannel, permissionId: string, isAllowed: boolean) => PolicyDecisionChannel {
  return (self, permissionId, isAllowed) => {
    const preViolations: string[] = [];
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[PolicyDecisionChannel.transferDecision] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!((self.decisionsMade >= 0))) {
      preViolations.push("[PolicyDecisionChannel.transferDecision] pre violated: self.decisionsMade >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.decisionsMade": self.decisionsMade,
      "self.lastDecisionTimestamp": self.lastDecisionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, permissionId, isAllowed);
      const postViolations: string[] = [];
      if (!((__result.self.decisionsMade === (__pre["self.decisionsMade"] + 1)))) {
        postViolations.push("[PolicyDecisionChannel.transferDecision] post violated: self.decisionsMade = self.decisionsMade@pre + 1");
      }
      if (!((__result.self.lastDecisionTimestamp > __pre["self.lastDecisionTimestamp"]))) {
        postViolations.push("[PolicyDecisionChannel.transferDecision] post violated: self.lastDecisionTimestamp > self.lastDecisionTimestamp@pre");
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

/** Impl signature for PolicyDecisionChannel.transferDecision (async). User supplies this. */
export type PolicyDecisionChannelTransferDecisionAsyncImpl = (self: PolicyDecisionChannel, permissionId: string, isAllowed: boolean) => Promise<{ self: PolicyDecisionChannel; modified: { decisionsMade: unknown; lastDecisionTimestamp: unknown } }>;

/** Contract-checking wrapper for PolicyDecisionChannel.transferDecision (async). */
export function wrapPolicyDecisionChannelTransferDecisionAsync(impl: PolicyDecisionChannelTransferDecisionAsyncImpl): (self: PolicyDecisionChannel, permissionId: string, isAllowed: boolean) => Promise<PolicyDecisionChannel> {
  return async (self, permissionId, isAllowed) => {
    const preViolations: string[] = [];
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[PolicyDecisionChannel.transferDecision] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!((self.decisionsMade >= 0))) {
      preViolations.push("[PolicyDecisionChannel.transferDecision] pre violated: self.decisionsMade >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.decisionsMade": self.decisionsMade,
      "self.lastDecisionTimestamp": self.lastDecisionTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, permissionId, isAllowed);
      const postViolations: string[] = [];
      if (!((__result.self.decisionsMade === (__pre["self.decisionsMade"] + 1)))) {
        postViolations.push("[PolicyDecisionChannel.transferDecision] post violated: self.decisionsMade = self.decisionsMade@pre + 1");
      }
      if (!((__result.self.lastDecisionTimestamp > __pre["self.lastDecisionTimestamp"]))) {
        postViolations.push("[PolicyDecisionChannel.transferDecision] post violated: self.lastDecisionTimestamp > self.lastDecisionTimestamp@pre");
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

/** Impl signature for DecisionAuditChannel.logDecision. User supplies this. */
export type DecisionAuditChannelLogDecisionImpl = (self: DecisionAuditChannel, subjectId: string, permissionId: string, outcome: string, timestamp: number) => { self: DecisionAuditChannel; modified: { auditWritesCount: unknown; lastAuditWriteTimestamp: unknown } };

/** Contract-checking wrapper for DecisionAuditChannel.logDecision. */
export function wrapDecisionAuditChannelLogDecision(impl: DecisionAuditChannelLogDecisionImpl): (self: DecisionAuditChannel, subjectId: string, permissionId: string, outcome: string, timestamp: number) => DecisionAuditChannel {
  return (self, subjectId, permissionId, outcome, timestamp) => {
    const preViolations: string[] = [];
    if (!(((subjectId !== null) && (subjectId !== "")))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: subjectId <> null and subjectId <> ''");
    }
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!(((outcome === "allow") || (outcome === "deny")))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: outcome = 'allow' or outcome = 'deny'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditWritesCount": self.auditWritesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, subjectId, permissionId, outcome, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.auditWritesCount === (__pre["self.auditWritesCount"] + 1)))) {
        postViolations.push("[DecisionAuditChannel.logDecision] post violated: self.auditWritesCount = self.auditWritesCount@pre + 1");
      }
      if (!((__result.self.lastAuditWriteTimestamp === timestamp))) {
        postViolations.push("[DecisionAuditChannel.logDecision] post violated: self.lastAuditWriteTimestamp = timestamp");
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

/** Impl signature for DecisionAuditChannel.logDecision (async). User supplies this. */
export type DecisionAuditChannelLogDecisionAsyncImpl = (self: DecisionAuditChannel, subjectId: string, permissionId: string, outcome: string, timestamp: number) => Promise<{ self: DecisionAuditChannel; modified: { auditWritesCount: unknown; lastAuditWriteTimestamp: unknown } }>;

/** Contract-checking wrapper for DecisionAuditChannel.logDecision (async). */
export function wrapDecisionAuditChannelLogDecisionAsync(impl: DecisionAuditChannelLogDecisionAsyncImpl): (self: DecisionAuditChannel, subjectId: string, permissionId: string, outcome: string, timestamp: number) => Promise<DecisionAuditChannel> {
  return async (self, subjectId, permissionId, outcome, timestamp) => {
    const preViolations: string[] = [];
    if (!(((subjectId !== null) && (subjectId !== "")))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: subjectId <> null and subjectId <> ''");
    }
    if (!(((permissionId !== null) && (permissionId !== "")))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: permissionId <> null and permissionId <> ''");
    }
    if (!(((outcome === "allow") || (outcome === "deny")))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: outcome = 'allow' or outcome = 'deny'");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[DecisionAuditChannel.logDecision] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditWritesCount": self.auditWritesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, subjectId, permissionId, outcome, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.auditWritesCount === (__pre["self.auditWritesCount"] + 1)))) {
        postViolations.push("[DecisionAuditChannel.logDecision] post violated: self.auditWritesCount = self.auditWritesCount@pre + 1");
      }
      if (!((__result.self.lastAuditWriteTimestamp === timestamp))) {
        postViolations.push("[DecisionAuditChannel.logDecision] post violated: self.lastAuditWriteTimestamp = timestamp");
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

/** Impl signature for ExpirationAuditChannel.logExpirationAudit. User supplies this. */
export type ExpirationAuditChannelLogExpirationAuditImpl = (self: ExpirationAuditChannel, entry: AuditEntry) => { self: ExpirationAuditChannel; modified: { expirationWritesCount: unknown; lastExpirationTimestamp: unknown } };

/** Contract-checking wrapper for ExpirationAuditChannel.logExpirationAudit. */
export function wrapExpirationAuditChannelLogExpirationAudit(impl: ExpirationAuditChannelLogExpirationAuditImpl): (self: ExpirationAuditChannel, entry: AuditEntry) => ExpirationAuditChannel {
  return (self, entry) => {
    const preViolations: string[] = [];
    if (!((entry.isImmutable === true))) {
      preViolations.push("[ExpirationAuditChannel.logExpirationAudit] pre violated: entry.isImmutable = true");
    }
    if (!((entry.timestamp >= 0))) {
      preViolations.push("[ExpirationAuditChannel.logExpirationAudit] pre violated: entry.timestamp >= 0.0");
    }
    if (!((entry.outcome === "deny"))) {
      preViolations.push("[ExpirationAuditChannel.logExpirationAudit] pre violated: entry.outcome = 'deny'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.expirationWritesCount": self.expirationWritesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, entry);
      const postViolations: string[] = [];
      if (!((__result.self.expirationWritesCount === (__pre["self.expirationWritesCount"] + 1)))) {
        postViolations.push("[ExpirationAuditChannel.logExpirationAudit] post violated: self.expirationWritesCount = self.expirationWritesCount@pre + 1");
      }
      if (!((__result.self.lastExpirationTimestamp === entry.timestamp))) {
        postViolations.push("[ExpirationAuditChannel.logExpirationAudit] post violated: self.lastExpirationTimestamp = entry.timestamp");
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

/** Impl signature for ExpirationAuditChannel.logExpirationAudit (async). User supplies this. */
export type ExpirationAuditChannelLogExpirationAuditAsyncImpl = (self: ExpirationAuditChannel, entry: AuditEntry) => Promise<{ self: ExpirationAuditChannel; modified: { expirationWritesCount: unknown; lastExpirationTimestamp: unknown } }>;

/** Contract-checking wrapper for ExpirationAuditChannel.logExpirationAudit (async). */
export function wrapExpirationAuditChannelLogExpirationAuditAsync(impl: ExpirationAuditChannelLogExpirationAuditAsyncImpl): (self: ExpirationAuditChannel, entry: AuditEntry) => Promise<ExpirationAuditChannel> {
  return async (self, entry) => {
    const preViolations: string[] = [];
    if (!((entry.isImmutable === true))) {
      preViolations.push("[ExpirationAuditChannel.logExpirationAudit] pre violated: entry.isImmutable = true");
    }
    if (!((entry.timestamp >= 0))) {
      preViolations.push("[ExpirationAuditChannel.logExpirationAudit] pre violated: entry.timestamp >= 0.0");
    }
    if (!((entry.outcome === "deny"))) {
      preViolations.push("[ExpirationAuditChannel.logExpirationAudit] pre violated: entry.outcome = 'deny'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.expirationWritesCount": self.expirationWritesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, entry);
      const postViolations: string[] = [];
      if (!((__result.self.expirationWritesCount === (__pre["self.expirationWritesCount"] + 1)))) {
        postViolations.push("[ExpirationAuditChannel.logExpirationAudit] post violated: self.expirationWritesCount = self.expirationWritesCount@pre + 1");
      }
      if (!((__result.self.lastExpirationTimestamp === entry.timestamp))) {
        postViolations.push("[ExpirationAuditChannel.logExpirationAudit] post violated: self.lastExpirationTimestamp = entry.timestamp");
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

/** Impl signature for MonitorChannel.reportLatency. User supplies this. */
export type MonitorChannelReportLatencyImpl = (self: MonitorChannel, latencyMs: number) => { self: MonitorChannel; modified: { lastReportedLatency: unknown; latencyReportsCount: unknown } };

/** Contract-checking wrapper for MonitorChannel.reportLatency. */
export function wrapMonitorChannelReportLatency(impl: MonitorChannelReportLatencyImpl): (self: MonitorChannel, latencyMs: number) => MonitorChannel {
  return (self, latencyMs) => {
    const preViolations: string[] = [];
    if (!((latencyMs >= 0))) {
      preViolations.push("[MonitorChannel.reportLatency] pre violated: latencyMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.latencyReportsCount": self.latencyReportsCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, latencyMs);
      const postViolations: string[] = [];
      if (!((__result.self.lastReportedLatency === latencyMs))) {
        postViolations.push("[MonitorChannel.reportLatency] post violated: self.lastReportedLatency = latencyMs");
      }
      if (!((__result.self.latencyReportsCount === (__pre["self.latencyReportsCount"] + 1)))) {
        postViolations.push("[MonitorChannel.reportLatency] post violated: self.latencyReportsCount = self.latencyReportsCount@pre + 1");
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

/** Impl signature for MonitorChannel.reportLatency (async). User supplies this. */
export type MonitorChannelReportLatencyAsyncImpl = (self: MonitorChannel, latencyMs: number) => Promise<{ self: MonitorChannel; modified: { lastReportedLatency: unknown; latencyReportsCount: unknown } }>;

/** Contract-checking wrapper for MonitorChannel.reportLatency (async). */
export function wrapMonitorChannelReportLatencyAsync(impl: MonitorChannelReportLatencyAsyncImpl): (self: MonitorChannel, latencyMs: number) => Promise<MonitorChannel> {
  return async (self, latencyMs) => {
    const preViolations: string[] = [];
    if (!((latencyMs >= 0))) {
      preViolations.push("[MonitorChannel.reportLatency] pre violated: latencyMs >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.latencyReportsCount": self.latencyReportsCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, latencyMs);
      const postViolations: string[] = [];
      if (!((__result.self.lastReportedLatency === latencyMs))) {
        postViolations.push("[MonitorChannel.reportLatency] post violated: self.lastReportedLatency = latencyMs");
      }
      if (!((__result.self.latencyReportsCount === (__pre["self.latencyReportsCount"] + 1)))) {
        postViolations.push("[MonitorChannel.reportLatency] post violated: self.latencyReportsCount = self.latencyReportsCount@pre + 1");
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

/** Impl signature for AccessControlGatewaySystem.resolvePermissions. User supplies this. */
export type AccessControlGatewaySystemResolvePermissionsImpl = (self: AccessControlGatewaySystem, token: string, requestedPermission: string) => { self: AccessControlGatewaySystem; modified: { rolePermissions: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystem.resolvePermissions. */
export function wrapAccessControlGatewaySystemResolvePermissions(impl: AccessControlGatewaySystemResolvePermissionsImpl): (self: AccessControlGatewaySystem, token: string, requestedPermission: string) => AccessControlGatewaySystem {
  return (self, token, requestedPermission) => {
    const preViolations: string[] = [];
    if (!(((token !== null) && (token !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.resolvePermissions] pre violated: token <> null and token <> ''");
    }
    if (!(((requestedPermission !== null) && (requestedPermission !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.resolvePermissions] pre violated: requestedPermission <> null and requestedPermission <> ''");
    }
    if (!((self.tolerance >= 0))) {
      preViolations.push("[AccessControlGatewaySystem.resolvePermissions] pre violated: self.tolerance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, token, requestedPermission);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->forAll(p |
      self.rolePermissions->includes(p)
    ) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.rolePermissions->forAll(p |
      result->includes(p)
    ) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result->size() = self.rolePermissions->size() — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result->forAll(p | p <> null) — unbound variable 'result'
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

/** Impl signature for AccessControlGatewaySystem.resolvePermissions (async). User supplies this. */
export type AccessControlGatewaySystemResolvePermissionsAsyncImpl = (self: AccessControlGatewaySystem, token: string, requestedPermission: string) => Promise<{ self: AccessControlGatewaySystem; modified: { rolePermissions: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystem.resolvePermissions (async). */
export function wrapAccessControlGatewaySystemResolvePermissionsAsync(impl: AccessControlGatewaySystemResolvePermissionsAsyncImpl): (self: AccessControlGatewaySystem, token: string, requestedPermission: string) => Promise<AccessControlGatewaySystem> {
  return async (self, token, requestedPermission) => {
    const preViolations: string[] = [];
    if (!(((token !== null) && (token !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.resolvePermissions] pre violated: token <> null and token <> ''");
    }
    if (!(((requestedPermission !== null) && (requestedPermission !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.resolvePermissions] pre violated: requestedPermission <> null and requestedPermission <> ''");
    }
    if (!((self.tolerance >= 0))) {
      preViolations.push("[AccessControlGatewaySystem.resolvePermissions] pre violated: self.tolerance >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, token, requestedPermission);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result->forAll(p |
      self.rolePermissions->includes(p)
    ) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.rolePermissions->forAll(p |
      result->includes(p)
    ) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result->size() = self.rolePermissions->size() — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result->forAll(p | p <> null) — unbound variable 'result'
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

/** Impl signature for AccessControlGatewaySystem.authorize. User supplies this. */
export type AccessControlGatewaySystemAuthorizeImpl = (self: AccessControlGatewaySystem, subjectToken: string, requestedPermission: string) => { self: AccessControlGatewaySystem; modified: { auditLog: unknown; decisionOutcome: unknown; lastDecisionTimestamp: unknown; p99LatencyRunning: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystem.authorize. */
export function wrapAccessControlGatewaySystemAuthorize(impl: AccessControlGatewaySystemAuthorizeImpl): (self: AccessControlGatewaySystem, subjectToken: string, requestedPermission: string) => AccessControlGatewaySystem {
  return (self, subjectToken, requestedPermission) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!(((requestedPermission !== null) && (requestedPermission !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: requestedPermission <> null and requestedPermission <> ''");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (!((self.maxP99LatencyMs <= 50))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: self.maxP99LatencyMs <= 50.0");
    }
    if (!((self.p99LatencyRunning >= 0))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: self.p99LatencyRunning >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, subjectToken, requestedPermission);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.decisionOutcome = (if result then 'allow' else 'deny' endif) — unbound variable 'result'
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((((__x.subjectId === subjectToken) && (__x.permissionId === requestedPermission)) && (__x.outcome === __result.self.decisionOutcome)) && (__x.isImmutable === true)) && (__x.timestamp >= __result.self.lastDecisionTimestamp)) && ((__x.timestamp - __result.self.lastDecisionTimestamp) <= __result.self.maxAuditLatencyMs)))))) {
        postViolations.push("[AccessControlGatewaySystem.authorize] post violated: self.auditLog->exists(e |\n      e.subjectId = subjectToken and\n      e.permissionId = requestedPermission and\n      e.outcome = self.decisionOutcome and\n      e.isImmutable = true and\n      e.timestamp >= self.lastDecisionTimestamp and\n      (e.timestamp - self.lastDecisionTimestamp) <= self.maxAuditLatencyMs\n    )");
      }
      if (!((__result.self.p99LatencyRunning <= __result.self.maxP99LatencyMs))) {
        postViolations.push("[AccessControlGatewaySystem.authorize] post violated: self.p99LatencyRunning <= self.maxP99LatencyMs");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystem.authorize] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
      }
      // SKIPPED post-clause (not translatable): result = self.rolePermissions->exists(p |
      p.permissionId = requestedPermission
    ) — unbound variable 'result'
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

/** Impl signature for AccessControlGatewaySystem.authorize (async). User supplies this. */
export type AccessControlGatewaySystemAuthorizeAsyncImpl = (self: AccessControlGatewaySystem, subjectToken: string, requestedPermission: string) => Promise<{ self: AccessControlGatewaySystem; modified: { auditLog: unknown; decisionOutcome: unknown; lastDecisionTimestamp: unknown; p99LatencyRunning: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystem.authorize (async). */
export function wrapAccessControlGatewaySystemAuthorizeAsync(impl: AccessControlGatewaySystemAuthorizeAsyncImpl): (self: AccessControlGatewaySystem, subjectToken: string, requestedPermission: string) => Promise<AccessControlGatewaySystem> {
  return async (self, subjectToken, requestedPermission) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!(((requestedPermission !== null) && (requestedPermission !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: requestedPermission <> null and requestedPermission <> ''");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (!((self.maxP99LatencyMs <= 50))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: self.maxP99LatencyMs <= 50.0");
    }
    if (!((self.p99LatencyRunning >= 0))) {
      preViolations.push("[AccessControlGatewaySystem.authorize] pre violated: self.p99LatencyRunning >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, subjectToken, requestedPermission);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): self.decisionOutcome = (if result then 'allow' else 'deny' endif) — unbound variable 'result'
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((((__x.subjectId === subjectToken) && (__x.permissionId === requestedPermission)) && (__x.outcome === __result.self.decisionOutcome)) && (__x.isImmutable === true)) && (__x.timestamp >= __result.self.lastDecisionTimestamp)) && ((__x.timestamp - __result.self.lastDecisionTimestamp) <= __result.self.maxAuditLatencyMs)))))) {
        postViolations.push("[AccessControlGatewaySystem.authorize] post violated: self.auditLog->exists(e |\n      e.subjectId = subjectToken and\n      e.permissionId = requestedPermission and\n      e.outcome = self.decisionOutcome and\n      e.isImmutable = true and\n      e.timestamp >= self.lastDecisionTimestamp and\n      (e.timestamp - self.lastDecisionTimestamp) <= self.maxAuditLatencyMs\n    )");
      }
      if (!((__result.self.p99LatencyRunning <= __result.self.maxP99LatencyMs))) {
        postViolations.push("[AccessControlGatewaySystem.authorize] post violated: self.p99LatencyRunning <= self.maxP99LatencyMs");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystem.authorize] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
      }
      // SKIPPED post-clause (not translatable): result = self.rolePermissions->exists(p |
      p.permissionId = requestedPermission
    ) — unbound variable 'result'
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

/** Impl signature for AccessControlGatewaySystem.expireStaleRoles. User supplies this. */
export type AccessControlGatewaySystemExpireStaleRolesImpl = (self: AccessControlGatewaySystem, currentTimestamp: number) => { self: AccessControlGatewaySystem; modified: { activeRoles: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystem.expireStaleRoles. */
export function wrapAccessControlGatewaySystemExpireStaleRoles(impl: AccessControlGatewaySystemExpireStaleRolesImpl): (self: AccessControlGatewaySystem, currentTimestamp: number) => AccessControlGatewaySystem {
  return (self, currentTimestamp) => {
    const preViolations: string[] = [];
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[AccessControlGatewaySystem.expireStaleRoles] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.maxRoleExpiryDays <= 90))) {
      preViolations.push("[AccessControlGatewaySystem.expireStaleRoles] pre violated: self.maxRoleExpiryDays <= 90.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTimestamp);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.activeRoles).every((__x) => (true)))) {
        postViolations.push("[AccessControlGatewaySystem.expireStaleRoles] post violated: self.activeRoles->forAll(roleId |\n      true   \n    )");
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

/** Impl signature for AccessControlGatewaySystem.expireStaleRoles (async). User supplies this. */
export type AccessControlGatewaySystemExpireStaleRolesAsyncImpl = (self: AccessControlGatewaySystem, currentTimestamp: number) => Promise<{ self: AccessControlGatewaySystem; modified: { activeRoles: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystem.expireStaleRoles (async). */
export function wrapAccessControlGatewaySystemExpireStaleRolesAsync(impl: AccessControlGatewaySystemExpireStaleRolesAsyncImpl): (self: AccessControlGatewaySystem, currentTimestamp: number) => Promise<AccessControlGatewaySystem> {
  return async (self, currentTimestamp) => {
    const preViolations: string[] = [];
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[AccessControlGatewaySystem.expireStaleRoles] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.maxRoleExpiryDays <= 90))) {
      preViolations.push("[AccessControlGatewaySystem.expireStaleRoles] pre violated: self.maxRoleExpiryDays <= 90.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTimestamp);
      const postViolations: string[] = [];
      if (!(Array.from(__result.self.activeRoles).every((__x) => (true)))) {
        postViolations.push("[AccessControlGatewaySystem.expireStaleRoles] post violated: self.activeRoles->forAll(roleId |\n      true   \n    )");
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

/** Impl signature for AccessControlGatewaySystem.renewRole. User supplies this. */
export type AccessControlGatewaySystemRenewRoleImpl = (self: AccessControlGatewaySystem, roleId: string) => { self: AccessControlGatewaySystem; modified: { activeRoles: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystem.renewRole. */
export function wrapAccessControlGatewaySystemRenewRole(impl: AccessControlGatewaySystemRenewRoleImpl): (self: AccessControlGatewaySystem, roleId: string) => AccessControlGatewaySystem {
  return (self, roleId) => {
    const preViolations: string[] = [];
    if (!(((roleId !== null) && (roleId !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.renewRole] pre violated: roleId <> null and roleId <> ''");
    }
    if (!((self.activeRoles).has(roleId))) {
      preViolations.push("[AccessControlGatewaySystem.renewRole] pre violated: self.activeRoles->includes(roleId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, roleId);
      const postViolations: string[] = [];
      if (!((__result.self.activeRoles).has(roleId))) {
        postViolations.push("[AccessControlGatewaySystem.renewRole] post violated: self.activeRoles->includes(roleId)");
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

/** Impl signature for AccessControlGatewaySystem.renewRole (async). User supplies this. */
export type AccessControlGatewaySystemRenewRoleAsyncImpl = (self: AccessControlGatewaySystem, roleId: string) => Promise<{ self: AccessControlGatewaySystem; modified: { activeRoles: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystem.renewRole (async). */
export function wrapAccessControlGatewaySystemRenewRoleAsync(impl: AccessControlGatewaySystemRenewRoleAsyncImpl): (self: AccessControlGatewaySystem, roleId: string) => Promise<AccessControlGatewaySystem> {
  return async (self, roleId) => {
    const preViolations: string[] = [];
    if (!(((roleId !== null) && (roleId !== "")))) {
      preViolations.push("[AccessControlGatewaySystem.renewRole] pre violated: roleId <> null and roleId <> ''");
    }
    if (!((self.activeRoles).has(roleId))) {
      preViolations.push("[AccessControlGatewaySystem.renewRole] pre violated: self.activeRoles->includes(roleId)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, roleId);
      const postViolations: string[] = [];
      if (!((__result.self.activeRoles).has(roleId))) {
        postViolations.push("[AccessControlGatewaySystem.renewRole] post violated: self.activeRoles->includes(roleId)");
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

/** Impl signature for AccessControlGatewaySystemFormalized.rejectUnknownPermission. User supplies this. */
export type AccessControlGatewaySystemFormalizedRejectUnknownPermissionImpl = (self: AccessControlGatewaySystemFormalized, requestedPermission: string) => { self: AccessControlGatewaySystemFormalized; modified: { auditLog: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystemFormalized.rejectUnknownPermission. */
export function wrapAccessControlGatewaySystemFormalizedRejectUnknownPermission(impl: AccessControlGatewaySystemFormalizedRejectUnknownPermissionImpl): (self: AccessControlGatewaySystemFormalized, requestedPermission: string) => AccessControlGatewaySystemFormalized {
  return (self, requestedPermission) => {
    const preViolations: string[] = [];
    if (!(((requestedPermission !== null) && (requestedPermission !== "")))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] pre violated: requestedPermission <> null and requestedPermission <> ''");
    }
    if (!(!(Array.from(self.rolePermissions).some((__x) => ((__x.permissionId === requestedPermission)))))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] pre violated: not self.rolePermissions->exists(p |\n      p.permissionId = requestedPermission\n    )");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedPermission);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((__x.permissionId === requestedPermission) && (__x.outcome === "deny")) && (__x.isImmutable === true)) && (__x.timestamp >= 0)))))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] post violated: self.auditLog->exists(e |\n      e.permissionId = requestedPermission and\n      e.outcome = 'deny' and\n      e.isImmutable = true and\n      e.timestamp >= 0.0\n    )");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
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

/** Impl signature for AccessControlGatewaySystemFormalized.rejectUnknownPermission (async). User supplies this. */
export type AccessControlGatewaySystemFormalizedRejectUnknownPermissionAsyncImpl = (self: AccessControlGatewaySystemFormalized, requestedPermission: string) => Promise<{ self: AccessControlGatewaySystemFormalized; modified: { auditLog: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystemFormalized.rejectUnknownPermission (async). */
export function wrapAccessControlGatewaySystemFormalizedRejectUnknownPermissionAsync(impl: AccessControlGatewaySystemFormalizedRejectUnknownPermissionAsyncImpl): (self: AccessControlGatewaySystemFormalized, requestedPermission: string) => Promise<AccessControlGatewaySystemFormalized> {
  return async (self, requestedPermission) => {
    const preViolations: string[] = [];
    if (!(((requestedPermission !== null) && (requestedPermission !== "")))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] pre violated: requestedPermission <> null and requestedPermission <> ''");
    }
    if (!(!(Array.from(self.rolePermissions).some((__x) => ((__x.permissionId === requestedPermission)))))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] pre violated: not self.rolePermissions->exists(p |\n      p.permissionId = requestedPermission\n    )");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedPermission);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((__x.permissionId === requestedPermission) && (__x.outcome === "deny")) && (__x.isImmutable === true)) && (__x.timestamp >= 0)))))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] post violated: self.auditLog->exists(e |\n      e.permissionId = requestedPermission and\n      e.outcome = 'deny' and\n      e.isImmutable = true and\n      e.timestamp >= 0.0\n    )");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.rejectUnknownPermission] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
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

/** Impl signature for AccessControlGatewaySystemFormalized.enforceLatencyCompliance. User supplies this. */
export type AccessControlGatewaySystemFormalizedEnforceLatencyComplianceImpl = (self: AccessControlGatewaySystemFormalized, currentLatency: number) => { self: AccessControlGatewaySystemFormalized; modified: { complianceAlerts: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystemFormalized.enforceLatencyCompliance. */
export function wrapAccessControlGatewaySystemFormalizedEnforceLatencyCompliance(impl: AccessControlGatewaySystemFormalizedEnforceLatencyComplianceImpl): (self: AccessControlGatewaySystemFormalized, currentLatency: number) => AccessControlGatewaySystemFormalized {
  return (self, currentLatency) => {
    const preViolations: string[] = [];
    if (!((currentLatency > self.maxAuditLatencyMs))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.enforceLatencyCompliance] pre violated: currentLatency > self.maxAuditLatencyMs");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.enforceLatencyCompliance] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.complianceAlerts": self.complianceAlerts,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentLatency);
      const postViolations: string[] = [];
      if (!(((__result.self.complianceAlerts).size === ((__pre["self.complianceAlerts"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.enforceLatencyCompliance] post violated: self.complianceAlerts->size() = self.complianceAlerts@pre->size() + 1");
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

/** Impl signature for AccessControlGatewaySystemFormalized.enforceLatencyCompliance (async). User supplies this. */
export type AccessControlGatewaySystemFormalizedEnforceLatencyComplianceAsyncImpl = (self: AccessControlGatewaySystemFormalized, currentLatency: number) => Promise<{ self: AccessControlGatewaySystemFormalized; modified: { complianceAlerts: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystemFormalized.enforceLatencyCompliance (async). */
export function wrapAccessControlGatewaySystemFormalizedEnforceLatencyComplianceAsync(impl: AccessControlGatewaySystemFormalizedEnforceLatencyComplianceAsyncImpl): (self: AccessControlGatewaySystemFormalized, currentLatency: number) => Promise<AccessControlGatewaySystemFormalized> {
  return async (self, currentLatency) => {
    const preViolations: string[] = [];
    if (!((currentLatency > self.maxAuditLatencyMs))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.enforceLatencyCompliance] pre violated: currentLatency > self.maxAuditLatencyMs");
    }
    if (!((self.maxAuditLatencyMs <= 100))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.enforceLatencyCompliance] pre violated: self.maxAuditLatencyMs <= 100.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.complianceAlerts": self.complianceAlerts,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentLatency);
      const postViolations: string[] = [];
      if (!(((__result.self.complianceAlerts).size === ((__pre["self.complianceAlerts"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.enforceLatencyCompliance] post violated: self.complianceAlerts->size() = self.complianceAlerts@pre->size() + 1");
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

/** Impl signature for AccessControlGatewaySystemFormalized.blockExpiredRole. User supplies this. */
export type AccessControlGatewaySystemFormalizedBlockExpiredRoleImpl = (self: AccessControlGatewaySystemFormalized, subjectToken: string, roleId: string, currentTimestamp: number) => { self: AccessControlGatewaySystemFormalized; modified: { activeRoles: unknown; auditLog: unknown } };

/** Contract-checking wrapper for AccessControlGatewaySystemFormalized.blockExpiredRole. */
export function wrapAccessControlGatewaySystemFormalizedBlockExpiredRole(impl: AccessControlGatewaySystemFormalizedBlockExpiredRoleImpl): (self: AccessControlGatewaySystemFormalized, subjectToken: string, roleId: string, currentTimestamp: number) => AccessControlGatewaySystemFormalized {
  return (self, subjectToken, roleId, currentTimestamp) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!(((roleId !== null) && (roleId !== "")))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: roleId <> null and roleId <> ''");
    }
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.activeRoles).has(roleId))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: self.activeRoles->includes(roleId)");
    }
    if (!((self.roleLastUsed < (currentTimestamp - (self.maxRoleExpiryDays * 86400))))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: self.roleLastUsed < currentTimestamp - (self.maxRoleExpiryDays * 86400.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, subjectToken, roleId, currentTimestamp);
      const postViolations: string[] = [];
      if (!(!((__result.self.activeRoles).has(roleId)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] post violated: not self.activeRoles->includes(roleId)");
      }
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((__x.subjectId === subjectToken) && (__x.permissionId === roleId)) && (__x.outcome === "deny")) && (__x.isImmutable === true)))))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] post violated: self.auditLog->exists(e |\n      e.subjectId = subjectToken and\n      e.permissionId = roleId and\n      e.outcome = 'deny' and\n      e.isImmutable = true\n    )");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
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

/** Impl signature for AccessControlGatewaySystemFormalized.blockExpiredRole (async). User supplies this. */
export type AccessControlGatewaySystemFormalizedBlockExpiredRoleAsyncImpl = (self: AccessControlGatewaySystemFormalized, subjectToken: string, roleId: string, currentTimestamp: number) => Promise<{ self: AccessControlGatewaySystemFormalized; modified: { activeRoles: unknown; auditLog: unknown } }>;

/** Contract-checking wrapper for AccessControlGatewaySystemFormalized.blockExpiredRole (async). */
export function wrapAccessControlGatewaySystemFormalizedBlockExpiredRoleAsync(impl: AccessControlGatewaySystemFormalizedBlockExpiredRoleAsyncImpl): (self: AccessControlGatewaySystemFormalized, subjectToken: string, roleId: string, currentTimestamp: number) => Promise<AccessControlGatewaySystemFormalized> {
  return async (self, subjectToken, roleId, currentTimestamp) => {
    const preViolations: string[] = [];
    if (!(((subjectToken !== null) && (subjectToken !== "")))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: subjectToken <> null and subjectToken <> ''");
    }
    if (!(((roleId !== null) && (roleId !== "")))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: roleId <> null and roleId <> ''");
    }
    if (!((currentTimestamp >= 0))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: currentTimestamp >= 0.0");
    }
    if (!((self.activeRoles).has(roleId))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: self.activeRoles->includes(roleId)");
    }
    if (!((self.roleLastUsed < (currentTimestamp - (self.maxRoleExpiryDays * 86400))))) {
      preViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] pre violated: self.roleLastUsed < currentTimestamp - (self.maxRoleExpiryDays * 86400.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.auditLog": self.auditLog,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, subjectToken, roleId, currentTimestamp);
      const postViolations: string[] = [];
      if (!(!((__result.self.activeRoles).has(roleId)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] post violated: not self.activeRoles->includes(roleId)");
      }
      if (!(Array.from(__result.self.auditLog).some((__x) => (((((__x.subjectId === subjectToken) && (__x.permissionId === roleId)) && (__x.outcome === "deny")) && (__x.isImmutable === true)))))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] post violated: self.auditLog->exists(e |\n      e.subjectId = subjectToken and\n      e.permissionId = roleId and\n      e.outcome = 'deny' and\n      e.isImmutable = true\n    )");
      }
      if (!(((__result.self.auditLog).size === ((__pre["self.auditLog"]).size + 1)))) {
        postViolations.push("[AccessControlGatewaySystemFormalized.blockExpiredRole] post violated: self.auditLog->size() = self.auditLog@pre->size() + 1");
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

/** Lifecycle registry for PermissionUnionCorrectness commitments. */
export class PermissionUnionCorrectnessRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PermissionUnionCorrectness>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PermissionUnionCorrectness — the typed wrapper guarantees that since
    // `register` only accepts PermissionUnionCorrectness instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PermissionUnionCorrectness): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PermissionUnionCorrectnessId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PermissionUnionCorrectnessId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PermissionUnionCorrectnessId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PermissionUnionCorrectness>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PermissionUnionCorrectness>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AuditedDecisions commitments. */
export class AuditedDecisionsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AuditedDecisions>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AuditedDecisions — the typed wrapper guarantees that since
    // `register` only accepts AuditedDecisions instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AuditedDecisions): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AuditedDecisionsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AuditedDecisionsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AuditedDecisionsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AuditedDecisions>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AuditedDecisions>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for StaleRoleExpiration commitments. */
export class StaleRoleExpirationRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<StaleRoleExpiration>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a StaleRoleExpiration — the typed wrapper guarantees that since
    // `register` only accepts StaleRoleExpiration instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: StaleRoleExpiration): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: StaleRoleExpirationId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: StaleRoleExpirationId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: StaleRoleExpirationId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<StaleRoleExpiration>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<StaleRoleExpiration>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for LatencyBudget commitments. */
export class LatencyBudgetRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<LatencyBudget>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a LatencyBudget — the typed wrapper guarantees that since
    // `register` only accepts LatencyBudget instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: LatencyBudget): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: LatencyBudgetId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: LatencyBudgetId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: LatencyBudgetId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<LatencyBudget>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<LatencyBudget>[];
  }

  size(): number {
    return this.inner.size();
  }
}

