// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: no-alloc (capacity=16); Real → f64.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// no-alloc target: heapless containers with fixed capacity 16.
// No global allocator required.

// ─── Branded identity types ───

/// Identity type for DigitalLPF.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DigitalLpfId(pub heapless::String<16>);

// ─── Structs ───

/// <<Kind>> DigitalLPF
#[derive(Debug, Clone, PartialEq)]
pub struct DigitalLpf {
    pub filter_id: DigitalLpfId,
    pub output: f64,
    pub initialised: bool,
}

/// <<Subkind>> LowPassFilter
#[derive(Debug, Clone, PartialEq)]
pub struct LowPassFilter {
    pub filter_id: heapless::String<16>,
    pub output: f64,
    pub initialised: bool,
    pub cutoff_freq: f64,
}


// ─── Constructors ───

impl DigitalLpf {
    pub fn new(
        filter_id: heapless::String<16>,
        output: f64,
        initialised: bool,
    ) -> Self {
        Self {
            filter_id: DigitalLpfId(filter_id),
            output,
            initialised,
        }
    }
}


// ─── Runtime invariant validators ───

impl DigitalLpf {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> heapless::Vec<&'static str, 16> {
        let mut violations: heapless::Vec<&'static str, 16> = heapless::Vec::<&'static str, 16>::new();
        // ELIDED invariant (vacuous; DSL has no Option type, so the field is never null): self.filterId <> null
        violations
    }
}

impl LowPassFilter {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> heapless::Vec<&'static str, 16> {
        let mut violations: heapless::Vec<&'static str, 16> = heapless::Vec::<&'static str, 16>::new();
        if !((self.cutoff_freq >= 0.0)) {
            let _ = violations.push("[LowPassFilter] invariant violated: self.cutoffFreq >= 0.0");
        }
        violations
    }
}


// ─── Event wrappers ───

impl DigitalLpf {
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

impl LowPassFilter {
    /// Wrapper for event set_cutoff_frequency: pre-checks, runs impl, post-checks.
    pub fn set_cutoff_frequency_wrapped<F>(
        &mut self,
        new_cutoff_freq: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64)
    {
        if !((new_cutoff_freq >= 0.0)) {
            return Err("[LowPassFilter::set_cutoff_frequency] precondition violated: newCutoffFreq >= 0.0");
        }
        let __rollback = self.clone();
        impl_fn(self, new_cutoff_freq);
        if !((self.cutoff_freq == new_cutoff_freq)) {
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



