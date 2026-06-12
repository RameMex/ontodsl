/**
 * Phase 10 — Runtime invariant validator emission.
 *
 * For each body-bearing declaration with invariants, generate:
 *
 *   export function validateX(instance: X): readonly string[] {
 *     const violations: string[] = [];
 *     if (!(<TS expression>)) violations.push("...");
 *     // ...one if per invariant clause
 *     return violations;
 *   }
 *
 * Callers invoke this explicitly:
 *
 *   const issues = validateCustomer(customer);
 *   if (issues.length > 0) throw new InvalidError(issues);
 *
 * Scope — which invariants get compiled:
 *
 *   ✓ Arithmetic comparisons: <, <=, >, >=, =, <> with primitives
 *   ✓ Boolean connectives: and, or, not
 *   ✓ Navigation: self.prop (depth 1), p.prop for parameters (not
 *     applicable here since invariants have no params)
 *   ✓ Literals: integers, reals, booleans, strings, null
 *   ✓ if/then/else
 *   ✓ forAll (Phase 5): emits a JS .every() call when the predicate
 *     is itself translatable
 *   ✓ exists (Phase 5): emits .some()
 *   ✓ size, isEmpty, notEmpty, includes (Phase 5 collection ops)
 *
 * Skipped (emitted as a `// SKIPPED:` comment in the generator's
 * output, no validation performed at runtime):
 *
 *   ✗ Allen temporal operators (Phase 6.5): would require a runtime
 *     time model; out of Phase 10 scope.
 *   ✗ @pre references: only valid in event post-conditions; Phase 10
 *     doesn't generate event wrappers, so @pre is unreachable here.
 *   ✗ Deep navigation (self.a.b where a is a reference). Allowed
 *     syntactically; the TS output traverses multiple steps but
 *     null-safety becomes a concern — we emit guarded `?.` access
 *     for deep nav.
 *
 * The translator fails SILENTLY for skipped constructs — it emits a
 * comment in the generated code documenting the skip and proceeds.
 * This mirrors the semantic validator's W29/W30 stance: "partial
 * verification is strictly better than no verification".
 */
import type { OntoFile } from "../ast/index.js";
export declare function renderValidators(file: OntoFile): string;
//# sourceMappingURL=validators.d.ts.map