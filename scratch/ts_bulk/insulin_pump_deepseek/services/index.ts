// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
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

// ─── Events on AlarmManager ───

export async function soundMalfunctionAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.soundMalfunctionAlarm'.
  // Pre-conditions from spec:
  //   pre: not self.malfunctionAlarmActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.malfunctionAlarmActive = true
  //   post: self.alarmActive = true
  //   post: self.alarmSoundOn = true
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: soundMalfunctionAlarm");
}

export async function soundLowReservoirAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.soundLowReservoirAlarm'.
  // Pre-conditions from spec:
  //   pre: not self.lowReservoirAlarmActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lowReservoirAlarmActive = true
  //   post: self.alarmActive = true
  //   post: self.alarmSoundOn = true
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: soundLowReservoirAlarm");
}

export async function clearAlarms(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.clearAlarms'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  //   post: self.lowReservoirAlarmActive = false
  //   post: self.malfunctionAlarmActive = false
  //   post: self.alarmSoundOn = false
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarms");
}

// ─── Events on BloodSugarSensor ───

export async function takeReading(value: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BloodSugarSensor.takeReading'.
  // Pre-conditions from spec:
  //   pre: value >= 0.0
  //   pre: value <= 1000.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastReadingMgDl = value
  //   post: self.readingTimestamp = timestamp
  //   post: self.sensorFaulty = false
  // After mutations, call validate*() on the affected BloodSugarSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: takeReading");
}

export async function reportSensorFault(): Promise<void> {
  // TODO: implement mutation logic for 'BloodSugarSensor.reportSensorFault'.
  // Pre-conditions from spec:
  //   pre: not self.sensorFaulty
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaulty = true
  // After mutations, call validate*() on the affected BloodSugarSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reportSensorFault");
}

export async function resetSensor(): Promise<void> {
  // TODO: implement mutation logic for 'BloodSugarSensor.resetSensor'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaulty = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaulty = false
  //   post: self.lastReadingMgDl = 0.0
  //   post: self.lastRateMgDlPerMin = 0.0
  // After mutations, call validate*() on the affected BloodSugarSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetSensor");
}

// ─── Events on DoseCalculator ───

export async function computeDose(sugar: number, rate: number, timestamp: number): Promise<number> {
  // TODO: implement mutation logic for 'DoseCalculator.computeDose'.
  // Pre-conditions from spec:
  //   pre: sugar >= 0.0
  //   pre: sugar <= 1000.0
  //   pre: rate >= 0.0
  //   pre: sugar > self.safeZoneUpperBound
  //   pre: rate > 0.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if (timestamp - self.lastCalculationTime) >= self.dosingCheckIntervalSeconds then
            result <= self.safeMaxDoseUnits and result > 0.0
          else
            result = 0.0
          endif
  //   post: self.lastComputedDose = result
  //   post: self.lastCalculationTime = timestamp
  // After mutations, call validate*() on the affected DoseCalculator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: computeDose");
}

export async function setMaxDose(newMax: number): Promise<void> {
  // TODO: implement mutation logic for 'DoseCalculator.setMaxDose'.
  // Pre-conditions from spec:
  //   pre: newMax > 0.0
  //   pre: newMax <= 2.0
  //   pre: self.safeMaxDoseUnits <> newMax
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.safeMaxDoseUnits = newMax
  // After mutations, call validate*() on the affected DoseCalculator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setMaxDose");
}

export async function setSafeZone(newUpperBound: number): Promise<void> {
  // TODO: implement mutation logic for 'DoseCalculator.setSafeZone'.
  // Pre-conditions from spec:
  //   pre: newUpperBound >= 0.0
  //   pre: self.safeZoneUpperBound <> newUpperBound
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.safeZoneUpperBound = newUpperBound
  // After mutations, call validate*() on the affected DoseCalculator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setSafeZone");
}

export async function setDosingCheckInterval(newInterval: number): Promise<void> {
  // TODO: implement mutation logic for 'DoseCalculator.setDosingCheckInterval'.
  // Pre-conditions from spec:
  //   pre: newInterval > 0.0
  //   pre: newInterval <= 600.0
  //   pre: self.dosingCheckIntervalSeconds <> newInterval
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.dosingCheckIntervalSeconds = newInterval
  // After mutations, call validate*() on the affected DoseCalculator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setDosingCheckInterval");
}

