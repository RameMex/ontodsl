import { createRootRouteWithContext, Outlet, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, type QueryClient } from "@tanstack/react-query";

export interface RouterContext {
  queryClient: QueryClient;
}

interface CurrentUser {
  id: string;
  email: string;
  role: "customer" | "operator";
  displayName: string;
}

function useCurrentUser() {
  return useQuery({
    queryKey: ["me"],
    queryFn: async (): Promise<CurrentUser | null> => {
      const r = await fetch("/api/auth/me");
      if (!r.ok) return null;
      return r.json();
    },
  });
}

function Nav() {
  const { data: user } = useCurrentUser();
  const nav = useNavigate();
  const logout = useMutation({
    mutationFn: async () => {
      await fetch("/api/auth/logout", { method: "POST" });
    },
    onSuccess: () => nav({ to: "/login" }),
  });

  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/transfer">New transfer</Link>
      {user?.role === "operator" && <Link to="/admin">Admin</Link>}
      <span className="spacer" />
      {user ? (
        <>
          <span style={{ color: "var(--muted)" }}>
            {user.displayName} ({user.role})
          </span>
          <button className="secondary" onClick={() => logout.mutate()}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: function RootComponent() {
    return (
      <div className="app">
        <Nav />
        <Outlet />
      </div>
    );
  },
});
