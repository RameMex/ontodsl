// Batch-migrate 5 more ArduPilot components and collect findings.
// Each component gets up to 5 iterations of the AI ↔ ontodls loop;
// we record iter count, tokens, cargo-check pass/fail, and notable
// shape decisions Gemini made (Array vs flat, Option presence, etc.).

import { runOntoIterationLoop, runCodegen } from "../dist/dashboard/realPipeline.js";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) { console.error("GEMINI_API_KEY required"); process.exit(1); }

const targets = [
  {
    stepName: "AP_GPS GPS sensor frontend",
    stepDescription: [
      "Generic GPS frontend that fuses readings from up to 3 backend",
      "drivers (uBlox, NMEA, SBF). Maintains: latest fix (lat/lon/alt),",
      "ground speed, ground course, HDOP/VDOP, fix type (0=NoFix,",
      "1=NoFix2D, 2=2D, 3=3D, 4=DGPS, 5=Float, 6=RTK), satellite count,",
      "time of last fix (microseconds since boot).",
      "Operations:",
      "  - update() — poll backends, pick highest-quality fix",
      "  - location() — query current fix",
      "  - status() — return fix type",
      "Invariants:",
      "  - lat in [-90, 90], lon in [-180, 180]",
      "  - HDOP/VDOP >= 0 when fix valid",
      "  - satellite count >= 0",
      "  - all numeric outputs finite",
      "Side effects: HardwareRead, Telemetry",
    ].join("\n"),
  },
  {
    stepName: "AP_Compass magnetometer driver",
    stepDescription: [
      "Magnetometer subsystem managing up to 3 compass instances.",
      "State per instance: 3-axis magnetic field (uT), offsets (uT),",
      "scaling factors (dimensionless), declination (rad), health flag,",
      "external/internal flag, instance ID, primary flag.",
      "Operations:",
      "  - read() — poll a compass instance",
      "  - calibrate() — start offset+scale calibration",
      "  - heading() — compute heading from primary compass + AHRS attitude",
      "Invariants:",
      "  - offsets and scales finite",
      "  - declination in [-pi, pi]",
      "  - at most one primary",
      "  - read field components finite",
      "Side effects: HardwareRead, NVRAMRead (calibration), Telemetry",
    ].join("\n"),
  },
  {
    stepName: "AP_BattMonitor battery monitor",
    stepDescription: [
      "Battery monitor managing N battery instances. Per instance:",
      "voltage (V), current (A), consumed mAh, consumed Wh, capacity",
      "(mAh), cell count, low/critical/failsafe thresholds, health",
      "flag, time of last reading (us).",
      "Operations:",
      "  - read(instance) — sample voltage + current",
      "  - update() — integrate consumed mAh/Wh over dt",
      "  - has_failsafed() — boolean: any instance below critical?",
      "Invariants:",
      "  - voltage >= 0",
      "  - consumed_mah >= 0 and <= capacity_mah (when capacity > 0)",
      "  - all readings finite",
      "  - critical < low < nominal (well-formed thresholds)",
      "Side effects: HardwareRead, Telemetry, LogRecord",
    ].join("\n"),
  },
  {
    stepName: "AP_Baro barometer",
    stepDescription: [
      "Pressure-altitude subsystem. Manages 1-3 baro instances.",
      "Per instance: pressure (Pa), temperature (C), altitude (m),",
      "climb rate (m/s), ground pressure reference (Pa), ground",
      "temperature reference (C), health flag.",
      "Operations:",
      "  - update() — read all instances, derive altitude from pressure",
      "  - calibrate() — capture ground reference",
      "  - get_altitude() — primary instance altitude",
      "Invariants:",
      "  - pressure > 0 when healthy",
      "  - temperature finite",
      "  - altitude finite",
      "  - climb rate finite",
      "Side effects: HardwareRead, Telemetry",
    ].join("\n"),
  },
  {
    stepName: "AP_RangeFinder distance sensor",
    stepDescription: [
      "Range finder (lidar/sonar/IR) subsystem with up to 10 backends.",
      "Per backend: orientation enum (Up/Down/Forward/…), distance (cm),",
      "signal quality (0..100), status (0=NotConnected, 1=NoData,",
      "2=OutOfRangeLow, 3=OutOfRangeHigh, 4=Good), min/max range (cm).",
      "Operations:",
      "  - update() — poll all backends",
      "  - distance(orientation) — query primary backend for that",
      "    orientation",
      "  - has_data() — boolean for valid recent reading",
      "Invariants:",
      "  - distance_cm finite and >= 0",
      "  - signal_quality in [0, 100]",
      "  - min_range_cm <= max_range_cm",
      "Side effects: HardwareRead, Telemetry",
    ].join("\n"),
  },
];

