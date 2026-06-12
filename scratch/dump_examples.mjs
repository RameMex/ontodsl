import { parse, renderRust } from "../dist/index.js";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const out = "scratch/share";
mkdirSync(out, { recursive: true });

const targets = [
  ["examples/array_state_vector.onto", "array_state_vector"],
  ["examples/ardupilot_navekf3.onto",  "ap_navekf3"],
  ["examples/drone.onto",              "drone"],
];

for (const [src, name] of targets) {
  const ontoText = readFileSync(src, "utf8");
  const { ast, errors } = parse(ontoText);
  if (errors.length > 0) {
    console.log(`${name}: parse errors`, errors);
    continue;
  }
  const { libRs } = renderRust(ast, { crateName: name });
  writeFileSync(join(out, `${name}.onto`), ontoText);
  writeFileSync(join(out, `${name}.rs`), libRs);
  console.log(`${name}: ${ontoText.length} bytes .onto → ${libRs.length} bytes .rs`);
}