export async function resetCalculator(): Promise<void> {
  // TODO: implement mutation logic for 'DoseCalculator.resetCalculator'.
  // Pre-conditions from spec:
  //   pre: self.lastComputedDose >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastComputedDose = 0.0
  //   post: self.lastCalculationTime = 0.0
  // After mutations, call validate*() on the affected DoseCalculator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetCalculator");
}

// ─── Events on HardwareFaultDetector ───

export async function runSelfTest(sensorStatus: boolean, pumpStatus: boolean, needleStatus: boolean, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'HardwareFaultDetector.runSelfTest'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: (timestamp - self.lastTestTime) <= self.selfTestIntervalSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorOk = sensorStatus
  //   post: self.pumpOk = pumpStatus
  //   post: self.needleOk = needleStatus
  //   post: self.lastTestTime = timestamp
  // After mutations, call validate*() on the affected HardwareFaultDetector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: runSelfTest");
}

export async function detectFault(reason: string): Promise<void> {
  // TODO: implement mutation logic for 'HardwareFaultDetector.detectFault'.
  // Pre-conditions from spec:
  //   pre: not self.faultDetected
  //   pre: reason <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = true
  //   post: self.faultReason = reason
  //   post: self.sensorOk = false
  //   post: self.pumpOk = false
  //   post: self.needleOk = false
  // After mutations, call validate*() on the affected HardwareFaultDetector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectFault");
}

export async function clearFault(): Promise<void> {
  // TODO: implement mutation logic for 'HardwareFaultDetector.clearFault'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = false
  //   post: self.faultReason = ''
  //   post: self.sensorOk = true
  //   post: self.pumpOk = true
  //   post: self.needleOk = true
  // After mutations, call validate*() on the affected HardwareFaultDetector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearFault");
}

export async function setSelfTestInterval(newInterval: number): Promise<void> {
  // TODO: implement mutation logic for 'HardwareFaultDetector.setSelfTestInterval'.
  // Pre-conditions from spec:
  //   pre: newInterval > 0.0
  //   pre: newInterval <= 60.0
  //   pre: self.selfTestIntervalSeconds <> newInterval
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.selfTestIntervalSeconds = newInterval
  // After mutations, call validate*() on the affected HardwareFaultDetector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setSelfTestInterval");
}

// ─── Events on InsulinPumpControlSystem ───

export async function deliverInsulin(sugar: number, rate: number): Promise<number> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.deliverInsulin'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: sugar >= 0.0
  //   pre: rate >= 0.0
  //   pre: sugar > self.safeZoneUpperBound
  //   pre: self.reservoirUnits > 0.0
  //   pre: rate > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result <= self.safeMaxDoseUnits
  //   post: result > 0.0
  //   post: self.reservoirUnits = self.reservoirUnits@pre - result
  //   post: self.currentBloodSugar = sugar
  //   post: self.bloodSugarRate = rate
  //   post: self.isOperating = true
  //   post: self.sensorOk = true
  //   post: self.pumpOk = true
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deliverInsulin");
}

export async function detectFault(faultReason: string): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.detectFault'.
  // Pre-conditions from spec:
  //   pre: not self.faultDetected
  //   pre: self.isOperating = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.deliveryStopped = true
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  //   post: self.sensorOk = false
  //   post: self.pumpOk = false
  //   post: self.needleOk = false
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectFault");
}

export async function soundAlarm(alarmType: string): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.soundAlarm'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected or self.reservoirUnits < 20.0
  //   pre: alarmType = 'HARDWARE_FAULT' or alarmType = 'LOW_RESERVOIR'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: if alarmType = 'HARDWARE_FAULT' then
            self.malfunctionAlarmActive = true
          else
            self.lowReservoirAlarmActive = true
          endif
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: soundAlarm");
}

export async function detectLowReservoir(threshold: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.detectLowReservoir'.
  // Pre-conditions from spec:
  //   pre: self.reservoirUnits < threshold
  //   pre: self.reservoirUnits >= 0.0
  //   pre: threshold > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lowReservoirAlarmActive = true
  //   post: self.alarmActive = true
  //   post: self.isOperating = true
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectLowReservoir");
}

