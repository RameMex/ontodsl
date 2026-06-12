// ─── Public entry ────────────────────────────────────────────────────────
export function buildOclExpr(cst) {
    if (cst.children["varName"]) {
        return buildLetExpr(cst);
    }
    // The top-level rule is "expr" which now contains "impliesExpr"
    // (which itself contains "orExpr" — `implies` is the lowest-
    // precedence boolean operator, added after Flash 2.5 reached for it
    // during AP_Baro / AP_Compass migrations).
    const implNode = firstCst(cst.children["impliesExpr"]);
    if (implNode)
        return buildImpliesExpr(implNode);
    throw new Error("Empty OCL expression CST");
}
function buildLetExpr(node) {
    const varTok = firstTok(node.children["varName"]);
    if (!varTok)
        throw new Error("letExpr: missing variable name");
    const initCst = firstCst(node.children["initExpr"]);
    if (!initCst)
        throw new Error("letExpr: missing init expression");
    const bodyCst = firstCst(node.children["bodyExpr"]);
    if (!bodyCst)
        throw new Error("letExpr: missing body expression");
    const init = buildOclExpr(initCst);
    const body = buildOclExpr(bodyCst);
    const loc = cstLoc(node);
    return {
        kind: "OclLet",
        variable: varTok.image,
        init,
        body,
        loc,
    };
}
// ─── Rule builders ───────────────────────────────────────────────────────
/**
 * `impliesExpr` — desugars `P implies Q` to `(not P) or Q`. Right-
 * associative per OCL spec: `a implies b implies c` becomes
 * `a implies (b implies c)`, which after desugaring is
 * `(not a) or ((not b) or c)`. We fold from the right end to get
 * that nesting from a flat MANY list.
 */
