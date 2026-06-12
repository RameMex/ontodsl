// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function HandleRideRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [pickupLat, setPickupLat] = useState<number>(0);
  const [pickupLng, setPickupLng] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dispatch-engine/handle-ride-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, pickupLat, pickupLng }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DispatchEngine.handleRideRequest</h3>
      <label>DispatchEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>pickupLat</label>
      <input type="number" value={String(pickupLat)} onChange={(e) => setPickupLat(Number(e.target.value))} />
      <label>pickupLng</label>
      <input type="number" value={String(pickupLng)} onChange={(e) => setPickupLng(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">handleRideRequest</button>
    </form>
  );
}

export function RankAndOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dispatch-engine/rank-and-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DispatchEngine.rankAndOffer</h3>
      <label>DispatchEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rankAndOffer</button>
    </form>
  );
}

export function OnOfferAcceptedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dispatch-engine/on-offer-accepted", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DispatchEngine.onOfferAccepted</h3>
      <label>DispatchEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">onOfferAccepted</button>
    </form>
  );
}

export function OnOfferExpiredForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dispatch-engine/on-offer-expired", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DispatchEngine.onOfferExpired</h3>
      <label>DispatchEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">onOfferExpired</button>
    </form>
  );
}

export function EscalateRadiusForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dispatch-engine/escalate-radius", {
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
      <h3>DispatchEngine.escalateRadius</h3>
      <label>DispatchEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">escalateRadius</button>
    </form>
  );
}

export function CancelMatchingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/dispatch-engine/cancel-matching", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DispatchEngine.cancelMatching</h3>
      <label>DispatchEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">cancelMatching</button>
    </form>
  );
}

export function UpdatePositionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-app/update-position", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, lat, lng }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverApp.updatePosition</h3>
      <label>DriverApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>lat</label>
      <input type="number" value={String(lat)} onChange={(e) => setLat(Number(e.target.value))} />
      <label>lng</label>
      <input type="number" value={String(lng)} onChange={(e) => setLng(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updatePosition</button>
    </form>
  );
}

export function AcceptOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [offerId, setOfferId] = useState<string>("");
  const [rideId, setRideId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-app/accept-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, offerId, rideId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverApp.acceptOffer</h3>
      <label>DriverApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>offerId</label>
      <input type="text" value={String(offerId)} onChange={(e) => setOfferId(e.target.value)} />
      <label>rideId</label>
      <input type="text" value={String(rideId)} onChange={(e) => setRideId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptOffer</button>
    </form>
  );
}

export function DeclineOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [offerId, setOfferId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-app/decline-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, offerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverApp.declineOffer</h3>
      <label>DriverApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>offerId</label>
      <input type="text" value={String(offerId)} onChange={(e) => setOfferId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">declineOffer</button>
    </form>
  );
}

export function BeginRideForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-app/begin-ride", {
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
      <h3>DriverApp.beginRide</h3>
      <label>DriverApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">beginRide</button>
    </form>
  );
}

export function CompleteRideForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-app/complete-ride", {
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
      <h3>DriverApp.completeRide</h3>
      <label>DriverApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeRide</button>
    </form>
  );
}

export function ReturnToIdleForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-app/return-to-idle", {
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
      <h3>DriverApp.returnToIdle</h3>
      <label>DriverApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">returnToIdle</button>
    </form>
  );
}

export function TransitionToAssignedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/transition-to-assigned", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.transitionToAssigned</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToAssigned</button>
    </form>
  );
}

export function ConfirmAssignedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/confirm-assigned", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.confirmAssigned</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">confirmAssigned</button>
    </form>
  );
}

export function TransitionToEnRouteForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/transition-to-en-route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.transitionToEnRoute</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToEnRoute</button>
    </form>
  );
}

export function TransitionToCompletedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/transition-to-completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.transitionToCompleted</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToCompleted</button>
    </form>
  );
}

export function ReturnToIdlePoolForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/return-to-idle-pool", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.returnToIdlePool</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">returnToIdlePool</button>
    </form>
  );
}

export function AcquireLockForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/acquire-lock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.acquireLock</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acquireLock</button>
    </form>
  );
}

export function ReleaseLockForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [wasSuccessful, setWasSuccessful] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/release-lock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId, wasSuccessful }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.releaseLock</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>wasSuccessful</label>
      <input type="checkbox" value={String(wasSuccessful)} onChange={(e) => setWasSuccessful((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">releaseLock</button>
    </form>
  );
}

export function RejectDoubleAssignmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/reject-double-assignment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.rejectDoubleAssignment</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDoubleAssignment</button>
    </form>
  );
}

export function RejectStateSkipForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [fromState, setFromState] = useState<string>("");
  const [toState, setToState] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/driver-state-manager/reject-state-skip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, fromState, toState }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DriverStateManager.rejectStateSkip</h3>
      <label>DriverStateManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>fromState</label>
      <input type="text" value={String(fromState)} onChange={(e) => setFromState(e.target.value)} />
      <label>toState</label>
      <input type="text" value={String(toState)} onChange={(e) => setToState(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectStateSkip</button>
    </form>
  );
}

