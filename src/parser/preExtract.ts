/**
 * Pre-extractor for opaque OCL regions — Phase 2.
 *
 * The Onto DSL embeds raw OCL in four places:
 *   1. `invariants { e1; e2; ... }`                 — Phase 1 block form
 *   2. `pre:  <expr>;`                              — inside event bodies
 *   3. `post: <expr>;`                              — inside event bodies
 *   4. `body: <expr>;`                              — inside query bodies
 *
 * All four contain OCL operators (`->`, `<>`, `@pre`, `=`, etc.) that we
 * don't want our structural lexer to deal with until a dedicated OCL
 * sub-parser lands in Phase 4. The strategy is to pre-extract these
 * regions from the source, replacing them with placeholder identifiers the
 * structural lexer can handle.
 *
 * Rewrite mappings:
 *   `invariants { e1; e2; }`  →  `invariants { __INV_BLOCK_N__ ; }`
 *   `pre:  <expr>;`           →  `pre:  __INLINE_OCL_N__ ;`
 *   `post: <expr>;`           →  `post: __INLINE_OCL_N__ ;`
 *   `body: <expr>;`           →  `body: __INLINE_OCL_N__ ;`
 *
 * Placeholders use disjoint numeric namespaces per kind so the builder can
 * route each placeholder to the correct extracted payload.
 *
 * Limitations (documented, accepted for Phase 2):
 *   - An OCL expression must not contain an unescaped `;` or `}` at the
 *     surface (string literals with `;` inside are not supported).
 *   - `modifies:` clauses are NOT pre-extracted — they tokenize cleanly
 *     (identifiers and dots only) and are parsed by the grammar directly.
 */

export interface ExtractedInvariant {
  readonly expression: string;
  readonly sourceOffset: number;
  readonly line: number;
  readonly column: number;
}

export interface ExtractedBlock {
  readonly index: number;
  readonly placeholder: string;
  readonly invariants: readonly ExtractedInvariant[];
  readonly startOffset: number;
  readonly endOffset: number;
}

export interface ExtractedInlineOcl {
  readonly index: number;
  readonly placeholder: string;
  readonly expression: string;
  readonly sourceOffset: number;
  readonly line: number;
  readonly column: number;
}

/**
 * Phase 24 (RxOCL) — a single clause extracted from a `trace { ... }`
 * block. Each clause records the temporal operator, its optional
 * step-bound (only for `eventually within N`), and the OCL expression
 * text. The Z3 verifier consumes these post-build.
 */
export interface ExtractedTraceClause {
  readonly op: "Always" | "Eventually" | "Next";
  readonly bound: number | null;
  readonly expression: string;
  readonly sourceOffset: number;
  readonly line: number;
  readonly column: number;
}

export interface ExtractedTraceBlock {
  readonly index: number;
  readonly placeholder: string;
  readonly clauses: readonly ExtractedTraceClause[];
  readonly startOffset: number;
  readonly endOffset: number;
}

export interface PreExtractResult {
  readonly rewrittenSource: string;
  readonly blocks: readonly ExtractedBlock[];
  readonly inlineOcl: readonly ExtractedInlineOcl[];
  /** Phase 24 (RxOCL) — extracted trace blocks. */
  readonly traceBlocks: readonly ExtractedTraceBlock[];
}

const INVARIANTS_KEYWORD = "invariants";
const TRACE_KEYWORD = "trace";
const TRACE_PLACEHOLDER_PREFIX = "__TRACE_BLOCK_";
const BLOCK_PLACEHOLDER_PREFIX = "__INV_BLOCK_";
const INLINE_PLACEHOLDER_PREFIX = "__INLINE_OCL_";
const PLACEHOLDER_SUFFIX = "__";

/** Inline OCL keywords that introduce a `:` <expr> `;` clause. */
const INLINE_CLAUSE_KEYWORDS = ["pre", "post", "body", "predicate"] as const;

/**
 * Extract all opaque OCL regions from source. Single left-to-right pass.
 *
 * For each position, in priority order:
 *   1. If we're inside a (theoretical) string or comment, skip — but the
 *      DSL only has `//` and `/* *\/` comments, handled by the lexer after
 *      rewriting, so we don't scan them here.
 *   2. If we match `invariants` at a word boundary followed by `{`,
 *      extract the full block.
 *   3. If we match `pre|post|body` at a word boundary followed by `:`,
 *      extract the inline clause up to the first top-level `;`.
 *   4. Otherwise, copy the character through.
 */
