// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function InitialiseForm() {
  const [reqId, setReqId] = useState<string>("");
  const [participantCount, setParticipantCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/constraint-aggregator/initialise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reqId, participantCount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ConstraintAggregator.initialise</h3>
      <label>reqId</label>
      <input type="text" value={String(reqId)} onChange={(e) => setReqId(e.target.value)} />
      <label>participantCount</label>
      <input type="number" value={String(participantCount)} onChange={(e) => setParticipantCount(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">initialise</button>
    </form>
  );
}

export function AcceptConstraintsForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [excluded, setExcluded] = useState<string>("");
  const [preferred, setPreferred] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/constraint-aggregator/accept-constraints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId, excluded, preferred }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ConstraintAggregator.acceptConstraints</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      <label>excluded</label>
      <input type="text" value={String(excluded)} onChange={(e) => setExcluded(e.target.value)} />
      <label>preferred</label>
      <input type="text" value={String(preferred)} onChange={(e) => setPreferred(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptConstraints</button>
    </form>
  );
}

export function ApplyConstraintUpdateForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [newExcluded, setNewExcluded] = useState<string>("");
  const [newPreferred, setNewPreferred] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/constraint-aggregator/apply-constraint-update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId, newExcluded, newPreferred }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ConstraintAggregator.applyConstraintUpdate</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      <label>newExcluded</label>
      <input type="text" value={String(newExcluded)} onChange={(e) => setNewExcluded(e.target.value)} />
      <label>newPreferred</label>
      <input type="text" value={String(newPreferred)} onChange={(e) => setNewPreferred(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyConstraintUpdate</button>
    </form>
  );
}

export function RejectOverQuotaForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/constraint-aggregator/reject-over-quota", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ConstraintAggregator.rejectOverQuota</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverQuota</button>
    </form>
  );
}

export function RejectStaleUpdateForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/constraint-aggregator/reject-stale-update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ConstraintAggregator.rejectStaleUpdate</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectStaleUpdate</button>
    </form>
  );
}

export function SelectDateForm() {
  const [candidate, setCandidate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/date-selector/select-date", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DateSelector.selectDate</h3>
      <label>candidate</label>
      <input type="text" value={String(candidate)} onChange={(e) => setCandidate(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">selectDate</button>
    </form>
  );
}

export function RecordConflictForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/date-selector/record-conflict", {
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
      <h3>DateSelector.recordConflict</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordConflict</button>
    </form>
  );
}

export function ClearProposalForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/date-selector/clear-proposal", {
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
      <h3>DateSelector.clearProposal</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">clearProposal</button>
    </form>
  );
}

