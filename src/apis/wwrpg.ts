import { Leaderboard } from '../types/leaderboard'
import { MatchOverview } from '../types/match'
import { PlayerOverview } from '../types/overview'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_WWRPG_BASE_URL

/**
 * Fetches leaderboard information.
 * /api/leaderboard/<page>/<count>
 *
 * @param page Page number.
 * @param count Player entry count.
 * @returns Leaderboard
 */
export const getLeaderboard = async (
	page: number = 1,
	count: number = 20
): Promise<Leaderboard> => {
	return new Promise(resolve => {
		resolve({
			meta: {
				pageNumber: 1,
				totalPageNumber: 2,
				entries: 32
			},
			data: [
				{
					minecraftId: '14dv659f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9b-517d0a62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659fh1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-l9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d6g59f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-o4227-41f2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d65c9f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277cef-4227-41f2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d65v9f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41nf2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659if1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41fp2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-ld5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca2j77ce-4227-41f2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-4n33a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9ke9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-m433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9b-5017da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-433a-b413-9d7p364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9bm-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-433ba-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9jb-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-433as-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9de9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-433a-b413r-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca2w77ce-4227-41f2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d65a9f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9b-517da6c2c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d659f1-d5e7-433a-db413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277pce-4227-41f2-9e9b-517da62c2331',
					minecraftUsername: 'Than00ber',
					score: 15,
					rank: 'BEGINNER',
					gamesPlayed: 1,
					gamesWon: 1
				},
				{
					minecraftId: '14d65o9f1-d5e7-433a-b413-9d7364bfcf39',
					minecraftUsername: 'Aesten_',
					score: 3634,
					rank: 'LEGENDARY',
					gamesPlayed: 1,
					gamesWon: 0
				},
				{
					minecraftId: '5ca277ce-4227-41f2-9e9b-517da62c23i31',
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
export const getPlayerStats = async (minecraftId: string): Promise<PlayerOverview> => {
	return new Promise(resolve => {
		resolve({
			minecraftId: '14d659f1-d5e7-433a-b413-9d7364bfcf39',
			score: 3284,
			kills: 20,
			deaths: 9,
			gameStats: [
				{
					role: 'VILLAGER',
					data: {
						played: 30,
						victories: 12
					}
				},
				{
					role: 'WEREWOLF',
					data: {
						played: 23,
						victories: 20
					}
				},
				{
					role: 'TRAITOR',
					data: {
						played: 134,
						victories: 9
					}
				},
				{
					role: 'VAMPIRE',
					data: {
						played: 39,
						victories: 4
					}
				},
				{
					role: 'POSSESSED',
					data: {
						played: 12,
						victories: 1
					}
				}
			],
			skeletons: {
				killedBasicSkeletons: 43,
				killedLuckySkeletons: 10,
				killedSpecialSkeletons: 1,
				basicSkeletonEmeraldDrops: 30
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
export const getPlayerMatchHistory = async (
	minecraftId: string,
	page: number = 1,
	count: number = 20
): Promise<MatchOverview[]> => {
	return new Promise(resolve => {
		resolve([
			{
				matchId: '153071e4-43e7-4f7d-bd68-35cfce2b8b3b',
				map: 'airship',
				duration: '12m 32s',
				date: 'May 16, 2023, 5:21:30 PM',
				endTrigger: 'Cancelled'
			},
			{
				matchId: '3c07f333-d5ca-4a45-ad90-7ed82e5b87cb',
				map: 'airship',
				duration: '12m 32s',
				date: 'May 16, 2023, 4:29:30 PM',
				endTrigger: 'Villager Victory'
			},
			{
				matchId: '5b3297df-a825-40eb-82ea-78e2ddbb85b7',
				map: 'airship',
				duration: '12m 32s',
				date: 'May 16, 2023, 5:17:15 PM',
				endTrigger: 'Villager Victory'
			},
			{
				matchId: 'c9a124ae-36e9-4d05-a216-0506f14f8fe3',
				map: 'airship',
				duration: '12m 32s',
				date: 'May 16, 2023, 5:18:19 PM',
				endTrigger: 'Villager Victory'
			}
		])
	})
}
