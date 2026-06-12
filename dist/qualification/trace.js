/**
 * Phase Q6 / Paso 6 day 2 — Traceability matrix.
 *
 * After build determinism + reproducibility manifest (day 1), the
 * second audit artefact every regulated-industry reviewer asks for
 * is **traceability**: "for each ontodls feature, show me which
 * test exercises it AND which source files implement it."
 *
 * This module produces that mapping by lightly parsing the vitest
 * test files in `test/`:
 *   - A test file's name (`test/codegenRustCompiles.test.ts`) maps
 *     to a feature label (`codegenRustCompiles`).
 *   - The describe / it names inside the file are the test rows.
 *   - The `import "..."` statements at the top of the file are the
 *     source modules under test.
 *
 * The output JSON is structured for direct ingestion by audit
 * tools (Polarion / DOORS / Codebeamer):
 *
 *   {
 *     "schemaVersion": "ontodls-trace/1",
 *     "features": [
 *       {
 *         "name": "codegenRustCompiles",
 *         "testFile": "test/codegenRustCompiles.test.ts",
 *         "tests": [
 *           { "describe": "codegen-rust", "it": "drone.onto compiles cleanly" },
 *           ...
 *         ],
 *         "sourceFiles": ["src/codegen-rust/index.ts", ...]
 *       },
 *       ...
 *     ],
 *     "summary": { "features": 60, "tests": 770, "sourceFiles": 50 }
 *   }
 *
 * Limitations (v1):
 *   - Regex-based test extraction; doesn't handle dynamic test
 *     generation (e.g. `for (...) it.each(...)`). Surfaces those
 *     entries as "(parameterized)" placeholders.
 *   - Source-file mapping is approximate (the import statement is
 *     treated as evidence; we don't trace through call graphs).
 *   - No requirement-id linking — the trace is feature→test, not
 *     requirement→test. Adding requirement IDs (e.g. `[REQ-3.1.2]`
 *     in describe strings) is left to v2.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, basename } from "node:path";
/**
 * Walk `<rootDir>/<testDir>` recursively, collecting `*.test.ts`
 * files, parse each one's describe/it/import lines, and return the
 * aggregated trace matrix.
 */
export function buildTraceMatrix(opts = {}) {
    const rootDir = resolve(opts.rootDir ?? process.cwd());
    const testDir = resolve(rootDir, opts.testDir ?? "test");
    const features = [];
    const allSourceFiles = new Set();
    if (!existsSync(testDir)) {
        return {
            schemaVersion: "ontodls-trace/1",
            features: [],
            summary: { features: 0, tests: 0, sourceFiles: 0 },
        };
    }
    for (const fp of walk(testDir)) {
        if (!fp.endsWith(".test.ts") && !fp.endsWith(".test.js"))
            continue;
        const source = readFileSync(fp, "utf8");
        const tests = extractTests(source);
        const sourceFiles = extractImports(source, rootDir, fp);
        for (const sf of sourceFiles)
            allSourceFiles.add(sf);
        const rel = relative(rootDir, fp).replace(/\\/g, "/");
        const name = basename(fp).replace(/\.test\.(ts|js)$/, "");
        features.push({
            name,
            testFile: rel,
            tests,
            sourceFiles,
        });
    }
    // Stable sort by feature name so the JSON output is deterministic
    // across runs.
    features.sort((a, b) => a.name.localeCompare(b.name));
    const totalTests = features.reduce((acc, f) => acc + f.tests.length, 0);
    return {
        schemaVersion: "ontodls-trace/1",
        features,
        summary: {
            features: features.length,
            tests: totalTests,
            sourceFiles: allSourceFiles.size,
        },
    };
}
/**
 * Serialize a trace matrix to stable JSON text. Same idea as the
 * manifest module: two runs over the same file tree produce
 * byte-identical output.
 */
export function serializeTraceMatrix(m) {
    return JSON.stringify(m, null, 2) + "\n";
}
// ─── Internal: file walking ────────────────────────────────────────
function* walk(dir) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const st = statSync(full);
        if (st.isDirectory())
            yield* walk(full);
        else if (st.isFile())
            yield full;
    }
}
// ─── Internal: test extraction ─────────────────────────────────────
/**
 * Extract every `describe("…", …)` and `it("…", …)` from the source
 * text. Pairs them: each `it` is attributed to its nearest enclosing
 * `describe`. We track describe nesting via a tiny brace-depth
 * counter so nested describes get the closest-enclosing label.
 *
 * Why regex and not the TS compiler API: the matrix is descriptive,
 * not load-bearing. A 99%-accurate regex extractor is 1000× cheaper
 * to ship than a full AST walk. Edge cases (template literals as
 * test names, computed test names) fall into the "parameterized"
 * bucket so the auditor sees they exist without seeing wrong names.
 */
