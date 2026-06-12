import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("alice@example.com");
  const [password, setPassword] = useState("alice123");
  const qc = useQueryClient();
  const nav = useNavigate();
  const login = useMutation({
    mutationFn: async (input: { email: string; password: string }) => {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!r.ok) throw new Error((await r.json()).error ?? "login failed");
      return r.json();
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["me"] });
      nav({ to: "/" });
    },
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };
  return (
    <div className="card" style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        {login.error && <div className="error">{(login.error as Error).message}</div>}
        <div style={{ marginTop: 16 }}>
          <button type="submit" disabled={login.isPending}>
            {login.isPending ? "Logging in…" : "Login"}
          </button>
        </div>
      </form>
      <div className="help">
        Seeded credentials: <code>alice@example.com / alice123</code> (customer),{" "}
        <code>admin@example.com / admin123</code> (operator).
      </div>
    </div>
  );
}
