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

import type { SourceLocation } from "../ast/nodes.js";

/** Every OCL AST node carries its source location within the OCL expression. */
export interface OclNode {
  readonly loc: SourceLocation;
}

// ─── Expression union ────────────────────────────────────────────────────

export type OclExpr =
  | OclLiteral
  | OclVarRef
  | OclNav
  | OclCall
  | OclUnary
  | OclBinary
  | OclIf
  | OclSize
  | OclIsEmpty
  | OclNotEmpty
  | OclIncludes
  | OclForAll
  | OclExists
  | OclSelect
  | OclReject
  | OclCollect
  | OclLet;


// ─── Leaf nodes ──────────────────────────────────────────────────────────

/**
 * A literal value: integer, real, boolean, string, or null.
 *   42    → { litKind:"Integer", value:42 }
 *   3.14  → { litKind:"Real",    value:3.14 }
 *   true  → { litKind:"Boolean", value:true }
 *   "hi"  → { litKind:"String",  value:"hi" }
 *   null  → { litKind:"Null",    value:null }
 */
export interface OclLiteral extends OclNode {
  readonly kind: "OclLiteral";
  readonly litKind: "Integer" | "Real" | "Boolean" | "String" | "Null";
  readonly value: number | boolean | string | null;
}

/**
 * A bare identifier reference: `self`, a parameter name, or a local name.
 * Does NOT include dots — navigation is OclNav.
 */
export interface OclVarRef extends OclNode {
  readonly kind: "OclVarRef";
  readonly name: string;
}

/**
 * Property navigation: `object.property` or `object.property@pre`.
 * Examples:
 *   self.chargeLevel        → OclNav(OclVarRef("self"), "chargeLevel", false)
 *   self.chargeLevel@pre    → OclNav(OclVarRef("self"), "chargeLevel", true)
 *   newBattery.chargeLevel  → OclNav(OclVarRef("newBattery"), "chargeLevel", false)
 */
export interface OclNav extends OclNode {
  readonly kind: "OclNav";
  readonly object: OclExpr;
  readonly property: string;
  /** True when followed by `@pre` — refers to the value at the pre-state. */
  readonly isPre: boolean;
}

/**
 * Method call on an object.
 *
 * Phase 4 introduced this as zero-arity only (query calls like
 * `self.q()`). Phase 6.5 extends it to accept an optional single
 * argument so Allen temporal operators — `a.before(b)`, `a.meets(b)`,
 * `a.during(b)` — fit the same shape without a new AST variant.
 *
 * The typechecker dispatches on `method` to decide whether the call is:
 *   - a query invocation (arg must be absent)
 *   - an Allen temporal relation (arg must be present and typed as a
 *     Happening ref, and the receiver must be a Happening ref)
 *   - something else (rejected as an unknown method)
 */
export interface OclCall extends OclNode {
  readonly kind: "OclCall";
  readonly object: OclExpr;
  readonly method: string;
  /**
   * Optional single argument. Present for Allen operators and any
   * future binary methods; absent for Phase 4 zero-arity query calls.
   */
  readonly argument: OclExpr | null;
}

// ─── Compound nodes ──────────────────────────────────────────────────────

/** Unary operator: `not expr` or unary minus `-expr`. */
export interface OclUnary extends OclNode {
  readonly kind: "OclUnary";
  readonly op: "not" | "-";
  readonly operand: OclExpr;
}

/** Binary operator. */
export interface OclBinary extends OclNode {
  readonly kind: "OclBinary";
  readonly op: OclBinOp;
  readonly left: OclExpr;
  readonly right: OclExpr;
}

/** All supported binary operators. */
export type OclBinOp =
  | "="
  | "<>"
  | "<"
  | "<="
  | ">"
  | ">="
  | "+"
  | "-"
  | "*"
  | "/"
  | "and"
  | "or";

/** `if cond then thenExpr else elseExpr endif` */
export interface OclIf extends OclNode {
  readonly kind: "OclIf";
  readonly cond: OclExpr;
  readonly then: OclExpr;
  readonly else_: OclExpr;
}

// ─── Collection operations (Phase 5) ─────────────────────────────────────
//
// All six share the shape `source -> op(...)` where `source` is an
// expression that must have static type `Set<T>` for some T. The
// typechecker enforces that; the AST itself is shape-only.
//
// Phase 5 does not model Bag or Sequence — `source` is always a Set and
// the iteration operators treat it as an unordered collection.

/** `source->size()` — cardinality, returns Integer. */
export interface OclSize extends OclNode {
  readonly kind: "OclSize";
  readonly source: OclExpr;
}

/** `source->isEmpty()` — returns Boolean (true iff size == 0). */
export interface OclIsEmpty extends OclNode {
  readonly kind: "OclIsEmpty";
  readonly source: OclExpr;
}

/** `source->notEmpty()` — returns Boolean (true iff size > 0). */
export interface OclNotEmpty extends OclNode {
  readonly kind: "OclNotEmpty";
  readonly source: OclExpr;
}

/** `source->includes(elem)` — membership test; returns Boolean. */
export interface OclIncludes extends OclNode {
  readonly kind: "OclIncludes";
  readonly source: OclExpr;
  readonly element: OclExpr;
}

/**
 * `source->forAll(x | body)` — universal predicate over the set.
 *
 * The bound variable `x` has the element type of `source`; it shadows
 * any same-named outer variable within `body`. The body must be Boolean.
 */
export interface OclForAll extends OclNode {
  readonly kind: "OclForAll";
  readonly source: OclExpr;
  readonly variable: string;
  readonly body: OclExpr;
}

/** `source->exists(x | body)` — existential predicate. Same shape as forAll. */
export interface OclExists extends OclNode {
  readonly kind: "OclExists";
  readonly source: OclExpr;
  readonly variable: string;
  readonly body: OclExpr;
}

/** `source->select(x | body)` — filter collection. */
export interface OclSelect extends OclNode {
  readonly kind: "OclSelect";
  readonly source: OclExpr;
  readonly variable: string;
  readonly body: OclExpr;
}

/** `source->reject(x | body)` — reject elements of collection. */
export interface OclReject extends OclNode {
  readonly kind: "OclReject";
  readonly source: OclExpr;
  readonly variable: string;
  readonly body: OclExpr;
}

/** `source->collect(x | body)` — transform collection. */
export interface OclCollect extends OclNode {
  readonly kind: "OclCollect";
  readonly source: OclExpr;
  readonly variable: string;
  readonly body: OclExpr;
}

/** `let x = init in body` — local binding. */
export interface OclLet extends OclNode {
  readonly kind: "OclLet";
  readonly variable: string;
  readonly init: OclExpr;
  readonly body: OclExpr;
}

