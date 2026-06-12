// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function BookAppointmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [patientId, setPatientId] = useState<string>("");
  const [clinicianId, setClinicianId] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");
  const [window, setWindow] = useState<string>("");
  const [slotStart, setSlotStart] = useState<number>(0);
  const [slotEnd, setSlotEnd] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-booker/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, patientId, clinicianId, serviceName, window, slotStart, slotEnd }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentBooker.bookAppointment</h3>
      <label>AppointmentBooker id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>patientId</label>
      <input type="text" value={String(patientId)} onChange={(e) => setPatientId(e.target.value)} />
      <label>clinicianId</label>
      <input type="text" value={String(clinicianId)} onChange={(e) => setClinicianId(e.target.value)} />
      <label>serviceName</label>
      <input type="text" value={String(serviceName)} onChange={(e) => setServiceName(e.target.value)} />
      <label>window</label>
      <input type="text" value={String(window)} onChange={(e) => setWindow(e.target.value)} />
      <label>slotStart</label>
      <input type="number" value={String(slotStart)} onChange={(e) => setSlotStart(Number(e.target.value))} />
      <label>slotEnd</label>
      <input type="number" value={String(slotEnd)} onChange={(e) => setSlotEnd(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">bookAppointment</button>
    </form>
  );
}

export function BookAppointmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [patientId, setPatientId] = useState<string>("");
  const [clinicianId, setClinicianId] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");
  const [window, setWindow] = useState<string>("");
  const [slotStart, setSlotStart] = useState<number>(0);
  const [slotEnd, setSlotEnd] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, patientId, clinicianId, serviceName, window, slotStart, slotEnd }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystem.bookAppointment</h3>
      <label>AppointmentSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>patientId</label>
      <input type="text" value={String(patientId)} onChange={(e) => setPatientId(e.target.value)} />
      <label>clinicianId</label>
      <input type="text" value={String(clinicianId)} onChange={(e) => setClinicianId(e.target.value)} />
      <label>serviceName</label>
      <input type="text" value={String(serviceName)} onChange={(e) => setServiceName(e.target.value)} />
      <label>window</label>
      <input type="text" value={String(window)} onChange={(e) => setWindow(e.target.value)} />
      <label>slotStart</label>
      <input type="number" value={String(slotStart)} onChange={(e) => setSlotStart(Number(e.target.value))} />
      <label>slotEnd</label>
      <input type="number" value={String(slotEnd)} onChange={(e) => setSlotEnd(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">bookAppointment</button>
    </form>
  );
}

export function CancelAppointmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [slotId, setSlotId] = useState<string>("");
  const [cancellationTimeEpoch, setCancellationTimeEpoch] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system/cancel-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, slotId, cancellationTimeEpoch }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystem.cancelAppointment</h3>
      <label>AppointmentSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>slotId</label>
      <input type="text" value={String(slotId)} onChange={(e) => setSlotId(e.target.value)} />
      <label>cancellationTimeEpoch</label>
      <input type="number" value={String(cancellationTimeEpoch)} onChange={(e) => setCancellationTimeEpoch(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">cancelAppointment</button>
    </form>
  );
}

export function UpdateAvailabilityForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [clinicianId, setClinicianId] = useState<string>("");
  const [newWindow, setNewWindow] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system/update-availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, clinicianId, newWindow }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystem.updateAvailability</h3>
      <label>AppointmentSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>clinicianId</label>
      <input type="text" value={String(clinicianId)} onChange={(e) => setClinicianId(e.target.value)} />
      <label>newWindow</label>
      <input type="text" value={String(newWindow)} onChange={(e) => setNewWindow(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateAvailability</button>
    </form>
  );
}

export function RecordLateFeePaymentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [feeEventId, setFeeEventId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system/record-late-fee-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, feeEventId, amount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystem.recordLateFeePayment</h3>
      <label>AppointmentSchedulerSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>feeEventId</label>
      <input type="text" value={String(feeEventId)} onChange={(e) => setFeeEventId(e.target.value)} />
      <label>amount</label>
      <input type="number" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordLateFeePayment</button>
    </form>
  );
}

export function RejectOverlappingClinicianForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [clinicianId, setClinicianId] = useState<string>("");
  const [proposedSlot, setProposedSlot] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system-formalized/reject-overlapping-clinician", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, clinicianId, proposedSlot }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystemFormalized.rejectOverlappingClinician</h3>
      <label>AppointmentSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>clinicianId</label>
      <input type="text" value={String(clinicianId)} onChange={(e) => setClinicianId(e.target.value)} />
      <label>proposedSlot</label>
      <input type="text" value={String(proposedSlot)} onChange={(e) => setProposedSlot(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOverlappingClinician</button>
    </form>
  );
}

export function RejectOutsideAvailabilityWindowForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [appointment, setAppointment] = useState<string>("");
  const [window, setWindow] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system-formalized/reject-outside-availability-window", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, appointment, window }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow</h3>
      <label>AppointmentSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>appointment</label>
      <input type="text" value={String(appointment)} onChange={(e) => setAppointment(e.target.value)} />
      <label>window</label>
      <input type="text" value={String(window)} onChange={(e) => setWindow(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectOutsideAvailabilityWindow</button>
    </form>
  );
}