function extractTests(source) {
    const tests = [];
    // describeStack: [{name, depth}] — top of stack is current parent.
    // We approximate depth by counting `{` after the matched call. This
    // is a tiny brace counter, not a real parser.
    const lines = source.split("\n");
    // Pre-compute a flat index-to-depth map approximating brace depth
    // at the start of each character position. This lets us match
    // describe/it positions to depth.
    const depthAt = computeDepthMap(source);
    const stack = [];
    // Find describe/it call sites in order of source position.
    const calls = findCalls(source);
    for (const call of calls) {
        const d = depthAt[call.pos] ?? 0;
        // Pop any describe frames whose body has closed (i.e. current
        // depth ≤ frame's start depth).
        while (stack.length > 0 && d <= stack[stack.length - 1].startDepth) {
            stack.pop();
        }
        if (call.kind === "describe") {
            stack.push({ name: call.name, startDepth: d });
        }
        else {
            // it / test
            const enclosing = stack.length > 0 ? stack[stack.length - 1].name : "";
            tests.push({
                describe: enclosing,
                it: call.name,
                parameterized: call.parameterized,
            });
        }
    }
    return tests;
}
/**
 * Find every `describe(…)` / `it(…)` / `test(…)` call in source.
 * Captures the FIRST string-literal argument as the name. Calls
 * with non-string (template literal / variable) arguments get a
 * `(parameterized)` placeholder.
 *
 * Recognises:
 *   describe("name", …)
 *   describe.skip("name", …)
 *   describe.only("name", …)
 *   it("name", …) / test("name", …) and their .skip/.only variants
 *   describe.skipIf(...)("name", …)   — vitest conditional skip
 */
function findCalls(source) {
    const out = [];
    // Match describe/it/test optionally followed by .skip/.only/.skipIf(...)
    // then `(` then either a string literal or anything-else (parameterized).
    const re = /\b(describe|it|test)(?:\.(?:skip|only|skipIf\s*\([^)]*\)|each\s*\([^)]*\)))?\s*\(\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)?/g;
    let m;
    while ((m = re.exec(source)) !== null) {
        const kind = m[1] === "describe" ? "describe" : "it";
        const lit = m[2];
        if (lit && (lit.startsWith('"') || lit.startsWith("'"))) {
            // Unquote: strip the surrounding " or '.
            const name = lit.slice(1, -1);
            out.push({ kind, name, pos: m.index, parameterized: false });
        }
        else if (lit && lit.startsWith("`")) {
            // Template literal — keep the raw text minus backticks, mark
            // parameterized because variables may be embedded.
            const raw = lit.slice(1, -1);
            out.push({
                kind,
                name: raw.includes("${") ? `(parameterized) ${raw}` : raw,
                pos: m.index,
                parameterized: raw.includes("${"),
            });
        }
        else {
            out.push({
                kind,
                name: "(parameterized)",
                pos: m.index,
                parameterized: true,
            });
        }
    }
    return out;
}
/**
 * Compute brace depth at each character position. Cheap one-pass
 * scan; ignores braces inside strings + comments via a tiny state
 * machine (good enough for typical TS source — fancier escapes are
 * a known but bounded source of noise).
 */
function computeDepthMap(source) {
    const depth = new Array(source.length + 1);
    let d = 0;
    let inString = null;
    let inLineComment = false;
    let inBlockComment = false;
    for (let i = 0; i < source.length; i += 1) {
        depth[i] = d;
        const c = source[i];
        const next = source[i + 1];
        if (inLineComment) {
            if (c === "\n")
                inLineComment = false;
            continue;
        }
        if (inBlockComment) {
            if (c === "*" && next === "/") {
                inBlockComment = false;
                i += 1; // skip the '/'
            }
            continue;
        }
        if (inString) {
            if (c === "\\") {
                i += 1;
                continue;
            }
            if (c === inString)
                inString = null;
            continue;
        }
        if (c === "/" && next === "/") {
            inLineComment = true;
            continue;
        }
        if (c === "/" && next === "*") {
            inBlockComment = true;
            i += 1;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            inString = c;
            continue;
        }
        if (c === "{")
            d += 1;
        else if (c === "}")
            d -= 1;
    }
    depth[source.length] = d;
    return depth;
}
// ─── Internal: import extraction ───────────────────────────────────
/**
 * Extract `import … from "..."` paths that point inside src/. The
 * heuristic: any import whose specifier starts with `../src/` (or
 * resolves into the repo's src/ directory after relative-path
 * resolution) counts as a source file under test.
 */
function extractImports(source, rootDir, testFilePath) {
    const out = new Set();
    const re = /import\s+(?:[\s\S]*?)\s+from\s+["']([^"']+)["']/g;
    let m;
    while ((m = re.exec(source)) !== null) {
        const spec = m[1];
        // Only relative imports go into src/.
        if (!spec.startsWith("./") && !spec.startsWith("../"))
            continue;
        const abs = resolve(testFilePath, "..", spec);
        const rel = relative(rootDir, abs).replace(/\\/g, "/");
        // Only count imports under src/ (skip cross-test imports).
        if (rel.startsWith("src/")) {
            // Normalize .js extension back to .ts (TS imports use .js for
            // ESM-compat but the source files are .ts).
            const tsRel = rel.replace(/\.js$/, ".ts");
            out.add(tsRel);
        }
    }
    return Array.from(out).sort();
}
//# sourceMappingURL=trace.js.map