export function extractOpaqueRegions(source: string): PreExtractResult {
  const blocks: ExtractedBlock[] = [];
  const inlineOcl: ExtractedInlineOcl[] = [];
  const traceBlocks: ExtractedTraceBlock[] = [];
  let rewritten = "";
  let i = 0;
  let blockIndex = 0;
  let inlineIndex = 0;
  let traceIndex = 0;

  while (i < source.length) {
    // ─── Skip comments so they can't mask keywords ──────────────────────
    // (We leave them in the rewritten output for the lexer to skip later.)
    if (source[i] === "/" && source[i + 1] === "/") {
      // Line comment: copy through end of line.
      while (i < source.length && source[i] !== "\n") {
        rewritten += source[i];
        i += 1;
      }
      continue;
    }
    if (source[i] === "/" && source[i + 1] === "*") {
      // Block comment: copy through closing `*/`.
      rewritten += source[i]!;
      rewritten += source[i + 1]!;
      i += 2;
      while (
        i + 1 < source.length &&
        !(source[i] === "*" && source[i + 1] === "/")
      ) {
        rewritten += source[i];
        i += 1;
      }
      if (i + 1 < source.length) {
        rewritten += source[i]!;
        rewritten += source[i + 1]!;
        i += 2;
      }
      continue;
    }
    // ─── String literal: copy through closing quote ─────────────────────
    if (source[i] === '"') {
      rewritten += source[i];
      i += 1;
      while (i < source.length && source[i] !== '"') {
        if (source[i] === "\\" && i + 1 < source.length) {
          rewritten += source[i]!;
          rewritten += source[i + 1]!;
          i += 2;
          continue;
        }
        rewritten += source[i];
        i += 1;
      }
      if (i < source.length) {
        rewritten += source[i]; // closing quote
        i += 1;
      }
      continue;
    }

    // ─── Invariants block ──────────────────────────────────────────────
    if (matchesKeywordAt(source, i, INVARIANTS_KEYWORD)) {
      const keywordStart = i;
      let j = i + INVARIANTS_KEYWORD.length;
      j = skipWhitespaceAndComments(source, j);
      if (j < source.length && source[j] === "{") {
        const openBraceOffset = j;
        const closeBraceOffset = findMatchingBrace(source, openBraceOffset);
        if (closeBraceOffset < 0) {
          throw new Error(
            `Unterminated invariants block starting at offset ${keywordStart}`,
          );
        }
        const bodyStart = openBraceOffset + 1;
        const body = source.slice(bodyStart, closeBraceOffset);
        const invariants = splitInvariantBody(body, bodyStart, source);
        const placeholder =
          `${BLOCK_PLACEHOLDER_PREFIX}${blockIndex}${PLACEHOLDER_SUFFIX}`;
        blocks.push({
          index: blockIndex,
          placeholder,
          invariants,
          startOffset: keywordStart,
          endOffset: closeBraceOffset,
        });
        rewritten += `invariants { ${placeholder} ; }`;
        blockIndex += 1;
        i = closeBraceOffset + 1;
        continue;
      }
      // else fall through — literal identifier `invariants` without `{`.
    }

    // ─── Phase 24 (RxOCL) — trace block ─────────────────────────────────
    if (matchesKeywordAt(source, i, TRACE_KEYWORD)) {
      const keywordStart = i;
      let j = i + TRACE_KEYWORD.length;
      j = skipWhitespaceAndComments(source, j);
      if (j < source.length && source[j] === "{") {
        const openBraceOffset = j;
        const closeBraceOffset = findMatchingBrace(source, openBraceOffset);
        if (closeBraceOffset < 0) {
          throw new Error(
            `Unterminated trace block starting at offset ${keywordStart}`,
          );
        }
        const bodyStart = openBraceOffset + 1;
        const body = source.slice(bodyStart, closeBraceOffset);
        const clauses = splitTraceBody(body, bodyStart, source);
        const placeholder =
          `${TRACE_PLACEHOLDER_PREFIX}${traceIndex}${PLACEHOLDER_SUFFIX}`;
        traceBlocks.push({
          index: traceIndex,
          placeholder,
          clauses,
          startOffset: keywordStart,
          endOffset: closeBraceOffset,
        });
        rewritten += `trace { ${placeholder} ; }`;
        traceIndex += 1;
        i = closeBraceOffset + 1;
        continue;
      }
      // else fall through — literal identifier `trace` without `{`.
    }

    // ─── Inline clause: pre|post|body `:` <expr> `;` ───────────────────
    const inlineKw = matchInlineKeyword(source, i);
    if (inlineKw !== null) {
      const keywordStart = i;
      let j = i + inlineKw.length;
      j = skipWhitespaceAndComments(source, j);
      if (j < source.length && source[j] === ":") {
        const colonOffset = j;
        let exprStart = colonOffset + 1;
        // Capture raw text until the matching top-level `;`.
        const semiOffset = findClauseTerminator(source, exprStart);
        if (semiOffset < 0) {
          throw new Error(
            `Unterminated ${inlineKw} clause starting at offset ${keywordStart}`,
          );
        }
        const rawExpr = source.slice(exprStart, semiOffset);
        // Strip embedded comments before storing the expression text.
        // This is what gets quoted back to the user in error messages
        // (e.g. precondition-violated payloads); we don't want
        // `// some note` showing up there. The OCL sub-lexer would
        // skip them too, so semantics are unaffected.
        const trimmed = stripComments(rawExpr).trim();
        if (trimmed.length === 0) {
          throw new Error(
            `Empty ${inlineKw} clause at offset ${keywordStart}`,
          );
        }
        const placeholder =
          `${INLINE_PLACEHOLDER_PREFIX}${inlineIndex}${PLACEHOLDER_SUFFIX}`;
        const absoluteOffset =
          exprStart + leadingNonExprPrefix(rawExpr);
        const pos = offsetToLineColumn(source, absoluteOffset);
        inlineOcl.push({
          index: inlineIndex,
          placeholder,
          expression: trimmed,
          sourceOffset: absoluteOffset,
          line: pos.line,
          column: pos.column,
        });
        rewritten += `${inlineKw}: ${placeholder}`;
        inlineIndex += 1;
        i = semiOffset; // leave the `;` for the lexer
        continue;
      }
      // else fall through — `pre` could be a user identifier without `:`.
    }

    rewritten += source[i];
    i += 1;
  }

  return { rewrittenSource: rewritten, blocks, inlineOcl, traceBlocks };
}

