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

export interface CurseSpearMelee {
	used: number
	cursed: number
	killed: number
}

export interface CurseSpearThrown {
	used: number
	hits: number
	cursed: number
	killed: number
}

export interface CurseSpear {
	melee: CurseSpearMelee
	thrown: CurseSpearThrown
}

export interface Arrow {
	used: number
	hits: number
	kills: number
}

export interface StunGrenade {
	used: number
	hits: number
	hitTargets: number
}

export interface HolyStar {
	used: number
	killed: number
}

export interface Protection {
	used: number
	activated: number
	triggered: number
}

export interface SneakNotice {
	used: number
	triggered: number
}

export interface WerewolfAxe {
	used: number
	killed: number
}

export interface Items {
	steaksEaten: number
	ashUsed: number
	divinationUsed: number
	invisibilityUsed: number
	swiftnessUsed: number
	revelationUsed: number
	traitorsGuideUsed: number
	curseSpear: CurseSpear
	arrow: Arrow
	stunGrenade: StunGrenade
	holyStar: HolyStar
	protection: Protection
	sneakNotice: SneakNotice
	werewolfAxe: WerewolfAxe
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
	items: Items
}
