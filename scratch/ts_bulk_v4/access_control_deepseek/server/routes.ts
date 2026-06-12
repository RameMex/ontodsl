// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Server routes — one POST per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { z } from "zod";
import * as service from "../services/index.js";
import { InvariantViolation } from "../services/index.js";

type Handler = (body: unknown) => Promise<unknown>;

export const routes: Record<string, Handler> = {
  "POST /api/access-control-gateway-system/resolve-permissions": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    token: z.string(),
    requestedPermission: z.string()
    });
    const input = schema.parse(body);
    return await service.resolvePermissions(input.__selfId, input.token, input.requestedPermission);
  },
  "POST /api/access-control-gateway-system/authorize": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    subjectToken: z.string(),
    requestedPermission: z.string()
    });
    const input = schema.parse(body);
    return await service.authorize(input.__selfId, input.subjectToken, input.requestedPermission);
  },
  "POST /api/access-control-gateway-system/expire-stale-roles": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.expireStaleRoles(input.__selfId, input.currentTimestamp);
  },
  "POST /api/access-control-gateway-system/renew-role": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    roleId: z.string()
    });
    const input = schema.parse(body);
    return await service.renewRole(input.__selfId, input.roleId);
  },
  "POST /api/access-control-gateway-system-formalized/reject-unknown-permission": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedPermission: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUnknownPermission(input.__selfId, input.requestedPermission);
  },
  "POST /api/access-control-gateway-system-formalized/enforce-latency-compliance": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentLatency: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceLatencyCompliance(input.__selfId, input.currentLatency);
  },
  "POST /api/access-control-gateway-system-formalized/block-expired-role": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    subjectToken: z.string(),
    roleId: z.string(),
    currentTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.blockExpiredRole(input.__selfId, input.subjectToken, input.roleId, input.currentTimestamp);
  },
  "POST /api/audit-logger/write-audit-entry": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    subjectId: z.string(),
    permissionId: z.string(),
    outcome: z.string(),
    currentTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.writeAuditEntry(input.__selfId, input.subjectId, input.permissionId, input.outcome, input.currentTimestamp);
  },
  "POST /api/audit-logger/append-multiple-entries": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    entries: z.unknown()
    });
    const input = schema.parse(body);
    return await service.appendMultipleEntries(input.__selfId, input.entries);
  },
  "POST /api/decision-engine/evaluate-request": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    subjectToken: z.string(),
    permissionId: z.string()
    });
    const input = schema.parse(body);
    return await service.evaluateRequest(input.__selfId, input.subjectToken, input.permissionId);
  },
  "POST /api/latency-monitor/record-latency-observation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    latencyMs: z.number()
    });
    const input = schema.parse(body);
    return await service.recordLatencyObservation(input.__selfId, input.latencyMs);
  },
  "POST /api/latency-monitor/reset-metrics": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetMetrics(input.__selfId);
  },
  "POST /api/policy-engine/compute-permission-union": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    roleIds: z.unknown()
    });
    const input = schema.parse(body);
    return await service.computePermissionUnion(input.__selfId, input.roleIds);
  },
  "POST /api/policy-engine/check-permission-in-union": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    permissionId: z.string()
    });
    const input = schema.parse(body);
    return await service.checkPermissionInUnion(input.__selfId, input.permissionId);
  },
  "POST /api/role-expiration-job/expire-stale-roles": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentTimestamp: z.number(),
    rolesWithLastUsed: z.unknown()
    });
    const input = schema.parse(body);
    return await service.expireStaleRoles(input.__selfId, input.currentTimestamp, input.rolesWithLastUsed);
  },
  "POST /api/role-expiration-job/renew-role": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    roleId: z.string()
    });
    const input = schema.parse(body);
    return await service.renewRole(input.__selfId, input.roleId);
  },
  "POST /api/token-resolver/resolve-roles": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    subjectToken: z.string()
    });
    const input = schema.parse(body);
    return await service.resolveRoles(input.__selfId, input.subjectToken);
  },
};

export async function handle(method: string, path: string, body: unknown): Promise<{ status: number; body: unknown }> {
  const h = routes[`${method} ${path}`];
  if (!h) return { status: 404, body: { error: "not found" } };
  try {
    return { status: 200, body: await h(body) };
  } catch (e) {
    if (e instanceof InvariantViolation) {
      return { status: 422, body: { error: e.message, kind: "InvariantViolation", context: e.context, violations: e.violations } };
    }
    return { status: 500, body: { error: (e as Error).message } };
  }
}