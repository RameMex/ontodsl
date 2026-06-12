import type { CstNode, IToken } from "chevrotain";
import { parseOcl } from "../ocl/index.js";
import type {
  CategoryDecl,
  CollectiveDecl,
  Declaration,
  EventDecl,
  IdentityDecl,
  InvariantDecl,
  KindDecl,
  MixinDecl,
  ModeDecl,
  ModifiesPath,
  NamedType,
  OclClause,
  OntoFile,
  ParameterDecl,
  PhaseDecl,
  PhaseGroupDecl,
  PrimitiveType,
  PropertyDecl,
  QualityDecl,
  QuantityDecl,
  HappeningDecl,
  AgentDecl,
  CommitmentDecl,
  UseCaseDecl,
  QueryDecl,
  RelationDecl,
  Multiplicity,
  RelatorDecl,
  RoleDecl,
  RoleMixinDecl,
  SourceLocation,
  SubkindDecl,
  TypeRef,
} from "../ast/index.js";
import type {
  ExtractedBlock,
  ExtractedInlineOcl,
  ExtractedTraceBlock,
} from "./preExtract.js";
import type { TraceClause } from "../ast/nodes.js";

/**
 * Build a typed AST from a Chevrotain CST plus the pre-extracted OCL maps.
 *
 * Phase 3 early errors (raised here, before semantic validation runs):
 *   - Subkind/Role may not declare their own `identity:`.
 *   - Category/Mixin/RoleMixin/Mode/Quality may not declare `identity:`.
 *   - Collective/Quantity may declare `identity:` but are not required to
 *     at this stage — mandatory-identity is a semantic rule (S18).
 *
 * Duplicate identity within a single body is caught here too (S14 defense
 * in depth — the grammar already allows only zero or more identity
 * members so this is a belt-and-suspenders check).
 */
export function buildAst(
  cst: CstNode,
  blocks: readonly ExtractedBlock[],
  inlineOcl: readonly ExtractedInlineOcl[],
  traceBlocks: readonly ExtractedTraceBlock[] = [],
): OntoFile {
  const blocksByName = new Map<string, ExtractedBlock>();
  for (const b of blocks) blocksByName.set(b.placeholder, b);

  const inlineByName = new Map<string, ExtractedInlineOcl>();
  for (const c of inlineOcl) inlineByName.set(c.placeholder, c);

  // Phase 24 (RxOCL) — index trace blocks by their placeholder name
  // so the type-decl builders can look up the parsed clauses.
  const tracesByName = new Map<string, ExtractedTraceBlock>();
  for (const t of traceBlocks) tracesByName.set(t.placeholder, t);

  const ctx = cst.children;
  const schemaVersion = readSchemaVersion(
    requiredCst(ctx["schemaDecl"]?.[0] as CstNode | undefined),
  );
  const namespace = readNamespace(
    requiredCst(ctx["namespaceDecl"]?.[0] as CstNode | undefined),
  );

  const declarations: Declaration[] = [];
  const declCsts = (ctx["declaration"] ?? []) as CstNode[];
  for (const d of declCsts) {
    declarations.push(buildDeclaration(d, blocksByName, inlineByName, tracesByName));
  }

  // Paso 5: collect `import "./path";` declarations. The resolver
  // (parser/multiFile.ts) reads them, loads each path, recursively
  // resolves THEIR imports, and merges all transitive declarations
  // before semantic check. The single-file parse path leaves them in
  // place — they're only acted on when the caller uses parseFile().
  //
  // Day 2: optional `as Alias` suffix + optional `{ A, B } from ...`
  // selective list.
  const imports: import("../ast/nodes.js").ImportDecl[] = [];
  const importCsts = (ctx["importDecl"] ?? []) as CstNode[];
  for (const imp of importCsts) {
    const pathTok = (imp.children["path"] as IToken[] | undefined)?.[0];
    if (!pathTok) continue;
    // Selective name list (may be absent — non-selective import).
    const selNameToks = (imp.children["selName"] as IToken[] | undefined) ?? [];
    const selective: readonly string[] | null =
      selNameToks.length > 0 ? selNameToks.map((t) => t.image) : null;
    // Optional alias.
    const aliasTok = (imp.children["alias"] as IToken[] | undefined)?.[0];
    const alias: string | null = aliasTok ? aliasTok.image : null;
    imports.push({
      kind: "ImportDecl",
      path: pathTok.image.slice(1, -1),
      alias,
      selective,
      location: cstLocation(imp),
    });
  }

  return {
    kind: "OntoFile",
    schemaVersion,
    namespace,
    imports,
    declarations,
    location: cstLocation(cst),
  };
}

// ─── Top-level decls ────────────────────────────────────────────────────

function readSchemaVersion(node: CstNode): string {
  const tok = (node.children["StringLiteral"] as IToken[] | undefined)?.[0];
  if (!tok) throw new Error("schema declaration missing string literal");
  return tok.image.slice(1, -1);
}

function readNamespace(node: CstNode): string {
  const tok = (node.children["Identifier"] as IToken[] | undefined)?.[0];
  if (!tok) throw new Error("namespace declaration missing identifier");
  return tok.image;
}

