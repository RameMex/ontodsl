// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AC_PID.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct AcPidId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AC_PID
#[derive(Debug, Clone, PartialEq)]
pub struct AcPid {
    pub controller_id: AcPidId,
    pub k_p: f32,
    pub k_i: f32,
    pub k_d: f32,
    pub k_ff: f32,
    pub k_dff: f32,
    pub kimax: f32,
    pub kpdmax: f32,
    pub filt_t_hz: f32,
    pub filt_e_hz: f32,
    pub filt_d_hz: f32,
    pub slew_rate_max: f32,
    pub slew_rate_tau: f32,
    pub slew_limit_scale: i64,
    pub integrator: f32,
    pub target: f32,
    pub error: f32,
    pub derivative: f32,
    pub target_derivative: f32,
    pub reset_filter: bool,
    pub i_set: bool,
}


// ─── Constructors ───

impl AcPid {
    pub fn new(
        controller_id: alloc::string::String,
        k_p: f32,
        k_i: f32,
        k_d: f32,
        k_ff: f32,
        k_dff: f32,
        kimax: f32,
        kpdmax: f32,
        filt_t_hz: f32,
        filt_e_hz: f32,
        filt_d_hz: f32,
        slew_rate_max: f32,
        slew_rate_tau: f32,
        slew_limit_scale: i64,
        integrator: f32,
        target: f32,
        error: f32,
        derivative: f32,
        target_derivative: f32,
        reset_filter: bool,
        i_set: bool,
    ) -> Self {
        Self {
            controller_id: AcPidId(controller_id),
            k_p,
            k_i,
            k_d,
            k_ff,
            k_dff,
            kimax,
            kpdmax,
            filt_t_hz,
            filt_e_hz,
            filt_d_hz,
            slew_rate_max,
            slew_rate_tau,
            slew_limit_scale,
            integrator,
            target,
            error,
            derivative,
            target_derivative,
            reset_filter,
            i_set,
        }
    }
}


// ─── Runtime invariant validators ───

