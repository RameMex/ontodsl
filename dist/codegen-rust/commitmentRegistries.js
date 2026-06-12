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
import { rustMap, rustMapNew, rustMapInsert, } from "./typeMapping.js";
import { toRustFieldName, toRustTypeName } from "./naming.js";
export function renderRustCommitmentRegistries(file, cfg) {
    const commitments = file.declarations.filter((d) => d.kind === "CommitmentDecl");
    const ownIdentity = commitments.filter((c) => c.identity !== null);
    if (ownIdentity.length === 0)
        return "";
    const lines = [];
    lines.push("// ─── Commitment lifecycle registries ───");
    lines.push("");
    lines.push(...renderSharedTypes());
    lines.push("");
    for (const c of ownIdentity) {
        lines.push(...renderRegistry(c, cfg));
        lines.push("");
    }
    return lines.join("\n");
}
function renderSharedTypes() {
    return [
        `#[derive(Debug, Clone, Copy, PartialEq, Eq)]`,
        `pub enum CommitmentState {`,
        `    Pending,`,
        `    Fulfilled,`,
        `    Violated,`,
        `}`,
        ``,
        `pub struct CommitmentTransition<'a, C> {`,
        `    pub commitment: &'a C,`,
        `    pub previous_state: Option<CommitmentState>,`,
        `    pub new_state: CommitmentState,`,
        `}`,
    ];
}
function renderRegistry(c, cfg) {
    const typeName = toRustTypeName(c.name);
    const idType = `${typeName}Id`;
    const regName = `${typeName}Registry`;
    const commitmentsTy = rustMap(cfg, idType, typeName);
    const statesTy = rustMap(cfg, idType, "CommitmentState");
    const commitmentsCtor = rustMapNew(cfg, idType, typeName);
    const statesCtor = rustMapNew(cfg, idType, "CommitmentState");
    return [
        `pub struct ${regName}<L>`,
        `where L: FnMut(&CommitmentTransition<'_, ${typeName}>),`,
        `{`,
        `    commitments: ${commitmentsTy},`,
        `    states: ${statesTy},`,
        `    listener: Option<L>,`,
        `}`,
        ``,
        `impl<L> ${regName}<L>`,
        `where L: FnMut(&CommitmentTransition<'_, ${typeName}>),`,
        `{`,
        `    pub fn new() -> Self {`,
        `        Self {`,
        `            commitments: ${commitmentsCtor},`,
        `            states: ${statesCtor},`,
        `            listener: None,`,
        `        }`,
        `    }`,
        ``,
        `    pub fn with_listener(listener: L) -> Self {`,
        `        Self {`,
        `            commitments: ${commitmentsCtor},`,
        `            states: ${statesCtor},`,
        `            listener: Some(listener),`,
        `        }`,
        `    }`,
        ``,
        `    pub fn register(&mut self, commitment: ${typeName}) -> Result<(), &'static str> {`,
        `        let id = commitment.${toRustFieldName(c.identity.propertyName)}.clone();`,
        `        if self.commitments.contains_key(&id) {`,
        `            return Err("[${regName}] commitment already registered");`,
        `        }`,
        `        ${rustMapInsert(cfg, "self.commitments", "id.clone()", "commitment")}`,
        `        ${rustMapInsert(cfg, "self.states", "id.clone()", "CommitmentState::Pending")}`,
        `        if let Some(ref mut l) = self.listener {`,
        `            let c_ref = self.commitments.get(&id).unwrap();`,
        `            l(&CommitmentTransition {`,
        `                commitment: c_ref,`,
        `                previous_state: None,`,
        `                new_state: CommitmentState::Pending,`,
        `            });`,
        `        }`,
        `        Ok(())`,
        `    }`,
        ``,
        `    pub fn fulfill(&mut self, id: &${idType}) -> Result<(), &'static str> {`,
        `        self.transition(id, CommitmentState::Fulfilled)`,
        `    }`,
        ``,
        `    pub fn violate(&mut self, id: &${idType}) -> Result<(), &'static str> {`,
        `        self.transition(id, CommitmentState::Violated)`,
        `    }`,
        ``,
        `    pub fn get_state(&self, id: &${idType}) -> Option<CommitmentState> {`,
        `        self.states.get(id).copied()`,
        `    }`,
        ``,
        `    fn transition(&mut self, id: &${idType}, target: CommitmentState) -> Result<(), &'static str> {`,
        `        let current = self.states.get(id).copied();`,
        `        match current {`,
        `            None => Err("[${regName}] commitment not registered"),`,
        `            Some(CommitmentState::Fulfilled) | Some(CommitmentState::Violated) => {`,
        `                Err("[${regName}] commitment in terminal state")`,
        `            }`,
        `            Some(CommitmentState::Pending) => {`,
        `                ${rustMapInsert(cfg, "self.states", "id.clone()", "target")}`,
        `                if let Some(ref mut l) = self.listener {`,
        `                    let c_ref = self.commitments.get(id).unwrap();`,
        `                    l(&CommitmentTransition {`,
        `                        commitment: c_ref,`,
        `                        previous_state: Some(CommitmentState::Pending),`,
        `                        new_state: target,`,
        `                    });`,
        `                }`,
        `                Ok(())`,
        `            }`,
        `        }`,
        `    }`,
        `}`,
    ];
}
export function _typeCheck(_d) { }
//# sourceMappingURL=commitmentRegistries.js.map