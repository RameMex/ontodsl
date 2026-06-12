// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Target: alloc; Real → f64.
// ═══════════════════════════════════════════════════════════════════

#![no_std]

// alloc target: String/BTreeSet/Vec/BTreeMap from alloc.
extern crate alloc;

// ─── Branded identity types ───

/// Identity type for AP_NavEKF3.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd)]
pub struct ApNavEkf3Id(pub alloc::string::String);

// ─── Structs ───

/// <<Kind>> AP_NavEKF3
#[derive(Debug, Clone, PartialEq)]
pub struct ApNavEkf3 {
    pub ekf_id: ApNavEkf3Id,
    pub q_0: f64,
    pub q_1: f64,
    pub q_2: f64,
    pub q_3: f64,
    pub vel_x: f64,
    pub vel_y: f64,
    pub vel_z: f64,
    pub pos_x: f64,
    pub pos_y: f64,
    pub pos_z: f64,
    pub gyro_bias_x: f64,
    pub gyro_bias_y: f64,
    pub gyro_bias_z: f64,
    pub accel_bias_x: f64,
    pub accel_bias_y: f64,
    pub accel_bias_z: f64,
    pub p_q_0_q_0: f64,
    pub p_q_1_q_1: f64,
    pub p_q_2_q_2: f64,
    pub p_q_3_q_3: f64,
    pub p_vel_x_vel_x: f64,
    pub p_vel_y_vel_y: f64,
    pub p_vel_z_vel_z: f64,
    pub p_pos_x_pos_x: f64,
    pub p_pos_y_pos_y: f64,
    pub p_pos_z_pos_z: f64,
    pub p_gyro_bias_x_gyro_bias_x: f64,
    pub p_gyro_bias_y_gyro_bias_y: f64,
    pub p_gyro_bias_z_gyro_bias_z: f64,
    pub p_accel_bias_x_accel_bias_x: f64,
    pub p_accel_bias_y_accel_bias_y: f64,
    pub p_accel_bias_z_accel_bias_z: f64,
}


// ─── Constructors ───

impl ApNavEkf3 {
    pub fn new(
        ekf_id: alloc::string::String,
        q_0: f64,
        q_1: f64,
        q_2: f64,
        q_3: f64,
        vel_x: f64,
        vel_y: f64,
        vel_z: f64,
        pos_x: f64,
        pos_y: f64,
        pos_z: f64,
        gyro_bias_x: f64,
        gyro_bias_y: f64,
        gyro_bias_z: f64,
        accel_bias_x: f64,
        accel_bias_y: f64,
        accel_bias_z: f64,
        p_q_0_q_0: f64,
        p_q_1_q_1: f64,
        p_q_2_q_2: f64,
        p_q_3_q_3: f64,
        p_vel_x_vel_x: f64,
        p_vel_y_vel_y: f64,
        p_vel_z_vel_z: f64,
        p_pos_x_pos_x: f64,
        p_pos_y_pos_y: f64,
        p_pos_z_pos_z: f64,
        p_gyro_bias_x_gyro_bias_x: f64,
        p_gyro_bias_y_gyro_bias_y: f64,
        p_gyro_bias_z_gyro_bias_z: f64,
        p_accel_bias_x_accel_bias_x: f64,
        p_accel_bias_y_accel_bias_y: f64,
        p_accel_bias_z_accel_bias_z: f64,
    ) -> Self {
        Self {
            ekf_id: ApNavEkf3Id(ekf_id),
            q_0,
            q_1,
            q_2,
            q_3,
            vel_x,
            vel_y,
            vel_z,
            pos_x,
            pos_y,
            pos_z,
            gyro_bias_x,
            gyro_bias_y,
            gyro_bias_z,
            accel_bias_x,
            accel_bias_y,
            accel_bias_z,
            p_q_0_q_0,
            p_q_1_q_1,
            p_q_2_q_2,
            p_q_3_q_3,
            p_vel_x_vel_x,
            p_vel_y_vel_y,
            p_vel_z_vel_z,
            p_pos_x_pos_x,
            p_pos_y_pos_y,
            p_pos_z_pos_z,
            p_gyro_bias_x_gyro_bias_x,
            p_gyro_bias_y_gyro_bias_y,
            p_gyro_bias_z_gyro_bias_z,
            p_accel_bias_x_accel_bias_x,
            p_accel_bias_y_accel_bias_y,
            p_accel_bias_z_accel_bias_z,
        }
    }
}


