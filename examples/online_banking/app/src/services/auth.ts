/**
 * Minimal session-based auth. NOT production-grade — uses a single
 * server-signed cookie token and bcrypt-via-scrypt hashing. Good
 * enough for the demo's customer vs operator role distinction.
 */
import { scryptSync, randomBytes, timingSafeEqual, createHmac } from "node:crypto";
import { db, users, type UserRow } from "../db/index.js";
import { eq } from "drizzle-orm";

const SCRYPT_N = 16384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEYLEN = 64;

// Server-side secret for session HMAC. Read from env in production.
const SESSION_SECRET =
  process.env.SESSION_SECRET ?? "demo-session-secret-not-for-production";

export function hashPassword(plain: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(plain, salt, SCRYPT_KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
  }).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(plain: string, stored: string): boolean {
  const [salt, expected] = stored.split(":");
  if (!salt || !expected) return false;
  const actual = scryptSync(plain, salt, SCRYPT_KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
  });
  return timingSafeEqual(Buffer.from(expected, "hex"), actual);
}

export interface SessionToken {
  userId: string;
  role: "customer" | "operator";
  issuedAt: number;
}

export function signSession(payload: SessionToken): string {
  const body = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  const sig = createHmac("sha256", SESSION_SECRET).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifySession(token: string | undefined): SessionToken | null {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", SESSION_SECRET).update(body).digest("base64url");
  if (sig !== expected) return null;
  try {
    return JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as SessionToken;
  } catch {
    return null;
  }
}

export async function loadUserById(id: string): Promise<UserRow | null> {
  const r = await db.select().from(users).where(eq(users.id, id)).get();
  return r ?? null;
}

export async function loadUserByEmail(email: string): Promise<UserRow | null> {
  const r = await db.select().from(users).where(eq(users.email, email)).get();
  return r ?? null;
}
