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
	const { meta, data: matches } = {
		meta: {
			pageNumber: page,
			entries: 123,
			totalPageNumber: 23
		},
		data: [
			{
				matchId: '1',
				map: 'Map',
				startTime: '5/1/2023, 6:50:00 AM',
				endTime: '5/1/2023, 7:08:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '2',
				map: 'Map',
				startTime: '5/1/2023, 3:46:00 PM',
				endTime: '5/1/2023, 4:05:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '3',
				map: 'Map',
				startTime: '5/1/2023, 3:49:00 AM',
				endTime: '5/1/2023, 4:04:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '4',
				map: 'Map',
				startTime: '5/1/2023, 9:55:00 PM',
				endTime: '5/1/2023, 10:22:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '5',
				map: 'Map',
				startTime: '5/2/2023, 12:03:00 AM',
				endTime: '5/2/2023, 12:21:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '6',
				map: 'Map',
				startTime: '5/2/2023, 7:39:00 PM',
				endTime: '5/2/2023, 7:53:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '7',
				map: 'Map',
				startTime: '5/2/2023, 12:51:00 PM',
				endTime: '5/2/2023, 1:08:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '8',
				map: 'Map',
				startTime: '5/2/2023, 8:29:00 AM',
				endTime: '5/2/2023, 8:52:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '9',
				map: 'Map',
				startTime: '5/2/2023, 5:04:00 AM',
				endTime: '5/2/2023, 5:14:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '10',
				map: 'Map',
				startTime: '5/3/2023, 7:53:00 PM',
				endTime: '5/3/2023, 8:16:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '11',
				map: 'Map',
				startTime: '5/3/2023, 9:24:00 AM',
				endTime: '5/3/2023, 9:54:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '12',
				map: 'Map',
				startTime: '5/3/2023, 4:02:00 PM',
				endTime: '5/3/2023, 4:30:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '13',
				map: 'Map',
				startTime: '5/3/2023, 4:54:00 PM',
				endTime: '5/3/2023, 5:19:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '14',
				map: 'Map',
				startTime: '5/3/2023, 6:59:00 AM',
				endTime: '5/3/2023, 7:17:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '15',
				map: 'Map',
				startTime: '5/4/2023, 4:48:00 AM',
				endTime: '5/4/2023, 5:06:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '16',
				map: 'Map',
				startTime: '5/4/2023, 11:50:00 AM',
				endTime: '5/4/2023, 12:08:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '17',
				map: 'Map',
				startTime: '5/4/2023, 7:19:00 AM',
				endTime: '5/4/2023, 7:45:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '18',
				map: 'Map',
				startTime: '5/4/2023, 8:11:00 PM',
				endTime: '5/4/2023, 8:37:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '19',
				map: 'Map',
				startTime: '5/4/2023, 9:15:00 AM',
				endTime: '5/4/2023, 9:36:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '20',
				map: 'Map',
				startTime: '5/4/2023, 7:52:00 PM',
				endTime: '5/4/2023, 8:22:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '21',
				map: 'Map',
				startTime: '5/5/2023, 11:22:00 PM',
				endTime: '5/5/2023, 11:39:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '22',
				map: 'Map',
				startTime: '5/5/2023, 2:36:00 PM',
				endTime: '5/5/2023, 3:04:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '23',
				map: 'Map',
				startTime: '5/5/2023, 4:05:00 AM',
				endTime: '5/5/2023, 4:18:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '24',
				map: 'Map',
				startTime: '5/5/2023, 4:21:00 AM',
				endTime: '5/5/2023, 4:32:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '25',
				map: 'Map',
				startTime: '5/5/2023, 12:51:00 PM',
				endTime: '5/5/2023, 1:19:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '26',
				map: 'Map',
				startTime: '5/5/2023, 7:03:00 AM',
				endTime: '5/5/2023, 7:21:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '27',
				map: 'Map',
				startTime: '5/6/2023, 7:09:00 AM',
				endTime: '5/6/2023, 7:33:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '28',
				map: 'Map',
				startTime: '5/6/2023, 6:31:00 PM',
				endTime: '5/6/2023, 6:49:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '29',
				map: 'Map',
				startTime: '5/6/2023, 8:02:00 AM',
				endTime: '5/6/2023, 8:29:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '30',
				map: 'Map',
				startTime: '5/6/2023, 5:22:00 AM',
				endTime: '5/6/2023, 5:37:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '31',
				map: 'Map',
				startTime: '5/6/2023, 10:09:00 AM',
				endTime: '5/6/2023, 10:27:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '32',
				map: 'Map',
				startTime: '5/6/2023, 6:02:00 PM',
				endTime: '5/6/2023, 6:22:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '33',
				map: 'Map',
				startTime: '5/7/2023, 11:00:00 PM',
				endTime: '5/7/2023, 11:14:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '34',
				map: 'Map',
				startTime: '5/7/2023, 6:16:00 PM',
				endTime: '5/7/2023, 6:34:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '35',
				map: 'Map',
				startTime: '5/7/2023, 2:01:00 AM',
				endTime: '5/7/2023, 2:26:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '36',
				map: 'Map',
				startTime: '5/7/2023, 11:50:00 AM',
				endTime: '5/7/2023, 12:00:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '37',
				map: 'Map',
				startTime: '5/7/2023, 3:40:00 AM',
				endTime: '5/7/2023, 4:08:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '38',
				map: 'Map',
				startTime: '5/8/2023, 1:24:00 AM',
				endTime: '5/8/2023, 1:35:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '39',
				map: 'Map',
				startTime: '5/8/2023, 5:07:00 PM',
				endTime: '5/8/2023, 5:34:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '40',
				map: 'Map',
				startTime: '5/8/2023, 11:35:00 AM',
				endTime: '5/8/2023, 12:00:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '41',
				map: 'Map',
				startTime: '5/8/2023, 4:41:00 AM',
				endTime: '5/8/2023, 5:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '42',
				map: 'Map',
				startTime: '5/8/2023, 1:40:00 PM',
				endTime: '5/8/2023, 1:50:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '43',
				map: 'Map',
				startTime: '5/8/2023, 3:02:00 AM',
				endTime: '5/8/2023, 3:24:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '44',
				map: 'Map',
				startTime: '5/9/2023, 10:43:00 AM',
				endTime: '5/9/2023, 11:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '45',
				map: 'Map',
				startTime: '5/9/2023, 11:02:00 PM',
				endTime: '5/9/2023, 11:30:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '46',
				map: 'Map',
				startTime: '5/9/2023, 10:20:00 AM',
				endTime: '5/9/2023, 10:40:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '47',
				map: 'Map',
				startTime: '5/9/2023, 7:45:00 AM',
				endTime: '5/9/2023, 8:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '48',
				map: 'Map',
				startTime: '5/10/2023, 12:47:00 PM',
				endTime: '5/10/2023, 1:06:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '49',
				map: 'Map',
				startTime: '5/10/2023, 5:00:00 PM',
				endTime: '5/10/2023, 5:20:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '50',
				map: 'Map',
				startTime: '5/10/2023, 6:37:00 PM',
				endTime: '5/10/2023, 6:48:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '51',
				map: 'Map',
				startTime: '5/10/2023, 1:36:00 AM',
				endTime: '5/10/2023, 2:03:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '52',
				map: 'Map',
				startTime: '5/10/2023, 11:38:00 AM',
				endTime: '5/10/2023, 11:53:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '53',
				map: 'Map',
				startTime: '5/10/2023, 11:30:00 PM',
				endTime: '5/10/2023, 11:55:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '54',
				map: 'Map',
				startTime: '5/11/2023, 6:19:00 AM',
				endTime: '5/11/2023, 6:35:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '55',
				map: 'Map',
				startTime: '5/11/2023, 5:34:00 AM',
				endTime: '5/11/2023, 5:45:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '56',
				map: 'Map',
				startTime: '5/11/2023, 10:29:00 AM',
				endTime: '5/11/2023, 10:45:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '57',
				map: 'Map',
				startTime: '5/11/2023, 11:19:00 AM',
				endTime: '5/11/2023, 11:43:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '58',
				map: 'Map',
				startTime: '5/11/2023, 3:08:00 PM',
				endTime: '5/11/2023, 3:32:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '59',
				map: 'Map',
				startTime: '5/12/2023, 1:06:00 PM',
				endTime: '5/12/2023, 1:19:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '60',
				map: 'Map',
				startTime: '5/12/2023, 1:41:00 PM',
				endTime: '5/12/2023, 2:09:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '61',
				map: 'Map',
				startTime: '5/12/2023, 4:18:00 AM',
				endTime: '5/12/2023, 4:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '62',
				map: 'Map',
				startTime: '5/12/2023, 10:49:00 PM',
				endTime: '5/12/2023, 11:05:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '63',
				map: 'Map',
				startTime: '5/13/2023, 1:17:00 PM',
				endTime: '5/13/2023, 1:33:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '64',
				map: 'Map',
				startTime: '5/13/2023, 3:31:00 AM',
				endTime: '5/13/2023, 3:44:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '65',
				map: 'Map',
				startTime: '5/13/2023, 12:07:00 PM',
				endTime: '5/13/2023, 12:28:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '66',
				map: 'Map',
				startTime: '5/13/2023, 11:34:00 AM',
				endTime: '5/13/2023, 11:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '67',
				map: 'Map',
				startTime: '5/13/2023, 5:35:00 PM',
				endTime: '5/13/2023, 5:45:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '68',
				map: 'Map',
				startTime: '5/13/2023, 2:22:00 AM',
				endTime: '5/13/2023, 2:44:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '69',
				map: 'Map',
				startTime: '5/14/2023, 8:36:00 AM',
				endTime: '5/14/2023, 8:53:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '70',
				map: 'Map',
				startTime: '5/14/2023, 1:49:00 AM',
				endTime: '5/14/2023, 2:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '71',
				map: 'Map',
				startTime: '5/14/2023, 1:01:00 PM',
				endTime: '5/14/2023, 1:24:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '72',
				map: 'Map',
				startTime: '5/15/2023, 4:03:00 PM',
				endTime: '5/15/2023, 4:17:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '73',
				map: 'Map',
				startTime: '5/15/2023, 9:45:00 AM',
				endTime: '5/15/2023, 10:07:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '74',
				map: 'Map',
				startTime: '5/15/2023, 3:43:00 AM',
				endTime: '5/15/2023, 4:10:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '75',
				map: 'Map',
				startTime: '5/15/2023, 11:09:00 PM',
				endTime: '5/15/2023, 11:36:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '76',
				map: 'Map',
				startTime: '5/16/2023, 6:30:00 PM',
				endTime: '5/16/2023, 6:45:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '77',
				map: 'Map',
				startTime: '5/16/2023, 2:28:00 PM',
				endTime: '5/16/2023, 2:38:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '78',
				map: 'Map',
				startTime: '5/16/2023, 6:35:00 PM',
				endTime: '5/16/2023, 6:52:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '79',
				map: 'Map',
				startTime: '5/16/2023, 11:35:00 AM',
				endTime: '5/16/2023, 11:59:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '80',
				map: 'Map',
				startTime: '5/16/2023, 9:15:00 AM',
				endTime: '5/16/2023, 9:34:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '81',
				map: 'Map',
				startTime: '5/17/2023, 3:49:00 PM',
				endTime: '5/17/2023, 4:15:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '82',
				map: 'Map',
				startTime: '5/17/2023, 5:31:00 PM',
				endTime: '5/17/2023, 5:58:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '83',
				map: 'Map',
				startTime: '5/17/2023, 8:19:00 PM',
				endTime: '5/17/2023, 8:36:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '84',
				map: 'Map',
				startTime: '5/17/2023, 7:52:00 PM',
				endTime: '5/17/2023, 8:05:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '85',
				map: 'Map',
				startTime: '5/17/2023, 2:43:00 AM',
				endTime: '5/17/2023, 3:01:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '86',
				map: 'Map',
				startTime: '5/17/2023, 7:53:00 PM',
				endTime: '5/17/2023, 8:07:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '87',
				map: 'Map',
				startTime: '5/18/2023, 3:49:00 AM',
				endTime: '5/18/2023, 4:18:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '88',
				map: 'Map',
				startTime: '5/18/2023, 5:25:00 AM',
				endTime: '5/18/2023, 5:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '89',
				map: 'Map',
				startTime: '5/18/2023, 10:32:00 PM',
				endTime: '5/18/2023, 10:59:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '90',
				map: 'Map',
				startTime: '5/19/2023, 6:20:00 PM',
				endTime: '5/19/2023, 6:37:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '91',
				map: 'Map',
				startTime: '5/19/2023, 2:15:00 PM',
				endTime: '5/19/2023, 2:44:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '92',
				map: 'Map',
				startTime: '5/19/2023, 9:45:00 PM',
				endTime: '5/19/2023, 10:03:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '93',
				map: 'Map',
				startTime: '5/19/2023, 12:43:00 AM',
				endTime: '5/19/2023, 1:11:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '94',
				map: 'Map',
				startTime: '5/20/2023, 8:09:00 PM',
				endTime: '5/20/2023, 8:31:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '95',
				map: 'Map',
				startTime: '5/20/2023, 10:36:00 AM',
				endTime: '5/20/2023, 10:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '96',
				map: 'Map',
				startTime: '5/20/2023, 5:29:00 PM',
				endTime: '5/20/2023, 5:45:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '97',
				map: 'Map',
				startTime: '5/21/2023, 9:57:00 PM',
				endTime: '5/21/2023, 10:20:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '98',
				map: 'Map',
				startTime: '5/21/2023, 6:18:00 AM',
				endTime: '5/21/2023, 6:36:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '99',
				map: 'Map',
				startTime: '5/21/2023, 5:05:00 PM',
				endTime: '5/21/2023, 5:29:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '100',
				map: 'Map',
				startTime: '5/21/2023, 2:27:00 AM',
				endTime: '5/21/2023, 2:55:00 AM',
				winner: 'Winner'
			}
		]
	}

	// const { meta, data: matches } = res.data as any

	const data = Object.values(
		matches
			.map(({ matchId, map, startTime, endTime, winner }: any) => {
				const start = new Date(startTime)
				const end = new Date(endTime)
				const date = start.toLocaleString('en-us', { month: 'long', day: 'numeric' })
				const time = start.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' })

				const diff = end.getTime() - start.getTime()
				const hours = Math.floor(diff / (1000 * 60 * 60))
				const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
				const seconds = Math.floor((diff % (1000 * 60)) / 1000)

				let duration = ''
				if (hours > 0) {
					duration += hours + 'h '
				}
				if (minutes > 0) {
					duration += minutes + 'm '
				}
				if (seconds > 0) {
					duration += seconds + 's'
				}

				if (duration === '') {
					duration = 'Not played'
				}

				return { matchId, map, winner, duration, time, date }
			})
			.reduce((result: any[], match: any) => {
				const { date, ...matchData } = match
				if (!result[date]) {
					result[date] = {
						date,
						matches: []
					}
				}
				result[date].matches.push(matchData)
				return result
			}, {} as any)
	) as any

	return { meta, data }
}

