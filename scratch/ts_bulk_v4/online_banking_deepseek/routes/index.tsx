// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function DebitAccountForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amountCents, setAmountCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/account-manager/debit-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, accountId, amountCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccountManager.debitAccount</h3>
      <label>AccountManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>accountId</label>
      <input type="text" value={String(accountId)} onChange={(e) => setAccountId(e.target.value)} />
      <label>amountCents</label>
      <input type="number" value={String(amountCents)} onChange={(e) => setAmountCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">debitAccount</button>
    </form>
  );
}

export function CreditAccountForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amountCents, setAmountCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/account-manager/credit-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, accountId, amountCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccountManager.creditAccount</h3>
      <label>AccountManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>accountId</label>
      <input type="text" value={String(accountId)} onChange={(e) => setAccountId(e.target.value)} />
      <label>amountCents</label>
      <input type="number" value={String(amountCents)} onChange={(e) => setAmountCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">creditAccount</button>
    </form>
  );
}

export function RollbackDebitForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amountCents, setAmountCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/account-manager/rollback-debit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, accountId, amountCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccountManager.rollbackDebit</h3>
      <label>AccountManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>accountId</label>
      <input type="text" value={String(accountId)} onChange={(e) => setAccountId(e.target.value)} />
      <label>amountCents</label>
      <input type="number" value={String(amountCents)} onChange={(e) => setAmountCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rollbackDebit</button>
    </form>
  );
}

export function RollbackCreditForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amountCents, setAmountCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/account-manager/rollback-credit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, accountId, amountCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccountManager.rollbackCredit</h3>
      <label>AccountManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>accountId</label>
      <input type="text" value={String(accountId)} onChange={(e) => setAccountId(e.target.value)} />
      <label>amountCents</label>
      <input type="number" value={String(amountCents)} onChange={(e) => setAmountCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rollbackCredit</button>
    </form>
  );
}

export function CheckSufficientFundsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amountCents, setAmountCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/account-manager/check-sufficient-funds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, accountId, amountCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccountManager.checkSufficientFunds</h3>
      <label>AccountManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>accountId</label>
      <input type="text" value={String(accountId)} onChange={(e) => setAccountId(e.target.value)} />
      <label>amountCents</label>
      <input type="number" value={String(amountCents)} onChange={(e) => setAmountCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkSufficientFunds</button>
    </form>
  );
}

export function GetBalancesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/account-manager/get-balances", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, accountId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AccountManager.getBalances</h3>
      <label>AccountManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>accountId</label>
      <input type="text" value={String(accountId)} onChange={(e) => setAccountId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">getBalances</button>
    </form>
  );
}

export function InitiateTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [srcId, setSrcId] = useState<string>("");
  const [dstId, setDstId] = useState<string>("");
  const [amt, setAmt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system/initiate-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, srcId, dstId, amt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystem.initiateTransfer</h3>
      <label>BankingTransactionSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>srcId</label>
      <input type="text" value={String(srcId)} onChange={(e) => setSrcId(e.target.value)} />
      <label>dstId</label>
      <input type="text" value={String(dstId)} onChange={(e) => setDstId(e.target.value)} />
      <label>amt</label>
      <input type="number" value={String(amt)} onChange={(e) => setAmt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">initiateTransfer</button>
    </form>
  );
}

export function CreateJournalEntryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [srcId, setSrcId] = useState<string>("");
  const [dstId, setDstId] = useState<string>("");
  const [amt, setAmt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system/create-journal-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, srcId, dstId, amt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystem.createJournalEntry</h3>
      <label>BankingTransactionSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>srcId</label>
      <input type="text" value={String(srcId)} onChange={(e) => setSrcId(e.target.value)} />
      <label>dstId</label>
      <input type="text" value={String(dstId)} onChange={(e) => setDstId(e.target.value)} />
      <label>amt</label>
      <input type="number" value={String(amt)} onChange={(e) => setAmt(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">createJournalEntry</button>
    </form>
  );
}

export function RecoverPendingTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [entryId, setEntryId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system/recover-pending-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, entryId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystem.recoverPendingTransfer</h3>
      <label>BankingTransactionSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>entryId</label>
      <input type="text" value={String(entryId)} onChange={(e) => setEntryId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recoverPendingTransfer</button>
    </form>
  );
}

export function ResolvePendingTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [timeoutSec, setTimeoutSec] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system/resolve-pending-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, timeoutSec }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystem.resolvePendingTransfer</h3>
      <label>BankingTransactionSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>timeoutSec</label>
      <input type="number" value={String(timeoutSec)} onChange={(e) => setTimeoutSec(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resolvePendingTransfer</button>
    </form>
  );
}

