/**
 * Phase 15.7 — Shared type mapping.
 *
 * Centralizes Rust type names so types/factories/validators/wrappers/
 * registries don't duplicate the alloc-vs-heapless branch.
 */
import type { TypeRef } from "../ast/index.js";
export type RustTarget = "alloc" | "no-alloc";
/** Float precision for the OCL `Real` primitive. `f64` is the default. */
export type RustFloat = "f32" | "f64";
export interface RustTargetConfig {
    readonly target: RustTarget;
    /** Capacity for heapless containers. Ignored in alloc mode. */
    readonly capacity: number;
    /** Phase 15.8: emit `<event>_wrapped_async` variants alongside sync. */
    readonly emitAsync: boolean;
    /**
     * Float precision for OCL Real. Defaults to `f64`. Set to `f32` for
     * embedded targets where double-precision math is expensive or
     * unavailable (Cortex-M0/M3 without FPU, RISC-V RV32IMC, etc.).
     */
    readonly float: RustFloat;
}
export declare const DEFAULT_CAPACITY = 16;
export declare const DEFAULT_FLOAT: RustFloat;
export declare function rustString(cfg: RustTargetConfig): string;
export declare function rustSet(cfg: RustTargetConfig, elem: string): string;
export declare function rustVec(cfg: RustTargetConfig, elem: string): string;
export declare function rustMap(cfg: RustTargetConfig, k: string, v: string): string;
export declare function rustVecNew(cfg: RustTargetConfig, elem: string): string;
export declare function rustMapNew(cfg: RustTargetConfig, k: string, v: string): string;
/**
 * In no-alloc mode, Vec::push returns Result<(), T>. In alloc mode it
 * returns (). Validators must handle both — we wrap pushes in a
 * `let _ =` to discard the Err in no-alloc (silently dropping
 * violations beyond capacity is acceptable; the user can raise
 * capacity if it matters).
 */
export declare function rustVecPush(cfg: RustTargetConfig, vec: string, value: string): string;
/** Map insert: alloc returns Option<V>; heapless returns Result. */
export declare function rustMapInsert(cfg: RustTargetConfig, map: string, key: string, value: string): string;
export declare function renderTypeRef(t: TypeRef, cfg: RustTargetConfig): string;
//# sourceMappingURL=typeMapping.d.ts.map