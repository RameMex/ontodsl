/**
 * `ontodsl explain <code>` — print the human-readable manual entry
 * for an ontodls diagnostic code (S## or W##).
 *
 * Purpose: when an AI is iterating against the verify loop, the bare
 * code + message isn't always enough to suggest a fix. This catalog
 * gives the AI (and human users) a description, the typical cause,
 * a wrong example, the corrected version, and a one-line "fix
 * recipe". The AI can include `explain` output in its prompt chain
 * to short-circuit understanding.
 *
 * Coverage is intentionally not exhaustive — only the diagnostic
 * codes actually emitted by the current semantic + LSP layers are
 * documented. Unknown codes get a generic "not yet documented"
 * response with a pointer to the source.
 */
export interface ExplainEntry {
    readonly code: string;
    readonly title: string;
    readonly category: "structural" | "type" | "lsp" | "advisory";
    readonly description: string;
    readonly wrong?: string;
    readonly right?: string;
    readonly fix: string;
}
export interface ExplainStreams {
    readonly stdout: {
        write(s: string): void;
    };
    readonly stderr: {
        write(s: string): void;
    };
}
/**
 * Implementation of `ontodsl explain <code>`. Returns the exit code.
 * Pure function over the catalog so tests can call it without a real
 * process.
 */
export declare function runExplain(args: readonly string[], streams: ExplainStreams): number;
/** Programmatic accessor used by tests + the AI feedback loop. */
export declare function getExplainEntry(code: string): ExplainEntry | undefined;
export declare function listKnownCodes(): readonly string[];
//# sourceMappingURL=explain.d.ts.map