import { chainOf, detectCycles, effectiveProperties, parentsOf, } from "./inheritance.js";
import { isAllowedSpecializationTarget, metaByName, metaOf, } from "./stereotypes.js";
import { checkOclTypes } from "./oclCheck.js";
/**
 * Semantic validator — Phase 3.
 *
 * Rules (Phase 2 set retained, new rules start at S15):
 *
 *   [S1]  Globally unique top-level declaration names.
 *   [S2]  Kind / Relator declares identity.
 *   [S3]  Identity refers to an existing property of the same type.
 *   [S4]  Subkind.specializes resolves to a Kind OR a Subkind (chain ends
 *         at a Kind — checked by the cycle + chainOf utilities).
 *   [S5]  Role.mediatedBy resolves to a Relator.
 *   [S6]  Role.ofKind resolves to a Kind (not a subkind).
 *   [S7]  Relator.mediates has ≥2 participants, all existing, all distinct.
 *   [S8]  PhaseGroup.ofKind resolves to a Kind (not a subkind).
 *   [S9]  Within a phase-group, phase names are distinct.
 *   [S10] Within a single type BODY, property/event/query names are
 *         distinct.
 *   [S11] Named types in property/parameter/return position resolve.
 *   [S12] Event.modifies paths: root is `self` or a parameter name.
 *   [S13] Event.modifies first segment refers to a property of the owning
 *         type OR an inherited property in the specialization chain.
 *   [S14] Duplicate identity within a single body (builder catches this).
 *
 * Phase 3 additions:
 *   [S15] No specialization cycle.
 *   [S16] Rigidity compatibility across specialization (monotone: child
 *         rigidity level ≥ parent rigidity level).
 *   [S17] Category / Mixin / RoleMixin / Mode / Quality may not declare
 *         identity (enforced in the builder for early-fail; re-checked here
 *         for defense in depth).
 *   [S18] Collective / Quantity must declare identity.
 *   [S19] Mode / Quality bearer exists and is a sortal host (Kind, Subkind,
 *         Relator, Collective, Quantity; not an aspect, non-sortal, or role).
 *   [S20] Collective.ofMember resolves to a declared type.
 *   [S21] `specializes` target exists AND the pair (child-stereotype,
 *         parent-stereotype) is allowed by the Phase 3 matrix.
 *   [S22] `override event/query` has a matching inherited member with
 *         matching signature; an event/query that shadows an inherited
 *         member without `override` is rejected.
 *   [S23] Relational endpoints resolve to declared types.
 *   [S24] Relational stereotypes apply to correct endpoint types.
 *   [S25] Multiplicity validity (lower <= upper).
 *
 * Phase 4 additions (OCL sub-parser and contract verification):
 *   [S26] OCL syntactic validity — every invariant/pre/post/body clause
 *         must parse as an OCL expression; syntax errors surface here.
 *   [S27] OCL name/nav resolution: every `object.property` chain refers
 *         to a real property of the static type; every `object.call()`
 *         refers to an inherited zero-arity query.
 *   [S28] OCL type compatibility (arithmetic/comparison/boolean).
 *   [S29] Override pre-conditions may not be strengthened (Liskov):
 *         child_pre must be implied by parent_pre, verified via Z3.
 *   [S30] Override post-conditions may not be weakened (Liskov):
 *         parent_post must be implied by child_post, verified via Z3.
 *   When Z3 cannot decide (unsupported constructs in the expression),
 *   the validator emits `W29`/`W30` warnings instead of errors.
 */
