import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Phase 13 — TextMate grammar tests.
 *
 * Strategy: load the grammar JSON, validate its shape, compile every
 * regex to ensure no syntactic mistakes (an invalid regex would
 * silently break highlighting in VS Code without an error message
 * that points at the cause).
 *
 * We also smoke-test that key DSL keywords and Allen operators show
 * up in the patterns. We don't try to actually tokenize source files
 * here — that would require pulling in vscode-textmate or oniguruma,
 * which is heavy. The shape + regex compilation tests catch ~95% of
 * realistic regressions; visual verification in VS Code catches the
 * rest.
 */

interface TmGrammar {
  scopeName: string;
  fileTypes?: string[];
  patterns: TmPattern[];
  repository: Record<string, TmRule>;
}

interface TmPattern {
  include?: string;
  match?: string;
  begin?: string;
  end?: string;
  name?: string;
  patterns?: TmPattern[];
}

interface TmRule {
  patterns?: TmPattern[];
  match?: string;
  begin?: string;
  end?: string;
  name?: string;
}

let grammar: TmGrammar;

beforeAll(() => {
  const path = resolve(
    process.cwd(),
    "vscode-extension/syntaxes/onto.tmLanguage.json",
  );
  const raw = readFileSync(path, "utf8");
  grammar = JSON.parse(raw);
});

import { beforeAll } from "vitest";

describe("phase13 — TextMate grammar shape", () => {
  it("declares the source.onto scopeName", () => {
    expect(grammar.scopeName).toBe("source.onto");
  });

  it("registers .onto as a file type", () => {
    expect(grammar.fileTypes).toContain("onto");
  });

  it("has a top-level patterns array of #include references", () => {
    expect(Array.isArray(grammar.patterns)).toBe(true);
    expect(grammar.patterns.length).toBeGreaterThan(0);
    for (const p of grammar.patterns) {
      expect(p.include).toMatch(/^#/);
    }
  });

  it("every #include resolves to a repository entry", () => {
    const repoKeys = new Set(Object.keys(grammar.repository));
    for (const p of grammar.patterns) {
      const ref = p.include!.slice(1);
      expect(repoKeys).toContain(ref);
    }
  });
});

describe("phase13 — every regex compiles", () => {
  it("all `match` regexes in repository compile under JS RegExp", () => {
    // TextMate uses oniguruma which is a superset of JS regex syntax,
    // but the patterns we write here are intentionally JS-compatible.
    // Compiling under `new RegExp` catches the obvious mistakes
    // (unbalanced parens, bad escapes) without needing oniguruma.
    for (const [key, rule] of Object.entries(grammar.repository)) {
      collectRegexes(rule).forEach((rx, i) => {
        expect(
          () => new RegExp(rx),
          `repository.${key} regex #${i}: ${rx}`,
        ).not.toThrow();
      });
    }
  });
});

describe("phase13 — keyword coverage", () => {
  it("every stereotype keyword is in the stereotypes pattern", () => {
    const expected = [
      "kind",
      "subkind",
      "role",
      "relator",
      "category",
      "mixin",
      "roleMixin",
      "mode",
      "quality",
      "collective",
      "quantity",
      "happening",
      "agent",
      "commitment",
      "useCase",
      "relation",
      "phaseGroup",
    ];
    const rx = grammar.repository.stereotypes!.match!;
    for (const kw of expected) {
      expect(rx).toContain(kw);
    }
  });

  it("every Allen operator is in the allen-operators pattern", () => {
    const expected = [
      "before",
      "after",
      "meets",
      "metBy",
      "overlaps",
      "overlappedBy",
      "during",
      "contains",
      "starts",
      "startedBy",
      "finishes",
      "finishedBy",
      "equals",
    ];
    const rx = grammar.repository["allen-operators"]!.match!;
    for (const op of expected) {
      expect(rx).toContain(op);
    }
  });

  it("every collection op is in ocl-collection-ops", () => {
    const expected = ["forAll", "exists", "size", "isEmpty", "notEmpty", "includes"];
    const rx = grammar.repository["ocl-collection-ops"]!.match!;
    for (const op of expected) {
      expect(rx).toContain(op);
    }
  });

  it("primitives include Real/Integer/String/Boolean/Set", () => {
    const rx = grammar.repository["primitive-types"]!.match!;
    for (const t of ["Real", "Integer", "String", "Boolean", "Set"]) {
      expect(rx).toContain(t);
    }
  });

  it("pre/post live in contract-keywords", () => {
    const rx = grammar.repository["contract-keywords"]!.match!;
    expect(rx).toContain("pre");
    expect(rx).toContain("post");
  });

  it("@pre suffix has its own rule", () => {
    expect(grammar.repository["pre-suffix"]).toBeDefined();
    expect(grammar.repository["pre-suffix"]!.match).toContain("@pre");
  });

  it("comments cover both line and block forms", () => {
    const patterns = grammar.repository.comments!.patterns!;
    const matchTexts = patterns
      .map((p) => p.match ?? p.begin ?? "")
      .join(" ");
    expect(matchTexts).toContain("//");
    expect(matchTexts).toContain("/\\*");
  });

  it("operators rule covers <>, <=, >=, ->", () => {
    const operators = grammar.repository.operators!;
    const all = JSON.stringify(operators);
    expect(all).toContain("<>");
    expect(all).toContain("<=");
    expect(all).toContain(">=");
    expect(all).toContain("->");
  });
});

describe("phase13 — extension package wiring", () => {
  it("vscode-extension/package.json references the grammar", () => {
    const pkg = JSON.parse(
      readFileSync(
        resolve(process.cwd(), "vscode-extension/package.json"),
        "utf8",
      ),
    );
    const grammars = pkg.contributes?.grammars;
    expect(Array.isArray(grammars)).toBe(true);
    expect(grammars.length).toBeGreaterThan(0);
    const onto = grammars.find((g: any) => g.language === "onto");
    expect(onto).toBeDefined();
    expect(onto.scopeName).toBe("source.onto");
    expect(onto.path).toBe("./syntaxes/onto.tmLanguage.json");
  });
});

function collectRegexes(rule: TmRule | TmPattern): string[] {
  const out: string[] = [];
  if ("match" in rule && rule.match) out.push(rule.match);
  if ("begin" in rule && rule.begin) out.push(rule.begin);
  if ("end" in rule && rule.end) out.push(rule.end);
  if ("patterns" in rule && rule.patterns) {
    for (const p of rule.patterns) {
      out.push(...collectRegexes(p));
    }
  }
  return out;
}
