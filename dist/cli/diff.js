/**
 * `ontodsl diff <old.onto> <new.onto> [--json [--out path]] [--strict]`
 *
 * Compare two `.onto` files and report observable changes classified
 * as BREAKING / ADDITIVE / INTERNAL. Use case: a downstream consumer
 * runs this against the previous + current version of an upstream
 * library to know what to update.
 *
 * Exit codes:
 *   0  no breaking changes (additive / internal-only)
 *   1  usage / argument error
 *   2  parse error in EITHER input
 *   3  internal error
 *   5  BREAKING changes detected (only when --strict is set)
 *
 * Without --strict, breaking changes are reported in the output but
 * exit is 0 — the user looks at the report and decides. With
 * --strict, breaking changes fail CI so a consumer's pipeline blocks
 * on accidental upstream regressions.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "../parser/index.js";
import { diffOnto, renderHumanReport, } from "../migration/diff.js";
const USAGE = `usage: ontodsl diff <old.onto> <new.onto> [--json [--out <path>]] [--strict]

Compare two .onto files and report the observable changes,
classified as BREAKING / ADDITIVE / INTERNAL.

Default output: human-readable report on stdout.

Flags:
  --json              Emit machine-readable JSON to stdout.
  --out <path>        With --json, write to file instead of stdout.
  --strict            Exit code 5 when any BREAKING change is detected
                      (default: exit 0 regardless; user reviews).

Exit codes:
  0  success (or breaking changes without --strict)
  1  usage / argument error
  2  parse error in old or new input
  3  internal error
  5  --strict: BREAKING changes detected
`;
function parseArgs(argv) {
    let oldFile = null;
    let newFile = null;
    let outJson = false;
    let outPath = null;
    let strict = false;
    for (let i = 0; i < argv.length; i += 1) {
        const a = argv[i];
        if (a === "--help" || a === "-h")
            return { error: "" };
        if (a === "--json") {
            outJson = true;
            continue;
        }
        if (a === "--out") {
            const next = argv[i + 1];
            if (!next)
                return { error: "--out requires a path" };
            outPath = next;
            outJson = true;
            i += 1;
            continue;
        }
        if (a === "--strict") {
            strict = true;
            continue;
        }
        if (a && a.startsWith("--"))
            return { error: `unknown flag: ${a}` };
        if (a === undefined)
            continue;
        if (oldFile === null) {
            oldFile = a;
        }
        else if (newFile === null) {
            newFile = a;
        }
        else {
            return { error: `unexpected extra argument: ${a}` };
        }
    }
    if (!oldFile)
        return { error: "missing <old.onto>" };
    if (!newFile)
        return { error: "missing <new.onto>" };
    return { oldFile, newFile, outJson, outPath, strict };
}
export async function runDiff(argv, streams) {
    const parsed = parseArgs(argv);
    if ("error" in parsed) {
        if (parsed.error === "") {
            streams.stdout.write(USAGE);
            return 0;
        }
        streams.stderr.write(`error: ${parsed.error}\n\n${USAGE}`);
        return 1;
    }
    if (!existsSync(parsed.oldFile)) {
        streams.stderr.write(`error: file not found: ${parsed.oldFile}\n`);
        return 2;
    }
    if (!existsSync(parsed.newFile)) {
        streams.stderr.write(`error: file not found: ${parsed.newFile}\n`);
        return 2;
    }
    const oldSrc = readFileSync(parsed.oldFile, "utf8");
    const newSrc = readFileSync(parsed.newFile, "utf8");
    const { ast: oldAst, errors: oldErrs } = parse(oldSrc, {
        validateSemantics: false,
    });
    if (oldAst === null) {
        streams.stderr.write(`error: parse failure in ${parsed.oldFile}: ${JSON.stringify(oldErrs.slice(0, 3))}\n`);
        return 2;
    }
    const { ast: newAst, errors: newErrs } = parse(newSrc, {
        validateSemantics: false,
    });
    if (newAst === null) {
        streams.stderr.write(`error: parse failure in ${parsed.newFile}: ${JSON.stringify(newErrs.slice(0, 3))}\n`);
        return 2;
    }
    const report = diffOnto(oldAst, newAst);
    if (parsed.outJson) {
        const json = JSON.stringify(report, null, 2) + "\n";
        if (parsed.outPath) {
            writeFileSync(resolve(parsed.outPath), json, "utf8");
            streams.stdout.write(`wrote ${resolve(parsed.outPath)}\n`);
        }
        else {
            streams.stdout.write(json);
        }
    }
    else {
        streams.stdout.write(renderHumanReport(report) + "\n");
    }
    if (parsed.strict && report.summary.breaking > 0) {
        streams.stderr.write(`\n--strict: ${report.summary.breaking} breaking change(s) detected\n`);
        return 5;
    }
    return 0;
}
//# sourceMappingURL=diff.js.map