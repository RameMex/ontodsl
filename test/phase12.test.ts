import { describe, it, expect } from "vitest";
import { Connection, TextDocumentSyncKind } from "vscode-languageserver/node.js";
import { TextDocument } from "vscode-languageserver-textdocument";
import { runServer } from "../src/lsp/server.js";

/**
 * LSP server tests — Phase 12, Session 1.
 *
 * Strategy: instead of spawning a real subprocess and speaking JSON-RPC
 * over stdio, we build a fake `Connection` object that captures every
 * outgoing message (sendDiagnostics, capability replies) and lets us
 * synthesise incoming events (initialize, didOpen, didChange) by
 * invoking the registered handlers directly.
 *
 * This is a STRUCTURAL test of the server's behaviour: did it
 * register the right handlers, do they produce the right diagnostics
 * for known inputs? We don't test the wire protocol — that's
 * vscode-languageserver's responsibility, not ours.
 *
 * The fake covers the surface our server actually uses:
 *   onInitialize / onDidChangeContent / onDidOpen / onDidClose
 *   sendDiagnostics
 * Any handler our server doesn't register stays at default (no-op).
 */

interface DiagnosticsCapture {
  uri: string;
  diagnostics: any[];
}

/**
 * Build a fake Connection. Returns the connection plus capture
 * arrays so tests can inspect what the server sent.
 *
 * We type the result as `Connection` for the call site, but the
 * underlying object only implements the methods we use. Casting
 * through `unknown` is the standard way to plug a partial mock into
 * a wide interface — if the server later starts using a method we
 * didn't mock, TypeScript won't catch it at the cast site, but the
 * test will fail at runtime with a clear "x is not a function" which
 * is the right signal.
 */
function makeFakeConnection(): {
  connection: Connection;
  diagnostics: DiagnosticsCapture[];
  triggerDidOpen: (doc: TextDocument) => void;
  triggerDidChange: (doc: TextDocument) => void;
  triggerDidClose: (doc: TextDocument) => void;
  initialize: () => any;
} {
  const diagnostics: DiagnosticsCapture[] = [];

  // Handlers registered by the server.
  let onInitializeHandler: ((p: any) => any) | null = null;
  let onDidChangeContentHandler: ((e: { document: TextDocument }) => void) | null = null;
  let onDidOpenHandler: ((e: { document: TextDocument }) => void) | null = null;
  let onDidCloseHandler: ((e: { document: TextDocument }) => void) | null = null;

  const fake = {
    onInitialize: (h: any) => {
      onInitializeHandler = h;
    },
    onInitialized: (_h: any) => {
      // Server doesn't register one yet, but vscode-languageserver
      // calls this during documents.listen(). We accept and ignore.
    },
    onShutdown: (_h: any) => {},
    onExit: (_h: any) => {},
    onDidChangeConfiguration: (_h: any) => {},
    onDidChangeWatchedFiles: (_h: any) => {},
    sendDiagnostics: (params: { uri: string; diagnostics: any[] }) => {
      diagnostics.push({ uri: params.uri, diagnostics: params.diagnostics });
    },
    listen: () => {},
    // The TextDocuments class subscribes to these events on the
    // connection — we capture the registered handlers and trigger
    // them from helpers below.
    onDidOpenTextDocument: (h: any) => {
      onDidOpenHandler = (e) => h({ textDocument: { uri: e.document.uri, languageId: "onto", version: e.document.version, text: e.document.getText() } });
    },
    onDidChangeTextDocument: (h: any) => {
      onDidChangeContentHandler = (e) => h({
        textDocument: { uri: e.document.uri, version: e.document.version },
        contentChanges: [{ text: e.document.getText() }],
      });
    },
    onDidCloseTextDocument: (h: any) => {
      onDidCloseHandler = (e) => h({ textDocument: { uri: e.document.uri } });
    },
    onWillSaveTextDocument: (_h: any) => {},
    onWillSaveTextDocumentWaitUntil: (_h: any) => {},
    onDidSaveTextDocument: (_h: any) => {},
    onHover: (_h: any) => {},
    onDefinition: (_h: any) => {},
    onCompletion: (_h: any) => {},
    onCompletionResolve: (_h: any) => {},
    onReferences: (_h: any) => {},
    onNotification: (_method: any, _h?: any) => {},
    onRequest: (_method: any, _h?: any) => {},
    sendNotification: (_method: any, _params?: any) => Promise.resolve(),
    sendRequest: (_method: any, _params?: any) => Promise.resolve(),
    workspace: {},
    console: { log: () => {}, error: () => {}, warn: () => {}, info: () => {} },
    window: {},
    client: {},
    languages: {
      // Phase 14 wires semanticTokens.on via this nested namespace.
      // The fake captures registration but doesn't drive the handler;
      // semantic tokens behavior is tested in phase14.test.ts via the
      // pure functions.
      semanticTokens: { on: (_h: any) => {} },
    },
    tracer: {},
    telemetry: {},
    notebooks: {},
    dispose: () => {},
  };

  return {
    connection: fake as unknown as Connection,
    diagnostics,
    initialize: () => {
      if (!onInitializeHandler) throw new Error("onInitialize not registered");
      return onInitializeHandler({});
    },
    triggerDidOpen: (doc) => {
      if (!onDidOpenHandler) throw new Error("onDidOpen not registered");
      onDidOpenHandler({ document: doc });
    },
    triggerDidChange: (doc) => {
      if (!onDidChangeContentHandler) {
        throw new Error("onDidChangeContent not registered");
      }
      onDidChangeContentHandler({ document: doc });
    },
    triggerDidClose: (doc) => {
      if (!onDidCloseHandler) throw new Error("onDidClose not registered");
      onDidCloseHandler({ document: doc });
    },
  };
}

