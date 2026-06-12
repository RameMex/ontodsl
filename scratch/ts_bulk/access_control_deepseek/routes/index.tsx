// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function ResolvePermissionsForm() {
  const [token, setToken] = useState<string>("");
  const [requestedPermission, setRequestedPermission] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system/resolve-permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, requestedPermission }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystem.resolvePermissions</h3>
      <label>token</label>
      <input type="text" value={String(token)} onChange={(e) => setToken(e.target.value)} />
      <label>requestedPermission</label>
      <input type="text" value={String(requestedPermission)} onChange={(e) => setRequestedPermission(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resolvePermissions</button>
    </form>
  );
}

export function AuthorizeForm() {
  const [subjectToken, setSubjectToken] = useState<string>("");
  const [requestedPermission, setRequestedPermission] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system/authorize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectToken, requestedPermission }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystem.authorize</h3>
      <label>subjectToken</label>
      <input type="text" value={String(subjectToken)} onChange={(e) => setSubjectToken(e.target.value)} />
      <label>requestedPermission</label>
      <input type="text" value={String(requestedPermission)} onChange={(e) => setRequestedPermission(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">authorize</button>
    </form>
  );
}

export function ExpireStaleRolesForm() {
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system/expire-stale-roles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystem.expireStaleRoles</h3>
      <label>currentTimestamp</label>
      <input type="number" value={String(currentTimestamp)} onChange={(e) => setCurrentTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireStaleRoles</button>
    </form>
  );
}

export function RenewRoleForm() {
  const [roleId, setRoleId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system/renew-role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roleId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystem.renewRole</h3>
      <label>roleId</label>
      <input type="text" value={String(roleId)} onChange={(e) => setRoleId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">renewRole</button>
    </form>
  );
}

export function RejectUnknownPermissionForm() {
  const [requestedPermission, setRequestedPermission] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system-formalized/reject-unknown-permission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedPermission }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystemFormalized.rejectUnknownPermission</h3>
      <label>requestedPermission</label>
      <input type="text" value={String(requestedPermission)} onChange={(e) => setRequestedPermission(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectUnknownPermission</button>
    </form>
  );
}

export function EnforceLatencyComplianceForm() {
  const [currentLatency, setCurrentLatency] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system-formalized/enforce-latency-compliance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentLatency }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystemFormalized.enforceLatencyCompliance</h3>
      <label>currentLatency</label>
      <input type="number" value={String(currentLatency)} onChange={(e) => setCurrentLatency(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceLatencyCompliance</button>
    </form>
  );
}

export function BlockExpiredRoleForm() {
  const [subjectToken, setSubjectToken] = useState<string>("");
  const [roleId, setRoleId] = useState<string>("");
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/access-control-gateway-system-formalized/block-expired-role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectToken, roleId, currentTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccessControlGatewaySystemFormalized.blockExpiredRole</h3>
      <label>subjectToken</label>
      <input type="text" value={String(subjectToken)} onChange={(e) => setSubjectToken(e.target.value)} />
      <label>roleId</label>
      <input type="text" value={String(roleId)} onChange={(e) => setRoleId(e.target.value)} />
      <label>currentTimestamp</label>
      <input type="number" value={String(currentTimestamp)} onChange={(e) => setCurrentTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">blockExpiredRole</button>
    </form>
  );
}

export function WriteAuditEntryForm() {
  const [subjectId, setSubjectId] = useState<string>("");
  const [permissionId, setPermissionId] = useState<string>("");
  const [outcome, setOutcome] = useState<string>("");
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/audit-logger/write-audit-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectId, permissionId, outcome, currentTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AuditLogger.writeAuditEntry</h3>
      <label>subjectId</label>
      <input type="text" value={String(subjectId)} onChange={(e) => setSubjectId(e.target.value)} />
      <label>permissionId</label>
      <input type="text" value={String(permissionId)} onChange={(e) => setPermissionId(e.target.value)} />
      <label>outcome</label>
      <input type="text" value={String(outcome)} onChange={(e) => setOutcome(e.target.value)} />
      <label>currentTimestamp</label>
      <input type="number" value={String(currentTimestamp)} onChange={(e) => setCurrentTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">writeAuditEntry</button>
    </form>
  );
}

export function AppendMultipleEntriesForm() {
  const [entries, setEntries] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/audit-logger/append-multiple-entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entries }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AuditLogger.appendMultipleEntries</h3>
      <label>entries</label>
      <input type="text" value={String(entries)} onChange={(e) => setEntries(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">appendMultipleEntries</button>
    </form>
  );
}

export function EvaluateRequestForm() {
  const [subjectToken, setSubjectToken] = useState<string>("");
  const [permissionId, setPermissionId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/decision-engine/evaluate-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectToken, permissionId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DecisionEngine.evaluateRequest</h3>
      <label>subjectToken</label>
      <input type="text" value={String(subjectToken)} onChange={(e) => setSubjectToken(e.target.value)} />
      <label>permissionId</label>
      <input type="text" value={String(permissionId)} onChange={(e) => setPermissionId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">evaluateRequest</button>
    </form>
  );
}

export function RecordLatencyObservationForm() {
  const [latencyMs, setLatencyMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/latency-monitor/record-latency-observation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latencyMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LatencyMonitor.recordLatencyObservation</h3>
      <label>latencyMs</label>
      <input type="number" value={String(latencyMs)} onChange={(e) => setLatencyMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordLatencyObservation</button>
    </form>
  );
}

export function ResetMetricsForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/latency-monitor/reset-metrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LatencyMonitor.resetMetrics</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetMetrics</button>
    </form>
  );
}

export function ComputePermissionUnionForm() {
  const [roleIds, setRoleIds] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/policy-engine/compute-permission-union", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roleIds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PolicyEngine.computePermissionUnion</h3>
      <label>roleIds</label>
      <input type="text" value={String(roleIds)} onChange={(e) => setRoleIds(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">computePermissionUnion</button>
    </form>
  );
}

export function CheckPermissionInUnionForm() {
  const [permissionId, setPermissionId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/policy-engine/check-permission-in-union", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ permissionId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PolicyEngine.checkPermissionInUnion</h3>
      <label>permissionId</label>
      <input type="text" value={String(permissionId)} onChange={(e) => setPermissionId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkPermissionInUnion</button>
    </form>
  );
}

export function ExpireStaleRolesForm() {
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [rolesWithLastUsed, setRolesWithLastUsed] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/role-expiration-job/expire-stale-roles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentTimestamp, rolesWithLastUsed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RoleExpirationJob.expireStaleRoles</h3>
      <label>currentTimestamp</label>
      <input type="number" value={String(currentTimestamp)} onChange={(e) => setCurrentTimestamp(Number(e.target.value))} />
      <label>rolesWithLastUsed</label>
      <input type="text" value={String(rolesWithLastUsed)} onChange={(e) => setRolesWithLastUsed(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireStaleRoles</button>
    </form>
  );
}

export function RenewRoleForm() {
  const [roleId, setRoleId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/role-expiration-job/renew-role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roleId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RoleExpirationJob.renewRole</h3>
      <label>roleId</label>
      <input type="text" value={String(roleId)} onChange={(e) => setRoleId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">renewRole</button>
    </form>
  );
}

export function ResolveRolesForm() {
  const [subjectToken, setSubjectToken] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/token-resolver/resolve-roles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectToken }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TokenResolver.resolveRoles</h3>
      <label>subjectToken</label>
      <input type="text" value={String(subjectToken)} onChange={(e) => setSubjectToken(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resolveRoles</button>
    </form>
  );
}
