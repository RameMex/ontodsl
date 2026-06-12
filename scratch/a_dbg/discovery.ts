// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Subject. Runtime: string. Compile-time: branded. */
export type SubjectId = string & { readonly __brand: "SubjectId" };
/** Identity type for Auditor. Runtime: string. Compile-time: branded. */
export type AuditorId = string & { readonly __brand: "AuditorId" };
/** Identity type for ComplianceOfficer. Runtime: string. Compile-time: branded. */
export type ComplianceOfficerId = string & { readonly __brand: "ComplianceOfficerId" };
/** Identity type for AccessGatewayVendor. Runtime: string. Compile-time: branded. */
export type AccessGatewayVendorId = string & { readonly __brand: "AccessGatewayVendorId" };
/** Identity type for PermissionUnionCorrectness. Runtime: string. Compile-time: branded. */
export type PermissionUnionCorrectnessId = string & { readonly __brand: "PermissionUnionCorrectnessId" };
/** Identity type for AuditedDecisions. Runtime: string. Compile-time: branded. */
export type AuditedDecisionsId = string & { readonly __brand: "AuditedDecisionsId" };
/** Identity type for StaleRoleExpiration. Runtime: string. Compile-time: branded. */
export type StaleRoleExpirationId = string & { readonly __brand: "StaleRoleExpirationId" };
/** Identity type for LatencyBudget. Runtime: string. Compile-time: branded. */
export type LatencyBudgetId = string & { readonly __brand: "LatencyBudgetId" };
/** Identity type for AccessGatewaySystem. Runtime: string. Compile-time: branded. */
export type AccessGatewaySystemId = string & { readonly __brand: "AccessGatewaySystemId" };
/** Identity type for Permission. Runtime: string. Compile-time: branded. */
export type PermissionId = string & { readonly __brand: "PermissionId" };
/** Identity type for Role. Runtime: string. Compile-time: branded. */
export type RoleId = string & { readonly __brand: "RoleId" };
/** Identity type for AuditEntry. Runtime: string. Compile-time: branded. */
export type AuditEntryId = string & { readonly __brand: "AuditEntryId" };
/** Identity type for AuthorizationRequest. Runtime: string. Compile-time: branded. */
export type AuthorizationRequestId = string & { readonly __brand: "AuthorizationRequestId" };
/** Identity type for AuthorizationFlow. Runtime: string. Compile-time: branded. */
export type AuthorizationFlowId = string & { readonly __brand: "AuthorizationFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Subject {
  readonly subjectId: SubjectId;
  readonly name: string;
  readonly authenticated: boolean;
}

