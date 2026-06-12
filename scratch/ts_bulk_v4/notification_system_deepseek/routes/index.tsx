// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function RaiseAlertForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [compositeKey, setCompositeKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/alert-manager/raise-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, compositeKey }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AlertManager.raiseAlert</h3>
      <label>AlertManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>compositeKey</label>
      <input type="text" value={String(compositeKey)} onChange={(e) => setCompositeKey(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">raiseAlert</button>
    </form>
  );
}

export function MarkDeliveredForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [compositeKey, setCompositeKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/delivery-orchestrator/mark-delivered", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, compositeKey }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DeliveryOrchestrator.markDelivered</h3>
      <label>DeliveryOrchestrator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>compositeKey</label>
      <input type="text" value={String(compositeKey)} onChange={(e) => setCompositeKey(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markDelivered</button>
    </form>
  );
}

export function MarkFailedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [compositeKey, setCompositeKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/delivery-orchestrator/mark-failed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, compositeKey }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DeliveryOrchestrator.markFailed</h3>
      <label>DeliveryOrchestrator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>compositeKey</label>
      <input type="text" value={String(compositeKey)} onChange={(e) => setCompositeKey(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markFailed</button>
    </form>
  );
}

export function DispatchNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [channels, setChannels] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system/dispatch-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, recipient, channels }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystem.dispatchNotification</h3>
      <label>NotificationDispatcherSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>recipient</label>
      <input type="text" value={String(recipient)} onChange={(e) => setRecipient(e.target.value)} />
      <label>channels</label>
      <input type="text" value={String(channels)} onChange={(e) => setChannels(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">dispatchNotification</button>
    </form>
  );
}

export function AttemptDeliveryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [channelId, setChannelId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system/attempt-delivery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, channelId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystem.attemptDelivery</h3>
      <label>NotificationDispatcherSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>channelId</label>
      <input type="text" value={String(channelId)} onChange={(e) => setChannelId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">attemptDelivery</button>
    </form>
  );
}

export function EscalateFailureForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [channelId, setChannelId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system/escalate-failure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, channelId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystem.escalateFailure</h3>
      <label>NotificationDispatcherSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>channelId</label>
      <input type="text" value={String(channelId)} onChange={(e) => setChannelId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">escalateFailure</button>
    </form>
  );
}

export function RejectInvalidChannelsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [channels, setChannels] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system-formalized/reject-invalid-channels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, channels }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystemFormalized.rejectInvalidChannels</h3>
      <label>NotificationDispatcherSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>channels</label>
      <input type="text" value={String(channels)} onChange={(e) => setChannels(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectInvalidChannels</button>
    </form>
  );
}

export function FailAfterRetryLimitForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [channelId, setChannelId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system-formalized/fail-after-retry-limit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, channelId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystemFormalized.failAfterRetryLimit</h3>
      <label>NotificationDispatcherSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>channelId</label>
      <input type="text" value={String(channelId)} onChange={(e) => setChannelId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">failAfterRetryLimit</button>
    </form>
  );
}

export function EnforceBackoffScheduleForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [attemptNumber, setAttemptNumber] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system-formalized/enforce-backoff-schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, attemptNumber }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystemFormalized.enforceBackoffSchedule</h3>
      <label>NotificationDispatcherSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>attemptNumber</label>
      <input type="number" value={String(attemptNumber)} onChange={(e) => setAttemptNumber(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceBackoffSchedule</button>
    </form>
  );
}

export function VerifyNoDuplicateDeliveryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [channelId, setChannelId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher-system-formalized/verify-no-duplicate-delivery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, channelId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery</h3>
      <label>NotificationDispatcherSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>channelId</label>
      <input type="text" value={String(channelId)} onChange={(e) => setChannelId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">verifyNoDuplicateDelivery</button>
    </form>
  );
}

export function ReceiveRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [channels, setChannels] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-ingestor/receive-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, requestId, recipient, channels }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RequestIngestor.receiveRequest</h3>
      <label>RequestIngestor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>requestId</label>
      <input type="text" value={String(requestId)} onChange={(e) => setRequestId(e.target.value)} />
      <label>recipient</label>
      <input type="text" value={String(recipient)} onChange={(e) => setRecipient(e.target.value)} />
      <label>channels</label>
      <input type="text" value={String(channels)} onChange={(e) => setChannels(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveRequest</button>
    </form>
  );
}

export function ScheduleRetryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [compositeKey, setCompositeKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/retry-scheduler/schedule-retry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, compositeKey }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RetryScheduler.scheduleRetry</h3>
      <label>RetryScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>compositeKey</label>
      <input type="text" value={String(compositeKey)} onChange={(e) => setCompositeKey(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">scheduleRetry</button>
    </form>
  );
}

export function CompleteRetryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [compositeKey, setCompositeKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/retry-scheduler/complete-retry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, compositeKey }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RetryScheduler.completeRetry</h3>
      <label>RetryScheduler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>compositeKey</label>
      <input type="text" value={String(compositeKey)} onChange={(e) => setCompositeKey(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeRetry</button>
    </form>
  );
}
