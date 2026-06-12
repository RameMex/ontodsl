// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f64.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for Customer.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct CustomerId(pub alloc::string::String);

/// Identity type for Package.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct PackageId(pub alloc::string::String);

/// Identity type for BatteryPack.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct BatteryPackId(pub alloc::string::String);

/// Identity type for Drone.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DroneId(pub alloc::string::String);

/// Identity type for Airframe.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct AirframeId(pub alloc::string::String);

/// Identity type for Sensor.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct SensorId(pub alloc::string::String);

/// Identity type for SensorSuite.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct SensorSuiteId(pub alloc::string::String);

/// Identity type for DeliveryContract.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DeliveryContractId(pub alloc::string::String);

/// Identity type for FlightPlan.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct FlightPlanId(pub alloc::string::String);

/// Identity type for DeliveryTrip.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DeliveryTripId(pub alloc::string::String);

/// Identity type for Takeoff.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct TakeoffId(pub alloc::string::String);

/// Identity type for Landing.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct LandingId(pub alloc::string::String);

/// Identity type for PreflightCheck.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct PreflightCheckId(pub alloc::string::String);

/// Identity type for FlightSchedule.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct FlightScheduleId(pub alloc::string::String);

/// Identity type for Courier.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct CourierId(pub alloc::string::String);

/// Identity type for DeliveryCommitment.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DeliveryCommitmentId(pub alloc::string::String);

/// Identity type for ExpressDeliveryCommitment.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ExpressDeliveryCommitmentId(pub alloc::string::String);

/// Identity type for DeadlineMissed.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DeadlineMissedId(pub alloc::string::String);

/// Identity type for DeliverPackage.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct DeliverPackageId(pub alloc::string::String);

// ─── Structs ───

/// <<Category>> PhysicalEntity
#[derive(Debug, Clone, PartialEq)]
pub struct PhysicalEntity {
    pub weight_kg: f64,
}

/// <<Mixin>> Trackable
#[derive(Debug, Clone, PartialEq)]
pub struct Trackable {
    pub gps_coords: alloc::string::String,
}

/// <<Agent>> Customer
#[derive(Debug, Clone, PartialEq)]
pub struct Customer {
    pub email: CustomerId,
    pub name: alloc::string::String,
    pub address: alloc::string::String,
}

/// <<Kind>> Package
#[derive(Debug, Clone, PartialEq)]
pub struct Package {
    pub weight_kg: f64,
    pub tracking_number: PackageId,
}

/// <<Kind>> BatteryPack
#[derive(Debug, Clone, PartialEq)]
pub struct BatteryPack {
    pub weight_kg: f64,
    pub serial_number: BatteryPackId,
    pub charge_level: f64,
    pub capacity: f64,
}

/// <<Kind>> Drone
#[derive(Debug, Clone, PartialEq)]
pub struct Drone {
    pub weight_kg: f64,
    pub serial_number: DroneId,
    pub max_payload: f64,
    pub battery: BatteryPack,
    pub spare_batteries: alloc::collections::BTreeSet<BatteryPack>,
}

/// <<Quantity>> Airframe
#[derive(Debug, Clone, PartialEq)]
pub struct Airframe {
    pub frame_id: AirframeId,
    pub material_grade_kg_per_mm_3: f64,
}

/// <<Kind>> Sensor
#[derive(Debug, Clone, PartialEq)]
pub struct Sensor {
    pub sensor_id: SensorId,
    pub model: alloc::string::String,
}

/// <<Collective>> SensorSuite
#[derive(Debug, Clone, PartialEq)]
pub struct SensorSuite {
    pub suite_id: SensorSuiteId,
}

/// <<Quality>> Temperature
#[derive(Debug, Clone, PartialEq)]
pub struct Temperature {
    pub celsius: f64,
}

/// <<Mode>> BatteryHealth
#[derive(Debug, Clone, PartialEq)]
pub struct BatteryHealth {
    pub cycle_count: i64,
    pub health_factor: f64,
}

