import { createToken, Lexer, type TokenType } from "chevrotain";

/**
 * Lexer token definitions for the Onto DSL — Phase 3.
 *
 * Phase 3 additions on top of Phase 2:
 *   - Keywords for the remaining UFO-A stereotypes:
 *     `category`, `mixin`, `role-mixin`, `mode`, `quality`,
 *     `collective`, `quantity`.
 *   - `override` keyword for Liskov-respecting redefinition of events
 *     and queries.
 *
 * Design notes (unchanged from Phase 2):
 *   - Single-word keywords use `longer_alt: Identifier` so that e.g. the
 *     identifier "kinds" is not lexed as `Kind` + `s`.
 *   - Compound keywords with `-` (`phase-group`, `mediated-by`, and now
 *     `role-mixin`) are lexed as single atomic tokens, placed BEFORE the
 *     single-word keywords and Identifier in the ordered list.
 *   - Inline OCL clauses (`pre:`, `post:`, `body:`) are replaced with
 *     `__INLINE_OCL_N__` placeholders by the pre-extractor, so at lex time
 *     the right-hand sides are simple identifiers.
 *   - `modifies:` is NOT pre-extracted — its contents tokenize cleanly as
 *     identifiers and dots.
 */

// ─── Whitespace and comments ─────────────────────────────────────────────

export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

export const LineComment = createToken({
  name: "LineComment",
  pattern: /\/\/[^\n\r]*/,
  group: Lexer.SKIPPED,
});

export const BlockComment = createToken({
  name: "BlockComment",
  pattern: /\/\*[\s\S]*?\*\//,
  group: Lexer.SKIPPED,
});

// ─── Identifier (base for keyword longer_alt) ────────────────────────────

export const Identifier = createToken({
  name: "Identifier",
  pattern: /[A-Za-z_][A-Za-z0-9_]*/,
});

// ─── Keywords ────────────────────────────────────────────────────────────

const keyword = (name: string, text: string): TokenType =>
  createToken({
    name,
    pattern: new RegExp(text),
    longer_alt: Identifier,
  });

export const SchemaKw = keyword("SchemaKw", "schema");
export const NamespaceKw = keyword("NamespaceKw", "namespace");
/**
 * `import "./path/to/other.onto";` — Phase 17 (Paso 5) federation.
 * Brings every top-level declaration from the imported file into
 * the current file's namespace. Resolution is path-relative to the
 * importing file; cycles are detected at the file level.
 */
export const ImportKw = keyword("ImportKw", "import");
/**
 * `as` — Phase 17 (Paso 5 day 2) alias keyword for imports.
 * Captured on `ImportDecl.alias`; v1 uses it for error messages
 * and the reproducibility manifest only. Qualified type references
 * (`Alias.TypeName`) are deferred to day 3 — for now the alias is
 * informational.
 */
export const AsKw = keyword("AsKw", "as");
export const KindKw = keyword("KindKw", "kind");
export const SubkindKw = keyword("SubkindKw", "subkind");
export const RoleKw = keyword("RoleKw", "role");
export const RelatorKw = keyword("RelatorKw", "relator");
export const SpecializesKw = keyword("SpecializesKw", "specializes");
export const MediatedByKw = createToken({
  name: "MediatedByKw",
  pattern: /mediated-by/,
});
export const OfKw = keyword("OfKw", "of");
export const MediatesKw = keyword("MediatesKw", "mediates");
export const PhaseGroupKw = createToken({
  name: "PhaseGroupKw",
  pattern: /phase-group/,
});
export const PhaseKw = keyword("PhaseKw", "phase");
export const IdentityKw = keyword("IdentityKw", "identity");
export const PropertyKw = keyword("PropertyKw", "property");
/**
 * Phase 16b — modifies a property to mean "internal state, not a
 * constructor input". See PropertyDecl docs for the semantics.
 */
export const InternalKw = keyword("InternalKw", "internal");
/**
 * Phase 16b — introduces a literal default value used by the
 * generated constructor when the property is `internal` (otherwise
 * the keyword parses but the default isn't consumed by codegen yet).
 */
