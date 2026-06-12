/**
 * Phase 12 Session 3 — find references.
 *
 * Given a name, return ALL locations in the AST where that name
 * appears: declarations, type references in property types, type
 * references in event parameter types, and (Session 3 scope keeps
 * it conservative) the same coverage the position resolver has.
 *
 * Returned ranges are 0-indexed LSP-style. The list is unordered —
 * editors typically sort by file/position themselves.
 */
import type { OntoFile } from "../ast/index.js";
export interface ReferenceLocation {
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
export declare function findReferences(ast: OntoFile, uri: string, name: string, includeDeclaration: boolean): readonly ReferenceLocation[];
//# sourceMappingURL=references.d.ts.map