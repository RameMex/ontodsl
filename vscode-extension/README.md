# Onto DSL — VS Code extension

Language support for `.onto` files in VS Code via the `ontodsl-lsp` Language Server.

## Features

- **Diagnostics** (live, while you type) — 36 semantic rules + Z3-backed LSP verification
- **Hover** — stereotype, parents, properties, invariant counts
- **Go to Definition** — F12 / Ctrl+click on type names
- **Completion** — stereotype keywords, type names after `:` or `specializes`, properties after `self.`
- **Find References** — Shift+F12 on any name

## Install (development)

```bash
# 1. Build and globally link the parent package so `ontodsl-lsp` is on PATH.
cd ..
npm install
npm run build
npm link

# 2. Build the extension.
cd vscode-extension
npm install
npm run build

# 3. Package it.
npm run package
# Produces ontodsl-vscode-0.3.0.vsix

# 4. Install in VS Code.
code --install-extension ontodsl-vscode-0.3.0.vsix
```

## Configuration

The extension finds the language server in this order:

1. `$ONTODSL_LSP` environment variable (dev override; can be a path to a `.js` file)
2. `ontodsl-lsp` on `$PATH` (after `npm install -g ontodsl`)

## Notes

- This extension is the thin VS Code surface — all language intelligence lives in the `ontodsl-lsp` server (under `../src/lsp/`). Other LSP-capable editors can use the same server with their own client config.
- No syntax-highlighting grammar shipped — VS Code default coloring applies. A TextMate grammar would be the natural next addition; outside Phase 12 scope.
