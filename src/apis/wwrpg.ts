import { Leaderboard } from '../types/leaderboard'
import { MatchOverview } from '../types/match'
import { PlayerOverview } from '../types/overview'

// TODO - port 8086
// match list
// match overview

/**
 * Fetches leaderboard information.
 * /api/leaderboard/<page>/<count>
 *
 * @param page Page number.
 * @param count Player entry count.
 * @returns Leaderboard
 */
export const getLeaderboard = (page: number = 1, count: number = 20): Promise<Leaderboard> => {
	return new Promise(resolve => {
		resolve({
			meta: {
				pageNumber: 1,
				totalPageNumber: 1,
				entries: 2
			},
			data: [
				{
					minecraftId: '14d659f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				}
			]
		})
	})
}

/**
 * Fetches WWRPG player information.
 * /api/stats/<minecraftId>
 *
 * @param minecraftId Player Minecraft id.
 * @returns Player overview stats.
 */
export const getPlayerStats = (minecraftId: string): Promise<PlayerOverview> => {
	return new Promise(resolve => {
		resolve({
			minecraftId: '14d659f1-d5e7-433a-b413-9d7364bfcf39',
			score: 3284,
			kills: 0,
			deaths: 0,
			gameStats: [
				{
					role: 'VILLAGER',
					data: {
						played: 1,
						victories: 1
					}
				},
				{
					role: 'WEREWOLF',
					data: {
						played: 1,
						victories: 1
					}
				},
				{
					role: 'TRAITOR',
					data: {
						played: 0,
						victories: 0
					}
				},
				{
					role: 'VAMPIRE',
					data: {
						played: 0,
						victories: 0
					}
				},
				{
					role: 'POSSESSED',
					data: {
						played: 0,
						victories: 0
					}
				}
			],
			skeletons: {
				killedBasicSkeletons: 0,
				killedLuckySkeletons: 0,
				killedSpecialSkeletons: 0,
				basicSkeletonEmeraldDrops: 0
			},
			items: {
				steaksEaten: 0,
				ashUsed: 0,
				divinationUsed: 0,
				invisibilityUsed: 0,
				swiftnessUsed: 0,
				revelationUsed: 0,
				traitorsGuideUsed: 0,
				curseSpear: {
					melee: {
						used: 0,
						cursed: 0,
						killed: 0
					},
					thrown: {
						used: 0,
						hits: 0,
						cursed: 0,
						killed: 0
					}
				},
				arrow: {
					used: 0,
					hits: 0,
					kills: 0
				},
				stunGrenade: {
					used: 0,
					hits: 0,
					hitTargets: 0
				},
				holyStar: {
					used: 0,
					killed: 0
				},
				protection: {
					used: 0,
					activated: 0,
					triggered: 0
				},
				sneakNotice: {
					used: 0,
					triggered: 0
				},
				werewolfAxe: {
					used: 0,
					killed: 0
				}
			}
		})
	})
}

/**
 * Fetches match history of a given player.
 * /api/match/player/<minecraftId>
 *
 * @param minecraftId Player Minecraft id.
 * @param page Page number.
 * @param count Match entry count.
 * @returns Player match history.
 */
export const getPlayerMatchHistory = (
	minecraftId: string,
	page: number = 1,
	count: number = 20
): Promise<MatchOverview[]> => {
	return new Promise(resolve => {
		resolve([
			{
				matchId: '153071e4-43e7-4f7d-bd68-35cfce2b8b3b',
				map: 'airship',
				startTime: 'May 16, 2023, 5:21:30 PM',
				endTime: 'May 16, 2023, 5:21:38 PM',
				endTrigger: 'Cancelled'
			},
			{
				matchId: '3c07f333-d5ca-4a45-ad90-7ed82e5b87cb',
				map: 'airship',
				startTime: 'May 16, 2023, 4:29:30 PM',
				endTime: 'May 16, 2023, 4:29:48 PM',
				endTrigger: 'Villager Victory'
			},
			{
				matchId: '5b3297df-a825-40eb-82ea-78e2ddbb85b7',
				map: 'airship',
				startTime: 'May 16, 2023, 5:17:15 PM',
				endTime: 'May 16, 2023, 5:18:11 PM',
				endTrigger: 'Villager Victory'
			},
			{
				matchId: 'c9a124ae-36e9-4d05-a216-0506f14f8fe3',
				map: 'airship',
				startTime: 'May 16, 2023, 5:18:19 PM',
				endTime: 'May 16, 2023, 5:19:42 PM',
				endTrigger: 'Villager Victory'
			}
		])
	})
}
