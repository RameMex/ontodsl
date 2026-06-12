// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function WriteEntryForm() {
  const [eventType, setEventType] = useState<string>("");
  const [payload, setPayload] = useState<string>("");
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/audit-logger/write-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, payload, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AuditLogger.writeEntry</h3>
      <label>eventType</label>
      <input type="text" value={String(eventType)} onChange={(e) => setEventType(e.target.value)} />
      <label>payload</label>
      <input type="text" value={String(payload)} onChange={(e) => setPayload(e.target.value)} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">writeEntry</button>
    </form>
  );
}

export function CheckRetentionLimitForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/audit-logger/check-retention-limit", {
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
      <h3>AuditLogger.checkRetentionLimit</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkRetentionLimit</button>
    </form>
  );
}

export function ApplyIncrementForm() {
  const [delta, setDelta] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/billing-engine/apply-increment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ delta, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BillingEngine.applyIncrement</h3>
      <label>delta</label>
      <input type="number" value={String(delta)} onChange={(e) => setDelta(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyIncrement</button>
    </form>
  );
}

export function FreezeBillingForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/billing-engine/freeze-billing", {
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
      <h3>BillingEngine.freezeBilling</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">freezeBilling</button>
    </form>
  );
}

export function ClearFreezeForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/billing-engine/clear-freeze", {
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
      <h3>BillingEngine.clearFreeze</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearFreeze</button>
    </form>
  );
}

export function RecordCompensationForm() {
  const [adjustment, setAdjustment] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/billing-engine/record-compensation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adjustment }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BillingEngine.recordCompensation</h3>
      <label>adjustment</label>
      <input type="number" value={String(adjustment)} onChange={(e) => setAdjustment(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordCompensation</button>
    </form>
  );
}

export function ProcessReadingForm() {
  const [kwh, setKwh] = useState<number>(0);
  const [tamperFlags, setTamperFlags] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system/process-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kwh, tamperFlags }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystem.processReading</h3>
      <label>kwh</label>
      <input type="number" value={String(kwh)} onChange={(e) => setKwh(Number(e.target.value))} />
      <label>tamperFlags</label>
      <input type="text" value={String(tamperFlags)} onChange={(e) => setTamperFlags(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">processReading</button>
    </form>
  );
}

