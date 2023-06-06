import { Role, FactionStatistic, Faction } from './faction'

export interface GameStatsDto {
	role: string
	data: {
		played: number
		victories: number
	}
}

export interface SkeletonsDto {
	killedBasicSkeletons: number
	killedLuckySkeletons: number
	killedSpecialSkeletons: number
	basicSkeletonEmeraldDrops: number
}

export interface PlayerDto {
	minecraftId: string
	score: number
	ranking: number
	title: string
	nextTitle: string
	currentThreshold: number
	nextThreshold: number
	kills: number
	deaths: number
	gameStats: GameStatsDto[]
	skeletons: SkeletonsDto
	items: Item[]
}

export interface MatchStatistic {
	played: number
	won: number
}

export interface RoleStatistic extends MatchStatistic {
	role: Role
}

export interface FactionStatistic {
	faction: Faction
	roles: RoleStatistic[]
}

export interface Item {
	name: string
	stats: Record<string, string | number>
}

export interface Skeletons {
	emeralds: number
	killed: {
		basic: number
		special: number
		lucky: number
	}
}

export interface Score {
	current: number
	next: number
	progress: number
	difference: number
}

export interface Title {
	current: string
	next?: string
}

export interface PlayerStatistic {
	minecraftId: string
	username: string
	kills: number
	deaths: number
	rank: number
	score: Score
	title: Title
	matches: MatchStatistic
	skeletons: Skeletons
	factions: FactionStatistic[]
	items: Item[]
}