/** @stereotype <<Agent>> */
export interface Auditor {
  readonly auditorId: AuditorId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface ComplianceOfficer {
  readonly officerId: ComplianceOfficerId;
  readonly regulatedEntityId: string;
}

/** @stereotype <<Agent>> */
export interface AccessGatewayVendor {
  readonly vendorId: AccessGatewayVendorId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface PermissionUnionCorrectness {
  readonly commitmentId: PermissionUnionCorrectnessId;
  readonly unionCorrectnessThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface AuditedDecisions {
  readonly commitmentId: AuditedDecisionsId;
  readonly auditCompletenessRatio: number;
}

/** @stereotype <<Commitment>> */
export interface StaleRoleExpiration {
  readonly commitmentId: StaleRoleExpirationId;
  readonly maxStalenessDays: number;
}

/** @stereotype <<Commitment>> */
export interface LatencyBudget {
  readonly commitmentId: LatencyBudgetId;
  readonly p99LatencyMs: number;
}

/** @stereotype <<Category>> */
export interface PermissionUnionConstraints {
}

/** @stereotype <<Category>> */
export interface AuditCompletenessConstraint {
}

/** @stereotype <<Category>> */
export interface StaleRoleConstraint {
}

/** @stereotype <<Category>> */
export interface LatencyConstraint {
}

/** @stereotype <<Kind>> */
export interface AccessGatewaySystem {
  readonly systemId: AccessGatewaySystemId;
  readonly unionCorrectnessThreshold: number;
  readonly auditCompletenessRatio: number;
  readonly auditRetentionDays: number;
  readonly maxStalenessDays: number;
  readonly p99LatencyMs: number;
}

/** @stereotype <<Kind>> */
export interface Permission {
  readonly permissionId: PermissionId;
  readonly action: string;
  readonly resource: string;
  readonly description: string;
}

/** @stereotype <<Kind>> */
export interface Role {
  readonly roleId: RoleId;
  readonly name: string;
  readonly permissions: ReadonlySet<Permission>;
  readonly lastUsedTimestamp: number;
  readonly isExpired: boolean;
}

/** @stereotype <<Kind>> */
export interface AuditEntry {
  readonly entryId: AuditEntryId;
  readonly timestamp: number;
  readonly subjectId: string;
  readonly permissionId: string;
  readonly outcome: string;
  readonly immutable: boolean;
}

/** @stereotype <<Kind>> */
export interface AuthorizationRequest {
  readonly requestId: AuthorizationRequestId;
  readonly subjectToken: string;
  readonly requestedPermission: Permission;
  readonly timestamp: number;
}

/** @stereotype <<Happening>> */
export interface AuthorizationFlow {
  readonly flowId: AuthorizationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly scheduledExpirationJob: boolean;
}


// ─── Factory functions ───

export function makeSubject(data: {
  subjectId: string;
  name: string;
  authenticated: boolean;
}): Subject {
  return {
    subjectId: data.subjectId as SubjectId,
    name: data.name,
    authenticated: data.authenticated,
  };
}

export function makeAuditor(data: {
  auditorId: string;
  jurisdiction: string;
}): Auditor {
  return {
    auditorId: data.auditorId as AuditorId,
    jurisdiction: data.jurisdiction,
  };
}

export function makeComplianceOfficer(data: {
  officerId: string;
  regulatedEntityId: string;
}): ComplianceOfficer {
  return {
    officerId: data.officerId as ComplianceOfficerId,
    regulatedEntityId: data.regulatedEntityId,
  };
}

export function makeAccessGatewayVendor(data: {
  vendorId: string;
  name: string;
}): AccessGatewayVendor {
  return {
    vendorId: data.vendorId as AccessGatewayVendorId,
    name: data.name,
  };
}

export function makePermissionUnionCorrectness(data: {
  commitmentId: string;
  unionCorrectnessThreshold: number;
}): PermissionUnionCorrectness {
  return {
    commitmentId: data.commitmentId as PermissionUnionCorrectnessId,
    unionCorrectnessThreshold: data.unionCorrectnessThreshold,
  };
}

export function makeAuditedDecisions(data: {
  commitmentId: string;
  auditCompletenessRatio: number;
}): AuditedDecisions {
  return {
    commitmentId: data.commitmentId as AuditedDecisionsId,
    auditCompletenessRatio: data.auditCompletenessRatio,
  };
}

export function makeStaleRoleExpiration(data: {
  commitmentId: string;
  maxStalenessDays: number;
}): StaleRoleExpiration {
  return {
    commitmentId: data.commitmentId as StaleRoleExpirationId,
    maxStalenessDays: data.maxStalenessDays,
  };
}

export function makeLatencyBudget(data: {
  commitmentId: string;
  p99LatencyMs: number;
}): LatencyBudget {
  return {
    commitmentId: data.commitmentId as LatencyBudgetId,
    p99LatencyMs: data.p99LatencyMs,
  };
}

export function makeAccessGatewaySystem(data: {
  systemId: string;
  unionCorrectnessThreshold: number;
  auditCompletenessRatio: number;
  auditRetentionDays: number;
  maxStalenessDays: number;
  p99LatencyMs: number;
}): AccessGatewaySystem {
  return {
    systemId: data.systemId as AccessGatewaySystemId,
    unionCorrectnessThreshold: data.unionCorrectnessThreshold,
    auditCompletenessRatio: data.auditCompletenessRatio,
    auditRetentionDays: data.auditRetentionDays,
    maxStalenessDays: data.maxStalenessDays,
    p99LatencyMs: data.p99LatencyMs,
  };
}

export function makePermission(data: {
  permissionId: string;
  action: string;
  resource: string;
  description: string;
}): Permission {
  return {
    permissionId: data.permissionId as PermissionId,
    action: data.action,
    resource: data.resource,
    description: data.description,
  };
}

export function makeRole(data: {
  roleId: string;
  name: string;
  permissions: ReadonlySet<Permission>;
  lastUsedTimestamp: number;
  isExpired: boolean;
}): Role {
  return {
    roleId: data.roleId as RoleId,
    name: data.name,
    permissions: data.permissions,
    lastUsedTimestamp: data.lastUsedTimestamp,
    isExpired: data.isExpired,
  };
}

export function makeAuditEntry(data: {
  entryId: string;
  timestamp: number;
  subjectId: string;
  permissionId: string;
  outcome: string;
  immutable: boolean;
}): AuditEntry {
  return {
    entryId: data.entryId as AuditEntryId,
    timestamp: data.timestamp,
    subjectId: data.subjectId,
    permissionId: data.permissionId,
    outcome: data.outcome,
    immutable: data.immutable,
  };
}

export function makeAuthorizationRequest(data: {
  requestId: string;
  subjectToken: string;
  requestedPermission: Permission;
  timestamp: number;
}): AuthorizationRequest {
  return {
    requestId: data.requestId as AuthorizationRequestId,
    subjectToken: data.subjectToken,
    requestedPermission: data.requestedPermission,
    timestamp: data.timestamp,
  };
}

export function makeAuthorizationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  scheduledExpirationJob: boolean;
}): AuthorizationFlow {
  return {
    flowId: data.flowId as AuthorizationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    scheduledExpirationJob: data.scheduledExpirationJob,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Subject. Returns empty array when valid. */
export function validateSubject(instance: Subject): readonly string[] {
  const violations: string[] = [];
  if (!((instance.subjectId !== null))) {
    violations.push("[Subject] invariant violated: self.subjectId <> null");
  }
  return violations;
}

/** Runtime invariant check for Auditor. Returns empty array when valid. */
export function validateAuditor(instance: Auditor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.auditorId !== null))) {
    violations.push("[Auditor] invariant violated: self.auditorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ComplianceOfficer. Returns empty array when valid. */
export function validateComplianceOfficer(instance: ComplianceOfficer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.officerId !== null))) {
    violations.push("[ComplianceOfficer] invariant violated: self.officerId <> null");
  }
  return violations;
}

