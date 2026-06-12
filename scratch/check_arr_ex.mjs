import { parse, renderRust } from "../dist/index.js";
import { readFileSync } from "node:fs";
const src = readFileSync("examples/array_state_vector.onto", "utf8");
const { ast, errors } = parse(src);
console.log("errors:", errors.length, errors.slice(0, 3));
if (ast) {
  const { libRs } = renderRust(ast, { crateName: "x" });
  console.log("renderRust OK, libRs length:", libRs.length);
}
