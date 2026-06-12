/**
 * Phase 15.6 — Rust commitment registries.
 *
 * For each CommitmentDecl with own identity, emit:
 *
 *   pub enum CommitmentState { Pending, Fulfilled, Violated }
 *
 *   pub struct CommitmentTransition<'a, C> {
 *       pub commitment: &'a C,
 *       pub previous_state: Option<CommitmentState>,
 *       pub new_state: CommitmentState,
 *   }
 *
 *   pub struct DeliveryRegistry<L = NoopListener>
 *   where L: FnMut(&CommitmentTransition<'_, Delivery>) {
 *       commitments: BTreeMap<DeliveryId, Delivery>,
 *       states: BTreeMap<DeliveryId, CommitmentState>,
 *       listener: Option<L>,
 *   }
 *
 *   impl<L> DeliveryRegistry<L> { register / fulfill / violate / get_state }
 *
 * State machine: pending → {fulfilled, violated}, both terminal.
 * Methods return Result<(), &'static str> with first-error semantics.
 */
import type { Declaration, OntoFile } from "../ast/index.js";
import { type RustTargetConfig } from "./typeMapping.js";
export declare function renderRustCommitmentRegistries(file: OntoFile, cfg: RustTargetConfig): string;
export declare function _typeCheck(_d: Declaration): void;
//# sourceMappingURL=commitmentRegistries.d.ts.map