/**
 * Phase 10.5 — Event handler runtime wrappers.
 *
 * For every `event name(params) { pre: ..; post: ..; modifies: ..; }`
 * declared on a body-bearing type, we generate:
 *
 *   1. A type alias for the user-supplied implementation function.
 *   2. A wrapper function that runs pre-conditions before calling the
 *      impl, snapshots @pre-referenced paths, then runs
 *      post-conditions on the impl's result.
 *
 * The user provides the actual mutation logic (factories don't mutate;
 * Phase 10's invariant validators don't either; this is the first
 * Phase that consumes user-supplied code). The wrapper is a thin
 * contract enforcer around it.
 *
 * Generated shape:
 *
 *   export type DroneSwapBatteryImpl = (
 *     self: Drone,
 *     newBattery: BatteryPack,
 *   ) => { self: Drone; modified: { battery: BatteryPack } };
 *
 *   export function wrapDroneSwapBattery(
 *     impl: DroneSwapBatteryImpl,
 *   ): (self: Drone, newBattery: BatteryPack) => Drone {
 *     return (self, newBattery) => {
 *       // pre checks → throw on violation
 *       // @pre snapshot
 *       const __pre = { ... captured paths ... };
 *       const result = impl(self, newBattery);
 *       // post checks → throw on violation
 *       return result.self;
 *     };
 *   }
 *
 * Scope for Phase 10.5:
 *   ✓ Pre-conditions in the decidable fragment (same translator
 *     coverage as invariant validators)
 *   ✓ Post-conditions in the decidable fragment, with `@pre`
 *     references resolved via a snapshot taken before the impl call
 *   ✓ `modifies` paths inform the impl's return type
 *   ✓ Parameters in pre/post clauses
 *
 * Skipped (commented in output, not enforced at runtime):
 *   ✗ Allen temporal calls (no time model)
 *   ✗ Reference equality through deep navigation
 *   ✗ Anything else outside the fragment translateExpr handles
 *
 * Out of Phase 10.5 scope entirely:
 *   • Commitment lifecycle monitors (→ Phase 10.6)
 *   • Async / Promise-returning events (→ Phase 10.9)
 *   • State persistence
 *
 * Included since the Phase 4 rollback extension (NOT originally in
 * 10.5 scope but added later):
 *   • Transactional rollback on post-violation: `__cloneSelf` snapshots
 *     self before the impl runs and `Object.assign(self, __rollback)`
 *     restores it on a failed post-check. See the helper appended at
 *     the bottom of renderEventWrappers().
 */
import type { OntoFile } from "../ast/index.js";
export declare function renderEventWrappers(file: OntoFile): string;
//# sourceMappingURL=eventWrappers.d.ts.map