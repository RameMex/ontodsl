// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f64.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for ImuSample.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ImuSampleId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> ImuSample
#[derive(Debug, Clone, PartialEq)]
pub struct ImuSample {
    pub sample_id: ImuSampleId,
    pub t: f64,
    pub state: [f64; 6],
    pub cov: [[f64; 3]; 3],
}


// ─── Constructors ───

impl ImuSample {
    pub fn new(
        sample_id: alloc::string::String,
        t: f64,
        state: [f64; 6],
        cov: [[f64; 3]; 3],
    ) -> Self {
        Self {
            sample_id: ImuSampleId(sample_id),
            t,
            state,
            cov,
        }
    }
}


// ─── Runtime invariant validators ───

impl ImuSample {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.t >= 0.0)) {
            violations.push("[ImuSample] invariant violated: self.t >= 0.0");
        }
        if !((self.state.iter().copied().all(|__x| (__x).is_finite()))) {
            violations.push("[ImuSample] invariant violated: self.state->forAll(v | v.isFinite())");
        }
        if !((self.cov.iter().copied().all(|__x| (__x.iter().copied().all(|__x| (__x).is_finite()))))) {
            violations.push("[ImuSample] invariant violated: self.cov->forAll(row | row->forAll(c | c.isFinite()))");
        }
        violations
    }
}


// ─── Event wrappers ───

impl ImuSample {
    /// Wrapper for event integrate: pre-checks, runs impl, post-checks.
    /// Effects: Telemetry
    /// Reads: dt
    /// Writes: t
    pub fn integrate_wrapped<F>(
        &mut self,
        dt: f64,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, f64) -> bool
    {
        if !((dt > 0.0)) {
            return Err("[ImuSample::integrate] precondition violated: dt > 0.0");
        }
        if !((dt).is_finite()) {
            return Err("[ImuSample::integrate] precondition violated: dt.isFinite()");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, dt);
        let __violation: Option<&'static str> = 
            if !(((__result == true) || (__result == false))) {
                Some("[ImuSample::integrate] postcondition violated: result = true or result = false")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        let __inv = self.validate();
        if !__inv.is_empty() {
            *self = __rollback;
            return Err(__inv[0]);
        }
        Ok(__result)
    }

}



