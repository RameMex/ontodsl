This Rust `no_std`, `heapless` design implements a "Delivery Contracts & Relator Mediation Filter" with a strong emphasis on design-by-contract principles, specifically targeting the identified Z3 hazards.

**Key Design Principles & Hazard Mitigation:**

1.  **Design-by-Contract (DbC):**
    *   **Preconditions:** Explicit checks are performed at the beginning of methods (e.g., `DeliveryContract::fulfill`, `MediationFilter::create_flight_plan_and_contract`) to ensure the state is valid before proceeding. If violated, an `Err` result is returned.
    *   **Postconditions:** While not explicitly `assert!`-ed at the end of every method (Rust's strong type system and ownership often make this implicit), the expected state changes are clearly documented and tested.
    *   **Invariants:** Object states are designed to be consistent. For example, a `DeliveryContract`'s `is_fulfilled` flag is always `true` or `false`. More complex invariants (like a `FlightPlan`'s distance being within a `Drone`'s range) are enforced by preconditions in the `MediationFilter`. A `#[cfg(test)]` `check_all_invariants` method is included for comprehensive invariant validation during testing.

2.  **Z3 Hazard Mitigation:**
    *   **`bug-dc-01: Critical Relator Double-Fulfillment` (Critical):**
        *   **Solution:** The `DeliveryContract` struct has an `is_fulfilled: bool` field. Its `fulfill(&mut self)` method implements a precondition check: `if self.is_fulfilled { return Err(ContractError::AlreadyFulfilled); }`. This prevents any state change or business logic execution if the contract is already fulfilled, effectively eliminating duplicate payment/delivery signals.
    *   **`bug-dc-02: Warning Flight Plan Range Exceeded` (Warning):**
        *   **Solution:** The `MediationFilter::create_flight_plan_and_contract` method acts as the "Relator Mediation filter". It performs a critical precondition check before creating a `FlightPlan`: it retrieves the associated `Drone` and compares the proposed `total_distance_km` with `drone.max_delivery_radius_km`. If `total_distance_km > drone.max_delivery_radius_km`, it returns `Err(FlightPlanError::RangeExceeded)`, preventing the creation of an invalid flight plan.

3.  **`no_std` and `heapless` Compatibility:**
    *   The entire design avoids `alloc` and standard library collections like `Vec` or `String`.
    *   `heapless::Vec` is used for all dynamic collections (Drones, Packages, FlightPlans, Contracts), requiring fixed capacities defined by constants (`N_DRONES`, `N_FLIGHT_PLANS`, etc.).
    *   Error types are `Copy` and `Clone` enums, further reducing memory overhead.

4.  **Error Handling:**
    *   Specific `enum` error types (`ContractError`, `FlightPlanError`) are used with `Result<T, E>` to provide clear, actionable feedback on why an operation failed, especially when preconditions are violated.

5.  **Formal Invariant Pre-checks:**
    *   These are integrated directly into the critical methods that could violate the invariants, as described in the hazard mitigation above.
    *   The `debug_assert!` macro is used for internal, developer-focused invariants (e.g., non-zero distance in `FlightPlan::new`), which are compiled out in release builds.
    *   The `check_all_invariants` method (available in tests) provides a holistic view of the system's state integrity.

```rust
#![no_std] // Ensures the code is compiled without the standard library
#![forbid(unsafe_code)] // Prevents the use of unsafe Rust, enhancing safety

// Use heapless for fixed-size collections and potentially fixed-size strings
use heapless::{String, Vec};
use core::fmt;

// --- Configuration Constants for heapless collections ---
// These define the maximum number of entities the system can manage.
// Adjust these based on the application's specific requirements.
const N_DRONES: usize = 4;
const N_PACKAGES: usize = 8;
const N_FLIGHT_PLANS: usize = 8;
const N_CONTRACTS: usize = 8;

// --- Error Types ---

/// Errors related to DeliveryContract operations.
/// These errors inform callers about contract-specific violations,
/// such as attempting to fulfill an already completed contract.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub enum ContractError {
    /// The contract is already fulfilled and cannot be fulfilled again.
    /// Addresses `bug-dc-01: Critical Relator Double-Fulfillment`.
    AlreadyFulfilled,
    /// Contract with the given ID was not found.
    NotFound,
    /// An attempt was made to store more contracts than capacity allows.
    CapacityExceeded,
    /// Internal logic error, indicating a potential bug in the mediation filter.
    InternalError,
}

impl fmt::Display for ContractError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            ContractError::AlreadyFulfilled => write!(f, "Contract already fulfilled"),
            ContractError::NotFound => write!(f, "Contract not found"),
            ContractError::CapacityExceeded => write!(f, "Contract storage capacity exceeded"),
            ContractError::InternalError => write!(f, "Internal contract error"),
        }
    }
}


/// Errors related to FlightPlan operations.
/// These errors inform callers about flight plan-specific violations,
/// particularly range limitations and missing entities.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub enum FlightPlanError {
    /// The proposed flight distance exceeds the drone's maximum delivery radius.
    /// Addresses `bug-dc-02: Warning Flight Plan Range Exceeded`.
    RangeExceeded {
        drone_max_radius_km: u16,
        proposed_distance_km: u16,
    },
    /// The specified drone was not found.
    DroneNotFound,
    /// The specified package was not found.
    PackageNotFound,
    /// Flight plan with the given ID was not found.
    NotFound,
    /// An attempt was made to store more flight plans than capacity allows.
    CapacityExceeded,
    /// An attempt was made to create a FlightPlan with a zero distance.
    ZeroDistance,
    /// Internal logic error, indicating a potential bug in the mediation filter.
    InternalError,
}

impl fmt::Display for FlightPlanError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            FlightPlanError::RangeExceeded { drone_max_radius_km, proposed_distance_km } => {
                write!(f, "Flight plan range ({}) exceeds drone's max radius ({}). Hazard DC-02 mitigated.", proposed_distance_km, drone_max_radius_km)
            },
            FlightPlanError::DroneNotFound => write!(f, "Drone not found"),
            FlightPlanError::PackageNotFound => write!(f, "Package not found"),
            FlightPlanError::NotFound => write!(f, "Flight plan not found"),
            FlightPlanError::CapacityExceeded => write!(f, "Flight plan storage capacity exceeded"),
            FlightPlanError::ZeroDistance => write!(f, "Flight plan must have a non-zero distance"),
            FlightPlanError::InternalError => write!(f, "Internal flight plan error"),
        }
    }
}

// --- Core Entities ---

/// Represents a drone capable of deliveries.
/// Key attribute for hazard DC-02 is `max_delivery_radius_km`.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub struct Drone {
    pub id: u32,
    pub max_delivery_radius_km: u16, // Maximum distance the drone can safely travel
}

impl Drone {
    pub fn new(id: u32, max_delivery_radius_km: u16) -> Self {
        Self { id, max_delivery_radius_km }
    }
}

/// Represents a package to be delivered.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub struct Package {
    pub id: u32,
    pub weight_kg: u16, // Minimal attribute for demonstration
}

impl Package {
    pub fn new(id: u32, weight_kg: u16) -> Self {
        Self { id, weight_kg }
    }
}

/// Represents a flight plan for a specific drone and package.
/// `total_distance_km` is a key attribute for hazard DC-02.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub struct FlightPlan {
    pub id: u32,
    pub drone_id: u32,
    pub package_id: u32,
    pub total_distance_km: u16, // Total distance for the delivery
}

impl FlightPlan {
    /// Creates a new FlightPlan.
    /// This constructor performs a basic invariant check for distance.
    /// Range checks (hazard DC-02) are handled by the `MediationFilter`.
    pub fn new(id: u32, drone_id: u32, package_id: u32, total_distance_km: u16) -> Self {
        // Formal invariant: total_distance_km must be greater than zero.
        // This is a defensive check; a zero-distance flight plan is nonsensical.
        debug_assert!(total_distance_km > 0, "Invariant violation: FlightPlan distance must be non-zero");
        Self { id, drone_id, package_id, total_distance_km }
    }
}

/// Represents a delivery contract.
/// `is_fulfilled` is the key state for hazard DC-01.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub struct DeliveryContract {
    pub id: u32,
    pub flight_plan_id: u32, // Link to the associated flight plan
    is_fulfilled: bool,      // State to prevent double-fulfillment (hazard bug-dc-01)
}

impl DeliveryContract {
    /// Creates a new, unfulfilled DeliveryContract.
    /// Invariant: A new contract is always initially unfulfilled.
    pub fn new(id: u32, flight_plan_id: u32) -> Self {
        Self {
            id,
            flight_plan_id,
            is_fulfilled: false, 
        }
    }

    /// Attempts to fulfill the contract.
    /// This method enforces the critical precondition for hazard `bug-dc-01`.
    ///
    /// # Preconditions:
    /// - The contract must not be already fulfilled (`!self.is_fulfilled`).
    ///   If this precondition is violated, `Err(ContractError::AlreadyFulfilled)` is returned.
    ///
    /// # Postconditions:
    /// - If successful (`Ok(())`), the contract's `is_fulfilled` status will be `true`.
    ///
    /// # Returns:
    /// - `Ok(())` if the contract was successfully fulfilled.
    /// - `Err(ContractError::AlreadyFulfilled)` if the contract was already fulfilled,
    ///   preventing `bug-dc-01`.
    pub fn fulfill(&mut self) -> Result<(), ContractError> {
        // Formal invariant pre-check: Directly addresses 'bug-dc-01: Critical Relator Double-Fulfillment'.
        // If the contract is already fulfilled, we prevent any further action.
        if self.is_fulfilled {
            return Err(ContractError::AlreadyFulfilled);
        }

        self.is_fulfilled = true; // State transition: Mark as fulfilled

        // Postcondition check (conceptual, as Rust's mutability makes this direct):
        // assert!(self.is_fulfilled, "Postcondition failed: Contract should be fulfilled after successful call.");
        Ok(())
    }

    /// Checks if the contract is currently fulfilled.
    pub fn is_fulfilled(&self) -> bool {
        self.is_fulfilled
    }
}

// --- Relator Mediation Filter ---

/// The central component responsible for mediating between Drones, Packages, FlightPlans,
/// and DeliveryContracts. It enforces contractual integrity and safety, especially
/// for the cross-entity hazards.
pub struct MediationFilter {
    drones: Vec<Drone, N_DRONES>,
    packages: Vec<Package, N_PACKAGES>,
    flight_plans: Vec<FlightPlan, N_FLIGHT_PLANS>,
    delivery_contracts: Vec<DeliveryContract, N_CONTRACTS>,
    // Counters for generating unique IDs in a no_std environment.
    next_drone_id: u32,
    next_package_id: u32,
    next_flight_plan_id: u32,
    next_contract_id: u32,
}

impl MediationFilter {
    /// Creates a new, empty MediationFilter.
    pub fn new() -> Self {
        MediationFilter {
            drones: Vec::new(),
            packages: Vec::new(),
            flight_plans: Vec::new(),
            delivery_contracts: Vec::new(),
            next_drone_id: 1,
            next_package_id: 1,
            next_flight_plan_id: 1,
            next_contract_id: 1,
        }
    }

    // --- Drone Management ---

    /// Adds a new drone to the filter.
    /// # Preconditions:
    /// - Filter must not be at drone capacity.
    pub fn add_drone(&mut self, max_delivery_radius_km: u16) -> Result<&Drone, ContractError> {
        if self.drones.is_full() {
            return Err(ContractError::CapacityExceeded);
        }
        let id = self.next_drone_id;
        self.next_drone_id += 1;
        let drone = Drone::new(id, max_delivery_radius_km);
        // Using `map_err` to convert heapless::Vec's error type if push fails,
        // though `is_full()` check already prevents it.
        self.drones.push(drone).map_err(|_| ContractError::InternalError)?; 
        Ok(self.drones.last().unwrap()) // Safe to unwrap because push just succeeded
    }

    /// Retrieves a drone by its ID.
    pub fn get_drone(&self, id: u32) -> Option<&Drone> {
        self.drones.iter().find(|d| d.id == id)
    }

    // --- Package Management ---

    /// Adds a new package to the filter.
    /// # Preconditions:
    /// - Filter must not be at package capacity.
    pub fn add_package(&mut self, weight_kg: u16) -> Result<&Package, ContractError> {
        if self.packages.is_full() {
            return Err(ContractError::CapacityExceeded);
        }
        let id = self.next_package_id;
        self.next_package_id += 1;
        let package = Package::new(id, weight_kg);
        self.packages.push(package).map_err(|_| ContractError::InternalError)?;
        Ok(self.packages.last().unwrap())
    }

    /// Retrieves a package by its ID.
    pub fn get_package(&self, id: u32) -> Option<&Package> {
        self.packages.iter().find(|p| p.id == id)
    }

    // --- Flight Plan and Contract Creation (Mediation Logic) ---

    /// Creates a new FlightPlan and its associated DeliveryContract.
    /// This is the core mediation method, enforcing critical preconditions.
    ///
    /// # Preconditions (Formal Invariant Pre-checks):
    /// 1.  `total_distance_km` must be positive.
    /// 2.  The specified `drone_id` must correspond to an existing drone.
    /// 3.  The specified `package_id` must correspond to an existing package.
    /// 4.  **`bug-dc-02` Mitigation:** `total_distance_km` must not exceed the drone's
    ///     `max_delivery_radius_km`. If exceeded, `FlightPlanError::RangeExceeded` is returned.
    /// 5.  There must be capacity available for both a new flight plan and a new contract.
    ///
    /// # Postconditions:
    /// - If successful, a new `FlightPlan` and `DeliveryContract` (initially unfulfilled)
    ///   are added to the filter's collections.
    /// - The created `FlightPlan` will adhere to the `drone`'s range constraints.
    ///
    /// # Returns:
    /// - `Ok((flight_plan_id, contract_id))` on successful creation.
    /// - `Err(FlightPlanError)` if any precondition is violated, preventing
    ///   the creation of an invalid flight plan or contract.
    pub fn create_flight_plan_and_contract(
        &mut self,
        drone_id: u32,
        package_id: u32,
        total_distance_km: u16,
    ) -> Result<(u32, u32), FlightPlanError> {
        // --- Formal invariant pre-checks for FlightPlan creation ---

        // Precondition 1: Check for valid distance
        if total_distance_km == 0 {
            return Err(FlightPlanError::ZeroDistance);
        }

        // Precondition 2: Locate the drone (required for range check)
        let drone = self
            .get_drone(drone_id)
            .ok_or(FlightPlanError::DroneNotFound)?;

        // Precondition 3: Locate the package (required for linkage)
        let _package = self
            .get_package(package_id)
            .ok_or(FlightPlanError::PackageNotFound)?;

        // Precondition 4: Critical check for `bug-dc-02: Warning Flight Plan Range Exceeded`
        // This directly implements the mediation logic to prevent dispatching a drone
        // beyond its battery range.
        if total_distance_km > drone.max_delivery_radius_km {
            return Err(FlightPlanError::RangeExceeded {
                drone_max_radius_km: drone.max_delivery_radius_km,
                proposed_distance_km: total_distance_km,
            });
        }

        // Precondition 5: Check for capacity before allocation
        if self.flight_plans.is_full() || self.delivery_contracts.is_full() {
            return Err(FlightPlanError::CapacityExceeded);
        }

        // --- All preconditions passed, proceed with creation ---

        let flight_plan_id = self.next_flight_plan_id;
        self.next_flight_plan_id += 1;
        let new_flight_plan =
            FlightPlan::new(flight_plan_id, drone_id, package_id, total_distance_km);
        self.flight_plans.push(new_flight_plan).map_err(|_| FlightPlanError::InternalError)?; 

        let contract_id = self.next_contract_id;
        self.next_contract_id += 1;
        let new_contract = DeliveryContract::new(contract_id, flight_plan_id);
        self.delivery_contracts.push(new_contract).map_err(|_| FlightPlanError::InternalError)?; 

        Ok((flight_plan_id, contract_id))
    }

    /// Attempts to fulfill a DeliveryContract by its ID.
    /// This method leverages the `DeliveryContract`'s internal DbC logic to prevent `bug-dc-01`.
    ///
    /// # Preconditions:
    /// - A contract with the given `contract_id` must exist.
    /// - The contract itself must not already be fulfilled (this is checked by `DeliveryContract::fulfill`).
    ///
    /// # Returns:
    /// - `Ok(())` if the contract was successfully fulfilled.
    /// - `Err(ContractError::NotFound)` if the contract ID is invalid.
    /// - `Err(ContractError::AlreadyFulfilled)` if the contract was already fulfilled,
    ///   as prevented by `DeliveryContract::fulfill` (mitigation for `bug-dc-01`).
    pub fn fulfill_contract(&mut self, contract_id: u32) -> Result<(), ContractError> {
        // Formal invariant pre-check: Ensure the contract exists.
        let contract = self
            .delivery_contracts
            .iter_mut()
            .find(|c| c.id == contract_id)
            .ok_or(ContractError::NotFound)?;

        // Delegate to the contract's own fulfill method.
        // This is where the precondition for 'bug-dc-01' is formally enforced.
        contract.fulfill()
    }

    /// Retrieves a reference to a delivery contract by its ID.
    pub fn get_delivery_contract(&self, id: u32) -> Option<&DeliveryContract> {
        self.delivery_contracts.iter().find(|c| c.id == id)
    }

    /// Retrieves a reference to a flight plan by its ID.
    pub fn get_flight_plan(&self, id: u32) -> Option<&FlightPlan> {
        self.flight_plans.iter().find(|fp| fp.id == id)
    }

    /// Checks all critical invariants across the MediationFilter's state.
    /// This method is intended for use in tests to rigorously verify data consistency.
    #[cfg(test)]
    fn check_all_invariants(&self) {
        // Invariant: All contracts must refer to an existing flight plan.
        for contract in self.delivery_contracts.iter() {
            assert!(self.get_flight_plan(contract.flight_plan_id).is_some(),
                    "Invariant violated: Contract {} refers to non-existent FlightPlan {}",
                    contract.id, contract.flight_plan_id);
        }

        // Invariant: All flight plans must refer to existing drones and packages,
        // and crucially, respect the drone's range (hazard DC-02 mitigation check).
        for flight_plan in self.flight_plans.iter() {
            let drone = self.get_drone(flight_plan.drone_id).expect(
                &format!("Invariant violated: FlightPlan {} refers to non-existent Drone {}",
                         flight_plan.id, flight_plan.drone_id)
            );
            self.get_package(flight_plan.package_id).expect(
                &format!("Invariant violated: FlightPlan {} refers to non-existent Package {}",
                         flight_plan.id, flight_plan.package_id)
            );
            // Re-check DC-02 invariant for existing flight plans
            assert!(flight_plan.total_distance_km <= drone.max_delivery_radius_km,
                    "Invariant violated: FlightPlan {} range ({}) exceeds Drone {} max radius ({}). Hazard DC-02 not respected.",
                    flight_plan.id, flight_plan.total_distance_km, drone.id, drone.max_delivery_radius_km);
            // Re-check non-zero distance invariant
            assert!(flight_plan.total_distance_km > 0,
                    "Invariant violated: FlightPlan {} has zero distance", flight_plan.id);
        }

        // Invariant: All IDs are unique (implicitly handled by incrementing counters,
        // but could be explicitly checked here if more complex ID generation was used).
    }
}


// --- Unit Tests ---
#[cfg(test)]
mod tests {
    use super::*;

    // --- DeliveryContract Tests (Hazard DC-01 Mitigation) ---

    #[test]
    fn test_delivery_contract_initial_state() {
        let contract = DeliveryContract::new(1, 100);
        assert_eq!(contract.id, 1);
        assert_eq!(contract.flight_plan_id, 100);
        assert!(!contract.is_fulfilled());
    }

    #[test]
    fn test_delivery_contract_fulfill_once_success() {
        let mut contract = DeliveryContract::new(1, 100);
        let result = contract.fulfill();
        assert!(result.is_ok());
        assert!(contract.is_fulfilled());
    }

    #[test]
    fn test_delivery_contract_double_fulfillment_hazard_dc_01_prevented() {
        let mut contract = DeliveryContract::new(1, 100);
        
        // First fulfillment (should succeed, contract becomes fulfilled)
        let result1 = contract.fulfill();
        assert!(result1.is_ok());
        assert!(contract.is_fulfilled(), "Contract should be fulfilled after first call");

        // Second fulfillment (should fail as per bug-dc-01 prevention)
        let result2 = contract.fulfill();
        assert!(result2.is_err(), "Second fulfillment should return an error");
        assert_eq!(result2.unwrap_err(), ContractError::AlreadyFulfilled, "Error should indicate already fulfilled");
        assert!(contract.is_fulfilled(), "Contract state should remain fulfilled, not change back");
    }

    // --- MediationFilter Basic Operations Tests ---

    #[test]
    fn test_mediation_filter_add_entities() {
        let mut filter = MediationFilter::new();
        let drone1 = filter.add_drone(100).unwrap();
        let drone2 = filter.add_drone(50).unwrap();
        assert_eq!(drone1.id, 1);
        assert_eq!(drone2.id, 2);
        assert_eq!(filter.drones.len(), 2);

        let package1 = filter.add_package(5).unwrap();
        assert_eq!(package1.id, 1);
        assert_eq!(filter.packages.len(), 1);

        filter.check_all_invariants();
    }

    // --- MediationFilter Flight Plan Creation Tests (Hazard DC-02 Mitigation) ---

    #[test]
    fn test_mediation_filter_create_flight_plan_and_contract_success() {
        let mut filter = MediationFilter::new();
        let drone = filter.add_drone(100).unwrap(); // Drone with 100km max radius
        let package = filter.add_package(5).unwrap();

        let (fp_id, dc_id) = filter.create_flight_plan_and_contract(drone.id, package.id, 75).unwrap(); // 75km is within 100km
        
        assert_eq!(filter.flight_plans.len(), 1);
        assert_eq!(filter.delivery_contracts.len(), 1);

        let flight_plan = filter.get_flight_plan(fp_id).unwrap();
        assert_eq!(flight_plan.total_distance_km, 75);
        assert_eq!(flight_plan.drone_id, drone.id);
        
        let contract = filter.get_delivery_contract(dc_id).unwrap();
        assert!(!contract.is_fulfilled());
        assert_eq!(contract.flight_plan_id, fp_id);

        filter.check_all_invariants();
    }

    #[test]
    fn test_mediation_filter_flight_plan_range_exceeded_hazard_dc_02_prevented() {
        let mut filter = MediationFilter::new();
        let drone = filter.add_drone(50).unwrap(); // Drone with 50km max radius
        let package = filter.add_package(5).unwrap();

        // Attempt to create a flight plan exceeding the drone's range (75km > 50km)
        let result = filter.create_flight_plan_and_contract(drone.id, package.id, 75);

        assert!(result.is_err(), "Flight plan creation should fail due to range exceedance");
        assert_eq!(
            result.unwrap_err(),
            FlightPlanError::RangeExceeded {
                drone_max_radius_km: 50,
                proposed_distance_km: 75
            },
            "Error should explicitly state range exceedance (DC-02 mitigation)"
        );
        assert!(filter.flight_plans.is_empty(), "No flight plan should be created on error");
        assert!(filter.delivery_contracts.is_empty(), "No contract should be created on error");
        
        filter.check_all_invariants(); // Should pass as no invalid entities were added
    }

    #[test]
    fn test_mediation_filter_create_flight_plan_zero_distance_prevented() {
        let mut filter = MediationFilter::new();
        let drone = filter.add_drone(100).unwrap();
        let package = filter.add_package(5).unwrap();

        let result = filter.create_flight_plan_and_contract(drone.id, package.id, 0);
        assert!(result.is_err());
        assert_eq!(result.unwrap_err(), FlightPlanError::ZeroDistance);
    }

    // --- MediationFilter Contract Fulfillment Tests ---

    #[test]
    fn test_mediation_filter_fulfill_contract_success() {
        let mut filter = MediationFilter::new();
        let drone = filter.add_drone(100).unwrap();
        let package = filter.add_package(5).unwrap();
        let (_fp_id, dc_id) = filter.create_flight_plan_and_contract(drone.id, package.id, 75).unwrap();

        let contract_before = filter.get_delivery_contract(dc_id).unwrap();
        assert!(!contract_before.is_fulfilled());

        let result = filter.fulfill_contract(dc_id);
        assert!(result.is_ok(), "Contract fulfillment should succeed");

        let contract_after = filter.get_delivery_contract(dc_id).unwrap();
        assert!(contract_after.is_fulfilled(), "Contract should be marked fulfilled");
        
        filter.check_all_invariants();
    }

    #[test]
    fn test_mediation_filter_fulfill_contract_not_found() {
        let mut filter = MediationFilter::new();
        let result = filter.fulfill_contract(999); // Non-existent contract ID
        assert!(result.is_err());
        assert_eq!(result.unwrap_err(), ContractError::NotFound);
    }

    #[test]
    fn test_mediation_filter_double_fulfill_via_mediation_hazard_dc_01_prevented() {
        let mut filter = MediationFilter::new();
        let drone = filter.add_drone(100).unwrap();
        let package = filter.add_package(5).unwrap();
        let (_fp_id, dc_id) = filter.create_flight_plan_and_contract(drone.id, package.id, 75).unwrap();

        // First fulfillment (should succeed)
        let result1 = filter.fulfill_contract(dc_id);
        assert!(result1.is_ok(), "First fulfillment should succeed");

        // Second fulfillment attempt via the mediation filter (should be prevented by contract's guards)
        let result2 = filter.fulfill_contract(dc_id);
        assert!(result2.is_err(), "Second fulfillment should fail");
        assert_eq!(result2.unwrap_err(), ContractError::AlreadyFulfilled, "Error should be 'AlreadyFulfilled' due to DC-01 prevention");

        // Verify the contract state remains fulfilled, but no new fulfillment happened.
        let contract = filter.get_delivery_contract(dc_id).unwrap();
        assert!(contract.is_fulfilled(), "Contract should remain in fulfilled state");
        
        filter.check_all_invariants();
    }

    // --- Capacity Limits Test ---

    #[test]
    fn test_mediation_filter_capacity_limits() {
        let mut filter = MediationFilter::new();
        let drone = filter.add_drone(100).unwrap();
        let package = filter.add_package(5).unwrap();

        // Fill up flight plans and contracts to capacity
        for i in 0..N_FLIGHT_PLANS {
            let res = filter.create_flight_plan_and_contract(drone.id, package.id, 10 + i as u16);
            assert!(res.is_ok(), "Should be able to add flight plan {}/{}", i + 1, N_FLIGHT_PLANS);
        }

        // Attempt to add one more, should fail due to capacity
        let result = filter.create_flight_plan_and_contract(drone.id, package.id, 20);
        assert!(result.is_err(), "Attempt to create beyond capacity should fail");
        assert_eq!(result.unwrap_err(), FlightPlanError::CapacityExceeded, "Error should be CapacityExceeded");
        
        filter.check_all_invariants(); // All added entities should still satisfy invariants
    }
}
```