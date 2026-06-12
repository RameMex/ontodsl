/**
 * Phase 17 / Paso 5 day 4 — Schema migration tooling.
 *
 * `diffOnto(oldAst, newAst)` walks two parsed `.onto` files and
 * reports every observable change, classified into three buckets:
 *
 *   - BREAKING — consumers of the OLD file will fail to compile / run
 *                against the NEW file. Type removed, property removed,
 *                property type changed in an incompatible direction,
 *                event signature changed, pre/post/invariant clauses
 *                modified (treated as breaking by default — without a
 *                Z3 implication check we can't prove "strengthened
 *                pre" is breaking vs "weakened post" is breaking).
 *
 *   - ADDITIVE — new in the NEW file but not in the OLD. Adds a type
 *                / property / event / clause without removing
 *                anything the consumer relied on.
 *
 *   - INTERNAL — present in both, no observable structural change at
 *                the API surface (e.g. reordered declarations, comment
 *                changes — though comments are stripped by parser).
 *
 * Why this matters: when an upstream `.onto` library bumps versions,
 * the consumer wants to know "what do I need to update in my code?"
 * Answer: the diff's BREAKING list. ADDITIVE changes are safe to
 * adopt incrementally.
 *
 * v1 limitations (deferred to day 5+):
 *   - No rename detection — a property renamed from `voltage_v` to
 *     `voltage` shows as (removed voltage_v, added voltage). Lift:
 *     heuristic match on type + similar name + invariant overlap.
 *   - No Z3-backed pre/post implication check — all clause changes
 *     are BREAKING by default. Lift: integrate with lspCheck.ts
 *     to detect "weakened pre" / "strengthened post" as safe.
 *   - No commitment / use-case / happening diff (only body-bearing
 *     decls). Trivial to add when needed.
 */
import type { OntoFile } from "../ast/nodes.js";
export type Classification = "BREAKING" | "ADDITIVE" | "INTERNAL";
export type DiffEntry = {
    readonly kind: "type-added";
    readonly name: string;
} | {
    readonly kind: "type-removed";
    readonly name: string;
} | {
    readonly kind: "property-added";
    readonly typeName: string;
    readonly propertyName: string;
    readonly propertyType: string;
} | {
    readonly kind: "property-removed";
    readonly typeName: string;
    readonly propertyName: string;
} | {
    readonly kind: "property-type-changed";
    readonly typeName: string;
    readonly propertyName: string;
    readonly oldType: string;
    readonly newType: string;
} | {
    readonly kind: "event-added";
    readonly typeName: string;
    readonly eventName: string;
} | {
    readonly kind: "event-removed";
    readonly typeName: string;
    readonly eventName: string;
} | {
    readonly kind: "event-signature-changed";
    readonly typeName: string;
    readonly eventName: string;
    readonly description: string;
} | {
    readonly kind: "invariant-added";
    readonly typeName: string;
    readonly expression: string;
} | {
    readonly kind: "invariant-removed";
    readonly typeName: string;
    readonly expression: string;
} | {
    readonly kind: "pre-added";
    readonly typeName: string;
    readonly eventName: string;
    readonly expression: string;
} | {
    readonly kind: "pre-removed";
    readonly typeName: string;
    readonly eventName: string;
    readonly expression: string;
} | {
    readonly kind: "post-added";
    readonly typeName: string;
    readonly eventName: string;
    readonly expression: string;
} | {
    readonly kind: "post-removed";
    readonly typeName: string;
    readonly eventName: string;
    readonly expression: string;
};
export type ClassifiedDiff = DiffEntry & {
    readonly classification: Classification;
    readonly rationale: string;
};
export interface DiffReport {
    readonly schemaVersion: "ontodls-diff/1";
    readonly summary: {
        readonly breaking: number;
        readonly additive: number;
        readonly internal: number;
        readonly total: number;
    };
    readonly changes: readonly ClassifiedDiff[];
}
export declare function diffOnto(oldAst: OntoFile, newAst: OntoFile): DiffReport;
/** Render a one-line summary of a diff entry. */
export declare function renderEntry(c: ClassifiedDiff): string;
/**
 * Render a human-readable report. Groups by classification with the
 * BREAKING items first (that's what reviewers scan for).
 */
export declare function renderHumanReport(report: DiffReport): string;
//# sourceMappingURL=diff.d.ts.map