export function RejectPatientConflictForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [patientId, setPatientId] = useState<string>("");
  const [proposedSlot, setProposedSlot] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system-formalized/reject-patient-conflict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, patientId, proposedSlot }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystemFormalized.rejectPatientConflict</h3>
      <label>AppointmentSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>patientId</label>
      <input type="text" value={String(patientId)} onChange={(e) => setPatientId(e.target.value)} />
      <label>proposedSlot</label>
      <input type="text" value={String(proposedSlot)} onChange={(e) => setProposedSlot(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectPatientConflict</button>
    </form>
  );
}

export function EnforceLateCancellationFeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [appointment, setAppointment] = useState<string>("");
  const [cancellationTimeEpoch, setCancellationTimeEpoch] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system-formalized/enforce-late-cancellation-fee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, appointment, cancellationTimeEpoch }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystemFormalized.enforceLateCancellationFee</h3>
      <label>AppointmentSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>appointment</label>
      <input type="text" value={String(appointment)} onChange={(e) => setAppointment(e.target.value)} />
      <label>cancellationTimeEpoch</label>
      <input type="number" value={String(cancellationTimeEpoch)} onChange={(e) => setCancellationTimeEpoch(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">enforceLateCancellationFee</button>
    </form>
  );
}

export function FlagAppointmentsOutsideNewWindowForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [clinicianId, setClinicianId] = useState<string>("");
  const [oldWindow, setOldWindow] = useState<string>("");
  const [newWindow, setNewWindow] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/appointment-scheduler-system-formalized/flag-appointments-outside-new-window", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, clinicianId, oldWindow, newWindow }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow</h3>
      <label>AppointmentSchedulerSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>clinicianId</label>
      <input type="text" value={String(clinicianId)} onChange={(e) => setClinicianId(e.target.value)} />
      <label>oldWindow</label>
      <input type="text" value={String(oldWindow)} onChange={(e) => setOldWindow(e.target.value)} />
      <label>newWindow</label>
      <input type="text" value={String(newWindow)} onChange={(e) => setNewWindow(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">flagAppointmentsOutsideNewWindow</button>
    </form>
  );
}

export function UpdateAvailabilityForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [clinicianId, setClinicianId] = useState<string>("");
  const [newWindow, setNewWindow] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/availability-manager/update-availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, clinicianId, newWindow }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AvailabilityManager.updateAvailability</h3>
      <label>AvailabilityManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>clinicianId</label>
      <input type="text" value={String(clinicianId)} onChange={(e) => setClinicianId(e.target.value)} />
      <label>newWindow</label>
      <input type="text" value={String(newWindow)} onChange={(e) => setNewWindow(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">updateAvailability</button>
    </form>
  );
}

export function CheckSlotWithinWindowForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [slot, setSlot] = useState<string>("");
  const [window, setWindow] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/availability-manager/check-slot-within-window", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, slot, window }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>AvailabilityManager.checkSlotWithinWindow</h3>
      <label>AvailabilityManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>slot</label>
      <input type="text" value={String(slot)} onChange={(e) => setSlot(e.target.value)} />
      <label>window</label>
      <input type="text" value={String(window)} onChange={(e) => setWindow(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">checkSlotWithinWindow</button>
    </form>
  );
}

export function CancelAppointmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [slot, setSlot] = useState<string>("");
  const [cancellationTimeEpoch, setCancellationTimeEpoch] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/cancellation-handler/cancel-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, slot, cancellationTimeEpoch }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CancellationHandler.cancelAppointment</h3>
      <label>CancellationHandler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>slot</label>
      <input type="text" value={String(slot)} onChange={(e) => setSlot(e.target.value)} />
      <label>cancellationTimeEpoch</label>
      <input type="number" value={String(cancellationTimeEpoch)} onChange={(e) => setCancellationTimeEpoch(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">cancelAppointment</button>
    </form>
  );
}

export function IsLateCancellationForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [slot, setSlot] = useState<string>("");
  const [cancellationTimeEpoch, setCancellationTimeEpoch] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/cancellation-handler/is-late-cancellation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, slot, cancellationTimeEpoch }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>CancellationHandler.isLateCancellation</h3>
      <label>CancellationHandler id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>slot</label>
      <input type="text" value={String(slot)} onChange={(e) => setSlot(e.target.value)} />
      <label>cancellationTimeEpoch</label>
      <input type="number" value={String(cancellationTimeEpoch)} onChange={(e) => setCancellationTimeEpoch(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">isLateCancellation</button>
    </form>
  );
}

export function RecordLateFeePaymentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [feeEvent, setFeeEvent] = useState<string>("");
  const [patientBillingId, setPatientBillingId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/late-fee-recorder/record-late-fee-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, feeEvent, patientBillingId }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LateFeeRecorder.recordLateFeePayment</h3>
      <label>LateFeeRecorder id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>feeEvent</label>
      <input type="text" value={String(feeEvent)} onChange={(e) => setFeeEvent(e.target.value)} />
      <label>patientBillingId</label>
      <input type="text" value={String(patientBillingId)} onChange={(e) => setPatientBillingId(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">recordLateFeePayment</button>
    </form>
  );
}
