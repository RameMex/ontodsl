This solution provides a `no_std`, `heapless` Rust wrapper for a hypothetical `DigitalLPF` C library. It employs design-by-contract principles, including formal invariant and pre/post-condition checks, and specifically addresses the Z3 hazard `bug-d-01` by explicitly including the "redundant" check while acknowledging its nature.

**Assumptions about the C `DigitalLPF` Library:**

Since no actual C code for `DigitalLPF` is provided, we must assume a C interface.
1.  **Opaque `DigitalLPFRaw` struct:** The Rust wrapper will hold an opaque pointer to the C-allocated filter.
2.  **Standard functions:** `_new`, `_set_cutoff_frequency`, `_set_sample_rate`, `_update`, `_free`.
3.  **Return values:** Functions indicate success/failure (e.g., `bool` or `int` where `0` is success, non-zero is error). For simplicity, we'll assume setters directly modify and `_new` returns `NULL` on failure.

---

### `DigitalLPF.h` (Hypothetical C Header)

This is what the Rust FFI would bind to.

```c
// DigitalLPF.h
#ifndef DIGITAL_LPF_H
#define DIGITAL_LPF_H

#include <stdbool.h> // For bool

// Opaque struct for the Digital LPF filter instance
// The actual implementation details are hidden.
typedef struct DigitalLPFRaw DigitalLPFRaw;

/**
 * @brief Creates a new Digital LPF instance.
 * @param sample_rate The sample rate in Hz (must be > 0).
 * @param cutoff_frequency The initial cutoff frequency in Hz (must be >= 0 and <= sample_rate / 2).
 * @return A pointer to the new filter instance, or NULL on failure.
 */
DigitalLPFRaw* DigitalLPF_new(float sample_rate, float cutoff_frequency);

/**
 * @brief Sets the cutoff frequency of the filter.
 * @param filter A pointer to the filter instance.
 * @param new_frequency The new cutoff frequency in Hz (must be >= 0 and <= current_sample_rate / 2).
 * @return True if successful, false otherwise.
 */
bool DigitalLPF_set_cutoff_frequency(DigitalLPFRaw* filter, float new_frequency);

/**
 * @brief Sets the sample rate of the filter.
 * @param filter A pointer to the filter instance.
 * @param new_sample_rate The new sample rate in Hz (must be > 0 and current_cutoff_frequency <= new_sample_rate / 2).
 * @return True if successful, false otherwise.
 */
bool DigitalLPF_set_sample_rate(DigitalLPFRaw* filter, float new_sample_rate);

/**
 * @brief Processes a single sample through the filter.
 * @param filter A pointer to the filter instance.
 * @param input_sample The input audio sample.
 * @return The filtered output sample.
 */
float DigitalLPF_update(DigitalLPFRaw* filter, float input_sample);

/**
 * @brief Frees the resources associated with a Digital LPF instance.
 * @param filter A pointer to the filter instance.
 */
void DigitalLPF_free(DigitalLPFRaw* filter);

#endif // DIGITAL_LPF_H
```

---

### `src/lib.rs` (Rust Wrapper with DbC)

