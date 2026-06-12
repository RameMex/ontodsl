// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function UpdateConstraintsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [exclusions, setExclusions] = useState<string>("");
  const [preferences, setPreferences] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/constraint-manager/update-constraints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, exclusions, preferences }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ConstraintManager.updateConstraints</h3>
      <label>ConstraintManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>exclusions</label>
      <input type="text" value={String(exclusions)} onChange={(e) => setExclusions(e.target.value)} />
      <label>preferences</label>
      <input type="text" value={String(preferences)} onChange={(e) => setPreferences(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateConstraints</button>
    </form>
  );
}

export function RequestMeetingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/request-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, start, end }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.requestMeeting</h3>
      <label>MeetingSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>start</label>
      <input type="number" value={String(start)} onChange={(e) => setStart(Number(e.target.value))} />
      <label>end</label>
      <input type="number" value={String(end)} onChange={(e) => setEnd(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">requestMeeting</button>
    </form>
  );
}

export function ProposeDateForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/propose-date", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, date }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.proposeDate</h3>
      <label>MeetingSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>date</label>
      <input type="number" value={String(date)} onChange={(e) => setDate(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">proposeDate</button>
    </form>
  );
}

export function ReportConflictForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/report-conflict", {
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
      <h3>MeetingSchedulerSystem.reportConflict</h3>
      <label>MeetingSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportConflict</button>
    </form>
  );
}

export function NotifyParticipantsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/notify-participants", {
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
      <h3>MeetingSchedulerSystem.notifyParticipants</h3>
      <label>MeetingSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">notifyParticipants</button>
    </form>
  );
}

export function AcceptConstraintUpdateForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/accept-constraint-update", {
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
      <h3>MeetingSchedulerSystem.acceptConstraintUpdate</h3>
      <label>MeetingSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptConstraintUpdate</button>
    </form>
  );
}

export function ConfirmMeetingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/confirm-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, date, location }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.confirmMeeting</h3>
      <label>MeetingSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>date</label>
      <input type="number" value={String(date)} onChange={(e) => setDate(Number(e.target.value))} />
      <label>location</label>
      <input type="text" value={String(location)} onChange={(e) => setLocation(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">confirmMeeting</button>
    </form>
  );
}

export function RejectExcessiveDateRangeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-excessive-date-range", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, start, end }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.rejectExcessiveDateRange</h3>
      <label>MeetingSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>start</label>
      <input type="number" value={String(start)} onChange={(e) => setStart(Number(e.target.value))} />
      <label>end</label>
      <input type="number" value={String(end)} onChange={(e) => setEnd(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectExcessiveDateRange</button>
    </form>
  );
}

export function RejectUnretainableRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-unretainable-request", {
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
      <h3>MeetingSchedulerSystemFormalized.rejectUnretainableRequest</h3>
      <label>MeetingSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectUnretainableRequest</button>
    </form>
  );
}

export function RejectUpdateAfterConfirmationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-update-after-confirmation", {
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
      <h3>MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation</h3>
      <label>MeetingSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectUpdateAfterConfirmation</button>
    </form>
  );
}

export function LogNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [participantId, setParticipantId] = useState<string>("");
  const [dateSent, setDateSent] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/log-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, participantId, dateSent }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.logNotification</h3>
      <label>MeetingSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      <label>dateSent</label>
      <input type="number" value={String(dateSent)} onChange={(e) => setDateSent(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">logNotification</button>
    </form>
  );
}

export function EnforceDataRetentionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/enforce-data-retention", {
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
      <h3>MeetingSchedulerSystemFormalized.enforceDataRetention</h3>
      <label>MeetingSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceDataRetention</button>
    </form>
  );
}

export function ConfirmMeetingForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-store/confirm-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, date, location }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingStore.confirmMeeting</h3>
      <label>MeetingStore id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>date</label>
      <input type="number" value={String(date)} onChange={(e) => setDate(Number(e.target.value))} />
      <label>location</label>
      <input type="text" value={String(location)} onChange={(e) => setLocation(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">confirmMeeting</button>
    </form>
  );
}

export function NotifyAllForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [participants, setParticipants] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [at, setAt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-service/notify-all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, participants, date, location, at }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationService.notifyAll</h3>
      <label>NotificationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>participants</label>
      <input type="text" value={String(participants)} onChange={(e) => setParticipants(e.target.value)} />
      <label>date</label>
      <input type="number" value={String(date)} onChange={(e) => setDate(Number(e.target.value))} />
      <label>location</label>
      <input type="text" value={String(location)} onChange={(e) => setLocation(e.target.value)} />
      <label>at</label>
      <input type="number" value={String(at)} onChange={(e) => setAt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">notifyAll</button>
    </form>
  );
}

export function ReportConflictForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [initiatorId, setInitiatorId] = useState<string>("");
  const [at, setAt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-service/report-conflict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, initiatorId, at }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationService.reportConflict</h3>
      <label>NotificationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>initiatorId</label>
      <input type="text" value={String(initiatorId)} onChange={(e) => setInitiatorId(e.target.value)} />
      <label>at</label>
      <input type="number" value={String(at)} onChange={(e) => setAt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportConflict</button>
    </form>
  );
}

export function ProposeDateForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [rangeStart, setRangeStart] = useState<number>(0);
  const [rangeEnd, setRangeEnd] = useState<number>(0);
  const [exclusions, setExclusions] = useState<string>("");
  const [preferences, setPreferences] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/proposer-engine/propose-date", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, rangeStart, rangeEnd, exclusions, preferences }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ProposerEngine.proposeDate</h3>
      <label>ProposerEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>rangeStart</label>
      <input type="number" value={String(rangeStart)} onChange={(e) => setRangeStart(Number(e.target.value))} />
      <label>rangeEnd</label>
      <input type="number" value={String(rangeEnd)} onChange={(e) => setRangeEnd(Number(e.target.value))} />
      <label>exclusions</label>
      <input type="text" value={String(exclusions)} onChange={(e) => setExclusions(e.target.value)} />
      <label>preferences</label>
      <input type="text" value={String(preferences)} onChange={(e) => setPreferences(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">proposeDate</button>
    </form>
  );
}

export function OpenRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/open-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, start, end }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RequestManager.openRequest</h3>
      <label>RequestManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>start</label>
      <input type="number" value={String(start)} onChange={(e) => setStart(Number(e.target.value))} />
      <label>end</label>
      <input type="number" value={String(end)} onChange={(e) => setEnd(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">openRequest</button>
    </form>
  );
}

export function CloseRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/close-request", {
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
      <h3>RequestManager.closeRequest</h3>
      <label>RequestManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">closeRequest</button>
    </form>
  );
}
