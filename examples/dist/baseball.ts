// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TournamentCategory. Runtime: string. Compile-time: branded. */
export type TournamentCategoryId = string & { readonly __brand: "TournamentCategoryId" };
/** Identity type for Player. Runtime: string. Compile-time: branded. */
export type PlayerId = string & { readonly __brand: "PlayerId" };
/** Identity type for Team. Runtime: string. Compile-time: branded. */
export type TeamId = string & { readonly __brand: "TeamId" };
/** Identity type for Game. Runtime: string. Compile-time: branded. */
export type GameId = string & { readonly __brand: "GameId" };
/** Identity type for PitcherPerformance. Runtime: string. Compile-time: branded. */
export type PitcherPerformanceId = string & { readonly __brand: "PitcherPerformanceId" };
/** Identity type for TeamStanding. Runtime: string. Compile-time: branded. */
export type TeamStandingId = string & { readonly __brand: "TeamStandingId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TournamentCategory {
  readonly categoryId: TournamentCategoryId;
  readonly name: string;
  readonly inningsBase: number;
  readonly basesDistanceFt: number;
  readonly plateToLomaFt: number;
  readonly maxPitchesPerGame: number;
  readonly allowsCurve: boolean;
}

/** @stereotype <<Kind>> */
export interface Player {
  readonly playerId: PlayerId;
  readonly name: string;
  readonly birthYear: number;
}

/** @stereotype <<Kind>> */
export interface Team {
  readonly teamId: TeamId;
  readonly name: string;
  readonly leagueCategory: TournamentCategory;
}

/** @stereotype <<Role>> */
export interface HomeTeam {
  readonly teamId: string;
  readonly leagueCategory: TournamentCategory;
}

/** @stereotype <<Role>> */
export interface AwayTeam {
  readonly teamId: string;
  readonly leagueCategory: TournamentCategory;
}

/** @stereotype <<Relator>> */
export interface Game {
  readonly gameId: GameId;
  readonly leagueCategory: TournamentCategory;
  readonly homeTeam: HomeTeam;
  readonly awayTeam: AwayTeam;
  readonly status: string;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly isTie: boolean;
  readonly pitchers: ReadonlySet<Player>;
  readonly catchers: ReadonlySet<Player>;
}

/** @stereotype <<Relator>> */
export interface PitcherPerformance {
  readonly performanceId: PitcherPerformanceId;
  readonly pitchesThrown: number;
  readonly pitcher: Player;
  readonly game: Game;
}

/** @stereotype <<Kind>> */
export interface TeamStanding {
  readonly standingId: TeamStandingId;
  readonly team: Team;
  readonly wins: number;
  readonly losses: number;
  readonly pct: number;
}


// ─── Factory functions ───

export function makeTournamentCategory(data: {
  categoryId: string;
  name: string;
  inningsBase: number;
  basesDistanceFt: number;
  plateToLomaFt: number;
  maxPitchesPerGame: number;
  allowsCurve: boolean;
}): TournamentCategory {
  return {
    categoryId: data.categoryId as TournamentCategoryId,
    name: data.name,
    inningsBase: data.inningsBase,
    basesDistanceFt: data.basesDistanceFt,
    plateToLomaFt: data.plateToLomaFt,
    maxPitchesPerGame: data.maxPitchesPerGame,
    allowsCurve: data.allowsCurve,
  };
}

export function makePlayer(data: {
  playerId: string;
  name: string;
  birthYear: number;
}): Player {
  return {
    playerId: data.playerId as PlayerId,
    name: data.name,
    birthYear: data.birthYear,
  };
}

export function makeTeam(data: {
  teamId: string;
  name: string;
  leagueCategory: TournamentCategory;
}): Team {
  return {
    teamId: data.teamId as TeamId,
    name: data.name,
    leagueCategory: data.leagueCategory,
  };
}

export function makeGame(data: {
  gameId: string;
  leagueCategory: TournamentCategory;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  status: string;
  homeScore: number;
  awayScore: number;
  isTie: boolean;
  pitchers: ReadonlySet<Player>;
  catchers: ReadonlySet<Player>;
}): Game {
  return {
    gameId: data.gameId as GameId,
    leagueCategory: data.leagueCategory,
    homeTeam: data.homeTeam,
    awayTeam: data.awayTeam,
    status: data.status,
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    isTie: data.isTie,
    pitchers: data.pitchers,
    catchers: data.catchers,
  };
}

