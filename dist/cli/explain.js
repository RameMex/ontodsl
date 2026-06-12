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
const CATALOG = {
    S11: {
        code: "S11",
        title: "Reference to unknown type",
        category: "structural",
        description: "A property, parameter, or query return type names a type that " +
            "is not declared anywhere in the file. Could be a typo, a " +
            "missing kind/subkind declaration, or a reference into a module " +
            "ontodls doesn't import yet (multi-file is deferred).",
        wrong: "property battery: BatteryPak;   // typo",
        right: "property battery: BatteryPack;",
        fix: "Check spelling. If the type is meant to come from another " +
            "file, inline it for now — multi-file imports land in a later " +
            "phase.",
    },
    S13: {
        code: "S13",
        title: "Invalid 'modifies' target",
        category: "structural",
        description: "A `modifies:` clause points at a path that isn't a valid " +
            "storage location: either an unknown property, a Set-typed " +
            "property dotted into, an Option-typed property dotted into, " +
            "or a parameter root that isn't a NamedType.",
        wrong: "modifies: self.batteries.charge;   // batteries is Set<>",
        right: "modifies: self.batteries;          // whole set",
        fix: "Strip the dotted suffix so the path ends at the storage " +
            "location itself, or change the property's declared type to a " +
            "single record you can navigate into.",
    },
    S26: {
        code: "S26",
        title: "OCL parse error",
        category: "structural",
        description: "The OCL sub-parser couldn't tokenise / parse the expression " +
            "inside an invariants block or a pre/post/body clause. Usually " +
            "an unbalanced parenthesis, an unsupported operator, a missing " +
            "semicolon, or an unrecognised collection method.",
        fix: "Re-read the OCL fragment carefully; the supported operator " +
            "set is documented in src/ocl/lexer.ts and grammar.ts.",
    },
    S27: {
        code: "S27",
        title: "Unknown name, bad receiver, or missing context",
        category: "type",
        description: "Catch-all for OCL name-resolution problems: identifier isn't " +
            "`self`, isn't a parameter, isn't `result` in a return-typed " +
            "event's post, isn't a known query; OR you're calling a method " +
            "on the wrong kind of receiver; OR you're using `@pre` outside " +
            "a post-condition; OR a forAll source isn't a Set.",
        wrong: "post: result.isFinite();         // event has no return type",
        right: "event foo(): Real { post: result.isFinite(); }",
        fix: "Read the message — it usually names the exact offender. " +
            "Common fixes: add `: T` return type for `result`, fix parameter " +
            "spelling, move `@pre` into a post-condition.",
    },
    S28: {
        code: "S28",
        title: "Type mismatch",
        category: "type",
        description: "A binary operator or function received operands of incompatible " +
            "types (e.g. comparing a String with an Integer, doing arithmetic " +
            "on a Boolean), or a query body's expression doesn't match the " +
            "declared return type, or an if/else has incompatible branches.",
        wrong: "self.name + 1",
        right: "self.count + 1",
        fix: "Coerce the operands to the same kind, or use a different " +
            "operator suited to the receiver type.",
    },
    S29: {
        code: "S29",
        title: "Override strengthens precondition (LSP violation)",
        category: "lsp",
        description: "A child override's precondition rejects states the parent's " +
            "precondition accepts. Liskov Substitution Principle says a " +
            "subtype must be substitutable: anything the parent's method " +
            "accepts, the override must also accept.",
        wrong: "// parent: pre: amount > 0;\n" +
            "// child:  pre: amount > 5;   // strictly stronger — rejected",
        right: "// child:  pre: amount > 0;\n" +
            "// or weaker: pre: amount >= -1;",
        fix: "Weaken (or match) the child's precondition. If you need the " +
            "stronger guarantee, model it as a different event, not an override.",
    },
    S30: {
        code: "S30",
        title: "Override weakens postcondition (LSP violation)",
        category: "lsp",
        description: "A child override's postcondition promises less than the parent's. " +
            "The dual of S29: an override must keep all guarantees the parent " +
            "made, or callers relying on the parent's contract break.",
        fix: "Strengthen (or match) the child's postcondition. Or model " +
            "the relaxation as a sibling event with a different name.",
    },
    S33: {
        code: "S33",
        title: "Commitment specialization weakens predicate",
        category: "lsp",
        description: "A child commitment's predicate is satisfied by states the " +
            "parent's predicate would reject. Same flavour as S30 but for " +
            "UFO-C commitments: the social contract a specialized commitment " +
            "encodes must imply (be at least as strong as) the parent's.",
        fix: "Strengthen the child's predicate so it entails the parent's.",
    },
    W29: {
        code: "W29",
        title: "Precondition clause outside decidable fragment",
        category: "advisory",
        description: "A clause inside a precondition uses OCL constructs that the Z3 " +
            "LSP checker can't translate (e.g. forAll/exists over sets, " +
            "reference equality with deep navigation, query calls that aren't " +
            "Allen operators). The clause is kept in the contract but skipped " +
            "by the static LSP check. Runtime wrappers still enforce it.",
        fix: "Either accept the warning (the runtime contract is honored), " +
            "or refactor the clause into a decidable form (e.g. extract a " +
            "Boolean property + invariant, then compare on the property).",
    },
    W30: {
        code: "W30",
        title: "Postcondition clause outside decidable fragment",
        category: "advisory",
        description: "Same as W29 but for post-conditions.",
        fix: "Same advice as W29.",
    },
    W31: {
        code: "W31",
        title: "Integer ↔ Real comparison mixes types",
        category: "advisory",
        description: "OCL semantics permit implicit Integer→Real promotion in numeric " +
            "comparisons, but the Rust codegen only auto-promotes the case " +
            "'Real expression vs Integer literal'. The reverse (Integer " +
            "expression vs Real literal, or two non-literal mixed operands) " +
            "would emit Rust that fails `cargo check` with `expected i64, " +
            "found floating-point number`.",
        wrong: "property radioMin: Integer default 1100;\n" +
            "invariants { self.radioMin > 0.5; }   // Integer vs Real literal",
        right: "invariants { self.radioMin > 0; }     // both Integer\n" +
            "// or change the field's type to Real",
        fix: "Pick one numeric kind for both sides. If the field is a count " +
            "or PWM tick, use Integer literal. If it's a measurement, declare " +
            "the field Real.",
    },
    W37: {
        code: "W37",
        title: "Property is a coordination hot-spot (multiple writers)",
        category: "advisory",
        description: "Two or more events declare the same property in their `writes:` " +
            "clause. ontodls can't decide statically whether those events run " +
            "concurrently or in what order — the user must confirm that " +
            "either (a) the events are serialized by their caller, or (b) " +
            "any interleaving leaves the type's invariants intact.",
        wrong: "kind Battery {\n" +
            "  property voltage: Real internal default 0.0;\n" +
            "  event read(v: Real) {\n" +
            "    pre: v.isFinite();\n" +
            "    modifies: self.voltage;\n" +
            "    writes: voltage;   // ← writer #1\n" +
            "  }\n" +
            "  event reset() {\n" +
            "    modifies: self.voltage;\n" +
            "    writes: voltage;   // ← writer #2 — W37 fires\n" +
            "  }\n" +
            "}",
        right: "Either:\n" +
            "  - Document that read() / reset() are caller-serialized (no fix\n" +
            "    in the .onto; W37 is advisory and can be acknowledged).\n" +
            "  - Make one event a precondition of the other via a phase guard\n" +
            "    (e.g. `pre: self.state = Phase::Calibrated`).",
        fix: "Confirm the events cannot run concurrently OR that their order " +
            "doesn't affect the post-state. W37 is advisory and never fails " +
            "compilation; it's surfaced so the safety case explicitly addresses " +
            "the data hazard.",
    },
    S40: {
        code: "S40",
        title: "Qualified type reference uses an unknown import alias",
        category: "structural",
        description: "A property / parameter / return type was written as " +
            "`Alias.TypeName`, but no `import \"./...\" as Alias;` " +
            "declares that alias in the file. The qualifier is either " +
            "a typo or refers to an import that hasn't been added yet.",
        wrong: "// (no import for `EKF`)\n" +
            "kind App {\n" +
            "  property filter: EKF.AP_NavEKF3;  // S40 fires\n" +
            "}",
        right: "import { AP_NavEKF3 } from \"./ardupilot_navekf3.onto\" as EKF;\n" +
            "kind App {\n" +
            "  property filter: EKF.AP_NavEKF3;  // OK now\n" +
            "}",
        fix: "Add the missing `import \"./...\" as <Alias>;` to the file, " +
            "or drop the qualifier and use the bare type name (works " +
            "when the type is already merged into the namespace via a " +
            "non-qualified import).",
    },
    W39: {
        code: "W39",
        title: "Selective import asked for a name not present in the target file",
        category: "advisory",
        description: "An `import { A, B } from \"./other.onto\";` requested a name " +
            "that the target file doesn't declare. Usually a typo or a " +
            "stale reference after the target file dropped/renamed the " +
            "symbol. The import succeeds (with the remaining names) so " +
            "ontodls doesn't fail the build, but you should fix the " +
            "selective list to match reality.",
        wrong: "// other.onto declares only Battery\n" +
            "import { Battery, BatteryPak } from \"./other.onto\";  // typo",
        right: "import { Battery } from \"./other.onto\";\n" +
            "// OR — fix the typo to match the actual export.",
        fix: "Update the selective list to match the names actually declared " +
            "in the target file. ontodls only ever 'sees' top-level declarations; " +
            "private-to-file names don't exist in this DSL.",
    },
    W38: {
        code: "W38",
        title: "Writers of the same property declare different `effects:` sets",
        category: "advisory",
        description: "Two or more events write the same property but advertise " +
            "DIFFERENT effects sets. Where W37 is the general 'this prop has " +
            "multiple writers' advisory, W38 is the sharper variant: differing " +
            "effects usually means the writers produce different observable " +
            "side-effects on top of the same state mutation. Without explicit " +
            "ordering, interleaving them can publish inconsistent state across " +
            "different observation channels (e.g. one writer logs, another " +
            "broadcasts; concurrent execution sends mismatched data to each).",
        wrong: "kind Battery {\n" +
            "  property voltage: Real internal default 0.0;\n" +
            "  event read(v: Real) {\n" +
            "    pre: v.isFinite();\n" +
            "    modifies: self.voltage;\n" +
            "    effects: HardwareRead;\n" +
            "    writes: voltage;\n" +
            "  }\n" +
            "  event reset() {\n" +
            "    modifies: self.voltage;\n" +
            "    effects: NetworkBroadcast;   // ← different effects → W38\n" +
            "    writes: voltage;\n" +
            "  }\n" +
            "}",
        right: "Either align the effects sets (both events broadcast and read),\n" +
            "or document an explicit ordering (e.g. reset cannot run during\n" +
            "an active read cycle — encode as a phase guard).",
        fix: "Either unify the effects sets so the writers are interchangeable, " +
            "or document the required ordering as a phase / state guard in the " +
            "type. W38 is advisory; it doesn't fail compilation but it's the " +
            "kind of finding a safety-case reviewer asks about.",
    },
};
const KNOWN_CODES = Object.keys(CATALOG).sort();
/**
 * Implementation of `ontodsl explain <code>`. Returns the exit code.
 * Pure function over the catalog so tests can call it without a real
 * process.
 */
