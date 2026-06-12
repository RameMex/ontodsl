#!/usr/bin/env node
/**
 * Onto DSL CLI.
 *
 * Phase 10 baseline: parse → synchronous validate → render TypeScript
 * to <out>/<basename>.ts.
 *
 * Phase 10.1 additions (opt-in, all default-off):
 *
 *   --verify
 *       Run async Z3 verifiers (S29/S30/S33). Hard diagnostics fail
 *       the build (exit 2). Warnings are printed but don't gate.
 *
 *   --diagram
 *       Also write `<basename>.md` containing the three Mermaid
 *       diagrams in fenced blocks.
 *
 *   --react-flow
 *       Also write `<basename>.flow.json` with the React Flow graph
 *       data (Phase 9.5 builder).
 *
 * Implementation note: the CLI body lives in `runCli(argv, streams)`,
 * an exported async function that takes injectable stdout/stderr
 * writers. This lets tests call it in-process — no subprocess spawn,
 * no `npx tsx` cold-start. The script-mode entry point at the bottom
 * just wires `process.argv` and `process.stdout/stderr` and calls
 * `process.exit` with the returned code.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, basename, extname, join } from "node:path";
import { parse } from "../parser/index.js";
import { parseFile } from "../parser/multiFile.js";
import {
  verifyLSPContracts,
  verifyCommitmentPredicates,
  verifyTraceClauses,
  verifyCommitmentDischarge,
  verifyCategoryMembership,
  mineRefinesAnnotations,
  checkInterStageRefinement,
  checkPropertyCorrespondence,
} from "../semantic/index.js";
import { renderTypeScript } from "../codegen/index.js";
import { renderTanstack } from "../codegen-tanstack/index.js";
import { renderRust } from "../codegen-rust/index.js";
import { renderC } from "../codegen-c/index.js";
import { renderMermaid } from "../viz/index.js";
import { buildReactFlowGraph } from "../viz-react/index.js";
import type { OntoFile } from "../ast/index.js";

interface Args {
  readonly inputFile: string;
  readonly outDir: string;
  readonly verify: boolean;
  readonly diagram: boolean;
  readonly reactFlow: boolean;
  readonly target: "ts" | "rust" | "c" | "tanstack";
  readonly rustNoAlloc: boolean;
  readonly rustCapacity: number;
  readonly rustAsync: boolean;
  readonly rustFloat: "f32" | "f64";
  /**
   * Paso 5: when true, follow `import "./other.onto";` from the root
   * file and merge transitive declarations before codegen. When false
   * (default for backward-compat), the root file is parsed alone and
   * any imports are reported as unknown identifiers — same as before.
   */
  readonly resolveImports: boolean;
  /**
   * Phase 15 (Bloque 2 v0.9): strict-mode flag for CI usage.
   * Promotes inter-stage warning codes (W34, W35, W37, W38, W39)
   * to hard failures (exit code 2). `W##_partial` codes remain
   * warnings — they describe expected partial-verification on
   * cláusulas fuera del subconjunto decidible, not real violations.
   */
  readonly strict: boolean;
}

type ArgResult = Args | { readonly error: string };

