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
interface Streams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
export declare function runManifest(argv: readonly string[], streams: Streams): Promise<number>;
export {};
//# sourceMappingURL=manifest.d.ts.map