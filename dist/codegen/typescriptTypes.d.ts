/**
 * Phase 10 code generation — TypeScript interface emission.
 *
 * For every body-bearing declaration we emit:
 *   1. A branded identity type when the declaration supplies its own
 *      identity (Kind, Relator, Collective, Quantity, Happening,
 *      Agent, Commitment, UseCase).
 *   2. An `interface X` with typed properties. Inheritance is
 *      emitted as `extends Parent` when the declaration specializes
 *      one or more parents.
 *
 * The generated file is meant to be consumed as an import:
 *     import type { Drone, DroneId } from "./generated/types";
 *
 * Scope:
 *   - Primitive types map to TS: Real → number, Integer → number,
 *     String → string, Boolean → boolean.
 *   - Named references to other declarations use that declaration's
 *     own interface name when the property is "part-of" or "refers to
 *     a concept" (e.g. `battery: BatteryPack`).
 *   - Identity fields use the branded type (e.g. `trackingNumber:
 *     PackageId`). This prevents accidentally mixing a PackageId with
 *     a CustomerId at the type-system level.
 *   - Set<T> maps to ReadonlySet<T> — readonly because our instances
 *     are immutable by convention.
 *
 * Deliberately out:
 *   - Event and query bodies — those generate FUNCTIONS, which live
 *     in the validators / event-handler layer, not in the type layer.
 *   - Invariants — also in the validators layer.
 *   - RelationDecl — relations are edges; we don't give them a
 *     dedicated interface (the relation's source and target types
 *     are already declared).
 *   - PhaseGroupDecl — phases are a lifecycle concern; a later
 *     codegen phase can emit state-machine scaffolding.
 */
import type { OntoFile } from "../ast/index.js";
/**
 * Render the TypeScript type layer for `file`. Returns a single
 * string containing the complete module source. Caller is
 * responsible for writing to disk; the dispatcher in `index.ts`
 * wraps this output with a file header comment.
 */
export declare function renderTypes(file: OntoFile): string;
//# sourceMappingURL=typescriptTypes.d.ts.map