function parseArgs(argv: readonly string[]): ArgResult {
  let inputFile: string | null = null;
  let outDir: string | null = null;
  let verify = false;
  let diagram = false;
  let reactFlow = false;
  let target: "ts" | "rust" | "c" | "tanstack" = "ts";
  let rustNoAlloc = false;
  let rustCapacity = 16;
  let rustAsync = false;
  let rustFloat: "f32" | "f64" = "f64";
  let resolveImports = false;
  let strict = false;

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--help" || a === "-h") {
      return { error: "" };
    }
    if (a === "--out") {
      const next = argv[i + 1];
      if (!next) return { error: "--out requires a directory argument" };
      outDir = next;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--out=")) {
      outDir = a.slice("--out=".length);
      continue;
    }
    if (a === "--target") {
      const next = argv[i + 1];
      if (!next) return { error: "--target requires a value (ts | rust | c | tanstack)" };
      if (next !== "ts" && next !== "rust" && next !== "c" && next !== "tanstack") {
        return { error: `--target must be 'ts', 'rust', 'c', or 'tanstack', got '${next}'` };
      }
      target = next;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--target=")) {
      const v = a.slice("--target=".length);
      if (v !== "ts" && v !== "rust" && v !== "c" && v !== "tanstack") {
        return { error: `--target must be 'ts', 'rust', 'c', or 'tanstack', got '${v}'` };
      }
      target = v;
      continue;
    }
    if (a === "--rust-no-alloc") {
      rustNoAlloc = true;
      continue;
    }
    if (a === "--rust-async") {
      rustAsync = true;
      continue;
    }
    if (a === "--rust-f32") {
      rustFloat = "f32";
      continue;
    }
    if (a === "--rust-f64") {
      rustFloat = "f64";
      continue;
    }
    if (a === "--rust-capacity") {
      const next = argv[i + 1];
      if (!next) return { error: "--rust-capacity requires a number" };
      const n = parseInt(next, 10);
      if (isNaN(n) || n <= 0) {
        return { error: `--rust-capacity must be a positive integer, got '${next}'` };
      }
      rustCapacity = n;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--rust-capacity=")) {
      const v = a.slice("--rust-capacity=".length);
      const n = parseInt(v, 10);
      if (isNaN(n) || n <= 0) {
        return { error: `--rust-capacity must be a positive integer, got '${v}'` };
      }
      rustCapacity = n;
      continue;
    }
    if (a === "--verify") {
      verify = true;
      continue;
    }
    if (a === "--strict") {
      strict = true;
      continue;
    }
    if (a === "--resolve-imports") {
      resolveImports = true;
      continue;
    }
    if (a === "--diagram") {
      diagram = true;
      continue;
    }
    if (a === "--react-flow") {
      reactFlow = true;
      continue;
    }
    if (!a || a.startsWith("--")) {
      return { error: `unknown flag: ${a}` };
    }
    if (inputFile !== null) {
      return { error: `multiple input files; got '${inputFile}' and '${a}'` };
    }
    inputFile = a;
  }
  if (!inputFile) return { error: "missing input .onto file" };
  if (!outDir) return { error: "missing --out <dir>" };
  return { inputFile, outDir, verify, diagram, reactFlow, target, rustNoAlloc, rustCapacity, rustAsync, rustFloat, resolveImports, strict };
}

const USAGE = `usage: ontodsl <file.onto> --out <dir> [flags]
       ontodsl explain <code>           Print the manual entry for an S## or W## diagnostic code.
       ontodsl gen-witness <file.onto> --out <dir>
                                        Emit lib.rs + Cargo.toml + contract-witness tests as one crate.
       ontodsl coverage <file.onto> [--json [--out <path>]]
                                        Print per-type / per-event contract surface metrics.
       ontodsl manifest <file.onto> [--out <path>] [--targets ts,rust,c] [--resolve-imports]
                                        Emit a reproducibility manifest (input + ontodls version
                                        + options + output SHA-256). Runs the determinism check;
                                        exit 2 if codegen isn't byte-stable across runs.
       ontodsl diff <old.onto> <new.onto> [--json [--out <path>]] [--strict]
                                        Schema migration tool: compare two .onto files and report
                                        BREAKING / ADDITIVE / INTERNAL changes. --strict exits 5
                                        when any breaking change is detected.
       ontodsl trace [--out <path>]    Emit the traceability matrix (feature → test → source) as JSON.
       ontodsl binder <file.onto> --out <dir>
                                        Produce the complete audit expedient (manifest + trace +
                                        coverage + README + generated code) in one directory.

Flags:
  --target <ts|rust|c>   Code-gen target. Default: ts.
                         ts:   writes <basename>.ts (TypeScript module).
                         rust: writes Cargo.toml + src/lib.rs.
                         c:    writes <basename>.h + <basename>.c with ACSL
                               annotations (verify via frama-c -wp).
  --rust-no-alloc        Use heapless containers (no allocator). Default: alloc.
  --rust-capacity <n>    Heapless container capacity. Default: 16.
  --rust-async           Also emit async event wrappers (embassy/tokio compatible).
  --rust-f32             Map OCL Real to f32 (embedded, no double-precision FPU).
  --rust-f64             Map OCL Real to f64 (default).
  --resolve-imports      Follow \`import "./other.onto";\` from the root file
                         and merge all transitive declarations before codegen
                         (Paso 5 federation).
  --verify               Run async Z3 LSP verifiers (S29/S30/S33).
  --strict               Promote inter-stage warnings (W34, W35, W37, W38, W39)
                         to hard failures. Useful for CI/CD pipelines that
                         require all commitments to have refiners and all
                         decompositions to be complete. W##_partial codes
                         remain warnings.
  --diagram              Also write <basename>.md with Mermaid diagrams.
  --react-flow           Also write <basename>.flow.json.
  --help, -h             Show this message.

Exit codes:
  0  success
  1  usage / argument error
  2  parse / semantic / LSP-hard error
  3  internal error
`;

