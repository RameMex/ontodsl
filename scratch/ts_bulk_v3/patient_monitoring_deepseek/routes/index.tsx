// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function RaiseThresholdAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [vitalType, setVitalType] = useState<string>("");
  const [actualValue, setActualValue] = useState<number>(0);
  const [crossTimestamp, setCrossTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/raise-threshold-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, vitalType, actualValue, crossTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.raiseThresholdAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>vitalType</label>
      <input type="text" value={String(vitalType)} onChange={(e) => setVitalType(e.target.value)} />
      <label>actualValue</label>
      <input type="number" value={String(actualValue)} onChange={(e) => setActualValue(Number(e.target.value))} />
      <label>crossTimestamp</label>
      <input type="number" value={String(crossTimestamp)} onChange={(e) => setCrossTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseThresholdAlarm</button>
    </form>
  );
}

export function RaiseDisconnectAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [detectedAt, setDetectedAt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/raise-disconnect-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, detectedAt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.raiseDisconnectAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>detectedAt</label>
      <input type="number" value={String(detectedAt)} onChange={(e) => setDetectedAt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseDisconnectAlarm</button>
    </form>
  );
}

export function SilenceAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [silenceTimestamp, setSilenceTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/silence-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, silenceTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.silenceAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>silenceTimestamp</label>
      <input type="number" value={String(silenceTimestamp)} onChange={(e) => setSilenceTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">silenceAlarm</button>
    </form>
  );
}

export function AutoRearmAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [rearmTimestamp, setRearmTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/auto-rearm-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, rearmTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.autoRearmAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>rearmTimestamp</label>
      <input type="number" value={String(rearmTimestamp)} onChange={(e) => setRearmTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">autoRearmAlarm</button>
    </form>
  );
}

export function ClearAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/clear-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.clearAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarm</button>
    </form>
  );
}

export function ConfigureAlarmParamsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [latencyMs, setLatencyMs] = useState<number>(0);
  const [rearmMs, setRearmMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/configure-alarm-params", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, latencyMs, rearmMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.configureAlarmParams</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>latencyMs</label>
      <input type="number" value={String(latencyMs)} onChange={(e) => setLatencyMs(Number(e.target.value))} />
      <label>rearmMs</label>
      <input type="number" value={String(rearmMs)} onChange={(e) => setRearmMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">configureAlarmParams</button>
    </form>
  );
}

export function ResetAlarmManagerForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/reset-alarm-manager", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.resetAlarmManager</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetAlarmManager</button>
    </form>
  );
}

export function FormalConfigurePlausibilityBoundsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lowerBound, setLowerBound] = useState<number>(0);
  const [upperBound, setUpperBound] = useState<number>(0);
  const [alarmLatencyMs, setAlarmLatencyMs] = useState<number>(0);
  const [signalLossMs, setSignalLossMs] = useState<number>(0);
  const [silenceRearmMs, setSilenceRearmMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-formalized/formal-configure-plausibility-bounds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lowerBound, upperBound, alarmLatencyMs, signalLossMs, silenceRearmMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds</h3>
      <label>BedsideMonitorSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lowerBound</label>
      <input type="number" value={String(lowerBound)} onChange={(e) => setLowerBound(Number(e.target.value))} />
      <label>upperBound</label>
      <input type="number" value={String(upperBound)} onChange={(e) => setUpperBound(Number(e.target.value))} />
      <label>alarmLatencyMs</label>
      <input type="number" value={String(alarmLatencyMs)} onChange={(e) => setAlarmLatencyMs(Number(e.target.value))} />
      <label>signalLossMs</label>
      <input type="number" value={String(signalLossMs)} onChange={(e) => setSignalLossMs(Number(e.target.value))} />
      <label>silenceRearmMs</label>
      <input type="number" value={String(silenceRearmMs)} onChange={(e) => setSilenceRearmMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">formalConfigurePlausibilityBounds</button>
    </form>
  );
}

export function FormalRejectImplausibleReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newValue, setNewValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-formalized/formal-reject-implausible-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newValue, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemFormalized.formalRejectImplausibleReading</h3>
      <label>BedsideMonitorSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newValue</label>
      <input type="number" value={String(newValue)} onChange={(e) => setNewValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">formalRejectImplausibleReading</button>
    </form>
  );
}

export function FormalRejectNonPositiveReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newValue, setNewValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-formalized/formal-reject-non-positive-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newValue, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemFormalized.formalRejectNonPositiveReading</h3>
      <label>BedsideMonitorSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newValue</label>
      <input type="number" value={String(newValue)} onChange={(e) => setNewValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">formalRejectNonPositiveReading</button>
    </form>
  );
}

export function FormalEnforceAlarmLatencyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [vitalType, setVitalType] = useState<string>("");
  const [actualValue, setActualValue] = useState<number>(0);
  const [crossingTimestamp, setCrossingTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-formalized/formal-enforce-alarm-latency", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, vitalType, actualValue, crossingTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemFormalized.formalEnforceAlarmLatency</h3>
      <label>BedsideMonitorSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>vitalType</label>
      <input type="text" value={String(vitalType)} onChange={(e) => setVitalType(e.target.value)} />
      <label>actualValue</label>
      <input type="number" value={String(actualValue)} onChange={(e) => setActualValue(Number(e.target.value))} />
      <label>crossingTimestamp</label>
      <input type="number" value={String(crossingTimestamp)} onChange={(e) => setCrossingTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">formalEnforceAlarmLatency</button>
    </form>
  );
}

export function FormalEnforceSensorDisconnectForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [signalGapDetectedAt, setSignalGapDetectedAt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-formalized/formal-enforce-sensor-disconnect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, signalGapDetectedAt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect</h3>
      <label>BedsideMonitorSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>signalGapDetectedAt</label>
      <input type="number" value={String(signalGapDetectedAt)} onChange={(e) => setSignalGapDetectedAt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">formalEnforceSensorDisconnect</button>
    </form>
  );
}

export function FormalEnforceAutoRearmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [rearmTimestamp, setRearmTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-formalized/formal-enforce-auto-rearm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, rearmTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemFormalized.formalEnforceAutoRearm</h3>
      <label>BedsideMonitorSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>rearmTimestamp</label>
      <input type="number" value={String(rearmTimestamp)} onChange={(e) => setRearmTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">formalEnforceAutoRearm</button>
    </form>
  );
}

export function DeliverHeartRateReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newValue, setNewValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/deliver-heart-rate-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newValue, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.deliverHeartRateReading</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newValue</label>
      <input type="number" value={String(newValue)} onChange={(e) => setNewValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deliverHeartRateReading</button>
    </form>
  );
}

export function RaiseThresholdAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [vitalType, setVitalType] = useState<string>("");
  const [actualValue, setActualValue] = useState<number>(0);
  const [thresholdUpper, setThresholdUpper] = useState<number>(0);
  const [thresholdLower, setThresholdLower] = useState<number>(0);
  const [crossTimestamp, setCrossTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/raise-threshold-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, vitalType, actualValue, thresholdUpper, thresholdLower, crossTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.raiseThresholdAlarm</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>vitalType</label>
      <input type="text" value={String(vitalType)} onChange={(e) => setVitalType(e.target.value)} />
      <label>actualValue</label>
      <input type="number" value={String(actualValue)} onChange={(e) => setActualValue(Number(e.target.value))} />
      <label>thresholdUpper</label>
      <input type="number" value={String(thresholdUpper)} onChange={(e) => setThresholdUpper(Number(e.target.value))} />
      <label>thresholdLower</label>
      <input type="number" value={String(thresholdLower)} onChange={(e) => setThresholdLower(Number(e.target.value))} />
      <label>crossTimestamp</label>
      <input type="number" value={String(crossTimestamp)} onChange={(e) => setCrossTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseThresholdAlarm</button>
    </form>
  );
}

export function DetectSensorDisconnectForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lossDetectedAt, setLossDetectedAt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/detect-sensor-disconnect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lossDetectedAt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.detectSensorDisconnect</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lossDetectedAt</label>
      <input type="number" value={String(lossDetectedAt)} onChange={(e) => setLossDetectedAt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectSensorDisconnect</button>
    </form>
  );
}

export function SilenceAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [silenceTimestamp, setSilenceTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/silence-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, silenceTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.silenceAlarm</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>silenceTimestamp</label>
      <input type="number" value={String(silenceTimestamp)} onChange={(e) => setSilenceTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">silenceAlarm</button>
    </form>
  );
}

export function AutoRearmAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [rearmTimestamp, setRearmTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/auto-rearm-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, rearmTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.autoRearmAlarm</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>rearmTimestamp</label>
      <input type="number" value={String(rearmTimestamp)} onChange={(e) => setRearmTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">autoRearmAlarm</button>
    </form>
  );
}

export function ClearAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/clear-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.clearAlarm</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarm</button>
    </form>
  );
}

export function RestoreSensorConnectionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newValue, setNewValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/restore-sensor-connection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newValue, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.restoreSensorConnection</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newValue</label>
      <input type="number" value={String(newValue)} onChange={(e) => setNewValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">restoreSensorConnection</button>
    </form>
  );
}