export function IndexDriverForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/geo-spatial-index/index-driver", {
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
      <h3>GeoSpatialIndex.indexDriver</h3>
      <label>GeoSpatialIndex id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">indexDriver</button>
    </form>
  );
}

export function QueryNearbyDriversForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [centerLat, setCenterLat] = useState<number>(0);
  const [centerLng, setCenterLng] = useState<number>(0);
  const [radiusKm, setRadiusKm] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/geo-spatial-index/query-nearby-drivers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, centerLat, centerLng, radiusKm }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>GeoSpatialIndex.queryNearbyDrivers</h3>
      <label>GeoSpatialIndex id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>centerLat</label>
      <input type="number" value={String(centerLat)} onChange={(e) => setCenterLat(Number(e.target.value))} />
      <label>centerLng</label>
      <input type="number" value={String(centerLng)} onChange={(e) => setCenterLng(Number(e.target.value))} />
      <label>radiusKm</label>
      <input type="number" value={String(radiusKm)} onChange={(e) => setRadiusKm(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">queryNearbyDrivers</button>
    </form>
  );
}

export function StartMonitoringForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [startTimeMs, setStartTimeMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/latency-monitor/start-monitoring", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, startTimeMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LatencyMonitor.startMonitoring</h3>
      <label>LatencyMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>startTimeMs</label>
      <input type="number" value={String(startTimeMs)} onChange={(e) => setStartTimeMs(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">startMonitoring</button>
    </form>
  );
}

export function RecordFirstOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [currentTimeMs, setCurrentTimeMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/latency-monitor/record-first-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, currentTimeMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LatencyMonitor.recordFirstOffer</h3>
      <label>LatencyMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>currentTimeMs</label>
      <input type="number" value={String(currentTimeMs)} onChange={(e) => setCurrentTimeMs(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordFirstOffer</button>
    </form>
  );
}

export function CheckLatencyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [currentTimeMs, setCurrentTimeMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/latency-monitor/check-latency", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, currentTimeMs }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LatencyMonitor.checkLatency</h3>
      <label>LatencyMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>currentTimeMs</label>
      <input type="number" value={String(currentTimeMs)} onChange={(e) => setCurrentTimeMs(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkLatency</button>
    </form>
  );
}

export function ResetMonitorForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/latency-monitor/reset-monitor", {
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
      <h3>LatencyMonitor.resetMonitor</h3>
      <label>LatencyMonitor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resetMonitor</button>
    </form>
  );
}

export function CreateOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [rideDesc, setRideDesc] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/offer-service/create-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId, rideDesc }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OfferService.createOffer</h3>
      <label>OfferService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>rideDesc</label>
      <input type="text" value={String(rideDesc)} onChange={(e) => setRideDesc(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">createOffer</button>
    </form>
  );
}

export function AcceptOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [offerId, setOfferId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/offer-service/accept-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, offerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OfferService.acceptOffer</h3>
      <label>OfferService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>offerId</label>
      <input type="text" value={String(offerId)} onChange={(e) => setOfferId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptOffer</button>
    </form>
  );
}

export function ExpireOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [offerId, setOfferId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/offer-service/expire-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, offerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OfferService.expireOffer</h3>
      <label>OfferService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>offerId</label>
      <input type="text" value={String(offerId)} onChange={(e) => setOfferId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireOffer</button>
    </form>
  );
}

export function RejectExcessiveLatencyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [timeSinceRequest, setTimeSinceRequest] = useState<number>(0);
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/offer-service/reject-excessive-latency", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, timeSinceRequest, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OfferService.rejectExcessiveLatency</h3>
      <label>OfferService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>timeSinceRequest</label>
      <input type="number" value={String(timeSinceRequest)} onChange={(e) => setTimeSinceRequest(Number(e.target.value))} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectExcessiveLatency</button>
    </form>
  );
}

export function SubmitRideRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [pickupLat, setPickupLat] = useState<number>(0);
  const [pickupLng, setPickupLng] = useState<number>(0);
  const [destLat, setDestLat] = useState<number>(0);
  const [destLng, setDestLng] = useState<number>(0);
  const [preferences, setPreferences] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/passenger-app/submit-ride-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, pickupLat, pickupLng, destLat, destLng, preferences }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PassengerApp.submitRideRequest</h3>
      <label>PassengerApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>pickupLat</label>
      <input type="number" value={String(pickupLat)} onChange={(e) => setPickupLat(Number(e.target.value))} />
      <label>pickupLng</label>
      <input type="number" value={String(pickupLng)} onChange={(e) => setPickupLng(Number(e.target.value))} />
      <label>destLat</label>
      <input type="number" value={String(destLat)} onChange={(e) => setDestLat(Number(e.target.value))} />
      <label>destLng</label>
      <input type="number" value={String(destLng)} onChange={(e) => setDestLng(Number(e.target.value))} />
      <label>preferences</label>
      <input type="text" value={String(preferences)} onChange={(e) => setPreferences(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">submitRideRequest</button>
    </form>
  );
}

export function NotifyMatchingCompleteForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [assignedDriverId, setAssignedDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/passenger-app/notify-matching-complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, assignedDriverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PassengerApp.notifyMatchingComplete</h3>
      <label>PassengerApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>assignedDriverId</label>
      <input type="text" value={String(assignedDriverId)} onChange={(e) => setAssignedDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">notifyMatchingComplete</button>
    </form>
  );
}

export function NotifyRideCompletedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/passenger-app/notify-ride-completed", {
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
      <h3>PassengerApp.notifyRideCompleted</h3>
      <label>PassengerApp id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">notifyRideCompleted</button>
    </form>
  );
}

export function AssignDriverForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/assign-driver", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.assignDriver</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">assignDriver</button>
    </form>
  );
}

export function DriverEnRouteForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/driver-en-route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.driverEnRoute</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">driverEnRoute</button>
    </form>
  );
}

export function CompleteRideForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/complete-ride", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.completeRide</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeRide</button>
    </form>
  );
}

export function AttemptFirstOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [timeSinceRequest, setTimeSinceRequest] = useState<number>(0);
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/attempt-first-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, timeSinceRequest, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.attemptFirstOffer</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>timeSinceRequest</label>
      <input type="number" value={String(timeSinceRequest)} onChange={(e) => setTimeSinceRequest(Number(e.target.value))} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">attemptFirstOffer</button>
    </form>
  );
}

export function ExpireOfferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/expire-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.expireOffer</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireOffer</button>
    </form>
  );
}

export function EscalateRadiusForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [timeSinceRequest, setTimeSinceRequest] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/escalate-radius", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, timeSinceRequest }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.escalateRadius</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>timeSinceRequest</label>
      <input type="number" value={String(timeSinceRequest)} onChange={(e) => setTimeSinceRequest(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">escalateRadius</button>
    </form>
  );
}

export function ReturnToIdleForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system/return-to-idle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystem.returnToIdle</h3>
      <label>RideDispatchSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">returnToIdle</button>
    </form>
  );
}

export function RejectDoubleAssignmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system-formalized/reject-double-assignment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystemFormalized.rejectDoubleAssignment</h3>
      <label>RideDispatchSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDoubleAssignment</button>
    </form>
  );
}

export function RejectStateSkipForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [fromState, setFromState] = useState<string>("");
  const [toState, setToState] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system-formalized/reject-state-skip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, fromState, toState }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystemFormalized.rejectStateSkip</h3>
      <label>RideDispatchSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>fromState</label>
      <input type="text" value={String(fromState)} onChange={(e) => setFromState(e.target.value)} />
      <label>toState</label>
      <input type="text" value={String(toState)} onChange={(e) => setToState(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectStateSkip</button>
    </form>
  );
}

export function RejectExcessiveLatencyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [timeSinceRequest, setTimeSinceRequest] = useState<number>(0);
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system-formalized/reject-excessive-latency", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, timeSinceRequest, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystemFormalized.rejectExcessiveLatency</h3>
      <label>RideDispatchSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>timeSinceRequest</label>
      <input type="number" value={String(timeSinceRequest)} onChange={(e) => setTimeSinceRequest(Number(e.target.value))} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectExcessiveLatency</button>
    </form>
  );
}

export function AcquireDriverLockForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system-formalized/acquire-driver-lock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystemFormalized.acquireDriverLock</h3>
      <label>RideDispatchSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acquireDriverLock</button>
    </form>
  );
}

export function ReleaseDriverLockForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [wasSuccessful, setWasSuccessful] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system-formalized/release-driver-lock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, driverId, requestId, wasSuccessful }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystemFormalized.releaseDriverLock</h3>
      <label>RideDispatchSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>driverId</label>
      <input type="text" value={String(driverId)} onChange={(e) => setDriverId(e.target.value)} />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>wasSuccessful</label>
      <input type="checkbox" value={String(wasSuccessful)} onChange={(e) => setWasSuccessful((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">releaseDriverLock</button>
    </form>
  );
}

export function LogComplianceViolationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [violationCode, setViolationCode] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-dispatch-system-formalized/log-compliance-violation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, violationCode, detail }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideDispatchSystemFormalized.logComplianceViolation</h3>
      <label>RideDispatchSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>violationCode</label>
      <input type="text" value={String(violationCode)} onChange={(e) => setViolationCode(e.target.value)} />
      <label>detail</label>
      <input type="text" value={String(detail)} onChange={(e) => setDetail(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">logComplianceViolation</button>
    </form>
  );
}

export function StoreRideRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-registry/store-ride-request", {
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
      <h3>RideRegistry.storeRideRequest</h3>
      <label>RideRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">storeRideRequest</button>
    </form>
  );
}

export function CreateAssignmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-registry/create-assignment", {
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
      <h3>RideRegistry.createAssignment</h3>
      <label>RideRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">createAssignment</button>
    </form>
  );
}

export function CompleteRideForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/ride-registry/complete-ride", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RideRegistry.completeRide</h3>
      <label>RideRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeRide</button>
    </form>
  );
}
