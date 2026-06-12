// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function AddBackorderForm() {
  const [sku, setSku] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/backorder-queue/add-backorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, qty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BackorderQueue.addBackorder</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>qty</label>
      <input type="number" value={String(qty)} onChange={(e) => setQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">addBackorder</button>
    </form>
  );
}

export function RemoveFulfilledForm() {
  const [bo, setBo] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/backorder-queue/remove-fulfilled", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bo }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>BackorderQueue.removeFulfilled</h3>
      <label>bo</label>
      <input type="text" value={String(bo)} onChange={(e) => setBo(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">removeFulfilled</button>
    </form>
  );
}

export function WriteEntryForm() {
  const [sku, setSku] = useState<string>("");
  const [delta, setDelta] = useState<number>(0);
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/movement-journal/write-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, delta, reason }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MovementJournal.writeEntry</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>delta</label>
      <input type="number" value={String(delta)} onChange={(e) => setDelta(Number(e.target.value))} />
      <label>reason</label>
      <input type="text" value={String(reason)} onChange={(e) => setReason(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">writeEntry</button>
    </form>
  );
}

export function FlushEntriesForm() {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/movement-journal/flush-entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>MovementJournal.flushEntries</h3>
      <label>count</label>
      <input type="number" value={String(count)} onChange={(e) => setCount(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">flushEntries</button>
    </form>
  );
}

export function ReceiveOrderForm() {
  const [order, setOrder] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/order-manager/receive-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OrderManager.receiveOrder</h3>
      <label>order</label>
      <input type="text" value={String(order)} onChange={(e) => setOrder(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">receiveOrder</button>
    </form>
  );
}

export function TryAllocateForm() {
  const [sku, setSku] = useState<string>("");
  const [requestedQty, setRequestedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/order-manager/try-allocate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, requestedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OrderManager.tryAllocate</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>requestedQty</label>
      <input type="number" value={String(requestedQty)} onChange={(e) => setRequestedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">tryAllocate</button>
    </form>
  );
}

export function MarkAllocatedForm() {
  const [order, setOrder] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/order-manager/mark-allocated", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OrderManager.markAllocated</h3>
      <label>order</label>
      <input type="text" value={String(order)} onChange={(e) => setOrder(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markAllocated</button>
    </form>
  );
}

export function MarkRejectedForm() {
  const [order, setOrder] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/order-manager/mark-rejected", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>OrderManager.markRejected</h3>
      <label>order</label>
      <input type="text" value={String(order)} onChange={(e) => setOrder(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">markRejected</button>
    </form>
  );
}

export function ProcessRestockForm() {
  const [sku, setSku] = useState<string>("");
  const [receivedQty, setReceivedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/receiving-dock/process-restock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, receivedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReceivingDock.processRestock</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>receivedQty</label>
      <input type="number" value={String(receivedQty)} onChange={(e) => setReceivedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">processRestock</button>
    </form>
  );
}

export function RunReconciliationForm() {
  const [computedStock, setComputedStock] = useState<number>(0);
  const [cachedValue, setCachedValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reconciliation-engine/run-reconciliation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ computedStock, cachedValue }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReconciliationEngine.runReconciliation</h3>
      <label>computedStock</label>
      <input type="number" value={String(computedStock)} onChange={(e) => setComputedStock(Number(e.target.value))} />
      <label>cachedValue</label>
      <input type="number" value={String(cachedValue)} onChange={(e) => setCachedValue(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">runReconciliation</button>
    </form>
  );
}

export function ForceReconciliationForm() {
  const [computedStock, setComputedStock] = useState<number>(0);
  const [cachedValue, setCachedValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/reconciliation-engine/force-reconciliation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ computedStock, cachedValue }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ReconciliationEngine.forceReconciliation</h3>
      <label>computedStock</label>
      <input type="number" value={String(computedStock)} onChange={(e) => setComputedStock(Number(e.target.value))} />
      <label>cachedValue</label>
      <input type="number" value={String(cachedValue)} onChange={(e) => setCachedValue(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">forceReconciliation</button>
    </form>
  );
}

export function DeductStockForm() {
  const [sku, setSku] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/stock-ledger/deduct-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, qty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>StockLedger.deductStock</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>qty</label>
      <input type="number" value={String(qty)} onChange={(e) => setQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">deductStock</button>
    </form>
  );
}

export function AddStockForm() {
  const [sku, setSku] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/stock-ledger/add-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, qty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>StockLedger.addStock</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>qty</label>
      <input type="number" value={String(qty)} onChange={(e) => setQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">addStock</button>
    </form>
  );
}

export function FulfillBackorderStockForm() {
  const [sku, setSku] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/stock-ledger/fulfill-backorder-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, qty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>StockLedger.fulfillBackorderStock</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>qty</label>
      <input type="number" value={String(qty)} onChange={(e) => setQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">fulfillBackorderStock</button>
    </form>
  );
}

export function AllocateStockForm() {
  const [sku, setSku] = useState<string>("");
  const [requestedQty, setRequestedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system/allocate-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, requestedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystem.allocateStock</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>requestedQty</label>
      <input type="number" value={String(requestedQty)} onChange={(e) => setRequestedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">allocateStock</button>
    </form>
  );
}

export function RecordRestockForm() {
  const [sku, setSku] = useState<string>("");
  const [receivedQty, setReceivedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system/record-restock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, receivedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystem.recordRestock</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>receivedQty</label>
      <input type="number" value={String(receivedQty)} onChange={(e) => setReceivedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordRestock</button>
    </form>
  );
}

export function FulfillBackorderForm() {
  const [sku, setSku] = useState<string>("");
  const [backorderQty, setBackorderQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system/fulfill-backorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, backorderQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystem.fulfillBackorder</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>backorderQty</label>
      <input type="number" value={String(backorderQty)} onChange={(e) => setBackorderQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">fulfillBackorder</button>
    </form>
  );
}

export function ReconcileForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system/reconcile", {
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
      <h3>WarehouseInventorySystem.reconcile</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">reconcile</button>
    </form>
  );
}

export function RejectAllocationForm() {
  const [sku, setSku] = useState<string>("");
  const [requestedQty, setRequestedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system/reject-allocation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, requestedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystem.rejectAllocation</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>requestedQty</label>
      <input type="number" value={String(requestedQty)} onChange={(e) => setRequestedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectAllocation</button>
    </form>
  );
}

export function GuardRejectAllocationForm() {
  const [sku, setSku] = useState<string>("");
  const [requestedQty, setRequestedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system-formalized/guard-reject-allocation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, requestedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystemFormalized.guardRejectAllocation</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>requestedQty</label>
      <input type="number" value={String(requestedQty)} onChange={(e) => setRequestedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardRejectAllocation</button>
    </form>
  );
}

export function GuardJournalFlushForm() {
  const [flushCount, setFlushCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system-formalized/guard-journal-flush", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ flushCount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystemFormalized.guardJournalFlush</h3>
      <label>flushCount</label>
      <input type="number" value={String(flushCount)} onChange={(e) => setFlushCount(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardJournalFlush</button>
    </form>
  );
}

export function GuardLowStockAlertForm() {
  const [sku, setSku] = useState<string>("");
  const [requestedQty, setRequestedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system-formalized/guard-low-stock-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, requestedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystemFormalized.guardLowStockAlert</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>requestedQty</label>
      <input type="number" value={String(requestedQty)} onChange={(e) => setRequestedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardLowStockAlert</button>
    </form>
  );
}

export function GuardRejectRestockWhenJournalFullForm() {
  const [sku, setSku] = useState<string>("");
  const [receivedQty, setReceivedQty] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system-formalized/guard-reject-restock-when-journal-full", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, receivedQty }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>WarehouseInventorySystemFormalized.guardRejectRestockWhenJournalFull</h3>
      <label>sku</label>
      <input type="text" value={String(sku)} onChange={(e) => setSku(e.target.value)} />
      <label>receivedQty</label>
      <input type="number" value={String(receivedQty)} onChange={(e) => setReceivedQty(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardRejectRestockWhenJournalFull</button>
    </form>
  );
}

export function GuardForceReconciliationForm() {
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/warehouse-inventory-system-formalized/guard-force-reconciliation", {
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
      <h3>WarehouseInventorySystemFormalized.guardForceReconciliation</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">guardForceReconciliation</button>
    </form>
  );
}
