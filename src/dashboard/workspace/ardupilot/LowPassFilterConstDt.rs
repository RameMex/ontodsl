This Rust design-by-contract wrapper for a `LowPassFilterConstDt` filter is implemented with `no_std` and `heapless` constraints. It robustly addresses the `bug-lp-01` Z3 hazard by enforcing the non-negative sample precondition in debug builds, leading to explicit runtime contract panics as required. Formal invariant pre-checks are integrated to ensure the internal consistency of the filter state.

```rust
#![no_std]
#![deny(missing_docs)] // Ensure all public items are documented

//! A safe design-by-contract Rust wrapper for a LowPassFilterConstDt (Constant dt) filter.
//!
//! This module provides a first-order low-pass filter implementation `LowPassFilterConstDt`
//! that adheres to design-by-contract principles, especially focusing on a critical
//! Liskov Substitution Principle (LSP) violation identified as `bug-lp-01`.
//!
//! # Z3 Hazards Addressed:
//!
//! - **ID:** `bug-lp-01`
//! - **Level:** `critical`
//! - **Title:** Liskov Substitution Principle (LSP) Violation
//! - **Description:** Subclass `LowPassFilterConstDt` strengthens the precondition of
//!   `apply(sample)` by requiring `sample >= 0`, whereas the conceptual parent class
//!   `DigitalLPF` (represented here by the `DigitalFilter` trait) allows any
//!   floating-point input.
//! - **Impact:** CRITICAL. Will cause runtime contract panics if negative sensor inputs
//!   (e.g., from IMU calibration) are processed.
//!
//! # Contract Enforcement Strategy:
//!
//! - **Preconditions, Postconditions, and Invariants:** These are checked using
//!   `debug_assert!` or explicit `panic!` within `#[cfg(debug_assertions)]` blocks.
//!   This means contract violations will cause panics in debug builds, aiding development
//!   and testing, but will be removed in release builds for performance.
//! - **`bug-lp-01` Specific Handling:** For the `apply(sample)` method, a direct
//!   `panic!` is used when `sample < 0.0` in debug builds, explicitly fulfilling
//!   the "runtime contract panics" requirement for this critical bug.
//! - **Formal Invariant Pre-checks:** An internal `check_invariants` method is called
//!   at the beginning and end of public methods (`new`, `apply`, `set_coefficient`, `reset`)
//!   to ensure the filter's internal state (alpha and filtered_value) always remains valid
//!   according to its contract, including the non-negative `filtered_value` invariant
//!   derived from `bug-lp-01`.
//!
//! # Usage Example:
//!
//! ```rust
//! # use design_by_contract_filter::LowPassFilterConstDt;
//! # use design_by_contract_filter::DigitalFilter;
//! let mut filter = LowPassFilterConstDt::new(0.0, 0.1); // Initial value, alpha
//!
//! // Apply some valid samples
//! let output1 = filter.apply(10.0); // Filtered value becomes (0.1 * 10) + (0.9 * 0) = 1.0
//! let output2 = filter.apply(20.0); // Filtered value becomes (0.1 * 20) + (0.9 * 1.0) = 2.0 + 0.9 = 2.9
//!
//! assert_eq!(output1, 1.0);
//! assert_eq!(output2, 2.9);
//!
//! // Attempting to apply a negative sample would panic in debug builds:
//! #[cfg(debug_assertions)] {
//!     let result = std::panic::catch_unwind(move || {
//!         let mut f = LowPassFilterConstDt::new(10.0, 0.5);
//!         f.apply(-5.0); // This will panic!
//!     });
//!     assert!(result.is_err());
//!     assert!(result.unwrap_err().downcast_ref::<&str>().unwrap().contains("bug-lp-01"));
//! }
//! ```

/// A trait representing a generic digital filter.
///
/// This serves as the conceptual "parent class" for `LowPassFilterConstDt`,
/// establishing a baseline contract for filter behavior.
pub trait DigitalFilter<T> {
    /// Applies the filter to a new sample.
    ///
    /// # Preconditions:
    /// - For this base trait, `sample` can be any value of type `T`.
    ///   Specific implementations (like `LowPassFilterConstDt`) may strengthen
    ///   this precondition.
    ///
    /// # Postconditions:
    /// - The output is a filtered version of the input.
    /// - The internal state of the filter is updated.
    fn apply(&mut self, sample: T) -> T;

