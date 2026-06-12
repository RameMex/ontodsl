async function readSoCAndReserve(__selfId: string): Promise<number> {
  return db.transaction(async (tx) => {
    const [row] = await tx
      .select({ soc: batteryManagers.soc, safeReserveRatio: batteryManagers.safeReserveRatio })
      .from(batteryManagers)
      .where(eq(batteryManagers.managerId, __selfId))
      .limit(1);

    const result = row.soc;

    if (result < 0.0 || result > 1.0) {
      throw new InvariantViolation("readSoCAndReserve", ["Read SoC out of range"]);
    }

    await tx
      .update(batteryManagers)
      .set({ soc: result, lastReadAt: sql`(strftime('%s', 'now') * 1000)` })
      .where(eq(batteryManagers.managerId, __selfId));

    if (row.safeReserveRatio < 0.20) {
      throw new InvariantViolation("readSoCAndReserve", ["safeReserveRatio below 0.20"]);
    }

    return result;
  });
}