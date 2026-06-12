// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function ReceiveButtonPressForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [approachAxis, setApproachAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pedestrian-controller/receive-button-press", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, approachAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PedestrianController.receiveButtonPress</h3>
      <label>PedestrianController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>approachAxis</label>
      <input type="text" value={String(approachAxis)} onChange={(e) => setApproachAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveButtonPress</button>
    </form>
  );
}

export function GrantWalkForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [nsState, setNsState] = useState<string>("");
  const [ewState, setEwState] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pedestrian-controller/grant-walk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, nsState, ewState }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PedestrianController.grantWalk</h3>
      <label>PedestrianController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>nsState</label>
      <input type="text" value={String(nsState)} onChange={(e) => setNsState(e.target.value)} />
      <label>ewState</label>
      <input type="text" value={String(ewState)} onChange={(e) => setEwState(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">grantWalk</button>
    </form>
  );
}

export function RevokeWalkForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pedestrian-controller/revoke-walk", {
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
      <h3>PedestrianController.revokeWalk</h3>
      <label>PedestrianController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">revokeWalk</button>
    </form>
  );
}

export function RejectConflictingWalkForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [nsState, setNsState] = useState<string>("");
  const [ewState, setEwState] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pedestrian-controller/reject-conflicting-walk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, nsState, ewState }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PedestrianController.rejectConflictingWalk</h3>
      <label>PedestrianController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>nsState</label>
      <input type="text" value={String(nsState)} onChange={(e) => setNsState(e.target.value)} />
      <label>ewState</label>
      <input type="text" value={String(ewState)} onChange={(e) => setEwState(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectConflictingWalk</button>
    </form>
  );
}

export function ClearWalkOnPreemptionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pedestrian-controller/clear-walk-on-preemption", {
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
      <h3>PedestrianController.clearWalkOnPreemption</h3>
      <label>PedestrianController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearWalkOnPreemption</button>
    </form>
  );
}

export function ActivatePhaseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [phaseId, setPhaseId] = useState<string>("");
  const [greenAxis, setGreenAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/phase-scheduler/activate-phase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, phaseId, greenAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PhaseScheduler.activatePhase</h3>
      <label>PhaseScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>phaseId</label>
      <input type="text" value={String(phaseId)} onChange={(e) => setPhaseId(e.target.value)} />
      <label>greenAxis</label>
      <input type="text" value={String(greenAxis)} onChange={(e) => setGreenAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">activatePhase</button>
    </form>
  );
}

export function IssueYellowCommandForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/phase-scheduler/issue-yellow-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PhaseScheduler.issueYellowCommand</h3>
      <label>PhaseScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issueYellowCommand</button>
    </form>
  );
}

export function IssueRedAfterYellowForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [elapsedYellowSeconds, setElapsedYellowSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/phase-scheduler/issue-red-after-yellow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis, elapsedYellowSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PhaseScheduler.issueRedAfterYellow</h3>
      <label>PhaseScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      <label>elapsedYellowSeconds</label>
      <input type="number" value={String(elapsedYellowSeconds)} onChange={(e) => setElapsedYellowSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issueRedAfterYellow</button>
    </form>
  );
}

export function CompleteAllRedDwellForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/phase-scheduler/complete-all-red-dwell", {
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
      <h3>PhaseScheduler.completeAllRedDwell</h3>
      <label>PhaseScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeAllRedDwell</button>
    </form>
  );
}

export function EnterPreemptionAllRedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/phase-scheduler/enter-preemption-all-red", {
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
      <h3>PhaseScheduler.enterPreemptionAllRed</h3>
      <label>PhaseScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enterPreemptionAllRed</button>
    </form>
  );
}

