// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for TournamentCategory. Runtime: string. Compile-time: branded. */
export type TournamentCategoryId = string & { readonly __brand: "TournamentCategoryId" };
/** Identity type for Competition. Runtime: string. Compile-time: branded. */
export type CompetitionId = string & { readonly __brand: "CompetitionId" };
/** Identity type for Player. Runtime: string. Compile-time: branded. */
export type PlayerId = string & { readonly __brand: "PlayerId" };
/** Identity type for Team. Runtime: string. Compile-time: branded. */
export type TeamId = string & { readonly __brand: "TeamId" };
/** Identity type for Game. Runtime: string. Compile-time: branded. */
export type GameId = string & { readonly __brand: "GameId" };
/** Identity type for PitcherPerformance. Runtime: string. Compile-time: branded. */
export type PitcherPerformanceId = string & { readonly __brand: "PitcherPerformanceId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface TournamentCategory {
  readonly categoryId: TournamentCategoryId;
  readonly name: string;
  readonly minBirthYear: number;
  readonly maxBirthYear: number;
  readonly regulationInnings: number;
}

/** @stereotype <<Kind>> */
export interface Competition {
  readonly competitionId: CompetitionId;
  readonly name: string;
  readonly location: string;
  readonly isActive: boolean;
  readonly registrationFeeMxn: number;
  readonly monthlyFeeMxn: number;
  readonly taxRate: number;
}

/** @stereotype <<Kind>> */
export interface Player {
  readonly playerId: PlayerId;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthYear: number;
  readonly curp: string;
  readonly rfc: string;
  readonly isProfilePublic: boolean;
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
  readonly inningsPlayed: number;
  readonly year: number;
  readonly pitchers: ReadonlySet<Player>;
  readonly catchers: ReadonlySet<Player>;
}

/** @stereotype <<Relator>> */
export interface PitcherPerformance {
  readonly performanceId: PitcherPerformanceId;
  readonly pitchesThrown: number;
  readonly inningsPitched: number;
  readonly inningsCaught: number;
  readonly pitcher: Player;
  readonly game: Game;
}


// ─── Factory functions ───

export function makeTournamentCategory(data: {
  categoryId: string;
  name: string;
  minBirthYear: number;
  maxBirthYear: number;
  regulationInnings: number;
}): TournamentCategory {
  return {
    categoryId: data.categoryId as TournamentCategoryId,
    name: data.name,
    minBirthYear: data.minBirthYear,
    maxBirthYear: data.maxBirthYear,
    regulationInnings: data.regulationInnings,
  };
}

export function makeCompetition(data: {
  competitionId: string;
  name: string;
  location: string;
  isActive: boolean;
  registrationFeeMxn: number;
  monthlyFeeMxn: number;
  taxRate: number;
}): Competition {
  return {
    competitionId: data.competitionId as CompetitionId,
    name: data.name,
    location: data.location,
    isActive: data.isActive,
    registrationFeeMxn: data.registrationFeeMxn,
    monthlyFeeMxn: data.monthlyFeeMxn,
    taxRate: data.taxRate,
  };
}

export function makePlayer(data: {
  playerId: string;
  firstName: string;
  lastName: string;
  birthYear: number;
  curp: string;
  rfc: string;
  isProfilePublic: boolean;
}): Player {
  return {
    playerId: data.playerId as PlayerId,
    firstName: data.firstName,
    lastName: data.lastName,
    birthYear: data.birthYear,
    curp: data.curp,
    rfc: data.rfc,
    isProfilePublic: data.isProfilePublic,
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
  inningsPlayed: number;
  year: number;
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
    inningsPlayed: data.inningsPlayed,
    year: data.year,
    pitchers: data.pitchers,
    catchers: data.catchers,
  };
}

