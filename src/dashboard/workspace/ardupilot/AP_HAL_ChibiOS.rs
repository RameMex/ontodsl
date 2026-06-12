// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f64.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for Bus.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct BusId(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> Bus
#[derive(Debug, Clone, PartialEq)]
pub struct Bus {
    pub bus_id: BusId,
    pub enabled: bool,
    pub last_error: alloc::string::String,
    pub current_address: i64,
    pub transfer_count: i64,
}


// ─── Constructors ───

impl Bus {
    pub fn new(
        bus_id: alloc::string::String,
        enabled: bool,
    ) -> Self {
        Self {
            bus_id: BusId(bus_id),
            enabled,
            last_error: alloc::string::String::from(""),
            current_address: 0,
            transfer_count: 0,
        }
    }
}


// ─── Runtime invariant validators ───

impl Bus {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'busId' is not Option<T>, so non-null by construction): self.busId <> null
        if !((self.current_address >= 0)) {
            violations.push("[Bus] invariant violated: self.currentAddress >= 0");
        }
        if !((self.current_address <= 127)) {
            violations.push("[Bus] invariant violated: self.currentAddress <= 127");
        }
        if !((self.transfer_count >= 0)) {
            violations.push("[Bus] invariant violated: self.transferCount >= 0");
        }
        violations
    }
}


// ─── Event wrappers ───

