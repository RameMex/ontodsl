The goal is to create a safe, `no_std`, `heapless` Rust wrapper that implements Design by Contract (DbC) principles for a hypothetical `DeliveryDrone` system, specifically addressing two Z3 hazards. This involves formal preconditions, postconditions, and invariants, and ensuring the Liskov Substitution Principle (LSP) is upheld.

**Design by Contract Principles Applied:**

1.  **Invariants:** A `check_invariants` method is defined on the `DeliveryDrone` trait and implemented by concrete drone types. This method is called at the beginning and end of every public mutating method to ensure the drone's internal state remains consistent.
2.  **Preconditions:** Checks are performed at the start of a method to ensure its arguments and the current object state are valid for the operation. If a precondition fails, an `Err(DroneError::PreconditionViolated)` is returned.
3.  **Postconditions:** `debug_assert!` statements are used at the end of methods to verify that the operation achieved its intended result and the object is in a valid state. These checks are only active in debug builds.

**Z3 Hazard Mitigation:**

*   **`bug-dd-01`: Liskov Substitution Principle (LSP) Precondition Strengthening**
    *   **Hazard:** `ExpressDeliveryDrone::swapBattery` strengthens the precondition (new battery charge >= 0.8), causing runtime panics if called via a `DeliveryDrone` base reference with a battery < 0.8.
    *   **Mitigation:**
        *   The `DeliveryDrone::swap_battery` trait method defines the *weakest* precondition: any valid battery charge (0.0 to 1.0).
        *   The `ExpressDeliveryDrone`'s implementation of `swap_battery` *does not* panic. Instead, if its internal, stronger requirement (charge >= 0.8) is not met, it returns `Err(DroneError::LspViolationAttempted)`.
        *   This allows clients using `&dyn DeliveryDrone` references to gracefully handle the situation via `Result` rather than encountering an unexpected panic, thus upholding LSP.
*   **`bug-dd-02`: Warning Active Contract Re-assignment**
    *   **Hazard:** `DeliveryDrone` allows re-assigning `currentContract` while an existing contract is active and uncompleted, leaking resources.
    *   **Mitigation:**
        *   A precondition is added to the `assign_contract` method for both `BasicDeliveryDrone` and `ExpressDeliveryDrone`.
        *   Before assigning a new contract, it checks if `current_contract` exists and is `completed`. If an uncompleted contract is active, `Err(DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted."))` is returned.

The solution uses `no_std` and relies on basic Rust types (`struct`, `enum`, `Option`, `Result`). While `heapless` collections are mentioned as a requirement for `no_std` scenarios, this specific problem doesn't necessitate their use as simple field types suffice. If more complex data structures (like a history of contracts) were needed, `heapless::Vec` or `heapless::String` would be employed. The use of `Box<dyn DeliveryDrone>` in tests implies an allocator, which in a strict `no_std` environment without a global allocator might be handled differently (e.g., using a static pool allocator or avoiding trait objects).