impl AcPid {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; DSL has no Option type, so the field is never null): self.controllerId <> null
        if !((self.kimax >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.kimax >= 0.0");
        }
        if !((self.kpdmax >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.kpdmax >= 0.0");
        }
        if !((self.k_dff >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.kDff >= 0.0");
        }
        if !((self.filt_t_hz >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.filtTHz >= 0.0");
        }
        if !((self.filt_e_hz >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.filtEHz >= 0.0");
        }
        if !((self.filt_d_hz >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.filtDHz >= 0.0");
        }
        if !((self.slew_rate_max >= 0.0)) {
            violations.push("[AC_PID] invariant violated: self.slewRateMax >= 0.0");
        }
        if !((self.slew_rate_tau > 0.0)) {
            violations.push("[AC_PID] invariant violated: self.slewRateTau > 0.0");
        }
        if !((self.integrator <= self.kimax)) {
            violations.push("[AC_PID] invariant violated: self.integrator <= self.kimax");
        }
        if !((self.integrator >= (0.0 - self.kimax))) {
            violations.push("[AC_PID] invariant violated: self.integrator >= 0.0 - self.kimax");
        }
        violations
    }
}


// ─── Event wrappers ───

impl AcPid {
    /// Wrapper for event reset_I: pre-checks, runs impl, post-checks.
    pub fn reset_i_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self)
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.integrator == 0.0)) {
                Some("[AC_PID::reset_I] postcondition violated: self.integrator = 0.0")
            } else if !((self.i_set == true)) {
                Some("[AC_PID::reset_I] postcondition violated: self.iSet = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event reset_filter: pre-checks, runs impl, post-checks.
    pub fn reset_filter_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self)
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.reset_filter == true)) {
                Some("[AC_PID::reset_filter] postcondition violated: self.resetFilter = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_integrator: pre-checks, runs impl, post-checks.
    pub fn set_integrator_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32)
    {
        let __rollback = self.clone();
        impl_fn(self, value);
        let __violation: Option<&'static str> = 
            if !((self.integrator <= self.kimax)) {
                Some("[AC_PID::set_integrator] postcondition violated: self.integrator <= self.kimax")
            } else if !((self.integrator >= (0.0 - self.kimax))) {
                Some("[AC_PID::set_integrator] postcondition violated: self.integrator >= 0.0 - self.kimax")
            } else if !((self.i_set == true)) {
                Some("[AC_PID::set_integrator] postcondition violated: self.iSet = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event relax_integrator: pre-checks, runs impl, post-checks.
    pub fn relax_integrator_wrapped<F>(
        &mut self,
        target_integrator: f32,
        dt: f32,
        time_constant: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32, f32, f32)
    {
        if !((dt >= 0.0)) {
            return Err("[AC_PID::relax_integrator] precondition violated: dt >= 0.0");
        }
        if !((time_constant >= 0.0)) {
            return Err("[AC_PID::relax_integrator] precondition violated: timeConstant >= 0.0");
        }
        let __rollback = self.clone();
        impl_fn(self, target_integrator, dt, time_constant);
        let __violation: Option<&'static str> = 
            if !((self.integrator <= self.kimax)) {
                Some("[AC_PID::relax_integrator] postcondition violated: self.integrator <= self.kimax")
            } else if !((self.integrator >= (0.0 - self.kimax))) {
                Some("[AC_PID::relax_integrator] postcondition violated: self.integrator >= 0.0 - self.kimax")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event update_i: pre-checks, runs impl, post-checks.
    pub fn update_i_wrapped<F>(
        &mut self,
        dt: f32,
        limit: bool,
        i_scale: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32, bool, f32)
    {
        if !((dt >= 0.0)) {
            return Err("[AC_PID::update_i] precondition violated: dt >= 0.0");
        }
        if !((i_scale).is_finite()) {
            return Err("[AC_PID::update_i] precondition violated: iScale.isFinite()");
        }
        let __rollback = self.clone();
        impl_fn(self, dt, limit, i_scale);
        let __violation: Option<&'static str> = 
            if !((self.integrator <= self.kimax)) {
                Some("[AC_PID::update_i] postcondition violated: self.integrator <= self.kimax")
            } else if !((self.integrator >= (0.0 - self.kimax))) {
                Some("[AC_PID::update_i] postcondition violated: self.integrator >= 0.0 - self.kimax")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event update_all: pre-checks, runs impl, post-checks.
    pub fn update_all_wrapped<F>(
        &mut self,
        target: f32,
        measurement: f32,
        dt: f32,
        limit: bool,
        pd_scale: f32,
        i_scale: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32, f32, f32, bool, f32, f32)
    {
        if !((target).is_finite()) {
            return Err("[AC_PID::update_all] precondition violated: target.isFinite()");
        }
        if !((measurement).is_finite()) {
            return Err("[AC_PID::update_all] precondition violated: measurement.isFinite()");
        }
        if !((dt >= 0.0)) {
            return Err("[AC_PID::update_all] precondition violated: dt >= 0.0");
        }
        if !((pd_scale).is_finite()) {
            return Err("[AC_PID::update_all] precondition violated: pdScale.isFinite()");
        }
        if !((i_scale).is_finite()) {
            return Err("[AC_PID::update_all] precondition violated: iScale.isFinite()");
        }
        let __rollback = self.clone();
        impl_fn(self, target, measurement, dt, limit, pd_scale, i_scale);
        let __violation: Option<&'static str> = 
            if !((self.reset_filter == false)) {
                Some("[AC_PID::update_all] postcondition violated: self.resetFilter = false")
            } else if !((self.i_set == false)) {
                Some("[AC_PID::update_all] postcondition violated: self.iSet = false")
            } else if !((self.integrator <= self.kimax)) {
                Some("[AC_PID::update_all] postcondition violated: self.integrator <= self.kimax")
            } else if !((self.integrator >= (0.0 - self.kimax))) {
                Some("[AC_PID::update_all] postcondition violated: self.integrator >= 0.0 - self.kimax")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event update_error: pre-checks, runs impl, post-checks.
    pub fn update_error_wrapped<F>(
        &mut self,
        error: f32,
        dt: f32,
        limit: bool,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32, f32, bool)
    {
        if !((error).is_finite()) {
            return Err("[AC_PID::update_error] precondition violated: error.isFinite()");
        }
        if !((dt >= 0.0)) {
            return Err("[AC_PID::update_error] precondition violated: dt >= 0.0");
        }
        let __rollback = self.clone();
        impl_fn(self, error, dt, limit);
        let __violation: Option<&'static str> = 
            if !((self.target == 0.0)) {
                Some("[AC_PID::update_error] postcondition violated: self.target = 0.0")
            } else if !((self.reset_filter == false)) {
                Some("[AC_PID::update_error] postcondition violated: self.resetFilter = false")
            } else if !((self.i_set == false)) {
                Some("[AC_PID::update_error] postcondition violated: self.iSet = false")
            } else if !((self.integrator <= self.kimax)) {
                Some("[AC_PID::update_error] postcondition violated: self.integrator <= self.kimax")
            } else if !((self.integrator >= (0.0 - self.kimax))) {
                Some("[AC_PID::update_error] postcondition violated: self.integrator >= 0.0 - self.kimax")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_imax: pre-checks, runs impl, post-checks.
    pub fn set_imax_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32)
    {
        let __rollback = self.clone();
        impl_fn(self, value);
        let __violation: Option<&'static str> = 
            if !((self.kimax >= 0.0)) {
                Some("[AC_PID::set_imax] postcondition violated: self.kimax >= 0.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_pdmax: pre-checks, runs impl, post-checks.
    pub fn set_pdmax_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32)
    {
        let __rollback = self.clone();
        impl_fn(self, value);
        let __violation: Option<&'static str> = 
            if !((self.kpdmax >= 0.0)) {
                Some("[AC_PID::set_pdmax] postcondition violated: self.kpdmax >= 0.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_kDff: pre-checks, runs impl, post-checks.
    pub fn set_k_dff_wrapped<F>(
        &mut self,
        value: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32)
    {
        let __rollback = self.clone();
        impl_fn(self, value);
        let __violation: Option<&'static str> = 
            if !((self.k_dff >= 0.0)) {
                Some("[AC_PID::set_kDff] postcondition violated: self.kDff >= 0.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

}



