/**
 * Phase Q6 / Paso 6 — Tool qualification scaffolding.
 *
 * This module exists to make ontodls's build process auditable for
 * regulated-industry pipelines (DO-330 tool qualification, IEC 62304
 * software-of-unknown-provenance review, ISO 26262 Part 8). The two
 * artefacts a tool-qualification reviewer asks for first:
 *
 *   1) **Build determinism** — the same input always produces the
 *      same output bytes. If `renderRust(ast)` can return different
 *      strings on different machines / runs / wall-clock times, no
 *      version-controlled audit trail is meaningful.
 *
 *   2) **Reproducibility manifest** — a JSON document recording the
 *      input source hash, the ontodls version, the codegen options,
 *      and the output content hashes. Goes into the project's
 *      configuration-management baseline; auditors compare it to
 *      `manifest.json` produced from the same .onto a year later to
 *      detect drift (in the codegen, the input file, or both).
 *
 * Out of scope for v1:
 *   - DO-330 classification paperwork (T2/TCL2 declaration, tool
 *     qualification plan, tool operational requirements). Those are
 *     human-authored documents; this module produces the technical
 *     evidence they reference.
 *   - Cross-tool requirements traceability (Polarion / DOORS
 *     integration). Future work; manifest format is designed to be
 *     a self-contained leaf node.
 */

import { createHash } from "node:crypto";
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "../parser/index.js";
import { parseFile } from "../parser/multiFile.js";
import { renderRust, type RenderRustOptions } from "../codegen-rust/index.js";
import { renderC } from "../codegen-c/index.js";
import { renderTypeScript } from "../codegen/index.js";
import { renderRustProptestsForFile } from "../codegen-rust/index.js";
import type { OntoFile } from "../ast/index.js";

/**
 * Read the ontodls package version from package.json. Resolved
 * lazily because the manifest module is itself loaded from
 * `dist/qualification/manifest.js` and the package.json sits two
 * levels up.
 *
 * Falls back to `"unknown"` on any read/parse failure rather than
 * throwing — a manifest with `"ontodlsVersion": "unknown"` is
 * still useful (the auditor will flag it as needing attention).
 */
function readOwnVersion(): string {
  // Walk up from this module's expected dist path until we find
  // a package.json with name "ontodsl".
  const candidates = [
    resolve(process.cwd(), "package.json"),
    resolve(process.cwd(), "..", "package.json"),
  ];
  for (const p of candidates) {
    if (!existsSync(p)) continue;
    try {
      const pkg = JSON.parse(readFileSync(p, "utf8")) as {
        name?: string;
        version?: string;
      };
      if (pkg.name === "ontodsl" && pkg.version) return pkg.version;
    } catch {
      // ignore parse errors and try the next candidate
    }
  }
  return "unknown";
}

const ONTODLS_VERSION = readOwnVersion();

export interface ManifestOptions {
  /** Codegen target to record + hash. Default: emit all three. */
  readonly targets?: readonly ("ts" | "rust" | "c")[];
  /** Resolve `import "./..."` declarations. Default: false. */
  readonly resolveImports?: boolean;
  /** Pass-through to `renderRust` when the rust target is on. */
  readonly rustOptions?: Omit<RenderRustOptions, "crateName">;
  /** Module name used for the C target. Default: derived from input. */
  readonly cModule?: string;
  /** Crate name used for the Rust target. Default: derived from input. */
  readonly rustCrate?: string;
  /** Include the contract-witness test module in the rust output hash. Default: false. */
  readonly includeWitnessInRustHash?: boolean;
}

/**
 * A manifest of every input and output a single codegen invocation
 * produces, hashed for byte-level comparability. The shape is
 * append-only — fields added in future ontodls versions appear in
 * manifests from those versions, and an older auditor's diff tool
 * needs to know which fields existed when.
 */