export const DefaultKw = keyword("DefaultKw", "default");
export const InvariantsKw = keyword("InvariantsKw", "invariants");
export const EventKw = keyword("EventKw", "event");
export const QueryKw = keyword("QueryKw", "query");
/**
 * `PreKw` deliberately has a multi-target `longer_alt` that includes
 * `PredicateKw`. Without it, Chevrotain's static lexer analysis
 * rejects the grammar with "PredicateKw can never be matched because
 * it appears AFTER PreKw" — `pre` is a strict prefix of `predicate`,
 * and Chevrotain needs to know at config time that seeing more chars
 * after "pre" should give `predicate` (or a plain Identifier) priority.
 *
 * The list form (`longer_alt: [PredicateKw, Identifier]`) is the
 * supported Chevrotain idiom for this case.
 */
export const PredicateKw = createToken({
  name: "PredicateKw",
  pattern: /predicate/,
  longer_alt: Identifier,
});
export const PreKw = createToken({
  name: "PreKw",
  pattern: /pre/,
  longer_alt: [PredicateKw, Identifier],
});
export const PostKw = keyword("PostKw", "post");
export const BodyKw = keyword("BodyKw", "body");
export const ModifiesKw = keyword("ModifiesKw", "modifies");
/**
 * Phase 16 — three sibling clauses on `event` declarations that
 * document computational effects and data dependencies. All three
 * are optional; their bodies are comma-separated identifier lists
 * (Phase 16 MVP — no operations / formal effect handlers yet).
 */
export const EffectsKw = keyword("EffectsKw", "effects");
export const ReadsKw = keyword("ReadsKw", "reads");
export const WritesKw = keyword("WritesKw", "writes");
export const SelfKw = keyword("SelfKw", "self");

// ─── Phase 3 keywords ────────────────────────────────────────────────────

export const CategoryKw = keyword("CategoryKw", "category");
export const MixinKw = keyword("MixinKw", "mixin");
export const RoleMixinKw = createToken({
  name: "RoleMixinKw",
  pattern: /role-mixin/,
});
export const ModeKw = keyword("ModeKw", "mode");
export const QualityKw = keyword("QualityKw", "quality");
export const CollectiveKw = keyword("CollectiveKw", "collective");
export const QuantityKw = keyword("QuantityKw", "quantity");
export const OverrideKw = keyword("OverrideKw", "override");

// ─── Phase 3.5 keywords ──────────────────────────────────────────────────

export const RelationKw = keyword("RelationKw", "relation");
export const FromKw = keyword("FromKw", "from");
export const ToKw = keyword("ToKw", "to");

// ─── Phase 5 keywords and generics ───────────────────────────────────────

/**
 * `Set` is intentionally a capital-S identifier so it doesn't clash with
 * any natural English noun a user might want as a property name (set /
 * resets / settings / etc. are common pitfalls if we allowed lowercase).
 * We still use `longer_alt: Identifier` so identifiers starting with
 * "Set" (e.g. `SetPoint`) keep working.
 */
export const SetKw = keyword("SetKw", "Set");

/**
 * `Option` (Phase 16b) — explicit optionality. Same kind of "soft
 * keyword" as `Set`: capitalized so common identifiers like `option`
 * or `optionSelected` keep parsing as plain identifiers via the
 * `longer_alt: Identifier` fallback. Only the bare token `Option`
 * before a `<` is interpreted as the type constructor.
 */
export const OptionKw = keyword("OptionKw", "Option");

/**
 * `Array<T, N>` — fixed-size homogeneous array. Same "soft keyword"
 * convention as `Set` / `Option`. Maps to Rust `[T; N]` (stack-
 * allocated, Copy when T is Copy — important for embedded). Nesting
 * one Array inside another is explicitly allowed and the canonical
 * way to encode matrices: `Array<Array<Real, 6>, 6>` → `[[f64; 6]; 6]`.
 */
export const ArrayKw = keyword("ArrayKw", "Array");

// ─── Phase 6 keywords ────────────────────────────────────────────────────