export function NotifyCustomerForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [ok, setOk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system/notify-customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, ok }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystem.notifyCustomer</h3>
      <label>BankingTransactionSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>ok</label>
      <input type="checkbox" value={String(ok)} onChange={(e) => setOk((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">notifyCustomer</button>
    </form>
  );
}

export function HealthCheckForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system/health-check", {
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
      <h3>BankingTransactionSystem.healthCheck</h3>
      <label>BankingTransactionSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">healthCheck</button>
    </form>
  );
}

export function EnforceJournalBeforeNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [journalTimestampOk, setJournalTimestampOk] = useState<boolean>(false);
  const [notificationTimestampOk, setNotificationTimestampOk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system-formalized/enforce-journal-before-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, journalTimestampOk, notificationTimestampOk }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystemFormalized.enforceJournalBeforeNotification</h3>
      <label>BankingTransactionSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>journalTimestampOk</label>
      <input type="checkbox" value={String(journalTimestampOk)} onChange={(e) => setJournalTimestampOk((e.target.value as unknown as boolean))} />
      <label>notificationTimestampOk</label>
      <input type="checkbox" value={String(notificationTimestampOk)} onChange={(e) => setNotificationTimestampOk((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceJournalBeforeNotification</button>
    </form>
  );
}

export function AuditRejectionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system-formalized/audit-rejection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystemFormalized.auditRejection</h3>
      <label>BankingTransactionSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">auditRejection</button>
    </form>
  );
}

export function EnforcePendingTtlForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [maxPendingSeconds, setMaxPendingSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system-formalized/enforce-pending-ttl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, elapsedSeconds, maxPendingSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystemFormalized.enforcePendingTtl</h3>
      <label>BankingTransactionSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>elapsedSeconds</label>
      <input type="number" value={String(elapsedSeconds)} onChange={(e) => setElapsedSeconds(Number(e.target.value))} />
      <label>maxPendingSeconds</label>
      <input type="number" value={String(maxPendingSeconds)} onChange={(e) => setMaxPendingSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforcePendingTtl</button>
    </form>
  );
}

export function SetAuditRetentionYearsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [years, setYears] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system-formalized/set-audit-retention-years", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, years }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystemFormalized.setAuditRetentionYears</h3>
      <label>BankingTransactionSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>years</label>
      <input type="number" value={String(years)} onChange={(e) => setYears(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setAuditRetentionYears</button>
    </form>
  );
}

export function SetGdprControllerNameForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system-formalized/set-gdpr-controller-name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, name }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystemFormalized.setGdprControllerName</h3>
      <label>BankingTransactionSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>name</label>
      <input type="text" value={String(name)} onChange={(e) => setName(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setGdprControllerName</button>
    </form>
  );
}

export function SetGdprDPOContactForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/banking-transaction-system-formalized/set-gdpr-dpocontact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, contact }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BankingTransactionSystemFormalized.setGdprDPOContact</h3>
      <label>BankingTransactionSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>contact</label>
      <input type="text" value={String(contact)} onChange={(e) => setContact(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">setGdprDPOContact</button>
    </form>
  );
}

export function WriteEntryForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [srcId, setSrcId] = useState<string>("");
  const [dstId, setDstId] = useState<string>("");
  const [amtCents, setAmtCents] = useState<number>(0);
  const [preSrcBalCents, setPreSrcBalCents] = useState<number>(0);
  const [postSrcBalCents, setPostSrcBalCents] = useState<number>(0);
  const [preDstBalCents, setPreDstBalCents] = useState<number>(0);
  const [postDstBalCents, setPostDstBalCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/journal-writer/write-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, srcId, dstId, amtCents, preSrcBalCents, postSrcBalCents, preDstBalCents, postDstBalCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>JournalWriter.writeEntry</h3>
      <label>JournalWriter id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>srcId</label>
      <input type="text" value={String(srcId)} onChange={(e) => setSrcId(e.target.value)} />
      <label>dstId</label>
      <input type="text" value={String(dstId)} onChange={(e) => setDstId(e.target.value)} />
      <label>amtCents</label>
      <input type="number" value={String(amtCents)} onChange={(e) => setAmtCents(Number(e.target.value))} />
      <label>preSrcBalCents</label>
      <input type="number" value={String(preSrcBalCents)} onChange={(e) => setPreSrcBalCents(Number(e.target.value))} />
      <label>postSrcBalCents</label>
      <input type="number" value={String(postSrcBalCents)} onChange={(e) => setPostSrcBalCents(Number(e.target.value))} />
      <label>preDstBalCents</label>
      <input type="number" value={String(preDstBalCents)} onChange={(e) => setPreDstBalCents(Number(e.target.value))} />
      <label>postDstBalCents</label>
      <input type="number" value={String(postDstBalCents)} onChange={(e) => setPostDstBalCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">writeEntry</button>
    </form>
  );
}