function buildDeclaration(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
  traces: Map<string, ExtractedTraceBlock>,
): Declaration {
  const c = node.children;
  if (c["kindDecl"]?.[0])
    return buildKindDecl(c["kindDecl"][0] as CstNode, blocks, inline, traces);
  if (c["subkindDecl"]?.[0])
    return buildSubkindDecl(c["subkindDecl"][0] as CstNode, blocks, inline, traces);
  if (c["roleDecl"]?.[0])
    return buildRoleDecl(c["roleDecl"][0] as CstNode, blocks, inline);
  if (c["relatorDecl"]?.[0])
    return buildRelatorDecl(c["relatorDecl"][0] as CstNode, blocks, inline);
  if (c["phaseGroupDecl"]?.[0])
    return buildPhaseGroupDecl(c["phaseGroupDecl"][0] as CstNode);
  if (c["categoryDecl"]?.[0])
    return buildCategoryDecl(c["categoryDecl"][0] as CstNode, blocks, inline);
  if (c["mixinDecl"]?.[0])
    return buildMixinDecl(c["mixinDecl"][0] as CstNode, blocks, inline);
  if (c["roleMixinDecl"]?.[0])
    return buildRoleMixinDecl(
      c["roleMixinDecl"][0] as CstNode,
      blocks,
      inline,
    );
  if (c["modeDecl"]?.[0])
    return buildModeDecl(c["modeDecl"][0] as CstNode, blocks, inline);
  if (c["qualityDecl"]?.[0])
    return buildQualityDecl(c["qualityDecl"][0] as CstNode, blocks, inline);
  if (c["collectiveDecl"]?.[0])
    return buildCollectiveDecl(
      c["collectiveDecl"][0] as CstNode,
      blocks,
      inline,
    );
  if (c["quantityDecl"]?.[0])
    return buildQuantityDecl(c["quantityDecl"][0] as CstNode, blocks, inline);
  if (c["happeningDecl"]?.[0])
    return buildHappeningDecl(
      c["happeningDecl"][0] as CstNode,
      blocks,
      inline,
    );
  if (c["agentDecl"]?.[0])
    return buildAgentDecl(c["agentDecl"][0] as CstNode, blocks, inline);
  if (c["commitmentDecl"]?.[0])
    return buildCommitmentDecl(
      c["commitmentDecl"][0] as CstNode,
      blocks,
      inline,
    );
  if (c["useCaseDecl"]?.[0])
    return buildUseCaseDecl(c["useCaseDecl"][0] as CstNode, blocks, inline);
  if (c["relationDecl"]?.[0])
    return buildRelationDecl(c["relationDecl"][0] as CstNode);
  throw new Error("unknown declaration variant");
}

function buildKindDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
  traces: Map<string, ExtractedTraceBlock>,
): KindDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "kind name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
    traces,
  );
  const renames = buildPropertyRenames(node);
  return {
    kind: "KindDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    renames,
    traceClauses: body.traceClauses,
    location: cstLocation(node),
  };
}

function buildSubkindDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
  traces: Map<string, ExtractedTraceBlock>,
): SubkindDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "subkind name",
  );
  const parentToks = node.children["parent"] as IToken[] | undefined;
  if (!parentToks || parentToks.length === 0) throw new Error("subkind parent missing");
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
    traces,
  );
  if (body.identity !== null) {
    throw new Error(
      `Subkind '${nameTok.image}' may not declare its own identity; ` +
        `it inherits identity from its parent(s)`,
    );
  }
  const renames = buildPropertyRenames(node);
  return {
    kind: "SubkindDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    renames,
    traceClauses: body.traceClauses,
    location: cstLocation(node),
  };
}

/**
 * Phase 20 (Bloque 2 v0.7) — extract the `renames { p -> q; ... }`
 * clause from a kind/subkind CstNode. The grammar puts each entry
 * under `node.children["renamesClause"][0].children["renameEntry"]`.
 * Returns empty array when no clause was declared.
 */
function buildPropertyRenames(
  node: CstNode,
): import("../ast/nodes.js").PropertyRename[] {
  const clause = (node.children["renamesClause"] as CstNode[] | undefined)?.[0];
  if (!clause) return [];
  const entries = (clause.children["renameEntry"] as CstNode[] | undefined) ?? [];
  const out: import("../ast/nodes.js").PropertyRename[] = [];
  for (const e of entries) {
    const p = (e.children["parentName"] as IToken[] | undefined)?.[0];
    const o = (e.children["ownName"] as IToken[] | undefined)?.[0];
    if (!p || !o) continue;
    out.push({
      kind: "PropertyRename",
      parentName: p.image,
      ownName: o.image,
      location: cstLocation(e),
    });
  }
  return out;
}

function buildRoleDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): RoleDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "role name",
  );
  const mediatorTok = requiredToken(
    (node.children["mediator"] as IToken[] | undefined)?.[0],
    "role mediator",
  );
  const ofKindTok = requiredToken(
    (node.children["ofKind"] as IToken[] | undefined)?.[0],
    "role ofKind",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  if (body.identity !== null) {
    throw new Error(
      `Role '${nameTok.image}' may not declare its own identity; ` +
        `it inherits identity from Kind '${ofKindTok.image}'`,
    );
  }
  return {
    kind: "RoleDecl",
    name: nameTok.image,
    mediatedBy: mediatorTok.image,
    ofKind: ofKindTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildRelatorDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): RelatorDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "relator name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const participants =
    (node.children["participant"] as IToken[] | undefined) ?? [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  return {
    kind: "RelatorDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    mediates: participants.map((t) => t.image),
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildPhaseGroupDecl(node: CstNode): PhaseGroupDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "phase-group name",
  );
  const ofTok = requiredToken(
    (node.children["ofKind"] as IToken[] | undefined)?.[0],
    "phase-group ofKind",
  );
  const phaseCsts = (node.children["phaseDecl"] as CstNode[] | undefined) ?? [];
  const phases: PhaseDecl[] = phaseCsts.map((p) => {
    const tok = requiredToken(
      (p.children["Identifier"] as IToken[] | undefined)?.[0],
      "phase name",
    );
    return {
      kind: "PhaseDecl",
      name: tok.image,
      location: cstLocation(p),
    };
  });
  return {
    kind: "PhaseGroupDecl",
    name: nameTok.image,
    ofKind: ofTok.image,
    phases,
    location: cstLocation(node),
  };
}

// ─── Phase 3 decl builders ──────────────────────────────────────────────

function buildCategoryDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): CategoryDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "category name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  if (body.identity !== null) {
    throw new Error(
      `Category '${nameTok.image}' may not declare identity ` +
        `(non-sortal types do not carry a principle of identity)`,
    );
  }
  // Phase 19 (Bloque 2 v0.6) — optional `where <name>: <Type>`.
  // Phase 22 (Bloque 2 v0.8) — bearerType may be qualified
  // `<ns>::<Type>`; the trailing identifier (when present) is the
  // actual type name. The namespace prefix is recorded
  // implicitly but only the local name matters for resolution
  // (multi-file merge collapses namespaces into one decl list).
  const bearerNameTok = (node.children["bearerName"] as IToken[] | undefined)?.[0];
  const bearerTypeTok = (node.children["bearerType"] as IToken[] | undefined)?.[0];
  const bearerTypeNameTok =
    (node.children["bearerTypeName"] as IToken[] | undefined)?.[0];
  const memberTypeImage = bearerTypeNameTok
    ? bearerTypeNameTok.image
    : bearerTypeTok?.image;
  const bearer =
    bearerNameTok && memberTypeImage
      ? {
          kind: "BearerBinding" as const,
          name: bearerNameTok.image,
          memberType: memberTypeImage,
          location: cstLocation(node),
        }
      : null;
  return {
    kind: "CategoryDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    bearer,
    location: cstLocation(node),
  };
}

function buildMixinDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): MixinDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "mixin name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  if (body.identity !== null) {
    throw new Error(
      `Mixin '${nameTok.image}' may not declare identity ` +
        `(non-sortal types do not carry a principle of identity)`,
    );
  }
  return {
    kind: "MixinDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildRoleMixinDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): RoleMixinDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "role-mixin name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  if (body.identity !== null) {
    throw new Error(
      `RoleMixin '${nameTok.image}' may not declare identity ` +
        `(non-sortal types do not carry a principle of identity)`,
    );
  }
  return {
    kind: "RoleMixinDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildModeDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): ModeDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "mode name",
  );
  const bearerTok = requiredToken(
    (node.children["bearer"] as IToken[] | undefined)?.[0],
    "mode bearer",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  if (body.identity !== null) {
    throw new Error(
      `Mode '${nameTok.image}' may not declare identity ` +
        `(aspects inherit identity from their bearer '${bearerTok.image}')`,
    );
  }
  return {
    kind: "ModeDecl",
    name: nameTok.image,
    ofBearer: bearerTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildQualityDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): QualityDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "quality name",
  );
  const bearerTok = requiredToken(
    (node.children["bearer"] as IToken[] | undefined)?.[0],
    "quality bearer",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) || [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  if (body.identity !== null) {
    throw new Error(
      `Quality '${nameTok.image}' may not declare identity ` +
        `(aspects inherit identity from their bearer '${bearerTok.image}')`,
    );
  }
  return {
    kind: "QualityDecl",
    name: nameTok.image,
    ofBearer: bearerTok.image,
    specializes: parentToks.map((t) => t.image),
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildCollectiveDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): CollectiveDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "collective name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const memberTok = requiredToken(
    (node.children["member"] as IToken[] | undefined)?.[0],
    "collective member type",
  );
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  return {
    kind: "CollectiveDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    ofMember: memberTok.image,
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildQuantityDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): QuantityDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "quantity name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  return {
    kind: "QuantityDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

/**
 * Phase 6 — build a `happening` declaration from its CST. Body shape
 * mirrors Kind/Quantity (identity + properties + invariants + events
 * + queries) so we reuse `buildTypeMembers`. The interesting bit is
 * that a happening is a UFO-B perdurant: downstream code generators
 * should model it as a time-indexed entity, while the DSL validator
 * treats it as a plain sortal for identity / specialization / body
 * checks.
 */
function buildHappeningDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): HappeningDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "happening name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  return {
    kind: "HappeningDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

