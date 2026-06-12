/**
 * Idiomatic Rust name conversions.
 *
 * The DSL uses OCL/UFO conventions for identifiers — types in
 * PascalCase or all-caps (`AC_PID`, `DigitalLPF`), properties and
 * parameters in camelCase (`cutoffFreq`, `kP`). Rust's lint rules
 * (`non_camel_case_types`, `non_snake_case`) want PascalCase types
 * and snake_case fields/params/methods. Translate at codegen time so
 * the .onto can stay natural while the generated crate is idiomatic
 * and lint-clean.
 *
 * Examples (toRustTypeName):
 *   AC_PID          -> AcPid
 *   DigitalLPF      -> DigitalLpf
 *   Drone           -> Drone
 *   LowPassFilter2p -> LowPassFilter2p          (already PascalCase)
 *
 * Examples (toRustFieldName):
 *   kP              -> k_p
 *   cutoffFreq      -> cutoff_freq
 *   chargeLevel     -> charge_level
 *   resetFilter     -> reset_filter
 *   serialNumber    -> serial_number
 *   maxDeliveryRadius -> max_delivery_radius
 *   reset_I         -> reset_i                  (already has _)
 *   apply_internal  -> apply_internal           (already snake)
 *   x               -> x
 */
/**
 * Convert a UFO/OCL type identifier to PascalCase.
 *
 * Algorithm: split on underscores and on case boundaries
 * (camel|UpperRun|UpperFollowedByLower), then PascalCase each segment.
 */
export declare function toRustTypeName(s: string): string;
/**
 * Convert a UFO/OCL property, parameter, or event identifier to
 * snake_case. Idempotent for already-snake_case names.
 */
export declare function toRustFieldName(s: string): string;
//# sourceMappingURL=naming.d.ts.map