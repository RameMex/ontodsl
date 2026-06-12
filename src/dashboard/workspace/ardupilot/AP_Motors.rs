// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AP_Motors.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ApMotorsId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AP_Motors
#[derive(Debug, Clone, PartialEq)]
pub struct ApMotors {
    pub mixer_id: ApMotorsId,
    pub roll: f32,
    pub pitch: f32,
    pub yaw: f32,
    pub throttle: f32,
    pub armed: bool,
    pub motor_count: i64,
    pub min_throttle: f32,
}


// ─── Constructors ───

impl ApMotors {
    pub fn new(
        mixer_id: alloc::string::String,
        min_throttle: f32,
    ) -> Self {
        Self {
            mixer_id: ApMotorsId(mixer_id),
            roll: 0.0,
            pitch: 0.0,
            yaw: 0.0,
            throttle: 0.0,
            armed: false,
            motor_count: 4,
            min_throttle,
        }
    }
}


// ─── Runtime invariant validators ───

impl ApMotors {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'mixerId' is not Option<T>, so non-null by construction): self.mixerId <> null
        if !((self.motor_count >= 1)) {
            violations.push("[AP_Motors] invariant violated: self.motorCount >= 1");
        }
        if !((self.motor_count <= 12)) {
            violations.push("[AP_Motors] invariant violated: self.motorCount <= 12");
        }
        if !((self.min_throttle >= 0.0)) {
            violations.push("[AP_Motors] invariant violated: self.minThrottle >= 0.0");
        }
        if !((self.min_throttle <= 1.0)) {
            violations.push("[AP_Motors] invariant violated: self.minThrottle <= 1.0");
        }
        if !((self.roll >= (0.0 - 1.0))) {
            violations.push("[AP_Motors] invariant violated: self.roll >= 0.0 - 1.0");
        }
        if !((self.roll <= 1.0)) {
            violations.push("[AP_Motors] invariant violated: self.roll <= 1.0");
        }
        if !((self.pitch >= (0.0 - 1.0))) {
            violations.push("[AP_Motors] invariant violated: self.pitch >= 0.0 - 1.0");
        }
        if !((self.pitch <= 1.0)) {
            violations.push("[AP_Motors] invariant violated: self.pitch <= 1.0");
        }
        if !((self.yaw >= (0.0 - 1.0))) {
            violations.push("[AP_Motors] invariant violated: self.yaw >= 0.0 - 1.0");
        }
        if !((self.yaw <= 1.0)) {
            violations.push("[AP_Motors] invariant violated: self.yaw <= 1.0");
        }
        if !((self.throttle >= 0.0)) {
            violations.push("[AP_Motors] invariant violated: self.throttle >= 0.0");
        }
        if !((self.throttle <= 1.0)) {
            violations.push("[AP_Motors] invariant violated: self.throttle <= 1.0");
        }
        violations
    }
}


// ─── Event wrappers ───