/**
 * Phase 24 (RxOCL) — split a `trace { ... }` body into per-operator
 * clauses. Each clause is one of:
 *   `always <ocl>;`
 *   `eventually within <int> steps: <ocl>;`
 *   `next <ocl>;`
 *
 * Returns each clause with its op, optional bound, and OCL expression
 * text. Throws on a malformed clause.
 */
function splitTraceBody(
  body: string,
  bodyAbsoluteOffset: number,
  source: string,
): ExtractedTraceClause[] {
  const out: ExtractedTraceClause[] = [];
  let k = 0;
  while (k < body.length) {
    // Skip whitespace and comments.
    while (k < body.length && /\s/.test(body[k]!)) k += 1;
    if (k >= body.length) break;
    // Skip line comments.
    if (body[k] === "/" && body[k + 1] === "/") {
      while (k < body.length && body[k] !== "\n") k += 1;
      continue;
    }
    // Identify operator.
    let op: "Always" | "Eventually" | "Next";
    let bound: number | null = null;
    let exprStartLocal: number;
    if (matchesKeywordAt(body, k, "always")) {
      op = "Always";
      exprStartLocal = k + "always".length;
    } else if (matchesKeywordAt(body, k, "next")) {
      op = "Next";
      exprStartLocal = k + "next".length;
    } else if (matchesKeywordAt(body, k, "eventually")) {
      op = "Eventually";
      let j = k + "eventually".length;
      j = skipWhitespaceAndComments(body, j);
      if (!matchesKeywordAt(body, j, "within")) {
        throw new Error(
          `Trace clause 'eventually' must be followed by 'within' at offset ${bodyAbsoluteOffset + k}`,
        );
      }
      j += "within".length;
      j = skipWhitespaceAndComments(body, j);
      // Parse integer bound.
      const numStart = j;
      while (j < body.length && /[0-9]/.test(body[j]!)) j += 1;
      if (j === numStart) {
        throw new Error(
          `Trace clause 'eventually within' requires integer bound at offset ${bodyAbsoluteOffset + j}`,
        );
      }
      bound = Number(body.slice(numStart, j));
      j = skipWhitespaceAndComments(body, j);
      if (!matchesKeywordAt(body, j, "steps")) {
        throw new Error(
          `Trace clause 'eventually within N' must be followed by 'steps' at offset ${bodyAbsoluteOffset + j}`,
        );
      }
      j += "steps".length;
      j = skipWhitespaceAndComments(body, j);
      if (body[j] !== ":") {
        throw new Error(
          `Trace clause 'eventually within N steps' must be followed by ':' at offset ${bodyAbsoluteOffset + j}`,
        );
      }
      exprStartLocal = j + 1;
    } else {
      throw new Error(
        `Unrecognized trace clause keyword at offset ${bodyAbsoluteOffset + k}: ` +
          `expected 'always', 'eventually', or 'next'`,
      );
    }
    // Find clause terminator `;` (top-level, respect parens/braces).
    const semiOffsetLocal = findClauseTerminator(body, exprStartLocal);
    if (semiOffsetLocal < 0) {
      throw new Error(
        `Unterminated trace clause starting at offset ${bodyAbsoluteOffset + k}`,
      );
    }
    const rawExpr = body.slice(exprStartLocal, semiOffsetLocal);
    const trimmed = stripComments(rawExpr).trim();
    if (trimmed.length === 0) {
      throw new Error(
        `Empty trace clause at offset ${bodyAbsoluteOffset + k}`,
      );
    }
    const absoluteOffset =
      bodyAbsoluteOffset + exprStartLocal + leadingNonExprPrefix(rawExpr);
    const pos = offsetToLineColumn(source, absoluteOffset);
    out.push({
      op,
      bound,
      expression: trimmed,
      sourceOffset: absoluteOffset,
      line: pos.line,
      column: pos.column,
    });
    k = semiOffsetLocal + 1;
  }
  return out;
}

