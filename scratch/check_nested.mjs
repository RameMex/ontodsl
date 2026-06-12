import { parse, renderRust } from "../dist/index.js";
const src = `schema "onto/0.1";
namespace t;
kind Cov {
  identity: id;
  property id: String;
  property m: Array<Array<Real, 4>, 4>;
  invariants {
    self.m->forAll(row | row->forAll(x | x >= 0.0));
  }
}
`;
const { ast, errors } = parse(src);
console.log("errors:", errors.length);
const { libRs } = renderRust(ast, { crateName: "tt" });
const idx = libRs.indexOf("violate");
console.log(libRs.substring(idx - 200, idx + 400));
