/**
 * Phase Q3 / Paso 1 — Contract-witness test auto-generation.
 *
 * For each invariant + each event pre/post condition expressed in
 * OCL, emit a `#[test]` block that proves the contract under crafted
 * inputs. Two test shapes per witnessable clause:
 *
 *   - "violated_by_<corruption>" — supplies a value that should trip
 *     the clause; asserts the validator/wrapper reports the violation.
 *   - "holds_for_<normal>"        — supplies sane values; asserts the
 *     validator/wrapper does NOT trip.
 *
 * Output is plain `#[cfg(test)] mod contract_tests { … }` with no
 * external dev-deps — concrete test cases instead of randomized
 * properties. The advantages over a proptest emission:
 *   - works on any cargo version (proptest deps need edition2024 on
 *     newer releases),
 *   - test failures point to a single deterministic case,
 *   - faster CI (no shrinking).
 *
 * We keep "property-based" as the conceptual frame (each test is a
 * witness for the universally-quantified OCL clause) while emitting
 * concrete representative cases.
 *
 * Patterns covered (MVP):
 *
 *   INVARIANTS:
 *     - `self.<arrProp>->forAll(v | v.isFinite())`        → NaN at each index
 *     - `self.<arrProp>->forAll(v | v OP <lit>)`          → out-of-range injection
 *     - `self.<numProp>.isFinite()`                       → NaN
 *     - `self.<numProp> OP <lit>`                         → out-of-range
 *
 *   PRE-CONDITIONS (events):
 *     - `<param>.isFinite()`                              → NaN
 *     - `<param> OP <lit>`                                → out-of-range
 *
 *   POST-CONDITIONS (events with returnType):
 *     - `result OP <lit>`                                 → impl returning bad value Err
 *
 * Patterns deliberately NOT covered yet (would expand to 2x the code
 * and aren't blocking ArduPilot today — left as TODO):
 *   - Conjunctions in forAll bodies (`v | v.isFinite() and v >= 0`)
 *   - State-relation post-conditions (`self.x = self.x@pre + 1`)
 *   - `forAll`/`exists` on Set<NamedType> with property navigation
 */
import type { OntoFile } from "../ast/nodes.js";
import { type RustTargetConfig } from "./typeMapping.js";
export interface RenderProptestsResult {
    /** Emitted Rust test module text. Empty string when nothing to test. */
    readonly proptestsRs: string;
    /** Number of `#[test]` functions emitted. */
    readonly testCount: number;
}
export declare function renderRustProptests(file: OntoFile, cfg: RustTargetConfig): RenderProptestsResult;
//# sourceMappingURL=proptests.d.ts.map