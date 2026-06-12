/**
 * Phase 10.6 + 10.7 — Commitment lifecycle registry with audit hook.
 *
 * 10.6 added the state machine (pending → fulfilled / violated, terminal).
 * 10.7 adds an optional `onTransition` callback fired on every state
 * change, including the initial register. Use cases:
 *   - Audit log persistence
 *   - Metrics / telemetry
 *   - Cross-aggregate sync (a fulfilled commitment kicking off the
 *     next pending one)
 *
 * The callback is optional. Default behaviour matches 10.6 — no hook,
 * no overhead. When supplied, every transition (`register`, `fulfill`,
 * `violate`) calls back with the commitment, the resulting state, and
 * a `Date.now()` timestamp. Errors thrown from the callback propagate
 * out of the transition call so callers can choose to fail-fast.
 */

import type { CommitmentDecl, OntoFile } from "../ast/index.js";

export function renderCommitmentRegistries(file: OntoFile): string {
  const commitments = file.declarations.filter(
    (d): d is CommitmentDecl => d.kind === "CommitmentDecl",
  );
  if (commitments.length === 0) return "";

  const lines: string[] = [];
  lines.push("// ─── Commitment lifecycle registry ───");
  lines.push("");
  lines.push(...renderCoreRegistry());
  lines.push("");
  for (const c of commitments) {
    lines.push(...renderTypedRegistry(c));
    lines.push("");
  }
  return lines.join("\n");
}

function renderCoreRegistry(): string[] {
  return [
    `/** Lifecycle states a commitment can be in. */`,
    `export type CommitmentState = "pending" | "fulfilled" | "violated";`,
    ``,
    `/** A commitment + its current lifecycle state. */`,
    `export interface CommitmentLifecycle<C> {`,
    `  readonly commitment: C;`,
    `  readonly state: CommitmentState;`,
    `}`,
    ``,
    `/**`,
    ` * Phase 10.7 transition event. Fired on register and on every`,
    ` * state change. \`previousState\` is null for the initial`,
    ` * register; \`timestamp\` uses \`Date.now()\` (epoch millis).`,
    ` */`,
    `export interface CommitmentTransition<C> {`,
    `  readonly commitment: C;`,
    `  readonly previousState: CommitmentState | null;`,
    `  readonly newState: CommitmentState;`,
    `  readonly timestamp: number;`,
    `}`,
    ``,
    `/** Optional callback fired on every transition. */`,
    `export type TransitionListener<C> = (event: CommitmentTransition<C>) => void;`,
    ``,
    `/**`,
    ` * Generic in-memory registry. Tracks commitments by their string`,
    ` * identity and enforces terminal-state transitions. Optionally`,
    ` * notifies a listener on every transition.`,
    ` */`,
    `export class CommitmentRegistry {`,
    `  private readonly entries: Map<string, CommitmentLifecycle<unknown>> = new Map();`,
    `  private readonly listener: TransitionListener<unknown> | null;`,
    ``,
    `  constructor(listener?: TransitionListener<unknown>) {`,
    `    this.listener = listener ?? null;`,
    `  }`,
    ``,
    `  register<C>(id: string, commitment: C): void {`,
    `    if (this.entries.has(id)) {`,
    `      throw new Error(\`commitment '\${id}' already registered\`);`,
    `    }`,
    `    this.entries.set(id, { commitment, state: "pending" });`,
    `    this.notify(commitment, null, "pending");`,
    `  }`,
    ``,
    `  getState(id: string): CommitmentState | null {`,
    `    return this.entries.get(id)?.state ?? null;`,
    `  }`,
    ``,
    `  /** Mark a commitment as fulfilled. Throws if not pending. */`,
    `  fulfill(id: string): void {`,
    `    this.transition(id, "fulfilled");`,
    `  }`,
    ``,
    `  /** Mark a commitment as violated. Throws if not pending. */`,
    `  violate(id: string): void {`,
    `    this.transition(id, "violated");`,
    `  }`,
    ``,
    `  private transition(id: string, target: CommitmentState): void {`,
    `    const entry = this.entries.get(id);`,
    `    if (!entry) {`,
    `      throw new Error(\`unknown commitment '\${id}'\`);`,
    `    }`,
    `    if (entry.state !== "pending") {`,
    `      throw new Error(`,
    `        \`commitment '\${id}' is in terminal state '\${entry.state}'; cannot transition to '\${target}'\``,
    `      );`,
    `    }`,
    `    const previous = entry.state;`,
    `    this.entries.set(id, { commitment: entry.commitment, state: target });`,
    `    this.notify(entry.commitment, previous, target);`,
    `  }`,
    ``,
    `  private notify(commitment: unknown, previous: CommitmentState | null, next: CommitmentState): void {`,
    `    if (!this.listener) return;`,
    `    this.listener({`,
    `      commitment,`,
    `      previousState: previous,`,
    `      newState: next,`,
    `      timestamp: Date.now(),`,
    `    });`,
    `  }`,
    ``,
    `  /** Iterate commitments in the pending state. Snapshot — safe to mutate during iteration. */`,
    `  pending(): readonly CommitmentLifecycle<unknown>[] {`,
    `    const out: CommitmentLifecycle<unknown>[] = [];`,
    `    for (const e of this.entries.values()) {`,
    `      if (e.state === "pending") out.push(e);`,
    `    }`,
    `    return out;`,
    `  }`,
    ``,
    `  /** Total entries (pending + fulfilled + violated). */`,
    `  size(): number {`,
    `    return this.entries.size;`,
    `  }`,
    `}`,
  ];
}

function renderTypedRegistry(c: CommitmentDecl): string[] {
  const idType = `${c.name}Id`;
  const registryName = `${c.name}Registry`;

  if (!c.identity) {
    return [
      `// (skipped registry for ${c.name} — identity is inherited; ` +
        `Phase 10.6+ emits wrappers only for commitments with own identity)`,
    ];
  }
  const idField = c.identity.propertyName;

  return [
    `/** Lifecycle registry for ${c.name} commitments. */`,
    `export class ${registryName} {`,
    `  private readonly inner: CommitmentRegistry;`,
    ``,
    `  constructor(listener?: TransitionListener<${c.name}>) {`,
    `    // The inner registry is generic; we cast the typed listener`,
    `    // to the unknown-shaped one. At call time the runtime value`,
    `    // IS a ${c.name} — the typed wrapper guarantees that since`,
    `    // \`register\` only accepts ${c.name} instances.`,
    `    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);`,
    `  }`,
    ``,
    `  register(commitment: ${c.name}): void {`,
    `    this.inner.register(commitment.${idField} as string, commitment);`,
    `  }`,
    ``,
    `  getState(id: ${idType}): CommitmentState | null {`,
    `    return this.inner.getState(id as string);`,
    `  }`,
    ``,
    `  fulfill(id: ${idType}): void {`,
    `    this.inner.fulfill(id as string);`,
    `  }`,
    ``,
    `  violate(id: ${idType}): void {`,
    `    this.inner.violate(id as string);`,
    `  }`,
    ``,
    `  pending(): readonly CommitmentLifecycle<${c.name}>[] {`,
    `    return this.inner.pending() as readonly CommitmentLifecycle<${c.name}>[];`,
    `  }`,
    ``,
    `  size(): number {`,
    `    return this.inner.size();`,
    `  }`,
    `}`,
  ];
}
