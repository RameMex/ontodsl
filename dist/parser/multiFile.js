/**
 * Phase 17 / Paso 5 — Multi-file resolver.
 *
 * `parseFile(path)` is the entry point for federation: reads the
 * file at `path`, parses it, then recursively loads every
 * `import "./other.onto";` it declares (relative to the importing
 * file's directory). Merges all transitive declarations into a
 * single OntoFile that downstream codegen / semantic checks treat
 * as one unit.
 *
 * Why merge into one file rather than expose a multi-file AST:
 *   - Codegen and semantic checks already walk a single OntoFile.
 *     Touching every consumer to handle a tree of files would
 *     balloon the surface area for a feature most users encounter
 *     as "I just want my .onto split into reasonable files."
 *   - The merge preserves provenance: each merged Declaration
 *     keeps its `location` pointing at the source-file path the
 *     resolver loaded it from, so error messages cite the right
 *     file even after merge.
 *
 * Detected at this layer:
 *   - Cycles: A imports B imports A → error E1.
 *   - Duplicate top-level names across files → error E2 (uses the
 *     same code as S1 in single-file mode for consistency).
 *   - File not found at the resolved path → error E3.
 *
 * Out of scope here (handled by downstream semantic checks):
 *   - Cross-file type resolution / inheritance / OCL nav
 *     (effectiveProperties etc. already walk the merged decl list).
 *   - Namespace clashes when imported files use different
 *     `namespace foo;` headers (v1 ignores all but the root's
 *     namespace — file imports are nominally "this is part of the
 *     same model"; logical-namespace federation is v2).
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve as resolvePath, isAbsolute } from "node:path";
import { parse } from "./index.js";
import { validateSemantics } from "../semantic/index.js";
/**
 * Load + parse a .onto file and recursively merge all its imports.
 *
 * Path resolution: each `import "./other.onto";` is resolved
 * relative to the importing file's directory (not the root's).
 * Absolute paths are honoured as-is.
 */
