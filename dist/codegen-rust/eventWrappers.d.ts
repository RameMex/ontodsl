/**
 * Phase 15.5 — Rust event wrappers.
 *
 * For each event on a body-bearing decl, emit a wrapper method:
 *
 *   impl Drone {
 *     pub fn swap_battery_wrapped<F>(
 *       &mut self,
 *       new_battery: BatteryPack,
 *       impl_fn: F,
 *     ) -> Result<(), &'static str>
 *     where F: FnOnce(&mut Self, BatteryPack)
 *     {
 *       if !(precondition) { return Err("..."); }
 *       let __pre_battery = self.battery.clone();  // @pre snapshot
 *       impl_fn(self, new_battery);
 *       if !(postcondition) { return Err("..."); }
 *       Ok(())
 *     }
 *   }
 *
 * Returns Result<(), &'static str> — first violation wins. Static
 * messages, zero alloc. Caller owns event params; we hand them to
 * the impl closure which gets &mut self.
 */
import type { OntoFile } from "../ast/index.js";
import { type RustTargetConfig } from "./typeMapping.js";
export declare function renderRustEventWrappers(file: OntoFile, cfg: RustTargetConfig): string;
//# sourceMappingURL=eventWrappers.d.ts.map