import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/admin")({
  component: AdminPanel,
});

interface JournalEntry {
  entryId: string;
  transferId: string;
  sourceAccountIdRef: string;
  destinationAccountIdRef: string;
  amount: number;
  preSourceBalance: number;
  postSourceBalance: number;
  createdAt: string;
}

interface Notification {
  id: string;
  transferId: string;
  customerId: string;
  message: string;
  status: string;
  createdAt: string;
}

function AdminPanel() {
  const qc = useQueryClient();
  const journal = useQuery({
    queryKey: ["journal"],
    queryFn: async (): Promise<JournalEntry[]> => {
      const r = await fetch("/api/journal");
      if (!r.ok) throw new Error("not authorized");
      return r.json();
    },
  });
  const notifs = useQuery({
    queryKey: ["notifications-admin"],
    queryFn: async (): Promise<Notification[]> => {
      const r = await fetch("/api/notifications");
      if (!r.ok) throw new Error("not authorized");
      return r.json();
    },
  });
  const sweep = useMutation({
    mutationFn: async () => {
      const r = await fetch("/api/admin/sweep", { method: "POST" });
      if (!r.ok) throw new Error("sweep failed");
      return r.json() as Promise<{ rolledBack: number }>;
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["transfers"] });
      await qc.invalidateQueries({ queryKey: ["journal"] });
      await qc.invalidateQueries({ queryKey: ["notifications-admin"] });
    },
  });

  if (journal.error || notifs.error) {
    return (
      <div className="card">
        <h2>Admin</h2>
        <div className="error">Operator role required. Log in as <code>admin@example.com</code>.</div>
      </div>
    );
  }

  // AuditJournalCommitment visualization: for each journal entry, find
  // the FIRST notification with the same transferId and confirm its
  // createdAt is >= the journal's createdAt.
  const ordered = (j: JournalEntry) => {
    const n = notifs.data?.find((x) => x.transferId === j.transferId);
    if (!n) return { ok: false, note: "no notification yet" };
    const ok = new Date(n.createdAt) >= new Date(j.createdAt);
    return { ok, note: ok ? "✓ journal before notify" : "✗ ORDERING VIOLATED" };
  };

  return (
    <>
      <div className="card">
        <h2>Bounded-latency enforcer</h2>
        <p className="help">
          Manually trigger the sweep that rolls back any PENDING transfer older than 30 seconds —
          enforces <code>BoundedLatencyCommitment</code> from <code>discovery.onto</code>.
        </p>
        <button onClick={() => sweep.mutate()} disabled={sweep.isPending}>
          {sweep.isPending ? "Sweeping…" : "Sweep stale pending"}
        </button>
        {sweep.data && (
          <div className="ok">Rolled back {sweep.data.rolledBack} stale transfer(s).</div>
        )}
      </div>

      <div className="card">
        <h2>Journal ↔ notification ordering audit</h2>
        <p className="help">
          Each row shows whether the matching notification's <code>createdAt</code> is &gt;= the
          journal entry's. If any row shows ✗, <code>AuditJournalCommitment</code> would be
          breached — by construction the service writes both inside the same SQLite TX so this
          ordering should always hold.
        </p>
        {journal.data && journal.data.length === 0 && <p>No journal entries yet.</p>}
        {journal.data && journal.data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Entry</th>
                <th>Transfer</th>
                <th>From → To</th>
                <th style={{ textAlign: "right" }}>Amount</th>
                <th>Created</th>
                <th>Ordering</th>
              </tr>
            </thead>
            <tbody>
              {journal.data.map((j) => {
                const o = ordered(j);
                return (
                  <tr key={j.entryId}>
                    <td className="balance" style={{ fontSize: 12 }}>{j.entryId.slice(0, 8)}</td>
                    <td className="balance" style={{ fontSize: 12 }}>{j.transferId.slice(0, 8)}</td>
                    <td className="balance">
                      {j.sourceAccountIdRef} → {j.destinationAccountIdRef}
                    </td>
                    <td className="balance" style={{ textAlign: "right" }}>{j.amount.toFixed(2)}</td>
                    <td style={{ fontSize: 12, color: "var(--muted)" }}>
                      {new Date(j.createdAt).toLocaleTimeString()}
                    </td>
                    <td>
                      <span className={`badge ${o.ok ? "completed" : "rolled_back"}`}>{o.note}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="card">
        <h2>Notifications (system-wide)</h2>
        {notifs.data && notifs.data.length === 0 && <p>No notifications.</p>}
        {notifs.data && notifs.data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Transfer</th>
                <th>Customer</th>
                <th>Message</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {notifs.data.map((n) => (
                <tr key={n.id}>
                  <td className="balance" style={{ fontSize: 12 }}>{n.id.slice(0, 8)}</td>
                  <td className="balance" style={{ fontSize: 12 }}>{n.transferId.slice(0, 8)}</td>
                  <td>{n.customerId}</td>
                  <td style={{ fontSize: 13 }}>{n.message}</td>
                  <td>
                    <span className={`badge ${n.status === "delivered" ? "completed" : "pending"}`}>
                      {n.status}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, color: "var(--muted)" }}>
                    {new Date(n.createdAt).toLocaleTimeString()}
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