function formatLocation(
  loc: { readonly line: number; readonly column: number } | null | undefined,
): string {
  if (!loc) return "";
  return ` at ${loc.line}:${loc.column}`;
}

/**
 * Compact representation of `<file>:<line>` for inter-stage coverage
 * report. The file path is shortened to its basename for readability
 * (full path is in the merged-files header earlier in the output).
 */
function formatPathLine(file: string, line: number): string {
  const base = file.replace(/^.*[\\/]/, "");
  return `${base}:${line}`;
}

/**
 * Count how many discharge links produced NO hard (S34) diagnostic.
 * Those are the ones Z3 proved discharged — W34_partial warnings
 * about skipped clauses do NOT disqualify a proof (UNSAT in the
 * decidable subset is still a proof in that subset). A link is
 * identified by the (eventOwner.name, event.name, commitment.name)
 * triple; we match against the diagnostic messages, which embed
 * both names.
 */
function countProvenDischarges(
  links: ReadonlyArray<{
    event: { name: string };
    eventOwner: { name: string };
    commitment: { name: string };
  }>,
  diagnostics: ReadonlyArray<{ code: string; message: string }>,
): number {
  let count = 0;
  for (const link of links) {
    const tag = `event '${link.eventOwner.name}.${link.event.name}' → commitment '${link.commitment.name}'`;
    const hardHit = diagnostics.some(
      (d) => (d.code === "S34" || d.code === "S36") && d.message.includes(tag),
    );
    if (!hardHit) count += 1;
  }
  return count;
}

/**
 * Many semantic-check messages already begin with `[S##] ` because
 * they were authored to be self-describing for log scrapers. The
 * CLI also prepends `[code]`, so we strip the duplicate prefix if
 * present — cosmetic only.
 */
function stripLeadingCodeTag(message: string, code: string): string {
  const tag = `[${code}] `;
  return message.startsWith(tag) ? message.slice(tag.length) : message;
}

/** Streams used by the CLI. */
export interface CliStreams {
  readonly stdout: { write(s: string): unknown };
  readonly stderr: { write(s: string): unknown };
}

const DEFAULT_STREAMS: CliStreams = {
  stdout: process.stdout,
  stderr: process.stderr,
};

/**
 * Run the CLI body. `argv` is the arg list AFTER stripping
 * `node script.ts` (i.e. callers pass `process.argv.slice(2)`).
 * Returns the exit code; does NOT call `process.exit` so tests
 * keep running after a "failed" invocation.
 */