// ─── Runtime invariant validators ───

impl ApNavEkf3 {
    /// Returns the list of violated invariant messages. Empty when valid.
    pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
        let mut violations: alloc::vec::Vec<&'static str> = alloc::vec::Vec::new();
        // ELIDED invariant (vacuous; 'ekfId' is not Option<T>, so non-null by construction): self.ekfId <> null
        if !((((((self.q_0 * self.q_0) + (self.q_1 * self.q_1)) + (self.q_2 * self.q_2)) + (self.q_3 * self.q_3)) >= 0.99)) {
            violations.push("[AP_NavEKF3] invariant violated: self.q0*self.q0 + self.q1*self.q1 + self.q2*self.q2 + self.q3*self.q3 >= 0.99");
        }
        if !((((((self.q_0 * self.q_0) + (self.q_1 * self.q_1)) + (self.q_2 * self.q_2)) + (self.q_3 * self.q_3)) <= 1.01)) {
            violations.push("[AP_NavEKF3] invariant violated: self.q0*self.q0 + self.q1*self.q1 + self.q2*self.q2 + self.q3*self.q3 <= 1.01");
        }
        if !((self.q_0).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.q0.isFinite()");
        }
        if !((self.q_1).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.q1.isFinite()");
        }
        if !((self.q_2).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.q2.isFinite()");
        }
        if !((self.q_3).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.q3.isFinite()");
        }
        if !((self.vel_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.velX.isFinite()");
        }
        if !((self.vel_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.velY.isFinite()");
        }
        if !((self.vel_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.velZ.isFinite()");
        }
        if !((self.pos_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.posX.isFinite()");
        }
        if !((self.pos_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.posY.isFinite()");
        }
        if !((self.pos_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.posZ.isFinite()");
        }
        if !((self.gyro_bias_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.gyroBiasX.isFinite()");
        }
        if !((self.gyro_bias_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.gyroBiasY.isFinite()");
        }
        if !((self.gyro_bias_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.gyroBiasZ.isFinite()");
        }
        if !((self.accel_bias_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.accelBiasX.isFinite()");
        }
        if !((self.accel_bias_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.accelBiasY.isFinite()");
        }
        if !((self.accel_bias_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.accelBiasZ.isFinite()");
        }
        if !((self.p_q_0_q_0 >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q0_q0 >= 0.0");
        }
        if !((self.p_q_0_q_0).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q0_q0.isFinite()");
        }
        if !((self.p_q_1_q_1 >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q1_q1 >= 0.0");
        }
        if !((self.p_q_1_q_1).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q1_q1.isFinite()");
        }
        if !((self.p_q_2_q_2 >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q2_q2 >= 0.0");
        }
        if !((self.p_q_2_q_2).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q2_q2.isFinite()");
        }
        if !((self.p_q_3_q_3 >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q3_q3 >= 0.0");
        }
        if !((self.p_q_3_q_3).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_q3_q3.isFinite()");
        }
        if !((self.p_vel_x_vel_x >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_velX_velX >= 0.0");
        }
        if !((self.p_vel_x_vel_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_velX_velX.isFinite()");
        }
        if !((self.p_vel_y_vel_y >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_velY_velY >= 0.0");
        }
        if !((self.p_vel_y_vel_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_velY_velY.isFinite()");
        }
        if !((self.p_vel_z_vel_z >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_velZ_velZ >= 0.0");
        }
        if !((self.p_vel_z_vel_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_velZ_velZ.isFinite()");
        }
        if !((self.p_pos_x_pos_x >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_posX_posX >= 0.0");
        }
        if !((self.p_pos_x_pos_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_posX_posX.isFinite()");
        }
        if !((self.p_pos_y_pos_y >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_posY_posY >= 0.0");
        }
        if !((self.p_pos_y_pos_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_posY_posY.isFinite()");
        }
        if !((self.p_pos_z_pos_z >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_posZ_posZ >= 0.0");
        }
        if !((self.p_pos_z_pos_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_posZ_posZ.isFinite()");
        }
        if !((self.p_gyro_bias_x_gyro_bias_x >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_gyroBiasX_gyroBiasX >= 0.0");
        }
        if !((self.p_gyro_bias_x_gyro_bias_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_gyroBiasX_gyroBiasX.isFinite()");
        }
        if !((self.p_gyro_bias_y_gyro_bias_y >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_gyroBiasY_gyroBiasY >= 0.0");
        }
        if !((self.p_gyro_bias_y_gyro_bias_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_gyroBiasY_gyroBiasY.isFinite()");
        }
        if !((self.p_gyro_bias_z_gyro_bias_z >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_gyroBiasZ_gyroBiasZ >= 0.0");
        }
        if !((self.p_gyro_bias_z_gyro_bias_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_gyroBiasZ_gyroBiasZ.isFinite()");
        }
        if !((self.p_accel_bias_x_accel_bias_x >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_accelBiasX_accelBiasX >= 0.0");
        }
        if !((self.p_accel_bias_x_accel_bias_x).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_accelBiasX_accelBiasX.isFinite()");
        }
        if !((self.p_accel_bias_y_accel_bias_y >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_accelBiasY_accelBiasY >= 0.0");
        }
        if !((self.p_accel_bias_y_accel_bias_y).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_accelBiasY_accelBiasY.isFinite()");
        }
        if !((self.p_accel_bias_z_accel_bias_z >= 0.0)) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_accelBiasZ_accelBiasZ >= 0.0");
        }
        if !((self.p_accel_bias_z_accel_bias_z).is_finite()) {
            violations.push("[AP_NavEKF3] invariant violated: self.P_accelBiasZ_accelBiasZ.isFinite()");
        }
        violations
    }
}


// ─── Event wrappers ───

impl ApNavEkf3 {
    /// Wrapper for event predict: pre-checks, runs impl, post-checks.
    /// Effects: Telemetry, LogRecord
    pub fn predict_wrapped<F>(
        &mut self,
        dt: f64,
        gyro_x: f64,
        gyro_y: f64,
        gyro_z: f64,
        accel_x: f64,
        accel_y: f64,
        accel_z: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64, f64, f64, f64, f64, f64, f64) -> ()
    {
        if !((dt > 0.0)) {
            return Err("[AP_NavEKF3::predict] precondition violated: dt > 0.0");
        }
        if !((dt).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: dt.isFinite()");
        }
        if !((gyro_x).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: gyroX.isFinite()");
        }
        if !((gyro_y).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: gyroY.isFinite()");
        }
        if !((gyro_z).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: gyroZ.isFinite()");
        }
        if !((accel_x).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: accelX.isFinite()");
        }
        if !((accel_y).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: accelY.isFinite()");
        }
        if !((accel_z).is_finite()) {
            return Err("[AP_NavEKF3::predict] precondition violated: accelZ.isFinite()");
        }
        let __rollback = self.clone();
        impl_fn(self, dt, gyro_x, gyro_y, gyro_z, accel_x, accel_y, accel_z);
        let __violation: Option<&'static str> = 
            if !((((((self.q_0 * self.q_0) + (self.q_1 * self.q_1)) + (self.q_2 * self.q_2)) + (self.q_3 * self.q_3)) >= 0.99)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.q0*self.q0 + self.q1*self.q1 + self.q2*self.q2 + self.q3*self.q3 >= 0.99")
            } else if !((((((self.q_0 * self.q_0) + (self.q_1 * self.q_1)) + (self.q_2 * self.q_2)) + (self.q_3 * self.q_3)) <= 1.01)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.q0*self.q0 + self.q1*self.q1 + self.q2*self.q2 + self.q3*self.q3 <= 1.01")
            } else if !((self.q_0).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.q0.isFinite()")
            } else if !((self.q_1).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.q1.isFinite()")
            } else if !((self.q_2).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.q2.isFinite()")
            } else if !((self.q_3).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.q3.isFinite()")
            } else if !((self.vel_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.velX.isFinite()")
            } else if !((self.vel_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.velY.isFinite()")
            } else if !((self.vel_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.velZ.isFinite()")
            } else if !((self.pos_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.posX.isFinite()")
            } else if !((self.pos_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.posY.isFinite()")
            } else if !((self.pos_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.posZ.isFinite()")
            } else if !((self.gyro_bias_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.gyroBiasX.isFinite()")
            } else if !((self.gyro_bias_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.gyroBiasY.isFinite()")
            } else if !((self.gyro_bias_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.gyroBiasZ.isFinite()")
            } else if !((self.accel_bias_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.accelBiasX.isFinite()")
            } else if !((self.accel_bias_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.accelBiasY.isFinite()")
            } else if !((self.accel_bias_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.accelBiasZ.isFinite()")
            } else if !((self.p_q_0_q_0 >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q0_q0 >= 0.0")
            } else if !((self.p_q_0_q_0).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q0_q0.isFinite()")
            } else if !((self.p_q_1_q_1 >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q1_q1 >= 0.0")
            } else if !((self.p_q_1_q_1).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q1_q1.isFinite()")
            } else if !((self.p_q_2_q_2 >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q2_q2 >= 0.0")
            } else if !((self.p_q_2_q_2).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q2_q2.isFinite()")
            } else if !((self.p_q_3_q_3 >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q3_q3 >= 0.0")
            } else if !((self.p_q_3_q_3).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_q3_q3.isFinite()")
            } else if !((self.p_vel_x_vel_x >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_velX_velX >= 0.0")
            } else if !((self.p_vel_x_vel_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_velX_velX.isFinite()")
            } else if !((self.p_vel_y_vel_y >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_velY_velY >= 0.0")
            } else if !((self.p_vel_y_vel_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_velY_velY.isFinite()")
            } else if !((self.p_vel_z_vel_z >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_velZ_velZ >= 0.0")
            } else if !((self.p_vel_z_vel_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_velZ_velZ.isFinite()")
            } else if !((self.p_pos_x_pos_x >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_posX_posX >= 0.0")
            } else if !((self.p_pos_x_pos_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_posX_posX.isFinite()")
            } else if !((self.p_pos_y_pos_y >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_posY_posY >= 0.0")
            } else if !((self.p_pos_y_pos_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_posY_posY.isFinite()")
            } else if !((self.p_pos_z_pos_z >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_posZ_posZ >= 0.0")
            } else if !((self.p_pos_z_pos_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_posZ_posZ.isFinite()")
            } else if !((self.p_gyro_bias_x_gyro_bias_x >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_gyroBiasX_gyroBiasX >= 0.0")
            } else if !((self.p_gyro_bias_x_gyro_bias_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_gyroBiasX_gyroBiasX.isFinite()")
            } else if !((self.p_gyro_bias_y_gyro_bias_y >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_gyroBiasY_gyroBiasY >= 0.0")
            } else if !((self.p_gyro_bias_y_gyro_bias_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_gyroBiasY_gyroBiasY.isFinite()")
            } else if !((self.p_gyro_bias_z_gyro_bias_z >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_gyroBiasZ_gyroBiasZ >= 0.0")
            } else if !((self.p_gyro_bias_z_gyro_bias_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_gyroBiasZ_gyroBiasZ.isFinite()")
            } else if !((self.p_accel_bias_x_accel_bias_x >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_accelBiasX_accelBiasX >= 0.0")
            } else if !((self.p_accel_bias_x_accel_bias_x).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_accelBiasX_accelBiasX.isFinite()")
            } else if !((self.p_accel_bias_y_accel_bias_y >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_accelBiasY_accelBiasY >= 0.0")
            } else if !((self.p_accel_bias_y_accel_bias_y).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_accelBiasY_accelBiasY.isFinite()")
            } else if !((self.p_accel_bias_z_accel_bias_z >= 0.0)) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_accelBiasZ_accelBiasZ >= 0.0")
            } else if !((self.p_accel_bias_z_accel_bias_z).is_finite()) {
                Some("[AP_NavEKF3::predict] postcondition violated: self.P_accelBiasZ_accelBiasZ.isFinite()")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

    /// Wrapper for event fuse_gps: pre-checks, runs impl, post-checks.
    /// Effects: Telemetry, LogRecord
    pub fn fuse_gps_wrapped<F>(
        &mut self,
        pos_x_gps: f64,
        pos_y_gps: f64,
        pos_z_gps: f64,
        vel_x_gps: f64,
        vel_y_gps: f64,
        vel_z_gps: f64,
        pos_err_m: f64,
        vel_err_m: f64,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, f64, f64, f64, f64, f64, f64, f64, f64) -> ()
    {
        if !((pos_err_m >= 0.0)) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posErrM >= 0.0");
        }
        if !((vel_err_m >= 0.0)) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velErrM >= 0.0");
        }
        if !((pos_x_gps).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posX_gps.isFinite()");
        }
        if !((pos_y_gps).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posY_gps.isFinite()");
        }
        if !((pos_z_gps).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posZ_gps.isFinite()");
        }
        if !((vel_x_gps).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velX_gps.isFinite()");
        }
        if !((vel_y_gps).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velY_gps.isFinite()");
        }
        if !((vel_z_gps).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velZ_gps.isFinite()");
        }
        if !((pos_err_m).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: posErrM.isFinite()");
        }
        if !((vel_err_m).is_finite()) {
            return Err("[AP_NavEKF3::fuse_gps] precondition violated: velErrM.isFinite()");
        }
        let __rollback = self.clone();
        impl_fn(self, pos_x_gps, pos_y_gps, pos_z_gps, vel_x_gps, vel_y_gps, vel_z_gps, pos_err_m, vel_err_m);
        let __violation: Option<&'static str> = 
            if !((((((self.q_0 * self.q_0) + (self.q_1 * self.q_1)) + (self.q_2 * self.q_2)) + (self.q_3 * self.q_3)) >= 0.99)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.q0*self.q0 + self.q1*self.q1 + self.q2*self.q2 + self.q3*self.q3 >= 0.99")
            } else if !((((((self.q_0 * self.q_0) + (self.q_1 * self.q_1)) + (self.q_2 * self.q_2)) + (self.q_3 * self.q_3)) <= 1.01)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.q0*self.q0 + self.q1*self.q1 + self.q2*self.q2 + self.q3*self.q3 <= 1.01")
            } else if !((self.q_0).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.q0.isFinite()")
            } else if !((self.q_1).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.q1.isFinite()")
            } else if !((self.q_2).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.q2.isFinite()")
            } else if !((self.q_3).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.q3.isFinite()")
            } else if !((self.vel_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.velX.isFinite()")
            } else if !((self.vel_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.velY.isFinite()")
            } else if !((self.vel_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.velZ.isFinite()")
            } else if !((self.pos_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.posX.isFinite()")
            } else if !((self.pos_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.posY.isFinite()")
            } else if !((self.pos_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.posZ.isFinite()")
            } else if !((self.gyro_bias_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.gyroBiasX.isFinite()")
            } else if !((self.gyro_bias_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.gyroBiasY.isFinite()")
            } else if !((self.gyro_bias_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.gyroBiasZ.isFinite()")
            } else if !((self.accel_bias_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.accelBiasX.isFinite()")
            } else if !((self.accel_bias_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.accelBiasY.isFinite()")
            } else if !((self.accel_bias_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.accelBiasZ.isFinite()")
            } else if !((self.p_q_0_q_0 >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q0_q0 >= 0.0")
            } else if !((self.p_q_0_q_0).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q0_q0.isFinite()")
            } else if !((self.p_q_1_q_1 >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q1_q1 >= 0.0")
            } else if !((self.p_q_1_q_1).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q1_q1.isFinite()")
            } else if !((self.p_q_2_q_2 >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q2_q2 >= 0.0")
            } else if !((self.p_q_2_q_2).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q2_q2.isFinite()")
            } else if !((self.p_q_3_q_3 >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q3_q3 >= 0.0")
            } else if !((self.p_q_3_q_3).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_q3_q3.isFinite()")
            } else if !((self.p_vel_x_vel_x >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_velX_velX >= 0.0")
            } else if !((self.p_vel_x_vel_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_velX_velX.isFinite()")
            } else if !((self.p_vel_y_vel_y >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_velY_velY >= 0.0")
            } else if !((self.p_vel_y_vel_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_velY_velY.isFinite()")
            } else if !((self.p_vel_z_vel_z >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_velZ_velZ >= 0.0")
            } else if !((self.p_vel_z_vel_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_velZ_velZ.isFinite()")
            } else if !((self.p_pos_x_pos_x >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_posX_posX >= 0.0")
            } else if !((self.p_pos_x_pos_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_posX_posX.isFinite()")
            } else if !((self.p_pos_y_pos_y >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_posY_posY >= 0.0")
            } else if !((self.p_pos_y_pos_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_posY_posY.isFinite()")
            } else if !((self.p_pos_z_pos_z >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_posZ_posZ >= 0.0")
            } else if !((self.p_pos_z_pos_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_posZ_posZ.isFinite()")
            } else if !((self.p_gyro_bias_x_gyro_bias_x >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_gyroBiasX_gyroBiasX >= 0.0")
            } else if !((self.p_gyro_bias_x_gyro_bias_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_gyroBiasX_gyroBiasX.isFinite()")
            } else if !((self.p_gyro_bias_y_gyro_bias_y >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_gyroBiasY_gyroBiasY >= 0.0")
            } else if !((self.p_gyro_bias_y_gyro_bias_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_gyroBiasY_gyroBiasY.isFinite()")
            } else if !((self.p_gyro_bias_z_gyro_bias_z >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_gyroBiasZ_gyroBiasZ >= 0.0")
            } else if !((self.p_gyro_bias_z_gyro_bias_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_gyroBiasZ_gyroBiasZ.isFinite()")
            } else if !((self.p_accel_bias_x_accel_bias_x >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_accelBiasX_accelBiasX >= 0.0")
            } else if !((self.p_accel_bias_x_accel_bias_x).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_accelBiasX_accelBiasX.isFinite()")
            } else if !((self.p_accel_bias_y_accel_bias_y >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_accelBiasY_accelBiasY >= 0.0")
            } else if !((self.p_accel_bias_y_accel_bias_y).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_accelBiasY_accelBiasY.isFinite()")
            } else if !((self.p_accel_bias_z_accel_bias_z >= 0.0)) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_accelBiasZ_accelBiasZ >= 0.0")
            } else if !((self.p_accel_bias_z_accel_bias_z).is_finite()) {
                Some("[AP_NavEKF3::fuse_gps] postcondition violated: self.P_accelBiasZ_accelBiasZ.isFinite()")
            } else {
                None
            };
        if let Some(__msg) = __violation {
            *self = __rollback;
            return Err(__msg);
        }
        Ok(())
    }

}



