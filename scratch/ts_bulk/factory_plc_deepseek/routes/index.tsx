// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function DetectEStopSignalForm() {
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/estop-interrupt-handler/detect-estop-signal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EStopInterruptHandler.detectEStopSignal</h3>
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectEStopSignal</button>
    </form>
  );
}

export function ClearEStopSignalForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/estop-interrupt-handler/clear-estop-signal", {
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
      <h3>EStopInterruptHandler.clearEStopSignal</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearEStopSignal</button>
    </form>
  );
}

export function EnterFailsafeFromEStopForm() {
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/failsafe-state-manager/enter-failsafe-from-estop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FailsafeStateManager.enterFailsafeFromEStop</h3>
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enterFailsafeFromEStop</button>
    </form>
  );
}

export function EnterFailsafeFromSensorFaultForm() {
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/failsafe-state-manager/enter-failsafe-from-sensor-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FailsafeStateManager.enterFailsafeFromSensorFault</h3>
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enterFailsafeFromSensorFault</button>
    </form>
  );
}

export function ResetFailsafeModeForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/failsafe-state-manager/reset-failsafe-mode", {
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
      <h3>FailsafeStateManager.resetFailsafeMode</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetFailsafeMode</button>
    </form>
  );
}

export function RejectMotionCommandForm() {
  const [commandId, setCommandId] = useState<string>("");
  const [commandType, setCommandType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/failsafe-state-manager/reject-motion-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commandId, commandType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FailsafeStateManager.rejectMotionCommand</h3>
      <label>commandId</label>
      <input type="text" value={String(commandId)} onChange={(e) => setCommandId(e.target.value)} />
      <label>commandType</label>
      <input type="text" value={String(commandType)} onChange={(e) => setCommandType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectMotionCommand</button>
    </form>
  );
}

export function AcceptMotionCommandForm() {
  const [commandId, setCommandId] = useState<string>("");
  const [commandType, setCommandType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/failsafe-state-manager/accept-motion-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commandId, commandType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FailsafeStateManager.acceptMotionCommand</h3>
      <label>commandId</label>
      <input type="text" value={String(commandId)} onChange={(e) => setCommandId(e.target.value)} />
      <label>commandType</label>
      <input type="text" value={String(commandType)} onChange={(e) => setCommandType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptMotionCommand</button>
    </form>
  );
}

export function ReceiveResetRequestForm() {
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/manual-reset-controller/receive-reset-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ManualResetController.receiveResetRequest</h3>
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveResetRequest</button>
    </form>
  );
}

export function ConsumeResetRequestForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/manual-reset-controller/consume-reset-request", {
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
      <h3>ManualResetController.consumeResetRequest</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">consumeResetRequest</button>
    </form>
  );
}

export function DeEnergizeAllOutputsForm() {
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/motion-output-controller/de-energize-all-outputs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MotionOutputController.deEnergizeAllOutputs</h3>
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deEnergizeAllOutputs</button>
    </form>
  );
}

export function ReEnergizeAllOutputsForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/motion-output-controller/re-energize-all-outputs", {
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
      <h3>MotionOutputController.reEnergizeAllOutputs</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reEnergizeAllOutputs</button>
    </form>
  );
}