export async function runCli(
  argv: readonly string[],
  streams: CliStreams = DEFAULT_STREAMS,
): Promise<number> {
  // Subcommand dispatch — `ontodsl explain <code>` short-circuits
  // the full parse/codegen pipeline since it only consults a static
  // catalog. Any additional subcommands ("init", "format", etc.)
  // can hook in here without disturbing the main flow.
  if (argv[0] === "explain") {
    const { runExplain } = await import("./explain.js");
    return runExplain(argv.slice(1), streams);
  }
  if (argv[0] === "gen-witness") {
    const { runGenWitness } = await import("./genWitness.js");
    return runGenWitness(argv.slice(1), streams);
  }
  if (argv[0] === "coverage") {
    const { runCoverage } = await import("./coverage.js");
    return runCoverage(argv.slice(1), streams);
  }
  if (argv[0] === "manifest") {
    const { runManifest } = await import("./manifest.js");
    return runManifest(argv.slice(1), streams);
  }
  if (argv[0] === "diff") {
    const { runDiff } = await import("./diff.js");
    return runDiff(argv.slice(1), streams);
  }
  if (argv[0] === "trace") {
    const { runTrace } = await import("./trace.js");
    return runTrace(argv.slice(1), streams);
  }
  if (argv[0] === "binder") {
    const { runBinder } = await import("./binder.js");
    return runBinder(argv.slice(1), streams);
  }

  const parsed = parseArgs(argv);
  if ("error" in parsed) {
    if (parsed.error === "") {
      streams.stdout.write(USAGE);
      return 0;
    }
    streams.stderr.write(`error: ${parsed.error}\n\n${USAGE}`);
    return 1;
  }

  // Paso 5: when `--resolve-imports` is on, use the multi-file
  // resolver which loads the root file PLUS every `import "./other";`
  // and merges their declarations before semantic check. Otherwise
  // fall back to the single-file parse for backward compatibility.
  let ast: import("../ast/index.js").OntoFile | null;
  let errors: readonly unknown[];
  // Phase 18 (Bloque 2 v0): retain the loaded-file list so the
  // inter-stage refinement checker can mine `// refines:` annotations
  // from every file the multi-file resolver actually touched.
  let loadedFiles: readonly string[] = [];
  if (parsed.resolveImports) {
    const r = parseFile(parsed.inputFile);
    ast = r.ast;
    errors = r.errors;
    loadedFiles = r.loadedFiles;
    if (r.loadedFiles.length > 1) {
      streams.stdout.write(
        `resolved ${r.loadedFiles.length} files (${r.loadedFiles.join(", ")})\n`,
      );
    }
  } else {
    const source = readFileSync(parsed.inputFile, "utf8");
    const r = parse(source);
    ast = r.ast;
    errors = r.errors;
  }

  // The parser's `parse()` runs validateSemantics internally and
  // combines parse + semantic diagnostics into a single error list.
  // We surface them under a unified "diagnostics" header rather than
  // splitting into "parse" vs "semantic" categories — the user
  // doesn't care which validator caught it; they care WHAT'S WRONG.
  if (errors.length > 0) {
    streams.stderr.write(`diagnostics in ${parsed.inputFile}:\n`);
    let hardCount = 0;
    for (const err of errors) {
      // Multi-file resolver returns `unknown[]` (broader than the
      // single-file ParseError so it can include E1/E2/E3 too).
      // Narrow to the common record shape.
      const e = err as {
        code?: string;
        message?: string;
        location?: { line: number; column: number } | null;
      };
      const code = e.code ?? "?";
      const loc = formatLocation(e.location);
      const msg = stripLeadingCodeTag(e.message ?? "", code);
      // S## = hard error (fails the build); W## = advisory (log and
      // keep going). Mirrors the LSP-stage convention below.
      const isHard = !code.startsWith("W");
      if (isHard) hardCount += 1;
      const target = isHard ? streams.stderr : streams.stdout;
      target.write(`  [${code}]${loc} ${msg}\n`);
    }
    if (hardCount > 0) return 2;
    // Pure warnings — fall through to codegen.
  }
  if (!ast) {
    streams.stderr.write(`internal: parse returned no errors but no AST\n`);
    return 3;
  }

  // Phase 10.1 note: we don't re-run validateSemantics here because
  // parse() already did. An older draft did call it again; that was
  // dead code that never found additional issues.

  if (parsed.verify) {
    streams.stdout.write(
      "running Z3 verification (this may take a moment)...\n",
    );
    const lspDiags = [
      ...(await verifyLSPContracts(ast)),
      ...(await verifyCommitmentPredicates(ast)),
    ];
    let hardCount = 0;
    let warnCount = 0;
    for (const d of lspDiags) {
      const loc = formatLocation(d.location);
      const isHard = d.code.startsWith("S");
      if (isHard) hardCount += 1;
      else warnCount += 1;
      const target = isHard ? streams.stderr : streams.stdout;
      const msg = stripLeadingCodeTag(d.message, d.code);
      target.write(`  [${d.code}]${loc} ${msg}\n`);
    }
    if (warnCount > 0) {
      streams.stdout.write(
        `verification: ${warnCount} warning(s) (informational, did not fail build)\n`,
      );
    }
    if (hardCount > 0) {
      streams.stderr.write(
        `verification failed: ${hardCount} hard diagnostic(s)\n`,
      );
      return 2;
    }

    // Phase 19 (Bloque 2 v0.6): category-membership invariants.
    // This is intra-file by nature (the kind and the category it
    // specializes live in the same AST, single-file or merged), so
    // we run it unconditionally when `--verify` is on. The check
    // skips categories whose invariants are trivially true; it is
    // therefore a no-op for legacy `.onto` that don't use the v0.6
    // bearer binding.
    {
      const catDiags = await verifyCategoryMembership(ast);
      let catHard = 0;
      let catWarn = 0;
      for (const d of catDiags) {
        const loc = formatLocation(d.location);
        const msg = stripLeadingCodeTag(d.message, d.code);
        const isHard = d.code === "S35";
        if (isHard) catHard += 1;
        else catWarn += 1;
        const target = isHard ? streams.stderr : streams.stdout;
        target.write(`  [${d.code}]${loc} ${msg}\n`);
      }
      if (catDiags.length > 0) {
        if (catHard === 0) {
          streams.stdout.write(
            `  ✓ category-membership: ${catWarn === 0 ? "all" : "partial-or-all"} memberships verified by Z3\n`,
          );
        } else {
          streams.stderr.write(
            `category-membership proofs failed: ${catHard} hard diagnostic(s)\n`,
          );
          return 2;
        }
      }
    }

    // Phase 24 (RxOCL): trace-block clauses (`always P`, `next P`,
    // `eventually within N steps: P`). Bounded LTL operators verified
    // inductively for `always` / `next`; `eventually` emits a pending
    // diagnostic until BMC ships in a follow-up.
    {
      const traceDiags = await verifyTraceClauses(ast);
      let traceHard = 0;
      let traceWarn = 0;
      for (const d of traceDiags) {
        const loc = formatLocation(d.location);
        const msg = stripLeadingCodeTag(d.message, d.code);
        const isHard = d.code === "S40";
        if (isHard) traceHard += 1;
        else traceWarn += 1;
        const target = isHard ? streams.stderr : streams.stdout;
        target.write(`  [${d.code}]${loc} ${msg}\n`);
      }
      if (traceDiags.length > 0 || traceHard > 0) {
        if (traceHard === 0) {
          streams.stdout.write(
            `  ✓ trace clauses: ${traceWarn === 0 ? "all" : "all-with-partial"} clauses verified by Z3\n`,
          );
        } else {
          streams.stderr.write(
            `trace clauses failed: ${traceHard} hard diagnostic(s)\n`,
          );
          return 2;
        }
      }
    }

    // Phase 18 (Bloque 2): inter-stage refinement checks.
    // Runs only when --resolve-imports brought in at least one extra
    // file beyond the root — a single-file build has no inter-stage
    // edge to verify.
    //
    //  v0   : coverage  — every commitment has at least one refiner
    //                     annotation (W34/W35).
    //  v0.1 : Z3 discharge proof — for each (event, commitment) link,
    //                     prove event.pre ∧ event.post ⊨ predicate
    //                     (S34 hard, W34_partial soft).
    if (parsed.resolveImports && loadedFiles.length > 1) {
      const annotations = mineRefinesAnnotations(loadedFiles);
      const report = checkInterStageRefinement(ast, annotations);
      streams.stdout.write(
        `inter-stage refinement coverage (${annotations.length} annotation(s), ` +
        `${report.dischargeLinks.length} discharge link(s) to verify):\n`,
      );
      for (const link of report.coverage) {
        const refList =
          link.refiners.length === 0
            ? "(no refiners)"
            : link.refiners
                .map(
                  (r) =>
                    `${r.namespace}::${r.ownerType}.${r.eventName} (${formatPathLine(r.file, r.line)})`,
                )
                .join(", ");
        const mark = link.refiners.length === 0 ? "✗" : "✓";
        streams.stdout.write(
          `  ${mark} ${link.commitmentName} ← ${refList}\n`,
        );
      }
      // Phase 15 (Bloque 2 v0.9) — accumulate strict-mode promotions
      // across the inter-stage block. W34/W35/W37/W38/W39 (non-partial)
      // become hard failures under --strict. W##_partial codes always
      // remain warnings.
      let strictHardCount = 0;
      const isStrictHard = (code: string): boolean =>
        parsed.strict && /^W(34|35|37|38|39)$/.test(code);

      for (const d of report.diagnostics) {
        const loc = formatLocation(d.location);
        const msg = stripLeadingCodeTag(d.message, d.code);
        const hard = isStrictHard(d.code);
        if (hard) strictHardCount += 1;
        const target = hard ? streams.stderr : streams.stdout;
        target.write(`  [${d.code}]${loc}${hard ? " (strict)" : ""} ${msg}\n`);
      }

      // v0.2: Liskov / decomposition coverage. Print as a separate
      // table — these are NOT commitment-discharge edges, they're
      // event-refinement edges. The intra-merged-AST LSP check
      // (`verifyLSPContracts` above) already proved Liskov for any
      // `override event` pair; this report shows the wider set of
      // claimed-refinement edges captured by annotations.
      if (report.liskovCoverage.length > 0) {
        streams.stdout.write(
          `inter-stage Liskov coverage (${report.liskovCoverage.length} parent-event(s) with at least one implementor):\n`,
        );
        for (const link of report.liskovCoverage) {
          const implList = link.implementers
            .map(
              (i) =>
                `${i.namespace}::${i.ownerType}.${i.eventName} (${formatPathLine(i.file, i.line)})`,
            )
            .join(", ");
          streams.stdout.write(
            `  ↪ ${link.parentOwner}.${link.parentEvent} ← ${implList}\n`,
          );
        }
      }

      // v0.1: Z3 discharge proof for every resolved link.
      if (report.dischargeLinks.length > 0) {
        streams.stdout.write(
          `running Z3 commitment-discharge proofs (${report.dischargeLinks.length} link(s))...\n`,
        );
        const dischDiags = await verifyCommitmentDischarge(
          ast,
          report.dischargeLinks,
        );
        let dischHard = 0;
        let dischWarn = 0;
        for (const d of dischDiags) {
          const loc = formatLocation(d.location);
          const msg = stripLeadingCodeTag(d.message, d.code);
          const isHard = d.code === "S34" || d.code === "S36";
          if (isHard) dischHard += 1;
          else dischWarn += 1;
          const target = isHard ? streams.stderr : streams.stdout;
          target.write(`  [${d.code}]${loc} ${msg}\n`);
        }
        // Tally the proven-OK count: any link that produced NO
        // diagnostic for its (eventOwner, event, commitment) triple
        // counts as proven. Emit a single positive summary line.
        const provenOk = countProvenDischarges(report.dischargeLinks, dischDiags);
        if (provenOk > 0) {
          streams.stdout.write(
            `  ✓ ${provenOk}/${report.dischargeLinks.length} discharge proofs verified by Z3 (decidable subset)\n`,
          );
        }
        if (dischWarn > 0) {
          streams.stdout.write(
            `discharge proofs: ${dischWarn} warning(s) (partial / not-decidable, did not fail build)\n`,
          );
        }
        if (dischHard > 0) {
          streams.stderr.write(
            `discharge proofs failed: ${dischHard} hard diagnostic(s)\n`,
          );
          return 2;
        }
      }

      // v0.3 category-membership was hoisted out of the inter-stage
      // block (see above): it runs unconditionally when --verify is
      // on, since category↔member relations are intra-AST and don't
      // require multi-file resolution.

      // v0.4: property correspondence + modifies-closure.
      if (report.liskovCoverage.length > 0) {
        const pcReport = checkPropertyCorrespondence(ast, report.liskovCoverage);
        streams.stdout.write(
          `property correspondence (${pcReport.modifiesCoverage.length} parent-event(s) audited):\n`,
        );
        for (const mc of pcReport.modifiesCoverage) {
          const mark = mc.uncovered.length === 0 ? "✓" : "✗";
          const covStr =
            mc.parentModifies.length === 0
              ? "(no modifies declared)"
              : `${mc.covered.length}/${mc.parentModifies.length} covered`;
          streams.stdout.write(
            `  ${mark} ${mc.parentOwner}.${mc.parentEvent} — ${covStr}` +
              (mc.uncovered.length > 0
                ? `; uncovered: [${mc.uncovered.join(", ")}]`
                : "") +
              `\n`,
          );
        }
        for (const d of pcReport.diagnostics) {
          const loc = formatLocation(d.location);
          const msg = stripLeadingCodeTag(d.message, d.code);
          // W38/W39 — warnings unless --strict promotes them.
          const hard = isStrictHard(d.code);
          if (hard) strictHardCount += 1;
          const target = hard ? streams.stderr : streams.stdout;
          target.write(`  [${d.code}]${loc}${hard ? " (strict)" : ""} ${msg}\n`);
        }
      }

      // Phase 15: enforce --strict at the end of the inter-stage block.
      if (parsed.strict && strictHardCount > 0) {
        streams.stderr.write(
          `\nstrict mode: ${strictHardCount} inter-stage warning(s) promoted to hard failure(s)\n`,
        );
        return 2;
      }
    }
  }

  const inBase = basename(parsed.inputFile, extname(parsed.inputFile));
  const outDirAbs = resolve(parsed.outDir);
  mkdirSync(outDirAbs, { recursive: true });

  if (parsed.target === "rust") {
    const crateName = inBase.replace(/[^A-Za-z0-9_]/g, "_");
    const { cargoToml, libRs } = renderRust(ast, {
      crateName,
      target: parsed.rustNoAlloc ? "no-alloc" : "alloc",
      heaplessCapacity: parsed.rustCapacity,
      emitAsync: parsed.rustAsync,
      float: parsed.rustFloat,
    });
    const cargoPath = join(outDirAbs, "Cargo.toml");
    const srcDir = join(outDirAbs, "src");
    mkdirSync(srcDir, { recursive: true });
    const libPath = join(srcDir, "lib.rs");
    writeFileSync(cargoPath, cargoToml, "utf8");
    writeFileSync(libPath, libRs, "utf8");
    streams.stdout.write(`wrote ${cargoPath}\n`);
    streams.stdout.write(`wrote ${libPath}\n`);
  } else if (parsed.target === "c") {
    const moduleName = inBase.replace(/[^A-Za-z0-9_]/g, "_");
    const { headerH, sourceC } = renderC(ast, { module: moduleName });
    const hPath = join(outDirAbs, `${moduleName}.h`);
    const cPath = join(outDirAbs, `${moduleName}.c`);
    writeFileSync(hPath, headerH, "utf8");
    writeFileSync(cPath, sourceC, "utf8");
    streams.stdout.write(`wrote ${hPath}\n`);
    streams.stdout.write(`wrote ${cPath}\n`);
    streams.stdout.write(
      `verify with: frama-c -wp ${moduleName}.c -wp-rte\n`,
    );
  } else if (parsed.target === "tanstack") {
    const bundle = renderTanstack(ast);
    for (const f of bundle.files) {
      const p = join(outDirAbs, f.path);
      mkdirSync(join(p, ".."), { recursive: true });
      writeFileSync(p, f.content, "utf8");
      streams.stdout.write(`wrote ${p}\n`);
    }
  } else {
    const generated = renderTypeScript(ast);
    const tsPath = join(outDirAbs, `${inBase}.ts`);
    writeFileSync(tsPath, generated, "utf8");
    streams.stdout.write(`wrote ${tsPath}\n`);
  }

  if (parsed.diagram) {
    const md = composeDiagramMd(ast, inBase);
    const mdPath = join(outDirAbs, `${inBase}.md`);
    writeFileSync(mdPath, md, "utf8");
    streams.stdout.write(`wrote ${mdPath}\n`);
  }

  if (parsed.reactFlow) {
    const graph = buildReactFlowGraph(ast);
    const jsonPath = join(outDirAbs, `${inBase}.flow.json`);
    writeFileSync(jsonPath, JSON.stringify(graph, null, 2), "utf8");
    streams.stdout.write(`wrote ${jsonPath}\n`);
  }

  return 0;
}

