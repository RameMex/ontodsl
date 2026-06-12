#!/usr/bin/env node
/**
 * Onto DSL — Language Server (Phase 12, Session 1).
 *
 * What this session covers:
 *   - Initialize / shutdown lifecycle.
 *   - textDocument/didOpen, didChange, didClose with an in-memory
 *     document store.
 *   - Diagnostics: synchronous parse + validate runs on every change,
 *     then optionally an async Z3 LSP verification pass that publishes
 *     a SECOND diagnostic round when it completes.
 *   - SourceLocation → LSP Range mapping (1-indexed → 0-indexed).
 *   - Code → DiagnosticSeverity mapping (S## = Error, W## = Warning).
 *
 * Out of scope this session (will land in Session 2/3):
 *   - Hover (textDocument/hover)
 *   - Go-to-definition (textDocument/definition)
 *   - Completion (textDocument/completion)
 *   - Find references
 *   - Rename refactoring
 *   - VS Code extension package
 *
 * Architecture choice: stdio transport. LSP supports IPC, sockets,
 * and node-ipc; stdio is the lowest common denominator and what every
 * editor's LSP client supports natively. No transport selection flag.
 *
 * The exported `runServer` function is the testable entry point —
 * tests can supply their own connection (using vscode-languageserver
 * in-process duplex streams) instead of spawning a real subprocess.
 * The script-mode entry at the bottom wires stdio.
 */

import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  TextDocumentSyncKind,
  InitializeResult,
  Diagnostic,
  DiagnosticSeverity,
  Range,
  Connection,
  Hover,
  Location,
  TextDocumentPositionParams,
  CompletionItem as LspCompletionItem,
  CompletionParams,
  ReferenceParams,
  SemanticTokensParams,
  SemanticTokens,
} from "vscode-languageserver/node.js";
import { TextDocument } from "vscode-languageserver-textdocument";

import { parse } from "../parser/index.js";
import {
  verifyLSPContracts,
  verifyCommitmentPredicates,
} from "../semantic/index.js";
import { resolveAtPosition } from "./positionResolver.js";
import { formatHover } from "./hover.js";
import { findDefinitionLocation } from "./definition.js";
import { computeCompletions } from "./completion.js";
import { findReferences } from "./references.js";
import {
  collectSemanticTokens,
  encodeSemanticTokens,
  TOKEN_TYPES,
  TOKEN_MODIFIERS,
} from "./semanticTokens.js";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

/**
 * Configure handlers on a `Connection`. Returns the same connection
 * after wiring up the standard handlers + the documents manager.
 *
 * Tests pass an in-process connection here. Production passes the
 * stdio-based one from `createConnection(ProposedFeatures.all)`.
 *
 * The function does NOT call `connection.listen()` — that's the
 * caller's job. This lets tests drive the connection by sending
 * messages through the test-side duplex without having to race
 * against a real listen loop.
 */
