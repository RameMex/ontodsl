// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { pedestrianModules, phaseManagers, safetyMonitors, timerServices, trafficLightSystems } from "../db/schema.js";
import { eq, sql } from "drizzle-orm";
// Validators from the ontodls TypeScript codegen target.
// Import every `validate*` for the kinds this service touches.
// import { validateXxx, ... } from "@onto/<your-app>";

export class InvariantViolation extends Error {
  constructor(public readonly context: string, public readonly violations: readonly string[]) {
    super(`Invariant violation in ${context}: ${violations.join('; ')}`);
    this.name = "InvariantViolation";
  }
}
function assertNoViolations(violations: readonly string[], context: string): void {
  if (violations.length > 0) throw new InvariantViolation(context, violations);
}

// ─── Events on PedestrianModule ───

export async function registerPedestrianRequest(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.pedestrianRequested
  //   pre: not self.pedestrianRequestPending
  // Post-conditions from spec:
  //   post: self.pedestrianRequested = true
  //   post: self.pedestrianRequestPending = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianModules).set({
      pedestrianRequested: true,
      pedestrianRequestPending: true,
    }).where(eq(pedestrianModules.moduleId, __selfId));
    // After mutation: re-validate against `validatePedestrianModule` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianModules).where(eq(pedestrianModules.moduleId, __selfId)).get();
    // assertNoViolations(validatePedestrianModule(row as never), "registerPedestrianRequest");
  });
}

export async function grantWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequested
  //   pre: self.pedestrianRequestPending
  // Post-conditions from spec:
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianModules).set({
      pedestrianRequested: false,
      pedestrianRequestPending: false,
      walkSignalActive: true,
    }).where(eq(pedestrianModules.moduleId, __selfId));
    // After mutation: re-validate against `validatePedestrianModule` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianModules).where(eq(pedestrianModules.moduleId, __selfId)).get();
    // assertNoViolations(validatePedestrianModule(row as never), "grantWalk");
  });
}

export async function clearWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.walkSignalActive
  // Post-conditions from spec:
  //   post: self.walkSignalActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianModules).set({
      walkSignalActive: false,
    }).where(eq(pedestrianModules.moduleId, __selfId));
    // After mutation: re-validate against `validatePedestrianModule` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianModules).where(eq(pedestrianModules.moduleId, __selfId)).get();
    // assertNoViolations(validatePedestrianModule(row as never), "clearWalk");
  });
}

export async function startSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.pedestrianRequested
  // Post-conditions from spec:
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianModules).set({
      pedestrianRequested: false,
      pedestrianRequestPending: false,
      walkSignalActive: false,
    }).where(eq(pedestrianModules.moduleId, __selfId));
    // After mutation: re-validate against `validatePedestrianModule` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianModules).where(eq(pedestrianModules.moduleId, __selfId)).get();
    // assertNoViolations(validatePedestrianModule(row as never), "startSystem");
  });
}

export async function stopSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.walkSignalActive
  // Post-conditions from spec:
  //   post: self.walkSignalActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianModules).set({
      walkSignalActive: false,
    }).where(eq(pedestrianModules.moduleId, __selfId));
    // After mutation: re-validate against `validatePedestrianModule` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianModules).where(eq(pedestrianModules.moduleId, __selfId)).get();
    // assertNoViolations(validatePedestrianModule(row as never), "stopSystem");
  });
}

// ─── Events on PhaseManager ───

export async function startNormalPhase(__selfId: string, p: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: p <> null
  //   pre: self.isOperating
  //   pre: not self.allRedDwellActive
  //   pre: p.greenApproaches->forAll(a1 |
           p.greenApproaches->forAll(a2 |
             a1 = a2 or a1.direction <> a2.direction))
  // Post-conditions from spec:
  //   post: self.activePhase = p
  //   post: self.greenApproaches = p.greenApproaches
  //   post: self.allRedDwellActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseManagers).set({
      activePhase: p,
      allRedDwellActive: false,
    }).where(eq(phaseManagers.managerId, __selfId));
    // After mutation: re-validate against `validatePhaseManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseManagers).where(eq(phaseManagers.managerId, __selfId)).get();
    // assertNoViolations(validatePhaseManager(row as never), "startNormalPhase");
  });
}

