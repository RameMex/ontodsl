import { ontoLexer } from "./tokens.js";
import { ontoParser } from "./grammar.js";
import { extractOpaqueRegions } from "./preExtract.js";
import { buildAst } from "./builder.js";
import { validateSemantics } from "../semantic/index.js";
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
export function parse(source, options = {}) {
    const runValidator = options.validateSemantics ?? true;
    const errors = [];
    // Stage 1: pre-extract opaque regions
    let rewritten;
    let blocks;
    let inlineOcl;
    let traceBlocks;
    try {
        const ex = extractOpaqueRegions(source);
        rewritten = ex.rewrittenSource;
        blocks = ex.blocks;
        inlineOcl = ex.inlineOcl;
        traceBlocks = ex.traceBlocks;
    }
    catch (e) {
        return {
            ast: null,
            errors: [{ stage: "extract", message: e.message }],
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
            errors.push(makeParseError("parse", err.message, err.token.startLine, err.token.startColumn));
        }
        return { ast: null, errors };
    }
    // Stage 4: build typed AST
    let ast;
    try {
        ast = buildAst(cst, blocks, inlineOcl, traceBlocks);
    }
    catch (e) {
        errors.push({ stage: "build", message: e.message });
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
function makeParseError(stage, message, line, column) {
    const base = {
        stage,
        message,
    };
    const withLine = line !== undefined ? { ...base, line } : base;
    return column !== undefined ? { ...withLine, column } : withLine;
}
function semToParseError(s) {
    const base = {
        stage: "semantic",
        message: s.message,
        code: s.code,
    };
    const withLine = s.location?.line !== undefined ? { ...base, line: s.location.line } : base;
    return s.location?.column !== undefined
        ? { ...withLine, column: s.location.column }
        : withLine;
}
//# sourceMappingURL=parse.js.map