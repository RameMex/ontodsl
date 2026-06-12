Here's a `no_std`, `heapless` Rust wrapper designed with Design-by-Contract principles to safely manage Happenings and Social Commitments, specifically addressing the identified Z3 hazards.

This design incorporates:
*   **Formal Invariant Pre-checks**: Through a dedicated `Invariant` trait and explicit calls in constructors and mutator methods.
*   **Preconditions**: Checked at the beginning of methods to ensure valid input state.
*   **Postconditions**: Implicitly ensured by correct logic and explicitly verified with `debug_assert!` in debug builds.
*   **Heapless Collections**: Using `heapless::Vec` for registries.
*   **`no_std` Compatibility**: Avoiding standard library features not available in `no_std` and using `core` primitives.

```rust
#![no_std]
#![deny(warnings)] // Enforce good practices for embedded systems

extern crate heapless; // Required for heapless collections

use core::fmt::{self, Debug};
use core::time::Duration; // Using Duration as a simple timestamp
use heapless::Vec;       // For collections with fixed capacity
// If you need strings for descriptions, `heapless::String` would be used.
// For brevity, we'll keep data minimal in this example.

// --- 1. Core Data Types: Timestamp, Happenings, Commitment States ---

/// Represents a point in time, typically from an epoch (e.g., system uptime).
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Debug)]
pub struct Timestamp(Duration);

impl Timestamp {
    pub const fn from_secs(secs: u64) -> Self {
        Self(Duration::from_secs(secs))
    }
    pub const fn from_millis(millis: u64) -> Self {
        Self(Duration::from_millis(millis))
    }
    // In a real no_std environment, 'now()' would be obtained from a hardware timer.
    // For this example, 'current_time' is passed explicitly to functions that need it.
}

/// Enumeration of possible types of events (Happenings).
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum HappeningKind {
    Takeoff,
    Landing,
    DeliveryAttempted,
    DeadlineMissed,
    // Add other relevant happening kinds as needed
}

/// Represents a single event that has occurred.
#[derive(Clone, PartialEq, Eq, Debug)]
pub struct Happening {
    pub id: u32,
    pub kind: HappeningKind,
    pub timestamp: Timestamp, // When the happening occurred
    // Add other happening-specific data, e.g., associated_commitment_id
}

impl Happening {
    pub fn new(id: u32, kind: HappeningKind, timestamp: Timestamp) -> Self {
        Happening { id, kind, timestamp }
    }
}

/// Registry for Happenings, using a heapless vector.
/// Capacity chosen arbitrarily, adjust as needed for your application.
pub type HappeningRegistry = Vec<Happening, 32>;

/// Enumeration of possible states for a Social Commitment.
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum CommitmentState {
    Pending,
    InProgress,
    Fulfilled,
    Breached,
    Cancelled,
}

// --- 2. Design-by-Contract Traits ---

/// A trait for objects that maintain internal consistency through invariants.
/// Invariants are conditions that must always be true for an object's state
/// at the beginning and end of any public method call (when not in a transient state).
pub trait Invariant {
    /// Checks the internal consistency invariants of the object.
    /// Returns `Ok(())` if all invariants hold, `Err(msg)` otherwise.
    fn check_invariant(&self) -> Result<(), &'static str>;
}

// --- 3. Social Commitment Implementations Addressing Z3 Hazards ---

// --- Z3 Hazard: bug-h-01 - Temporal Takeoff/Landing Allen Interval Inversion ---
// "FlightSchedule requires takeoff to be before landing, but lacks synchronous
// Allen-interval verification, allowing landing to be scheduled chronologically before takeoff."

/// Represents a commitment for a flight schedule.
#[derive(Clone, PartialEq, Eq, Debug)]
pub struct FlightSchedule {
    pub id: u32,
    pub state: CommitmentState,
    pub planned_takeoff: Timestamp,
    pub planned_landing: Timestamp,
}

impl Invariant for FlightSchedule {
    /// **Formal Invariant Check for bug-h-01**:
    /// Planned takeoff must always be strictly before planned landing.
    fn check_invariant(&self) -> Result<(), &'static str> {
        if self.planned_takeoff < self.planned_landing {
            Ok(())
        } else {
            Err("FlightSchedule Invariant Violation: Planned takeoff must be strictly before planned landing.")
        }
    }
}

impl FlightSchedule {
    /// Creates a new `FlightSchedule` commitment.
    ///
    /// **Precondition for bug-h-01**: `takeoff` must be strictly before `landing`.
    /// If violated, creation fails with an error.
    /// **Postcondition**: `state` is `Pending`.
    /// **Invariant Check**: `check_invariant()` is called to ensure consistency after creation.
    pub fn new(id: u32, takeoff: Timestamp, landing: Timestamp) -> Result<Self, &'static str> {
        // Precondition enforcement for bug-h-01
        if takeoff >= landing {
            return Err("Precondition violated: Takeoff time must be strictly before landing time.");
        }

        let schedule = FlightSchedule {
            id,
            state: CommitmentState::Pending,
            planned_takeoff: takeoff,
            planned_landing: landing,
        };

        // Invariant check immediately after construction.
        // Given the precondition, this should always pass, acting as a double-check.
        schedule.check_invariant()?;

        Ok(schedule)
    }

    /// Updates the planned times for the flight schedule.
    ///
    /// **Precondition for bug-h-01**: `new_takeoff` must be strictly before `new_landing`.
    /// If violated, update fails with an error.
    /// **Invariant Check**: `check_invariant()` is called to ensure consistency after update.
    pub fn update_schedule(&mut self, new_takeoff: Timestamp, new_landing: Timestamp) -> Result<(), &'static str> {
        // Precondition enforcement for bug-h-01
        if new_takeoff >= new_landing {
            return Err("Precondition violated: New takeoff time must be strictly before new landing time.");
        }

        self.planned_takeoff = new_takeoff;
        self.planned_landing = new_landing;

        // Invariant check after state modification.
        self.check_invariant()?;

        Ok(())
    }

    /// Processes a happening relevant to this flight schedule, updating its state.
    /// (This is a simplified example; real systems would have more complex state machines).
    pub fn process_happening(&mut self, happening: &Happening) {
        if happening.id != self.id {
            return; // Only process happenings relevant to this commitment ID
        }

        match happening.kind {
            HappeningKind::Takeoff => {
                // If actual takeoff happens on or after planned, and we are Pending
                if self.state == CommitmentState::Pending && happening.timestamp >= self.planned_takeoff {
                    self.state = CommitmentState::InProgress;
                    // In a real system: log event, notify other components
                }
            }
            HappeningKind::Landing => {
                // If actual landing happens while InProgress
                if self.state == CommitmentState::InProgress {
                    self.state = CommitmentState::Fulfilled;
                    // In a real system: assess timeliness, log, complete commitment
                }
            }
            _ => {} // Ignore other happening kinds for FlightSchedule
        }
    }
}

/// Registry for Flight Schedules.
pub type FlightScheduleRegistry = Vec<FlightSchedule, 16>;


// --- Z3 Hazard: bug-sc-01 - Warning Silent Commitment Breaches on Deadline Missed ---
// "DeadlineMissed happening violates DeliveryCommitment but lacks trigger handlers,
// resulting in silent SLA breaches."

/// Represents a commitment for a delivery.
#[derive(Clone, PartialEq, Eq, Debug)]
pub struct DeliveryCommitment {
    pub id: u32,
    pub state: CommitmentState,
    pub delivery_deadline: Timestamp,
    pub customer_id: u32,
    // Add other delivery details as needed
}

impl Invariant for DeliveryCommitment {
    /// Invariant: A simple invariant could be that a fulfilled commitment's deadline
    /// should not be in the future (meaning it was fulfilled before or on time).
    /// More complex invariants might exist for state transitions.
    fn check_invariant(&self) -> Result<(), &'static str> {
        // For `DeliveryCommitment`, primary state changes are driven by happenings,
        // and internal invariants (like `delivery_deadline` itself) are usually static.
        // Thus, a complex internal invariant based on the state alone isn't trivial
        // without knowing `current_time`.
        Ok(())
    }
}

impl DeliveryCommitment {
    /// Creates a new `DeliveryCommitment`.
    ///
    /// **Precondition**: `delivery_deadline` is a valid timestamp (implicitly handled by type).
    /// **Postcondition**: `state` is `Pending`.
    pub fn new(id: u32, delivery_deadline: Timestamp, customer_id: u32) -> Self {
        DeliveryCommitment {
            id,
            state: CommitmentState::Pending,
            delivery_deadline,
            customer_id,
        }
    }

    /// Processes a happening and updates the commitment's state.
    ///
    /// **Fix for bug-sc-01**: Explicitly handles `DeadlineMissed` happening to trigger a breach.
    /// **Postcondition**: If `happening` is `DeadlineMissed` AND the `delivery_deadline`
    /// is truly past `current_time`, `state` transitions to `Breached` (unless already Fulfilled/Cancelled).
    pub fn process_happening(&mut self, happening: &Happening, current_time: Timestamp) {
        if happening.id != self.id {
            return; // Only process happenings relevant to this commitment ID
        }

        let initial_state = self.state; // Store for postcondition check

        match happening.kind {
            HappeningKind::DeliveryAttempted => {
                if self.state == CommitmentState::Pending || self.state == CommitmentState::InProgress {
                    self.state = CommitmentState::Fulfilled;
                }
            }
            HappeningKind::DeadlineMissed => {
                // Core logic to address bug-sc-01: Explicitly check and breach.
                if (self.state == CommitmentState::Pending || self.state == CommitmentState::InProgress) &&
                   self.delivery_deadline < current_time // Ensure deadline is truly past 'now'
                {
                    self.state = CommitmentState::Breached;
                    // In a real system, this would trigger actual actions:
                    // - Log the SLA breach for compliance audits.
                    // - Notify relevant parties (e.g., customer service, operations).
                    // - Increment a breach counter.
                    #[cfg(debug_assertions)]
                    eprintln!(
                        "WARNING: DeliveryCommitment {} for customer {} BREACHED! Deadline ({:?}) missed at {:?}",
                        self.id, self.customer_id, self.delivery_deadline, current_time
                    );
                }
            }
            _ => {} // Ignore other happening kinds for DeliveryCommitment
        }

        // Formal Postcondition Check (runtime-only for debug builds)
        // Ensures that if conditions for a breach were met, the state indeed changed to Breached.
        #[cfg(debug_assertions)]
        {
            if happening.kind == HappeningKind::DeadlineMissed &&
               initial_state != CommitmentState::Fulfilled &&
               initial_state != CommitmentState::Cancelled &&
               self.delivery_deadline < current_time {
                debug_assert_eq!(
                    self.state,
                    CommitmentState::Breached,
                    "Postcondition violated: Commitment should be Breached after DeadlineMissed happening."
                );
            }
        }
    }
}

/// Registry for Delivery Commitments.
pub type DeliveryCommitmentRegistry = Vec<DeliveryCommitment, 32>;

// --- 4. Commitment Manager (Central Orchestration) ---

/// Manages all happenings and social commitments.
pub struct CommitmentManager {
    pub happenings: HappeningRegistry,
    pub flight_schedules: FlightScheduleRegistry,
    pub delivery_commitments: DeliveryCommitmentRegistry,
    // Add other commitment registries as your system grows
}

impl CommitmentManager {
    pub fn new() -> Self {
        CommitmentManager {
            happenings: Vec::new(),
            flight_schedules: Vec::new(),
            delivery_commitments: Vec::new(),
        }
    }

    /// Records a new happening and dispatches it to relevant commitments.
    /// This is the central point for event processing.
    pub fn record_happening(&mut self, happening: Happening, current_time: Timestamp) -> Result<(), &'static str> {
        // Precondition: Registry has space.
        if self.happenings.push(happening.clone()).is_err() {
            return Err("Happening registry is full. Happening not recorded.");
        }

        // Dispatch happening to all potentially affected flight schedules
        for schedule in self.flight_schedules.iter_mut() {
            schedule.process_happening(&happening);
        }

        // Dispatch happening to all potentially affected delivery commitments
        for delivery in self.delivery_commitments.iter_mut() {
            // Pass `current_time` as the "now" for deadline evaluations.
            delivery.process_happening(&happening, current_time);
        }

        Ok(())
    }

    /// Adds a new flight schedule, enforcing its design-by-contract.
    pub fn add_flight_schedule(&mut self, id: u32, takeoff: Timestamp, landing: Timestamp) -> Result<(), &'static str> {
        let schedule = FlightSchedule::new(id, takeoff, landing)?; // Precondition & Invariant checks
        if self.flight_schedules.push(schedule).is_err() {
            Err("Flight schedule registry is full.")
        } else {
            Ok(())
        }
    }

    /// Adds a new delivery commitment.
    pub fn add_delivery_commitment(&mut self, id: u32, deadline: Timestamp, customer_id: u32) -> Result<(), &'static str> {
        let commitment = DeliveryCommitment::new(id, deadline, customer_id); // Constructor sets initial state
        if self.delivery_commitments.push(commitment).is_err() {
            Err("Delivery commitment registry is full.")
        } else {
            Ok(())
        }
    }
}


// --- 5. Example Usage and Tests (Illustrating Hazard Prevention) ---

#[cfg(test)]
mod tests {
    use super::*;

    // A simple mock clock for deterministic testing in no_std.
    struct MockClock(Timestamp);
    impl MockClock {
        fn new(initial_time: Timestamp) -> Self { MockClock(initial_time) }
        fn current_time(&self) -> Timestamp { self.0 }
        fn advance_by(&mut self, duration: Duration) { self.0 .0 += duration; }
    }

    #[test]
    fn test_bug_h_01_temporal_takeoff_landing_inversion_prevention() {
        // Scenario 1: Attempt to create FlightSchedule with landing before takeoff
        let inverted_takeoff = Timestamp::from_secs(100);
        let inverted_landing = Timestamp::from_secs(50);
        let result = FlightSchedule::new(1, inverted_takeoff, inverted_landing);
        assert!(result.is_err(), "Creation with inverted times should fail.");
        assert_eq!(result.unwrap_err(), "Precondition violated: Takeoff time must be strictly before landing time.");

        // Scenario 2: Attempt to update FlightSchedule with inverted times
        let mut schedule = FlightSchedule::new(2, Timestamp::from_secs(10), Timestamp::from_secs(20)).unwrap();
        let update_result = schedule.update_schedule(Timestamp::from_secs(30), Timestamp::from_secs(25));
        assert!(update_result.is_err(), "Update with inverted times should fail.");
        assert_eq!(update_result.unwrap_err(), "Precondition violated: New takeoff time must be strictly before new landing time.");

        // Scenario 3: Valid creation and update (ensuring invariants hold)
        let valid_takeoff = Timestamp::from_secs(100);
        let valid_landing = Timestamp::from_secs(200);
        let mut schedule_ok = FlightSchedule::new(3, valid_takeoff, valid_landing).unwrap();
        assert_eq!(schedule_ok.check_invariant().unwrap(), ()); // Invariant must hold after valid creation

        let new_valid_takeoff = Timestamp::from_secs(150);
        let new_valid_landing = Timestamp::from_secs(250);
        let update_ok = schedule_ok.update_schedule(new_valid_takeoff, new_valid_landing);
        assert!(update_ok.is_ok(), "Valid update should succeed.");
        assert_eq!(schedule_ok.check_invariant().unwrap(), ()); // Invariant must hold after valid update
    }

    #[test]
    fn test_bug_sc_01_silent_commitment_breach_prevention() {
        let mut clock = MockClock::new(Timestamp::from_secs(0));
        let mut manager = CommitmentManager::new();

        let deadline = Timestamp::from_secs(100);
        let customer_id = 123;

        manager.add_delivery_commitment(1, deadline, customer_id).unwrap();
        let commitment_idx = manager.delivery_commitments.iter().position(|c| c.id == 1).unwrap();

        // Scenario 1: Deadline missed, commitment should breach
        clock.advance_by(Duration::from_secs(120)); // Current time is now 120s, past deadline (100s)
        let deadline_missed_happening = Happening::new(1, HappeningKind::DeadlineMissed, clock.current_time());
        manager.record_happening(deadline_missed_happening, clock.current_time()).unwrap();

        let breached_commitment = manager.delivery_commitments.get(commitment_idx).unwrap();
        assert_eq!(breached_commitment.state, CommitmentState::Breached, "Commitment should be Breached after deadline missed.");

        // Scenario 2: Commitment already fulfilled, should not breach even if deadline passes
        manager.delivery_commitments.clear(); // Reset for new scenario
        manager.add_delivery_commitment(2, Timestamp::from_secs(200), 456).unwrap();
        let commitment_idx_fulfilled = manager.delivery_commitments.iter().position(|c| c.id == 2).unwrap();
        let fulfilled_commitment = manager.delivery_commitments.get_mut(commitment_idx_fulfilled).unwrap();
        fulfilled_commitment.state = CommitmentState::Fulfilled; // Manually fulfill it

        clock.advance_by(Duration::from_secs(150)); // Advance time past its deadline (200s + 150s = 350s)
        let late_deadline_missed = Happening::new(2, HappeningKind::DeadlineMissed, clock.current_time());
        manager.record_happening(late_deadline_missed, clock.current_time()).unwrap();

        let final_commitment = manager.delivery_commitments.get(commitment_idx_fulfilled).unwrap();
        assert_eq!(final_commitment.state, CommitmentState::Fulfilled, "Fulfilled commitment should remain Fulfilled.");

        // Scenario 3: Deadline not yet missed, should not breach
        manager.delivery_commitments.clear();
        clock = MockClock::new(Timestamp::from_secs(0));
        manager.add_delivery_commitment(3, Timestamp::from_secs(500), 789).unwrap();
        let commitment_idx_pending = manager.delivery_commitments.iter().position(|c| c.id == 3).unwrap();

        clock.advance_by(Duration::from_secs(400)); // Current time is 400s, deadline is 500s
        let early_deadline_missed = Happening::new(3, HappeningKind::DeadlineMissed, clock.current_time());
        manager.record_happening(early_deadline_missed, clock.current_time()).unwrap();

        let pending_commitment = manager.delivery_commitments.get(commitment_idx_pending).unwrap();
        assert_eq!(pending_commitment.state, CommitmentState::Pending, "Commitment should remain Pending if deadline not truly missed.");
    }

    #[test]
    fn test_flight_schedule_happening_processing() {
        let mut clock = MockClock::new(Timestamp::from_secs(0));
        let mut manager = CommitmentManager::new();

        let planned_takeoff = Timestamp::from_secs(10);
        let planned_landing = Timestamp::from_secs(20);
        manager.add_flight_schedule(101, planned_takeoff, planned_landing).unwrap();
        let schedule_idx = manager.flight_schedules.iter().position(|s| s.id == 101).unwrap();
        let schedule = manager.flight_schedules.get(schedule_idx).unwrap();
        assert_eq!(schedule.state, CommitmentState::Pending);

        // Advance time and record takeoff
        clock.advance_by(Duration::from_secs(10)); // Current time = 10s
        let takeoff_happening = Happening::new(101, HappeningKind::Takeoff, clock.current_time());
        manager.record_happening(takeoff_happening, clock.current_time()).unwrap();
        let schedule_after_takeoff = manager.flight_schedules.get(schedule_idx).unwrap();
        assert_eq!(schedule_after_takeoff.state, CommitmentState::InProgress);

        // Advance time and record landing
        clock.advance_by(Duration::from_secs(10)); // Current time = 20s
        let landing_happening = Happening::new(101, HappeningKind::Landing, clock.current_time());
        manager.record_happening(landing_happening, clock.current_time()).unwrap();
        let schedule_after_landing = manager.flight_schedules.get(schedule_idx).unwrap();
        assert_eq!(schedule_after_landing.state, CommitmentState::Fulfilled);
    }
}
```