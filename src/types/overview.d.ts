export interface GameStatsData {
	played: number
	victories: number
}

export interface GameStats {
	role: string
	data: GameStatsData
}

export interface Skeletons {
	killedBasicSkeletons: number
	killedLuckySkeletons: number
	killedSpecialSkeletons: number
	basicSkeletonEmeraldDrops: number
}

export interface Item {
	name: string
	stats: Record<string, string | number>
}

export interface PlayerOverview {
	minecraftId: string
	minecraftUsername: string
	kills: number
	deaths: number
	score: number
	currentThreshold: number
	nextThreshold: number
	ranking: number
	title: string
	nextTitle: string
	gameStats: GameStats[]
	skeletons: Skeletons
	items: Item[]
}