/// <<Relator>> DeliveryContract
#[derive(Debug, Clone, PartialEq)]
pub struct DeliveryContract {
    pub contract_id: DeliveryContractId,
    pub fulfilled: bool,
}

/// <<Relator>> FlightPlan
#[derive(Debug, Clone, PartialEq)]
pub struct FlightPlan {
    pub plan_id: FlightPlanId,
    pub total_distance_km: f64,
}

/// <<Role>> Pilot
#[derive(Debug, Clone, PartialEq)]
pub struct Pilot {
    pub license_number: alloc::string::String,
}

/// <<Subkind>> DeliveryDrone
#[derive(Debug, Clone, PartialEq)]
pub struct DeliveryDrone {
    pub weight_kg: f64,
    pub serial_number: alloc::string::String,
    pub max_payload: f64,
    pub battery: BatteryPack,
    pub spare_batteries: alloc::collections::BTreeSet<BatteryPack>,
    pub max_delivery_radius: f64,
    pub current_contract: DeliveryContract,
}

/// <<Subkind>> ExpressDeliveryDrone
#[derive(Debug, Clone, PartialEq)]
pub struct ExpressDeliveryDrone {
    pub weight_kg: f64,
    pub serial_number: alloc::string::String,
    pub max_payload: f64,
    pub battery: BatteryPack,
    pub spare_batteries: alloc::collections::BTreeSet<BatteryPack>,
    pub max_delivery_radius: f64,
    pub current_contract: DeliveryContract,
    pub max_speed_kmh: f64,
}

/// <<Happening>> DeliveryTrip
#[derive(Debug, Clone, PartialEq)]
pub struct DeliveryTrip {
    pub delivery_trip_id: DeliveryTripId,
    pub requested_at: alloc::string::String,
}

/// <<Happening>> Takeoff
#[derive(Debug, Clone, PartialEq)]
pub struct Takeoff {
    pub takeoff_id: TakeoffId,
}

/// <<Happening>> Landing
#[derive(Debug, Clone, PartialEq)]
pub struct Landing {
    pub landing_id: LandingId,
}

/// <<Happening>> PreflightCheck
#[derive(Debug, Clone, PartialEq)]
pub struct PreflightCheck {
    pub takeoff_id: alloc::string::String,
    pub passed: bool,
}

/// <<Happening>> FlightSchedule
#[derive(Debug, Clone, PartialEq)]
pub struct FlightSchedule {
    pub schedule_id: FlightScheduleId,
    pub takeoff: Takeoff,
    pub landing: Landing,
}

/// <<Agent>> Courier
#[derive(Debug, Clone, PartialEq)]
pub struct Courier {
    pub courier_id: CourierId,
    pub legal_name: alloc::string::String,
}

/// <<Commitment>> DeliveryCommitment
#[derive(Debug, Clone, PartialEq)]
pub struct DeliveryCommitment {
    pub commitment_id: DeliveryCommitmentId,
    pub description: alloc::string::String,
    pub agreed_latest_delivery: alloc::string::String,
    pub takeoff: Takeoff,
    pub landing: Landing,
}

/// <<Commitment>> ExpressDeliveryCommitment
#[derive(Debug, Clone, PartialEq)]
pub struct ExpressDeliveryCommitment {
    pub commitment_id: alloc::string::String,
    pub description: alloc::string::String,
    pub agreed_latest_delivery: alloc::string::String,
    pub takeoff: Takeoff,
    pub landing: Landing,
}

/// <<Happening>> DeadlineMissed
#[derive(Debug, Clone, PartialEq)]
pub struct DeadlineMissed {
    pub dm_id: DeadlineMissedId,
}

/// <<UseCase>> DeliverPackage
#[derive(Debug, Clone, PartialEq)]
pub struct DeliverPackage {
    pub use_case_id: DeliverPackageId,
    pub priority: i64,
}


