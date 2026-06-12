/**
 * OCL typechecker — Phase 4 rules S27 and S28.
 *
 * What this module does:
 *   - Walks an `OclExpr` AST together with a `TypeContext` that names
 *     `self`'s type and any parameters in scope.
 *   - Resolves every `.property` chain against the static type of the
 *     receiver, using the inheritance-aware `effectiveProperties`.
 *   - Resolves every zero-arity call `.name()` against the effective
 *     queries of the receiver's type.
 *   - Enforces the `@pre` context rule: `@pre` is legal only in
 *     post-conditions; it is rejected inside invariants, preconditions,
 *     and query bodies.
 *   - Type-checks binary and unary operators: arithmetic requires
 *     numeric operands, boolean connectives require Boolean, comparisons
 *     require compatible types, equality allows null on either side.
 *
 * Out of scope (would need the full OCL spec):
 *   - Collection operators (`->forAll`, `->select`, `->size`, ...).
 *   - User-defined operations with arguments.
 *   - Tuple literals and let-bindings.
 * The OCL grammar currently in this DSL doesn't admit these, so the
 * type-checker is complete for the accepted surface.
 *
 * Emits SemanticError records with codes:
 *   - `S27` for unknown names, unresolved navigations/calls, and
 *          `@pre` misuse.
 *   - `S28` for operator type mismatches.
 */
import type { InvariantDecl, OclClause, ParameterDecl, TypeDecl, TypeRef } from "../ast/index.js";
import { type TypeIndex } from "./inheritance.js";
import type { SemanticError } from "./validator.js";
/** The static type attached to an OCL sub-expression after type-checking. */
export type OclType = {
    readonly kind: "prim";
    readonly name: "Real" | "Integer" | "Boolean" | "String";
} | {
    readonly kind: "ref";
    readonly name: string;
} | {
    readonly kind: "set";
    readonly element: OclType;
} | {
    readonly kind: "null";
} | {
    readonly kind: "unknown";
};
/**
 * Where the OCL expression appears. `invariant` and `pre`/`body`
 * disallow `@pre`; only `post` allows it.
 */
export type OclContextKind = "invariant" | "pre" | "post" | "body";
/**
 * Static environment handed to the checker for one clause.
 *   - `selfType` is the type whose body the clause lives in.
 *   - `params` lists event/query parameters visible inside the clause.
 *     (Invariants have no params; pre/post get the enclosing event's
 *      params; query bodies get the enclosing query's params.)
 *   - `context` controls `@pre` acceptance.
 *   - `cycleSet` is shared with the main validator so the checker can
 *     safely call effectiveProperties without re-discovering cycles.
 */
export interface OclContext {
    readonly selfType: TypeDecl;
    readonly params: readonly ParameterDecl[];
    readonly context: OclContextKind;
    readonly index: TypeIndex;
    readonly cycleSet: ReadonlySet<string>;
    /**
     * Phase 16c — when the surrounding event declares a return type
     * and we're typechecking a post-condition, `result` binds to the
     * value the event will produce. Null in pre/invariant/body
     * contexts or when the event has no return type.
     */
    readonly resultType?: TypeRef | null;
    /**
     * Phase 19 (Bloque 2 v0.6) — bearer binding for member-quantified
     * categories. When non-null, `<name>` resolves as a variable of
     * type `<memberType>` in invariant contexts. Null in all other
     * contexts (kind/subkind/role bodies, event clauses, etc.).
     */
    readonly bearer?: {
        readonly name: string;
        readonly memberType: string;
    } | null;
}
/**
 * Typecheck one clause (invariant, pre, post, or body).
 * Callers provide the surrounding context and the function pushes any
 * errors it finds onto `errors`.
 *
 * `expectedReturn`, if provided, is the declared return type of a query
 * body and is compared against the synthesized type of the body
 * expression (emits S28 on mismatch).
 */
export declare function typeCheckClause(clause: InvariantDecl | OclClause, ctx: OclContext, errors: SemanticError[], expectedReturn?: TypeRef | null): void;
/**
 * The 13 Allen interval-algebra relations between two intervals `a`
 * and `b`. Used both in the typechecker (to recognise these method
 * names as "temporal" rather than "query") and in the Z3 translator
 * (to emit the corresponding difference-logic formula).
 *
 * Base set (7): before, meets, overlaps, during, starts, finishes,
 * equals. Converse set (6): after, metBy, overlappedBy, contains,
 * startedBy, finishedBy. We expose all 13 directly so users never
 * have to reorder arguments — `a.after(b)` feels less forced than
 * `b.before(a)` when the narrative subject is A.
 */
export declare const ALLEN_OPERATORS: ReadonlySet<string>;
/**
 * Top-level entry called from validateSemantics. Visits every
 * invariant, event pre/post clause, and query body; runs the checker
 * with the appropriate `OclContext`.
 */
export declare function checkOclTypes(idx: TypeIndex, cycleSet: ReadonlySet<string>, errors: SemanticError[]): void;
//# sourceMappingURL=oclCheck.d.ts.map