```rust
#![no_std]

// The `heapless` crate can be used for collections if needed in a no_std environment.
// For this specific problem, simple data types and Option/Result are sufficient,
// so `heapless` collections are not explicitly demonstrated but would be used if e.g.
// a history of contracts or a dynamic queue was required.
// For instance: `use heapless::Vec;`

// --- Z3 Hazard Definitions (for reference) ---
/*
[
    {"id":"bug-dd-01","level":"critical","title":"Liskov Substitution Principle (LSP) Precondition Strengthening","description":"ExpressDeliveryDrone::swapBattery override strengthens the precondition by requiring new battery charge level >= 0.8, violating Liskov Substitution Principle.","originalLocation":"DeliveryDrone.h#L295","impact":"CRITICAL. Clients using base DeliveryDrone references will trigger runtime contract panics if they attempt to swap a battery with a charge level below 80%."},
    {"id":"bug-dd-02","level":"warning","title":"Warning Active Contract Re-assignment","description":"DeliveryDrone allows re-assigning currentContract while an existing contract is active without checking if the active one is completed, leaking resources.","originalLocation":"DeliveryDrone.h#L253","impact":"WARNING. Active packages can be abandoned mid-flight if a new contract is assigned before fulfillment."}
]
*/

// --- Core Data Structures ---

/// Represents a drone's battery with a charge level between 0.0 and 1.0.
#[derive(Debug, PartialEq, Clone, Copy)]
pub struct Battery {
    pub charge_level: f32,
}

impl Battery {
    /// Creates a new Battery.
    ///
    /// Preconditions:
    /// - `charge_level` must be between 0.0 and 1.0 (inclusive).
    pub fn new(charge_level: f32) -> Self {
        debug_assert!(
            charge_level >= 0.0 && charge_level <= 1.0,
            "Precondition violated: Battery charge level must be between 0.0 and 1.0"
        );
        Battery { charge_level }
    }
}

/// Represents a delivery contract.
#[derive(Debug, PartialEq, Clone, Copy)]
pub struct Contract {
    pub id: usize,
    pub completed: bool,
}

impl Contract {
    /// Creates a new, uncompleted Contract.
    ///
    /// Preconditions:
    /// - `id` must not be 0 (assuming 0 is an invalid ID).
    pub fn new(id: usize) -> Self {
        debug_assert!(id != 0, "Precondition violated: Contract ID cannot be 0.");
        Contract { id, completed: false }
    }
}

// --- Error Handling ---

/// Enumerates possible contract violations and drone errors.
#[derive(Debug, PartialEq)]
pub enum DroneError {
    InvalidBatteryCharge, // Generic error, possibly caught by more specific preconditions
    ContractAlreadyActive, // Generic error, caught by specific preconditions
    NoActiveContract,      // Generic error, caught by specific preconditions
    LspViolationAttempted, // Specific to `bug-dd-01` mitigation
    InvariantViolated(&'static str), // For internal consistency checks
    PreconditionViolated(&'static str), // For method input/state checks
    PostconditionViolated(&'static str), // For method output/state checks
}

// --- Design by Contract Trait ---

/// Defines the interface for a delivery drone, enforcing Design by Contract.
pub trait DeliveryDrone {
    /// Returns a reference to the drone's current battery.
    fn current_battery(&self) -> &Battery;

    /// Returns a reference to the drone's current contract, if any.
    fn current_contract(&self) -> Option<&Contract>;

    /// Swaps the drone's current battery with a new one.
    ///
    /// # Preconditions:
    /// - `new_battery.charge_level` must be between 0.0 and 1.0.
    ///   (This is the *weakest* precondition for the trait, enabling LSP.)
    ///
    /// # Postconditions:
    /// - The drone's `battery` field is updated to `new_battery`.
    /// - `check_invariants` holds true.
    ///
    /// Returns `Ok(())` on success, or a `DroneError` if preconditions are violated
    /// or if the specific drone type cannot accept the battery (LSP mitigation).
    fn swap_battery(&mut self, new_battery: Battery) -> Result<(), DroneError>;

    /// Assigns a new contract to the drone.
    ///
    /// # Preconditions:
    /// - If there is an existing `current_contract`, it *must* be `completed`.
    ///   (Mitigates `bug-dd-02`: prevents abandoning active contracts).
    /// - `contract.id` must not be 0.
    /// - The `contract` must not be already `completed`.
    ///
    /// # Postconditions:
    /// - The drone's `current_contract` is `Some(contract)`.
    /// - `check_invariants` holds true.
    ///
    /// Returns `Ok(())` on success, or a `DroneError` if preconditions are violated.
    fn assign_contract(&mut self, contract: Contract) -> Result<(), DroneError>;

    /// Marks the drone's current contract as completed.
    ///
    /// # Preconditions:
    /// - There must be an active `current_contract`.
    /// - The `current_contract` must not already be `completed`.
    ///
    /// # Postconditions:
    /// - `current_contract` is updated to be `completed: true`.
    /// - `check_invariants` holds true.
    ///
    /// Returns `Ok(())` on success, or a `DroneError` if preconditions are violated.
    fn complete_current_contract(&mut self) -> Result<(), DroneError>;

    /// Formal Invariant Checks.
    /// This method is called at the beginning and end of every public mutating method
    /// to ensure internal consistency and detect state corruption.
    ///
    /// # Invariants for all drones:
    /// - Battery charge level is always within [0.0, 1.0].
    /// - If a contract is present, its ID is valid (non-zero).
    ///
    /// Returns `Ok(())` if all invariants hold, `Err(DroneError::InvariantViolated)` otherwise.
    fn check_invariants(&self) -> Result<(), DroneError>;
}

// --- Concrete Drone Implementations ---

/// A basic delivery drone. Adheres to all DbC contracts.
#[derive(Debug)]
pub struct BasicDeliveryDrone {
    battery: Battery,
    current_contract: Option<Contract>,
}

impl BasicDeliveryDrone {
    pub fn new(initial_battery: Battery) -> Self {
        let drone = BasicDeliveryDrone {
            battery: initial_battery,
            current_contract: None,
        };
        // Ensure initial state meets invariants
        drone.check_invariants().expect("Initial BasicDeliveryDrone state violates invariants");
        drone
    }
}

impl DeliveryDrone for BasicDeliveryDrone {
    fn current_battery(&self) -> &Battery {
        // Invariants are checked by the caller before/after accessing getters
        &self.battery
    }

    fn current_contract(&self) -> Option<&Contract> {
        // Invariants are checked by the caller before/after accessing getters
        self.current_contract.as_ref()
    }

    fn swap_battery(&mut self, new_battery: Battery) -> Result<(), DroneError> {
        // 1. Invariant check at method entry
        self.check_invariants()?;

        // 2. Preconditions: BasicDeliveryDrone requires a generally valid charge.
        if !(new_battery.charge_level >= 0.0 && new_battery.charge_level <= 1.0) {
            return Err(DroneError::PreconditionViolated("New battery charge level must be between 0.0 and 1.0"));
        }

        let old_battery = self.battery;
        self.battery = new_battery;

        // 3. Postconditions: Ensure battery was swapped correctly.
        debug_assert!(self.battery == new_battery, "Postcondition violated: Battery was not swapped correctly.");
        debug_assert!(self.battery != old_battery, "Postcondition violated: Battery is the same as before.");

        // 4. Invariant check at method exit
        self.check_invariants()?;
        Ok(())
    }

    fn assign_contract(&mut self, contract: Contract) -> Result<(), DroneError> {
        // 1. Invariant check at method entry
        self.check_invariants()?;

        // 2. Preconditions (including mitigation for `bug-dd-02`)
        if let Some(active_contract) = &self.current_contract {
            if !active_contract.completed {
                // BUG-DD-02 mitigation: Prevent re-assignment if current contract is not completed.
                return Err(DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted. Complete current contract first."));
            }
        }
        if contract.id == 0 {
            return Err(DroneError::PreconditionViolated("Contract ID cannot be 0."));
        }
        if contract.completed {
            return Err(DroneError::PreconditionViolated("Cannot assign an already completed contract."));
        }

        self.current_contract = Some(contract);

        // 3. Postconditions
        debug_assert!(self.current_contract.is_some(), "Postcondition violated: Contract was not assigned.");
        debug_assert!(self.current_contract.as_ref().unwrap().id == contract.id, "Postcondition violated: Assigned contract ID mismatch.");
        debug_assert!(!self.current_contract.as_ref().unwrap().completed, "Postcondition violated: Assigned contract is marked as completed.");

        // 4. Invariant check at method exit
        self.check_invariants()?;
        Ok(())
    }

    fn complete_current_contract(&mut self) -> Result<(), DroneError> {
        // 1. Invariant check at method entry
        self.check_invariants()?;

        // 2. Preconditions
        let current_contract_ref = self.current_contract.as_mut().ok_or(
            DroneError::PreconditionViolated("No active contract to complete.")
        )?;
        if current_contract_ref.completed {
            return Err(DroneError::PreconditionViolated("Current contract is already completed."));
        }

        current_contract_ref.completed = true;

        // 3. Postconditions
        debug_assert!(self.current_contract.is_some(), "Postcondition violated: Contract disappeared after completion.");
        debug_assert!(self.current_contract.as_ref().unwrap().completed, "Postcondition violated: Contract not marked as completed.");

        // 4. Invariant check at method exit
        self.check_invariants()?;
        Ok(())
    }

    fn check_invariants(&self) -> Result<(), DroneError> {
        if !(self.battery.charge_level >= 0.0 && self.battery.charge_level <= 1.0) {
            return Err(DroneError::InvariantViolated("Battery charge level out of bounds."));
        }
        if let Some(contract) = &self.current_contract {
            if contract.id == 0 {
                return Err(DroneError::InvariantViolated("Contract ID is 0, which is invalid."));
            }
        }
        Ok(())
    }
}

/// An express delivery drone. Addresses `bug-dd-01` (LSP) by returning an error
/// instead of panicking when its specific, stronger battery precondition is not met.
#[derive(Debug)]
pub struct ExpressDeliveryDrone {
    battery: Battery,
    current_contract: Option<Contract>,
}

impl ExpressDeliveryDrone {
    pub fn new(initial_battery: Battery) -> Self {
        let drone = ExpressDeliveryDrone {
            battery: initial_battery,
            current_contract: None,
        };
        // Ensure initial state meets invariants
        drone.check_invariants().expect("Initial ExpressDeliveryDrone state violates invariants");
        drone
    }

    /// Internal method representing the ExpressDeliveryDrone's specific logic for swapping batteries.
    /// This is where the original (hypothetical) LSP violation would occur if it panicked.
    /// In this wrapper, it returns an error instead.
    fn internal_express_swap_battery_logic(&mut self, new_battery: Battery) -> Result<(), DroneError> {
        // Specific requirement for ExpressDeliveryDrone (stronger precondition)
        if new_battery.charge_level < 0.8 {
            // BUG-DD-01 mitigation: Return an error instead of panicking.
            // This allows the `DeliveryDrone` trait method to handle it gracefully, upholding LSP.
            return Err(DroneError::LspViolationAttempted);
        }
        self.battery = new_battery;
        Ok(())
    }
}

impl DeliveryDrone for ExpressDeliveryDrone {
    fn current_battery(&self) -> &Battery {
        &self.battery
    }

    fn current_contract(&self) -> Option<&Contract> {
        self.current_contract.as_ref()
    }

    fn swap_battery(&mut self, new_battery: Battery) -> Result<(), DroneError> {
        // 1. Invariant check at method entry
        self.check_invariants()?;

        // 2. Preconditions (general validity, weakest for trait)
        if !(new_battery.charge_level >= 0.0 && new_battery.charge_level <= 1.0) {
            return Err(DroneError::PreconditionViolated("New battery charge level must be between 0.0 and 1.0"));
        }

        let old_battery = self.battery; // Capture old state for postcondition

        // Call the internal, specific logic. This is where the original LSP violation
        // would have occurred. By returning a `Result`, we prevent the panic.
        self.internal_express_swap_battery_logic(new_battery)?;

        // 3. Postconditions: Ensure battery was swapped correctly.
        debug_assert!(self.battery == new_battery, "Postcondition violated: Battery was not swapped correctly.");
        debug_assert!(self.battery != old_battery, "Postcondition violated: Battery is the same as before.");

        // 4. Invariant check at method exit
        self.check_invariants()?;
        Ok(())
    }

    fn assign_contract(&mut self, contract: Contract) -> Result<(), DroneError> {
        // 1. Invariant check at method entry
        self.check_invariants()?;

        // 2. Preconditions (including mitigation for `bug-dd-02`)
        if let Some(active_contract) = &self.current_contract {
            if !active_contract.completed {
                // BUG-DD-02 mitigation: Prevent re-assignment if current contract is not completed.
                return Err(DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted. Complete current contract first."));
            }
        }
        if contract.id == 0 {
            return Err(DroneError::PreconditionViolated("Contract ID cannot be 0."));
        }
        if contract.completed {
            return Err(DroneError::PreconditionViolated("Cannot assign an already completed contract."));
        }

        self.current_contract = Some(contract);

        // 3. Postconditions
        debug_assert!(self.current_contract.is_some(), "Postcondition violated: Contract was not assigned.");
        debug_assert!(self.current_contract.as_ref().unwrap().id == contract.id, "Postcondition violated: Assigned contract ID mismatch.");
        debug_assert!(!self.current_contract.as_ref().unwrap().completed, "Postcondition violated: Assigned contract is marked as completed.");

        // 4. Invariant check at method exit
        self.check_invariants()?;
        Ok(())
    }

    fn complete_current_contract(&mut self) -> Result<(), DroneError> {
        // 1. Invariant check at method entry
        self.check_invariants()?;

        // 2. Preconditions
        let current_contract_ref = self.current_contract.as_mut().ok_or(
            DroneError::PreconditionViolated("No active contract to complete.")
        )?;
        if current_contract_ref.completed {
            return Err(DroneError::PreconditionViolated("Current contract is already completed."));
        }

        current_contract_ref.completed = true;

        // 3. Postconditions
        debug_assert!(self.current_contract.is_some(), "Postcondition violated: Contract disappeared after completion.");
        debug_assert!(self.current_contract.as_ref().unwrap().completed, "Postcondition violated: Contract not marked as completed.");

        // 4. Invariant check at method exit
        self.check_invariants()?;
        Ok(())
    }

    fn check_invariants(&self) -> Result<(), DroneError> {
        if !(self.battery.charge_level >= 0.0 && self.battery.charge_level <= 1.0) {
            return Err(DroneError::InvariantViolated("Battery charge level out of bounds."));
        }
        if let Some(contract) = &self.current_contract {
            if contract.id == 0 {
                return Err(DroneError::InvariantViolated("Contract ID is 0, which is invalid."));
            }
        }
        Ok(())
    }
}

// --- Tests ---
// Note: `Box<dyn DeliveryDrone>` introduces heap allocation for trait objects.
// In a strictly `no_std` environment without a global allocator, one might use
// `static mut` storage, a custom allocator, or avoid dynamic dispatch for traits.
// For testing polymorphism and adhering to the "wrapper" concept, `Box` is idiomatic.
#[cfg(test)]
mod tests {
    use super::*;

    // --- Battery Tests ---
    #[test]
    fn test_battery_new_valid() {
        let battery = Battery::new(0.5);
        assert_eq!(battery.charge_level, 0.5);
    }

    #[test]
    #[should_panic(expected = "Precondition violated: Battery charge level must be between 0.0 and 1.0")]
    fn test_battery_new_invalid_high() {
        Battery::new(1.1);
    }

    #[test]
    #[should_panic(expected = "Precondition violated: Battery charge level must be between 0.0 and 1.0")]
    fn test_battery_new_invalid_low() {
        Battery::new(-0.1);
    }

    // --- BasicDeliveryDrone Tests ---
    #[test]
    fn test_basic_drone_initialization_valid() {
        let battery = Battery::new(0.7);
        let drone = BasicDeliveryDrone::new(battery);
        assert_eq!(drone.current_battery().charge_level, 0.7);
        assert!(drone.current_contract().is_none());
    }

    #[test]
    fn test_basic_drone_swap_battery_valid() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        let new_battery = Battery::new(0.9);
        assert!(drone.swap_battery(new_battery).is_ok());
        assert_eq!(drone.current_battery().charge_level, 0.9);
    }

    #[test]
    fn test_basic_drone_swap_battery_invalid_charge() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        let new_battery_low = Battery { charge_level: -0.1 };
        assert_eq!(drone.swap_battery(new_battery_low).unwrap_err(), DroneError::PreconditionViolated("New battery charge level must be between 0.0 and 1.0"));
        assert_eq!(drone.current_battery().charge_level, 0.5); // Ensure no change on error
    }

    #[test]
    fn test_basic_drone_assign_contract_valid() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        let contract1 = Contract::new(101);
        assert!(drone.assign_contract(contract1).is_ok());
        assert_eq!(drone.current_contract().unwrap().id, 101);
        assert!(!drone.current_contract().unwrap().completed);
    }

    #[test]
    fn test_basic_drone_assign_contract_invalid_id() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        let contract_invalid = Contract { id: 0, completed: false }; // Directly create to bypass Contract::new assert
        assert_eq!(drone.assign_contract(contract_invalid).unwrap_err(), DroneError::PreconditionViolated("Contract ID cannot be 0."));
        assert!(drone.current_contract().is_none());
    }

    #[test]
    fn test_basic_drone_assign_contract_already_completed() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        let contract_completed = Contract { id: 102, completed: true };
        assert_eq!(drone.assign_contract(contract_completed).unwrap_err(), DroneError::PreconditionViolated("Cannot assign an already completed contract."));
        assert!(drone.current_contract().is_none());
    }

    #[test]
    // Mitigates `bug-dd-02`: prevents re-assignment if current contract is uncompleted.
    fn test_basic_drone_assign_contract_reassignment_uncompleted() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        drone.assign_contract(Contract::new(101)).unwrap();

        let contract2 = Contract::new(102);
        let result = drone.assign_contract(contract2);
        assert_eq!(result.unwrap_err(), DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted. Complete current contract first."));
        assert_eq!(drone.current_contract().unwrap().id, 101); // Original contract should still be active
    }

    #[test]
    fn test_basic_drone_assign_contract_reassignment_completed() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        drone.assign_contract(Contract::new(101)).unwrap();
        drone.complete_current_contract().unwrap(); // Complete the first contract

        let contract2 = Contract::new(102);
        assert!(drone.assign_contract(contract2).is_ok()); // Should succeed now
        assert_eq!(drone.current_contract().unwrap().id, 102);
        assert!(!drone.current_contract().unwrap().completed);
    }

    #[test]
    fn test_basic_drone_complete_contract_valid() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        drone.assign_contract(Contract::new(101)).unwrap();
        assert!(drone.complete_current_contract().is_ok());
        assert!(drone.current_contract().unwrap().completed);
    }

    #[test]
    fn test_basic_drone_complete_contract_no_active() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        let result = drone.complete_current_contract();
        assert_eq!(result.unwrap_err(), DroneError::PreconditionViolated("No active contract to complete."));
    }

    #[test]
    fn test_basic_drone_complete_contract_already_completed() {
        let mut drone = BasicDeliveryDrone::new(Battery::new(0.5));
        drone.assign_contract(Contract::new(101)).unwrap();
        drone.complete_current_contract().unwrap();
        let result = drone.complete_current_contract(); // Try to complete again
        assert_eq!(result.unwrap_err(), DroneError::PreconditionViolated("Current contract is already completed."));
    }

    // --- ExpressDeliveryDrone Tests ---
    #[test]
    fn test_express_drone_initialization_valid() {
        let battery = Battery::new(0.9);
        let drone = ExpressDeliveryDrone::new(battery);
        assert_eq!(drone.current_battery().charge_level, 0.9);
    }

    #[test]
    // Mitigates `bug-dd-01`: ExpressDeliveryDrone handles low charge without panicking
    fn test_express_drone_swap_battery_low_charge_lsp_mitigated() {
        let mut drone = ExpressDeliveryDrone::new(Battery::new(0.5));
        let new_battery = Battery::new(0.75); // < 0.8, should trigger Express's specific check
        let result = drone.swap_battery(new_battery);
        assert_eq!(result.unwrap_err(), DroneError::LspViolationAttempted);
        assert_eq!(drone.current_battery().charge_level, 0.5); // Battery should not have changed
    }

    #[test]
    fn test_express_drone_swap_battery_valid_charge() {
        let mut drone = ExpressDeliveryDrone::new(Battery::new(0.5));
        let new_battery = Battery::new(0.85); // >= 0.8, should be fine for Express
        assert!(drone.swap_battery(new_battery).is_ok());
        assert_eq!(drone.current_battery().charge_level, 0.85);
    }

    #[test]
    fn test_express_drone_swap_battery_invalid_general_charge() {
        let mut drone = ExpressDeliveryDrone::new(Battery::new(0.5));
        let new_battery_high = Battery { charge_level: 1.1 };
        assert_eq!(drone.swap_battery(new_battery_high).unwrap_err(), DroneError::PreconditionViolated("New battery charge level must be between 0.0 and 1.0"));
        assert_eq!(drone.current_battery().charge_level, 0.5);
    }

    #[test]
    // Mitigates `bug-dd-02`: ExpressDeliveryDrone also prevents re-assignment if uncompleted.
    fn test_express_drone_assign_contract_reassignment_uncompleted() {
        let mut drone = ExpressDeliveryDrone::new(Battery::new(0.9));
        drone.assign_contract(Contract::new(201)).unwrap();

        let contract2 = Contract::new(202);
        let result = drone.assign_contract(contract2);
        assert_eq!(result.unwrap_err(), DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted. Complete current contract first."));
        assert_eq!(drone.current_contract().unwrap().id, 201);
    }

    // --- Polymorphism (Trait Object) Tests ---
    #[test]
    fn test_trait_object_lsp_behavior() {
        let mut basic_drone: Box<dyn DeliveryDrone> = Box::new(BasicDeliveryDrone::new(Battery::new(0.5)));
        let mut express_drone: Box<dyn DeliveryDrone> = Box::new(ExpressDeliveryDrone::new(Battery::new(0.5)));

        let low_charge_battery = Battery::new(0.2); // Valid for Basic, invalid for Express
        let high_charge_battery = Battery::new(0.9); // Valid for both

        // Basic drone accepts low charge
        assert!(basic_drone.swap_battery(low_charge_battery).is_ok());
        assert_eq!(basic_drone.current_battery().charge_level, 0.2);

        // Express drone returns error for low charge (LSP upheld, no panic)
        let result = express_drone.swap_battery(low_charge_battery);
        assert_eq!(result.unwrap_err(), DroneError::LspViolationAttempted);
        assert_eq!(express_drone.current_battery().charge_level, 0.5); // State unchanged

        // Both accept high charge
        assert!(basic_drone.swap_battery(high_charge_battery).is_ok());
        assert_eq!(basic_drone.current_battery().charge_level, 0.9);
        assert!(express_drone.swap_battery(high_charge_battery).is_ok());
        assert_eq!(express_drone.current_battery().charge_level, 0.9);
    }

    #[test]
    fn test_trait_object_contract_reassignment_bug_dd_02() {
        let mut basic_drone: Box<dyn DeliveryDrone> = Box::new(BasicDeliveryDrone::new(Battery::new(0.5)));
        let mut express_drone: Box<dyn DeliveryDrone> = Box::new(ExpressDeliveryDrone::new(Battery::new(0.5)));

        // Test basic drone with uncompleted contract
        basic_drone.assign_contract(Contract::new(1)).unwrap();
        let result_basic = basic_drone.assign_contract(Contract::new(2));
        assert_eq!(result_basic.unwrap_err(), DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted. Complete current contract first."));
        assert_eq!(basic_drone.current_contract().unwrap().id, 1);

        // Test express drone with uncompleted contract
        express_drone.assign_contract(Contract::new(3)).unwrap();
        let result_express = express_drone.assign_contract(Contract::new(4));
        assert_eq!(result_express.unwrap_err(), DroneError::PreconditionViolated("Cannot assign new contract while an existing contract is uncompleted. Complete current contract first."));
        assert_eq!(express_drone.current_contract().unwrap().id, 3);
    }
}
```