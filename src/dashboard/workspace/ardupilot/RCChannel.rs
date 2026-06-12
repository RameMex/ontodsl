// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for RC_Channel.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct RcChannelId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> RC_Channel
#[derive(Debug, Clone, PartialEq)]
pub struct RcChannel {
    pub channel_id: RcChannelId,
    pub radio_in: i64,
    pub radio_min: i64,
    pub radio_max: i64,
    pub radio_trim: i64,
    pub dead_zone: i64,
    pub control_in: i64,
}


// ─── Constructors ───

impl RcChannel {
    pub fn new(
        channel_id: alloc::string::String,
        radio_min: i64,
        radio_max: i64,
        radio_trim: i64,
        dead_zone: i64,
    ) -> Self {
        Self {
            channel_id: RcChannelId(channel_id),
            radio_in: 0,
            radio_min,
            radio_max,
            radio_trim,
            dead_zone,
            control_in: 0,
        }
    }
}


// ─── Runtime invariant validators ───

impl RcChannel {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'channelId' is not Option<T>, so non-null by construction): self.channelId <> null
        if !((self.radio_min > 0)) {
            violations.push("[RC_Channel] invariant violated: self.radioMin > 0");
        }
        if !((self.radio_max > self.radio_min)) {
            violations.push("[RC_Channel] invariant violated: self.radioMax > self.radioMin");
        }
        if !((self.dead_zone >= 0)) {
            violations.push("[RC_Channel] invariant violated: self.deadZone >= 0");
        }
        violations
    }
}


// ─── Event wrappers ───

impl RcChannel {
    /// Wrapper for event set_pwm: pre-checks, runs impl, post-checks.
    pub fn set_pwm_wrapped<F>(
        &mut self,
        pwm: i64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, i64) -> ()
    {
        if !((pwm >= 0)) {
            return Err("[RC_Channel::set_pwm] precondition violated: pwm >= 0");
        }
        if !((pwm <= 2500)) {
            return Err("[RC_Channel::set_pwm] precondition violated: pwm <= 2500");
        }
        let __rollback = self.clone();
        impl_fn(self, pwm);
        let __violation: Option<&'static str> = 
            if !((self.radio_in == pwm)) {
                Some("[RC_Channel::set_pwm] postcondition violated: self.radioIn = pwm")
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
    /// Effects: HardwareRead
    /// Writes: radioIn, controlIn
    pub fn update_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.control_in == self.radio_in)) {
                Some("[RC_Channel::update] postcondition violated: self.controlIn = self.radioIn")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event norm_input: pre-checks, runs impl, post-checks.
    pub fn norm_input_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<f32, &'static str>
    where F: FnOnce(&mut Self) -> f32
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result).is_finite()) {
                Some("[RC_Channel::norm_input] postcondition violated: result.isFinite()")
            } else if !((__result >= (0.0 - 1.0))) {
                Some("[RC_Channel::norm_input] postcondition violated: result >= 0.0 - 1.0")
            } else if !((__result <= 1.0)) {
                Some("[RC_Channel::norm_input] postcondition violated: result <= 1.0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event get_radio_in: pre-checks, runs impl, post-checks.
    pub fn get_radio_in_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<i64, &'static str>
    where F: FnOnce(&mut Self) -> i64
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result == self.radio_in)) {
                Some("[RC_Channel::get_radio_in] postcondition violated: result = self.radioIn")
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



