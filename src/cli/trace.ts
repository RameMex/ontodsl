/**
 * `ontodsl trace [--out <path>] [--root <repo-root>]`
 *
 * Emit the traceability matrix — every test file → every test
 * (describe/it) → every imported source module. The artefact a
 * regulated-industry auditor asks for AFTER the reproducibility
 * manifest: "for each feature, show me which tests cover it."
 *
 * Default output: JSON to stdout. With `--out`, writes to file.
 * Default repo root: `process.cwd()`. Default test dir: `test/`.
 *
 * Exit codes:
 *   0  success
 *   1  usage error
 *   3  internal error
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  buildTraceMatrix,
  serializeTraceMatrix,
} from "../qualification/trace.js";

interface Streams {
  readonly stdout: { write(s: string): unknown };
  readonly stderr: { write(s: string): unknown };
}

const USAGE = `usage: ontodsl trace [--out <path>] [--root <repo-root>] [--test-dir <dir>]

Emit the traceability matrix (feature → test → source) as JSON.

Flags:
  --out <path>           Write JSON to this path. Default: stdout.
  --root <repo-root>     Repository root. Default: current directory.
  --test-dir <dir>       Test directory relative to root. Default: "test".

Exit codes:
  0  success
  1  usage / argument error
  3  internal error
`;

interface Args {
  readonly outPath: string | null;
  readonly rootDir: string | null;
  readonly testDir: string | null;
}

function parseArgs(argv: readonly string[]): Args | { readonly error: string } {
  let outPath: string | null = null;
  let rootDir: string | null = null;
  let testDir: string | null = null;
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--help" || a === "-h") return { error: "" };
    if (a === "--out") {
      const next = argv[i + 1];
      if (!next) return { error: "--out requires a path" };
      outPath = next;
      i += 1;
      continue;
    }
    if (a === "--root") {
      const next = argv[i + 1];
      if (!next) return { error: "--root requires a path" };
      rootDir = next;
      i += 1;
      continue;
    }
    if (a === "--test-dir") {
      const next = argv[i + 1];
      if (!next) return { error: "--test-dir requires a path" };
      testDir = next;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--")) return { error: `unknown flag: ${a}` };
    return { error: `unexpected positional argument: ${a}` };
  }
  return { outPath, rootDir, testDir };
}

export async function runTrace(
  argv: readonly string[],
  streams: Streams,
): Promise<number> {
  const parsed = parseArgs(argv);
  if ("error" in parsed) {
    if (parsed.error === "") {
      streams.stdout.write(USAGE);
      return 0;
    }
    streams.stderr.write(`error: ${parsed.error}\n\n${USAGE}`);
    return 1;
  }

  const matrix = buildTraceMatrix({
    ...(parsed.rootDir !== null ? { rootDir: parsed.rootDir } : {}),
    ...(parsed.testDir !== null ? { testDir: parsed.testDir } : {}),
  });
  const json = serializeTraceMatrix(matrix);
  if (parsed.outPath) {
    const abs = resolve(parsed.outPath);
    writeFileSync(abs, json, "utf8");
    streams.stdout.write(`wrote ${abs}\n`);
    streams.stdout.write(
      `${matrix.summary.features} feature(s), ${matrix.summary.tests} test(s), ${matrix.summary.sourceFiles} source file(s)\n`,
    );
  } else {
    streams.stdout.write(json);
  }
  return 0;
}
