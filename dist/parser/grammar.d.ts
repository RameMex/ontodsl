import { CstParser, type CstNode, type IToken } from "chevrotain";
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
export declare class OntoParser extends CstParser {
    constructor();
    ontoFile: import("chevrotain").ParserMethod<[], CstNode>;
    private schemaDecl;
    private namespaceDecl;
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
    private importDecl;
    private declaration;
    private kindDecl;
    private subkindDecl;
    /**
     * Phase 20 (Bloque 2 v0.7) — property rename table on a component
     * kind/subkind that refines an upstream type with renaming:
     *
     *   renames { parentProp -> ownProp; otherParent -> otherOwn; }
     *
     * Each entry maps a PARENT property name to the COMPONENT's OWN
     * property name. Obligation 4 (W38/W39) consults the map.
     */
    private renamesClause;
    private renameEntry;
    private roleDecl;
    private relatorDecl;
    private phaseGroupDecl;
    private phaseDecl;
    private categoryDecl;
    private mixinDecl;
    private roleMixinDecl;
    private modeDecl;
    private qualityDecl;
    private collectiveDecl;
    private quantityDecl;
    /**
     * Phase 6: `happening Name (specializes P1, P2)? { body }`.
     * Shares the same body shape as every other sortal (identity,
     * properties, invariants, events, queries) so we reuse `typeMember`.
     */
    private happeningDecl;
    /**
     * Phase 7: `agent Name (specializes P1, P2)? { body }`. Body shape
     * identical to Kind — reuses `typeMember`.
     */
    private agentDecl;
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
    private commitmentDecl;
    /**
     * Phase 7.5: `predicate: <inline-ocl> ;`. The OCL inside has been
     * replaced with a placeholder by the pre-extractor (same mechanism
     * as `pre:`/`post:`/`body:`).
     */
    private predicateClause;
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
    private useCaseDecl;
    private relationDecl;
    private multiplicity;
    private typeMember;
    private identityDecl;
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
    private propertyDecl;
    private propertyLiteral;
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
    private typeRef;
    /**
     * Inner slot of an Array: either a bare Identifier OR a nested
     * Array<…,N>. Kept as its own rule so the recursion is explicit and
     * the CST shape stays predictable for the builder.
     */
    private arrayInner;
    private invariantsBlock;
    /**
     * Phase 24 (RxOCL) — `trace { ... }` block. Pre-extraction collapses
     * the whole body to a single placeholder identifier, mirroring the
     * pattern used for `invariants`. The builder later consults
     * `PreExtractResult.traceBlocks` to attach the parsed temporal
     * clauses onto KindDecl / SubkindDecl.
     */
    private traceBlock;
    private eventDecl;
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
    private refinesTarget;
    private queryDecl;
    private paramList;
    private param;
    private eventClause;
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
    private effectsClause;
    private readsClause;
    private writesClause;
    private identList;
    private queryClause;
    private preClause;
    private postClause;
    private bodyClause;
    private modifiesClause;
    /**
     * Path: `self.x.y` or `paramName.x.y`. At least one `.segment` is required.
     */
    private path;
}
export declare const ontoParser: OntoParser;
export type OntoFileCst = CstNode;
export type { IToken };
//# sourceMappingURL=grammar.d.ts.map