/**
 * Phase 7 — build an `agent` declaration. AST shape matches Kind but
 * the `kind: "AgentDecl"` discriminator lets S31 and the stereotype
 * matrix single agents out at validation time.
 */
function buildAgentDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): AgentDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "agent name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  return {
    kind: "AgentDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

/**
 * Phase 7 — build a `commitment` declaration. Debitor and creditor
 * slots are mandatory at the grammar level so the names we pick off
 * here are never undefined. S31 then confirms both resolve to agents.
 */
function buildCommitmentDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): CommitmentDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "commitment name",
  );
  const debitorTok = requiredToken(
    (node.children["debitor"] as IToken[] | undefined)?.[0],
    "commitment debitor",
  );
  const creditorTok = requiredToken(
    (node.children["creditor"] as IToken[] | undefined)?.[0],
    "commitment creditor",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );

  // Phase 7.5: scan for a predicate clause. Grammar allows at most one
  // (repeated predicates would collide anyway — there's a single
  // `commitment.predicate` slot in the AST). We defensively detect and
  // report a duplicate here by throwing; the pre-extractor + grammar
  // should have caught this earlier, so this is belt-and-suspenders.
  const predicateClauses =
    (node.children["predicateClause"] as CstNode[] | undefined) ?? [];
  let predicate: OclClause | null = null;
  if (predicateClauses.length > 1) {
    throw new Error(
      `commitment '${nameTok.image}' declares ${predicateClauses.length} ` +
        `predicate clauses — at most one is allowed`,
    );
  }
  if (predicateClauses.length === 1) {
    predicate = buildInlineClause(predicateClauses[0]!, inline);
  }

  return {
    kind: "CommitmentDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    debitor: debitorTok.image,
    creditor: creditorTok.image,
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    predicate,
    location: cstLocation(node),
  };
}

/**
 * Phase 8 — build a `use-case` declaration. Pulls off the actor list,
 * trigger, success, and failure slots from the CST; body members
 * reuse the shared typeMember builder.
 *
 * All four slots (actors header + trigger + success + failure) are
 * present in the CST if the grammar matched, so the tokens are
 * present. The builder doesn't itself validate that names resolve —
 * that's S34/S35/S36 in the validator.
 */
function buildUseCaseDecl(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
): UseCaseDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "use-case name",
  );
  const parentToks = (node.children["parent"] as IToken[] | undefined) ?? [];
  const actorToks = (node.children["actor"] as IToken[] | undefined) ?? [];
  const triggerTok = requiredToken(
    (node.children["trigger"] as IToken[] | undefined)?.[0],
    "use-case trigger",
  );
  const successTok = requiredToken(
    (node.children["success"] as IToken[] | undefined)?.[0],
    "use-case success",
  );
  const failureTok = requiredToken(
    (node.children["failure"] as IToken[] | undefined)?.[0],
    "use-case failure",
  );
  const body = buildTypeMembers(
    (node.children["typeMember"] as CstNode[] | undefined) ?? [],
    blocks,
    inline,
  );
  return {
    kind: "UseCaseDecl",
    name: nameTok.image,
    specializes: parentToks.map((t) => t.image),
    actors: actorToks.map((t) => t.image),
    trigger: triggerTok.image,
    success: successTok.image,
    failure: failureTok.image,
    identity: body.identity,
    properties: body.properties,
    invariants: body.invariants,
    queries: body.queries,
    events: body.events,
    location: cstLocation(node),
  };
}

function buildRelationDecl(node: CstNode): RelationDecl {
  const nameTok = requiredToken((node.children["name"] as IToken[] | undefined)?.[0], "relation name");
  const stereotypeTok = requiredToken((node.children["stereotype"] as IToken[] | undefined)?.[0], "relation stereotype");
  const sourceTok = requiredToken((node.children["source"] as IToken[] | undefined)?.[0], "relation source");
  const targetTok = requiredToken((node.children["target"] as IToken[] | undefined)?.[0], "relation target");
  
  const sourceMultNode = (node.children["sourceMultiplicity"] as CstNode[] | undefined)?.[0];
  const targetMultNode = (node.children["targetMultiplicity"] as CstNode[] | undefined)?.[0];
  
  if (!sourceMultNode || !targetMultNode) throw new Error("Missing multiplicity");

  return {
    kind: "RelationDecl",
    name: nameTok.image,
    stereotype: stereotypeTok.image,
    source: sourceTok.image,
    sourceMultiplicity: buildMultiplicity(sourceMultNode),
    target: targetTok.image,
    targetMultiplicity: buildMultiplicity(targetMultNode),
    location: cstLocation(node),
  };
}

