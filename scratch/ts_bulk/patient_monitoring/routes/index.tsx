// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function RaiseThresholdAlarmForm() {
  const [latencySeconds, setLatencySeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/raise-threshold-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latencySeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.raiseThresholdAlarm</h3>
      <label>latencySeconds</label>
      <input type="number" value={String(latencySeconds)} onChange={(e) => setLatencySeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseThresholdAlarm</button>
    </form>
  );
}

export function RaiseAlarmWithLatencyFaultForm() {
  const [latencySeconds, setLatencySeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/raise-alarm-with-latency-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latencySeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.raiseAlarmWithLatencyFault</h3>
      <label>latencySeconds</label>
      <input type="number" value={String(latencySeconds)} onChange={(e) => setLatencySeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseAlarmWithLatencyFault</button>
    </form>
  );
}

export function SilenceAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/silence-alarm", {
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
      <h3>AlarmManager.silenceAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">silenceAlarm</button>
    </form>
  );
}

export function AutoRearmAlarmForm() {
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/auto-rearm-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ elapsedSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlarmManager.autoRearmAlarm</h3>
      <label>elapsedSeconds</label>
      <input type="number" value={String(elapsedSeconds)} onChange={(e) => setElapsedSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">autoRearmAlarm</button>
    </form>
  );
}

export function ClearAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/clear-alarm", {
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
      <h3>AlarmManager.clearAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarm</button>
    </form>
  );
}

export function RaiseSensorDisconnectAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/raise-sensor-disconnect-alarm", {
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
      <h3>AlarmManager.raiseSensorDisconnectAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseSensorDisconnectAlarm</button>
    </form>
  );
}

export function ClearSensorDisconnectAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/clear-sensor-disconnect-alarm", {
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
      <h3>AlarmManager.clearSensorDisconnectAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearSensorDisconnectAlarm</button>
    </form>
  );
}

export function UpdateDisplayForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-controller/update-display", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayController.updateDisplay</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateDisplay</button>
    </form>
  );
}

export function BlankDisplayForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-controller/blank-display", {
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
      <h3>DisplayController.blankDisplay</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">blankDisplay</button>
    </form>
  );
}

export function RestoreDisplayForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-controller/restore-display", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayController.restoreDisplay</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">restoreDisplay</button>
    </form>
  );
}

export function ConfigureThresholdsForm() {
  const [lowBpm, setLowBpm] = useState<number>(0);
  const [highBpm, setHighBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-controller/configure-thresholds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lowBpm, highBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayController.configureThresholds</h3>
      <label>lowBpm</label>
      <input type="number" value={String(lowBpm)} onChange={(e) => setLowBpm(Number(e.target.value))} />
      <label>highBpm</label>
      <input type="number" value={String(highBpm)} onChange={(e) => setHighBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">configureThresholds</button>
    </form>
  );
}

export function AcceptReadingForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor-interface/accept-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensorInterface.acceptReading</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptReading</button>
    </form>
  );
}

export function RejectImplausibleReadingForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor-interface/reject-implausible-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensorInterface.rejectImplausibleReading</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectImplausibleReading</button>
    </form>
  );
}

export function RecordSignalAbsenceForm() {
  const [absentSeconds, setAbsentSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor-interface/record-signal-absence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ absentSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensorInterface.recordSignalAbsence</h3>
      <label>absentSeconds</label>
      <input type="number" value={String(absentSeconds)} onChange={(e) => setAbsentSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordSignalAbsence</button>
    </form>
  );
}

export function DeclareSensorDisconnectedForm() {
  const [absentSeconds, setAbsentSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor-interface/declare-sensor-disconnected", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ absentSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EcgSensorInterface.declareSensorDisconnected</h3>
      <label>absentSeconds</label>
      <input type="number" value={String(absentSeconds)} onChange={(e) => setAbsentSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">declareSensorDisconnected</button>
    </form>
  );
}

export function RestoreSensorConnectionForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ecg-sensor-interface/restore-sensor-connection", {
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
      <h3>EcgSensorInterface.restoreSensorConnection</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">restoreSensorConnection</button>
    </form>
  );
}

export function LogLatencyFaultForm() {
  const [description, setDescription] = useState<string>("");
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/fault-logger/log-latency-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description, timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FaultLogger.logLatencyFault</h3>
      <label>description</label>
      <input type="text" value={String(description)} onChange={(e) => setDescription(e.target.value)} />
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">logLatencyFault</button>
    </form>
  );
}