/** Runtime invariant check for AccessGatewayVendor. Returns empty array when valid. */
export function validateAccessGatewayVendor(instance: AccessGatewayVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[AccessGatewayVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for PermissionUnionConstraints. Returns empty array when valid. */
export function validatePermissionUnionConstraints(instance: PermissionUnionConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.unionCorrectnessThreshold >= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AuditCompletenessConstraint. Returns empty array when valid. */
export function validateAuditCompletenessConstraint(instance: AuditCompletenessConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.auditCompletenessRatio >= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.auditRetentionDays > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for StaleRoleConstraint. Returns empty array when valid. */
export function validateStaleRoleConstraint(instance: StaleRoleConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxStalenessDays <= 90.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for LatencyConstraint. Returns empty array when valid. */
export function validateLatencyConstraint(instance: LatencyConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.p99LatencyMs <= 50.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AccessGatewaySystem. Returns empty array when valid. */
export function validateAccessGatewaySystem(instance: AccessGatewaySystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[AccessGatewaySystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.unionCorrectnessThreshold >= 0))) {
    violations.push("[AccessGatewaySystem] invariant violated: self.unionCorrectnessThreshold >= 0.0");
  }
  if (!((instance.auditCompletenessRatio >= 0))) {
    violations.push("[AccessGatewaySystem] invariant violated: self.auditCompletenessRatio >= 0.0");
  }
  if (!((instance.auditRetentionDays >= 0))) {
    violations.push("[AccessGatewaySystem] invariant violated: self.auditRetentionDays >= 0.0");
  }
  if (!((instance.maxStalenessDays >= 0))) {
    violations.push("[AccessGatewaySystem] invariant violated: self.maxStalenessDays >= 0.0");
  }
  if (!((instance.p99LatencyMs >= 0))) {
    violations.push("[AccessGatewaySystem] invariant violated: self.p99LatencyMs >= 0.0");
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

/** Runtime invariant check for Role. Returns empty array when valid. */
export function validateRole(instance: Role): readonly string[] {
  const violations: string[] = [];
  if (!((instance.roleId !== null))) {
    violations.push("[Role] invariant violated: self.roleId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Role] invariant violated: self.name <> null");
  }
  if (!((instance.lastUsedTimestamp >= 0))) {
    violations.push("[Role] invariant violated: self.lastUsedTimestamp >= 0.0");
  }
  if (!((instance.isExpired === (instance.lastUsedTimestamp < (0 - (86400 * 90)))))) {
    violations.push("[Role] invariant violated: self.isExpired = (self.lastUsedTimestamp < (0.0 - 86400.0 * 90.0))");
  }
  return violations;
}

/** Runtime invariant check for AuditEntry. Returns empty array when valid. */
export function validateAuditEntry(instance: AuditEntry): readonly string[] {
  const violations: string[] = [];
  if (!((instance.entryId !== null))) {
    violations.push("[AuditEntry] invariant violated: self.entryId <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[AuditEntry] invariant violated: self.timestamp > 0.0");
  }
  if (!((instance.subjectId !== null))) {
    violations.push("[AuditEntry] invariant violated: self.subjectId <> null");
  }
  if (!((instance.permissionId !== null))) {
    violations.push("[AuditEntry] invariant violated: self.permissionId <> null");
  }
  if (!(((instance.outcome === "ALLOW") || (instance.outcome === "DENY")))) {
    violations.push("[AuditEntry] invariant violated: self.outcome = 'ALLOW' or self.outcome = 'DENY'");
  }
  if (!((instance.immutable === true))) {
    violations.push("[AuditEntry] invariant violated: self.immutable = true");
  }
  return violations;
}

/** Runtime invariant check for AuthorizationRequest. Returns empty array when valid. */
export function validateAuthorizationRequest(instance: AuthorizationRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[AuthorizationRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.subjectToken !== null))) {
    violations.push("[AuthorizationRequest] invariant violated: self.subjectToken <> null");
  }
  if (!((instance.requestedPermission !== null))) {
    violations.push("[AuthorizationRequest] invariant violated: self.requestedPermission <> null");
  }
  if (!((instance.timestamp > 0))) {
    violations.push("[AuthorizationRequest] invariant violated: self.timestamp > 0.0");
  }
  return violations;
}

/** Runtime invariant check for AuthorizationFlow. Returns empty array when valid. */
export function validateAuthorizationFlow(instance: AuthorizationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AuthorizationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "Subject token presented to gateway"))) {
    violations.push("[AuthorizationFlow] invariant violated: self.triggeredBy = 'Subject token presented to gateway'");
  }
  if (!((instance.outcome === "Allow or deny decision written to audit log"))) {
    violations.push("[AuthorizationFlow] invariant violated: self.outcome = 'Allow or deny decision written to audit log'");
  }
  if (!((instance.scheduledExpirationJob === true))) {
    violations.push("[AuthorizationFlow] invariant violated: self.scheduledExpirationJob = true");
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