export function validateSemantics(file) {
    const errors = [];
    const index = buildDeclarationIndex(file, errors); // [S1]
    const cycleSet = detectCycles(index); // [S15]
    reportCycles(cycleSet, index, errors);
    checkSpecializationTargets(index, cycleSet, errors); // [S21][S16]
    checkKinds(index, errors); // [S2][S3]
    checkSubkinds(index, errors); // [S4] (additional: chain must reach a Kind)
    checkRoles(index, errors); // [S5][S6]
    checkRelators(index, errors); // [S7]
    checkPhaseGroups(index, errors); // [S8][S9]
    checkAbstractsIdentity(index, errors); // [S17]
    checkMandatoryIdentity(index, errors); // [S18]
    checkAspects(index, errors); // [S19]
    checkCollectives(index, errors); // [S20]
    checkTypeBodies(index, errors); // [S10][S11]
    checkEvents(index, cycleSet, errors); // [S12][S13]
    checkOverrides(index, cycleSet, errors); // [S22]
    checkRelations(index, errors); // [S23][S24][S25]
    checkCommitments(index, errors); // [S31]
    checkUseCases(index, errors); // [S34][S35][S36]
    checkOclParseErrors(index, errors); // [S26]
    checkOclTypes(index, cycleSet, errors); // [S27][S28]
    checkWritesConflicts(index, errors); // [W37]
    return errors;
}
// ─── [W37] Writes-conflict static analysis ─────────────────────────
//
// Per type, group events by the properties they declare in `writes:`.
// When two or more events list the same property, emit W37 — an
// advisory that the property is a "coordination hot-spot". The user
// MAY have valid reasons (a reset event + a step event both touch
// the same state); the warning ensures they consciously decide.
//
// Rationale for advisory (W) rather than hard (S): in real systems
// a single property often legitimately changes from multiple events.
// What's UNSAFE is concurrent invocation without an ordering — which
// ontodls can't infer statically without a scheduler model. So we
// surface the data hazard and let the user reason about ordering.
//
// This is the first piece of Paso 4 (effects/reads/writes
// verification) — pure data-flow analysis, no Z3 required.
//
// ─── [W38] Effects-label inconsistency ─────────────────────────────
//
// Refinement of W37: when two writers of the same property declare
// DIFFERENT `effects:` label sets, the data hazard is sharper —
// they're not merely accessing the same state, they're producing
// different observable side-effects on top. This usually indicates
// a real ordering bug or a missing capability constraint. We emit
// W38 in addition to W37 for these cases. (W37 still fires too —
// W38 is the louder cousin, not a replacement.)
function checkWritesConflicts(idx, errors) {
    for (const d of idx.typeDecls.values()) {
        if (!("events" in d) || d.events.length < 2)
            continue;
        // propName → list of [eventName, effectsSet] that write it.
        const writers = new Map();
        for (const ev of d.events) {
            for (const prop of ev.writes) {
                let list = writers.get(prop);
                if (!list) {
                    list = [];
                    writers.set(prop, list);
                }
                list.push({ name: ev.name, effects: new Set(ev.effects) });
            }
        }
        for (const [propName, entries] of writers) {
            const uniqNames = Array.from(new Set(entries.map((e) => e.name)));
            if (uniqNames.length < 2)
                continue;
            // W37 always fires when ≥2 events write the prop.
            errors.push({
                code: "W37",
                message: `[W37] property '${d.name}.${propName}' is written by ` +
                    `${uniqNames.length} events (${uniqNames.map((n) => `'${n}'`).join(", ")}). ` +
                    `Confirm these cannot run concurrently or that their order ` +
                    `does not matter — ontodls cannot decide this statically.`,
                location: d.location,
            });
            // W38 fires when the writers disagree on `effects:` labels.
            // Two events writing the same prop should typically have the
            // SAME effect set (same observable behaviour) OR explicit
            // ordering. Differing effect sets usually mean one writer is
            // "publish to the network" while another is "persist to NVRAM"
            // — a real ordering hazard.
            //
            // We only flag when at least one writer has a non-empty
            // effects set (otherwise the user simply hasn't annotated
            // effects yet — that's a documentation gap, not a hazard).
            const setsAsStrings = entries.map((e) => Array.from(e.effects).sort().join(","));
            const distinct = new Set(setsAsStrings);
            const anyHasEffects = entries.some((e) => e.effects.size > 0);
            if (distinct.size > 1 && anyHasEffects) {
                const breakdown = entries
                    .filter((e, i) => entries.findIndex((x) => x.name === e.name) === i)
                    .map((e) => {
                    const eff = e.effects.size === 0 ? "(no effects)" : Array.from(e.effects).sort().join(", ");
                    return `'${e.name}': {${eff}}`;
                })
                    .join("; ");
                errors.push({
                    code: "W38",
                    message: `[W38] writers of '${d.name}.${propName}' declare different ` +
                        `effects sets — ${breakdown}. This is a real ordering hazard ` +
                        `unless documented otherwise.`,
                    location: d.location,
                });
            }
        }
    }
}
export function buildDeclarationIndex(file, errors = []) {
    const byName = new Map();
    const kinds = new Set();
    const subkinds = new Set();
    const roles = new Set();
    const relators = new Set();
    const phaseGroups = new Set();
    const typeDecls = new Map();
    for (const d of file.declarations) {
        if (byName.has(d.name)) {
            errors.push({
                code: "S1",
                message: `[S1] Duplicate declaration name '${d.name}'`,
                location: d.location,
            });
            continue;
        }
        byName.set(d.name, d);
        switch (d.kind) {
            case "KindDecl":
                kinds.add(d.name);
                typeDecls.set(d.name, d);
                break;
            case "SubkindDecl":
                subkinds.add(d.name);
                typeDecls.set(d.name, d);
                break;
            case "RoleDecl":
                roles.add(d.name);
                typeDecls.set(d.name, d);
                break;
            case "RelatorDecl":
                relators.add(d.name);
                typeDecls.set(d.name, d);
                break;
            case "PhaseGroupDecl":
                phaseGroups.add(d.name);
                break;
            case "CategoryDecl":
            case "MixinDecl":
            case "RoleMixinDecl":
            case "ModeDecl":
            case "QualityDecl":
            case "CollectiveDecl":
            case "QuantityDecl":
            case "HappeningDecl":
            case "AgentDecl":
            case "CommitmentDecl":
            case "UseCaseDecl":
                typeDecls.set(d.name, d);
                break;
        }
    }
    return {
        byName,
        kinds,
        subkinds,
        roles,
        relators,
        phaseGroups,
        typeDecls,
        file,
    };
}
// ─── [S15] Specialization cycles ────────────────────────────────────────
function reportCycles(cycleSet, idx, errors) {
    for (const name of cycleSet) {
        const decl = idx.typeDecls.get(name);
        errors.push({
            code: "S15",
            message: `[S15] '${name}' participates in a specialization cycle via ` +
                `'specializes' chain`,
            location: decl?.location ?? null,
        });
    }
}
// ─── [S21][S16] Specialization target & rigidity compatibility ─────────
function checkSpecializationTargets(idx, cycleSet, errors) {
    for (const decl of idx.typeDecls.values()) {
        if (cycleSet.has(decl.name))
            continue; // S15 already reported
        const parentNames = parentsOf(decl);
        for (const parentName of parentNames) {
            const parent = idx.byName.get(parentName);
            if (!parent) {
                errors.push({
                    code: "S21",
                    message: `[S21] ${metaOf(decl).label} '${decl.name}' specializes unknown ` +
                        `type '${parentName}'`,
                    location: decl.location,
                });
                continue;
            }
            if (parent.kind === "PhaseGroupDecl") {
                errors.push({
                    code: "S21",
                    message: `[S21] ${metaOf(decl).label} '${decl.name}' cannot specialize ` +
                        `PhaseGroup '${parentName}' (phase-groups are not type definitions)`,
                    location: decl.location,
                });
                continue;
            }
            const childMeta = metaOf(decl);
            const parentMeta = metaOf(parent);
            if (!isAllowedSpecializationTarget(childMeta.name, parentMeta.name)) {
                errors.push({
                    code: "S21",
                    message: `[S21] ${childMeta.label} '${decl.name}' cannot specialize ` +
                        `${parentMeta.label} '${parentName}' in Phase 3.5 ` +
                        `(allowed parents of a ${childMeta.label}: ` +
                        `${allowedParentsHint(childMeta.name)})`,
                    location: decl.location,
                });
                continue;
            }
            if (childMeta.rigidity === "rigid" &&
                parentMeta.rigidity === "anti-rigid") {
                errors.push({
                    code: "S16",
                    message: `[S16] ${childMeta.label} '${decl.name}' (rigid) cannot ` +
                        `specialize ${parentMeta.label} '${parentName}' (anti-rigid): ` +
                        `every child instance would necessarily bear the parent type, ` +
                        `contradicting the parent's anti-rigid claim`,
                    location: decl.location,
                });
            }
        }
    }
}
function allowedParentsHint(child) {
    switch (child) {
        case "Kind":
            return "Category, Mixin (optional)";
        case "Subkind":
            return "Kind or Subkind";
        case "Category":
            return "Category";
        case "Mixin":
            return "Mixin or Category";
        case "RoleMixin":
            return "RoleMixin or Mixin";
        case "Role":
            return "Role or RoleMixin";
        case "Mode":
            return "Mode";
        case "Quality":
            return "Quality";
        case "Relator":
            return "Relator";
        case "Collective":
            return "Collective";
        case "Quantity":
            return "Quantity";
        default:
            return "none (this stereotype does not support specializes)";
    }
}
// ─── [S2][S3] Kind / Relator identity ──────────────────────────────────
function checkKinds(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "KindDecl")
            continue;
        checkSuppliesIdentity(d, errors);
    }
}
function checkSuppliesIdentity(d, errors) {
    if (d.identity === null) {
        // Phase 5: for types that support `specializes`, an absent own
        // identity is OK if some ancestor supplies one. Phase 6 extends
        // this to Happening; Phase 7 to Agent+Commitment; Phase 8 to
        // UseCase.
        const parents = d.kind === "RelatorDecl" ||
            d.kind === "CollectiveDecl" ||
            d.kind === "QuantityDecl" ||
            d.kind === "HappeningDecl" ||
            d.kind === "AgentDecl" ||
            d.kind === "CommitmentDecl" ||
            d.kind === "UseCaseDecl"
            ? d.specializes
            : [];
        if (parents.length > 0)
            return;
        errors.push({
            code: "S2",
            message: `[S2] ${metaStub(d.kind).label} '${d.name}' must declare ` +
                `'identity: <propertyName>;' (or inherit one via 'specializes')`,
            location: d.location,
        });
        return;
    }
    const prop = d.properties.find((p) => p.name === d.identity?.propertyName);
    if (!prop) {
        errors.push({
            code: "S3",
            message: `[S3] identity property '${d.identity.propertyName}' is not ` +
                `declared as a property of '${d.name}'`,
            location: d.identity.location,
        });
    }
}
function metaStub(k) {
    switch (k) {
        case "KindDecl":
            return { label: "Kind" };
        case "RelatorDecl":
            return { label: "Relator" };
        case "CollectiveDecl":
            return { label: "Collective" };
        case "QuantityDecl":
            return { label: "Quantity" };
        case "HappeningDecl":
            return { label: "Happening" };
        case "AgentDecl":
            return { label: "Agent" };
        case "CommitmentDecl":
            return { label: "Commitment" };
        case "UseCaseDecl":
            return { label: "UseCase" };
        default:
            return { label: k };
    }
}
// ─── [S4] Subkind chain must reach a Kind ──────────────────────────────
function checkSubkinds(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "SubkindDecl")
            continue;
        const sub = d;
        // Any cycle or unresolved parent is already reported by S15 / S21.
        const chain = chainOf(sub.name, idx, new Set());
        if (!chain)
            continue;
        const kinds = chain.filter((n) => n.kind === "KindDecl");
        if (kinds.length !== 1) {
            errors.push({
                code: "S4",
                message: `[S4] subkind '${sub.name}' specialization graph must contain exactly ONE Kind ` +
                    `(a Subkind must ultimately inherit a single identity from exactly one Kind; found ${kinds.length})`,
                location: sub.location,
            });
        }
    }
}
// ─── [S5][S6] Role references ──────────────────────────────────────────
function checkRoles(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "RoleDecl")
            continue;
        const r = d;
        const mediator = idx.byName.get(r.mediatedBy);
        if (!mediator) {
            errors.push({
                code: "S5",
                message: `[S5] role '${r.name}' is mediated-by unknown type '${r.mediatedBy}'`,
                location: r.location,
            });
        }
        else if (mediator.kind !== "RelatorDecl") {
            errors.push({
                code: "S5",
                message: `[S5] role '${r.name}' mediator '${r.mediatedBy}' must be a ` +
                    `Relator, but is a ${metaOf(mediator).label}`,
                location: r.location,
            });
        }
        const ofKind = idx.byName.get(r.ofKind);
        if (!ofKind) {
            errors.push({
                code: "S6",
                message: `[S6] role '${r.name}' is of unknown type '${r.ofKind}'`,
                location: r.location,
            });
        }
        else if (ofKind.kind !== "KindDecl" && ofKind.kind !== "AgentDecl") {
            // Phase 7: Agents ARE kinds + agentivity in UFO-C's lattice, so a
            // role can be played by an agentive type just as naturally as by
            // a plain Kind. The matrix's Agent → Kind allowance already makes
            // agents structurally compatible with any Kind expectation;
            // reflecting that here avoids forcing users to downgrade an
            // agent to a Kind just to host a role.
            errors.push({
                code: "S6",
                message: `[S6] role '${r.name}' 'of' target '${r.ofKind}' must be a Kind ` +
                    `or Agent, but is a ${metaOf(ofKind).label}`,
                location: r.location,
            });
        }
    }
}
// ─── [S7] Relator mediation axiom ──────────────────────────────────────
function checkRelators(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "RelatorDecl")
            continue;
        const r = d;
        checkSuppliesIdentity(r, errors);
        if (r.mediates.length < 2) {
            errors.push({
                code: "S7",
                message: `[S7] relator '${r.name}' must mediate between at least 2 ` +
                    `distinct participants (UFO mediation axiom)`,
                location: r.location,
            });
        }
        const seen = new Set();
        for (const p of r.mediates) {
            if (seen.has(p)) {
                errors.push({
                    code: "S7",
                    message: `[S7] relator '${r.name}' lists participant '${p}' more than once`,
                    location: r.location,
                });
            }
            seen.add(p);
            if (!idx.byName.has(p)) {
                errors.push({
                    code: "S7",
                    message: `[S7] relator '${r.name}' mediates unknown type '${p}'`,
                    location: r.location,
                });
            }
        }
    }
}
// ─── [S8][S9] Phase group rules ────────────────────────────────────────
function checkPhaseGroups(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "PhaseGroupDecl")
            continue;
        const pg = d;
        const ofKind = idx.byName.get(pg.ofKind);
        if (!ofKind) {
            errors.push({
                code: "S8",
                message: `[S8] phase-group '${pg.name}' is of unknown type '${pg.ofKind}'`,
                location: pg.location,
            });
        }
        else if (ofKind.kind !== "KindDecl") {
            errors.push({
                code: "S8",
                message: `[S8] phase-group '${pg.name}' 'of' target '${pg.ofKind}' must ` +
                    `be a Kind, but is a ${metaOf(ofKind).label}`,
                location: pg.location,
            });
        }
        const seen = new Set();
        for (const ph of pg.phases) {
            if (seen.has(ph.name)) {
                errors.push({
                    code: "S9",
                    message: `[S9] phase-group '${pg.name}' declares duplicate phase '${ph.name}'`,
                    location: ph.location,
                });
            }
            seen.add(ph.name);
        }
    }
}
// ─── [S17] Non-identity stereotypes don't declare identity ─────────────
// The builder already enforces this, but we mirror it as a semantic rule
// so the error surfaces at the validator layer too if a consumer supplies
// a hand-built AST.
function checkAbstractsIdentity(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind === "CategoryDecl" ||
            d.kind === "MixinDecl" ||
            d.kind === "RoleMixinDecl" ||
            d.kind === "ModeDecl" ||
            d.kind === "QualityDecl") {
            const id = d.identity;
            if (id) {
                errors.push({
                    code: "S17",
                    message: `[S17] ${metaOf(d).label} '${d.name}' may not declare identity`,
                    location: id.location ?? d.location,
                });
            }
        }
    }
}
// ─── [S18] Mandatory-identity stereotypes declare identity ─────────────
function checkMandatoryIdentity(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind === "CollectiveDecl" ||
            d.kind === "QuantityDecl" ||
            d.kind === "HappeningDecl" ||
            d.kind === "AgentDecl" ||
            d.kind === "CommitmentDecl" ||
            d.kind === "UseCaseDecl") {
            checkSuppliesIdentity(d, errors);
        }
    }
}
// ─── [S19] Mode / Quality bearer resolution ────────────────────────────
function checkAspects(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "ModeDecl" && d.kind !== "QualityDecl")
            continue;
        const a = d;
        const bearer = idx.byName.get(a.ofBearer);
        const label = metaOf(a).label;
        if (!bearer) {
            errors.push({
                code: "S19",
                message: `[S19] ${label} '${a.name}' 'of' bearer '${a.ofBearer}' is not ` +
                    `a declared type`,
                location: a.location,
            });
            continue;
        }
        if (bearer.kind === "PhaseGroupDecl" ||
            bearer.kind === "CategoryDecl" ||
            bearer.kind === "MixinDecl" ||
            bearer.kind === "RoleMixinDecl" ||
            bearer.kind === "ModeDecl" ||
            bearer.kind === "QualityDecl") {
            errors.push({
                code: "S19",
                message: `[S19] ${label} '${a.name}' bearer '${a.ofBearer}' must be a ` +
                    `sortal host (Kind, Subkind, Role, Relator, Collective or ` +
                    `Quantity), but is a ${metaOf(bearer).label}`,
                location: a.location,
            });
        }
    }
}
// ─── [S20] Collective member resolution ────────────────────────────────
function checkCollectives(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "CollectiveDecl")
            continue;
        if (!idx.byName.has(d.ofMember)) {
            errors.push({
                code: "S20",
                message: `[S20] collective '${d.name}' 'of' member type '${d.ofMember}' ` +
                    `is not declared`,
                location: d.location,
            });
        }
    }
}
// ─── [S10][S11] Type body checks ───────────────────────────────────────
function checkTypeBodies(idx, errors) {
    for (const d of idx.typeDecls.values()) {
        checkMemberNameUniqueness(d, errors); // [S10]
        checkTypeReferences(d, idx, errors); // [S11]
    }
}
function checkMemberNameUniqueness(d, errors) {
    const used = new Map();
    const register = (name, label, loc) => {
        const prev = used.get(name);
        if (prev) {
            errors.push({
                code: "S10",
                message: `[S10] '${d.name}' declares '${name}' more than once ` +
                    `(as ${prev} and ${label})`,
                location: loc,
            });
        }
        else {
            used.set(name, label);
        }
    };
    for (const p of d.properties)
        register(p.name, "property", p.location);
    for (const q of d.queries)
        register(q.name, "query", q.location);
    for (const e of d.events)
        register(e.name, "event", e.location);
}
function checkTypeReferences(d, idx, errors) {
    // S11 check: follows Set<T> into its element type. Primitive elements
    // skip; named elements resolve like any other ref. We lift the logic
    // into a self-recursive helper so Set<Set<T>> would be handled cleanly
    // if/when the grammar ever admits nesting.
    // Pre-compute the set of known import aliases (Paso 5 day 3).
    // Used to validate qualified type references `Alias.TypeName`.
    // Limit (v1): in the multi-file resolver case, only the ROOT
    // file's aliases are visible here — qualified refs declared in
    // non-root imported files trip S40 spuriously. Day 4 would need
    // per-declaration source-file tracking to lift this.
    const knownAliases = new Set();
    for (const imp of idx.file.imports) {
        if (imp.alias !== null)
            knownAliases.add(imp.alias);
    }
    const checkRef = (ref, where) => {
        if (ref.kind === "PrimitiveType")
            return;
        if (ref.kind === "SetType" || ref.kind === "OptionType") {
            checkRef(ref.elementType, `${where} element type`);
            return;
        }
        if (ref.kind === "ArrayType") {
            checkRef(ref.elementType, `${where} array element type`);
            return;
        }
        // S40: qualified ref `Alias.TypeName` — the alias must come
        // from a real import. v1 doesn't actually scope by alias; the
        // qualifier is informational + future-proofing. Bad qualifier
        // wins over S11 (more informative — tells user the import is
        // missing, not the type).
        if (ref.kind === "NamedType" && ref.qualifier !== undefined) {
            if (!knownAliases.has(ref.qualifier)) {
                errors.push({
                    code: "S40",
                    message: `[S40] ${where} uses qualified type '${ref.qualifier}.${ref.name}' ` +
                        `but '${ref.qualifier}' is not a known import alias. Add ` +
                        `\`import "./..." as ${ref.qualifier};\` or remove the qualifier.`,
                    location: ref.location,
                });
                return;
            }
        }
        if (!idx.byName.has(ref.name)) {
            errors.push({
                code: "S11",
                message: `[S11] ${where} references unknown type '${ref.name}'`,
                location: ref.location,
            });
        }
    };
    for (const p of d.properties) {
        checkRef(p.propertyType, `property '${d.name}.${p.name}'`);
    }
    for (const q of d.queries) {
        for (const param of q.parameters) {
            checkRef(param.parameterType, `query '${d.name}.${q.name}' parameter '${param.name}'`);
        }
        checkRef(q.returnType, `query '${d.name}.${q.name}' return type`);
    }
    for (const e of d.events) {
        for (const param of e.parameters) {
            checkRef(param.parameterType, `event '${d.name}.${e.name}' parameter '${param.name}'`);
        }
    }
}
// ─── [S12][S13] Event.modifies ─────────────────────────────────────────
function checkEvents(idx, cycleSet, errors) {
    for (const d of idx.typeDecls.values()) {
        const ownerProps = effectiveProperties(d.name, idx, cycleSet);
        for (const e of d.events) {
            checkEventModifies(d, e, ownerProps, idx, errors);
        }
    }
}
function checkEventModifies(owner, e, ownerProps, idx, errors) {
    const paramByName = new Map();
    for (const p of e.parameters)
        paramByName.set(p.name, p);
    for (const path of e.modifies) {
        const where = `event '${owner.name}.${e.name}' modifies clause`;
        if (path.root === "self") {
            const first = path.segments[0];
            if (first === undefined)
                continue;
            if (!ownerProps.has(first)) {
                errors.push({
                    code: "S13",
                    message: `[S13] ${where}: 'self.${first}' is not a property of ` +
                        `'${owner.name}' (nor of any ancestor in its ` +
                        `specialization chain)`,
                    location: path.location,
                });
            }
            continue;
        }
        const param = paramByName.get(path.root);
        if (!param) {
            errors.push({
                code: "S12",
                message: `[S12] ${where}: path root '${path.root}' is neither 'self' ` +
                    `nor a parameter of the event`,
                location: path.location,
            });
            continue;
        }
        if (param.parameterType.kind === "PrimitiveType") {
            errors.push({
                code: "S13",
                message: `[S13] ${where}: parameter '${path.root}' has primitive type ` +
                    `and cannot be dotted into`,
                location: path.location,
            });
            continue;
        }
        if (param.parameterType.kind === "SetType") {
            // `modifies: p.something` where p is a Set is not a single storage
            // location we can describe. OCL collection writes aren't modeled
            // as `modifies` targets in Phase 5; use direct self-navigation.
            errors.push({
                code: "S13",
                message: `[S13] ${where}: parameter '${path.root}' has Set type ` +
                    `and cannot be dotted into for a 'modifies' target`,
                location: path.location,
            });
            continue;
        }
        if (param.parameterType.kind === "OptionType") {
            // Similar rule for Option<T>: writing through an Option without
            // an explicit unwrap step isn't expressible in OCL's `modifies`.
            errors.push({
                code: "S13",
                message: `[S13] ${where}: parameter '${path.root}' has Option type ` +
                    `and cannot be dotted into for a 'modifies' target`,
                location: path.location,
            });
            continue;
        }
        if (param.parameterType.kind === "ArrayType") {
            // Array<T,N> params can be passed by value/move but not dotted
            // into — indexed-element writes aren't expressible in `modifies`.
            errors.push({
                code: "S13",
                message: `[S13] ${where}: parameter '${path.root}' has Array type ` +
                    `and cannot be dotted into for a 'modifies' target`,
                location: path.location,
            });
            continue;
        }
        const paramTypeName = param.parameterType.name;
        const paramTypeDecl = idx.typeDecls.get(paramTypeName);
        if (!paramTypeDecl)
            continue; // S11 already reported
        const paramEffProps = effectiveProperties(paramTypeName, idx, new Set());
        const first = path.segments[0];
        if (first !== undefined && !paramEffProps.has(first)) {
            errors.push({
                code: "S13",
                message: `[S13] ${where}: '${path.root}.${first}' is not a property of ` +
                    `'${paramTypeName}' (nor of any ancestor)`,
                location: path.location,
            });
        }
    }
}
// ─── [S22] Override correctness ────────────────────────────────────────
function checkOverrides(idx, cycleSet, errors) {
    for (const d of idx.typeDecls.values()) {
        // Effective members of the PARENT (exclude own) give us the inheritable
        // set. In Phase 3.5, we compute the full MRO effectives and filter out
        // those declared on `d` itself.
        const chain = chainOf(d.name, idx, cycleSet);
        const parentEvents = new Map();
        const parentQueries = new Map();
        const parentProps = new Map();
        if (chain) {
            for (const node of chain) {
                if (node.name === d.name)
                    continue;
                for (const e of node.events)
                    parentEvents.set(e.name, { declaredOn: node.name, event: e });
                for (const q of node.queries)
                    parentQueries.set(q.name, { declaredOn: node.name, query: q });
                for (const p of node.properties)
                    parentProps.set(p.name, { declaredOn: node.name });
            }
        }
        for (const e of d.events) {
            const parentHit = parentEvents.get(e.name);
            if (e.isOverride && !parentHit) {
                errors.push({
                    code: "S22",
                    message: `[S22] event '${d.name}.${e.name}' declared 'override' but ` +
                        `no inherited event of that name exists`,
                    location: e.location,
                });
            }
            else if (!e.isOverride && parentHit) {
                errors.push({
                    code: "S22",
                    message: `[S22] event '${d.name}.${e.name}' shadows inherited event ` +
                        `from '${parentHit.declaredOn}'; mark it 'override' to redefine, ` +
                        `or rename it`,
                    location: e.location,
                });
            }
            else if (e.isOverride && parentHit) {
                checkEventSignatureMatch(d.name, e, parentHit.event, errors);
            }
        }
        for (const q of d.queries) {
            const parentHit = parentQueries.get(q.name);
            if (q.isOverride && !parentHit) {
                errors.push({
                    code: "S22",
                    message: `[S22] query '${d.name}.${q.name}' declared 'override' but ` +
                        `no inherited query of that name exists`,
                    location: q.location,
                });
            }
            else if (!q.isOverride && parentHit) {
                errors.push({
                    code: "S22",
                    message: `[S22] query '${d.name}.${q.name}' shadows inherited query ` +
                        `from '${parentHit.declaredOn}'; mark it 'override' to redefine, ` +
                        `or rename it`,
                    location: q.location,
                });
            }
            else if (q.isOverride && parentHit) {
                checkQuerySignatureMatch(d.name, q, parentHit.query, errors);
            }
        }
        // Property shadowing (no `override` concept for properties — flag any
        // child property whose name collides with an inherited property).
        for (const p of d.properties) {
            const parentHit = parentProps.get(p.name);
            if (parentHit) {
                errors.push({
                    code: "S22",
                    message: `[S22] property '${d.name}.${p.name}' shadows inherited ` +
                        `property from '${parentHit.declaredOn}' — property ` +
                        `redefinition is not supported; rename or remove`,
                    location: p.location,
                });
            }
        }
    }
}
function checkEventSignatureMatch(ownerName, child, parent, errors) {
    const reason = signatureDiff(child.parameters, parent.parameters);
    if (reason) {
        errors.push({
            code: "S22",
            message: `[S22] event '${ownerName}.${child.name}' override signature ` +
                `differs from inherited: ${reason}`,
            location: child.location,
        });
    }
}
function checkQuerySignatureMatch(ownerName, child, parent, errors) {
    const reason = signatureDiff(child.parameters, parent.parameters);
    if (reason) {
        errors.push({
            code: "S22",
            message: `[S22] query '${ownerName}.${child.name}' override parameter list ` +
                `differs from inherited: ${reason}`,
            location: child.location,
        });
        return;
    }
    const r1 = typeRefName(child.returnType);
    const r2 = typeRefName(parent.returnType);
    if (r1 !== r2) {
        errors.push({
            code: "S22",
            message: `[S22] query '${ownerName}.${child.name}' override return type ` +
                `'${r1}' differs from inherited '${r2}'`,
            location: child.location,
        });
    }
}
function signatureDiff(a, b) {
    if (a.length !== b.length) {
        return `expected ${b.length} parameter(s), got ${a.length}`;
    }
    for (let i = 0; i < a.length; i += 1) {
        const ai = a[i];
        const bi = b[i];
        const at = typeRefName(ai.parameterType);
        const bt = typeRefName(bi.parameterType);
        if (at !== bt) {
            return `parameter #${i + 1} type '${at}' differs from inherited '${bt}'`;
        }
    }
    return null;
}
function typeRefName(t) {
    if (t.kind === "PrimitiveType")
        return t.name;
    if (t.kind === "NamedType")
        return t.name;
    // SetType — recurse into element for a human-readable form.
    return `Set<${typeRefName(t.elementType)}>`;
}
// Reference `metaByName` so the import is retained for consumers who
// want to query stereotype metadata without re-importing.
// ─── [S23][S24][S25] Endpoints, Stereotypes, Multiplicities ───────────
function checkRelations(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "RelationDecl")
            continue;
        const r = d;
        // [S25] Multiplicity
        const checkMult = (m, end) => {
            if (m.upper !== "*" && m.lower > m.upper) {
                errors.push({
                    code: "S25",
                    message: `[S25] relation '${r.name}' ${end} multiplicity lower bound (${m.lower}) cannot be greater than upper bound (${m.upper})`,
                    location: m.location,
                });
            }
        };
        checkMult(r.sourceMultiplicity, "source");
        checkMult(r.targetMultiplicity, "target");
        // [S23] Resolution
        const sType = idx.byName.get(r.source);
        const tType = idx.byName.get(r.target);
        if (!sType) {
            errors.push({
                code: "S23",
                message: `[S23] relation '${r.name}' source '${r.source}' is not a declared type`,
                location: r.location,
            });
        }
        if (!tType) {
            errors.push({
                code: "S23",
                message: `[S23] relation '${r.name}' target '${r.target}' is not a declared type`,
                location: r.location,
            });
        }
        if (!sType || !tType)
            continue; // skip constraint checks if unresolved
        // [S24] Constraints
        const stMeta = sType.kind !== "RelationDecl" && sType.kind !== "PhaseGroupDecl" ? metaOf(sType) : null;
        const tMeta = tType.kind !== "RelationDecl" && tType.kind !== "PhaseGroupDecl" ? metaOf(tType) : null;
        if (r.stereotype === "characterization") {
            if (!stMeta || (stMeta.name !== "Mode" && stMeta.name !== "Quality")) {
                errors.push({
                    code: "S24",
                    message: `[S24] <<characterization>> relation '${r.name}' source must be a Mode or Quality`,
                    location: r.location,
                });
            }
            else {
                const aspectDecl = sType;
                if (aspectDecl.ofBearer !== r.target) {
                    errors.push({
                        code: "S24",
                        message: `[S24] <<characterization>> relation '${r.name}' target '${r.target}' must match the aspect's bearer '${aspectDecl.ofBearer}'`,
                        location: r.location,
                    });
                }
            }
        }
        else if (r.stereotype === "mediation") {
            if (!stMeta || stMeta.name !== "Relator") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<mediation>> relation '${r.name}' source must be a Relator`,
                    location: r.location,
                });
            }
            else {
                const relator = sType;
                if (!relator.mediates.includes(r.target)) {
                    errors.push({
                        code: "S24",
                        message: `[S24] <<mediation>> relation '${r.name}' target '${r.target}' is not among the participants mediated by '${r.source}'`,
                        location: r.location,
                    });
                }
            }
        }
        else if (r.stereotype === "componentOf" || r.stereotype === "memberOf") {
            if (stMeta?.sortality !== "sortal") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<${r.stereotype}>> relation '${r.name}' source must be a sortal`,
                    location: r.location,
                });
            }
            if (tMeta?.sortality !== "sortal") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<${r.stereotype}>> relation '${r.name}' target must be a sortal`,
                    location: r.location,
                });
            }
        }
        else if (r.stereotype === "participation") {
            // Phase 6: a participation ties an endurant (any non-Happening
            // sortal or non-sortal) to a Happening. The "endurant" side
            // covers Kind/Subkind/Role/Relator/Collective/Quantity/Mode/
            // Quality/Category/Mixin/RoleMixin — everything EXCEPT the
            // perdurant sortal Happening. We test by stereotype name rather
            // than enumerating because that list may grow.
            if (!stMeta || stMeta.name === "Happening") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<participation>> relation '${r.name}' source must be ` +
                        `an endurant (any type other than Happening)`,
                    location: r.location,
                });
            }
            if (!tMeta || tMeta.name !== "Happening") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<participation>> relation '${r.name}' target must be ` +
                        `a Happening`,
                    location: r.location,
                });
            }
        }
        else if (r.stereotype === "precedes" ||
            r.stereotype === "triggers" ||
            ALLEN_RELATION_STEREOTYPES.has(r.stereotype)) {
            // Phase 6: causal / temporal ordering between two perdurants.
            // `precedes` is weaker (A ends before B begins); `triggers` adds
            // a causal commitment (A causes B) — enforced in generated code,
            // not in the DSL validator.
            //
            // Phase 6.5: the 13 Allen interval-algebra relations also live
            // here. They have the same endpoint constraints (both Happening)
            // and differ only in their OCL-level semantics, which the Z3
            // translator handles.
            if (!stMeta || stMeta.name !== "Happening") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<${r.stereotype}>> relation '${r.name}' source must ` +
                        `be a Happening`,
                    location: r.location,
                });
            }
            if (!tMeta || tMeta.name !== "Happening") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<${r.stereotype}>> relation '${r.name}' target must ` +
                        `be a Happening`,
                    location: r.location,
                });
            }
        }
        else if (r.stereotype === "commitsTo") {
            // Phase 7: shortcut "A commits to B" — both endpoints must be
            // Agents. This is a coarse version of the commitment declaration
            // (no predicate, no identity); use it when the fine structure of
            // the commitment isn't yet needed.
            if (!stMeta || stMeta.name !== "Agent") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<commitsTo>> relation '${r.name}' source must be ` +
                        `an Agent`,
                    location: r.location,
                });
            }
            if (!tMeta || tMeta.name !== "Agent") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<commitsTo>> relation '${r.name}' target must be ` +
                        `an Agent`,
                    location: r.location,
                });
            }
        }
        else if (r.stereotype === "fulfills" || r.stereotype === "violates") {
            // Phase 7: a happening either FULFILLS or VIOLATES a commitment.
            // Source is the perdurant (delivery arrival, payment received,
            // missed deadline); target is the commitment whose lifecycle
            // transitions. Generators emit audit trails keyed on these.
            if (!stMeta || stMeta.name !== "Happening") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<${r.stereotype}>> relation '${r.name}' source must ` +
                        `be a Happening`,
                    location: r.location,
                });
            }
            if (!tMeta || tMeta.name !== "Commitment") {
                errors.push({
                    code: "S24",
                    message: `[S24] <<${r.stereotype}>> relation '${r.name}' target must ` +
                        `be a Commitment`,
                    location: r.location,
                });
            }
        }
    }
}
/**
 * The 13 Allen interval-algebra relation names, usable as the
 * stereotype of a structural `relation` declaration. Duplicated here
 * from oclCheck.ts/lspCheck.ts (those use the names for OCL method
 * dispatch) — accepting a small triplication is cheaper than routing
 * the set through a shared module and tangling validation layers.
 */
