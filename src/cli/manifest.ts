/**
 * `ontodsl manifest <file.onto> [--out <path>]` — emit a
 * reproducibility manifest for a .onto file. Produces a JSON
 * artefact suitable for a tool-qualification expedient or a
 * change-control baseline.
 *
 * Also runs the determinism check (codegen twice, compare bytes)
 * and surfaces the result in the manifest's exit code: 0 = both
 * manifest written AND codegen deterministic; 2 = manifest
 * written but determinism check failed (rare, but the user
 * should know IMMEDIATELY because the audit value collapses).
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  buildManifest,
  serializeManifest,
  checkDeterminism,
  type ManifestOptions,
} from "../qualification/manifest.js";

interface Streams {
  readonly stdout: { write(s: string): unknown };
  readonly stderr: { write(s: string): unknown };
}

const USAGE = `usage: ontodsl manifest <file.onto> [--out <path>] [--targets ts,rust,c] [--resolve-imports] [--rust-no-alloc] [--rust-f32]

Emit a reproducibility manifest for the given .onto. The manifest is
a JSON document with:
  - ontodls version, generation date (YYYY-MM-DD UTC)
  - SHA-256 of every input file (root + transitive imports)
  - codegen options as supplied
  - SHA-256 + byte-size of every output artefact (Cargo.toml, lib.rs,
    .h, .c, .ts as applicable)

The CLI also runs a determinism check (regenerates from the same .onto
twice; compares output bytes). When non-deterministic, exits with
code 2 — the manifest's audit value depends on determinism.

Flags:
  --out <path>           Write manifest JSON to this path. Default: stdout.
  --targets <list>       Comma-separated targets (ts, rust, c). Default: all.
  --resolve-imports      Follow \`import\` declarations from the root file.
  --rust-no-alloc        Use heapless containers.
  --rust-f32             Map OCL Real to f32.

Exit codes:
  0  manifest written + determinism verified
  1  usage / argument error
  2  parse error OR determinism check FAILED
  3  internal error
`;

interface Args {
  readonly inputFile: string;
  readonly outPath: string | null;
  readonly targets: readonly ("ts" | "rust" | "c")[];
  readonly resolveImports: boolean;
  readonly rustNoAlloc: boolean;
  readonly rustF32: boolean;
}

function parseArgs(argv: readonly string[]): Args | { readonly error: string } {
  let inputFile: string | null = null;
  let outPath: string | null = null;
  let targets: readonly ("ts" | "rust" | "c")[] = ["ts", "rust", "c"];
  let resolveImports = false;
  let rustNoAlloc = false;
  let rustF32 = false;

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
    if (a === "--targets") {
      const next = argv[i + 1];
      if (!next) return { error: "--targets requires a comma-separated list" };
      const parsed = next
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      for (const t of parsed) {
        if (t !== "ts" && t !== "rust" && t !== "c") {
          return { error: `unknown target '${t}' (allowed: ts, rust, c)` };
        }
      }
      targets = parsed as readonly ("ts" | "rust" | "c")[];
      i += 1;
      continue;
    }
    if (a === "--resolve-imports") {
      resolveImports = true;
      continue;
    }
    if (a === "--rust-no-alloc") {
      rustNoAlloc = true;
      continue;
    }
    if (a === "--rust-f32") {
      rustF32 = true;
      continue;
    }
    if (a && a.startsWith("--")) return { error: `unknown flag: ${a}` };
    if (inputFile !== null) {
      return { error: `multiple input files: '${inputFile}', '${a}'` };
    }
    inputFile = a ?? null;
  }
  if (!inputFile) return { error: "missing input .onto file" };
  return { inputFile, outPath, targets, resolveImports, rustNoAlloc, rustF32 };
}

export async function runManifest(
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

  // exactOptionalPropertyTypes is on, so omit `rustOptions`
  // entirely (not `undefined`) when no rust-specific flags were set.
  const opts: ManifestOptions = parsed.rustNoAlloc || parsed.rustF32
    ? {
        targets: parsed.targets,
        resolveImports: parsed.resolveImports,
        rustOptions: {
          ...(parsed.rustNoAlloc ? { target: "no-alloc" as const } : {}),
          ...(parsed.rustF32 ? { float: "f32" as const } : {}),
        },
      }
    : {
        targets: parsed.targets,
        resolveImports: parsed.resolveImports,
      };

  let manifest;
  try {
    manifest = buildManifest(parsed.inputFile, opts);
  } catch (err) {
    streams.stderr.write(`error: ${(err as Error).message}\n`);
    return 2;
  }

  const json = serializeManifest(manifest);
  if (parsed.outPath) {
    const abs = resolve(parsed.outPath);
    writeFileSync(abs, json, "utf8");
    streams.stdout.write(`wrote ${abs}\n`);
  } else {
    streams.stdout.write(json);
  }

  // Determinism check on the same inputs + options.
  let detResult;
  try {
    detResult = checkDeterminism(parsed.inputFile, opts);
  } catch (err) {
    streams.stderr.write(
      `error during determinism check: ${(err as Error).message}\n`,
    );
    return 2;
  }
  if (!detResult.deterministic) {
    const d = detResult.firstDifference!;
    streams.stderr.write(
      `\n⚠ DETERMINISM CHECK FAILED — artefact '${d.artefact}' differs between runs\n` +
        `  run A sha256: ${d.hashA}\n` +
        `  run B sha256: ${d.hashB}\n` +
        `the manifest is correct for THIS run but loses audit value if codegen isn't reproducible.\n`,
    );
    return 2;
  }
  streams.stdout.write(`determinism: OK (${manifest.outputs.length} artefacts hashed)\n`);
  return 0;
}
