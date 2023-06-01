import { SkeletonsDto } from './../types/player.d'
import {
	DailyMatches,
	MatchPlayerDto,
	MatchDto,
	Matches,
	MatchesDto,
	PlayerMatch,
	PlayerMatches,
	MatchPlayer
} from '../types/match'
import { Leaderboard, LeaderboardDto } from '../types/leaderboard'
import { PlayerDto, PlayerStatistic, Skeletons } from '../types/player'
import { Match } from '../types/match'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_WWRPG_BASE_URL

export const getLeaderboard = async (page: number = 1, count: number = 20): Promise<Leaderboard> => {
	const res = await axios.get(BASE_URL + '/api/leaderboard/?page=' + page + '&number=' + count)
	const { meta, data: players } = res.data as LeaderboardDto

	const data = players.map(player => ({
		username: player.minecraftUsername,
		rank: player.ranking,
		won: player.gamesWon,
		played: player.gamesPlayed,
		...player
	}))
	return { meta, data }

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({ meta, data })
	// 	}, 3000)
	// })
}

export const getPlayerStats = async (minecraftId: string): Promise<PlayerStatistic> => {
	const res = await axios.get(BASE_URL + '/api/stats/' + minecraftId)
	const data = res.data as PlayerDto

	const a = data.nextThreshold - data.currentThreshold
	const b = data.score - data.currentThreshold
	const score = {
		current: data.score,
		difference: a - b,
		progress: data.nextThreshold === -1 ? 100 : a / b
	}

	const skeletons = convertSkeletons(data.skeletons)

	const roles = data.gameStats
		.map(stat => ({
			name: stat.role,
			played: stat.data.played,
			won: stat.data.victories
		}))
		.sort((a, b) => a.played / a.won - b.played / b.won)

	const matches = {
		played: roles.reduce((sum, { played }) => sum + played, 0),
		won: roles.reduce((sum, { won }) => sum + won, 0)
	}

	const title = {
		current: data.title,
		next: data.nextTitle
	}

	return {
		minecraftId: data.minecraftId,
		username: data.minecraftUsername,
		rank: data.ranking,
		kills: data.kills,
		deaths: data.deaths,
		items: data.items,
		skeletons,
		matches,
		title,
		score,
		roles
	}
}

export const getPlayerMatchHistory = async (
	minecraftId: string,
	page: number = 1,
	count: number = 20
): Promise<PlayerMatches> => {
	const res = await axios.get(BASE_URL + '/api/match/player/' + minecraftId + '?page=' + page + '&number=' + count)
	const { meta, data: raw } = res.data as MatchesDto

	const matches: PlayerMatch[] = convertToMatches(raw).map(match => ({
		...match,
		role: 'WEREWOLF',
		score: 123
	}))

	const data = convertToDailyMatches<PlayerMatch>(matches)
	return { meta, data }
}

export const getMatchHistory = async (page: number = 1, count: number = 20): Promise<Matches> => {
	const res = await axios.get(BASE_URL + '/api/matches?page=' + page + '&number=' + count)
	const { meta, data: raw } = res.data as MatchesDto
	const data = convertToDailyMatches<Match>(convertToMatches(raw))
	return { meta, data }
}

export const getMatch = async (matchId: string): Promise<MatchPlayer[]> => {
	const res = await axios.get(BASE_URL + '/api/stats/match/' + matchId)
	const raw = res.data as MatchPlayerDto[]

	return raw.map(data => {
		const { playerId, scoreGain, deathCause, ...stats } = data
		const skeletons = convertSkeletons(data.skeletons)
		return { minecraftId: playerId, score: scoreGain, death: deathCause, ...stats, skeletons }
	})
}

const convertSkeletons = (skeletons: SkeletonsDto): Skeletons => {
	return {
		emeralds: skeletons.basicSkeletonEmeraldDrops + 2 * skeletons.killedLuckySkeletons,
		killed: {
			basic: skeletons.killedBasicSkeletons,
			lucky: skeletons.killedLuckySkeletons,
			special: skeletons.killedSpecialSkeletons
		}
	}
}

const convertToDailyMatches = <M extends Match>(matches: Match[]): DailyMatches<M>[] => {
	const dailyMatches: DailyMatches<M>[] = []

	const matchesByDate = matches.reduce((acc: any, match) => {
		const date = match.date
		acc[date] = acc[date] || []
		acc[date].push(match)
		return acc
	}, {})

	for (const date in matchesByDate) {
		if (matchesByDate.hasOwnProperty(date)) {
			const dailyMatch: DailyMatches<M> = {
				date,
				matches: matchesByDate[date]
			}
			dailyMatches.push(dailyMatch)
		}
	}
	return dailyMatches
}

const convertToMatches = (matches: MatchDto[]): Match[] => {
	const data: Match[] = []

	for (const { matchId, map, startTime, endTime, winner = 'CANCELED' } of matches) {
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

		data.push({ matchId, map, winner, duration, time, date })
	}
	return data
}