export const getMatchHistory = async (page: number, count: number): Promise<MatchOverview> => {
	// const res = await axios.get(BASE_URL + '/api/matches')
	// const { meta, data: matches } = res.data

	// const data = Object.values(
	// 	matches
	// 		.map(({ matchId, map, startTime, endTime, winner }: any) => {
	// 			const start = new Date(startTime)
	// 			const end = new Date(endTime)
	// 			const date = start.toLocaleString('en-us', { month: 'long', day: 'numeric' })
	// 			const time = start.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' })

	// 			const diff = end.getTime() - start.getTime()
	// 			const hours = Math.floor(diff / (1000 * 60 * 60))
	// 			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
	// 			const seconds = Math.floor((diff % (1000 * 60)) / 1000)

	// 			let duration = ''
	// 			if (hours > 0) {
	// 				duration = hours + 'h ' + minutes + 'm ' + seconds + 's'
	// 			} else if (minutes > 0) {
	// 				duration = minutes + 'm ' + seconds + 's'
	// 			} else {
	// 				duration = seconds + 's'
	// 			}
	// 			return { matchId, map, winner, duration, time, date }
	// 		})
	// 		.reduce((result: any[], match: any) => {
	// 			const { date, ...matchData } = match
	// 			if (!result[date]) {
	// 				result[date] = {
	// 					date,
	// 					matches: []
	// 				}
	// 			}
	// 			result[date].matches.push(matchData)
	// 			return result
	// 		}, {} as any)
	// ) as any

	// return { meta, data }

	const { meta, data: matches } = {
		meta: {
			pageNumber: page,
			entries: 123,
			totalPageNumber: 23
		},
		data: [
			{
				matchId: '1',
				map: 'Map',
				startTime: '5/1/2023, 6:50:00 AM',
				endTime: '5/1/2023, 7:08:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '2',
				map: 'Map',
				startTime: '5/1/2023, 3:46:00 PM',
				endTime: '5/1/2023, 4:05:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '3',
				map: 'Map',
				startTime: '5/1/2023, 3:49:00 AM',
				endTime: '5/1/2023, 4:04:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '4',
				map: 'Map',
				startTime: '5/1/2023, 9:55:00 PM',
				endTime: '5/1/2023, 10:22:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '5',
				map: 'Map',
				startTime: '5/2/2023, 12:03:00 AM',
				endTime: '5/2/2023, 12:21:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '6',
				map: 'Map',
				startTime: '5/2/2023, 7:39:00 PM',
				endTime: '5/2/2023, 7:53:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '7',
				map: 'Map',
				startTime: '5/2/2023, 12:51:00 PM',
				endTime: '5/2/2023, 1:08:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '8',
				map: 'Map',
				startTime: '5/2/2023, 8:29:00 AM',
				endTime: '5/2/2023, 8:52:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '9',
				map: 'Map',
				startTime: '5/2/2023, 5:04:00 AM',
				endTime: '5/2/2023, 5:14:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '10',
				map: 'Map',
				startTime: '5/3/2023, 7:53:00 PM',
				endTime: '5/3/2023, 8:16:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '11',
				map: 'Map',
				startTime: '5/3/2023, 9:24:00 AM',
				endTime: '5/3/2023, 9:54:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '12',
				map: 'Map',
				startTime: '5/3/2023, 4:02:00 PM',
				endTime: '5/3/2023, 4:30:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '13',
				map: 'Map',
				startTime: '5/3/2023, 4:54:00 PM',
				endTime: '5/3/2023, 5:19:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '14',
				map: 'Map',
				startTime: '5/3/2023, 6:59:00 AM',
				endTime: '5/3/2023, 7:17:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '15',
				map: 'Map',
				startTime: '5/4/2023, 4:48:00 AM',
				endTime: '5/4/2023, 5:06:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '16',
				map: 'Map',
				startTime: '5/4/2023, 11:50:00 AM',
				endTime: '5/4/2023, 12:08:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '17',
				map: 'Map',
				startTime: '5/4/2023, 7:19:00 AM',
				endTime: '5/4/2023, 7:45:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '18',
				map: 'Map',
				startTime: '5/4/2023, 8:11:00 PM',
				endTime: '5/4/2023, 8:37:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '19',
				map: 'Map',
				startTime: '5/4/2023, 9:15:00 AM',
				endTime: '5/4/2023, 9:36:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '20',
				map: 'Map',
				startTime: '5/4/2023, 7:52:00 PM',
				endTime: '5/4/2023, 8:22:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '21',
				map: 'Map',
				startTime: '5/5/2023, 11:22:00 PM',
				endTime: '5/5/2023, 11:39:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '22',
				map: 'Map',
				startTime: '5/5/2023, 2:36:00 PM',
				endTime: '5/5/2023, 3:04:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '23',
				map: 'Map',
				startTime: '5/5/2023, 4:05:00 AM',
				endTime: '5/5/2023, 4:18:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '24',
				map: 'Map',
				startTime: '5/5/2023, 4:21:00 AM',
				endTime: '5/5/2023, 4:32:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '25',
				map: 'Map',
				startTime: '5/5/2023, 12:51:00 PM',
				endTime: '5/5/2023, 1:19:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '26',
				map: 'Map',
				startTime: '5/5/2023, 7:03:00 AM',
				endTime: '5/5/2023, 7:21:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '27',
				map: 'Map',
				startTime: '5/6/2023, 7:09:00 AM',
				endTime: '5/6/2023, 7:33:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '28',
				map: 'Map',
				startTime: '5/6/2023, 6:31:00 PM',
				endTime: '5/6/2023, 6:49:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '29',
				map: 'Map',
				startTime: '5/6/2023, 8:02:00 AM',
				endTime: '5/6/2023, 8:29:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '30',
				map: 'Map',
				startTime: '5/6/2023, 5:22:00 AM',
				endTime: '5/6/2023, 5:37:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '31',
				map: 'Map',
				startTime: '5/6/2023, 10:09:00 AM',
				endTime: '5/6/2023, 10:27:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '32',
				map: 'Map',
				startTime: '5/6/2023, 6:02:00 PM',
				endTime: '5/6/2023, 6:22:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '33',
				map: 'Map',
				startTime: '5/7/2023, 11:00:00 PM',
				endTime: '5/7/2023, 11:14:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '34',
				map: 'Map',
				startTime: '5/7/2023, 6:16:00 PM',
				endTime: '5/7/2023, 6:34:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '35',
				map: 'Map',
				startTime: '5/7/2023, 2:01:00 AM',
				endTime: '5/7/2023, 2:26:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '36',
				map: 'Map',
				startTime: '5/7/2023, 11:50:00 AM',
				endTime: '5/7/2023, 12:00:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '37',
				map: 'Map',
				startTime: '5/7/2023, 3:40:00 AM',
				endTime: '5/7/2023, 4:08:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '38',
				map: 'Map',
				startTime: '5/8/2023, 1:24:00 AM',
				endTime: '5/8/2023, 1:35:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '39',
				map: 'Map',
				startTime: '5/8/2023, 5:07:00 PM',
				endTime: '5/8/2023, 5:34:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '40',
				map: 'Map',
				startTime: '5/8/2023, 11:35:00 AM',
				endTime: '5/8/2023, 12:00:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '41',
				map: 'Map',
				startTime: '5/8/2023, 4:41:00 AM',
				endTime: '5/8/2023, 5:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '42',
				map: 'Map',
				startTime: '5/8/2023, 1:40:00 PM',
				endTime: '5/8/2023, 1:50:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '43',
				map: 'Map',
				startTime: '5/8/2023, 3:02:00 AM',
				endTime: '5/8/2023, 3:24:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '44',
				map: 'Map',
				startTime: '5/9/2023, 10:43:00 AM',
				endTime: '5/9/2023, 11:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '45',
				map: 'Map',
				startTime: '5/9/2023, 11:02:00 PM',
				endTime: '5/9/2023, 11:30:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '46',
				map: 'Map',
				startTime: '5/9/2023, 10:20:00 AM',
				endTime: '5/9/2023, 10:40:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '47',
				map: 'Map',
				startTime: '5/9/2023, 7:45:00 AM',
				endTime: '5/9/2023, 8:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '48',
				map: 'Map',
				startTime: '5/10/2023, 12:47:00 PM',
				endTime: '5/10/2023, 1:06:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '49',
				map: 'Map',
				startTime: '5/10/2023, 5:00:00 PM',
				endTime: '5/10/2023, 5:20:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '50',
				map: 'Map',
				startTime: '5/10/2023, 6:37:00 PM',
				endTime: '5/10/2023, 6:48:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '51',
				map: 'Map',
				startTime: '5/10/2023, 1:36:00 AM',
				endTime: '5/10/2023, 2:03:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '52',
				map: 'Map',
				startTime: '5/10/2023, 11:38:00 AM',
				endTime: '5/10/2023, 11:53:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '53',
				map: 'Map',
				startTime: '5/10/2023, 11:30:00 PM',
				endTime: '5/10/2023, 11:55:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '54',
				map: 'Map',
				startTime: '5/11/2023, 6:19:00 AM',
				endTime: '5/11/2023, 6:35:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '55',
				map: 'Map',
				startTime: '5/11/2023, 5:34:00 AM',
				endTime: '5/11/2023, 5:45:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '56',
				map: 'Map',
				startTime: '5/11/2023, 10:29:00 AM',
				endTime: '5/11/2023, 10:45:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '57',
				map: 'Map',
				startTime: '5/11/2023, 11:19:00 AM',
				endTime: '5/11/2023, 11:43:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '58',
				map: 'Map',
				startTime: '5/11/2023, 3:08:00 PM',
				endTime: '5/11/2023, 3:32:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '59',
				map: 'Map',
				startTime: '5/12/2023, 1:06:00 PM',
				endTime: '5/12/2023, 1:19:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '60',
				map: 'Map',
				startTime: '5/12/2023, 1:41:00 PM',
				endTime: '5/12/2023, 2:09:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '61',
				map: 'Map',
				startTime: '5/12/2023, 4:18:00 AM',
				endTime: '5/12/2023, 4:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '62',
				map: 'Map',
				startTime: '5/12/2023, 10:49:00 PM',
				endTime: '5/12/2023, 11:05:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '63',
				map: 'Map',
				startTime: '5/13/2023, 1:17:00 PM',
				endTime: '5/13/2023, 1:33:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '64',
				map: 'Map',
				startTime: '5/13/2023, 3:31:00 AM',
				endTime: '5/13/2023, 3:44:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '65',
				map: 'Map',
				startTime: '5/13/2023, 12:07:00 PM',
				endTime: '5/13/2023, 12:28:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '66',
				map: 'Map',
				startTime: '5/13/2023, 11:34:00 AM',
				endTime: '5/13/2023, 11:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '67',
				map: 'Map',
				startTime: '5/13/2023, 5:35:00 PM',
				endTime: '5/13/2023, 5:45:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '68',
				map: 'Map',
				startTime: '5/13/2023, 2:22:00 AM',
				endTime: '5/13/2023, 2:44:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '69',
				map: 'Map',
				startTime: '5/14/2023, 8:36:00 AM',
				endTime: '5/14/2023, 8:53:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '70',
				map: 'Map',
				startTime: '5/14/2023, 1:49:00 AM',
				endTime: '5/14/2023, 2:09:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '71',
				map: 'Map',
				startTime: '5/14/2023, 1:01:00 PM',
				endTime: '5/14/2023, 1:24:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '72',
				map: 'Map',
				startTime: '5/15/2023, 4:03:00 PM',
				endTime: '5/15/2023, 4:17:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '73',
				map: 'Map',
				startTime: '5/15/2023, 9:45:00 AM',
				endTime: '5/15/2023, 10:07:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '74',
				map: 'Map',
				startTime: '5/15/2023, 3:43:00 AM',
				endTime: '5/15/2023, 4:10:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '75',
				map: 'Map',
				startTime: '5/15/2023, 11:09:00 PM',
				endTime: '5/15/2023, 11:36:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '76',
				map: 'Map',
				startTime: '5/16/2023, 6:30:00 PM',
				endTime: '5/16/2023, 6:45:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '77',
				map: 'Map',
				startTime: '5/16/2023, 2:28:00 PM',
				endTime: '5/16/2023, 2:38:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '78',
				map: 'Map',
				startTime: '5/16/2023, 6:35:00 PM',
				endTime: '5/16/2023, 6:52:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '79',
				map: 'Map',
				startTime: '5/16/2023, 11:35:00 AM',
				endTime: '5/16/2023, 11:59:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '80',
				map: 'Map',
				startTime: '5/16/2023, 9:15:00 AM',
				endTime: '5/16/2023, 9:34:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '81',
				map: 'Map',
				startTime: '5/17/2023, 3:49:00 PM',
				endTime: '5/17/2023, 4:15:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '82',
				map: 'Map',
				startTime: '5/17/2023, 5:31:00 PM',
				endTime: '5/17/2023, 5:58:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '83',
				map: 'Map',
				startTime: '5/17/2023, 8:19:00 PM',
				endTime: '5/17/2023, 8:36:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '84',
				map: 'Map',
				startTime: '5/17/2023, 7:52:00 PM',
				endTime: '5/17/2023, 8:05:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '85',
				map: 'Map',
				startTime: '5/17/2023, 2:43:00 AM',
				endTime: '5/17/2023, 3:01:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '86',
				map: 'Map',
				startTime: '5/17/2023, 7:53:00 PM',
				endTime: '5/17/2023, 8:07:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '87',
				map: 'Map',
				startTime: '5/18/2023, 3:49:00 AM',
				endTime: '5/18/2023, 4:18:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '88',
				map: 'Map',
				startTime: '5/18/2023, 5:25:00 AM',
				endTime: '5/18/2023, 5:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '89',
				map: 'Map',
				startTime: '5/18/2023, 10:32:00 PM',
				endTime: '5/18/2023, 10:59:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '90',
				map: 'Map',
				startTime: '5/19/2023, 6:20:00 PM',
				endTime: '5/19/2023, 6:37:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '91',
				map: 'Map',
				startTime: '5/19/2023, 2:15:00 PM',
				endTime: '5/19/2023, 2:44:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '92',
				map: 'Map',
				startTime: '5/19/2023, 9:45:00 PM',
				endTime: '5/19/2023, 10:03:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '93',
				map: 'Map',
				startTime: '5/19/2023, 12:43:00 AM',
				endTime: '5/19/2023, 1:11:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '94',
				map: 'Map',
				startTime: '5/20/2023, 8:09:00 PM',
				endTime: '5/20/2023, 8:31:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '95',
				map: 'Map',
				startTime: '5/20/2023, 10:36:00 AM',
				endTime: '5/20/2023, 10:48:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '96',
				map: 'Map',
				startTime: '5/20/2023, 5:29:00 PM',
				endTime: '5/20/2023, 5:45:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '97',
				map: 'Map',
				startTime: '5/21/2023, 9:57:00 PM',
				endTime: '5/21/2023, 10:20:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '98',
				map: 'Map',
				startTime: '5/21/2023, 6:18:00 AM',
				endTime: '5/21/2023, 6:36:00 AM',
				winner: 'Winner'
			},
			{
				matchId: '99',
				map: 'Map',
				startTime: '5/21/2023, 5:05:00 PM',
				endTime: '5/21/2023, 5:29:00 PM',
				winner: 'Winner'
			},
			{
				matchId: '100',
				map: 'Map',
				startTime: '5/21/2023, 2:27:00 AM',
				endTime: '5/21/2023, 2:55:00 AM',
				winner: 'Winner'
			}
		]
	}

	const data = Object.values(
		matches
			.map(({ matchId, map, startTime, endTime, winner }) => {
				const start = new Date(startTime)
				const end = new Date(endTime)
				const date = start.toLocaleString('en-us', { month: 'long', day: 'numeric' })
				const time = start.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' })

				const diff = end.getTime() - start.getTime()
				const hours = Math.floor(diff / (1000 * 60 * 60))
				const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
				const seconds = Math.floor((diff % (1000 * 60)) / 1000)

				let duration = ''
				if (hours > 0) {
					duration += hours + 'h '
				}
				if (minutes > 0) {
					duration += minutes + 'm '
				}
				if (seconds > 0) {
					duration += seconds + 's'
				}
				return { matchId, map, winner, duration, time, date }
			})
			.reduce((result, match) => {
				const { date, ...matchData } = match
				if (!result[date]) {
					result[date] = {
						date,
						matches: []
					}
				}
				result[date].matches.push(matchData)
				return result
			}, {} as any)
	) as any

	return { meta, data }
}