export interface ReproducibilityManifest {
  readonly schemaVersion: "ontodls-manifest/1";
  readonly generatedAt: string; // ISO-8601 UTC date (no time-of-day; reproducible day-by-day)
  readonly tool: {
    readonly name: "ontodls";
    readonly version: string;
  };
  readonly inputs: {
    readonly rootFile: string;
    readonly rootSha256: string;
    /**
     * When `resolveImports` is true, the resolver loaded these
     * additional files. Each is hashed independently so a change
     * to ANY of them invalidates the manifest.
     */
    readonly transitiveFiles?: readonly {
      readonly path: string;
      readonly sha256: string;
    }[];
  };
  readonly options: {
    readonly resolveImports: boolean;
    readonly targets: readonly string[];
    readonly rust?: Omit<RenderRustOptions, "crateName">;
    readonly rustCrate?: string;
    readonly cModule?: string;
  };
  readonly outputs: readonly ManifestOutput[];
}

export interface ManifestOutput {
  readonly target: "ts" | "rust" | "c" | "rust-witness";
  /** Human-readable artefact identifier (e.g. "lib.rs", "module.h"). */
  readonly artefact: string;
  /** Output size in bytes. */
  readonly bytes: number;
  readonly sha256: string;
}

/**
 * Build a reproducibility manifest for the given input. The output
 * is intentionally deterministic across runs (no wall-clock time of
 * day, no random IDs) so two manifests for the same input are
 * byte-equal.
 *
 * `generatedAt` records only the calendar date in UTC — fine for
 * change-control purposes ("the build that ran on 2026-05-20") and
 * doesn't break determinism within a single day.
 */
export function buildManifest(
  rootPath: string,
  opts: ManifestOptions = {},
): ReproducibilityManifest {
  const absRoot = resolve(rootPath);
  if (!existsSync(absRoot)) {
    throw new Error(`manifest: input file not found: ${absRoot}`);
  }

  const targets = opts.targets ?? ["ts", "rust", "c"];
  const resolveImports = opts.resolveImports ?? false;

  let ast: OntoFile;
  const transitive: { path: string; sha256: string }[] = [];

  if (resolveImports) {
    const r = parseFile(absRoot);
    if (!r.ast) {
      throw new Error(
        `manifest: parse failed for ${absRoot}: ${JSON.stringify(r.errors)}`,
      );
    }
    ast = r.ast;
    for (const f of r.loadedFiles) {
      if (f === absRoot) continue;
      transitive.push({
        path: f,
        sha256: hashFile(f),
      });
    }
  } else {
    const source = readFileSync(absRoot, "utf8");
    const r = parse(source);
    if (!r.ast) {
      throw new Error(
        `manifest: parse failed for ${absRoot}: ${JSON.stringify(r.errors)}`,
      );
    }
    ast = r.ast;
  }

  const outputs: ManifestOutput[] = [];
  const inputBaseName = absRoot
    .replace(/\\/g, "/")
    .split("/")
    .pop()!
    .replace(/\.onto$/i, "");
  const safeName = inputBaseName.replace(/[^A-Za-z0-9_]/g, "_");
  const rustCrate = opts.rustCrate ?? safeName;
  const cModule = opts.cModule ?? safeName;

  if (targets.includes("ts")) {
    const out = renderTypeScript(ast);
    outputs.push({
      target: "ts",
      artefact: `${safeName}.ts`,
      bytes: Buffer.byteLength(out, "utf8"),
      sha256: hashString(out),
    });
  }

  if (targets.includes("rust")) {
    const rustOpts = { crateName: rustCrate, ...(opts.rustOptions ?? {}) };
    const { cargoToml, libRs } = renderRust(ast, rustOpts);
    outputs.push({
      target: "rust",
      artefact: "Cargo.toml",
      bytes: Buffer.byteLength(cargoToml, "utf8"),
      sha256: hashString(cargoToml),
    });
    const finalLib = opts.includeWitnessInRustHash
      ? libRs + "\n\n" + renderRustProptestsForFile(ast, rustOpts).proptestsRs
      : libRs;
    outputs.push({
      target: "rust",
      artefact: "src/lib.rs",
      bytes: Buffer.byteLength(finalLib, "utf8"),
      sha256: hashString(finalLib),
    });
    if (opts.includeWitnessInRustHash) {
      const w = renderRustProptestsForFile(ast, rustOpts);
      outputs.push({
        target: "rust-witness",
        artefact: "contract_tests count",
        bytes: w.testCount, // not byte-size; semantically "test count"
        sha256: hashString(w.proptestsRs),
      });
    }
  }

  if (targets.includes("c")) {
    const { headerH, sourceC } = renderC(ast, { module: cModule });
    outputs.push({
      target: "c",
      artefact: `${cModule}.h`,
      bytes: Buffer.byteLength(headerH, "utf8"),
      sha256: hashString(headerH),
    });
    outputs.push({
      target: "c",
      artefact: `${cModule}.c`,
      bytes: Buffer.byteLength(sourceC, "utf8"),
      sha256: hashString(sourceC),
    });
  }

  const manifest: ReproducibilityManifest = {
    schemaVersion: "ontodls-manifest/1",
    generatedAt: new Date().toISOString().slice(0, 10), // YYYY-MM-DD UTC
    tool: { name: "ontodls", version: ONTODLS_VERSION },
    inputs: {
      rootFile: absRoot,
      rootSha256: hashFile(absRoot),
      ...(transitive.length > 0 ? { transitiveFiles: transitive } : {}),
    },
    options: {
      resolveImports,
      targets: [...targets],
      ...(opts.rustOptions ? { rust: opts.rustOptions } : {}),
      ...(opts.rustCrate ? { rustCrate: opts.rustCrate } : {}),
      ...(opts.cModule ? { cModule: opts.cModule } : {}),
    },
    outputs,
  };
  return manifest;
}