/**
 * Build a markdown document containing all three Mermaid diagrams
 * with `\`\`\`mermaid` fences. Use-case diagrams are split per-block
 * because `renderUseCaseDiagrams` returns multiple flowcharts
 * concatenated with blank lines, and Mermaid rejects multi-graph
 * input within a single fence.
 */
function composeDiagramMd(ast: OntoFile, name: string): string {
  const parts: string[] = [];
  parts.push(`# ${name} — Onto DSL diagrams`);
  parts.push("");
  parts.push("Auto-generated from the Onto DSL source.");
  parts.push("");

  parts.push("## Type diagram");
  parts.push("");
  parts.push("```mermaid");
  parts.push(renderMermaid(ast, { kind: "types" }));
  parts.push("```");
  parts.push("");

  parts.push("## Relation diagram");
  parts.push("");
  parts.push("```mermaid");
  parts.push(renderMermaid(ast, { kind: "relations" }));
  parts.push("```");
  parts.push("");

  const useCases = renderMermaid(ast, { kind: "usecases" });
  if (useCases.trim().length > 0) {
    parts.push("## Use-case storyboards");
    parts.push("");
    const blocks = useCases.split(/\n\n(?=flowchart)/);
    for (const block of blocks) {
      parts.push("```mermaid");
      parts.push(block);
      parts.push("```");
      parts.push("");
    }
  }

  return parts.join("\n");
}

// Script entry point — only runs when this file is invoked directly
// (e.g. via `npx tsx src/cli/gen.ts`). Skipped when imported as a
// module by tests, so importing `runCli` doesn't trigger arg parsing
// against the test runner's argv. The `import.meta.url` check is the
// ESM equivalent of CommonJS's `require.main === module`.
//
// `fileURLToPath` is from `node:url`; we keep the import inline at
// the bottom because the check is the only reason we need it.
import { fileURLToPath } from "node:url";
const isMainModule =
  process.argv[1] !== undefined &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMainModule) {
  runCli(process.argv.slice(2)).then((code) => process.exit(code));
}
