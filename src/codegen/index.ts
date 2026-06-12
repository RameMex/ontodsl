/**
 * Phase 10 code generation — public entry point.
 *
 * `renderTypeScript(ast)` produces a complete TypeScript module
 * string containing:
 *   - Header comment (marker + timestamp-independent signature)
 *   - Branded identity types
 *   - Interfaces with inheritance
 *   - Factory functions for identity suppliers
 *   - Runtime invariant validators
 *
 * The output is a self-contained module with no runtime deps —
 * paste it next to your hand-written code or commit it to a
 * `generated/` directory. Re-running `renderTypeScript` on the same
 * AST is deterministic: same input → same bytes. This matters for
 * diff-driven review and for "don't touch the generated file"
 * policies.
 */

import type { OntoFile } from "../ast/index.js";
import { renderTypes } from "./typescriptTypes.js";
import { renderFactories } from "./factories.js";
import { renderValidators } from "./validators.js";
import { renderEventWrappers } from "./eventWrappers.js";
import { renderCommitmentRegistries } from "./commitmentRegistry.js";

export interface RenderTypeScriptOptions {
  /**
   * Optional module-level prelude appended after the auto-gen header.
   * Useful for adding user imports or re-exports that the generated
   * module should carry. Defaults to empty.
   */
  readonly prelude?: string;
}

export function renderTypeScript(
  file: OntoFile,
  options: RenderTypeScriptOptions = {},
): string {
  const parts: string[] = [];

  parts.push("// ═══════════════════════════════════════════════════════════════════");
  parts.push("// AUTO-GENERATED from Onto DSL. Do not edit.");
  parts.push("// Regenerate via `renderTypeScript(ast)` or the codegen CLI.");
  parts.push("// ═══════════════════════════════════════════════════════════════════");
  parts.push("");

  if (options.prelude && options.prelude.trim().length > 0) {
    parts.push(options.prelude);
    parts.push("");
  }

  parts.push(renderTypes(file));
  parts.push("");
  parts.push(renderFactories(file));
  parts.push("");
  parts.push(renderValidators(file));
  parts.push("");
  parts.push(renderEventWrappers(file));
  parts.push("");
  parts.push(renderCommitmentRegistries(file));
  parts.push("");

  return parts.join("\n");
}

export {
  renderTypes,
  renderFactories,
  renderValidators,
  renderEventWrappers,
  renderCommitmentRegistries,
};
