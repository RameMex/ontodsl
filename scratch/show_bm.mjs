import { parse, renderRust } from "../dist/index.js";
import { readFileSync } from "node:fs";
const src = readFileSync("C:/Users/RENEME~1/AppData/Local/Temp/batch_ardupilot_1779307621818/AP_BattMonitor.onto", "utf8");
const { ast } = parse(src);
const { libRs } = renderRust(ast, { crateName: "x" });
const lines = libRs.split("\n");
console.log(lines.slice(188, 200).join("\n"));