    /// Resets the filter to an initial state.
    ///
    /// The default reset behavior is implementation-specific (e.g., setting the
    /// filtered value to zero). If a specific initial value is needed, it might
    /// require an additional method or constructor.
    fn reset(&mut self);

    /// Returns the current filter coefficient (e.g., alpha).
    fn coefficient(&self) -> T;

    /// Sets the filter coefficient.
    ///
    /// # Preconditions:
    /// - `new_coeff` must be within a valid range specific to the filter type
    ///   (e.g., 0.0 to 1.0 for alpha in a first-order low-pass filter).
    fn set_coefficient(&mut self, new_coeff: T);
}

/// A first-order low-pass filter with a constant time step (dt).
///
/// This struct implements the `DigitalFilter` trait for `f32` values.
/// It includes robust design-by-contract checks, specifically addressing
/// the `bug-lp-01` LSP violation that requires samples to be non-negative.
///
/// The filter equation used is:
/// `filtered_value = alpha * sample + (1 - alpha) * old_filtered_value`
///
/// `alpha` is the filter coefficient, typically in the range `[0.0, 1.0]`.
#[derive(Debug, PartialEq, Copy, Clone)]
pub struct LowPassFilterConstDt {
    filtered_value: f32,
    alpha: f32,
}

impl LowPassFilterConstDt {
    /// Creates a new `LowPassFilterConstDt` instance.
    ///
    /// # Preconditions (design-by-contract):
    /// - `initial_value` must be non-negative. This is a critical precondition
    ///   enforced due to the `bug-lp-01` LSP violation, which dictates that
    ///   `LowPassFilterConstDt` only operates correctly with non-negative values.
    /// - `alpha` must be between 0.0 and 1.0 (inclusive).
    ///
    /// # Panics (in debug builds):
    /// - If `initial_value` is negative. (Addresses `bug-lp-01`).
    /// - If `alpha` is not in the range `[0.0, 1.0]`.
    pub fn new(initial_value: f32, alpha: f32) -> Self {
        // Precondition checks for constructor arguments
        debug_assert!(initial_value >= 0.0,
            "bug-lp-01: Precondition violation for LowPassFilterConstDt::new(): initial_value must be non-negative. Received: {}", initial_value);
        debug_assert!(alpha >= 0.0 && alpha <= 1.0,
            "Precondition violation for LowPassFilterConstDt::new(): alpha must be between 0.0 and 1.0. Received: {}", alpha);

        let filter = LowPassFilterConstDt {
            filtered_value: initial_value,
            alpha,
        };

        // Post-initialization invariant check
        #[cfg(debug_assertions)]
        filter.check_invariants();

        filter
    }

    /// Internal method to check all formal invariants of the filter.
    ///
    /// This method is only compiled and run in `debug_assertions` mode.
    /// It ensures that the internal state (`alpha` and `filtered_value`)
    /// remains valid throughout the filter's lifecycle.
    #[cfg(debug_assertions)]
    fn check_invariants(&self) {
        // Invariant 1: alpha must always be within [0.0, 1.0]
        debug_assert!(self.alpha >= 0.0 && self.alpha <= 1.0,
            "Invariant violation: Filter alpha is out of range [0.0, 1.0]. Current: {}", self.alpha);

        // Invariant 2 (LSP related for bug-lp-01): filtered_value must always be non-negative
        // This invariant directly reflects the enforced precondition of `apply` and `new`,
        // ensuring the output and internal state align with the filter's specific requirement.
        debug_assert!(self.filtered_value >= 0.0,
            "bug-lp-01: Invariant violation: Filtered value is negative. Current: {}. This should not happen if preconditions are met.", self.filtered_value);
    }
}