export async function transitionToYellow(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.activePhase <> null
  //   pre: self.isOperating
  //   pre: self.greenApproaches->notEmpty()
  // Post-conditions from spec:
  //   post: self.greenApproaches->isEmpty()
  // TODO: implement mutation logic for 'PhaseManager.transitionToYellow'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: transitionToYellow");
}

export async function transitionToRed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.greenApproaches->isEmpty()
  //   pre: self.isOperating
  // Post-conditions from spec:
  //   post: self.greenApproaches->isEmpty()
  //   post: self.allRedDwellActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseManagers).set({
      allRedDwellActive: true,
    }).where(eq(phaseManagers.managerId, __selfId));
    // After mutation: re-validate against `validatePhaseManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseManagers).where(eq(phaseManagers.managerId, __selfId)).get();
    // assertNoViolations(validatePhaseManager(row as never), "transitionToRed");
  });
}

export async function completeAllRedDwell(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.allRedDwellActive
  // Post-conditions from spec:
  //   post: self.allRedDwellActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseManagers).set({
      allRedDwellActive: false,
    }).where(eq(phaseManagers.managerId, __selfId));
    // After mutation: re-validate against `validatePhaseManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseManagers).where(eq(phaseManagers.managerId, __selfId)).get();
    // assertNoViolations(validatePhaseManager(row as never), "completeAllRedDwell");
  });
}

export async function emergencyAllRed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating
  //   pre: not self.allRedDwellActive
  // Post-conditions from spec:
  //   post: self.greenApproaches->isEmpty()
  //   post: self.allRedDwellActive = true
  //   post: self.activePhase = null
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseManagers).set({
      allRedDwellActive: true,
    }).where(eq(phaseManagers.managerId, __selfId));
    // After mutation: re-validate against `validatePhaseManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseManagers).where(eq(phaseManagers.managerId, __selfId)).get();
    // assertNoViolations(validatePhaseManager(row as never), "emergencyAllRed");
  });
}

export async function startSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isOperating
  // Post-conditions from spec:
  //   post: self.isOperating = true
  //   post: self.activePhase = null
  //   post: self.greenApproaches->isEmpty()
  //   post: self.allRedDwellActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseManagers).set({
      isOperating: true,
      allRedDwellActive: false,
    }).where(eq(phaseManagers.managerId, __selfId));
    // After mutation: re-validate against `validatePhaseManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseManagers).where(eq(phaseManagers.managerId, __selfId)).get();
    // assertNoViolations(validatePhaseManager(row as never), "startSystem");
  });
}

export async function stopSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating
  // Post-conditions from spec:
  //   post: self.isOperating = false
  //   post: self.greenApproaches->isEmpty()
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseManagers).set({
      isOperating: false,
    }).where(eq(phaseManagers.managerId, __selfId));
    // After mutation: re-validate against `validatePhaseManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseManagers).where(eq(phaseManagers.managerId, __selfId)).get();
    // assertNoViolations(validatePhaseManager(row as never), "stopSystem");
  });
}

// ─── Events on SafetyMonitor ───

export async function emergencyPreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.preemptionActive
  // Post-conditions from spec:
  //   post: self.preemptionActive = true
  //   post: self.allRedActive = true
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      preemptionActive: true,
      allRedActive: true,
      preemptionTimerElapsed: 0,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "emergencyPreemption");
  });
}

export async function clearPreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive
  //   pre: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds
  // Post-conditions from spec:
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      preemptionActive: false,
      allRedActive: false,
      preemptionTimerElapsed: 0,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "clearPreemption");
  });
}

export async function advancePreemptionTimer(__selfId: string, dt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive
  //   pre: dt >= 0.0
  // Post-conditions from spec:
  //   post: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      preemptionTimerElapsed: sql`${safetyMonitors.preemptionTimerElapsed} + ${dt}`,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "advancePreemptionTimer");
  });
}

