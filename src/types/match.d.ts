import { Paginated } from './response'
import { Item, Skeletons, SkeletonsDto } from './player'

export interface MatchPlayer {
	minecraftId: string
	matchId: string
	role: string
	result: string
	score: number
	kills: number
	death?: string
	skeletons: Skeletons
	items: Item[]
}

export interface MatchDto {
	matchId: string
	map: string
	startTime: number
	endTime: number
	winner: string
}

export interface MatchDetailsDto {
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

export interface Match {
	matchId: string
	map: string
	date: string
	time: string
	duration: string
	winner: string
}

export interface PlayerMatch extends Match {
	role: string
	score: number
}

export type DailyMatches<T extends Match = Match> = {
	date: string
	matches: T[]
}

export type MatchesDto = Paginated<MatchDto>

export type Matches = Paginated<DailyMatches<Match>>

export type PlayerMatches = Paginated<DailyMatches<PlayerMatch>>
