// Re-codegen the .onto files that Flash 2.5 produced last batch
// but that ontodls then failed to compile. After the two bug fixes
// (branded-ID inner type + null-elision in lambdas), they should now
// pass cargo check WITHOUT regenerating from the AI — same source,
// just fixed codegen.

import { parse, renderRust } from "../dist/index.js";
import { execSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const sourcesDir = "C:/Users/RENEME~1/AppData/Local/Temp/batch_ardupilot_1779307621818";
const components = ["AP_BattMonitor", "AP_Baro", "AP_RangeFinder"];

for (const comp of components) {
  const fp = join(sourcesDir, `${comp}.onto`);
  if (!existsSync(fp)) {
    console.log(`SKIP ${comp} — .onto missing`);
    continue;
  }
  const src = readFileSync(fp, "utf8");
  const { ast, errors } = parse(src);
  if (errors.length > 0) {
    console.log(`${comp}: parse errors:`, errors.length);
    continue;
  }
  const crateName = comp.toLowerCase().replace(/[^a-z0-9_]/g, "_");
  const { cargoToml, libRs } = renderRust(ast, { crateName });

  const dir = mkdtempSync(join(tmpdir(), `rerun_${crateName}_`));
  try {
    writeFileSync(join(dir, "Cargo.toml"), cargoToml, "utf8");
    mkdirSync(join(dir, "src"), { recursive: true });
    writeFileSync(join(dir, "src", "lib.rs"), libRs, "utf8");
    try {
      execSync("cargo check --lib --message-format=short", {
        cwd: dir,
        stdio: ["ignore", "pipe", "pipe"],
      });
      console.log(`${comp}: ✓ cargo check PASSED (${libRs.length} bytes)`);
    } catch (err) {
      const stderr = (err.stderr ?? Buffer.from("")).toString();
      const firstError = stderr
        .split("\n")
        .find((l) => l.includes("error[") || l.includes("error:"));
      console.log(`${comp}: ✗ cargo check FAILED — ${firstError ?? "unknown"}`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
