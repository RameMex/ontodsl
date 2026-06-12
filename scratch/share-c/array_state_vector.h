/* ════════════════════════════════════════════════════════════════ */
/* AUTO-GENERATED from Onto DSL. Do not edit.                       */
/* Target: C99 + ACSL (verify with frama-c -wp).                    */
/* ════════════════════════════════════════════════════════════════ */

#ifndef ARRAY_STATE_VECTOR_H
#define ARRAY_STATE_VECTOR_H

#include <stdbool.h>
#include <stdint.h>
#include <stddef.h>

/* Result type used by every validator + wrapper:                  */
/* 0 = ok; non-zero = first contract violation message in *out_msg */

/* ─── Branded identity wrappers ─── */

/* Identity for ImuSample. */
typedef struct { const char * inner; } ImuSampleId;

/* <<Kind>> ImuSample */
typedef struct {
    ImuSampleId sample_id;
    double t;
    double state[6];
    double cov[3][3];
} ImuSample;

/* ─── Validators (declarations) ─── */

/*@
  predicate inv_ImuSample(ImuSample *self) =
    \valid_read(self) &&
    ((self->t) >= (0.0)) &&
    (\forall integer __i; 0 <= __i < (sizeof(self->state)/sizeof(self->state[0])) ==> (\is_finite(self->state[__i])));
*/

/*@
  requires \valid_read(self);
  requires out_msg != \null;
  assigns *out_msg;
  ensures \result == 0 <==> inv_ImuSample(self);
*/
int imu_sample_validate(const ImuSample *self, const char **out_msg);

/* ─── Event wrappers (declarations) ─── */

/*@
  requires \valid(self);
  requires out_msg != \null;
  requires impl_fn != \null;
  requires (dt) > (0.0);
  requires \is_finite(dt);
  assigns self->t, *out_msg;
  ensures \result == 0 ==> inv_ImuSample(self);
  ensures \result != 0 ==> *self == \old(*self);
*/
int imu_sample_integrate_wrapped(
    ImuSample *self,
    double dt,
    int (*impl_fn)(ImuSample *, double ),
    const char **out_msg
);


#endif /* ARRAY_STATE_VECTOR_H */
