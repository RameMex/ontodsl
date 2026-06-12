// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function SoundMalfunctionAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/sound-malfunction-alarm", {
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
      <h3>AlarmManager.soundMalfunctionAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">soundMalfunctionAlarm</button>
    </form>
  );
}

export function SoundLowReservoirAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/sound-low-reservoir-alarm", {
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
      <h3>AlarmManager.soundLowReservoirAlarm</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">soundLowReservoirAlarm</button>
    </form>
  );
}

export function ClearAlarmsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alarm-manager/clear-alarms", {
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
      <h3>AlarmManager.clearAlarms</h3>
      <label>AlarmManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarms</button>
    </form>
  );
}

export function TakeReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/blood-sugar-sensor/take-reading", {
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
      <h3>BloodSugarSensor.takeReading</h3>
      <label>BloodSugarSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>value</label>
      <input type="number" value={String(value)} onChange={(e) => setValue(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">takeReading</button>
    </form>
  );
}

export function ReportSensorFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/blood-sugar-sensor/report-sensor-fault", {
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
      <h3>BloodSugarSensor.reportSensorFault</h3>
      <label>BloodSugarSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportSensorFault</button>
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
    const res = await fetch("/api/blood-sugar-sensor/reset-sensor", {
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
      <h3>BloodSugarSensor.resetSensor</h3>
      <label>BloodSugarSensor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetSensor</button>
    </form>
  );
}

export function ComputeDoseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [sugar, setSugar] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dose-calculator/compute-dose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, sugar, rate, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DoseCalculator.computeDose</h3>
      <label>DoseCalculator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>sugar</label>
      <input type="number" value={String(sugar)} onChange={(e) => setSugar(Number(e.target.value))} />
      <label>rate</label>
      <input type="number" value={String(rate)} onChange={(e) => setRate(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">computeDose</button>
    </form>
  );
}

export function SetMaxDoseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newMax, setNewMax] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dose-calculator/set-max-dose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newMax }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DoseCalculator.setMaxDose</h3>
      <label>DoseCalculator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newMax</label>
      <input type="number" value={String(newMax)} onChange={(e) => setNewMax(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setMaxDose</button>
    </form>
  );
}

export function SetSafeZoneForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newUpperBound, setNewUpperBound] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dose-calculator/set-safe-zone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newUpperBound }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DoseCalculator.setSafeZone</h3>
      <label>DoseCalculator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newUpperBound</label>
      <input type="number" value={String(newUpperBound)} onChange={(e) => setNewUpperBound(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setSafeZone</button>
    </form>
  );
}

export function SetDosingCheckIntervalForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newInterval, setNewInterval] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dose-calculator/set-dosing-check-interval", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newInterval }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DoseCalculator.setDosingCheckInterval</h3>
      <label>DoseCalculator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newInterval</label>
      <input type="number" value={String(newInterval)} onChange={(e) => setNewInterval(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setDosingCheckInterval</button>
    </form>
  );
}

export function ResetCalculatorForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dose-calculator/reset-calculator", {
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
      <h3>DoseCalculator.resetCalculator</h3>
      <label>DoseCalculator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetCalculator</button>
    </form>
  );
}

export function RunSelfTestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [sensorStatus, setSensorStatus] = useState<boolean>(false);
  const [pumpStatus, setPumpStatus] = useState<boolean>(false);
  const [needleStatus, setNeedleStatus] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/hardware-fault-detector/run-self-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, sensorStatus, pumpStatus, needleStatus, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HardwareFaultDetector.runSelfTest</h3>
      <label>HardwareFaultDetector id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>sensorStatus</label>
      <input type="checkbox" value={String(sensorStatus)} onChange={(e) => setSensorStatus((e.target.value as unknown as boolean))} />
      <label>pumpStatus</label>
      <input type="checkbox" value={String(pumpStatus)} onChange={(e) => setPumpStatus((e.target.value as unknown as boolean))} />
      <label>needleStatus</label>
      <input type="checkbox" value={String(needleStatus)} onChange={(e) => setNeedleStatus((e.target.value as unknown as boolean))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">runSelfTest</button>
    </form>
  );
}

export function DetectFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/hardware-fault-detector/detect-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HardwareFaultDetector.detectFault</h3>
      <label>HardwareFaultDetector id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectFault</button>
    </form>
  );
}

export function ClearFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/hardware-fault-detector/clear-fault", {
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
      <h3>HardwareFaultDetector.clearFault</h3>
      <label>HardwareFaultDetector id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearFault</button>
    </form>
  );
}

export function SetSelfTestIntervalForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newInterval, setNewInterval] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/hardware-fault-detector/set-self-test-interval", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newInterval }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>HardwareFaultDetector.setSelfTestInterval</h3>
      <label>HardwareFaultDetector id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newInterval</label>
      <input type="number" value={String(newInterval)} onChange={(e) => setNewInterval(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setSelfTestInterval</button>
    </form>
  );
}

export function DeliverInsulinForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [sugar, setSugar] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/deliver-insulin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, sugar, rate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpControlSystem.deliverInsulin</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>sugar</label>
      <input type="number" value={String(sugar)} onChange={(e) => setSugar(Number(e.target.value))} />
      <label>rate</label>
      <input type="number" value={String(rate)} onChange={(e) => setRate(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deliverInsulin</button>
    </form>
  );
}

export function DetectFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [faultReason, setFaultReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/detect-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, faultReason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpControlSystem.detectFault</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>faultReason</label>
      <input type="text" value={String(faultReason)} onChange={(e) => setFaultReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectFault</button>
    </form>
  );
}