export function SetAlarmThresholdsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [implausibleLower, setImplausibleLower] = useState<number>(0);
  const [implausibleUpper, setImplausibleUpper] = useState<number>(0);
  const [alarmLatencyMs, setAlarmLatencyMs] = useState<number>(0);
  const [signalLossMs, setSignalLossMs] = useState<number>(0);
  const [silenceRearmMs, setSilenceRearmMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/bedside-monitor-system-requirements/set-alarm-thresholds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, implausibleLower, implausibleUpper, alarmLatencyMs, signalLossMs, silenceRearmMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BedsideMonitorSystemRequirements.setAlarmThresholds</h3>
      <label>BedsideMonitorSystemRequirements id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>implausibleLower</label>
      <input type="number" value={String(implausibleLower)} onChange={(e) => setImplausibleLower(Number(e.target.value))} />
      <label>implausibleUpper</label>
      <input type="number" value={String(implausibleUpper)} onChange={(e) => setImplausibleUpper(Number(e.target.value))} />
      <label>alarmLatencyMs</label>
      <input type="number" value={String(alarmLatencyMs)} onChange={(e) => setAlarmLatencyMs(Number(e.target.value))} />
      <label>signalLossMs</label>
      <input type="number" value={String(signalLossMs)} onChange={(e) => setSignalLossMs(Number(e.target.value))} />
      <label>silenceRearmMs</label>
      <input type="number" value={String(silenceRearmMs)} onChange={(e) => setSilenceRearmMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setAlarmThresholds</button>
    </form>
  );
}

export function UpdateHeartRateDisplayForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newHeartRate, setNewHeartRate] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-renderer/update-heart-rate-display", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newHeartRate, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayRenderer.updateHeartRateDisplay</h3>
      <label>DisplayRenderer id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newHeartRate</label>
      <input type="number" value={String(newHeartRate)} onChange={(e) => setNewHeartRate(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateHeartRateDisplay</button>
    </form>
  );
}

export function UpdateAlarmDisplayForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newAlarmActive, setNewAlarmActive] = useState<boolean>(false);
  const [newAlarmType, setNewAlarmType] = useState<string>("");
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-renderer/update-alarm-display", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newAlarmActive, newAlarmType, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayRenderer.updateAlarmDisplay</h3>
      <label>DisplayRenderer id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newAlarmActive</label>
      <input type="checkbox" value={String(newAlarmActive)} onChange={(e) => setNewAlarmActive((e.target.value as unknown as boolean))} />
      <label>newAlarmType</label>
      <input type="text" value={String(newAlarmType)} onChange={(e) => setNewAlarmType(e.target.value)} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateAlarmDisplay</button>
    </form>
  );
}

export function ResetDisplayForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-renderer/reset-display", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayRenderer.resetDisplay</h3>
      <label>DisplayRenderer id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetDisplay</button>
    </form>
  );
}

export function AcquireReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor/acquire-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, value, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensor.acquireReading</h3>
      <label>EcgSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>value</label>
      <input type="number" value={String(value)} onChange={(e) => setValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acquireReading</button>
    </form>
  );
}

export function AdvanceSignalLossTimerForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor/advance-signal-loss-timer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, elapsedMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensor.advanceSignalLossTimer</h3>
      <label>EcgSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>elapsedMs</label>
      <input type="number" value={String(elapsedMs)} onChange={(e) => setElapsedMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">advanceSignalLossTimer</button>
    </form>
  );
}

export function RestoreConnectionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor/restore-connection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, value, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensor.restoreConnection</h3>
      <label>EcgSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>value</label>
      <input type="number" value={String(value)} onChange={(e) => setValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">restoreConnection</button>
    </form>
  );
}

export function ResetSensorForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor/reset-sensor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensor.resetSensor</h3>
      <label>EcgSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetSensor</button>
    </form>
  );
}

export function ProcessReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [rawValue, setRawValue] = useState<number>(0);
  const [readingTimestamp, setReadingTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/heart-rate-processor/process-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, rawValue, readingTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HeartRateProcessor.processReading</h3>
      <label>HeartRateProcessor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>rawValue</label>
      <input type="number" value={String(rawValue)} onChange={(e) => setRawValue(Number(e.target.value))} />
      <label>readingTimestamp</label>
      <input type="number" value={String(readingTimestamp)} onChange={(e) => setReadingTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">processReading</button>
    </form>
  );
}

export function ConfigureBoundsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lower, setLower] = useState<number>(0);
  const [upper, setUpper] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/heart-rate-processor/configure-bounds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lower, upper }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HeartRateProcessor.configureBounds</h3>
      <label>HeartRateProcessor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lower</label>
      <input type="number" value={String(lower)} onChange={(e) => setLower(Number(e.target.value))} />
      <label>upper</label>
      <input type="number" value={String(upper)} onChange={(e) => setUpper(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">configureBounds</button>
    </form>
  );
}

export function RejectImplausibleReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [rawValue, setRawValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/heart-rate-processor/reject-implausible-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, rawValue, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HeartRateProcessor.rejectImplausibleReading</h3>
      <label>HeartRateProcessor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>rawValue</label>
      <input type="number" value={String(rawValue)} onChange={(e) => setRawValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectImplausibleReading</button>
    </form>
  );
}

export function ResetProcessorForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/heart-rate-processor/reset-processor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HeartRateProcessor.resetProcessor</h3>
      <label>HeartRateProcessor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetProcessor</button>
    </form>
  );
}