export function TickElapsedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [deltaNs, setDeltaNs] = useState<number>(0);
  const [deltaEw, setDeltaEw] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/phase-scheduler/tick-elapsed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, deltaNs, deltaEw }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PhaseScheduler.tickElapsed</h3>
      <label>PhaseScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>deltaNs</label>
      <input type="number" value={String(deltaNs)} onChange={(e) => setDeltaNs(Number(e.target.value))} />
      <label>deltaEw</label>
      <input type="number" value={String(deltaEw)} onChange={(e) => setDeltaEw(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">tickElapsed</button>
    </form>
  );
}

export function HandlePreemptionSensorForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [responseTimeSeconds, setResponseTimeSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/preemption-controller/handle-preemption-sensor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, responseTimeSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PreemptionController.handlePreemptionSensor</h3>
      <label>PreemptionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>responseTimeSeconds</label>
      <input type="number" value={String(responseTimeSeconds)} onChange={(e) => setResponseTimeSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">handlePreemptionSensor</button>
    </form>
  );
}

export function HandlePreemptionClearForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/preemption-controller/handle-preemption-clear", {
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
      <h3>PreemptionController.handlePreemptionClear</h3>
      <label>PreemptionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">handlePreemptionClear</button>
    </form>
  );
}

export function RejectLateResponseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [responseTimeSeconds, setResponseTimeSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/preemption-controller/reject-late-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, responseTimeSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PreemptionController.rejectLateResponse</h3>
      <label>PreemptionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>responseTimeSeconds</label>
      <input type="number" value={String(responseTimeSeconds)} onChange={(e) => setResponseTimeSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectLateResponse</button>
    </form>
  );
}

export function SetAxisGreenForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [greenAxis, setGreenAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/signal-head-controller/set-axis-green", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, greenAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SignalHeadController.setAxisGreen</h3>
      <label>SignalHeadController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>greenAxis</label>
      <input type="text" value={String(greenAxis)} onChange={(e) => setGreenAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setAxisGreen</button>
    </form>
  );
}

export function SetAxisYellowForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/signal-head-controller/set-axis-yellow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SignalHeadController.setAxisYellow</h3>
      <label>SignalHeadController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setAxisYellow</button>
    </form>
  );
}

export function SetAxisRedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/signal-head-controller/set-axis-red", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SignalHeadController.setAxisRed</h3>
      <label>SignalHeadController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setAxisRed</button>
    </form>
  );
}

export function SetAllRedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/signal-head-controller/set-all-red", {
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
      <h3>SignalHeadController.setAllRed</h3>
      <label>SignalHeadController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setAllRed</button>
    </form>
  );
}

export function StartPhaseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [phaseId, setPhaseId] = useState<string>("");
  const [greenAxis, setGreenAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/start-phase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, phaseId, greenAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystem.startPhase</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>phaseId</label>
      <input type="text" value={String(phaseId)} onChange={(e) => setPhaseId(e.target.value)} />
      <label>greenAxis</label>
      <input type="text" value={String(greenAxis)} onChange={(e) => setGreenAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">startPhase</button>
    </form>
  );
}

export function BeginYellowForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/begin-yellow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystem.beginYellow</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">beginYellow</button>
    </form>
  );
}

export function EndYellowGoRedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [elapsedYellowSeconds, setElapsedYellowSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/end-yellow-go-red", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis, elapsedYellowSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystem.endYellowGoRed</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      <label>elapsedYellowSeconds</label>
      <input type="number" value={String(elapsedYellowSeconds)} onChange={(e) => setElapsedYellowSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">endYellowGoRed</button>
    </form>
  );
}

export function CommandAllRedPreemptionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [responseTimeSeconds, setResponseTimeSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/command-all-red-preemption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, responseTimeSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystem.commandAllRedPreemption</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>responseTimeSeconds</label>
      <input type="number" value={String(responseTimeSeconds)} onChange={(e) => setResponseTimeSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">commandAllRedPreemption</button>
    </form>
  );
}

export function ClearPreemptionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/clear-preemption", {
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
      <h3>TrafficLightControllerSystem.clearPreemption</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearPreemption</button>
    </form>
  );
}

