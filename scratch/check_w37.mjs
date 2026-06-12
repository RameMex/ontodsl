import { parse } from "../dist/index.js";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

for (const f of readdirSync("examples").sort()) {
  if (!f.endsWith(".onto")) continue;
  const src = readFileSync(join("examples", f), "utf8");
  const { errors } = parse(src);
  const w37 = errors.filter(e => e.code === "W37");
  if (w37.length > 0) {
    console.log(`\n${f}:`);
    for (const w of w37) console.log(`  ${w.message}`);
  }
}
