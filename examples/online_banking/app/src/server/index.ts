/**
 * Plain Node HTTP server for the API. Lives alongside the Vite
 * frontend (started together by `npm run dev` via `scripts/dev.ts`).
 * Routes are spelled out explicitly — no router framework, by design,
 * to keep the demo's dependency surface minimal.
 *
 * All mutation endpoints go through services/* which call the
 * ontodls-generated `validate*()` helpers. The API surface is the
 * narrowest possible: one route per .onto event.
 */
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { db, accounts, transfers, journalEntries, notifications, users } from "../db/index.js";
import { eq, desc } from "drizzle-orm";
import {
  initiateTransfer,
  executeTransfer,
  rollbackTransfer,
  sweepStalePendingTransfers,
  InvariantViolation,
  CommitmentBreach,
} from "../services/transfer.js";
import { verifySession, loadUserById, loadUserByEmail, verifyPassword, signSession, hashPassword } from "../services/auth.js";
import { randomUUID } from "node:crypto";
import { z } from "zod";

type Handler = (req: IncomingMessage, res: ServerResponse, body: unknown, ctx: ReqCtx) => Promise<void> | void;

interface ReqCtx {
  userId: string | null;
  role: "customer" | "operator" | null;
}

function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function parseCookies(req: IncomingMessage): Record<string, string> {
  const out: Record<string, string> = {};
  const raw = req.headers.cookie;
  if (!raw) return out;
  for (const part of raw.split(";")) {
    const [k, v] = part.trim().split("=");
    if (k && v) out[k] = decodeURIComponent(v);
  }
  return out;
}

function requireAuth(ctx: ReqCtx): asserts ctx is { userId: string; role: "customer" | "operator" } {
  if (!ctx.userId) throw new HttpError(401, "unauthenticated");
}

function requireOperator(ctx: ReqCtx): asserts ctx is { userId: string; role: "operator" } {
  requireAuth(ctx);
  if (ctx.role !== "operator") throw new HttpError(403, "operator role required");
}

class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}

// ─── Route table ──────────────────────────────────────────────────────

const initiateSchema = z.object({
  sourceAccountId: z.string().min(1),
  destinationAccountId: z.string().min(1),
  amount: z.number().positive(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const handlers: Record<string, Handler> = {
  "POST /api/auth/login": async (_req, res, body) => {
    const input = loginSchema.parse(body);
    const user = await loadUserByEmail(input.email);
    if (!user || !verifyPassword(input.password, user.passwordHash)) {
      throw new HttpError(401, "invalid credentials");
    }
    const token = signSession({ userId: user.id, role: user.role, issuedAt: Date.now() });
    res.setHeader("Set-Cookie", `session=${token}; Path=/; HttpOnly; SameSite=Lax`);
    json(res, 200, { id: user.id, email: user.email, role: user.role, displayName: user.displayName });
  },

  "POST /api/auth/logout": async (_req, res) => {
    res.setHeader("Set-Cookie", "session=; Path=/; HttpOnly; Max-Age=0");
    json(res, 200, { ok: true });
  },

  "GET /api/auth/me": async (_req, res, _b, ctx) => {
    if (!ctx.userId) return json(res, 200, null);
    const u = await loadUserById(ctx.userId);
    json(res, 200, u ? { id: u.id, email: u.email, role: u.role, displayName: u.displayName } : null);
  },

  "GET /api/accounts": async (_req, res, _b, ctx) => {
    requireAuth(ctx);
    const rows = ctx.role === "operator"
      ? await db.select().from(accounts)
      : await db.select().from(accounts).where(eq(accounts.ownerId, ctx.userId));
    json(res, 200, rows);
  },

  "POST /api/transfer/initiate": async (_req, res, body, ctx) => {
    requireAuth(ctx);
    const input = initiateSchema.parse(body);
    if (ctx.role === "customer") {
      const src = await db.select().from(accounts).where(eq(accounts.accountId, input.sourceAccountId)).get();
      if (!src || src.ownerId !== ctx.userId) throw new HttpError(403, "not your source account");
    }
    const result = await initiateTransfer(input);
    json(res, 200, result);
  },

  "POST /api/transfer/execute": async (_req, res, body, ctx) => {
    requireAuth(ctx);
    const { transferId } = z.object({ transferId: z.string() }).parse(body);
    const result = await executeTransfer(transferId);
    json(res, 200, result);
  },

  "POST /api/transfer/rollback": async (_req, res, body, ctx) => {
    requireOperator(ctx);
    const { transferId, reason } = z.object({
      transferId: z.string(),
      reason: z.string().min(1),
    }).parse(body);
    const result = await rollbackTransfer(transferId, reason);
    json(res, 200, result);
  },

  "GET /api/transfers": async (_req, res, _b, ctx) => {
    requireAuth(ctx);
    const rows = await db.select().from(transfers).orderBy(desc(transfers.initiatedAt)).limit(50);
    json(res, 200, rows);
  },

  "GET /api/journal": async (_req, res, _b, ctx) => {
    requireOperator(ctx);
    const rows = await db.select().from(journalEntries).orderBy(desc(journalEntries.createdAt)).limit(100);
    json(res, 200, rows);
  },

  "GET /api/notifications": async (_req, res, _b, ctx) => {
    requireAuth(ctx);
    const rows = ctx.role === "operator"
      ? await db.select().from(notifications).orderBy(desc(notifications.createdAt)).limit(100)
      : await db.select().from(notifications).where(eq(notifications.customerId, ctx.userId)).orderBy(desc(notifications.createdAt));
    json(res, 200, rows);
  },

  "POST /api/admin/sweep": async (_req, res, _b, ctx) => {
    requireOperator(ctx);
    const count = await sweepStalePendingTransfers();
    json(res, 200, { rolledBack: count });
  },
};

export function createApiServer(port: number) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    const key = `${req.method} ${url.pathname}`;
    const handler = handlers[key];
    if (!handler) {
      json(res, 404, { error: "not found", route: key });
      return;
    }
    try {
      const cookies = parseCookies(req);
      const session = verifySession(cookies.session);
      const ctx: ReqCtx = session
        ? { userId: session.userId, role: session.role }
        : { userId: null, role: null };
      const body = req.method === "POST" || req.method === "PUT" ? await readBody(req) : null;
      await handler(req, res, body, ctx);
    } catch (e) {
      if (e instanceof HttpError) return json(res, e.status, { error: e.message });
      if (e instanceof InvariantViolation) {
        return json(res, 422, {
          error: e.message,
          kind: "InvariantViolation",
          context: e.context,
          violations: e.violations,
        });
      }
      if (e instanceof CommitmentBreach) {
        return json(res, 422, {
          error: e.message,
          kind: "CommitmentBreach",
          commitment: e.commitment,
          detail: e.detail,
        });
      }
      console.error("api error", e);
      json(res, 500, { error: (e as Error).message ?? "internal" });
    }
  });
  server.listen(port, () => {
    console.log(`api: http://localhost:${port}`);
  });
  return server;
}