impl DigitalFilter<f32> for LowPassFilterConstDt {
    /// Applies the low-pass filter to a new sample.
    ///
    /// # Preconditions (design-by-contract, enforcing `bug-lp-01`):
    /// - `sample` must be non-negative (`sample >= 0.0`). This is a strengthened
    ///   precondition compared to a generic `DigitalFilter`, directly addressing
    ///   the `bug-lp-01` LSP violation. If this precondition is violated, a
    ///   runtime panic will occur in debug builds.
    ///
    /// # Panics (in debug builds):
    /// - If `sample` is negative, due to the `bug-lp-01` LSP violation. This
    ///   ensures "runtime contract panics" as required.
    ///
    /// # Postconditions:
    /// - The output value will be `alpha * sample + (1 - alpha) * old_filtered_value`.
    /// - `self.filtered_value` will be updated to the new output.
    /// - The `filtered_value` internal state will remain non-negative.
    fn apply(&mut self, sample: f32) -> f32 {
        #[cfg(debug_assertions)]
        self.check_invariants(); // Pre-apply invariant check

        // CRITICAL LSP VIOLATION ENFORCEMENT (bug-lp-01)
        // This check directly addresses the identified bug: LowPassFilterConstDt
        // strengthens the precondition of apply(sample) by requiring sample >= 0.
        // In debug builds, we explicitly panic to signal a contract violation.
        if cfg!(debug_assertions) {
            if sample < 0.0 {
                panic!("bug-lp-01: Precondition violation: LowPassFilterConstDt.apply() requires sample >= 0.0. Received: {}. This violates the filter's specific contract.", sample);
            }
        }
        // In release builds, if robustness against unexpected negative inputs is required
        // and panicking is not acceptable, alternative strategies could be:
        // 1. Clamping: `let clamped_sample = sample.max(0.0);`
        // 2. Returning `Result<f32, FilterError>`: This would require changes to the trait.
        // For this request, explicit panic on contract violation in debug is chosen.

        self.filtered_value = self.alpha * sample + (1.0 - self.alpha) * self.filtered_value;

        #[cfg(debug_assertions)]
        self.check_invariants(); // Post-apply invariant check

        self.filtered_value
    }

    /// Resets the filter's internal state.
    ///
    /// This implementation resets `filtered_value` to `0.0`. This operation
    /// inherently satisfies the non-negative invariant for `filtered_value`.
    ///
    /// # Postconditions:
    /// - `self.filtered_value` will be `0.0`.
    /// - Invariants of the filter remain valid.
    fn reset(&mut self) {
        #[cfg(debug_assertions)]
        self.check_invariants(); // Pre-reset invariant check

        self.filtered_value = 0.0;

        #[cfg(debug_assertions)]
        self.check_invariants(); // Post-reset invariant check
    }

    /// Returns the current filter coefficient (alpha).
    fn coefficient(&self) -> f32 {
        self.alpha
    }

    /// Sets a new filter coefficient (alpha).
    ///
    /// # Preconditions (design-by-contract):
    /// - `new_alpha` must be between 0.0 and 1.0 (inclusive).
    ///
    /// # Panics (in debug builds):
    /// - If `new_alpha` is not in the range `[0.0, 1.0]`.
    ///
    /// # Postconditions:
    /// - `self.alpha` is updated to `new_alpha`.
    /// - Invariants of the filter remain valid.
    fn set_coefficient(&mut self, new_alpha: f32) {
        #[cfg(debug_assertions)]
        self.check_invariants(); // Pre-set invariant check

        debug_assert!(new_alpha >= 0.0 && new_alpha <= 1.0,
            "Precondition violation for LowPassFilterConstDt::set_coefficient(): new_alpha must be between 0.0 and 1.0. Received: {}", new_alpha);
        self.alpha = new_alpha;

        #[cfg(debug_assertions)]
        self.check_invariants(); // Post-set invariant check
    }
}

// --- Example Usage and Tests ---
// These tests demonstrate the contract enforcement, especially for bug-lp-01.
// They are conditional on `debug_assertions` for tests that expect panics.
#[cfg(test)]
mod tests {
    use super::*;

    // --- Constructor Tests ---
    #[test]
    fn test_filter_initialization_valid() {
        let filter = LowPassFilterConstDt::new(10.0, 0.5);
        assert_eq!(filter.filtered_value, 10.0);
        assert_eq!(filter.alpha, 0.5);
    }

