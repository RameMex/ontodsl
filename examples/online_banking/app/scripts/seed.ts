/**
 * Seed script — populates the DB with demo users and accounts.
 *
 * Run: `npm run db:push && npm run db:seed`
 *
 * Creates:
 *   - alice@example.com (customer) with 2 accounts (alice-checking, alice-savings)
 *   - bob@example.com   (customer) with 1 account (bob-checking)
 *   - admin@example.com (operator) — no accounts
 *
 * Initial balances chosen so that the canonical demo scenarios work:
 *   - Atomic transfer (alice-checking → bob-checking, 100): succeeds
 *   - Overdraft attempt (alice-savings → bob-checking, 5000): blocked
 */
import { db, users, accounts } from "../src/db/index.js";
import { hashPassword } from "../src/services/auth.js";

async function main() {
  const now = new Date();

  console.log("seeding users…");
  await db.insert(users).values([
    { id: "alice", email: "alice@example.com", passwordHash: hashPassword("alice123"), displayName: "Alice", role: "customer", createdAt: now },
    { id: "bob",   email: "bob@example.com",   passwordHash: hashPassword("bob123"),   displayName: "Bob",   role: "customer", createdAt: now },
    { id: "admin", email: "admin@example.com", passwordHash: hashPassword("admin123"), displayName: "Admin", role: "operator", createdAt: now },
  ]).onConflictDoNothing();

  console.log("seeding accounts…");
  await db.insert(accounts).values([
    { accountId: "alice-checking", ownerId: "alice", balance: 500.0,  status: "OPEN" },
    { accountId: "alice-savings",  ownerId: "alice", balance: 50.0,   status: "OPEN" },
    { accountId: "bob-checking",   ownerId: "bob",   balance: 200.0,  status: "OPEN" },
  ]).onConflictDoNothing();

  console.log("done.");
  console.log("login as alice@example.com / alice123 (customer)");
  console.log("       admin@example.com / admin123 (operator)");
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
