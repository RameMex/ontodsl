// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Server routes — one POST per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { z } from "zod";
import * as service from "../services/index.js";
import { InvariantViolation } from "../services/index.js";

type Handler = (body: unknown) => Promise<unknown>;

export const routes: Record<string, Handler> = {
  "POST /api/bracket-manager/fill-parent-slot": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.fillParentSlot();
  },
  "POST /api/bracket-manager/enable-parent-match": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enableParentMatch();
  },
  "POST /api/bracket-manager/reject-slot-already-filled": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectSlotAlreadyFilled();
  },
  "POST /api/bracket-manager/reject-match-not-playable": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectMatchNotPlayable();
  },
  "POST /api/match-scorer/record-match-score": async (body) => {
    const schema = z.object({
    playerAScore: z.number(),
    playerBScore: z.number()
    });
    const input = schema.parse(body);
    return await service.recordMatchScore(input.playerAScore, input.playerBScore);
  },
  "POST /api/player-tracker/reject-eliminated-player": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectEliminatedPlayer();
  },
  "POST /api/player-tracker/record-elimination": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.recordElimination();
  },
  "POST /api/player-tracker/reset-player-for-next-match": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetPlayerForNextMatch();
  },
  "POST /api/tournament-bracket-system/report-match-score": async (body) => {
    const schema = z.object({
    playerAScore: z.number(),
    playerBScore: z.number()
    });
    const input = schema.parse(body);
    return await service.reportMatchScore(input.playerAScore, input.playerBScore);
  },
  "POST /api/tournament-bracket-system/enable-parent-match": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enableParentMatch();
  },
  "POST /api/tournament-bracket-system/reset-player": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetPlayer();
  },
  "POST /api/tournament-bracket-system-formalized/reject-match-for-eliminated-player": async (body) => {
    const schema = z.object({
    playerAScore: z.number(),
    playerBScore: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectMatchForEliminatedPlayer(input.playerAScore, input.playerBScore);
  },
  "POST /api/tournament-bracket-system-formalized/reject-invalid-score": async (body) => {
    const schema = z.object({
    playerAScore: z.number(),
    playerBScore: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectInvalidScore(input.playerAScore, input.playerBScore);
  },
  "POST /api/tournament-bracket-system-formalized/reject-slot-already-filled": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectSlotAlreadyFilled();
  },
  "POST /api/tournament-bracket-system-formalized/reject-match-not-playable": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectMatchNotPlayable();
  },
  "POST /api/tournament-bracket-system-formalized/reject-data-access-after-retention-period": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectDataAccessAfterRetentionPeriod();
  },
};

export async function handle(method: string, path: string, body: unknown): Promise<{ status: number; body: unknown }> {
  const h = routes[`${method} ${path}`];
  if (!h) return { status: 404, body: { error: "not found" } };
  try {
    return { status: 200, body: await h(body) };
  } catch (e) {
    if (e instanceof InvariantViolation) {
      return { status: 422, body: { error: e.message, kind: "InvariantViolation", context: e.context, violations: e.violations } };
    }
    return { status: 500, body: { error: (e as Error).message } };
  }
}