export function IssueMotionCommandForm() {
  const [outputId, setOutputId] = useState<string>("");
  const [commandType, setCommandType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/motion-output-controller/issue-motion-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ outputId, commandType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MotionOutputController.issueMotionCommand</h3>
      <label>outputId</label>
      <input type="text" value={String(outputId)} onChange={(e) => setOutputId(e.target.value)} />
      <label>commandType</label>
      <input type="text" value={String(commandType)} onChange={(e) => setCommandType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issueMotionCommand</button>
    </form>
  );
}

export function RejectMotionCommandDuringFailsafeForm() {
  const [commandId, setCommandId] = useState<string>("");
  const [commandType, setCommandType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-formalized/reject-motion-command-during-failsafe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commandId, commandType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerFormalized.rejectMotionCommandDuringFailsafe</h3>
      <label>commandId</label>
      <input type="text" value={String(commandId)} onChange={(e) => setCommandId(e.target.value)} />
      <label>commandType</label>
      <input type="text" value={String(commandType)} onChange={(e) => setCommandType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectMotionCommandDuringFailsafe</button>
    </form>
  );
}

export function EnforceEStopLatchForm() {
  const [activationTimestampMs, setActivationTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-formalized/enforce-estop-latch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activationTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerFormalized.enforceEStopLatch</h3>
      <label>activationTimestampMs</label>
      <input type="number" value={String(activationTimestampMs)} onChange={(e) => setActivationTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceEStopLatch</button>
    </form>
  );
}

export function AutoRecoverFromSensorFaultForm() {
  const [recoveryTimestampMs, setRecoveryTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-formalized/auto-recover-from-sensor-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recoveryTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerFormalized.autoRecoverFromSensorFault</h3>
      <label>recoveryTimestampMs</label>
      <input type="number" value={String(recoveryTimestampMs)} onChange={(e) => setRecoveryTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">autoRecoverFromSensorFault</button>
    </form>
  );
}

export function TransitionToFailsafeDueToSensorFaultForm() {
  const [sensorId, setSensorId] = useState<string>("");
  const [faultTimestampMs, setFaultTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-formalized/transition-to-failsafe-due-to-sensor-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sensorId, faultTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerFormalized.transitionToFailsafeDueToSensorFault</h3>
      <label>sensorId</label>
      <input type="text" value={String(sensorId)} onChange={(e) => setSensorId(e.target.value)} />
      <label>faultTimestampMs</label>
      <input type="number" value={String(faultTimestampMs)} onChange={(e) => setFaultTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToFailsafeDueToSensorFault</button>
    </form>
  );
}

export function ActivateEStopForm() {
  const [activationTimestampMs, setActivationTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-system/activate-estop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activationTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerSystem.activateEStop</h3>
      <label>activationTimestampMs</label>
      <input type="number" value={String(activationTimestampMs)} onChange={(e) => setActivationTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">activateEStop</button>
    </form>
  );
}

export function ManualResetForm() {
  const [resetTimestampMs, setResetTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-system/manual-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resetTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerSystem.manualReset</h3>
      <label>resetTimestampMs</label>
      <input type="number" value={String(resetTimestampMs)} onChange={(e) => setResetTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">manualReset</button>
    </form>
  );
}

export function DetectSensorFaultForm() {
  const [faultTimestampMs, setFaultTimestampMs] = useState<number>(0);
  const [faultReported, setFaultReported] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-system/detect-sensor-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ faultTimestampMs, faultReported }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerSystem.detectSensorFault</h3>
      <label>faultTimestampMs</label>
      <input type="number" value={String(faultTimestampMs)} onChange={(e) => setFaultTimestampMs(Number(e.target.value))} />
      <label>faultReported</label>
      <input type="checkbox" value={String(faultReported)} onChange={(e) => setFaultReported((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectSensorFault</button>
    </form>
  );
}

export function SensorFaultRecoveryForm() {
  const [recoveryTimestampMs, setRecoveryTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-system/sensor-fault-recovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recoveryTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerSystem.sensorFaultRecovery</h3>
      <label>recoveryTimestampMs</label>
      <input type="number" value={String(recoveryTimestampMs)} onChange={(e) => setRecoveryTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">sensorFaultRecovery</button>
    </form>
  );
}

export function RejectMotionCommandForm() {
  const [commandId, setCommandId] = useState<string>("");
  const [commandType, setCommandType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-system/reject-motion-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commandId, commandType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerSystem.rejectMotionCommand</h3>
      <label>commandId</label>
      <input type="text" value={String(commandId)} onChange={(e) => setCommandId(e.target.value)} />
      <label>commandType</label>
      <input type="text" value={String(commandType)} onChange={(e) => setCommandType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectMotionCommand</button>
    </form>
  );
}

export function AcceptMotionCommandForm() {
  const [commandId, setCommandId] = useState<string>("");
  const [commandType, setCommandType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-controller-system/accept-motion-command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commandId, commandType }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetyControllerSystem.acceptMotionCommand</h3>
      <label>commandId</label>
      <input type="text" value={String(commandId)} onChange={(e) => setCommandId(e.target.value)} />
      <label>commandType</label>
      <input type="text" value={String(commandType)} onChange={(e) => setCommandType(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptMotionCommand</button>
    </form>
  );
}

export function DetectSensorFaultForm() {
  const [sensorId, setSensorId] = useState<string>("");
  const [faultTimestampMs, setFaultTimestampMs] = useState<number>(0);
  const [faultReported, setFaultReported] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-sensor-manager/detect-sensor-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sensorId, faultTimestampMs, faultReported }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetySensorManager.detectSensorFault</h3>
      <label>sensorId</label>
      <input type="text" value={String(sensorId)} onChange={(e) => setSensorId(e.target.value)} />
      <label>faultTimestampMs</label>
      <input type="number" value={String(faultTimestampMs)} onChange={(e) => setFaultTimestampMs(Number(e.target.value))} />
      <label>faultReported</label>
      <input type="checkbox" value={String(faultReported)} onChange={(e) => setFaultReported((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectSensorFault</button>
    </form>
  );
}

export function ClearSensorFaultForm() {
  const [recoveryTimestampMs, setRecoveryTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/safety-sensor-manager/clear-sensor-fault", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recoveryTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>SafetySensorManager.clearSensorFault</h3>
      <label>recoveryTimestampMs</label>
      <input type="number" value={String(recoveryTimestampMs)} onChange={(e) => setRecoveryTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearSensorFault</button>
    </form>
  );
}

export function StartNextCycleForm() {
  const [cycleId, setCycleId] = useState<string>("");
  const [startTimestampMs, setStartTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/scan-cycle-synchronizer/start-next-cycle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cycleId, startTimestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ScanCycleSynchronizer.startNextCycle</h3>
      <label>cycleId</label>
      <input type="text" value={String(cycleId)} onChange={(e) => setCycleId(e.target.value)} />
      <label>startTimestampMs</label>
      <input type="number" value={String(startTimestampMs)} onChange={(e) => setStartTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">startNextCycle</button>
    </form>
  );
}

export function RecordFaultInCycleForm() {
  const [timestampMs, setTimestampMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/scan-cycle-synchronizer/record-fault-in-cycle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestampMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ScanCycleSynchronizer.recordFaultInCycle</h3>
      <label>timestampMs</label>
      <input type="number" value={String(timestampMs)} onChange={(e) => setTimestampMs(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordFaultInCycle</button>
    </form>
  );
}

export function CompleteCycleForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/scan-cycle-synchronizer/complete-cycle", {
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
      <h3>ScanCycleSynchronizer.completeCycle</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeCycle</button>
    </form>
  );
}
