import { CstParser } from "chevrotain";
import { allTokens, BodyKw, CategoryKw, CollectiveKw, Colon, Comma, Dot, EventKw, Identifier, IdentityKw, InvariantsKw, KindKw, LBrace, TraceKw, LParen, MediatedByKw, MediatesKw, MixinKw, ModeKw, ModifiesKw, EffectsKw, ReadsKw, WritesKw, NamespaceKw, ImportKw, AsKw, OfKw, OverrideKw, PhaseGroupKw, PhaseKw, PostKw, PreKw, PropertyKw, QualityKw, QuantityKw, QueryKw, RBrace, RParen, RelatorKw, RoleKw, RoleMixinKw, SchemaKw, SelfKw, Semicolon, SpecializesKw, StringLiteral, SubkindKw, RelationKw, FromKw, ToKw, IntegerLiteral, StereotypeL, StereotypeR, LBracket, RBracket, DotDot, Star, SetKw, OptionKw, ArrayKw, InternalKw, DefaultKw, RealLiteral, TrueKw, FalseKw, NullKw, LAngle, RAngle, HappeningKw, AgentKw, CommitmentKw, DebitorKw, CreditorKw, PredicateKw, RefinesKw, ColonColon, WhereKw, RenamesKw, Arrow, UseCaseKw, ActorsKw, TriggerKw, SuccessKw, FailureKw, } from "./tokens.js";
/**
 * Chevrotain parser for the Onto DSL — Phase 3 grammar.
 *
 * New vs Phase 2:
 *   - `kind` now accepts an optional `specializes Identifier` before `{`.
 *   - Seven new declaration heads: `category`, `mixin`, `role-mixin`,
 *     `mode`, `quality`, `collective`, `quantity`.
 *   - `event` / `query` accept an optional leading `override` keyword.
 *
 * EBNF-ish:
 *
 *   ontoFile      ::= schemaDecl namespaceDecl declaration*
 *   schemaDecl    ::= 'schema' StringLiteral ';'
 *   namespaceDecl ::= 'namespace' Identifier ';'
 *
 *   declaration   ::= kindDecl | subkindDecl | roleDecl | relatorDecl
 *                   | phaseGroupDecl | categoryDecl | mixinDecl
 *                   | roleMixinDecl | modeDecl | qualityDecl
 *                   | collectiveDecl | quantityDecl
 *
 *   kindDecl       ::= 'kind' Identifier ('specializes' Identifier)?
 *                      '{' typeMember* '}'
 *   subkindDecl    ::= 'subkind' Identifier 'specializes' Identifier
 *                      '{' typeMember* '}'
 *   roleDecl       ::= 'role' Identifier 'mediated-by' Identifier
 *                      'of' Identifier '{' typeMember* '}'
 *   relatorDecl    ::= 'relator' Identifier 'mediates'
 *                      '(' Identifier (',' Identifier)+ ')'
 *                      '{' typeMember* '}'
 *   phaseGroupDecl ::= 'phase-group' Identifier 'of' Identifier
 *                      '{' phaseDecl+ '}'
 *   phaseDecl      ::= 'phase' Identifier ';'
 *
 *   categoryDecl   ::= 'category'   Identifier ('specializes' Identifier)?
 *                      '{' typeMember* '}'
 *   mixinDecl      ::= 'mixin'      Identifier ('specializes' Identifier)?
 *                      '{' typeMember* '}'
 *   roleMixinDecl  ::= 'role-mixin' Identifier ('specializes' Identifier)?
 *                      '{' typeMember* '}'
 *   modeDecl       ::= 'mode'       Identifier 'of' Identifier
 *                      '{' typeMember* '}'
 *   qualityDecl    ::= 'quality'    Identifier 'of' Identifier
 *                      '{' typeMember* '}'
 *   collectiveDecl ::= 'collective' Identifier 'of' Identifier
 *                      '{' typeMember* '}'
 *   quantityDecl   ::= 'quantity'   Identifier
 *                      '{' typeMember* '}'
 *
 *   typeMember    ::= identityDecl | propertyDecl | invariantsBlock
 *                   | eventDecl | queryDecl
 *
 *   identityDecl  ::= 'identity' ':' Identifier ';'
 *   propertyDecl  ::= 'property' Identifier ':' typeRef ';'
 *   typeRef       ::= Identifier
 *   invariantsBlock ::= 'invariants' '{' Identifier ';' '}'
 *
 *   eventDecl     ::= 'override'? 'event' Identifier '(' paramList? ')' ( ':' typeRef )?
 *                     '{' eventClause* '}'
 *   queryDecl     ::= 'override'? 'query' Identifier '(' paramList? ')'
 *                     ':' typeRef '{' queryClause* '}'
 *
 *   paramList     ::= param (',' param)*
 *   param         ::= Identifier ':' typeRef
 *
 *   eventClause   ::= preClause | postClause | modifiesClause
 *   queryClause   ::= bodyClause
 *
 *   preClause     ::= 'pre'  ':' Identifier ';'
 *   postClause    ::= 'post' ':' Identifier ';'
 *   bodyClause    ::= 'body' ':' Identifier ';'
 *   modifiesClause::= 'modifies' ':' path (',' path)* ';'
 *   path          ::= ('self' | Identifier) ('.' Identifier)+
 *
 * Note: `pre`, `post`, `body` bodies are ALWAYS a single placeholder
 * identifier after pre-extraction, so the grammar sees them that way.
 */