export function runServer(connection: Connection): {
  documents: TextDocuments<TextDocument>;
} {
  const documents = new TextDocuments(TextDocument);

  // ─── Lifecycle ────────────────────────────────────────────────────
  connection.onInitialize(
    (_params: InitializeParams): InitializeResult => ({
      capabilities: {
        textDocumentSync: TextDocumentSyncKind.Incremental,
        hoverProvider: true,
        definitionProvider: true,
        completionProvider: {
          triggerCharacters: [".", " ", ":", "<", ","],
        },
        referencesProvider: true,
        // Phase 14: semantic tokens. The legend tells the client
        // which token type/modifier each integer index in the
        // returned token array corresponds to. The client will
        // request tokens via `textDocument/semanticTokens/full`.
        semanticTokensProvider: {
          legend: {
            tokenTypes: [...TOKEN_TYPES],
            tokenModifiers: [...TOKEN_MODIFIERS],
          },
          full: true,
        },
      },
      serverInfo: {
        name: "ontodsl-lsp",
        version: "0.4.0",
      },
    }),
  );

  // ─── Hover ────────────────────────────────────────────────────────
  // For each hover request we re-parse the document to get a fresh
  // AST. Re-parsing is cheap (single-digit ms) and avoids the
  // bookkeeping of caching ASTs per document version. If profiling
  // ever shows this dominates, an LRU cache keyed on (uri, version)
  // is the obvious next step.
  connection.onHover((params: TextDocumentPositionParams): Hover | null => {
    const doc = documents.get(params.textDocument.uri);
    if (!doc) return null;
    const { ast } = parse(doc.getText());
    if (!ast) return null;
    const ref = resolveAtPosition(
      ast,
      params.position.line,
      params.position.character,
    );
    if (!ref) return null;
    const md = formatHover(ast, ref);
    if (!md) return null;
    return {
      contents: { kind: "markdown", value: md },
      range: ref.range,
    };
  });

  // ─── Go to Definition ─────────────────────────────────────────────
  connection.onDefinition(
    (params: TextDocumentPositionParams): Location | null => {
      const doc = documents.get(params.textDocument.uri);
      if (!doc) return null;
      const { ast } = parse(doc.getText());
      if (!ast) return null;
      const ref = resolveAtPosition(
        ast,
        params.position.line,
        params.position.character,
      );
      if (!ref) return null;
      const def = findDefinitionLocation(ast, params.textDocument.uri, ref);
      if (!def) return null;
      return Location.create(def.uri, def.range);
    },
  );

  // ─── Completion ───────────────────────────────────────────────────
  // The completion module accepts a possibly-null AST since the
  // document is often mid-edit and may not parse cleanly. Even
  // without an AST we can still suggest keywords and primitives.
  connection.onCompletion(
    (params: CompletionParams): LspCompletionItem[] => {
      const doc = documents.get(params.textDocument.uri);
      if (!doc) return [];
      const { ast } = parse(doc.getText());
      const items = computeCompletions(
        doc.getText(),
        params.position.line,
        params.position.character,
        ast,
      );
      return items.map((i): LspCompletionItem => {
        const item = {
          label: i.label,
          kind: i.kind,
        } as LspCompletionItem;
        if (i.detail !== undefined) item.detail = i.detail;
        if (i.documentation !== undefined) item.documentation = i.documentation;
        return item;
      });
    },
  );

  // ─── Find References ──────────────────────────────────────────────
  // Resolve the symbol at the cursor first (same path as hover/def),
  // then enumerate every location with a matching name.
  connection.onReferences((params: ReferenceParams): Location[] => {
    const doc = documents.get(params.textDocument.uri);
    if (!doc) return [];
    const { ast } = parse(doc.getText());
    if (!ast) return [];
    const ref = resolveAtPosition(
      ast,
      params.position.line,
      params.position.character,
    );
    if (!ref) return [];
    const refs = findReferences(
      ast,
      params.textDocument.uri,
      ref.name,
      params.context.includeDeclaration,
    );
    return refs.map((r) => Location.create(r.uri, r.range));
  });

  // ─── Semantic Tokens (Phase 14) ───────────────────────────────────
  // Editor requests "color this whole document". We parse, walk the
  // AST collecting tokens at known precise spans (NamedType refs,
  // parameters), and return the LSP-encoded relative array.
  //
  // If the parse fails (mid-edit), we return an empty token list —
  // the editor falls back to TextMate (Phase 13) coloring, which is
  // the right behavior: don't disturb the existing highlighting with
  // partial info.
  connection.languages.semanticTokens.on(
    (params: SemanticTokensParams): SemanticTokens => {
      const doc = documents.get(params.textDocument.uri);
      if (!doc) return { data: [] };
      const { ast } = parse(doc.getText());
      if (!ast) return { data: [] };
      const tokens = collectSemanticTokens(ast);
      return { data: encodeSemanticTokens(tokens) };
    },
  );

  // ─── Diagnostics on document changes ──────────────────────────────
  // We re-validate on every change. The synchronous validator is
  // cheap; the async Z3 verifier is launched but doesn't block the
  // initial diagnostic publish.
  // Diagnostics on document changes. `onDidChangeContent` fires for
  // BOTH initial open and subsequent edits — TextDocuments treats a
  // didOpen as a "content arrived" event. Registering a separate
  // onDidOpen would double-fire the validator.
  documents.onDidChangeContent((change) => {
    void validateAndPublish(connection, change.document);
  });

  // Clear diagnostics for closed documents — otherwise stale
  // diagnostics linger in the editor's "Problems" panel.
  documents.onDidClose((event) => {
    connection.sendDiagnostics({
      uri: event.document.uri,
      diagnostics: [],
    });
  });

  documents.listen(connection);
  return { documents };
}

/**
 * Validate a document and publish diagnostics in two passes:
 *   1. Sync (parse + validateSemantics): published immediately.
 *   2. Async (Z3 LSP verifiers): published when complete, REPLACING
 *      the sync diagnostics with sync + async combined.
 *
 * The two-pass design avoids blocking typing on Z3 startup (~2-5s
 * cold). Users see syntax/structural errors instantly; LSP-level
 * verification catches up shortly after.
 *
 * If a SECOND change arrives while the Z3 pass is still running, the
 * async result for the OLD content gets discarded — we check that the
 * document version hasn't moved before publishing.
 */
