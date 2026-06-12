/**
 * Public visualization entry point.
 *
 * Usage:
 *   const { ast } = parse(source);
 *   const diagram = renderMermaid(ast, { kind: "types" });
 *   // ... pipe into markdown fenced with ```mermaid ... ```
 *
 * The `renderMermaid` dispatcher exists so callers can parameterize
 * the output with a single function. The individual renderers
 * (renderTypeDiagram / renderRelationDiagram / renderUseCaseDiagrams)
 * are also exported for callers that know the kind up front and
 * want the narrower type signature.
 */
import { renderTypeDiagram } from "./typeDiagram.js";
import { renderRelationDiagram } from "./relationDiagram.js";
import { renderUseCaseDiagrams } from "./useCaseDiagram.js";
export function renderMermaid(file, options) {
    switch (options.kind) {
        case "types":
            return renderTypeDiagram(file);
        case "relations":
            return renderRelationDiagram(file);
        case "usecases":
            return renderUseCaseDiagrams(file);
    }
}
export { renderTypeDiagram, renderRelationDiagram, renderUseCaseDiagrams, };
//# sourceMappingURL=index.js.map