impl Bus {
    /// Wrapper for event init: pre-checks, runs impl, post-checks.
    /// Effects: Mutex
    pub fn init_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self) -> bool
    {
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.enabled == true)) {
                Some("[Bus::init] postcondition violated: self.enabled = true")
            } else if !((self.last_error == "")) {
                Some("[Bus::init] postcondition violated: self.lastError = \"\"")
            } else if !((self.transfer_count == 0)) {
                Some("[Bus::init] postcondition violated: self.transferCount = 0")
            } else if !((__result == true)) {
                Some("[Bus::init] postcondition violated: result = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event disable: pre-checks, runs impl, post-checks.
    /// Effects: Mutex
    pub fn disable_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self) -> bool
    {
        if !((self.enabled == true)) {
            return Err("[Bus::disable] precondition violated: self.enabled = true");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.enabled == false)) {
                Some("[Bus::disable] postcondition violated: self.enabled = false")
            } else if !((self.last_error == "")) {
                Some("[Bus::disable] postcondition violated: self.lastError = \"\"")
            } else if !((__result == true)) {
                Some("[Bus::disable] postcondition violated: result = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event set_address: pre-checks, runs impl, post-checks.
    pub fn set_address_wrapped<F>(
        &mut self,
        new_address: i64,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, i64) -> bool
    {
        if !((self.enabled == true)) {
            return Err("[Bus::set_address] precondition violated: self.enabled = true");
        }
        if !((new_address >= 0)) {
            return Err("[Bus::set_address] precondition violated: newAddress >= 0");
        }
        if !((new_address <= 127)) {
            return Err("[Bus::set_address] precondition violated: newAddress <= 127");
        }
        let __rollback = self.clone();
        let __result = impl_fn(self, new_address);
        let __violation: Option<&'static str> = 
            if !((self.current_address == new_address)) {
                Some("[Bus::set_address] postcondition violated: self.currentAddress = newAddress")
            } else if !((self.last_error == "")) {
                Some("[Bus::set_address] postcondition violated: self.lastError = \"\"")
            } else if !((__result == true)) {
                Some("[Bus::set_address] postcondition violated: result = true")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event transfer: pre-checks, runs impl, post-checks.
    /// Effects: HardwareRead, HardwareWrite, Mutex
    /// Reads: writeBuffer, writeSize, readSize
    pub fn transfer_wrapped<F>(
        &mut self,
        write_buffer: alloc::string::String,
        write_size: i64,
        read_size: i64,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, alloc::string::String, i64, i64) -> bool
    {
        if !((self.enabled == true)) {
            return Err("[Bus::transfer] precondition violated: self.enabled = true");
        }
        if !((write_size >= 0)) {
            return Err("[Bus::transfer] precondition violated: writeSize >= 0");
        }
        if !((read_size >= 0)) {
            return Err("[Bus::transfer] precondition violated: readSize >= 0");
        }
        if !(((write_size + read_size) > 0)) {
            return Err("[Bus::transfer] precondition violated: writeSize + readSize > 0");
        }
        let __pre_transfer_count = self.transfer_count.clone();
        let __rollback = self.clone();
        let __result = impl_fn(self, write_buffer, write_size, read_size);
        let __violation: Option<&'static str> = 
            if !((if (__result == true) { (self.transfer_count == ((__pre_transfer_count + write_size) + read_size)) } else { (self.transfer_count == __pre_transfer_count) })) {
                Some("[Bus::transfer] postcondition violated: if result = true then
            self.transferCount = self.transferCount@pre + writeSize + readSize
          else
            self.transferCount = self.transferCount@pre
          endif")
            } else if !((if (__result == true) { (self.last_error == "") } else { (self.last_error != "") })) {
                Some("[Bus::transfer] postcondition violated: if result = true then
            self.lastError = \"\"
          else
            self.lastError <> \"\"
          endif")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event read: pre-checks, runs impl, post-checks.
    /// Effects: HardwareRead, Mutex
    /// Reads: readSize
    pub fn read_wrapped<F>(
        &mut self,
        read_size: i64,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, i64) -> bool
    {
        if !((self.enabled == true)) {
            return Err("[Bus::read] precondition violated: self.enabled = true");
        }
        if !((read_size > 0)) {
            return Err("[Bus::read] precondition violated: readSize > 0");
        }
        let __pre_transfer_count = self.transfer_count.clone();
        let __rollback = self.clone();
        let __result = impl_fn(self, read_size);
        let __violation: Option<&'static str> = 
            if !((if (__result == true) { (self.transfer_count == (__pre_transfer_count + read_size)) } else { (self.transfer_count == __pre_transfer_count) })) {
                Some("[Bus::read] postcondition violated: if result = true then
            self.transferCount = self.transferCount@pre + readSize
          else
            self.transferCount = self.transferCount@pre
          endif")
            } else if !((if (__result == true) { (self.last_error == "") } else { (self.last_error != "") })) {
                Some("[Bus::read] postcondition violated: if result = true then
            self.lastError = \"\"
          else
            self.lastError <> \"\"
          endif")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(__result)
    }

    /// Wrapper for event write: pre-checks, runs impl, post-checks.
    /// Effects: HardwareWrite, Mutex
    /// Reads: writeBuffer, writeSize
    pub fn write_wrapped<F>(
        &mut self,
        write_buffer: alloc::string::String,
        write_size: i64,
        impl_fn: F,
    ) -> Result<bool, &'static str>
    where F: FnOnce(&mut Self, alloc::string::String, i64) -> bool
    {
        if !((self.enabled == true)) {
            return Err("[Bus::write] precondition violated: self.enabled = true");
        }
        if !((write_size > 0)) {
            return Err("[Bus::write] precondition violated: writeSize > 0");
        }
        let __pre_transfer_count = self.transfer_count.clone();
        let __rollback = self.clone();
        let __result = impl_fn(self, write_buffer, write_size);
        let __violation: Option<&'static str> = 
            if !((if (__result == true) { (self.transfer_count == (__pre_transfer_count + write_size)) } else { (self.transfer_count == __pre_transfer_count) })) {
                Some("[Bus::write] postcondition violated: if result = true then
            self.transferCount = self.transferCount@pre + writeSize
          else
            self.transferCount = self.transferCount@pre
          endif")
            } else if !((if (__result == true) { (self.last_error == "") } else { (self.last_error != "") })) {
                Some("[Bus::write] postcondition violated: if result = true then
            self.lastError = \"\"
          else
            self.lastError <> \"\"
          endif")
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