/** Serialise a manifest to a stable JSON string. Key ordering is
 * preserved because we use JSON.stringify with the explicit object
 * field ordering above; if a future change adds a field, place it
 * at the end of its sub-object to avoid breaking older tools. */
export function serializeManifest(m: ReproducibilityManifest): string {
  return JSON.stringify(m, null, 2) + "\n";
}

// ─── Determinism check ─────────────────────────────────────────────

/**
 * Run codegen twice and compare output byte-for-byte. Returns
 * `{ deterministic: true }` when identical; otherwise returns the
 * first artefact that differs along with both hashes.
 *
 * This is the executable evidence for "rebuilding from the same
 * .onto produces the same Rust/C/TS." A regulated client puts the
 * output of this check into their tool-qualification expedient.
 */
export interface DeterminismCheckResult {
  readonly deterministic: boolean;
  readonly firstDifference?: {
    readonly artefact: string;
    readonly hashA: string;
    readonly hashB: string;
  };
}

export function checkDeterminism(
  rootPath: string,
  opts: ManifestOptions = {},
): DeterminismCheckResult {
  const m1 = buildManifest(rootPath, opts);
  const m2 = buildManifest(rootPath, opts);
  for (let i = 0; i < m1.outputs.length; i += 1) {
    const a = m1.outputs[i]!;
    const b = m2.outputs[i]!;
    if (a.sha256 !== b.sha256) {
      return {
        deterministic: false,
        firstDifference: {
          artefact: a.artefact,
          hashA: a.sha256,
          hashB: b.sha256,
        },
      };
    }
  }
  return { deterministic: true };
}

// ─── Hashing helpers ──────────────────────────────────────────────

function hashString(s: string): string {
  return createHash("sha256").update(s, "utf8").digest("hex");
}

function hashFile(path: string): string {
  // Use createHash on the file contents directly so directory
  // metadata + mtime / inode don't affect the hash.
  const contents = readFileSync(path);
  return createHash("sha256").update(contents).digest("hex");
}