export function AcceptReadingForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/accept-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.acceptReading</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptReading</button>
    </form>
  );
}

export function RejectImplausibleReadingForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/reject-implausible-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.rejectImplausibleReading</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectImplausibleReading</button>
    </form>
  );
}

export function RaiseThresholdAlarmForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [latencySeconds, setLatencySeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/raise-threshold-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm, latencySeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.raiseThresholdAlarm</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      <label>latencySeconds</label>
      <input type="number" value={String(latencySeconds)} onChange={(e) => setLatencySeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseThresholdAlarm</button>
    </form>
  );
}

export function SilenceAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/silence-alarm", {
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
      <h3>VitalSignsMonitorSystem.silenceAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">silenceAlarm</button>
    </form>
  );
}

export function AutoRearmAlarmForm() {
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/auto-rearm-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ elapsedSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.autoRearmAlarm</h3>
      <label>elapsedSeconds</label>
      <input type="number" value={String(elapsedSeconds)} onChange={(e) => setElapsedSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">autoRearmAlarm</button>
    </form>
  );
}

export function ClearAlarmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/clear-alarm", {
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
      <h3>VitalSignsMonitorSystem.clearAlarm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarm</button>
    </form>
  );
}

export function RecordSignalAbsenceForm() {
  const [absentSeconds, setAbsentSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/record-signal-absence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ absentSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.recordSignalAbsence</h3>
      <label>absentSeconds</label>
      <input type="number" value={String(absentSeconds)} onChange={(e) => setAbsentSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordSignalAbsence</button>
    </form>
  );
}

export function RaiseSensorDisconnectAlarmForm() {
  const [absentSeconds, setAbsentSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/raise-sensor-disconnect-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ absentSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.raiseSensorDisconnectAlarm</h3>
      <label>absentSeconds</label>
      <input type="number" value={String(absentSeconds)} onChange={(e) => setAbsentSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseSensorDisconnectAlarm</button>
    </form>
  );
}

export function ResumeAfterReconnectForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/resume-after-reconnect", {
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
      <h3>VitalSignsMonitorSystem.resumeAfterReconnect</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resumeAfterReconnect</button>
    </form>
  );
}

export function ConfigureThresholdsForm() {
  const [lowBpm, setLowBpm] = useState<number>(0);
  const [highBpm, setHighBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system/configure-thresholds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lowBpm, highBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystem.configureThresholds</h3>
      <label>lowBpm</label>
      <input type="number" value={String(lowBpm)} onChange={(e) => setLowBpm(Number(e.target.value))} />
      <label>highBpm</label>
      <input type="number" value={String(highBpm)} onChange={(e) => setHighBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">configureThresholds</button>
    </form>
  );
}

export function GuardImplausibleReadingForm() {
  const [valueBpm, setValueBpm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system-formalized/guard-implausible-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valueBpm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystemFormalized.guardImplausibleReading</h3>
      <label>valueBpm</label>
      <input type="number" value={String(valueBpm)} onChange={(e) => setValueBpm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardImplausibleReading</button>
    </form>
  );
}

export function EnforceAlarmLatencyCeilingForm() {
  const [requestedLatencySeconds, setRequestedLatencySeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system-formalized/enforce-alarm-latency-ceiling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedLatencySeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling</h3>
      <label>requestedLatencySeconds</label>
      <input type="number" value={String(requestedLatencySeconds)} onChange={(e) => setRequestedLatencySeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceAlarmLatencyCeiling</button>
    </form>
  );
}

export function EnforceSilenceCeilingForm() {
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system-formalized/enforce-silence-ceiling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ elapsedSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystemFormalized.enforceSilenceCeiling</h3>
      <label>elapsedSeconds</label>
      <input type="number" value={String(elapsedSeconds)} onChange={(e) => setElapsedSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceSilenceCeiling</button>
    </form>
  );
}

export function EnforceDisconnectTimeoutForm() {
  const [absentSeconds, setAbsentSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/vital-signs-monitor-system-formalized/enforce-disconnect-timeout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ absentSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout</h3>
      <label>absentSeconds</label>
      <input type="number" value={String(absentSeconds)} onChange={(e) => setAbsentSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceDisconnectTimeout</button>
    </form>
  );
}
