# Changelog

## Phase 15.8 — Async event wrappers

- `eventWrappers.ts` extended to emit `<event>_wrapped_async` alongside the sync variant when `emitAsync: true`.
- Async signature: `pub async fn ...<F, Fut>(...) -> Result<(), &'static str> where F: FnOnce(&mut Self, ...) -> Fut, Fut: core::future::Future<Output = ()>`.
- Runtime-agnostic: works with embassy, tokio, smol. No runtime dep added to generated Cargo.toml.
- Same OCL translator; only difference is `impl_fn(self, ...).await` vs `impl_fn(self, ...)`.
- Compatible with no-alloc mode (heapless containers + async).
- CLI: `--rust-async`.
- 14 tests (`test/phase15_8.test.ts`).

## Phase 15.7 — `--rust-no-alloc` mode (heapless)

- `src/codegen-rust/typeMapping.ts` (new): centralizes alloc-vs-heapless type names. All Rust modules delegate to it.
- Refactored all Rust codegen modules to take `RustTargetConfig`. Single codegen, internal branch.
- `RenderRustOptions.target: "alloc" | "no-alloc"`, `heaplessCapacity: number` (default 16).
- Type mapping: `String`→`heapless::String<N>`, `Set<T>`→`heapless::FnvIndexSet<T, N>`, validator return → `heapless::Vec<&'static str, N>`, registry maps → `heapless::FnvIndexMap<K, V, N>`.
- `push`/`insert` wrapped in `let _ = ...` (heapless returns `Result` on overflow).
- Cargo.toml: alloc → no deps; no-alloc → `heapless = "0.8"`.
- lib.rs: alloc → `extern crate alloc`; no-alloc → omitted.
- CLI: `--rust-no-alloc`, `--rust-capacity <n>`.
- 24 tests (`test/phase15_7.test.ts`).

## Phase 15.6 — Rust commitment registries

- `src/codegen-rust/commitmentRegistries.ts`: shared `CommitmentState` enum + `CommitmentTransition<'a, C>` struct; per-commitment `XRegistry<L: FnMut>` with `BTreeMap<XId, X>` + `BTreeMap<XId, CommitmentState>`.
- API: `new`, `with_listener`, `register`, `fulfill`, `violate`, `get_state` — all transitions return `Result<(), &'static str>`.
- State machine: pending → fulfilled/violated, both terminal.
- Listener as `FnMut` generic (no `Box<dyn>`).
- Only emits for commitments with own identity; inherited-identity commitments skipped.
- 18 tests (`test/phase15_6.test.ts`).

## Phase 15.5 — Rust event wrappers

- `src/codegen-rust/eventWrappers.ts`: per-event method on `impl X`, returns `Result<(), &'static str>`. Pre-checks → `@pre` snapshots via `.clone()` → user closure (`FnOnce(&mut Self, ...)`) → post-checks.
- Snake_case method names with `_wrapped` suffix.
- Event-context-aware OCL translator: parameters bind by name, `@pre` resolves to `__pre_<prop>` snapshots, depth-1 only.
- `modifies` paths ignored at runtime (Rust borrow checker territory).
- 14 tests (`test/phase15_5.test.ts`).

## Phase 15 — Rust codegen for embedded targets

- `src/codegen-rust/` — types, factories, validators, index. Targets `no_std + alloc`.
- Type mapping: `Real`→`f64`, `Integer`→`i64`, `String`→`alloc::string::String`, `Boolean`→`bool`, `Set<T>`→`alloc::collections::BTreeSet<T>`. NamedTypes pass through. Identity properties wrap in newtype branded ID structs.
- Structs derive `Debug + Clone + PartialEq`. Branded IDs derive additionally `Eq + Hash + Ord + PartialOrd`.
- Constructors wrap raw identity strings into newtypes; subtype constructors take effective (own + inherited) fields.
- Validators emit `pub fn validate(&self) -> alloc::vec::Vec<&'static str>` with full OCL fragment translated (arithmetic, comparisons, boolean, if/then/else, navigation, all 6 collection operations including `forAll`/`exists` via sentinel substitution).
- Allen calls and `@pre` references skipped with a comment, same as TS validators.
- CLI flag `--target rust` writes `Cargo.toml` (edition 2021, no deps) + `src/lib.rs` (`#![no_std]` + `extern crate alloc;`).
- 19 new tests (`test/phase15.test.ts`) — structural regex assertions; no Rust toolchain required.
- Smoke test on `examples/drone.onto`: 707 LOC Rust crate, 15 branded IDs, 30 structs, 17 constructors, 15 validators.

