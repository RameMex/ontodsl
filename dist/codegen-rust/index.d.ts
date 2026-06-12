/**
 * Phase 15 / 15.7 — Rust codegen entry point.
 *
 * `renderRust(ast, options)` returns { cargoToml, libRs }.
 *
 * Two targets:
 *   - "alloc" (default): uses `alloc::*` types. Needs a global allocator
 *     (embedded-alloc, esp-alloc, or std on hosted).
 *   - "no-alloc": uses `heapless::*` with fixed capacities. No allocator
 *     required. Cargo.toml depends on `heapless`.
 */
import type { OntoFile } from "../ast/index.js";
import { renderRustTypes } from "./types.js";
import { renderRustFactories } from "./factories.js";
import { renderRustValidators } from "./validators.js";
import { renderRustEventWrappers } from "./eventWrappers.js";
import { renderRustCommitmentRegistries } from "./commitmentRegistries.js";
import { type RenderProptestsResult } from "./proptests.js";
import { type RustFloat, type RustTarget } from "./typeMapping.js";
export interface RenderRustOptions {
    readonly crateName?: string;
    readonly crateVersion?: string;
    /** "alloc" (default) or "no-alloc". */
    readonly target?: RustTarget;
    /** Capacity for heapless containers in no-alloc mode. Default 16. */
    readonly heaplessCapacity?: number;
    /** Phase 15.8: emit `<event>_wrapped_async` variants. Default false. */
    readonly emitAsync?: boolean;
    /**
     * Float precision for OCL Real. Defaults to "f64". Use "f32" for
     * embedded targets without double-precision FPU (Cortex-M0/M3, etc.).
     */
    readonly float?: RustFloat;
}
export interface RenderRustOutput {
    readonly cargoToml: string;
    readonly libRs: string;
}
export declare function renderRust(file: OntoFile, options?: RenderRustOptions): RenderRustOutput;
/**
 * Phase Q3 / Paso 1 — generate property-based tests from the OCL
 * invariants + event pre-conditions. Returns the test module text
 * and the count of emitted tests. Caller decides whether to write
 * the file alongside `lib.rs` and add `proptest` as a dev-dep.
 */
export declare function renderRustProptestsForFile(file: OntoFile, options?: RenderRustOptions): RenderProptestsResult;
export { renderRustTypes, renderRustFactories, renderRustValidators, renderRustEventWrappers, renderRustCommitmentRegistries, };
//# sourceMappingURL=index.d.ts.map