export function SoundAlarmForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [alarmType, setAlarmType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/sound-alarm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, alarmType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpControlSystem.soundAlarm</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>alarmType</label>
      <input type="text" value={String(alarmType)} onChange={(e) => setAlarmType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">soundAlarm</button>
    </form>
  );
}

export function DetectLowReservoirForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [threshold, setThreshold] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/detect-low-reservoir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, threshold }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpControlSystem.detectLowReservoir</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>threshold</label>
      <input type="number" value={String(threshold)} onChange={(e) => setThreshold(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectLowReservoir</button>
    </form>
  );
}

export function ClearAlarmsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/clear-alarms", {
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
      <h3>InsulinPumpControlSystem.clearAlarms</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearAlarms</button>
    </form>
  );
}

export function ResumeOperationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/resume-operation", {
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
      <h3>InsulinPumpControlSystem.resumeOperation</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resumeOperation</button>
    </form>
  );
}

export function SetSafeMaxDoseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newMax, setNewMax] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/set-safe-max-dose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newMax }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpControlSystem.setSafeMaxDose</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newMax</label>
      <input type="number" value={String(newMax)} onChange={(e) => setNewMax(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setSafeMaxDose</button>
    </form>
  );
}

export function CheckBloodSugarForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [sugar, setSugar] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-control-system/check-blood-sugar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, sugar }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpControlSystem.checkBloodSugar</h3>
      <label>InsulinPumpControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>sugar</label>
      <input type="number" value={String(sugar)} onChange={(e) => setSugar(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkBloodSugar</button>
    </form>
  );
}

export function RejectOverdoseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestedDose, setRequestedDose] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/reject-overdose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestedDose }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.rejectOverdose</h3>
      <label>InsulinPumpSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestedDose</label>
      <input type="number" value={String(requestedDose)} onChange={(e) => setRequestedDose(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverdose</button>
    </form>
  );
}

export function RejectDeliveryInSafeZoneForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [sugar, setSugar] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/reject-delivery-in-safe-zone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, sugar }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.rejectDeliveryInSafeZone</h3>
      <label>InsulinPumpSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>sugar</label>
      <input type="number" value={String(sugar)} onChange={(e) => setSugar(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDeliveryInSafeZone</button>
    </form>
  );
}

export function RejectDeliveryOnFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/reject-delivery-on-fault", {
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
      <h3>InsulinPumpSystemFormalized.rejectDeliveryOnFault</h3>
      <label>InsulinPumpSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDeliveryOnFault</button>
    </form>
  );
}

export function EnforceSelfTestIntervalForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lastTestTime, setLastTestTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/enforce-self-test-interval", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lastTestTime, currentTime }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.enforceSelfTestInterval</h3>
      <label>InsulinPumpSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lastTestTime</label>
      <input type="number" value={String(lastTestTime)} onChange={(e) => setLastTestTime(Number(e.target.value))} />
      <label>currentTime</label>
      <input type="number" value={String(currentTime)} onChange={(e) => setCurrentTime(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceSelfTestInterval</button>
    </form>
  );
}

export function EnforceDosingIntervalForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lastDoseTime, setLastDoseTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/enforce-dosing-interval", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lastDoseTime, currentTime }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>InsulinPumpSystemFormalized.enforceDosingInterval</h3>
      <label>InsulinPumpSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lastDoseTime</label>
      <input type="number" value={String(lastDoseTime)} onChange={(e) => setLastDoseTime(Number(e.target.value))} />
      <label>currentTime</label>
      <input type="number" value={String(currentTime)} onChange={(e) => setCurrentTime(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceDosingInterval</button>
    </form>
  );
}

export function EnforceSafeMaxConfiguredForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/insulin-pump-system-formalized/enforce-safe-max-configured", {
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
      <h3>InsulinPumpSystemFormalized.enforceSafeMaxConfigured</h3>
      <label>InsulinPumpSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceSafeMaxConfigured</button>
    </form>
  );
}

export function DeliverInsulinForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [dose, setDose] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/deliver-insulin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, dose, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PumpActuator.deliverInsulin</h3>
      <label>PumpActuator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>dose</label>
      <input type="number" value={String(dose)} onChange={(e) => setDose(Number(e.target.value))} />
      <label>timestamp</label>
      <input type="number" value={String(timestamp)} onChange={(e) => setTimestamp(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deliverInsulin</button>
    </form>
  );
}

export function StopDeliveryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/stop-delivery", {
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
      <h3>PumpActuator.stopDelivery</h3>
      <label>PumpActuator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">stopDelivery</button>
    </form>
  );
}

export function RefillReservoirForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/refill-reservoir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PumpActuator.refillReservoir</h3>
      <label>PumpActuator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">refillReservoir</button>
    </form>
  );
}

export function ReportLowReservoirForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/report-low-reservoir", {
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
      <h3>PumpActuator.reportLowReservoir</h3>
      <label>PumpActuator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportLowReservoir</button>
    </form>
  );
}

export function ReportActuatorFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/report-actuator-fault", {
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
      <h3>PumpActuator.reportActuatorFault</h3>
      <label>PumpActuator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportActuatorFault</button>
    </form>
  );
}

export function ClearActuatorFaultForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pump-actuator/clear-actuator-fault", {
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
      <h3>PumpActuator.clearActuatorFault</h3>
      <label>PumpActuator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearActuatorFault</button>
    </form>
  );
}
