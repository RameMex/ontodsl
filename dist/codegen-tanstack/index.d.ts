/**
 * Phase 25.2 — TanStack/Drizzle/React fullstack codegen target.
 *
 * `renderTanstack(ast)` produces a bundle of TypeScript files
 * scaffolding an application:
 *
 *   - `db/schema.ts`         Drizzle SQLite tables, one per data-kind
 *   - `services/index.ts`    Service-function skeletons per EventDecl,
 *                            wired to validate*() from the regular TS
 *                            codegen target. Mutation logic is left as
 *                            TODO comments — the spec doesn't carry
 *                            enough to derive SQL operations from
 *                            post-conditions.
 *   - `server/routes.ts`     JSON API endpoints, one POST per EventDecl,
 *                            with zod-style parameter shape.
 *   - `routes/index.tsx`     React routes scaffolding (one form per
 *                            EventDecl).
 *
 * Heuristic: a "data kind" is a KindDecl or SubkindDecl whose
 * `identity:` declaration is present AND which has at least one
 * Real / Integer / Boolean / String property beyond the identity.
 * Documentary kinds (e.g. ADR records, agent proxies) don't get
 * tables — they're excluded.
 *
 * Determinism: same AST → same output bytes. Renames sort
 * alphabetically. No timestamps.
 */
import type { OntoFile } from "../ast/index.js";
export interface TanstackBundle {
    readonly files: ReadonlyArray<{
        path: string;
        content: string;
    }>;
}
export declare function renderTanstack(file: OntoFile): TanstackBundle;
//# sourceMappingURL=index.d.ts.map