export * from "./ast/index.js";
export * from "./parser/index.js";
export { validateSemantics, type SemanticError } from "./semantic/index.js";
export {
  renderMermaid,
  renderTypeDiagram,
  renderRelationDiagram,
  renderUseCaseDiagrams,
  type DiagramKind,
  type RenderOptions,
} from "./viz/index.js";
export {
  renderTypeScript,
  renderTypes,
  renderFactories,
  renderValidators,
  renderEventWrappers,
  renderCommitmentRegistries,
  type RenderTypeScriptOptions,
} from "./codegen/index.js";
export {
  renderRust,
  renderRustTypes,
  renderRustFactories,
  renderRustValidators,
  renderRustEventWrappers,
  renderRustCommitmentRegistries,
  type RenderRustOptions,
  type RenderRustOutput,
} from "./codegen-rust/index.js";
export {
  buildReactFlowGraph,
  categoryOf,
  stereotypeLabel,
  type EdgeCategory,
  type OntoEdge,
  type OntoEdgeData,
  type OntoGraph,
  type OntoNode,
  type OntoNodeData,
  type StereotypeCategory,
} from "./viz-react/index.js";
// Verificación Z3 + refinamiento inter-etapa (antes solo en el vendored
// parcheado del monorepo — "Path A retrofit"; upstreameado 2026-06-11).
export {
  verifyCommitmentDischarge,
  verifyCategoryMembership,
  verifyLSPContracts,
  verifyCommitmentPredicates,
  verifyTraceClauses,
  type LspDiagnostic,
  type CommitmentDischargeLink,
} from "./semantic/lspCheck.js";
export {
  mineRefinesAnnotations,
  type RefinesAnnotation,
  type RefinesTarget,
} from "./semantic/refinesMining.js";
export {
  checkInterStageRefinement,
  type InterStageDiagnostic,
  type InterStageReport,
  type CoverageLink,
  type DischargeLink,
  type LiskovCoverageLink,
} from "./semantic/interStageCheck.js";
export {
  checkPropertyCorrespondence,
  type PropertyCorrespondenceDiagnostic,
  type PropertyCorrespondenceReport,
} from "./semantic/propertyCorrespondence.js";
export { parseFile, type ParseFileResult, type MultiFileError } from "./parser/multiFile.js";
export { renderTanstack, type TanstackBundle } from "./codegen-tanstack/index.js";
export { renderC, type RenderCOptions, type RenderCOutput } from "./codegen-c/index.js";
export { renderRustProptestsForFile } from "./codegen-rust/index.js";
export {
  diffOnto,
  renderHumanReport,
  type DiffReport,
  type ClassifiedDiff,
  type Classification,
  type DiffEntry,
} from "./migration/diff.js";
// Catálogo de reparación para repair-loops de agentes (skill onto-contracts).
export { getExplainEntry, listKnownCodes } from "./cli/explain.js";
