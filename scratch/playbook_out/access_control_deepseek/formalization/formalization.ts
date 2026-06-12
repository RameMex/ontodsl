// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for AccessControlGatewayRegulatoryBody. Runtime: string. Compile-time: branded. */
export type AccessControlGatewayRegulatoryBodyId = string & { readonly __brand: "AccessControlGatewayRegulatoryBodyId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for AccessControlGatewaySystem. Runtime: string. Compile-time: branded. */
export type AccessControlGatewaySystemId = string & { readonly __brand: "AccessControlGatewaySystemId" };
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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

