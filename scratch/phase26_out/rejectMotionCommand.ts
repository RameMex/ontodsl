async function rejectMotionCommand(__selfId: string, commandId: string, commandType: string): Promise<void> {
  const failsafe = await db.select().from(failsafeStateManagers).where(eq(failsafeStateManagers.managerId, __selfId)).limit(1);
  if (!failsafe[0]?.isFailsafeActive) throw new InvariantViolation("rejectMotionCommand", ["self.isFailsafeActive violated"]);
  if (!failsafe[0]?.rejectionActive) throw new InvariantViolation("rejectMotionCommand", ["self.rejectionActive violated"]);
  if (commandId == null) throw new InvariantViolation("rejectMotionCommand", ["commandId <> null violated"]);
  if (commandType == null) throw new InvariantViolation("rejectMotionCommand", ["commandType <> null violated"]);

  await db.transaction(async (tx) => {
    await tx.insert(motionCommandRejections).values({
      id: randomUUID(),
      managerId: __selfId,
      commandId: commandId,
      commandType: commandType,
      rejectedAt: new Date(),
    });
    await tx.update(failsafeStateManagers)
      .set({ rejectedCommandCount: sql`${failsafeStateManagers.rejectedCommandCount} + 1` })
      .where(eq(failsafeStateManagers.managerId, __selfId));
  });
}