function buildImpliesExpr(node) {
    const lhs = firstCst(node.children["lhs"]);
    const rhs = allCst(node.children["rhs"]);
    if (!lhs)
        throw new Error("impliesExpr: missing lhs");
    if (rhs.length === 0)
        return buildOrExpr(lhs);
    // Right-associative fold: start from the rightmost rhs, wrap
    // outward. Each level becomes `(not Pi) or Q` where Pi is the
    // left operand and Q is the accumulated right-side tree.
    let acc = buildOrExpr(rhs[rhs.length - 1]);
    for (let i = rhs.length - 2; i >= 0; i--) {
        const p = buildOrExpr(rhs[i]);
        acc = desugarImplies(p, acc);
    }
    const p0 = buildOrExpr(lhs);
    return desugarImplies(p0, acc);
}
function desugarImplies(p, q) {
    // `p implies q` ≡ `(not p) or q`
    const notP = {
        kind: "OclUnary",
        op: "not",
        operand: p,
        loc: p.loc,
    };
    return {
        kind: "OclBinary",
        op: "or",
        left: notP,
        right: q,
        loc: mergeLoc(p.loc, q.loc),
    };
}
function buildOrExpr(node) {
    const lhs = firstCst(node.children["lhs"]);
    const rhs = allCst(node.children["rhs"]);
    // Note: the `op` token is uniformly `or` for this rule; no need to
    // capture it. The `and` rule below has the same structure.
    if (!lhs)
        throw new Error("orExpr: missing lhs");
    let result = buildAndExpr(lhs);
    for (let i = 0; i < rhs.length; i++) {
        const right = buildAndExpr(rhs[i]);
        result = {
            kind: "OclBinary",
            op: "or",
            left: result,
            right,
            loc: mergeLoc(result.loc, right.loc),
        };
    }
    return result;
}
function buildAndExpr(node) {
    const lhs = firstCst(node.children["lhs"]);
    const rhs = allCst(node.children["rhs"]);
    if (!lhs)
        throw new Error("andExpr: missing lhs");
    let result = buildNotExpr(lhs);
    for (let i = 0; i < rhs.length; i++) {
        const right = buildNotExpr(rhs[i]);
        result = {
            kind: "OclBinary",
            op: "and",
            left: result,
            right,
            loc: mergeLoc(result.loc, right.loc),
        };
    }
    return result;
}
function buildNotExpr(node) {
    const opTok = firstTok(node.children["op"]);
    if (opTok) {
        const operandNode = firstCst(node.children["operand"]);
        if (!operandNode)
            throw new Error("notExpr: missing operand");
        const operand = buildNotExpr(operandNode);
        return {
            kind: "OclUnary",
            op: "not",
            operand,
            loc: mergeLoc(tokLoc(opTok), operand.loc),
        };
    }
    const compareNode = firstCst(node.children["compareExpr"]);
    if (!compareNode)
        throw new Error("notExpr: expected compareExpr");
    return buildCompareExpr(compareNode);
}
function buildCompareExpr(node) {
    const lhsNode = firstCst(node.children["lhs"]);
    if (!lhsNode)
        throw new Error("compareExpr: missing lhs");
    let lhs = buildAddExpr(lhsNode);
    const opTok = firstTok(node.children["op"]);
    const rhsNode = firstCst(node.children["rhs"]);
    if (opTok && rhsNode) {
        const op = opTok.image;
        const rhs = buildAddExpr(rhsNode);
        return {
            kind: "OclBinary",
            op,
            left: lhs,
            right: rhs,
            loc: mergeLoc(lhs.loc, rhs.loc),
        };
    }
    return lhs;
}
function buildAddExpr(node) {
    const lhsNode = firstCst(node.children["lhs"]);
    if (!lhsNode)
        throw new Error("addExpr: missing lhs");
    let result = buildMulExpr(lhsNode);
    const rhs = allCst(node.children["rhs"]);
    const ops = allTok(node.children["op"]);
    for (let i = 0; i < rhs.length; i++) {
        const op = ops[i].image;
        const right = buildMulExpr(rhs[i]);
        result = {
            kind: "OclBinary",
            op,
            left: result,
            right,
            loc: mergeLoc(result.loc, right.loc),
        };
    }
    return result;
}
function buildMulExpr(node) {
    const lhsNode = firstCst(node.children["lhs"]);
    if (!lhsNode)
        throw new Error("mulExpr: missing lhs");
    let result = buildUnaryExpr(lhsNode);
    const rhs = allCst(node.children["rhs"]);
    const ops = allTok(node.children["op"]);
    for (let i = 0; i < rhs.length; i++) {
        const op = ops[i].image;
        const right = buildUnaryExpr(rhs[i]);
        result = {
            kind: "OclBinary",
            op,
            left: result,
            right,
            loc: mergeLoc(result.loc, right.loc),
        };
    }
    return result;
}
function buildUnaryExpr(node) {
    const opTok = firstTok(node.children["op"]);
    if (opTok) {
        const operandNode = firstCst(node.children["operand"]);
        if (!operandNode)
            throw new Error("unaryExpr: missing operand");
        const operand = buildUnaryExpr(operandNode);
        return {
            kind: "OclUnary",
            op: "-",
            operand,
            loc: mergeLoc(tokLoc(opTok), operand.loc),
        };
    }
    const postNode = firstCst(node.children["postfixExpr"]);
    if (!postNode)
        throw new Error("unaryExpr: expected postfixExpr");
    return buildPostfixExpr(postNode);
}
function buildPostfixExpr(node) {
    const baseNode = firstCst(node.children["base"]);
    if (!baseNode)
        throw new Error("postfixExpr: missing base");
    let result = buildPrimaryExpr(baseNode);
    // The MANY at the call site accepts either `postfixStep` (a `.member`
    // suffix) or `arrowStep` (a `->method(...)` suffix). Chevrotain stores
    // each variant under its own array in the parent's children map, so
    // we interleave them back by source offset to apply them in the order
    // the user wrote.
    const dotSteps = allCst(node.children["postfixStep"]).map((cst) => ({
        kind: "dot",
        cst,
    }));
    const arrowSteps = allCst(node.children["arrowStep"]).map((cst) => ({
        kind: "arrow",
        cst,
    }));
    const ordered = [...dotSteps, ...arrowSteps].sort((a, b) => (a.cst.location?.startOffset ?? 0) - (b.cst.location?.startOffset ?? 0));
    for (const s of ordered) {
        if (s.kind === "dot") {
            result = applyDotStep(result, s.cst);
        }
        else {
            result = applyArrowStep(result, s.cst);
        }
    }
    return result;
}
function applyDotStep(base, step) {
    const memberTok = firstTok(step.children["member"]);
    if (!memberTok)
        throw new Error("postfixStep: missing member");
    const propName = memberTok.image;
    const isCall = firstTok(step.children["callLParen"]) !== undefined;
    const atPreTok = firstTok(step.children["atPre"]);
    const hasPre = atPreTok !== undefined;
    const stepEndTok = atPreTok ?? firstTok(step.children["callRParen"]) ?? memberTok;
    const stepLoc = mergeLoc(tokLoc(memberTok), tokLoc(stepEndTok));
    if (isCall) {
        // Phase 6.5: the LParen …  RParen alternative now accepts an
        // optional argument (a full OCL expression). If present this is a
        // one-arg call — typically an Allen temporal operator — otherwise
        // a zero-arg call (Phase 4 behaviour preserved).
        const callArgCst = firstCst(step.children["callArg"]);
        let argument = null;
        if (callArgCst) {
            // `callArg` is labelled on the `expr` rule. Use buildOclExpr
            // which already dispatches let/impliesExpr correctly; the old
            // direct-orExpr drill broke once impliesExpr was wedged in
            // between expr and orExpr.
            argument = buildOclExpr(callArgCst);
        }
        return {
            kind: "OclCall",
            object: base,
            method: propName,
            argument,
            loc: mergeLoc(base.loc, stepLoc),
        };
    }
    return {
        kind: "OclNav",
        object: base,
        property: propName,
        isPre: hasPre,
        loc: mergeLoc(base.loc, stepLoc),
    };
}
/**
 * Dispatch an arrow-step `->method(...)` to the appropriate collection
 * AST variant by method name. Unknown method names throw — caught by
 * the top-level parseOcl driver and surfaced as an S26 during main
 * validation. We deliberately keep the set of supported ops small and
 * closed so the type-checker and Z3 translator have a finite surface.
 */
