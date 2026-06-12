# online-banking — TanStack app demo

End-to-end fullstack app derived from the **ontodls-verified spec**
in `../design.onto`. Every mutation is gated by the
auto-generated `validate*()` runtime invariant checkers from
`../dist/design.ts` — so the commitments verified at design time
(via Z3, see [Bloque 2](../../../docs/BLOQUE2_EMPIRICAL.md)) are
*also* enforced at runtime.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        ../design.onto                           │
│   (verified spec — Z3 proofs of 4 commitments + invariants)     │
└─────────────────────────────────────────────────────────────────┘
                              │ codegen (gen.js)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│   ../dist/design.ts                                             │
│   - branded types (AccountId, TransferId, ...)                  │
│   - factory functions (makeAccount, makeTransfer, ...)          │
│   - validate*() runtime invariant checkers                      │
└─────────────────────────────────────────────────────────────────┘
                              │ import @onto/banking
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│   This app                                                      │
│                                                                 │
│   ┌──────────────┐    ┌──────────────────┐  ┌────────────────┐  │
│   │  React UI    │ ←→ │  HTTP API (5174) │  │  SQLite (Drizzle)│
│   │  TanStack    │    │  - login / me    │  │  - accounts     │  │
│   │  Router      │    │  - transfer/*    │  │  - transfers    │  │
│   │  Query       │    │  - journal       │  │  - journal_*    │  │
│   └──────────────┘    │  - admin/sweep   │  │  - notifications│  │
│                       └──────────────────┘  └────────────────┘  │
│                              │                                  │
│                              ▼                                  │
│                       services/transfer.ts                      │
│                       ↳ calls validateAccountLedger(),          │
│                         validateTransferCoordinator()           │
│                         after each mutation                     │
└─────────────────────────────────────────────────────────────────┘
```

## Setup

```bash
# 1. Make sure the verified TS layer is up to date
cd ../../..   # back to ontodls/
node dist/cli/gen.js examples/online_banking/design.onto \
  --out examples/online_banking/dist --resolve-imports

# 2. Install + setup this app
cd examples/online_banking/app
npm install
npm run db:push     # drizzle migrations -> banking.db
npm run db:seed     # alice, bob, admin + 3 accounts
npm run dev         # vite (5173) + api (5174) concurrently
```

Then open <http://localhost:5173>.

## Seeded credentials

| Email | Password | Role |
|---|---|---|
| alice@example.com | alice123 | customer (owns alice-checking $500, alice-savings $50) |
| bob@example.com   | bob123   | customer (owns bob-checking $200) |
| admin@example.com | admin123 | operator (admin panel access) |

## Demo scenarios

The app demonstrates **runtime enforcement of the four commitments**
that ontodls verified at design time. Each scenario maps to a
commitment from `discovery.onto`:

### 1. Atomic transfer + auto-execute (AtomicTransferCommitment + AuditJournalCommitment)

1. Log in as `alice`.
2. Go to **New transfer**. Source: `alice-checking` ($500), destination: `bob-checking`, amount: `100`.
3. Auto-execute checkbox: **on**.
4. Submit.

Expected: green success message showing both the journal entry ID
and the notification ID. The journal entry was created **before** the
notification — proves AuditJournalCommitment runtime ordering.

### 2. Overdraft blocked (NoOverdraftCommitment)

1. As `alice`, source: `alice-savings` ($50), destination: `bob-checking`, amount: `5000`.
2. Submit.

Expected: red error card:
```
CommitmentBreach: NoOverdraftCommitment
Commitment 'NoOverdraftCommitment' breached: source.balance=50 < amount=5000
```

No debit happens — balances unchanged. The check fires before any
write hits the DB, and the SQLite transaction rolls back if the
post-mutation `validateAccountLedger()` would fail.

### 3. Self-transfer rejected (AccountLedger invariant)

1. As `alice`, source: `alice-checking`, destination: `alice-checking`, amount: `10`.
2. Submit.

Expected: `[AccountLedger] invariant violated: self.sourceAccountId <> self.destinationAccountId`.

### 4. Bounded-latency sweep (BoundedLatencyCommitment)

1. Log in as `admin`.
2. Some PENDING transfer exists (initiate one with auto-execute off, or wait 30s on a stuck transfer).
3. Go to **Admin** → **Sweep stale pending**.

Expected: count of rolled-back transfers. Any PENDING older than
30 seconds becomes ROLLED_BACK.

### 5. Audit ordering visualization

1. After several transfers, log in as `admin`.
2. Go to **Admin** → **Journal ↔ notification ordering audit**.

Expected: every row shows ✓ `journal before notify`. The badge would
go red on a violation — by construction the service writes both
in one TX, so this should always hold.

## Layout

```
app/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── drizzle.config.ts
├── index.html
├── README.md
├── drizzle/         # drizzle-kit generated migrations
├── banking.db       # SQLite DB (created by db:push)
├── scripts/
│   ├── seed.ts      # seed users + accounts
│   └── dev.ts       # start API server (port 5174)
└── src/
    ├── main.tsx         # React entry
    ├── index.css        # minimal dark theme
    ├── routeTree.gen.ts # generated by tanstack router
    ├── db/
    │   ├── index.ts     # better-sqlite3 + drizzle client
    │   └── schema.ts    # tables mapped from kinds in design.onto
    ├── server/
    │   └── index.ts     # plain Node HTTP server, JSON API
    ├── services/
    │   ├── transfer.ts  # initiateTransfer / executeTransfer / rollback
    │   └── auth.ts      # session cookie + scrypt password hash
    └── routes/
        ├── __root.tsx   # nav + outlet
        ├── login.tsx
        ├── index.tsx    # dashboard: accounts + recent transfers
        ├── transfer.tsx # new transfer form (with auto-execute)
        └── admin.tsx    # operator panel: journal audit + sweep
```

## What this demonstrates (and what it doesn't)

**Yes**:
- ontodls spec → working app with real DB + UI.
- The commitments verified by Z3 at design time are enforced at
  runtime by calling the auto-generated `validate*()` functions.
- Failures produce specific diagnostic messages tied back to the
  spec (commitment name, invariant text).

**Not yet** (Phase 25.2 / 25.3):
- Full code generation of the app skeleton — currently the
  app code is hand-written; only the types + validators come from
  ontodls. A future `codegen-tanstack` target would generate the
  Drizzle schema, server routes, and React forms from the spec.
- RxOCL trace clauses (Phase 24) wired into runtime monitors —
  e.g. a `trace { always self.balance >= 0 }` would set up a
  periodic check that re-validates the invariant against live DB
  state.
- Production-grade auth (this uses a single signed cookie; replace
  with a real session store for production).
