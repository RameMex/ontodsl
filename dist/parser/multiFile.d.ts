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
import type { OntoFile } from "../ast/nodes.js";
export interface MultiFileError {
    readonly code: "E1" | "E2" | "E3";
    readonly message: string;
    readonly path: string;
}
export interface ParseFileResult {
    /**
     * Merged AST: the root file's namespace + schema + every
     * transitive declaration (root + imports). Null when the root
     * file itself couldn't be parsed.
     */
    readonly ast: OntoFile | null;
    /**
     * Per-file diagnostics gathered from `parse()` PLUS multi-file
     * errors (cycles, missing files, duplicates). Single combined
     * list so the CLI doesn't have to merge two streams.
     */
    readonly errors: readonly unknown[];
    /**
     * Absolute paths of every file the resolver actually loaded.
     * Useful for the dashboard ("federation graph: 4 files merged")
     * and for cache invalidation in watch mode.
     */
    readonly loadedFiles: readonly string[];
}
/**
 * Load + parse a .onto file and recursively merge all its imports.
 *
 * Path resolution: each `import "./other.onto";` is resolved
 * relative to the importing file's directory (not the root's).
 * Absolute paths are honoured as-is.
 */
export declare function parseFile(rootPath: string): ParseFileResult;
//# sourceMappingURL=multiFile.d.ts.map