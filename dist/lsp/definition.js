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
import { findDeclaration } from "./positionResolver.js";
function locToRange(loc) {
    const line = loc.line - 1;
    const character = loc.column - 1;
    return {
        start: { line, character },
        end: { line, character: character + loc.length },
    };
}
export function findDefinitionLocation(ast, uri, ref) {
    if (ref.usageKind === "typeRef" || ref.usageKind === "decl") {
        const target = findDeclaration(ast, ref.name);
        if (!target)
            return null;
        return { uri, range: locToRange(target.location) };
    }
    if (ref.usageKind === "property") {
        // Walk decls to find the property. Same caveat as in hover.ts:
        // ambiguous if two decls share a property name. The first match
        // wins; precise resolution would require knowing the owning decl
        // at resolve time.
        for (const d of ast.declarations) {
            if (!("properties" in d))
                continue;
            const p = d.properties.find((x) => x.name === ref.name);
            if (p)
                return { uri, range: locToRange(p.location) };
        }
        return null;
    }
    return null;
}
//# sourceMappingURL=definition.js.map