export function RejectExcludedCandidateForm() {
  const [candidate, setCandidate] = useState<string>("");
  const [isExcluded, setIsExcluded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/date-selector/reject-excluded-candidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidate, isExcluded }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DateSelector.rejectExcludedCandidate</h3>
      <label>candidate</label>
      <input type="text" value={String(candidate)} onChange={(e) => setCandidate(e.target.value)} />
      <label>isExcluded</label>
      <input type="checkbox" value={String(isExcluded)} onChange={(e) => setIsExcluded((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectExcludedCandidate</button>
    </form>
  );
}

export function RequestMeetingForm() {
  const [reqId, setReqId] = useState<string>("");
  const [earliest, setEarliest] = useState<string>("");
  const [latest, setLatest] = useState<string>("");
  const [participantCount, setParticipantCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/request-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reqId, earliest, latest, participantCount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.requestMeeting</h3>
      <label>reqId</label>
      <input type="text" value={String(reqId)} onChange={(e) => setReqId(e.target.value)} />
      <label>earliest</label>
      <input type="text" value={String(earliest)} onChange={(e) => setEarliest(e.target.value)} />
      <label>latest</label>
      <input type="text" value={String(latest)} onChange={(e) => setLatest(e.target.value)} />
      <label>participantCount</label>
      <input type="number" value={String(participantCount)} onChange={(e) => setParticipantCount(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">requestMeeting</button>
    </form>
  );
}

export function SubmitConstraintsForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [excluded, setExcluded] = useState<string>("");
  const [preferred, setPreferred] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/submit-constraints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId, excluded, preferred }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.submitConstraints</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      <label>excluded</label>
      <input type="text" value={String(excluded)} onChange={(e) => setExcluded(e.target.value)} />
      <label>preferred</label>
      <input type="text" value={String(preferred)} onChange={(e) => setPreferred(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">submitConstraints</button>
    </form>
  );
}

export function ProposeDateForm() {
  const [candidate, setCandidate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/propose-date", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.proposeDate</h3>
      <label>candidate</label>
      <input type="text" value={String(candidate)} onChange={(e) => setCandidate(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">proposeDate</button>
    </form>
  );
}

export function ReportConflictForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/report-conflict", {
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
      <h3>MeetingSchedulerSystem.reportConflict</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reportConflict</button>
    </form>
  );
}

export function ConfirmMeetingForm() {
  const [loc, setLoc] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/confirm-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loc }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.confirmMeeting</h3>
      <label>loc</label>
      <input type="text" value={String(loc)} onChange={(e) => setLoc(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">confirmMeeting</button>
    </form>
  );
}

export function UpdateConstraintsForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [newExcluded, setNewExcluded] = useState<string>("");
  const [newPreferred, setNewPreferred] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system/update-constraints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId, newExcluded, newPreferred }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystem.updateConstraints</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      <label>newExcluded</label>
      <input type="text" value={String(newExcluded)} onChange={(e) => setNewExcluded(e.target.value)} />
      <label>newPreferred</label>
      <input type="text" value={String(newPreferred)} onChange={(e) => setNewPreferred(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateConstraints</button>
    </form>
  );
}

export function RejectExcludedDateForm() {
  const [candidate, setCandidate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-excluded-date", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.rejectExcludedDate</h3>
      <label>candidate</label>
      <input type="text" value={String(candidate)} onChange={(e) => setCandidate(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectExcludedDate</button>
    </form>
  );
}

export function RejectPrematureConfirmForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-premature-confirm", {
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
      <h3>MeetingSchedulerSystemFormalized.rejectPrematureConfirm</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPrematureConfirm</button>
    </form>
  );
}

export function RejectDuplicateRequestForm() {
  const [newReqId, setNewReqId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-duplicate-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newReqId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.rejectDuplicateRequest</h3>
      <label>newReqId</label>
      <input type="text" value={String(newReqId)} onChange={(e) => setNewReqId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDuplicateRequest</button>
    </form>
  );
}

export function RejectInvertedRangeForm() {
  const [earliest, setEarliest] = useState<string>("");
  const [latest, setLatest] = useState<string>("");
  const [callerAssertedInverted, setCallerAssertedInverted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-inverted-range", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ earliest, latest, callerAssertedInverted }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.rejectInvertedRange</h3>
      <label>earliest</label>
      <input type="text" value={String(earliest)} onChange={(e) => setEarliest(e.target.value)} />
      <label>latest</label>
      <input type="text" value={String(latest)} onChange={(e) => setLatest(e.target.value)} />
      <label>callerAssertedInverted</label>
      <input type="checkbox" value={String(callerAssertedInverted)} onChange={(e) => setCallerAssertedInverted((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectInvertedRange</button>
    </form>
  );
}

export function RejectStaleConstraintRetentionForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-stale-constraint-retention", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectStaleConstraintRetention</button>
    </form>
  );
}

export function RejectOverQuotaSubmissionForm() {
  const [participantId, setParticipantId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/meeting-scheduler-system-formalized/reject-over-quota-submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission</h3>
      <label>participantId</label>
      <input type="text" value={String(participantId)} onChange={(e) => setParticipantId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverQuotaSubmission</button>
    </form>
  );
}

export function DispatchConfirmationForm() {
  const [date, setDate] = useState<string>("");
  const [loc, setLoc] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher/dispatch-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, loc }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcher.dispatchConfirmation</h3>
      <label>date</label>
      <input type="text" value={String(date)} onChange={(e) => setDate(e.target.value)} />
      <label>loc</label>
      <input type="text" value={String(loc)} onChange={(e) => setLoc(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">dispatchConfirmation</button>
    </form>
  );
}

export function DispatchConflictNoticeForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher/dispatch-conflict-notice", {
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
      <h3>NotificationDispatcher.dispatchConflictNotice</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">dispatchConflictNotice</button>
    </form>
  );
}

export function RejectPrematureDispatchForm() {
  const [dateReady, setDateReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-dispatcher/reject-premature-dispatch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dateReady }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationDispatcher.rejectPrematureDispatch</h3>
      <label>dateReady</label>
      <input type="checkbox" value={String(dateReady)} onChange={(e) => setDateReady((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPrematureDispatch</button>
    </form>
  );
}

export function OpenRequestForm() {
  const [reqId, setReqId] = useState<string>("");
  const [earliest, setEarliest] = useState<string>("");
  const [latest, setLatest] = useState<string>("");
  const [participantCount, setParticipantCount] = useState<number>(0);
  const [initId, setInitId] = useState<string>("");
  const [initEmail, setInitEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/open-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reqId, earliest, latest, participantCount, initId, initEmail }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RequestManager.openRequest</h3>
      <label>reqId</label>
      <input type="text" value={String(reqId)} onChange={(e) => setReqId(e.target.value)} />
      <label>earliest</label>
      <input type="text" value={String(earliest)} onChange={(e) => setEarliest(e.target.value)} />
      <label>latest</label>
      <input type="text" value={String(latest)} onChange={(e) => setLatest(e.target.value)} />
      <label>participantCount</label>
      <input type="number" value={String(participantCount)} onChange={(e) => setParticipantCount(parseInt(e.target.value, 10) || 0)} />
      <label>initId</label>
      <input type="text" value={String(initId)} onChange={(e) => setInitId(e.target.value)} />
      <label>initEmail</label>
      <input type="text" value={String(initEmail)} onChange={(e) => setInitEmail(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">openRequest</button>
    </form>
  );
}

export function MarkConfirmedForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/mark-confirmed", {
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
      <h3>RequestManager.markConfirmed</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markConfirmed</button>
    </form>
  );
}

export function MarkConflictForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/mark-conflict", {
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
      <h3>RequestManager.markConflict</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markConflict</button>
    </form>
  );
}

export function RejectDuplicateOpenForm() {
  const [newReqId, setNewReqId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/reject-duplicate-open", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newReqId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RequestManager.rejectDuplicateOpen</h3>
      <label>newReqId</label>
      <input type="text" value={String(newReqId)} onChange={(e) => setNewReqId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDuplicateOpen</button>
    </form>
  );
}

export function RejectInvertedRangeForm() {
  const [earliest, setEarliest] = useState<string>("");
  const [latest, setLatest] = useState<string>("");
  const [callerAssertedInverted, setCallerAssertedInverted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/request-manager/reject-inverted-range", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ earliest, latest, callerAssertedInverted }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RequestManager.rejectInvertedRange</h3>
      <label>earliest</label>
      <input type="text" value={String(earliest)} onChange={(e) => setEarliest(e.target.value)} />
      <label>latest</label>
      <input type="text" value={String(latest)} onChange={(e) => setLatest(e.target.value)} />
      <label>callerAssertedInverted</label>
      <input type="checkbox" value={String(callerAssertedInverted)} onChange={(e) => setCallerAssertedInverted((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectInvertedRange</button>
    </form>
  );
}
