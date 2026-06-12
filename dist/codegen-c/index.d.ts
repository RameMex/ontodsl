/**
 * Phase Q4 / Paso 2 — C + ACSL codegen backend.
 *
 * Demonstrates portability of the ontology-grounded contract layer:
 * the same `.onto` file produces both Rust (via codegen-rust/) and
 * C with ACSL annotations (via this module). When both targets pass
 * their respective verifier (`cargo check` / `frama-c -wp`), the
 * tesis "the contract is portable across languages preserving
 * semantics" stops being aspirational.
 *
 * Why ACSL (and not just C): Frama-C's `wp` plugin is the C
 * verifier industrially deployed at Airbus since 2002. If a .onto
 * lowers to C that Frama-C verifies, we've crossed a regulated-
 * industry credibility threshold no toy DbC tool can match.
 *
 * Output: `{ headerH, sourceC }` — caller writes them as
 * `<basename>.h` and `<basename>.c`.
 *
 * v1 SCOPE (single-session MVP):
 *   ✓ Primitive types (Real → double, Integer → int64_t, Boolean → bool, String → const char*)
 *   ✓ Array<T, N> and nested arrays (matrices)
 *   ✓ Branded identity wrapper structs
 *   ✓ struct emission for body-bearing decls
 *   ✓ Validators with ACSL `predicate` + `ensures \result == 0 <==> inv(...)`
 *   ✓ Sync event wrappers with ACSL `requires` (pre) / `ensures` (post + inv)
 *   ✓ OCL → ACSL translator for the operators the Rust target supports
 *   ✗ Set<T>  — pending v2 (would need length-bounded ghost field)
 *   ✗ Option<T> — pending v2 (would need a tag-bit struct)
 *   ✗ Commitment registries — pending v2
 *   ✗ Async wrappers — N/A for C
 *
 * When the .onto uses unsupported features (Set, Option), the
 * affected declarations are still emitted but their problematic
 * fields and clauses are marked with `// TODO C+ACSL v1 limit: ...`
 * comments so the user knows what was skipped.
 */
import type { OntoFile } from "../ast/nodes.js";
export interface RenderCOptions {
    /** Base name used in include guards + filename prefix. */
    readonly module?: string;
}
export interface RenderCOutput {
    readonly headerH: string;
    readonly sourceC: string;
}
export declare function renderC(file: OntoFile, opts?: RenderCOptions): RenderCOutput;
export { renderCTypes, renderCStructs } from "./types.js";
export { renderCValidators } from "./validators.js";
export { renderCEventWrappers } from "./eventWrappers.js";
//# sourceMappingURL=index.d.ts.map