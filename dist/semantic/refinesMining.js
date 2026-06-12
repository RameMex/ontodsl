/**
 * Phase 18 (Bloque 2 v0) — mine `// refines:` annotations from .onto sources.
 *
 * The inter-stage refinement verifier needs to know which event refines
 * which upstream commitment. In v0 this lives as a free-form line
 * comment immediately above (or on the same logical block as) an event:
 *
 *     // refines: insulin_pump_discovery::SafeDoseCommitment
 *     event deliverInsulin(dose: Real): Real {
 *       pre:  ...;
 *       post: ...;
 *     }
 *
 * Multiple targets in one annotation are allowed (comma-separated):
 *
 *     // refines: ns_a::CommA, ns_b::CommB
 *
 * The unqualified form (`refines: CommA`) is also accepted — resolution
 * falls back to "any CommitmentDecl with this name in the merged AST".
 *
 * Why source-text mining and not a first-class grammar clause:
 *   v0 has to ship on top of `.onto` the LLM already generates. The
 *   pattern Sonnet uses without prompting is `// refines: …::Name`. A
 *   first-class `refines:` clause (v1) will replace this miner; until
 *   then the regex below is deliberately tight so the miner cannot
 *   confuse `refines:` in OCL strings (single-quoted) with an actual
 *   annotation.
 *
 * Scope of v0 miner:
 *   - Skips any comment inside a quoted string region.
 *   - Looks back up to LOOK_BEHIND_LINES non-blank lines from each
 *     event declaration. This works for the patterns Sonnet produces
 *     (annotation in the heading comment-block) and for hand-written
 *     code that puts the annotation right above the event.
 *   - Tracks the enclosing type-decl block by name so each event
 *     gets reported as `<Type>.<eventName>`. Namespace is the file's
 *     `namespace X;` header.
 *
 * Out of scope (caller's job):
 *   - Validating that the named commitment exists in the merged AST.
 *   - Z3 implication proof. v0 reports coverage only.
 */
import { readFileSync } from "node:fs";
/**
 * How many non-blank lines above an event declaration to scan when
 * searching for its `// refines:` annotation. 30 covers Sonnet's
 * EARS-style multi-line comment blocks; smaller and the miner would
 * miss them, larger and it might attach a comment from an unrelated
 * preceding event.
 */
const LOOK_BEHIND_LINES = 30;
/**
 * Scan `loadedFiles` and return every `// refines: …` annotation
 * attached to an event declaration. Files are processed independently
 * — there is no cross-file state.
 */
export function mineRefinesAnnotations(loadedFiles) {
    const out = [];
    for (const path of loadedFiles) {
        let text;
        try {
            text = readFileSync(path, "utf8");
        }
        catch {
            continue;
        }
        mineFile(path, text, out);
    }
    return out;
}
// ─── Per-file scanner ───────────────────────────────────────────────────
function mineFile(path, source, out) {
    const lines = source.split(/\r?\n/);
    // 1. Namespace from the file header.
    const namespace = findNamespace(lines);
    if (namespace === null)
        return; // not a well-formed file; skip silently
    // 2. Walk lines tracking the enclosing type-decl block. We rely on
    // brace balancing: when a type-decl line is seen, push its name; when
    // a closing brace returns the depth to that decl's opening depth,
    // pop. The .onto files we mine are guaranteed brace-balanced
    // (semantic+Z3 verified) so this is reliable.
    let braceDepth = 0;
    // Stack of (name, depthAtOpen) frames for nested blocks. In practice
    // the .onto grammar doesn't nest type-decls, but events themselves
    // open `{` — we DON'T push event frames, only type-decl frames.
    const typeStack = [];
    for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        const stripped = stripQuotedRegions(line);
        // Detect a new top-level (or any) type-decl opening on this line.
        // The grammar uses these head keywords; matching whichever comes
        // first lets us track nested commitments / use-cases too.
        const typeOpen = matchTypeDeclOpen(stripped);
        // Detect event declaration on this line.
        const evtMatch = matchEventDecl(stripped);
        // If both appear on one line, type-decl wins for the frame
        // (an `event` inside a type-decl head line would be syntactically
        // invalid). This is paranoid — the grammar never emits such a
        // line — but it keeps the scanner robust.
        if (typeOpen) {
            typeStack.push({ name: typeOpen, openDepth: braceDepth });
        }
        else if (evtMatch && typeStack.length > 0) {
            const owner = typeStack[typeStack.length - 1];
            const targets = scanLookBehind(lines, i);
            if (targets.length > 0) {
                out.push({
                    file: path,
                    namespace,
                    ownerType: owner.name,
                    eventName: evtMatch,
                    targets,
                    eventLine: i + 1, // 1-based
                    // commentLine is the line where the comment was found —
                    // approximate using i (look-behind goes upward; we record
                    // the event line itself if not found, but scanLookBehind
                    // only returns non-empty when a comment WAS found).
                    commentLine: findRefinesCommentLine(lines, i),
                });
            }
        }
        // Update brace depth using the stripped line so quoted braces in
        // OCL string literals don't throw off the count.
        braceDepth += countBraces(stripped);
        // Pop any type-decl frames whose blocks just closed.
        while (typeStack.length > 0 &&
            braceDepth <= typeStack[typeStack.length - 1].openDepth) {
            typeStack.pop();
        }
    }
}
// ─── Line-level patterns ────────────────────────────────────────────────
/** First non-blank `namespace X;` line. */
function findNamespace(lines) {
    for (const line of lines) {
        const m = /^\s*namespace\s+([A-Za-z_][A-Za-z0-9_]*)\s*;/.exec(line);
        if (m)
            return m[1];
    }
    return null;
}
/**
 * Match a type-decl opening on this line. Returns the type's name if a
 * head keyword + identifier is on the line, else null. We tolerate
 * `<keyword> Name specializes Parent {` / `<keyword> Name of Bearer {` /
 * `commitment Name debitor: A creditor: B {` — for each we extract just
 * the immediate identifier after the keyword.
 */
