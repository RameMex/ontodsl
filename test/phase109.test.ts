import { describe, it, expect } from "vitest";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function generate(body: string): string {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  return renderTypeScript(ast!);
}

function compileAndEval(source: string): Record<string, unknown> {
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      strict: false,
    },
  });
  const moduleObj: { exports: Record<string, unknown> } = { exports: {} };
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function("module", "exports", transpiled.outputText);
  fn(moduleObj, moduleObj.exports);
  return moduleObj.exports;
}

function assertCompiles(source: string): void {
  const { diagnostics } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      strict: true,
    },
    reportDiagnostics: true,
  });
  if (diagnostics && diagnostics.length > 0) {
    const formatted = diagnostics
      .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"))
      .join("\n---\n");
    throw new Error(`generated code has diagnostics:\n${formatted}`);
  }
}

const SRC = `
  kind Account {
    identity: id;
    property id: String;
    property balance: Real;
    event deposit(amount: Real) {
      pre: amount > 0;
      post: self.balance = self.balance@pre + amount;
      modifies: self.balance;
    }
  }
`;

describe("phase10.9 — async event wrappers", () => {
  it("emits both sync and async wrapper variants", () => {
    const out = generate(SRC);
    expect(out).toMatch(/export function wrapAccountDeposit\(/);
    expect(out).toMatch(/export function wrapAccountDepositAsync\(/);
    expect(out).toMatch(/export type AccountDepositImpl =/);
    expect(out).toMatch(/export type AccountDepositAsyncImpl =/);
  });

  it("async impl type returns Promise<{ self; modified }>", () => {
    const out = generate(SRC);
    expect(out).toMatch(
      /AccountDepositAsyncImpl = \(self: Account, amount: number\) => Promise<\{/,
    );
  });

  it("async wrapper returns Promise<Owner> and uses await", () => {
    const out = generate(SRC);
    expect(out).toMatch(/wrapAccountDepositAsync.*=> Promise<Account>/);
    expect(out).toMatch(/return async \(self, amount\) =>/);
    expect(out).toMatch(/const __result = await impl/);
  });

  it("generated code compiles strict", () => {
    assertCompiles(generate(SRC));
  });

  it("async happy path resolves to the post-state", async () => {
    const mod = compileAndEval(generate(SRC)) as {
      wrapAccountDepositAsync: (impl: any) => (self: any, amount: number) => Promise<any>;
    };
    const impl = async (self: any, amount: number) => {
      // Simulate async work.
      await new Promise((r) => setTimeout(r, 0));
      return {
        self: { ...self, balance: self.balance + amount },
        modified: { balance: self.balance + amount },
      };
    };
    const wrapped = mod.wrapAccountDepositAsync(impl);
    const after = await wrapped({ id: "a", balance: 100 }, 50);
    expect(after.balance).toBe(150);
  });

  it("async pre violation rejects the returned promise", async () => {
    const mod = compileAndEval(generate(SRC)) as {
      wrapAccountDepositAsync: (impl: any) => (self: any, amount: number) => Promise<any>;
    };
    const impl = async (self: any) => ({ self, modified: { balance: self.balance } });
    const wrapped = mod.wrapAccountDepositAsync(impl);
    await expect(wrapped({ id: "a", balance: 100 }, -5)).rejects.toThrow(
      /amount > 0/,
    );
  });

  it("async post violation rejects (buggy impl detected)", async () => {
    const mod = compileAndEval(generate(SRC)) as {
      wrapAccountDepositAsync: (impl: any) => (self: any, amount: number) => Promise<any>;
    };
    const buggy = async (self: any, amount: number) => ({
      self: { ...self, balance: self.balance + amount * 2 },
      modified: { balance: self.balance + amount * 2 },
    });
    const wrapped = mod.wrapAccountDepositAsync(buggy);
    await expect(wrapped({ id: "a", balance: 100 }, 10)).rejects.toThrow(
      /post violated/,
    );
  });

  it("async impl rejection propagates as-is", async () => {
    const mod = compileAndEval(generate(SRC)) as {
      wrapAccountDepositAsync: (impl: any) => (self: any, amount: number) => Promise<any>;
    };
    const failing = async () => {
      throw new Error("network down");
    };
    const wrapped = mod.wrapAccountDepositAsync(failing);
    await expect(wrapped({ id: "a", balance: 100 }, 10)).rejects.toThrow(
      /network down/,
    );
  });
});