/**
 * `happening` — Phase 6 UFO-B perdurant stereotype. Deliberately NOT
 * named `event` because that keyword is already taken by the DbC
 * command-event (a state-mutating method). The two are conceptually
 * distinct: a DbC event executes and then is gone; a `happening` is an
 * occurrent entity whose *identity as a thing* persists in the model.
 */
export const HappeningKw = keyword("HappeningKw", "happening");

// ─── Phase 7 keywords (UFO-C social layer) ───────────────────────────────

/**
 * `agent` — an agentive endurant. Structurally equivalent to a Kind
 * but carries an additional capability flag: only agents may appear
 * as the debitor or creditor of a commitment (enforced by S31).
 *
 * We add `agent` as its own stereotype rather than retrofitting a
 * boolean on KindDecl so that S21's matrix can cleanly express
 * "Agent → Kind" (an agent specializes a Kind) without collapsing
 * agentive and non-agentive Kinds at the type level.
 */
export const AgentKw = keyword("AgentKw", "agent");

/**
 * `commitment` — a social relator connecting a debitor agent to a
 * creditor agent. Phase 7 models commitments as first-class
 * structural declarations; the predicate content (what is committed
 * to) is currently a free-form property bag. A later phase will let
 * users express the predicate as an OCL clause tied to a happening.
 */
export const CommitmentKw = keyword("CommitmentKw", "commitment");

/**
 * `debitor` and `creditor` — endpoint roles of a commitment. Both
 * slots are mandatory, and S31 enforces that each resolves to an
 * `agent` declaration.
 */
export const DebitorKw = keyword("DebitorKw", "debitor");
export const CreditorKw = keyword("CreditorKw", "creditor");

/**
 * Phase 18 (Bloque 2 v0.5) — first-class refinement annotation.
 *
 *   event foo(...): T
 *     refines ns_a::CommitmentName, ns_b::OtherType.parentEventName {
 *       pre: …; post: …;
 *     }
 *
 * Each target in the comma-separated list is either a qualified
 * commitment-discharge reference (`<ns>::<Commitment>`) or a Liskov
 * cross-stage reference (`<ns>::<ParentType>.<eventName>`). The
 * grammar accepts both shapes via the same rule; the AST distinguishes
 * them by whether the dotted segment is present.
 */
export const RefinesKw = keyword("RefinesKw", "refines");

/**
 * Phase 19 (Bloque 2 v0.6) — *member-quantified category*.
 *
 *   category PhysicallyPlausibleReadings where bearer: SensorKind {
 *     bearer.minPlausible >= 0.0;
 *     bearer.maxPlausible <= 1000.0;
 *   }
 *
 * The clause `where <id>: <Type>` declares that the category's
 * invariants quantify over its members, accessed via the binding
 * `<id>` (e.g. `bearer.x`). This unblocks O3 from its dormant state
 * (see §3.2.3 of the thesis): without the binding, S27 rejected any
 * `self.x` referencing a property the category itself did not own,
 * leaving O3 with empty empirical domain.
 */
export const WhereKw = keyword("WhereKw", "where");

/**
 * Phase 20 (Bloque 2 v0.7) — *property rename table*. Declared on a
 * kind/subkind that refines an upstream type with property renaming:
 *
 *   kind BloodSugarSensor renames {
 *     currentBloodSugar -> lastReadingMgDl;
 *     bloodSugarRateMgDlPerMin -> readingRate;
 *   } { ... }
 *
 * Each entry maps a PARENT property name (left of `->`) to the
 * component's OWN property name (right of `->`). The Obligation 4
 * verifier consults this map when checking property correspondence
 * and modifies closure: a parent's `self.currentBloodSugar` is
 * considered covered by the component if it declares `lastReadingMgDl`
 * (via the rename) OR `currentBloodSugar` (literal match).
 */
export const RenamesKw = keyword("RenamesKw", "renames");
export const Arrow = createToken({
  name: "Arrow",
  pattern: /->/,
});
export const ColonColon = createToken({
  name: "ColonColon",
  pattern: /::/,
});

