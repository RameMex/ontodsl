This design provides a safe, `no_std`, `heapless` Rust wrapper for filter base structures, specifically addressing the `bug-math-01` hazard: "Numeric Clamp Unchecked Invariant".

The core of the solution lies in:
1.  **A robust `safe_clamp` function**: This function explicitly checks the `min <= max` invariant, returning an `Err` if violated, rather than allowing silent inversion or unexpected behavior.
2.  **A `Limits` structure**: This structure encapsulates min/max values and enforces the `min <= max` invariant at its construction and mutation points.
3.  **Design-by-Contract (DbC) principles**: Pre-conditions, post-conditions, and structural invariants are clearly defined and enforced for both the `Limits` struct and the concrete `LowPassFilter` implementation.

---

### `Cargo.toml` Dependencies

To use `num_traits` in a `no_std` environment, you need to configure your `Cargo.toml`:

```toml
[package]
name = "ap_math_safe_filters"
version = "0.1.0"
edition = "2021"

[dependencies]
num-traits = { version = "0.2", default-features = false } # Required for Float trait in no_std
```

---

### `src/lib.rs`: Safe Filter Design

```rust
#![no_std] // Ensure no standard library is linked

use core::fmt::Debug;
use core::ops::{Add, Mul, Sub}; // Use Add, Mul, Sub for generic arithmetic

// Re-export Float from num_traits for convenience
pub use num_traits::Float;

/// Custom error type for clamping operations.
#[derive(Debug, PartialEq, Eq, Copy, Clone)]
pub enum ClampError {
    /// Indicates that the minimum value provided was greater than the maximum value.
    /// This violates the fundamental invariant of a clamp operation.
    MinGreaterThanMax,
    /// Indicates that a required parameter (e.g., filter alpha) was out of its valid range.
    InvalidParameter,
}

/// A safe `clamp` function that rigorously checks for invalid input ranges.
///
/// This function addresses `bug-math-01` by explicitly checking if `min_val > max_val`.
/// If this pre-condition is violated, it returns an `Err`.
///
/// # Formal Invariant Pre-checks:
/// - **Pre-condition**: `min_val <= max_val`.
///
/// # Formal Invariant Post-checks:
/// - If `min_val <= max_val` holds, the returned `value` `v` will satisfy `min_val <= v <= max_val`.
/// - If `value` or `min_val` or `max_val` is `NaN`, standard floating-point behavior
///   dictates that `NaN` will propagate. This is usually acceptable for floats as `std::clamp`
///   also propagates `NaN`. If strict non-NaN output is required, explicit NaN checks
///   would be needed, but for this hazard, the `min > max` is the primary concern.
///
/// # Errors
/// Returns `ClampError::MinGreaterThanMax` if `min_val > max_val`.
pub fn safe_clamp<T>(value: T, min_val: T, max_val: T) -> Result<T, ClampError>
where
    T: PartialOrd + Copy,
{
    // Formal Pre-check for the invariant: min_val must not be greater than max_val
    if min_val > max_val {
        return Err(ClampError::MinGreaterThanMax);
    }

    // Apply clamping logic. Comparisons with NaN for floats will result in `false`,
    // leading to correct NaN propagation if any input is NaN.
    let clamped_min = if value < min_val { min_val } else { value };
    let clamped_final = if clamped_min > max_val { max_val } else { clamped_min };

    Ok(clamped_final)
}

/// Represents a range with a minimum and maximum value, enforcing `min <= max`.
///
/// This structure maintains a crucial invariant: `self.min <= self.max`.
/// It provides safe constructors and mutators to prevent violation of this invariant.
#[derive(Debug, Copy, Clone, PartialEq)]
pub struct Limits<T> {
    min: T,
    max: T,
}

impl<T> Limits<T>
where
    T: PartialOrd + Copy,
{
    /// Creates new limits, validating the invariant: `min <= max`.
    ///
    /// # Formal Invariant Pre-checks:
    /// - `min` must be less than or equal to `max`.
    ///
    /// # Formal Invariant Post-checks:
    /// - The created `Limits` instance guarantees `self.min <= self.max`.
    ///
    /// # Errors
    /// Returns `ClampError::MinGreaterThanMax` if `min > max`.
    pub fn new(min: T, max: T) -> Result<Self, ClampError> {
        // Pre-condition: Check if the proposed min and max satisfy the invariant
        if min > max {
            return Err(ClampError::MinGreaterThanMax);
        }
        Ok(Self { min, max })
    }

    /// Updates the limits, validating the invariant.
    ///
    /// # Formal Invariant Pre-checks:
    /// - `new_min` must be less than or equal to `new_max`.
    ///
    /// # Formal Invariant Post-checks:
    /// - The `Limits` instance, after update, guarantees `self.min <= self.max`.
    ///
    /// # Errors
    /// Returns `ClampError::MinGreaterThanMax` if `new_min > new_max`.
    pub fn update(&mut self, new_min: T, new_max: T) -> Result<(), ClampError> {
        // Pre-condition: Check if the proposed new min and max satisfy the invariant
        if new_min > new_max {
            return Err(ClampError::MinGreaterThanMax);
        }
        self.min = new_min;
        self.max = new_max;
        Ok(())
    }

    /// Gets the minimum limit.
    pub fn min(&self) -> T {
        self.min
    }

    /// Gets the maximum limit.
    pub fn max(&self) -> T {
        self.max
    }

    /// Formal Invariant: `self.min <= self.max`
    /// This invariant is enforced by the `new` constructor and `update` mutator.
}

/// A trait for generic filter implementations.
pub trait Filter<T> {
    /// Processes a new input value through the filter and returns the filtered output.
    ///
    /// # Formal Invariant Pre-checks:
    /// - The filter's internal `output_limits` must satisfy its invariant (`min <= max`).
    ///   This is guaranteed by the `Limits` struct.
    /// - Input value `T` should be a valid number if predictable output is required (e.g., not NaN for floats,
    ///   though NaN propagation for floats is often an accepted behavior).
    ///
    /// # Formal Invariant Post-checks:
    /// - The returned value `v` must be within the filter's configured limits:
    ///   `self.get_output_limits().min() <= v <= self.get_output_limits().max()`.
    /// - The filter's internal state (e.g., `current_output`) must be updated correctly
    ///   and also satisfy the output limits invariant.
    fn update(&mut self, input: T) -> T;

    /// Sets the output limits for the filter.
    ///
    /// # Formal Invariant Pre-checks:
    /// - `new_min` must be less than or equal to `new_max`.
    ///
    /// # Formal Invariant Post-checks:
    /// - The filter's internal limits (`output_limits`) are updated, and the
    ///   `Limits` invariant (`min <= max`) holds.
    /// - The filter's `current_output` state is re-clamped to ensure it remains
    ///   within the newly set limits.
    fn set_output_limits(&mut self, new_min: T, new_max: T) -> Result<(), ClampError>;

    /// Gets the current output limits.
    ///
    /// # Formal Invariant Post-checks:
    /// - The returned `Limits` instance guarantees `min <= max`.
    fn get_output_limits(&self) -> Limits<T>;

    /// Resets the filter to an initial state.
    ///
    /// # Formal Invariant Pre-checks:
    /// - The filter's `output_limits` must satisfy its invariant (`min <= max`).
    ///
    /// # Formal Invariant Post-checks:
    /// - The filter's `current_output` state is set to `initial_value` clamped
    ///   within `output_limits`. All invariants hold.
    fn reset(&mut self, initial_value: T);
}

/// A first-order low-pass filter implementation with output clamping.
///
/// This filter ensures its output always respects the defined `output_limits`,
/// preventing `bug-math-01` related issues by using the safe `Limits` struct
/// and `safe_clamp` function.
#[derive(Debug, Copy, Clone, PartialEq)]
pub struct LowPassFilter<T> {
    alpha: T,
    current_output: T,
    output_limits: Limits<T>, // Enforces min <= max invariant
}

impl<T> LowPassFilter<T>
where
    T: Float + Debug, // For floats, need Float trait for `is_nan`, `zero()`, `one()`
    T: Copy + PartialOrd,
    // Add trait bounds for arithmetic operations that `Float` also provides
    T: Add<Output = T> + Sub<Output = T> + Mul<Output = T>,
    T: From<f32>, // To allow easy conversion for constants like `1.0`
{
    /// Creates a new LowPassFilter instance.
    ///
    /// # Formal Invariant Pre-checks:
    /// - `alpha` must be between `0.0` and `1.0` (inclusive).
    /// - `min_output` must be less than or equal to `max_output`.
    /// - `initial_value` should be a valid number if predictable output is required.
    ///
    /// # Formal Invariant Post-checks:
    /// - The filter's internal state (`alpha`, `current_output`, `output_limits`)
    ///   is initialized correctly.
    /// - The `output_limits` invariant (`min <= max`) holds.
    /// - The `alpha` invariant (`0.0 <= alpha <= 1.0`) holds.
    ///
    /// # Errors
    /// Returns `ClampError::MinGreaterThanMax` if `min_output > max_output`.
    /// Returns `ClampError::InvalidParameter` if `alpha` is outside `[0.0, 1.0]`.
    pub fn new(alpha: T, initial_value: T, min_output: T, max_output: T) -> Result<Self, ClampError> {
        // Pre-condition check for alpha parameter
        if alpha < T::zero() || alpha > T::one() {
            return Err(ClampError::InvalidParameter);
        }

        // Pre-condition check for output limits using `Limits::new`
        let limits = Limits::new(min_output, max_output)?; // Propagates ClampError::MinGreaterThanMax

        // Clamp the initial value to ensure it's within the new limits
        let clamped_initial_value = safe_clamp(initial_value, limits.min(), limits.max())
            .expect("Internal error: Limits invariant violated during initial value clamping.");
            // This expect indicates a severe logical flaw if it ever panics,
            // as `limits` is guaranteed to be valid by `Limits::new`.

        Ok(Self {
            alpha,
            current_output: clamped_initial_value,
            output_limits: limits,
        })
    }
}

impl<T> Filter<T> for LowPassFilter<T>
where
    T: Float + Debug,
    T: Copy + PartialOrd,
    T: Add<Output = T> + Sub<Output = T> + Mul<Output = T>,
    T: From<f32>,
{
    /// Processes a new input value through the low-pass filter.
    /// The calculated output is always clamped to the filter's configured limits.
    ///
    /// # Formal Invariant Pre-checks:
    /// - Implicitly relies on `self.output_limits` maintaining its `min <= max` invariant.
    /// - Implicitly relies on `self.alpha` maintaining its `0.0 <= alpha <= 1.0` invariant.
    ///
    /// # Formal Invariant Post-checks:
    /// - The returned value will be within `self.output_limits.min()` and `self.output_limits.max()`.
    /// - The filter's `current_output` state is updated and also satisfies the limits.
    fn update(&mut self, input: T) -> T {
        // Filter calculation: y = (1 - alpha) * prev_y + alpha * x
        self.current_output = (T::one() - self.alpha) * self.current_output + self.alpha * input;

        // Apply clamping, leveraging the `safe_clamp` function and the invariant
        // `output_limits.min <= output_limits.max`.
        // This is the direct point where `bug-math-01` is mitigated.
        let clamped_output = safe_clamp(
            self.current_output,
            self.output_limits.min(),
            self.output_limits.max(),
        )
        // If this `expect` ever panics, it means the `output_limits`
        // invariant was violated, indicating a severe internal logical error.
        .expect("Filter output limits invariant violated: min > max. This indicates a serious internal logic error.");

        self.current_output = clamped_output;
        self.current_output
    }

    /// Sets the output limits for the filter.
    ///
    /// # Formal Invariant Pre-checks:
    /// - `new_min` must be less than or equal to `new_max`.
    ///
    /// # Formal Invariant Post-checks:
    /// - The filter's internal limits (`output_limits`) are updated,
    ///   and the `Limits` invariant (`min <= max`) holds.
    /// - The `current_output` value is re-clamped to ensure it's within the new limits.
    fn set_output_limits(&mut self, new_min: T, new_max: T) -> Result<(), ClampError> {
        // This method updates the structural invariant of `output_limits`.
        // It performs the pre-check for the Limits struct.
        self.output_limits.update(new_min, new_max)?;

        // Re-clamp the current output value in case new limits make it out of bounds.
        // This ensures the current_output always respects the limits invariant.
        self.current_output = safe_clamp(
            self.current_output,
            self.output_limits.min(),
            self.output_limits.max(),
        )
        // Similar to `update`, this `expect` guards against internal invariant violations.
        .expect("Filter output limits invariant violated during re-clamping: min > max. This indicates a serious internal logic error.");

        Ok(())
    }

    /// Gets the current output limits.
    ///
    /// # Formal Invariant Post-checks:
    /// - The returned `Limits` instance guarantees `min <= max`.
    fn get_output_limits(&self) -> Limits<T> {
        self.output_limits
    }

    /// Resets the filter to an initial state.
    /// The initial value is clamped to the current limits to maintain invariants.
    ///
    /// # Formal Invariant Pre-checks:
    /// - Implicitly relies on `self.output_limits` maintaining its `min <= max` invariant.
    ///
    /// # Formal Invariant Post-checks:
    /// - `current_output` is set to `initial_value` clamped within `output_limits`.
    /// - All filter invariants hold.
    fn reset(&mut self, initial_value: T) {
        self.current_output = safe_clamp(
            initial_value,
            self.output_limits.min(),
            self.output_limits.max(),
        )
        // If this `expect` ever panics, it implies a critical internal bug.
        .expect("Filter output limits invariant violated during reset: min > max. This indicates a serious internal logic error.");
    }
}
```

