// Re-run EKF live test after the auto-invariant feature, to see if
// Flash 2.5 produces a cleaner .onto (no defensive duplication of
// invariant clauses in posts).

import { runOntoIterationLoop, runCodegen } from "../dist/dashboard/realPipeline.js";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) { console.error("GEMINI_API_KEY required"); process.exit(1); }

const stepName = "AP_NavEKF3 Kalman Filter State";
const stepDescription = [
  "Extended Kalman Filter for inertial navigation. Maintains a state",
  "vector (attitude quaternion, velocity, position, IMU biases) and",
  "a state covariance matrix P. Two main operations:",
  "  - predict(dt, gyro, accel) — propagate state and grow covariance",
  "    by process noise; called at 400 Hz",
  "  - fuse_gps(pos, vel, posErrM, velErrM) — Kalman update against GPS",
  "Hard invariants:",
  "  - covariance diagonals must stay non-negative",
  "  - attitude quaternion magnitude must stay near 1.0",
  "  - dt > 0 always for predict; sensor errors >= 0 always for fuse",
  "  - state estimates must remain finite (no NaN/Inf propagation)",
  "Side effects: telemetry (EKF status messages), persistent log records.",
].join("\n");

const workspaceDir = join(tmpdir(), `live_ekf_v2_${Date.now()}`);
mkdirSync(workspaceDir, { recursive: true });

const onLog = (s) => console.log("[log]", s);

const t0 = Date.now();
const validation = await runOntoIterationLoop({
  modelName: "gemini-2.5-flash",
  apiKey, stepName, stepDescription,
  targetLang: "rust", workspaceDir,
  outputFileName: "AP_NavEKF3", onLog, maxIterations: 5,
});
const t1 = Date.now();

console.log("\n=== VALIDATION ===");
console.log("ok:", validation.ok, " iter:", validation.iterations,
  " tokens:", validation.tokensIn, "/", validation.tokensOut,
  " time:", ((t1 - t0) / 1000).toFixed(1) + "s");

if (validation.ok) {
  console.log("\n=== ACCEPTED .ONTO ===");
  console.log(validation.ontoText);
  const codegen = runCodegen(validation.ast, validation.ontoText, {
    modelName: "gemini-2.5-flash",
    apiKey, stepName, stepDescription,
    targetLang: "rust", workspaceDir,
    outputFileName: "AP_NavEKF3", onLog,
  });
  console.log("\ncargo check ok:", codegen.cargoCheck?.ok);
  console.log("rs:", codegen.libRsPath);
  console.log("onto:", codegen.ontoPath);
} else {
  console.log("\n=== DIAGNOSTICS ===");
  for (const d of validation.diagnostics) console.log(" ", d.code ?? d.stage, "-", d.message);
}
