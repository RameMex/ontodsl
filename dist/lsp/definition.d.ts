/**
 * Phase 12 Session 2 — go-to-definition.
 *
 * Given a resolved reference, return the LSP Location of the
 * declaration the reference points to. For typeRef hits, that's the
 * declaration with the matching name; for decl hits, the cursor is
 * already on the definition (we still return its range — the editor
 * may use this for "peek definition"); for property hits, we point
 * at the property's location within its owning declaration.
 *
 * Returns null when no definition can be found (unresolved
 * reference, or the cursor is on a primitive type).
 */
import type { OntoFile } from "../ast/index.js";
import type { ResolvedRef } from "./positionResolver.js";
export interface DefinitionLocation {
    readonly uri: string;
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
export declare function findDefinitionLocation(ast: OntoFile, uri: string, ref: ResolvedRef): DefinitionLocation | null;
//# sourceMappingURL=definition.d.ts.map