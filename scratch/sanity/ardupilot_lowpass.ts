// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for DigitalLPF. Runtime: string. Compile-time: branded. */
export type DigitalLPFId = string & { readonly __brand: "DigitalLPFId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface DigitalLPF {
  readonly filterId: DigitalLPFId;
  readonly output: number;
  readonly initialised: boolean;
}

/** @stereotype <<Subkind>> */
export interface LowPassFilter extends DigitalLPF {
  readonly cutoffFreq: number;
}


// ─── Factory functions ───

export function makeDigitalLPF(data: {
  filterId: string;
  output: number;
  initialised: boolean;
}): DigitalLPF {
  return {
    filterId: data.filterId as DigitalLPFId,
    output: data.output,
    initialised: data.initialised,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for DigitalLPF. Returns empty array when valid. */
export function validateDigitalLPF(instance: DigitalLPF): readonly string[] {
  const violations: string[] = [];
  if (!((instance.filterId !== null))) {
    violations.push("[DigitalLPF] invariant violated: self.filterId <> null");
  }
  return violations;
}

/** Runtime invariant check for LowPassFilter. Returns empty array when valid. */
export function validateLowPassFilter(instance: LowPassFilter): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cutoffFreq >= 0))) {
    violations.push("[LowPassFilter] invariant violated: self.cutoffFreq >= 0.0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for DigitalLPF.reset. User supplies this. */
export type DigitalLPFResetImpl = (self: DigitalLPF, value: number) => { self: DigitalLPF; modified: { output: unknown; initialised: unknown } };

/** Contract-checking wrapper for DigitalLPF.reset. */
export function wrapDigitalLPFReset(impl: DigitalLPFResetImpl): (self: DigitalLPF, value: number) => DigitalLPF {
  return (self, value) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.output === value))) {
        postViolations.push("[DigitalLPF.reset] post violated: self.output = value");
      }
      if (!((__result.self.initialised === true))) {
        postViolations.push("[DigitalLPF.reset] post violated: self.initialised = true");
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

/** Impl signature for DigitalLPF.reset (async). User supplies this. */
export type DigitalLPFResetAsyncImpl = (self: DigitalLPF, value: number) => Promise<{ self: DigitalLPF; modified: { output: unknown; initialised: unknown } }>;

/** Contract-checking wrapper for DigitalLPF.reset (async). */
export function wrapDigitalLPFResetAsync(impl: DigitalLPFResetAsyncImpl): (self: DigitalLPF, value: number) => Promise<DigitalLPF> {
  return async (self, value) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.output === value))) {
        postViolations.push("[DigitalLPF.reset] post violated: self.output = value");
      }
      if (!((__result.self.initialised === true))) {
        postViolations.push("[DigitalLPF.reset] post violated: self.initialised = true");
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

/** Impl signature for DigitalLPF.reset_flag. User supplies this. */
export type DigitalLPFReset_flagImpl = (self: DigitalLPF) => { self: DigitalLPF; modified: { initialised: unknown } };

/** Contract-checking wrapper for DigitalLPF.reset_flag. */
export function wrapDigitalLPFReset_flag(impl: DigitalLPFReset_flagImpl): (self: DigitalLPF) => DigitalLPF {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initialised === false))) {
        postViolations.push("[DigitalLPF.reset_flag] post violated: self.initialised = false");
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

/** Impl signature for DigitalLPF.reset_flag (async). User supplies this. */
export type DigitalLPFReset_flagAsyncImpl = (self: DigitalLPF) => Promise<{ self: DigitalLPF; modified: { initialised: unknown } }>;

/** Contract-checking wrapper for DigitalLPF.reset_flag (async). */
export function wrapDigitalLPFReset_flagAsync(impl: DigitalLPFReset_flagAsyncImpl): (self: DigitalLPF) => Promise<DigitalLPF> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initialised === false))) {
        postViolations.push("[DigitalLPF.reset_flag] post violated: self.initialised = false");
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

/** Impl signature for DigitalLPF.apply_internal. User supplies this. */
export type DigitalLPFApply_internalImpl = (self: DigitalLPF, sample: number, alpha: number) => { self: DigitalLPF; modified: { output: unknown; initialised: unknown } };

/** Contract-checking wrapper for DigitalLPF.apply_internal. */
export function wrapDigitalLPFApply_internal(impl: DigitalLPFApply_internalImpl): (self: DigitalLPF, sample: number, alpha: number) => DigitalLPF {
  return (self, sample, alpha) => {
    const preViolations: string[] = [];
    if (!((alpha >= 0))) {
      preViolations.push("[DigitalLPF.apply_internal] pre violated: alpha >= 0.0");
    }
    if (!((alpha <= 1))) {
      preViolations.push("[DigitalLPF.apply_internal] pre violated: alpha <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.initialised": self.initialised,
      "self.output": self.output,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sample, alpha);
      const postViolations: string[] = [];
      if (!(((__pre["self.initialised"]) ? ((__result.self.output === (__pre["self.output"] + ((sample - __pre["self.output"]) * alpha)))) : ((__result.self.output === sample))))) {
        postViolations.push("[DigitalLPF.apply_internal] post violated: if self.initialised@pre then\n            self.output = self.output@pre + (sample - self.output@pre) * alpha\n          else\n            self.output = sample\n          endif");
      }
      if (!((__result.self.initialised === true))) {
        postViolations.push("[DigitalLPF.apply_internal] post violated: self.initialised = true");
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

/** Impl signature for DigitalLPF.apply_internal (async). User supplies this. */
export type DigitalLPFApply_internalAsyncImpl = (self: DigitalLPF, sample: number, alpha: number) => Promise<{ self: DigitalLPF; modified: { output: unknown; initialised: unknown } }>;

/** Contract-checking wrapper for DigitalLPF.apply_internal (async). */
export function wrapDigitalLPFApply_internalAsync(impl: DigitalLPFApply_internalAsyncImpl): (self: DigitalLPF, sample: number, alpha: number) => Promise<DigitalLPF> {
  return async (self, sample, alpha) => {
    const preViolations: string[] = [];
    if (!((alpha >= 0))) {
      preViolations.push("[DigitalLPF.apply_internal] pre violated: alpha >= 0.0");
    }
    if (!((alpha <= 1))) {
      preViolations.push("[DigitalLPF.apply_internal] pre violated: alpha <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.initialised": self.initialised,
      "self.output": self.output,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sample, alpha);
      const postViolations: string[] = [];
      if (!(((__pre["self.initialised"]) ? ((__result.self.output === (__pre["self.output"] + ((sample - __pre["self.output"]) * alpha)))) : ((__result.self.output === sample))))) {
        postViolations.push("[DigitalLPF.apply_internal] post violated: if self.initialised@pre then\n            self.output = self.output@pre + (sample - self.output@pre) * alpha\n          else\n            self.output = sample\n          endif");
      }
      if (!((__result.self.initialised === true))) {
        postViolations.push("[DigitalLPF.apply_internal] post violated: self.initialised = true");
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

/** Impl signature for LowPassFilter.set_cutoff_frequency. User supplies this. */
export type LowPassFilterSet_cutoff_frequencyImpl = (self: LowPassFilter, newCutoffFreq: number) => { self: LowPassFilter; modified: { cutoffFreq: unknown } };

/** Contract-checking wrapper for LowPassFilter.set_cutoff_frequency. */
export function wrapLowPassFilterSet_cutoff_frequency(impl: LowPassFilterSet_cutoff_frequencyImpl): (self: LowPassFilter, newCutoffFreq: number) => LowPassFilter {
  return (self, newCutoffFreq) => {
    const preViolations: string[] = [];
    if (!((newCutoffFreq >= 0))) {
      preViolations.push("[LowPassFilter.set_cutoff_frequency] pre violated: newCutoffFreq >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newCutoffFreq);
      const postViolations: string[] = [];
      if (!((__result.self.cutoffFreq === newCutoffFreq))) {
        postViolations.push("[LowPassFilter.set_cutoff_frequency] post violated: self.cutoffFreq = newCutoffFreq");
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

/** Impl signature for LowPassFilter.set_cutoff_frequency (async). User supplies this. */
export type LowPassFilterSet_cutoff_frequencyAsyncImpl = (self: LowPassFilter, newCutoffFreq: number) => Promise<{ self: LowPassFilter; modified: { cutoffFreq: unknown } }>;

/** Contract-checking wrapper for LowPassFilter.set_cutoff_frequency (async). */
export function wrapLowPassFilterSet_cutoff_frequencyAsync(impl: LowPassFilterSet_cutoff_frequencyAsyncImpl): (self: LowPassFilter, newCutoffFreq: number) => Promise<LowPassFilter> {
  return async (self, newCutoffFreq) => {
    const preViolations: string[] = [];
    if (!((newCutoffFreq >= 0))) {
      preViolations.push("[LowPassFilter.set_cutoff_frequency] pre violated: newCutoffFreq >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newCutoffFreq);
      const postViolations: string[] = [];
      if (!((__result.self.cutoffFreq === newCutoffFreq))) {
        postViolations.push("[LowPassFilter.set_cutoff_frequency] post violated: self.cutoffFreq = newCutoffFreq");
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

/** Impl signature for LowPassFilter.apply. User supplies this. */
export type LowPassFilterApplyImpl = (self: LowPassFilter, sample: number, dt: number) => { self: LowPassFilter; modified: { output: unknown; initialised: unknown } };

/** Contract-checking wrapper for LowPassFilter.apply. */
export function wrapLowPassFilterApply(impl: LowPassFilterApplyImpl): (self: LowPassFilter, sample: number, dt: number) => LowPassFilter {
  return (self, sample, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[LowPassFilter.apply] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sample, dt);
      const postViolations: string[] = [];
      if (!((__result.self.initialised === true))) {
        postViolations.push("[LowPassFilter.apply] post violated: self.initialised = true");
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

/** Impl signature for LowPassFilter.apply (async). User supplies this. */
export type LowPassFilterApplyAsyncImpl = (self: LowPassFilter, sample: number, dt: number) => Promise<{ self: LowPassFilter; modified: { output: unknown; initialised: unknown } }>;

/** Contract-checking wrapper for LowPassFilter.apply (async). */
export function wrapLowPassFilterApplyAsync(impl: LowPassFilterApplyAsyncImpl): (self: LowPassFilter, sample: number, dt: number) => Promise<LowPassFilter> {
  return async (self, sample, dt) => {
    const preViolations: string[] = [];
    if (!((dt >= 0))) {
      preViolations.push("[LowPassFilter.apply] pre violated: dt >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sample, dt);
      const postViolations: string[] = [];
      if (!((__result.self.initialised === true))) {
        postViolations.push("[LowPassFilter.apply] post violated: self.initialised = true");
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



