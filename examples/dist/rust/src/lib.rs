// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for DigitalLPF.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DigitalLPFId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> DigitalLPF
#[derive(Debug, Clone, PartialEq)]
pub struct DigitalLPF {
    pub filterId: DigitalLPFId,
    pub output: f64,
    pub initialised: bool,
}

/// <<Subkind>> LowPassFilterConstDt
#[derive(Debug, Clone, PartialEq)]
pub struct LowPassFilterConstDt {
    pub filterId: alloc::string::String,
    pub output: f64,
    pub initialised: bool,
    pub cutoffFreq: f64,
    pub alpha: f64,
}

/// <<Subkind>> LowPassFilter
#[derive(Debug, Clone, PartialEq)]
pub struct LowPassFilter {
    pub filterId: alloc::string::String,
    pub output: f64,
    pub initialised: bool,
    pub cutoffFreq: f64,
}


// ─── Constructors ───

impl DigitalLPF {
    pub fn new(
        filterId: alloc::string::String,
        output: f64,
        initialised: bool,
    ) -> Self {
        Self {
            filterId: DigitalLPFId(filterId),
            output,
            initialised,
        }
    }
}


// ─── Runtime invariant validators ───

impl DigitalLPF {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.filterId != None)) {
            violations.push("[DigitalLPF] invariant violated: self.filterId <> null");
        }
        violations
    }
}

impl LowPassFilterConstDt {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.cutoffFreq >= 0.0)) {
            violations.push("[LowPassFilterConstDt] invariant violated: self.cutoffFreq >= 0.0");
        }
        if !((self.alpha >= 0.0)) {
            violations.push("[LowPassFilterConstDt] invariant violated: self.alpha >= 0.0");
        }
        if !((self.alpha <= 1.0)) {
            violations.push("[LowPassFilterConstDt] invariant violated: self.alpha <= 1.0");
        }
        violations
    }
}

impl LowPassFilter {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.cutoffFreq >= 0.0)) {
            violations.push("[LowPassFilter] invariant violated: self.cutoffFreq >= 0.0");
        }
        violations
    }
}


// ─── Event wrappers ───

impl DigitalLPF {
    /// Wrapper for event reset: pre-checks, runs impl, post-checks.
    pub fn reset_wrapped<F>(
        &mut self,
        value: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64)
    {
        let __rollback = self.clone();
        impl_fn(self, value);
        if !((self.output == value)) {
            *self = __rollback.clone();
            return Err("[DigitalLPF::reset] postcondition violated: self.output = value");
        }
        if !((self.initialised == true)) {
            *self = __rollback.clone();
            return Err("[DigitalLPF::reset] postcondition violated: self.initialised = true");
        }
        Ok(())
    }

    /// Wrapper for event reset_flag: pre-checks, runs impl, post-checks.
    pub fn reset_flag_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self)
    {
        let __rollback = self.clone();
        impl_fn(self);
        if !((self.initialised == false)) {
            *self = __rollback.clone();
            return Err("[DigitalLPF::reset_flag] postcondition violated: self.initialised = false");
        }
        Ok(())
    }

    /// Wrapper for event apply_internal: pre-checks, runs impl, post-checks.
    pub fn apply_internal_wrapped<F>(
        &mut self,
        sample: f64,
        alpha: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64, f64)
    {
        if !((alpha >= 0.0)) {
            return Err("[DigitalLPF::apply_internal] precondition violated: alpha >= 0.0");
        }
        if !((alpha <= 1.0)) {
            return Err("[DigitalLPF::apply_internal] precondition violated: alpha <= 1.0");
        }
        let __pre_initialised = self.initialised.clone();
        let __pre_output = self.output.clone();
        let __rollback = self.clone();
        impl_fn(self, sample, alpha);
        if !((if __pre_initialised { (self.output == (__pre_output + ((sample - __pre_output) * alpha))) } else { (self.output == sample) })) {
            *self = __rollback.clone();
            return Err("[DigitalLPF::apply_internal] postcondition violated: if self.initialised@pre then
            self.output = self.output@pre + (sample - self.output@pre) * alpha
          else
            self.output = sample
          endif");
        }
        if !((self.initialised == true)) {
            *self = __rollback.clone();
            return Err("[DigitalLPF::apply_internal] postcondition violated: self.initialised = true");
        }
        Ok(())
    }

}