export async function clearAlarms(): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.clearAlarms'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  //   post: self.lowReservoirAlarmActive = false
  //   post: self.malfunctionAlarmActive = false
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarms");
}

export async function resumeOperation(): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.resumeOperation'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected = true
  //   pre: self.isOperating = false
  //   pre: self.deliveryStopped = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = false
  //   post: self.isOperating = true
  //   post: self.deliveryStopped = false
  //   post: self.sensorOk = true
  //   post: self.pumpOk = true
  //   post: self.needleOk = true
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resumeOperation");
}

export async function setSafeMaxDose(newMax: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.setSafeMaxDose'.
  // Pre-conditions from spec:
  //   pre: newMax > 0.0
  //   pre: self.safeMaxDoseUnits <> newMax
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.safeMaxDoseUnits = newMax
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setSafeMaxDose");
}

export async function checkBloodSugar(sugar: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpControlSystem.checkBloodSugar'.
  // Pre-conditions from spec:
  //   pre: sugar >= 0.0
  //   pre: self.isOperating = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentBloodSugar = sugar
  // After mutations, call validate*() on the affected InsulinPumpControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: checkBloodSugar");
}

// ─── Events on InsulinPumpSystemFormalized ───

export async function rejectOverdose(requestedDose: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.rejectOverdose'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: requestedDose > self.safeMaxDoseUnits
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverdose");
}

export async function rejectDeliveryInSafeZone(sugar: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.rejectDeliveryInSafeZone'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: sugar <= self.safeZoneUpperBound
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDeliveryInSafeZone");
}

export async function rejectDeliveryOnFault(): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.rejectDeliveryOnFault'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected = true
  //   pre: self.isOperating = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDeliveryOnFault");
}

export async function enforceSelfTestInterval(lastTestTime: number, currentTime: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.enforceSelfTestInterval'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: (currentTime - lastTestTime) > self.selfTestIntervalSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.deliveryStopped = true
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceSelfTestInterval");
}

export async function enforceDosingInterval(lastDoseTime: number, currentTime: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.enforceDosingInterval'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: (currentTime - lastDoseTime) < self.dosingCheckIntervalSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.deliveryStopped = true
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceDosingInterval");
}

export async function enforceSafeMaxConfigured(): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.enforceSafeMaxConfigured'.
  // Pre-conditions from spec:
  //   pre: self.safeMaxDoseUnits <= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = false
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceSafeMaxConfigured");
}

// ─── Events on PumpActuator ───

export async function deliverInsulin(dose: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.deliverInsulin'.
  // Pre-conditions from spec:
  //   pre: dose > 0.0
  //   pre: dose <= 2.0
  //   pre: self.reservoirUnits >= dose
  //   pre: not self.delivering
  //   pre: not self.actuatorFaulty
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservoirUnits = self.reservoirUnits@pre - dose
  //   post: self.delivering = true
  //   post: self.lastDeliveredDose = dose
  //   post: self.lastDoseTime = timestamp
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deliverInsulin");
}

export async function stopDelivery(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.stopDelivery'.
  // Pre-conditions from spec:
  //   pre: self.delivering = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.delivering = false
  //   post: self.lastDeliveredDose = 0.0
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: stopDelivery");
}

export async function refillReservoir(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.refillReservoir'.
  // Pre-conditions from spec:
  //   pre: amount > 0.0
  //   pre: self.reservoirUnits + amount <= self.reservoirCapacityUnits
  //   pre: not self.delivering
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservoirUnits = self.reservoirUnits@pre + amount
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: refillReservoir");
}

export async function reportLowReservoir(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.reportLowReservoir'.
  // Pre-conditions from spec:
  //   pre: self.isLowReservoir = true
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reportLowReservoir");
}

export async function reportActuatorFault(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.reportActuatorFault'.
  // Pre-conditions from spec:
  //   pre: not self.actuatorFaulty
  //   pre: not self.delivering
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorFaulty = true
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reportActuatorFault");
}

export async function clearActuatorFault(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.clearActuatorFault'.
  // Pre-conditions from spec:
  //   pre: self.actuatorFaulty = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorFaulty = false
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearActuatorFault");
}
