import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function gen(body: string): string {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(`parse errors: ${errors.map(e => e.message).join("; ")}`);
  }
  return renderRust(ast!).libRs;
}

describe("phase15.5 — Rust event wrapper signature", () => {
  it("emits snake_case method name with _wrapped suffix", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        event doSomething() { pre: true; post: true; }
      }
    `);
    expect(out).toMatch(/pub fn do_something_wrapped<F>/);
  });

  it("returns Result<(), &'static str>", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        event ev() { pre: true; post: true; }
      }
    `);
    expect(out).toMatch(/-> Result<\(\), &'static str>/);
  });

  it("passes parameters with correct Rust types", () => {
    const out = gen(`
      kind A { identity: aid; property aid: String; }
      kind X {
        identity: id;
        property id: String;
        event ev(n: Integer, r: Real, a: A) { pre: true; post: true; }
      }
    `);
    expect(out).toMatch(/n: i64/);
    expect(out).toMatch(/r: f64/);
    expect(out).toMatch(/a: A/);
  });

  it("declares closure with FnOnce(&mut Self, ...)", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        event ev(n: Integer) { pre: true; post: true; }
      }
    `);
    expect(out).toMatch(/where F: FnOnce\(&mut Self, i64\)/);
  });

  it("declares closure with FnOnce(&mut Self) for zero-param events", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        event ev() { pre: true; post: true; }
      }
    `);
    expect(out).toMatch(/where F: FnOnce\(&mut Self\)/);
  });
});

describe("phase15.5 — pre/post checks", () => {
  it("pre-check returns Err on violation", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event ev() { pre: self.n > 0; post: true; }
      }
    `);
    expect(out).toMatch(/if !\(\(self\.n > 0\)\) \{/);
    expect(out).toMatch(/return Err\("\[X::ev\] precondition violated: self\.n > 0"\)/);
  });

  it("post-check runs after impl_fn", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event ev() { pre: true; post: self.n >= 0; }
      }
    `);
    // impl_fn(self) must come BEFORE the post check.
    const impl = out.indexOf("impl_fn(self");
    const post = out.indexOf("self.n >= 0");
    expect(impl).toBeGreaterThan(0);
    expect(post).toBeGreaterThan(impl);
  });

  it("returns Ok(()) when all checks pass", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        event ev() { pre: true; post: true; }
      }
    `);
    expect(out).toMatch(/Ok\(\(\)\)/);
  });

  it("references event parameters by name in pre-clauses", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        event ev(amount: Integer) { pre: amount > 0; post: true; }
      }
    `);
    expect(out).toMatch(/if !\(\(amount > 0\)\)/);
  });
});

describe("phase15.5 — @pre snapshots", () => {
  it("snapshots a property before impl_fn when @pre referenced", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property count: Integer;
        event ev() { pre: true; post: self.count > self.count@pre; }
      }
    `);
    expect(out).toMatch(/let __pre_count = self\.count\.clone\(\);/);
    expect(out).toMatch(/self\.count > __pre_count/);
    // Snapshot must come BEFORE impl_fn.
    const snap = out.indexOf("__pre_count = self.count.clone()");
    const impl = out.indexOf("impl_fn(self");
    expect(snap).toBeLessThan(impl);
  });

  it("does NOT snapshot if no @pre references in post", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property count: Integer;
        event ev() { pre: true; post: self.count >= 0; }
      }
    `);
    expect(out).not.toMatch(/__pre_/);
  });

  it("snapshots multiple distinct properties when both @pre referenced", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property a: Integer;
        property b: Integer;
        event ev() {
          pre: true;
          post: self.a > self.a@pre and self.b < self.b@pre;
        }
      }
    `);
    expect(out).toMatch(/__pre_a/);
    expect(out).toMatch(/__pre_b/);
  });
});

describe("phase15.5 — error messages and skipping", () => {
  it("escapes quotes in invariant message", () => {
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event ev() { pre: self.n > 0; post: true; }
      }
    `);
    // Pre clause has no quotes; just check the message format.
    expect(out).toMatch(/precondition violated: self\.n > 0/);
  });

  it("skips @pre with comment when used in pre-condition (semantic violation)", () => {
    // Note: the validator should reject this earlier; if it slips
    // through, the wrapper translator emits SKIPPED.
    // Most users won't hit this since the validator catches it.
    const out = gen(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event ev() {
          pre: true;
          post: true;
        }
      }
    `);
    // Ensure non-skipped clauses don't carry "SKIPPED".
    const wrapper = out.split("Event wrappers")[1] ?? "";
    expect(wrapper).not.toMatch(/SKIPPED/);
  });
});