```rust
#![no_std]
#![forbid(unsafe_code)] // Will be relaxed for FFI, but good to start strict.

use core::ffi::c_void;
use core::fmt;
use core::mem::ManuallyDrop;

/// Represents errors that can occur during DigitalLPF operations.
#[derive(Debug, PartialEq, Eq)]
pub enum DigitalLPFError {
    /// Indicates that a required parameter was out of a valid range.
    /// Contains the invalid value and a description of the requirement.
    InvalidParameter {
        value: f32,
        requirement: &'static str,
    },
    /// Indicates that the underlying C library failed to initialize the filter.
    CreationFailed,
    /// Indicates that the underlying C library failed to set a parameter.
    SetParamFailed,
    /// The filter object was not properly initialized (e.g., `filter_ptr` is null).
    /// This should ideally be prevented by the type system but acts as a safeguard.
    NotInitialized,
}

impl fmt::Display for DigitalLPFError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            DigitalLPFError::InvalidParameter { value, requirement } => write!(
                f,
                "Invalid parameter: value {} violates requirement '{}'",
                value, requirement
            ),
            DigitalLPFError::CreationFailed => {
                write!(f, "Failed to create DigitalLPF instance in C library")
            }
            DigitalLPFError::SetParamFailed => {
                write!(f, "Failed to set parameter in C library")
            }
            DigitalLPFError::NotInitialized => write!(f, "DigitalLPF instance not initialized"),
        }
    }
}


/// FFI bindings to the hypothetical C DigitalLPF library.
///
/// NOTE: The `unsafe` blocks for FFI calls are intentionally localized within
/// these `extern "C"` functions. The higher-level `DigitalLPF` wrapper then
/// manages the safety.
mod ffi {
    use super::*;

    /// Opaque type representing the C `DigitalLPFRaw` struct.
    /// Rust doesn't need to know its layout, just its size for pointer arithmetic.
    /// `c_void` is the standard way to represent an opaque type from C.
    pub type DigitalLPFRaw = c_void;

    extern "C" {
        /// Corresponds to `DigitalLPF_new` in `DigitalLPF.h`.
        /// # Safety
        /// This function is unsafe because it interacts with foreign code and returns
        /// a raw pointer that must be managed.
        pub fn DigitalLPF_new(sample_rate: f32, cutoff_frequency: f32) -> *mut DigitalLPFRaw;

        /// Corresponds to `DigitalLPF_set_cutoff_frequency` in `DigitalLPF.h`.
        /// # Safety
        /// This function is unsafe because it interacts with foreign code and
        /// dereferences a raw pointer. The caller must ensure `filter` is a
        /// valid, non-null pointer to an initialized `DigitalLPFRaw` instance.
        pub fn DigitalLPF_set_cutoff_frequency(filter: *mut DigitalLPFRaw, new_frequency: f32) -> bool;

        /// Corresponds to `DigitalLPF_set_sample_rate` in `DigitalLPF.h`.
        /// # Safety
        /// This function is unsafe because it interacts with foreign code and
        /// dereferences a raw pointer. The caller must ensure `filter` is a
        /// valid, non-null pointer to an initialized `DigitalLPFRaw` instance.
        pub fn DigitalLPF_set_sample_rate(filter: *mut DigitalLPFRaw, new_sample_rate: f32) -> bool;

        /// Corresponds to `DigitalLPF_update` in `DigitalLPF.h`.
        /// # Safety
        /// This function is unsafe because it interacts with foreign code and
        /// dereferences a raw pointer. The caller must ensure `filter` is a
        /// valid, non-null pointer to an initialized `DigitalLPFRaw` instance.
        pub fn DigitalLPF_update(filter: *mut DigitalLPFRaw, input_sample: f32) -> f32;

        /// Corresponds to `DigitalLPF_free` in `DigitalLPF.h`.
        /// # Safety
        /// This function is unsafe because it interacts with foreign code and
        /// dereferences a raw pointer. The caller must ensure `filter` is a
        /// valid, non-null pointer to a `DigitalLPFRaw` instance previously
        /// allocated by `DigitalLPF_new`. It must only be called once per instance.
        pub fn DigitalLPF_free(filter: *mut DigitalLPFRaw);
    }
}

/// A safe, design-by-contract wrapper for the DigitalLPF C library.
///
/// This struct holds the internal state required for contract checks
/// and manages the lifetime of the underlying C `DigitalLPFRaw` instance.
/// It is `no_std` and avoids heap allocations within Rust itself
/// (the C library might allocate internally, but the wrapper doesn't).
pub struct DigitalLPF {
    // The actual pointer to the C library's filter instance.
    // Wrapped in ManuallyDrop to ensure it's freed exactly once by the Drop impl.
    filter_ptr: ManuallyDrop<*mut ffi::DigitalLPFRaw>,
    // Rust-side cached copies of parameters for DbC checks without FFI calls.
    // These must be kept in sync with the C library's internal state.
    cutoff_frequency: f32,
    sample_rate: f32,
}

// Invariant: The filter's state must always satisfy these conditions.
// We use debug_assert! for these internal checks. In a release build,
// these would be optimized away, relying on the pre-conditions to
// prevent invalid states. For safety-critical systems, these might
// be unconditional asserts or return errors.
impl DigitalLPF {
    #[inline]
    fn check_invariants(&self) {
        // Z3 Hazard (bug-d-01): Redundant Invariant Optimization
        // The SMT solver reported that cutoffFreq >= 0 is implicitly covered
        // when checking bounds of new frequency assignments.
        //
        // Action taken for this wrapper: Despite the redundancy, we
        // explicitly include the check here as part of a formal design-by-contract
        // methodology. This ensures that the Rust wrapper consistently
        // validates its known state according to all defined invariants,
        // even if the underlying C implementation's checks are more granular
        // or implicitly cover certain aspects. This provides a robust
        // defensive layer at the Rust boundary.
        debug_assert!(
            self.cutoff_frequency >= 0.0,
            "Invariant violation: cutoff_frequency must be >= 0.0, got {}",
            self.cutoff_frequency
        );
        debug_assert!(
            self.sample_rate > 0.0,
            "Invariant violation: sample_rate must be > 0.0, got {}",
            self.sample_rate
        );
        debug_assert!(
            self.cutoff_frequency <= self.sample_rate / 2.0,
            "Invariant violation: cutoff_frequency ({}) must be <= sample_rate ({}) / 2.0",
            self.cutoff_frequency,
            self.sample_rate
        );
        debug_assert!(
            !self.filter_ptr.is_null(),
            "Invariant violation: filter_ptr must not be null"
        );
    }
}

impl DigitalLPF {
    /// Creates a new Digital LPF instance.
    ///
    /// # Design-by-Contract
    ///
    /// **Preconditions:**
    /// - `sample_rate` must be greater than `0.0`.
    /// - `initial_cutoff_frequency` must be greater than or equal to `0.0`.
    /// - `initial_cutoff_frequency` must be less than or equal to `sample_rate / 2.0` (Nyquist limit).
    ///
    /// **Postconditions:**
    /// - Returns `Ok(DigitalLPF)` if creation is successful.
    /// - The created `DigitalLPF` instance will satisfy all internal invariants.
    /// - The `cutoff_frequency()` and `sample_rate()` methods will return
    ///   the `initial_cutoff_frequency` and `sample_rate` values passed to this constructor.
    /// - Returns `Err(DigitalLPFError)` if preconditions are violated or the C library fails.
    ///
    /// # Arguments
    /// * `sample_rate` - The audio sample rate in Hz.
    /// * `initial_cutoff_frequency` - The initial cutoff frequency in Hz.
    pub fn new(sample_rate: f32, initial_cutoff_frequency: f32) -> Result<Self, DigitalLPFError> {
        // --- Preconditions ---
        if sample_rate <= 0.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: sample_rate,
                requirement: "sample_rate > 0.0",
            });
        }
        if initial_cutoff_frequency < 0.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: initial_cutoff_frequency,
                requirement: "initial_cutoff_frequency >= 0.0",
            });
        }
        if initial_cutoff_frequency > sample_rate / 2.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: initial_cutoff_frequency,
                requirement: "initial_cutoff_frequency <= sample_rate / 2.0 (Nyquist limit)",
            });
        }

        let filter_ptr = unsafe { ffi::DigitalLPF_new(sample_rate, initial_cutoff_frequency) };

        if filter_ptr.is_null() {
            return Err(DigitalLPFError::CreationFailed);
        }

        let mut instance = DigitalLPF {
            filter_ptr: ManuallyDrop::new(filter_ptr),
            cutoff_frequency: initial_cutoff_frequency,
            sample_rate,
        };

        // --- Postconditions & Invariants ---
        // Ensure the internal state matches the inputs and invariants are met.
        // These are effectively post-conditions for the constructor.
        debug_assert!(
            instance.cutoff_frequency == initial_cutoff_frequency,
            "Postcondition violation: cutoff_frequency mismatch after new"
        );
        debug_assert!(
            instance.sample_rate == sample_rate,
            "Postcondition violation: sample_rate mismatch after new"
        );
        instance.check_invariants(); // Ensures all invariants are established.

        Ok(instance)
    }

    /// Sets a new cutoff frequency for the filter.
    ///
    /// # Design-by-Contract
    ///
    /// **Invariants (checked before and after):**
    /// - `self.cutoff_frequency >= 0.0`
    /// - `self.sample_rate > 0.0`
    /// - `self.cutoff_frequency <= self.sample_rate / 2.0`
    /// - `self.filter_ptr` is not null.
    ///
    /// **Preconditions:**
    /// - `new_frequency` must be greater than or equal to `0.0`.
    /// - `new_frequency` must be less than or equal to `self.sample_rate / 2.0` (Nyquist limit).
    ///
    /// **Postconditions:**
    /// - Returns `Ok(())` if successful.
    /// - The filter's `cutoff_frequency()` will return `new_frequency`.
    /// - All invariants will still hold.
    /// - Returns `Err(DigitalLPFError)` if preconditions are violated or the C library fails.
    ///
    /// # Arguments
    /// * `new_frequency` - The new cutoff frequency in Hz.
    pub fn set_cutoff_frequency(&mut self, new_frequency: f32) -> Result<(), DigitalLPFError> {
        self.check_invariants(); // Check invariants before method execution

        // --- Preconditions ---
        if new_frequency < 0.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: new_frequency,
                requirement: "new_frequency >= 0.0",
            });
        }
        if new_frequency > self.sample_rate / 2.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: new_frequency,
                requirement: "new_frequency <= self.sample_rate / 2.0 (Nyquist limit)",
            });
        }

        let success = unsafe { ffi::DigitalLPF_set_cutoff_frequency(*self.filter_ptr, new_frequency) };

        if !success {
            return Err(DigitalLPFError::SetParamFailed);
        }

        self.cutoff_frequency = new_frequency;

        // --- Postconditions & Invariants ---
        debug_assert!(
            self.cutoff_frequency == new_frequency,
            "Postcondition violation: cutoff_frequency mismatch after setting"
        );
        self.check_invariants(); // Check invariants after method execution

        Ok(())
    }

    /// Sets a new sample rate for the filter.
    ///
    /// # Design-by-Contract
    ///
    /// **Invariants (checked before and after):**
    /// - `self.cutoff_frequency >= 0.0`
    /// - `self.sample_rate > 0.0`
    /// - `self.cutoff_frequency <= self.sample_rate / 2.0`
    /// - `self.filter_ptr` is not null.
    ///
    /// **Preconditions:**
    /// - `new_sample_rate` must be greater than `0.0`.
    /// - `self.cutoff_frequency` must be less than or equal to `new_sample_rate / 2.0`.
    ///
    /// **Postconditions:**
    /// - Returns `Ok(())` if successful.
    /// - The filter's `sample_rate()` will return `new_sample_rate`.
    /// - All invariants will still hold.
    /// - Returns `Err(DigitalLPFError)` if preconditions are violated or the C library fails.
    ///
    /// # Arguments
    /// * `new_sample_rate` - The new sample rate in Hz.
    pub fn set_sample_rate(&mut self, new_sample_rate: f32) -> Result<(), DigitalLPFError> {
        self.check_invariants(); // Check invariants before method execution

        // --- Preconditions ---
        if new_sample_rate <= 0.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: new_sample_rate,
                requirement: "new_sample_rate > 0.0",
            });
        }
        if self.cutoff_frequency > new_sample_rate / 2.0 {
            return Err(DigitalLPFError::InvalidParameter {
                value: new_sample_rate,
                requirement: "self.cutoff_frequency <= new_sample_rate / 2.0 (Nyquist limit)",
            });
        }

        let success = unsafe { ffi::DigitalLPF_set_sample_rate(*self.filter_ptr, new_sample_rate) };

        if !success {
            return Err(DigitalLPFError::SetParamFailed);
        }

        self.sample_rate = new_sample_rate;

        // --- Postconditions & Invariants ---
        debug_assert!(
            self.sample_rate == new_sample_rate,
            "Postcondition violation: sample_rate mismatch after setting"
        );
        self.check_invariants(); // Check invariants after method execution

        Ok(())
    }

    /// Processes a single input sample through the filter.
    ///
    /// # Design-by-Contract
    ///
    /// **Invariants (checked before and after):**
    /// - `self.cutoff_frequency >= 0.0`
    /// - `self.sample_rate > 0.0`
    /// - `self.cutoff_frequency <= self.sample_rate / 2.0`
    /// - `self.filter_ptr` is not null.
    ///
    /// **Preconditions:** (None specific to the input sample value itself for a filter)
    /// - Filter must be initialized.
    ///
    /// **Postconditions:**
    /// - Returns the filtered output sample.
    /// - All invariants will still hold (the internal state `cutoff_frequency`
    ///   and `sample_rate` are not changed by `update`).
    ///
    /// # Arguments
    /// * `input_sample` - The audio sample to filter.
    pub fn update(&mut self, input_sample: f32) -> f32 {
        self.check_invariants(); // Check invariants before method execution

        let output_sample = unsafe { ffi::DigitalLPF_update(*self.filter_ptr, input_sample) };

        // --- Postconditions & Invariants ---
        // 'update' should not change the filter's parameters, only its internal state
        // (which is opaque to Rust). So, our cached `cutoff_frequency` and `sample_rate`
        // should remain unchanged.
        // No direct post-condition on `output_sample` without a reference model.
        self.check_invariants(); // Check invariants after method execution

        output_sample
    }

    /// Returns the current cutoff frequency of the filter.
    ///
    /// # Design-by-Contract
    ///
    /// **Invariants (checked before and after):**
    /// - `self.cutoff_frequency >= 0.0`
    /// - `self.sample_rate > 0.0`
    /// - `self.cutoff_frequency <= self.sample_rate / 2.0`
    /// - `self.filter_ptr` is not null.
    ///
    /// **Postconditions:**
    /// - Returns the internally stored `cutoff_frequency`.
    #[inline]
    pub fn cutoff_frequency(&self) -> f32 {
        self.check_invariants();
        self.cutoff_frequency
    }

    /// Returns the current sample rate of the filter.
    ///
    /// # Design-by-Contract
    ///
    /// **Invariants (checked before and after):**
    /// - `self.cutoff_frequency >= 0.0`
    /// - `self.sample_rate > 0.0`
    /// - `self.cutoff_frequency <= self.sample_rate / 2.0`
    /// - `self.filter_ptr` is not null.
    ///
    /// **Postconditions:**
    /// - Returns the internally stored `sample_rate`.
    #[inline]
    pub fn sample_rate(&self) -> f32 {
        self.check_invariants();
        self.sample_rate
    }
}

/// Ensures `DigitalLPF_free` is called when the Rust wrapper is dropped.
impl Drop for DigitalLPF {
    /// # Design-by-Contract
    ///
    /// **Preconditions:** (Implicit by Rust ownership)
    /// - `self.filter_ptr` is a valid, non-null pointer to a `DigitalLPFRaw` instance.
    /// - This `Drop` implementation is only called once for this instance.
    ///
    /// **Postconditions:**
    /// - The memory managed by the C library for `self.filter_ptr` is freed.
    /// - `self.filter_ptr` is effectively invalidated (becomes dangling).
    fn drop(&mut self) {
        // In debug mode, ensure invariants hold just before dropping.
        // This is a last-chance check for object integrity.
        // Note: `check_invariants` checks `!filter_ptr.is_null()`.
        if !self.filter_ptr.is_null() {
            self.check_invariants();
        } else {
             // If filter_ptr somehow became null before drop,
             // we can't safely call check_invariants. This is an edge case
             // that should ideally not happen with proper usage.
             // If it does, it implies a bug that needs to be fixed.
             #[cfg(debug_assertions)]
             eprintln!("DigitalLPF::drop called on a null filter_ptr. This indicates a prior issue or double-free attempt.");
             return;
        }


        // The `ManuallyDrop` ensures we explicitly free the pointer only once.
        // We take ownership of the pointer out of `ManuallyDrop` to prevent
        // further implicit drops or access.
        let ptr = ManuallyDrop::take(&mut self.filter_ptr);

        // Safety: We assume `ptr` is a valid, non-null pointer previously
        // allocated by `DigitalLPF_new`, and that `DigitalLPF_free` is idempotent
        // or this `Drop` impl is called exactly once per instance.
        // The `ManuallyDrop` wrapper helps enforce the "called exactly once" part
        // from the Rust side.
        unsafe {
            ffi::DigitalLPF_free(ptr);
        }
    }
}


#[cfg(test)]
mod tests {
    use super::*;

    // Mock FFI functions for testing without a real C library.
    // In a real scenario, you'd link against the actual C library.
    mod mock_ffi {
        use super::*;
        use core::sync::atomic::{AtomicPtr, Ordering};
        use core::mem;

        // A very basic mock for the C struct. In reality, it would be opaque.
        // We'll store the parameters in it to simulate the C library's internal state.
        #[repr(C)]
        struct MockDigitalLPFRaw {
            sample_rate: f32,
            cutoff_frequency: f32,
        }

        // We need a place to store our mock C objects to simulate memory allocation.
        // Using a static array for heapless, no_std. Max 10 filters for test.
        static mut MOCK_FILTERS: [Option<MockDigitalLPFRaw>; 10] = [
            None, None, None, None, None, None, None, None, None, None,
        ];
        static NEXT_FREE_INDEX: core::sync::atomic::AtomicUsize = core::sync::atomic::AtomicUsize::new(0);

        // A counter to simulate errors on purpose for testing `CreationFailed`.
        static mut FAIL_NEW_COUNTDOWN: isize = -1; // -1 means never fail

        pub fn set_fail_new_countdown(count: isize) {
            unsafe { FAIL_NEW_COUNTDOWN = count; }
        }

        #[no_mangle]
        pub extern "C" fn DigitalLPF_new(sample_rate: f32, cutoff_frequency: f32) -> *mut ffi::DigitalLPFRaw {
            unsafe {
                if FAIL_NEW_COUNTDOWN > 0 {
                    FAIL_NEW_COUNTDOWN -= 1;
                    return core::ptr::null_mut();
                } else if FAIL_NEW_COUNTDOWN == 0 {
                    return core::ptr::null_mut(); // Keep failing if it reaches 0
                }

                let idx = NEXT_FREE_INDEX.fetch_add(1, Ordering::SeqCst);
                if idx >= MOCK_FILTERS.len() {
                    return core::ptr::null_mut(); // Out of mock memory
                }

                MOCK_FILTERS[idx] = Some(MockDigitalLPFRaw {
                    sample_rate,
                    cutoff_frequency,
                });

                // Return a pointer to the mock instance.
                // We're casting a *mut MockDigitalLPFRaw to *mut ffi::DigitalLPFRaw (which is c_void)
                // This is safe in a mock because we control both ends.
                &mut MOCK_FILTERS[idx].as_mut().unwrap().sample_rate as *mut f32 as *mut ffi::DigitalLPFRaw
            }
        }

        // Mock for setting cutoff frequency
        #[no_mangle]
        pub extern "C" fn DigitalLPF_set_cutoff_frequency(filter: *mut ffi::DigitalLPFRaw, new_frequency: f32) -> bool {
            if filter.is_null() { return false; }
            unsafe {
                // To get back to MockDigitalLPFRaw, we assume ffi::DigitalLPFRaw points to its first field.
                let mock_filter = (filter as *mut MockDigitalLPFRaw).as_mut().unwrap();
                // Perform C-side checks (which the SMT solver would analyze)
                if new_frequency < 0.0 || new_frequency > mock_filter.sample_rate / 2.0 {
                    return false;
                }
                mock_filter.cutoff_frequency = new_frequency;
                true
            }
        }

        // Mock for setting sample rate
        #[no_mangle]
        pub extern "C" fn DigitalLPF_set_sample_rate(filter: *mut ffi::DigitalLPFRaw, new_sample_rate: f32) -> bool {
            if filter.is_null() { return false; }
            unsafe {
                let mock_filter = (filter as *mut MockDigitalLPFRaw).as_mut().unwrap();
                // Perform C-side checks
                if new_sample_rate <= 0.0 || mock_filter.cutoff_frequency > new_sample_rate / 2.0 {
                    return false;
                }
                mock_filter.sample_rate = new_sample_rate;
                true
            }
        }

        // Mock for update (no-op for testing purposes)
        #[no_mangle]
        pub extern "C" fn DigitalLPF_update(_filter: *mut ffi::DigitalLPFRaw, input_sample: f32) -> f32 {
            input_sample * 0.5 // A simple filter operation
        }

        // Mock for free
        #[no_mangle]
        pub extern "C" fn DigitalLPF_free(filter: *mut ffi::DigitalLPFRaw) {
            if filter.is_null() { return; }
            unsafe {
                // Find the index of the freed filter and mark it as None
                // This is a very simplistic way to simulate deallocation in a static array.
                for i in 0..MOCK_FILTERS.len() {
                    if let Some(ref mock_filter) = MOCK_FILTERS[i] {
                        let ptr = &mock_filter.sample_rate as *const f32 as *mut ffi::DigitalLPFRaw;
                        if ptr == filter {
                            MOCK_FILTERS[i] = None;
                            return;
                        }
                    }
                }
            }
        }
    }

    // Now, let's include the mock FFI as our actual FFI for testing.
    // This allows `#[forbid(unsafe_code)]` on the `lib.rs` and the tests to run.
    use mock_ffi as ffi;

    #[test]
    fn test_new_valid() {
        let lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        assert_eq!(lpf.sample_rate(), 48000.0);
        assert_eq!(lpf.cutoff_frequency(), 1000.0);
        // The drop impl will run at the end of the test.
    }

    #[test]
    fn test_new_invalid_sample_rate() {
        assert_eq!(
            DigitalLPF::new(0.0, 1000.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: 0.0,
                requirement: "sample_rate > 0.0"
            }
        );
        assert_eq!(
            DigitalLPF::new(-100.0, 1000.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: -100.0,
                requirement: "sample_rate > 0.0"
            }
        );
    }

    #[test]
    fn test_new_invalid_cutoff_frequency_negative() {
        assert_eq!(
            DigitalLPF::new(48000.0, -100.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: -100.0,
                requirement: "initial_cutoff_frequency >= 0.0"
            }
        );
    }

    #[test]
    fn test_new_invalid_cutoff_frequency_nyquist() {
        assert_eq!(
            DigitalLPF::new(48000.0, 24001.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: 24001.0,
                requirement: "initial_cutoff_frequency <= sample_rate / 2.0 (Nyquist limit)"
            }
        );
    }

    #[test]
    fn test_new_creation_failed_c_side() {
        mock_ffi::set_fail_new_countdown(1); // Make the next 'new' call fail
        assert_eq!(
            DigitalLPF::new(48000.0, 1000.0).unwrap_err(),
            DigitalLPFError::CreationFailed
        );
        mock_ffi::set_fail_new_countdown(-1); // Reset for other tests
    }

    #[test]
    fn test_set_cutoff_frequency_valid() {
        let mut lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        lpf.set_cutoff_frequency(5000.0).unwrap();
        assert_eq!(lpf.cutoff_frequency(), 5000.0);
    }

    #[test]
    fn test_set_cutoff_frequency_invalid_negative() {
        let mut lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        assert_eq!(
            lpf.set_cutoff_frequency(-10.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: -10.0,
                requirement: "new_frequency >= 0.0"
            }
        );
        // Ensure state hasn't changed
        assert_eq!(lpf.cutoff_frequency(), 1000.0);
    }

    #[test]
    fn test_set_cutoff_frequency_invalid_nyquist() {
        let mut lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        assert_eq!(
            lpf.set_cutoff_frequency(24001.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: 24001.0,
                requirement: "new_frequency <= self.sample_rate / 2.0 (Nyquist limit)"
            }
        );
        // Ensure state hasn't changed
        assert_eq!(lpf.cutoff_frequency(), 1000.0);
    }

    #[test]
    fn test_set_sample_rate_valid() {
        let mut lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        lpf.set_sample_rate(96000.0).unwrap();
        assert_eq!(lpf.sample_rate(), 96000.0);
        // Cutoff should still be valid with new sample rate
        assert_eq!(lpf.cutoff_frequency(), 1000.0);
    }

    #[test]
    fn test_set_sample_rate_invalid_zero() {
        let mut lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        assert_eq!(
            lpf.set_sample_rate(0.0).unwrap_err(),
            DigitalLPFError::InvalidParameter {
                value: 0.0,
                requirement: "new_sample_rate > 0.0"
            }
        );
        // Ensure state hasn't changed
        assert_eq!(lpf.sample_rate(), 48000.0);
    }

    #[test]
    fn test_set_sample_rate_invalid_nyquist_violation() {
        let mut lpf = DigitalLPF::new(48000.0, 10000.0).unwrap(); // High cutoff
        assert_eq!(
            lpf.set_sample_rate(10000.0).unwrap_err(), // Makes cutoff > new_sample_rate / 2
            DigitalLPFError::InvalidParameter {
                value: 10000.0,
                requirement: "self.cutoff_frequency <= new_sample_rate / 2.0 (Nyquist limit)"
            }
        );
        // Ensure state hasn't changed
        assert_eq!(lpf.sample_rate(), 48000.0);
        assert_eq!(lpf.cutoff_frequency(), 10000.0);
    }

    #[test]
    fn test_update() {
        let mut lpf = DigitalLPF::new(48000.0, 1000.0).unwrap();
        let input = 1.0;
        let output = lpf.update(input);
        // Based on mock_ffi::DigitalLPF_update, output should be input * 0.5
        assert_eq!(output, input * 0.5);
        // Ensure parameters are unchanged
        assert_eq!(lpf.sample_rate(), 48000.0);
        assert_eq!(lpf.cutoff_frequency(), 1000.0);
    }

    #[test]
    fn test_drop_frees_resources() {
        // This test primarily ensures no panic on drop and that `DigitalLPF_free` is called.
        // Verifying actual memory freeing in a no_std mock is tricky without complex instrumentation.
        // We rely on `MOCK_FILTERS` being set to `None`.
        let initial_free_idx = mock_ffi::NEXT_FREE_INDEX.load(Ordering::SeqCst);
        {
            let _lpf = DigitalLPF::new(44100.0, 500.0).unwrap();
            // At this point, one filter should be allocated in MOCK_FILTERS
            assert_eq!(mock_ffi::NEXT_FREE_INDEX.load(Ordering::SeqCst), initial_free_idx + 1);
        } // `_lpf` goes out of scope and `drop` is called here.

        // After drop, the mock filter should be deallocated (set to None).
        // This check is simplified, assuming the first allocated slot.
        unsafe {
            let filter_ptr = mock_ffi::MOCK_FILTERS[initial_free_idx].as_ref().map(|f| &f.sample_rate as *const f32 as *mut ffi::DigitalLPFRaw);
            assert!(filter_ptr.is_none() || filter_ptr.unwrap().is_null(), "Filter was not freed correctly in mock");
        }
    }
}
```