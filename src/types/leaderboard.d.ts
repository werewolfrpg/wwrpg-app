export interface Player {
	minecraftId: string
	minecraftUsername: string
	score: number
	ranking: string
	title: string
	gamesPlayed: number
	gamesWon: number
}

export interface Meta {
	pageNumber: number
	totalPageNumber: number
	entries: number
}

export interface LeaderboardOverview {
	meta: Meta
	data: Player[]
}
