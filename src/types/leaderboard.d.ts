import { Rank } from './player'
import { Paginated } from './response'

export interface LeaderboardPlayerDto {
	minecraftId: string
	score: number
	ranking: number
	title: string
	gamesPlayed: number
	gamesWon: number
}

export interface LeaderboardPlayer {
	minecraftId: string
	username: string
	score: number
	rank: number
	title: Rank
	played: number
	won: number
}

export type LeaderboardDto = Paginated<LeaderboardPlayerDto>

export type Leaderboard = Paginated<LeaderboardPlayer>
