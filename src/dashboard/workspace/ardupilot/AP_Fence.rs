// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f32.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AC_Fence.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct AcFenceId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AC_Fence
#[derive(Debug, Clone, PartialEq)]
pub struct AcFence {
    pub fence_id: AcFenceId,
    pub alt_max_m: f32,
    pub alt_min_m: f32,
    pub circle_radius_m: f32,
    pub margin_m: f32,
    pub enabled: bool,
    pub floor_enabled: bool,
    pub breached_mask: i64,
    pub breach_count: i64,
}


// ─── Constructors ───

impl AcFence {
    pub fn new(
        fence_id: alloc::string::String,
        alt_max_m: f32,
        alt_min_m: f32,
        circle_radius_m: f32,
        margin_m: f32,
    ) -> Self {
        Self {
            fence_id: AcFenceId(fence_id),
            alt_max_m,
            alt_min_m,
            circle_radius_m,
            margin_m,
            enabled: false,
            floor_enabled: true,
            breached_mask: 0,
            breach_count: 0,
        }
    }
}


// ─── Runtime invariant validators ───

impl AcFence {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'fenceId' is not Option<T>, so non-null by construction): self.fenceId <> null
        if !((self.alt_min_m >= 0.0)) {
            violations.push("[AC_Fence] invariant violated: self.altMinM >= 0.0");
        }
        if !((self.alt_max_m >= self.alt_min_m)) {
            violations.push("[AC_Fence] invariant violated: self.altMaxM >= self.altMinM");
        }
        if !((self.circle_radius_m > 0.0)) {
            violations.push("[AC_Fence] invariant violated: self.circleRadiusM > 0.0");
        }
        if !((self.margin_m >= 0.0)) {
            violations.push("[AC_Fence] invariant violated: self.marginM >= 0.0");
        }
        if !((self.breached_mask >= 0)) {
            violations.push("[AC_Fence] invariant violated: self.breachedMask >= 0");
        }
        if !((self.breach_count >= 0)) {
            violations.push("[AC_Fence] invariant violated: self.breachCount >= 0");
        }
        violations
    }
}


// ─── Event wrappers ───

impl AcFence {
    /// Wrapper for event enable: pre-checks, runs impl, post-checks.
    pub fn enable_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.enabled == true)) {
                Some("[AC_Fence::enable] postcondition violated: self.enabled = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event disable: pre-checks, runs impl, post-checks.
    pub fn disable_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.enabled == false)) {
                Some("[AC_Fence::disable] postcondition violated: self.enabled = false")
            } else if !((self.breached_mask == 0)) {
                Some("[AC_Fence::disable] postcondition violated: self.breachedMask = 0")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event enable_floor: pre-checks, runs impl, post-checks.
    pub fn enable_floor_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.floor_enabled == true)) {
                Some("[AC_Fence::enable_floor] postcondition violated: self.floorEnabled = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event disable_floor: pre-checks, runs impl, post-checks.
    pub fn disable_floor_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.floor_enabled == false)) {
                Some("[AC_Fence::disable_floor] postcondition violated: self.floorEnabled = false")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event check: pre-checks, runs impl, post-checks.
    /// Effects: HardwareRead, Telemetry
    /// Writes: breachedMask, breachCount
    pub fn check_wrapped<F>(
        &mut self,
        current_alt_m: f32,
        current_radius_m: f32,
        impl_fn: F,
    ) -> Result<i64, &'static str>
    where F: FnOnce(&mut Self, f32, f32) -> i64
    {
        if !((current_alt_m).is_finite()) {
            return Err("[AC_Fence::check] precondition violated: currentAltM.isFinite()");
        }
        if !((current_radius_m).is_finite()) {
            return Err("[AC_Fence::check] precondition violated: currentRadiusM.isFinite()");
        }
        if !((current_radius_m >= 0.0)) {
            return Err("[AC_Fence::check] precondition violated: currentRadiusM >= 0.0");
        }
        let __pre_breach_count = self.breach_count.clone();
        let __rollback = self.clone();
        let __result = impl_fn(self, current_alt_m, current_radius_m);
        let __violation: Option<&'static str> = 
            if !((__result >= 0)) {
                Some("[AC_Fence::check] postcondition violated: result >= 0")
            } else if !((self.breached_mask == __result)) {
                Some("[AC_Fence::check] postcondition violated: self.breachedMask = result")
            } else if !((self.breach_count >= __pre_breach_count)) {
                Some("[AC_Fence::check] postcondition violated: self.breachCount >= self.breachCount@pre")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event pre_arm_check: pre-checks, runs impl, post-checks.
    /// Effects: HardwareRead
    /// Reads: enabled, floorEnabled, altMaxM, altMinM, circleRadiusM
    pub fn pre_arm_check_wrapped<F>(
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

    /// Wrapper for event get_breach_count: pre-checks, runs impl, post-checks.
    pub fn get_breach_count_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<i64, &'static str>
    where F: FnOnce(&mut Self) -> i64
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((__result >= 0)) {
                Some("[AC_Fence::get_breach_count] postcondition violated: result >= 0")
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