const ALLEN_RELATION_STEREOTYPES = new Set([
    "before",
    "after",
    "meets",
    "metBy",
    "overlaps",
    "overlappedBy",
    "during",
    "contains",
    "starts",
    "startedBy",
    "finishes",
    "finishedBy",
    "equals",
]);
// ─── [S31] Commitment endpoints are agents (Phase 7) ──────────────────
/**
 * S31: the debitor and creditor of every commitment must resolve to
 * `agent` declarations. Plain Kinds, Roles, Relators, etc. are
 * rejected — only agentive endurants can bear the mental moments that
 * make committing meaningful in UFO-C.
 *
 * We resolve names via the typeDecls index rather than the raw
 * `declarations` array so that S11's unknown-type check has first
 * refusal on truly missing references; S31 only fires when the name
 * exists but points at the wrong stereotype.
 *
 * Inheritance: if an endpoint points at a Subkind of an Agent, the
 * Subkind itself isn't an Agent stereotype in the AST — but walking
 * its `specializes` chain may reach one. We DO NOT accept this in
 * Phase 7: requiring a direct Agent keeps the rule predictable and
 * avoids subtle questions about partial agentivity. Users who want a
 * concrete agentive specialization should declare it with
 * `agent Subtype specializes AgentParent`.
 */
