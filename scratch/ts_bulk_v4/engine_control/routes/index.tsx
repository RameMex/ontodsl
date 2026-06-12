// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function LimitFuelOnOverspeedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [detectedSpeed, setDetectedSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/limit-fuel-on-overspeed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, detectedSpeed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EngineControlSystem.limitFuelOnOverspeed</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>detectedSpeed</label>
      <input type="number" value={String(detectedSpeed)} onChange={(e) => setDetectedSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">limitFuelOnOverspeed</button>
    </form>
  );
}

export function ActivateContinuousIgnitionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/activate-continuous-ignition", {
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
      <h3>EngineControlSystem.activateContinuousIgnition</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">activateContinuousIgnition</button>
    </form>
  );
}

export function DeactivateContinuousIgnitionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/deactivate-continuous-ignition", {
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
      <h3>EngineControlSystem.deactivateContinuousIgnition</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deactivateContinuousIgnition</button>
    </form>
  );
}

export function HoldThrustInFlightForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [commanded, setCommanded] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/hold-thrust-in-flight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, commanded }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EngineControlSystem.holdThrustInFlight</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>commanded</label>
      <input type="number" value={String(commanded)} onChange={(e) => setCommanded(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">holdThrustInFlight</button>
    </form>
  );
}

export function EnableThrustReverserForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/enable-thrust-reverser", {
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
      <h3>EngineControlSystem.enableThrustReverser</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enableThrustReverser</button>
    </form>
  );
}

export function DisableThrustReverserForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/disable-thrust-reverser", {
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
      <h3>EngineControlSystem.disableThrustReverser</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">disableThrustReverser</button>
    </form>
  );
}

export function SubstituteModelledValueForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [modelledSpeed, setModelledSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/substitute-modelled-value", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, modelledSpeed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EngineControlSystem.substituteModelledValue</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>modelledSpeed</label>
      <input type="number" value={String(modelledSpeed)} onChange={(e) => setModelledSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">substituteModelledValue</button>
    </form>
  );
}

export function ResumeSensorReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/resume-sensor-reading", {
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
      <h3>EngineControlSystem.resumeSensorReading</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resumeSensorReading</button>
    </form>
  );
}

export function TransitionToFlightForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/transition-to-flight", {
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
      <h3>EngineControlSystem.transitionToFlight</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToFlight</button>
    </form>
  );
}

export function TransitionToGroundForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system/transition-to-ground", {
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
      <h3>EngineControlSystem.transitionToGround</h3>
      <label>EngineControlSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToGround</button>
    </form>
  );
}

export function RejectReverserIfAirborneForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system-formalized/reject-reverser-if-airborne", {
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
      <h3>EngineControlSystemFormalized.rejectReverserIfAirborne</h3>
      <label>EngineControlSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectReverserIfAirborne</button>
    </form>
  );
}

export function RejectOverspeedLimitOnUnprotectedVariantForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [detectedSpeed, setDetectedSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system-formalized/reject-overspeed-limit-on-unprotected-variant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, detectedSpeed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant</h3>
      <label>EngineControlSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>detectedSpeed</label>
      <input type="number" value={String(detectedSpeed)} onChange={(e) => setDetectedSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverspeedLimitOnUnprotectedVariant</button>
    </form>
  );
}

export function RejectIgnitionDeactivationInHazardousPhaseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system-formalized/reject-ignition-deactivation-in-hazardous-phase", {
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
      <h3>EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase</h3>
      <label>EngineControlSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectIgnitionDeactivationInHazardousPhase</button>
    </form>
  );
}

export function EnforceFuelCutOnSpeedViolationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system-formalized/enforce-fuel-cut-on-speed-violation", {
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
      <h3>EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation</h3>
      <label>EngineControlSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceFuelCutOnSpeedViolation</button>
    </form>
  );
}

export function RejectThrustCommandPendingSubstitutionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [commanded, setCommanded] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system-formalized/reject-thrust-command-pending-substitution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, commanded }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution</h3>
      <label>EngineControlSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>commanded</label>
      <input type="number" value={String(commanded)} onChange={(e) => setCommanded(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectThrustCommandPendingSubstitution</button>
    </form>
  );
}

export function ForceReverserDisableBeforeFlightForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/engine-control-system-formalized/force-reverser-disable-before-flight", {
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
      <h3>EngineControlSystemFormalized.forceReverserDisableBeforeFlight</h3>
      <label>EngineControlSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">forceReverserDisableBeforeFlight</button>
    </form>
  );
}

export function TransitionToFlightForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-phase-monitor/transition-to-flight", {
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
      <h3>FlightPhaseMonitor.transitionToFlight</h3>
      <label>FlightPhaseMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToFlight</button>
    </form>
  );
}

export function TransitionToGroundForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-phase-monitor/transition-to-ground", {
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
      <h3>FlightPhaseMonitor.transitionToGround</h3>
      <label>FlightPhaseMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToGround</button>
    </form>
  );
}

export function UpdateWeightOnWheelsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [wow, setWow] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-phase-monitor/update-weight-on-wheels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, wow }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FlightPhaseMonitor.updateWeightOnWheels</h3>
      <label>FlightPhaseMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>wow</label>
      <input type="checkbox" value={String(wow)} onChange={(e) => setWow((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateWeightOnWheels</button>
    </form>
  );
}

export function ActivateContinuousIgnitionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/activate-continuous-ignition", {
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
      <h3>IgnitionThrustController.activateContinuousIgnition</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">activateContinuousIgnition</button>
    </form>
  );
}

export function DeactivateContinuousIgnitionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/deactivate-continuous-ignition", {
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
      <h3>IgnitionThrustController.deactivateContinuousIgnition</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deactivateContinuousIgnition</button>
    </form>
  );
}

export function RejectIgnitionDeactivationInHazardousPhaseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/reject-ignition-deactivation-in-hazardous-phase", {
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
      <h3>IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectIgnitionDeactivationInHazardousPhase</button>
    </form>
  );
}

export function HoldThrustInFlightForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [commanded, setCommanded] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/hold-thrust-in-flight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, commanded }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>IgnitionThrustController.holdThrustInFlight</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>commanded</label>
      <input type="number" value={String(commanded)} onChange={(e) => setCommanded(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">holdThrustInFlight</button>
    </form>
  );
}

export function RejectThrustCommandPendingSubstitutionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [commanded, setCommanded] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/reject-thrust-command-pending-substitution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, commanded }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>IgnitionThrustController.rejectThrustCommandPendingSubstitution</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>commanded</label>
      <input type="number" value={String(commanded)} onChange={(e) => setCommanded(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectThrustCommandPendingSubstitution</button>
    </form>
  );
}

export function EnableThrustReverserForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/enable-thrust-reverser", {
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
      <h3>IgnitionThrustController.enableThrustReverser</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enableThrustReverser</button>
    </form>
  );
}

export function DisableThrustReverserForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/disable-thrust-reverser", {
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
      <h3>IgnitionThrustController.disableThrustReverser</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">disableThrustReverser</button>
    </form>
  );
}

export function RejectReverserIfAirborneForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/reject-reverser-if-airborne", {
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
      <h3>IgnitionThrustController.rejectReverserIfAirborne</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectReverserIfAirborne</button>
    </form>
  );
}

export function ForceReverserDisableBeforeFlightForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/force-reverser-disable-before-flight", {
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
      <h3>IgnitionThrustController.forceReverserDisableBeforeFlight</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">forceReverserDisableBeforeFlight</button>
    </form>
  );
}

export function ReceiveFlightPhaseUpdateForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [inFlight, setInFlight] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/receive-flight-phase-update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, inFlight }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>IgnitionThrustController.receiveFlightPhaseUpdate</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>inFlight</label>
      <input type="checkbox" value={String(inFlight)} onChange={(e) => setInFlight((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveFlightPhaseUpdate</button>
    </form>
  );
}

export function ReceiveSensorFaultStatusForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [faultActive, setFaultActive] = useState<boolean>(false);
  const [substituted, setSubstituted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ignition-thrust-controller/receive-sensor-fault-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, faultActive, substituted }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>IgnitionThrustController.receiveSensorFaultStatus</h3>
      <label>IgnitionThrustController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>faultActive</label>
      <input type="checkbox" value={String(faultActive)} onChange={(e) => setFaultActive((e.target.value as unknown as boolean))} />
      <label>substituted</label>
      <input type="checkbox" value={String(substituted)} onChange={(e) => setSubstituted((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveSensorFaultStatus</button>
    </form>
  );
}

export function LimitFuelOnOverspeedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [detectedSpeed, setDetectedSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/overspeed-protection-unit/limit-fuel-on-overspeed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, detectedSpeed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OverspeedProtectionUnit.limitFuelOnOverspeed</h3>
      <label>OverspeedProtectionUnit id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>detectedSpeed</label>
      <input type="number" value={String(detectedSpeed)} onChange={(e) => setDetectedSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">limitFuelOnOverspeed</button>
    </form>
  );
}

export function RejectOverspeedLimitOnUnprotectedVariantForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [detectedSpeed, setDetectedSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/overspeed-protection-unit/reject-overspeed-limit-on-unprotected-variant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, detectedSpeed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant</h3>
      <label>OverspeedProtectionUnit id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>detectedSpeed</label>
      <input type="number" value={String(detectedSpeed)} onChange={(e) => setDetectedSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverspeedLimitOnUnprotectedVariant</button>
    </form>
  );
}

export function EnforceFuelCutOnSpeedViolationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/overspeed-protection-unit/enforce-fuel-cut-on-speed-violation", {
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
      <h3>OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation</h3>
      <label>OverspeedProtectionUnit id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceFuelCutOnSpeedViolation</button>
    </form>
  );
}

export function ReceiveEffectiveSpeedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [speed, setSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/overspeed-protection-unit/receive-effective-speed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, speed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OverspeedProtectionUnit.receiveEffectiveSpeed</h3>
      <label>OverspeedProtectionUnit id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>speed</label>
      <input type="number" value={String(speed)} onChange={(e) => setSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveEffectiveSpeed</button>
    </form>
  );
}

export function SubstituteModelledValueForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [modelledSpeed, setModelledSpeed] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/sensor-fault-manager/substitute-modelled-value", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, modelledSpeed }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SensorFaultManager.substituteModelledValue</h3>
      <label>SensorFaultManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>modelledSpeed</label>
      <input type="number" value={String(modelledSpeed)} onChange={(e) => setModelledSpeed(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">substituteModelledValue</button>
    </form>
  );
}

export function ResumeSensorReadingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/sensor-fault-manager/resume-sensor-reading", {
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
      <h3>SensorFaultManager.resumeSensorReading</h3>
      <label>SensorFaultManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resumeSensorReading</button>
    </form>
  );
}
