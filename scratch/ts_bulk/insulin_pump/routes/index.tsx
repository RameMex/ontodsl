// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function RaiseAlarmForm() {
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alert-system/raise-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlertSystem.raiseAlarm</h3>
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseAlarm</button>
    </form>
  );
}

export function ClearAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alert-system/clear-alarm", {
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
      <h3>AlertSystem.clearAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarm</button>
    </form>
  );
}

export function TakeReadingForm() {
  const [rawValueMgDl, setRawValueMgDl] = useState<number>(0);
  const [timestampMin, setTimestampMin] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/blood-sugar-sensor/take-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rawValueMgDl, timestampMin }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BloodSugarSensor.takeReading</h3>
      <label>rawValueMgDl</label>
      <input type="number" value={String(rawValueMgDl)} onChange={(e) => setRawValueMgDl(Number(e.target.value))} />
      <label>timestampMin</label>
      <input type="number" value={String(timestampMin)} onChange={(e) => setTimestampMin(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">takeReading</button>
    </form>
  );
}

export function RejectBadReadingForm() {
  const [rawValueMgDl, setRawValueMgDl] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/blood-sugar-sensor/reject-bad-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rawValueMgDl }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BloodSugarSensor.rejectBadReading</h3>
      <label>rawValueMgDl</label>
      <input type="number" value={String(rawValueMgDl)} onChange={(e) => setRawValueMgDl(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectBadReading</button>
    </form>
  );
}

export function DeliverInsulinForm() {
  const [sugarMgDl, setSugarMgDl] = useState<number>(0);
  const [safeZoneLower, setSafeZoneLower] = useState<number>(0);
  const [safeZoneUpper, setSafeZoneUpper] = useState<number>(0);
  const [riseRateMgDlPerMin, setRiseRateMgDlPerMin] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system/deliver-insulin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sugarMgDl, safeZoneLower, safeZoneUpper, riseRateMgDlPerMin }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystem.deliverInsulin</h3>
      <label>sugarMgDl</label>
      <input type="number" value={String(sugarMgDl)} onChange={(e) => setSugarMgDl(Number(e.target.value))} />
      <label>safeZoneLower</label>
      <input type="number" value={String(safeZoneLower)} onChange={(e) => setSafeZoneLower(Number(e.target.value))} />
      <label>safeZoneUpper</label>
      <input type="number" value={String(safeZoneUpper)} onChange={(e) => setSafeZoneUpper(Number(e.target.value))} />
      <label>riseRateMgDlPerMin</label>
      <input type="number" value={String(riseRateMgDlPerMin)} onChange={(e) => setRiseRateMgDlPerMin(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deliverInsulin</button>
    </form>
  );
}

export function RunSelfTestForm() {
  const [passed, setPassed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system/run-self-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystem.runSelfTest</h3>
      <label>passed</label>
      <input type="checkbox" value={String(passed)} onChange={(e) => setPassed((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">runSelfTest</button>
    </form>
  );
}

export function HaltOnFaultForm() {
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system/halt-on-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystem.haltOnFault</h3>
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">haltOnFault</button>
    </form>
  );
}

export function RaiseAlarmForm() {
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system/raise-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystem.raiseAlarm</h3>
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseAlarm</button>
    </form>
  );
}

export function ConfigureSafeMaxForm() {
  const [newMaxUnits, setNewMaxUnits] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system/configure-safe-max", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newMaxUnits }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystem.configureSafeMax</h3>
      <label>newMaxUnits</label>
      <input type="number" value={String(newMaxUnits)} onChange={(e) => setNewMaxUnits(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">configureSafeMax</button>
    </form>
  );
}

export function CheckReservoirForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system/check-reservoir", {
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
      <h3>InsulinPumpSystem.checkReservoir</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkReservoir</button>
    </form>
  );
}

export function RejectOverdoseForm() {
  const [requestedDose, setRequestedDose] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/reject-overdose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedDose }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.rejectOverdose</h3>
      <label>requestedDose</label>
      <input type="number" value={String(requestedDose)} onChange={(e) => setRequestedDose(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverdose</button>
    </form>
  );
}

export function RejectNegativeDoseForm() {
  const [requestedDose, setRequestedDose] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/reject-negative-dose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedDose }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.rejectNegativeDose</h3>
      <label>requestedDose</label>
      <input type="number" value={String(requestedDose)} onChange={(e) => setRequestedDose(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectNegativeDose</button>
    </form>
  );
}

export function EnforceFailSafeForm() {
  const [requestedDose, setRequestedDose] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/enforce-fail-safe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedDose }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.enforceFailSafe</h3>
      <label>requestedDose</label>
      <input type="number" value={String(requestedDose)} onChange={(e) => setRequestedDose(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceFailSafe</button>
    </form>
  );
}

export function RejectInvalidReadingForm() {
  const [readingMgDl, setReadingMgDl] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/reject-invalid-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ readingMgDl }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.rejectInvalidReading</h3>
      <label>readingMgDl</label>
      <input type="number" value={String(readingMgDl)} onChange={(e) => setReadingMgDl(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectInvalidReading</button>
    </form>
  );
}

export function DeliverDoseForm() {
  const [dose, setDose] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/deliver-dose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dose }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PumpActuator.deliverDose</h3>
      <label>dose</label>
      <input type="number" value={String(dose)} onChange={(e) => setDose(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deliverDose</button>
    </form>
  );
}

export function CompleteDoseForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/complete-dose", {
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
      <h3>PumpActuator.completeDose</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeDose</button>
    </form>
  );
}

export function CheckReservoirForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/check-reservoir", {
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
      <h3>PumpActuator.checkReservoir</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkReservoir</button>
    </form>
  );
}

export function ConfigureSafeMaxForm() {
  const [newMaxUnits, setNewMaxUnits] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/configure-safe-max", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newMaxUnits }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PumpActuator.configureSafeMax</h3>
      <label>newMaxUnits</label>
      <input type="number" value={String(newMaxUnits)} onChange={(e) => setNewMaxUnits(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">configureSafeMax</button>
    </form>
  );
}

export function HaltDeliveryForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/halt-delivery", {
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
      <h3>PumpActuator.haltDelivery</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">haltDelivery</button>
    </form>
  );
}

export function RunSelfTestForm() {
  const [passed, setPassed] = useState<boolean>(false);
  const [timestampMin, setTimestampMin] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-monitor/run-self-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passed, timestampMin }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyMonitor.runSelfTest</h3>
      <label>passed</label>
      <input type="checkbox" value={String(passed)} onChange={(e) => setPassed((e.target.value as unknown as boolean))} />
      <label>timestampMin</label>
      <input type="number" value={String(timestampMin)} onChange={(e) => setTimestampMin(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">runSelfTest</button>
    </form>
  );
}

export function HaltPumpForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-monitor/halt-pump", {
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
      <h3>SafetyMonitor.haltPump</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">haltPump</button>
    </form>
  );
}

export function NotifySensorFaultForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-monitor/notify-sensor-fault", {
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
      <h3>SafetyMonitor.notifySensorFault</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">notifySensorFault</button>
    </form>
  );
}
