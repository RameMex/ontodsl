/**
 * C+ACSL event wrapper emission.
 *
 * For each event on a body-bearing decl, emit a wrapper function
 * with ACSL preconditions / assigns / postconditions:
 *
 *   /*@
 *     requires \valid(self);
 *     requires <pre1>;
 *     requires <pre2>;
 *     assigns self->field_a, self->field_b;
 *     ensures \result == 0 ==> inv_<TypeName>(self);
 *     ensures \result != 0 ==> *self == \old(*self);  // rollback
 *   *\/
 *   int <type>_<event>_wrapped(
 *       <TypeName>* self,
 *       <param1_type> p1,
 *       ...,
 *       int (*impl_fn)(<TypeName>*, ...),
 *       const char** out_msg
 *   );
 *
 * The body:
 *   - checks each `pre:` clause via runtime translation;
 *   - snapshots `*self` for rollback (struct assignment copies);
 *   - calls `impl_fn`;
 *   - checks each `post:` clause + class invariant;
 *   - on any failure, restores from snapshot and returns 1 with
 *     the first failing message in `*out_msg`.
 *
 * This mirrors the Rust event-wrapper behaviour and gives Frama-C
 * the contract envelope it needs to verify against the impl.
 */
import { cFieldName, cFieldDecl } from "./types.js";
import { translateToAcsl, translateToC, snakeOf } from "./validators.js";
export function renderCEventWrappers(d, idx, cycleSet, headerOnly) {
    if (!("events" in d) || !("identity" in d) || !d.identity)
        return [];
    const typeName = d.name;
    const lines = [];
    // Decide whether this type has invariants (so we can reference
    // the predicate in `ensures`).
    const hasInvariants = "invariants" in d && d.invariants.length > 0;
    for (const ev of d.events) {
        lines.push(...renderOneEvent(typeName, ev, hasInvariants, headerOnly));
        lines.push("");
    }
    return lines;
}
function renderOneEvent(typeName, ev, hasInvariants, headerOnly) {
    const fnName = `${snakeOf(typeName)}_${snakeOf(ev.name)}_wrapped`;
    const lines = [];
    // Map OCL param names → C snake_case names so the translators
    // resolve `dt` / `gyro` etc. as their C parameter binding rather
    // than dropping them as unknown variables.
    const knownVars = new Map();
    for (const p of ev.parameters) {
        knownVars.set(p.name, snakeOf(p.name));
    }
    // ─── ACSL contract (always emitted as comment on the declaration) ─
    const acslPre = [];
    acslPre.push(`\\valid(self)`);
    acslPre.push(`out_msg != \\null`);
    acslPre.push(`impl_fn != \\null`);
    for (const c of ev.pre) {
        const acsl = translateToAcsl(c.parsed, "self", knownVars);
        if (acsl !== null)
            acslPre.push(acsl);
    }
    // assigns: from `modifies:`, which is a list of OCL paths like
    // `self.x`. We extract the field name from each and emit
    // `self->field`. Paths deeper than one level (e.g. `self.a.b`)
    // fall through with `self->a.b` — fine for ACSL.
    const assignsList = [];
    for (const path of ev.modifies) {
        const segs = path.segments;
        if (path.root === "self" && segs.length >= 1) {
            const rendered = `self->${cFieldName(segs[0])}` +
                segs.slice(1).map((s) => `.${cFieldName(s)}`).join("");
            assignsList.push(rendered);
        }
    }
    assignsList.push(`*out_msg`);
    // post clauses → ACSL ensures (only when result is 0; on Err
    // the type is rolled back to \old(*self)).
    const acslPost = [];
    for (const c of ev.post) {
        const acsl = translateToAcsl(c.parsed, "self", knownVars);
        if (acsl !== null)
            acslPost.push(acsl);
    }
    // ─── Function signature ─────────────────────────────────────────
    const params = [`${typeName} *self`];
    for (const p of ev.parameters) {
        params.push(cFieldDecl(p.parameterType, snakeOf(p.name)));
    }
    // impl_fn typedef inline: int (*impl_fn)(<TypeName>*, params...)
    const implParams = [`${typeName} *`];
    for (const p of ev.parameters) {
        implParams.push(cFieldDecl(p.parameterType, ""));
    }
    params.push(`int (*impl_fn)(${implParams.join(", ")})`);
    params.push(`const char **out_msg`);
    const signature = `int ${fnName}(\n    ${params.join(",\n    ")}\n)`;
    // ─── Header form: ACSL block + function decl ──────────────────
    if (headerOnly) {
        lines.push(`/*@`);
        for (const r of acslPre)
            lines.push(`  requires ${r};`);
        if (assignsList.length > 0) {
            lines.push(`  assigns ${assignsList.join(", ")};`);
        }
        if (hasInvariants) {
            lines.push(`  ensures \\result == 0 ==> inv_${typeName}(self);`);
        }
        for (const e of acslPost) {
            lines.push(`  ensures \\result == 0 ==> ${e};`);
        }
        // Rollback contract: on failure, self is bit-equal to its
        // pre-state. We express it with the ACSL builtin equality.
        lines.push(`  ensures \\result != 0 ==> *self == \\old(*self);`);
        lines.push(`*/`);
        lines.push(`${signature};`);
        return lines;
    }
    // ─── Source: function body ────────────────────────────────────
    lines.push(`${signature} {`);
    // Pre-condition checks (runtime).
    for (const c of ev.pre) {
        const cExpr = translateToC(c.parsed, "self", knownVars);
        if (cExpr === null) {
            lines.push(`    /* SKIPPED pre (not translatable): ${escapeC(oneLine(c.rawExpression))} */`);
            continue;
        }
        const msg = `[${typeName}::${ev.name}] precondition violated: ${escapeC(oneLine(c.rawExpression))}`;
        lines.push(`    if (!(${cExpr})) {`);
        lines.push(`        *out_msg = "${msg}";`);
        lines.push(`        return 1;`);
        lines.push(`    }`);
    }
    // Snapshot for rollback.
    lines.push(`    ${typeName} __rollback = *self;`);
    // Call impl_fn — convention: returns 0 on success, non-zero on
    // user-level error. We treat non-zero as "rollback + propagate".
    const callArgs = ["self", ...ev.parameters.map((p) => snakeOf(p.name))].join(", ");
    lines.push(`    int __rc = impl_fn(${callArgs});`);
    lines.push(`    if (__rc != 0) {`);
    lines.push(`        *self = __rollback;`);
    lines.push(`        *out_msg = "[${typeName}::${ev.name}] impl_fn returned non-zero";`);
    lines.push(`        return __rc;`);
    lines.push(`    }`);
    // Post-condition checks.
    for (const c of ev.post) {
        const cExpr = translateToC(c.parsed, "self", knownVars);
        if (cExpr === null) {
            lines.push(`    /* SKIPPED post (not translatable): ${escapeC(oneLine(c.rawExpression))} */`);
            continue;
        }
        const msg = `[${typeName}::${ev.name}] postcondition violated: ${escapeC(oneLine(c.rawExpression))}`;
        lines.push(`    if (!(${cExpr})) {`);
        lines.push(`        *self = __rollback;`);
        lines.push(`        *out_msg = "${msg}";`);
        lines.push(`        return 1;`);
        lines.push(`    }`);
    }
    // Class invariant check.
    if (hasInvariants) {
        const validateFn = `${snakeOf(typeName)}_validate`;
        lines.push(`    int __vrc = ${validateFn}(self, out_msg);`);
        lines.push(`    if (__vrc != 0) {`);
        lines.push(`        *self = __rollback;`);
        lines.push(`        return __vrc;`);
        lines.push(`    }`);
    }
    lines.push(`    *out_msg = "";`);
    lines.push(`    return 0;`);
    lines.push(`}`);
    return lines;
}
function oneLine(s) {
    return s.replace(/\s+/g, " ").trim();
}
function escapeC(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
//# sourceMappingURL=eventWrappers.js.map