impl ApMotors {
    /// Wrapper for event arm: pre-checks, runs impl, post-checks.
    pub fn arm_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.armed == true)) {
                Some("[AP_Motors::arm] postcondition violated: self.armed = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event disarm: pre-checks, runs impl, post-checks.
    pub fn disarm_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.armed == false)) {
                Some("[AP_Motors::disarm] postcondition violated: self.armed = false")
            } else if !((self.throttle == 0.0)) {
                Some("[AP_Motors::disarm] postcondition violated: self.throttle = 0.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_roll: pre-checks, runs impl, post-checks.
    pub fn set_roll_wrapped<F>(
        &mut self,
        cmd: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32) -> ()
    {
        if !((cmd).is_finite()) {
            return Err("[AP_Motors::set_roll] precondition violated: cmd.isFinite()");
        }
        if !((cmd >= (0.0 - 1.0))) {
            return Err("[AP_Motors::set_roll] precondition violated: cmd >= 0.0 - 1.0");
        }
        if !((cmd <= 1.0)) {
            return Err("[AP_Motors::set_roll] precondition violated: cmd <= 1.0");
        }
        let __rollback = self.clone();
        impl_fn(self, cmd);
        let __violation: Option<&'static str> = 
            if !((self.roll == cmd)) {
                Some("[AP_Motors::set_roll] postcondition violated: self.roll = cmd")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_pitch: pre-checks, runs impl, post-checks.
    pub fn set_pitch_wrapped<F>(
        &mut self,
        cmd: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32) -> ()
    {
        if !((cmd).is_finite()) {
            return Err("[AP_Motors::set_pitch] precondition violated: cmd.isFinite()");
        }
        if !((cmd >= (0.0 - 1.0))) {
            return Err("[AP_Motors::set_pitch] precondition violated: cmd >= 0.0 - 1.0");
        }
        if !((cmd <= 1.0)) {
            return Err("[AP_Motors::set_pitch] precondition violated: cmd <= 1.0");
        }
        let __rollback = self.clone();
        impl_fn(self, cmd);
        let __violation: Option<&'static str> = 
            if !((self.pitch == cmd)) {
                Some("[AP_Motors::set_pitch] postcondition violated: self.pitch = cmd")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_yaw: pre-checks, runs impl, post-checks.
    pub fn set_yaw_wrapped<F>(
        &mut self,
        cmd: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32) -> ()
    {
        if !((cmd).is_finite()) {
            return Err("[AP_Motors::set_yaw] precondition violated: cmd.isFinite()");
        }
        if !((cmd >= (0.0 - 1.0))) {
            return Err("[AP_Motors::set_yaw] precondition violated: cmd >= 0.0 - 1.0");
        }
        if !((cmd <= 1.0)) {
            return Err("[AP_Motors::set_yaw] precondition violated: cmd <= 1.0");
        }
        let __rollback = self.clone();
        impl_fn(self, cmd);
        let __violation: Option<&'static str> = 
            if !((self.yaw == cmd)) {
                Some("[AP_Motors::set_yaw] postcondition violated: self.yaw = cmd")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event set_throttle: pre-checks, runs impl, post-checks.
    pub fn set_throttle_wrapped<F>(
        &mut self,
        cmd: f32,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f32) -> ()
    {
        if !((cmd).is_finite()) {
            return Err("[AP_Motors::set_throttle] precondition violated: cmd.isFinite()");
        }
        if !((cmd >= 0.0)) {
            return Err("[AP_Motors::set_throttle] precondition violated: cmd >= 0.0");
        }
        if !((cmd <= 1.0)) {
            return Err("[AP_Motors::set_throttle] precondition violated: cmd <= 1.0");
        }
        let __rollback = self.clone();
        impl_fn(self, cmd);
        let __violation: Option<&'static str> = 
            if !((self.throttle == cmd)) {
                Some("[AP_Motors::set_throttle] postcondition violated: self.throttle = cmd")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event output_stabilizing: pre-checks, runs impl, post-checks.
    /// Effects: HardwarePwm
    /// Reads: roll, pitch, yaw, throttle, motorCount, minThrottle
    pub fn output_stabilizing_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        if !((self.armed == true)) {
            return Err("[AP_Motors::output_stabilizing] precondition violated: self.armed = true");
        }
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.throttle >= 0.0)) {
                Some("[AP_Motors::output_stabilizing] postcondition violated: self.throttle >= 0.0")
            } else if !((self.throttle <= 1.0)) {
                Some("[AP_Motors::output_stabilizing] postcondition violated: self.throttle <= 1.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event mix_motor: pre-checks, runs impl, post-checks.
    /// Reads: roll, pitch, yaw, throttle, minThrottle
    pub fn mix_motor_wrapped<F>(
        &mut self,
        i: i64,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self, i64) -> f32
    {
        if !((i >= 0)) {
            return Err("[AP_Motors::mix_motor] precondition violated: i >= 0");
        }
        if !((i < self.motor_count)) {
            return Err("[AP_Motors::mix_motor] precondition violated: i < self.motorCount");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, i);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[AP_Motors::mix_motor] postcondition violated: result.isFinite()")
            } else if !((__result >= 0.0)) {
                Some("[AP_Motors::mix_motor] postcondition violated: result >= 0.0")
            } else if !((__result <= 1.0)) {
                Some("[AP_Motors::mix_motor] postcondition violated: result <= 1.0")
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



