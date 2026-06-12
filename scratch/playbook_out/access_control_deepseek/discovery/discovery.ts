// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