export async function startSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.preemptionActive
  // Post-conditions from spec:
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      preemptionActive: false,
      allRedActive: false,
      preemptionTimerElapsed: 0,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "startSystem");
  });
}

export async function stopSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.preemptionActive
  // Post-conditions from spec:
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      preemptionActive: false,
      allRedActive: false,
      preemptionTimerElapsed: 0,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "stopSystem");
  });
}

// ─── Events on TimerService ───

export async function tickElapsedTimers(__selfId: string, dt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dt >= 0.0
  // Post-conditions from spec:
  //   post: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt
  //   post: self.elapsedTime = self.elapsedTime@pre + dt
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(timerServices).set({
      yellowTimerElapsed: sql`${timerServices.yellowTimerElapsed} + ${dt}`,
      elapsedTime: sql`${timerServices.elapsedTime} + ${dt}`,
    }).where(eq(timerServices.timerId, __selfId));
    // After mutation: re-validate against `validateTimerService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(timerServices).where(eq(timerServices.timerId, __selfId)).get();
    // assertNoViolations(validateTimerService(row as never), "tickElapsedTimers");
  });
}

export async function resetYellowTimer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.yellowTimerElapsed >= 0.0
  // Post-conditions from spec:
  //   post: self.yellowTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(timerServices).set({
      yellowTimerElapsed: 0,
    }).where(eq(timerServices.timerId, __selfId));
    // After mutation: re-validate against `validateTimerService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(timerServices).where(eq(timerServices.timerId, __selfId)).get();
    // assertNoViolations(validateTimerService(row as never), "resetYellowTimer");
  });
}

export async function resetYellowTimerForRed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.yellowTimerElapsed >= self.yellowIntervalSeconds
  // Post-conditions from spec:
  //   post: self.yellowTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(timerServices).set({
      yellowTimerElapsed: 0,
    }).where(eq(timerServices.timerId, __selfId));
    // After mutation: re-validate against `validateTimerService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(timerServices).where(eq(timerServices.timerId, __selfId)).get();
    // assertNoViolations(validateTimerService(row as never), "resetYellowTimerForRed");
  });
}

export async function startSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.yellowTimerElapsed >= 0.0
  // Post-conditions from spec:
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.elapsedTime = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(timerServices).set({
      yellowTimerElapsed: 0,
      elapsedTime: 0,
    }).where(eq(timerServices.timerId, __selfId));
    // After mutation: re-validate against `validateTimerService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(timerServices).where(eq(timerServices.timerId, __selfId)).get();
    // assertNoViolations(validateTimerService(row as never), "startSystem");
  });
}

export async function stopSystem(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.yellowTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(timerServices).set({
      yellowTimerElapsed: 0,
    }).where(eq(timerServices.timerId, __selfId));
    // After mutation: re-validate against `validateTimerService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(timerServices).where(eq(timerServices.timerId, __selfId)).get();
    // assertNoViolations(validateTimerService(row as never), "stopSystem");
  });
}

// ─── Events on TrafficLightSystem ───

export async function startNormalPhase(__selfId: string, p: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: p <> null
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  //   pre: not self.allRedActive
  // Post-conditions from spec:
  //   post: self.activePhase = p
  //   post: self.greenApproaches = p.greenApproaches
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      activePhase: p,
      preemptionActive: false,
      allRedActive: false,
      yellowTimerElapsed: 0,
      preemptionTimerElapsed: 0,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "startNormalPhase");
  });
}

export async function transitionToYellow(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.activePhase <> null
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  //   pre: not self.allRedActive
  //   pre: self.greenApproaches->notEmpty()
  // Post-conditions from spec:
  //   post: self.greenApproaches->isEmpty()
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.yellowIntervalSeconds >= 3.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      yellowTimerElapsed: 0,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "transitionToYellow");
  });
}

export async function transitionToRed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.yellowTimerElapsed >= self.yellowIntervalSeconds
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  //   pre: not self.allRedActive
  // Post-conditions from spec:
  //   post: self.greenApproaches->isEmpty()
  //   post: self.yellowTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      yellowTimerElapsed: 0,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "transitionToRed");
  });
}