function checkCommitments(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "CommitmentDecl")
            continue;
        for (const [role, name] of [
            ["debitor", d.debitor],
            ["creditor", d.creditor],
        ]) {
            const target = idx.typeDecls.get(name);
            if (!target) {
                // S11 reports unknown types elsewhere — don't double-report.
                // A malformed name will show up as an S11 error.
                errors.push({
                    code: "S11",
                    message: `[S11] commitment '${d.name}' ${role} references unknown ` +
                        `type '${name}'`,
                    location: d.location,
                });
                continue;
            }
            if (target.kind !== "AgentDecl") {
                errors.push({
                    code: "S31",
                    message: `[S31] commitment '${d.name}' ${role} '${name}' must be an ` +
                        `agent (got ${metaStub(target.kind).label})`,
                    location: d.location,
                });
            }
        }
    }
}
// ─── [S34][S35][S36] Use-case header references (Phase 8) ─────────────
/**
 * Phase 8 use-case validation:
 *
 *   S34: every actor resolves to an Agent or a Role.
 *        Roles are endpoints that play "part of the scenario" — a
 *        Buyer/Seller/Operator archetype. Agents are the canonical
 *        case. Kinds are NOT accepted: we want the modeler to mark
 *        participating types as agentive, not use plain Kinds as a
 *        catch-all.
 *
 *   S35: the trigger resolves to a Happening (which includes other
 *        use-cases, since UseCase → Happening in the matrix).
 *
 *   S36: success and failure each resolve to a Commitment.
 *
 * Unknown names surface as S11 (not S34/S35/S36) for diagnostic
 * clarity — same pattern as S31. We only fire S34/S35/S36 when the
 * name IS declared but points at the wrong stereotype.
 */