// ─── Constructors ───

impl Customer {
    pub fn new(
        email: alloc::string::String,
        name: alloc::string::String,
        address: alloc::string::String,
    ) -> Self {
        Self {
            email: CustomerId(email),
            name,
            address,
        }
    }
}

impl Package {
    pub fn new(
        weight_kg: f64,
        tracking_number: alloc::string::String,
    ) -> Self {
        Self {
            weight_kg,
            tracking_number: PackageId(tracking_number),
        }
    }
}

impl BatteryPack {
    pub fn new(
        weight_kg: f64,
        serial_number: alloc::string::String,
        charge_level: f64,
        capacity: f64,
    ) -> Self {
        Self {
            weight_kg,
            serial_number: BatteryPackId(serial_number),
            charge_level,
            capacity,
        }
    }
}

impl Drone {
    pub fn new(
        weight_kg: f64,
        serial_number: alloc::string::String,
        max_payload: f64,
        battery: BatteryPack,
        spare_batteries: alloc::collections::BTreeSet<BatteryPack>,
    ) -> Self {
        Self {
            weight_kg,
            serial_number: DroneId(serial_number),
            max_payload,
            battery,
            spare_batteries,
        }
    }
}

impl Airframe {
    pub fn new(
        frame_id: alloc::string::String,
        material_grade_kg_per_mm_3: f64,
    ) -> Self {
        Self {
            frame_id: AirframeId(frame_id),
            material_grade_kg_per_mm_3,
        }
    }
}

impl Sensor {
    pub fn new(
        sensor_id: alloc::string::String,
        model: alloc::string::String,
    ) -> Self {
        Self {
            sensor_id: SensorId(sensor_id),
            model,
        }
    }
}

impl SensorSuite {
    pub fn new(
        suite_id: alloc::string::String,
    ) -> Self {
        Self {
            suite_id: SensorSuiteId(suite_id),
        }
    }
}

impl DeliveryContract {
    pub fn new(
        contract_id: alloc::string::String,
        fulfilled: bool,
    ) -> Self {
        Self {
            contract_id: DeliveryContractId(contract_id),
            fulfilled,
        }
    }
}

impl FlightPlan {
    pub fn new(
        plan_id: alloc::string::String,
        total_distance_km: f64,
    ) -> Self {
        Self {
            plan_id: FlightPlanId(plan_id),
            total_distance_km,
        }
    }
}

impl DeliveryTrip {
    pub fn new(
        delivery_trip_id: alloc::string::String,
        requested_at: alloc::string::String,
    ) -> Self {
        Self {
            delivery_trip_id: DeliveryTripId(delivery_trip_id),
            requested_at,
        }
    }
}

impl Takeoff {
    pub fn new(
        takeoff_id: alloc::string::String,
    ) -> Self {
        Self {
            takeoff_id: TakeoffId(takeoff_id),
        }
    }
}

impl Landing {
    pub fn new(
        landing_id: alloc::string::String,
    ) -> Self {
        Self {
            landing_id: LandingId(landing_id),
        }
    }
}

impl FlightSchedule {
    pub fn new(
        schedule_id: alloc::string::String,
        takeoff: Takeoff,
        landing: Landing,
    ) -> Self {
        Self {
            schedule_id: FlightScheduleId(schedule_id),
            takeoff,
            landing,
        }
    }
}

impl Courier {
    pub fn new(
        courier_id: alloc::string::String,
        legal_name: alloc::string::String,
    ) -> Self {
        Self {
            courier_id: CourierId(courier_id),
            legal_name,
        }
    }
}

impl DeliveryCommitment {
    pub fn new(
        commitment_id: alloc::string::String,
        description: alloc::string::String,
        agreed_latest_delivery: alloc::string::String,
        takeoff: Takeoff,
        landing: Landing,
    ) -> Self {
        Self {
            commitment_id: DeliveryCommitmentId(commitment_id),
            description,
            agreed_latest_delivery,
            takeoff,
            landing,
        }
    }
}

