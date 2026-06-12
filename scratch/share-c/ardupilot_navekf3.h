/* ════════════════════════════════════════════════════════════════ */
/* AUTO-GENERATED from Onto DSL. Do not edit.                       */
/* Target: C99 + ACSL (verify with frama-c -wp).                    */
/* ════════════════════════════════════════════════════════════════ */

#ifndef ARDUPILOT_NAVEKF3_H
#define ARDUPILOT_NAVEKF3_H

#include <stdbool.h>
#include <stdint.h>
#include <stddef.h>

/* Result type used by every validator + wrapper:                  */
/* 0 = ok; non-zero = first contract violation message in *out_msg */

/* ─── Branded identity wrappers ─── */

/* Identity for AP_NavEKF3. */
typedef struct { const char * inner; } AP_NavEKF3Id;

/* <<Kind>> AP_NavEKF3 */
typedef struct {
    AP_NavEKF3Id filter_id;
    double state[16];
    double cov[16][16];
} AP_NavEKF3;

/* ─── Validators (declarations) ─── */

/*@
  predicate inv_AP_NavEKF3(AP_NavEKF3 *self) =
    \valid_read(self) &&
    ((self->filter_id) != (\null)) &&
    (\forall integer __i; 0 <= __i < (sizeof(self->state)/sizeof(self->state[0])) ==> (\is_finite(self->state[__i])));
*/

/*@
  requires \valid_read(self);
  requires out_msg != \null;
  assigns *out_msg;
  ensures \result == 0 <==> inv_AP_NavEKF3(self);
*/
int ap_nav_ekf3_validate(const AP_NavEKF3 *self, const char **out_msg);

/* ─── Event wrappers (declarations) ─── */

/*@
  requires \valid(self);
  requires out_msg != \null;
  requires impl_fn != \null;
  requires (dt) > (0.0);
  requires \is_finite(dt);
  assigns self->state, self->cov, *out_msg;
  ensures \result == 0 ==> inv_AP_NavEKF3(self);
  ensures \result != 0 ==> *self == \old(*self);
*/
int ap_nav_ekf3_predict_wrapped(
    AP_NavEKF3 *self,
    double dt,
    double gyro[3],
    double accel[3],
    int (*impl_fn)(AP_NavEKF3 *, double , double [3], double [3]),
    const char **out_msg
);

/*@
  requires \valid(self);
  requires out_msg != \null;
  requires impl_fn != \null;
  requires (pos_err_m) >= (0.0);
  requires \is_finite(pos_err_m);
  requires (vel_err_m) >= (0.0);
  requires \is_finite(vel_err_m);
  assigns self->state, self->cov, *out_msg;
  ensures \result == 0 ==> inv_AP_NavEKF3(self);
  ensures \result != 0 ==> *self == \old(*self);
*/
int ap_nav_ekf3_fuse_gps_wrapped(
    AP_NavEKF3 *self,
    double pos[3],
    double vel[3],
    double pos_err_m,
    double vel_err_m,
    int (*impl_fn)(AP_NavEKF3 *, double [3], double [3], double , double ),
    const char **out_msg
);


#endif /* ARDUPILOT_NAVEKF3_H */
