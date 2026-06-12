import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/transfer")({
  component: TransferPage,
});

interface AccountRow {
  accountId: string;
  ownerId: string;
  balance: number;
  status: string;
}

interface ApiError {
  error: string;
  kind?: "InvariantViolation" | "CommitmentBreach";
  context?: string;
  commitment?: string;
  detail?: string;
  violations?: string[];
}

function TransferPage() {
  const qc = useQueryClient();
  const accounts = useQuery({
    queryKey: ["accounts"],
    queryFn: async (): Promise<AccountRow[]> => {
      const r = await fetch("/api/accounts");
      if (!r.ok) throw new Error("not authenticated");
      return r.json();
    },
  });
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [amount, setAmount] = useState("100");
  const [autoExecute, setAutoExecute] = useState(true);
  const [lastError, setLastError] = useState<ApiError | null>(null);
  const [lastOk, setLastOk] = useState<string | null>(null);

  const initiate = useMutation({
    mutationFn: async () => {
      setLastError(null);
      setLastOk(null);
      const r = await fetch("/api/transfer/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceAccountId: source,
          destinationAccountId: dest,
          amount: Number(amount),
        }),
      });
      const body = await r.json();
      if (!r.ok) throw body as ApiError;
      return body as { transferId: string; state: "PENDING" };
    },
    onSuccess: async (result) => {
      setLastOk(`✓ Transfer ${result.transferId.slice(0, 8)} initiated, state = PENDING`);
      if (autoExecute) {
        try {
          const r = await fetch("/api/transfer/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ transferId: result.transferId }),
          });
          const body = await r.json();
          if (!r.ok) throw body as ApiError;
          setLastOk(
            `✓ Transfer ${result.transferId.slice(0, 8)} executed — journal entry ${(body as { journalEntryId: string }).journalEntryId.slice(0, 8)} written before notification ${(body as { notificationId: string }).notificationId.slice(0, 8)}.`,
          );
        } catch (e) {
          setLastError(e as ApiError);
        }
      }
      await qc.invalidateQueries({ queryKey: ["accounts"] });
      await qc.invalidateQueries({ queryKey: ["transfers"] });
    },
    onError: (err) => {
      setLastError(err as ApiError);
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    initiate.mutate();
  };

  return (
    <div className="card" style={{ maxWidth: 640 }}>
      <h2>New transfer</h2>
      <form onSubmit={onSubmit}>
        <label>Source account</label>
        <select value={source} onChange={(e) => setSource(e.target.value)} required>
          <option value="">— choose source —</option>
          {accounts.data?.map((a) => (
            <option key={a.accountId} value={a.accountId}>
              {a.accountId} ({a.balance.toFixed(2)}, {a.status})
            </option>
          ))}
        </select>
        <label>Destination account</label>
        <select value={dest} onChange={(e) => setDest(e.target.value)} required>
          <option value="">— choose destination —</option>
          {accounts.data?.filter((a) => a.accountId !== source).map((a) => (
            <option key={a.accountId} value={a.accountId}>
              {a.accountId} ({a.balance.toFixed(2)}, {a.status})
            </option>
          ))}
        </select>
        <label>Amount</label>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" step="0.01" min="0" required />
        <div style={{ marginTop: 12 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              checked={autoExecute}
              onChange={(e) => setAutoExecute(e.target.checked)}
              style={{ width: "auto" }}
            />
            Auto-execute after initiate (atomic transfer + journal + notify)
          </label>
        </div>

        {lastOk && <div className="ok">{lastOk}</div>}
        {lastError && (
          <div className="error">
            <strong>{lastError.kind ?? "Error"}</strong>: {lastError.error}
            {lastError.commitment && (
              <p>
                Commitment breached: <code>{lastError.commitment}</code> — {lastError.detail}
              </p>
            )}
            {lastError.violations && (
              <pre>{lastError.violations.join("\n")}</pre>
            )}
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          <button type="submit" disabled={initiate.isPending}>
            {initiate.isPending ? "Submitting…" : "Initiate transfer"}
          </button>
        </div>
      </form>

      <div className="help" style={{ marginTop: 20 }}>
        <strong>Try these scenarios:</strong>
        <ul>
          <li>
            <strong>Atomic transfer</strong>: amount ≤ source balance, auto-execute on. Watch for the
            ordering: journal entry id is shown to confirm <code>AuditJournalCommitment</code>.
          </li>
          <li>
            <strong>NoOverdraftCommitment breach</strong>: try amount &gt; source balance — the API
            returns <code>422 CommitmentBreach: NoOverdraftCommitment</code>, no debit happens.
          </li>
          <li>
            <strong>Self-transfer rejection</strong>: pick same source/destination — blocked by
            AccountLedger invariant.
          </li>
        </ul>
      </div>
    </div>
  );
}
