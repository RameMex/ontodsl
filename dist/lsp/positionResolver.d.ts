/**
 * Phase 12 Session 2 — position resolver.
 *
 * Given an AST and a 0-indexed (line, character) coordinate (LSP
 * convention), find what the user is pointing at:
 *
 *   - "typeRef" — a NamedType reference (e.g. `BatteryPack` inside
 *     `property battery: BatteryPack`). Most common hover/jump case.
 *   - "decl" — the name in a top-level declaration header
 *     (e.g. the `Drone` in `kind Drone { ... }`). Useful for
 *     "find references" later.
 *   - "property" — a property name on a body-bearing decl
 *     (e.g. the `chargeLevel` in `property chargeLevel: Real`).
 *
 * Returned `name` is the source identifier; `usageKind` distinguishes
 * the three cases. `range` is the LSP-formatted range of the
 * identifier (NOT the surrounding declaration).
 *
 * Implementation: walks the AST looking at `location` fields. The DSL
 * stores 1-indexed line/column; we convert to 0-indexed at the
 * boundary with the LSP layer.
 *
 * We DO NOT precompute an index — the AST is small, and walking it
 * for each hover/jump request is single-digit milliseconds. If
 * scaling becomes an issue, an `IdentifierIndex` can be built once
 * per parse.
 */
import type { Declaration, OntoFile } from "../ast/index.js";
export type UsageKind = "typeRef" | "decl" | "property";
export interface ResolvedRef {
    readonly name: string;
    readonly usageKind: UsageKind;
    /** 0-indexed LSP-style range of the identifier itself. */
    readonly range: {
        readonly start: {
            readonly line: number;
            readonly character: number;
        };
        readonly end: {
            readonly line: number;
            readonly character: number;
        };
    };
}
export declare function resolveAtPosition(ast: OntoFile, line: number, character: number): ResolvedRef | null;
/**
 * Find the declaration with the given name, if any. Used by both
 * hover (to enrich a typeRef hit with the target's stereotype +
 * properties) and definition (to compute the jump target).
 */
export declare function findDeclaration(ast: OntoFile, name: string): Declaration | null;
//# sourceMappingURL=positionResolver.d.ts.map