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
import type { OntoFile } from "../ast/index.js";
export declare function renderCommitmentRegistries(file: OntoFile): string;
//# sourceMappingURL=commitmentRegistry.d.ts.map