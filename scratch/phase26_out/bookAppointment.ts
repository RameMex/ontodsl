async function bookAppointment(__selfId: string, patientId: string, clinicianId: string, serviceName: string, windowStart: number, windowEnd: number, slotStart: number, slotEnd: number): Promise<boolean> {
  const violations: string[] = [];
  if (patientId == null) violations.push("patientId must not be null");
  if (clinicianId == null) violations.push("clinicianId must not be null");
  if (serviceName == null) violations.push("serviceName must not be null");
  if (slotStart < 0.0) violations.push("slotStart must be >= 0.0");
  if (slotEnd <= slotStart) violations.push("slotEnd must be > slotStart");
  if (slotStart < windowStart) violations.push("slotStart must be >= windowStart");
  if (slotEnd > windowEnd) violations.push("slotEnd must be <= windowEnd");
  if (violations.length > 0) throw new InvariantViolation("bookAppointment", violations);

  return db.transaction(async (tx) => {
    const conflict = await tx
      .select({ count: sql<number>`count(*)` })
      .from(appointments)
      .where(
        and(
          eq(appointments.clinicianId, clinicianId),
          eq(appointments.status, 'CONFIRMED'),
          sql`NOT (${slotEnd} <= ${appointments.slotStart} OR ${slotStart} >= ${appointments.slotEnd})`
        )
      )
      .execute();

    if (conflict[0].count > 0) return false;

    await tx.insert(appointments).values({
      appointmentId: randomUUID(),
      bookerId: __selfId,
      patientId,
      clinicianId,
      serviceName,
      slotStart,
      slotEnd,
      status: 'CONFIRMED'
    });

    return true;
  });
}