// ─── Helpers ────────────────────────────────────────────────────────────

function matchesKeywordAt(
  source: string,
  pos: number,
  keyword: string,
): boolean {
  if (pos + keyword.length > source.length) return false;
  if (source.slice(pos, pos + keyword.length) !== keyword) return false;
  if (pos > 0 && isIdentChar(source[pos - 1]!)) return false;
  const after = source[pos + keyword.length];
  if (after !== undefined && isIdentChar(after)) return false;
  return true;
}

function matchInlineKeyword(source: string, pos: number): string | null {
  for (const kw of INLINE_CLAUSE_KEYWORDS) {
    if (matchesKeywordAt(source, pos, kw)) return kw;
  }
  return null;
}

function isIdentChar(ch: string): boolean {
  return /[A-Za-z0-9_]/.test(ch);
}

/** Find matching `}` starting at a `{`. Returns -1 if none. */
function findMatchingBrace(source: string, openOffset: number): number {
  let depth = 0;
  for (let k = openOffset; k < source.length; k += 1) {
    const ch = source[k];
    if (ch === "{") depth += 1;
    else if (ch === "}") {
      depth -= 1;
      if (depth === 0) return k;
    }
  }
  return -1;
}

/**
 * Find the terminator `;` for an inline clause body. Respects nested
 * parentheses and braces (OCL may use them), skips string literals.
 */
function findClauseTerminator(source: string, start: number): number {
  let parenDepth = 0;
  let braceDepth = 0;
  let k = start;
  while (k < source.length) {
    const ch = source[k]!;
    // Skip line comments
    if (ch === "/" && source[k + 1] === "/") {
      while (k < source.length && source[k] !== "\n") {
        k += 1;
      }
      continue;
    }
    // Skip block comments
    if (ch === "/" && source[k + 1] === "*") {
      k += 2;
      while (k + 1 < source.length && !(source[k] === "*" && source[k + 1] === "/")) {
        k += 1;
      }
      k += 2;
      continue;
    }
    if (ch === '"') {
      // Skip string literal
      k += 1;
      while (k < source.length && source[k] !== '"') {
        if (source[k] === "\\" && k + 1 < source.length) {
          k += 2;
          continue;
        }
        k += 1;
      }
      k += 1;
      continue;
    }
    if (ch === "(") parenDepth += 1;
    else if (ch === ")") parenDepth -= 1;
    else if (ch === "{") braceDepth += 1;
    else if (ch === "}") {
      if (braceDepth === 0) return -1; // hit the enclosing event/query brace
      braceDepth -= 1;
    } else if (ch === ";" && parenDepth === 0 && braceDepth === 0) {
      return k;
    }
    k += 1;
  }
  return -1;
}