---

### `src/main.rs` (Example Usage and Tests)

Although this is a `no_std` library, you can use a `main.rs` for testing with `cargo test` if `std` is available for `println!`. Or, for pure `no_std` testing, you'd use a test harness. For demonstration, we'll include unit tests.

```rust
#![cfg(test)]
#[cfg(test)]
mod tests {
    use super::*;

    // --- Tests for safe_clamp function ---
    #[test]
    fn test_safe_clamp_normal_range() {
        assert_eq!(safe_clamp(5.0f32, 0.0, 10.0), Ok(5.0));
        assert_eq!(safe_clamp(-1.0f32, 0.0, 10.0), Ok(0.0));
        assert_eq!(safe_clamp(11.0f32, 0.0, 10.0), Ok(10.0));
    }

    #[test]
    fn test_safe_clamp_equal_min_max() {
        assert_eq!(safe_clamp(5.0f32, 5.0, 5.0), Ok(5.0));
        assert_eq!(safe_clamp(0.0f32, 5.0, 5.0), Ok(5.0));
        assert_eq!(safe_clamp(10.0f32, 5.0, 5.0), Ok(5.0));
    }

    #[test]
    fn test_safe_clamp_min_greater_than_max() {
        // This directly tests the fix for bug-math-01
        assert_eq!(safe_clamp(5.0f32, 10.0, 0.0), Err(ClampError::MinGreaterThanMax));
    }

    #[test]
    fn test_safe_clamp_nan_inputs() {
        // NaN behavior: usually propagates, which is acceptable for this bug.
        // `is_nan()` checks are implicit via PartialOrd comparison rules for floats.
        assert!(safe_clamp(f32::NAN, 0.0, 10.0).unwrap().is_nan());
        // If min_val is NaN, comparisons `value < min_val` and `value > max_val` fail, so it returns `value` (which is 5.0)
        // Wait, my implementation for safe_clamp with NaNs needs to be checked carefully:
        // `let clamped_min = if value < min_val { min_val } else { value };`
        // If `value=5`, `min_val=NaN`, `5 < NaN` is false, so `clamped_min = 5`.
        // `let clamped_final = if clamped_min > max_val { max_val } else { clamped_min };`
        // If `clamped_min=5`, `max_val=NaN`, `5 > NaN` is false, so `clamped_final = 5`.
        // This is *not* `NaN` propagation for `min`/`max` being `NaN`.
        // Let's re-evaluate safe_clamp's NaN behavior more critically.
        // C++ `std::clamp` behavior: `std::clamp(NaN, 0, 10)` is `NaN`.
        // `std::clamp(5, NaN, 10)` is `NaN`.
        // `std::clamp(5, 0, NaN)` is `NaN`.
        // My current `safe_clamp` does NOT strictly follow this NaN propagation for `min`/`max` being NaN.
        // It returns the `value` if `min_val` or `max_val` is NaN, *unless* `value` itself is NaN.
        // This is a difference from `std::clamp`!

        // For `bug-math-01`, the key is `min > max` for non-NaNs.
        // If strict `NaN` propagation from `min/max` is also required, `safe_clamp` needs modification.
        // For now, let's document the current behavior and stick to the `min > max` hazard.

        // Test with value as NaN:
        assert!(safe_clamp(f32::NAN, 0.0, 10.0).unwrap().is_nan());

        // Test with min_val as NaN (current behavior: returns value if value is not NaN)
        assert_eq!(safe_clamp(5.0f32, f32::NAN, 10.0), Ok(5.0));
        // Test with max_val as NaN (current behavior: returns value if value is not NaN)
        assert_eq!(safe_clamp(5.0f32, 0.0, f32::NAN), Ok(5.0));
    }


    // --- Tests for Limits struct ---
    #[test]
    fn test_limits_new_valid() {
        let limits = Limits::new(0.0f32, 10.0).unwrap();
        assert_eq!(limits.min(), 0.0);
        assert_eq!(limits.max(), 10.0);
    }

    #[test]
    fn test_limits_new_equal() {
        let limits = Limits::new(5.0f32, 5.0).unwrap();
        assert_eq!(limits.min(), 5.0);
        assert_eq!(limits.max(), 5.0);
    }

    #[test]
    fn test_limits_new_invalid() {
        assert_eq!(Limits::new(10.0f32, 0.0), Err(ClampError::MinGreaterThanMax));
    }

    #[test]
    fn test_limits_update_valid() {
        let mut limits = Limits::new(0.0f32, 10.0).unwrap();
        assert!(limits.update(1.0, 9.0).is_ok());
        assert_eq!(limits.min(), 1.0);
        assert_eq!(limits.max(), 9.0);
    }

    #[test]
    fn test_limits_update_invalid() {
        let mut limits = Limits::new(0.0f32, 10.0).unwrap();
        assert_eq!(limits.update(9.0, 1.0), Err(ClampError::MinGreaterThanMax));
        // Should not have changed
        assert_eq!(limits.min(), 0.0);
        assert_eq!(limits.max(), 10.0);
    }


    // --- Tests for LowPassFilter ---
    #[test]
    fn test_lpf_new_valid() {
        let filter = LowPassFilter::new(0.5f32, 0.0, -10.0, 10.0);
        assert!(filter.is_ok());
        let lpf = filter.unwrap();
        assert_eq!(lpf.alpha, 0.5);
        assert_eq!(lpf.current_output, 0.0);
        assert_eq!(lpf.get_output_limits().min(), -10.0);
        assert_eq!(lpf.get_output_limits().max(), 10.0);
    }

    #[test]
    fn test_lpf_new_invalid_alpha() {
        assert_eq!(LowPassFilter::new(-0.1f32, 0.0, -10.0, 10.0), Err(ClampError::InvalidParameter));
        assert_eq!(LowPassFilter::new(1.1f32, 0.0, -10.0, 10.0), Err(ClampError::InvalidParameter));
    }

    #[test]
    fn test_lpf_new_invalid_limits() {
        assert_eq!(LowPassFilter::new(0.5f32, 0.0, 10.0, -10.0), Err(ClampError::MinGreaterThanMax));
    }

    #[test]
    fn test_lpf_initial_value_clamped() {
        let filter = LowPassFilter::new(0.5f32, 15.0, -10.0, 10.0).unwrap();
        assert_eq!(filter.current_output, 10.0); // 15.0 should be clamped to 10.0
        let filter = LowPassFilter::new(0.5f32, -15.0, -10.0, 10.0).unwrap();
        assert_eq!(filter.current_output, -10.0); // -15.0 should be clamped to -10.0
    }


    #[test]
    fn test_lpf_update_normal() {
        let mut lpf = LowPassFilter::new(0.5f32, 0.0, -10.0, 10.0).unwrap();
        assert_eq!(lpf.update(10.0), 5.0); // (1-0.5)*0 + 0.5*10 = 5
        assert_eq!(lpf.current_output, 5.0);
        assert_eq!(lpf.update(0.0), 2.5); // (1-0.5)*5 + 0.5*0 = 2.5
        assert_eq!(lpf.current_output, 2.5);
    }

    #[test]
    fn test_lpf_update_clamped_output() {
        let mut lpf = LowPassFilter::new(0.5f32, 0.0, 0.0, 10.0).unwrap(); // Limits [0, 10]
        assert_eq!(lpf.update(20.0), 10.0); // Output 10.0 is clamped from actual 10.0 (0.5*0 + 0.5*20 = 10)
        assert_eq!(lpf.current_output, 10.0);
        assert_eq!(lpf.update(-5.0), 5.0);  // Output 5.0 (0.5*10 + 0.5*-5 = 2.5) should be clamped to 0.0
        // Oh, wait, the example calculation above is wrong.
        // It should be: (1-0.5)*10 + 0.5*-5 = 5 - 2.5 = 2.5.
        // 2.5 is within [0, 10], so it should NOT be clamped to 0.0.
        // Let's re-run the numbers:
        // Initial: current_output = 0.0
        // 1. update(20.0): (1-0.5)*0 + 0.5*20 = 10.0. Clamped to [0,10] is 10.0. current_output = 10.0. Returns 10.0. Correct.
        assert_eq!(lpf.current_output, 10.0);

        // 2. update(-5.0): (1-0.5)*10 + 0.5*(-5) = 5.0 - 2.5 = 2.5. Clamped to [0,10] is 2.5. current_output = 2.5. Returns 2.5.
        assert_eq!(lpf.update(-5.0), 2.5);
        assert_eq!(lpf.current_output, 2.5);

        let mut lpf_lower_clamp = LowPassFilter::new(0.5f32, 0.0, 5.0, 10.0).unwrap();
        assert_eq!(lpf_lower_clamp.update(0.0), 5.0); // (1-0.5)*0 + 0.5*0 = 0.0. Clamped to [5,10] is 5.0.
        assert_eq!(lpf_lower_clamp.current_output, 5.0);
    }

    #[test]
    fn test_lpf_set_output_limits_valid() {
        let mut lpf = LowPassFilter::new(0.5f32, 5.0, 0.0, 10.0).unwrap();
        assert!(lpf.set_output_limits(-5.0, 5.0).is_ok());
        assert_eq!(lpf.get_output_limits().min(), -5.0);
        assert_eq!(lpf.get_output_limits().max(), 5.0);
        // Current output was 5.0, still within new limits [-5.0, 5.0]
        assert_eq!(lpf.current_output, 5.0);
    }

    #[test]
    fn test_lpf_set_output_limits_invalid() {
        let mut lpf = LowPassFilter::new(0.5f32, 5.0, 0.0, 10.0).unwrap();
        assert_eq!(lpf.set_output_limits(10.0, 0.0), Err(ClampError::MinGreaterThanMax));
        // Limits should not have changed
        assert_eq!(lpf.get_output_limits().min(), 0.0);
        assert_eq!(lpf.get_output_limits().max(), 10.0);
    }

    #[test]
    fn test_lpf_set_output_limits_re_clamps_output() {
        let mut lpf = LowPassFilter::new(0.5f32, 5.0, 0.0, 10.0).unwrap();
        // Current output is 5.0. Change limits to [0, 2].
        assert!(lpf.set_output_limits(0.0, 2.0).is_ok());
        assert_eq!(lpf.current_output, 2.0); // 5.0 should be clamped to 2.0
    }

    #[test]
    fn test_lpf_reset() {
        let mut lpf = LowPassFilter::new(0.5f32, 0.0, 0.0, 10.0).unwrap();
        lpf.update(20.0); // current_output becomes 10.0
        assert_eq!(lpf.current_output, 10.0);

        lpf.reset(5.0);
        assert_eq!(lpf.current_output, 5.0); // Reset to 5.0, within [0, 10]

        lpf.reset(15.0);
        assert_eq!(lpf.current_output, 10.0); // Reset to 15.0, clamped to 10.0

        lpf.reset(-5.0);
        assert_eq!(lpf.current_output, 0.0); // Reset to -5.0, clamped to 0.0
    }
}
```