async function validateAndPublish(
  connection: Connection,
  doc: TextDocument,
): Promise<void> {
  const initialVersion = doc.version;
  const text = doc.getText();

  const { ast, errors } = parse(text);
  const syncDiags = errors.map(parseErrorToDiagnostic);

  // Publish sync diagnostics immediately.
  connection.sendDiagnostics({ uri: doc.uri, diagnostics: syncDiags });

  // Bail on async if there's no AST (parse-stage failure) — the
  // verifiers expect a typed AST to inspect.
  if (!ast) return;

  // Run async verifiers concurrently. A future polish could throttle
  // these per document (debounce); for Session 1 we run on every
  // change. Cold start dominates anyway.
  try {
    const [lspDiags, predDiags] = await Promise.all([
      verifyLSPContracts(ast),
      verifyCommitmentPredicates(ast),
    ]);

    // Discard if document changed during the async work.
    if (doc.version !== initialVersion) return;

    const asyncDiags = [...lspDiags, ...predDiags].map(
      semanticErrorToDiagnostic,
    );
    connection.sendDiagnostics({
      uri: doc.uri,
      diagnostics: [...syncDiags, ...asyncDiags],
    });
  } catch (err) {
    // Z3 init failure or solver crash. We surface as a single
    // diagnostic at file start so the user knows verification didn't
    // run, rather than silently degrading. Sync diagnostics are
    // already published — keep them and append.
    connection.sendDiagnostics({
      uri: doc.uri,
      diagnostics: [
        ...syncDiags,
        {
          range: Range.create(0, 0, 0, 1),
          severity: DiagnosticSeverity.Information,
          source: "ontodsl",
          message: `Z3 verification could not run: ${(err as Error).message}`,
          code: "LSP-INFO",
        },
      ],
    });
  }
}

// ─── Diagnostic mapping helpers ─────────────────────────────────────

/**
 * Map a ParseError to an LSP Diagnostic. The DSL uses 1-indexed
 * line/column; LSP uses 0-indexed. ParseError doesn't carry an end
 * position, so we underline a single character (length 1) at the
 * reported start. The semantic-stage errors are mapped via the same
 * `code → severity` rule used for SemanticError.
 */
function parseErrorToDiagnostic(e: {
  readonly message: string;
  readonly line?: number;
  readonly column?: number;
  readonly code?: string;
  readonly stage: string;
}): Diagnostic {
  // ChevroTain reports `line: NaN, column: NaN` when an error happens
  // at EOF or somewhere without a token to anchor. JSON.stringify
  // serialises NaN as `null`, which is misleading — the value at
  // runtime is genuinely NaN, so `?? 1` doesn't help. We must check
  // explicitly via `Number.isFinite`.
  const safeLine = Number.isFinite(e.line) ? (e.line as number) : 1;
  const safeCol = Number.isFinite(e.column) ? (e.column as number) : 1;
  const line = safeLine - 1;
  const character = safeCol - 1;
  const range = Range.create(line, character, line, character + 1);
  return {
    range,
    severity: codeToSeverity(e.code),
    source: "ontodsl",
    message: e.message,
    code: e.code ?? e.stage,
  };
}

/**
 * Map a SemanticError to an LSP Diagnostic. SemanticError CAN carry a
 * SourceLocation with `line, column, length`, in which case we paint
 * a multi-character range. When location is null we fall back to
 * range 0:0–0:1 (start of file) — better than dropping the diagnostic
 * entirely, since the rule code in the message tells the user what
 * went wrong even without a precise location.
 */
function semanticErrorToDiagnostic(e: {
  readonly code: string;
  readonly message: string;
  readonly location: {
    readonly line: number;
    readonly column: number;
    readonly length: number;
  } | null;
}): Diagnostic {
  let range: Range;
  if (e.location) {
    const line = e.location.line - 1;
    const character = e.location.column - 1;
    range = Range.create(line, character, line, character + e.location.length);
  } else {
    range = Range.create(0, 0, 0, 1);
  }
  return {
    range,
    severity: codeToSeverity(e.code),
    source: "ontodsl",
    message: e.message,
    code: e.code,
  };
}

/**
 * S-prefixed codes are hard errors; W-prefixed are warnings;
 * everything else is treated as an Error to be safe (better noisy
 * than silent for unfamiliar codes).
 */
function codeToSeverity(code: string | undefined): DiagnosticSeverity {
  if (!code) return DiagnosticSeverity.Error;
  if (code.startsWith("W")) return DiagnosticSeverity.Warning;
  if (code.startsWith("S")) return DiagnosticSeverity.Error;
  return DiagnosticSeverity.Error;
}

// ─── Script entry ───────────────────────────────────────────────────
// Only runs when invoked directly. Importing this module (e.g. from
// tests) does NOT spawn a connection or start listening.
const isMainModule =
  process.argv[1] !== undefined &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMainModule) {
  const connection = createConnection(ProposedFeatures.all);
  runServer(connection);
  connection.listen();
}
