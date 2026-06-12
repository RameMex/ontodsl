To address the `bug-lp2-01` Z3 hazard and provide a safe, design-by-contract Rust wrapper for a Biquad low-pass filter (similar to `LowPassFilter2p`), we'll implement the following:

1.  **`no_std` and `heapless` compatibility**: The filter will store all its state directly within the struct, avoiding any dynamic memory allocations.
2.  **Explicit Error Handling**: A custom `FilterError` enum will clearly signal different types of errors, including the Nyquist violation.
3.  **Formal Invariant Pre-checks**:
    *   The `new` constructor and parameter-setting methods (`set_parameters`, `set_sample_rate`) will enforce the `cutoff_freq < sample_rate / 2.0` invariant as a pre-condition, returning an `Err(FilterError::NyquistViolation)` if it's violated.
    *   Additionally, checks for positive `sample_rate`, `cutoff_freq`, and `q_factor` are included.
4.  **Coefficient Stability Checks**: After coefficient calculation, a post-condition check ensures that no coefficients have become `NaN` or `Infinity`, safeguarding against extreme numerical conditions even if the primary Nyquist check passes due to floating-point nuances.
5.  **Direct Form II Transposed Biquad**: A common and numerically stable structure will be used for the filter's core processing logic.
6.  **Input Validation**: The `process` method will check for `NaN` or `Infinity` input samples to prevent state corruption.

### `lowpass_filter.rs`