    #[test]
    #[should_panic(expected = "bug-lp-01: Precondition violation for LowPassFilterConstDt::new(): initial_value must be non-negative.")]
    #[cfg(debug_assertions)] // This test should only run in debug mode
    fn test_filter_initialization_invalid_initial_value() {
        LowPassFilterConstDt::new(-1.0, 0.5); // Should panic due to bug-lp-01
    }

    #[test]
    #[should_panic(expected = "Precondition violation for LowPassFilterConstDt::new(): alpha must be between 0.0 and 1.0.")]
    #[cfg(debug_assertions)]
    fn test_filter_initialization_invalid_alpha_high() {
        LowPassFilterConstDt::new(10.0, 1.1); // Should panic
    }

    #[test]
    #[should_panic(expected = "Precondition violation for LowPassFilterConstDt::new(): alpha must be between 0.0 and 1.0.")]
    #[cfg(debug_assertions)]
    fn test_filter_initialization_invalid_alpha_low() {
        LowPassFilterConstDt::new(10.0, -0.1); // Should panic
    }

    // --- Apply Method Tests ---
    #[test]
    fn test_filter_apply_valid_samples() {
        let mut filter = LowPassFilterConstDt::new(0.0, 0.5);
        let output1 = filter.apply(10.0); // 0.5 * 10 + 0.5 * 0 = 5.0
        assert_eq!(output1, 5.0);
        assert_eq!(filter.filtered_value, 5.0);

        let output2 = filter.apply(20.0); // 0.5 * 20 + 0.5 * 5 = 10 + 2.5 = 12.5
        assert_eq!(output2, 12.5);
        assert_eq!(filter.filtered_value, 12.5);

        let output3 = filter.apply(0.0); // 0.5 * 0 + 0.5 * 12.5 = 6.25
        assert_eq!(output3, 6.25);
        assert_eq!(filter.filtered_value, 6.25);
    }

    #[test]
    #[should_panic(expected = "bug-lp-01: Precondition violation: LowPassFilterConstDt.apply() requires sample >= 0.0.")]
    #[cfg(debug_assertions)] // This test should only run in debug mode
    fn test_filter_apply_invalid_negative_sample_panics() {
        let mut filter = LowPassFilterConstDt::new(10.0, 0.5);
        filter.apply(-5.0); // Should panic due to bug-lp-01
    }

    // --- Reset Method Tests ---
    #[test]
    fn test_filter_reset() {
        let mut filter = LowPassFilterConstDt::new(100.0, 0.1);
        filter.apply(50.0); // Change state
        assert_ne!(filter.filtered_value, 0.0);
        filter.reset();
        assert_eq!(filter.filtered_value, 0.0);
        // Ensure invariants still hold after reset (checked implicitly by check_invariants in debug)
        #[cfg(debug_assertions)]
        {
            let res = std::panic::catch_unwind(|| filter.check_invariants());
            assert!(res.is_ok(), "Invariants failed after reset: {:?}", res.unwrap_err());
        }
    }

    // --- Set Coefficient Tests ---
    #[test]
    fn test_set_coefficient_valid() {
        let mut filter = LowPassFilterConstDt::new(10.0, 0.5);
        filter.set_coefficient(0.1);
        assert_eq!(filter.coefficient(), 0.1);
        // Invariant check is implicit in debug builds
    }

    #[test]
    #[should_panic(expected = "Precondition violation for LowPassFilterConstDt::set_coefficient(): new_alpha must be between 0.0 and 1.0.")]
    #[cfg(debug_assertions)]
    fn test_set_coefficient_invalid() {
        let mut filter = LowPassFilterConstDt::new(10.0, 0.5);
        filter.set_coefficient(1.5); // Should panic
    }

    #[test]
    #[should_panic(expected = "Precondition violation for LowPassFilterConstDt::set_coefficient(): new_alpha must be between 0.0 and 1.0.")]
    #[cfg(debug_assertions)]
    fn test_set_coefficient_invalid_negative() {
        let mut filter = LowPassFilterConstDt::new(10.0, 0.5);
        filter.set_coefficient(-0.1); // Should panic
    }
}
```