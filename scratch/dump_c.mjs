import { parse } from "../dist/index.js";
import { renderC } from "../dist/codegen-c/index.js";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

mkdirSync("scratch/share-c", { recursive: true });

for (const fp of [
  "examples/array_state_vector.onto",
  "examples/ardupilot_navekf3.onto",
]) {
  const name = fp.split("/").pop().replace(".onto", "");
  const src = readFileSync(fp, "utf8");
  const { ast, errors } = parse(src);
  if (!ast) { console.error(`${fp}: parse failed`, errors); continue; }
  const { headerH, sourceC } = renderC(ast, { module: name });
  writeFileSync(`scratch/share-c/${name}.h`, headerH);
  writeFileSync(`scratch/share-c/${name}.c`, sourceC);
  console.log(`${name}: ${headerH.length} bytes .h + ${sourceC.length} bytes .c`);
}