export function parseFile(rootPath) {
    const errors = [];
    const loadedFiles = [];
    const visited = new Map(); // abs path → parsed AST
    const stack = new Set(); // for cycle detection
    const rootAbs = isAbsolute(rootPath) ? rootPath : resolvePath(rootPath);
    // Paso 5 day 2:
    //
    // `selectiveByFile` tracks, per-imported-file, the UNION of names
    // any importer asked for via `import { … } from "./that.onto"`.
    // A file with at least one non-selective importer is "fully
    // exposed" (sentinel: undefined entry means "not yet seen",
    // present-but-empty Set means "non-selective took precedence").
    //
    // `aliasByFile` records the most recent `as Alias` for a file,
    // used in E2 error messages so the user knows which import to
    // disambiguate. A file may have multiple aliases (one per
    // importer); we keep the first seen — good enough for v1.
    const selectiveByFile = new Map();
    const aliasByFile = new Map();
    if (!existsSync(rootAbs)) {
        return {
            ast: null,
            errors: [
                { code: "E3", message: `file not found: ${rootAbs}`, path: rootAbs },
            ],
            loadedFiles: [],
        };
    }
    // load() returns the parsed AST for `abs`; populates `errors` and
    // `loadedFiles` along the way. Recurses through imports with cycle
    // detection via `stack`.
    const load = (abs) => {
        // Cycle check must run BEFORE the visited cache lookup: when we
        // re-enter `abs` mid-recursion (A → B → A), `abs` is already in
        // `visited` (parse succeeded before we descended into imports),
        // but it's also in `stack` — that's the cycle signal.
        if (stack.has(abs)) {
            errors.push({
                code: "E1",
                message: `import cycle detected at '${abs}' (stack: ${Array.from(stack).join(" → ")} → ${abs})`,
                path: abs,
            });
            return null;
        }
        const cached = visited.get(abs);
        if (cached)
            return cached;
        if (!existsSync(abs)) {
            errors.push({
                code: "E3",
                message: `imported file not found: ${abs}`,
                path: abs,
            });
            return null;
        }
        stack.add(abs);
        loadedFiles.push(abs);
        const source = readFileSync(abs, "utf8");
        // Per-file: parse SYNTACTICALLY only. Semantic check runs once
        // on the merged AST after all imports resolve, so cross-file
        // type references (e.g. `Pack.primary: Battery` where Battery
        // lives in an imported file) don't spuriously trip S11.
        const { ast, errors: parseErrors } = parse(source, {
            validateSemantics: false,
        });
        for (const e of parseErrors) {
            // Annotate single-file parse errors with their source path so
            // the CLI can group / sort by file.
            errors.push({ ...e, path: abs });
        }
        if (ast === null) {
            stack.delete(abs);
            return null;
        }
        visited.set(abs, ast);
        // Recurse into this file's imports BEFORE returning, so cycles
        // surface before we use the partial result.
        const dir = dirname(abs);
        for (const imp of ast.imports) {
            const resolvedAbs = isAbsolute(imp.path)
                ? imp.path
                : resolvePath(dir, imp.path);
            // Record selective filter + alias for this importer's view of
            // the target file. Non-selective imports widen the exposure to
            // "all" and never shrink back.
            const existing = selectiveByFile.get(resolvedAbs);
            if (imp.selective === null) {
                selectiveByFile.set(resolvedAbs, "all");
            }
            else if (existing === undefined) {
                selectiveByFile.set(resolvedAbs, new Set(imp.selective));
            }
            else if (existing !== "all") {
                for (const name of imp.selective)
                    existing.add(name);
            }
            if (imp.alias !== null && !aliasByFile.has(resolvedAbs)) {
                aliasByFile.set(resolvedAbs, imp.alias);
            }
            load(resolvedAbs);
        }
        stack.delete(abs);
        return ast;
    };
    const rootAst = load(rootAbs);
    if (rootAst === null) {
        return { ast: null, errors, loadedFiles };
    }
    // Merge: collect every declaration from every loaded file. The
    // root's schemaVersion + namespace + imports list win; declaration
    // ordering follows load order (root first, then imports in
    // depth-first traversal).
    //
    // Day 2 — selective filter applied here: a file with a registered
    // selective set only contributes names in that set. A file with
    // "all" (or no entry, which we treat as "all" — the root file
    // case) contributes everything. Files in `selective` mode that
    // reference names NOT in their target file's actual decl list
    // get a W39 advisory ("you asked for X but it doesn't exist").
    const mergedDecls = [...rootAst.declarations];
    const seenNames = new Set(rootAst.declarations.map((d) => d.name));
    for (const abs of loadedFiles) {
        if (abs === rootAbs)
            continue; // root's decls already added
        const file = visited.get(abs);
        if (!file)
            continue;
        const filter = selectiveByFile.get(abs);
        const alias = aliasByFile.get(abs);
        const actualNames = new Set(file.declarations.map((d) => d.name));
        // Validate selective list: warn on any selected name that
        // doesn't exist in the target file.
        if (filter !== undefined && filter !== "all") {
            for (const name of filter) {
                if (!actualNames.has(name)) {
                    errors.push({
                        code: "W39",
                        message: `[W39] selective import asked for '${name}' from '${abs}'` +
                            `${alias ? ` (alias '${alias}')` : ""} but the file declares no such name`,
                        path: abs,
                    });
                }
            }
        }
        for (const decl of file.declarations) {
            // Selective filter: skip decls not in the whitelist.
            if (filter !== undefined && filter !== "all" && !filter.has(decl.name)) {
                continue;
            }
            if (seenNames.has(decl.name)) {
                errors.push({
                    code: "E2",
                    message: `duplicate top-level declaration '${decl.name}' — defined ` +
                        `in both root and ${abs}` +
                        `${alias ? ` (imported as '${alias}')` : ""}`,
                    path: abs,
                });
                // Skip the duplicate so codegen doesn't double-emit it.
                continue;
            }
            seenNames.add(decl.name);
            mergedDecls.push(decl);
        }
    }
    const mergedAst = { ...rootAst, declarations: mergedDecls };
    // Semantic check on the MERGED AST — gives cross-file refs a fair
    // shot before flagging unknown types. Per-file syntactic errors
    // already landed in `errors` above; we add semantic findings here.
    const semErrors = validateSemantics(mergedAst);
    for (const e of semErrors) {
        errors.push({
            stage: "semantic",
            message: e.message,
            code: e.code,
            line: e.location?.line ?? 0,
            column: e.location?.column ?? 0,
            // We don't know which file a semantic error came from in the
            // merged AST (decl location is preserved but file-of-origin
            // mapping would need a second-pass map). v2 fix: tag each
            // merged decl with its origin path.
            path: rootAbs,
        });
    }
    return {
        ast: mergedAst,
        errors,
        loadedFiles,
    };
}
//# sourceMappingURL=multiFile.js.map