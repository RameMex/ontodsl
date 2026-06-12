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
import type {
  KindDecl,
  SubkindDecl,
  EventDecl,
  ParameterDecl,
  PropertyDecl,
  TypeRef,
} from "../ast/nodes.js";
import type { OclExpr } from "../ocl/nodes.js";

export interface TanstackBundle {
  readonly files: ReadonlyArray<{ path: string; content: string }>;
}

export function renderTanstack(file: OntoFile): TanstackBundle {
  const dataKinds = collectDataKinds(file);
  const eventsByOwner = collectEventsByOwner(file);
  const files: Array<{ path: string; content: string }> = [];
  files.push({ path: "db/schema.ts", content: renderDrizzleSchema(dataKinds) });
  files.push({ path: "services/index.ts", content: renderServiceSkeletons(eventsByOwner, dataKinds) });
  files.push({ path: "server/routes.ts", content: renderServerRoutes(eventsByOwner) });
  files.push({ path: "routes/index.tsx", content: renderReactForms(eventsByOwner) });
  return { files };
}

// ─── Selection: which kinds become tables ───────────────────────────────

function collectDataKinds(file: OntoFile): (KindDecl | SubkindDecl)[] {
  const out: (KindDecl | SubkindDecl)[] = [];
  for (const d of file.declarations) {
    if (d.kind !== "KindDecl" && d.kind !== "SubkindDecl") continue;
    if (!hasIdentity(d)) continue;
    if (countDataProperties(d) === 0) continue;
    out.push(d);
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

function hasIdentity(d: KindDecl | SubkindDecl): boolean {
  if (d.kind === "KindDecl") return d.identity !== null;
  // Subkinds inherit identity — accept them when they have data properties.
  return true;
}

function countDataProperties(d: KindDecl | SubkindDecl): number {
  return d.properties.filter((p) => isPersistableType(p.propertyType)).length;
}

function isPersistableType(t: TypeRef): boolean {
  if (t.kind === "PrimitiveType") {
    return ["Real", "Integer", "Boolean", "String"].includes(t.name);
  }
  if (t.kind === "OptionType") return isPersistableType(t.elementType);
  // Set<T> and Array<T,N> → not directly persistable as a column; the
  // spec-to-app demo handles these via join tables in hand-written code.
  return false;
}

function collectEventsByOwner(
  file: OntoFile,
): ReadonlyArray<{ owner: KindDecl | SubkindDecl; events: readonly EventDecl[] }> {
  const out: { owner: KindDecl | SubkindDecl; events: readonly EventDecl[] }[] = [];
  for (const d of file.declarations) {
    if (d.kind !== "KindDecl" && d.kind !== "SubkindDecl") continue;
    if (d.events.length === 0) continue;
    out.push({ owner: d, events: d.events });
  }
  return out.sort((a, b) => a.owner.name.localeCompare(b.owner.name));
}

// ─── Renderer: Drizzle schema ──────────────────────────────────────────

function renderDrizzleSchema(kinds: ReadonlyArray<KindDecl | SubkindDecl>): string {
  const L: string[] = [];
  L.push(autogenHeader("Drizzle schema — one table per data-kind"));
  L.push("");
  L.push(`import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";`);
  L.push("");

  for (const k of kinds) {
    const tableName = toSnakeCase(k.name);
    L.push(`export const ${camelCase(plural(k.name))} = sqliteTable(${JSON.stringify(tableName)}, {`);

    // Identity column (PK).
    const identityName = k.kind === "KindDecl" ? k.identity?.propertyName : "id";
    if (identityName) {
      L.push(`  ${identityName}: text(${JSON.stringify(toSnakeCase(identityName))}).primaryKey(),`);
    }

    for (const p of k.properties) {
      if (p.name === identityName) continue;
      if (!isPersistableType(p.propertyType)) continue;
      const col = drizzleColumnFor(p);
      if (col) L.push(`  ${p.name}: ${col},`);
    }
    L.push("});");
    L.push("");

    L.push(`export type ${k.name}Row = typeof ${camelCase(plural(k.name))}.$inferSelect;`);
    L.push("");
  }
  return L.join("\n");
}

function drizzleColumnFor(p: PropertyDecl): string | null {
  const colName = JSON.stringify(toSnakeCase(p.name));
  const t = unwrapOption(p.propertyType);
  if (t.kind !== "PrimitiveType") return null;
  const notNull = !isOptional(p.propertyType);
  let column: string;
  switch (t.name) {
    case "Real":
      column = `real(${colName})`;
      break;
    case "Integer":
      column = `integer(${colName})`;
      break;
    case "Boolean":
      column = `integer(${colName}, { mode: "boolean" })`;
      break;
    case "String":
      column = `text(${colName})`;
      break;
    default:
      return null;
  }
  if (notNull) column += ".notNull()";
  return column;
}

function unwrapOption(t: TypeRef): TypeRef {
  if (t.kind === "OptionType") return t.elementType;
  return t;
}
function isOptional(t: TypeRef): boolean {
  return t.kind === "OptionType";
}

// ─── Phase 25.3: post-condition → Drizzle update synthesis ─────────────

/**
 * One column assignment derived from a post-condition `self.X = expr`.
 * The `valueExpr` is a JS source-code string suitable for the right
 * side of a Drizzle `set({ X: <expr> })` object property. It uses
 * either a plain JS literal/identifier or a `sql\`…\`` template
 * referring to the table's columns by name.
 */
interface Assignment {
  readonly column: string;
  readonly valueExpr: string;
  /** True if the value uses Drizzle's `sql` tagged template. */
  readonly needsSqlImport: boolean;
}

interface UpdateSpec {
  readonly assignments: readonly Assignment[];
  /** True if at least one assignment needs the `sql` helper. */
  readonly needsSqlImport: boolean;
  /** Names of event parameters referenced by any assignment. */
  readonly usedParams: readonly string[];
}

/**
 * Walk an event's `post:` clauses and try to derive UPDATE assignments.
 *
 * Recognized clause shapes (anything else is silently skipped — those
 * become post-mutation invariants for `validate*()` to enforce):
 *
 *   - `self.X = literal`                     → set X to JS literal
 *   - `self.X = paramName`                   → set X to parameter value
 *   - `self.X = self.Y@pre`                  → set X to current value of Y
 *   - `self.X = self.Y@pre OP arg`           → arithmetic on column
 *   - conjunction `A and B`                  → both contribute assignments
 *
 * Returns null when zero assignments could be derived (caller falls
 * back to TODO comments).
 */
function tryDeriveUpdate(
  event: EventDecl,
  tableConst: string,
): UpdateSpec | null {
  const assignments: Assignment[] = [];
  const usedParams = new Set<string>();
  let needsSql = false;
  for (const clause of event.post) {
    if (!clause.parsed) continue;
    const out = tryDeriveAssignments(clause.parsed, event.parameters, tableConst);
    if (!out) continue; // this clause is a constraint, not an assignment
    for (const a of out) {
      assignments.push(a);
      if (a.needsSqlImport) needsSql = true;
    }
    for (const p of collectParamRefs(clause.parsed, event.parameters)) {
      usedParams.add(p);
    }
  }
  if (assignments.length === 0) return null;
  return { assignments, needsSqlImport: needsSql, usedParams: [...usedParams] };
}

function tryDeriveAssignments(
  e: OclExpr,
  params: readonly ParameterDecl[],
  tableConst: string,
): Assignment[] | null {
  // Conjunction: `a and b` → flatten.
  if (e.kind === "OclBinary" && e.op === "and") {
    const l = tryDeriveAssignments(e.left, params, tableConst);
    const r = tryDeriveAssignments(e.right, params, tableConst);
    if (l === null && r === null) return null;
    return [...(l ?? []), ...(r ?? [])];
  }
  // Direct assignment shape: `self.X = expr` (X without @pre).
  if (
    e.kind === "OclBinary" &&
    e.op === "=" &&
    e.left.kind === "OclNav" &&
    e.left.object.kind === "OclVarRef" &&
    e.left.object.name === "self" &&
    !e.left.isPre
  ) {
    const col = e.left.property;
    const t = translateValueExpr(e.right, params, tableConst);
    if (!t) return null;
    return [{ column: col, valueExpr: t.code, needsSqlImport: t.needsSql }];
  }
  // Phase 25.4 — if-statement form wrapping branches that assign:
  //   `if cond then self.X = a else self.X = b endif`
  // Merge branches per column into CASE WHEN expressions. Columns
  // assigned in only one branch get a CASE WHEN cond THEN value ELSE
  // self.<col> END (current value preserved when cond is false).
  if (e.kind === "OclIf") {
    const thenAs = tryDeriveAssignments(e.then, params, tableConst);
    const elseAs = tryDeriveAssignments(e.else_, params, tableConst);
    if (!thenAs && !elseAs) return null;
    const condT = translateValueExpr(e.cond, params, tableConst);
    if (!condT) return null;
    const condFrag = condT.needsSql ? condT.code : `\${${condT.code}}`;
    const byColThen = new Map((thenAs ?? []).map((a) => [a.column, a]));
    const byColElse = new Map((elseAs ?? []).map((a) => [a.column, a]));
    const allCols = new Set<string>([...byColThen.keys(), ...byColElse.keys()]);
    const out: Assignment[] = [];
    for (const col of allCols) {
      const tFrag = (() => {
        const a = byColThen.get(col);
        if (!a) return `\${${tableConst}.${col}}`;
        return a.needsSqlImport ? a.valueExpr : `\${${a.valueExpr}}`;
      })();
      const eFrag = (() => {
        const a = byColElse.get(col);
        if (!a) return `\${${tableConst}.${col}}`;
        return a.needsSqlImport ? a.valueExpr : `\${${a.valueExpr}}`;
      })();
      out.push({
        column: col,
        valueExpr: `CASE WHEN ${condFrag} THEN ${tFrag} ELSE ${eFrag} END`,
        needsSqlImport: true,
      });
    }
    return out;
  }
  return null;
}

/**
 * Translate the right-hand side of an assignment into JS source code
 * suitable for a Drizzle `set()` value. Returns null when the RHS
 * uses constructs we can't translate (function calls, nested
 * navigations, sets, etc.).
 */
function translateValueExpr(
  e: OclExpr,
  params: readonly ParameterDecl[],
  tableConst: string,
): { code: string; needsSql: boolean } | null {
  // Literal: just the JS value.
  if (e.kind === "OclLiteral") {
    if (e.litKind === "Integer" || e.litKind === "Real") {
      return { code: String(e.value), needsSql: false };
    }
    if (e.litKind === "Boolean") return { code: String(e.value), needsSql: false };
    if (e.litKind === "String") return { code: JSON.stringify(e.value), needsSql: false };
    return null; // null literal → leave as TODO
  }
  // Parameter reference.
  if (e.kind === "OclVarRef") {
    if (params.find((p) => p.name === e.name)) {
      return { code: e.name, needsSql: false };
    }
    return null;
  }
  // self.X or self.X@pre → reference the table column. Drizzle: ${table.column}
  if (
    e.kind === "OclNav" &&
    e.object.kind === "OclVarRef" &&
    e.object.name === "self"
  ) {
    return { code: `\${${tableConst}.${e.property}}`, needsSql: true };
  }
  // Arithmetic: emit as sql template fragments.
  if (e.kind === "OclBinary" && ["+", "-", "*", "/"].includes(e.op)) {
    const l = translateValueExpr(e.left, params, tableConst);
    const r = translateValueExpr(e.right, params, tableConst);
    if (!l || !r) return null;
    // Wrap non-sql operands in ${...} so they go into the template.
    const lFrag = l.needsSql ? l.code : `\${${l.code}}`;
    const rFrag = r.needsSql ? r.code : `\${${r.code}}`;
    return { code: `${lFrag} ${e.op} ${rFrag}`, needsSql: true };
  }
  // Phase 25.4 — comparison and boolean operators for use inside
  // OclIf conditions (and as Boolean-valued assignments).
  if (e.kind === "OclBinary" && ["=", "<>", "<", "<=", ">", ">="].includes(e.op)) {
    const l = translateValueExpr(e.left, params, tableConst);
    const r = translateValueExpr(e.right, params, tableConst);
    if (!l || !r) return null;
    const lFrag = l.needsSql ? l.code : `\${${l.code}}`;
    const rFrag = r.needsSql ? r.code : `\${${r.code}}`;
    // OCL `=`/`<>` map to SQL `=`/`<>`.
    return { code: `${lFrag} ${e.op} ${rFrag}`, needsSql: true };
  }
  if (e.kind === "OclBinary" && (e.op === "and" || e.op === "or")) {
    const l = translateValueExpr(e.left, params, tableConst);
    const r = translateValueExpr(e.right, params, tableConst);
    if (!l || !r) return null;
    const lFrag = l.needsSql ? l.code : `\${${l.code}}`;
    const rFrag = r.needsSql ? r.code : `\${${r.code}}`;
    return { code: `(${lFrag}) ${e.op.toUpperCase()} (${rFrag})`, needsSql: true };
  }
  // Unary minus: `-x`.
  if (e.kind === "OclUnary" && e.op === "-") {
    const inner = translateValueExpr(e.operand, params, tableConst);
    if (!inner) return null;
    const frag = inner.needsSql ? inner.code : `\${${inner.code}}`;
    return { code: `-${frag}`, needsSql: true };
  }
  if (e.kind === "OclUnary" && e.op === "not") {
    const inner = translateValueExpr(e.operand, params, tableConst);
    if (!inner) return null;
    const frag = inner.needsSql ? inner.code : `\${${inner.code}}`;
    return { code: `NOT (${frag})`, needsSql: true };
  }
  // Phase 25.4 — OclIf as a value: `if cond then a else b endif`
  // → SQL `CASE WHEN cond THEN a ELSE b END`.
  if (e.kind === "OclIf") {
    const condT = translateValueExpr(e.cond, params, tableConst);
    const thenT = translateValueExpr(e.then, params, tableConst);
    const elseT = translateValueExpr(e.else_, params, tableConst);
    if (!condT || !thenT || !elseT) return null;
    const condFrag = condT.needsSql ? condT.code : `\${${condT.code}}`;
    const thenFrag = thenT.needsSql ? thenT.code : `\${${thenT.code}}`;
    const elseFrag = elseT.needsSql ? elseT.code : `\${${elseT.code}}`;
    return {
      code: `CASE WHEN ${condFrag} THEN ${thenFrag} ELSE ${elseFrag} END`,
      needsSql: true,
    };
  }
  return null;
}

function collectParamRefs(e: OclExpr, params: readonly ParameterDecl[]): string[] {
  const out: string[] = [];
  const walk = (x: OclExpr): void => {
    if (x.kind === "OclVarRef" && params.find((p) => p.name === x.name)) {
      out.push(x.name);
    }
    switch (x.kind) {
      case "OclBinary":
        walk(x.left);
        walk(x.right);
        break;
      case "OclUnary":
        walk(x.operand);
        break;
      case "OclNav":
      case "OclCall":
        walk(x.object);
        if (x.kind === "OclCall" && x.argument) walk(x.argument);
        break;
      case "OclIf":
        walk(x.cond);
        walk(x.then);
        walk(x.else_);
        break;
      case "OclSize":
      case "OclIsEmpty":
      case "OclNotEmpty":
        walk(x.source);
        break;
      case "OclIncludes":
        walk(x.source);
        walk(x.element);
        break;
      case "OclForAll":
      case "OclExists":
      case "OclSelect":
      case "OclReject":
      case "OclCollect":
        walk(x.source);
        walk(x.body);
        break;
      case "OclLet":
        walk(x.init);
        walk(x.body);
        break;
      // OclLiteral, OclVarRef leaves are handled above.
    }
  };
  walk(e);
  return [...new Set(out)];
}

// ─── Renderer: service skeletons ───────────────────────────────────────

function renderServiceSkeletons(
  byOwner: ReadonlyArray<{ owner: KindDecl | SubkindDecl; events: readonly EventDecl[] }>,
  _kinds: ReadonlyArray<KindDecl | SubkindDecl>,
): string {
  // First pass: figure out which tables + helpers we need to import.
  const tablesNeeded = new Set<string>();
  let anyUsesSql = false;
  for (const group of byOwner) {
    const tableConst = camelCase(plural(group.owner.name));
    for (const e of group.events) {
      const spec = tryDeriveUpdate(e, tableConst);
      if (spec) {
        tablesNeeded.add(tableConst);
        if (spec.needsSqlImport) anyUsesSql = true;
      }
    }
  }

  const L: string[] = [];
  L.push(autogenHeader("Service skeletons — one async function per EventDecl"));
  L.push("");
  L.push(`import { db } from "../db/index.js";`);
  if (tablesNeeded.size > 0) {
    const list = [...tablesNeeded].sort().join(", ");
    L.push(`import { ${list} } from "../db/schema.js";`);
  }
  const ormImports = ["eq"];
  if (anyUsesSql) ormImports.push("sql");
  L.push(`import { ${ormImports.join(", ")} } from "drizzle-orm";`);
  L.push(`// Validators from the ontodls TypeScript codegen target.`);
  L.push(`// Import every \`validate*\` for the kinds this service touches.`);
  L.push(`// import { validateXxx, ... } from "@onto/<your-app>";`);
  L.push("");

  L.push(`export class InvariantViolation extends Error {`);
  L.push(`  constructor(public readonly context: string, public readonly violations: readonly string[]) {`);
  L.push("    super(`Invariant violation in ${context}: ${violations.join('; ')}`);");
  L.push(`    this.name = "InvariantViolation";`);
  L.push(`  }`);
  L.push(`}`);
  L.push(`function assertNoViolations(violations: readonly string[], context: string): void {`);
  L.push(`  if (violations.length > 0) throw new InvariantViolation(context, violations);`);
  L.push(`}`);
  L.push("");

  for (const group of byOwner) {
    L.push(`// ─── Events on ${group.owner.name} ───`);
    L.push("");
    const tableConst = camelCase(plural(group.owner.name));
    const identityName = identityPropertyName(group.owner);
    for (const e of group.events) {
      const spec = tryDeriveUpdate(e, tableConst);
      const params = [
        `__selfId: string`,
        ...e.parameters.map((p) => `${p.name}: ${tsTypeOf(p.parameterType)}`),
      ].join(", ");
      const returnTsType = tsTypeOfReturn(e);
      L.push(`export async function ${e.name}(${params}): Promise<${returnTsType}> {`);

      // Always include the pre/post documentation as comments — useful
      // context even when we DO emit the mutation.
      if (e.pre.length > 0) {
        L.push(`  // Pre-conditions from spec (enforce manually if needed):`);
        for (const c of e.pre) {
          L.push(`  //   pre: ${c.rawExpression}`);
        }
      }
      if (e.post.length > 0) {
        L.push(`  // Post-conditions from spec:`);
        for (const c of e.post) {
          L.push(`  //   post: ${c.rawExpression}`);
        }
      }

      if (spec) {
        // Phase 25.3: we derived a real UPDATE from the post: clauses.
        L.push(`  return db.transaction(async (tx) => {`);
        L.push(`    // Auto-derived update from spec post-conditions:`);
        L.push(`    await tx.update(${tableConst}).set({`);
        for (const a of spec.assignments) {
          if (a.needsSqlImport) {
            L.push(`      ${a.column}: sql\`${a.valueExpr}\`,`);
          } else {
            L.push(`      ${a.column}: ${a.valueExpr},`);
          }
        }
        L.push(`    }).where(eq(${tableConst}.${identityName}, __selfId));`);
        L.push(`    // After mutation: re-validate against \`validate${group.owner.name}\` (import above)`);
        L.push(`    // to enforce spec invariants. Uncomment when you wire the import:`);
        L.push(`    // const row = await tx.select().from(${tableConst}).where(eq(${tableConst}.${identityName}, __selfId)).get();`);
        L.push(`    // assertNoViolations(validate${group.owner.name}(row as never), "${e.name}");`);
        L.push(`  });`);
      } else {
        L.push(`  // TODO: implement mutation logic for '${group.owner.name}.${e.name}'.`);
        L.push(`  // No assignment-shaped post-conditions were detected — the spec`);
        L.push(`  // here expresses constraints rather than direct mutations (e.g.`);
        L.push(`  // 'self.x >= 0'). Use the validate*() functions from the regular`);
        L.push(`  // TS codegen to enforce them post-mutation.`);
        L.push(`  throw new Error("not implemented: ${e.name}");`);
      }
      L.push(`}`);
      L.push("");
    }
  }
  return L.join("\n");
}

function identityPropertyName(d: KindDecl | SubkindDecl): string {
  if (d.kind === "KindDecl" && d.identity) return d.identity.propertyName;
  // Subkind: inherit. Without resolving the parent chain here we fall back
  // to a conventional name; the developer can rename if needed.
  return "id";
}

// ─── Renderer: server routes ───────────────────────────────────────────

function renderServerRoutes(
  byOwner: ReadonlyArray<{ owner: KindDecl | SubkindDecl; events: readonly EventDecl[] }>,
): string {
  const L: string[] = [];
  L.push(autogenHeader("Server routes — one POST per EventDecl"));
  L.push("");
  L.push(`import { z } from "zod";`);
  L.push(`import * as service from "../services/index.js";`);
  L.push(`import { InvariantViolation } from "../services/index.js";`);
  L.push("");
  L.push(`type Handler = (body: unknown) => Promise<unknown>;`);
  L.push("");
  L.push(`export const routes: Record<string, Handler> = {`);

  for (const group of byOwner) {
    for (const e of group.events) {
      const routePath = `/api/${kebabCase(group.owner.name)}/${kebabCase(e.name)}`;
      const schemaProps = [
        `    __selfId: z.string()`,
        ...e.parameters.map((p) => `    ${p.name}: ${zodTypeOf(p.parameterType)}`),
      ].join(",\n");
      const argList = ["input.__selfId", ...e.parameters.map((p) => `input.${p.name}`)].join(", ");
      L.push(`  ${JSON.stringify(`POST ${routePath}`)}: async (body) => {`);
      L.push(`    const schema = z.object({`);
      L.push(schemaProps);
      L.push(`    });`);
      L.push(`    const input = schema.parse(body);`);
      L.push(`    return await service.${e.name}(${argList});`);
      L.push(`  },`);
    }
  }
  L.push(`};`);
  L.push("");
  L.push(`export async function handle(method: string, path: string, body: unknown): Promise<{ status: number; body: unknown }> {`);
  L.push(`  const h = routes[\`\${method} \${path}\`];`);
  L.push(`  if (!h) return { status: 404, body: { error: "not found" } };`);
  L.push(`  try {`);
  L.push(`    return { status: 200, body: await h(body) };`);
  L.push(`  } catch (e) {`);
  L.push(`    if (e instanceof InvariantViolation) {`);
  L.push(`      return { status: 422, body: { error: e.message, kind: "InvariantViolation", context: e.context, violations: e.violations } };`);
  L.push(`    }`);
  L.push(`    return { status: 500, body: { error: (e as Error).message } };`);
  L.push(`  }`);
  L.push(`}`);
  return L.join("\n");
}

// ─── Renderer: React forms ─────────────────────────────────────────────

function renderReactForms(
  byOwner: ReadonlyArray<{ owner: KindDecl | SubkindDecl; events: readonly EventDecl[] }>,
): string {
  const L: string[] = [];
  L.push(autogenHeader("React form skeletons — one form per EventDecl"));
  L.push("");
  L.push(`import { useState, type FormEvent } from "react";`);
  L.push("");

  for (const group of byOwner) {
    for (const e of group.events) {
      const compName = `${cap(e.name)}Form`;
      L.push(`export function ${compName}() {`);
      // The __selfId is always required: events mutate one identified instance.
      L.push(`  const [__selfId, setSelfId] = useState<string>("");`);
      for (const p of e.parameters) {
        const init = defaultValueLit(p);
        L.push(`  const [${p.name}, set${cap(p.name)}] = useState${reactStateType(p)}(${init});`);
      }
      L.push(`  const [error, setError] = useState<string | null>(null);`);
      L.push(`  const [ok, setOk] = useState<string | null>(null);`);
      L.push("");
      L.push(`  const onSubmit = async (ev: FormEvent) => {`);
      L.push(`    ev.preventDefault();`);
      L.push(`    setError(null); setOk(null);`);
      L.push(`    const res = await fetch(${JSON.stringify(`/api/${kebabCase(group.owner.name)}/${kebabCase(e.name)}`)}, {`);
      L.push(`      method: "POST",`);
      L.push(`      headers: { "Content-Type": "application/json" },`);
      const bodyFields = ["__selfId", ...e.parameters.map((p) => p.name)].join(", ");
      L.push(`      body: JSON.stringify({ ${bodyFields} }),`);
      L.push(`    });`);
      L.push(`    const body = await res.json();`);
      L.push(`    if (!res.ok) setError(body.error ?? "error");`);
      L.push(`    else setOk("success: " + JSON.stringify(body));`);
      L.push(`  };`);
      L.push("");
      L.push(`  return (`);
      L.push(`    <form onSubmit={onSubmit}>`);
      L.push(`      <h3>${group.owner.name}.${e.name}</h3>`);
      L.push(`      <label>${group.owner.name} id</label>`);
      L.push(`      <input type="text" value={__selfId} onChange={(e) => setSelfId(e.target.value)} required />`);
      for (const p of e.parameters) {
        const inputType = inputTypeFor(p);
        L.push(`      <label>${p.name}</label>`);
        L.push(`      <input type=${JSON.stringify(inputType)} value={String(${p.name})} onChange={(e) => set${cap(p.name)}(${inputCoerce(p, "e.target.value")})} />`);
      }
      L.push(`      {error && <div style={{ color: "red" }}>{error}</div>}`);
      L.push(`      {ok && <div style={{ color: "green" }}>{ok}</div>}`);
      L.push(`      <button type="submit">${e.name}</button>`);
      L.push(`    </form>`);
      L.push(`  );`);
      L.push(`}`);
      L.push("");
    }
  }
  return L.join("\n");
}

// ─── Type mapping helpers ──────────────────────────────────────────────

function tsTypeOf(t: TypeRef): string {
  const inner = unwrapOption(t);
  if (inner.kind === "PrimitiveType") {
    switch (inner.name) {
      case "Real":
      case "Integer":
        return "number";
      case "Boolean":
        return "boolean";
      case "String":
        return "string";
      default:
        return "unknown";
    }
  }
  if (inner.kind === "NamedType") return "string"; // ref by id at the wire level
  return "unknown";
}

function tsTypeOfReturn(e: EventDecl): string {
  if (!e.returnType) return "void";
  return tsTypeOf(e.returnType);
}

function zodTypeOf(t: TypeRef): string {
  const inner = unwrapOption(t);
  if (inner.kind === "PrimitiveType") {
    switch (inner.name) {
      case "Real":
        return "z.number()";
      case "Integer":
        return "z.number().int()";
      case "Boolean":
        return "z.boolean()";
      case "String":
        return "z.string()";
    }
  }
  if (inner.kind === "NamedType") return "z.string()";
  return "z.unknown()";
}

function reactStateType(p: ParameterDecl): string {
  const inner = unwrapOption(p.parameterType);
  if (inner.kind === "PrimitiveType" && inner.name === "Boolean") return "<boolean>";
  if (inner.kind === "PrimitiveType" && (inner.name === "Real" || inner.name === "Integer")) return "<number>";
  return "<string>";
}

function defaultValueLit(p: ParameterDecl): string {
  const inner = unwrapOption(p.parameterType);
  if (inner.kind === "PrimitiveType") {
    if (inner.name === "Boolean") return "false";
    if (inner.name === "Real" || inner.name === "Integer") return "0";
    return `""`;
  }
  return `""`;
}

function inputTypeFor(p: ParameterDecl): string {
  const inner = unwrapOption(p.parameterType);
  if (inner.kind === "PrimitiveType") {
    if (inner.name === "Boolean") return "checkbox";
    if (inner.name === "Real" || inner.name === "Integer") return "number";
  }
  return "text";
}

function inputCoerce(p: ParameterDecl, expr: string): string {
  const inner = unwrapOption(p.parameterType);
  if (inner.kind === "PrimitiveType") {
    if (inner.name === "Boolean") return `(${expr} as unknown as boolean)`;
    if (inner.name === "Real") return `Number(${expr})`;
    if (inner.name === "Integer") return `parseInt(${expr}, 10) || 0`;
  }
  return expr;
}

// ─── Naming helpers ────────────────────────────────────────────────────

function toSnakeCase(s: string): string {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
}

function camelCase(s: string): string {
  const snake = toSnakeCase(s);
  const parts = snake.split("_");
  return parts[0]! + parts.slice(1).map((p) => p[0]!.toUpperCase() + p.slice(1)).join("");
}

function kebabCase(s: string): string {
  return toSnakeCase(s).replace(/_/g, "-");
}

function cap(s: string): string {
  return s[0]!.toUpperCase() + s.slice(1);
}

/**
 * Naïve English pluralizer. The codegen output is consumed by
 * developers who can rename tables — accuracy > 80% on common
 * domain nouns is enough.
 */
function plural(name: string): string {
  if (/(s|x|ch|sh)$/i.test(name)) return name + "es";
  if (/[^aeiou]y$/i.test(name)) return name.slice(0, -1) + "ies";
  return name + "s";
}

function autogenHeader(subject: string): string {
  return (
    `// ═══════════════════════════════════════════════════════════════════\n` +
    `// AUTO-GENERATED from Onto DSL (codegen-tanstack).\n` +
    `// Subject: ${subject}.\n` +
    `// Regenerate via \`gen --target tanstack\`. Do not edit by hand.\n` +
    `// ═══════════════════════════════════════════════════════════════════`
  );
}