function applyArrowStep(base, step) {
    const methodTok = firstTok(step.children["method"]);
    if (!methodTok)
        throw new Error("arrowStep: missing method");
    const method = methodTok.image;
    const argsNode = firstCst(step.children["arrowArgs"]);
    const stepLoc = cstLoc(step);
    const loc = mergeLoc(base.loc, stepLoc);
    switch (method) {
        case "size":
            expectNoArgs(argsNode, method);
            return { kind: "OclSize", source: base, loc };
        case "isEmpty":
            expectNoArgs(argsNode, method);
            return { kind: "OclIsEmpty", source: base, loc };
        case "notEmpty":
            expectNoArgs(argsNode, method);
            return { kind: "OclNotEmpty", source: base, loc };
        case "includes": {
            const argExpr = expectOneArg(argsNode, method);
            return { kind: "OclIncludes", source: base, element: argExpr, loc };
        }
        case "forAll": {
            const { variable, body } = expectLambda(argsNode, method);
            return { kind: "OclForAll", source: base, variable, body, loc };
        }
        case "exists": {
            const { variable, body } = expectLambda(argsNode, method);
            return { kind: "OclExists", source: base, variable, body, loc };
        }
        case "select": {
            const { variable, body } = expectLambda(argsNode, method);
            return { kind: "OclSelect", source: base, variable, body, loc };
        }
        case "reject": {
            const { variable, body } = expectLambda(argsNode, method);
            return { kind: "OclReject", source: base, variable, body, loc };
        }
        case "collect": {
            const { variable, body } = expectLambda(argsNode, method);
            return { kind: "OclCollect", source: base, variable, body, loc };
        }
        default:
            throw new Error(`unknown collection operator '->${method}()' (supported: ` +
                `size, isEmpty, notEmpty, includes, forAll, exists, select, reject, collect)`);
    }
}
function expectNoArgs(argsNode, method) {
    if (argsNode !== undefined) {
        throw new Error(`'->${method}()' takes no arguments`);
    }
}
function expectOneArg(argsNode, method) {
    if (!argsNode) {
        throw new Error(`'->${method}(arg)' requires one argument`);
    }
    // The grammar's arrowArgs OR puts the lambda-form behind a GATE on
    // LA(2)==Pipe; if that wasn't hit, we should have a `oneArg` child.
    const oneArg = firstCst(argsNode.children["oneArg"]);
    if (!oneArg) {
        throw new Error(`'->${method}(arg)' was given a lambda; expected a single expression`);
    }
    return buildOclExpr(oneArg);
}
function expectLambda(argsNode, method) {
    if (!argsNode) {
        throw new Error(`'->${method}(x | body)' requires a lambda argument`);
    }
    const varTok = firstTok(argsNode.children["lambdaVar"]);
    const bodyCst = firstCst(argsNode.children["lambdaBody"]);
    if (!varTok || !bodyCst) {
        throw new Error(`'->${method}(x | body)' expected a lambda; got a plain expression`);
    }
    return {
        variable: varTok.image,
        body: buildOclExpr(bodyCst),
    };
}
function buildPrimaryExpr(node) {
    const c = node.children;
    const loc = cstLoc(node);
    // Grouped — `inner` is labelled on `expr`, which now wraps
    // impliesExpr. Use buildOclExpr to also handle let-expressions
    // appearing inside parens.
    const inner = firstCst(c["inner"]);
    if (inner) {
        return buildOclExpr(inner);
    }
    // if/then/else — same: each branch is `expr`, dispatch via
    // buildOclExpr so let/implies/or all flow through correctly.
    const condNode = firstCst(c["cond"]);
    if (condNode) {
        const thenNode = firstCst(c["thenExpr"]);
        const elseNode = firstCst(c["elseExpr"]);
        const cond = buildOclExpr(condNode);
        const then = buildOclExpr(thenNode);
        const else_ = buildOclExpr(elseNode);
        return { kind: "OclIf", cond, then, else_, loc };
    }
    // null / true / false / self
    if (firstTok(c["null"]))
        return { kind: "OclLiteral", litKind: "Null", value: null, loc };
    if (firstTok(c["true"]))
        return { kind: "OclLiteral", litKind: "Boolean", value: true, loc };
    if (firstTok(c["false"]))
        return { kind: "OclLiteral", litKind: "Boolean", value: false, loc };
    if (firstTok(c["self"]))
        return { kind: "OclVarRef", name: "self", loc };
    // Real
    const realTok = firstTok(c["real"]);
    if (realTok)
        return { kind: "OclLiteral", litKind: "Real", value: parseFloat(realTok.image), loc };
    // Integer
    const intTok = firstTok(c["integer"]);
    if (intTok)
        return { kind: "OclLiteral", litKind: "Integer", value: parseInt(intTok.image, 10), loc };
    // String literal — strip surrounding quotes
    const strTok = firstTok(c["string"]);
    if (strTok)
        return { kind: "OclLiteral", litKind: "String", value: strTok.image.slice(1, -1), loc };
    // Identifier
    const identTok = firstTok(c["ident"]);
    if (identTok)
        return { kind: "OclVarRef", name: identTok.image, loc };
    throw new Error("primaryExpr: unknown variant");
}
// ─── Helpers ─────────────────────────────────────────────────────────────
function firstCst(v) {
    const arr = v;
    return arr?.[0];
}
function allCst(v) {
    return v ?? [];
}
function firstTok(v) {
    const arr = v;
    return arr?.[0];
}
function allTok(v) {
    return v ?? [];
}
function tokLoc(tok) {
    return {
        line: tok.startLine ?? 0,
        column: tok.startColumn ?? 0,
        offset: tok.startOffset,
        length: tok.image.length,
    };
}
function cstLoc(node) {
    const loc = node.location;
    if (!loc)
        return { line: 0, column: 0, offset: 0, length: 0 };
    return {
        line: loc.startLine ?? 0,
        column: loc.startColumn ?? 0,
        offset: loc.startOffset ?? 0,
        length: loc.endOffset !== undefined && loc.startOffset !== undefined
            ? loc.endOffset - loc.startOffset + 1
            : 0,
    };
}
function mergeLoc(a, b) {
    const start = a.offset <= b.offset ? a : b;
    const endOffset = Math.max(a.offset + a.length, b.offset + b.length);
    return {
        line: start.line,
        column: start.column,
        offset: start.offset,
        length: endOffset - start.offset,
    };
}
//# sourceMappingURL=builder.js.map