impl LowPassFilterConstDt {
    /// Wrapper for event set_cutoff_frequency: pre-checks, runs impl, post-checks.
    pub fn set_cutoff_frequency_wrapped<F>(
        &mut self,
        sampleFreq: f64,
        newCutoffFreq: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64, f64)
    {
        if !((newCutoffFreq >= 0.0)) {
            return Err("[LowPassFilterConstDt::set_cutoff_frequency] precondition violated: newCutoffFreq >= 0.0");
        }
        let __rollback = self.clone();
        impl_fn(self, sampleFreq, newCutoffFreq);
        if !((self.cutoffFreq == newCutoffFreq)) {
            *self = __rollback.clone();
            return Err("[LowPassFilterConstDt::set_cutoff_frequency] postcondition violated: self.cutoffFreq = newCutoffFreq");
        }
        if !((if (sampleFreq <= 0.0) { (self.alpha == 1.0) } else { ((self.alpha >= 0.0) && (self.alpha <= 1.0)) })) {
            *self = __rollback.clone();
            return Err("[LowPassFilterConstDt::set_cutoff_frequency] postcondition violated: if sampleFreq <= 0.0 then
            self.alpha = 1.0
          else
            self.alpha >= 0.0 and self.alpha <= 1.0
          endif");
        }
        Ok(())
    }

    /// Wrapper for event apply: pre-checks, runs impl, post-checks.
    pub fn apply_wrapped<F>(
        &mut self,
        sample: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64)
    {
        let __pre_initialised = self.initialised.clone();
        let __pre_output = self.output.clone();
        let __rollback = self.clone();
        impl_fn(self, sample);
        if !((if __pre_initialised { (self.output == (__pre_output + ((sample - __pre_output) * self.alpha))) } else { (self.output == sample) })) {
            *self = __rollback.clone();
            return Err("[LowPassFilterConstDt::apply] postcondition violated: if self.initialised@pre then
            self.output = self.output@pre + (sample - self.output@pre) * self.alpha
          else
            self.output = sample
          endif");
        }
        if !((self.initialised == true)) {
            *self = __rollback.clone();
            return Err("[LowPassFilterConstDt::apply] postcondition violated: self.initialised = true");
        }
        Ok(())
    }

}

impl LowPassFilter {
    /// Wrapper for event set_cutoff_frequency: pre-checks, runs impl, post-checks.
    pub fn set_cutoff_frequency_wrapped<F>(
        &mut self,
        newCutoffFreq: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64)
    {
        if !((newCutoffFreq >= 0.0)) {
            return Err("[LowPassFilter::set_cutoff_frequency] precondition violated: newCutoffFreq >= 0.0");
        }
        let __rollback = self.clone();
        impl_fn(self, newCutoffFreq);
        if !((self.cutoffFreq == newCutoffFreq)) {
            *self = __rollback.clone();
            return Err("[LowPassFilter::set_cutoff_frequency] postcondition violated: self.cutoffFreq = newCutoffFreq");
        }
        Ok(())
    }

    /// Wrapper for event apply: pre-checks, runs impl, post-checks.
    pub fn apply_wrapped<F>(
        &mut self,
        sample: f64,
        dt: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64, f64)
    {
        if !((dt >= 0.0)) {
            return Err("[LowPassFilter::apply] precondition violated: dt >= 0.0");
        }
        let __rollback = self.clone();
        impl_fn(self, sample, dt);
        if !((self.initialised == true)) {
            *self = __rollback.clone();
            return Err("[LowPassFilter::apply] postcondition violated: self.initialised = true");
        }
        Ok(())
    }

}