function buildMultiplicity(node: CstNode): Multiplicity {
  const c = node.children;
  if (c["exactStar"]?.[0]) {
    return {
      kind: "Multiplicity",
      lower: 0,
      upper: "*",
      location: cstLocation(node),
    };
  }
  const lowerTok = requiredToken((c["lower"] as IToken[] | undefined)?.[0], "multiplicity lower bound");
  const lower = parseInt(lowerTok.image, 10);
  
  const upperIntTok = (c["upperInt"] as IToken[] | undefined)?.[0];
  const upperStarTok = (c["upperStar"] as IToken[] | undefined)?.[0];
  
  let upper: number | "*" = lower; // defaults to lower if no DotDot
  if (c["DotDot"]?.[0]) {
    if (upperStarTok) upper = "*";
    else if (upperIntTok) upper = parseInt(upperIntTok.image, 10);
    else throw new Error("Missing upper bound after ..");
  }

  return {
    kind: "Multiplicity",
    lower,
    upper,
    location: cstLocation(node),
  };
}

// ─── Type members ────────────────────────────────────────────────────────

interface TypeMemberParts {
  identity: IdentityDecl | null;
  properties: readonly PropertyDecl[];
  invariants: readonly InvariantDecl[];
  queries: readonly QueryDecl[];
  events: readonly EventDecl[];
  /** Phase 24 (RxOCL) — collected trace clauses (empty when not used). */
  traceClauses: readonly TraceClause[];
}

function buildTypeMembers(
  members: readonly CstNode[],
  blocks: Map<string, ExtractedBlock>,
  inline: Map<string, ExtractedInlineOcl>,
  traces?: Map<string, ExtractedTraceBlock>,
): TypeMemberParts {
  let identity: IdentityDecl | null = null;
  const properties: PropertyDecl[] = [];
  const invariants: InvariantDecl[] = [];
  const queries: QueryDecl[] = [];
  const events: EventDecl[] = [];
  const traceClauses: TraceClause[] = [];

  for (const m of members) {
    const c = m.children;
    if (c["identityDecl"]?.[0]) {
      if (identity !== null) {
        throw new Error(
          `Duplicate identity declaration at line ${
            cstLocation(c["identityDecl"][0] as CstNode).line
          }`,
        );
      }
      identity = buildIdentityDecl(c["identityDecl"][0] as CstNode);
      continue;
    }
    if (c["propertyDecl"]?.[0]) {
      properties.push(buildPropertyDecl(c["propertyDecl"][0] as CstNode));
      continue;
    }
    if (c["invariantsBlock"]?.[0]) {
      invariants.push(
        ...buildInvariants(c["invariantsBlock"][0] as CstNode, blocks),
      );
      continue;
    }
    if (c["eventDecl"]?.[0]) {
      events.push(buildEventDecl(c["eventDecl"][0] as CstNode, inline));
      continue;
    }
    if (c["queryDecl"]?.[0]) {
      queries.push(buildQueryDecl(c["queryDecl"][0] as CstNode, inline));
      continue;
    }
    if (c["traceBlock"]?.[0]) {
      // Phase 24 (RxOCL). Only kind/subkind callers pass a traces map;
      // for others, a trace block here is silently ignored.
      if (traces) {
        const node = c["traceBlock"][0] as CstNode;
        const phTok = (node.children["placeholder"] as IToken[] | undefined)?.[0];
        if (phTok) {
          const block = traces.get(phTok.image);
          if (block) {
            for (const cl of block.clauses) {
              const parseResult = parseOcl(cl.expression);
              traceClauses.push({
                kind: "TraceClause",
                op: cl.op,
                bound: cl.bound,
                rawExpression: cl.expression,
                parsed: parseResult.expr,
                location: {
                  line: cl.line,
                  column: cl.column,
                  offset: cl.sourceOffset,
                  length: cl.expression.length,
                },
              });
            }
          }
        }
      }
      continue;
    }
    throw new Error("unknown type member variant");
  }

  return { identity, properties, invariants, queries, events, traceClauses };
}

function buildIdentityDecl(node: CstNode): IdentityDecl {
  const tok = requiredToken(
    (node.children["Identifier"] as IToken[] | undefined)?.[0],
    "identity property name",
  );
  return {
    kind: "IdentityDecl",
    propertyName: tok.image,
    location: cstLocation(node),
  };
}

function buildPropertyDecl(node: CstNode): PropertyDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "property name",
  );
  const typeRefCst = requiredCst(
    (node.children["typeRef"] as CstNode[] | undefined)?.[0],
  );
  // Phase 16b modifiers — both optional, both grammar-level OPTIONs.
  const isInternal =
    (node.children["InternalKw"] as IToken[] | undefined)?.[0] !== undefined;
  const defaultCst = (node.children["default"] as CstNode[] | undefined)?.[0];
  const defaultValue =
    defaultCst !== undefined ? buildPropertyLiteral(defaultCst) : null;
  return {
    kind: "PropertyDecl",
    name: nameTok.image,
    propertyType: buildTypeRef(typeRefCst),
    isInternal,
    defaultValue,
    location: cstLocation(node),
  };
}

