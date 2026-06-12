/**
 * Onto DSL VS Code extension entry.
 *
 * Activates when a .onto file is opened. Spawns the bundled
 * `ontodsl-lsp` binary as a stdio LSP server and connects via
 * `vscode-languageclient`.
 *
 * The LSP binary is expected to be on the PATH after the user
 * `npm install -g ontodsl`. The path can be overridden through the
 * `ONTODSL_LSP` environment variable for development.
 */

import * as path from "path";
import { workspace, ExtensionContext } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient | undefined;

export function activate(_context: ExtensionContext): void {
  // Resolve the server path. Order:
  //   1. ONTODSL_LSP env var (developer override)
  //   2. The `ontodsl-lsp` shell command on PATH (post `npm i -g`)
  // We pass a fallback `node <path>` form if env var points to a .js
  // file that isn't directly executable.
  const overridePath = process.env.ONTODSL_LSP;
  const serverOptions: ServerOptions = overridePath
    ? overridePath.endsWith(".js")
      ? {
          command: "node",
          args: [overridePath],
          transport: TransportKind.stdio,
        }
      : {
          command: overridePath,
          transport: TransportKind.stdio,
        }
    : {
        command: "ontodsl-lsp",
        transport: TransportKind.stdio,
      };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "onto" }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher("**/*.onto"),
    },
  };

  client = new LanguageClient(
    "ontodsl",
    "Onto DSL Language Server",
    serverOptions,
    clientOptions,
  );
  void client.start();
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop();
}
