/* ════════════════════════════════════════════════════════════════ */
/* AUTO-GENERATED from Onto DSL. Do not edit.                       */
/* ════════════════════════════════════════════════════════════════ */

#include "ardupilot_navekf3.h"
#include <string.h>  /* for memcpy in rollback */
#include <math.h>    /* for isfinite / isnan */

int ap_nav_ekf3_validate(const AP_NavEKF3 *self, const char **out_msg) {
    if (!(((self->filter_id) != (NULL)))) {
        *out_msg = "[AP_NavEKF3] invariant violated: self.filterId <> null";
        return 1;
    }
    if (!(({ int __ok = 1; for (size_t __i = 0; __i < sizeof(self->state)/sizeof(self->state[0]); ++__i) { if (!(isfinite(self->state[__i]))) { __ok = 0; break; } } __ok; }))) {
        *out_msg = "[AP_NavEKF3] invariant violated: self.state->forAll(v | v.isFinite())";
        return 1;
    }
    if (!(1)) {
        *out_msg = "[AP_NavEKF3] /* SKIPPED (not translatable): self.cov->forAll(row | row->forAll(c | c.isFinite())) */";
        return 1;
    }
    *out_msg = "";
    return 0;
}

int ap_nav_ekf3_predict_wrapped(
    AP_NavEKF3 *self,
    double dt,
    double gyro[3],
    double accel[3],
    int (*impl_fn)(AP_NavEKF3 *, double , double [3], double [3]),
    const char **out_msg
) {
    if (!(((dt) > (0.0)))) {
        *out_msg = "[AP_NavEKF3::predict] precondition violated: dt > 0.0";
        return 1;
    }
    if (!(isfinite(dt))) {
        *out_msg = "[AP_NavEKF3::predict] precondition violated: dt.isFinite()";
        return 1;
    }
    /* SKIPPED pre (not translatable): gyro->forAll(v | v.isFinite()) */
    /* SKIPPED pre (not translatable): accel->forAll(v | v.isFinite()) */
    AP_NavEKF3 __rollback = *self;
    int __rc = impl_fn(self, dt, gyro, accel);
    if (__rc != 0) {
        *self = __rollback;
        *out_msg = "[AP_NavEKF3::predict] impl_fn returned non-zero";
        return __rc;
    }
    int __vrc = ap_nav_ekf3_validate(self, out_msg);
    if (__vrc != 0) {
        *self = __rollback;
        return __vrc;
    }
    *out_msg = "";
    return 0;
}

int ap_nav_ekf3_fuse_gps_wrapped(
    AP_NavEKF3 *self,
    double pos[3],
    double vel[3],
    double pos_err_m,
    double vel_err_m,
    int (*impl_fn)(AP_NavEKF3 *, double [3], double [3], double , double ),
    const char **out_msg
) {
    /* SKIPPED pre (not translatable): pos->forAll(v | v.isFinite()) */
    /* SKIPPED pre (not translatable): vel->forAll(v | v.isFinite()) */
    if (!(((pos_err_m) >= (0.0)))) {
        *out_msg = "[AP_NavEKF3::fuse_gps] precondition violated: posErrM >= 0.0";
        return 1;
    }
    if (!(isfinite(pos_err_m))) {
        *out_msg = "[AP_NavEKF3::fuse_gps] precondition violated: posErrM.isFinite()";
        return 1;
    }
    if (!(((vel_err_m) >= (0.0)))) {
        *out_msg = "[AP_NavEKF3::fuse_gps] precondition violated: velErrM >= 0.0";
        return 1;
    }
    if (!(isfinite(vel_err_m))) {
        *out_msg = "[AP_NavEKF3::fuse_gps] precondition violated: velErrM.isFinite()";
        return 1;
    }
    AP_NavEKF3 __rollback = *self;
    int __rc = impl_fn(self, pos, vel, pos_err_m, vel_err_m);
    if (__rc != 0) {
        *self = __rollback;
        *out_msg = "[AP_NavEKF3::fuse_gps] impl_fn returned non-zero";
        return __rc;
    }
    int __vrc = ap_nav_ekf3_validate(self, out_msg);
    if (__vrc != 0) {
        *self = __rollback;
        return __vrc;
    }
    *out_msg = "";
    return 0;
}

