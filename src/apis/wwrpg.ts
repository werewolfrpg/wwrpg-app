import { LeaderboardOverview } from '../types/leaderboard'
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
): Promise<LeaderboardOverview> => {
	const res = await axios.get(BASE_URL + '/api/leaderboard/?page=' + page + '&number=' + count)
	return res.data
}

/**
 * Fetches WWRPG player information.
 * /api/stats/<minecraftId>
 *
 * @param minecraftId Player Minecraft id.
 * @returns Player overview stats.
 */
export const getPlayerStats = async (minecraftId: string): Promise<PlayerOverview> => {
	const res = await axios.get(BASE_URL + '/api/stats/' + minecraftId)
	return res.data
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
): Promise<MatchOverview> => {
	const res = await axios.get(
		BASE_URL + '/api/match/player/' + minecraftId + '?page=' + page + '&number=' + count
	)
	return res.data
}
