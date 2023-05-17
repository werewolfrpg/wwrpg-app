import { Meta } from './leaderboard'

export interface Match {
	matchId: string
	map: string
	startTime: string
	endTime: string
	winner: string
}

export interface MatchOverview {
	meta: Meta
	data: Match[]
}