export function makePitcherPerformance(data: {
  performanceId: string;
  pitchesThrown: number;
  pitcher: Player;
  game: Game;
}): PitcherPerformance {
  return {
    performanceId: data.performanceId as PitcherPerformanceId,
    pitchesThrown: data.pitchesThrown,
    pitcher: data.pitcher,
    game: data.game,
  };
}

export function makeTeamStanding(data: {
  standingId: string;
  team: Team;
  wins: number;
  losses: number;
  pct: number;
}): TeamStanding {
  return {
    standingId: data.standingId as TeamStandingId,
    team: data.team,
    wins: data.wins,
    losses: data.losses,
    pct: data.pct,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for TournamentCategory. Returns empty array when valid. */
export function validateTournamentCategory(instance: TournamentCategory): readonly string[] {
  const violations: string[] = [];
  if (!((instance.categoryId !== null))) {
    violations.push("[TournamentCategory] invariant violated: self.categoryId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[TournamentCategory] invariant violated: self.name <> null");
  }
  if (!((instance.inningsBase > 0))) {
    violations.push("[TournamentCategory] invariant violated: self.inningsBase > 0");
  }
  if (!((instance.basesDistanceFt > 0))) {
    violations.push("[TournamentCategory] invariant violated: self.basesDistanceFt > 0.0");
  }
  if (!((instance.plateToLomaFt > 0))) {
    violations.push("[TournamentCategory] invariant violated: self.plateToLomaFt > 0.0");
  }
  if (!((instance.maxPitchesPerGame > 0))) {
    violations.push("[TournamentCategory] invariant violated: self.maxPitchesPerGame > 0");
  }
  return violations;
}

/** Runtime invariant check for Player. Returns empty array when valid. */
export function validatePlayer(instance: Player): readonly string[] {
  const violations: string[] = [];
  if (!((instance.playerId !== null))) {
    violations.push("[Player] invariant violated: self.playerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Player] invariant violated: self.name <> null");
  }
  if (!((instance.birthYear > 1900))) {
    violations.push("[Player] invariant violated: self.birthYear > 1900");
  }
  return violations;
}

/** Runtime invariant check for Team. Returns empty array when valid. */
export function validateTeam(instance: Team): readonly string[] {
  const violations: string[] = [];
  if (!((instance.teamId !== null))) {
    violations.push("[Team] invariant violated: self.teamId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Team] invariant violated: self.name <> null");
  }
  if (!((instance.leagueCategory !== null))) {
    violations.push("[Team] invariant violated: self.leagueCategory <> null");
  }
  return violations;
}

/** Runtime invariant check for Game. Returns empty array when valid. */
export function validateGame(instance: Game): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gameId !== null))) {
    violations.push("[Game] invariant violated: self.gameId <> null");
  }
  if (!((instance.leagueCategory !== null))) {
    violations.push("[Game] invariant violated: self.leagueCategory <> null");
  }
  if (!((instance.homeTeam !== null))) {
    violations.push("[Game] invariant violated: self.homeTeam <> null");
  }
  if (!((instance.awayTeam !== null))) {
    violations.push("[Game] invariant violated: self.awayTeam <> null");
  }
  if (!((instance.homeTeam?.leagueCategory === instance.leagueCategory))) {
    violations.push("[Game] invariant violated: self.homeTeam.leagueCategory = self.leagueCategory");
  }
  if (!((instance.awayTeam?.leagueCategory === instance.leagueCategory))) {
    violations.push("[Game] invariant violated: self.awayTeam.leagueCategory = self.leagueCategory");
  }
  if (!((instance.homeTeam?.teamId !== instance.awayTeam?.teamId))) {
    violations.push("[Game] invariant violated: self.homeTeam.teamId <> self.awayTeam.teamId");
  }
  if (!((instance.homeScore >= 0))) {
    violations.push("[Game] invariant violated: self.homeScore >= 0");
  }
  if (!((instance.awayScore >= 0))) {
    violations.push("[Game] invariant violated: self.awayScore >= 0");
  }
  if (!(Array.from(instance.pitchers).every((__x) => (!((instance.catchers).has(__x)))))) {
    violations.push("[Game] invariant violated: self.pitchers->forAll(p | not self.catchers->includes(p))");
  }
  return violations;
}

