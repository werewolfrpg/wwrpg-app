import { Paginated } from './response'
import { Item, Skeletons, SkeletonsDto } from './player'
import { Faction, Role } from './faction'
import { Map } from './map'

export interface MatchDto {
	matchId: string
	map: string
	startTime: number
	endTime: number
	winnerFaction?: string
}

export interface Match {
	matchId: string
	map?: Map
	date: string
	time: string
	duration: string | number
	winner?: Faction
	state: string
}

export interface MatchPlayerDto {
	playerId: string
	matchId: string
	role: string
	result: string
	scoreGain: number
	kills: number
	deathCause?: string
	skeletons: SkeletonsDto
	items: Item[]
}

export interface MatchPlayer {
	minecraftId: string
	username: string
	matchId: string
	role: Role
	result: string
	score: number
	kills: number
	death?: string
	skeletons: Skeletons
	items: Item[]
}

export interface MatchTeam {
	faction: Faction
	players: MatchPlayer[]
}

export interface GameMatch {
	overview: Match
	teams: MatchTeam[]
}

export interface PlayerMatchDto extends MatchDto {
	role: string
	score: number
}

export interface PlayerMatch extends Match {
	role: Role
	score: number
}

export type DailyMatches<T extends Match = Match> = {
	date: string
	duration: string
	matches: T[]
}

export type MatchesDto = Paginated<MatchDto>

export type PlayerMatchesDto = Paginated<PlayerMatchDto>

export type Matches = Paginated<DailyMatches<Match>>

export type PlayerMatches = Paginated<DailyMatches<PlayerMatch>>
