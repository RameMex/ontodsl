// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function TransitionToLoanedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-ledger/transition-to-loaned", {
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
      <h3>CopyLedger.transitionToLoaned</h3>
      <label>CopyLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToLoaned</button>
    </form>
  );
}

export function TransitionToLoanedFromReservedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-ledger/transition-to-loaned-from-reserved", {
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
      <h3>CopyLedger.transitionToLoanedFromReserved</h3>
      <label>CopyLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToLoanedFromReserved</button>
    </form>
  );
}

export function TransitionToAvailableForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-ledger/transition-to-available", {
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
      <h3>CopyLedger.transitionToAvailable</h3>
      <label>CopyLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToAvailable</button>
    </form>
  );
}

export function TransitionToAvailableFromReservedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-ledger/transition-to-available-from-reserved", {
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
      <h3>CopyLedger.transitionToAvailableFromReserved</h3>
      <label>CopyLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToAvailableFromReserved</button>
    </form>
  );
}

export function TransitionToReservedForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/copy-ledger/transition-to-reserved", {
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
      <h3>CopyLedger.transitionToReserved</h3>
      <label>CopyLedger id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">transitionToReserved</button>
    </form>
  );
}

export function ApplyLateFeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<number>(0);
  const [dueDate, setDueDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/fee-manager/apply-late-fee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, returnDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FeeManager.applyLateFee</h3>
      <label>FeeManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>returnDate</label>
      <input type="number" value={String(returnDate)} onChange={(e) => setReturnDate(parseInt(e.target.value, 10) || 0)} />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyLateFee</button>
    </form>
  );
}

export function ApplyNoFeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/fee-manager/apply-no-fee", {
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
      <h3>FeeManager.applyNoFee</h3>
      <label>FeeManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyNoFee</button>
    </form>
  );
}

export function SettleBalanceForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/fee-manager/settle-balance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>FeeManager.settleBalance</h3>
      <label>FeeManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">settleBalance</button>
    </form>
  );
}

export function RejectDueToOutstandingFeesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/fee-manager/reject-due-to-outstanding-fees", {
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
      <h3>FeeManager.rejectDueToOutstandingFees</h3>
      <label>FeeManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectDueToOutstandingFees</button>
    </form>
  );
}

export function CheckOutCopyForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [dueDate, setDueDate] = useState<number>(0);
  const [loanDate, setLoanDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/check-out-copy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, dueDate, loanDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibraryLendingSystem.checkOutCopy</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      <label>loanDate</label>
      <input type="number" value={String(loanDate)} onChange={(e) => setLoanDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkOutCopy</button>
    </form>
  );
}

export function ReturnLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<number>(0);
  const [dueDate, setDueDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/return-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, returnDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibraryLendingSystem.returnLoan</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>returnDate</label>
      <input type="number" value={String(returnDate)} onChange={(e) => setReturnDate(parseInt(e.target.value, 10) || 0)} />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">returnLoan</button>
    </form>
  );
}

export function ReturnLoanWithReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<number>(0);
  const [dueDate, setDueDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/return-loan-with-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, returnDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibraryLendingSystem.returnLoanWithReservation</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>returnDate</label>
      <input type="number" value={String(returnDate)} onChange={(e) => setReturnDate(parseInt(e.target.value, 10) || 0)} />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">returnLoanWithReservation</button>
    </form>
  );
}

export function PlaceReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/place-reservation", {
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
      <h3>LibraryLendingSystem.placeReservation</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">placeReservation</button>
    </form>
  );
}

export function ExpireReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/expire-reservation", {
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
      <h3>LibraryLendingSystem.expireReservation</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireReservation</button>
    </form>
  );
}

export function PickUpReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [dueDate, setDueDate] = useState<number>(0);
  const [pickUpDate, setPickUpDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/pick-up-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, dueDate, pickUpDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibraryLendingSystem.pickUpReservation</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      <label>pickUpDate</label>
      <input type="number" value={String(pickUpDate)} onChange={(e) => setPickUpDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">pickUpReservation</button>
    </form>
  );
}

export function PayLateFeesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/pay-late-fees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibraryLendingSystem.payLateFees</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">payLateFees</button>
    </form>
  );
}

export function RejectLoanDueToFeesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system/reject-loan-due-to-fees", {
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
      <h3>LibraryLendingSystem.rejectLoanDueToFees</h3>
      <label>LibraryLendingSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectLoanDueToFees</button>
    </form>
  );
}

export function RejectPickUpWithFeesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system-formalized/reject-pick-up-with-fees", {
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
      <h3>LibraryLendingSystemFormalized.rejectPickUpWithFees</h3>
      <label>LibraryLendingSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPickUpWithFees</button>
    </form>
  );
}

export function RejectReservationWithFeesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system-formalized/reject-reservation-with-fees", {
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
      <h3>LibraryLendingSystemFormalized.rejectReservationWithFees</h3>
      <label>LibraryLendingSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectReservationWithFees</button>
    </form>
  );
}

export function RejectStaleReservationPickUpForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system-formalized/reject-stale-reservation-pick-up", {
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
      <h3>LibraryLendingSystemFormalized.rejectStaleReservationPickUp</h3>
      <label>LibraryLendingSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectStaleReservationPickUp</button>
    </form>
  );
}

export function EnforceSingleActiveLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system-formalized/enforce-single-active-loan", {
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
      <h3>LibraryLendingSystemFormalized.enforceSingleActiveLoan</h3>
      <label>LibraryLendingSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceSingleActiveLoan</button>
    </form>
  );
}

export function EnforceLateFeeFormulaForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<number>(0);
  const [dueDate, setDueDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/library-lending-system-formalized/enforce-late-fee-formula", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, returnDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LibraryLendingSystemFormalized.enforceLateFeeFormula</h3>
      <label>LibraryLendingSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>returnDate</label>
      <input type="number" value={String(returnDate)} onChange={(e) => setReturnDate(parseInt(e.target.value, 10) || 0)} />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceLateFeeFormula</button>
    </form>
  );
}

export function OpenLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [loanDate, setLoanDate] = useState<number>(0);
  const [dueDate, setDueDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/loan-manager/open-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, loanDate, dueDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoanManager.openLoan</h3>
      <label>LoanManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>loanDate</label>
      <input type="number" value={String(loanDate)} onChange={(e) => setLoanDate(parseInt(e.target.value, 10) || 0)} />
      <label>dueDate</label>
      <input type="number" value={String(dueDate)} onChange={(e) => setDueDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">openLoan</button>
    </form>
  );
}

export function CloseLoanForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [returnDate, setReturnDate] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/loan-manager/close-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, returnDate }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoanManager.closeLoan</h3>
      <label>LoanManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>returnDate</label>
      <input type="number" value={String(returnDate)} onChange={(e) => setReturnDate(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">closeLoan</button>
    </form>
  );
}

export function CreateReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/create-reservation", {
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
      <h3>ReservationManager.createReservation</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">createReservation</button>
    </form>
  );
}

export function ActivateReservationOnReturnForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/activate-reservation-on-return", {
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
      <h3>ReservationManager.activateReservationOnReturn</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">activateReservationOnReturn</button>
    </form>
  );
}

export function ExpireReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/expire-reservation", {
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
      <h3>ReservationManager.expireReservation</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">expireReservation</button>
    </form>
  );
}

export function ConsumeReservationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reservation-manager/consume-reservation", {
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
      <h3>ReservationManager.consumeReservation</h3>
      <label>ReservationManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">consumeReservation</button>
    </form>
  );
}