function buildPropertyLiteral(node: CstNode): import("../ast/index.js").PropertyDefault {
  const c = node.children;
  const realTok = (c["real"] as IToken[] | undefined)?.[0];
  if (realTok) return { kind: "Real", value: parseFloat(realTok.image) };
  const intTok = (c["integer"] as IToken[] | undefined)?.[0];
  if (intTok) return { kind: "Integer", value: parseInt(intTok.image, 10) };
  const strTok = (c["string"] as IToken[] | undefined)?.[0];
  if (strTok) {
    // Strip surrounding double quotes; unescape \" and \\.
    const raw = strTok.image.slice(1, -1);
    const unescaped = raw.replace(/\\(.)/g, "$1");
    return { kind: "String", value: unescaped };
  }
  if ((c["true"] as IToken[] | undefined)?.[0]) return { kind: "Boolean", value: true };
  if ((c["false"] as IToken[] | undefined)?.[0]) return { kind: "Boolean", value: false };
  if ((c["null"] as IToken[] | undefined)?.[0]) return { kind: "Null", value: null };
  throw new Error("propertyLiteral: unknown variant");
}

/**
 * Build a type reference from either:
 *   (a) a `typeRef` CST produced by the new grammar rule (a bare
 *       Identifier or `Set<Identifier>`), OR
 *   (b) a single IToken in legacy positions where the grammar still
 *       consumes an Identifier directly (none remaining in Phase 5 —
 *       kept as a transitional helper for robustness).
 *
 * The function distinguishes the two by argument shape.
 */
function buildTypeRef(source: CstNode | IToken): TypeRef {
  // Token fallback — legacy path (may be unused after Phase 5 migration).
  if (!("children" in source)) {
    return primitiveOrNamedFromToken(source);
  }
  const c = source.children;
  // `Set< Identifier >` variant
  const setToks = c["SetKw"] as IToken[] | undefined;
  if (setToks && setToks[0]) {
    const elementTok = requiredToken(
      (c["element"] as IToken[] | undefined)?.[0],
      "Set element type",
    );
    const elementType = primitiveOrNamedFromToken(elementTok);
    return {
      kind: "SetType",
      elementType,
      location: cstLocation(source),
    };
  }
  // `Option< Identifier >` variant (Phase 16b).
  const optToks = c["OptionKw"] as IToken[] | undefined;
  if (optToks && optToks[0]) {
    const elementTok = requiredToken(
      (c["optElement"] as IToken[] | undefined)?.[0],
      "Option element type",
    );
    const elementType = primitiveOrNamedFromToken(elementTok);
    return {
      kind: "OptionType",
      elementType,
      location: cstLocation(source),
    };
  }
  // `Array< arrayInner , IntegerLiteral >` variant.
  // Array nesting is allowed (matrices); the inner CST is the
  // arrayInner rule which already encodes recursion.
  const arrToks = c["ArrayKw"] as IToken[] | undefined;
  if (arrToks && arrToks[0]) {
    const innerCst = requiredCst(
      (c["arrInner"] as CstNode[] | undefined)?.[0],
    );
    const sizeTok = requiredToken(
      (c["arrSize"] as IToken[] | undefined)?.[0],
      "Array size",
    );
    return {
      kind: "ArrayType",
      elementType: buildArrayInner(innerCst),
      size: parseArraySize(sizeTok),
      location: cstLocation(source),
    };
  }
  // Bare identifier OR qualified `Alias.TypeName` variant (Paso 5
  // day 3). When `qualifiedName` is present, the first identifier
  // is the import alias and `qualifiedName` is the actual type.
  const nameTok = requiredToken(
    (c["typeName"] as IToken[] | undefined)?.[0],
    "type name",
  );
  const qualifiedTok = (c["qualifiedName"] as IToken[] | undefined)?.[0];
  if (qualifiedTok) {
    // Primitives can't be qualified — Real / Integer / Boolean /
    // String aren't imported from anywhere. Treat as a regular
    // (potentially-invalid) qualified named type and let the
    // semantic check report S40 if needed.
    return {
      kind: "NamedType",
      name: qualifiedTok.image,
      qualifier: nameTok.image,
      location: cstLocation(source),
    };
  }
  return primitiveOrNamedFromToken(nameTok);
}

/**
 * Build the element type of an Array<…,N>. Mirrors buildTypeRef but
 * only handles the two arrayInner alternatives (bare Identifier or
 * nested Array). Set/Option are deliberately not allowed here — keeps
 * the type composition flat with the single exception of Array-in-
 * Array (= matrices).
 */
function buildArrayInner(
  source: CstNode,
): import("../ast/index.js").PrimitiveType
   | import("../ast/index.js").NamedType
   | import("../ast/index.js").ArrayType {
  const c = source.children;
  const arrToks = c["ArrayKw"] as IToken[] | undefined;
  if (arrToks && arrToks[0]) {
    const innerCst = requiredCst(
      (c["arrInner"] as CstNode[] | undefined)?.[0],
    );
    const sizeTok = requiredToken(
      (c["arrSize"] as IToken[] | undefined)?.[0],
      "nested Array size",
    );
    return {
      kind: "ArrayType",
      elementType: buildArrayInner(innerCst),
      size: parseArraySize(sizeTok),
      location: cstLocation(source),
    };
  }
  const nameTok = requiredToken(
    (c["typeName"] as IToken[] | undefined)?.[0],
    "Array element type",
  );
  return primitiveOrNamedFromToken(nameTok);
}

function parseArraySize(tok: IToken): number {
  const n = Number(tok.image);
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error(
      `Array size must be a positive integer literal, got '${tok.image}'`,
    );
  }
  return n;
}