export function DetectTamperForm() {
  const [eventType, setEventType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system/detect-tamper", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, description }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystem.detectTamper</h3>
      <label>eventType</label>
      <input type="text" value={String(eventType)} onChange={(e) => setEventType(e.target.value)} />
      <label>description</label>
      <input type="text" value={String(description)} onChange={(e) => setDescription(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectTamper</button>
    </form>
  );
}

export function ClearTamperForm() {
  const [clearanceId, setClearanceId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system/clear-tamper", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clearanceId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystem.clearTamper</h3>
      <label>clearanceId</label>
      <input type="text" value={String(clearanceId)} onChange={(e) => setClearanceId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearTamper</button>
    </form>
  );
}

export function ApplyCompensationForm() {
  const [adjustmentDelta, setAdjustmentDelta] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system/apply-compensation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adjustmentDelta }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystem.applyCompensation</h3>
      <label>adjustmentDelta</label>
      <input type="number" value={String(adjustmentDelta)} onChange={(e) => setAdjustmentDelta(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyCompensation</button>
    </form>
  );
}

export function RejectNegativeDeltaForm() {
  const [kwh, setKwh] = useState<number>(0);
  const [lastAcceptedKwh, setLastAcceptedKwh] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system-formalized/reject-negative-delta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kwh, lastAcceptedKwh }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystemFormalized.rejectNegativeDelta</h3>
      <label>kwh</label>
      <input type="number" value={String(kwh)} onChange={(e) => setKwh(Number(e.target.value))} />
      <label>lastAcceptedKwh</label>
      <input type="number" value={String(lastAcceptedKwh)} onChange={(e) => setLastAcceptedKwh(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectNegativeDelta</button>
    </form>
  );
}

export function RejectTamperedReadingForm() {
  const [tamperFlags, setTamperFlags] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system-formalized/reject-tampered-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tamperFlags }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystemFormalized.rejectTamperedReading</h3>
      <label>tamperFlags</label>
      <input type="text" value={String(tamperFlags)} onChange={(e) => setTamperFlags(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectTamperedReading</button>
    </form>
  );
}

export function RejectPrematureClearanceForm() {
  const [clearanceId, setClearanceId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system-formalized/reject-premature-clearance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clearanceId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystemFormalized.rejectPrematureClearance</h3>
      <label>clearanceId</label>
      <input type="text" value={String(clearanceId)} onChange={(e) => setClearanceId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPrematureClearance</button>
    </form>
  );
}

export function RejectCompensationDuringFreezeForm() {
  const [adjustmentDelta, setAdjustmentDelta] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system-formalized/reject-compensation-during-freeze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adjustmentDelta }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystemFormalized.rejectCompensationDuringFreeze</h3>
      <label>adjustmentDelta</label>
      <input type="number" value={String(adjustmentDelta)} onChange={(e) => setAdjustmentDelta(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectCompensationDuringFreeze</button>
    </form>
  );
}

export function RecordAuditTrailForm() {
  const [eventType, setEventType] = useState<string>("");
  const [eventPayload, setEventPayload] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system-formalized/record-audit-trail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, eventPayload }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterBillingSystemFormalized.recordAuditTrail</h3>
      <label>eventType</label>
      <input type="text" value={String(eventType)} onChange={(e) => setEventType(e.target.value)} />
      <label>eventPayload</label>
      <input type="text" value={String(eventPayload)} onChange={(e) => setEventPayload(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordAuditTrail</button>
    </form>
  );
}

export function RejectRetentionOverflowForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-billing-system-formalized/reject-retention-overflow", {
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
      <h3>MeterBillingSystemFormalized.rejectRetentionOverflow</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectRetentionOverflow</button>
    </form>
  );
}

export function ReceiveReadingForm() {
  const [kwh, setKwh] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [tamperFlags, setTamperFlags] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-interface/receive-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kwh, timestamp, tamperFlags }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterInterface.receiveReading</h3>
      <label>kwh</label>
      <input type="number" value={String(kwh)} onChange={(e) => setKwh(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      <label>tamperFlags</label>
      <input type="text" value={String(tamperFlags)} onChange={(e) => setTamperFlags(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveReading</button>
    </form>
  );
}

export function ReportConnectionStatusForm() {
  const [status, setStatus] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-interface/report-connection-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterInterface.reportConnectionStatus</h3>
      <label>status</label>
      <input type="checkbox" value={String(status)} onChange={(e) => setStatus((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportConnectionStatus</button>
    </form>
  );
}

export function ValidateReadingForm() {
  const [kwh, setKwh] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [tamperFlags, setTamperFlags] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meter-reading-validator/validate-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kwh, timestamp, tamperFlags }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeterReadingValidator.validateReading</h3>
      <label>kwh</label>
      <input type="number" value={String(kwh)} onChange={(e) => setKwh(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      <label>tamperFlags</label>
      <input type="text" value={String(tamperFlags)} onChange={(e) => setTamperFlags(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">validateReading</button>
    </form>
  );
}

export function RecordTamperForm() {
  const [eventType, setEventType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/tamper-monitor/record-tamper", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, description }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TamperMonitor.recordTamper</h3>
      <label>eventType</label>
      <input type="text" value={String(eventType)} onChange={(e) => setEventType(e.target.value)} />
      <label>description</label>
      <input type="text" value={String(description)} onChange={(e) => setDescription(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordTamper</button>
    </form>
  );
}

export function RecordClearanceForm() {
  const [clearanceId, setClearanceId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/tamper-monitor/record-clearance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clearanceId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TamperMonitor.recordClearance</h3>
      <label>clearanceId</label>
      <input type="text" value={String(clearanceId)} onChange={(e) => setClearanceId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordClearance</button>
    </form>
  );
}

export function ResolveClearanceForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/tamper-monitor/resolve-clearance", {
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
      <h3>TamperMonitor.resolveClearance</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resolveClearance</button>
    </form>
  );
}