function checkUseCases(idx, errors) {
    for (const d of idx.file.declarations) {
        if (d.kind !== "UseCaseDecl")
            continue;
        // S34: actors
        for (const actorName of d.actors) {
            const actor = idx.typeDecls.get(actorName);
            if (!actor) {
                errors.push({
                    code: "S11",
                    message: `[S11] use-case '${d.name}' actor references unknown type ` +
                        `'${actorName}'`,
                    location: d.location,
                });
                continue;
            }
            if (actor.kind !== "AgentDecl" && actor.kind !== "RoleDecl") {
                errors.push({
                    code: "S34",
                    message: `[S34] use-case '${d.name}' actor '${actorName}' must be an ` +
                        `Agent or a Role (got ${metaStub(actor.kind).label})`,
                    location: d.location,
                });
            }
        }
        // S35: trigger must be a Happening (UseCase qualifies too — it's a
        // specialized Happening in the stereotype matrix).
        const trigger = idx.typeDecls.get(d.trigger);
        if (!trigger) {
            errors.push({
                code: "S11",
                message: `[S11] use-case '${d.name}' trigger references unknown type ` +
                    `'${d.trigger}'`,
                location: d.location,
            });
        }
        else if (trigger.kind !== "HappeningDecl" &&
            trigger.kind !== "UseCaseDecl") {
            errors.push({
                code: "S35",
                message: `[S35] use-case '${d.name}' trigger '${d.trigger}' must be a ` +
                    `Happening or another UseCase (got ${metaStub(trigger.kind).label})`,
                location: d.location,
            });
        }
        // S36: success + failure must be Commitments.
        for (const [slot, name] of [
            ["success", d.success],
            ["failure", d.failure],
        ]) {
            const outcome = idx.typeDecls.get(name);
            if (!outcome) {
                errors.push({
                    code: "S11",
                    message: `[S11] use-case '${d.name}' ${slot} references unknown type ` +
                        `'${name}'`,
                    location: d.location,
                });
                continue;
            }
            if (outcome.kind !== "CommitmentDecl") {
                errors.push({
                    code: "S36",
                    message: `[S36] use-case '${d.name}' ${slot} '${name}' must be a ` +
                        `Commitment (got ${metaStub(outcome.kind).label})`,
                    location: d.location,
                });
            }
        }
    }
}
// ─── [S26] OCL sub-parser syntax errors ────────────────────────────────
/**
 * Walk every invariant, pre/post clause, and query body and surface any
 * error collected by the OCL sub-parser.
 *
 * The OCL parser's messages are kept on the AST node (`parseErrors`), so
 * this check doesn't re-parse — it just re-emits as SemanticError with
 * code "S26" and the node's location (pointing to the clause, not into
 * the OCL expression text, because source columns inside a pre-extracted
 * placeholder are harder to pin down exactly).
 */
