/**
 * `ontodsl coverage <file.onto> [--json] [--out <path>]` — emit
 * per-type and per-event metrics about the contract surface a .onto
 * declares. The shape that matters for a regulated-industry safety
 * case:
 *
 *   - How many invariants does each type have?
 *   - How many events declare pre / post / effects / reads / writes?
 *   - How many witness tests does ontodls auto-generate?
 *
 * Default output: human-readable console table.
 * `--json [--out <path>]`: machine-readable JSON dump.
 *
 * Why this matters: the first audit question is "show me the
 * coverage." Without this command the answer is "grep the .onto and
 * count by hand"; with it, you produce a JSON artefact that lives
 * in the build pipeline next to the codegen output.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "../parser/index.js";
import { renderRustProptestsForFile } from "../codegen-rust/index.js";
import type { Declaration } from "../ast/nodes.js";

interface Streams {
  readonly stdout: { write(s: string): unknown };
  readonly stderr: { write(s: string): unknown };
}

const USAGE = `usage: ontodsl coverage <file.onto> [--json [--out <path>]]

Emit per-type and per-event contract-surface metrics. Default output
is a human-readable table on stdout. With \`--json\` (no --out), the
JSON dump goes to stdout; with \`--json --out <path>\` it's written to
the file.

Metrics emitted per type:
  - invariants            count of invariant clauses
  - events                count of events
  - events_with_pre       events that declare at least one pre clause
  - events_with_post      events that declare at least one post clause
  - events_with_effects   events that declare an \`effects:\` clause
  - events_with_modifies  events that declare \`modifies:\`
  - witness_tests         count of contract-witness tests ontodls would emit

Exit codes:
  0  success
  1  usage / argument error
  2  parse or semantic error
  3  internal error
`;

interface ParsedArgs {
  readonly inputFile: string;
  readonly outJson: boolean;
  readonly outPath: string | null;
}

function parseArgs(
  argv: readonly string[],
): ParsedArgs | { readonly error: string } {
  let inputFile: string | null = null;
  let outJson = false;
  let outPath: string | null = null;
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--help" || a === "-h") return { error: "" };
    if (a === "--json") {
      outJson = true;
      continue;
    }
    if (a === "--out") {
      const next = argv[i + 1];
      if (!next) return { error: "--out requires a path" };
      outPath = next;
      outJson = true;
      i += 1;
      continue;
    }
    if (a && a.startsWith("--")) return { error: `unknown flag: ${a}` };
    if (inputFile !== null) {
      return { error: `multiple input files` };
    }
    inputFile = a ?? null;
  }
  if (!inputFile) return { error: "missing input .onto file" };
  return { inputFile, outJson, outPath };
}

interface TypeMetric {
  readonly name: string;
  readonly stereotype: string;
  readonly invariants: number;
  readonly events: number;
  readonly events_with_pre: number;
  readonly events_with_post: number;
  readonly events_with_effects: number;
  readonly events_with_modifies: number;
  readonly events_with_reads_writes: number;
  readonly properties: number;
  readonly witness_tests: number;
}

interface CoverageReport {
  readonly file: string;
  readonly types: readonly TypeMetric[];
  readonly totals: {
    readonly types: number;
    readonly invariants: number;
    readonly events: number;
    readonly witness_tests: number;
  };
}

function stereotypeOf(d: Declaration): string {
  switch (d.kind) {
    case "KindDecl": return "kind";
    case "SubkindDecl": return "subkind";
    case "RoleDecl": return "role";
    case "RelatorDecl": return "relator";
    case "CategoryDecl": return "category";
    case "MixinDecl": return "mixin";
    case "RoleMixinDecl": return "role-mixin";
    case "ModeDecl": return "mode";
    case "QualityDecl": return "quality";
    case "CollectiveDecl": return "collective";
    case "QuantityDecl": return "quantity";
    case "HappeningDecl": return "happening";
    case "AgentDecl": return "agent";
    case "CommitmentDecl": return "commitment";
    case "UseCaseDecl": return "use-case";
    default: return "other";
  }
}

const BODY_BEARING = new Set([
  "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
  "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
  "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);

export async function runCoverage(
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
  let hard = 0;
  for (const e of errors) {
    const code = (e as { code?: string }).code ?? "?";
    if (!code.startsWith("W")) {
      hard += 1;
      streams.stderr.write(`  [${code}] ${e.message}\n`);
    }
  }
  if (hard > 0) return 2;
  if (!ast) {
    streams.stderr.write("internal: no AST\n");
    return 3;
  }

  // Re-use the witness emitter for the per-type count. We re-emit
  // per-type by parsing the proptest output's section markers.
  const { testCount: totalWitnesses, proptestsRs } = renderRustProptestsForFile(ast);
  const witnessByType = countWitnessesByType(proptestsRs);

  const types: TypeMetric[] = [];
  let invTotal = 0;
  let evTotal = 0;
  for (const d of ast.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("identity" in d)) continue;
    const invariants = "invariants" in d ? d.invariants.length : 0;
    const events = "events" in d ? d.events.length : 0;
    const eventsWithPre = "events" in d
      ? d.events.filter((e) => e.pre.length > 0).length : 0;
    const eventsWithPost = "events" in d
      ? d.events.filter((e) => e.post.length > 0).length : 0;
    const eventsWithEffects = "events" in d
      ? d.events.filter((e) => e.effects.length > 0).length : 0;
    const eventsWithModifies = "events" in d
      ? d.events.filter((e) => e.modifies.length > 0).length : 0;
    const eventsWithReadsWrites = "events" in d
      ? d.events.filter((e) => e.reads.length > 0 || e.writes.length > 0).length : 0;
    const properties = "properties" in d ? d.properties.length : 0;
    invTotal += invariants;
    evTotal += events;
    types.push({
      name: d.name,
      stereotype: stereotypeOf(d),
      invariants,
      events,
      events_with_pre: eventsWithPre,
      events_with_post: eventsWithPost,
      events_with_effects: eventsWithEffects,
      events_with_modifies: eventsWithModifies,
      events_with_reads_writes: eventsWithReadsWrites,
      properties,
      witness_tests: witnessByType.get(d.name) ?? 0,
    });
  }

  const report: CoverageReport = {
    file: parsed.inputFile,
    types,
    totals: {
      types: types.length,
      invariants: invTotal,
      events: evTotal,
      witness_tests: totalWitnesses,
    },
  };

  if (parsed.outJson) {
    const json = JSON.stringify(report, null, 2) + "\n";
    if (parsed.outPath) {
      writeFileSync(resolve(parsed.outPath), json, "utf8");
      streams.stdout.write(`wrote ${resolve(parsed.outPath)}\n`);
    } else {
      streams.stdout.write(json);
    }
    return 0;
  }

  // Human table on stdout.
  streams.stdout.write(`coverage report for ${parsed.inputFile}\n`);
  streams.stdout.write(
    `${"type".padEnd(24)} ${"stereotype".padEnd(11)}  invs  evts  pre  post  effs  mods  wit\n`,
  );
  streams.stdout.write(`${"─".repeat(80)}\n`);
  for (const t of types) {
    streams.stdout.write(
      `${t.name.padEnd(24)} ${t.stereotype.padEnd(11)}  ` +
        `${String(t.invariants).padStart(4)}  ` +
        `${String(t.events).padStart(4)}  ` +
        `${String(t.events_with_pre).padStart(3)}  ` +
        `${String(t.events_with_post).padStart(4)}  ` +
        `${String(t.events_with_effects).padStart(4)}  ` +
        `${String(t.events_with_modifies).padStart(4)}  ` +
        `${String(t.witness_tests).padStart(3)}\n`,
    );
  }
  streams.stdout.write(`${"─".repeat(80)}\n`);
  streams.stdout.write(
    `${"totals".padEnd(36)}  ` +
      `${String(invTotal).padStart(4)}  ` +
      `${String(evTotal).padStart(4)}  ` +
      `${"-".padStart(3)}  ${"-".padStart(4)}  ${"-".padStart(4)}  ${"-".padStart(4)}  ` +
      `${String(totalWitnesses).padStart(3)}\n`,
  );
  return 0;
}

/**
 * Parse the emitted proptest module text for `// ─── <Name> ───`
 * section headers, then count the `#[test]` lines following each.
 * Cheap text scan; avoids re-walking the AST.
 */
function countWitnessesByType(proptestsRs: string): Map<string, number> {
  const out = new Map<string, number>();
  if (proptestsRs.length === 0) return out;
  const sectionRe = /\/\/ ─── (\S+) ─/g;
  const matches: { name: string; start: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = sectionRe.exec(proptestsRs)) !== null) {
    matches.push({ name: m[1]!, start: m.index });
  }
  for (let i = 0; i < matches.length; i += 1) {
    const end = i + 1 < matches.length ? matches[i + 1]!.start : proptestsRs.length;
    const section = proptestsRs.slice(matches[i]!.start, end);
    const count = (section.match(/#\[test\]/g) ?? []).length;
    out.set(matches[i]!.name, count);
  }
  return out;
}