export function HasEntryForTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/journal-writer/has-entry-for-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>JournalWriter.hasEntryForTransfer</h3>
      <label>JournalWriter id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">hasEntryForTransfer</button>
    </form>
  );
}

export function GetAllEntriesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/journal-writer/get-all-entries", {
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
      <h3>JournalWriter.getAllEntries</h3>
      <label>JournalWriter id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">getAllEntries</button>
    </form>
  );
}

export function QueueNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [customerId, setCustomerId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-service/queue-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, customerId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationService.queueNotification</h3>
      <label>NotificationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>customerId</label>
      <input type="text" value={String(customerId)} onChange={(e) => setCustomerId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">queueNotification</button>
    </form>
  );
}

export function SendSuccessNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-service/send-success-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationService.sendSuccessNotification</h3>
      <label>NotificationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">sendSuccessNotification</button>
    </form>
  );
}

export function SendFailureNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-service/send-failure-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId, reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationService.sendFailureNotification</h3>
      <label>NotificationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">sendFailureNotification</button>
    </form>
  );
}

export function HasPendingNotificationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [tfrId, setTfrId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/notification-service/has-pending-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, tfrId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>NotificationService.hasPendingNotification</h3>
      <label>NotificationService id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>tfrId</label>
      <input type="text" value={String(tfrId)} onChange={(e) => setTfrId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">hasPendingNotification</button>
    </form>
  );
}

export function RecoverTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [entryId, setEntryId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/recovery-manager/recover-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, entryId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RecoveryManager.recoverTransfer</h3>
      <label>RecoveryManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>entryId</label>
      <input type="text" value={String(entryId)} onChange={(e) => setEntryId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recoverTransfer</button>
    </form>
  );
}

export function ScanForPendingEntriesForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/recovery-manager/scan-for-pending-entries", {
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
      <h3>RecoveryManager.scanForPendingEntries</h3>
      <label>RecoveryManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">scanForPendingEntries</button>
    </form>
  );
}

export function ResolveTransferActionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [flowId, setFlowId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/recovery-manager/resolve-transfer-action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, flowId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>RecoveryManager.resolveTransferAction</h3>
      <label>RecoveryManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>flowId</label>
      <input type="text" value={String(flowId)} onChange={(e) => setFlowId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">resolveTransferAction</button>
    </form>
  );
}

export function InitiateTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [srcId, setSrcId] = useState<string>("");
  const [dstId, setDstId] = useState<string>("");
  const [amtCents, setAmtCents] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/transfer-coordinator/initiate-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, srcId, dstId, amtCents }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TransferCoordinator.initiateTransfer</h3>
      <label>TransferCoordinator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>srcId</label>
      <input type="text" value={String(srcId)} onChange={(e) => setSrcId(e.target.value)} />
      <label>dstId</label>
      <input type="text" value={String(dstId)} onChange={(e) => setDstId(e.target.value)} />
      <label>amtCents</label>
      <input type="number" value={String(amtCents)} onChange={(e) => setAmtCents(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">initiateTransfer</button>
    </form>
  );
}

export function CompleteTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [flowId, setFlowId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/transfer-coordinator/complete-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, flowId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TransferCoordinator.completeTransfer</h3>
      <label>TransferCoordinator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>flowId</label>
      <input type="text" value={String(flowId)} onChange={(e) => setFlowId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">completeTransfer</button>
    </form>
  );
}

export function RollbackTransferForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [flowId, setFlowId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/transfer-coordinator/rollback-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, flowId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TransferCoordinator.rollbackTransfer</h3>
      <label>TransferCoordinator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>flowId</label>
      <input type="text" value={String(flowId)} onChange={(e) => setFlowId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rollbackTransfer</button>
    </form>
  );
}

export function CountExpiredPendingTransfersForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/transfer-coordinator/count-expired-pending-transfers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, elapsedSeconds }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TransferCoordinator.countExpiredPendingTransfers</h3>
      <label>TransferCoordinator id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>elapsedSeconds</label>
      <input type="number" value={String(elapsedSeconds)} onChange={(e) => setElapsedSeconds(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">countExpiredPendingTransfers</button>
    </form>
  );
}