function checkOclParseErrors(idx, errors) {
    const report = (owner, clauseLabel, rawExpr, clauseErrors, loc) => {
        if (clauseErrors.length === 0)
            return;
        // Truncate the expression in the error message so overly long
        // invariants don't swamp the reporter output. Keep the message
        // short but still identifiable.
        const preview = rawExpr.length > 80 ? `${rawExpr.slice(0, 77)}...` : rawExpr;
        errors.push({
            code: "S26",
            message: `[S26] ${owner}: ${clauseLabel} has OCL syntax error — ` +
                `${clauseErrors[0]} (expression: \`${preview}\`)`,
            location: loc,
        });
    };
    for (const d of idx.typeDecls.values()) {
        for (const inv of d.invariants) {
            report(`invariant on '${d.name}'`, "invariants block", inv.rawExpression, inv.parseErrors, inv.location);
        }
        for (const e of d.events) {
            for (const pre of e.pre) {
                report(`'${d.name}.${e.name}'`, "pre clause", pre.rawExpression, pre.parseErrors, pre.location);
            }
            for (const post of e.post) {
                report(`'${d.name}.${e.name}'`, "post clause", post.rawExpression, post.parseErrors, post.location);
            }
        }
        for (const q of d.queries) {
            if (q.body) {
                report(`'${d.name}.${q.name}'`, "body clause", q.body.rawExpression, q.body.parseErrors, q.body.location);
            }
        }
    }
}
export { metaByName };
//# sourceMappingURL=validator.js.map