/** Runtime invariant check for PitcherPerformance. Returns empty array when valid. */
export function validatePitcherPerformance(instance: PitcherPerformance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.performanceId !== null))) {
    violations.push("[PitcherPerformance] invariant violated: self.performanceId <> null");
  }
  if (!((instance.pitcher !== null))) {
    violations.push("[PitcherPerformance] invariant violated: self.pitcher <> null");
  }
  if (!((instance.game !== null))) {
    violations.push("[PitcherPerformance] invariant violated: self.game <> null");
  }
  if (!((instance.pitchesThrown >= 0))) {
    violations.push("[PitcherPerformance] invariant violated: self.pitchesThrown >= 0");
  }
  if (!((instance.pitchesThrown <= instance.game?.leagueCategory?.maxPitchesPerGame))) {
    violations.push("[PitcherPerformance] invariant violated: self.pitchesThrown <= self.game.leagueCategory.maxPitchesPerGame");
  }
  return violations;
}

/** Runtime invariant check for TeamStanding. Returns empty array when valid. */
export function validateTeamStanding(instance: TeamStanding): readonly string[] {
  const violations: string[] = [];
  if (!((instance.standingId !== null))) {
    violations.push("[TeamStanding] invariant violated: self.standingId <> null");
  }
  if (!((instance.team !== null))) {
    violations.push("[TeamStanding] invariant violated: self.team <> null");
  }
  if (!((instance.wins >= 0))) {
    violations.push("[TeamStanding] invariant violated: self.wins >= 0");
  }
  if (!((instance.losses >= 0))) {
    violations.push("[TeamStanding] invariant violated: self.losses >= 0");
  }
  if (!((instance.pct === ((((instance.wins + instance.losses) > 0)) ? ((instance.wins / (instance.wins + instance.losses))) : (0))))) {
    violations.push("[TeamStanding] invariant violated: self.pct = (if (self.wins + self.losses) > 0 then (self.wins / (self.wins + self.losses)) else 0.0 endif)");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for Game.registerPitcher. User supplies this. */
export type GameRegisterPitcherImpl = (self: Game, p: Player) => { self: Game; modified: { pitchers: unknown } };

/** Contract-checking wrapper for Game.registerPitcher. */
export function wrapGameRegisterPitcher(impl: GameRegisterPitcherImpl): (self: Game, p: Player) => Game {
  return (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[Game.registerPitcher] pre violated: p <> null");
    }
    if (!((self.status === "LIVE"))) {
      preViolations.push("[Game.registerPitcher] pre violated: self.status = 'LIVE'");
    }
    if (!(!((self.catchers).has(p)))) {
      preViolations.push("[Game.registerPitcher] pre violated: not self.catchers->includes(p)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = impl(self, p);
    const postViolations: string[] = [];
    if (!((__result.self.pitchers).has(p))) {
      postViolations.push("[Game.registerPitcher] post violated: self.pitchers->includes(p)");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}

/** Impl signature for Game.registerPitcher (async). User supplies this. */
export type GameRegisterPitcherAsyncImpl = (self: Game, p: Player) => Promise<{ self: Game; modified: { pitchers: unknown } }>;

/** Contract-checking wrapper for Game.registerPitcher (async). */
export function wrapGameRegisterPitcherAsync(impl: GameRegisterPitcherAsyncImpl): (self: Game, p: Player) => Promise<Game> {
  return async (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[Game.registerPitcher] pre violated: p <> null");
    }
    if (!((self.status === "LIVE"))) {
      preViolations.push("[Game.registerPitcher] pre violated: self.status = 'LIVE'");
    }
    if (!(!((self.catchers).has(p)))) {
      preViolations.push("[Game.registerPitcher] pre violated: not self.catchers->includes(p)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = await impl(self, p);
    const postViolations: string[] = [];
    if (!((__result.self.pitchers).has(p))) {
      postViolations.push("[Game.registerPitcher] post violated: self.pitchers->includes(p)");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}

/** Impl signature for Game.registerCatcher. User supplies this. */
export type GameRegisterCatcherImpl = (self: Game, p: Player) => { self: Game; modified: { catchers: unknown } };

/** Contract-checking wrapper for Game.registerCatcher. */
export function wrapGameRegisterCatcher(impl: GameRegisterCatcherImpl): (self: Game, p: Player) => Game {
  return (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[Game.registerCatcher] pre violated: p <> null");
    }
    if (!((self.status === "LIVE"))) {
      preViolations.push("[Game.registerCatcher] pre violated: self.status = 'LIVE'");
    }
    if (!(!((self.pitchers).has(p)))) {
      preViolations.push("[Game.registerCatcher] pre violated: not self.pitchers->includes(p)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = impl(self, p);
    const postViolations: string[] = [];
    if (!((__result.self.catchers).has(p))) {
      postViolations.push("[Game.registerCatcher] post violated: self.catchers->includes(p)");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}

/** Impl signature for Game.registerCatcher (async). User supplies this. */
export type GameRegisterCatcherAsyncImpl = (self: Game, p: Player) => Promise<{ self: Game; modified: { catchers: unknown } }>;

/** Contract-checking wrapper for Game.registerCatcher (async). */
export function wrapGameRegisterCatcherAsync(impl: GameRegisterCatcherAsyncImpl): (self: Game, p: Player) => Promise<Game> {
  return async (self, p) => {
    const preViolations: string[] = [];
    if (!((p !== null))) {
      preViolations.push("[Game.registerCatcher] pre violated: p <> null");
    }
    if (!((self.status === "LIVE"))) {
      preViolations.push("[Game.registerCatcher] pre violated: self.status = 'LIVE'");
    }
    if (!(!((self.pitchers).has(p)))) {
      preViolations.push("[Game.registerCatcher] pre violated: not self.pitchers->includes(p)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = await impl(self, p);
    const postViolations: string[] = [];
    if (!((__result.self.catchers).has(p))) {
      postViolations.push("[Game.registerCatcher] post violated: self.catchers->includes(p)");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}

/** Impl signature for Game.completeGame. User supplies this. */
export type GameCompleteGameImpl = (self: Game, hScore: number, aScore: number) => { self: Game; modified: { homeScore: unknown; awayScore: unknown; status: unknown; isTie: unknown } };

/** Contract-checking wrapper for Game.completeGame. */
export function wrapGameCompleteGame(impl: GameCompleteGameImpl): (self: Game, hScore: number, aScore: number) => Game {
  return (self, hScore, aScore) => {
    const preViolations: string[] = [];
    if (!((self.status === "LIVE"))) {
      preViolations.push("[Game.completeGame] pre violated: self.status = 'LIVE'");
    }
    if (!((hScore >= 0))) {
      preViolations.push("[Game.completeGame] pre violated: hScore >= 0");
    }
    if (!((aScore >= 0))) {
      preViolations.push("[Game.completeGame] pre violated: aScore >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = impl(self, hScore, aScore);
    const postViolations: string[] = [];
    if (!((__result.self.homeScore === hScore))) {
      postViolations.push("[Game.completeGame] post violated: self.homeScore = hScore");
    }
    if (!((__result.self.awayScore === aScore))) {
      postViolations.push("[Game.completeGame] post violated: self.awayScore = aScore");
    }
    if (!((__result.self.status === "COMPLETED"))) {
      postViolations.push("[Game.completeGame] post violated: self.status = 'COMPLETED'");
    }
    if (!((__result.self.isTie === (hScore === aScore)))) {
      postViolations.push("[Game.completeGame] post violated: self.isTie = (hScore = aScore)");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}

/** Impl signature for Game.completeGame (async). User supplies this. */
export type GameCompleteGameAsyncImpl = (self: Game, hScore: number, aScore: number) => Promise<{ self: Game; modified: { homeScore: unknown; awayScore: unknown; status: unknown; isTie: unknown } }>;

/** Contract-checking wrapper for Game.completeGame (async). */
export function wrapGameCompleteGameAsync(impl: GameCompleteGameAsyncImpl): (self: Game, hScore: number, aScore: number) => Promise<Game> {
  return async (self, hScore, aScore) => {
    const preViolations: string[] = [];
    if (!((self.status === "LIVE"))) {
      preViolations.push("[Game.completeGame] pre violated: self.status = 'LIVE'");
    }
    if (!((hScore >= 0))) {
      preViolations.push("[Game.completeGame] pre violated: hScore >= 0");
    }
    if (!((aScore >= 0))) {
      preViolations.push("[Game.completeGame] pre violated: aScore >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = await impl(self, hScore, aScore);
    const postViolations: string[] = [];
    if (!((__result.self.homeScore === hScore))) {
      postViolations.push("[Game.completeGame] post violated: self.homeScore = hScore");
    }
    if (!((__result.self.awayScore === aScore))) {
      postViolations.push("[Game.completeGame] post violated: self.awayScore = aScore");
    }
    if (!((__result.self.status === "COMPLETED"))) {
      postViolations.push("[Game.completeGame] post violated: self.status = 'COMPLETED'");
    }
    if (!((__result.self.isTie === (hScore === aScore)))) {
      postViolations.push("[Game.completeGame] post violated: self.isTie = (hScore = aScore)");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}