impl DeadlineMissed {
    pub fn new(
        dm_id: alloc::string::String,
    ) -> Self {
        Self {
            dm_id: DeadlineMissedId(dm_id),
        }
    }
}

impl DeliverPackage {
    pub fn new(
        use_case_id: alloc::string::String,
        priority: i64,
    ) -> Self {
        Self {
            use_case_id: DeliverPackageId(use_case_id),
            priority,
        }
    }
}


// ─── Runtime invariant validators ───

impl PhysicalEntity {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.weight_kg >= 0.0)) {
            violations.push("[PhysicalEntity] invariant violated: self.weightKg >= 0");
        }
        violations
    }
}

impl Customer {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'email' is not Option<T>, so non-null by construction): self.email <> null
        // ELIDED invariant (vacuous; 'name' is not Option<T>, so non-null by construction): self.name <> null
        violations
    }
}

impl Package {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.weight_kg > 0.0)) {
            violations.push("[Package] invariant violated: self.weightKg > 0");
        }
        violations
    }
}

impl BatteryPack {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.charge_level >= 0.0)) {
            violations.push("[BatteryPack] invariant violated: self.chargeLevel >= 0");
        }
        if !((self.charge_level <= self.capacity)) {
            violations.push("[BatteryPack] invariant violated: self.chargeLevel <= self.capacity");
        }
        if !((self.capacity > 0.0)) {
            violations.push("[BatteryPack] invariant violated: self.capacity > 0");
        }
        violations
    }
}

impl Drone {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.max_payload > 0.0)) {
            violations.push("[Drone] invariant violated: self.maxPayload > 0");
        }
        // ELIDED invariant (vacuous; 'battery' is not Option<T>, so non-null by construction): self.battery <> null
        if !((self.spare_batteries.iter().all(|__x| (__x.charge_level >= 0.0)))) {
            violations.push("[Drone] invariant violated: self.spareBatteries->forAll(b | b.chargeLevel >= 0)");
        }
        violations
    }
}

impl SensorSuite {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'suiteId' is not Option<T>, so non-null by construction): self.suiteId <> null
        violations
    }
}

impl Temperature {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.celsius > -50.0)) {
            violations.push("[Temperature] invariant violated: self.celsius > -50");
        }
        if !((self.celsius < 80.0)) {
            violations.push("[Temperature] invariant violated: self.celsius < 80");
        }
        violations
    }
}

impl BatteryHealth {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.cycle_count >= 0)) {
            violations.push("[BatteryHealth] invariant violated: self.cycleCount >= 0");
        }
        if !((self.health_factor > 0.0)) {
            violations.push("[BatteryHealth] invariant violated: self.healthFactor > 0");
        }
        if !((self.health_factor <= 1.0)) {
            violations.push("[BatteryHealth] invariant violated: self.healthFactor <= 1");
        }
        violations
    }
}

impl DeliveryContract {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'contractId' is not Option<T>, so non-null by construction): self.contractId <> null
        violations
    }
}

impl FlightPlan {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'planId' is not Option<T>, so non-null by construction): self.planId <> null
        if !((self.total_distance_km > 0.0)) {
            violations.push("[FlightPlan] invariant violated: self.totalDistanceKm > 0");
        }
        violations
    }
}

impl Pilot {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'licenseNumber' is not Option<T>, so non-null by construction): self.licenseNumber <> null
        violations
    }
}

impl DeliveryDrone {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.max_delivery_radius > 0.0)) {
            violations.push("[DeliveryDrone] invariant violated: self.maxDeliveryRadius > 0");
        }
        violations
    }
}

impl ExpressDeliveryDrone {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.max_speed_kmh > 120.0)) {
            violations.push("[ExpressDeliveryDrone] invariant violated: self.maxSpeedKmh > 120");
        }
        violations
    }
}