function matchTypeDeclOpen(line) {
    const re = /^\s*(?:kind|subkind|role|relator|category|mixin|role-mixin|mode|quality|collective|quantity|happening|agent|commitment|use-case|phaseGroup)\s+([A-Za-z_][A-Za-z0-9_]*)\b/;
    const m = re.exec(line);
    return m ? m[1] : null;
}
/**
 * Match an event declaration on this line — returns the event name if
 * matched, else null. Tolerates `override event …` and arbitrary
 * params/return-type / line continuation.
 */
function matchEventDecl(line) {
    const re = /^\s*(?:override\s+)?event\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/;
    const m = re.exec(line);
    return m ? m[1] : null;
}
// ─── Look-behind ────────────────────────────────────────────────────────
/**
 * Walk up the lines above `eventLineIdx` and collect targets from
 * `refines:` comments belonging to THIS event's doc-block.
 *
 * Stopping rule (critical for correctness — see comment below):
 *   - Stop at any line that is neither blank nor a `//` line comment.
 *
 *   A line that is OCL (an invariant clause, a property declaration,
 *   a `pre:` clause, etc.) means the doc-block of the current event
 *   has ended. Anything BEYOND that line — including its own
 *   `// refines:` comments — belongs to a different artefact (an
 *   invariant, a previous event's body, …) and MUST NOT be attributed
 *   to this event. Without this rule, an event would inherit
 *   `refines:` annotations placed above invariants that immediately
 *   precede it.
 *
 *   Two consecutive blank lines also stop the scan; one blank between
 *   doc and event is the common pattern Sonnet emits, but two means
 *   we walked into preceding-decl territory.
 */
function scanLookBehind(lines, eventLineIdx) {
    const collected = [];
    let blanksRun = 0;
    for (let k = 1; k <= LOOK_BEHIND_LINES && eventLineIdx - k >= 0; k += 1) {
        const line = lines[eventLineIdx - k];
        const trimmed = line.trim();
        if (trimmed.length === 0) {
            blanksRun += 1;
            if (blanksRun >= 2)
                break;
            continue;
        }
        blanksRun = 0;
        // Hard boundary: non-comment line means the doc-block ended.
        if (!trimmed.startsWith("//"))
            break;
        // Each comment line may carry multiple refines: phrases on it.
        extractTargetsFromComment(trimmed, collected);
    }
    // Reverse so the order matches textual top-to-bottom in the file.
    return dedupeTargets(collected.reverse());
}
/** Same scan as scanLookBehind but returns the first hit's line number. */
function findRefinesCommentLine(lines, eventLineIdx) {
    let blanksRun = 0;
    for (let k = 1; k <= LOOK_BEHIND_LINES && eventLineIdx - k >= 0; k += 1) {
        const line = lines[eventLineIdx - k];
        const trimmed = line.trim();
        if (trimmed.length === 0) {
            blanksRun += 1;
            if (blanksRun >= 2)
                break;
            continue;
        }
        blanksRun = 0;
        if (!trimmed.startsWith("//"))
            break;
        if (REFINES_RE.test(trimmed))
            return eventLineIdx - k + 1;
    }
    return eventLineIdx + 1;
}
/**
 * Dedupe targets by (namespace, name) — Sonnet sometimes mentions the
 * same commitment in multiple comment lines of an event's doc-block
 * (e.g. "// Refines: X" once, then "// Discharges: X" later that the
 * miner doesn't see, but the user may also write "// refines: X"
 * twice). Each unique target is reported once.
 */
