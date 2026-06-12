// Drone Delivery Workspace
// Generated wrapper for BatteryPack
// Target: Rust (no_std, heapless)

pub struct BatteryHealth {
    pub cycle_count: u32,
    pub health_factor: f32,
}

impl BatteryHealth {
    pub fn new() -> Self {
        Self {
            cycle_count: 0,
            health_factor: 1.0,
        }
    }
}

pub struct BatteryPack {
    serial_number: &'static str,
    charge_level: f32,
    capacity: f32,
    health: BatteryHealth,
}

impl BatteryPack {
    pub fn new(serial_number: &'static str, capacity: f32) -> Self {
        Self {
            serial_number,
            charge_level: capacity,
            capacity,
            health: BatteryHealth::new(),
        }
    }

    pub fn get_charge_level(&self) -> f32 {
        self.charge_level
    }

    pub fn get_capacity(&self) -> f32 {
        self.capacity
    }

    pub fn is_critical(&self) -> bool {
        (self.charge_level / self.capacity) < 0.15
    }

    pub fn consume(&mut self, amount: f32) -> Result<(), &'static str> {
        if amount <= 0.0 {
            return Err("Precondition violated: consume amount must be positive");
        }
        if self.charge_level < amount {
            return Err("Precondition violated: insufficient charge");
        }
        self.charge_level -= amount;
        if self.charge_level < 0.0 || self.charge_level > self.capacity {
            return Err("Invariant violated: charge_level out of bounds");
        }
        Ok(())
    }
}