## Phase 14 — LSP semantic tokens

- `src/lsp/semanticTokens.ts`: collector + encoder + legend constants. Token types: `class`, `property`, `parameter`. Token modifier: `declaration`.
- Walks the AST emitting tokens at known precise spans: NamedType references (3 spans per use, including inside Set<T>), event/query parameter names (with declaration modifier).
- LSP-mandated relative encoding: `[deltaLine, deltaChar, length, type, modifiers, ...]`. Tokens sorted by (line, char) before encoding.
- Server advertises `semanticTokensProvider` with the legend; handles `textDocument/semanticTokens/full` requests.
- 12 new tests (`test/phase14.test.ts`).

## Phase 13 — TextMate grammar

- `vscode-extension/syntaxes/onto.tmLanguage.json`: full TextMate grammar.
- Categorized scopes for stereotypes, header keywords, body keywords, contract (`pre`/`post`), OCL, OCL collection ops, Allen operators, primitives, operators, `@pre` suffix, identifiers, strings, numbers, comments.
- Capitalization heuristic for types vs variables.
- `vscode-extension/package.json` `contributes.grammars` entry; bumped to 0.4.0.
- 14 new tests (`test/phase13.test.ts`) covering grammar shape, regex compilation, keyword coverage, and package wiring.

## Phase 12 — LSP server (Session 3: completion + references + VS Code extension)

- `src/lsp/completion.ts`: 4-context completion (top-level keywords, type position, specializes list, OCL `self.<prop>`). Text-heuristic detection works mid-edit when AST is null.
- `src/lsp/references.ts`: walks the AST collecting declaration site + all type-ref usages. Includes Set element type traversal.
- Server advertises `completionProvider` (with trigger characters `.`, ` `, `:`, `<`, `,`) and `referencesProvider`.
- 11 new tests (`test/phase12_s3.test.ts`).
- `vscode-extension/`: complete VS Code extension package (separate `package.json`, `language-configuration.json`, `extension.ts`, `tsconfig.json`, README). Spawns `ontodsl-lsp` over stdio. Buildable with `npm run package` (vsce). Extension TypeScript compiles clean.
- Bug found: `parse()` returns `ast: null` mid-edit, breaking specializes completion. Added regex-scrape fallback for decl names.

## Phase 12 — LSP server (Session 2: hover + go-to-definition)

- `src/lsp/positionResolver.ts`: AST walker that, given a (line, character) coordinate, returns the identifier at that point (typeRef, property, or decl) with its range.
- `src/lsp/hover.ts`: markdown formatter for hover popups. Shows stereotype, parents, properties (with identity tag), and counts of events/queries/invariants.
- `src/lsp/definition.ts`: jump-target resolver. typeRef → declaration; property → property row; decl → same range (peek-definition).
- Server advertises `hoverProvider: true` and `definitionProvider: true`; handlers re-parse the document per request and route through the resolver.
- 15 new tests (`test/phase12_s2.test.ts`).
- Bug found: AST uses `specializes` not `parents`. Fixed in `formatHover`.

## Phase 12 — LSP server (Session 1: setup + diagnostics)

- `src/lsp/server.ts`: language server speaking LSP over stdio.
- Two-pass diagnostics on every document change: synchronous (parse + 36 semantic rules) immediately, asynchronous (Z3 LSP + commitment predicate verifiers) when complete.
- Document-version check discards stale async results.
- 9 new tests (`test/phase12.test.ts`) using an in-process fake Connection — no subprocess spawn.
- New bin: `ontodsl-lsp` for editor integration.
- Bug found: ChevroTain reports `line: NaN, column: NaN` at EOF. Fixed with `Number.isFinite()` check.
- Sessions 2 (hover, go-to-def) and 3 (completion, VS Code extension) pending.

## Phase 11 — Consolidation (current)

- End-to-end integration test (`test/phase11.test.ts`, 10 tests) exercising the drone through the full pipeline: parse → validate → codegen → transpile → eval → invoke factories → run validators → call sync/async wrappers → manage commitment lifecycle with listener.
- Dead code audit: removed unused imports across `validator.ts`, `oclCheck.ts`, `relationDiagram.ts`, `viz-react/types.ts`, `ocl/builder.ts`. Code now compiles clean under `tsc --noUnusedLocals --noUnusedParameters`.
- CHANGELOG.md (this file).