function dedupeTargets(targets) {
    const seen = new Set();
    const out = [];
    for (const t of targets) {
        const key = `${t.namespace ?? ""}::${t.name}${t.eventName ? "." + t.eventName : ""}`;
        if (seen.has(key))
            continue;
        seen.add(key);
        out.push(t);
    }
    return out;
}
// ─── refines: parsing ───────────────────────────────────────────────────
/**
 * Matches `refines:` followed by a comma-separated list of qualified
 * or unqualified names. The leading `[refR]efines` is intentionally
 * case-insensitive on the first letter only — Sonnet always uses
 * lower-case but we hedge.
 */
const REFINES_RE = /\brefines\s*:\s*([^\n]+)/i;
// Non-anchored at the end on purpose: a target token may be followed
// by trailing notes like "(detection side)" or "— see RFC" that the
// LLM tacks on. We match the leading qualified-name and ignore the
// rest of the comma-separated segment.
//
// Three accepted shapes (v0.2):
//   `<ns>::<Type>.<eventName>`   — Liskov / decomposition refinement
//   `<ns>::<Name>`               — commitment / category discharge
//   `<Name>`                     — unqualified, v0 rejects these
const QNAME_RE = /^([A-Za-z_][A-Za-z0-9_]*)(?:::([A-Za-z_][A-Za-z0-9_]*))?(?:\.([A-Za-z_][A-Za-z0-9_]*))?/;
/**
 * Extract `<ns>::<Name>` and `<Name>` tokens from a refines list.
 * Tokens are comma-separated. We strip trailing punctuation that
 * Sonnet occasionally adds (period, parenthesis remnants).
 */
function extractTargetsFromComment(commentLine, out) {
    const m = REFINES_RE.exec(commentLine);
    if (!m)
        return;
    const list = m[1];
    // Strip any trailing comment-decoration ("// refines: X — note") so
    // we only parse the qualified-name list.
    const beforeNote = list.split(/\s+(?:—|--|–|—)\s+/)[0] ?? list;
    for (const raw of beforeNote.split(",")) {
        const tok = raw.trim();
        if (tok.length === 0)
            continue;
        // QNAME_RE is non-anchored at the end: captures the leading
        // qualified-name token (with optional .eventName suffix),
        // ignoring trailing note text the LLM may have added.
        const qm = QNAME_RE.exec(tok);
        if (!qm)
            continue;
        const a = qm[1];
        const b = qm[2];
        const evt = qm[3] ?? null;
        // v0 ACCEPTS QUALIFIED REFERENCES ONLY.
        //
        // In practice the LLM writes "Refines:" comments in two distinct
        // modes — formal traceability ("Refines: ns_a::Name") and
        // free-form English ("Refines: supports deliverInsulin and Y").
        // Without the `::` we cannot tell them apart structurally, so
        // accepting bare identifiers produces a flood of false positives.
        // The playbook explicitly recommends qualified names; v1 can add
        // a relaxed mode behind a flag if real bare-name annotations
        // start appearing in the wild.
        if (!b)
            continue;
        out.push({ namespace: a, name: b, eventName: evt });
    }
}
// ─── Helpers ────────────────────────────────────────────────────────────
/**
 * Strip single-quoted OCL string literals from a line so quoted braces
 * (e.g. `'FAULT_REASON: {}'`) don't perturb brace-depth tracking.
 */
function stripQuotedRegions(line) {
    return line.replace(/'(?:[^'\\]|\\.)*'/g, "''");
}
function countBraces(line) {
    let net = 0;
    for (const ch of line) {
        if (ch === "{")
            net += 1;
        else if (ch === "}")
            net -= 1;
    }
    return net;
}
//# sourceMappingURL=refinesMining.js.map