import { Meta } from './leaderboard'

export interface Match {
	matchId: string
	map: string
	date: string
	time: string
	duration: string
	winner: string
}

export interface DailyMatches {
	date: string
	matches: Match[]
}

export interface MatchOverview {
	meta: Meta
	data: DailyMatches[]
}