function primitiveOrNamedFromToken(tok: IToken): PrimitiveType | NamedType {
  const name = tok.image;
  const loc = tokenLocation(tok);
  if (
    name === "Real" ||
    name === "Integer" ||
    name === "String" ||
    name === "Boolean"
  ) {
    return { kind: "PrimitiveType", name, location: loc };
  }
  return { kind: "NamedType", name, location: loc };
}

function buildInvariants(
  node: CstNode,
  blocks: Map<string, ExtractedBlock>,
): InvariantDecl[] {
  const placeholderTok = requiredToken(
    (node.children["placeholder"] as IToken[] | undefined)?.[0],
    "invariant placeholder",
  );
  const block = blocks.get(placeholderTok.image);
  if (!block) {
    throw new Error(
      `Internal error: unknown invariant placeholder "${placeholderTok.image}"`,
    );
  }
  return block.invariants.map((inv) => {
    const parseResult = parseOcl(inv.expression);
    return {
      kind: "InvariantDecl" as const,
      rawExpression: inv.expression,
      parsed: parseResult.expr,
      parseErrors: parseResult.errors,
      location: {
        line: inv.line,
        column: inv.column,
        offset: inv.sourceOffset,
        length: inv.expression.length,
      },
    };
  });
}

// ─── Events & queries ───────────────────────────────────────────────────

function buildEventDecl(
  node: CstNode,
  inline: Map<string, ExtractedInlineOcl>,
): EventDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "event name",
  );
  const overrideTok =
    (node.children["OverrideKw"] as IToken[] | undefined)?.[0];
  const parameters = buildParameters(node);
  const pre: OclClause[] = [];
  const post: OclClause[] = [];
  const modifies: ModifiesPath[] = [];
  const effects: string[] = [];
  const reads: string[] = [];
  const writes: string[] = [];

  const clauses = (node.children["eventClause"] as CstNode[] | undefined) ?? [];
  for (const cl of clauses) {
    const cc = cl.children;
    if (cc["preClause"]?.[0]) {
      pre.push(buildInlineClause(cc["preClause"][0] as CstNode, inline));
    } else if (cc["postClause"]?.[0]) {
      post.push(buildInlineClause(cc["postClause"][0] as CstNode, inline));
    } else if (cc["modifiesClause"]?.[0]) {
      modifies.push(
        ...buildModifiesPaths(cc["modifiesClause"][0] as CstNode),
      );
    } else if (cc["effectsClause"]?.[0]) {
      effects.push(...identsFromClause(cc["effectsClause"][0] as CstNode));
    } else if (cc["readsClause"]?.[0]) {
      reads.push(...identsFromClause(cc["readsClause"][0] as CstNode));
    } else if (cc["writesClause"]?.[0]) {
      writes.push(...identsFromClause(cc["writesClause"][0] as CstNode));
    }
  }

  // Optional return type — same grammar slot as queryDecl uses.
  const returnTypeNode =
    (node.children["returnType"] as CstNode[] | undefined)?.[0];
  const returnType =
    returnTypeNode !== undefined ? buildTypeRef(returnTypeNode) : null;

  // Phase 18 (Bloque 2 v0.5) — `refines <qname>(, <qname>)*` clause.
  // Each refinesTarget CstNode has Identifier tokens labelled
  // "ns" / "name" and optionally "eventName".
  const refines = buildRefinesTargets(node);

  return {
    kind: "EventDecl",
    name: nameTok.image,
    isOverride: overrideTok !== undefined,
    parameters,
    returnType,
    effects,
    reads,
    writes,
    pre,
    post,
    modifies,
    refines,
    location: cstLocation(node),
  };
}

/**
 * Pull the refines-targets out of an eventDecl CstNode. The grammar
 * places repeated `refinesTarget` subrules in
 * `node.children["refines"]`; each subrule's children hold the
 * `ns`, `name`, and optional `eventName` identifier tokens.
 */
function buildRefinesTargets(
  node: CstNode,
): import("../ast/nodes.js").RefinesTarget[] {
  const csts = (node.children["refines"] as CstNode[] | undefined) ?? [];
  const out: import("../ast/nodes.js").RefinesTarget[] = [];
  for (const t of csts) {
    // Phase 22 (Bloque 2 v0.8) — grammar uses `first` and optional
    // `afterColons` labels (qualified shape: <first>::<afterColons>;
    // unqualified shape: just <first>).
    const first = (t.children["first"] as IToken[] | undefined)?.[0];
    const afterColons =
      (t.children["afterColons"] as IToken[] | undefined)?.[0];
    const evt = (t.children["eventName"] as IToken[] | undefined)?.[0];
    if (!first) continue;
    const namespace = afterColons ? first.image : "";
    const name = afterColons ? afterColons.image : first.image;
    out.push({
      kind: "RefinesTarget",
      namespace,
      name,
      eventName: evt ? evt.image : null,
      location: cstLocation(t),
    });
  }
  return out;
}

/**
 * Pull the identifier list out of an effects / reads / writes
 * clause. The clause holds an `identList` subrule that itself wraps
 * either `{ A, B }` or `A, B`; either shape places the identifier
 * tokens under children["ident"].
 */