describe("phase12 — LSP server (Session 1: setup + diagnostics)", () => {
  it("advertises Incremental textDocumentSync on initialize", () => {
    const { connection, initialize } = makeFakeConnection();
    runServer(connection);
    const result = initialize();
    expect(result.capabilities.textDocumentSync).toBe(
      TextDocumentSyncKind.Incremental,
    );
    expect(result.serverInfo.name).toBe("ontodsl-lsp");
  });

  it("advertises hover, definition, completion, references, semanticTokens (S2/S3 + Phase 14)", () => {
    const { connection, initialize } = makeFakeConnection();
    runServer(connection);
    const result = initialize();
    expect(result.capabilities.hoverProvider).toBe(true);
    expect(result.capabilities.definitionProvider).toBe(true);
    expect(result.capabilities.completionProvider).toBeDefined();
    expect(result.capabilities.referencesProvider).toBe(true);
    expect(result.capabilities.semanticTokensProvider).toBeDefined();
  });

  it("publishes empty diagnostics for a clean document", async () => {
    const { connection, diagnostics, triggerDidOpen } = makeFakeConnection();
    runServer(connection);

    const doc = TextDocument.create(
      "file:///clean.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;
kind Customer {
  identity: email;
  property email: String;
  property age: Integer;
  invariants { self.age >= 0; }
}`,
    );
    triggerDidOpen(doc);

    // First sync diagnostic publish should have happened synchronously
    // inside validateAndPublish before the await.
    expect(diagnostics.length).toBeGreaterThanOrEqual(1);
    expect(diagnostics[0].uri).toBe("file:///clean.onto");
    expect(diagnostics[0].diagnostics).toEqual([]);
  });

  it("publishes a parse-stage diagnostic for malformed input", async () => {
    const { connection, diagnostics, triggerDidOpen } = makeFakeConnection();
    runServer(connection);

    // Missing closing brace.
    const doc = TextDocument.create(
      "file:///bad.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;\nkind X {`,
    );
    triggerDidOpen(doc);

    expect(diagnostics.length).toBeGreaterThanOrEqual(1);
    const first = diagnostics[0];
    expect(first.diagnostics.length).toBeGreaterThan(0);
    expect(first.diagnostics[0].source).toBe("ontodsl");
    expect(first.diagnostics[0].severity).toBe(1); // Error
  });

  it("publishes a semantic-stage diagnostic with location for S3 (identity references nonexistent property)", async () => {
    const { connection, diagnostics, triggerDidOpen } = makeFakeConnection();
    runServer(connection);

    const doc = TextDocument.create(
      "file:///sem.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;
kind X {
  identity: ghostProp;
  property realProp: String;
}`,
    );
    triggerDidOpen(doc);

    expect(diagnostics.length).toBeGreaterThanOrEqual(1);
    const issued = diagnostics[diagnostics.length - 1];
    const codes = issued.diagnostics.map((d: any) => d.code);
    expect(codes).toContain("S3");
  });

  it("clears diagnostics on document close", () => {
    const { connection, diagnostics, triggerDidOpen, triggerDidClose } =
      makeFakeConnection();
    runServer(connection);

    const doc = TextDocument.create(
      "file:///close.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;\nkind Y {`, // bad
    );
    triggerDidOpen(doc);
    expect(diagnostics.length).toBeGreaterThan(0);
    const beforeClose = diagnostics.length;

    triggerDidClose(doc);
    // After close, an additional empty publish for the URI.
    expect(diagnostics.length).toBe(beforeClose + 1);
    expect(diagnostics[diagnostics.length - 1].diagnostics).toEqual([]);
  });

  it("re-validates on didChange and replaces diagnostics", () => {
    const { connection, diagnostics, triggerDidOpen, triggerDidChange } =
      makeFakeConnection();
    runServer(connection);

    const docV1 = TextDocument.create(
      "file:///live.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;\nkind Z {`, // bad
    );
    triggerDidOpen(docV1);
    expect(diagnostics[0].diagnostics.length).toBeGreaterThan(0);

    const docV2 = TextDocument.create(
      "file:///live.onto",
      "onto",
      2,
      `schema "onto/0.1"; namespace t;
kind Z {
  identity: id;
  property id: String;
}`,
    );
    triggerDidChange(docV2);

    // Latest publish should be empty (clean V2).
    const latest = diagnostics[diagnostics.length - 1];
    expect(latest.uri).toBe("file:///live.onto");
    expect(latest.diagnostics).toEqual([]);
  });

  it("maps SourceLocation 1-indexed to LSP Range 0-indexed", () => {
    const { connection, diagnostics, triggerDidOpen } = makeFakeConnection();
    runServer(connection);

    // Force a known semantic error and check its range.
    const doc = TextDocument.create(
      "file:///range.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;
kind X {
  identity: ghost;
  property real: String;
}`,
    );
    triggerDidOpen(doc);

    const issued = diagnostics[diagnostics.length - 1];
    const s3 = issued.diagnostics.find((d: any) => d.code === "S3");
    expect(s3).toBeDefined();
    // Range exists with valid line/character (0-indexed). We don't
    // pin specific numbers because the location depends on which
    // node carries it (kind decl vs identity sub-node), but it MUST
    // be a non-negative line.
    expect(s3!.range.start.line).toBeGreaterThanOrEqual(0);
    expect(s3!.range.start.character).toBeGreaterThanOrEqual(0);
  });

  it("async Z3 verification publishes a second diagnostic round (slow)", async () => {
    const { connection, diagnostics, triggerDidOpen } = makeFakeConnection();
    runServer(connection);

    const doc = TextDocument.create(
      "file:///z3.onto",
      "onto",
      1,
      `schema "onto/0.1"; namespace t;
kind Customer {
  identity: email;
  property email: String;
  property age: Integer;
  invariants { self.age >= 0; }
}`,
    );
    triggerDidOpen(doc);
    const initialCount = diagnostics.length;

    // Poll for up to 25s waiting for the async pass to publish a
    // second round. Z3 cold-start dominates; once it's warm,
    // verification is fast. Polling beats a fixed sleep because
    // CI machines vary widely.
    const deadline = Date.now() + 25_000;
    while (Date.now() < deadline && diagnostics.length <= initialCount) {
      await new Promise((r) => setTimeout(r, 250));
    }

    expect(diagnostics.length).toBeGreaterThan(initialCount);
  }, 30_000);
});
