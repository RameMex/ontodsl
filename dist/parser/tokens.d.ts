import { Lexer, type TokenType } from "chevrotain";
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
export declare const WhiteSpace: TokenType;
export declare const LineComment: TokenType;
export declare const BlockComment: TokenType;
export declare const Identifier: TokenType;
export declare const SchemaKw: TokenType;
export declare const NamespaceKw: TokenType;
/**
 * `import "./path/to/other.onto";` — Phase 17 (Paso 5) federation.
 * Brings every top-level declaration from the imported file into
 * the current file's namespace. Resolution is path-relative to the
 * importing file; cycles are detected at the file level.
 */
export declare const ImportKw: TokenType;
/**
 * `as` — Phase 17 (Paso 5 day 2) alias keyword for imports.
 * Captured on `ImportDecl.alias`; v1 uses it for error messages
 * and the reproducibility manifest only. Qualified type references
 * (`Alias.TypeName`) are deferred to day 3 — for now the alias is
 * informational.
 */
export declare const AsKw: TokenType;
export declare const KindKw: TokenType;
export declare const SubkindKw: TokenType;
export declare const RoleKw: TokenType;
export declare const RelatorKw: TokenType;
export declare const SpecializesKw: TokenType;
export declare const MediatedByKw: TokenType;
export declare const OfKw: TokenType;
export declare const MediatesKw: TokenType;
export declare const PhaseGroupKw: TokenType;
export declare const PhaseKw: TokenType;
export declare const IdentityKw: TokenType;
export declare const PropertyKw: TokenType;
/**
 * Phase 16b — modifies a property to mean "internal state, not a
 * constructor input". See PropertyDecl docs for the semantics.
 */
export declare const InternalKw: TokenType;
/**
 * Phase 16b — introduces a literal default value used by the
 * generated constructor when the property is `internal` (otherwise
 * the keyword parses but the default isn't consumed by codegen yet).
 */
export declare const DefaultKw: TokenType;
export declare const InvariantsKw: TokenType;
export declare const EventKw: TokenType;
export declare const QueryKw: TokenType;
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
export declare const PredicateKw: TokenType;
export declare const PreKw: TokenType;
export declare const PostKw: TokenType;
export declare const BodyKw: TokenType;
export declare const ModifiesKw: TokenType;
/**
 * Phase 16 — three sibling clauses on `event` declarations that
 * document computational effects and data dependencies. All three
 * are optional; their bodies are comma-separated identifier lists
 * (Phase 16 MVP — no operations / formal effect handlers yet).
 */
export declare const EffectsKw: TokenType;
export declare const ReadsKw: TokenType;
export declare const WritesKw: TokenType;
export declare const SelfKw: TokenType;
export declare const CategoryKw: TokenType;
export declare const MixinKw: TokenType;
export declare const RoleMixinKw: TokenType;
export declare const ModeKw: TokenType;
export declare const QualityKw: TokenType;
export declare const CollectiveKw: TokenType;
export declare const QuantityKw: TokenType;
export declare const OverrideKw: TokenType;
export declare const RelationKw: TokenType;
export declare const FromKw: TokenType;
export declare const ToKw: TokenType;
/**
 * `Set` is intentionally a capital-S identifier so it doesn't clash with
 * any natural English noun a user might want as a property name (set /
 * resets / settings / etc. are common pitfalls if we allowed lowercase).
 * We still use `longer_alt: Identifier` so identifiers starting with
 * "Set" (e.g. `SetPoint`) keep working.
 */
export declare const SetKw: TokenType;
/**
 * `Option` (Phase 16b) — explicit optionality. Same kind of "soft
 * keyword" as `Set`: capitalized so common identifiers like `option`
 * or `optionSelected` keep parsing as plain identifiers via the
 * `longer_alt: Identifier` fallback. Only the bare token `Option`
 * before a `<` is interpreted as the type constructor.
 */
export declare const OptionKw: TokenType;
/**
 * `Array<T, N>` — fixed-size homogeneous array. Same "soft keyword"
 * convention as `Set` / `Option`. Maps to Rust `[T; N]` (stack-
 * allocated, Copy when T is Copy — important for embedded). Nesting
 * one Array inside another is explicitly allowed and the canonical
 * way to encode matrices: `Array<Array<Real, 6>, 6>` → `[[f64; 6]; 6]`.
 */
export declare const ArrayKw: TokenType;
/**
 * `happening` — Phase 6 UFO-B perdurant stereotype. Deliberately NOT
 * named `event` because that keyword is already taken by the DbC
 * command-event (a state-mutating method). The two are conceptually
 * distinct: a DbC event executes and then is gone; a `happening` is an
 * occurrent entity whose *identity as a thing* persists in the model.
 */
export declare const HappeningKw: TokenType;
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
export declare const AgentKw: TokenType;
/**
 * `commitment` — a social relator connecting a debitor agent to a
 * creditor agent. Phase 7 models commitments as first-class
 * structural declarations; the predicate content (what is committed
 * to) is currently a free-form property bag. A later phase will let
 * users express the predicate as an OCL clause tied to a happening.
 */
export declare const CommitmentKw: TokenType;
/**
 * `debitor` and `creditor` — endpoint roles of a commitment. Both
 * slots are mandatory, and S31 enforces that each resolves to an
 * `agent` declaration.
 */
export declare const DebitorKw: TokenType;
export declare const CreditorKw: TokenType;
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
export declare const RefinesKw: TokenType;
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
export declare const WhereKw: TokenType;
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
export declare const RenamesKw: TokenType;
export declare const Arrow: TokenType;
export declare const ColonColon: TokenType;
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
export declare const TraceKw: TokenType;
/**
 * `use-case` — Phase 8 use-case declaration, modeled as a specialized
 * happening with required actor roles plus designated trigger and
 * outcome commitments. Uses the hyphenated spelling to follow the
 * existing pattern set by `phase-group` and `mediated-by`; the hyphen
 * also guarantees the token isn't confusable with a plain Identifier.
 */
export declare const UseCaseKw: TokenType;
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
export declare const ActorsKw: TokenType;
export declare const TriggerKw: TokenType;
export declare const SuccessKw: TokenType;
export declare const FailureKw: TokenType;
/**
 * `<` and `>` as single-character tokens — used ONLY for Set<T> generic
 * syntax. Relation-stereotype delimiters `<<` and `>>` (plus their
 * guillemet variants `«` / `»`) are separate tokens declared earlier in
 * the list so Chevrotain's longest-match prefers them.
 */
export declare const LAngle: TokenType;
export declare const RAngle: TokenType;
export declare const RealLiteral: TokenType;
export declare const IntegerLiteral: TokenType;
export declare const TrueKw: TokenType;
export declare const FalseKw: TokenType;
export declare const NullKw: TokenType;
export declare const StringLiteral: TokenType;
export declare const LBrace: TokenType;
export declare const RBrace: TokenType;
export declare const LParen: TokenType;
export declare const RParen: TokenType;
export declare const Colon: TokenType;
export declare const Semicolon: TokenType;
export declare const Comma: TokenType;
export declare const DotDot: TokenType;
export declare const Dot: TokenType;
export declare const StereotypeL: TokenType;
export declare const StereotypeR: TokenType;
export declare const LBracket: TokenType;
export declare const RBracket: TokenType;
export declare const Star: TokenType;
export declare const allTokens: TokenType[];
export declare const ontoLexer: Lexer;
//# sourceMappingURL=tokens.d.ts.map