// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function LogTransitionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [entityId, setEntityId] = useState<string>("");
  const [fromState, setFromState] = useState<string>("");
  const [toState, setToState] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/audit-logger/log-transition", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, entityId, fromState, toState, timestamp }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AuditLogger.logTransition</h3>
      <label>AuditLogger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>entityId</label>
      <input type="text" value={String(entityId)} onChange={(e) => setEntityId(e.target.value)} />
      <label>fromState</label>
      <input type="text" value={String(fromState)} onChange={(e) => setFromState(e.target.value)} />
      <label>toState</label>
      <input type="text" value={String(toState)} onChange={(e) => setToState(e.target.value)} />
      <label>timestamp</label>
      <input type="text" value={String(timestamp)} onChange={(e) => setTimestamp(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">logTransition</button>
    </form>
  );
}

export function VerifyBorrowerEligibleForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/borrower-registry/verify-borrower-eligible", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BorrowerRegistry.verifyBorrowerEligible</h3>
      <label>BorrowerRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">verifyBorrowerEligible</button>
    </form>
  );
}

export function AccrueLateFeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/borrower-registry/accrue-late-fee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BorrowerRegistry.accrueLateFee</h3>
      <label>BorrowerRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">accrueLateFee</button>
    </form>
  );
}

export function PayFeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/borrower-registry/pay-fee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BorrowerRegistry.payFee</h3>
      <label>BorrowerRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">payFee</button>
    </form>
  );
}

export function GetOutstandingFeesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/borrower-registry/get-outstanding-fees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BorrowerRegistry.getOutstandingFees</h3>
      <label>BorrowerRegistry id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">getOutstandingFees</button>
    </form>
  );
}

export function VerifyCopyAvailableForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/verify-copy-available", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.verifyCopyAvailable</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">verifyCopyAvailable</button>
    </form>
  );
}

export function MarkCopyLoanedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/mark-copy-loaned", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, borrowerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.markCopyLoaned</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markCopyLoaned</button>
    </form>
  );
}

export function MarkCopyReturnedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/mark-copy-returned", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.markCopyReturned</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markCopyReturned</button>
    </form>
  );
}

export function MarkCopyReservedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/mark-copy-reserved", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, borrowerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.markCopyReserved</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markCopyReserved</button>
    </form>
  );
}

export function ExpireCopyReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/expire-copy-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.expireCopyReservation</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireCopyReservation</button>
    </form>
  );
}

export function DoesCopyExistForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/does-copy-exist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.doesCopyExist</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">doesCopyExist</button>
    </form>
  );
}

export function GetCopyStatusForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-inventory/get-copy-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CopyInventory.getCopyStatus</h3>
      <label>CopyInventory id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">getCopyStatus</button>
    </form>
  );
}

export function RequestLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system/request-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, borrowerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystem.requestLoan</h3>
      <label>LibrarySystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">requestLoan</button>
    </form>
  );
}

export function ReturnCopyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system/return-copy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, returnDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystem.returnCopy</h3>
      <label>LibrarySystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>returnDate</label>
      <input type="text" value={String(returnDate)} onChange={(e) => setReturnDate(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">returnCopy</button>
    </form>
  );
}

export function PlaceReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system/place-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, borrowerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystem.placeReservation</h3>
      <label>LibrarySystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">placeReservation</button>
    </form>
  );
}

export function ExpireStaleReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [reservationId, setReservationId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system/expire-stale-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, reservationId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystem.expireStaleReservation</h3>
      <label>LibrarySystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>reservationId</label>
      <input type="text" value={String(reservationId)} onChange={(e) => setReservationId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireStaleReservation</button>
    </form>
  );
}

export function PayLateFeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system/pay-late-fee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystem.payLateFee</h3>
      <label>LibrarySystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">payLateFee</button>
    </form>
  );
}

export function EnforceDebtFreeBorrowerCheckForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/enforce-debt-free-borrower-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.enforceDebtFreeBorrowerCheck</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceDebtFreeBorrowerCheck</button>
    </form>
  );
}

export function EnforceCopyAvailabilityCheckForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/enforce-copy-availability-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.enforceCopyAvailabilityCheck</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceCopyAvailabilityCheck</button>
    </form>
  );
}

