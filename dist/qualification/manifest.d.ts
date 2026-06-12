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
import { type RenderRustOptions } from "../codegen-rust/index.js";
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
    readonly generatedAt: string;
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
export declare function buildManifest(rootPath: string, opts?: ManifestOptions): ReproducibilityManifest;
/** Serialise a manifest to a stable JSON string. Key ordering is
 * preserved because we use JSON.stringify with the explicit object
 * field ordering above; if a future change adds a field, place it
 * at the end of its sub-object to avoid breaking older tools. */
export declare function serializeManifest(m: ReproducibilityManifest): string;
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
export declare function checkDeterminism(rootPath: string, opts?: ManifestOptions): DeterminismCheckResult;
//# sourceMappingURL=manifest.d.ts.map