// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Account. Runtime: string. Compile-time: branded. */
export type AccountId = string & { readonly __brand: "AccountId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface Account {
  readonly accountId: AccountId;
  readonly balance: number;
  readonly isFrozen: boolean;
}


// ─── Factory functions ───

export function makeAccount(data: {
  accountId: string;
  balance: number;
  isFrozen: boolean;
}): Account {
  return {
    accountId: data.accountId as AccountId,
    balance: data.balance,
    isFrozen: data.isFrozen,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Account. Returns empty array when valid. */
export function validateAccount(instance: Account): readonly string[] {
  const violations: string[] = [];
  if (!((instance.balance >= 0))) {
    violations.push("[Account] invariant violated: self.balance >= 0.0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for Account.deposit. User supplies this. */
export type AccountDepositImpl = (self: Account, amount: number) => { self: Account; modified: { balance: unknown } };

/** Contract-checking wrapper for Account.deposit. */
export function wrapAccountDeposit(impl: AccountDepositImpl): (self: Account, amount: number) => Account {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[Account.deposit] pre violated: amount > 0.0");
    }
    if (!((self.isFrozen === false))) {
      preViolations.push("[Account.deposit] pre violated: self.isFrozen = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.balance": self.balance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.balance === (__pre["self.balance"] + amount)))) {
        postViolations.push("[Account.deposit] post violated: self.balance = self.balance@pre + amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.deposit (async). User supplies this. */
export type AccountDepositAsyncImpl = (self: Account, amount: number) => Promise<{ self: Account; modified: { balance: unknown } }>;

/** Contract-checking wrapper for Account.deposit (async). */
export function wrapAccountDepositAsync(impl: AccountDepositAsyncImpl): (self: Account, amount: number) => Promise<Account> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[Account.deposit] pre violated: amount > 0.0");
    }
    if (!((self.isFrozen === false))) {
      preViolations.push("[Account.deposit] pre violated: self.isFrozen = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.balance": self.balance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.balance === (__pre["self.balance"] + amount)))) {
        postViolations.push("[Account.deposit] post violated: self.balance = self.balance@pre + amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.withdraw. User supplies this. */
export type AccountWithdrawImpl = (self: Account, amount: number) => { self: Account; modified: { balance: unknown } };

/** Contract-checking wrapper for Account.withdraw. */
export function wrapAccountWithdraw(impl: AccountWithdrawImpl): (self: Account, amount: number) => Account {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[Account.withdraw] pre violated: amount > 0.0");
    }
    if (!((self.isFrozen === false))) {
      preViolations.push("[Account.withdraw] pre violated: self.isFrozen = false");
    }
    if (!((self.balance >= amount))) {
      preViolations.push("[Account.withdraw] pre violated: self.balance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.balance": self.balance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.balance === (__pre["self.balance"] - amount)))) {
        postViolations.push("[Account.withdraw] post violated: self.balance = self.balance@pre - amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.withdraw (async). User supplies this. */
export type AccountWithdrawAsyncImpl = (self: Account, amount: number) => Promise<{ self: Account; modified: { balance: unknown } }>;

/** Contract-checking wrapper for Account.withdraw (async). */
export function wrapAccountWithdrawAsync(impl: AccountWithdrawAsyncImpl): (self: Account, amount: number) => Promise<Account> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[Account.withdraw] pre violated: amount > 0.0");
    }
    if (!((self.isFrozen === false))) {
      preViolations.push("[Account.withdraw] pre violated: self.isFrozen = false");
    }
    if (!((self.balance >= amount))) {
      preViolations.push("[Account.withdraw] pre violated: self.balance >= amount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.balance": self.balance,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.balance === (__pre["self.balance"] - amount)))) {
        postViolations.push("[Account.withdraw] post violated: self.balance = self.balance@pre - amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.freeze. User supplies this. */
export type AccountFreezeImpl = (self: Account) => { self: Account; modified: { isFrozen: unknown } };

/** Contract-checking wrapper for Account.freeze. */
export function wrapAccountFreeze(impl: AccountFreezeImpl): (self: Account) => Account {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isFrozen === false))) {
      preViolations.push("[Account.freeze] pre violated: self.isFrozen = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === true))) {
        postViolations.push("[Account.freeze] post violated: self.isFrozen = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.freeze (async). User supplies this. */
export type AccountFreezeAsyncImpl = (self: Account) => Promise<{ self: Account; modified: { isFrozen: unknown } }>;

/** Contract-checking wrapper for Account.freeze (async). */
export function wrapAccountFreezeAsync(impl: AccountFreezeAsyncImpl): (self: Account) => Promise<Account> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isFrozen === false))) {
      preViolations.push("[Account.freeze] pre violated: self.isFrozen = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === true))) {
        postViolations.push("[Account.freeze] post violated: self.isFrozen = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.unfreeze. User supplies this. */
export type AccountUnfreezeImpl = (self: Account) => { self: Account; modified: { isFrozen: unknown } };

/** Contract-checking wrapper for Account.unfreeze. */
export function wrapAccountUnfreeze(impl: AccountUnfreezeImpl): (self: Account) => Account {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isFrozen === true))) {
      preViolations.push("[Account.unfreeze] pre violated: self.isFrozen = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === false))) {
        postViolations.push("[Account.unfreeze] post violated: self.isFrozen = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Account.unfreeze (async). User supplies this. */
export type AccountUnfreezeAsyncImpl = (self: Account) => Promise<{ self: Account; modified: { isFrozen: unknown } }>;

/** Contract-checking wrapper for Account.unfreeze (async). */
export function wrapAccountUnfreezeAsync(impl: AccountUnfreezeAsyncImpl): (self: Account) => Promise<Account> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isFrozen === true))) {
      preViolations.push("[Account.unfreeze] pre violated: self.isFrozen = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFrozen === false))) {
        postViolations.push("[Account.unfreeze] post violated: self.isFrozen = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}


// Helper function to recursively deep clone self states for transactional rollback
function __cloneSelf(obj: any): any {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Set) {
    return new Set(Array.from(obj).map(__cloneSelf));
  }
  if (Array.isArray(obj)) {
    return obj.map(__cloneSelf);
  }
  const copy = {} as any;
  for (const k of Object.keys(obj)) {
    copy[k] = __cloneSelf(obj[k]);
  }
  return copy;
}



