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
import { TextDocuments, Connection } from "vscode-languageserver/node.js";
import { TextDocument } from "vscode-languageserver-textdocument";
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
export declare function runServer(connection: Connection): {
    documents: TextDocuments<TextDocument>;
};
//# sourceMappingURL=server.d.ts.map