/**
 * Phase 24 (RxOCL) — temporal-trace block.
 *
 * `TraceKw` is the only lexer-level keyword. The temporal operators
 * (`always`, `eventually`, `within`, `steps`, `next`) are NOT lexer
 * tokens — the pre-extractor (preExtract.ts) parses them via direct
 * string matching inside trace-block bodies, then replaces the body
 * with a single placeholder identifier. This means existing `.onto`
 * files that use words like `steps` or `next` as property/identifier
 * names continue to parse cleanly; the temporal lexicon is only
 * recognized inside `trace { ... }` regions.
 */
export const TraceKw = keyword("TraceKw", "trace");

// ─── Phase 7.5 keywords ──────────────────────────────────────────────────
//
// `PredicateKw` itself is declared earlier alongside PreKw so the
// static lexer analysis can resolve the `pre` / `predicate` prefix
// conflict via PreKw's longer_alt list. Registration in the ordered
// allTokens array still happens below in the Phase 7 block.

// ─── Phase 8 keywords (use-case layer) ───────────────────────────────────

/**
 * `use-case` — Phase 8 use-case declaration, modeled as a specialized
 * happening with required actor roles plus designated trigger and
 * outcome commitments. Uses the hyphenated spelling to follow the
 * existing pattern set by `phase-group` and `mediated-by`; the hyphen
 * also guarantees the token isn't confusable with a plain Identifier.
 */
export const UseCaseKw = createToken({
  name: "UseCaseKw",
  pattern: /use-case/,
});

/**
 * `actors`, `trigger`, `success`, `failure` — header slots of a
 * use-case. Structural parallel to `relator … mediates (…)`: they
 * live outside the body braces so generators can read them off
 * without descending into OCL-bearing content.
 *
 * Why `ActorsKw` is its own token: we want actor lists to be a
 * parenthesised comma-separated list (`actors: (Seller, Buyer)`),
 * and keeping the head keyword distinct keeps the grammar LL(1).
 */
export const ActorsKw = keyword("ActorsKw", "actors");
export const TriggerKw = keyword("TriggerKw", "trigger");
export const SuccessKw = keyword("SuccessKw", "success");
export const FailureKw = keyword("FailureKw", "failure");

/**
 * `<` and `>` as single-character tokens — used ONLY for Set<T> generic
 * syntax. Relation-stereotype delimiters `<<` and `>>` (plus their
 * guillemet variants `«` / `»`) are separate tokens declared earlier in
 * the list so Chevrotain's longest-match prefers them.
 */
export const LAngle = createToken({ name: "LAngle", pattern: /</ });
export const RAngle = createToken({ name: "RAngle", pattern: />/ });

// ─── Literals ────────────────────────────────────────────────────────────

// Phase 16b — Real / true / false / null at the STRUCTURAL level
// (these used to live only inside the OCL sub-parser). They show up
// in `default <literal>` clauses on property declarations. Boolean /
// null are soft keywords with `longer_alt: Identifier` so user
// identifiers like `trueNorth` or `nullable` keep working.
export const RealLiteral = createToken({
  name: "RealLiteral",
  pattern: /\d+\.\d+/,
});

export const IntegerLiteral = createToken({
  name: "IntegerLiteral",
  pattern: /0|[1-9]\d*/,
});

export const TrueKw = keyword("TrueKw", "true");
export const FalseKw = keyword("FalseKw", "false");
export const NullKw = keyword("NullKw", "null");

export const StringLiteral = createToken({
  name: "StringLiteral",
  pattern: /"(?:[^"\\]|\\.)*"/,
});

// ─── Structural punctuation ──────────────────────────────────────────────

export const LBrace = createToken({ name: "LBrace", pattern: /\{/ });
export const RBrace = createToken({ name: "RBrace", pattern: /\}/ });
export const LParen = createToken({ name: "LParen", pattern: /\(/ });
export const RParen = createToken({ name: "RParen", pattern: /\)/ });
export const Colon = createToken({ name: "Colon", pattern: /:/ });
export const Semicolon = createToken({ name: "Semicolon", pattern: /;/ });
export const Comma = createToken({ name: "Comma", pattern: /,/ });
export const DotDot = createToken({ name: "DotDot", pattern: /\.\./ });
export const Dot = createToken({ name: "Dot", pattern: /\./ });

