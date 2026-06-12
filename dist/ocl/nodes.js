/**
 * OCL Expression AST nodes — Phase 4.
 *
 * These replace the raw `string` stored in OclClause/InvariantDecl.
 * The grammar covers the subset of OCL needed for DbC in the DSL:
 *   - Arithmetic and comparison operators
 *   - Boolean connectives
 *   - Property navigation (self.prop, param.prop, self.prop@pre)
 *   - Zero-arity query calls (self.isCritical())
 *   - if/then/else/endif
 *   - Literals: Integer, Real, Boolean, String, null
 */
export {};
//# sourceMappingURL=nodes.js.map