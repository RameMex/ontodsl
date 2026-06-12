import type { OntoFile } from "../ast/index.js";
import { ontoLexer } from "./tokens.js";
import { ontoParser } from "./grammar.js";
import { extractOpaqueRegions } from "./preExtract.js";
import { buildAst } from "./builder.js";
import { validateSemantics, type SemanticError } from "../semantic/index.js";

export interface ParseError {
  readonly stage: "lex" | "parse" | "extract" | "build" | "semantic";
  readonly message: string;
  readonly line?: number;
  readonly column?: number;
  /** Only set for semantic-stage errors; carries the S## rule code. */
  readonly code?: string;
}

export interface ParseResult {
  readonly ast: OntoFile | null;
  readonly errors: readonly ParseError[];
}

export interface ParseOptions {
  /** If true (default), run semantic validation after building the AST. */
  readonly validateSemantics?: boolean;
}

/**
 * Parse `.onto` source text into a typed AST.
 *
 * Pipeline:
 *   1. Pre-extract opaque OCL regions (invariants blocks + pre/post/body)
 *   2. Lex the rewritten source
 *   3. Parse tokens into a CST
 *   4. Build typed AST, re-injecting pre-extracted OCL
 *   5. Run semantic validator (can be disabled via options)
 *
 * Errors at any stage are collected; a non-null AST is only returned if
 * stages 1–4 succeeded. Semantic errors do not null out the AST — they
 * describe an AST that parsed structurally but fails ontological rules.
 */
export function parse(source: string, options: ParseOptions = {}): ParseResult {
  const runValidator = options.validateSemantics ?? true;
  const errors: ParseError[] = [];

  // Stage 1: pre-extract opaque regions
  let rewritten: string;
  let blocks: ReturnType<typeof extractOpaqueRegions>["blocks"];
  let inlineOcl: ReturnType<typeof extractOpaqueRegions>["inlineOcl"];
  let traceBlocks: ReturnType<typeof extractOpaqueRegions>["traceBlocks"];
  try {
    const ex = extractOpaqueRegions(source);
    rewritten = ex.rewrittenSource;
    blocks = ex.blocks;
    inlineOcl = ex.inlineOcl;
    traceBlocks = ex.traceBlocks;
  } catch (e) {
    return {
      ast: null,
      errors: [{ stage: "extract", message: (e as Error).message }],
    };
  }

  // Stage 2: lex
  const lexResult = ontoLexer.tokenize(rewritten);
  if (lexResult.errors.length > 0) {
    for (const err of lexResult.errors) {
      errors.push(makeParseError("lex", err.message, err.line, err.column));
    }
    return { ast: null, errors };
  }

  // Stage 3: parse
  ontoParser.input = lexResult.tokens;
  const cst = ontoParser.ontoFile();
  if (ontoParser.errors.length > 0) {
    for (const err of ontoParser.errors) {
      errors.push(
        makeParseError(
          "parse",
          err.message,
          err.token.startLine,
          err.token.startColumn,
        ),
      );
    }
    return { ast: null, errors };
  }

  // Stage 4: build typed AST
  let ast: OntoFile;
  try {
    ast = buildAst(cst, blocks, inlineOcl, traceBlocks);
  } catch (e) {
    errors.push({ stage: "build", message: (e as Error).message });
    return { ast: null, errors };
  }

  // Stage 5: semantic validation
  if (runValidator) {
    const semErrors = validateSemantics(ast);
    for (const s of semErrors) {
      errors.push(semToParseError(s));
    }
  }

  return { ast, errors };
}

function makeParseError(
  stage: ParseError["stage"],
  message: string,
  line: number | undefined,
  column: number | undefined,
): ParseError {
  const base: { stage: ParseError["stage"]; message: string } = {
    stage,
    message,
  };
  const withLine = line !== undefined ? { ...base, line } : base;
  return column !== undefined ? { ...withLine, column } : withLine;
}

function semToParseError(s: SemanticError): ParseError {
  const base: { stage: "semantic"; message: string; code: string } = {
    stage: "semantic",
    message: s.message,
    code: s.code,
  };
  const withLine =
    s.location?.line !== undefined ? { ...base, line: s.location.line } : base;
  return s.location?.column !== undefined
    ? { ...withLine, column: s.location.column }
    : withLine;
}