export function makePitcherPerformance(data: {
  performanceId: string;
  pitchesThrown: number;
  inningsPitched: number;
  inningsCaught: number;
  pitcher: Player;
  game: Game;
}): PitcherPerformance {
  return {
    performanceId: data.performanceId as PitcherPerformanceId,
    pitchesThrown: data.pitchesThrown,
    inningsPitched: data.inningsPitched,
    inningsCaught: data.inningsCaught,
    pitcher: data.pitcher,
    game: data.game,
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
  if (!((instance.minBirthYear > 1900))) {
    violations.push("[TournamentCategory] invariant violated: self.minBirthYear > 1900");
  }
  if (!((instance.maxBirthYear >= instance.minBirthYear))) {
    violations.push("[TournamentCategory] invariant violated: self.maxBirthYear >= self.minBirthYear");
  }
  if (!((instance.regulationInnings > 0))) {
    violations.push("[TournamentCategory] invariant violated: self.regulationInnings > 0");
  }
  return violations;
}

/** Runtime invariant check for Competition. Returns empty array when valid. */
export function validateCompetition(instance: Competition): readonly string[] {
  const violations: string[] = [];
  if (!((instance.competitionId !== null))) {
    violations.push("[Competition] invariant violated: self.competitionId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Competition] invariant violated: self.name <> null");
  }
  if (!((instance.location !== null))) {
    violations.push("[Competition] invariant violated: self.location <> null");
  }
  if (!((instance.isActive !== null))) {
    violations.push("[Competition] invariant violated: self.isActive <> null");
  }
  if (!((instance.registrationFeeMxn >= 0))) {
    violations.push("[Competition] invariant violated: self.registrationFeeMxn >= 0.0");
  }
  if (!((instance.monthlyFeeMxn >= 0))) {
    violations.push("[Competition] invariant violated: self.monthlyFeeMxn >= 0.0");
  }
  if (!((instance.taxRate >= 0))) {
    violations.push("[Competition] invariant violated: self.taxRate >= 0.0");
  }
  if (!((!((instance.location === "Tijuana")) || (instance.taxRate === 0.08)))) {
    violations.push("[Competition] invariant violated: not (self.location = 'Tijuana') or (self.taxRate = 0.08)");
  }
  return violations;
}

/** Runtime invariant check for Player. Returns empty array when valid. */
export function validatePlayer(instance: Player): readonly string[] {
  const violations: string[] = [];
  if (!((instance.playerId !== null))) {
    violations.push("[Player] invariant violated: self.playerId <> null");
  }
  if (!((instance.firstName !== null))) {
    violations.push("[Player] invariant violated: self.firstName <> null");
  }
  if (!((instance.lastName !== null))) {
    violations.push("[Player] invariant violated: self.lastName <> null");
  }
  if (!((instance.birthYear > 1900))) {
    violations.push("[Player] invariant violated: self.birthYear > 1900");
  }
  if (!((instance.isProfilePublic !== null))) {
    violations.push("[Player] invariant violated: self.isProfilePublic <> null");
  }
  if (!((!(instance.isProfilePublic) || ((instance.curp === null) && (instance.rfc === null))))) {
    violations.push("[Player] invariant violated: not self.isProfilePublic or (self.curp = null and self.rfc = null)");
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
  if (!((instance.status !== null))) {
    violations.push("[Game] invariant violated: self.status <> null");
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
  if (!((instance.inningsPlayed >= 0))) {
    violations.push("[Game] invariant violated: self.inningsPlayed >= 0");
  }
  if (!((instance.year > 2000))) {
    violations.push("[Game] invariant violated: self.year > 2000");
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
  if (!((instance.inningsPitched >= 0))) {
    violations.push("[PitcherPerformance] invariant violated: self.inningsPitched >= 0.0");
  }
  if (!((instance.inningsCaught >= 0))) {
    violations.push("[PitcherPerformance] invariant violated: self.inningsCaught >= 0");
  }
  if (!((!((instance.pitchesThrown > 41)) || (instance.inningsCaught === 0)))) {
    violations.push("[PitcherPerformance] invariant violated: not (self.pitchesThrown > 41) or (self.inningsCaught = 0)");
  }
  if (!((!((instance.inningsCaught >= 4)) || (instance.pitchesThrown === 0)))) {
    violations.push("[PitcherPerformance] invariant violated: not (self.inningsCaught >= 4) or (self.pitchesThrown = 0)");
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
export type GameCompleteGameImpl = (self: Game, hScore: number, aScore: number, inns: number) => { self: Game; modified: { homeScore: unknown; awayScore: unknown; inningsPlayed: unknown; status: unknown } };

/** Contract-checking wrapper for Game.completeGame. */
export function wrapGameCompleteGame(impl: GameCompleteGameImpl): (self: Game, hScore: number, aScore: number, inns: number) => Game {
  return (self, hScore, aScore, inns) => {
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
    if (!((inns > 0))) {
      preViolations.push("[Game.completeGame] pre violated: inns > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = impl(self, hScore, aScore, inns);
    const postViolations: string[] = [];
    if (!((__result.self.homeScore === hScore))) {
      postViolations.push("[Game.completeGame] post violated: self.homeScore = hScore");
    }
    if (!((__result.self.awayScore === aScore))) {
      postViolations.push("[Game.completeGame] post violated: self.awayScore = aScore");
    }
    if (!((__result.self.inningsPlayed === inns))) {
      postViolations.push("[Game.completeGame] post violated: self.inningsPlayed = inns");
    }
    if (!((__result.self.status === "COMPLETED"))) {
      postViolations.push("[Game.completeGame] post violated: self.status = 'COMPLETED'");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}

/** Impl signature for Game.completeGame (async). User supplies this. */
export type GameCompleteGameAsyncImpl = (self: Game, hScore: number, aScore: number, inns: number) => Promise<{ self: Game; modified: { homeScore: unknown; awayScore: unknown; inningsPlayed: unknown; status: unknown } }>;

/** Contract-checking wrapper for Game.completeGame (async). */
export function wrapGameCompleteGameAsync(impl: GameCompleteGameAsyncImpl): (self: Game, hScore: number, aScore: number, inns: number) => Promise<Game> {
  return async (self, hScore, aScore, inns) => {
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
    if (!((inns > 0))) {
      preViolations.push("[Game.completeGame] pre violated: inns > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __result = await impl(self, hScore, aScore, inns);
    const postViolations: string[] = [];
    if (!((__result.self.homeScore === hScore))) {
      postViolations.push("[Game.completeGame] post violated: self.homeScore = hScore");
    }
    if (!((__result.self.awayScore === aScore))) {
      postViolations.push("[Game.completeGame] post violated: self.awayScore = aScore");
    }
    if (!((__result.self.inningsPlayed === inns))) {
      postViolations.push("[Game.completeGame] post violated: self.inningsPlayed = inns");
    }
    if (!((__result.self.status === "COMPLETED"))) {
      postViolations.push("[Game.completeGame] post violated: self.status = 'COMPLETED'");
    }
    if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
    }
    return __result.self;
  };
}



