// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for DerivativeFilter.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DerivativeFilterId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> DerivativeFilter
#[derive(Debug, Clone, PartialEq)]
pub struct DerivativeFilter {
    pub filter_id: DerivativeFilterId,
    pub last_slope: f32,
    pub new_data: bool,
}


// ─── Constructors ───

impl DerivativeFilter {
    pub fn new(
        filter_id: alloc::string::String,
    ) -> Self {
        Self {
            filter_id: DerivativeFilterId(filter_id),
            last_slope: 0.0,
            new_data: false,
        }
    }
}


// ─── Runtime invariant validators ───

impl DerivativeFilter {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'filterId' is not Option<T>, so non-null by construction): self.filterId <> null
        violations
    }
}


// ─── Event wrappers ───

impl DerivativeFilter {
    /// Wrapper for event reset: pre-checks, runs impl, post-checks.
    pub fn reset_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.new_data == false)) {
                Some("[DerivativeFilter::reset] postcondition violated: self.newData = false")
            } else if !((self.last_slope == 0.0)) {
                Some("[DerivativeFilter::reset] postcondition violated: self.lastSlope = 0.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event update: pre-checks, runs impl, post-checks.
    pub fn update_wrapped<F>(
        &mut self,
        sample: f32,
        timestamp: i64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32, i64) -> ()
    {
        if !((sample).is_finite()) {
            return Err("[DerivativeFilter::update] precondition violated: sample.isFinite()");
        }
        if !((timestamp >= 0)) {
            return Err("[DerivativeFilter::update] precondition violated: timestamp >= 0");
        }
        let __rollback = self.clone();
        impl_fn(self, sample, timestamp);
        let __violation: Option<&'static str> = 
            if !((self.new_data == true)) {
                Some("[DerivativeFilter::update] postcondition violated: self.newData = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event slope: pre-checks, runs impl, post-checks.
    pub fn slope_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self) -> f32
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[DerivativeFilter::slope] postcondition violated: result.isFinite()")
            } else if !((self.new_data == false)) {
                Some("[DerivativeFilter::slope] postcondition violated: self.newData = false")
            } else if !((self.last_slope == __result)) {
                Some("[DerivativeFilter::slope] postcondition violated: self.lastSlope = result")
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



