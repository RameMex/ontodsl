/**
 * Phase 15 — Rust invariant validators.
 *
 * For each declaration with invariants, emit:
 *
 *   impl Customer {
 *       pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
 *           let mut violations = alloc::vec::Vec::new();
 *           if !(self.age >= 18) {
 *               violations.push("[Customer] invariant violated: self.age >= 18");
 *           }
 *           violations
 *       }
 *   }
 *
 * The Rust translator parallels the TS one but with idiomatic Rust:
 *   - Property navigation via `.` (no `?.` — Rust references can't
 *     be null in safe code; if a field is `Option<T>` the user
 *     handles unwrapping in their domain logic)
 *   - String comparison: `==` → `==`, `<>` → `!=` (distinct from
 *     TS where we use `===`/`!==`)
 *   - Set ops compile against BTreeSet's API:
 *       size() → .len() as i64
 *       isEmpty() → .is_empty()
 *       notEmpty() → !.is_empty()
 *       includes(x) → .contains(&x)
 *       forAll(x | pred) → .iter().all(|x| pred)
 *       exists(x | pred) → .iter().any(|x| pred)
 *
 * We DO NOT translate Allen calls or @pre — same as TS validators
 * (Allen needs time model; @pre is event-only, not invariants).
 *
 * Numeric literals: Rust is strict about i64 vs f64. Integer
 * literals like `18` work fine when compared to i64; comparing to
 * f64 would need `18.0`. The OCL AST tells us each literal's
 * litKind (Integer vs Real); we emit the right form.
 *
 * String literals: Rust's `==` between `String` and `&str` works
 * via the `PartialEq<str>` impl, so `self.name == "alice"` is fine.
 */
import type { OntoFile } from "../ast/index.js";
import { type RustTargetConfig } from "./typeMapping.js";
export declare function renderRustValidators(file: OntoFile, cfg: RustTargetConfig): string;
//# sourceMappingURL=validators.d.ts.map