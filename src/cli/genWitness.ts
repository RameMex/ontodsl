/**
 * `ontodsl gen-witness <file.onto> --out <dir>` — emit a complete
 * Rust crate that contains the generated lib.rs PLUS the contract-
 * witness tests appended, ready to run `cargo check --tests` against.
 *
 * Why a dedicated subcommand: `gen` produces just the library; the
 * witness tests are an optional artifact users opt into. Keeping the
 * tests off the default codegen path keeps `gen` deterministic for
 * users who only want the runtime — the witness module adds ~100-300
 * lines per type and changes test counts on every codegen.
 *
 * Output layout (same as `gen --target rust`):
 *   <out>/Cargo.toml
 *   <out>/src/lib.rs        # codegen + appended `mod contract_tests`
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { parse } from "../parser/index.js";
import { renderRust } from "../codegen-rust/index.js";
import { renderRustProptestsForFile } from "../codegen-rust/index.js";

interface Streams {
  readonly stdout: { write(s: string): unknown };
  readonly stderr: { write(s: string): unknown };
}

interface ParsedArgs {
  readonly inputFile: string;
  readonly outDir: string;
  readonly target: "alloc" | "no-alloc";
  readonly heaplessCapacity: number;
  readonly float: "f32" | "f64";
}

const USAGE = `usage: ontodsl gen-witness <file.onto> --out <dir> [flags]

Emit a complete Rust crate (Cargo.toml + src/lib.rs) with the
generated runtime AND the contract-witness test module appended.
Run \`cargo check --tests\` (or \`cargo test\`) in the output dir
to verify every emitted witness compiles and (for cargo test) passes.

Flags:
  --rust-no-alloc        Use heapless containers. Default: alloc.
  --rust-capacity <n>    Heapless capacity. Default: 16.
  --rust-f32             Map OCL Real to f32. Default: f64.

Exit codes:
  0  success (with witness count printed to stdout)
  1  usage / argument error
  2  parse or semantic error
  3  internal error
`;

function parseArgs(argv: readonly string[]): ParsedArgs | { readonly error: string } {
  let inputFile: string | null = null;
  let outDir: string | null = null;
  let target: "alloc" | "no-alloc" = "alloc";
  let heaplessCapacity = 16;
  let float: "f32" | "f64" = "f64";

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--help" || a === "-h") return { error: "" };
    if (a === "--out") {
      const next = argv[i + 1];
      if (!next) return { error: "--out requires a directory" };
      outDir = next;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--out=")) {
      outDir = a.slice("--out=".length);
      continue;
    }
    if (a === "--rust-no-alloc") {
      target = "no-alloc";
      continue;
    }
    if (a === "--rust-f32") {
      float = "f32";
      continue;
    }
    if (a === "--rust-f64") {
      float = "f64";
      continue;
    }
    if (a === "--rust-capacity") {
      const next = argv[i + 1];
      if (!next) return { error: "--rust-capacity requires a number" };
      const n = parseInt(next, 10);
      if (isNaN(n) || n <= 0) return { error: `bad capacity '${next}'` };
      heaplessCapacity = n;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--")) return { error: `unknown flag: ${a}` };
    if (inputFile !== null) {
      return { error: `multiple input files: '${inputFile}', '${a}'` };
    }
    inputFile = a ?? null;
  }
  if (!inputFile) return { error: "missing input .onto file" };
  if (!outDir) return { error: "missing --out <dir>" };
  return { inputFile, outDir, target, heaplessCapacity, float };
}

export async function runGenWitness(
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

  const source = readFileSync(parsed.inputFile, "utf8");
  const { ast, errors } = parse(source);
  // Hard diagnostics fail; advisories print but don't gate (same
  // policy as the main `gen` subcommand).
  let hard = 0;
  for (const e of errors) {
    const code = (e as { code?: string }).code ?? "?";
    const isHard = !code.startsWith("W");
    if (isHard) hard += 1;
    const out = isHard ? streams.stderr : streams.stdout;
    out.write(`  [${code}] ${e.message}\n`);
  }
  if (hard > 0) return 2;
  if (!ast) {
    streams.stderr.write("internal: no AST after parse\n");
    return 3;
  }

  const crateName = parsed.inputFile
    .replace(/\\/g, "/")
    .split("/")
    .pop()!
    .replace(/\.onto$/i, "")
    .replace(/[^A-Za-z0-9_]/g, "_");

  const opts = {
    crateName,
    target: parsed.target,
    heaplessCapacity: parsed.heaplessCapacity,
    float: parsed.float,
  };
  const { cargoToml, libRs } = renderRust(ast, opts);
  const { proptestsRs, testCount } = renderRustProptestsForFile(ast, opts);

  const outAbs = resolve(parsed.outDir);
  const srcDir = join(outAbs, "src");
  mkdirSync(srcDir, { recursive: true });
  writeFileSync(join(outAbs, "Cargo.toml"), cargoToml, "utf8");
  const combined =
    testCount > 0 ? libRs + "\n\n" + proptestsRs : libRs;
  writeFileSync(join(srcDir, "lib.rs"), combined, "utf8");

  streams.stdout.write(`wrote ${join(outAbs, "Cargo.toml")}\n`);
  streams.stdout.write(`wrote ${join(srcDir, "lib.rs")}\n`);
  if (testCount > 0) {
    streams.stdout.write(`emitted ${testCount} contract-witness tests\n`);
  } else {
    streams.stdout.write(
      `no witness tests emitted (no recognised invariants / pre / post)\n`,
    );
  }
  return 0;
}
