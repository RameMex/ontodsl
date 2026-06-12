/**
 * Chevrotain LL(k) grammar for the OCL sub-parser (Phase 4).
 *
 * Grammar (operator precedence, low to high):
 *
 *   expr         ::= orExpr
 *   orExpr       ::= andExpr ('or' andExpr)*
 *   andExpr      ::= notExpr ('and' notExpr)*
 *   notExpr      ::= 'not' notExpr | compareExpr
 *   compareExpr  ::= addExpr (('='|'<>'|'<'|'<='|'>'|'>=') addExpr)?
 *   addExpr      ::= mulExpr (('+' | '-') mulExpr)*
 *   mulExpr      ::= unaryExpr (('*' | '/') unaryExpr)*
 *   unaryExpr    ::= '-' unaryExpr | postfixExpr
 *   postfixExpr  ::= primaryExpr ('.' Identifier ('@pre')? | '.' Identifier '()')*
 *   primaryExpr  ::= '(' expr ')'
 *                  | 'if' expr 'then' expr 'else' expr 'endif'
 *                  | 'null' | 'true' | 'false' | 'self'
 *                  | RealLiteral | IntegerLiteral | StringLiteral
 *                  | Identifier
 */
import { CstParser, type CstNode } from "chevrotain";
import {
  AndKw,
  Arrow,
  AtPre,
  Dot,
  ElseKw,
  EndifKw,
  Eq,
  FalseKw,
  Gt,
  Gte,
  Identifier,
  IfKw,
  ImpliesKw,
  IntegerLiteral,
  LParen,
  Lt,
  Lte,
  Minus,
  Neq,
  NotKw,
  NullKw,
  LetKw,
  InKw,
  oclTokens,
  OrKw,
  Pipe,
  Plus,
  RealLiteral,
  RParen,
  SelfKw,
  Slash,
  Star,
  StringLiteral,
  ThenKw,
  TrueKw,
} from "./lexer.js";

export class OclParser extends CstParser {
  constructor() {
    super(oclTokens, {
      recoveryEnabled: false,
      nodeLocationTracking: "full",
    });
    this.performSelfAnalysis();
  }

  public expr = this.RULE("expr", () => {
    this.OR([
      {
        ALT: () => {
          this.CONSUME(LetKw);
          this.CONSUME(Identifier, { LABEL: "varName" });
          this.CONSUME(Eq);
          this.SUBRULE(this.expr, { LABEL: "initExpr" });
          this.CONSUME(InKw);
          this.SUBRULE2(this.expr, { LABEL: "bodyExpr" });
        },
      },
      { ALT: () => this.SUBRULE(this.impliesExpr) },
    ]);
  });

  /**
   * `implies` — material implication, lowest-precedence boolean.
   * Right-associative per OCL spec: `a implies b implies c` parses
   * as `a implies (b implies c)`. We use MANY here and let the
   * builder fold right-associatively from the CST.
   *
   * Desugared in the builder to `(not lhs) or rhs` so downstream
   * passes (codegen, Z3, type-checker) never see an `implies` node.
   */
  private impliesExpr = this.RULE("impliesExpr", () => {
    this.SUBRULE(this.orExpr, { LABEL: "lhs" });
    this.MANY(() => {
      this.CONSUME(ImpliesKw, { LABEL: "op" });
      this.SUBRULE2(this.orExpr, { LABEL: "rhs" });
    });
  });

  private orExpr = this.RULE("orExpr", () => {
    this.SUBRULE(this.andExpr, { LABEL: "lhs" });
    this.MANY(() => {
      this.CONSUME(OrKw, { LABEL: "op" });
      this.SUBRULE2(this.andExpr, { LABEL: "rhs" });
    });
  });

  private andExpr = this.RULE("andExpr", () => {
    this.SUBRULE(this.notExpr, { LABEL: "lhs" });
    this.MANY(() => {
      this.CONSUME(AndKw, { LABEL: "op" });
      this.SUBRULE2(this.notExpr, { LABEL: "rhs" });
    });
  });

  private notExpr = this.RULE("notExpr", () => {
    this.OR([
      {
        ALT: () => {
          this.CONSUME(NotKw, { LABEL: "op" });
          this.SUBRULE(this.notExpr, { LABEL: "operand" });
        },
      },
      { ALT: () => this.SUBRULE(this.compareExpr) },
    ]);
  });

  private compareExpr = this.RULE("compareExpr", () => {
    this.SUBRULE(this.addExpr, { LABEL: "lhs" });
    this.OPTION(() => {
      this.OR([
        { ALT: () => this.CONSUME(Lte, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Gte, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Neq, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Lt, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Gt, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Eq, { LABEL: "op" }) },
      ]);
      this.SUBRULE2(this.addExpr, { LABEL: "rhs" });
    });
  });