export function runExplain(args, streams) {
    if (args.length === 0) {
        streams.stderr.write("usage: ontodsl explain <code>\n" +
            `known codes: ${KNOWN_CODES.join(", ")}\n`);
        return 1;
    }
    const code = args[0].toUpperCase();
    const entry = CATALOG[code];
    if (!entry) {
        streams.stderr.write(`no manual entry for '${code}'.\n` +
            `documented codes: ${KNOWN_CODES.join(", ")}\n` +
            `(other codes may still be emitted; see src/semantic/* for the source of truth)\n`);
        return 1;
    }
    streams.stdout.write(`${entry.code} — ${entry.title}  [${entry.category}]\n`);
    streams.stdout.write(`\n${entry.description}\n`);
    if (entry.wrong) {
        streams.stdout.write(`\n  wrong:\n`);
        for (const line of entry.wrong.split("\n")) {
            streams.stdout.write(`    ${line}\n`);
        }
    }
    if (entry.right) {
        streams.stdout.write(`\n  right:\n`);
        for (const line of entry.right.split("\n")) {
            streams.stdout.write(`    ${line}\n`);
        }
    }
    streams.stdout.write(`\nfix: ${entry.fix}\n`);
    return 0;
}
/** Programmatic accessor used by tests + the AI feedback loop. */
export function getExplainEntry(code) {
    return CATALOG[code.toUpperCase()];
}
export function listKnownCodes() {
    return KNOWN_CODES;
}
//# sourceMappingURL=explain.js.map