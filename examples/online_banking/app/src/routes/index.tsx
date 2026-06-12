import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

interface AccountRow {
  accountId: string;
  ownerId: string;
  balance: number;
  status: string;
}

interface TransferRow {
  transferId: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
  state: "IDLE" | "PENDING" | "COMPLETED" | "ROLLED_BACK";
  initiatedAt: string | null;
  resolvedAt: string | null;
}

function DashboardPage() {
  const accounts = useQuery({
    queryKey: ["accounts"],
    queryFn: async (): Promise<AccountRow[]> => {
      const r = await fetch("/api/accounts");
      if (!r.ok) throw new Error("not authenticated");
      return r.json();
    },
  });
  const transfers = useQuery({
    queryKey: ["transfers"],
    queryFn: async (): Promise<TransferRow[]> => {
      const r = await fetch("/api/transfers");
      if (!r.ok) throw new Error("not authenticated");
      return r.json();
    },
    refetchInterval: 5000,
  });

  if (accounts.error || transfers.error) {
    return (
      <div className="card">
        <h2>Dashboard</h2>
        <div className="error">Not authenticated — please log in.</div>
      </div>
    );
  }

  return (
    <>
      <div className="card">
        <h2>Accounts</h2>
        {accounts.isLoading && <p>Loading…</p>}
        {accounts.data && accounts.data.length === 0 && <p>No accounts.</p>}
        {accounts.data && accounts.data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Account ID</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.data.map((a) => (
                <tr key={a.accountId}>
                  <td className="balance">{a.accountId}</td>
                  <td>
                    <span className={`badge ${a.status.toLowerCase()}`}>{a.status}</span>
                  </td>
                  <td className="balance" style={{ textAlign: "right" }}>
                    {a.balance.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="card">
        <h2>Recent transfers</h2>
        {transfers.data && transfers.data.length === 0 && <p>No transfers yet.</p>}
        {transfers.data && transfers.data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Transfer ID</th>
                <th>From</th>
                <th>To</th>
                <th style={{ textAlign: "right" }}>Amount</th>
                <th>State</th>
                <th>Initiated</th>
              </tr>
            </thead>
            <tbody>
              {transfers.data.map((t) => (
                <tr key={t.transferId}>
                  <td className="balance" style={{ fontSize: 12 }}>
                    {t.transferId.slice(0, 8)}
                  </td>
                  <td className="balance">{t.sourceAccountId}</td>
                  <td className="balance">{t.destinationAccountId}</td>
                  <td className="balance" style={{ textAlign: "right" }}>
                    {t.amount.toFixed(2)}
                  </td>
                  <td>
                    <span className={`badge ${t.state.toLowerCase()}`}>{t.state}</span>
                  </td>
                  <td style={{ fontSize: 12, color: "var(--muted)" }}>
                    {t.initiatedAt ? new Date(t.initiatedAt).toLocaleTimeString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