  private addExpr = this.RULE("addExpr", () => {
    this.SUBRULE(this.mulExpr, { LABEL: "lhs" });
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Plus, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Minus, { LABEL: "op" }) },
      ]);
      this.SUBRULE2(this.mulExpr, { LABEL: "rhs" });
    });
  });

  private mulExpr = this.RULE("mulExpr", () => {
    this.SUBRULE(this.unaryExpr, { LABEL: "lhs" });
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Star, { LABEL: "op" }) },
        { ALT: () => this.CONSUME(Slash, { LABEL: "op" }) },
      ]);
      this.SUBRULE2(this.unaryExpr, { LABEL: "rhs" });
    });
  });

  private unaryExpr = this.RULE("unaryExpr", () => {
    this.OR([
      {
        ALT: () => {
          this.CONSUME(Minus, { LABEL: "op" });
          this.SUBRULE(this.unaryExpr, { LABEL: "operand" });
        },
      },
      { ALT: () => this.SUBRULE(this.postfixExpr) },
    ]);
  });

  private postfixExpr = this.RULE("postfixExpr", () => {
    this.SUBRULE(this.primaryExpr, { LABEL: "base" });
    this.MANY(() =>
      this.OR([
        { ALT: () => this.SUBRULE(this.postfixStep) },
        { ALT: () => this.SUBRULE(this.arrowStep) },
      ]),
    );
  });

  /**
   * One step after a base primary: `.member`, `.member()`, or `.member@pre`.
   *
   * This MUST be a separate rule (not inlined with MANY) so that each step
   * gets its own CST node. Without that, Chevrotain aggregates every
   * `callLParen` / `atPre` across ALL steps into a single flat array on
   * the parent node, and the builder can't tell which step owns which
   * suffix. A chain like `self.q().x@pre` would otherwise produce
   * callLParens = [lparen_for_q] and atPres = [atpre_for_x] both at
   * index 0, and the builder would misattribute them.
   */
  private postfixStep = this.RULE("postfixStep", () => {
    this.CONSUME(Dot);
    this.CONSUME(Identifier, { LABEL: "member" });
    this.OR([
      {
        ALT: () => {
          this.CONSUME(LParen, { LABEL: "callLParen" });
          // Phase 6.5: Allen temporal operators are binary — `a.before(b)`.
          // Optionally consume a single expression as the argument; if
          // absent we stay in the zero-arg call shape from Phase 4.
          //
          // Why inside the same `LParen … RParen` alternative: zero-arg
          // and one-arg calls share the delimiter shape, so folding
          // them into one alternative keeps the grammar LL(1) in the
          // GATE-free sense (Chevrotain picks on the first token — the
          // LParen — and we disambiguate structure by whether an expr
          // follows).
          this.OPTION(() => this.SUBRULE(this.expr, { LABEL: "callArg" }));
          this.CONSUME(RParen, { LABEL: "callRParen" });
        },
      },
      { ALT: () => this.CONSUME(AtPre, { LABEL: "atPre" }) },
      { ALT: () => { /* plain navigation — no suffix */ } },
    ]);
  });

  /**
   * Collection step: `->method()`, `->method(arg)`, or `->method(x | body)`.
   *
   *   arrowStep ::= '->' Identifier '(' arrowArgs? ')'
   *   arrowArgs ::= Identifier '|' expr   — iterator lambda
   *             | expr                    — single-argument (e.g. includes)
   *
   * The grammar accepts any method name; the builder recognises a small
   * fixed set (`size`, `isEmpty`, `notEmpty`, `includes`, `forAll`,
   * `exists`) and rejects unknown methods. This keeps the grammar simple
   * and lets us add new iterator operators later without touching it.
   *
   * The OR inside `arrowArgs` uses a GATE that peeks at LA(2) to
   * disambiguate `x | body` from a bare expression: if the second token
   * is a pipe we're in lambda mode.
   */
  private arrowStep = this.RULE("arrowStep", () => {
    this.CONSUME(Arrow);
    this.CONSUME(Identifier, { LABEL: "method" });
    this.CONSUME(LParen);
    this.OPTION(() => this.SUBRULE(this.arrowArgs));
    this.CONSUME(RParen);
  });

  private arrowArgs = this.RULE("arrowArgs", () => {
    this.OR([
      {
        GATE: () => this.LA(2).tokenType === Pipe,
        ALT: () => {
          this.CONSUME(Identifier, { LABEL: "lambdaVar" });
          this.CONSUME(Pipe);
          this.SUBRULE(this.expr, { LABEL: "lambdaBody" });
        },
      },
      { ALT: () => this.SUBRULE2(this.expr, { LABEL: "oneArg" }) },
    ]);
  });

  private primaryExpr = this.RULE("primaryExpr", () => {
    this.OR([
      // Grouped expression
      {
        ALT: () => {
          this.CONSUME(LParen);
          this.SUBRULE(this.expr, { LABEL: "inner" });
          this.CONSUME(RParen);
        },
      },
      // if/then/else/endif
      {
        ALT: () => {
          this.CONSUME(IfKw);
          this.SUBRULE2(this.expr, { LABEL: "cond" });
          this.CONSUME(ThenKw);
          this.SUBRULE3(this.expr, { LABEL: "thenExpr" });
          this.CONSUME(ElseKw);
          this.SUBRULE4(this.expr, { LABEL: "elseExpr" });
          this.CONSUME(EndifKw);
        },
      },
      // Keywords / literals
      { ALT: () => this.CONSUME(NullKw, { LABEL: "null" }) },
      { ALT: () => this.CONSUME(TrueKw, { LABEL: "true" }) },
      { ALT: () => this.CONSUME(FalseKw, { LABEL: "false" }) },
      { ALT: () => this.CONSUME(SelfKw, { LABEL: "self" }) },
      { ALT: () => this.CONSUME(RealLiteral, { LABEL: "real" }) },
      { ALT: () => this.CONSUME(IntegerLiteral, { LABEL: "integer" }) },
      { ALT: () => this.CONSUME(StringLiteral, { LABEL: "string" }) },
      // Identifier (parameter name or other reference)
      { ALT: () => this.CONSUME(Identifier, { LABEL: "ident" }) },
    ]);
  });
}

export const oclParser = new OclParser();
export type OclExprCst = CstNode;
