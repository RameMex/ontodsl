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
/**
 * Convert a DSL SourceLocation (1-indexed line/column) to an
 * LSP-style 0-indexed range covering exactly that span.
 */
function toLspRange(loc) {
    const line = loc.line - 1;
    const character = loc.column - 1;
    return {
        start: { line, character },
        end: { line, character: character + loc.length },
    };
}
/**
 * Test whether (line, character) falls within an LSP range
 * (0-indexed, end-exclusive).
 */
function rangeContains(r, line, character) {
    if (line < r.start.line || line > r.end.line)
        return false;
    if (line === r.start.line && character < r.start.character)
        return false;
    if (line === r.end.line && character >= r.end.character)
        return false;
    return true;
}
export function resolveAtPosition(ast, line, character) {
    // Walk every declaration. We check, in order:
    //   1. Property declarations (and nested type refs in their types)
    //   2. The decl's header span (for "decl" usage hits)
    //   3. Other contexts (events, invariants, etc.) — limited Session 2
    //      scope; type refs in event params are also picked up.
    for (const d of ast.declarations) {
        const hit = resolveInDeclaration(d, line, character);
        if (hit)
            return hit;
    }
    return null;
}
function resolveInDeclaration(d, line, character) {
    // Deepest first: properties' type refs (NamedType), then property
    // names, then event parameters' type refs, then the decl header.
    if ("properties" in d) {
        for (const p of d.properties) {
            const hit = resolveInProperty(p, line, character);
            if (hit)
                return hit;
        }
    }
    if ("events" in d) {
        for (const ev of d.events) {
            for (const param of ev.parameters) {
                const hit = resolveInTypeRef(param.parameterType, line, character);
                if (hit)
                    return hit;
            }
        }
    }
    // Declaration header — approximate via "first line of the decl".
    // Without a separate token-level location for the name, we treat
    // a hit anywhere on the first line of the decl as a "decl" usage.
    // If a property happens to be on the same line, the property
    // resolution above already returned, so this is unreachable for
    // those cases.
    if (line === d.location.line - 1) {
        return {
            name: d.name,
            usageKind: "decl",
            range: toLspRange(d.location),
        };
    }
    return null;
}
function resolveInProperty(p, line, character) {
    // First, the type ref — this is the most common hover target.
    const typeHit = resolveInTypeRef(p.propertyType, line, character);
    if (typeHit)
        return typeHit;
    // The property's own location covers the entire `property foo: Bar;`
    // span. We can't sub-locate the name without re-tokenization, but
    // we can approximate: if the cursor is in the property's location
    // AND not in the type ref, treat it as the name.
    const propRange = toLspRange(p.location);
    if (rangeContains(propRange, line, character)) {
        return {
            name: p.name,
            usageKind: "property",
            range: propRange,
        };
    }
    return null;
}
function resolveInTypeRef(t, line, character) {
    if (t.kind === "NamedType") {
        const r = toLspRange(t.location);
        if (rangeContains(r, line, character)) {
            return { name: t.name, usageKind: "typeRef", range: r };
        }
    }
    if (t.kind === "SetType" || t.kind === "OptionType") {
        return resolveInTypeRef(t.elementType, line, character);
    }
    // PrimitiveType: not a user-defined ref, no hover/jump target.
    return null;
}
/**
 * Find the declaration with the given name, if any. Used by both
 * hover (to enrich a typeRef hit with the target's stereotype +
 * properties) and definition (to compute the jump target).
 */
export function findDeclaration(ast, name) {
    for (const d of ast.declarations) {
        if (d.name === name)
            return d;
    }
    return null;
}
//# sourceMappingURL=positionResolver.js.map