function identsFromClause(clauseNode: CstNode): string[] {
  const listCsts = (clauseNode.children["list"] as CstNode[] | undefined) ?? [];
  const out: string[] = [];
  for (const lst of listCsts) {
    const toks = (lst.children["ident"] as IToken[] | undefined) ?? [];
    for (const t of toks) out.push(t.image);
  }
  return out;
}

function buildQueryDecl(
  node: CstNode,
  inline: Map<string, ExtractedInlineOcl>,
): QueryDecl {
  const nameTok = requiredToken(
    (node.children["name"] as IToken[] | undefined)?.[0],
    "query name",
  );
  const overrideTok =
    (node.children["OverrideKw"] as IToken[] | undefined)?.[0];
  const returnTypeCst = requiredCst(
    (node.children["returnType"] as CstNode[] | undefined)?.[0],
  );
  const parameters = buildParameters(node);

  let body: OclClause | null = null;
  const clauses = (node.children["queryClause"] as CstNode[] | undefined) ?? [];
  for (const cl of clauses) {
    const bodyCst = cl.children["bodyClause"]?.[0] as CstNode | undefined;
    if (bodyCst) {
      if (body !== null) {
        throw new Error(
          `Query '${nameTok.image}' declares more than one body clause`,
        );
      }
      body = buildInlineClause(bodyCst, inline);
    }
  }

  return {
    kind: "QueryDecl",
    name: nameTok.image,
    isOverride: overrideTok !== undefined,
    parameters,
    returnType: buildTypeRef(returnTypeCst),
    body,
    location: cstLocation(node),
  };
}

function buildParameters(node: CstNode): readonly ParameterDecl[] {
  const listCst = (node.children["paramList"] as CstNode[] | undefined)?.[0];
  if (!listCst) return [];
  const paramCsts = (listCst.children["param"] as CstNode[] | undefined) ?? [];
  return paramCsts.map((p) => {
    const nameTok = requiredToken(
      (p.children["name"] as IToken[] | undefined)?.[0],
      "parameter name",
    );
    const typeRefCst = requiredCst(
      (p.children["typeRef"] as CstNode[] | undefined)?.[0],
    );
    return {
      kind: "ParameterDecl",
      name: nameTok.image,
      parameterType: buildTypeRef(typeRefCst),
      location: cstLocation(p),
    };
  });
}

function buildInlineClause(
  node: CstNode,
  inline: Map<string, ExtractedInlineOcl>,
): OclClause {
  const placeholderTok = requiredToken(
    (node.children["placeholder"] as IToken[] | undefined)?.[0],
    "inline OCL placeholder",
  );
  const extracted = inline.get(placeholderTok.image);
  if (!extracted) {
    throw new Error(
      `Internal error: unknown inline OCL placeholder "${placeholderTok.image}"`,
    );
  }
  const parseResult = parseOcl(extracted.expression);
  return {
    kind: "OclClause",
    rawExpression: extracted.expression,
    parsed: parseResult.expr,
    parseErrors: parseResult.errors,
    location: {
      line: extracted.line,
      column: extracted.column,
      offset: extracted.sourceOffset,
      length: extracted.expression.length,
    },
  };
}

function buildModifiesPaths(node: CstNode): ModifiesPath[] {
  const pathCsts = (node.children["path"] as CstNode[] | undefined) ?? [];
  return pathCsts.map(buildModifiesPath);
}

function buildModifiesPath(node: CstNode): ModifiesPath {
  const selfToks = node.children["SelfKw"] as IToken[] | undefined;
  const rootToks = node.children["root"] as IToken[] | undefined;
  let root: string;
  if (selfToks?.[0]) root = "self";
  else if (rootToks?.[0]) root = rootToks[0].image;
  else throw new Error("path missing root");

  const segmentToks = (node.children["segment"] as IToken[] | undefined) ?? [];
  const segments = segmentToks.map((t) => t.image);
  if (segments.length === 0) {
    throw new Error("path must have at least one segment after the root");
  }
  return {
    kind: "ModifiesPath",
    root,
    segments,
    location: cstLocation(node),
  };
}

// ─── Location & utility helpers ─────────────────────────────────────────

function cstLocation(node: CstNode): SourceLocation {
  const loc = node.location;
  if (!loc) return { line: 0, column: 0, offset: 0, length: 0 };
  return {
    line: loc.startLine ?? 0,
    column: loc.startColumn ?? 0,
    offset: loc.startOffset ?? 0,
    length:
      loc.endOffset !== undefined && loc.startOffset !== undefined
        ? loc.endOffset - loc.startOffset + 1
        : 0,
  };
}

function tokenLocation(tok: IToken): SourceLocation {
  return {
    line: tok.startLine ?? 0,
    column: tok.startColumn ?? 0,
    offset: tok.startOffset,
    length: tok.image.length,
  };
}

function requiredCst(value: CstNode | undefined): CstNode {
  if (value === undefined) throw new Error("Missing required CST node");
  return value;
}

function requiredToken(
  value: IToken | undefined,
  what: string,
): IToken {
  if (value === undefined) throw new Error(`Missing required token: ${what}`);
  return value;
}
