/**
 * Shared types between experiment runner and ontodls verifier.
 * These types are the contract that the verifier in ontodls/ must implement.
 */

export interface VerificationInput {
  /** The .onto contract source as a string */
  contractSource: string
  /** The component code to verify (TSX/JSX) */
  generatedCode: string
  /** Optional: file path hint for better error messages */
  filePath?: string
}

export interface Violation {
  /** Stable id for tracking across runs */
  ruleId: string
  /** Which of the 4 categories this violation belongs to */
  category: "structure" | "props" | "semantics" | "a11y"
  /** Severity: error blocks; warning is informational */
  severity: "error" | "warning"
  /** Human-readable message for both AI feedback and reports */
  message: string
  /** Optional: line/column in generatedCode where violation was found */
  location?: {
    line: number
    column: number
  }
  /** Optional: snippet that caused the violation */
  evidence?: string
}

export interface VerificationResult {
  /** True if no error-severity violations found. Warnings allowed. */
  passed: boolean
  /** All violations found, both errors and warnings */
  violations: Violation[]
  /** Aggregate counts for quick scoring */
  stats: {
    errors: number
    warnings: number
    byCategory: {
      structure: number
      props: number
      semantics: number
      a11y: number
    }
  }
  /** Time spent verifying in milliseconds */
  durationMs: number
}

/**
 * The single function that ontodls/verifier.ts must export.
 * All experiment conditions call this same function.
 *
 * Behavior contract:
 * - MUST return synchronously OR as a Promise (await is fine)
 * - MUST NOT throw on malformed code; return violations instead
 * - MUST be deterministic: same input → same output
 * - SHOULD complete in under 5 seconds for typical components
 */
export type VerifyFn = (
  input: VerificationInput,
) => Promise<VerificationResult> | VerificationResult
