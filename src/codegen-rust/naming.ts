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
export function toRustTypeName(s: string): string {
  if (!s) return s;
  const words = splitIdentifier(s);
  return words.map(pascalize).join("");
}

/**
 * Convert a UFO/OCL property, parameter, or event identifier to
 * snake_case. Idempotent for already-snake_case names.
 */
export function toRustFieldName(s: string): string {
  if (!s) return s;
  const words = splitIdentifier(s);
  return words.map((w) => w.toLowerCase()).join("_");
}

/**
 * Split an identifier into its constituent "words" by:
 *   1. underscore boundaries (`AC_PID` -> ["AC", "PID"])
 *   2. lower→Upper transition (`camelCase` -> ["camel", "Case"])
 *   3. UpperRun→UpperLower transition (`LPFFilter` -> ["LPF", "Filter"])
 *   4. letter→digit transition (`Filter2p` -> ["Filter", "2p"]) only;
 *      `2p`/`v2`/etc. stay glued because Rust convention keeps the
 *      digit attached to the following lowercase letters as one unit.
 *
 * Empty segments are dropped.
 */
function splitIdentifier(s: string): string[] {
  // First inject spaces at every boundary, then split on whitespace.
  let buf = s
    .replace(/_+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([A-Za-z])(\d)/g, "$1 $2");
  return buf.split(/\s+/).filter((w) => w.length > 0);
}

function pascalize(word: string): string {
  if (word.length === 0) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
