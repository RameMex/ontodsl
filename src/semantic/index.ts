export { validateSemantics, type SemanticError, buildDeclarationIndex, type DeclarationIndex } from "./validator.js";
export {
  verifyLSPContracts,
  verifyCommitmentPredicates,
  verifyCommitmentDischarge,
  verifyCategoryMembership,
  verifyTraceClauses,
  type LspDiagnostic,
  type CommitmentDischargeLink,
} from "./lspCheck.js";
export {
  mineRefinesAnnotations,
  type RefinesAnnotation,
  type RefinesTarget,
} from "./refinesMining.js";
export {
  checkInterStageRefinement,
  type InterStageDiagnostic,
  type InterStageReport,
  type CoverageLink,
  type DischargeLink,
  type LiskovCoverageLink,
} from "./interStageCheck.js";
export {
  checkPropertyCorrespondence,
  type PropertyCorrespondenceDiagnostic,
  type PropertyCorrespondenceReport,
} from "./propertyCorrespondence.js";
export {
  metaByName,
  metaOf,
  rigidityLevel,
  isAllowedSpecializationTarget,
  type StereotypeMeta,
  type StereotypeName,
  type Rigidity,
  type Sortality,
  type IdentityRule,
} from "./stereotypes.js";
export {
  parentsOf,
  detectCycles,
  chainOf,
  effectiveProperties,
  effectiveEvents,
  effectiveQueries,
  ownEvents,
  ownQueries,
  type TypeIndex,
} from "./inheritance.js";
