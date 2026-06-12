/**
 * Phase 10 — Factory function emission.
 *
 * A factory `makeX(data): X` is the canonical way to construct an
 * instance in the generated module. It:
 *   - Accepts a plain-object input where the identity field is a raw
 *     string (not a branded Id).
 *   - Assigns the literal `kind` discriminator.
 *   - Casts the identity to the branded Id type.
 *   - Assigns all other properties verbatim.
 *
 * Why have factories at all when TS interfaces are structural? Two
 * reasons:
 *   1. Branded identity types are NOT structurally inferable — you
 *      can't just pass `{ email: "..." }` and have TS figure out
 *      that `email` should be CustomerId. The factory does the cast
 *      in exactly one place.
 *   2. Future phases extend the factory body with invariant calls,
 *      commitment pre-hooks, etc. Having factories from day one
 *      means those extensions are purely additive.
 *
 * Scope for Phase 10: ONLY identity-supplying declarations get
 * factories. Subkind and Role don't — they're refinements and their
 * instance construction is an open design question (do you make a
 * Subkind from scratch or "cast" an existing Kind? We punt for now).
 *
 * Deliberately out:
 *   - Runtime invariant checks in the factory body. The validators
 *     module generates standalone `validateX(instance)` functions
 *     that callers invoke explicitly — mixing construction and
 *     validation mean exceptions in constructors, which is a design
 *     direction we shouldn't choose for users.
 */
import type { OntoFile } from "../ast/index.js";
export declare function renderFactories(file: OntoFile): string;
//# sourceMappingURL=factories.d.ts.map