impl FlightSchedule {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // SKIPPED invariant (not translatable to Rust): self.takeoff.before(self.landing) -- method call '.before(...)' not translatable in Phase 15
        violations
    }
}

impl DeliverPackage {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        if !((self.priority >= 0)) {
            violations.push("[DeliverPackage] invariant violated: self.priority >= 0");
        }
        if !((self.priority <= 10)) {
            violations.push("[DeliverPackage] invariant violated: self.priority <= 10");
        }
        violations
    }
}


// ─── Event wrappers ───

impl BatteryPack {
    /// Wrapper for event consume: pre-checks, runs impl, post-checks.
    pub fn consume_wrapped<F>(
        &mut self,
        amount: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64) -> ()
    {
        if !((amount > 0.0)) {
            return Err("[BatteryPack::consume] precondition violated: amount > 0");
        }
        if !((self.charge_level >= amount)) {
            return Err("[BatteryPack::consume] precondition violated: self.chargeLevel >= amount");
        }
        let __pre_charge_level = self.charge_level.clone();
        let __rollback = self.clone();
        impl_fn(self, amount);
        let __violation: Option<&'static str> = 
            if !((self.charge_level == (__pre_charge_level - amount))) {
                Some("[BatteryPack::consume] postcondition violated: self.chargeLevel = self.chargeLevel@pre - amount")
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
        Ok(())
    }

}

impl Drone {
    /// Wrapper for event swapBattery: pre-checks, runs impl, post-checks.
    pub fn swap_battery_wrapped<F>(
        &mut self,
        new_battery: BatteryPack,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, BatteryPack) -> ()
    {
        // ELIDED pre (vacuous; DSL has no Option type): newBattery <> null
        if !((new_battery.charge_level > 0.0)) {
            return Err("[Drone::swapBattery] precondition violated: newBattery.chargeLevel > 0");
        }
        let __post_new_battery = new_battery.clone();
        let __rollback = self.clone();
        impl_fn(self, new_battery);
        let __violation: Option<&'static str> = 
            if !((self.battery == __post_new_battery)) {
                Some("[Drone::swapBattery] postcondition violated: self.battery = newBattery")
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
        Ok(())
    }

}

impl DeliveryContract {
    /// Wrapper for event fulfill: pre-checks, runs impl, post-checks.
    pub fn fulfill_wrapped<F>(
        &mut self,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self) -> ()
    {
        if !((self.fulfilled == false)) {
            return Err("[DeliveryContract::fulfill] precondition violated: self.fulfilled = false");
        }
        let __rollback = self.clone();
        impl_fn(self);
        let __violation: Option<&'static str> = 
            if !((self.fulfilled == true)) {
                Some("[DeliveryContract::fulfill] postcondition violated: self.fulfilled = true")
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
        Ok(())
    }

}

impl DeliveryDrone {
    /// Wrapper for event assignContract: pre-checks, runs impl, post-checks.
    pub fn assign_contract_wrapped<F>(
        &mut self,
        contract: DeliveryContract,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, DeliveryContract) -> ()
    {
        if !((contract.fulfilled == false)) {
            return Err("[DeliveryDrone::assignContract] precondition violated: contract.fulfilled = false");
        }
        // ELIDED pre (vacuous; DSL has no Option type): self.currentContract = null
        let __post_contract = contract.clone();
        let __rollback = self.clone();
        impl_fn(self, contract);
        let __violation: Option<&'static str> = 
            if !((self.current_contract == __post_contract)) {
                Some("[DeliveryDrone::assignContract] postcondition violated: self.currentContract = contract")
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
        Ok(())
    }

}

impl ExpressDeliveryDrone {
    /// Wrapper for event swapBattery: pre-checks, runs impl, post-checks.
    pub fn swap_battery_wrapped<F>(
        &mut self,
        new_battery: BatteryPack,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, BatteryPack) -> ()
    {
        // ELIDED pre (vacuous; DSL has no Option type): newBattery <> null
        if !((new_battery.charge_level > 0.0)) {
            return Err("[ExpressDeliveryDrone::swapBattery] precondition violated: newBattery.chargeLevel > 0");
        }
        let __post_new_battery = new_battery.clone();
        let __rollback = self.clone();
        impl_fn(self, new_battery);
        let __violation: Option<&'static str> = 
            if !((self.battery == __post_new_battery)) {
                Some("[ExpressDeliveryDrone::swapBattery] postcondition violated: self.battery = newBattery")
            } else if !((self.battery.charge_level >= 0.8)) {
                Some("[ExpressDeliveryDrone::swapBattery] postcondition violated: self.battery.chargeLevel >= 0.8")
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
        Ok(())
    }

}


// ─── Commitment lifecycle registries ───

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CommitmentState {
    Pending,
    Fulfilled,
    Violated,
}

pub struct CommitmentTransition<'a, C> {
    pub commitment: &'a C,
    pub previous_state: Option<CommitmentState>,
    pub new_state: CommitmentState,
}

pub struct DeliveryCommitmentRegistry<L>
where L: FnMut(&CommitmentTransition<'_, DeliveryCommitment>),
{
    commitments: alloc::collections::BTreeMap<DeliveryCommitmentId, DeliveryCommitment>,
    states: alloc::collections::BTreeMap<DeliveryCommitmentId, CommitmentState>,
    listener: Option<L>,
}

impl<L> DeliveryCommitmentRegistry<L>
where L: FnMut(&CommitmentTransition<'_, DeliveryCommitment>),
{
    pub fn new() -> Self {
        Self {
            commitments: alloc::collections::BTreeMap::new(),
            states: alloc::collections::BTreeMap::new(),
            listener: None,
        }
    }

    pub fn with_listener(listener: L) -> Self {
        Self {
            commitments: alloc::collections::BTreeMap::new(),
            states: alloc::collections::BTreeMap::new(),
            listener: Some(listener),
        }
    }

    pub fn register(&mut self, commitment: DeliveryCommitment) -> Result<(), &'static str> {
        let id = commitment.commitment_id.clone();
        if self.commitments.contains_key(&id) {
            return Err("[DeliveryCommitmentRegistry] commitment already registered");
        }
        self.commitments.insert(id.clone(), commitment);
        self.states.insert(id.clone(), CommitmentState::Pending);
        if let Some(ref mut l) = self.listener {
            let c_ref = self.commitments.get(&id).unwrap();
            l(&CommitmentTransition {
                commitment: c_ref,
                previous_state: None,
                new_state: CommitmentState::Pending,
            });
        }
        Ok(())
    }

    pub fn fulfill(&mut self, id: &DeliveryCommitmentId) -> Result<(), &'static str> {
        self.transition(id, CommitmentState::Fulfilled)
    }

    pub fn violate(&mut self, id: &DeliveryCommitmentId) -> Result<(), &'static str> {
        self.transition(id, CommitmentState::Violated)
    }

    pub fn get_state(&self, id: &DeliveryCommitmentId) -> Option<CommitmentState> {
        self.states.get(id).copied()
    }

    fn transition(&mut self, id: &DeliveryCommitmentId, target: CommitmentState) -> Result<(), &'static str> {
        let current = self.states.get(id).copied();
        match current {
            None => Err("[DeliveryCommitmentRegistry] commitment not registered"),
            Some(CommitmentState::Fulfilled) | Some(CommitmentState::Violated) => {
                Err("[DeliveryCommitmentRegistry] commitment in terminal state")
            }
            Some(CommitmentState::Pending) => {
                self.states.insert(id.clone(), target);
                if let Some(ref mut l) = self.listener {
                    let c_ref = self.commitments.get(id).unwrap();
                    l(&CommitmentTransition {
                        commitment: c_ref,
                        previous_state: Some(CommitmentState::Pending),
                        new_state: target,
                    });
                }
                Ok(())
            }
        }
    }
}