export class OntoParser extends CstParser {
    constructor() {
        super(allTokens, {
            recoveryEnabled: false,
            nodeLocationTracking: "full",
        });
        this.performSelfAnalysis();
    }
    ontoFile = this.RULE("ontoFile", () => {
        this.SUBRULE(this.schemaDecl);
        this.SUBRULE(this.namespaceDecl);
        // Phase 17: imports go between namespace and declarations. They
        // appear as a contiguous block to keep the grammar LL(1) (we don't
        // want to peek across a possibly-empty `import` block to see the
        // first declaration keyword).
        this.MANY(() => this.SUBRULE(this.importDecl));
        this.MANY2(() => this.SUBRULE(this.declaration));
    });
    schemaDecl = this.RULE("schemaDecl", () => {
        this.CONSUME(SchemaKw);
        this.CONSUME(StringLiteral);
        this.CONSUME(Semicolon);
    });
    namespaceDecl = this.RULE("namespaceDecl", () => {
        this.CONSUME(NamespaceKw);
        this.CONSUME(Identifier);
        this.CONSUME(Semicolon);
    });
    /**
     * Paso 5 federation. Three valid shapes:
     *
     *   import "./other.onto";                     — bring in everything
     *   import "./other.onto" as Alias;            — alias for diagnostics
     *   import { A, B } from "./other.onto";       — selective: only A and B
     *   import { A, B } from "./other.onto" as Alias;  — selective + alias
     *
     * The chevrotain grammar picks the right branch by lookahead on the
     * first token after `import`: `{` means selective; anything else
     * means non-selective.
     */
    importDecl = this.RULE("importDecl", () => {
        this.CONSUME(ImportKw);
        this.OR([
            {
                // Selective: import { A, B } from "..."
                ALT: () => {
                    this.CONSUME(LBrace);
                    this.CONSUME(Identifier, { LABEL: "selName" });
                    this.MANY(() => {
                        this.CONSUME(Comma);
                        this.CONSUME2(Identifier, { LABEL: "selName" });
                    });
                    this.CONSUME(RBrace);
                    this.CONSUME(FromKw);
                    this.CONSUME(StringLiteral, { LABEL: "path" });
                },
            },
            {
                // Non-selective: import "..."
                ALT: () => {
                    this.CONSUME2(StringLiteral, { LABEL: "path" });
                },
            },
        ]);
        // Optional `as Alias` suffix in BOTH branches.
        this.OPTION(() => {
            this.CONSUME(AsKw);
            this.CONSUME3(Identifier, { LABEL: "alias" });
        });
        this.CONSUME(Semicolon);
    });
    declaration = this.RULE("declaration", () => {
        this.OR([
            { ALT: () => this.SUBRULE(this.kindDecl) },
            { ALT: () => this.SUBRULE(this.subkindDecl) },
            { ALT: () => this.SUBRULE(this.roleDecl) },
            { ALT: () => this.SUBRULE(this.relatorDecl) },
            { ALT: () => this.SUBRULE(this.phaseGroupDecl) },
            { ALT: () => this.SUBRULE(this.categoryDecl) },
            { ALT: () => this.SUBRULE(this.mixinDecl) },
            { ALT: () => this.SUBRULE(this.roleMixinDecl) },
            { ALT: () => this.SUBRULE(this.modeDecl) },
            { ALT: () => this.SUBRULE(this.qualityDecl) },
            { ALT: () => this.SUBRULE(this.collectiveDecl) },
            { ALT: () => this.SUBRULE(this.quantityDecl) },
            { ALT: () => this.SUBRULE(this.happeningDecl) },
            { ALT: () => this.SUBRULE(this.agentDecl) },
            { ALT: () => this.SUBRULE(this.commitmentDecl) },
            { ALT: () => this.SUBRULE(this.useCaseDecl) },
            { ALT: () => this.SUBRULE(this.relationDecl) },
        ]);
    });
    // ─── Top-level type declarations ──────────────────────────────────────
    kindDecl = this.RULE("kindDecl", () => {
        this.CONSUME(KindKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        // Phase 20 (Bloque 2 v0.7): optional rename table between
        // specializes-list and body.
        this.OPTION2(() => this.SUBRULE(this.renamesClause));
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    subkindDecl = this.RULE("subkindDecl", () => {
        this.CONSUME(SubkindKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(SpecializesKw);
        this.AT_LEAST_ONE_SEP({
            SEP: Comma,
            DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
        });
        // Phase 20 (Bloque 2 v0.7): optional rename table.
        this.OPTION(() => this.SUBRULE(this.renamesClause));
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    /**
     * Phase 20 (Bloque 2 v0.7) — property rename table on a component
     * kind/subkind that refines an upstream type with renaming:
     *
     *   renames { parentProp -> ownProp; otherParent -> otherOwn; }
     *
     * Each entry maps a PARENT property name to the COMPONENT's OWN
     * property name. Obligation 4 (W38/W39) consults the map.
     */
    renamesClause = this.RULE("renamesClause", () => {
        this.CONSUME(RenamesKw);
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.renameEntry));
        this.CONSUME(RBrace);
    });
    renameEntry = this.RULE("renameEntry", () => {
        this.CONSUME(Identifier, { LABEL: "parentName" });
        this.CONSUME(Arrow);
        this.CONSUME2(Identifier, { LABEL: "ownName" });
        this.CONSUME(Semicolon);
    });
    roleDecl = this.RULE("roleDecl", () => {
        this.CONSUME(RoleKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(MediatedByKw);
        this.CONSUME2(Identifier, { LABEL: "mediator" });
        this.CONSUME(OfKw);
        this.CONSUME3(Identifier, { LABEL: "ofKind" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME4(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    relatorDecl = this.RULE("relatorDecl", () => {
        this.CONSUME(RelatorKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        // Phase 5: optional `specializes P1, P2, ...` after the name and
        // before `mediates`. Keeps backward compatibility because OPTION
        // can be skipped entirely.
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME4(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(MediatesKw);
        this.CONSUME(LParen);
        this.CONSUME2(Identifier, { LABEL: "participant" });
        this.MANY(() => {
            this.CONSUME(Comma);
            this.CONSUME3(Identifier, { LABEL: "participant" });
        });
        this.CONSUME(RParen);
        this.CONSUME(LBrace);
        this.MANY2(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    phaseGroupDecl = this.RULE("phaseGroupDecl", () => {
        this.CONSUME(PhaseGroupKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(OfKw);
        this.CONSUME2(Identifier, { LABEL: "ofKind" });
        this.CONSUME(LBrace);
        this.AT_LEAST_ONE(() => this.SUBRULE(this.phaseDecl));
        this.CONSUME(RBrace);
    });
    phaseDecl = this.RULE("phaseDecl", () => {
        this.CONSUME(PhaseKw);
        this.CONSUME(Identifier);
        this.CONSUME(Semicolon);
    });
    // ─── Phase 3 new declarations ─────────────────────────────────────────
    categoryDecl = this.RULE("categoryDecl", () => {
        this.CONSUME(CategoryKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        // Phase 19 (Bloque 2 v0.6): optional `where <bearerName>: <Type>`
        // binding for member-quantified categories. When present, the
        // category's invariants may navigate via `<bearerName>.x` to
        // reach properties of the member type. The Z3 verifier uses
        // this binding to interpret invariants against the member kind's
        // effective properties (see verifyCategoryMembership).
        //
        // Phase 22 (Bloque 2 v0.8): the bearerType may be QUALIFIED
        // (`<ns>::<Type>`) to allow cross-namespace member references —
        // e.g. a Formalization-stage category whose members live in
        // Discovery. The trailing `::<Type>` segment is optional; an
        // unqualified `Type` is preserved as the default form.
        this.OPTION2(() => {
            this.CONSUME(WhereKw);
            this.CONSUME3(Identifier, { LABEL: "bearerName" });
            this.CONSUME(Colon);
            this.CONSUME4(Identifier, { LABEL: "bearerType" });
            this.OPTION3(() => {
                this.CONSUME(ColonColon);
                this.CONSUME5(Identifier, { LABEL: "bearerTypeName" });
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    mixinDecl = this.RULE("mixinDecl", () => {
        this.CONSUME(MixinKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    roleMixinDecl = this.RULE("roleMixinDecl", () => {
        this.CONSUME(RoleMixinKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    modeDecl = this.RULE("modeDecl", () => {
        this.CONSUME(ModeKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(OfKw);
        this.CONSUME2(Identifier, { LABEL: "bearer" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME3(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    qualityDecl = this.RULE("qualityDecl", () => {
        this.CONSUME(QualityKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(OfKw);
        this.CONSUME2(Identifier, { LABEL: "bearer" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME3(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    collectiveDecl = this.RULE("collectiveDecl", () => {
        this.CONSUME(CollectiveKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        // Phase 5: optional specializes BEFORE the `of <member>` clause.
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME3(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(OfKw);
        this.CONSUME2(Identifier, { LABEL: "member" });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    quantityDecl = this.RULE("quantityDecl", () => {
        this.CONSUME(QuantityKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        // Phase 5: optional specializes.
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    /**
     * Phase 6: `happening Name (specializes P1, P2)? { body }`.
     * Shares the same body shape as every other sortal (identity,
     * properties, invariants, events, queries) so we reuse `typeMember`.
     */
    happeningDecl = this.RULE("happeningDecl", () => {
        this.CONSUME(HappeningKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    /**
     * Phase 7: `agent Name (specializes P1, P2)? { body }`. Body shape
     * identical to Kind — reuses `typeMember`.
     */
    agentDecl = this.RULE("agentDecl", () => {
        this.CONSUME(AgentKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    /**
     * Phase 7: `commitment Name (specializes P)? debitor: A creditor: B { body }`.
     *
     * Syntax choice: `debitor`/`creditor` appear as `Keyword: Identifier`
     * pairs outside the body. This parallels the existing `relator`'s
     * `mediates (A, B, C)` shape — both put participants in the header
     * so generators can read off endpoints without descending into the
     * body. Inside the braces we keep the full Kind-style typeMember
     * vocabulary (identity, properties, invariants, events, queries)
     * since the predicate / metadata of a commitment can grow.
     */
    commitmentDecl = this.RULE("commitmentDecl", () => {
        this.CONSUME(CommitmentKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(DebitorKw);
        this.CONSUME(Colon);
        this.CONSUME3(Identifier, { LABEL: "debitor" });
        this.CONSUME(CreditorKw);
        this.CONSUME2(Colon);
        this.CONSUME4(Identifier, { LABEL: "creditor" });
        this.CONSUME(LBrace);
        // Phase 7.5: the body accepts either a standard typeMember
        // (identity, property, invariants, event, query) OR a single
        // `predicate:` clause specific to commitments. We use a GATE-based
        // lookahead on PredicateKw to disambiguate from typeMember's Kind
        // keyword set (which does NOT include `predicate`).
        this.MANY(() => this.OR([
            {
                GATE: () => this.LA(1).tokenType === PredicateKw,
                ALT: () => this.SUBRULE(this.predicateClause),
            },
            { ALT: () => this.SUBRULE(this.typeMember) },
        ]));
        this.CONSUME(RBrace);
    });
    /**
     * Phase 7.5: `predicate: <inline-ocl> ;`. The OCL inside has been
     * replaced with a placeholder by the pre-extractor (same mechanism
     * as `pre:`/`post:`/`body:`).
     */
    predicateClause = this.RULE("predicateClause", () => {
        this.CONSUME(PredicateKw);
        this.CONSUME(Colon);
        this.CONSUME(Identifier, { LABEL: "placeholder" });
        this.CONSUME(Semicolon);
    });
    /**
     * Phase 8: `use-case Name (specializes P)? actors: (A1, A2, ...)
     *           trigger: H success: C1 failure: C2 { body }`.
     *
     * Grammar choices:
     *   - Parenthesised actor list (symmetric to `relator … mediates`
     *     which also parenthesises participant lists). Empty list is
     *     accepted syntactically (matches the empty actor semantics).
     *   - Flat `keyword: Identifier` slots for trigger/success/failure.
     *     All three are mandatory at parse time; S35/S36 check they
     *     resolve.
     *   - Body is the full typeMember set, same as Happening, so
     *     use-cases can declare identity/properties/invariants/events/
     *     queries when they need them.
     */
    useCaseDecl = this.RULE("useCaseDecl", () => {
        this.CONSUME(UseCaseKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.OPTION(() => {
            this.CONSUME(SpecializesKw);
            this.AT_LEAST_ONE_SEP({
                SEP: Comma,
                DEF: () => this.CONSUME2(Identifier, { LABEL: "parent" }),
            });
        });
        this.CONSUME(ActorsKw);
        this.CONSUME(Colon);
        this.CONSUME(LParen);
        // Optional: zero actors is a degenerate use-case, but the DSL
        // allows it. Most real ones will have at least one.
        this.OPTION2(() => {
            this.CONSUME3(Identifier, { LABEL: "actor" });
            this.MANY(() => {
                this.CONSUME(Comma);
                this.CONSUME4(Identifier, { LABEL: "actor" });
            });
        });
        this.CONSUME(RParen);
        this.CONSUME(TriggerKw);
        this.CONSUME2(Colon);
        this.CONSUME5(Identifier, { LABEL: "trigger" });
        this.CONSUME(SuccessKw);
        this.CONSUME3(Colon);
        this.CONSUME6(Identifier, { LABEL: "success" });
        this.CONSUME(FailureKw);
        this.CONSUME4(Colon);
        this.CONSUME7(Identifier, { LABEL: "failure" });
        this.CONSUME(LBrace);
        this.MANY2(() => this.SUBRULE(this.typeMember));
        this.CONSUME(RBrace);
    });
    relationDecl = this.RULE("relationDecl", () => {
        this.CONSUME(RelationKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(Colon);
        this.CONSUME(StereotypeL);
        this.CONSUME2(Identifier, { LABEL: "stereotype" });
        this.CONSUME(StereotypeR);
        this.CONSUME(FromKw);
        this.CONSUME3(Identifier, { LABEL: "source" });
        this.CONSUME(LBracket);
        this.SUBRULE(this.multiplicity, { LABEL: "sourceMultiplicity" });
        this.CONSUME(RBracket);
        this.CONSUME(ToKw);
        this.CONSUME4(Identifier, { LABEL: "target" });
        this.CONSUME2(LBracket);
        this.SUBRULE2(this.multiplicity, { LABEL: "targetMultiplicity" });
        this.CONSUME2(RBracket);
        this.CONSUME(Semicolon);
    });
    multiplicity = this.RULE("multiplicity", () => {
        this.OR([
            { ALT: () => this.CONSUME(Star, { LABEL: "exactStar" }) },
            {
                ALT: () => {
                    this.CONSUME(IntegerLiteral, { LABEL: "lower" });
                    this.OPTION(() => {
                        this.CONSUME(DotDot);
                        this.OR2([
                            { ALT: () => this.CONSUME2(IntegerLiteral, { LABEL: "upperInt" }) },
                            { ALT: () => this.CONSUME2(Star, { LABEL: "upperStar" }) },
                        ]);
                    });
                },
            },
        ]);
    });
    // ─── Type members ────────────────────────────────────────────────────
    typeMember = this.RULE("typeMember", () => {
        this.OR([
            { ALT: () => this.SUBRULE(this.identityDecl) },
            { ALT: () => this.SUBRULE(this.propertyDecl) },
            { ALT: () => this.SUBRULE(this.invariantsBlock) },
            { ALT: () => this.SUBRULE(this.traceBlock) },
            { ALT: () => this.SUBRULE(this.eventDecl) },
            { ALT: () => this.SUBRULE(this.queryDecl) },
        ]);
    });
    identityDecl = this.RULE("identityDecl", () => {
        this.CONSUME(IdentityKw);
        this.CONSUME(Colon);
        this.CONSUME(Identifier);
        this.CONSUME(Semicolon);
    });
    /**
     * propertyDecl ::= 'property' Identifier ':' typeRef
     *                  ('internal')?
     *                  ('default' literal)?
     *                  ';'
     *
     * Phase 16b — `internal` and `default <lit>` are optional. They
     * compose: `internal default 0.0` means "private state, init to
     * 0.0". A bare `default 0.0` on a non-internal property records
     * the value (it can be useful for documentation / future
     * tunable-with-default support) but the generated constructor
     * still requires the parameter.
     */
    propertyDecl = this.RULE("propertyDecl", () => {
        this.CONSUME(PropertyKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(Colon);
        this.SUBRULE(this.typeRef);
        this.OPTION(() => this.CONSUME(InternalKw));
        this.OPTION2(() => {
            this.CONSUME(DefaultKw);
            this.SUBRULE(this.propertyLiteral, { LABEL: "default" });
        });
        this.CONSUME(Semicolon);
    });
    propertyLiteral = this.RULE("propertyLiteral", () => {
        this.OR([
            { ALT: () => this.CONSUME(RealLiteral, { LABEL: "real" }) },
            { ALT: () => this.CONSUME(IntegerLiteral, { LABEL: "integer" }) },
            { ALT: () => this.CONSUME(StringLiteral, { LABEL: "string" }) },
            { ALT: () => this.CONSUME(TrueKw, { LABEL: "true" }) },
            { ALT: () => this.CONSUME(FalseKw, { LABEL: "false" }) },
            { ALT: () => this.CONSUME(NullKw, { LABEL: "null" }) },
        ]);
    });
    /**
     * Type reference used in property declarations, parameter types, and
     * query return types.
     *
     *   typeRef ::= Identifier                              — bare primitive or named type
     *             | 'Set'    '<' Identifier '>'             — homogeneous set
     *             | 'Option' '<' Identifier '>'             — explicit optionality
     *             | 'Array'  '<' arrayInner ',' IntegerLiteral '>'
     *
     *   arrayInner ::= Identifier | 'Array' '<' arrayInner ',' IntegerLiteral '>'
     *
     * Set/Option only accept a bare Identifier inner slot — nesting
     * (`Set<Set<T>>`, `Option<Set<T>>`, …) stays rejected.
     *
     * Array DOES allow Array nesting so matrices encode as
     * `Array<Array<Real, 6>, 6>` (= `[[f64; 6]; 6]` in Rust). Mixing
     * Array with Set/Option is rejected at the builder layer.
     */
    typeRef = this.RULE("typeRef", () => {
        this.OR([
            {
                ALT: () => {
                    this.CONSUME(SetKw);
                    this.CONSUME(LAngle);
                    this.CONSUME(Identifier, { LABEL: "element" });
                    this.CONSUME(RAngle);
                },
            },
            {
                ALT: () => {
                    this.CONSUME(OptionKw);
                    this.CONSUME2(LAngle);
                    this.CONSUME3(Identifier, { LABEL: "optElement" });
                    this.CONSUME2(RAngle);
                },
            },
            {
                ALT: () => {
                    this.CONSUME(ArrayKw);
                    this.CONSUME3(LAngle);
                    this.SUBRULE(this.arrayInner, { LABEL: "arrInner" });
                    this.CONSUME(Comma);
                    this.CONSUME(IntegerLiteral, { LABEL: "arrSize" });
                    this.CONSUME3(RAngle);
                },
            },
            {
                // Bare type name OR qualified `Alias.TypeName` (Paso 5 day 3).
                // The trailing `Dot Identifier` is optional; when present the
                // first Identifier is the import alias and the second is the
                // type name itself.
                ALT: () => {
                    this.CONSUME4(Identifier, { LABEL: "typeName" });
                    this.OPTION(() => {
                        this.CONSUME(Dot);
                        this.CONSUME5(Identifier, { LABEL: "qualifiedName" });
                    });
                },
            },
        ]);
    });
    /**
     * Inner slot of an Array: either a bare Identifier OR a nested
     * Array<…,N>. Kept as its own rule so the recursion is explicit and
     * the CST shape stays predictable for the builder.
     */
    arrayInner = this.RULE("arrayInner", () => {
        this.OR([
            {
                ALT: () => {
                    this.CONSUME(ArrayKw);
                    this.CONSUME(LAngle);
                    this.SUBRULE(this.arrayInner, { LABEL: "arrInner" });
                    this.CONSUME(Comma);
                    this.CONSUME(IntegerLiteral, { LABEL: "arrSize" });
                    this.CONSUME(RAngle);
                },
            },
            { ALT: () => this.CONSUME(Identifier, { LABEL: "typeName" }) },
        ]);
    });
    invariantsBlock = this.RULE("invariantsBlock", () => {
        this.CONSUME(InvariantsKw);
        this.CONSUME(LBrace);
        // After pre-extraction the body is always `placeholder ;`.
        this.CONSUME(Identifier, { LABEL: "placeholder" });
        this.CONSUME(Semicolon);
        this.CONSUME(RBrace);
    });
    /**
     * Phase 24 (RxOCL) — `trace { ... }` block. Pre-extraction collapses
     * the whole body to a single placeholder identifier, mirroring the
     * pattern used for `invariants`. The builder later consults
     * `PreExtractResult.traceBlocks` to attach the parsed temporal
     * clauses onto KindDecl / SubkindDecl.
     */
    traceBlock = this.RULE("traceBlock", () => {
        this.CONSUME(TraceKw);
        this.CONSUME(LBrace);
        this.CONSUME(Identifier, { LABEL: "placeholder" });
        this.CONSUME(Semicolon);
        this.CONSUME(RBrace);
    });
    // ─── Events & queries ────────────────────────────────────────────────
    eventDecl = this.RULE("eventDecl", () => {
        this.OPTION(() => this.CONSUME(OverrideKw));
        this.CONSUME(EventKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(LParen);
        this.OPTION2(() => this.SUBRULE(this.paramList));
        this.CONSUME(RParen);
        // Optional return type: `event update(...): Real { ... }`. When
        // present, post-conditions may reference the special identifier
        // `result` to constrain the return value. Backwards-compatible —
        // events without a `: T` continue to mean "returns ()".
        this.OPTION3(() => {
            this.CONSUME(Colon);
            this.SUBRULE(this.typeRef, { LABEL: "returnType" });
        });
        // Phase 18 (Bloque 2 v0.5): optional `refines <qname> (, <qname>)*`
        // clause. Each qname is `<ns>::<Name>` or `<ns>::<Type>.<eventName>`.
        // Replaces the v0 comment-mining for traceability; the AST exposes
        // these as structured refinement edges the inter-stage verifier
        // consumes directly.
        this.OPTION4(() => {
            this.CONSUME(RefinesKw);
            this.SUBRULE(this.refinesTarget, { LABEL: "refines" });
            this.MANY(() => {
                this.CONSUME(Comma);
                this.SUBRULE2(this.refinesTarget, { LABEL: "refines" });
            });
        });
        this.CONSUME(LBrace);
        this.MANY2(() => this.SUBRULE(this.eventClause));
        this.CONSUME(RBrace);
    });
    /**
     * A single `refines:` target. Four accepted shapes:
     *   <ns>::<Name>              — qualified commitment-discharge reference
     *   <ns>::<Type>.<eventName>  — qualified Liskov / event-refinement
     *   <Name>                    — unqualified (resolved against merged AST)
     *   <Type>.<eventName>        — unqualified event refinement
     *
     * Phase 22 (Bloque 2 v0.8): the leading `<ns>::` is now OPTIONAL.
     * The motivation: Sonnet and DeepSeek both occasionally emit
     * unqualified refines targets when referring to commitments in the
     * same merged compilation unit. The multi-file merge collapses
     * namespaces into one decl list at verification time, so the
     * unqualified form is semantically unambiguous as long as names
     * are globally unique (which the playbook already requires).
     */
    refinesTarget = this.RULE("refinesTarget", () => {
        this.CONSUME(Identifier, { LABEL: "first" });
        this.OPTION(() => {
            this.CONSUME(ColonColon);
            this.CONSUME2(Identifier, { LABEL: "afterColons" });
        });
        this.OPTION2(() => {
            this.CONSUME(Dot);
            this.CONSUME3(Identifier, { LABEL: "eventName" });
        });
    });
    queryDecl = this.RULE("queryDecl", () => {
        this.OPTION(() => this.CONSUME(OverrideKw));
        this.CONSUME(QueryKw);
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(LParen);
        this.OPTION2(() => this.SUBRULE(this.paramList));
        this.CONSUME(RParen);
        this.CONSUME(Colon);
        this.SUBRULE(this.typeRef, { LABEL: "returnType" });
        this.CONSUME(LBrace);
        this.MANY(() => this.SUBRULE(this.queryClause));
        this.CONSUME(RBrace);
    });
    paramList = this.RULE("paramList", () => {
        this.SUBRULE(this.param);
        this.MANY(() => {
            this.CONSUME(Comma);
            this.SUBRULE2(this.param);
        });
    });
    param = this.RULE("param", () => {
        this.CONSUME(Identifier, { LABEL: "name" });
        this.CONSUME(Colon);
        this.SUBRULE(this.typeRef);
    });
    eventClause = this.RULE("eventClause", () => {
        this.OR([
            { ALT: () => this.SUBRULE(this.preClause) },
            { ALT: () => this.SUBRULE(this.postClause) },
            { ALT: () => this.SUBRULE(this.modifiesClause) },
            { ALT: () => this.SUBRULE(this.effectsClause) },
            { ALT: () => this.SUBRULE(this.readsClause) },
            { ALT: () => this.SUBRULE(this.writesClause) },
        ]);
    });
    /**
     * Phase 16 (MVP) — three sibling DbC clauses for documenting
     * computational effects and data dependencies.
     *
     *   effectsClause ::= 'effects' ':' Ident (',' Ident)* ';'
     *   readsClause   ::= 'reads'   ':' Ident (',' Ident)* ';'
     *   writesClause  ::= 'writes'  ':' Ident (',' Ident)* ';'
     *
     * Bodies are plain identifier lists (no operations, no
     * generics). Phase 16.5 will add `effect E { op(args) -> ret }`
     * formal declarations and codegen capability passing.
     */
    /**
     * Identifier list, optionally wrapped in `{ ... }`. Both
     * `effects: A, B;` and `effects: { A, B };` parse the same.
     * Brace form is what the prompt's reference syntax uses, so models
     * naturally emit it; the bare form is shorter for hand-authoring.
     */
    effectsClause = this.RULE("effectsClause", () => {
        this.CONSUME(EffectsKw);
        this.CONSUME(Colon);
        this.SUBRULE(this.identList, { LABEL: "list" });
        this.CONSUME(Semicolon);
    });
    readsClause = this.RULE("readsClause", () => {
        this.CONSUME(ReadsKw);
        this.CONSUME(Colon);
        this.SUBRULE(this.identList, { LABEL: "list" });
        this.CONSUME(Semicolon);
    });
    writesClause = this.RULE("writesClause", () => {
        this.CONSUME(WritesKw);
        this.CONSUME(Colon);
        this.SUBRULE(this.identList, { LABEL: "list" });
        this.CONSUME(Semicolon);
    });
    identList = this.RULE("identList", () => {
        this.OR([
            {
                ALT: () => {
                    this.CONSUME(LBrace);
                    this.CONSUME(Identifier, { LABEL: "ident" });
                    this.MANY(() => {
                        this.CONSUME(Comma);
                        this.CONSUME2(Identifier, { LABEL: "ident" });
                    });
                    this.CONSUME(RBrace);
                },
            },
            {
                ALT: () => {
                    this.CONSUME3(Identifier, { LABEL: "ident" });
                    this.MANY2(() => {
                        this.CONSUME2(Comma);
                        this.CONSUME4(Identifier, { LABEL: "ident" });
                    });
                },
            },
        ]);
    });
    queryClause = this.RULE("queryClause", () => {
        this.SUBRULE(this.bodyClause);
    });
    preClause = this.RULE("preClause", () => {
        this.CONSUME(PreKw);
        this.CONSUME(Colon);
        this.CONSUME(Identifier, { LABEL: "placeholder" });
        this.CONSUME(Semicolon);
    });
    postClause = this.RULE("postClause", () => {
        this.CONSUME(PostKw);
        this.CONSUME(Colon);
        this.CONSUME(Identifier, { LABEL: "placeholder" });
        this.CONSUME(Semicolon);
    });
    bodyClause = this.RULE("bodyClause", () => {
        this.CONSUME(BodyKw);
        this.CONSUME(Colon);
        this.CONSUME(Identifier, { LABEL: "placeholder" });
        this.CONSUME(Semicolon);
    });
    modifiesClause = this.RULE("modifiesClause", () => {
        this.CONSUME(ModifiesKw);
        this.CONSUME(Colon);
        this.SUBRULE(this.path);
        this.MANY(() => {
            this.CONSUME(Comma);
            this.SUBRULE2(this.path);
        });
        this.CONSUME(Semicolon);
    });
    /**
     * Path: `self.x.y` or `paramName.x.y`. At least one `.segment` is required.
     */
    path = this.RULE("path", () => {
        this.OR([
            { ALT: () => this.CONSUME(SelfKw) },
            { ALT: () => this.CONSUME(Identifier, { LABEL: "root" }) },
        ]);
        this.AT_LEAST_ONE(() => {
            this.CONSUME(Dot);
            this.CONSUME2(Identifier, { LABEL: "segment" });
        });
    });
}
export const ontoParser = new OntoParser();
//# sourceMappingURL=grammar.js.map