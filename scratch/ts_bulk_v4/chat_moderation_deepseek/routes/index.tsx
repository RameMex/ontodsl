// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function RecordDecisionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [d, setD] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/audit-trail/record-decision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, d }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AuditTrail.recordDecision</h3>
      <label>AuditTrail id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>d</label>
      <input type="text" value={String(d)} onChange={(e) => setD(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordDecision</button>
    </form>
  );
}

export function SubmitMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [classifierConfidence, setClassifierConfidence] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/chat-moderation-system/submit-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg, classifierConfidence }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ChatModerationSystem.submitMessage</h3>
      <label>ChatModerationSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      <label>classifierConfidence</label>
      <input type="number" value={String(classifierConfidence)} onChange={(e) => setClassifierConfidence(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">submitMessage</button>
    </form>
  );
}

export function ReleaseMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/chat-moderation-system/release-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ChatModerationSystem.releaseMessage</h3>
      <label>ChatModerationSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">releaseMessage</button>
    </form>
  );
}

export function ConfirmMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/chat-moderation-system/confirm-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ChatModerationSystem.confirmMessage</h3>
      <label>ChatModerationSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">confirmMessage</button>
    </form>
  );
}

export function EscalateUnreviewedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/chat-moderation-system/escalate-unreviewed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ChatModerationSystem.escalateUnreviewed</h3>
      <label>ChatModerationSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">escalateUnreviewed</button>
    </form>
  );
}

export function RejectDuplicateMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/chat-moderation-system-formalized/reject-duplicate-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ChatModerationSystemFormalized.rejectDuplicateMessage</h3>
      <label>ChatModerationSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDuplicateMessage</button>
    </form>
  );
}

export function RejectNullConfidenceForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [confidence, setConfidence] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/chat-moderation-system-formalized/reject-null-confidence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg, confidence }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ChatModerationSystemFormalized.rejectNullConfidence</h3>
      <label>ChatModerationSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      <label>confidence</label>
      <input type="number" value={String(confidence)} onChange={(e) => setConfidence(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectNullConfidence</button>
    </form>
  );
}

export function ClassifyMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/classifier-service/classify-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ClassifierService.classifyMessage</h3>
      <label>ClassifierService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">classifyMessage</button>
    </form>
  );
}

export function EvaluateMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [confidence, setConfidence] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/decision-engine/evaluate-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg, confidence }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DecisionEngine.evaluateMessage</h3>
      <label>DecisionEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      <label>confidence</label>
      <input type="number" value={String(confidence)} onChange={(e) => setConfidence(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">evaluateMessage</button>
    </form>
  );
}

export function DeliverMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/delivery-service/deliver-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DeliveryService.deliverMessage</h3>
      <label>DeliveryService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deliverMessage</button>
    </form>
  );
}

export function EscalateUnreviewedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/escalation-service/escalate-unreviewed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>EscalationService.escalateUnreviewed</h3>
      <label>EscalationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">escalateUnreviewed</button>
    </form>
  );
}

export function AcceptMessageForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/message-ingestor/accept-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MessageIngestor.acceptMessage</h3>
      <label>MessageIngestor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">acceptMessage</button>
    </form>
  );
}

export function DisplayForReviewForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [classifierConfidence, setClassifierConfidence] = useState<number>(0);
  const [threshold, setThreshold] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/moderator-interface/display-for-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg, classifierConfidence, threshold }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ModeratorInterface.displayForReview</h3>
      <label>ModeratorInterface id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      <label>classifierConfidence</label>
      <input type="number" value={String(classifierConfidence)} onChange={(e) => setClassifierConfidence(Number(e.target.value))} />
      <label>threshold</label>
      <input type="number" value={String(threshold)} onChange={(e) => setThreshold(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">displayForReview</button>
    </form>
  );
}

export function ModeratorReleaseForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/moderator-interface/moderator-release", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ModeratorInterface.moderatorRelease</h3>
      <label>ModeratorInterface id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">moderatorRelease</button>
    </form>
  );
}

export function ModeratorConfirmHideForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/moderator-interface/moderator-confirm-hide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ModeratorInterface.moderatorConfirmHide</h3>
      <label>ModeratorInterface id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">moderatorConfirmHide</button>
    </form>
  );
}

export function EnqueueHiddenForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [submissionTimestamp, setSubmissionTimestamp] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pending-review-queue/enqueue-hidden", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg, submissionTimestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PendingReviewQueue.enqueueHidden</h3>
      <label>PendingReviewQueue id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      <label>submissionTimestamp</label>
      <input type="text" value={String(submissionTimestamp)} onChange={(e) => setSubmissionTimestamp(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enqueueHidden</button>
    </form>
  );
}

export function DequeueReleasedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pending-review-queue/dequeue-released", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PendingReviewQueue.dequeueReleased</h3>
      <label>PendingReviewQueue id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">dequeueReleased</button>
    </form>
  );
}

export function DequeueConfirmedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pending-review-queue/dequeue-confirmed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, msg }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PendingReviewQueue.dequeueConfirmed</h3>
      <label>PendingReviewQueue id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>msg</label>
      <input type="text" value={String(msg)} onChange={(e) => setMsg(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">dequeueConfirmed</button>
    </form>
  );
}
