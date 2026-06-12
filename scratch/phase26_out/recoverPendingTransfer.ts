async function recoverPendingTransfer(__selfId: string, shouldComplete: boolean): Promise<void> {
  const system = await db
    .select()
    .from(onlineBankingSystems)
    .where(eq(onlineBankingSystems.systemId, __selfId))
    .limit(1)
    .then(rows => rows[0]);

  if (!system) {
    throw new InvariantViolation("recoverPendingTransfer", ["System not found"]);
  }
  if (system.transferState !== 'PENDING') {
    throw new InvariantViolation("recoverPendingTransfer", [`Expected transferState 'PENDING', got '${system.transferState}'`]);
  }
  if (system.pendingSourceBalance < 0.0) {
    throw new InvariantViolation("recoverPendingTransfer", [`pendingSourceBalance ${system.pendingSourceBalance} is negative`]);
  }
  if (system.pendingDestinationBalance < 0.0) {
    throw new InvariantViolation("recoverPendingTransfer", [`pendingDestinationBalance ${system.pendingDestinationBalance} is negative`]);
  }

  await db.transaction(async (tx) => {
    if (shouldComplete) {
      await tx
        .update(onlineBankingSystems)
        .set({
          transferState: 'COMPLETED',
          sourceBalance: sql`sourceBalance + ${system.pendingSourceBalance}`,
          destinationBalance: sql`destinationBalance + ${system.pendingDestinationBalance}`,
          pendingSourceBalance: 0.0,
          pendingDestinationBalance: 0.0,
        })
        .where(eq(onlineBankingSystems.systemId, __selfId));
    } else {
      await tx
        .update(onlineBankingSystems)
        .set({
          transferState: 'ROLLED_BACK',
          pendingSourceBalance: 0.0,
          pendingDestinationBalance: 0.0,
        })
        .where(eq(onlineBankingSystems.systemId, __selfId));
    }
  });
}