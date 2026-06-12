// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AP_Math.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ApMathId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AP_Math
#[derive(Debug, Clone, PartialEq)]
pub struct ApMath {
    pub lib_id: ApMathId,
}


// ─── Constructors ───

impl ApMath {
    pub fn new(
        lib_id: alloc::string::String,
    ) -> Self {
        Self {
            lib_id: ApMathId(lib_id),
        }
    }
}


// ─── Runtime invariant validators ───

impl ApMath {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'libId' is not Option<T>, so non-null by construction): self.libId <> null
        violations
    }
}


// ─── Event wrappers ───

impl ApMath {
    /// Wrapper for event constrain: pre-checks, runs impl, post-checks.
    pub fn constrain_wrapped<F>(
        &mut self,
        value: f32,
        low: f32,
        high: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32, f32, f32) -> f32
    {
        if !((value).is_finite()) {
            return Err("[AP_Math::constrain] precondition violated: value.isFinite()");
        }
        if !((low).is_finite()) {
            return Err("[AP_Math::constrain] precondition violated: low.isFinite()");
        }
        if !((high).is_finite()) {
            return Err("[AP_Math::constrain] precondition violated: high.isFinite()");
        }
        if !((low <= high)) {
            return Err("[AP_Math::constrain] precondition violated: low <= high");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, value, low, high);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::constrain] postcondition violated: result.isFinite()")
            } else if !((__result >= low)) {
                Some("[AP_Math::constrain] postcondition violated: result >= low")
            } else if !((__result <= high)) {
                Some("[AP_Math::constrain] postcondition violated: result <= high")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event safe_sqrt: pre-checks, runs impl, post-checks.
    pub fn safe_sqrt_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32) -> f32
    {
        if !((value).is_finite()) {
            return Err("[AP_Math::safe_sqrt] precondition violated: value.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, value);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::safe_sqrt] postcondition violated: result.isFinite()")
            } else if !((__result >= 0.0)) {
                Some("[AP_Math::safe_sqrt] postcondition violated: result >= 0.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event safe_asin: pre-checks, runs impl, post-checks.
    pub fn safe_asin_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32) -> f32
    {
        if !((value).is_finite()) {
            return Err("[AP_Math::safe_asin] precondition violated: value.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, value);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::safe_asin] postcondition violated: result.isFinite()")
            } else if !((__result >= (0.0 - 1.5708))) {
                Some("[AP_Math::safe_asin] postcondition violated: result >= 0.0 - 1.5708")
            } else if !((__result <= 1.5708)) {
                Some("[AP_Math::safe_asin] postcondition violated: result <= 1.5708")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event is_zero: pre-checks, runs impl, post-checks.
    pub fn is_zero_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, f32) -> bool
    {
        if !((value).is_finite()) {
            return Err("[AP_Math::is_zero] precondition violated: value.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, value);
        let _ = __rollback; // no post-checks; rollback unused
        Ok(__result)
    }

    /// Wrapper for event is_positive: pre-checks, runs impl, post-checks.
    pub fn is_positive_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, f32) -> bool
    {
        if !((value).is_finite()) {
            return Err("[AP_Math::is_positive] precondition violated: value.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, value);
        let _ = __rollback; // no post-checks; rollback unused
        Ok(__result)
    }

    /// Wrapper for event is_negative: pre-checks, runs impl, post-checks.
    pub fn is_negative_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, f32) -> bool
    {
        if !((value).is_finite()) {
            return Err("[AP_Math::is_negative] precondition violated: value.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, value);
        let _ = __rollback; // no post-checks; rollback unused
        Ok(__result)
    }

    /// Wrapper for event calc_lowpass_alpha: pre-checks, runs impl, post-checks.
    pub fn calc_lowpass_alpha_wrapped<F>(
        &mut self,
        dt: f32,
        cutoff_freq: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32, f32) -> f32
    {
        if !((dt > 0.0)) {
            return Err("[AP_Math::calc_lowpass_alpha] precondition violated: dt > 0.0");
        }
        if !((cutoff_freq >= 0.0)) {
            return Err("[AP_Math::calc_lowpass_alpha] precondition violated: cutoffFreq >= 0.0");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, dt, cutoff_freq);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::calc_lowpass_alpha] postcondition violated: result.isFinite()")
            } else if !((__result > 0.0)) {
                Some("[AP_Math::calc_lowpass_alpha] postcondition violated: result > 0.0")
            } else if !((__result <= 1.0)) {
                Some("[AP_Math::calc_lowpass_alpha] postcondition violated: result <= 1.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event wrap_pi: pre-checks, runs impl, post-checks.
    pub fn wrap_pi_wrapped<F>(
        &mut self,
        rad: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32) -> f32
    {
        if !((rad).is_finite()) {
            return Err("[AP_Math::wrap_pi] precondition violated: rad.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, rad);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::wrap_pi] postcondition violated: result.isFinite()")
            } else if !((__result > (0.0 - 3.14159))) {
                Some("[AP_Math::wrap_pi] postcondition violated: result > 0.0 - 3.14159")
            } else if !((__result <= 3.1416)) {
                Some("[AP_Math::wrap_pi] postcondition violated: result <= 3.14160")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event radians: pre-checks, runs impl, post-checks.
    pub fn radians_wrapped<F>(
        &mut self,
        deg: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32) -> f32
    {
        if !((deg).is_finite()) {
            return Err("[AP_Math::radians] precondition violated: deg.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, deg);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::radians] postcondition violated: result.isFinite()")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event degrees: pre-checks, runs impl, post-checks.
    pub fn degrees_wrapped<F>(
        &mut self,
        rad: f32,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, f32) -> f32
    {
        if !((rad).is_finite()) {
            return Err("[AP_Math::degrees] precondition violated: rad.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, rad);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Math::degrees] postcondition violated: result.isFinite()")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

}



