/**
 * C+ACSL type emission — branded ID typedefs + plain structs.
 *
 * Branded ID design: each identity-supplying decl gets a single-
 * field wrapper struct so the C type system treats it as nominally
 * distinct from raw int64_t/double/char*. Frama-C's WP can reason
 * about struct equality the same way it does about scalars.
 *
 *   typedef struct { int64_t inner; } BatteryInstanceId;
 *
 * The user constructs values with brace initialisation:
 *   BatteryInstanceId id = { .inner = 42 };
 *
 * For Set<T> and Option<T> we emit a TODO sentinel comment in the
 * generated C, so the field is visible in the struct (callers
 * referencing it will fail to compile, which is the right signal
 * — the gap is loud, not silent).
 */
import type { Declaration, OntoFile, TypeRef } from "../ast/nodes.js";
import { type TypeIndex } from "../semantic/inheritance.js";
/**
 * Emit the branded ID typedefs for every identity-supplying decl
 * in the file. These go near the top of the header so subsequent
 * struct fields can reference them.
 */
export declare function renderCTypes(file: OntoFile): string[];
/**
 * Emit the data struct for one body-bearing decl. Includes all
 * effective properties (own + inherited via specializes chain).
 */
export declare function renderCStructs(d: Declaration, idx: TypeIndex, cycleSet: ReadonlySet<string>): string[];
/**
 * Build a single C field declaration in the form `T name[d0][d1]...`
 * (for arrays) or `T name` (for everything else). Used by struct
 * emission AND by parameter lists in event wrappers — same syntax.
 */
export declare function cFieldDecl(t: TypeRef, name: string): string;
export declare function cFieldName(name: string): string;
/**
 * Map a TypeRef to its C type string. Array<T,N> recurses (matrices
 * compose). Set/Option emit a sentinel comment so the user sees the
 * v1 limit at the field site rather than getting a confusing later
 * error.
 */
export declare function cTypeFor(t: TypeRef): string;
/**
 * Build the array-of-array field expression, e.g.
 *   Array<Real, 16>           -> "double[16]"
 *   Array<Array<Real, 6>, 6>  -> "double[6][6]"
 *
 * The caller is responsible for splicing this between the field
 * name and the trailing `;`:
 *   `double name[6][6];`
 */
export declare function cArrayFieldType(t: TypeRef): string;
//# sourceMappingURL=types.d.ts.map