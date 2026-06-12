import { parse } from "../dist/index.js";
import { renderRustProptestsForFile } from "../dist/codegen-rust/index.js";
import { readFileSync } from "node:fs";

for (const fp of [
  "examples/array_state_vector.onto",
  "examples/ardupilot_navekf3.onto",
  "examples/ardupilot_battmonitor.onto",
]) {
  const src = readFileSync(fp, "utf8");
  const { ast } = parse(src);
  const { proptestsRs, testCount } = renderRustProptestsForFile(ast);
  console.log(`\n${"═".repeat(60)}`);
  console.log(`${fp}: ${testCount} tests, ${proptestsRs.length} bytes`);
  console.log("═".repeat(60));
  if (proptestsRs.length > 0) {
    console.log(proptestsRs);
  }
}