## Phase 10.9 — Async event wrappers

- Each event now emits both `wrapXName` (sync) and `wrapXNameAsync` (Promise impl). Both share the same translator; only the wrapper frame differs.

## Phase 10.8 — Quantifiers in event clauses

- `forAll`/`exists` in pre/post conditions now compile to `Array.from(...).every/some(__x => ...)`. Closes asymmetry with invariant validators (which had quantifier support since Phase 10).

## Phase 10.7 — Transition listener hook

- `CommitmentRegistry` and per-commitment typed wrappers now accept an optional `TransitionListener<C>` callback. Fires on register (previousState=null), fulfill, violate.
- Listener errors propagate; failed transitions don't notify.

## Phase 10.6 — Commitment lifecycle registry

- Generic `CommitmentRegistry` class + per-commitment typed wrappers (`OrderRegistry`, etc.) with state machine (pending → fulfilled / violated, terminal).
- User explicitly routes happenings to commitments — no runtime relation lookup.

## Phase 10.5 — Event handler runtime wrappers

- `wrapXName(impl)` runs pre-condition checks, captures `@pre` snapshots, runs impl, runs post-condition checks. Throws on violation.
- Translator extends Phase 10's with context-aware `self` (pre vs post resolution) and `@pre` snapshot lookup.

## Phase 10.1 — Polished CLI

- `--verify` flag runs Z3 verifiers; `--diagram` writes Mermaid markdown; `--react-flow` writes React Flow JSON.
- CLI body in `runCli(argv, streams)` with injectable streams for in-process testing.
- Unified diagnostics header (parse + semantic stages combined).

## Phase 10 — TypeScript code generation

- Branded identity types (`type CustomerId = string & { __brand: "CustomerId" }`).
- Interfaces with TS `extends` mirroring DSL specialization.
- Factories with `effectiveProperties` walk for inherited fields.
- Runtime invariant validators with the OCL → TS translator.
- 6 collection operators (`size`, `isEmpty`, `notEmpty`, `includes`, `forAll`, `exists`) supported in invariant validators.

## Phase 9.5 — React Flow data builder

- `buildReactFlowGraph(ast)` — pure data, zero React deps. Consumers feed the output to a `<ReactFlow>` canvas.

## Phase 9 — Mermaid visualization

- Type diagrams (classDiagram), relation diagrams (flowchart), use-case storyboards (flowchart per use-case).

## Phase 8 — Use-case layer

- `useCase` declarations with actors, triggers, success/failure paths.

## Phase 7.75 — Commitment predicate LSP via Z3

- `verifyCommitmentPredicates` async function — Z3-backed LSP check on commitment predicate strengthening (S33/W33).

## Phase 7.5 — Commitment predicates

- Commitment declarations can carry an OCL predicate describing the commitment condition.

## Phase 7 — Agents and commitments

- `agent`, `commitment`, `<<commitsTo>>`/`<<fulfills>>`/`<<violates>>` relation stereotypes (UFO-C social layer).

## Phase 6.5 — Allen's interval algebra

- All 13 Allen operators on happenings, fully Z3-verified in QF_IDL. Converse equivalences enforced.

## Phase 6 — Happenings

- `happening` (UFO-B perdurants), `<<participation>>`, `<<precedes>>`, `<<triggers>>` relations.

## Phase 5 — Sets and collection operations

- `Set<T>` type, six collection ops in OCL (size/isEmpty/notEmpty/includes/forAll/exists).

## Phase 4 — OCL sub-language and Z3 LSP verification

- Full OCL parser, typechecker, and Z3-backed LSP verifier (S29/S30 for event pre/post strengthening).

## Phase 3.5 — Multi-parent inheritance + relations

- Multiple `specializes` parents (C3 linearization), aspect specialization rules, OntoUML relation stereotypes.

## Phase 3 — Full stereotype vocabulary

- `category`, `mixin`, `roleMixin`, `mode`, `quality`, `collective`, `quantity` stereotypes added on top of Phase 2's kind/subkind/role/relator.

## Phase 2 — DbC core

- `kind`, `subkind`, `role`, `relator` declarations with `identity`, `property`, `event`, `query`, `invariants` blocks.
- Initial 13 semantic rules (S1–S13).