export function RegisterPedestrianRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [approachAxis, setApproachAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/register-pedestrian-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, approachAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystem.registerPedestrianRequest</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>approachAxis</label>
      <input type="text" value={String(approachAxis)} onChange={(e) => setApproachAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">registerPedestrianRequest</button>
    </form>
  );
}

export function ActivateWalkForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/activate-walk", {
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
      <h3>TrafficLightControllerSystem.activateWalk</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">activateWalk</button>
    </form>
  );
}

export function DeactivateWalkForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/deactivate-walk", {
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
      <h3>TrafficLightControllerSystem.deactivateWalk</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deactivateWalk</button>
    </form>
  );
}

export function ClockTickForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [deltaNs, setDeltaNs] = useState<number>(0);
  const [deltaEw, setDeltaEw] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system/clock-tick", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, deltaNs, deltaEw }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystem.clockTick</h3>
      <label>TrafficLightControllerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>deltaNs</label>
      <input type="number" value={String(deltaNs)} onChange={(e) => setDeltaNs(Number(e.target.value))} />
      <label>deltaEw</label>
      <input type="number" value={String(deltaEw)} onChange={(e) => setDeltaEw(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clockTick</button>
    </form>
  );
}

export function RejectDirectGreenToRedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system-formalized/reject-direct-green-to-red", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystemFormalized.rejectDirectGreenToRed</h3>
      <label>TrafficLightControllerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDirectGreenToRed</button>
    </form>
  );
}

export function RejectPrematureYellowToRedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [axis, setAxis] = useState<string>("");
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system-formalized/reject-premature-yellow-to-red", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, axis, elapsedSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystemFormalized.rejectPrematureYellowToRed</h3>
      <label>TrafficLightControllerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>axis</label>
      <input type="text" value={String(axis)} onChange={(e) => setAxis(e.target.value)} />
      <label>elapsedSeconds</label>
      <input type="number" value={String(elapsedSeconds)} onChange={(e) => setElapsedSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPrematureYellowToRed</button>
    </form>
  );
}

export function RejectConflictingGreenForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [greenAxis, setGreenAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system-formalized/reject-conflicting-green", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, greenAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystemFormalized.rejectConflictingGreen</h3>
      <label>TrafficLightControllerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>greenAxis</label>
      <input type="text" value={String(greenAxis)} onChange={(e) => setGreenAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectConflictingGreen</button>
    </form>
  );
}

export function RejectUnsafeWalkActivationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system-formalized/reject-unsafe-walk-activation", {
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
      <h3>TrafficLightControllerSystemFormalized.rejectUnsafeWalkActivation</h3>
      <label>TrafficLightControllerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectUnsafeWalkActivation</button>
    </form>
  );
}

export function RejectLatePreemptionResponseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [responseTimeSeconds, setResponseTimeSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system-formalized/reject-late-preemption-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, responseTimeSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystemFormalized.rejectLatePreemptionResponse</h3>
      <label>TrafficLightControllerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>responseTimeSeconds</label>
      <input type="number" value={String(responseTimeSeconds)} onChange={(e) => setResponseTimeSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectLatePreemptionResponse</button>
    </form>
  );
}

export function RejectPhaseStartDuringPreemptionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [phaseId, setPhaseId] = useState<string>("");
  const [greenAxis, setGreenAxis] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/traffic-light-controller-system-formalized/reject-phase-start-during-preemption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, phaseId, greenAxis }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TrafficLightControllerSystemFormalized.rejectPhaseStartDuringPreemption</h3>
      <label>TrafficLightControllerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>phaseId</label>
      <input type="text" value={String(phaseId)} onChange={(e) => setPhaseId(e.target.value)} />
      <label>greenAxis</label>
      <input type="text" value={String(greenAxis)} onChange={(e) => setGreenAxis(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPhaseStartDuringPreemption</button>
    </form>
  );
}
