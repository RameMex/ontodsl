// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: React form skeletons — one form per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { useState, type FormEvent } from "react";

export function ApplyDeductionsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [grossPay, setGrossPay] = useState<number>(0);
  const [deductionSet, setDeductionSet] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/deduction-engine/apply-deductions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, grossPay, deductionSet }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>DeductionEngine.applyDeductions</h3>
      <label>DeductionEngine id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>grossPay</label>
      <input type="number" value={String(grossPay)} onChange={(e) => setGrossPay(Number(e.target.value))} />
      <label>deductionSet</label>
      <input type="text" value={String(deductionSet)} onChange={(e) => setDeductionSet(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyDeductions</button>
    </form>
  );
}

export function AuthorizePeriodForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/pay-period-manager/authorize-period", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, period }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayPeriodManager.authorizePeriod</h3>
      <label>PayPeriodManager id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>period</label>
      <input type="text" value={String(period)} onChange={(e) => setPeriod(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">authorizePeriod</button>
    </form>
  );
}

export function AuthorizePayPeriodForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system/authorize-pay-period", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, period }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystem.authorizePayPeriod</h3>
      <label>PayrollSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>period</label>
      <input type="text" value={String(period)} onChange={(e) => setPeriod(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">authorizePayPeriod</button>
    </form>
  );
}

export function ProcessTimesheetForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [baseRate, setBaseRate] = useState<number>(0);
  const [timesheet, setTimesheet] = useState<string>("");
  const [isExempt, setIsExempt] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system/process-timesheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, baseRate, timesheet, isExempt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystem.processTimesheet</h3>
      <label>PayrollSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>baseRate</label>
      <input type="number" value={String(baseRate)} onChange={(e) => setBaseRate(Number(e.target.value))} />
      <label>timesheet</label>
      <input type="text" value={String(timesheet)} onChange={(e) => setTimesheet(e.target.value)} />
      <label>isExempt</label>
      <input type="checkbox" value={String(isExempt)} onChange={(e) => setIsExempt((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">processTimesheet</button>
    </form>
  );
}

export function ApplyDeductionsForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [grossPay, setGrossPay] = useState<number>(0);
  const [deductionSet, setDeductionSet] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system/apply-deductions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, grossPay, deductionSet }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystem.applyDeductions</h3>
      <label>PayrollSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>grossPay</label>
      <input type="number" value={String(grossPay)} onChange={(e) => setGrossPay(Number(e.target.value))} />
      <label>deductionSet</label>
      <input type="text" value={String(deductionSet)} onChange={(e) => setDeductionSet(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">applyDeductions</button>
    </form>
  );
}

export function IssuePaystubForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [employee, setEmployee] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [grossPay, setGrossPay] = useState<number>(0);
  const [deductions, setDeductions] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system/issue-paystub", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, employee, period, grossPay, deductions }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystem.issuePaystub</h3>
      <label>PayrollSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>employee</label>
      <input type="text" value={String(employee)} onChange={(e) => setEmployee(e.target.value)} />
      <label>period</label>
      <input type="text" value={String(period)} onChange={(e) => setPeriod(e.target.value)} />
      <label>grossPay</label>
      <input type="number" value={String(grossPay)} onChange={(e) => setGrossPay(Number(e.target.value))} />
      <label>deductions</label>
      <input type="text" value={String(deductions)} onChange={(e) => setDeductions(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issuePaystub</button>
    </form>
  );
}

export function HaltForNegativeNetForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [employee, setEmployee] = useState<string>("");
  const [grossPay, setGrossPay] = useState<number>(0);
  const [deductionSum, setDeductionSum] = useState<number>(0);
  const [ticketRef, setTicketRef] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system/halt-for-negative-net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, employee, grossPay, deductionSum, ticketRef }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystem.haltForNegativeNet</h3>
      <label>PayrollSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>employee</label>
      <input type="text" value={String(employee)} onChange={(e) => setEmployee(e.target.value)} />
      <label>grossPay</label>
      <input type="number" value={String(grossPay)} onChange={(e) => setGrossPay(Number(e.target.value))} />
      <label>deductionSum</label>
      <input type="number" value={String(deductionSum)} onChange={(e) => setDeductionSum(Number(e.target.value))} />
      <label>ticketRef</label>
      <input type="text" value={String(ticketRef)} onChange={(e) => setTicketRef(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">haltForNegativeNet</button>
    </form>
  );
}

export function IssueAdjustmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [employee, setEmployee] = useState<string>("");
  const [originalPaystub, setOriginalPaystub] = useState<string>("");
  const [correctionAmount, setCorrectionAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system/issue-adjustment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, employee, originalPaystub, correctionAmount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystem.issueAdjustment</h3>
      <label>PayrollSystem id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>employee</label>
      <input type="text" value={String(employee)} onChange={(e) => setEmployee(e.target.value)} />
      <label>originalPaystub</label>
      <input type="text" value={String(originalPaystub)} onChange={(e) => setOriginalPaystub(e.target.value)} />
      <label>correctionAmount</label>
      <input type="number" value={String(correctionAmount)} onChange={(e) => setCorrectionAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issueAdjustment</button>
    </form>
  );
}

export function RejectImplausibleTimesheetForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [timesheet, setTimesheet] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system-formalized/reject-implausible-timesheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, timesheet }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystemFormalized.rejectImplausibleTimesheet</h3>
      <label>PayrollSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>timesheet</label>
      <input type="text" value={String(timesheet)} onChange={(e) => setTimesheet(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectImplausibleTimesheet</button>
    </form>
  );
}

export function RejectExcessiveDeductionForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [grossPay, setGrossPay] = useState<number>(0);
  const [deduction, setDeduction] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system-formalized/reject-excessive-deduction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, grossPay, deduction }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystemFormalized.rejectExcessiveDeduction</h3>
      <label>PayrollSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>grossPay</label>
      <input type="number" value={String(grossPay)} onChange={(e) => setGrossPay(Number(e.target.value))} />
      <label>deduction</label>
      <input type="text" value={String(deduction)} onChange={(e) => setDeduction(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectExcessiveDeduction</button>
    </form>
  );
}

export function RejectUnregisteredEmployeeForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [employee, setEmployee] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system-formalized/reject-unregistered-employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, employee }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystemFormalized.rejectUnregisteredEmployee</h3>
      <label>PayrollSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>employee</label>
      <input type="text" value={String(employee)} onChange={(e) => setEmployee(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectUnregisteredEmployee</button>
    </form>
  );
}

export function RejectStalePayPeriodForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [periodEndDateInt, setPeriodEndDateInt] = useState<number>(0);
  const [referenceDateInt, setReferenceDateInt] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/payroll-system-formalized/reject-stale-pay-period", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, periodEndDateInt, referenceDateInt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PayrollSystemFormalized.rejectStalePayPeriod</h3>
      <label>PayrollSystemFormalized id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>periodEndDateInt</label>
      <input type="number" value={String(periodEndDateInt)} onChange={(e) => setPeriodEndDateInt(parseInt(e.target.value, 10) || 0)} />
      <label>referenceDateInt</label>
      <input type="number" value={String(referenceDateInt)} onChange={(e) => setReferenceDateInt(parseInt(e.target.value, 10) || 0)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">rejectStalePayPeriod</button>
    </form>
  );
}

export function IssuePaystubForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [employee, setEmployee] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [grossPay, setGrossPay] = useState<number>(0);
  const [deductions, setDeductions] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/paystub-issuer/issue-paystub", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, employee, period, grossPay, deductions }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PaystubIssuer.issuePaystub</h3>
      <label>PaystubIssuer id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>employee</label>
      <input type="text" value={String(employee)} onChange={(e) => setEmployee(e.target.value)} />
      <label>period</label>
      <input type="text" value={String(period)} onChange={(e) => setPeriod(e.target.value)} />
      <label>grossPay</label>
      <input type="number" value={String(grossPay)} onChange={(e) => setGrossPay(Number(e.target.value))} />
      <label>deductions</label>
      <input type="text" value={String(deductions)} onChange={(e) => setDeductions(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issuePaystub</button>
    </form>
  );
}

export function IssueAdjustmentForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [employee, setEmployee] = useState<string>("");
  const [originalPaystub, setOriginalPaystub] = useState<string>("");
  const [correctionAmount, setCorrectionAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/paystub-issuer/issue-adjustment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, employee, originalPaystub, correctionAmount }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>PaystubIssuer.issueAdjustment</h3>
      <label>PaystubIssuer id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>employee</label>
      <input type="text" value={String(employee)} onChange={(e) => setEmployee(e.target.value)} />
      <label>originalPaystub</label>
      <input type="text" value={String(originalPaystub)} onChange={(e) => setOriginalPaystub(e.target.value)} />
      <label>correctionAmount</label>
      <input type="number" value={String(correctionAmount)} onChange={(e) => setCorrectionAmount(Number(e.target.value))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">issueAdjustment</button>
    </form>
  );
}

export function ComputeGrossForm() {
  const [__selfId, setSelfId] = useState<string>("");
  const [baseRate, setBaseRate] = useState<number>(0);
  const [timesheet, setTimesheet] = useState<string>("");
  const [isExempt, setIsExempt] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null); setOk(null);
    const res = await fetch("/api/timesheet-processor/compute-gross", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __selfId, baseRate, timesheet, isExempt }),
    });
    const body = await res.json();
    if (!res.ok) setError(body.error ?? "error");
    else setOk("success: " + JSON.stringify(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>TimesheetProcessor.computeGross</h3>
      <label>TimesheetProcessor id</label>
      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />
      <label>baseRate</label>
      <input type="number" value={String(baseRate)} onChange={(e) => setBaseRate(Number(e.target.value))} />
      <label>timesheet</label>
      <input type="text" value={String(timesheet)} onChange={(e) => setTimesheet(e.target.value)} />
      <label>isExempt</label>
      <input type="checkbox" value={String(isExempt)} onChange={(e) => setIsExempt((e.target.value as unknown as boolean))} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {ok && <div style={{ color: "green" }}>{ok}</div>}
      <button type="submit">computeGross</button>
    </form>
  );
}