```rust
#![no_std] // No standard library
// `heapless` isn't strictly necessary for this specific implementation
// as all state is fixed-size and stored directly in the struct,
// but it implies the constraint of not using dynamic allocations.

use core::f32::consts::PI;

/// Custom error type for filter operations, enabling design-by-contract.
#[derive(Debug, PartialEq, Eq, Copy, Clone)]
pub enum FilterError {
    /// Indicates that the cutoff frequency is at or above the Nyquist frequency (sample_rate / 2).
    ///
    /// Z3 Hazard: `bug-lp2-01` - "Nyquist Frequency Invariant Violation"
    /// Description: "The second-order filter calculation requires that the cutoff frequency
    /// is strictly less than half the sample rate. If cutoff >= sample_rate / 2,
    /// the filter coefficients become unstable and result in infinity/NaN."
    NyquistViolation {
        cutoff_freq: f32,
        sample_rate: f32,
    },
    /// Indicates an invalid filter parameter was provided (e.g., non-positive value).
    InvalidParameter {
        param_name: &'static str,
        value: f32,
        reason: &'static str,
    },
    /// Indicates an invalid input sample (e.g., NaN or Infinity).
    /// This error is returned if `process` is configured to return `Result`.
    /// In this implementation, `process` returns `0.0` for invalid input.
    InvalidInput,
    /// Indicates that calculated coefficients became NaN or Infinity, despite parameter checks.
    /// This is a fallback for extreme numerical instability.
    CoefficientCalculationError {
        reason: &'static str,
    },
}

// Implement Display for FilterError for better error messages
impl core::fmt::Display for FilterError {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        match self {
            FilterError::NyquistViolation { cutoff_freq, sample_rate } => {
                write!(
                    f,
                    "Nyquist Violation: Cutoff frequency ({}) must be strictly less than half the sample rate ({})",
                    cutoff_freq,
                    sample_rate
                )
            }
            FilterError::InvalidParameter { param_name, value, reason } => {
                write!(
                    f,
                    "Invalid parameter: {} = {} (Reason: {})",
                    param_name, value, reason
                )
            }
            FilterError::InvalidInput => {
                write!(f, "Invalid input sample (e.g., NaN or Infinity detected)")
            }
            FilterError::CoefficientCalculationError { reason } => {
                write!(f, "Coefficient calculation failed: {}", reason)
            }
        }
    }
}

/// A second-order Low-Pass Biquad filter designed for `no_std` and `heapless` environments.
/// Implements a Direct Form II Transposed structure, generally known for good numerical stability.
pub struct LowPassFilter2p {
    // Filter coefficients (numerator: b0, b1, b2; denominator: a1, a2)
    b0: f32,
    b1: f32,
    b2: f32,
    a1: f32, // Stored as positive; subtracted in the calculation
    a2: f32, // Stored as positive; subtracted in the calculation

    // Internal state variables (delay elements for DFII Transposed)
    d1: f32,
    d2: f32,

    // Stored filter parameters (for recalculation and inspection)
    sample_rate: f32,
    cutoff_freq: f32,
    q_factor: f32,
}

impl LowPassFilter2p {
    /// Creates a new `LowPassFilter2p` instance.
    ///
    /// # Arguments
    /// * `sample_rate` - The audio sample rate in Hz. Must be strictly positive.
    /// * `cutoff_freq` - The filter's -3dB cutoff frequency in Hz. Must be strictly positive.
    /// * `q_factor` - The filter's Quality factor. Must be strictly positive.
    ///
    /// # Pre-conditions (Design-by-Contract)
    /// 1. `sample_rate > 0.0`
    /// 2. `cutoff_freq > 0.0`
    /// 3. `q_factor > 0.0`
    /// 4. **Z3 Hazard (`bug-lp2-01`)**: `cutoff_freq < sample_rate / 2.0`
    ///    - If violated, returns `Err(FilterError::NyquistViolation)`.
    ///
    /// # Returns
    /// A `Result` containing the `LowPassFilter2p` instance on success, or a `FilterError` on failure.
    pub fn new(sample_rate: f32, cutoff_freq: f32, q_factor: f32) -> Result<Self, FilterError> {
        // --- Pre-condition Checks ---
        if sample_rate <= 0.0 {
            return Err(FilterError::InvalidParameter {
                param_name: "sample_rate",
                value: sample_rate,
                reason: "Must be strictly positive",
            });
        }
        if cutoff_freq <= 0.0 {
            return Err(FilterError::InvalidParameter {
                param_name: "cutoff_freq",
                value: cutoff_freq,
                reason: "Must be strictly positive",
            });
        }
        if q_factor <= 0.0 {
            return Err(FilterError::InvalidParameter {
                param_name: "q_factor",
                value: q_factor,
                reason: "Must be strictly positive",
            });
        }

        // --- Z3 Hazard (`bug-lp2-01`) Pre-check: Nyquist Frequency Invariant Violation ---
        // Formal invariant pre-check: cutoff_freq < sample_rate / 2.0
        if cutoff_freq >= sample_rate / 2.0 {
            return Err(FilterError::NyquistViolation {
                cutoff_freq,
                sample_rate,
            });
        }

        let mut filter = LowPassFilter2p {
            b0: 0.0, b1: 0.0, b2: 0.0, // Coefficients initialized
            a1: 0.0, a2: 0.0,
            d1: 0.0, d2: 0.0, // Internal states initialized to zero
            sample_rate,
            cutoff_freq,
            q_factor,
        };

        // Calculate coefficients based on the provided parameters
        filter.calculate_coefficients()?;

        Ok(filter)
    }

    /// Updates the filter's cutoff frequency and Q factor.
    ///
    /// # Arguments
    /// * `cutoff_freq` - The new cutoff frequency in Hz. Must be strictly positive.
    /// * `q_factor` - The new Q factor. Must be strictly positive.
    ///
    /// # Pre-conditions (Design-by-Contract)
    /// 1. `cutoff_freq > 0.0`
    /// 2. `q_factor > 0.0`
    /// 3. **Z3 Hazard (`bug-lp2-01`)**: `cutoff_freq < self.sample_rate / 2.0`
    ///    - If violated, returns `Err(FilterError::NyquistViolation)`.
    ///
    /// # Returns
    /// `Ok(())` on successful update, or a `FilterError` on failure.
    pub fn set_parameters(&mut self, cutoff_freq: f32, q_factor: f32) -> Result<(), FilterError> {
        // --- Pre-condition Checks ---
        if cutoff_freq <= 0.0 {
            return Err(FilterError::InvalidParameter {
                param_name: "cutoff_freq",
                value: cutoff_freq,
                reason: "Must be strictly positive",
            });
        }
        if q_factor <= 0.0 {
            return Err(FilterError::InvalidParameter {
                param_name: "q_factor",
                value: q_factor,
                reason: "Must be strictly positive",
            });
        }

        // --- Z3 Hazard (`bug-lp2-01`) Pre-check: Nyquist Frequency Invariant Violation ---
        // Ensure dynamic frequency resets safeguard the Nyquist limit.
        if cutoff_freq >= self.sample_rate / 2.0 {
            return Err(FilterError::NyquistViolation {
                cutoff_freq,
                sample_rate: self.sample_rate,
            });
        }

        // If checks pass, update internal parameters and recalculate coefficients
        self.cutoff_freq = cutoff_freq;
        self.q_factor = q_factor;
        self.calculate_coefficients()?;
        Ok(())
    }

    /// Updates the filter's sample rate.
    ///
    /// # Arguments
    /// * `sample_rate` - The new sample rate in Hz. Must be strictly positive.
    ///
    /// # Pre-conditions (Design-by-Contract)
    /// 1. `sample_rate > 0.0`
    /// 2. **Z3 Hazard (`bug-lp2-01`)**: `self.cutoff_freq < sample_rate / 2.0`
    ///    - The *current* cutoff frequency must remain strictly below half the *new* sample rate.
    ///    - If violated, returns `Err(FilterError::NyquistViolation)`.
    ///
    /// # Returns
    /// `Ok(())` on successful update, or a `FilterError` on failure.
    pub fn set_sample_rate(&mut self, sample_rate: f32) -> Result<(), FilterError> {
        // --- Pre-condition Checks ---
        if sample_rate <= 0.0 {
            return Err(FilterError::InvalidParameter {
                param_name: "sample_rate",
                value: sample_rate,
                reason: "Must be strictly positive",
            });
        }

        // --- Z3 Hazard (`bug-lp2-01`) Pre-check: Nyquist Frequency Invariant Violation ---
        // Ensure dynamic frequency resets safeguard the Nyquist limit.
        if self.cutoff_freq >= sample_rate / 2.0 {
            return Err(FilterError::NyquistViolation {
                cutoff_freq: self.cutoff_freq,
                sample_rate,
            });
        }

        // If checks pass, update internal parameter and recalculate coefficients
        self.sample_rate = sample_rate;
        self.calculate_coefficients()?;
        Ok(())
    }

    /// Processes a single input sample through the filter.
    ///
    /// # Arguments
    /// * `input` - The input `f32` audio sample.
    ///
    /// # Returns
    /// The filtered `f32` output sample.
    ///
    /// # Invariant
    /// Assumes the filter coefficients (`b0`, `b1`, `b2`, `a1`, `a2`) are stable
    /// (i.e., not `NaN`/`Infinity`), which is ensured by the pre-checks in `new`,
    /// `set_parameters`, and `set_sample_rate`.
    ///
    /// # Post-condition
    /// The output value will be a valid `f32` (not `NaN`/`Infinity`) unless the input itself
    /// is `NaN`/`Infinity`. If `input` is `NaN`/`Infinity`, this method returns `0.0`
    /// to prevent propagation of invalid numbers in real-time DSP scenarios.
    pub fn process(&mut self, input: f32) -> f32 {
        // Check for invalid input samples to prevent propagation of NaN/Inf.
        // This is a common defensive measure in real-time DSP, returning a "safe" value.
        if input.is_nan() || input.is_infinite() {
            return 0.0;
        }

        // Direct Form II Transposed Biquad calculation:
        // y[n] = b0 * x[n] + d1_prev
        // d1_curr = b1 * x[n] - a1 * y[n] + d2_prev
        // d2_curr = b2 * x[n] - a2 * y[n]
        let output = self.b0 * input + self.d1;
        self.d1 = self.b1 * input - self.a1 * output + self.d2;
        self.d2 = self.b2 * input - self.a2 * output;

        output
    }

    /// Resets the internal state (delay elements) of the filter to zero.
    /// This effectively clears any past audio history in the filter.
    pub fn reset(&mut self) {
        self.d1 = 0.0;
        self.d2 = 0.0;
    }

    // --- Private Helper Method for Coefficient Calculation ---
    /// Calculates the filter coefficients based on the current `sample_rate`,
    /// `cutoff_freq`, and `q_factor` stored in the struct.
    ///
    /// # Pre-conditions (Internal)
    /// This method expects `self.sample_rate`, `self.cutoff_freq`, and `self.q_factor` to be
    /// valid (positive and `self.cutoff_freq < self.sample_rate / 2.0`).
    ///
    /// # Internal Invariant Checks (`bug-lp2-01` safeguard & numerical stability)
    /// This method includes an internal re-check for the Nyquist violation and
    /// general numerical stability (NaN/Inf coefficients) to act as a robust safeguard,
    /// even though public setters are expected to perform the primary validation.
    ///
    /// # Post-conditions
    /// After successful execution, all filter coefficients (`b0`, `b1`, `b2`, `a1`, `a2`)
    /// will contain valid `f32` values (not `NaN`/`Infinity`).
    fn calculate_coefficients(&mut self) -> Result<(), FilterError> {
        // --- Z3 Hazard (`bug-lp2-01`) Internal Invariant Check ---
        // This acts as a robust internal invariant check for the coefficient calculation,
        // catching any case where internal parameters might have become invalid
        // or if this method was called directly without proper external validation.
        if self.cutoff_freq >= self.sample_rate / 2.0 {
            return Err(FilterError::NyquistViolation {
                cutoff_freq: self.cutoff_freq,
                sample_rate: self.sample_rate,
            });
        }
        if self.sample_rate <= 0.0 || self.cutoff_freq <= 0.0 || self.q_factor <= 0.0 {
            return Err(FilterError::CoefficientCalculationError {
                reason: "Internal filter parameters (sample_rate, cutoff_freq, q_factor) are invalid (non-positive)",
            });
        }

        // Bilinear Transform coefficient derivation for a 2nd order Low Pass filter
        // Source: https://www.earlevel.com/main/2013/03/02/biquad-calculator-v2/ (for example)
        let k = (PI * self.cutoff_freq / self.sample_rate).tan();
        let k_sq = k * k;
        let q_inv = 1.0 / self.q_factor;

        let norm_denom = 1.0 + q_inv * k + k_sq;

        // Check for division by zero or numerical instability in the denominator
        // which could lead to NaN/Inf coefficients. This is a crucial numerical stability check.
        if norm_denom.is_nan() || norm_denom.is_infinite() || norm_denom == 0.0 {
            return Err(FilterError::CoefficientCalculationError {
                reason: "Denominator for coefficient normalization is invalid (NaN, Inf, or zero). This indicates extreme or impossible filter parameters.",
            });
        }

        let norm = 1.0 / norm_denom;

        self.b0 = k_sq * norm;
        self.b1 = 2.0 * self.b0;
        self.b2 = self.b0;
        self.a1 = 2.0 * (k_sq - 1.0) * norm;
        self.a2 = (1.0 - q_inv * k + k_sq) * norm;

        // --- Post-condition Check: Coefficients are valid ---
        // Final sanity check to ensure no NaN/Infinity values snuck through due to
        // extreme floating-point arithmetic or unexpected input, despite prior checks.
        if self.b0.is_nan() || self.b1.is_nan() || self.b2.is_nan() ||
           self.a1.is_nan() || self.a2.is_nan() ||
           self.b0.is_infinite() || self.b1.is_infinite() || self.b2.is_infinite() ||
           self.a1.is_infinite() || self.a2.is_infinite()
        {
            return Err(FilterError::CoefficientCalculationError {
                reason: "Calculated filter coefficients became NaN or Infinity, indicating numerical instability after all processing.",
            });
        }

        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // A small epsilon for float comparisons, considering floating point inaccuracies.
    const FLOAT_COMP_EPSILON: f32 = 1e-4;

    #[test]
    fn test_new_valid_parameters() {
        let filter = LowPassFilter2p::new(48000.0, 1000.0, 0.707).unwrap();
        assert_eq!(filter.sample_rate, 48000.0);
        assert_eq!(filter.cutoff_freq, 1000.0);
        assert_eq!(filter.q_factor, 0.707);
        // Coefficients should be calculated and not NaN/Inf
        assert!(!filter.b0.is_nan() && !filter.b0.is_infinite());
        assert!(!filter.a1.is_nan() && !filter.a1.is_infinite());
    }

    #[test]
    fn test_new_nyquist_violation_exact() {
        // Cutoff exactly at Nyquist (sample_rate / 2)
        let result = LowPassFilter2p::new(48000.0, 24000.0, 0.707);
        assert!(matches!(result, Err(FilterError::NyquistViolation { .. })));
    }

    #[test]
    fn test_new_nyquist_violation_above() {
        // Cutoff above Nyquist
        let result = LowPassFilter2p::new(48000.0, 24000.01, 0.707);
        assert!(matches!(result, Err(FilterError::NyquistViolation { .. })));
    }

    #[test]
    fn test_new_invalid_parameters() {
        assert!(matches!(LowPassFilter2p::new(0.0, 1000.0, 0.707), Err(FilterError::InvalidParameter { param_name: "sample_rate", .. })));
        assert!(matches!(LowPassFilter2p::new(48000.0, 0.0, 0.707), Err(FilterError::InvalidParameter { param_name: "cutoff_freq", .. })));
        assert!(matches!(LowPassFilter2p::new(48000.0, 1000.0, 0.0), Err(FilterError::InvalidParameter { param_name: "q_factor", .. })));
    }

    #[test]
    fn test_set_parameters_valid() {
        let mut filter = LowPassFilter2p::new(48000.0, 1000.0, 0.707).unwrap();
        filter.set_parameters(2000.0, 1.0).unwrap();
        assert_eq!(filter.cutoff_freq, 2000.0);
        assert_eq!(filter.q_factor, 1.0);
        // Coefficients should be updated and not NaN/Inf
        assert!(!filter.b0.is_nan() && !filter.b0.is_infinite());
    }

    #[test]
    fn test_set_parameters_nyquist_violation() {
        let mut filter = LowPassFilter2p::new(48000.0, 1000.0, 0.707).unwrap();
        let result = filter.set_parameters(24000.0, 0.707); // new cutoff == Nyquist
        assert!(matches!(result, Err(FilterError::NyquistViolation { .. })));
        // Ensure parameters are not changed if an error occurs
        assert_eq!(filter.cutoff_freq, 1000.0);
    }

    #[test]
    fn test_set_sample_rate_valid() {
        let mut filter = LowPassFilter2p::new(48000.0, 1000.0, 0.707).unwrap();
        filter.set_sample_rate(96000.0).unwrap();
        assert_eq!(filter.sample_rate, 96000.0);
        // Coefficients should be updated and not NaN/Inf
        assert!(!filter.b0.is_nan() && !filter.b0.is_infinite());
    }

    #[test]
    fn test_set_sample_rate_nyquist_violation() {
        let mut filter = LowPassFilter2p::new(48000.0, 20000.0, 0.707).unwrap(); // Current cutoff is 20k
        let result = filter.set_sample_rate(40000.0); // New Nyquist is 20k, so current cutoff is >= Nyquist
        assert!(matches!(result, Err(FilterError::NyquistViolation { .. })));
        // Ensure parameters are not changed if an error occurs
        assert_eq!(filter.sample_rate, 48000.0);
    }

    #[test]
    fn test_process_dc_gain() {
        let mut filter = LowPassFilter2p::new(48000.0, 100.0, 0.707).unwrap();
        filter.reset();

        // Pass a DC signal (1.0) for many samples.
        // A low-pass filter with Q=0.707 (Butterworth) should have a DC gain of 1.0.
        // After enough samples, the output should settle close to the input.
        for _ in 0..1000 {
            filter.process(1.0);
        }
        let final_output = filter.process(1.0);
        assert!((final_output - 1.0).abs() < FLOAT_COMP_EPSILON, "Expected final output near 1.0, got {}", final_output);
    }

    #[test]
    fn test_process_nan_input() {
        let mut filter = LowPassFilter2p::new(48000.0, 1000.0, 0.707).unwrap();
        // Processing NaN input should return 0.0 and not corrupt internal state
        let output = filter.process(f32::NAN);
        assert_eq!(output, 0.0);
        assert!(!filter.d1.is_nan() && !filter.d2.is_nan());

        let output_inf = filter.process(f32::INFINITY);
        assert_eq!(output_inf, 0.0);
        assert!(!filter.d1.is_nan() && !filter.d2.is_nan());
    }

    #[test]
    fn test_reset() {
        let mut filter = LowPassFilter2p::new(48000.0, 1000.0, 0.707).unwrap();
        // Process some samples to ensure internal state changes
        for _ in 0..10 {
            filter.process(1.0);
        }
        assert_ne!(filter.d1, 0.0);
        assert_ne!(filter.d2, 0.0);

        filter.reset();
        assert_eq!(filter.d1, 0.0);
        assert_eq!(filter.d2, 0.0);
    }
}
```