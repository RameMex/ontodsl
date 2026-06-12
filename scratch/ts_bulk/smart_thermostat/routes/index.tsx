// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function DriveActuatorForm() {
  const [currentTempF, setCurrentTempF] = useState<number>(0);
  const [clampedSetpointF, setClampedSetpointF] = useState<number>(0);
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/actuator-driver-component/drive-actuator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentTempF, clampedSetpointF, atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ActuatorDriverComponent.driveActuator</h3>
      <label>currentTempF</label>
      <input type="number" value={String(currentTempF)} onChange={(e) => setCurrentTempF(Number(e.target.value))} />
      <label>clampedSetpointF</label>
      <input type="number" value={String(clampedSetpointF)} onChange={(e) => setClampedSetpointF(Number(e.target.value))} />
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">driveActuator</button>
    </form>
  );
}

export function EngageSafeHaltForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/actuator-driver-component/engage-safe-halt", {
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
      <h3>ActuatorDriverComponent.engageSafeHalt</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">engageSafeHalt</button>
    </form>
  );
}

export function ClearHaltForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/actuator-driver-component/clear-halt", {
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
      <h3>ActuatorDriverComponent.clearHalt</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearHalt</button>
    </form>
  );
}

export function RejectEarlyCycleForm() {
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/actuator-driver-component/reject-early-cycle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ActuatorDriverComponent.rejectEarlyCycle</h3>
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectEarlyCycle</button>
    </form>
  );
}

export function RefreshDisplayForm() {
  const [tempF, setTempF] = useState<number>(0);
  const [setpointF, setSetpointF] = useState<number>(0);
  const [actuatorSig, setActuatorSig] = useState<string>("");
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-component/refresh-display", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tempF, setpointF, actuatorSig, alertActive }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DisplayComponent.refreshDisplay</h3>
      <label>tempF</label>
      <input type="number" value={String(tempF)} onChange={(e) => setTempF(Number(e.target.value))} />
      <label>setpointF</label>
      <input type="number" value={String(setpointF)} onChange={(e) => setSetpointF(Number(e.target.value))} />
      <label>actuatorSig</label>
      <input type="text" value={String(actuatorSig)} onChange={(e) => setActuatorSig(e.target.value)} />
      <label>alertActive</label>
      <input type="checkbox" value={String(alertActive)} onChange={(e) => setAlertActive((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">refreshDisplay</button>
    </form>
  );
}

export function ShowAlertForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-component/show-alert", {
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
      <h3>DisplayComponent.showAlert</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">showAlert</button>
    </form>
  );
}

export function ClearAlertForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/display-component/clear-alert", {
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
      <h3>DisplayComponent.clearAlert</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlert</button>
    </form>
  );
}

export function UpdateSetpointForm() {
  const [requestedF, setRequestedF] = useState<number>(0);
  const [sensorOk, setSensorOk] = useState<boolean>(false);
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/setpoint-controller-component/update-setpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedF, sensorOk, alertActive }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SetpointControllerComponent.updateSetpoint</h3>
      <label>requestedF</label>
      <input type="number" value={String(requestedF)} onChange={(e) => setRequestedF(Number(e.target.value))} />
      <label>sensorOk</label>
      <input type="checkbox" value={String(sensorOk)} onChange={(e) => setSensorOk((e.target.value as unknown as boolean))} />
      <label>alertActive</label>
      <input type="checkbox" value={String(alertActive)} onChange={(e) => setAlertActive((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateSetpoint</button>
    </form>
  );
}

export function RejectSetpointWhileHaltedForm() {
  const [requestedF, setRequestedF] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/setpoint-controller-component/reject-setpoint-while-halted", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedF }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SetpointControllerComponent.rejectSetpointWhileHalted</h3>
      <label>requestedF</label>
      <input type="number" value={String(requestedF)} onChange={(e) => setRequestedF(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectSetpointWhileHalted</button>
    </form>
  );
}

export function AdjustSetpointForm() {
  const [requestedF, setRequestedF] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system/adjust-setpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedF }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystem.adjustSetpoint</h3>
      <label>requestedF</label>
      <input type="number" value={String(requestedF)} onChange={(e) => setRequestedF(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">adjustSetpoint</button>
    </form>
  );
}

export function ProcessSensorReadingForm() {
  const [readingF, setReadingF] = useState<number>(0);
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system/process-sensor-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ readingF, atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystem.processSensorReading</h3>
      <label>readingF</label>
      <input type="number" value={String(readingF)} onChange={(e) => setReadingF(Number(e.target.value))} />
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">processSensorReading</button>
    </form>
  );
}

export function CommandActuatorForm() {
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system/command-actuator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystem.commandActuator</h3>
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">commandActuator</button>
    </form>
  );
}

export function RejectCommandDuringSafeHaltForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system/reject-command-during-safe-halt", {
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
      <h3>SmartThermostatSystem.rejectCommandDuringSafeHalt</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectCommandDuringSafeHalt</button>
    </form>
  );
}

export function RefreshDisplayForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system/refresh-display", {
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
      <h3>SmartThermostatSystem.refreshDisplay</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">refreshDisplay</button>
    </form>
  );
}

export function ClearSafeHaltForm() {
  const [verifiedReadingF, setVerifiedReadingF] = useState<number>(0);
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system/clear-safe-halt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ verifiedReadingF, atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystem.clearSafeHalt</h3>
      <label>verifiedReadingF</label>
      <input type="number" value={String(verifiedReadingF)} onChange={(e) => setVerifiedReadingF(Number(e.target.value))} />
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearSafeHalt</button>
    </form>
  );
}

export function RejectUnsafeActuatorCommandForm() {
  const [requestedSignal, setRequestedSignal] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system-formalized/reject-unsafe-actuator-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedSignal }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand</h3>
      <label>requestedSignal</label>
      <input type="text" value={String(requestedSignal)} onChange={(e) => setRequestedSignal(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectUnsafeActuatorCommand</button>
    </form>
  );
}

export function RejectImplausibleReadingForm() {
  const [readingF, setReadingF] = useState<number>(0);
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system-formalized/reject-implausible-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ readingF, atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystemFormalized.rejectImplausibleReading</h3>
      <label>readingF</label>
      <input type="number" value={String(readingF)} onChange={(e) => setReadingF(Number(e.target.value))} />
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectImplausibleReading</button>
    </form>
  );
}

export function RejectEarlyCompressorCycleForm() {
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system-formalized/reject-early-compressor-cycle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystemFormalized.rejectEarlyCompressorCycle</h3>
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectEarlyCompressorCycle</button>
    </form>
  );
}

export function RejectSetpointDuringSafeHaltForm() {
  const [requestedF, setRequestedF] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/smart-thermostat-system-formalized/reject-setpoint-during-safe-halt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedF }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt</h3>
      <label>requestedF</label>
      <input type="number" value={String(requestedF)} onChange={(e) => setRequestedF(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectSetpointDuringSafeHalt</button>
    </form>
  );
}

export function IngestReadingForm() {
  const [readingF, setReadingF] = useState<number>(0);
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/temperature-sensor-component/ingest-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ readingF, atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TemperatureSensorComponent.ingestReading</h3>
      <label>readingF</label>
      <input type="number" value={String(readingF)} onChange={(e) => setReadingF(Number(e.target.value))} />
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">ingestReading</button>
    </form>
  );
}

export function ClearSensorAlertForm() {
  const [verifiedReadingF, setVerifiedReadingF] = useState<number>(0);
  const [atMinute, setAtMinute] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/temperature-sensor-component/clear-sensor-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ verifiedReadingF, atMinute }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TemperatureSensorComponent.clearSensorAlert</h3>
      <label>verifiedReadingF</label>
      <input type="number" value={String(verifiedReadingF)} onChange={(e) => setVerifiedReadingF(Number(e.target.value))} />
      <label>atMinute</label>
      <input type="number" value={String(atMinute)} onChange={(e) => setAtMinute(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearSensorAlert</button>
    </form>
  );
}
