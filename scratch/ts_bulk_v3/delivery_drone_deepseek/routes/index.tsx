// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function ReadSoCAndReserveForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/battery-manager/read-so-cand-reserve", {
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
      <h3>BatteryManager.readSoCAndReserve</h3>
      <label>BatteryManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">readSoCAndReserve</button>
    </form>
  );
}

export function SetReserveForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [newReserve, setNewReserve] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/battery-manager/set-reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, newReserve }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BatteryManager.setReserve</h3>
      <label>BatteryManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>newReserve</label>
      <input type="number" value={String(newReserve)} onChange={(e) => setNewReserve(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setReserve</button>
    </form>
  );
}

export function CheckSoCThresholdForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/battery-manager/check-so-cthreshold", {
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
      <h3>BatteryManager.checkSoCThreshold</h3>
      <label>BatteryManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkSoCThreshold</button>
    </form>
  );
}

export function AuthorizeTakeoffForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [currentSoC, setCurrentSoC] = useState<number>(0);
  const [computedReserve, setComputedReserve] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/drone-mission-controller/authorize-takeoff", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, currentSoC, computedReserve }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DroneMissionController.authorizeTakeoff</h3>
      <label>DroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>currentSoC</label>
      <input type="number" value={String(currentSoC)} onChange={(e) => setCurrentSoC(Number(e.target.value))} />
      <label>computedReserve</label>
      <input type="number" value={String(computedReserve)} onChange={(e) => setComputedReserve(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">authorizeTakeoff</button>
    </form>
  );
}

export function DetectGeofenceViolationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [isInsideGeofence, setIsInsideGeofence] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/drone-mission-controller/detect-geofence-violation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, isInsideGeofence }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DroneMissionController.detectGeofenceViolation</h3>
      <label>DroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>isInsideGeofence</label>
      <input type="checkbox" value={String(isInsideGeofence)} onChange={(e) => setIsInsideGeofence((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">detectGeofenceViolation</button>
    </form>
  );
}

export function MonitorBatterySoCForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [currentSoC, setCurrentSoC] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/drone-mission-controller/monitor-battery-so-c", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, currentSoC }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DroneMissionController.monitorBatterySoC</h3>
      <label>DroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>currentSoC</label>
      <input type="number" value={String(currentSoC)} onChange={(e) => setCurrentSoC(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">monitorBatterySoC</button>
    </form>
  );
}

export function CancelRTHForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [operatorConfirm, setOperatorConfirm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/drone-mission-controller/cancel-rth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, operatorConfirm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DroneMissionController.cancelRTH</h3>
      <label>DroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>operatorConfirm</label>
      <input type="text" value={String(operatorConfirm)} onChange={(e) => setOperatorConfirm(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">cancelRTH</button>
    </form>
  );
}

export function InitiateRTHFromGeofenceForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-controller/initiate-rthfrom-geofence", {
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
      <h3>FlightController.initiateRTHFromGeofence</h3>
      <label>FlightController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">initiateRTHFromGeofence</button>
    </form>
  );
}

export function InitiateRTHFromBatteryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-controller/initiate-rthfrom-battery", {
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
      <h3>FlightController.initiateRTHFromBattery</h3>
      <label>FlightController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">initiateRTHFromBattery</button>
    </form>
  );
}

export function RejectOperatorCancellationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [operatorConfirm, setOperatorConfirm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-controller/reject-operator-cancellation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, operatorConfirm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FlightController.rejectOperatorCancellation</h3>
      <label>FlightController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>operatorConfirm</label>
      <input type="text" value={String(operatorConfirm)} onChange={(e) => setOperatorConfirm(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOperatorCancellation</button>
    </form>
  );
}

export function ExecuteTakeoffForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/flight-controller/execute-takeoff", {
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
      <h3>FlightController.executeTakeoff</h3>
      <label>FlightController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">executeTakeoff</button>
    </form>
  );
}

export function RejectTakeoffDueToBatteryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [currentSoC, setCurrentSoC] = useState<number>(0);
  const [computedReserve, setComputedReserve] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/formalized-drone-mission-controller/reject-takeoff-due-to-battery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, currentSoC, computedReserve }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FormalizedDroneMissionController.rejectTakeoffDueToBattery</h3>
      <label>FormalizedDroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>currentSoC</label>
      <input type="number" value={String(currentSoC)} onChange={(e) => setCurrentSoC(Number(e.target.value))} />
      <label>computedReserve</label>
      <input type="number" value={String(computedReserve)} onChange={(e) => setComputedReserve(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectTakeoffDueToBattery</button>
    </form>
  );
}

export function EnforceGeofenceContainmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [responseTimeMs, setResponseTimeMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/formalized-drone-mission-controller/enforce-geofence-containment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, responseTimeMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FormalizedDroneMissionController.enforceGeofenceContainment</h3>
      <label>FormalizedDroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>responseTimeMs</label>
      <input type="number" value={String(responseTimeMs)} onChange={(e) => setResponseTimeMs(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceGeofenceContainment</button>
    </form>
  );
}

export function EnforceMidMissionBatteryRTHForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [currentSoC, setCurrentSoC] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/formalized-drone-mission-controller/enforce-mid-mission-battery-rth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, currentSoC }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FormalizedDroneMissionController.enforceMidMissionBatteryRTH</h3>
      <label>FormalizedDroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>currentSoC</label>
      <input type="number" value={String(currentSoC)} onChange={(e) => setCurrentSoC(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceMidMissionBatteryRTH</button>
    </form>
  );
}

export function RejectSafetyRTHCancellationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [operatorConfirm, setOperatorConfirm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/formalized-drone-mission-controller/reject-safety-rthcancellation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, operatorConfirm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FormalizedDroneMissionController.rejectSafetyRTHCancellation</h3>
      <label>FormalizedDroneMissionController id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>operatorConfirm</label>
      <input type="text" value={String(operatorConfirm)} onChange={(e) => setOperatorConfirm(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectSafetyRTHCancellation</button>
    </form>
  );
}

export function CheckPositionInsideGeofenceForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/geofence-monitor/check-position-inside-geofence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lat, lon }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>GeofenceMonitor.checkPositionInsideGeofence</h3>
      <label>GeofenceMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lat</label>
      <input type="number" value={String(lat)} onChange={(e) => setLat(Number(e.target.value))} />
      <label>lon</label>
      <input type="number" value={String(lon)} onChange={(e) => setLon(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkPositionInsideGeofence</button>
    </form>
  );
}

export function SubmitDeliveryRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [mNum, setMNum] = useState<string>("");
  const [destLat, setDestLat] = useState<number>(0);
  const [destLon, setDestLon] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/mission-planner-interface/submit-delivery-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, mNum, destLat, destLon }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MissionPlannerInterface.submitDeliveryRequest</h3>
      <label>MissionPlannerInterface id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>mNum</label>
      <input type="text" value={String(mNum)} onChange={(e) => setMNum(e.target.value)} />
      <label>destLat</label>
      <input type="number" value={String(destLat)} onChange={(e) => setDestLat(Number(e.target.value))} />
      <label>destLon</label>
      <input type="number" value={String(destLon)} onChange={(e) => setDestLon(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">submitDeliveryRequest</button>
    </form>
  );
}

export function ComputeReserveForMissionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [distKm, setDistKm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/mission-planner-interface/compute-reserve-for-mission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, distKm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MissionPlannerInterface.computeReserveForMission</h3>
      <label>MissionPlannerInterface id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>distKm</label>
      <input type="number" value={String(distKm)} onChange={(e) => setDistKm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">computeReserveForMission</button>
    </form>
  );
}