const workspaceDir = join(tmpdir(), `batch_ardupilot_${Date.now()}`);
mkdirSync(workspaceDir, { recursive: true });

const results = [];
const onLog = (s) => { /* quiet; rely on summary */ };

for (const target of targets) {
  console.log(`\n=== ${target.stepName} ===`);
  const t0 = Date.now();
  const v = await runOntoIterationLoop({
    modelName: "gemini-2.5-flash",
    apiKey, stepName: target.stepName, stepDescription: target.stepDescription,
    targetLang: "rust", workspaceDir,
    outputFileName: target.stepName.split(" ")[0].replace(/[^A-Za-z0-9_]/g, "_"),
    onLog, maxIterations: 5,
  });
  let cargoOk = null, libRsBytes = null, ontoBytes = null;
  let firstDiag = null;
  if (v.ok) {
    const c = runCodegen(v.ast, v.ontoText, {
      modelName: "gemini-2.5-flash",
      apiKey, stepName: target.stepName, stepDescription: target.stepDescription,
      targetLang: "rust", workspaceDir,
      outputFileName: target.stepName.split(" ")[0].replace(/[^A-Za-z0-9_]/g, "_"),
      onLog,
    });
    cargoOk = c.cargoCheck?.ok ?? false;
    libRsBytes = c.libRs?.length ?? 0;
    ontoBytes = v.ontoText.length;
    if (!cargoOk) {
      firstDiag = (c.cargoCheck?.stderr ?? "").split("\n").find(l => l.includes("error")) ?? null;
    }
  } else {
    firstDiag = v.diagnostics?.[0]?.message ?? null;
  }
  const t1 = Date.now();
  const usesArray = v.ok && /Array<.*>/.test(v.ontoText);
  const usesMatrix = v.ok && /Array<\s*Array</.test(v.ontoText);
  const usesOption = v.ok && /Option<.*>/.test(v.ontoText);
  const usesSet = v.ok && /Set</.test(v.ontoText);
  results.push({
    name: target.stepName,
    ok: v.ok,
    iter: v.iterations,
    inT: v.tokensIn,
    outT: v.tokensOut,
    timeS: ((t1 - t0) / 1000).toFixed(1),
    cargoOk,
    bytes: ontoBytes,
    usesArray, usesMatrix, usesOption, usesSet,
    firstDiag,
  });
  console.log(JSON.stringify(results[results.length - 1], null, 2));
}

console.log("\n\n=== SUMMARY ===");
console.table(results.map(r => ({
  comp: r.name.split(" ")[0],
  valid: r.ok, iter: r.iter,
  cargo: r.cargoOk,
  bytes: r.bytes,
  out_tok: r.outT,
  time: r.timeS,
  arr: r.usesArray ? "Y" : "-",
  mat: r.usesMatrix ? "Y" : "-",
  opt: r.usesOption ? "Y" : "-",
  set: r.usesSet ? "Y" : "-",
})));
console.log("\nWorkspace dir:", workspaceDir);
writeFileSync(join(workspaceDir, "_summary.json"), JSON.stringify(results, null, 2));
