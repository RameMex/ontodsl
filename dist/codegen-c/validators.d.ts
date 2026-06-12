/**
 * C+ACSL validator emission.
 *
 * Each invariant becomes both:
 *   - a runtime check in the body of `<type>_validate(self, out_msg)`,
 *     returning the first violation message via out-param,
 *   - an ACSL `ensures` clause on the function declaration so
 *     Frama-C/WP can verify the body matches the spec.
 *
 * The function contract emitted on the header declaration:
 *
 *   /*@ requires \valid_read(self);
 *       requires out_msg != \null;
 *       assigns *out_msg;
 *       ensures \result == 0 <==> inv_<TypeName>(self);
 *   *\/
 *   int <type>_validate(const <TypeName>* self, const char** out_msg);
 *
 * And a separate `predicate` block expressing the conjunction of
 * all invariants in ACSL form. Frama-C uses this predicate to
 * propagate invariant facts wherever the function is called.
 */
import type { Declaration } from "../ast/nodes.js";
import type { OclExpr } from "../ocl/nodes.js";
import { type TypeIndex } from "../semantic/inheritance.js";
export declare function renderCValidators(d: Declaration, idx: TypeIndex, cycleSet: ReadonlySet<string>, headerOnly: boolean): string[];
/**
 * Translate an OCL expression to its ACSL equivalent (string).
 * Returns null when the expression uses an OCL construct we haven't
 * mapped yet (caller treats it as "skip this clause").
 *
 * `receiver` is the C name for the current self pointer — usually
 * `"self"` or, inside a forAll body, `"&self->arr[i]"`-style for
 * nested navigation.
 *
 * `knownVars` maps OCL identifier names (e.g. event params like `dt`,
 * `gyro`) to their C-side rendering. The caller passes the event
 * params for pre/post translation; for invariants it's empty.
 */
export declare function translateToAcsl(e: OclExpr | null, receiver: string, knownVars?: ReadonlyMap<string, string>): string | null;
export declare function translateToC(e: OclExpr | null, receiver: string, knownVars?: ReadonlyMap<string, string>): string | null;
declare function snakeOf(s: string): string;
export { snakeOf };
//# sourceMappingURL=validators.d.ts.map