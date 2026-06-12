/**
 * C+ACSL event wrapper emission.
 *
 * For each event on a body-bearing decl, emit a wrapper function
 * with ACSL preconditions / assigns / postconditions:
 *
 *   /*@
 *     requires \valid(self);
 *     requires <pre1>;
 *     requires <pre2>;
 *     assigns self->field_a, self->field_b;
 *     ensures \result == 0 ==> inv_<TypeName>(self);
 *     ensures \result != 0 ==> *self == \old(*self);  // rollback
 *   *\/
 *   int <type>_<event>_wrapped(
 *       <TypeName>* self,
 *       <param1_type> p1,
 *       ...,
 *       int (*impl_fn)(<TypeName>*, ...),
 *       const char** out_msg
 *   );
 *
 * The body:
 *   - checks each `pre:` clause via runtime translation;
 *   - snapshots `*self` for rollback (struct assignment copies);
 *   - calls `impl_fn`;
 *   - checks each `post:` clause + class invariant;
 *   - on any failure, restores from snapshot and returns 1 with
 *     the first failing message in `*out_msg`.
 *
 * This mirrors the Rust event-wrapper behaviour and gives Frama-C
 * the contract envelope it needs to verify against the impl.
 */
import type { Declaration } from "../ast/nodes.js";
import { type TypeIndex } from "../semantic/inheritance.js";
export declare function renderCEventWrappers(d: Declaration, idx: TypeIndex, cycleSet: ReadonlySet<string>, headerOnly: boolean): string[];
//# sourceMappingURL=eventWrappers.d.ts.map