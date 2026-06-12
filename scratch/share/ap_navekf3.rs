// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f64.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AP_NavEKF3.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ApNavEkf3Id(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AP_NavEKF3
#[derive(Debug, Clone, PartialEq)]
pub struct ApNavEkf3 {
    pub filter_id: ApNavEkf3Id,
    pub state: [f64; 16],
    pub cov: [[f64; 16]; 16],
}


// ─── Constructors ───

impl ApNavEkf3 {
    pub fn new(
        filter_id: alloc::string::String,
        state: [f64; 16],
        cov: [[f64; 16]; 16],
    ) -> Self {
        Self {
            filter_id: ApNavEkf3Id(filter_id),
            state,
            cov,
        }
    }
}


// ─── Runtime invariant validators ───

impl ApNavEkf3 {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'filterId' is not Option<T>, so non-null by construction): self.filterId <> null
        if !((self.state.iter().copied().all(|__x| (__x).is_finite()))) {
            violations.push("[AP_NavEKF3] invariant violated: self.state->forAll(v | v.isFinite())");
        }
        if !((self.cov.iter().copied().all(|__x| (__x.iter().copied().all(|__x| (__x).is_finite()))))) {
            violations.push("[AP_NavEKF3] invariant violated: self.cov->forAll(row | row->forAll(c | c.isFinite()))");
        }
        violations
    }
}


// ─── Event wrappers ───

impl ApNavEkf3 {
    /// Wrapper for event predict: pre-checks, runs impl, post-checks.
    /// Effects: Telemetry, LogRecord
    pub fn predict_wrapped<F>(
        &mut self,
        dt: f64,
        gyro: [f64; 3],
        accel: [f64; 3],
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64, [f64; 3], [f64; 3]) -> ()
    {
        if !((dt > 0.0)) {
            return Err("[AP_NavEKF3::predict] precondition violated: dt > 0.0");
        }
        if !((dt).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: dt.isFinite()");
        }
        if !((gyro.iter().copied().all(|__x| (__x).is_finite()))) {
            return Err("[AP_NavEKF3::predict] precondition violated: gyro->forAll(v | v.isFinite())");
        }
        if !((accel.iter().copied().all(|__x| (__x).is_finite()))) {
            return Err("[AP_NavEKF3::predict] precondition violated: accel->forAll(v | v.isFinite())");
        }
        let __rollback = self.clone();
        impl_fn(self, dt, gyro, accel);
        let __inv = self.validate();
        if !__inv.is_empty() {
            *self = __rollback;
            return Err(__inv[0]);
        }
        Ok(())
    }

    /// Wrapper for event fuse_gps: pre-checks, runs impl, post-checks.
    /// Effects: Telemetry, LogRecord
    pub fn fuse_gps_wrapped<F>(
        &mut self,
        pos: [f64; 3],
        vel: [f64; 3],
        pos_err_m: f64,
        vel_err_m: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, [f64; 3], [f64; 3], f64, f64) -> ()
    {
        if !((pos.iter().copied().all(|__x| (__x).is_finite()))) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: pos->forAll(v | v.isFinite())");
        }
        if !((vel.iter().copied().all(|__x| (__x).is_finite()))) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: vel->forAll(v | v.isFinite())");
        }
        if !((pos_err_m >= 0.0)) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posErrM >= 0.0");
        }
        if !((pos_err_m).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posErrM.isFinite()");
        }
        if !((vel_err_m >= 0.0)) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velErrM >= 0.0");
        }
        if !((vel_err_m).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velErrM.isFinite()");
        }
        let __rollback = self.clone();
        impl_fn(self, pos, vel, pos_err_m, vel_err_m);
        let __inv = self.validate();
        if !__inv.is_empty() {
            *self = __rollback;
            return Err(__inv[0]);
        }
        Ok(())
    }

}



