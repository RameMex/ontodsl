/**
 * Phase 15 — Rust struct generation. Phase 15.7: target-aware (alloc/no-alloc).
 *
 * Branded IDs derive Eq+Hash+Ord+PartialOrd. Structs derive Debug+Clone+PartialEq.
 * In no-alloc mode, structs additionally derive Eq+Hash to enable use in
 * heapless::FnvIndexSet/Map (Set elements + commitment registries need Eq+Hash).
 *
 * Type mapping is delegated to typeMapping.ts.
 */
import type { OntoFile } from "../ast/index.js";
import { type RustTargetConfig } from "./typeMapping.js";
export declare function renderRustTypes(file: OntoFile, cfg: RustTargetConfig): string;
//# sourceMappingURL=types.d.ts.map