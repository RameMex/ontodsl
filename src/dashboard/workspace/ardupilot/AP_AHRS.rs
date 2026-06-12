// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AP_AHRS.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ApAhrsId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AP_AHRS
#[derive(Debug, Clone, PartialEq)]
pub struct ApAhrs {
    pub ahrs_id: ApAhrsId,
    pub roll: f32,
    pub pitch: f32,
    pub yaw: f32,
    pub q_0: f32,
    pub q_1: f32,
    pub q_2: f32,
    pub q_3: f32,
    pub healthy: bool,
}


// ─── Constructors ───

impl ApAhrs {
    pub fn new(
        ahrs_id: alloc::string::String,
    ) -> Self {
        Self {
            ahrs_id: ApAhrsId(ahrs_id),
            roll: 0.0,
            pitch: 0.0,
            yaw: 0.0,
            q_0: 1.0,
            q_1: 0.0,
            q_2: 0.0,
            q_3: 0.0,
            healthy: false,
        }
    }
}


// ─── Runtime invariant validators ───

impl ApAhrs {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'ahrsId' is not Option<T>, so non-null by construction): self.ahrsId <> null
        if !((self.roll >= (0.0 - 3.1416))) {
            violations.push("[AP_AHRS] invariant violated: self.roll >= 0.0 - 3.14160");
        }
        if !((self.roll <= 3.1416)) {
            violations.push("[AP_AHRS] invariant violated: self.roll <= 3.14160");
        }
        if !((self.pitch >= (0.0 - 1.5708))) {
            violations.push("[AP_AHRS] invariant violated: self.pitch >= 0.0 - 1.57080");
        }
        if !((self.pitch <= 1.5708)) {
            violations.push("[AP_AHRS] invariant violated: self.pitch <= 1.57080");
        }
        if !((self.yaw >= (0.0 - 3.1416))) {
            violations.push("[AP_AHRS] invariant violated: self.yaw >= 0.0 - 3.14160");
        }
        if !((self.yaw <= 3.1416)) {
            violations.push("[AP_AHRS] invariant violated: self.yaw <= 3.14160");
        }
        violations
    }
}


// ─── Event wrappers ───

impl ApAhrs {
    /// Wrapper for event update: pre-checks, runs impl, post-checks.
    /// Effects: HardwareRead, Telemetry
    /// Writes: roll, pitch, yaw, q0, q1, q2, q3, healthy
    pub fn update_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.roll).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.roll.isFinite()")
            } else if !((self.pitch).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.pitch.isFinite()")
            } else if !((self.yaw).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.yaw.isFinite()")
            } else if !((self.q_0).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.q0.isFinite()")
            } else if !((self.q_1).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.q1.isFinite()")
            } else if !((self.q_2).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.q2.isFinite()")
            } else if !((self.q_3).is_finite()) {
                Some("[AP_AHRS::update] postcondition violated: self.q3.isFinite()")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event reset_attitude: pre-checks, runs impl, post-checks.
    pub fn reset_attitude_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.roll == 0.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.roll = 0.0")
            } else if !((self.pitch == 0.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.pitch = 0.0")
            } else if !((self.yaw == 0.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.yaw = 0.0")
            } else if !((self.q_0 == 1.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.q0 = 1.0")
            } else if !((self.q_1 == 0.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.q1 = 0.0")
            } else if !((self.q_2 == 0.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.q2 = 0.0")
            } else if !((self.q_3 == 0.0)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.q3 = 0.0")
            } else if !((self.healthy == false)) {
                Some("[AP_AHRS::reset_attitude] postcondition violated: self.healthy = false")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event get_roll: pre-checks, runs impl, post-checks.
    pub fn get_roll_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self) -> f32
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_AHRS::get_roll] postcondition violated: result.isFinite()")
            } else if !((__result >= (0.0 - 3.1416))) {
                Some("[AP_AHRS::get_roll] postcondition violated: result >= 0.0 - 3.14160")
            } else if !((__result <= 3.1416)) {
                Some("[AP_AHRS::get_roll] postcondition violated: result <= 3.14160")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event get_pitch: pre-checks, runs impl, post-checks.
    pub fn get_pitch_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self) -> f32
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_AHRS::get_pitch] postcondition violated: result.isFinite()")
            } else if !((__result >= (0.0 - 1.5708))) {
                Some("[AP_AHRS::get_pitch] postcondition violated: result >= 0.0 - 1.57080")
            } else if !((__result <= 1.5708)) {
                Some("[AP_AHRS::get_pitch] postcondition violated: result <= 1.57080")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event get_yaw: pre-checks, runs impl, post-checks.
    pub fn get_yaw_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self) -> f32
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_AHRS::get_yaw] postcondition violated: result.isFinite()")
            } else if !((__result >= (0.0 - 3.1416))) {
                Some("[AP_AHRS::get_yaw] postcondition violated: result >= 0.0 - 3.14160")
            } else if !((__result <= 3.1416)) {
                Some("[AP_AHRS::get_yaw] postcondition violated: result <= 3.14160")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event is_healthy: pre-checks, runs impl, post-checks.
    pub fn is_healthy_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self) -> bool
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let _ = __rollback; // no post-checks; rollback unused
        Ok(__result)
    }

}



