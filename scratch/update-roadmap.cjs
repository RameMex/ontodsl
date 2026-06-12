const fs = require('fs');
const path = require('path');

const stateFile = path.join(process.cwd(), 'migration_state.json');
const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));

const newSteps = [
  {
    id: "step-12",
    name: "AP_HAL_ChibiOS I2C/SPI Drivers",
    file: "AP_HAL_ChibiOS.cpp",
    status: "pending",
    complexity: "high",
    description: "Migrate hardware abstraction layer for physical sensors (I2C/SPI bus reads and writes)."
  },
  {
    id: "step-13",
    name: "AP_Scheduler Real-Time Main Loop",
    file: "AP_Scheduler.cpp",
    status: "pending",
    complexity: "high",
    description: "Migrate the RTOS loop that guarantees the 400Hz real-time execution bounds for the PID and Motors tasks."
  },
  {
    id: "step-14",
    name: "GCS_MAVLink Telemetry Stream",
    file: "GCS_MAVLink.cpp",
    status: "pending",
    complexity: "medium",
    description: "Migrate MAVLink ground station telemetry and command processing protocols."
  },
  {
    id: "step-15",
    name: "RC_Channel Radio Inputs",
    file: "RC_Channel.cpp",
    status: "pending",
    complexity: "medium",
    description: "Migrate radio control inputs (SBUS/CRSF) and flight mode switch mapping."
  }
];

// Append only if not already present
for (const step of newSteps) {
  if (!state.projectRoadmap.find(s => s.id === step.id)) {
    state.projectRoadmap.push(step);
  }
}

// Reset status if it says 'success' but we have more steps
if (state.status === 'success') {
  state.status = 'idle';
  state.activeFile = 'Ready for Step 12: AP_HAL_ChibiOS';
}

fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
console.log("Appended Steps 12-15 to migration_state.json");
