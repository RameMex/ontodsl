/* ════════════════════════════════════════════════════════════════ */
/* AUTO-GENERATED from Onto DSL. Do not edit.                       */
/* ════════════════════════════════════════════════════════════════ */

#include "array_state_vector.h"
#include <string.h>  /* for memcpy in rollback */
#include <math.h>    /* for isfinite / isnan */

int imu_sample_validate(const ImuSample *self, const char **out_msg) {
    if (!(((self->t) >= (0.0)))) {
        *out_msg = "[ImuSample] invariant violated: self.t >= 0.0";
        return 1;
    }
    if (!(({ int __ok = 1; for (size_t __i = 0; __i < sizeof(self->state)/sizeof(self->state[0]); ++__i) { if (!(isfinite(self->state[__i]))) { __ok = 0; break; } } __ok; }))) {
        *out_msg = "[ImuSample] invariant violated: self.state->forAll(v | v.isFinite())";
        return 1;
    }
    if (!(1)) {
        *out_msg = "[ImuSample] /* SKIPPED (not translatable): self.cov->forAll(row | row->forAll(c | c.isFinite())) */";
        return 1;
    }
    *out_msg = "";
    return 0;
}

int imu_sample_integrate_wrapped(
    ImuSample *self,
    double dt,
    int (*impl_fn)(ImuSample *, double ),
    const char **out_msg
) {
    if (!(((dt) > (0.0)))) {
        *out_msg = "[ImuSample::integrate] precondition violated: dt > 0.0";
        return 1;
    }
    if (!(isfinite(dt))) {
        *out_msg = "[ImuSample::integrate] precondition violated: dt.isFinite()";
        return 1;
    }
    ImuSample __rollback = *self;
    int __rc = impl_fn(self, dt);
    if (__rc != 0) {
        *self = __rollback;
        *out_msg = "[ImuSample::integrate] impl_fn returned non-zero";
        return __rc;
    }
    /* SKIPPED post (not translatable): result = true or result = false */
    int __vrc = imu_sample_validate(self, out_msg);
    if (__vrc != 0) {
        *self = __rollback;
        return __vrc;
    }
    *out_msg = "";
    return 0;
}