export const StereotypeL = createToken({ name: "StereotypeL", pattern: /<<|«/ });
export const StereotypeR = createToken({ name: "StereotypeR", pattern: />>|»/ });
export const LBracket = createToken({ name: "LBracket", pattern: /\[/ });
export const RBracket = createToken({ name: "RBracket", pattern: /\]/ });
export const Star = createToken({ name: "Star", pattern: /\*/ });

// ─── Ordered token list ──────────────────────────────────────────────────
// Chevrotain matches in order; multi-char keywords like `phase-group`,
// `mediated-by`, and `role-mixin` MUST come before their single-word
// siblings and before the Identifier catch-all.

export const allTokens = [
  WhiteSpace,
  LineComment,
  BlockComment,
  // Compound keywords (contain `-`)
  PhaseGroupKw,
  MediatedByKw,
  RoleMixinKw,
  // Single-word keywords
  SchemaKw,
  NamespaceKw,
  ImportKw,
  AsKw,
  KindKw,
  SubkindKw,
  RoleKw,
  RelatorKw,
  SpecializesKw,
  OfKw,
  MediatesKw,
  PhaseKw,
  IdentityKw,
  PropertyKw,
  InternalKw,
  DefaultKw,
  InvariantsKw,
  EventKw,
  QueryKw,
  // PredicateKw MUST come before PreKw: 'pre' is a strict prefix of
  // 'predicate', so Chevrotain's static analysis rejects the lexer
  // unless the longer keyword is checked first.
  PredicateKw,
  PreKw,
  PostKw,
  BodyKw,
  ModifiesKw,
  EffectsKw,
  ReadsKw,
  WritesKw,
  SelfKw,
  CategoryKw,
  MixinKw,
  ModeKw,
  QualityKw,
  CollectiveKw,
  QuantityKw,
  OverrideKw,
  RelationKw,
  FromKw,
  ToKw,
  SetKw,
  OptionKw,
  ArrayKw,
  HappeningKw,
  AgentKw,
  CommitmentKw,
  DebitorKw,
  CreditorKw,
  // Phase 18 (Bloque 2 v0.5)
  RefinesKw,
  // Phase 19 (Bloque 2 v0.6)
  WhereKw,
  // Phase 20 (Bloque 2 v0.7)
  RenamesKw,
  // Phase 24 (RxOCL) — only TraceKw is a lexer token; the temporal
  // operator words are matched inside the pre-extractor (preExtract.ts).
  TraceKw,
  // Phase 8
  UseCaseKw,
  ActorsKw,
  TriggerKw,
  SuccessKw,
  FailureKw,
  // Literals and structural — Real/true/false/null must come before
  // Identifier (handled by `keyword()` already) and RealLiteral
  // before IntegerLiteral so `3.14` doesn't tokenize as 3, then .14.
  TrueKw,
  FalseKw,
  NullKw,
  RealLiteral,
  IntegerLiteral,
  StringLiteral,
  LBrace,
  RBrace,
  LParen,
  RParen,
  LBracket,
  RBracket,
  // StereotypeL / StereotypeR (<< / >>) MUST come before LAngle / RAngle
  // so that the two-char stereotype delimiters win the longest-match
  // contest over the single-char generic delimiters.
  StereotypeL,
  StereotypeR,
  LAngle,
  RAngle,
  // ColonColon MUST come before Colon (longer-match).
  ColonColon,
  Colon,
  // Arrow `->` (Phase 20) — distinct from `>=` etc.; registered
  // before any other tokens that could start with `-`.
  Arrow,
  Semicolon,
  Comma,
  DotDot,
  Dot,
  Star,
  // Identifier last
  Identifier,
];

export const ontoLexer = new Lexer(allTokens, {
  positionTracking: "full",
  ensureOptimizations: true,
});