export function EnforceReservationExpiryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [reservationId, setReservationId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/enforce-reservation-expiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, reservationId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.enforceReservationExpiry</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>reservationId</label>
      <input type="text" value={String(reservationId)} onChange={(e) => setReservationId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceReservationExpiry</button>
    </form>
  );
}

export function EnforceLateFeeComputationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [loanId, setLoanId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/enforce-late-fee-computation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, loanId, returnDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.enforceLateFeeComputation</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>loanId</label>
      <input type="text" value={String(loanId)} onChange={(e) => setLoanId(e.target.value)} />
      <label>returnDate</label>
      <input type="text" value={String(returnDate)} onChange={(e) => setReturnDate(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceLateFeeComputation</button>
    </form>
  );
}

export function LogCopyStateTransitionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [fromState, setFromState] = useState<string>("");
  const [toState, setToState] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/log-copy-state-transition", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, fromState, toState }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.logCopyStateTransition</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>fromState</label>
      <input type="text" value={String(fromState)} onChange={(e) => setFromState(e.target.value)} />
      <label>toState</label>
      <input type="text" value={String(toState)} onChange={(e) => setToState(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">logCopyStateTransition</button>
    </form>
  );
}

export function EnforceReservationOnLoanedOnlyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/enforce-reservation-on-loaned-only", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.enforceReservationOnLoanedOnly</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceReservationOnLoanedOnly</button>
    </form>
  );
}

export function GuardLoanRequestForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-system-formalized/guard-loan-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, borrowerId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibrarySystemFormalized.guardLoanRequest</h3>
      <label>LibrarySystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardLoanRequest</button>
    </form>
  );
}

export function RecordLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [loanId, setLoanId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/loan-ledger/record-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, borrowerId, loanId, startDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoanLedger.recordLoan</h3>
      <label>LoanLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>loanId</label>
      <input type="text" value={String(loanId)} onChange={(e) => setLoanId(e.target.value)} />
      <label>startDate</label>
      <input type="text" value={String(startDate)} onChange={(e) => setStartDate(e.target.value)} />
      <label>dueDate</label>
      <input type="text" value={String(dueDate)} onChange={(e) => setDueDate(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordLoan</button>
    </form>
  );
}

export function ProcessReturnForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<number>(0);
  const [dueDate, setDueDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/loan-ledger/process-return", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, returnDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoanLedger.processReturn</h3>
      <label>LoanLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>returnDate</label>
      <input type="number" value={String(returnDate)} onChange={(e) => setReturnDate(Number(e.target.value))} />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">processReturn</button>
    </form>
  );
}

export function IsCopyOnLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/loan-ledger/is-copy-on-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoanLedger.isCopyOnLoan</h3>
      <label>LoanLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">isCopyOnLoan</button>
    </form>
  );
}

export function GetBorrowerOfCopyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/loan-ledger/get-borrower-of-copy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoanLedger.getBorrowerOfCopy</h3>
      <label>LoanLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">getBorrowerOfCopy</button>
    </form>
  );
}

export function PlaceReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [borrowerId, setBorrowerId] = useState<string>("");
  const [placedDate, setPlacedDate] = useState<string>("");
  const [reservationId, setReservationId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/place-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId, borrowerId, placedDate, reservationId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReservationManager.placeReservation</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      <label>borrowerId</label>
      <input type="text" value={String(borrowerId)} onChange={(e) => setBorrowerId(e.target.value)} />
      <label>placedDate</label>
      <input type="text" value={String(placedDate)} onChange={(e) => setPlacedDate(e.target.value)} />
      <label>reservationId</label>
      <input type="text" value={String(reservationId)} onChange={(e) => setReservationId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">placeReservation</button>
    </form>
  );
}

export function HasPendingReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/has-pending-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReservationManager.hasPendingReservation</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">hasPendingReservation</button>
    </form>
  );
}

export function GetNextReservationBorrowerForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [copyId, setCopyId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/get-next-reservation-borrower", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, copyId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReservationManager.getNextReservationBorrower</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>copyId</label>
      <input type="text" value={String(copyId)} onChange={(e) => setCopyId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">getNextReservationBorrower</button>
    </form>
  );
}

export function ExpireOldReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [reservationId, setReservationId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/expire-old-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, reservationId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReservationManager.expireOldReservation</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>reservationId</label>
      <input type="text" value={String(reservationId)} onChange={(e) => setReservationId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireOldReservation</button>
    </form>
  );
}