export async function emergencyPreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  // Post-conditions from spec:
  //   post: self.preemptionActive = true
  //   post: self.allRedActive = true
  //   post: self.greenApproaches->isEmpty()
  //   post: self.preemptionTimerElapsed = 0.0
  //   post: self.preemptionResponseTimeSeconds <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      preemptionActive: true,
      allRedActive: true,
      preemptionTimerElapsed: 0,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "emergencyPreemption");
  });
}

export async function clearPreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive
  //   pre: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds
  // Post-conditions from spec:
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      preemptionActive: false,
      allRedActive: false,
      preemptionTimerElapsed: 0,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "clearPreemption");
  });
}

export async function registerPedestrianRequest(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.pedestrianRequested
  //   pre: not self.pedestrianRequestPending
  // Post-conditions from spec:
  //   post: self.pedestrianRequested = true
  //   post: self.pedestrianRequestPending = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      pedestrianRequested: true,
      pedestrianRequestPending: true,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "registerPedestrianRequest");
  });
}

export async function grantWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequested
  //   pre: self.pedestrianRequestPending
  //   pre: self.greenApproaches->isEmpty()
  //   pre: not self.preemptionActive
  // Post-conditions from spec:
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      pedestrianRequested: false,
      pedestrianRequestPending: false,
      walkSignalActive: true,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "grantWalk");
  });
}

export async function clearWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.walkSignalActive
  // Post-conditions from spec:
  //   post: self.walkSignalActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      walkSignalActive: false,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "clearWalk");
  });
}

export async function tickElapsedTimers(__selfId: string, dt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dt >= 0.0
  // Post-conditions from spec:
  //   post: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt
  //   post: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      yellowTimerElapsed: sql`${trafficLightSystems.yellowTimerElapsed} + ${dt}`,
      preemptionTimerElapsed: sql`${trafficLightSystems.preemptionTimerElapsed} + ${dt}`,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "tickElapsedTimers");
  });
}

export async function startSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isOperating
  // Post-conditions from spec:
  //   post: self.isOperating = true
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = false
  //   post: self.greenApproaches->isEmpty()
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.preemptionTimerElapsed = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      isOperating: true,
      preemptionActive: false,
      allRedActive: false,
      pedestrianRequested: false,
      pedestrianRequestPending: false,
      walkSignalActive: false,
      yellowTimerElapsed: 0,
      preemptionTimerElapsed: 0,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "startSystem");
  });
}

export async function stopSystem(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating
  // Post-conditions from spec:
  //   post: self.isOperating = false
  //   post: self.greenApproaches->isEmpty()
  //   post: self.walkSignalActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightSystems).set({
      isOperating: false,
      walkSignalActive: false,
    }).where(eq(trafficLightSystems.systemId, __selfId));
    // After mutation: re-validate against `validateTrafficLightSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightSystems).where(eq(trafficLightSystems.systemId, __selfId)).get();
    // assertNoViolations(validateTrafficLightSystem(row as never), "stopSystem");
  });
}

// ─── Events on TrafficLightSystemFormalized ───

export async function rejectConflictingPhase(__selfId: string, p: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: p.greenApproaches->forAll(a1 |
           p.greenApproaches->forAll(a2 |
             a1 = a2 or a1.direction <> a2.direction)) = false
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectConflictingPhase'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectConflictingPhase");
}

export async function rejectTransitionToYellowNoGreen(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.greenApproaches->isEmpty()
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectTransitionToYellowNoGreen");
}

export async function rejectDuplicatePreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectDuplicatePreemption'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectDuplicatePreemption");
}

export async function rejectDuplicatePedestrianRequest(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequested
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectDuplicatePedestrianRequest");
}

export async function rejectWalkConflictingGreen(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.greenApproaches->notEmpty()
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectWalkConflictingGreen'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectWalkConflictingGreen");
}

export async function rejectSystemAlreadyRunning(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectSystemAlreadyRunning'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectSystemAlreadyRunning");
}

export async function rejectInvalidTickDt(__selfId: string, dt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dt <= 0.0
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectInvalidTickDt'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectInvalidTickDt");
}