function splitInvariantBody(
  body: string,
  bodyStartOffset: number,
  fullSource: string,
): ExtractedInvariant[] {
  const out: ExtractedInvariant[] = [];
  let parenDepth = 0;
  let exprStart = 0;
  let k = 0;
  while (k < body.length) {
    const ch = body[k]!;
    // Skip line comments
    if (ch === "/" && body[k + 1] === "/") {
      while (k < body.length && body[k] !== "\n") {
        k += 1;
      }
      continue;
    }
    // Skip block comments
    if (ch === "/" && body[k + 1] === "*") {
      k += 2;
      while (k + 1 < body.length && !(body[k] === "*" && body[k + 1] === "/")) {
        k += 1;
      }
      k += 2;
      continue;
    }
    // Skip string literals
    if (ch === '"') {
      k += 1;
      while (k < body.length && body[k] !== '"') {
        if (body[k] === "\\" && k + 1 < body.length) {
          k += 2;
          continue;
        }
        k += 1;
      }
      k += 1;
      continue;
    }
    if (ch === "(") {
      parenDepth += 1;
    } else if (ch === ")") {
      parenDepth -= 1;
    } else if (ch === ";" && parenDepth === 0) {
      const raw = body.slice(exprStart, k);
      // Strip comments from the raw expression. Comments between the
      // previous `;` and the current invariant are part of the slice
      // here even though we skipped over them while advancing `k`,
      // because we didn't bump `exprStart` past them. If we don't
      // strip, the comment text ends up embedded in error messages
      // (e.g. `violation: // some note  self.x >= 0`) — see the
      // `respects an invariant after a // comment` regression test.
      const stripped = stripComments(raw);
      const trimmed = stripped.trim();
      if (trimmed.length > 0) {
        const absoluteOffset =
          bodyStartOffset + exprStart + leadingNonExprPrefix(raw);
        const pos = offsetToLineColumn(fullSource, absoluteOffset);
        out.push({
          expression: trimmed,
          sourceOffset: absoluteOffset,
          line: pos.line,
          column: pos.column,
        });
      }
      exprStart = k + 1;
    }
    k += 1;
  }
  const tail = body.slice(exprStart).trim();
  const tailWithoutComments = stripComments(tail).trim();
  if (tailWithoutComments.length > 0) {
    throw new Error(
      `Invariant expression missing terminating ';': "${tail}"`,
    );
  }
  return out;
}

// Remove `// line` and block (slash-star … star-slash) comments from a
// string. Used to scrub the raw text captured between successive
// invariant terminators so embedded comments don't pollute diagnostic
// messages or the AST's `rawExpression` field. String literals inside
// the input are not respected — the caller already operates on a region
// where string literals were skipped during the surface scan.
function stripComments(s: string): string {
  return s
    .replace(/\/\/[^\n\r]*/g, "")
    .replace(/\/\*([^*]|\*(?!\/))*\*\//g, "");
}

/**
 * Count leading whitespace AND leading comment characters in `raw`.
 * Used to compute the column of the first real expression token after
 * an inter-invariant comment was stripped.
 */
function leadingNonExprPrefix(raw: string): number {
  let k = 0;
  while (k < raw.length) {
    const ch = raw[k]!;
    if (/\s/.test(ch)) {
      k += 1;
    } else if (ch === "/" && raw[k + 1] === "/") {
      while (k < raw.length && raw[k] !== "\n") k += 1;
    } else if (ch === "/" && raw[k + 1] === "*") {
      k += 2;
      while (k + 1 < raw.length && !(raw[k] === "*" && raw[k + 1] === "/")) {
        k += 1;
      }
      k += 2;
    } else {
      break;
    }
  }
  return k;
}

function offsetToLineColumn(
  source: string,
  offset: number,
): { line: number; column: number } {
  let line = 1;
  let column = 1;
  for (let k = 0; k < offset && k < source.length; k += 1) {
    if (source[k] === "\n") {
      line += 1;
      column = 1;
    } else {
      column += 1;
    }
  }
  return { line, column };
}

function skipWhitespaceAndComments(source: string, pos: number): number {
  let k = pos;
  while (k < source.length) {
    const ch = source[k]!;
    if (/\s/.test(ch)) {
      k += 1;
    } else if (ch === "/" && source[k + 1] === "/") {
      while (k < source.length && source[k] !== "\n") k += 1;
    } else if (ch === "/" && source[k + 1] === "*") {
      k += 2;
      while (
        k + 1 < source.length &&
        !(source[k] === "*" && source[k + 1] === "/")
      ) {
        k += 1;
      }
      k += 2;
    } else {
      break;
    }
  }
  return k;
}
