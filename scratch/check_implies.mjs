import { parse, renderRust } from "../dist/index.js";
const src = `schema "onto/0.1";
namespace t;
kind Y {
  identity: id;
  property id: String;
  property a: Boolean;
  property b: Boolean;
  property c: Boolean;
  invariants {
    self.a and self.b implies self.c;
  }
}
`;
const { ast, errors } = parse(src);
console.log("errors:", errors.length, errors);
if (ast) {
  const { libRs } = renderRust(ast, { crateName: "y" });
  const idx = libRs.indexOf("invariant violated");
  console.log("...", libRs.substring(idx - 300, idx + 200));
}
